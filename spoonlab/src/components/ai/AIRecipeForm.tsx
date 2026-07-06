"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import type { AIGenerateInput } from "@/lib/ai";

// ── Option data ──────────────────────────────────────────────────────────

const DIET_OPTIONS = [
  { value: "none", label: "No Restrictions", icon: "✅" },
  { value: "gluten-free", label: "Gluten-Free", icon: "🌾" },
  { value: "keto", label: "Keto / Low-Carb", icon: "🥑" },
  { value: "vegan", label: "Vegan", icon: "🌱" },
  { value: "vegetarian", label: "Vegetarian", icon: "🥚" },
  { value: "nut-free", label: "Nut-Free", icon: "🥜" },
  { value: "dairy-free", label: "Dairy-Free", icon: "🥛" },
  { value: "low-sodium", label: "Low Sodium", icon: "🧂" },
  { value: "halal", label: "Halal", icon: "☪️" },
];

const TOOL_OPTIONS = [
  { value: "any", label: "Any Tools", icon: "🔧" },
  { value: "wok", label: "Wok", icon: "🔥" },
  { value: "air-fryer", label: "Air Fryer", icon: "♨️" },
  { value: "instant-pot", label: "Instant Pot", icon: "🍲" },
  { value: "oven", label: "Oven Only", icon: "🔲" },
  { value: "one-pan", label: "One Pan / Skillet", icon: "🫕" },
  { value: "rice-cooker", label: "Rice Cooker", icon: "🍚" },
  { value: "no-special", label: "No Special Tools", icon: "✋" },
];

const TASTE_OPTIONS = [
  { value: "any", label: "Surprise Me", icon: "🎲" },
  { value: "spicy", label: "Spicy", icon: "🌶️" },
  { value: "savory", label: "Savory / Umami", icon: "🧂" },
  { value: "sweet-sour", label: "Sweet & Sour", icon: "🍋" },
  { value: "garlicky", label: "Garlicky", icon: "🧄" },
  { value: "mild", label: "Mild / Light", icon: "🍃" },
  { value: "bold", label: "Bold / Intense", icon: "💥" },
  { value: "comfort", label: "Comfort Food", icon: "🫕" },
  { value: "crispy", label: "Crispy / Crunchy", icon: "✨" },
];

const CUISINE_OPTIONS = [
  { value: "chinese", label: "Chinese", icon: "🥡", active: true },
  { value: "fusion", label: "Fusion", icon: "🌏", active: true },
  { value: "french", label: "French", icon: "🥐", active: false },
  { value: "spanish", label: "Spanish", icon: "🥘", active: false },
];

// ── Ingredient Suggestions ────────────────────────────────────────────────

const SUGGESTIONS = [
  "Chicken breast", "Chicken thighs", "Ground pork", "Ground beef",
  "Shrimp", "Salmon", "Firm tofu", "Eggs",
  "Broccoli", "Bell pepper", "Onion", "Garlic", "Ginger",
  "Carrots", "Green beans", "Bok choy", "Mushrooms",
  "Rice", "Noodles", "Pasta", "Potatoes",
  "Soy sauce", "Coconut milk", "Tomato", "Corn",
];

// ── Chip Grid Sub-component ───────────────────────────────────────────────

function ChipGrid({
  options,
  selected,
  onToggle,
  multi,
  className,
}: {
  options: { value: string; label: string; icon: string }[];
  selected: string[];
  onToggle: (value: string) => void;
  multi: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((opt) => {
        const isSelected = selected.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onToggle(opt.value)}
            className={cn(
              "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13px] font-medium border transition-all duration-150",
              isSelected
                ? "bg-azure text-white border-azure shadow-sm"
                : "bg-white text-charcoal border-border hover:border-stone hover:bg-muted"
            )}
          >
            {opt.icon} {opt.label}
          </button>
        );
      })}
    </div>
  );
}

// ── Main Form Component ───────────────────────────────────────────────────

interface Props {
  onSubmit: (input: AIGenerateInput) => void;
  isLoading: boolean;
}

export function AIRecipeForm({ onSubmit, isLoading }: Props) {
  const [ingredients, setIngredients] = useState<string[]>(["Chicken breast", "Broccoli", "Garlic"]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [diet, setDiet] = useState<string[]>(["none"]);
  const [tools, setTools] = useState<string[]>(["any"]);
  const [taste, setTaste] = useState<string[]>(["any"]);
  const [cuisine, setCuisine] = useState<string>("chinese");

  // ── Ingredient handlers ────────────────────────────────────────────────
  function addIngredient(name: string) {
    const normalized = name.trim();
    if (!normalized) return;
    if (ingredients.find((i) => i.toLowerCase() === normalized.toLowerCase())) return;
    setIngredients((prev) => [...prev, normalized]);
    setIngredientInput("");
  }

  function removeIngredient(idx: number) {
    setIngredients((prev) => prev.filter((_, i) => i !== idx));
  }

  function handleIngredientKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addIngredient(ingredientInput.replace(/,/g, ""));
    }
    if (e.key === "Backspace" && ingredientInput === "" && ingredients.length > 0) {
      setIngredients((prev) => prev.slice(0, -1));
    }
  }

  // ── Chip toggles ───────────────────────────────────────────────────────
  function toggleChip(setter: React.Dispatch<React.SetStateAction<string[]>>, value: string, isExclusive: boolean) {
    setter((prev) => {
      if (isExclusive) return [value];
      // Remove exclusive value if present
      const cleaned = prev.filter((v) => v !== "none" && v !== "any");
      if (cleaned.includes(value)) {
        const next = cleaned.filter((v) => v !== value);
        return next.length === 0 ? (isExclusive ? [value] : ["none"]) : next;
      }
      return [...cleaned, value];
    });
  }

  // ── Submit ──────────────────────────────────────────────────────────────
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (ingredients.length === 0 || isLoading) return;
    onSubmit({ ingredients, diet, tools, taste, cuisine: cuisine as AIGenerateInput["cuisine"] });
  }

  const isValid = ingredients.length > 0 && !isLoading;

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border shadow-sm p-6 sm:p-8 space-y-7">
      {/* ── Section 1: Ingredients ── */}
      <section>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-9 h-9 rounded-md bg-saffron-light flex items-center justify-center text-lg">🥬</span>
          <h3 className="font-semibold text-base">Your Ingredients</h3>
        </div>
        {/* Tag input */}
        <div
          className="flex flex-wrap items-center gap-2 p-3 rounded-lg border border-border bg-cream min-h-[48px] cursor-text transition-colors focus-within:border-azure focus-within:bg-white"
          onClick={() => document.getElementById("ingredientInput")?.focus()}
        >
          {ingredients.map((ing, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-azure-light text-azure text-[13px] font-medium animate-[tagIn_0.2s_ease]">
              {ing}
              <button type="button" onClick={() => removeIngredient(i)} className="w-4 h-4 rounded-full flex items-center justify-center hover:bg-azure hover:text-white transition-colors text-xs leading-none">&times;</button>
            </span>
          ))}
          <input
            id="ingredientInput"
            type="text"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            onKeyDown={handleIngredientKeyDown}
            placeholder={ingredients.length === 0 ? "Type an ingredient and press Enter…" : "Add more…"}
            className="flex-1 min-w-[140px] border-none bg-transparent text-sm outline-none py-1 px-1 font-sans placeholder:text-stone"
          />
        </div>
        {/* Suggestions */}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          <span className="text-[11px] text-stone px-1 py-1">Suggestions:</span>
          {SUGGESTIONS.slice(0, 12).map((s) => (
            <button key={s} type="button" onClick={() => addIngredient(s)} className="text-[11px] px-2.5 py-1 rounded-full border border-border text-stone hover:bg-azure-light hover:text-azure hover:border-azure-light transition-colors">{s}</button>
          ))}
        </div>
      </section>

      {/* ── Section 2: Diet ── */}
      <section>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-9 h-9 rounded-md bg-sage-light flex items-center justify-center text-lg">🥗</span>
          <h3 className="font-semibold text-base">Diet Restrictions <span className="text-stone font-normal text-xs">(optional)</span></h3>
        </div>
        <ChipGrid options={DIET_OPTIONS} selected={diet} onToggle={(v) => toggleChip(setDiet, v, v === "none")} multi />
      </section>

      {/* ── Section 3: Tools ── */}
      <section>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-9 h-9 rounded-md bg-terracotta-light flex items-center justify-center text-lg">🍳</span>
          <h3 className="font-semibold text-base">Cooking Tools <span className="text-stone font-normal text-xs">(optional)</span></h3>
        </div>
        <ChipGrid options={TOOL_OPTIONS} selected={tools} onToggle={(v) => toggleChip(setTools, v, v === "any")} multi />
      </section>

      {/* ── Section 4: Taste ── */}
      <section>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-9 h-9 rounded-md bg-azure-light flex items-center justify-center text-lg">👅</span>
          <h3 className="font-semibold text-base">Taste Preference <span className="text-stone font-normal text-xs">(optional)</span></h3>
        </div>
        <ChipGrid options={TASTE_OPTIONS} selected={taste} onToggle={(v) => toggleChip(setTaste, v, v === "any")} multi />
      </section>

      {/* ── Section 5: Cuisine ── */}
      <section>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-9 h-9 rounded-md bg-saffron-light flex items-center justify-center text-lg">🌍</span>
          <h3 className="font-semibold text-base">Cuisine</h3>
        </div>
        <div className="flex gap-2.5 flex-wrap">
          {CUISINE_OPTIONS.map((c) => (
            <button
              key={c.value}
              type="button"
              disabled={!c.active}
              onClick={() => c.active && setCuisine(c.value)}
              className={cn(
                "flex-1 min-w-[90px] px-4 py-3 rounded-lg border text-center transition-all",
                cuisine === c.value && c.active
                  ? "border-azure bg-azure-light"
                  : c.active
                    ? "border-border bg-white hover:border-stone"
                    : "border-border bg-white/50 opacity-50 cursor-not-allowed"
              )}
            >
              <div className="text-2xl mb-1">{c.icon}</div>
              <div className="text-[13px] font-semibold">{c.label}{!c.active && " 🔜"}</div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={!isValid}
        className={cn(
          "w-full py-4 rounded-full text-base font-bold transition-all duration-300 flex items-center justify-center gap-2.5",
          isValid
            ? "bg-gradient-to-r from-azure to-[#3D7AB5] text-white shadow-lg shadow-azure/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-azure/40"
            : "bg-muted text-stone cursor-not-allowed"
        )}
      >
        {isLoading ? (
          <>
            <span className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:0ms]" />
              <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:300ms]" />
            </span>
            Generating…
          </>
        ) : (
          <>✨ Generate My Recipe</>
        )}
      </button>
      <p className="text-center text-xs text-stone -mt-4">
        Uses 1 AI generation credit · ~10 seconds · Free users: 3/day
      </p>
    </form>
  );
}
