import Link from "next/link";
import { SITE } from "@/lib/constants";

const FOOTER_LINKS = {
  Recipes: [
    { href: "/chinese", label: "Chinese Recipes" },
    { href: "/chinese/stir-fry", label: "Stir-Fry" },
    { href: "/chinese/dim-sum", label: "Dim Sum" },
    { href: "/chinese/air-fryer", label: "Air Fryer Chinese" },
    { href: "/chinese/festive", label: "Festive Dishes" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Tips & Guides" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
    { href: "/premium", label: "Premium" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookie-policy", label: "Cookie Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/disclaimer", label: "Food Safety Disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-bold text-ink">
              Spoon<span className="text-terracotta">Lab</span>
            </Link>
            <p className="mt-3 text-sm text-stone leading-relaxed max-w-xs">
              AI-powered recipes that work with your supermarket. Chinese today, French tomorrow, Spanish soon.
            </p>
            <p className="mt-4 text-xs text-stone">
              {SITE.social.instagram} · {SITE.social.tiktok}
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-4">
                {title}
              </h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone">
          <span>&copy; {new Date().getFullYear()} {SITE.name}. {SITE.tagline}</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-terracotta transition-colors">Instagram</a>
            <a href="#" className="hover:text-terracotta transition-colors">TikTok</a>
            <a href="#" className="hover:text-terracotta transition-colors">YouTube</a>
            <a href="#" className="hover:text-terracotta transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
