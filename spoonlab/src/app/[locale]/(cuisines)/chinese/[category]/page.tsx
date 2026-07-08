import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { Badge } from "@/components/ui";
import { CATEGORY_META, getCuisineCategories } from "@/lib/cuisines";
import { MOCK_RECIPES } from "@/lib/data";

const FILTERS = [
  "All",
  "Quick (<30m)",
  "Easy",
  "Medium",
  "Spicy",
  "Savory",
  "Vegetarian",
];

const BG_GRADIENTS = [
  "from-[#F3EAE0] via-[#E8D8C4] to-[#DDCBAD]",
  "from-[#F3EAE0] via-[#E5D8C8] to-[#D8C9B4]",
  "from-[#F0E8DD] via-[#E3D7C7] to-[#D6C8B0]",
  "from-[#F5EFE6] via-[#EBE0D2] to-[#DDCEB9]",
  "from-[#F3EDE6] via-[#E8DDD0] to-[#DACCB8]",
  "from-[#F5EDE4] via-[#EADFD2] to-[#DDCEB9]",
];

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const meta = CATEGORY_META[category];
  const validCategories = getCuisineCategories("chinese");
  const recipes = MOCK_RECIPES.filter(
    (r) => r.cuisine === "chinese" && r.category === category,
  );

  // 404 guard for invalid category slugs
  if (!validCategories.includes(category)) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">
          Category Not Found
        </h1>
        <Link
          href="/chinese"
          className="text-terracotta font-semibold hover:underline"
        >
          ← Back to Chinese Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Chinese Recipes", href: "/chinese" },
          { label: meta?.name.en ?? category },
        ]}
        className="mb-6"
      />

      {/* Category Header */}
      <div className="mb-8">
        <span className="text-4xl mb-3 block">{meta?.icon ?? "🍽️"}</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          {meta?.name.en ?? category}
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="easy">{recipes.length} recipes</Badge>
          <p className="text-sm text-stone">{meta?.description.en}</p>
        </div>
      </div>

      {/* Filter Pills — horizontal scroll */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {FILTERS.map((f, i) => (
          <button
            key={f}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              i === 0
                ? "bg-ink text-white"
                : "bg-white border border-border text-charcoal hover:bg-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Recipe Grid — 2-col sm, 3-col lg */}
      {recipes.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {recipes.map((r, i) => (
            <Link
              key={r.id}
              href={`/chinese/recipe/${r.slug}`}
              className="group bg-white rounded-lg overflow-hidden border border-border shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={r.heroImage} alt={r.title.en} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-white/90 text-[10px] font-semibold px-2 py-0.5 rounded-full text-stone">
                  {r.tags[0]}
                </span>
              </div>
              <div className="p-3.5">
                <h3 className="font-semibold text-sm mb-1.5">{r.title.en}</h3>
                <div className="flex items-center gap-3 text-xs text-stone">
                  <span>🕐 {r.totalTime} min</span>
                  <span>⭐ {r.rating}</span>
                  <Badge
                    variant={r.difficulty === "easy" ? "easy" : "medium"}
                  >
                    {r.difficulty}
                  </Badge>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-stone text-lg mb-4">
            No recipes in this category yet.
          </p>
          <Link
            href="/chinese"
            className="text-terracotta font-semibold hover:underline"
          >
            ← Browse all Chinese recipes
          </Link>
        </div>
      )}

      {/* Load More */}
      {recipes.length > 6 && (
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-white border-2 border-border rounded-full text-sm font-semibold text-charcoal hover:border-stone hover:bg-muted transition-all">
            Load More Recipes
          </button>
        </div>
      )}
    </div>
  );
}
