export type SubscriptionTier = "free" | "monthly" | "annual";
export type MeasurementSystem = "imperial" | "metric";

export interface DietaryProfile {
  glutenFree: boolean;
  keto: boolean;
  vegan: boolean;
  vegetarian: boolean;
  nutFree: boolean;
  dairyFree: boolean;
  lowSodium: boolean;
  halal: boolean;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
  locale: string;
  measurement: MeasurementSystem;
  supermarket?: string;
  dietaryProfile?: DietaryProfile;
  subscriptionTier: SubscriptionTier;
  aiGenerationsUsed: number;
  aiGenerationsLimit: number;
}
