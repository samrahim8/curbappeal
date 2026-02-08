"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight text-foreground">
          Curb Appeal
        </div>
        <Link
          href="/login"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Log in
        </Link>
      </header>

      {/* Hero */}
      <main className="px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-6">
            Is Google helping or hurting your business?
          </h1>

          <p className="text-lg text-muted mb-10 leading-relaxed">
            Free audit. 30 seconds. See what customers find when they search for you.
          </p>

          <BusinessSearch />
        </div>
      </main>
    </div>
  );
}
