import { cn } from "@/lib/utils";

// Inline monogram mark — matches /public/brand/mesengr-icon.svg.
// Rendered inline so it inherits crisp scaling and needs no network request.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={cn("size-8", className)}
      role="img"
      aria-label="Mesengr"
    >
      <defs>
        <linearGradient id="lm-tile" x1="256" y1="0" x2="256" y2="512" gradientUnits="userSpaceOnUse">
          <stop stopColor="#111827" />
          <stop offset="1" stopColor="#0B0F19" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="116" fill="url(#lm-tile)" />
      <path
        d="M 133 350 L 133 162 L 228 252 L 323 162 L 323 350"
        stroke="#D4AF37"
        strokeWidth="46"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="372" cy="355" r="18" fill="#D4AF37" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {/* <LogoMark className="size-7" /> */}
      <span className="font-display text-lg font-bold tracking-tight">
        Mesengr<span className="text-gold">.</span>
      </span>
    </span>
  );
}
