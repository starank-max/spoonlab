// ==========================================================================
// POST /api/ai/swap-ingredient — AI ingredient substitution
// ==========================================================================

import { NextResponse } from "next/server";
import { COMMON_SWAPS } from "@/lib/measurements";
import { swapIngredient } from "@/lib/ai";

export async function POST(request: Request) {
  try {
    const { ingredient, swapGroup } = await request.json();

    if (!ingredient) {
      return NextResponse.json({ error: "Ingredient name is required." }, { status: 400 });
    }

    // Try static swap table first (instant, no API cost)
    const staticSwaps = COMMON_SWAPS[swapGroup];
    if (staticSwaps) {
      return NextResponse.json({
        ingredient,
        source: "database",
        alternatives: staticSwaps.map((name, i) => ({
          name,
          match: Math.round(95 - i * 7),
          ratio: "1:1",
          notes: i === 0 ? "Best match — widely available at Kroger, Tesco, Whole Foods" : "Good alternative",
        })),
      });
    }

    // Fallback to AI for uncommon ingredients
    if (process.env.OPENAI_API_KEY) {
      const result = await swapIngredient(ingredient, swapGroup ?? "general");
      return NextResponse.json({ ingredient, source: "ai", alternatives: result.alternatives });
    }

    // Generic fallback
    return NextResponse.json({
      ingredient,
      source: "fallback",
      alternatives: [
        { name: "Check international aisle at your supermarket", match: 90, ratio: "1:1", notes: "Most large supermarkets stock this in the Asian section" },
        { name: "Search for a similar ingredient by flavor profile", match: 70, ratio: "varies", notes: "Look for ingredients with a similar taste/texture role" },
        { name: "Try the recipe without this ingredient", match: 50, ratio: "omit", notes: "Many Chinese dishes are flexible — the dish will still work" },
      ],
    });
  } catch (error) {
    console.error("[AI Swap]", error);
    return NextResponse.json({ error: "Swap failed" }, { status: 500 });
  }
}
