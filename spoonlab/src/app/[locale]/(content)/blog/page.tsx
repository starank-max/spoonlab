import Link from "next/link";
import { Card, CardImage, Badge } from "@/components/ui";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { cn } from "@/lib/utils";

// ── Mock blog data ──────────────────────────────────────────────

const BLOG_POSTS = [
  {
    slug: "substitutes-for-shaoxing-wine",
    title: "8 Substitutes for Shaoxing Wine",
    category: "Ingredient Guides",
    date: "June 15, 2026",
    excerpt:
      "Can't find Shaoxing wine at your supermarket? These eight pantry-friendly swaps deliver authentic flavor without a trip to the Asian grocer.",
    emoji: "🍶",
  },
  {
    slug: "best-woks-electric-stoves-2026",
    title: "Best Woks for Electric Stoves — 2026 Guide",
    category: "Tool Guides",
    date: "May 28, 2026",
    excerpt:
      "Flat-bottom woks, carbon steel vs. nonstick, and the induction-compatible models that actually get hot enough for proper stir-frying.",
    emoji: "🍳",
  },
  {
    slug: "wok-hei-at-home",
    title: "Wok Hei at Home: The 3-Minute Guide",
    category: "Techniques",
    date: "May 10, 2026",
    excerpt:
      "That smoky, charred aroma from restaurant stir-fries isn't magic — it's chemistry. Learn how a blowtorch or screaming-hot pan can get you close.",
    emoji: "🔥",
  },
  {
    slug: "how-to-fold-dumplings",
    title: "How to Fold Dumplings: Visual Guide",
    category: "Techniques",
    date: "April 22, 2026",
    excerpt:
      "From the simple half-moon to the intricate pleated crescent — master four dumpling folds that look impressive but take minutes to learn.",
    emoji: "🥟",
  },
  {
    slug: "chinese-regional-cuisines-explained",
    title: "Chinese Regional Cuisines Explained",
    category: "Culture",
    date: "April 5, 2026",
    excerpt:
      "Sichuan mala, Cantonese dim sum, Beijing roast duck, Shanghainese soup dumplings — a whirlwind tour of China's eight great culinary traditions.",
    emoji: "🇨🇳",
  },
  {
    slug: "velveting-101",
    title: "Velveting 101: Silky Restaurant-Style Meat",
    category: "Techniques",
    date: "March 18, 2026",
    excerpt:
      "The Chinese restaurant secret for impossibly tender chicken and beef. Baking soda, egg white, and a quick blanch — that's all it takes.",
    emoji: "🥩",
  },
  {
    slug: "air-fryer-vs-wok",
    title: "Air Fryer vs Wok: Chinese Cooking Test",
    category: "Tool Guides",
    date: "March 2, 2026",
    excerpt:
      "We cooked five classic Chinese dishes side-by-side in an air fryer and a wok. The results surprised even us — here's which tool won each round.",
    emoji: "⚔️",
  },
  {
    slug: "lunar-new-year-menu-planning",
    title: "Lunar New Year Menu Planning",
    category: "Culture",
    date: "February 8, 2026",
    excerpt:
      "Whole fish for abundance, dumplings for wealth, longevity noodles — build a symbolic Lunar New Year feast with these crowd-pleasing recipes.",
    emoji: "🧧",
  },
];

const POPULAR_POSTS = [
  {
    slug: "velveting-101",
    title: "Velveting 101: Silky Restaurant-Style Meat",
  },
  {
    slug: "wok-hei-at-home",
    title: "Wok Hei at Home: The 3-Minute Guide",
  },
  {
    slug: "substitutes-for-shaoxing-wine",
    title: "8 Substitutes for Shaoxing Wine",
  },
];

const CATEGORIES = [
  "All",
  "Ingredient Guides",
  "Tool Guides",
  "Techniques",
  "Culture",
];

// ── Helper ──────────────────────────────────────────────────────

function getCategoryBadgeVariant(category: string) {
  switch (category) {
    case "Ingredient Guides":
      return "easy";
    case "Tool Guides":
      return "ai";
    case "Techniques":
      return "new";
    case "Culture":
      return "savory";
    default:
      return "default";
  }
}

// ── Page ────────────────────────────────────────────────────────

export default function BlogPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          className="mb-6"
        />

        {/* Page header */}
        <div className="mb-10">
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-bold tracking-tight">
            Tips &amp; Guides
          </h1>
          <p className="mt-3 text-lg text-stone max-w-2xl">
            Master Chinese cooking in a Western kitchen — ingredient swaps, tool
            recommendations, technique deep-dives, and culinary culture.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content: blog grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <Card hover padding="none" className="h-full flex flex-col">
                    <CardImage className="aspect-[16/10] rounded-none rounded-t-lg text-5xl">
                      {post.emoji}
                    </CardImage>
                    <div className="p-5 flex flex-col flex-1 gap-3">
                      <div>
                        <Badge variant={getCategoryBadgeVariant(post.category)}>
                          {post.category}
                        </Badge>
                      </div>
                      <h2 className="font-display text-lg font-bold text-ink leading-snug group-hover:text-terracotta transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-xs text-stone uppercase tracking-wide">
                        {post.date}
                      </p>
                      <p className="text-sm text-charcoal leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="text-sm font-semibold text-terracotta group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0 space-y-8">
            {/* Category filter */}
            <div className="bg-white rounded-lg border border-border p-5">
              <h3 className="font-display text-lg font-bold text-ink mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      className={cn(
                        "w-full text-left text-sm px-3 py-1.5 rounded-md transition-colors",
                        cat === "All"
                          ? "bg-terracotta-light text-terracotta font-semibold"
                          : "text-charcoal hover:bg-muted"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular posts */}
            <div className="bg-white rounded-lg border border-border p-5">
              <h3 className="font-display text-lg font-bold text-ink mb-4">
                Popular Posts
              </h3>
              <ul className="space-y-4">
                {POPULAR_POSTS.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-charcoal hover:text-terracotta transition-colors leading-snug block"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
