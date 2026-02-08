interface LogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ size = "md", showWordmark = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: "text-sm", gap: "gap-1.5" },
    md: { icon: 32, text: "text-base", gap: "gap-2" },
    lg: { icon: 48, text: "text-xl", gap: "gap-3" },
  };

  const { icon, text, gap } = sizes[size];

  return (
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
        <rect x="8" y="14" width="48" height="10" rx="3" fill="#2D5A3D"/>
        {/* Awning bottom edge */}
        <rect x="8" y="22" width="48" height="4" rx="1" fill="#1E3D29"/>
        {/* Storefront body */}
        <rect x="12" y="26" width="40" height="26" rx="2" fill="#2D5A3D"/>
        {/* Door */}
        <rect x="25" y="34" width="14" height="18" rx="2" fill="white"/>
        {/* Door handle */}
        <circle cx="36" cy="44" r="1.5" fill="#2D5A3D"/>
      </svg>
      {showWordmark && (
        <span className={`font-display font-semibold tracking-wider ${text}`}>
          CURB APPEAL
        </span>
      )}
    </div>
  );
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
      <rect x="8" y="14" width="48" height="10" rx="3" fill="#2D5A3D"/>
      {/* Awning bottom edge */}
      <rect x="8" y="22" width="48" height="4" rx="1" fill="#1E3D29"/>
      {/* Storefront body */}
      <rect x="12" y="26" width="40" height="26" rx="2" fill="#2D5A3D"/>
      {/* Door */}
      <rect x="25" y="34" width="14" height="18" rx="2" fill="white"/>
      {/* Door handle */}
      <circle cx="36" cy="44" r="1.5" fill="#2D5A3D"/>
    </svg>
  );
}
