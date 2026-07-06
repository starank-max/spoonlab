"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CUISINES } from "@/lib/cuisines";
import { cn } from "@/lib/utils";

export function CuisineSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-0.5 bg-muted rounded-full p-1">
      {CUISINES.map((cuisine) => (
        <Link
          key={cuisine.slug}
          href={cuisine.active ? `/${cuisine.slug}` : "#"}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap",
            pathname.includes(`/${cuisine.slug}`) && cuisine.active
              ? "bg-white text-ink shadow-sm"
              : cuisine.active
                ? "text-stone hover:text-charcoal"
                : "text-stone/50 cursor-not-allowed"
          )}
          onClick={(e) => {
            if (!cuisine.active) e.preventDefault();
          }}
          title={cuisine.active ? cuisine.name.en : `${cuisine.name.en} — Coming Soon`}
        >
          {cuisine.icon} {cuisine.name.en}
        </Link>
      ))}
    </div>
  );
}
