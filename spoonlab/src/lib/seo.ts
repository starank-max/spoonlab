import type { Metadata } from "next";
import { SITE } from "./constants";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

export function generateMetadata({
  title,
  description,
  image = "/images/og/default.jpg",
  noIndex = false,
  type = "website",
}: SEOProps): Metadata {
  const fullTitle = `${title} — ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      siteName: SITE.name,
      locale: "en_US",
      type,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false } : undefined,
    alternates: {
      canonical: `https://${SITE.domain}`,
    },
  };
}
