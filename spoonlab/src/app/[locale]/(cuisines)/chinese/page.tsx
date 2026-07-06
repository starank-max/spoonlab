import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { CardImage } from "@/components/ui";
import { CATEGORY_META, getCuisineCategories } from "@/lib/cuisines";
import { MOCK_RECIPES } from "@/lib/data";

const BG_GRADIENTS = [
  "from-[#F3EAE0] via-[#E8D8C4] to-[#DDCBAD]",
  "from-[#F3EAE0] via-[#E5D8C8] to-[#D8C9B4]",
  "from-[#F0E8DD] via-[#E3D7C7] to-[#D6C8B0]",
  "from-[#F5EFE6] via-[#EBE0D2] to-[#DDCEB9]",
];

const EMOJIS = ["🔥", "🥟", "🍖", "♨️", "🍽️", "🎊"];

export default function ChineseRecipesPage() {
  const categories = getCuisineCategories("chinese");
  const recipes = MOCK_RECIPES.filter((r) => r.cuisine === "chinese");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Chinese Recipes" },
        ]}
        className="mb-6"
      />

      {/* Jumbotron */}
      <section className="text-center mb-12">
        <span className="text-5xl sm:text-6xl mb-4 block">🥡</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Chinese Recipes
        </h1>
        <div className="mb-3">
          <span className="inline-block bg-sage-light text-sage text-xs font-bold px-3 py-1 rounded-full">
            487 recipes
          </span>
        </div>
        <p className="text-stone text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Authentic Chinese home cooking adapted for Western supermarkets. Every
          recipe works with your local ingredients — no specialty store required.
        </p>
      </section>

      {/* Category Grid — 2-col on sm, 3-col on lg */}
      <section className="mb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const meta = CATEGORY_META[cat];
            return (
              <Link
                key={cat}
                href={`/chinese/${cat}`}
                className="group bg-white rounded-lg p-5 border border-border shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <span className="w-10 h-10 rounded-md bg-muted flex items-center justify-center text-lg flex-shrink-0">
                    {meta?.icon ?? EMOJIS[i]}
                  </span>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      {meta?.name.en ?? cat}
                    </h3>
                    <p className="text-xs text-stone leading-relaxed mb-2">
                      {meta?.description.en}
                    </p>
                    <span className="text-xs font-semibold text-terracotta group-hover:translate-x-1 transition-transform inline-block">
                      Browse →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular This Week */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-2xl font-bold">Popular This Week</h2>
          <Link
            href="/chinese"
            className="text-sm font-semibold text-terracotta hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {recipes.slice(0, 4).map((r, i) => (
            <Link
              key={r.id}
              href={`/chinese/recipe/${r.slug}`}
              className="group bg-white rounded-lg overflow-hidden border border-border shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <CardImage className={BG_GRADIENTS[i]}>
                <span>{EMOJIS[i]}</span>
              </CardImage>
              <div className="p-3.5">
                <h4 className="font-semibold text-sm mb-1">{r.title.en}</h4>
                <div className="flex items-center gap-3 text-xs text-stone">
                  <span>🕐 {r.totalTime} min</span>
                  <span>{r.tags[0]}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
