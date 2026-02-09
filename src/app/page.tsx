"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8 py-4 md:py-4">
        {/* Mobile nav - floating */}
        <div className="md:hidden flex items-center justify-between">
          <Logo size="sm" />
          <Link
            href="/pricing"
            className="text-sm font-medium text-text-secondary hover:text-text transition-colors"
          >
            Pricing
          </Link>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex max-w-6xl mx-auto items-center justify-between">
          <Logo size="sm" />
          <div className="flex items-center gap-2">
            <Link
              href="/pricing"
              className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 text-sm text-text-secondary hover:text-text transition-colors"
            >
              Log in
            </Link>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  const input = document.querySelector('input[placeholder="Enter your business name..."]') as HTMLInputElement;
                  input?.focus();
                }, 300);
              }}
              className="glass-button px-5 py-2.5 rounded-full text-sm font-medium text-text"
            >
              Get Your Score
            </button>
          </div>
        </div>
      </nav>

      {/* Hero - Mobile: full screen takeover, Desktop: standard layout */}
      <section className="md:px-8 md:pt-36 md:pb-24">
        {/* Mobile Hero - Positioned in upper area like Craft */}
        <div className="md:hidden min-h-[100dvh] flex flex-col px-5 overflow-hidden">
          {/* Spacer to push content to upper third */}
          <div className="h-24" />

          {/* Main content */}
          <div className="text-center">
            <h1 className="font-display text-[52px] leading-[1.02] tracking-tight text-text mb-5">
              What's your curb appeal on Google?
            </h1>

            <p className="text-base text-text-secondary mb-6 px-2">
              Score your business profile in 10 seconds.
            </p>

            <BusinessSearch />

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-text-muted">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Powered by Google
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card
              </span>
            </div>
          </div>

          {/* Audit mockup preview */}
          <div className="flex-1 flex items-start justify-center mt-5 -mx-5">
            <div className="relative w-full max-w-[380px]">
              {/* Phone frame */}
              <div className="bg-white rounded-[2.5rem] shadow-2xl border border-black/5 p-4 pb-0 mx-4">
                {/* Notch */}
                <div className="flex justify-center mb-3">
                  <div className="w-28 h-7 bg-black rounded-full" />
                </div>

                {/* Screen content */}
                <div className="bg-gradient-to-b from-[#E8F4FC] via-[#F0F7FB] to-[#F5F3ED] rounded-[1.5rem] px-5 pt-5 pb-32">
                  {/* Score section */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-[72px] h-[72px] shrink-0">
                      <svg className="w-[72px] h-[72px] -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#E5E2DB" strokeWidth="7" />
                        <circle cx="50" cy="50" r="42" fill="none" stroke="#22C55E" strokeWidth="7" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="66" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-display text-text">73</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-text leading-tight">Blue Bottle Coffee</h3>
                      <p className="text-xs text-text-muted">Oakland, CA • Coffee Shop</p>
                      <div className="flex items-center gap-1 mt-1">
                        <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs text-text-secondary">4.6 (847)</span>
                      </div>
                    </div>
                  </div>

                  {/* What to fix header */}
                  <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">What to fix</p>
                  <h4 className="font-display text-base text-text mb-3">2 priority items</h4>

                  {/* Priority item 1 */}
                  <div className="bg-surface rounded-2xl p-4 shadow-sm mb-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-transparent" />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500 text-white">Fix now</span>
                        <span className="text-[10px] text-text-muted uppercase tracking-wide">Photos</span>
                      </div>
                      <p className="text-sm font-display text-text">Add more photos to stand out</p>
                    </div>
                  </div>

                  {/* Priority item 2 */}
                  <div className="bg-surface rounded-2xl p-4 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent" />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500 text-white">Important</span>
                        <span className="text-[10px] text-text-muted uppercase tracking-wide">Reviews</span>
                      </div>
                      <p className="text-sm font-display text-text">Respond to recent reviews</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fade out at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#E8F4FC] via-[#F0F7FB]/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Desktop Hero - Standard centered layout */}
        <div className="hidden md:block text-center max-w-3xl mx-auto">
          <p className="text-sm text-text-muted mb-4 tracking-wide">
            Free Google Business Profile Audit
          </p>

          <h1 className="font-display text-[clamp(36px,8vw,72px)] leading-[1.05] tracking-tight text-text mb-6">
            What's your curb appeal
            <br />
            on Google?
          </h1>

          <p className="text-xl text-text-secondary mb-10 max-w-xl mx-auto">
            Your Google Business Profile is the first thing customers see. Score yours in 10 seconds.
          </p>

          <div className="max-w-lg mx-auto mb-8">
            <BusinessSearch />
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Powered by Google
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              1,000+ businesses audited
            </span>
          </div>
        </div>
      </section>

      {/* How it works - Card style like Craft */}
      <section className="px-5 md:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-text-muted mb-3 tracking-wide">How it works</p>
            <h2 className="font-display text-3xl md:text-4xl text-text">
              Three steps to clarity
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-surface rounded-3xl p-8 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-text mb-2">Search</h3>
              <p className="text-text-secondary">
                Type your business name and select it from Google's directory.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-surface rounded-3xl p-8 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-text mb-2">Score</h3>
              <p className="text-text-secondary">
                Get an instant score from 0-100 based on your profile strength.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-surface rounded-3xl p-8 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-text mb-2">Fix</h3>
              <p className="text-text-secondary">
                Get clear, prioritized action items to improve your visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we check - Feature section */}
      <section className="px-5 md:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-text-muted mb-3 tracking-wide">What we analyze</p>
            <h2 className="font-display text-3xl md:text-4xl text-text">
              Everything that matters
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-surface rounded-2xl p-6 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-text mb-1">Profile</h3>
              <p className="text-sm text-text-secondary">Hours, description, categories & contact info.</p>
            </div>

            <div className="bg-surface rounded-2xl p-6 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-text mb-1">Photos</h3>
              <p className="text-sm text-text-secondary">Quantity, quality & recency of images.</p>
            </div>

            <div className="bg-surface rounded-2xl p-6 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-text mb-1">Reviews</h3>
              <p className="text-sm text-text-secondary">Count, rating & review velocity.</p>
            </div>

            <div className="bg-surface rounded-2xl p-6 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-text mb-1">Responses</h3>
              <p className="text-sm text-text-secondary">How you engage with feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 md:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-text mb-4">
            Ready to see your score?
          </h2>
          <p className="text-lg text-text-secondary mb-10">
            Join thousands of business owners who've improved their Google presence.
          </p>
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
          >
            Get Your Free Score
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
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
              <Link href="/pricing" className="hover:text-text transition-colors">
                Pricing
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
