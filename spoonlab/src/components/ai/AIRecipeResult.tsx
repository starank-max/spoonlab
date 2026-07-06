"use client";

import type { AIRecipeOutput } from "@/lib/ai";
import { Badge, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Props {
  recipe: AIRecipeOutput;
  onRegenerate: () => void;
  onSave?: () => void;
}

export function AIRecipeResult({ recipe, onRegenerate, onSave }: Props) {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="bg-white rounded-xl border border-border shadow-md overflow-hidden animate-[slideUp_0.4s_ease]">
      {/* ── Hero ── */}
      <div className="aspect-[21/9] bg-gradient-to-br from-[#F3EAE0] via-[#E8D8C4] to-[#DDCBAD] flex items-center justify-center text-6xl relative">
        <span>🍽️</span>
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-azure text-xs font-bold px-3 py-1.5 rounded-full">✨ AI Generated</span>
      </div>

      {/* ── Body ── */}
      <div className="p-6 sm:p-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2">{recipe.title}</h2>
        <p className="text-stone text-sm sm:text-base mb-4 leading-relaxed">{recipe.description}</p>

        {/* Meta pills */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          <MetaPill>🕐 Prep {recipe.prepTime}m</MetaPill>
          <MetaPill>🔥 Cook {recipe.cookTime}m</MetaPill>
          <MetaPill>⏱️ Total {totalTime}m</MetaPill>
          <MetaPill>🍽️ Serves {recipe.servings}</MetaPill>
          <Badge variant={recipe.difficulty === "easy" ? "easy" : recipe.difficulty === "medium" ? "medium" : "hard"}>
            ● {recipe.difficulty}
          </Badge>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-saffron-light text-[#8B6914] text-xs font-semibold">
            ⚡ {recipe.nutrition.calories} kcal
          </span>
        </div>

        {/* ── Ingredients ── */}
        <h3 className="font-display text-lg font-bold mb-3">📋 Ingredients (Supermarket-Friendly)</h3>
        <div className="grid sm:grid-cols-2 gap-2 mb-6">
          {recipe.ingredients.map((ing, i) => (
            <div key={i} className="flex items-start gap-2.5 bg-cream rounded-md px-3.5 py-2.5 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-azure mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold">{ing.amountImperial}</span>{" "}
                <span className="text-charcoal">{ing.name}</span>
                {ing.notes && <span className="block text-[11px] text-stone italic mt-0.5">{ing.notes}</span>}
                {ing.supermarketTip && (
                  <span className="block text-[11px] text-sage mt-0.5">🛒 {ing.supermarketTip}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Steps ── */}
        <h3 className="font-display text-lg font-bold mb-3">👨‍🍳 Method</h3>
        <div className="space-y-3 mb-6">
          {recipe.steps.map((step) => (
            <div key={step.order} className="flex gap-3.5 bg-cream rounded-lg p-4">
              <span className="w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{step.order}</span>
              <div>
                <h4 className="font-semibold text-sm mb-1">{step.heading}</h4>
                <p className="text-sm text-charcoal leading-relaxed">{step.instruction}</p>
                {step.timerMinutes && (
                  <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-full bg-saffron-light text-[#8B6914] text-xs font-semibold">
                    ⏱️ {step.timerMinutes} min timer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Pro Tips ── */}
        {recipe.proTips.length > 0 && (
          <>
            <h3 className="font-display text-lg font-bold mb-3">💡 Pro Tips</h3>
            <div className="bg-saffron-light rounded-lg p-4 mb-6">
              <ul className="space-y-2">
                {recipe.proTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal leading-relaxed">
                    <span className="text-saffron mt-0.5">💡</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* ── Diet Adaptations ── */}
        {recipe.dietAdaptations.length > 0 && (
          <>
            <h3 className="font-display text-lg font-bold mb-3">🔬 Diet Adaptations</h3>
            <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
              {recipe.dietAdaptations.map((d, i) => (
                <div key={i} className="bg-sage-light rounded-lg px-4 py-3 text-sm">
                  <span className="font-semibold text-sage block mb-1">{d.label}</span>
                  <span className="text-charcoal leading-relaxed">{d.modifications}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── Nutrition ── */}
        <h3 className="font-display text-lg font-bold mb-3">📊 Nutrition (Per Serving)</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
          {[
            ["Calories", `${recipe.nutrition.calories}`],
            ["Protein", `${recipe.nutrition.protein}g`],
            ["Carbs", `${recipe.nutrition.carbs}g`],
            ["Fat", `${recipe.nutrition.fat}g`],
            ["Sodium", `${recipe.nutrition.sodium}mg`],
            ["Fiber", `${recipe.nutrition.fiber}g`],
          ].map(([label, val]) => (
            <div key={label} className="bg-cream rounded-md px-3 py-2.5 text-center">
              <div className="text-[11px] text-stone uppercase tracking-wide">{label}</div>
              <div className="font-bold text-sm">{val}</div>
            </div>
          ))}
        </div>

        {/* ── Actions ── */}
        <div className="flex items-center gap-3 flex-wrap pt-4 border-t border-border">
          <Button variant="primary" onClick={onSave ?? (() => alert("Recipe saved to My Collection!"))}>💾 Save Recipe</Button>
          <Button variant="outline" onClick={() => window.print()}>🖨️ Print</Button>
          <Button variant="ghost" onClick={onRegenerate}>🔄 Regenerate</Button>
        </div>
      </div>
    </div>
  );
}

function MetaPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-xs font-semibold text-charcoal">
      {children}
    </span>
  );
}
