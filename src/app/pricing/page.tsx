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
      className={className || "w-5 h-5 text-accent"}
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Logo size="md" linkToHome />

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="hidden md:inline-flex px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors"
            >
              Free Audit
            </Link>
            <Link
              href="/login"
              className="hidden md:inline-flex px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/"
              className="glass-button px-5 py-2.5 rounded-full text-sm font-medium text-text"
            >
              Get Your Score
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-text-muted mb-4 tracking-wide">
            Simple pricing
          </p>
          <h1 className="font-display text-[clamp(32px,6vw,56px)] leading-[1.1] tracking-tight text-text mb-6">
            Stay on top of Google
            <br />
            without the work
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto">
            We watch your profile daily. When something needs fixing, we tell you exactly what to do — and make it one tap to act.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Free Tier */}
            <div className="bg-surface rounded-3xl p-8 shadow-card">
              <div className="mb-8">
                <h2 className="font-display text-2xl text-text mb-2">Free Audit</h2>
                <p className="text-text-secondary text-sm">
                  See where you stand in 10 seconds
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-display text-text">$0</span>
              </div>

              <Link
                href="/"
                className="block w-full py-4 px-6 text-center bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors mb-8"
              >
                Get your free score
              </Link>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Instant score out of 100</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-text-secondary">See exactly what&apos;s broken</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Step-by-step fix instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-text-secondary">Shareable results link</span>
                </li>
              </ul>
            </div>

            {/* Pro Tier */}
            <div className="relative bg-accent text-white rounded-3xl p-8 shadow-card overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

              {/* Coming soon badge */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <span className="bg-amber-500 text-white text-xs font-semibold px-4 py-1.5 rounded-b-xl">
                  COMING SOON
                </span>
              </div>

              <div className="relative">
                <div className="mb-8 pt-4">
                  <h2 className="font-display text-2xl text-white mb-2">Pro</h2>
                  <p className="text-white/70 text-sm">
                    We watch your profile. You get more calls.
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-display text-white">$29</span>
                  <span className="text-white/60">/month</span>
                </div>

                <button
                  disabled
                  className="block w-full py-4 px-6 text-center bg-white text-accent rounded-full font-medium opacity-60 cursor-not-allowed mb-8"
                >
                  Join waitlist
                </button>

                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">New review alerts</span>
                      <p className="text-sm text-white/60 mt-0.5">Get notified the moment a review comes in</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Reply in one tap</span>
                      <p className="text-sm text-white/60 mt-0.5">AI writes a personalized response — just hit send</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Competitor tracking</span>
                      <p className="text-sm text-white/60 mt-0.5">See how you stack up against 3 local competitors</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Monthly progress report</span>
                      <p className="text-sm text-white/60 mt-0.5">Simple email: what improved, what to fix next</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">&ldquo;Something broke&rdquo; alerts</span>
                      <p className="text-sm text-white/60 mt-0.5">We catch problems before they cost you customers</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/20 text-center">
                  <p className="text-sm text-white/60">
                    Cancel anytime. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Done For You */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-surface rounded-3xl p-8 md:p-12 shadow-card overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h2 className="font-display text-2xl md:text-3xl text-text mb-3">
                Don&apos;t want to do it yourself?
              </h2>
              <p className="text-text-secondary max-w-lg mx-auto mb-8">
                We&apos;ll optimize your entire Google Business Profile for you — photos,
                description, categories, the works. You get a fully optimized profile
                without lifting a finger.
              </p>

              <div className="flex items-baseline justify-center gap-2 mb-8">
                <span className="text-4xl font-display text-text">$499</span>
                <span className="text-text-muted">one-time</span>
              </div>

              <a
                href="mailto:hello@getcurbappeal.com?subject=Done For You Service"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-text-muted mb-3 tracking-wide">FAQ</p>
            <h2 className="font-display text-2xl md:text-3xl text-text">
              Common questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-surface rounded-2xl p-6 shadow-card">
              <h3 className="font-display text-lg text-text mb-2">
                What exactly does Pro monitor?
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We check your profile daily for new reviews, changes to your info
                (hours, photos, description), and compare your stats against competitors.
                If something needs your attention, you&apos;ll get an alert.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-6 shadow-card">
              <h3 className="font-display text-lg text-text mb-2">
                How does the review response feature work?
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                When you get a new review, we&apos;ll send you a notification with a
                ready-to-send response. The AI reads what the customer wrote and
                drafts a personalized reply. You can edit it or just tap send.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-6 shadow-card">
              <h3 className="font-display text-lg text-text mb-2">
                How much time does this actually save?
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Most Pro users spend about 10 minutes per month — just reviewing
                alerts and sending pre-written responses. Compare that to manually
                checking your profile, writing responses from scratch, and tracking competitors.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-6 shadow-card">
              <h3 className="font-display text-lg text-text mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Yes. Cancel with one click, no questions asked. You&apos;ll keep
                access until the end of your billing period. We don&apos;t do contracts
                or cancellation fees.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-6 shadow-card">
              <h3 className="font-display text-lg text-text mb-2">
                What&apos;s the &ldquo;Done For You&rdquo; service?
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We log into your Google Business Profile and optimize everything —
                upload quality photos, write a compelling description, fix your categories,
                add services, and more. It&apos;s a one-time service for business owners
                who want results without the DIY.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
            </div>

            <nav className="flex flex-wrap gap-6 text-sm text-text-secondary">
              <Link href="/" className="hover:text-text transition-colors">
                Free Audit
              </Link>
              <Link href="/privacy" className="hover:text-text transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-text transition-colors">
                Terms
              </Link>
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-border-light text-sm text-text-muted">
            © 2025 Curb Appeal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
