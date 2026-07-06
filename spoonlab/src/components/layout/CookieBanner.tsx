"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function acceptAll() {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  }

  function acceptEssential() {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-lg w-[calc(100%-2rem)] bg-white rounded-lg shadow-xl p-5 border border-border animate-in slide-in-from-bottom-4 duration-300">
      <p className="text-sm text-charcoal leading-relaxed mb-4">
        We use cookies to personalize recipe recommendations and analyze site traffic.
        By continuing, you agree to our{" "}
        <Link href="/cookie-policy" className="text-terracotta underline font-medium">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="flex items-center gap-3">
        <Button variant="primary" size="sm" onClick={acceptAll} className="flex-1">
          Accept All
        </Button>
        <Button variant="outline" size="sm" onClick={acceptEssential} className="flex-1">
          Essential Only
        </Button>
      </div>
    </div>
  );
}
