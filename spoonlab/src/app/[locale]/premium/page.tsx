import Link from "next/link";
import { Button, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["10 recipes/month", "5 AI swaps/month", "3 AI generations/month", "Basic measurement conversion", "Light ads"],
    cta: "Current Plan",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Monthly",
    price: "$5.99",
    period: "/ month",
    features: ["Unlimited recipes", "Unlimited AI swaps", "Unlimited AI generations", "Advanced measurement (density-adjusted)", "Chain-specific supermarket mapping", "Multi-filter dietary profiles", "AI meal planner", "Zero ads"],
    cta: "Get Monthly",
    href: "/signup?plan=monthly",
    highlight: true,
    badge: "Popular",
  },
  {
    name: "Annual",
    price: "$49.99",
    period: "/ year",
    features: ["Everything in Monthly", "AI custom recipe generator", "Cuisine deep-dive courses", "Recipe cloning from photos", "Family sharing (up to 4)", "Priority support"],
    cta: "Get Annual",
    href: "/signup?plan=annual",
    highlight: false,
    badge: "Best Value",
    savings: "Save 30%",
  },
];

export default function PremiumPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <span className="inline-block bg-saffron-light text-[#8B6914] text-xs font-bold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-4">
            💎 Membership
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-3">
            Upgrade Your Kitchen
          </h1>
          <p className="text-stone text-base max-w-lg mx-auto">
            Unlimited AI recipes, personalized dietary profiles, zero ads. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "bg-white rounded-xl border p-6 sm:p-7 flex flex-col relative",
                plan.highlight
                  ? "border-terracotta shadow-lg ring-1 ring-terracotta/20 scale-[1.02]"
                  : "border-border shadow-sm"
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-terracotta text-white text-xs font-bold rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <div className="text-center mb-6 mt-1">
                <h2 className="font-semibold text-lg mb-1">{plan.name}</h2>
                <div className="font-display text-4xl font-bold">{plan.price}</div>
                <div className="text-xs text-stone">{plan.period}</div>
                {plan.savings && (
                  <span className="inline-block bg-sage-light text-sage text-xs font-bold px-2.5 py-1 rounded-full mt-2">
                    {plan.savings}
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-charcoal">
                    <span className="text-sage mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href={plan.href} className="block">
                <Button
                  variant={plan.highlight ? "primary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-stone mt-8">
          All plans include a 7-day free trial on Monthly and Annual.{" "}
          <Link href="/terms" className="underline hover:text-terracotta">Terms apply</Link>.
        </p>
      </div>
    </div>
  );
}
