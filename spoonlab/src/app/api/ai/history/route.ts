// ==========================================================================
// GET /api/ai/history — User's AI generation history
// DELETE /api/ai/history — Delete a generation record
// ==========================================================================

import { NextResponse } from "next/server";

// In production: replace with Prisma queries
const MOCK_HISTORY = [
  {
    id: "gen_001",
    input: { ingredients: ["chicken breast", "broccoli", "garlic"], diet: ["gluten-free"], tools: ["one-pan"], taste: ["savory"], cuisine: "chinese" },
    output: { title: "Garlic Soy Chicken & Broccoli Stir-Fry", totalTime: 25, difficulty: "easy", nutrition: { calories: 380 } },
    createdAt: "2026-07-06T18:30:00Z",
  },
  {
    id: "gen_002",
    input: { ingredients: ["ground pork", "tofu"], diet: [], tools: ["wok"], taste: ["spicy"], cuisine: "chinese" },
    output: { title: "Mapo Tofu with Ground Pork", totalTime: 30, difficulty: "easy", nutrition: { calories: 420 } },
    createdAt: "2026-07-05T12:15:00Z",
  },
];

export async function GET() {
  // prod: const session = await getServerSession(authOptions);
  //       const history = await prisma.aIGeneration.findMany({ where: { userId }, orderBy: { createdAt: "desc" }, take: 50 });
  return NextResponse.json({ history: MOCK_HISTORY, total: MOCK_HISTORY.length });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  // prod: await prisma.aIGeneration.delete({ where: { id, userId } });
  return NextResponse.json({ success: true, id });
}
