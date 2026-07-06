import { NextResponse } from "next/server";

// Mock data — replace with Prisma queries in production
const MOCK_RECIPES = [
  { id: "1", slug: "kung-pao-chicken", title: { en: "Kung Pao Chicken" }, cuisine: "chinese", category: "stir-fry", totalTime: 25, difficulty: "easy", tags: ["spicy", "quick"], rating: 4.8, ratingCount: 342, heroImage: "/images/recipes/kung-pao-chicken.jpg" },
  { id: "2", slug: "mapo-tofu", title: { en: "Mapo Tofu" }, cuisine: "chinese", category: "braised", totalTime: 30, difficulty: "easy", tags: ["spicy", "vegetarian"], rating: 4.7, ratingCount: 218, heroImage: "/images/recipes/mapo-tofu.jpg" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cuisine = searchParams.get("cuisine") ?? "chinese";
  const category = searchParams.get("category");
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "12");

  let filtered = MOCK_RECIPES.filter((r) => r.cuisine === cuisine);
  if (category) filtered = filtered.filter((r) => r.category === category);

  const total = filtered.length;
  const recipes = filtered.slice((page - 1) * limit, page * limit);

  return NextResponse.json({ recipes, total, page, totalPages: Math.ceil(total / limit) });
}
