"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { Badge, Button } from "@/components/ui";

interface HistoryItem {
  id: string;
  input: {
    ingredients: string[];
    diet: string[];
    tools: string[];
    taste: string[];
    cuisine: string;
  };
  output: {
    title: string;
    totalTime?: number;
    difficulty?: string;
    nutrition?: { calories: number };
  };
  createdAt: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/ai/history")
      .then((r) => r.json())
      .then((data) => setHistory(data.history ?? []))
      .catch(() => setHistory([]))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: string) {
    await fetch("/api/ai/history", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setHistory((prev) => prev.filter((h) => h.id !== id));
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "/dashboard" },
          { label: "AI History" },
        ]}
        className="mb-6"
      />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-1">AI Generation History</h1>
          <p className="text-sm text-stone">All your AI-generated recipes in one place.</p>
        </div>
        <Link href="/ai-generator">
          <Button size="sm">✨ New Generation</Button>
        </Link>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg border border-border p-5 animate-pulse">
              <div className="h-5 bg-muted rounded w-1/3 mb-3" />
              <div className="h-3 bg-muted rounded w-2/3" />
            </div>
          ))}
        </div>
      ) : history.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg border border-border">
          <span className="text-5xl mb-4 block">🤖</span>
          <h3 className="font-semibold text-lg mb-2">No Generations Yet</h3>
          <p className="text-stone text-sm mb-4">Start generating AI recipes and they&apos;ll appear here.</p>
          <Link href="/ai-generator">
            <Button variant="primary">Create Your First AI Recipe</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-border shadow-xs p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base mb-1.5">{item.output.title}</h3>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <Badge variant="ai">{item.input.cuisine}</Badge>
                    {item.output.difficulty && <Badge variant={item.output.difficulty === "easy" ? "easy" : item.output.difficulty === "medium" ? "medium" : "hard"}>{item.output.difficulty}</Badge>}
                    {item.output.totalTime && <span className="text-xs text-stone">🕐 {item.output.totalTime} min</span>}
                    {item.output.nutrition && <span className="text-xs text-stone">⚡ {item.output.nutrition.calories} kcal</span>}
                  </div>
                  <p className="text-xs text-stone">
                    Ingredients: {item.input.ingredients.join(", ")}
                  </p>
                  <p className="text-[11px] text-stone mt-1">
                    {new Date(item.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    {item.input.diet.length > 0 && !item.input.diet.includes("none") && ` · ${item.input.diet.join(", ")}`}
                    {item.input.tools.length > 0 && !item.input.tools.includes("any") && ` · ${item.input.tools.join(", ")}`}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-stone hover:text-chili transition-colors text-sm flex-shrink-0"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
          <p className="text-center text-xs text-stone pt-2">
            {history.length} generation{history.length !== 1 ? "s" : ""} total
          </p>
        </div>
      )}
    </div>
  );
}
