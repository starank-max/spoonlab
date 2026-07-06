import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} className="mb-6" />
      <h1 className="font-display text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-xs text-stone mb-8">Last Updated: July 2026</p>
      <div className="prose prose-stone max-w-none text-sm space-y-5">
        <section>
          <h2 className="font-display text-xl font-bold mb-3">1. Acceptance of Terms</h2>
          <p>By accessing SpoonLab, you agree to these Terms of Service. If you do not agree, please discontinue use of the platform.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-3">2. Use of Service</h2>
          <p>SpoonLab provides AI-generated recipes, ingredient substitutions, and cooking guidance for informational purposes. You are responsible for verifying ingredient safety, allergen information, and following proper food handling procedures.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-3">3. Membership & Billing</h2>
          <p>Free accounts have usage limits as described on our Pricing page. Paid subscriptions auto-renew unless cancelled. You may cancel anytime; access continues until the end of the current billing period. Refunds are handled per our Refund Policy.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-3">4. Intellectual Property</h2>
          <p>All content on SpoonLab — including recipes, text, images, and AI-generated outputs — is protected by copyright. You may print and use recipes for personal use. Commercial redistribution requires written permission.</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold mb-3">5. Contact</h2>
          <p>Questions about these Terms? Email <strong>legal@spoonlab.app</strong>.</p>
        </section>
      </div>
    </div>
  );
}
