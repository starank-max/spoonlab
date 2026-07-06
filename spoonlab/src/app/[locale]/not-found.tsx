import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <span className="text-6xl block mb-6">🍜</span>
        <h1 className="font-display text-4xl font-bold mb-3">Page Not Found</h1>
        <p className="text-stone mb-8 leading-relaxed">
          This page has wandered off the menu. It might have been moved, renamed, or was never here in the first place.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link href="/"><Button variant="primary">Go Home</Button></Link>
          <Link href="/chinese"><Button variant="outline">Browse Recipes</Button></Link>
        </div>
      </div>
    </div>
  );
}
