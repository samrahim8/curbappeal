import Link from "next/link";
import { Metadata } from "next";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Terms of Service — Curb Appeal",
  description: "Terms of service for Curb Appeal.",
};

export default function TermsPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <Logo size="md" />
        </Link>
      </header>

      <main className="flex-1 px-5 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-neutral max-w-none space-y-6 text-text-muted">
            <p className="text-foreground font-medium">
              Last updated: February 2025
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                The basics
              </h2>
              <p>
                Curb Appeal is a tool that helps you understand and improve your
                Google Business Profile. By using it, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                What you can do
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use Curb Appeal to audit your own business</li>
                <li>Share your audit results with others</li>
                <li>Use our recommendations to improve your Google presence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                What you can&apos;t do
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use automated tools to mass-audit businesses</li>
                <li>Resell or white-label our service without permission</li>
                <li>Use the service for any illegal purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Paid subscriptions
              </h2>
              <p>
                If you subscribe to a paid plan, you can cancel anytime. When you
                cancel, you&apos;ll keep access until the end of your billing period.
                We don&apos;t offer refunds for partial months.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Our data sources
              </h2>
              <p>
                Curb Appeal uses publicly available data from Google Places API.
                We don&apos;t guarantee the accuracy of this data — it comes directly
                from Google. Your actual Google Business Profile may differ from
                what we display.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Limitation of liability
              </h2>
              <p>
                Curb Appeal is provided &ldquo;as is.&rdquo; We do our best to give you
                accurate and helpful information, but we can&apos;t guarantee specific
                results. We&apos;re not liable for any business decisions you make
                based on our recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Changes to these terms
              </h2>
              <p>
                We may update these terms occasionally. If we make significant
                changes, we&apos;ll notify you by email (if you have an account) or
                by posting a notice on the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Contact
              </h2>
              <p>
                Questions? Email us at{" "}
                <a
                  href="mailto:hello@getcurbappeal.com"
                  className="text-primary hover:underline"
                >
                  hello@getcurbappeal.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 py-6 border-t border-border">
        <div className="max-w-2xl mx-auto flex justify-between items-center text-sm text-text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            ← Back to home
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
