import Link from "next/link";
import { Metadata } from "next";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Log in — Curb Appeal",
  description: "Log in to your Curb Appeal account.",
};

export default function LoginPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <Logo size="md" linkToHome />
      </header>

      <main className="flex-1 flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-display text-2xl md:text-3xl text-text mb-2">
              Welcome back
            </h1>
            <p className="text-text-secondary">
              Log in to access your dashboard.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-8 shadow-card">
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>

              <h2 className="font-display text-xl text-text mb-2">Coming soon</h2>
              <p className="text-text-secondary text-sm mb-6">
                Account login is launching with our Pro plans.
                For now, enjoy unlimited free audits!
              </p>

              <Link
                href="/"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full font-medium"
              >
                Get a free audit
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-text-muted mt-6">
            Want to be notified when we launch?{" "}
            <Link href="/pricing" className="text-accent hover:underline">
              See pricing
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 py-6 text-center">
        <p className="text-sm text-text-muted">
          © 2025 Curb Appeal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
