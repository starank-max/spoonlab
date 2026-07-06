// ==========================================================================
// POST /api/ai/generate — AI recipe generation with rate limiting
// ==========================================================================

import { NextResponse } from "next/server";
import { generateRecipe } from "@/lib/ai";
import type { AIGenerateInput } from "@/lib/ai";

// ── Config ────────────────────────────────────────────────────────────────

const FREE_DAILY_LIMIT = 3;
const PAID_DAILY_LIMIT = 999;

// In-memory rate store (reset on restart). Replace with Upstash Redis in prod.
const dailyCounts = new Map<string, { count: number; date: string }>();

// ── Helpers ───────────────────────────────────────────────────────────────

function getRateLimitKey(userId: string): string {
  const today = new Date().toISOString().slice(0, 10);
  return `${userId}:${today}`;
}

function checkRateLimit(userId: string, tier: string) {
  const limit = tier === "free" ? FREE_DAILY_LIMIT : PAID_DAILY_LIMIT;
  const key = getRateLimitKey(userId);
  const entry = dailyCounts.get(key);
  if (!entry) {
    dailyCounts.set(key, { count: 0, date: new Date().toISOString().slice(0, 10) });
    return { allowed: true, remaining: limit, limit };
  }
  if (entry.count >= limit) return { allowed: false, remaining: 0, limit };
  return { allowed: true, remaining: limit - entry.count, limit };
}

function incrementRateLimit(userId: string) {
  const key = getRateLimitKey(userId);
  const entry = dailyCounts.get(key);
  if (entry) entry.count++;
  else dailyCounts.set(key, { count: 1, date: new Date().toISOString().slice(0, 10) });
}

// ── POST ──────────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body: AIGenerateInput & { userId?: string } = await request.json();
    const { ingredients, diet, tools, taste, cuisine } = body;

    if (!cuisine || !["chinese", "french", "spanish", "fusion"].includes(cuisine)) {
      return NextResponse.json({ error: "Valid cuisine required: chinese, french, spanish, fusion" }, { status: 400 });
    }

    // Auth (dev fallback)
    const userId = body.userId ?? "anonymous";
    const userTier = "free"; // prod: fetch from DB via session

    // Rate limit
    const { allowed, remaining, limit } = checkRateLimit(userId, userTier);
    if (!allowed) {
      return NextResponse.json({
        error: "Daily generation limit reached.",
        limit,
        remaining: 0,
        resetAt: new Date(new Date().setHours(24, 0, 0, 0)).toISOString(),
        upgradeUrl: "/premium",
      }, { status: 429 });
    }

    // Generate
    const recipe = await generateRecipe({
      ingredients: ingredients ?? [],
      diet: diet ?? [],
      tools: tools ?? [],
      taste: taste ?? [],
      cuisine: cuisine as AIGenerateInput["cuisine"],
    });

    incrementRateLimit(userId);

    // prod: await prisma.aIGeneration.create({ data: { userId, input: body, output: recipe } });

    return NextResponse.json({
      success: true,
      recipe,
      usage: { remaining: remaining - 1, limit, tier: userTier },
      id: `gen_${Date.now()}`,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[AI Generate]", error);
    const message = error instanceof Error ? error.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
