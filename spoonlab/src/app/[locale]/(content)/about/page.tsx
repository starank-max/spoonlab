import Link from "next/link";
import { Card } from "@/components/ui";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";

// ── Team members ────────────────────────────────────────────────

const TEAM = [
  {
    name: "Mei Chen",
    role: "Founder & Recipe Developer",
    bio: "Grew up in Chengdu, now cooks in a London flat with an induction hob. Believes great Chinese food should be possible anywhere.",
    emoji: "👩‍🍳",
  },
  {
    name: "James Wright",
    role: "Head of Technology",
    bio: "Former software engineer turned food nerd. Built the AI swap engine that makes SpoonLab recipes work with any supermarket ingredient list.",
    emoji: "🧑‍💻",
  },
  {
    name: "Priya Kapoor",
    role: "Content & Community",
    bio: "Food photographer and home cook who tests every recipe in a real home kitchen before it reaches you. Obsessed with dumpling folds.",
    emoji: "📸",
  },
];

// ── Values ──────────────────────────────────────────────────────

const VALUES = [
  {
    title: "Authenticity",
    description:
      "We honor the real flavors, techniques, and traditions of Chinese cooking. No watered-down, westernized shortcuts — just the genuine article, explained clearly.",
    emoji: "🏮",
  },
  {
    title: "Accessibility",
    description:
      "Every recipe works with supermarket ingredients. Our AI swap engine finds the closest match for specialty items, so you never need a special trip to an Asian grocer.",
    emoji: "🛒",
  },
  {
    title: "Innovation",
    description:
      "SpoonLab is powered by AI that adapts traditional recipes to your kitchen, dietary needs, and available tools — without sacrificing what makes each dish special.",
    emoji: "🤖",
  },
];

// ── Page ────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="bg-warm-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
            className="mb-8 justify-center"
          />
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink font-bold tracking-tight">
            About SpoonLab
          </h1>
          <p className="mt-6 text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
            We are on a mission to make authentic Chinese cooking accessible to
            every home kitchen. No specialty grocery runs, no guesswork — just
            great recipes that work with what you have, powered by a deep
            respect for tradition and a little bit of AI.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-3xl font-bold text-ink mb-6">
          Our Story
        </h2>
        <div className="prose prose-stone prose-lg max-w-none prose-p:text-charcoal prose-p:leading-relaxed space-y-4">
          <p>
            SpoonLab started in a tiny London kitchen in 2024, when our founder
            Mei tried to cook mapo tofu for friends and discovered that her
            local supermarket carried exactly zero of the traditional
            ingredients. No doubanjiang, no Sichuan peppercorns, no Shaoxing
            wine. Instead of giving up, she started experimenting with
            substitutions — and realized that with the right swaps, the dish
            could still taste incredible.
          </p>
          <p>
            That experiment turned into a spreadsheet, which turned into a blog,
            which turned into SpoonLab: an AI-powered recipe platform that
            automatically adapts authentic Chinese recipes to the ingredients
            you can actually buy. Today, tens of thousands of home cooks use
            SpoonLab to explore Chinese cuisine without the intimidation factor
            — cooking dishes their grandmothers would recognize, even if the
            supermarket aisles look nothing like a wet market in Chengdu.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <Card key={value.title} padding="lg" className="text-center">
                <div className="text-5xl mb-4">{value.emoji}</div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-display text-3xl font-bold text-ink text-center mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member) => (
            <Card key={member.name} padding="lg" className="text-center">
              {/* Photo placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-muted via-[#EDE8E0] to-[#DDCFBD] flex items-center justify-center text-4xl mx-auto mb-5">
                {member.emoji}
              </div>
              <h3 className="font-display text-xl font-bold text-ink">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-terracotta mb-3">
                {member.role}
              </p>
              <p className="text-sm text-charcoal leading-relaxed">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-warm-white border-t border-border py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">
            Get in Touch
          </h2>
          <p className="text-charcoal mb-8 leading-relaxed">
            Have a question, a recipe suggestion, or just want to say hello? We
            would love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-terracotta text-white font-semibold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:bg-terracotta-hover transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
