import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { SITE } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
          className="mb-8"
        />

        {/* Page header */}
        <h1 className="font-display text-4xl sm:text-5xl text-ink font-bold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-stone mb-10">Last updated: July 7, 2026</p>

        {/* Intro */}
        <div className="prose prose-stone prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-charcoal prose-p:leading-relaxed prose-li:text-charcoal prose-ul:my-4 space-y-6">
          <p>
            At {SITE.name} (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;), we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website{" "}
            <a
              href={`https://${SITE.domain}`}
              className="text-azure underline"
            >
              {SITE.domain}
            </a>{" "}
            (the &quot;Service&quot;). Please read this policy carefully.
          </p>

          <h2>1. Data We Collect</h2>
          <p>
            We collect information that you provide directly to us, as well as
            information that is automatically collected when you use the
            Service.
          </p>
          <h3>Information you provide</h3>
          <ul>
            <li>
              <strong>Account Information:</strong> When you create an account,
              we collect your name, email address, and password.
            </li>
            <li>
              <strong>Subscription Data:</strong> When you subscribe to a paid
              plan, our payment processor (Stripe) collects your payment card
              details. We do not store full credit card numbers on our servers.
            </li>
            <li>
              <strong>Recipe Interactions:</strong> We store your saved recipes,
              dietary preferences, cuisine selections, and AI swap history to
              personalize your experience.
            </li>
            <li>
              <strong>Communications:</strong> When you contact us via email or
              our contact form, we collect your name, email address, and the
              content of your message.
            </li>
          </ul>
          <h3>Information collected automatically</h3>
          <ul>
            <li>
              <strong>Usage Data:</strong> Pages visited, time on site, recipe
              views, and feature interactions — collected via PostHog analytics.
            </li>
            <li>
              <strong>Device Data:</strong> Browser type, operating system,
              device type, IP address, and approximate location derived from IP.
            </li>
            <li>
              <strong>Cookies:</strong> See Section 5 below for our full cookie
              policy.
            </li>
          </ul>

          <h2>2. Legal Basis for Processing (GDPR)</h2>
          <p>
            If you are located in the European Economic Area (EEA) or the United
            Kingdom, our legal basis for processing your personal data depends
            on the context:
          </p>
          <ul>
            <li>
              <strong>Contractual necessity:</strong> We process your data to
              provide the Service you have requested (e.g., creating your
              account, processing your subscription).
            </li>
            <li>
              <strong>Legitimate interests:</strong> We process usage data to
              improve the Service, prevent fraud, and secure our platform.
            </li>
            <li>
              <strong>Consent:</strong> We rely on your consent for marketing
              emails and non-essential cookies. You may withdraw consent at any
              time.
            </li>
            <li>
              <strong>Legal obligation:</strong> We may process data to comply
              with applicable laws and regulations.
            </li>
          </ul>

          <h2>3. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the following rights
            regarding your personal data:
          </p>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of the personal data we
              hold about you.
            </li>
            <li>
              <strong>Rectification:</strong> Request correction of inaccurate
              or incomplete data.
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your personal data
              (&quot;right to be forgotten&quot;), subject to legal retention
              requirements.
            </li>
            <li>
              <strong>Portability:</strong> Request a machine-readable export of
              your data for transfer to another service.
            </li>
            <li>
              <strong>Objection:</strong> Object to processing based on
              legitimate interests, including direct marketing.
            </li>
            <li>
              <strong>Restriction:</strong> Request that we limit processing of
              your data in certain circumstances.
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-azure underline"
            >
              {SITE.email}
            </a>
            . We will respond within 30 days. You also have the right to lodge a
            complaint with your local data protection authority.
          </p>

          <h2>4. Third-Party Processors</h2>
          <p>
            We share data with the following service providers to operate the
            Service:
          </p>
          <ul>
            <li>
              <strong>Vercel</strong> — Hosting and edge functions (US, global
              edge network).
            </li>
            <li>
              <strong>Supabase</strong> — Database hosting and authentication
              (US, encrypted at rest and in transit).
            </li>
            <li>
              <strong>Stripe</strong> — Payment processing. Stripe is PCI-DSS
              Level 1 compliant. Review their{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-azure underline"
              >
                privacy policy
              </a>
              .
            </li>
            <li>
              <strong>Anthropic (Claude API)</strong> — AI-powered recipe swaps,
              ingredient substitutions, and recipe generation. Data sent to the
              API is not used for model training.
            </li>
            <li>
              <strong>PostHog</strong> — Product analytics (EU-hosted option
              available).
            </li>
            <li>
              <strong>Google AdSense</strong> — Display advertising for
              free-tier users. Google may use cookies to serve personalized ads.
              See their{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-azure underline"
              >
                privacy policy
              </a>
              .
            </li>
          </ul>

          <h2>5. Cookies</h2>
          <p>We use the following categories of cookies:</p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> Required for the Service to
              function — authentication sessions, CSRF tokens, and language
              preferences. These cannot be disabled.
            </li>
            <li>
              <strong>Analytics cookies:</strong> PostHog cookies track
              anonymous usage patterns to help us improve the Service.
            </li>
            <li>
              <strong>Advertising cookies:</strong> Google AdSense cookies serve
              personalized ads. Free-tier users can opt out via the cookie
              banner. Paid subscribers do not see ads.
            </li>
            <li>
              <strong>Affiliate cookies:</strong> Amazon Associates cookies
              track referrals when you click product links in our shop.
            </li>
          </ul>
          <p>
            You can manage cookie preferences at any time by clicking the
            &quot;Cookie Settings&quot; link in the footer.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data for as long as your account is active
            or as needed to provide the Service:
          </p>
          <ul>
            <li>
              <strong>Account data:</strong> Retained until you delete your
              account. Upon deletion, personal data is removed within 30 days.
            </li>
            <li>
              <strong>Analytics data:</strong> Retained for a maximum of 24
              months in identifiable form, then aggregated and anonymized.
            </li>
            <li>
              <strong>Payment records:</strong> Retained for the period required
              by applicable tax and accounting laws (typically 7 years).
            </li>
            <li>
              <strong>Server logs:</strong> Retained for 90 days, then
              automatically purged.
            </li>
          </ul>

          <h2>7. International Transfers</h2>
          <p>
            {SITE.name} is based in the United Kingdom. Your data may be
            transferred to and processed in the United States and other
            jurisdictions where our service providers operate. We ensure
            adequate safeguards — including Standard Contractual Clauses (SCCs)
            and data processing agreements — are in place for all international
            transfers.
          </p>

          <h2>8. Contact</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your data rights, contact us at:
          </p>
          <p>
            Email:{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-azure underline"
            >
              {SITE.email}
            </a>
          </p>
          <p>
            Our Data Protection Officer can be reached at the same address.
          </p>
        </div>
      </div>
    </div>
  );
}
