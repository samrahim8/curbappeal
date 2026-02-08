import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Link href="/" className="flex items-center gap-2">
          <Logo size="md" />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-5 py-12">
        <div className="text-center">
          <div className="w-24 h-24 bg-surface-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-2">Page not found</h1>
          <p className="text-text-muted mb-8 max-w-md mx-auto">
            We couldn&apos;t find the page you&apos;re looking for.
            It might have been moved or doesn&apos;t exist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Get a free audit
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-border text-foreground font-semibold rounded-xl hover:border-primary hover:text-primary transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 py-6 text-center">
        <p className="text-sm text-text-light">
          © 2025 Curb Appeal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
