import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} className="mb-6" />
      <h1 className="font-display text-3xl font-bold mb-2">Cookie Policy</h1>
      <p className="text-xs text-stone mb-8">Last Updated: July 2026</p>
      <div className="prose prose-stone max-w-none text-sm space-y-5">
        <section>
          <h2 className="font-display text-xl font-bold mb-3">What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help sites remember your preferences, keep you signed in, and understand how you use the site.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-3">How We Use Cookies</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Essential Cookies:</strong> Required for site functionality — authentication, security, and accessibility.</li>
            <li><strong>Preference Cookies:</strong> Remember your measurement system (oz/lb or g/ml), language, and supermarket selection.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand which recipes are popular and how users navigate the site (Plausible — privacy-first, no personal data).</li>
            <li><strong>Marketing Cookies:</strong> Used only if you opt in — for personalized offers and relevant ads.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-3">Your Choices</h2>
          <p>You can accept all cookies, reject non-essential cookies, or customize your preferences via our cookie settings panel. You can also control cookies through your browser settings at any time.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-3">Contact</h2>
          <p>Questions? Email <strong>privacy@spoonlab.com</strong>.</p>
        </section>
      </div>
    </div>
  );
}
