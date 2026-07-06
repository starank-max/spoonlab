import { Badge, Button, Card } from "@/components/ui";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { cn } from "@/lib/utils";
import { SUBSCRIPTION_TIERS } from "@/lib/constants";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const STATS = [
  { label: "Saved Recipes", value: 47, icon: "📖", href: "/dashboard/favorites" },
  { label: "AI Generations Used", value: 2, icon: "🤖", href: "/dashboard/history", suffix: `/${SUBSCRIPTION_TIERS.free.aiGenerationsPerMonth}` },
  { label: "Shopping Lists", value: 5, icon: "🛒", href: "/dashboard/custom" },
  { label: "Custom Recipes", value: 3, icon: "🧪", href: "/dashboard/custom" },
];

const QUICK_ACTIONS = [
  { label: "Browse Recipes", icon: "🔍", href: "/recipes" },
  { label: "AI Generator", icon: "✨", href: "/ai-generator" },
  { label: "My Favorites", icon: "❤️", href: "/dashboard/favorites" },
  { label: "Settings", icon: "⚙️", href: "/settings" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DashboardPage() {
  const userName = "Alex";
  const currentTier: keyof typeof SUBSCRIPTION_TIERS = "free"; // prod: from session
  const tier = SUBSCRIPTION_TIERS[currentTier];
  const used = 2;
  const max = tier.aiGenerationsPerMonth;
  const pct = Math.round((used / Number(max === Infinity ? 1 : max)) * 100);

  return (
    <main className="min-h-screen bg-cream">
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Dashboard" },
          ]}
          className="mb-6"
        />

        {/* Heading */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            My Kitchen
          </h1>
          <p className="mt-2 text-lg text-stone">
            Welcome back, {userName}! Here&rsquo;s your cooking hub.
          </p>
        </div>

        {/* ---- Subscription card ---- */}
        <Card
          padding="lg"
          className="mb-8 rounded-xl border shadow-sm"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron-light text-2xl">
                ⭐
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-ink">{tier.name} Plan</span>
                  <Badge variant={currentTier === "free" ? "default" : "new"}>
                    {currentTier === "free" ? "Free" : "Active"}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-stone">
                  {currentTier === "free"
                    ? "Upgrade to unlock unlimited AI generations and remove ads."
                    : "You have full access to all premium features."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* mini usage bar */}
              {currentTier === "free" && (
                <div className="hidden sm:block">
                  <div className="flex items-center justify-between text-xs text-stone">
                    <span>AI Generations</span>
                    <span>{used}/{max}</span>
                  </div>
                  <div className="mt-1 h-2 w-32 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-azure transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )}

              {(currentTier as string) !== "annual" ? (
                <Link href="/dashboard/subscriptions">
                  <Button variant={currentTier === "free" ? "primary" : "outline"} size="sm">
                    {currentTier === "free" ? "Upgrade Now" : "Manage Plan"}
                  </Button>
                </Link>
              ) : (
                <Link href="/dashboard/subscriptions">
                  <Button variant="outline" size="sm">
                    Manage Plan
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </Card>

        {/* ---- Stats grid ---- */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <Link key={stat.label} href={stat.href}>
              <Card hover className="rounded-lg text-center">
                <span className="text-3xl">{stat.icon}</span>
                <p className="mt-2 font-display text-3xl font-bold text-ink">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-lg font-normal text-stone">
                      {stat.suffix}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm text-stone">{stat.label}</p>
              </Card>
            </Link>
          ))}
        </div>

        {/* ---- Quick actions ---- */}
        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            Quick Actions
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {QUICK_ACTIONS.map((action) => (
              <Link key={action.label} href={action.href}>
                <Card
                  hover
                  className="flex flex-col items-center gap-1 rounded-lg py-3 text-center"
                >
                  <span className="text-2xl">{action.icon}</span>
                  <span className="text-sm font-medium text-charcoal">
                    {action.label}
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
