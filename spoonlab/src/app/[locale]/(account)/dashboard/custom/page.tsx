import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { Button } from "@/components/ui";

export default function CustomRecipesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "/dashboard" },
          { label: "Custom Recipes" },
        ]}
        className="mb-6"
      />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-1">
            My Custom Recipes
          </h1>
          <p className="text-sm text-stone">Your personal family recipes and private collection.</p>
        </div>
        <Button size="sm">+ Add Recipe</Button>
      </div>

      <div className="text-center py-16 bg-white rounded-lg border border-border">
        <span className="text-5xl mb-4 block">📖</span>
        <h3 className="font-semibold text-lg mb-2">No Custom Recipes Yet</h3>
        <p className="text-stone text-sm mb-4 max-w-md mx-auto">
          Add your family recipes, personal creations, or notes. These are private to your account.
        </p>
        <Button variant="primary">Add Your First Recipe</Button>
      </div>
    </div>
  );
}
