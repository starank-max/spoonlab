// ==========================================================================
// SpoonLab AI — OpenAI prompt builder & API client
// ==========================================================================

// ── Types ────────────────────────────────────────────────────────────────

export interface AIGenerateInput {
  ingredients: string[];
  diet: string[];
  tools: string[];
  taste: string[];
  cuisine: "chinese" | "french" | "spanish" | "fusion";
}

export interface AIRecipeOutput {
  title: string;
  description: string;
  prepTime: number;       // minutes
  cookTime: number;       // minutes
  servings: number;
  difficulty: "easy" | "medium" | "hard";
  ingredients: {
    name: string;
    amountImperial: string;   // oz / lb / cups / tbsp / tsp
    amountMetric: string;     // g / ml
    notes?: string;
    supermarketTip?: string;  // where to find in Western grocery stores
  }[];
  steps: {
    order: number;
    heading: string;
    instruction: string;
    timerMinutes?: number | null;
  }[];
  proTips: string[];
  dietAdaptations: {
    label: string;           // "Gluten-Free" | "Vegan" | "Keto" | "Low-Fat"
    modifications: string;
  }[];
  nutrition: {
    calories: number;
    protein: number;      // grams
    carbs: number;        // grams
    fat: number;          // grams
    sodium: number;       // mg
    fiber: number;        // grams
  };
}

export interface AISwapOutput {
  ingredient: string;
  alternatives: {
    name: string;
    match: number;         // 0-100 confidence
    ratio: string;         // substitution ratio e.g. "1:1"
    notes: string;
  }[];
}

// ── System Prompt ─────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are SpoonLab's AI chef, a professional Chinese cuisine expert specializing in adapting authentic recipes for Western home kitchens.

CRITICAL RULES:
1. ALL ingredients must be available at standard US/EU supermarkets (Kroger, Tesco, Carrefour, ALDI, Whole Foods, Trader Joe's, Walmart). NO specialty Asian market items.
2. If an authentic Chinese ingredient is hard to find, ALWAYS substitute with widely available Western equivalents. Explain the substitution in the ingredient notes.
3. ALL measurements in BOTH imperial (oz, lb, cups, tbsp, tsp) AND metric (g, ml). Imperial listed FIRST.
4. NO wok required. Default to nonstick skillet, Dutch oven, sheet pan, or air fryer.
5. Mild-to-medium spice level by default. Sichuan peppercorns → "black pepper + coriander seed". Dried chilies → "adjust to taste; omit for mild".
6. Recipes must be home-cook friendly: ≤10 ingredients where possible, clear steps, timing estimates.
7. Every recipe must include pro tips for avoiding common mistakes and diet adaptation suggestions.

OUTPUT FORMAT (valid JSON only, no markdown wrapping):
{
  "title": "Dish name in English",
  "description": "1-2 sentence appetizing description",
  "prepTime": number,
  "cookTime": number,
  "servings": number,
  "difficulty": "easy" | "medium" | "hard",
  "ingredients": [
    {
      "name": "Common Western name",
      "amountImperial": "e.g. 1½ lb or 3 tbsp or 2 cups",
      "amountMetric": "e.g. 680 g or 45 ml or 475 ml",
      "notes": "prep note or supermarket substitution info",
      "supermarketTip": "which aisle to find it"
    }
  ],
  "steps": [
    {
      "order": 1,
      "heading": "Short action heading",
      "instruction": "Detailed step with visual cues (what to look for: color, sound, smell, texture)",
      "timerMinutes": null or number
    }
  ],
  "proTips": ["3-5 practical tips"],
  "dietAdaptations": [
    {
      "label": "Gluten-Free" or "Vegan" or "Keto" or "Low-Fat",
      "modifications": "Specific modifications"
    }
  ],
  "nutrition": {
    "calories": number,
    "protein": number,
    "carbs": number,
    "fat": number,
    "sodium": number,
    "fiber": number
  }
}

INGREDIENT SUBSTITUTION REFERENCE:
- Shaoxing wine → dry sherry (1:1) or apple juice + rice vinegar (non-alcoholic)
- Dark soy sauce → regular soy sauce + ½ tsp molasses per tbsp
- Chinkiang black vinegar → balsamic vinegar (1:1)
- Sichuan peppercorns → ½ black pepper + ¼ ground coriander seed
- Chinese chives → scallions + 1 minced garlic clove
- Oyster sauce → soy sauce + pinch sugar + mushroom stock
- Dried shiitake → fresh cremini or portobello mushrooms
- Bok choy → Swiss chard or baby spinach
- Lotus root → water chestnuts (canned) or jicama
- Five-spice powder → equal parts cinnamon, fennel, star anise, clove, black pepper`;

// ── User Prompt Builder ───────────────────────────────────────────────────

export function buildGeneratePrompt(input: AIGenerateInput): string {
  const parts: string[] = [];

  parts.push(`Create a ${input.cuisine.toUpperCase()} recipe with these constraints:`);

  // Ingredients
  if (input.ingredients.length > 0) {
    parts.push(`\nAVAILABLE INGREDIENTS: ${input.ingredients.join(", ")}`);
    parts.push(`(Build the recipe AROUND these. You may add 3-5 common pantry staples like soy sauce, garlic, oil, or cornstarch.)`);
  } else {
    parts.push(`\nNO specific ingredients provided. Choose a popular, beginner-friendly Chinese dish.`);
  }

  // Diet
  if (input.diet.length > 0 && !input.diet.includes("none")) {
    parts.push(`\nDIETARY RESTRICTIONS: ${input.diet.join(", ")}`);
    parts.push(`(The recipe MUST comply with ALL listed restrictions. Provide specific diet adaptations.)`);
  }

  // Tools
  if (input.tools.length > 0 && !input.tools.includes("any")) {
    const toolMap: Record<string, string> = {
      "wok": "Use a wok or large nonstick skillet",
      "air-fryer": "ADAPT ENTIRELY for air fryer. Specify temperature and time for air fryer method.",
      "instant-pot": "ADAPT for Instant Pot / pressure cooker. Specify pressure cook time and release method.",
      "oven": "ADAPT ENTIRELY for oven. Use sheet pan or Dutch oven. Specify oven temperature and rack position.",
      "microwave": "ADAPT for microwave cooking where possible",
      "one-pan": "MUST be a one-pan/skillet recipe. Minimize dishes.",
      "rice-cooker": "Include rice cooker usage if applicable",
      "no-special": "ZERO specialty equipment. Basic pots, pans, knives only.",
    };
    const toolInstructions = input.tools.map(t => toolMap[t] ?? t).filter(Boolean);
    if (toolInstructions.length > 0) {
      parts.push(`\nCOOKING TOOLS: ${toolInstructions.join(" | ")}`);
    }
  }

  // Taste
  if (input.taste.length > 0 && !input.taste.includes("any")) {
    parts.push(`\nTASTE PREFERENCE: ${input.taste.join(", ")}`);
  }

  parts.push(`\nREMEMBER: Western supermarket ingredients only. Imperial + metric measurements. No wok unless specified. Output valid JSON.`);

  return parts.join("\n");
}

// ── Swap Prompt Builder ────────────────────────────────────────────────────

export function buildSwapPrompt(ingredient: string, swapGroup: string): string {
  return `Suggest 3 supermarket-friendly substitutes for "${ingredient}" (category: ${swapGroup}) in Chinese cooking.

For each substitute, provide:
- name: Common Western supermarket name
- match: 0-100 confidence score (how well it preserves the original flavor/texture role)
- ratio: substitution ratio (e.g. "1:1" or "use ¾ of the amount")
- notes: What changes to expect in the final dish

Prioritize items found at Kroger, Tesco, Whole Foods, Trader Joe's, ALDI.

Output as JSON array: [{ "name": "...", "match": number, "ratio": "...", "notes": "..." }]`;
}

// ── OpenAI API Client ──────────────────────────────────────────────────────

interface OpenAIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface OpenAIResponse {
  choices: { message: { content: string } }[];
}

export async function callOpenAI(
  messages: OpenAIMessage[],
  options?: { temperature?: number; maxTokens?: number; jsonMode?: boolean }
): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    // Fallback: return mock data for development without API key
    console.warn("[AI] OPENAI_API_KEY not set — returning mock response");
    return JSON.stringify(getMockRecipe());
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages,
      temperature: options?.temperature ?? 0.8,
      max_tokens: options?.maxTokens ?? 2500,
      response_format: options?.jsonMode ? { type: "json_object" } : undefined,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI API error ${response.status}: ${error}`);
  }

  const data: OpenAIResponse = await response.json();
  return data.choices[0].message.content;
}

// ── Structured Recipe Generation ──────────────────────────────────────────

export async function generateRecipe(input: AIGenerateInput): Promise<AIRecipeOutput> {
  const userPrompt = buildGeneratePrompt(input);

  const raw = await callOpenAI(
    [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt },
    ],
    { temperature: 0.8, maxTokens: 3000, jsonMode: true }
  );

  // Parse and validate
  let parsed: AIRecipeOutput;
  try {
    parsed = JSON.parse(raw);
  } catch {
    // If JSON parse fails (e.g. markdown-wrapped), try to extract
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Failed to parse AI response as JSON");
    parsed = JSON.parse(jsonMatch[0]);
  }

  // Ensure required fields
  return {
    title: parsed.title ?? "Custom Chinese Dish",
    description: parsed.description ?? "An AI-generated recipe tailored to your ingredients and preferences.",
    prepTime: parsed.prepTime ?? 15,
    cookTime: parsed.cookTime ?? 20,
    servings: parsed.servings ?? 4,
    difficulty: parsed.difficulty ?? "easy",
    ingredients: parsed.ingredients ?? [],
    steps: parsed.steps ?? [],
    proTips: parsed.proTips ?? [],
    dietAdaptations: parsed.dietAdaptations ?? [],
    nutrition: parsed.nutrition ?? { calories: 400, protein: 25, carbs: 30, fat: 20, sodium: 600, fiber: 3 },
  };
}

// ── Ingredient Swap ────────────────────────────────────────────────────────

export async function swapIngredient(ingredient: string, swapGroup: string): Promise<AISwapOutput> {
  const prompt = buildSwapPrompt(ingredient, swapGroup);

  const raw = await callOpenAI(
    [
      { role: "system", content: "You are a food science expert specializing in ingredient substitutions. Output valid JSON only." },
      { role: "user", content: prompt },
    ],
    { temperature: 0.5, maxTokens: 600, jsonMode: true }
  );

  const alternatives = JSON.parse(raw);
  return { ingredient, alternatives: Array.isArray(alternatives) ? alternatives : [] };
}

// ── Mock Recipe (dev fallback when no API key) ─────────────────────────────

function getMockRecipe(): AIRecipeOutput {
  return {
    title: "Garlic Soy Chicken & Broccoli Stir-Fry",
    description: "A quick weeknight stir-fry built around your ingredients. Tender chicken, crisp broccoli, and a savory garlic-soy glaze — one skillet, 25 minutes, dinner solved.",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      { name: "Boneless skinless chicken thighs", amountImperial: "1½ lb", amountMetric: "680 g", notes: "cut into ¾-inch cubes", supermarketTip: "Meat aisle — thighs are juicier than breasts for stir-frying" },
      { name: "Broccoli florets", amountImperial: "3 cups", amountMetric: "270 g", notes: "fresh or frozen (thawed and patted dry)", supermarketTip: "Produce section or frozen vegetables aisle" },
      { name: "Soy sauce", amountImperial: "3 tbsp", amountMetric: "45 ml", notes: "use tamari for gluten-free", supermarketTip: "International aisle or condiments section" },
      { name: "Garlic", amountImperial: "4 cloves", amountMetric: "4 cloves", notes: "minced — don't use jarred for this", supermarketTip: "Produce section" },
      { name: "Fresh ginger", amountImperial: "1-inch piece", amountMetric: "2.5 cm", notes: "grated; sub ½ tsp ground ginger in a pinch", supermarketTip: "Produce section near garlic" },
      { name: "Honey", amountImperial: "1 tbsp", amountMetric: "15 ml", notes: "or maple syrup", supermarketTip: "Baking aisle or condiments" },
      { name: "Cornstarch", amountImperial: "2 tsp", amountMetric: "10 g", notes: "for velveting the chicken + thickening sauce", supermarketTip: "Baking aisle" },
      { name: "Vegetable oil", amountImperial: "2 tbsp", amountMetric: "30 ml", notes: "canola, avocado, or grapeseed — not olive oil", supermarketTip: "Oils aisle" },
      { name: "Scallions", amountImperial: "3 stalks", amountMetric: "3 stalks", notes: "sliced, whites and greens separated", supermarketTip: "Produce section — look near fresh herbs" },
    ],
    steps: [
      { order: 1, heading: "Prep & Marinate", instruction: "Toss chicken cubes with 1 tbsp soy sauce and 1 tsp cornstarch. Let sit 10 minutes at room temperature. This velveting step keeps the chicken silky-tender.", timerMinutes: 10 },
      { order: 2, heading: "Mix the Sauce", instruction: "In a small bowl, whisk remaining 2 tbsp soy sauce, honey, 1 tsp cornstarch, and 3 tbsp water until smooth. Set aside next to the stove.", timerMinutes: null },
      { order: 3, heading: "Sear the Chicken", instruction: "Heat 1 tbsp oil in a large nonstick skillet over high heat until shimmering (a drop of water should sizzle instantly). Add chicken in a single layer. Don't touch it for 45 seconds — let it develop a golden crust. Stir-fry 2-3 minutes until cooked through. Remove to a plate.", timerMinutes: 3 },
      { order: 4, heading: "Cook the Broccoli", instruction: "Add remaining 1 tbsp oil. Add broccoli and 2 tbsp water. Cover and steam 2 minutes. Uncover — water should be evaporated, broccoli bright green and crisp-tender.", timerMinutes: 2 },
      { order: 5, heading: "Combine & Glaze", instruction: "Add garlic, ginger, and scallion whites to the broccoli. Stir 30 seconds until fragrant. Return chicken to the pan. Pour sauce around the edges — it will sizzle and thicken. Toss everything for 1 minute until glossy and coated.", timerMinutes: 1 },
      { order: 6, heading: "Finish & Serve", instruction: "Remove from heat. Scatter scallion greens over the top. Serve immediately over steamed rice or cauliflower rice for a low-carb option.", timerMinutes: null },
    ],
    proTips: [
      "Dry your broccoli thoroughly after washing — wet broccoli steams instead of searing, and you'll lose that nice char.",
      "Don't skip the cornstarch marinade (Step 1). It's called velveting and it's the #1 secret to tender stir-fry meat at home.",
      "If the sauce gets too thick, add 1 tbsp water. Too thin? Simmer 30 seconds more — cornstarch needs heat to activate fully.",
      "Leftovers keep 3 days refrigerated. The sauce intensifies overnight — it's even better for lunch the next day.",
    ],
    dietAdaptations: [
      { label: "Gluten-Free", modifications: "Use tamari instead of soy sauce. Cornstarch is naturally gluten-free — verify your brand." },
      { label: "Low-Carb / Keto", modifications: "Replace honey with 2 drops liquid stevia or monk fruit sweetener. Serve over cauliflower rice instead of steamed rice." },
      { label: "Vegan", modifications: "Replace chicken with firm tofu (pressed 20 min, cubed). Use maple syrup instead of honey. Add 1 tbsp nutritional yeast to the sauce for umami depth." },
      { label: "Low-Sodium", modifications: "Use coconut aminos instead of soy sauce. Omit any added salt. The garlic and ginger provide enough flavor intensity." },
    ],
    nutrition: { calories: 380, protein: 34, carbs: 16, fat: 20, sodium: 620, fiber: 3 },
  };
}
