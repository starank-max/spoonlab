import Link from "next/link";
import { Button } from "@/components/ui";

export default function FrenchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
      <span className="text-6xl">🥐</span>
      <h1 className="font-display text-3xl sm:text-4xl font-bold mt-6 mb-3">French Cuisine — Coming Soon</h1>
      <p className="text-stone text-lg mb-8 max-w-md mx-auto">
        Coq au vin, ratatouille, crème brûlée — adapted for your kitchen with AI precision. Launching Q1 2027.
      </p>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Link href="/chinese"><Button variant="primary">Explore Chinese Recipes</Button></Link>
        <Link href="/ai-generator"><Button variant="outline">Try AI Generator</Button></Link>
      </div>
      <div className="mt-10 bg-white rounded-lg border border-border p-6 max-w-sm mx-auto">
        <p className="text-sm font-semibold mb-3">Get notified when French cuisine launches:</p>
        <div className="flex gap-2">
          <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-2.5 border border-border rounded-full text-sm outline-none focus:border-terracotta" />
          <Button size="sm">Notify Me</Button>
        </div>
      </div>
    </div>
  );
}
