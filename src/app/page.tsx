"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="px-5 md:px-8 py-4 flex items-center justify-between">
        <div className="font-display text-xl font-medium text-foreground">
          Curb Appeal
        </div>
        <nav className="flex items-center gap-6">
          <Link
            href="/pricing"
            className="hidden sm:block text-sm text-muted hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/login"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Log in
          </Link>
        </nav>
      </header>

      {/* Hero - Mobile: fills screen, Desktop: comfortable */}
      <main className="flex-1 flex flex-col justify-center px-5 md:px-8 py-8 md:py-16">
        <div className="w-full max-w-2xl mx-auto md:mx-0">
          {/* Headline */}
          <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl font-medium leading-[1.15] tracking-tight text-foreground mb-4 md:mb-6">
            Is Google helping or hurting your business?
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-muted mb-8 md:mb-10 max-w-md leading-relaxed">
            Get your free score in 30 seconds. See exactly what customers find when they search for you.
          </p>

          {/* Search - THE main action */}
          <div className="mb-6">
            <BusinessSearch />
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No signup
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              30 seconds
            </span>
          </div>
        </div>
      </main>

      {/* How it works - simple */}
      <section className="px-5 md:px-8 py-12 md:py-16 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="font-display text-xl md:text-2xl font-medium text-foreground mb-8">
            How it works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-10">
            <div>
              <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-medium mb-3">
                1
              </div>
              <h3 className="font-medium text-foreground mb-1">Search your business</h3>
              <p className="text-sm text-muted leading-relaxed">
                Type your business name and select it from Google.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-medium mb-3">
                2
              </div>
              <h3 className="font-medium text-foreground mb-1">Get your score</h3>
              <p className="text-sm text-muted leading-relaxed">
                See how your profile ranks out of 100.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-medium mb-3">
                3
              </div>
              <h3 className="font-medium text-foreground mb-1">See what to fix</h3>
              <p className="text-sm text-muted leading-relaxed">
                Get clear action items to improve your listing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-6 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-muted">
            © 2025 Curb Appeal
          </div>
          <nav className="flex gap-6 text-sm text-muted">
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
      </footer>
    </div>
  );
}
