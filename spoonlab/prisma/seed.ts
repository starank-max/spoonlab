import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed 3 Chinese recipes
  await prisma.recipe.create({
    data: {
      slug: "kung-pao-chicken",
      cuisine: "chinese",
      category: "stir-fry",
      title: { en: "Kung Pao Chicken" },
      description: { en: "Sichuan classic with tender chicken, roasted peanuts, and dried chilies in a savory-sweet sauce." },
      heroImage: "/images/recipes/kung-pao-chicken.jpg",
      prepTime: 15,
      cookTime: 10,
      servings: 4,
      difficulty: "easy",
      nutrition: { calories: 420, protein: 32, carbs: 18, fat: 24, sodium: 680, fiber: 3 },
      tags: ["spicy", "stir-fry", "quick", "high-protein"],
      rating: 4.8,
      ratingCount: 342,
      isPublished: true,
      ingredients: {
        create: [
          { order: 0, name: "Boneless chicken thighs", amountImperial: "1½ lb", amountMetric: "680 g", notes: "cut into ¾-inch cubes", isSwappable: true, swapGroup: "chicken" },
          { order: 1, name: "Soy sauce", amountImperial: "3 tbsp", amountMetric: "45 ml", notes: "divided; use tamari for GF", isSwappable: true, swapGroup: "soy-sauce" },
          { order: 2, name: "Chinese black vinegar", amountImperial: "2 tbsp", amountMetric: "30 ml", notes: "or balsamic vinegar", isSwappable: true, swapGroup: "black-vinegar" },
          { order: 3, name: "Sesame oil", amountImperial: "1 tbsp", amountMetric: "15 ml", notes: "toasted", isSwappable: false },
          { order: 4, name: "Cornstarch", amountImperial: "2 tsp", amountMetric: "10 g", notes: "divided", isSwappable: true, swapGroup: "cornstarch" },
          { order: 5, name: "Granulated sugar", amountImperial: "2 tbsp", amountMetric: "25 g", notes: "", isSwappable: true, swapGroup: "sugar" },
          { order: 6, name: "Dried red chili peppers", amountImperial: "8-10", amountMetric: "8-10", notes: "adjust to heat preference", isSwappable: false },
          { order: 7, name: "Sichuan peppercorns", amountImperial: "1 tsp", amountMetric: "5 g", notes: "or ½ tsp black pepper + ¼ tsp coriander seed", isSwappable: true, swapGroup: "sichuan-peppercorn" },
          { order: 8, name: "Garlic", amountImperial: "4 cloves", amountMetric: "4 cloves", notes: "minced", isSwappable: false },
          { order: 9, name: "Fresh ginger", amountImperial: "1-inch piece", amountMetric: "2.5 cm", notes: "julienned", isSwappable: false },
          { order: 10, name: "Scallions", amountImperial: "4 stalks", amountMetric: "4 stalks", notes: "whites & greens separated", isSwappable: false },
          { order: 11, name: "Roasted unsalted peanuts", amountImperial: "½ cup", amountMetric: "75 g", notes: "", isSwappable: true, swapGroup: "peanuts" },
          { order: 12, name: "Vegetable oil", amountImperial: "2 tbsp", amountMetric: "30 ml", notes: "for stir-frying", isSwappable: true, swapGroup: "oil" },
        ],
      },
      steps: {
        create: [
          { order: 1, instruction: { en: "Cut chicken thighs into bite-sized cubes. Toss with 1 tbsp soy sauce, 1 tsp cornstarch, and a pinch of white pepper. Let marinate while you prep the sauce and vegetables." } },
          { order: 2, instruction: { en: "In a small bowl, whisk together soy sauce, black vinegar, sugar, sesame oil, and remaining cornstarch mixed with 2 tbsp water. Set aside." } },
          { order: 3, instruction: { en: "Heat 2 tbsp oil in a large nonstick skillet over high heat until shimmering. Add chicken in a single layer. Let sear undisturbed for 45 seconds, then stir-fry until golden—about 3 minutes. Remove and set aside." }, timerMinutes: 3 },
          { order: 4, instruction: { en: "Reduce heat to medium. In the same skillet, add dried red chilies and Sichuan peppercorns. Stir for 20 seconds until fragrant. Add garlic, ginger, and scallion whites. Cook 30 seconds more." } },
          { order: 5, instruction: { en: "Return chicken to the skillet. Pour sauce around the edges—it should sizzle and thicken instantly. Toss to coat. Add roasted peanuts and scallion greens. Toss once more and serve immediately over steamed rice." }, timerMinutes: 1 },
          { order: 6, instruction: { en: "Transfer to a warm serving plate. Garnish with extra scallions and a drizzle of chili oil if desired. Serve immediately while the chicken is crispy-tender and the peanuts are crunchy." } },
        ],
      },
    },
  });

  // Seed blog posts
  await prisma.blogPost.createMany({
    data: [
      { slug: "substitutes-shaoxing-wine", title: "8 Substitutes for Shaoxing Wine in Chinese Cooking", excerpt: "No Shaoxing wine? No problem. These supermarket-friendly alternatives work in every recipe.", content: "Full article content...", category: "Ingredient Guides", image: "/images/blog/shaoxing.jpg", readTime: 5, published: true },
      { slug: "wok-hei-at-home", title: "Wok Hei at Home: The 3-Minute Guide", excerpt: "That restaurant smokiness is achievable on your stovetop. Here's the science and the technique.", content: "Full article content...", category: "Techniques", image: "/images/blog/wok-hei.jpg", readTime: 3, published: true },
    ],
  });

  // Seed affiliate products
  await prisma.affiliateProduct.createMany({
    data: [
      { name: "Carbon Steel Wok (12-inch)", slug: "carbon-steel-wok-12", category: "Woks & Pans", price: 39.99, image: "/images/shop/wok.jpg", link: "https://amazon.com/dp/example", rating: 4.7 },
      { name: "Bamboo Steamer (10-inch)", slug: "bamboo-steamer-10", category: "Tools", price: 24.99, image: "/images/shop/steamer.jpg", link: "https://amazon.com/dp/example", rating: 4.5 },
    ],
  });

  console.log("✅ Seed completed: recipes, blog posts, products");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
