import Link from "next/link";
import { cn } from "@/lib/utils";

// Minimal sidebar — the dashboard pages use Breadcrumb for navigation.
// This layout adds a shared sidebar for desktop.
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-56 shrink-0">
          <h2 className="font-display text-xl font-bold mb-4">My Kitchen</h2>
          <nav className="space-y-1">
            <SidebarLink href="/dashboard">📊 Overview</SidebarLink>
            <SidebarLink href="/dashboard/subscriptions">💎 Subscription</SidebarLink>
            <SidebarLink href="/dashboard/favorites">❤️ Favorites</SidebarLink>
            <SidebarLink href="/dashboard/history">🤖 AI History</SidebarLink>
            <SidebarLink href="/dashboard/custom">📖 Custom Recipes</SidebarLink>
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}

function SidebarLink({ href, children }: { href: string; children: React.ReactNode }) {
  // In production, use usePathname() for active state
  return (
    <Link
      href={href}
      className="block px-4 py-2.5 rounded-lg text-sm font-medium text-charcoal hover:bg-muted hover:text-ink transition-colors"
    >
      {children}
    </Link>
  );
}
