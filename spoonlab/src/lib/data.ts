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

export const MOCK_RECIPES: RecipeCard[] = [
  {
    id: "1",
    slug: "kung-pao-chicken",
    title: { en: "Kung Pao Chicken" },
    cuisine: "chinese",
    category: "stir-fry",
    totalTime: 25,
    difficulty: "easy",
    tags: ["spicy", "stir-fry", "quick", "high-protein"],
    rating: 4.8,
    ratingCount: 342,
    heroImage: "/images/recipes/kung-pao-chicken.jpg",
  },
  {
    id: "2",
    slug: "mapo-tofu",
    title: { en: "Mapo Tofu" },
    cuisine: "chinese",
    category: "braised",
    totalTime: 30,
    difficulty: "easy",
    tags: ["spicy", "vegetarian", "quick"],
    rating: 4.7,
    ratingCount: 218,
    heroImage: "/images/recipes/mapo-tofu.jpg",
  },
  {
    id: "3",
    slug: "char-siu-pork",
    title: { en: "Char Siu Pork" },
    cuisine: "chinese",
    category: "roasted",
    totalTime: 60,
    difficulty: "medium",
    tags: ["roasted", "bbq", "high-protein"],
    rating: 4.9,
    ratingCount: 176,
    heroImage: "/images/recipes/char-siu-pork.jpg",
  },
  {
    id: "4",
    slug: "scallion-pancakes",
    title: { en: "Scallion Pancakes" },
    cuisine: "chinese",
    category: "appetizers",
    totalTime: 40,
    difficulty: "medium",
    tags: ["vegetarian", "crispy", "appetizer"],
    rating: 4.6,
    ratingCount: 298,
    heroImage: "/images/recipes/scallion-pancakes.jpg",
  },
  {
    id: "5",
    slug: "dan-dan-noodles",
    title: { en: "Dan Dan Noodles" },
    cuisine: "chinese",
    category: "noodles",
    totalTime: 25,
    difficulty: "easy",
    tags: ["spicy", "noodles", "quick"],
    rating: 4.7,
    ratingCount: 203,
    heroImage: "/images/recipes/dan-dan-noodles.jpg",
  },
  {
    id: "6",
    slug: "orange-chicken",
    title: { en: "Orange Chicken" },
    cuisine: "chinese",
    category: "stir-fry",
    totalTime: 35,
    difficulty: "medium",
    tags: ["sweet", "crispy", "stir-fry"],
    rating: 4.5,
    ratingCount: 421,
    heroImage: "/images/recipes/orange-chicken.jpg",
  },
  {
    id: "7",
    slug: "beef-broccoli",
    title: { en: "Beef & Broccoli" },
    cuisine: "chinese",
    category: "stir-fry",
    totalTime: 25,
    difficulty: "easy",
    tags: ["quick", "high-protein", "stir-fry"],
    rating: 4.6,
    ratingCount: 367,
    heroImage: "/images/recipes/beef-broccoli.jpg",
  },
  {
    id: "8",
    slug: "wonton-soup",
    title: { en: "Wonton Soup" },
    cuisine: "chinese",
    category: "soups",
    totalTime: 50,
    difficulty: "medium",
    tags: ["soup", "comfort-food", "dumplings"],
    rating: 4.8,
    ratingCount: 189,
    heroImage: "/images/recipes/wonton-soup.jpg",
  },
];

export const MOCK_BLOG_POSTS: BlogPostCard[] = [
  {
    slug: "substitutes-shaoxing-wine",
    title: "8 Substitutes for Shaoxing Wine in Chinese Cooking",
    excerpt: "No Shaoxing wine? No problem. These supermarket-friendly alternatives work in every recipe.",
    category: "Ingredient Guides",
    image: "/images/blog/shaoxing.jpg",
    readTime: 5,
    date: "2026-06-15",
  },
  {
    slug: "wok-hei-at-home",
    title: "Wok Hei at Home: The 3-Minute Guide",
    excerpt: "That restaurant smokiness is achievable on your stovetop. Here's the science and the technique.",
    category: "Techniques",
    image: "/images/blog/wok-hei.jpg",
    readTime: 3,
    date: "2026-06-10",
  },
  {
    slug: "essential-chinese-pantry",
    title: "The Essential Chinese Pantry: 12 Ingredients You Need",
    excerpt: "Stock your kitchen with these fundamentals and you'll be ready to cook any Chinese dish.",
    category: "Ingredient Guides",
    image: "/images/blog/pantry.jpg",
    readTime: 7,
    date: "2026-05-28",
  },
  {
    slug: "knife-skills-chinese-cooking",
    title: "Knife Skills Every Chinese Home Cook Should Know",
    excerpt: "From julienned ginger to uniform stir-fry cuts, these techniques will transform your prep.",
    category: "Techniques",
    image: "/images/blog/knife-skills.jpg",
    readTime: 6,
    date: "2026-05-20",
  },
  {
    slug: "regional-chinese-cuisines",
    title: "Beyond Cantonese: A Guide to China's 8 Great Regional Cuisines",
    excerpt: "Sichuan, Hunan, Jiangsu, and more — discover the flavors that define each region.",
    category: "Culture",
    image: "/images/blog/regional-cuisines.jpg",
    readTime: 10,
    date: "2026-05-12",
  },
  {
    slug: "msg-myth-debunked",
    title: "The MSG Myth: Why Umami Seasoning Is Perfectly Safe",
    excerpt: "Decades of misinformation debunked. Here's the science behind monosodium glutamate.",
    category: "Culture",
    image: "/images/blog/msg.jpg",
    readTime: 4,
    date: "2026-04-30",
  },
  {
    slug: "frozen-dumpling-guide",
    title: "Make-Ahead Frozen Dumplings: Batch Cooking for Busy Weeks",
    excerpt: "Spend a Sunday afternoon folding dumplings and eat like a king all month long.",
    category: "Meal Prep",
    image: "/images/blog/dumplings.jpg",
    readTime: 8,
    date: "2026-04-22",
  },
  {
    slug: "best-rice-cookers-2026",
    title: "The Best Rice Cookers of 2026: Tested and Reviewed",
    excerpt: "From budget induction models to premium Zojirushi, find the right rice cooker for your kitchen.",
    category: "Equipment",
    image: "/images/blog/rice-cookers.jpg",
    readTime: 6,
    date: "2026-04-15",
  },
];

export const MOCK_PRODUCTS: ProductCard[] = [
  {
    name: "Carbon Steel Wok (12-inch)",
    slug: "carbon-steel-wok-12",
    category: "Woks & Pans",
    price: 39.99,
    image: "/images/shop/wok.jpg",
    link: "https://amazon.com/dp/example",
    rating: 4.7,
  },
  {
    name: "Bamboo Steamer (10-inch)",
    slug: "bamboo-steamer-10",
    category: "Tools",
    price: 24.99,
    image: "/images/shop/steamer.jpg",
    link: "https://amazon.com/dp/example",
    rating: 4.5,
  },
  {
    name: "Chinese Cleaver (8-inch)",
    slug: "chinese-cleaver-8",
    category: "Knives",
    price: 49.99,
    image: "/images/shop/cleaver.jpg",
    link: "https://amazon.com/dp/example",
    rating: 4.8,
  },
  {
    name: "Clay Pot (3-quart)",
    slug: "clay-pot-3qt",
    category: "Cookware",
    price: 34.99,
    image: "/images/shop/clay-pot.jpg",
    link: "https://amazon.com/dp/example",
    rating: 4.4,
  },
  {
    name: "Sichuan Peppercorns (Premium)",
    slug: "sichuan-peppercorns-premium",
    category: "Pantry",
    price: 12.99,
    image: "/images/shop/peppercorns.jpg",
    link: "https://amazon.com/dp/example",
    rating: 4.6,
  },
  {
    name: "Lee Kum Kee Premium Oyster Sauce",
    slug: "oyster-sauce-lkk",
    category: "Pantry",
    price: 8.99,
    image: "/images/shop/oyster-sauce.jpg",
    link: "https://amazon.com/dp/example",
    rating: 4.9,
  },
  {
    name: "Wok Spatula & Ladle Set",
    slug: "wok-spatula-ladle-set",
    category: "Tools",
    price: 19.99,
    image: "/images/shop/wok-tools.jpg",
    link: "https://amazon.com/dp/example",
    rating: 4.5,
  },
  {
    name: "Rice Cooker (5.5-cup)",
    slug: "rice-cooker-5-5-cup",
    category: "Appliances",
    price: 89.99,
    image: "/images/shop/rice-cooker.jpg",
    link: "https://amazon.com/dp/example",
    rating: 4.7,
  },
];
