"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero - Full viewport */}
      <div className="h-[100dvh] grid grid-rows-[auto_1fr_auto] px-5 md:px-12 lg:px-20">
        {/* Navigation */}
        <header className="flex items-center justify-between py-3 md:py-6">
          <Logo size="sm" />
          <nav className="flex items-center gap-4 text-sm text-text-muted">
            <Link href="/pricing" className="hover:text-foreground transition-colors hidden sm:block">
              Pricing
            </Link>
            <Link href="/login" className="hover:text-foreground transition-colors">
              Log in
            </Link>
          </nav>
        </header>

        {/* Headline - FILLS available space */}
        <h1 className="text-[15vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] font-bold tracking-[-0.03em] self-center">
          Is Google
          <br />
          helping or
          <br />
          hurting your
          <br />
          business?
        </h1>

        {/* Bottom: search CTA */}
        <div className="pb-6 md:pb-12">
          <div className="w-full max-w-2xl">
            <BusinessSearch size="large" placeholder="Enter your business name..." />
          </div>
          <p className="text-text-muted text-sm mt-3">
            Free audit. 30 seconds. No signup required.
          </p>
        </div>
      </div>

      {/* Below the fold */}
      <main>
        {/* Section 1: How it works */}
        <section className="px-6 py-16 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-20">How it works</h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16 max-w-5xl">
            {/* Step 1 */}
            <div>
              <div className="text-5xl md:text-7xl font-bold text-border mb-3">1</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Search your business</h3>
              <p className="text-text-muted leading-relaxed">
                Type your business name and select it from Google&apos;s database. We&apos;ll pull your listing automatically.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="text-5xl md:text-7xl font-bold text-border mb-3">2</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Get your score</h3>
              <p className="text-text-muted leading-relaxed">
                See your profile score out of 100 — broken down by photos, reviews, completeness, and activity.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-5xl md:text-7xl font-bold text-border mb-3">3</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">See what to fix</h3>
              <p className="text-text-muted leading-relaxed">
                Get specific action items in plain English. No marketing jargon — just what to do next.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Example score */}
        <section className="px-6 py-16 md:px-12 md:py-28 lg:px-20 lg:py-32 bg-surface-secondary">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-20">What you&apos;ll get</h2>

          <div className="max-w-3xl">
            {/* Mock audit result */}
            <div className="bg-surface border border-border p-5 sm:p-8 md:p-12">
              {/* Business name + score */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8 pb-8 border-b border-border">
                <div>
                  <p className="text-xs sm:text-sm text-text-muted mb-1">Example audit for</p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Mike&apos;s Plumbing Co.</h3>
                  <p className="text-sm text-text-muted">Orlando, FL</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Score circle */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
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
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-score-warning">43</span>
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
        <section className="px-6 py-16 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 tracking-tight">
              Check your score.
            </h2>
            <div className="w-full max-w-xl mb-4">
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
