import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "SpoonLab — AI-Powered Multi-Cuisine Recipes",
  description:
    "Authentic Chinese recipes adapted for Western home cooks. AI ingredient swaps, dual-unit measurements, and supermarket-friendly ingredients.",
  metadataBase: new URL("https://spoonlab.com"),
  openGraph: {
    title: "SpoonLab — Cook Smarter, Taste Further",
    description:
      "AI-powered recipes that work with your supermarket. Chinese food tonight, French tomorrow.",
    siteName: "SpoonLab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpoonLab",
    description:
      "AI-powered recipes that work with your supermarket.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
