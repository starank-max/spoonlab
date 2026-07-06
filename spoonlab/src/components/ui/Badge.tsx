import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeVariant =
  | "default"
  | "spicy"
  | "easy"
  | "medium"
  | "hard"
  | "sweet"
  | "savory"
  | "vegan"
  | "gluten-free"
  | "ai"
  | "new";

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-muted text-charcoal",
  spicy: "bg-chili-light text-chili",
  easy: "bg-sage-light text-sage",
  medium: "bg-saffron-light text-[#8B6914]",
  hard: "bg-chili-light text-chili",
  sweet: "bg-saffron-light text-[#8B6914]",
  savory: "bg-muted text-charcoal",
  vegan: "bg-sage-light text-sage",
  "gluten-free": "bg-saffron-light text-[#8B6914]",
  ai: "bg-azure-light text-azure",
  new: "bg-terracotta-light text-terracotta",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
