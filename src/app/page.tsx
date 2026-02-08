"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero - Full viewport with editorial layout */}
      <div className="min-h-[100dvh] flex flex-col relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-px h-32 bg-gradient-to-t from-border to-transparent ml-6 md:ml-12 hidden md:block" />

        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6 relative z-10">
          <Logo size="sm" className="md:hidden" />
          <Logo size="md" className="hidden md:flex" />
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/pricing"
              className="text-text-muted hover:text-foreground transition-colors hidden sm:block tracking-wide uppercase text-xs font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-text-muted hover:text-foreground transition-colors tracking-wide uppercase text-xs font-medium"
            >
              Log in
            </Link>
          </nav>
        </header>

        {/* Hero Content - Editorial asymmetric layout */}
        <section className="flex-1 flex flex-col justify-center px-6 pb-16 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-5xl w-full">
            {/* Eyebrow */}
            <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-6 md:mb-8">
              Free Audit Tool
            </p>

            {/* Headline - Large editorial typography */}
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl mb-8 md:mb-10 tracking-tight max-w-4xl">
              Most businesses score below 50.{" "}
              <span className="italic text-accent">Where do you land?</span>
            </h1>

            {/* Subheadline with accent line */}
            <div className="flex items-start gap-4 mb-10 md:mb-12">
              <div className="w-12 h-px bg-accent mt-3 hidden sm:block flex-shrink-0" />
              <p className="text-lg md:text-xl text-text-muted max-w-md leading-relaxed">
                Get your Google Business Profile score in 30 seconds. No signup required.
              </p>
            </div>

            {/* Search - Left aligned on desktop */}
            <div className="max-w-xl">
              <BusinessSearch size="large" placeholder="Enter your business name" />
            </div>
          </div>
        </section>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Rest of page */}
      <main>
        {/* How It Works - Editorial numbered list */}
        <section id="how-it-works" className="px-6 py-16 md:px-12 lg:px-20 md:py-24 bg-surface relative">
          {/* Decorative top border */}
          <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 h-px bg-border" />

          <div className="max-w-5xl mx-auto">
            {/* Section header - Editorial style */}
            <div className="flex items-end gap-4 mb-12 md:mb-16">
              <span className="text-6xl md:text-8xl font-display text-border leading-none">01</span>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-1">The Process</p>
                <h2 className="text-2xl md:text-4xl tracking-tight">How it works</h2>
              </div>
            </div>

            {/* Steps - Editorial numbered layout */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="relative pl-8 md:pl-0">
                <span className="absolute left-0 top-0 text-2xl font-display text-accent md:relative md:block md:text-4xl md:mb-4">1</span>
                <div className="md:pl-0">
                  <h3 className="text-lg font-medium mb-2 tracking-tight">Search your business</h3>
                  <p className="text-text-muted leading-relaxed">
                    Type your business name and select it from the dropdown.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pl-8 md:pl-0">
                <span className="absolute left-0 top-0 text-2xl font-display text-accent md:relative md:block md:text-4xl md:mb-4">2</span>
                <div className="md:pl-0">
                  <h3 className="text-lg font-medium mb-2 tracking-tight">Get your score</h3>
                  <p className="text-text-muted leading-relaxed">
                    See your profile score out of 100 instantly.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-8 md:pl-0">
                <span className="absolute left-0 top-0 text-2xl font-display text-accent md:relative md:block md:text-4xl md:mb-4">3</span>
                <div className="md:pl-0">
                  <h3 className="text-lg font-medium mb-2 tracking-tight">See what to fix</h3>
                  <p className="text-text-muted leading-relaxed">
                    Get specific action items in plain English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section - Editorial pull quote style */}
        <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24 bg-surface-secondary relative">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="flex items-end gap-4 mb-12 md:mb-16">
              <span className="text-6xl md:text-8xl font-display text-border leading-none">02</span>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-1">Testimonials</p>
                <h2 className="text-2xl md:text-4xl tracking-tight">What owners are saying</h2>
              </div>
            </div>

            {/* Testimonials - Editorial card layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Testimonial 1 - Featured/larger */}
              <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-surface border border-border p-8 md:p-10 relative">
                {/* Large quote mark */}
                <span className="absolute top-6 right-6 text-6xl font-display text-border leading-none">&rdquo;</span>
                <blockquote className="text-lg md:text-xl leading-relaxed mb-6 relative z-10">
                  Finally, someone explains Google in a way I can understand. Found out I was missing my hours — now I get weekend calls!
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent font-display text-lg">
                    M
                  </div>
                  <div>
                    <p className="font-medium">Mike R.</p>
                    <p className="text-sm text-text-muted">Plumber, Orlando</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-surface border border-border p-6 md:p-8 relative">
                <span className="absolute top-4 right-4 text-4xl font-display text-border leading-none">&rdquo;</span>
                <blockquote className="text-base leading-relaxed mb-4 relative z-10">
                  My score was 42. Six weeks later it&apos;s 78. I just followed the action items.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-display">
                    S
                  </div>
                  <div>
                    <p className="font-medium text-sm">Sarah T.</p>
                    <p className="text-xs text-text-muted">Salon Owner, Tampa</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-surface border border-border p-6 md:p-8 relative">
                <span className="absolute top-4 right-4 text-4xl font-display text-border leading-none">&rdquo;</span>
                <blockquote className="text-base leading-relaxed mb-4 relative z-10">
                  I had no idea my photos were so outdated. Updated them and my listing looks professional now.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-display">
                    J
                  </div>
                  <div>
                    <p className="font-medium text-sm">James P.</p>
                    <p className="text-xs text-text-muted">Restaurant Owner, Miami</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Editorial bold section */}
        <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-primary text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/5 blur-3xl" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Ready?</p>
                <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
                  Check your score<br />
                  <span className="italic text-accent">right now.</span>
                </h2>
                <p className="text-white/70 text-lg">
                  Find out if Google is working for you or against you.
                </p>
              </div>
              <div className="md:text-right">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary font-medium tracking-wide hover:bg-white/90 transition-colors group"
                >
                  Get Your Free Score
                  <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Minimal editorial */}
      <footer className="px-6 py-12 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
            <div className="flex items-center gap-3">
              <Logo size="sm" showWordmark={false} />
              <span className="text-sm text-text-muted">
                © 2025 Curb Appeal
              </span>
            </div>
            <nav className="flex items-center gap-8 text-sm">
              <Link href="/pricing" className="text-text-muted hover:text-foreground transition-colors tracking-wide">
                Pricing
              </Link>
              <Link href="/privacy" className="text-text-muted hover:text-foreground transition-colors tracking-wide">
                Privacy
              </Link>
              <Link href="/terms" className="text-text-muted hover:text-foreground transition-colors tracking-wide">
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
