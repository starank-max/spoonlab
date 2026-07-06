"use client";

import { useState } from "react";
import { Badge, Button, Card } from "@/components/ui";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Mock data                                                          */
/* ------------------------------------------------------------------ */

const MOCK_FAVORITES = [
  {
    id: "1",
    title: "Creamy Tuscan Chicken",
    image: "🍗",
    time: "35 min",
    difficulty: "medium" as const,
    cuisine: "Italian",
    savedAt: "2 days ago",
  },
  {
    id: "2",
    title: "Spicy Szechuan Noodles",
    image: "🍜",
    time: "20 min",
    difficulty: "easy" as const,
    cuisine: "Chinese",
    savedAt: "5 days ago",
  },
  {
    id: "3",
    title: "Classic Beef Bourguignon",
    image: "🥘",
    time: "2 hr 30 min",
    difficulty: "hard" as const,
    cuisine: "French",
    savedAt: "1 week ago",
  },
  {
    id: "4",
    title: "Mango Coconut Smoothie Bowl",
    image: "🥭",
    time: "10 min",
    difficulty: "easy" as const,
    cuisine: "Fusion",
    savedAt: "2 weeks ago",
  },
  {
    id: "5",
    title: "Garlic Butter Shrimp Pasta",
    image: "🍝",
    time: "25 min",
    difficulty: "medium" as const,
    cuisine: "Italian",
    savedAt: "3 weeks ago",
  },
  {
    id: "6",
    title: "Spanish Patatas Bravas",
    image: "🥔",
    time: "45 min",
    difficulty: "easy" as const,
    cuisine: "Spanish",
    savedAt: "1 month ago",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(MOCK_FAVORITES);

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <main className="min-h-screen bg-cream">
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Favorites" },
          ]}
          className="mb-6"
        />

        {/* Heading */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            My Favorites
          </h1>
          <Badge variant="default" className="text-sm">
            {favorites.length} saved
          </Badge>
        </div>

        {/* ---- Grid ---- */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((recipe) => (
              <Card
                key={recipe.id}
                hover
                padding="none"
                className="group overflow-hidden rounded-xl"
              >
                {/* image placeholder */}
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#F3EDE6] via-[#E8DDD0] to-[#DDCFBD] text-5xl">
                  {recipe.image}
                </div>

                {/* content */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      {recipe.title}
                    </h3>
                    <button
                      onClick={() => removeFavorite(recipe.id)}
                      className="shrink-0 rounded-full p-1 text-stone/50 transition-colors hover:bg-chili-light hover:text-chili"
                      aria-label={`Remove ${recipe.title} from favorites`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.999 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25-3.694-8.25-8.25-8.25zm3.53 10.22-1.06 1.06-2.47-2.47-2.47 2.47-1.06-1.06 2.47-2.47-2.47-2.47 1.06-1.06 2.47 2.47 2.47-2.47 1.06 1.06-2.47 2.47 2.47 2.47z" />
                      </svg>
                    </button>
                  </div>

                  {/* meta */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-stone">
                    <span>{recipe.time}</span>
                    <span className="text-border">|</span>
                    <Badge variant={recipe.difficulty}>
                      {recipe.difficulty}
                    </Badge>
                    <span className="text-border">|</span>
                    <span>{recipe.cuisine}</span>
                  </div>

                  <p className="mt-2 text-xs text-stone">
                    Saved {recipe.savedAt}
                  </p>

                  {/* view link */}
                  <a
                    href={`/recipes/${recipe.id}`}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-terracotta hover:text-terracotta-hover transition-colors"
                  >
                    View Recipe &rarr;
                  </a>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          /* ---- Empty state ---- */
          <Card padding="lg" className="rounded-xl text-center">
            <span className="text-5xl">
              &#128531;
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold text-ink">
              No favorites yet
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-stone">
              Start exploring recipes and tap the heart icon to save your
              favourites here.
            </p>
            <a
              href="/recipes"
              className="mt-6 inline-block"
            >
              <Button variant="primary">Browse Recipes</Button>
            </a>
          </Card>
        )}
      </div>
    </main>
  );
}
