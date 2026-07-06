"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { CUISINES } from "@/lib/cuisines";
import { Button } from "@/components/ui";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/chinese", label: "Chinese Recipes" },
  { href: "/ai-generator", label: "AI Generator" },
  { href: "/premium", label: "Premium" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Tips & Guides" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-ink/20 backdrop-blur-sm z-40 lg:hidden transition-opacity",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-16 left-0 right-0 bottom-0 bg-cream z-40 lg:hidden overflow-y-auto transition-transform duration-300",
          open ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="p-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block px-4 py-3.5 rounded-lg text-base font-medium text-charcoal hover:bg-muted transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <hr className="my-4 border-border" />

          <p className="px-4 text-xs font-semibold uppercase tracking-widest text-stone mb-2">
            Cuisines
          </p>
          {CUISINES.map((cuisine) => (
            <Link
              key={cuisine.slug}
              href={cuisine.active ? `/${cuisine.slug}` : "#"}
              onClick={(e) => {
                if (!cuisine.active) e.preventDefault();
                else onClose();
              }}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                cuisine.active
                  ? "text-charcoal hover:bg-muted"
                  : "text-stone/50"
              )}
            >
              {cuisine.icon} {cuisine.name.en}{" "}
              {!cuisine.active && <span className="text-xs ml-1">🔜</span>}
            </Link>
          ))}

          <div className="pt-6 px-4 space-y-3">
            <Link href="/signup" onClick={onClose}>
              <Button className="w-full" size="lg">Get Started Free</Button>
            </Link>
            <Link href="/login" onClick={onClose}>
              <Button variant="outline" className="w-full" size="lg">Sign In</Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
