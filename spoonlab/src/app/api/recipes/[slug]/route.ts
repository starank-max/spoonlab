import { NextResponse } from "next/server";

const MOCK_RECIPE = {
  id: "1", slug: "kung-pao-chicken", cuisine: "chinese", category: "stir-fry",
  title: { en: "Kung Pao Chicken" },
  description: { en: "Sichuan classic with tender chicken, roasted peanuts, and dried chilies." },
  heroImage: "/images/recipes/kung-pao-chicken.jpg",
  prepTime: 15, cookTime: 10, servings: 4, difficulty: "easy",
  ingredients: [
    { name: "Boneless chicken thighs", amountImperial: "1½ lb", amountMetric: "680 g", notes: "cut into ¾-inch cubes", isSwappable: true, swapGroup: "chicken" },
    { name: "Soy sauce", amountImperial: "3 tbsp", amountMetric: "45 ml", notes: "divided", isSwappable: true, swapGroup: "soy-sauce" },
  ],
  steps: [
    { order: 1, instruction: { en: "Cut chicken into cubes and marinate with soy sauce and cornstarch." } },
    { order: 2, instruction: { en: "Mix the sauce ingredients and set aside." } },
  ],
  nutrition: { calories: 420, protein: 32, carbs: 18, fat: 24, sodium: 680, fiber: 3 },
  tags: ["spicy", "stir-fry"], rating: 4.8, ratingCount: 342,
};

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  return NextResponse.json({ ...MOCK_RECIPE, slug: params.slug });
}
