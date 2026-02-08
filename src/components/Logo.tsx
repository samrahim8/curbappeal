import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
  linkToHome?: boolean;
}

export function Logo({ size = "md", showWordmark = true, className = "", linkToHome = false }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: "text-sm", gap: "gap-1.5" },
    md: { icon: 28, text: "text-base", gap: "gap-2" },
    lg: { icon: 36, text: "text-lg", gap: "gap-2.5" },
  };

  const { icon, text, gap } = sizes[size];

  const content = (
    <div className={`flex items-center ${gap} ${className}`}>
      {/* Storefront Icon */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Awning */}
        <rect x="8" y="14" width="48" height="10" rx="3" fill="#2D4A3E"/>
        {/* Awning bottom edge */}
        <rect x="8" y="22" width="48" height="4" rx="1" fill="#1E3329"/>
        {/* Storefront body */}
        <rect x="12" y="26" width="40" height="26" rx="2" fill="#2D4A3E"/>
        {/* Door */}
        <rect x="25" y="34" width="14" height="18" rx="2" fill="#FAF7F2"/>
        {/* Door handle */}
        <circle cx="36" cy="44" r="1.5" fill="#2D4A3E"/>
      </svg>
      {showWordmark && (
        <span className={`font-display tracking-wider text-walnut ${text}`}>
          Curb Appeal
        </span>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="hover:opacity-80 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}

export function LogoIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Awning */}
      <rect x="8" y="14" width="48" height="10" rx="3" fill="#2D4A3E"/>
      {/* Awning bottom edge */}
      <rect x="8" y="22" width="48" height="4" rx="1" fill="#1E3329"/>
      {/* Storefront body */}
      <rect x="12" y="26" width="40" height="26" rx="2" fill="#2D4A3E"/>
      {/* Door */}
      <rect x="25" y="34" width="14" height="18" rx="2" fill="#FAF7F2"/>
      {/* Door handle */}
      <circle cx="36" cy="44" r="1.5" fill="#2D4A3E"/>
    </svg>
  );
}
