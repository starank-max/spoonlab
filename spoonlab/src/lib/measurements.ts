// Density-based measurement conversions (imperial ↔ metric)
// Used for ingredient-aware precision conversions

interface ConversionEntry {
  imperial: string;
  metric: string;
}

const VOLUME_TO_ML: Record<string, number> = {
  tsp: 4.93,
  tbsp: 14.79,
  "fl oz": 29.57,
  cup: 236.59,
  pint: 473.18,
  quart: 946.35,
  gallon: 3785.41,
};

const WEIGHT_TO_G: Record<string, number> = {
  oz: 28.35,
  lb: 453.59,
};

export function convertImperialToMetric(
  amount: number,
  unit: string
): { amount: number; unit: string } {
  const volumeMl = VOLUME_TO_ML[unit];
  if (volumeMl) {
    const totalMl = amount * volumeMl;
    if (totalMl >= 1000) return { amount: +(totalMl / 1000).toFixed(2), unit: "L" };
    return { amount: +totalMl.toFixed(0), unit: "ml" };
  }

  const weightG = WEIGHT_TO_G[unit];
  if (weightG) {
    const totalG = amount * weightG;
    if (totalG >= 1000) return { amount: +(totalG / 1000).toFixed(2), unit: "kg" };
    return { amount: +totalG.toFixed(0), unit: "g" };
  }

  return { amount, unit };
}

export function temperatureFtoC(f: number): number {
  return +(((f - 32) * 5) / 9).toFixed(0);
}

export function temperatureCtoF(c: number): number {
  return +((c * 9) / 5 + 32).toFixed(0);
}

export const COMMON_SWAPS: Record<string, string[]> = {
  "shaoxing-wine": ["Dry sherry", "Sake (Japanese rice wine)", "Apple juice + water (non-alcoholic)"],
  "soy-sauce": ["Tamari (GF)", "Coconut aminos (low sodium)", "Liquid aminos"],
  "black-vinegar": ["Balsamic vinegar", "Rice vinegar + pinch sugar", "Apple cider vinegar + honey"],
  "oyster-sauce": ["Hoisin sauce", "Soy sauce + sugar + mushroom stock", "Vegetarian oyster sauce"],
  "sesame-oil": ["Toasted sesame oil (same)", "Perilla oil", "Roasted peanut oil"],
  "sichuan-peppercorn": ["Black pepper + coriander seed (ground)", "Grains of paradise", "Lemon pepper"],
  "five-spice": ["Equal parts: cinnamon, fennel, star anise, clove, black pepper", "Garam masala (similar)", "Pumpkin pie spice + white pepper"],
  "star-anise": ["Fennel seeds + drop anise extract", "Chinese five-spice (contains it)", "Tarragon (different but complementary)"],
  "white-miso": ["Yellow miso (slightly stronger)", "Tahini + soy sauce (2:1)", "Doenjang (Korean, stronger — use half)"],
  "cornstarch": ["Potato starch (same ratio)", "Arrowroot powder (same ratio)", "Tapioca starch (same ratio)"],
  "hoisin-sauce": ["BBQ sauce + soy sauce (2:1)", "Plum sauce + five-spice", "Teriyaki sauce + molasses"],
};
