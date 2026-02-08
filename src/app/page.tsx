"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background">
      {/* Hero - Full viewport, bold American aesthetic */}
      <div className="min-h-[100dvh] flex flex-col relative">
        {/* Geometric accent - top right corner */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64">
          <div className="absolute top-0 right-0 w-full h-full bg-accent/10" />
          <div className="absolute top-4 right-4 md:top-8 md:right-8 w-full h-full border-2 border-primary/10" />
        </div>

        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6 relative z-10">
          <Logo size="sm" className="md:hidden" />
          <Logo size="md" className="hidden md:flex" />
          <nav className="flex items-center gap-6">
            <Link
              href="/pricing"
              className="text-text-muted hover:text-primary transition-colors hidden sm:block text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              Log in
            </Link>
          </nav>
        </header>

        {/* Hero Content */}
        <section className="flex-1 flex flex-col justify-center px-6 pb-16 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                Free for Local Businesses
              </span>
            </div>

            {/* Headline - Big, bold, confident */}
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] mb-6 tracking-tight text-primary">
              Is Google helping<br />
              or <span className="text-accent">hurting</span> your<br />
              business?
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-lg leading-relaxed">
              Get your free Google Business Profile score in 30 seconds. See exactly what&apos;s working and what needs fixing.
            </p>

            {/* Search */}
            <div className="max-w-xl mb-8">
              <BusinessSearch size="large" placeholder="Search for your business..." />
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-score-excellent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No signup required
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-score-excellent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Results in 30 seconds
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-score-excellent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100% free
              </span>
            </div>
          </div>
        </section>

        {/* Bottom stripe accent */}
        <div className="h-1 stripe-accent" />
      </div>

      {/* Rest of page */}
      <main>
        {/* Stats bar */}
        <section className="bg-primary text-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">73%</div>
                <div className="text-white/70 text-sm">of consumers search<br className="hidden md:block" /> for local businesses</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">50%</div>
                <div className="text-white/70 text-sm">visit within<br className="hidden md:block" /> 24 hours</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">88%</div>
                <div className="text-white/70 text-sm">trust online reviews<br className="hidden md:block" /> as much as friends</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">46%</div>
                <div className="text-white/70 text-sm">of Google searches<br className="hidden md:block" /> are local</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24 bg-surface">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
                How it works
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Three simple steps to understand your Google presence
              </p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Search your business</h3>
                <p className="text-text-muted leading-relaxed">
                  Type your business name and select it from the dropdown. We&apos;ll find your Google listing.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Get your score</h3>
                <p className="text-text-muted leading-relaxed">
                  See your profile score out of 100, broken down by category so you know where you stand.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">See what to fix</h3>
                <p className="text-text-muted leading-relaxed">
                  Get specific action items in plain English. No marketing jargon, just clear next steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24 bg-surface-secondary">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
                Built for businesses like yours
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Trusted by plumbers, restaurants, salons, and local businesses across America
              </p>
            </div>

            {/* Testimonial cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Testimonial 1 */}
              <div className="bg-surface p-6 md:p-8 border border-border relative">
                <div className="absolute top-4 right-4 text-accent text-4xl font-serif">&ldquo;</div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">&#9733;</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  Finally, someone explains Google in a way I can understand. Found out I was missing my hours — now I get weekend calls!
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Mike R.</div>
                    <div className="text-sm text-text-muted">Plumber, Orlando</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-surface p-6 md:p-8 border border-border relative">
                <div className="absolute top-4 right-4 text-accent text-4xl font-serif">&ldquo;</div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">&#9733;</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  My score was 42. Six weeks later it&apos;s 78. I just followed the action items. More calls than ever.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Sarah T.</div>
                    <div className="text-sm text-text-muted">Salon Owner, Tampa</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-surface p-6 md:p-8 border border-border relative">
                <div className="absolute top-4 right-4 text-accent text-4xl font-serif">&ldquo;</div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">&#9733;</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  I had no idea my photos were so outdated. Updated them and my listing looks professional now.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-primary">James P.</div>
                    <div className="text-sm text-text-muted">Restaurant Owner, Miami</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-20 md:px-12 lg:px-20 md:py-28 bg-primary text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Your customers are<br />
              <span className="text-accent">searching for you.</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Find out what they see when they find your business on Google.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold text-lg transition-colors"
            >
              Get Your Free Score
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 lg:px-20 bg-surface border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
            <div className="flex items-center gap-3">
              <Logo size="sm" showWordmark={true} />
            </div>
            <nav className="flex items-center gap-8 text-sm">
              <Link href="/pricing" className="text-text-muted hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/privacy" className="text-text-muted hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-text-muted hover:text-primary transition-colors">
                Terms
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center md:text-left">
            <p className="text-sm text-text-muted">
              &copy; 2025 Curb Appeal. Built for American small businesses.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
