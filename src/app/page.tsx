"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      {/* Header */}
      <header className="px-5 md:px-8 py-5 flex items-center justify-between max-w-[680px] mx-auto w-full">
        <div className="font-display text-xl text-walnut">
          Curb Appeal
        </div>
        <nav className="flex items-center gap-5">
          <Link
            href="/pricing"
            className="hidden sm:block text-sm text-walnut-light hover:text-forest transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/login"
            className="text-sm px-4 py-2 border border-forest text-forest rounded-md hover:bg-forest hover:text-white transition-colors"
          >
            Log in
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col justify-center px-5 md:px-8 py-12 md:py-20">
        <div className="max-w-[680px] mx-auto w-full">
          {/* Section Label */}
          <div className="text-xs font-medium uppercase tracking-wide text-brass mb-6">
            Free Google Business Audit
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(32px,6vw,56px)] leading-[1.1] text-walnut mb-5">
            Is Google helping or hurting your business?
          </h1>

          {/* Subtext */}
          <p className="text-lg text-walnut-mid mb-10 max-w-lg leading-relaxed">
            Get your free score in 30 seconds. See exactly what customers find when they search for you.
          </p>

          {/* Search */}
          <div className="mb-8">
            <BusinessSearch />
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-walnut-light">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No signup required
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              30 seconds
            </span>
          </div>
        </div>
      </main>

      {/* Divider */}
      <div className="max-w-[680px] mx-auto w-full px-5 md:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* How it works */}
      <section className="px-5 md:px-8 py-16">
        <div className="max-w-[680px] mx-auto">
          <div className="text-xs font-medium uppercase tracking-wide text-brass mb-6">
            How it works
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-cream rounded-lg border border-border">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center text-sm font-medium shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-display text-lg text-walnut mb-1">Search your business</h3>
                  <p className="text-walnut-mid">
                    Type your business name and select it from Google.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-cream rounded-lg border border-border">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center text-sm font-medium shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-display text-lg text-walnut mb-1">Get your score</h3>
                  <p className="text-walnut-mid">
                    See how your profile ranks out of 100.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-cream rounded-lg border border-border">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center text-sm font-medium shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-display text-lg text-walnut mb-1">See what to fix</h3>
                  <p className="text-walnut-mid">
                    Get clear action items to improve your listing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[680px] mx-auto w-full px-5 md:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-8">
        <div className="max-w-[680px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-walnut-light">
            © 2025 Curb Appeal
          </div>
          <nav className="flex gap-6 text-sm text-walnut-light">
            <Link href="/pricing" className="hover:text-forest transition-colors">
              Pricing
            </Link>
            <Link href="/privacy" className="hover:text-forest transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-forest transition-colors">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
