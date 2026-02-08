"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Logo size="md" />
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

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex flex-col items-center justify-center px-5 py-12 md:py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary text-sm font-medium rounded-full mb-6">
            <span className="w-2 h-2 bg-score-good rounded-full animate-pulse" />
            Free instant audit
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-4 md:mb-6 leading-tight tracking-tight">
            Is Google helping or{" "}
            <span className="text-accent">hurting</span> your business?
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-muted max-w-xl mb-8 md:mb-10">
            Get your free Google Business Profile score in 30 seconds.
            See exactly what&apos;s broken and how to fix it.
          </p>

          {/* Search */}
          <BusinessSearch size="large" placeholder="e.g., Joe's Pizza Chicago" />

          {/* Trust text */}
          <p className="text-sm text-text-light mt-4">
            No signup required. Results in 30 seconds.
          </p>
        </section>

        {/* How It Works */}
        <section className="px-5 py-16 md:py-24 bg-surface-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">
              How it works
            </h2>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Search your business</h3>
                <p className="text-text-muted">
                  Type your business name and select it from the dropdown.
                  We&apos;ll find your Google listing.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Get your score</h3>
                <p className="text-text-muted">
                  See your profile score out of 100 instantly.
                  Find out how you compare to competitors.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">3. See what to fix</h3>
                <p className="text-text-muted">
                  Get specific action items in plain English.
                  No jargon, no confusion — just what you need to do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="px-5 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-primary mb-3">TRUSTED BY LOCAL BUSINESSES</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-12">
              What business owners are saying
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-surface border border-border rounded-2xl p-6 text-left">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-score-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-muted mb-4">
                  &ldquo;Finally, someone explains Google in a way I can understand.
                  Found out I was missing my hours — now I get weekend calls!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                    M
                  </div>
                  <div>
                    <p className="font-medium text-sm">Mike R.</p>
                    <p className="text-xs text-text-light">Plumber, Orlando</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-surface border border-border rounded-2xl p-6 text-left">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-score-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-muted mb-4">
                  &ldquo;My score was 42. Six weeks later it&apos;s 78.
                  I just followed the action items. More calls than ever.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                    S
                  </div>
                  <div>
                    <p className="font-medium text-sm">Sarah T.</p>
                    <p className="text-xs text-text-light">Salon Owner, Tampa</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-surface border border-border rounded-2xl p-6 text-left">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-score-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-muted mb-4">
                  &ldquo;I had no idea my photos were so outdated.
                  Updated them and my listing looks professional now.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
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
        <section className="px-5 py-16 md:py-24 bg-primary text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Check your score now
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Find out if your Google presence is working for you or against you.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold text-lg rounded-xl hover:bg-white/90 transition-colors"
            >
              Get Your Free Score
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-5 py-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Logo size="sm" showWordmark={false} />
              <span className="text-sm text-text-muted">
                © 2025 Curb Appeal. All rights reserved.
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
          <p className="text-center text-xs text-text-light">
            Built by local marketing experts who&apos;ve helped 100+ small businesses get found on Google.
          </p>
        </div>
      </footer>
    </div>
  );
}
