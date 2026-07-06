export type CuisineSlug = "chinese" | "french" | "spanish";

export interface Cuisine {
  slug: CuisineSlug;
  name: Record<string, string>;
  icon: string;
  active: boolean;
  launchedAt: string | null;
  categories: string[];
}

export interface CuisineCategory {
  slug: string;
  name: Record<string, string>;
  cuisine: CuisineSlug;
  description: Record<string, string>;
  image: string;
}
