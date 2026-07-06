import Link from "next/link";
import { Button } from "@/components/ui";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-8">
        <Link href="/" className="font-display text-2xl font-bold">Spoon<span className="text-terracotta">Lab</span></Link>
        <h1 className="font-display text-2xl font-bold mt-6 mb-1">Welcome Back</h1>
        <p className="text-sm text-stone">Sign in to your kitchen</p>
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-semibold mb-1.5">Email</label>
          <input type="email" required className="w-full px-4 py-3 border border-border rounded-lg text-sm outline-none focus:border-terracotta" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5">Password</label>
          <input type="password" required className="w-full px-4 py-3 border border-border rounded-lg text-sm outline-none focus:border-terracotta" placeholder="••••••••" />
        </div>
        <Button type="submit" className="w-full" size="lg">Sign In</Button>
      </form>
      <div className="mt-4 text-center">
        <button className="w-full py-3 border border-border rounded-full text-sm font-semibold text-charcoal hover:bg-muted transition-colors">Continue with Google</button>
      </div>
      <p className="text-center text-sm text-stone mt-6">
        Don&apos;t have an account? <Link href="/signup" className="text-terracotta font-semibold hover:underline">Sign up</Link>
      </p>
    </div>
  );
}
