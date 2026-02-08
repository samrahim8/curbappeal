"use client";

import { useEffect, useState } from "react";

interface ScoreCircleProps {
  score: number;
  size?: "large" | "medium" | "small";
  label?: string;
  animate?: boolean;
}

export function ScoreCircle({
  score,
  size = "large",
  label,
  animate = true,
}: ScoreCircleProps) {
  const [animatedScore, setAnimatedScore] = useState(animate ? 0 : score);
  const [animatedOffset, setAnimatedOffset] = useState(animate ? 283 : 283 - (score / 100) * 283);

  useEffect(() => {
    if (!animate) return;

    // Animate score number
    const duration = 1500;
    const startTime = Date.now();

    const animateScore = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedScore(Math.round(score * eased));
      setAnimatedOffset(283 - (score * eased / 100) * 283);

      if (progress < 1) {
        requestAnimationFrame(animateScore);
      }
    };

    requestAnimationFrame(animateScore);
  }, [score, animate]);

  const getColor = () => {
    if (score < 40) return { stroke: "#EF4444", bg: "#FEF2F2", text: "#DC2626" };      // Invisible - red
    if (score < 60) return { stroke: "#F97316", bg: "#FFF7ED", text: "#EA580C" };      // At Risk - orange
    if (score < 75) return { stroke: "#F59E0B", bg: "#FFFBEB", text: "#D97706" };      // Average - amber
    if (score < 90) return { stroke: "#22C55E", bg: "#F0FDF4", text: "#16A34A" };      // Strong - green
    return { stroke: "#10B981", bg: "#ECFDF5", text: "#059669" };                       // Dominant - bright green
  };

  const colors = getColor();

  const sizeConfig = {
    large: { container: "w-48 h-48", stroke: 8, fontSize: "text-5xl", labelSize: "text-base" },
    medium: { container: "w-32 h-32", stroke: 6, fontSize: "text-3xl", labelSize: "text-sm" },
    small: { container: "w-20 h-20", stroke: 4, fontSize: "text-xl", labelSize: "text-xs" },
  };

  const config = sizeConfig[size];

  return (
    <div className={`relative ${config.container}`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth={config.stroke}
          className="text-border"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={colors.stroke}
          strokeWidth={config.stroke}
          strokeLinecap="round"
          strokeDasharray="283"
          strokeDashoffset={animatedOffset}
          style={{
            transition: animate ? "none" : "stroke-dashoffset 0.5s ease-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`font-bold ${config.fontSize}`}
          style={{ color: colors.text }}
        >
          {animatedScore}
        </span>
        {label && (
          <span className={`${config.labelSize} text-text-muted mt-1`}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
