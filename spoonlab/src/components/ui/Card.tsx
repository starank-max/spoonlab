import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-7",
};

export function Card({
  className,
  hover = false,
  padding = "md",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-border shadow-xs",
        hover && "transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-transparent",
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "aspect-[4/3] rounded-md overflow-hidden bg-gradient-to-br from-[#F3EDE6] via-[#E8DDD0] to-[#DDCFBD] flex items-center justify-center text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
