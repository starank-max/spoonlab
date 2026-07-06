import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardImage, Badge } from "@/components/ui";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";

// ── Mock article database ───────────────────────────────────────

const ARTICLES: Record<string, Article> = {
  "substitutes-for-shaoxing-wine": {
    slug: "substitutes-for-shaoxing-wine",
    title: "8 Substitutes for Shaoxing Wine",
    category: "Ingredient Guides",
    date: "June 15, 2026",
    readTime: "6 min read",
    emoji: "🍶",
    excerpt:
      "Can't find Shaoxing wine at your supermarket? These eight pantry-friendly swaps deliver authentic flavor without a trip to the Asian grocer.",
    body: (
      <>
        <p>
          Shaoxing wine is the backbone of countless Chinese dishes — from
          red-braised pork belly to drunken chicken. But in many Western
          supermarkets, it is nowhere to be found. Before you abandon a recipe,
          know this: you almost certainly have a workable substitute sitting in
          your pantry right now.
        </p>

        <h2>What Makes Shaoxing Wine Special?</h2>
        <p>
          Shaoxing wine is a fermented rice wine from eastern China, aged in
          clay vessels for anywhere from three years to several decades. It has
          a deep amber color, a nutty-sweet fragrance, and around 14–18%
          alcohol. In cooking, it tames gaminess in meat, adds a layer of
          savory complexity to sauces, and contributes that unmistakable
          &quot;Chinese restaurant&quot; aroma.
        </p>

        <h3>The key flavor notes</h3>
        <ul>
          <li>Nutty sweetness with a hint of sherry-like oxidation</li>
          <li>Mild acidity that brightens rich, fatty dishes</li>
          <li>Umami depth from the fermentation process</li>
          <li>
            Alcohol that helps dissolve and carry fat-soluble aromatics
          </li>
        </ul>

        <h2>The 8 Best Substitutes — Ranked</h2>

        <h3>1. Dry Sherry (Best Overall Match)</h3>
        <p>
          Dry sherry — specifically Amontillado or Fino — is the gold-standard
          substitute. Its nutty, slightly oxidized profile mirrors Shaoxing wine
          more closely than any other option. Use it 1:1 in any recipe. If you
          only stock one substitute, make it this one.
        </p>

        <h3>2. Mirin + Splash of Soy Sauce</h3>
        <p>
          Japanese mirin is sweeter and lower in alcohol than Shaoxing wine, so
          balance it with a small splash of soy sauce to dial back the sweetness
          and add savory depth. Use 3 parts mirin to 1 part soy sauce for a
          close approximation.
        </p>

        <h3>3. Dry White Wine + Pinch of Sugar</h3>
        <p>
          A crisp, unoaked white like Sauvignon Blanc or Pinot Grigio works in a
          pinch. The acidity is similar, and adding a tiny pinch of sugar
          approximates Shaoxing wine&apos;s gentle sweetness. Avoid oaky
          Chardonnay — the vanilla notes clash with Chinese flavors.
        </p>

        <h3>4. Sake (Japanese Rice Wine)</h3>
        <p>
          Sake is made from rice too, so the base profile is related. It is
          cleaner and lighter than Shaoxing, missing the aged complexity, but
          for delicate dishes like steamed fish it works beautifully. Use 1:1.
        </p>

        <h3>5. Vermouth (Dry)</h3>
        <p>
          Fortified and aromatized with herbs, dry vermouth brings a botanical
          edge that is not traditional but often delicious in stir-fries and
          braises. Its alcohol content and body are similar to Shaoxing, making
          the swap seamless in technique-driven recipes.
        </p>

        <h3>6. Non-Alcoholic: Apple Juice + Rice Vinegar</h3>
        <p>
          For those avoiding alcohol entirely, mix 3 parts unsweetened apple
          juice with 1 part rice vinegar. The apple juice provides body and
          fruity sweetness while the vinegar supplies the necessary acidity.
          Reduce liquid elsewhere in the recipe slightly to compensate for the
          extra sweetness.
        </p>

        <h3>7. Non-Alcoholic: Chicken Stock + Rice Vinegar</h3>
        <p>
          This swap prioritizes the savory-umami dimension over sweetness. Mix 2
          parts unsalted chicken stock with 1 part rice vinegar and a pinch of
          sugar. Best for braised meat dishes where the liquid reduces and
          concentrates.
        </p>

        <h3>8. Chinese Cooking Wine (With a Caveat)</h3>
        <p>
          Many supermarkets now stock &quot;Chinese cooking wine&quot; in the
          international aisle. Be aware that these are often salted to avoid
          liquor taxes, making them undrinkably salty. If using salted cooking
          wine, reduce the soy sauce or salt in your recipe by at least half.
        </p>

        <h2>Quick Reference Table</h2>
        <p>
          For most home cooks, the hierarchy is simple: reach for dry sherry
          first. If you do not have it, mirin with a soy-sauce adjustment is
          your next best bet. For alcohol-free cooking, the apple juice and rice
          vinegar blend produces the most balanced result. The bottom line: do
          not let a missing bottle of Shaoxing wine stop you from cooking
          something delicious tonight.
        </p>
      </>
    ),
  },
};

interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  emoji: string;
  excerpt: string;
  body: React.ReactNode;
}

// ── Related articles (cross-links) ──────────────────────────────

const RELATED_ARTICLES = [
  {
    slug: "wok-hei-at-home",
    title: "Wok Hei at Home: The 3-Minute Guide",
    emoji: "🔥",
    date: "May 10, 2026",
    excerpt:
      "That smoky, charred aroma from restaurant stir-fries isn't magic — it's chemistry.",
  },
  {
    slug: "velveting-101",
    title: "Velveting 101: Silky Restaurant-Style Meat",
    emoji: "🥩",
    date: "March 18, 2026",
    excerpt:
      "The Chinese restaurant secret for impossibly tender chicken and beef.",
  },
  {
    slug: "best-woks-electric-stoves-2026",
    title: "Best Woks for Electric Stoves — 2026 Guide",
    emoji: "🍳",
    date: "May 28, 2026",
    excerpt:
      "Flat-bottom woks that actually get hot enough for proper stir-frying.",
  },
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

// ── Page (server component) ─────────────────────────────────────

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = ARTICLES[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: article.title },
          ]}
          className="mb-8"
        />

        {/* Hero image area */}
        <div className="aspect-[21/9] rounded-xl overflow-hidden bg-gradient-to-br from-[#F3EDE6] via-[#E8DDD0] to-[#DDCFBD] flex items-center justify-center text-7xl mb-8">
          {article.emoji}
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant={getCategoryBadgeVariant(article.category)}>
            {article.category}
          </Badge>
          <span className="text-sm text-stone">{article.date}</span>
          <span className="text-sm text-stone">·</span>
          <span className="text-sm text-stone">{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink font-bold tracking-tight leading-tight mb-8">
          {article.title}
        </h1>

        {/* Prose body */}
        <article className="prose prose-stone prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-charcoal prose-p:leading-relaxed prose-li:text-charcoal prose-ul:my-6 mb-16">
          {article.body}
        </article>

        {/* Divider */}
        <hr className="border-border mb-12" />

        {/* Related articles */}
        <section>
          <h2 className="font-display text-2xl font-bold text-ink mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group"
              >
                <Card hover padding="none" className="h-full flex flex-col">
                  <CardImage className="aspect-[16/10] rounded-none rounded-t-lg text-4xl">
                    {rel.emoji}
                  </CardImage>
                  <div className="p-4 flex flex-col flex-1 gap-2">
                    <h3 className="font-display text-base font-bold text-ink leading-snug group-hover:text-terracotta transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-stone">{rel.date}</p>
                    <p className="text-sm text-charcoal leading-relaxed line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
