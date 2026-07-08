#!/usr/bin/env node
// ==========================================================================
// SpoonLab — Batch Image Generation via DashScope (通义万相)
// Usage: node scripts/batch-generate-images.mjs
// ==========================================================================

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const IMAGE_DIR = path.join(ROOT, "public", "images", "recipes");
const PROMPTS_FILE = path.join(ROOT, "midjourney-batch-prompts.txt");

const API_KEY = process.env.DASHSCOPE_API_KEY || "sk-b6d4c0ea600b4771bc188ad57c8a1540";
const API_BASE = "https://dashscope.aliyuncs.com/api/v1";

// ── Recipe config (maps folder names to prompt groups) ──────────────────

const RECIPES = [
  { folder: "05-lemon-chicken",          steps: 5 },
  { folder: "06-turkey-lettuce-wraps",   steps: 5 },
  { folder: "07-teriyaki-salmon",         steps: 5 },
  { folder: "08-air-fryer-spring-rolls",  steps: 5 },
  { folder: "09-salt-pepper-wings",       steps: 4 },
  { folder: "10-corn-egg-drop-soup",      steps: 4 },
  { folder: "11-steamed-eggs",            steps: 5 },
  { folder: "12-five-spice-nuts",         steps: 3 },
  { folder: "13-rice-paper-dumplings",    steps: 5 },
  { folder: "14-egg-tomato-soup",         steps: 3 },
  { folder: "15-lions-head-meatballs",    steps: 6 },
  { folder: "16-three-cup-chicken",        steps: 6 },
  { folder: "17-braised-chicken-mushrooms", steps: 6 },
  { folder: "18-soy-braised-tofu-eggs",   steps: 5 },
  { folder: "19-braised-oxtail",          steps: 6 },
  { folder: "20-braised-pork-hock",       steps: 6 },
];

// ── Helpers ─────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createTask(prompt) {
  const res = await fetch(`${API_BASE}/services/aigc/text2image/image-synthesis`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "X-DashScope-Async": "enable",
    },
    body: JSON.stringify({
      model: "wanx-v1",
      input: { prompt },
      parameters: {
        size: "1024*1024",
        n: 1,
        prompt_extend: false,
      },
    }),
  });

  const data = await res.json();
  if (data.code) {
    throw new Error(`API error: ${data.code} - ${data.message}`);
  }
  return data.output.task_id;
}

async function waitForTask(taskId, maxWait = 120) {
  for (let i = 0; i < maxWait; i++) {
    await sleep(2000);
    const res = await fetch(`${API_BASE}/tasks/${taskId}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const data = await res.json();
    const status = data.output.task_status;

    if (status === "SUCCEEDED") {
      return data.output.results[0].url;
    }
    if (status === "FAILED") {
      throw new Error(`Task ${taskId} failed: ${JSON.stringify(data.output)}`);
    }
    process.stdout.write(".");
  }
  throw new Error(`Task ${taskId} timed out after ${maxWait * 2}s`);
}

async function downloadImage(url, filepath) {
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, buffer);
}

// ── Parse prompts from midjourney-batch-prompts.txt ──────────────────────

function parsePrompts() {
  const content = fs.readFileSync(PROMPTS_FILE, "utf-8");
  const lines = content.split("\n");
  const prompts = [];
  let currentRecipe = "";

  for (const line of lines) {
    if (line.startsWith("=== ") && line.endsWith(" ===")) {
      currentRecipe = line.replace(/^=== | ===$/g, "").trim();
      continue;
    }
    if (line.startsWith("/imagine ")) {
      prompts.push({
        recipe: currentRecipe,
        prompt: line.replace(/^\/imagine /, "").trim(),
      });
    }
  }
  return prompts;
}

// ── Main ────────────────────────────────────────────────────────────────

async function main() {
  console.log("SpoonLab — Batch Image Generator (通义万相)\n");

  // Parse only prompts for recipes 5-20
  const allPrompts = parsePrompts();
  const recipeNames = RECIPES.map((r) => {
    // Extract recipe name from folder (e.g., "05-lemon-chicken" → "5. Lemon Chicken")
    const num = r.folder.slice(0, 2);
    const name = r.folder.slice(3).replace(/-/g, " ");
    return `${parseInt(num)}. ${name.replace(/\b\w/g, (c) => c.toUpperCase())}`;
  });

  // Map prompts to recipes
  let promptIndex = 21; // Skip first 4 recipes (21 images already done)

  for (const recipe of RECIPES) {
    console.log(`\n📸 ${recipe.folder} (${recipe.steps} images)`);

    for (let step = 1; step <= recipe.steps; step++) {
      if (promptIndex >= allPrompts.length) {
        console.log("  ⚠️ No more prompts available");
        break;
      }

      const { prompt } = allPrompts[promptIndex];
      const filepath = path.join(IMAGE_DIR, recipe.folder, `step-${String(step).padStart(2, "0")}.png`);

      // Skip if already exists
      if (fs.existsSync(filepath)) {
        console.log(`  Step ${step}: ✅ already exists`);
        promptIndex++;
        continue;
      }

      try {
        console.log(`  Step ${step}: generating...`);
        const taskId = await createTask(prompt);
        process.stdout.write(`  Step ${step}: waiting`);
        const url = await waitForTask(taskId);
        await downloadImage(url, filepath);
        console.log(` ✅ saved`);
      } catch (err) {
        console.log(` ❌ ${err.message}`);
      }

      promptIndex++;
      // Rate limit: 1 request per 3 seconds
      await sleep(3000);
    }
  }

  console.log("\n✅ All done!");
  printStatus();
}

function printStatus() {
  console.log("\n📊 Status:");
  for (const recipe of RECIPES) {
    const dir = path.join(IMAGE_DIR, recipe.folder);
    const existing = fs.readdirSync(dir).filter((f) => f.endsWith(".png")).length;
    const icon = existing === recipe.steps ? "✅" : existing > 0 ? "🔄" : "⏳";
    console.log(`  ${icon} ${recipe.folder}: ${existing}/${recipe.steps}`);
  }
}

main().catch(console.error);
