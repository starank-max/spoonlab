import Link from "next/link";
import { Button } from "@/components/ui";

export default function SpanishCategoryPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
      <span className="text-5xl">🥘</span>
      <h1 className="font-display text-2xl sm:text-3xl font-bold mt-4 mb-3">Spanish Cuisine — Coming Q2 2027</h1>
      <p className="text-stone mb-6">This category will be available when Spanish cuisine launches.</p>
      <Link href="/chinese"><Button variant="primary">Explore Chinese Recipes</Button></Link>
    </div>
  );
}
