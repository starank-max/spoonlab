import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { Badge } from "@/components/ui";
import { MOCK_RECIPES } from "@/lib/data";

/* ──────────────── Inline Mock Recipe Data ──────────────── */

const RECIPE = {
  slug: "kung-pao-chicken",
  title: { en: "Kung Pao Chicken" },
  description: {
    en: "Sichuan classic with tender chicken, roasted peanuts, and dried chilies in a savory-sweet sauce. Ready in 25 minutes with supermarket ingredients.",
  },
  prepTime: 15,
  cookTime: 10,
  servings: 4,
  difficulty: "easy" as const,
  cuisine: "chinese",
  category: "stir-fry",
  tags: ["Spicy", "Quick", "High-Protein"],
  rating: 4.8,
  ratingCount: 342,
  nutrition: {
    calories: 420,
    protein: 32,
    carbs: 18,
    fat: 24,
    sodium: 680,
    fiber: 3,
  },
  ingredients: [
    {
      name: "Boneless chicken thighs",
      amountImperial: "1½ lb",
      amountMetric: "680 g",
      notes: "cut into ¾-inch cubes",
      isSwappable: true,
    },
    {
      name: "Soy sauce",
      amountImperial: "3 tbsp",
      amountMetric: "45 ml",
      notes: "divided; use tamari for GF",
      isSwappable: true,
    },
    {
      name: "Chinese black vinegar",
      amountImperial: "2 tbsp",
      amountMetric: "30 ml",
      notes: "or balsamic vinegar",
      isSwappable: true,
    },
    {
      name: "Sesame oil",
      amountImperial: "1 tbsp",
      amountMetric: "15 ml",
      notes: "toasted",
      isSwappable: false,
    },
    {
      name: "Cornstarch",
      amountImperial: "2 tsp",
      amountMetric: "10 g",
      notes: "divided",
      isSwappable: true,
    },
    {
      name: "Granulated sugar",
      amountImperial: "2 tbsp",
      amountMetric: "25 g",
      notes: "",
      isSwappable: true,
    },
    {
      name: "Dried red chili peppers",
      amountImperial: "8–10",
      amountMetric: "8–10",
      notes: "adjust to taste",
      isSwappable: false,
    },
    {
      name: "Sichuan peppercorns",
      amountImperial: "1 tsp",
      amountMetric: "5 g",
      notes: "or ½ tsp black pepper + ¼ tsp coriander seed",
      isSwappable: true,
    },
    {
      name: "Garlic",
      amountImperial: "4 cloves",
      amountMetric: "4 cloves",
      notes: "minced",
      isSwappable: false,
    },
    {
      name: "Fresh ginger",
      amountImperial: "1-inch piece",
      amountMetric: "2.5 cm",
      notes: "julienned",
      isSwappable: false,
    },
    {
      name: "Scallions",
      amountImperial: "4 stalks",
      amountMetric: "4 stalks",
      notes: "whites & greens separated",
      isSwappable: false,
    },
    {
      name: "Roasted unsalted peanuts",
      amountImperial: "½ cup",
      amountMetric: "75 g",
      notes: "",
      isSwappable: true,
    },
    {
      name: "Vegetable oil",
      amountImperial: "2 tbsp",
      amountMetric: "30 ml",
      notes: "for stir-frying",
      isSwappable: true,
    },
  ],
  steps: [
    {
      order: 1,
      heading: "Prep the Chicken",
      text: "Cut chicken thighs into bite-sized cubes. Toss with 1 tbsp soy sauce, 1 tsp cornstarch, and a pinch of white pepper. Let marinate while you prep the sauce and vegetables.",
      timer: null,
    },
    {
      order: 2,
      heading: "Mix the Kung Pao Sauce",
      text: "In a small bowl, combine remaining soy sauce, black vinegar, sugar, sesame oil, and cornstarch mixed with 2 tbsp cold water. Whisk until smooth. Set aside.",
      timer: null,
    },
    {
      order: 3,
      heading: "Stir-Fry the Chicken",
      text: "Heat 2 tbsp oil in a large nonstick skillet over high heat until shimmering. Add chicken in a single layer. Let sear undisturbed for 45 seconds, then stir-fry until golden — about 3 minutes. Remove and set aside.",
      timer: 3,
    },
    {
      order: 4,
      heading: "Bloom the Aromatics",
      text: "Reduce heat to medium. In the same skillet, add dried red chilies and Sichuan peppercorns. Stir for 20 seconds until fragrant. Add garlic, ginger, and scallion whites. Cook 30 seconds more.",
      timer: null,
    },
    {
      order: 5,
      heading: "Combine & Finish",
      text: "Return chicken to the skillet. Pour sauce around the edges — it should sizzle and thicken instantly. Toss to coat everything evenly. Add peanuts and scallion greens. One final toss.",
      timer: 1,
    },
    {
      order: 6,
      heading: "Plate & Serve",
      text: "Transfer to a warm serving plate. Garnish with extra scallions and a drizzle of chili oil if you like more heat. Best enjoyed immediately while the chicken is crispy-tender and the peanuts are crunchy.",
      timer: null,
    },
  ],
};

const RELATED_RECIPES = MOCK_RECIPES.filter(
  (r) => r.slug !== "kung-pao-chicken",
).slice(0, 4);

/* ──────────────── Component ──────────────── */

export default function RecipeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = RECIPE; // In production: fetch by params.slug

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* ── Breadcrumb ── */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Chinese Recipes", href: "/chinese" },
          { label: recipe.category, href: `/chinese/${recipe.category}` },
          { label: recipe.title.en },
        ]}
        className="mb-5"
      />

      {/* ── Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            {recipe.title.en}
          </h1>
          <p className="text-stone text-sm sm:text-base max-w-xl leading-relaxed">
            {recipe.description.en}
          </p>

          {/* Meta pills */}
          <div className="flex items-center gap-2 flex-wrap mt-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-xs font-semibold text-charcoal">
              🕐 Prep {recipe.prepTime}m
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-xs font-semibold text-charcoal">
              🔥 Cook {recipe.cookTime}m
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-xs font-semibold text-charcoal">
              🍽️ Serves {recipe.servings}
            </span>
            <Badge variant={recipe.tags[0]?.toLowerCase().includes("spicy") ? "spicy" : recipe.tags[0]?.toLowerCase().includes("sweet") ? "sweet" : "default"}>🌶️ {recipe.tags[0]}</Badge>
            <Badge variant={recipe.difficulty === "easy" ? "easy" : recipe.difficulty === "medium" ? "medium" : "hard"}>● {recipe.difficulty}</Badge>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-saffron-light text-[#8B6914] text-xs font-semibold">
              ⚡ {recipe.nutrition.calories} kcal
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-chili-light text-chili text-sm font-semibold hover:bg-chili hover:text-white transition-all">
            ❤️ Save
          </button>
          <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-border text-charcoal text-sm font-semibold hover:bg-muted transition-all">
            🖨️ Print List
          </button>
          <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-border text-charcoal text-sm font-semibold hover:bg-muted transition-all">
            📤 Share
          </button>
        </div>
      </div>

      {/* ── Hero Image ── */}
      <div className="aspect-[21/9] rounded-xl overflow-hidden bg-gradient-to-br from-[#F3EAE0] via-[#E8D8C4] to-[#DDCBAD] flex items-center justify-center text-7xl sm:text-8xl shadow-md mb-8">
        🍗
      </div>

      {/* ── 3-Column Layout ── */}
      <div className="grid lg:grid-cols-[300px_1fr_280px] gap-6 items-start">
        {/* ═══ LEFT: Ingredients ═══ */}
        <div className="bg-white rounded-lg border border-border shadow-xs p-5 lg:sticky lg:top-20">
          <h3 className="font-display text-lg font-bold mb-3">Ingredients</h3>

          {/* Servings adjuster */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-stone">
              Serves {recipe.servings}
            </span>
            <div className="flex items-center gap-1">
              <button className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs text-stone hover:bg-muted transition-colors">
                −
              </button>
              <span className="text-sm font-semibold w-6 text-center">
                {recipe.servings}
              </span>
              <button className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs text-stone hover:bg-muted transition-colors">
                +
              </button>
            </div>
          </div>

          {/* Unit toggle */}
          <div className="flex bg-muted rounded-full p-0.5 mb-4">
            <button className="flex-1 py-1.5 rounded-full text-xs font-semibold bg-white text-ink shadow-sm transition-colors">
              oz / lb / cups
            </button>
            <button className="flex-1 py-1.5 rounded-full text-xs font-semibold text-stone hover:text-charcoal transition-colors">
              g / ml
            </button>
          </div>

          {/* Ingredient list */}
          <div className="space-y-0.5">
            {recipe.ingredients.map((ing, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 py-2.5 border-b border-muted last:border-b-0 group cursor-pointer hover:bg-muted/50 rounded-sm px-1 -mx-1 transition-colors"
              >
                <span className="w-5 h-5 rounded-sm border-2 border-border flex items-center justify-center text-[10px] text-transparent flex-shrink-0 group-[.checked]:bg-sage group-[.checked]:border-sage group-[.checked]:text-white">
                  ✓
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] font-semibold block">
                    {ing.amountImperial}
                  </span>
                  <span className="text-[13px] text-charcoal">{ing.name}</span>
                  {ing.notes && (
                    <span className="text-[11px] text-stone italic block">
                      {ing.notes}
                    </span>
                  )}
                </div>
                {ing.isSwappable && (
                  <button
                    className="w-7 h-7 rounded-full bg-terracotta-light text-terracotta flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 hover:bg-terracotta hover:text-white transition-all flex-shrink-0"
                    title="AI Swap"
                  >
                    🔄
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ═══ CENTER: Method Steps ═══ */}
        <div>
          <h3 className="font-display text-lg font-bold mb-4">Method</h3>
          <div className="space-y-4">
            {recipe.steps.map((step, i) => (
              <div key={step.order}>
                {/* Step card */}
                <div className="bg-white rounded-lg border border-border shadow-xs overflow-hidden hover:shadow-sm transition-shadow">
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#F5EFE6] via-[#EBE0D2] to-[#E0D2BC] flex items-center justify-center text-3xl">
                    {["🧅", "🥣", "🔥", "🌶️", "🥜", "🍽️"][i]}
                  </div>
                  <div className="p-4 flex gap-3">
                    <span className="w-8 h-8 rounded-full bg-terracotta-light text-terracotta flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {step.order}
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        {step.heading}
                      </h4>
                      <p className="text-sm text-charcoal leading-relaxed">
                        {step.text}
                      </p>
                      {step.timer && (
                        <button className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-full bg-saffron-light text-[#8B6914] text-xs font-semibold hover:bg-saffron hover:text-white transition-colors">
                          ⏱️ Start {step.timer} min timer
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Advertisement placeholder between steps 2 and 3 */}
                {i === 1 && (
                  <div className="my-4 bg-muted rounded-lg border border-dashed border-border p-6 text-center">
                    <span className="text-[10px] uppercase tracking-widest text-stone font-semibold">
                      Advertisement
                    </span>
                    <p className="text-xs text-stone mt-1">
                      Google AdSense — In-Feed Ad Unit
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ═══ RIGHT: Sidebar ═══ */}
        <div className="space-y-3.5 lg:sticky lg:top-20">
          {/* AI Swap promo card */}
          <div className="bg-gradient-to-br from-terracotta-light to-[#FBF3EE] rounded-lg p-5 text-center border border-terracotta-light">
            <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center text-2xl mx-auto mb-3 shadow-lg shadow-terracotta/30">
              🔄
            </div>
            <h4 className="font-bold text-sm mb-1">AI Ingredient Swap</h4>
            <p className="text-xs text-stone leading-relaxed mb-3">
              Missing an ingredient? Our AI finds supermarket alternatives that
              keep the flavor.
            </p>
            <button className="w-full py-2.5 bg-terracotta text-white rounded-full text-sm font-semibold hover:bg-terracotta-hover transition-colors">
              Swap Ingredients Now
            </button>
          </div>

          {/* Action cards */}
          {[
            {
              icon: "❤️",
              label: "Save to Favorites",
              hint: "Add to your collection",
            },
            {
              icon: "🖨️",
              label: "Print Shopping List",
              hint: "Checklist with checked items",
            },
            {
              icon: "⭐",
              label: "Rate This Recipe",
              hint: `4.8 ★ from ${recipe.ratingCount} cooks`,
            },
          ].map((a) => (
            <div
              key={a.label}
              className="bg-white rounded-lg border border-border shadow-xs p-4 flex items-center gap-3 cursor-pointer hover:shadow-sm hover:border-stone transition-all"
            >
              <span className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-base flex-shrink-0">
                {a.icon}
              </span>
              <div>
                <div className="text-[13px] font-semibold">{a.label}</div>
                <div className="text-[11px] text-stone">{a.hint}</div>
              </div>
            </div>
          ))}

          {/* Nutrition Facts */}
          <div className="bg-white rounded-lg border border-border shadow-xs p-4">
            <h5 className="text-[11px] uppercase tracking-widest text-stone font-bold mb-3">
              Nutrition Per Serving
            </h5>
            {[
              ["Calories", `${recipe.nutrition.calories} kcal`],
              ["Protein", `${recipe.nutrition.protein} g`],
              ["Carbs", `${recipe.nutrition.carbs} g`],
              ["Fat", `${recipe.nutrition.fat} g`],
              ["Sodium", `${recipe.nutrition.sodium} mg`],
              ["Fiber", `${recipe.nutrition.fiber} g`],
            ].map(([label, val]) => (
              <div
                key={label}
                className="flex justify-between text-[13px] py-1 border-b border-muted last:border-b-0"
              >
                <span className="text-stone">{label}</span>
                <span className="font-semibold">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── You Might Also Like ── */}
      <section className="mt-14 mb-8">
        <h2 className="font-display text-2xl font-bold mb-5">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {RELATED_RECIPES.map((r, i) => (
            <Link
              key={r.id}
              href={`/chinese/recipe/${r.slug}`}
              className="group bg-white rounded-lg overflow-hidden border border-border shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F3EDE6] via-[#E8DDD0] to-[#DDCFBD] flex items-center justify-center text-3xl">
                {["🫘", "🥩", "🍜", "🥒"][i]}
              </div>
              <div className="p-3.5">
                <h4 className="font-semibold text-sm">{r.title.en}</h4>
                <span className="text-xs text-stone">
                  🕐 {r.totalTime} min
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
