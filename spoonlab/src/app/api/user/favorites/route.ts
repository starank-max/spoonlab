import { NextResponse } from "next/server";

export async function GET() {
  // Mock — replace with actual auth check + Prisma query
  const favorites = [
    { id: "1", slug: "kung-pao-chicken", title: { en: "Kung Pao Chicken" }, totalTime: 25, heroImage: "/images/recipes/kung-pao-chicken.jpg", tags: ["spicy"] },
  ];
  return NextResponse.json({ favorites });
}

export async function POST(request: Request) {
  const { recipeId } = await request.json();
  return NextResponse.json({ success: true, recipeId });
}
