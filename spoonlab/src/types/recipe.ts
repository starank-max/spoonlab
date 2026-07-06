import type { CuisineSlug } from "./cuisine";

export interface Ingredient {
  id: string;
  name: string;
  amountImperial: string;
  amountMetric: string;
  notes?: string;
  isSwappable: boolean;
  swapGroup?: string;
}

export interface RecipeStep {
  id: string;
  order: number;
  instruction: Record<string, string>;
  image?: string;
  timerMinutes?: number;
}

export interface NutritionFacts {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sodium: number;
  fiber: number;
}

export interface Recipe {
  id: string;
  slug: string;
  cuisine: CuisineSlug;
  category: string;
  title: Record<string, string>;
  description: Record<string, string>;
  heroImage: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  difficulty: "easy" | "medium" | "hard";
  ingredients: Ingredient[];
  steps: RecipeStep[];
  nutrition: NutritionFacts;
  isAIGenerated: boolean;
  isPublished: boolean;
  tags: string[];
  rating: number;
  ratingCount: number;
  createdAt: string;
}

export type RecipeCard = Pick<
  Recipe,
  "id" | "slug" | "cuisine" | "category" | "title" |
  "heroImage" | "totalTime" | "difficulty" | "tags" | "rating" | "ratingCount"
>;

export interface AIGenerationInput {
  ingredients: string[];
  diet: string[];
  tools: string[];
  taste: string[];
  cuisine: string;
}

export interface AIGenerationResult {
  id: string;
  input: AIGenerationInput;
  output: {
    title: string;
    description: string;
    prepTime: number;
    cookTime: number;
    servings: number;
    ingredients: { name: string; amount: string }[];
  };
  createdAt: string;
}
