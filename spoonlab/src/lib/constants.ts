export const SITE = {
  name: "SpoonLab",
  tagline: "Cook Smarter, Taste Further.",
  domain: "spoonlab.com",
  email: "hello@spoonlab.com",
  social: {
    instagram: "@spoonlab",
    tiktok: "@spoonlab",
    youtube: "@spoonlab",
    pinterest: "@spoonlab",
  },
} as const;

export const LOCALES = ["en", "fr", "de", "es"] as const;
export const DEFAULT_LOCALE = "en";

export const SUBSCRIPTION_TIERS = {
  free: {
    name: "Free",
    price: 0,
    recipesPerMonth: 10,
    aiSwapsPerMonth: 5,
    aiGenerationsPerMonth: 3,
    ads: true,
  },
  monthly: {
    name: "Monthly",
    price: 5.99,
    recipesPerMonth: Infinity,
    aiSwapsPerMonth: Infinity,
    aiGenerationsPerMonth: Infinity,
    ads: false,
    stripePriceId: process.env.STRIPE_MONTHLY_PRICE_ID,
  },
  annual: {
    name: "Annual",
    price: 49.99,
    recipesPerMonth: Infinity,
    aiSwapsPerMonth: Infinity,
    aiGenerationsPerMonth: Infinity,
    ads: false,
    stripePriceId: process.env.STRIPE_ANNUAL_PRICE_ID,
  },
} as const;

export const RECIPES_PER_PAGE = 12;

export const AD_SLOTS = {
  bannerHome: "google-ads-banner-home",
  inFeedCategory: "google-ads-infeed-category",
  sidebarRecipe: "google-ads-sidebar-recipe",
  inFeedRecipe: "google-ads-infeed-recipe",
} as const;
