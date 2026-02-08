import Link from "next/link";
import { Metadata } from "next";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy — Curb Appeal",
  description: "Privacy policy for Curb Appeal.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <Logo size="md" />
        </Link>
      </header>

      <main className="flex-1 px-5 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-neutral max-w-none space-y-6 text-text-muted">
            <p className="text-foreground font-medium">
              Last updated: February 2025
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                What we collect
              </h2>
              <p>
                When you use Curb Appeal, we collect only what&apos;s necessary to
                provide the service:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Business information:</strong> The business name and
                  location you search for (pulled from Google Places API)
                </li>
                <li>
                  <strong>Audit results:</strong> We store audit scores and
                  results to show you your history and improvements over time
                </li>
                <li>
                  <strong>Account info:</strong> If you create an account, we
                  store your email address and password (encrypted)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                What we don&apos;t do
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We don&apos;t sell your data to anyone</li>
                <li>We don&apos;t share your information with third parties for marketing</li>
                <li>We don&apos;t track you across the web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Third-party services
              </h2>
              <p>We use the following services to operate Curb Appeal:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Google Places API:</strong> To fetch your business
                  information from Google
                </li>
                <li>
                  <strong>Vercel:</strong> To host the website
                </li>
                <li>
                  <strong>Stripe:</strong> To process payments (if you subscribe
                  to a paid plan)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Your rights
              </h2>
              <p>
                You can request to delete your data at any time by contacting us.
                If you have an account, you can delete it from your settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Contact
              </h2>
              <p>
                Questions about privacy? Email us at{" "}
                <a
                  href="mailto:hello@getcurbappeal.com"
                  className="text-primary hover:underline"
                >
                  hello@getcurbappeal.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 py-6 border-t border-border">
        <div className="max-w-2xl mx-auto flex justify-between items-center text-sm text-text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            ← Back to home
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
