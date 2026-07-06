"use client";

import { useState } from "react";
import { Card, Badge } from "@/components/ui";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { cn } from "@/lib/utils";

// ── Product data ────────────────────────────────────────────────

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  emoji: string;
  rating: number;
  amazonUrl: string;
}

const PRODUCTS: Product[] = [
  {
    id: "carbon-steel-wok",
    name: "Carbon Steel Wok (14-inch)",
    category: "Woks & Pans",
    price: 39.99,
    emoji: "🍳",
    rating: 4.7,
    amazonUrl: "https://amazon.com/dp/example-wok",
  },
  {
    id: "bamboo-steamer",
    name: "Bamboo Steamer (10-inch)",
    category: "Woks & Pans",
    price: 24.99,
    emoji: "🧺",
    rating: 4.6,
    amazonUrl: "https://amazon.com/dp/example-steamer",
  },
  {
    id: "light-soy-sauce",
    name: "Pearl River Bridge Light Soy Sauce",
    category: "Sauces",
    price: 8.99,
    emoji: "🫙",
    rating: 4.8,
    amazonUrl: "https://amazon.com/dp/example-soy",
  },
  {
    id: "chinkiang-vinegar",
    name: "Gold Plum Chinkiang Vinegar",
    category: "Sauces",
    price: 9.99,
    emoji: "🍶",
    rating: 4.8,
    amazonUrl: "https://amazon.com/dp/example-vinegar",
  },
  {
    id: "spider-strainer",
    name: "Spider Strainer (Stainless Steel)",
    category: "Tools",
    price: 14.99,
    emoji: "🥢",
    rating: 4.5,
    amazonUrl: "https://amazon.com/dp/example-strainer",
  },
  {
    id: "chinese-cleaver",
    name: "Chinese Chef's Cleaver (8-inch)",
    category: "Tools",
    price: 29.99,
    emoji: "🔪",
    rating: 4.6,
    amazonUrl: "https://amazon.com/dp/example-cleaver",
  },
  {
    id: "food-of-sichuan",
    name: "The Food of Sichuan (Hardcover)",
    category: "Books",
    price: 35.0,
    emoji: "📖",
    rating: 4.9,
    amazonUrl: "https://amazon.com/dp/example-sichuan-book",
  },
  {
    id: "dumpling-rolling-pin",
    name: "Dumpling Rolling Pin (Wooden)",
    category: "Tools",
    price: 7.99,
    emoji: "🥟",
    rating: 4.4,
    amazonUrl: "https://amazon.com/dp/example-pin",
  },
];

const CATEGORIES = ["All", "Woks & Pans", "Sauces", "Tools", "Books"];

// ── Star rating component ───────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-0.5 text-sm text-saffron">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullStars) return <span key={i}>★</span>;
        if (i === fullStars && hasHalf) return <span key={i}>★</span>;
        return (
          <span key={i} className="text-border">
            ★
          </span>
        );
      })}
      <span className="text-xs text-stone ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Shop" }]}
          className="mb-6"
        />

        {/* Page header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-bold tracking-tight">
            Asian Grocery Shop
          </h1>
          <p className="mt-3 text-lg text-stone max-w-2xl">
            Tools &amp; ingredients we recommend. As an Amazon Associate we earn
            from qualifying purchases.
          </p>
        </div>

        {/* Affiliate disclosure banner */}
        <div className="bg-muted border border-border rounded-lg px-5 py-3 mb-8 text-xs text-stone leading-relaxed">
          <strong className="text-charcoal">Affiliate Disclosure:</strong>{" "}
          SpoonLab is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a means
          for sites to earn advertising fees by advertising and linking to
          Amazon.com. Product prices and availability are accurate as of the
          date indicated and are subject to change.
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-colors",
                activeTab === cat
                  ? "bg-terracotta text-white shadow-sm"
                  : "bg-white text-charcoal border border-border hover:bg-muted"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <Card
              key={product.id}
              hover
              padding="none"
              className="flex flex-col"
            >
              {/* Image area */}
              <div className="aspect-square bg-gradient-to-br from-muted via-[#EDE8E0] to-[#E0D9CF] flex items-center justify-center text-6xl rounded-t-lg">
                {product.emoji}
              </div>

              <div className="p-5 flex flex-col flex-1 gap-3">
                <Badge variant="default">{product.category}</Badge>

                <h3 className="font-display text-lg font-bold text-ink leading-snug">
                  {product.name}
                </h3>

                <StarRating rating={product.rating} />

                <p className="text-xl font-bold text-ink">
                  ${product.price.toFixed(2)}
                </p>

                <div className="mt-auto pt-2">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-[#E47911] hover:bg-[#D06E0F] px-4 py-2 rounded-full transition-colors"
                  >
                    Buy on Amazon →
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone text-lg">
              No products in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
