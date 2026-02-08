"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { AuditResult, ActionItem } from "@/lib/scoring";
import { ScoreCircle } from "@/components/ScoreCircle";
import { Logo } from "@/components/Logo";

interface AuditResultsProps {
  audit: AuditResult;
}

function SeverityBadge({ severity }: { severity: ActionItem["severity"] }) {
  const config = {
    critical: { bg: "bg-score-poor/10", text: "text-score-poor", label: "Fix now" },
    warning: { bg: "bg-score-warning/10", text: "text-score-warning", label: "Important" },
    suggestion: { bg: "bg-primary/10", text: "text-primary", label: "Nice to have" },
  };

  const { bg, text, label } = config[severity];

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${bg} ${text}`}>
      {label}
    </span>
  );
}

function ActionItemsSection({ actionItems }: { actionItems: ActionItem[] }) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const priorityItems = actionItems.filter(item => item.severity === "critical" || item.severity === "warning");
  const suggestions = actionItems.filter(item => item.severity === "suggestion");

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6">
        What to fix
        {priorityItems.length > 0 && (
          <span className="ml-2 text-sm font-normal text-text-muted">
            ({priorityItems.length} priority item{priorityItems.length !== 1 ? "s" : ""})
          </span>
        )}
      </h2>

      {priorityItems.length === 0 ? (
        <div className="bg-score-good/10 border border-score-good/20 rounded-2xl p-6 text-center mb-6">
          <div className="w-12 h-12 bg-score-good/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-score-good" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-semibold text-foreground">No critical issues found!</p>
          <p className="text-sm text-text-muted mt-1">Your profile is in good shape. Check the suggestions below to go from good to great.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {priorityItems.map((item, index) => (
            <ActionItemCard key={`${item.category}-${item.title}`} item={item} index={index} />
          ))}
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-text-muted hover:text-foreground hover:bg-surface-secondary rounded-xl transition-colors min-h-[48px]"
          >
            <svg
              className={`w-5 h-5 transition-transform ${showSuggestions ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {showSuggestions ? "Hide" : "Show"} {suggestions.length} suggestion{suggestions.length !== 1 ? "s" : ""}
          </button>

          {showSuggestions && (
            <div className="space-y-4 mt-4">
              {suggestions.map((item, index) => (
                <ActionItemCard key={`${item.category}-${item.title}`} item={item} index={index} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function ActionItemCard({ item, index }: { item: ActionItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        setIsExpanded(false);
      }
    };
    if (isExpanded) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isExpanded]);

  const categoryIcons = {
    completeness: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    photos: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    reviews: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    responses: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    activity: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  };

  return (
    <div
      className="bg-surface border border-border rounded-2xl p-5 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-surface-secondary rounded-xl flex items-center justify-center text-text-muted">
          {categoryIcons[item.category]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <SeverityBadge severity={item.severity} />
          </div>
          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
          <p className="text-text-muted text-sm">{item.description}</p>

          {isExpanded && (
            <div className="mt-4 p-4 bg-surface-secondary rounded-xl">
              <p className="text-sm font-medium text-foreground mb-2">How to fix:</p>
              <p className="text-sm text-text-muted">{item.howToFix}</p>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors min-h-[44px]"
          >
            {isExpanded ? "Hide" : "How to fix"}
            <svg
              className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function BreakdownCard({
  title,
  score,
  maxScore,
  recommendation,
  benchmark,
  icon,
}: {
  title: string;
  score: number;
  maxScore: number;
  recommendation: string;
  benchmark?: string;
  icon: React.ReactNode;
}) {
  const percentage = Math.round((score / maxScore) * 100);
  const getColor = () => {
    if (percentage <= 40) return "bg-score-poor";
    if (percentage <= 60) return "bg-score-warning";
    return "bg-score-good";
  };

  return (
    <div className="bg-surface border border-border rounded-2xl p-5 flex flex-col h-[200px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-surface-secondary rounded-xl flex items-center justify-center text-text-muted">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-text-muted">
              {score}/{maxScore} points
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold">{percentage}%</span>
        </div>
      </div>
      <div className="h-2 bg-surface-secondary rounded-full overflow-hidden mb-3">
        <div
          className={`h-full ${getColor()} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-text-muted flex-1">{recommendation}</p>
      {benchmark && (
        <p className="text-sm text-primary font-medium mt-auto pt-2">{benchmark}</p>
      )}
    </div>
  );
}

export function AuditResults({ audit }: AuditResultsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined"
    ? window.location.href
    : `${process.env.NEXT_PUBLIC_APP_URL}/audit/${audit.placeId}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${audit.businessName} scored ${audit.totalScore}/100 on Curb Appeal`,
          text: audit.summary,
          url: shareUrl,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5 border-b border-border">
        <Logo size="md" linkToHome />
        <button
          onClick={handleShare}
          className="glass-button inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm text-text"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </>
          )}
        </button>
      </header>

      <main className="max-w-4xl xl:max-w-6xl mx-auto px-5 py-8 md:py-12">
        {/* Score Hero */}
        <section className="mb-12">
          {/* Mobile: Stacked centered layout */}
          <div className="lg:hidden text-center">
            <div className="flex justify-center mb-6">
              <ScoreCircle score={audit.totalScore} label={audit.scoreLabel} />
            </div>

            <h1 className="text-2xl font-bold mb-2">
              {audit.businessName}
            </h1>
            <p className="text-text-muted mb-4">{audit.address}</p>

            <div className="flex items-center justify-center gap-4 text-sm">
              {audit.rating > 0 && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-score-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium">{audit.rating.toFixed(1)}</span>
                  <span className="text-text-light">({audit.reviewCount} reviews)</span>
                </div>
              )}
              <span className="text-border">•</span>
              <span className="text-text-muted">{audit.category}</span>
            </div>

            <p className="mt-6 text-lg text-text-muted max-w-xl mx-auto">
              {audit.summary}
            </p>
          </div>

          {/* Desktop: Side-by-side layout */}
          <div className="hidden lg:flex items-start gap-8">
            <div className="flex-shrink-0">
              <ScoreCircle score={audit.totalScore} label={audit.scoreLabel} />
            </div>

            <div className="flex-1 pt-2">
              <h1 className="text-3xl font-bold mb-2">
                {audit.businessName}
              </h1>
              <p className="text-text-muted mb-3">{audit.address}</p>

              <div className="flex items-center gap-4 text-sm mb-4">
                {audit.rating > 0 && (
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-score-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium">{audit.rating.toFixed(1)}</span>
                    <span className="text-text-light">({audit.reviewCount} reviews)</span>
                  </div>
                )}
                <span className="text-border">•</span>
                <span className="text-text-muted">{audit.category}</span>
              </div>

              <p className="text-lg text-text-muted max-w-2xl">
                {audit.summary}
              </p>

              {/* Desktop inline CTA */}
              <div className="mt-6 flex items-center gap-4">
                <Link
                  href="/pricing"
                  className="btn-primary inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold"
                >
                  Improve This Score
                </Link>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-text-secondary hover:text-text font-medium rounded-full hover:bg-surface transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share Results
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Action Items */}
        <ActionItemsSection actionItems={audit.actionItems} />

        {/* Score Breakdown */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6">Score breakdown</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <BreakdownCard
              title="Profile Completeness"
              score={audit.breakdown.completeness.score}
              maxScore={audit.breakdown.completeness.maxScore}
              recommendation={
                audit.breakdown.completeness.percentage === 100
                  ? "Your profile is complete. Nice work!"
                  : `${100 - audit.breakdown.completeness.percentage}% of your profile info is missing.`
              }
              benchmark={
                audit.breakdown.completeness.percentage < 100
                  ? "Top-ranked businesses have 100% complete profiles."
                  : "You're ahead of 70% of local businesses."
              }
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
            <BreakdownCard
              title="Photos"
              score={audit.breakdown.photos.score}
              maxScore={audit.breakdown.photos.maxScore}
              recommendation={audit.breakdown.photos.recommendation}
              benchmark={
                audit.breakdown.photos.count < 25
                  ? `You have ${audit.breakdown.photos.count}. Businesses ranking #1 average 25+.`
                  : "Keep photos fresh — update quarterly to stay relevant."
              }
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
            <BreakdownCard
              title="Reviews"
              score={audit.breakdown.reviews.score}
              maxScore={audit.breakdown.reviews.maxScore}
              recommendation={audit.breakdown.reviews.recommendation}
              benchmark={
                audit.breakdown.reviews.count < 75
                  ? `You have ${audit.breakdown.reviews.count}. Top 3 local businesses average 75+.`
                  : audit.breakdown.reviews.count < 250
                  ? `You have ${audit.breakdown.reviews.count}. The #1 spot usually has 250+.`
                  : audit.breakdown.reviews.averageRating < 4.8
                  ? "Elite businesses maintain 4.8+ stars."
                  : "Stay on top — your competitors are catching up."
              }
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              }
            />
            <BreakdownCard
              title="Review Responses"
              score={audit.breakdown.responses.score}
              maxScore={audit.breakdown.responses.maxScore}
              recommendation={audit.breakdown.responses.recommendation}
              benchmark="Top businesses respond to 100% of reviews."
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent text-white rounded-3xl p-8 md:p-12 text-center shadow-card">
          <h2 className="font-display text-2xl md:text-3xl mb-4">
            Want to improve this score?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Curb Appeal monitors your profile, alerts you to new reviews,
            and tells you exactly what to fix — every week.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-accent font-semibold rounded-full hover:bg-background transition-colors w-full sm:w-auto"
            >
              Start Free Trial — $29/month
            </Link>
            <a
              href="#fix-it-for-me"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Get it fixed for me — $499
            </a>
          </div>
        </section>

        {/* Check Another Business */}
        <section className="mt-12 text-center">
          <p className="text-text-muted mb-4">Want to check another business?</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-light transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to search
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-5 py-8 border-t border-border mt-12 pb-24 md:pb-8">
        <div className="max-w-4xl xl:max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Logo size="sm" showWordmark={false} />
            <span className="text-sm text-text-muted">
              © 2025 Curb Appeal. All rights reserved.
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-text-secondary">
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
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border md:hidden safe-area-bottom">
        <Link
          href="/pricing"
          className="btn-primary flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full font-semibold min-h-[52px]"
        >
          Improve This Score
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
