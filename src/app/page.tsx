"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      {/* Header - full width with constrained content */}
      <header className="w-full border-b border-border/50">
        <div className="max-w-3xl lg:max-w-4xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <div className="font-display text-xl text-walnut">
            Curb Appeal
          </div>
          <nav className="flex items-center gap-4">
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
        </div>
      </header>

      {/* Hero - fills viewport on mobile */}
      <main className="flex-1 flex flex-col justify-center px-5 md:px-8 py-10 md:py-16 min-h-[calc(100svh-200px)] md:min-h-0">
        <div className="max-w-3xl lg:max-w-4xl mx-auto w-full">
          {/* Section Label */}
          <div className="text-xs font-medium uppercase tracking-wider text-brass mb-4 md:mb-6">
            Free Google Business Audit
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(28px,7vw,52px)] leading-[1.12] text-walnut mb-4 md:mb-5 max-w-2xl">
            Is Google helping or hurting your business?
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-walnut-mid mb-8 md:mb-10 max-w-md leading-relaxed">
            Get your free score in 30 seconds. See exactly what customers find when they search for you.
          </p>

          {/* Search */}
          <div className="mb-6 md:mb-8 max-w-xl">
            <BusinessSearch />
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-walnut-light">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No signup
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              30 seconds
            </span>
          </div>
        </div>
      </main>

      {/* How it works - horizontal on desktop */}
      <section className="bg-cream border-t border-border">
        <div className="max-w-3xl lg:max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="text-xs font-medium uppercase tracking-wider text-brass mb-6 md:mb-8">
            How it works
          </div>

          {/* 3-column grid on desktop, stacked on mobile */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex md:flex-col gap-4">
              <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center text-sm font-medium shrink-0">
                1
              </div>
              <div>
                <h3 className="font-display text-lg text-walnut mb-1">Search your business</h3>
                <p className="text-sm text-walnut-mid leading-relaxed">
                  Type your business name and select it from Google.
                </p>
              </div>
            </div>

            <div className="flex md:flex-col gap-4">
              <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center text-sm font-medium shrink-0">
                2
              </div>
              <div>
                <h3 className="font-display text-lg text-walnut mb-1">Get your score</h3>
                <p className="text-sm text-walnut-mid leading-relaxed">
                  See how your profile ranks out of 100.
                </p>
              </div>
            </div>

            <div className="flex md:flex-col gap-4">
              <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center text-sm font-medium shrink-0">
                3
              </div>
              <div>
                <h3 className="font-display text-lg text-walnut mb-1">See what to fix</h3>
                <p className="text-sm text-walnut-mid leading-relaxed">
                  Get clear action items to improve your listing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-3xl lg:max-w-4xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-walnut-light">
            © 2025 Curb Appeal
          </div>
          <nav className="flex gap-5 text-sm text-walnut-light">
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
