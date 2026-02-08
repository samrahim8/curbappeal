import Link from "next/link";
import { Metadata } from "next";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Pricing — Curb Appeal",
  description:
    "Stay on top of your Google Business Profile without the work. Get alerted when you need to act. Respond to reviews in one tap.",
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className || "w-5 h-5 text-score-good"}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Link href="/" className="flex items-center gap-2">
          <Logo size="md" />
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/"
            className="text-text-muted hover:text-foreground transition-colors"
          >
            Free Audit
          </Link>
          <Link
            href="/login"
            className="text-text-muted hover:text-foreground transition-colors"
          >
            Log in
          </Link>
        </nav>
      </header>

      <main className="flex-1 px-5 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Stay on top of Google<br className="hidden sm:block" /> without the work
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              We watch your profile so you don&apos;t have to. When something needs
              your attention, we&apos;ll let you know. Most owners spend 10 minutes a month.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
            {/* Free Tier */}
            <div className="bg-surface border border-border rounded-3xl p-8">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Free Audit</h2>
                <p className="text-text-muted text-sm">
                  See where you stand in 30 seconds
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
              </div>

              <Link
                href="/"
                className="block w-full py-3.5 px-4 text-center border-2 border-border rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors mb-8"
              >
                Get your free score
              </Link>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm">Instant score out of 100</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm">See exactly what&apos;s broken</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm">Step-by-step fix instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm">Compare to top competitors</span>
                </li>
              </ul>
            </div>

            {/* Pro Tier */}
            <div className="bg-primary text-white rounded-3xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-score-warning text-white text-xs font-bold px-3 py-1 rounded-full">
                  COMING SOON
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Pro</h2>
                <p className="text-white/70 text-sm">
                  We watch your profile. You get more calls.
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-white/70">/month</span>
              </div>

              <button
                disabled
                className="block w-full py-3.5 px-4 text-center bg-white text-primary rounded-xl font-semibold opacity-75 cursor-not-allowed mb-8"
              >
                Join waitlist
              </button>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-score-good flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium">New review alerts</span>
                    <p className="text-xs text-white/60 mt-0.5">Get notified the moment a review comes in</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-score-good flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium">Reply in one tap</span>
                    <p className="text-xs text-white/60 mt-0.5">AI writes a personalized response — just hit send</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-score-good flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium">Competitor tracking</span>
                    <p className="text-xs text-white/60 mt-0.5">See how you stack up against 3 local competitors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-score-good flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium">Monthly progress report</span>
                    <p className="text-xs text-white/60 mt-0.5">Simple email: what improved, what to fix next</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-score-good flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium">&ldquo;Something broke&rdquo; alerts</span>
                    <p className="text-xs text-white/60 mt-0.5">We catch problems before they cost you customers</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-sm text-white/70">
                  Cancel anytime. No questions asked.
                </p>
              </div>
            </div>
          </div>

          {/* Done For You */}
          <section className="bg-surface-secondary rounded-3xl p-8 md:p-12 mb-16 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Don&apos;t want to do it yourself?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-6">
              We&apos;ll optimize your entire Google Business Profile for you — photos,
              description, categories, the works. You get a fully optimized profile
              without lifting a finger.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-3xl font-bold">$499</span>
              <span className="text-text-muted">one-time</span>
            </div>
            <a
              href="mailto:hello@getcurbappeal.com?subject=Done For You Service"
              className="inline-flex items-center justify-center mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Get in touch
            </a>
          </section>

          {/* FAQ Section */}
          <section className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Common questions
            </h2>

            <div className="space-y-6">
              <div className="bg-surface border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-2">
                  What exactly does Pro monitor?
                </h3>
                <p className="text-text-muted text-sm">
                  We check your profile daily for new reviews, changes to your info
                  (hours, photos, description), and compare your stats against competitors.
                  If something needs your attention, you&apos;ll get an alert.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-2">
                  How does the review response feature work?
                </h3>
                <p className="text-text-muted text-sm">
                  When you get a new review, we&apos;ll send you a notification with a
                  ready-to-send response. The AI reads what the customer wrote and
                  drafts a personalized reply. You can edit it or just tap send.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-2">
                  How much time does this actually save?
                </h3>
                <p className="text-text-muted text-sm">
                  Most Pro users spend about 10 minutes per month — just reviewing
                  alerts and sending pre-written responses. Compare that to manually
                  checking your profile, writing responses from scratch, and tracking competitors.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-2">
                  Can I cancel anytime?
                </h3>
                <p className="text-text-muted text-sm">
                  Yes. Cancel with one click, no questions asked. You&apos;ll keep
                  access until the end of your billing period. We don&apos;t do contracts
                  or cancellation fees.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-2">
                  What&apos;s the &ldquo;Done For You&rdquo; service?
                </h3>
                <p className="text-text-muted text-sm">
                  We log into your Google Business Profile and optimize everything —
                  upload quality photos, write a compelling description, fix your categories,
                  add services, and more. It&apos;s a one-time service for business owners
                  who want results without the DIY.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Logo size="sm" showWordmark={false} />
            <span className="text-sm text-text-muted">
              © 2025 Curb Appeal. All rights reserved.
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-text-muted">
            <Link
              href="/"
              className="hover:text-foreground transition-colors"
            >
              Free Audit
            </Link>
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
