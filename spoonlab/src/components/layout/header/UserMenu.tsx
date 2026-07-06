"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

export function UserMenu() {
  // In production, use useSession() from next-auth/react
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/login">
          <Button variant="ghost" size="sm">Sign In</Button>
        </Link>
        <Link href="/signup">
          <Button size="sm">Get Started</Button>
        </Link>
      </div>
    );
  }

  return (
    <Link href="/dashboard">
      <Button variant="outline" size="sm">
        👤 My Kitchen
      </Button>
    </Link>
  );
}
