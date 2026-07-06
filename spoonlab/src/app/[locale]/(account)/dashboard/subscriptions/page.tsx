"use client";

import { Badge, Button, Card } from "@/components/ui";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { cn } from "@/lib/utils";
import { SUBSCRIPTION_TIERS } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Plan definitions                                                   */
/* ------------------------------------------------------------------ */

interface PlanCard {
  key: string;
  name: string;
  price: string;
  period: string;
  originalPrice?: string;
  features: { text: string; included: boolean }[];
  badge?: string;
}

const FEATURES_FREE = [
  { text: "10 recipes per month", included: true },
  { text: "3 AI generations per month", included: true },
  { text: "5 AI ingredient swaps per month", included: true },
  { text: "Save up to 50 favorites", included: true },
  { text: "Shopping lists", included: true },
  { text: "Ad-free experience", included: false },
  { text: "Unlimited AI generations", included: false },
  { text: "Priority support", included: false },
  { text: "Early access to new cuisines", included: false },
];

const FEATURES_PREMIUM = [
  { text: "Unlimited recipes", included: true },
  { text: "Unlimited AI generations", included: true },
  { text: "Unlimited AI ingredient swaps", included: true },
  { text: "Unlimited favorites", included: true },
  { text: "Shopping lists", included: true },
  { text: "Ad-free experience", included: true },
  { text: "Priority support", included: true },
  { text: "Early access to new cuisines", included: true },
];

const PLANS: PlanCard[] = [
  {
    key: "free",
    name: SUBSCRIPTION_TIERS.free.name,
    price: "$0",
    period: "forever",
    features: FEATURES_FREE,
  },
  {
    key: "monthly",
    name: SUBSCRIPTION_TIERS.monthly.name,
    price: "$5.99",
    period: "/month",
    features: FEATURES_PREMIUM,
    badge: "Popular",
  },
  {
    key: "annual",
    name: SUBSCRIPTION_TIERS.annual.name,
    price: "$49.99",
    period: "/year",
    originalPrice: "$71.88",
    features: FEATURES_PREMIUM,
    badge: "Best Value",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SubscriptionsPage() {
  const currentPlan = "free";

  return (
    <main className="min-h-screen bg-cream">
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Subscription" },
          ]}
          className="mb-6"
        />

        {/* Heading */}
        <div className="mb-3 text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Choose Your Plan
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-stone">
            Upgrade to unlock unlimited AI-powered recipes, remove ads, and get
            priority access to new features.
          </p>
        </div>

        {/* Current plan indicator */}
        <div className="mb-8 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-charcoal">
            <span className="h-2 w-2 rounded-full bg-sage" />
            Current plan:{" "}
            <span className="font-semibold">
              {SUBSCRIPTION_TIERS[currentPlan as keyof typeof SUBSCRIPTION_TIERS].name}
            </span>
          </p>
        </div>

        {/* ---- Plan cards ---- */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan) => {
            const isCurrent = plan.key === currentPlan;

            return (
              <Card
                key={plan.key}
                padding="none"
                className={cn(
                  "relative flex flex-col rounded-xl",
                  isCurrent
                    ? "border-terracotta bg-terracotta-light/30 shadow-md ring-2 ring-terracotta/30"
                    : "border-border shadow-sm",
                )}
              >
                {/* badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge
                      variant={plan.badge === "Best Value" ? "new" : "default"}
                      className="px-3 py-0.5 text-xs"
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* header */}
                <div className="p-6 text-center">
                  <h2 className="font-display text-xl font-bold text-ink">
                    {plan.name}
                  </h2>
                  <div className="mt-3 flex items-baseline justify-center gap-1">
                    <span className="font-display text-4xl font-bold text-ink">
                      {plan.price}
                    </span>
                    <span className="text-sm text-stone">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <p className="mt-1 text-xs text-stone line-through">
                      {plan.originalPrice}
                    </p>
                  )}
                  {plan.key === "annual" && (
                    <p className="mt-1 text-xs font-medium text-terracotta">
                      Save 30%
                    </p>
                  )}
                </div>

                {/* features */}
                <div className="flex-1 border-t px-6 py-5">
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className={cn(
                          "flex items-start gap-2 text-sm",
                          feat.included ? "text-charcoal" : "text-stone/40 line-through",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 shrink-0 text-base",
                            feat.included ? "text-sage" : "text-stone/30",
                          )}
                        >
                          {feat.included ? "&#10003;" : "&#10005;"}
                        </span>
                        {feat.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="border-t px-6 py-5">
                  {isCurrent ? (
                    <Button
                      variant="secondary"
                      size="lg"
                      disabled
                      className="w-full"
                    >
                      Current Plan
                    </Button>
                  ) : (
                    <Button
                      variant={plan.key === "annual" ? "primary" : "outline"}
                      size="lg"
                      className="w-full"
                    >
                      Upgrade to {plan.name}
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Fine print */}
        <p className="mt-8 text-center text-xs text-stone">
          Prices in USD. Cancel anytime.{" "}
          <a href="/terms" className="underline hover:text-ink transition-colors">
            Terms apply
          </a>.
        </p>
      </div>
    </main>
  );
}
