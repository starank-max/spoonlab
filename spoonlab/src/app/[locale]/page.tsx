import Link from "next/link";
import { Button, Card, CardImage, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import { CUISINES } from "@/lib/cuisines";
import { SITE } from "@/lib/constants";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const featureCards = [
  {
    icon: "🔄",
    title: "Local Ingredient Swap",
    description:
      "Substitute hard-to-find Asian ingredients with supermarket staples — without losing authenticity.",
    bg: "bg-sage-light",
    border: "border-sage/30",
    href: "/chinese",
  },
  {
    icon: "🧬",
    title: "Diet Customize",
    description:
      "Gluten-free? Vegan? Low-carb? One tap adapts any recipe to your dietary needs with AI.",
    bg: "bg-terracotta-light",
    border: "border-terracotta/20",
    href: "/chinese",
  },
  {
    icon: "♨️",
    title: "Air Fryer Meals",
    description:
      "Crispy kung pao, spring rolls, and dumplings — all adapted for your air fryer in under 30 minutes.",
    bg: "bg-saffron-light",
    border: "border-saffron/30",
    href: "/chinese/category/air-fryer",
  },
];

const socialProof = [
  { value: "500+", label: "Recipes" },
  { value: "12K+", label: "Home Cooks" },
  { value: "98%", label: "Swap Success" },
  { value: "4.9★", label: "Rating" },
];

const trendingRecipes = [
  {
    slug: "kung-pao-chicken",
    title: "Kung Pao Chicken",
    time: "25 min",
    emoji: "🍗",
    tag: "Spicy",
    tagVariant: "spicy" as const,
  },
  {
    slug: "mapo-tofu",
    title: "Mapo Tofu",
    time: "30 min",
    emoji: "🫘",
    tag: "Easy",
    tagVariant: "easy" as const,
  },
  {
    slug: "spring-rolls",
    title: "Crispy Spring Rolls",
    time: "35 min",
    emoji: "🥟",
    tag: "Air Fryer",
    tagVariant: "new" as const,
  },
  {
    slug: "char-siu",
    title: "Char Siu Pork",
    time: "45 min",
    emoji: "🥩",
    tag: "Popular",
    tagVariant: "default" as const,
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ================================================================== */}
      {/*  Hero                                                                */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-warm-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* --- Left Column --- */}
            <div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
              <Badge variant="new" className="gap-2 px-3.5 py-1.5">
                <span className="w-1.5 h-1.5 bg-terracotta rounded-full animate-pulse" />
                Now Cooking: Chinese Cuisine
              </Badge>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-[-1px] text-ink">
                AI Chinese Recipes{" "}
                <em className="italic text-terracotta not-italic">
                  For Western Home Cooks
                </em>
              </h1>

              <p className="text-base sm:text-lg text-stone leading-relaxed max-w-lg">
                Authentic flavors, supermarket ingredients, and AI-powered swaps
                that make Chinese cooking effortless in any Western kitchen.
              </p>

              <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-start pt-2">
                <Link href="/chinese">
                  <Button size="lg">Explore Recipes</Button>
                </Link>
                <Link href="/ai-generator">
                  <Button variant="outline" size="lg">
                    Try AI Generator
                  </Button>
                </Link>
              </div>
            </div>

            {/* --- Right Column: Hero Visual --- */}
            <div className="relative flex items-center justify-center">
              {/* Main emoji circle */}
              <div className="relative z-10 flex h-56 w-56 sm:h-72 sm:w-72 items-center justify-center rounded-full bg-cream border-2 border-border shadow-lg">
                <span className="text-7xl sm:text-8xl drop-shadow-lg">🥡</span>
              </div>

              {/* Floating cards */}
              <div className="hidden sm:flex absolute top-2 right-0 lg:-right-3 z-20 rotate-6">
                <Card padding="sm" className="shadow-md">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                    <span className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center text-base">
                      🔄
                    </span>
                    Auto-swapped 3 ingredients
                  </div>
                </Card>
              </div>

              <div className="hidden sm:flex absolute bottom-3 -left-3 z-20 -rotate-2">
                <Card padding="sm" className="shadow-md">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                    <span className="w-8 h-8 rounded-full bg-saffron-light flex items-center justify-center text-base">
                      ⚖️
                    </span>
                    oz &harr; grams in one tap
                  </div>
                </Card>
              </div>

              <div className="hidden sm:flex absolute top-1/2 -right-2 lg:-right-6 -translate-y-1/2 z-20 rotate-2">
                <Card padding="sm" className="shadow-md">
                  <div className="flex items-center gap-2 text-xs font-semibold text-terracotta">
                    <span>♨️</span>
                    Air Fryer Ready
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Feature Cards                                                       */}
      {/* ================================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={cn(
                "group rounded-lg p-6 sm:p-7 border shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
                card.bg,
                card.border
              )}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/60 text-xl shadow-xs">
                {card.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mb-1.5 group-hover:text-terracotta transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-stone leading-relaxed mb-3">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-terracotta group-hover:gap-2 transition-all">
                Learn more <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Social Proof                                                        */}
      {/* ================================================================== */}
      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
          <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
            {socialProof.map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-terracotta">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-stone mt-1 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Trending This Week                                                  */}
      {/* ================================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div>
            <Badge variant="new" className="mb-2">
              Trending
            </Badge>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              Trending This Week
            </h2>
          </div>
          <Link
            href="/chinese"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-terracotta hover:text-terracotta-hover transition-colors"
          >
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Recipe grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingRecipes.map((recipe) => (
            <Link
              key={recipe.slug}
              href={`/chinese/recipe/${recipe.slug}`}
              className="group"
            >
              <Card hover className="h-full overflow-hidden" padding="none">
                <CardImage className="text-5xl">
                  {recipe.emoji}
                </CardImage>
                <div className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-sm sm:text-base font-semibold text-ink group-hover:text-terracotta transition-colors leading-snug">
                      {recipe.title}
                    </h3>
                    <span className="shrink-0 text-xs text-stone mt-0.5">
                      {recipe.time}
                    </span>
                  </div>
                  <Badge variant={recipe.tagVariant}>{recipe.tag}</Badge>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mobile view-all link */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/chinese"
            className="inline-flex items-center gap-1 text-sm font-semibold text-terracotta"
          >
            View all recipes <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Newsletter CTA                                                      */}
      {/* ================================================================== */}
      <section className="bg-warm-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-xl text-center space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              Get 3 Free AI-Adapted Recipes
            </h2>
            <p className="text-stone text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Drop your email. We&apos;ll send three Chinese recipes
              auto-converted to your supermarket and measurement system.
            </p>
            <form
              action="/api/subscribe"
              method="POST"
              className="flex flex-col sm:flex-row gap-3 mx-auto max-w-md"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="you@kitchen.com"
                className="flex-1 w-full rounded-full border border-border bg-white px-5 py-3 text-sm text-ink placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-shadow"
              />
              <Button type="submit" size="lg">
                Send Me Recipes
              </Button>
            </form>
            <p className="text-xs text-stone/70">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
