"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div>
      {/* Hero - Full viewport */}
      <div className="min-h-[100dvh] flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5">
          <Logo size="sm" className="md:hidden" />
          <Logo size="md" className="hidden md:flex" />
          <nav className="flex items-center gap-4 text-sm">
            <Link
              href="/pricing"
              className="text-text-muted hover:text-foreground transition-colors hidden sm:block"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-text-muted hover:text-foreground transition-colors"
            >
              Log in
            </Link>
          </nav>
        </header>

        {/* Hero Content */}
        <section className="flex-1 flex flex-col justify-center px-6 pb-12 md:px-8">
          <div className="max-w-2xl mx-auto w-full text-center">
            {/* Headline */}
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Most businesses score below 50. <span className="text-accent">Where do you land?</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-muted mb-8">
              Free Google Business Profile audit. 30 seconds. No signup.
            </p>

            {/* Search */}
            <div className="md:flex md:justify-center">
              <div className="relative w-full max-w-xl md:mx-auto">
                <BusinessSearch size="large" placeholder="Enter your business name" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Rest of page */}
      <main>
        {/* How It Works */}
        <section id="how-it-works" className="px-6 py-12 md:px-8 md:py-20 bg-surface-secondary">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold mb-8 md:mb-12 md:text-center">
              How it works
            </h2>

            {/* Mobile: Compact horizontal list / Desktop: 3 columns */}
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              {/* Step 1 */}
              <div className="flex gap-4 md:block md:text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center md:mx-auto md:mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">1. Search your business</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Type your business name and select it from the dropdown.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 md:block md:text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center md:mx-auto md:mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">2. Get your score</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    See your profile score out of 100 instantly.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 md:block md:text-center">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center md:mx-auto md:mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">3. See what to fix</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Get specific action items in plain English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="px-6 py-12 md:px-8 md:py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold text-primary tracking-wide uppercase mb-2">Trusted by local businesses</p>
            <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-10">
              What business owners are saying
            </h2>

            {/* Mobile: Horizontal scroll / Desktop: Grid */}
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible md:grid md:grid-cols-3 md:gap-6 snap-x snap-mandatory">
              {/* Testimonial 1 */}
              <div className="flex-shrink-0 w-[280px] md:w-auto bg-surface border border-border rounded-2xl p-5 snap-start">
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-score-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-muted mb-3 leading-relaxed">
                  &ldquo;Finally, someone explains Google in a way I can understand. Found out I was missing my hours — now I get weekend calls!&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-semibold">
                    M
                  </div>
                  <div>
                    <p className="font-medium text-sm">Mike R.</p>
                    <p className="text-xs text-text-light">Plumber, Orlando</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-shrink-0 w-[280px] md:w-auto bg-surface border border-border rounded-2xl p-5 snap-start">
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-score-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-muted mb-3 leading-relaxed">
                  &ldquo;My score was 42. Six weeks later it&apos;s 78. I just followed the action items. More calls than ever.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-semibold">
                    S
                  </div>
                  <div>
                    <p className="font-medium text-sm">Sarah T.</p>
                    <p className="text-xs text-text-light">Salon Owner, Tampa</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex-shrink-0 w-[280px] md:w-auto bg-surface border border-border rounded-2xl p-5 snap-start">
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-score-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-muted mb-3 leading-relaxed">
                  &ldquo;I had no idea my photos were so outdated. Updated them and my listing looks professional now.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-semibold">
                    J
                  </div>
                  <div>
                    <p className="font-medium text-sm">James P.</p>
                    <p className="text-xs text-text-light">Restaurant Owner, Miami</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-12 md:px-8 md:py-20 bg-primary text-white">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold mb-3">
              Check your score now
            </h2>
            <p className="text-white/80 mb-6 text-base md:text-lg">
              Find out if your Google presence is working for you or against you.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors w-full sm:w-auto"
            >
              Get Your Free Score
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div className="flex items-center gap-2">
              <Logo size="sm" showWordmark={false} />
              <span className="text-sm text-text-muted">
                © 2025 Curb Appeal
              </span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-text-muted">
              <Link href="/pricing" className="hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
