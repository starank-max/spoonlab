"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CUISINES } from "@/lib/cuisines";
import { MobileMenu } from "./MobileMenu";
import { CuisineSwitcher } from "./CuisineSwitcher";
import { UserMenu } from "./UserMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/chinese", label: "Recipes" },
  { href: "/ai-generator", label: "AI Generator" },
  { href: "/premium", label: "Premium" },
  { href: "/shop", label: "Shop" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight text-ink hover:opacity-80 transition-opacity"
        >
          Spoon<span className="text-terracotta">Lab</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3.5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                pathname === link.href
                  ? "bg-azure-light text-azure"
                  : "text-charcoal hover:bg-muted hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-3">
          <CuisineSwitcher />
          <UserMenu />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-5 h-0.5 bg-ink rounded transition-transform", mobileOpen && "rotate-45 translate-y-1")} />
          <span className={cn("block w-5 h-0.5 bg-ink rounded transition-opacity", mobileOpen && "opacity-0")} />
          <span className={cn("block w-5 h-0.5 bg-ink rounded transition-transform", mobileOpen && "-rotate-45 -translate-y-[7px]")} />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
