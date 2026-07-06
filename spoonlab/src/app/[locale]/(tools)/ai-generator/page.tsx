"use client";

import Link from "next/link";
import { AIRecipeForm } from "@/components/ai/AIRecipeForm";
import { AIRecipeResult } from "@/components/ai/AIRecipeResult";
import { useAIGenerate } from "@/hooks/useAIGenerate";
import { Badge, Button } from "@/components/ui";
import type { AIGenerateInput } from "@/lib/ai";

export default function AIGeneratorPage() {
  const { status, recipe, error, usage, generate, reset } = useAIGenerate();

  function handleSubmit(input: AIGenerateInput) {
    generate(input);
  }

  function handleRegenerate() {
    reset();
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* ── Header ── */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-azure-light text-azure text-xs font-bold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-4">
            🤖 AI-Powered
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            What&apos;s in Your Kitchen?
          </h1>
          <p className="text-stone text-sm sm:text-base max-w-lg mx-auto">
            Tell us what you have, and AI creates a recipe adapted to your supermarket, your diet, and your tools — no grocery run required.
          </p>
        </div>

        {/* ── Usage meter (when idle/loading) ── */}
        {status !== "success" && (
          <div className="flex items-center justify-center gap-3 mb-6 text-sm text-stone">
            <span>3 free generations / day</span>
            <span className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
              <span className="block h-full bg-azure rounded-full" style={{ width: `${usage ? ((usage.limit - usage.remaining) / usage.limit) * 100 : 33}%` }} />
            </span>
            <Link href="/premium" className="text-terracotta font-semibold hover:underline text-xs">Upgrade →</Link>
          </div>
        )}

        {/* ── Error ── */}
        {status === "error" && (
          <div className="bg-chili-light text-chili rounded-lg p-4 mb-6 text-sm flex items-start justify-between">
            <div>
              <strong>Error:</strong> {error}
              {usage && usage.remaining === 0 && (
                <span className="block mt-1">Daily limit reached. <Link href="/premium" className="underline font-semibold">Upgrade to Premium</Link> for unlimited generations.</span>
              )}
            </div>
            <button onClick={reset} className="text-chili hover:underline flex-shrink-0 ml-4">&times; Dismiss</button>
          </div>
        )}

        {/* ── Form or Result ── */}
        {status === "success" && recipe ? (
          <div className="space-y-8">
            <AIRecipeResult recipe={recipe} onRegenerate={handleRegenerate} />
            {usage && (
              <p className="text-center text-xs text-stone">
                {usage.remaining} of {usage.limit} daily generations remaining ·{" "}
                {usage.tier === "free" && (
                  <Link href="/premium" className="text-terracotta font-semibold hover:underline">Unlock unlimited →</Link>
                )}
              </p>
            )}
          </div>
        ) : (
          <AIRecipeForm onSubmit={handleSubmit} isLoading={status === "loading"} />
        )}

        {/* ── Tips ── */}
        {status !== "success" && (
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "📝", title: "Be Specific", desc: "List 3-8 ingredients for the best results. Include proteins and vegetables." },
              { icon: "🔬", title: "Auto-Adapted", desc: "All recipes convert to oz/lb/cups and use supermarket-friendly substitutes." },
              { icon: "♾️", title: "Premium = Unlimited", desc: "Free = 3/day. Members generate unlimited recipes with priority AI." },
            ].map((t) => (
              <div key={t.title} className="bg-white rounded-lg border border-border p-4 text-center shadow-xs">
                <div className="text-2xl mb-2">{t.icon}</div>
                <h4 className="font-semibold text-sm mb-1">{t.title}</h4>
                <p className="text-xs text-stone leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
