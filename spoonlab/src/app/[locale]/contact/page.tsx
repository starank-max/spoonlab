import { Breadcrumb } from "@/components/layout/breadcrumb/Breadcrumb";
import { Button } from "@/components/ui";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          className="mb-8"
        />

        {/* Page header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl sm:text-5xl text-ink font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-stone max-w-2xl">
            Have a question, suggestion, or just want to say hello? We would
            love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Contact form */}
          <div className="flex-1 bg-white rounded-xl border border-border shadow-sm p-6 sm:p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-ink mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-cream text-ink placeholder:text-stone text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-ink mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-cream text-ink placeholder:text-stone text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-ink mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-cream text-ink placeholder:text-stone text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-ink mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-cream text-ink placeholder:text-stone text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-colors resize-y"
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Contact info */}
          <div className="w-full lg:w-80 shrink-0 space-y-8">
            {/* Email card */}
            <div className="bg-white rounded-xl border border-border shadow-sm p-6">
              <h2 className="font-display text-xl font-bold text-ink mb-2">
                Email
              </h2>
              <a
                href={`mailto:${SITE.email}`}
                className="text-azure hover:text-azure-hover underline text-sm transition-colors"
              >
                {SITE.email}
              </a>
            </div>

            {/* Social */}
            <div className="bg-white rounded-xl border border-border shadow-sm p-6">
              <h2 className="font-display text-xl font-bold text-ink mb-4">
                Follow Us
              </h2>
              <ul className="space-y-3">
                {Object.entries(SITE.social).map(([platform, handle]) => (
                  <li key={platform}>
                    <span className="text-sm text-stone capitalize">
                      {platform}:
                    </span>{" "}
                    <span className="text-sm text-charcoal font-medium">
                      {handle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Response time */}
            <div className="bg-sage-light rounded-xl border border-sage/20 shadow-sm p-6">
              <h2 className="font-display text-xl font-bold text-ink mb-2">
                Response Time
              </h2>
              <p className="text-sm text-charcoal leading-relaxed">
                We aim to respond to all messages within 24–48 hours on business
                days. Please check your spam folder if you have not heard back
                within that window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
