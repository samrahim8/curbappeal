"use client";

import { useState } from "react";
import Link from "next/link";
import { AuditResult, ActionItem } from "@/lib/scoring";
import { ScoreCircle } from "@/components/ScoreCircle";
import { Logo } from "@/components/Logo";

interface AuditResultsProps {
  audit: AuditResult;
}

function ActionItemCard({ item, variant = "priority" }: { item: ActionItem; variant?: "priority" | "suggestion" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const severityConfig = {
    critical: {
      gradient: "from-red-500/20 via-red-500/5 to-transparent",
      badge: "bg-red-500 text-white",
      label: "Fix now",
      accent: "border-l-red-500"
    },
    warning: {
      gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
      badge: "bg-amber-500 text-white",
      label: "Important",
      accent: "border-l-amber-500"
    },
    suggestion: {
      gradient: "from-blue-500/5 via-transparent to-transparent",
      badge: "bg-blue-500/10 text-blue-600",
      label: "Bonus",
      accent: "border-l-blue-500"
    },
  };

  const config = severityConfig[item.severity];

  const categoryIcons: Record<string, React.ReactNode> = {
    completeness: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    photos: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    reviews: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    responses: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    activity: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  };

  const categoryLabels: Record<string, string> = {
    completeness: "Profile",
    photos: "Photos",
    reviews: "Reviews",
    responses: "Responses",
    activity: "Activity",
  };

  // Priority card layout
  if (variant === "priority") {
    return (
      <div className="group relative bg-surface rounded-3xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
        {/* Gradient accent */}
        <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} pointer-events-none`} />

        <div className="relative p-6 md:p-8">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.badge}`}>
                {config.label}
              </span>
              <span className="text-xs text-text-muted uppercase tracking-wider">
                {categoryLabels[item.category] || "Profile"}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl text-text mb-3 leading-tight">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Expandable fix section */}
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="pb-6">
              <div className="bg-accent/5 rounded-2xl p-5 border border-accent/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-accent">How to fix</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{item.howToFix}</p>
              </div>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              isExpanded
                ? "bg-accent text-white"
                : "bg-accent/10 text-accent hover:bg-accent/20"
            }`}
          >
            {isExpanded ? "Got it" : "Show me how"}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // Suggestion card layout - more compact, left accent border
  return (
    <div className={`group relative bg-surface rounded-2xl overflow-hidden border-l-4 ${config.accent} shadow-sm hover:shadow-md transition-all duration-300`}>
      <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} pointer-events-none`} />

      <div className="relative p-5 md:p-6">
        <div className="flex gap-4">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
            {categoryIcons[item.category] || categoryIcons.completeness}
          </div>

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${config.badge}`}>
                {config.label}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-lg text-text mb-2 leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Expandable fix section */}
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pb-4">
                <div className="bg-blue-500/5 rounded-xl p-4 border border-blue-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm font-medium text-blue-600">Quick tip</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.howToFix}</p>
                </div>
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 ${
                isExpanded
                  ? "text-blue-600"
                  : "text-text-muted hover:text-blue-600"
              }`}
            >
              {isExpanded ? "Hide tip" : "Show tip"}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
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
    </div>
  );
}

function BreakdownCard({
  title,
  score,
  maxScore,
  description,
  icon,
}: {
  title: string;
  score: number;
  maxScore: number;
  description: string;
  icon: React.ReactNode;
}) {
  const percentage = Math.round((score / maxScore) * 100);

  const getConfig = () => {
    if (percentage <= 40) return {
      gradient: "from-red-500/10 via-transparent to-transparent",
      bar: "bg-gradient-to-r from-red-500 to-red-400",
      ring: "ring-red-500/20",
      text: "text-red-600",
      label: "Needs work"
    };
    if (percentage <= 70) return {
      gradient: "from-amber-500/10 via-transparent to-transparent",
      bar: "bg-gradient-to-r from-amber-500 to-amber-400",
      ring: "ring-amber-500/20",
      text: "text-amber-600",
      label: "Getting there"
    };
    return {
      gradient: "from-green-500/10 via-transparent to-transparent",
      bar: "bg-gradient-to-r from-green-500 to-emerald-400",
      ring: "ring-green-500/20",
      text: "text-green-600",
      label: "Great"
    };
  };

  const config = getConfig();

  return (
    <div className="group relative bg-surface rounded-3xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} pointer-events-none`} />

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl bg-surface ring-1 ${config.ring} flex items-center justify-center text-text-secondary shadow-sm`}>
              {icon}
            </div>
            <div>
              <h3 className="font-display text-lg text-text">{title}</h3>
              <p className="text-sm text-text-muted">{score} of {maxScore} points</p>
            </div>
          </div>
        </div>

        {/* Score display */}
        <div className="flex items-end gap-3 mb-4">
          <span className="text-5xl font-display text-text leading-none">{percentage}</span>
          <div className="flex flex-col pb-1">
            <span className="text-xl text-text-muted">%</span>
          </div>
          <span className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${config.text} bg-surface ring-1 ${config.ring}`}>
            {config.label}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-3 bg-border-light/50 rounded-full overflow-hidden mb-5 ring-1 ring-border-light">
          <div
            className={`h-full ${config.bar} rounded-full transition-all duration-700 ease-out`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function AuditResults({ audit }: AuditResultsProps) {
  const [copied, setCopied] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const priorityItems = audit.actionItems.filter(
    (item) => item.severity === "critical" || item.severity === "warning"
  );
  const suggestions = audit.actionItems.filter(
    (item) => item.severity === "suggestion"
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border-light">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Logo size="md" linkToHome />
          <button
            onClick={handleShare}
            className="glass-button px-4 py-2 rounded-full text-sm font-medium text-text inline-flex items-center gap-2"
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
        </div>
      </nav>

      {/* Hero - Centered score */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <ScoreCircle score={audit.totalScore} label={audit.scoreLabel} />
          </div>

          <h1 className="font-display text-2xl md:text-3xl text-text mb-2">
            {audit.businessName}
          </h1>
          <p className="text-text-muted mb-4">{audit.address}</p>

          <div className="flex items-center justify-center gap-4 text-sm mb-6">
            {audit.rating > 0 && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium text-text">{audit.rating.toFixed(1)}</span>
                <span className="text-text-muted">({audit.reviewCount})</span>
              </div>
            )}
            <span className="text-border">•</span>
            <span className="text-text-muted">{audit.category}</span>
          </div>

          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            {audit.summary}
          </p>
        </div>
      </section>

      {/* Action Items */}
      <section className="px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-text-muted mb-2 tracking-wide">What to fix</p>
            <h2 className="font-display text-2xl md:text-3xl text-text">
              {priorityItems.length > 0
                ? `${priorityItems.length} priority item${priorityItems.length !== 1 ? "s" : ""}`
                : "You're in great shape"
              }
            </h2>
          </div>

          {priorityItems.length === 0 ? (
            <div className="relative bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent rounded-3xl p-10 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
              <div className="relative">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-display text-xl text-text mb-2">No critical issues found!</p>
                <p className="text-text-secondary max-w-md mx-auto">Your profile is in good shape. Check the suggestions below to go from good to great.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {priorityItems.map((item) => (
                <ActionItemCard key={`${item.category}-${item.title}`} item={item} variant="priority" />
              ))}
            </div>
          )}

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="mt-12">
              <button
                onClick={() => setShowSuggestions(!showSuggestions)}
                className="w-full group"
              >
                <div className="flex items-center justify-between p-5 bg-surface rounded-2xl border border-border-light hover:border-border transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-text">
                        {suggestions.length} suggestion{suggestions.length !== 1 ? "s" : ""} to consider
                      </p>
                      <p className="text-sm text-text-muted">Optional improvements to boost your score</p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-background flex items-center justify-center transition-transform duration-200 ${showSuggestions ? "rotate-180" : ""}`}>
                    <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${showSuggestions ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <div className="space-y-4">
                  {suggestions.map((item) => (
                    <ActionItemCard key={`${item.category}-${item.title}`} item={item} variant="suggestion" />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Score Breakdown */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm text-text-muted mb-3 tracking-wide uppercase">Score breakdown</p>
            <h2 className="font-display text-3xl md:text-4xl text-text mb-4">
              How we calculated your score
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Your overall score is based on four key factors that Google uses to rank local businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <BreakdownCard
              title="Profile Completeness"
              score={audit.breakdown.completeness.score}
              maxScore={audit.breakdown.completeness.maxScore}
              description={
                audit.breakdown.completeness.percentage === 100
                  ? "Your profile is complete with all essential business information."
                  : `Complete your profile to help customers find the information they need.`
              }
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
            <BreakdownCard
              title="Photos"
              score={audit.breakdown.photos.score}
              maxScore={audit.breakdown.photos.maxScore}
              description={`${audit.breakdown.photos.count} photos. Businesses with 25+ photos get 35% more clicks.`}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
            <BreakdownCard
              title="Reviews"
              score={audit.breakdown.reviews.score}
              maxScore={audit.breakdown.reviews.maxScore}
              description={`${audit.breakdown.reviews.count} reviews with ${audit.breakdown.reviews.averageRating.toFixed(1)} average. More reviews = higher trust.`}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              }
            />
            <BreakdownCard
              title="Review Responses"
              score={audit.breakdown.responses.score}
              maxScore={audit.breakdown.responses.maxScore}
              description="Responding to reviews shows customers you care and boosts rankings."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-text mb-4">
            Want to improve this score?
          </h2>
          <p className="text-lg text-text-secondary mb-10">
            Curb Appeal monitors your profile and tells you exactly what to fix — every week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="btn-primary px-8 py-4 rounded-full text-base font-medium w-full sm:w-auto"
            >
              Start Free Trial — $29/mo
            </Link>
            <Link
              href="/"
              className="glass-button px-6 py-3 rounded-full text-sm font-medium text-text w-full sm:w-auto text-center"
            >
              Check another business
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-12 border-t border-border pb-24 md:pb-12">
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

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-border-light md:hidden">
        <Link
          href="/pricing"
          className="btn-primary flex items-center justify-center gap-2 w-full py-4 rounded-full font-medium"
        >
          Improve This Score
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
