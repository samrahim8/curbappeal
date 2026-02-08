"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero - Full viewport, nothing competes */}
      <div className="min-h-[100dvh] flex flex-col">
        {/* Navigation - understated */}
        <header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <Logo size="sm" className="md:hidden" />
          <Logo size="md" className="hidden md:flex" />
          <nav className="flex items-center gap-6 text-sm text-text-muted">
            <Link href="/pricing" className="hover:text-foreground transition-colors hidden sm:block">
              Pricing
            </Link>
            <Link href="/login" className="hover:text-foreground transition-colors">
              Log in
            </Link>
          </nav>
        </header>

        {/* Hero content - headline dominates */}
        <section className="flex-1 flex flex-col justify-end px-6 pb-12 md:px-12 md:pb-20 lg:px-20 lg:pb-24">
          {/* Headline - massive, planted at bottom-left */}
          <h1 className="text-[3.5rem] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tight max-w-5xl mb-8 md:mb-10">
            Is Google helping or hurting your business?
          </h1>

          {/* Search bar */}
          <div className="max-w-xl mb-4">
            <BusinessSearch size="large" placeholder="Search your business name..." />
          </div>

          {/* Single trust line */}
          <p className="text-text-muted text-sm md:text-base">
            Free Google Business Profile audit. 30 seconds. No signup.
          </p>
        </section>
      </div>

      {/* Below the fold */}
      <main>
        {/* Section 1: How it works */}
        <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 md:mb-20">How it works</h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16 max-w-5xl">
            {/* Step 1 */}
            <div>
              <div className="text-6xl md:text-7xl font-bold text-border mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Search your business</h3>
              <p className="text-text-muted leading-relaxed">
                Type your business name and select it from Google&apos;s database. We&apos;ll pull your listing automatically.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="text-6xl md:text-7xl font-bold text-border mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Get your score</h3>
              <p className="text-text-muted leading-relaxed">
                See your profile score out of 100 — broken down by photos, reviews, completeness, and activity.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-6xl md:text-7xl font-bold text-border mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">See what to fix</h3>
              <p className="text-text-muted leading-relaxed">
                Get specific action items in plain English. No marketing jargon — just what to do next.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Example score */}
        <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 bg-surface-secondary">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 md:mb-20">What you&apos;ll get</h2>

          <div className="max-w-3xl">
            {/* Mock audit result */}
            <div className="bg-surface border border-border p-8 md:p-12">
              {/* Business name + score */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 pb-10 border-b border-border">
                <div>
                  <p className="text-sm text-text-muted mb-1">Example audit for</p>
                  <h3 className="text-2xl md:text-3xl font-bold">Mike&apos;s Plumbing Co.</h3>
                  <p className="text-text-muted">Orlando, FL</p>
                </div>
                <div className="flex items-center gap-4">
                  {/* Score circle */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#E5E2DD"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="283"
                        strokeDashoffset="161"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl md:text-4xl font-bold text-score-warning">43</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-text-muted">Score</p>
                    <p className="font-semibold text-score-warning">At Risk</p>
                  </div>
                </div>
              </div>

              {/* Action items */}
              <div>
                <p className="text-sm text-text-muted mb-4">Top action items</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-score-poor/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-score-poor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Add your business hours</p>
                      <p className="text-sm text-text-muted">Customers can&apos;t see when you&apos;re open. This is costing you calls.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-score-warning/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-score-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Respond to your reviews</p>
                      <p className="text-sm text-text-muted">You have 12 reviews with no response. Responding builds trust.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-score-warning/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-score-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Add more photos</p>
                      <p className="text-sm text-text-muted">You only have 3 photos. Listings with 10+ photos get 35% more clicks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Final CTA */}
        <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 tracking-tight">
              Check your score.
            </h2>
            <div className="max-w-xl mb-4">
              <BusinessSearch size="large" placeholder="Search your business name..." />
            </div>
            <p className="text-text-muted text-sm md:text-base">
              Free. Takes 30 seconds.
            </p>
          </div>
        </section>
      </main>

      {/* Footer - minimal */}
      <footer className="px-6 py-8 md:px-12 md:py-10 border-t border-border">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div className="flex items-center gap-4">
            <Logo size="sm" showWordmark={false} />
            <span className="text-sm text-text-muted">© 2025 Curb Appeal</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-text-muted">
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
