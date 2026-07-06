import type { Cuisine } from "@/types/cuisine";

export const CUISINES: Cuisine[] = [
  {
    slug: "chinese",
    name: {
      en: "Chinese",
      fr: "Chinoise",
      de: "Chinesisch",
      es: "China",
    },
    icon: "🥡",
    active: true,
    launchedAt: "2026-07",
    categories: [
      "stir-fry",
      "dim-sum",
      "braised",
      "air-fryer",
      "solo-meal",
      "festive",
    ],
  },
  {
    slug: "french",
    name: {
      en: "French",
      fr: "Française",
      de: "Französisch",
      es: "Francesa",
    },
    icon: "🥐",
    active: false,
    launchedAt: null,
    categories: [],
  },
  {
    slug: "spanish",
    name: {
      en: "Spanish",
      fr: "Espagnole",
      de: "Spanisch",
      es: "Española",
    },
    icon: "🥘",
    active: false,
    launchedAt: null,
    categories: [],
  },
];

export function getCuisine(slug: string): Cuisine | undefined {
  return CUISINES.find((c) => c.slug === slug);
}

export function getActiveCuisines(): Cuisine[] {
  return CUISINES.filter((c) => c.active);
}

export function getCuisineCategories(cuisineSlug: string): string[] {
  return getCuisine(cuisineSlug)?.categories ?? [];
}

export const CATEGORY_META: Record<string, {
  name: Record<string, string>;
  description: Record<string, string>;
  icon: string;
}> = {
  "stir-fry": {
    name: { en: "Stir-Fry", fr: "Sautés", de: "Pfannengerichte", es: "Salteados" },
    description: { en: "Quick, high-heat dishes ready in 20 minutes or less.", fr: "Plats rapides à feu vif prêts en 20 minutes.", de: "Schnelle Gerichte in 20 Minuten.", es: "Platos rápidos a fuego alto listos en 20 minutos." },
    icon: "🔥",
  },
  "dim-sum": {
    name: { en: "Dim Sum & Snacks", fr: "Dim Sum & Bouchées", de: "Dim Sum & Snacks", es: "Dim Sum & Aperitivos" },
    description: { en: "Dumplings, pancakes, and bite-sized classics.", fr: "Raviolis, crêpes et classiques en bouchées.", de: "Teigtaschen, Pfannkuchen und Häppchen.", es: "Empanadillas, tortitas y clásicos en miniatura." },
    icon: "🥟",
  },
  "braised": {
    name: { en: "Braised & Slow-Cooked", fr: "Plats Mijotés", de: "Geschmortes", es: "Guisos y Estofados" },
    description: { en: "Rich, tender dishes that reward patience.", fr: "Plats riches qui récompensent la patience.", de: "Reichhaltige, zarte Gerichte für Geduldige.", es: "Platos ricos que premian la paciencia." },
    icon: "🍖",
  },
  "air-fryer": {
    name: { en: "Air Fryer Chinese", fr: "Chinois à Air Fryer", de: "Heißluft-Fritteuse", es: "Chino en Freidora de Aire" },
    description: { en: "Crispy, less oil — adapted for your air fryer.", fr: "Croustillant, moins d'huile.", de: "Knusprig mit weniger Öl.", es: "Crujiente, menos aceite." },
    icon: "♨️",
  },
  "solo-meal": {
    name: { en: "Solo Meals", fr: "Repas Solo", de: "Gerichte für eine Person", es: "Comidas Individuales" },
    description: { en: "Perfect portions for one. No leftovers.", fr: "Portions parfaites pour une personne.", de: "Perfekte Portionen für eine Person.", es: "Porciones perfectas para uno." },
    icon: "🍽️",
  },
  "festive": {
    name: { en: "Festive Dishes", fr: "Plats de Fête", de: "Festtagsgerichte", es: "Platos Festivos" },
    description: { en: "Lunar New Year, family gatherings, and special occasions.", fr: "Nouvel An lunaire, réunions de famille.", de: "Mondneujahr, Familientreffen.", es: "Año Nuevo Lunar, reuniones familiares." },
    icon: "🎊",
  },
};
