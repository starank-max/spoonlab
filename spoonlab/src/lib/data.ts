/* eslint-disable */
// ==========================================================================
// SpoonLab Recipe Data — 20 Authentic Chinese Recipes
// All images in /public/images/recipes/{recipe-folder}/step-XX.png
// ==========================================================================

export interface RecipeCard {
  id: string;
  slug: string;
  title: Record<"en", string>;
  cuisine: string;
  category: string;
  totalTime: number;
  difficulty: string;
  tags: string[];
  rating: number;
  ratingCount: number;
  heroImage: string;
  imageFolder: string;
  stepCount: number;
}

export interface BlogPostCard {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: number;
  date: string;
}

export interface ProductCard {
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  link: string;
  rating: number;
}

// ── Category mapping ─────────────────────────────────────────────────────
const STIR_FRY = "stir-fry";
const DIM_SUM = "dim-sum";
const BRAISED = "braised";
const AIR_FRYER = "air-fryer";
const SOLO_MEAL = "solo-meal";
const FESTIVE = "festive";

// ── 20 Recipes ────────────────────────────────────────────────────────────

export const MOCK_RECIPES: RecipeCard[] = [
  // ────── STIR-FRY (Recipes 1-7) ──────
  {
    id: "1",
    slug: "cashew-chicken",
    title: { en: "Cashew Chicken" },
    cuisine: "chinese",
    category: STIR_FRY,
    totalTime: 25,
    difficulty: "easy",
    tags: ["Quick", "Nutty", "High-Protein"],
    rating: 4.7,
    ratingCount: 256,
    heroImage: "/images/recipes/01-cashew-chicken/step-06.png",
    imageFolder: "01-cashew-chicken",
    stepCount: 6,
  },
  {
    id: "2",
    slug: "mongolian-beef",
    title: { en: "Mongolian Beef" },
    cuisine: "chinese",
    category: STIR_FRY,
    totalTime: 20,
    difficulty: "easy",
    tags: ["Quick", "Savory", "Beef"],
    rating: 4.8,
    ratingCount: 312,
    heroImage: "/images/recipes/02-mongolian-beef/step-05.png",
    imageFolder: "02-mongolian-beef",
    stepCount: 5,
  },
  {
    id: "3",
    slug: "garlic-shrimp-snow-peas",
    title: { en: "Garlic Shrimp with Snow Peas" },
    cuisine: "chinese",
    category: STIR_FRY,
    totalTime: 15,
    difficulty: "easy",
    tags: ["Quick", "Seafood", "Light"],
    rating: 4.9,
    ratingCount: 198,
    heroImage: "/images/recipes/03-garlic-shrimp/step-05.png",
    imageFolder: "03-garlic-shrimp",
    stepCount: 5,
  },
  {
    id: "4",
    slug: "black-pepper-tofu",
    title: { en: "Black Pepper Tofu" },
    cuisine: "chinese",
    category: STIR_FRY,
    totalTime: 20,
    difficulty: "easy",
    tags: ["Vegetarian", "Peppery", "Crispy"],
    rating: 4.5,
    ratingCount: 143,
    heroImage: "/images/recipes/04-black-pepper-tofu/step-05.png",
    imageFolder: "04-black-pepper-tofu",
    stepCount: 5,
  },
  {
    id: "5",
    slug: "lemon-chicken",
    title: { en: "Lemon Chicken" },
    cuisine: "chinese",
    category: STIR_FRY,
    totalTime: 25,
    difficulty: "easy",
    tags: ["Sweet", "Tangy", "Crispy"],
    rating: 4.6,
    ratingCount: 267,
    heroImage: "/images/recipes/05-lemon-chicken/step-05.png",
    imageFolder: "05-lemon-chicken",
    stepCount: 5,
  },
  {
    id: "6",
    slug: "turkey-lettuce-wraps",
    title: { en: "Sesame Ginger Turkey Lettuce Wraps" },
    cuisine: "chinese",
    category: SOLO_MEAL,
    totalTime: 20,
    difficulty: "easy",
    tags: ["Low-Carb", "Quick", "Fresh"],
    rating: 4.4,
    ratingCount: 189,
    heroImage: "/images/recipes/06-turkey-lettuce-wraps/step-05.png",
    imageFolder: "06-turkey-lettuce-wraps",
    stepCount: 5,
  },
  {
    id: "7",
    slug: "teriyaki-salmon",
    title: { en: "Teriyaki Salmon" },
    cuisine: "chinese",
    category: STIR_FRY,
    totalTime: 20,
    difficulty: "easy",
    tags: ["Seafood", "Sweet", "Glazed"],
    rating: 4.8,
    ratingCount: 234,
    heroImage: "/images/recipes/07-teriyaki-salmon/step-05.png",
    imageFolder: "07-teriyaki-salmon",
    stepCount: 5,
  },

  // ────── SNACKS & SMALL BITES (Recipes 8-14) ──────
  {
    id: "8",
    slug: "air-fryer-spring-rolls",
    title: { en: "Air Fryer Spring Rolls" },
    cuisine: "chinese",
    category: DIM_SUM,
    totalTime: 30,
    difficulty: "medium",
    tags: ["Air Fryer", "Crispy", "Appetizer"],
    rating: 4.6,
    ratingCount: 178,
    heroImage: "/images/recipes/08-air-fryer-spring-rolls/step-05.png",
    imageFolder: "08-air-fryer-spring-rolls",
    stepCount: 5,
  },
  {
    id: "9",
    slug: "salt-pepper-chicken-wings",
    title: { en: "Baked Salt & Pepper Chicken Wings" },
    cuisine: "chinese",
    category: AIR_FRYER,
    totalTime: 45,
    difficulty: "easy",
    tags: ["Crispy", "Oven-Baked", "Party"],
    rating: 4.7,
    ratingCount: 298,
    heroImage: "/images/recipes/09-salt-pepper-wings/step-04.png",
    imageFolder: "09-salt-pepper-wings",
    stepCount: 4,
  },
  {
    id: "10",
    slug: "corn-egg-drop-soup",
    title: { en: "Chinese Corn & Egg Drop Soup" },
    cuisine: "chinese",
    category: SOLO_MEAL,
    totalTime: 15,
    difficulty: "easy",
    tags: ["Soup", "Comfort", "Quick"],
    rating: 4.3,
    ratingCount: 156,
    heroImage: "/images/recipes/10-corn-egg-drop-soup/step-04.png",
    imageFolder: "10-corn-egg-drop-soup",
    stepCount: 4,
  },
  {
    id: "11",
    slug: "chinese-steamed-eggs",
    title: { en: "Chinese Steamed Eggs (Silky Custard)" },
    cuisine: "chinese",
    category: SOLO_MEAL,
    totalTime: 20,
    difficulty: "easy",
    tags: ["Silky", "Comfort", "Simple"],
    rating: 4.4,
    ratingCount: 132,
    heroImage: "/images/recipes/11-steamed-eggs/step-05.png",
    imageFolder: "11-steamed-eggs",
    stepCount: 5,
  },
  {
    id: "12",
    slug: "five-spice-roasted-nuts",
    title: { en: "Chinese Five-Spice Roasted Nuts" },
    cuisine: "chinese",
    category: DIM_SUM,
    totalTime: 15,
    difficulty: "easy",
    tags: ["Snack", "Aromatic", "Party"],
    rating: 4.2,
    ratingCount: 98,
    heroImage: "/images/recipes/12-five-spice-nuts/step-03.png",
    imageFolder: "12-five-spice-nuts",
    stepCount: 3,
  },
  {
    id: "13",
    slug: "rice-paper-dumplings",
    title: { en: "Crispy Rice Paper Dumplings" },
    cuisine: "chinese",
    category: DIM_SUM,
    totalTime: 30,
    difficulty: "medium",
    tags: ["Crispy", "Appetizer", "Pan-Fried"],
    rating: 4.5,
    ratingCount: 167,
    heroImage: "/images/recipes/13-rice-paper-dumplings/step-05.png",
    imageFolder: "13-rice-paper-dumplings",
    stepCount: 5,
  },
  {
    id: "14",
    slug: "egg-tomato-drop-soup",
    title: { en: "Egg & Tomato Drop Soup" },
    cuisine: "chinese",
    category: SOLO_MEAL,
    totalTime: 10,
    difficulty: "easy",
    tags: ["Soup", "Quick", "Comfort"],
    rating: 4.1,
    ratingCount: 112,
    heroImage: "/images/recipes/14-egg-tomato-soup/step-03.png",
    imageFolder: "14-egg-tomato-soup",
    stepCount: 3,
  },

  // ────── BRAISED & SLOW-COOKED (Recipes 15-20) ──────
  {
    id: "15",
    slug: "lions-head-meatballs",
    title: { en: "Lion's Head Meatballs" },
    cuisine: "chinese",
    category: BRAISED,
    totalTime: 60,
    difficulty: "medium",
    tags: ["Braised", "Comfort", "Hearty"],
    rating: 4.8,
    ratingCount: 203,
    heroImage: "/images/recipes/15-lions-head-meatballs/step-06.png",
    imageFolder: "15-lions-head-meatballs",
    stepCount: 6,
  },
  {
    id: "16",
    slug: "three-cup-chicken",
    title: { en: "Three-Cup Chicken (San Bei Ji)" },
    cuisine: "chinese",
    category: BRAISED,
    totalTime: 35,
    difficulty: "easy",
    tags: ["Braised", "Basil", "Savory"],
    rating: 4.9,
    ratingCount: 287,
    heroImage: "/images/recipes/16-three-cup-chicken/step-06.png",
    imageFolder: "16-three-cup-chicken",
    stepCount: 6,
  },
  {
    id: "17",
    slug: "braised-chicken-mushrooms",
    title: { en: "Braised Chicken & Mushrooms" },
    cuisine: "chinese",
    category: BRAISED,
    totalTime: 45,
    difficulty: "easy",
    tags: ["Braised", "Umami", "Comfort"],
    rating: 4.6,
    ratingCount: 175,
    heroImage: "/images/recipes/17-braised-chicken-mushrooms/step-06.png",
    imageFolder: "17-braised-chicken-mushrooms",
    stepCount: 6,
  },
  {
    id: "18",
    slug: "soy-braised-tofu-eggs",
    title: { en: "Soy-Braised Tofu & Eggs" },
    cuisine: "chinese",
    category: BRAISED,
    totalTime: 30,
    difficulty: "easy",
    tags: ["Braised", "Vegetarian", "Umami"],
    rating: 4.5,
    ratingCount: 142,
    heroImage: "/images/recipes/18-soy-braised-tofu-eggs/step-05.png",
    imageFolder: "18-soy-braised-tofu-eggs",
    stepCount: 5,
  },
  {
    id: "19",
    slug: "braised-oxtail",
    title: { en: "Chinese Braised Oxtail" },
    cuisine: "chinese",
    category: BRAISED,
    totalTime: 150,
    difficulty: "medium",
    tags: ["Slow-Cooked", "Rich", "Hearty"],
    rating: 4.9,
    ratingCount: 221,
    heroImage: "/images/recipes/19-braised-oxtail/step-06.png",
    imageFolder: "19-braised-oxtail",
    stepCount: 6,
  },
  {
    id: "20",
    slug: "braised-pork-hock",
    title: { en: "Braised Pork Hock with Star Anise" },
    cuisine: "chinese",
    category: FESTIVE,
    totalTime: 120,
    difficulty: "medium",
    tags: ["Festive", "Rich", "Slow-Cooked"],
    rating: 4.7,
    ratingCount: 198,
    heroImage: "/images/recipes/20-braised-pork-hock/step-06.png",
    imageFolder: "20-braised-pork-hock",
    stepCount: 6,
  },
];

// ── Blog Posts ────────────────────────────────────────────────────────────

export const MOCK_BLOG_POSTS: BlogPostCard[] = [
  { slug: "substitutes-for-shaoxing-wine", title: "8 Substitutes for Shaoxing Wine", excerpt: "No Shaoxing wine? No problem. These supermarket-friendly alternatives work in every recipe.", category: "Ingredient Guides", image: "/images/blog/shaoxing.jpg", readTime: 5, date: "2026-07-06" },
  { slug: "wok-hei-at-home", title: "Wok Hei at Home: The 3-Minute Guide", excerpt: "That restaurant smokiness is achievable on your stovetop. Here's the science and the technique.", category: "Techniques", image: "/images/blog/wok-hei.jpg", readTime: 3, date: "2026-07-05" },
  { slug: "best-woks-electric-stoves-2026", title: "Best Woks for Electric Stoves — 2026 Guide", excerpt: "Flat-bottom woks that actually get hot enough for proper stir-frying.", category: "Tool Guides", image: "/images/blog/woks.jpg", readTime: 6, date: "2026-07-03" },
  { slug: "velveting-101", title: "Velveting 101: Silky Restaurant-Style Meat", excerpt: "The Chinese restaurant secret for impossibly tender chicken and beef.", category: "Techniques", image: "/images/blog/velveting.jpg", readTime: 4, date: "2026-07-01" },
  { slug: "how-to-fold-dumplings", title: "How to Fold Dumplings: Visual Guide", excerpt: "From simple half-moon to intricate pleated crescent.", category: "Techniques", image: "/images/blog/dumplings.jpg", readTime: 5, date: "2026-06-28" },
  { slug: "chinese-regional-cuisines-explained", title: "Chinese Regional Cuisines Explained", excerpt: "Sichuan, Cantonese, Hunan — what makes each unique.", category: "Culture", image: "/images/blog/regions.jpg", readTime: 8, date: "2026-06-25" },
  { slug: "air-fryer-vs-wok", title: "Air Fryer vs Wok: Chinese Cooking Test", excerpt: "We cooked 5 classic dishes both ways. The results surprised us.", category: "Tool Guides", image: "/images/blog/airfryer-test.jpg", readTime: 6, date: "2026-06-20" },
  { slug: "lunar-new-year-menu-planning", title: "Lunar New Year Menu Planning", excerpt: "Plan a complete feast for luck, prosperity, and family.", category: "Culture", image: "/images/blog/lny-menu.jpg", readTime: 7, date: "2026-06-15" },
];

// ── Affiliate Products ────────────────────────────────────────────────────

export const MOCK_PRODUCTS: ProductCard[] = [
  { name: "Carbon Steel Wok (12-inch)", slug: "carbon-steel-wok-12", category: "Woks & Pans", price: 39.99, image: "/images/shop/wok.jpg", link: "https://amazon.com/dp/example", rating: 4.7 },
  { name: "Bamboo Steamer (10-inch)", slug: "bamboo-steamer-10", category: "Tools", price: 24.99, image: "/images/shop/steamer.jpg", link: "https://amazon.com/dp/example", rating: 4.5 },
  { name: "Light Soy Sauce (15 fl oz)", slug: "light-soy-sauce", category: "Sauces", price: 8.99, image: "/images/shop/soy-sauce.jpg", link: "https://amazon.com/dp/example", rating: 4.8 },
  { name: "Chinkiang Black Vinegar", slug: "chinkiang-vinegar", category: "Sauces", price: 9.99, image: "/images/shop/vinegar.jpg", link: "https://amazon.com/dp/example", rating: 4.6 },
  { name: "Spider Strainer", slug: "spider-strainer", category: "Tools", price: 14.99, image: "/images/shop/strainer.jpg", link: "https://amazon.com/dp/example", rating: 4.5 },
  { name: "Chinese Cleaver (8-inch)", slug: "chinese-cleaver-8", category: "Tools", price: 29.99, image: "/images/shop/cleaver.jpg", link: "https://amazon.com/dp/example", rating: 4.7 },
  { name: "The Food of Sichuan (Hardcover)", slug: "food-of-sichuan-book", category: "Books", price: 35.00, image: "/images/shop/sichuan-book.jpg", link: "https://amazon.com/dp/example", rating: 4.9 },
  { name: "Dumpling Rolling Pin", slug: "dumpling-rolling-pin", category: "Tools", price: 7.99, image: "/images/shop/rolling-pin.jpg", link: "https://amazon.com/dp/example", rating: 4.3 },
];
