import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-2 dark:bg-white dark:text-ink dark:hover:bg-white/90",
  gold: "bg-gold text-ink hover:brightness-110 shadow-[0_8px_24px_rgba(212,175,55,0.35)]",
  outline:
    "border border-border-strong text-foreground hover:border-gold hover:text-gold bg-transparent",
  ghost: "text-foreground hover:bg-surface dark:hover:bg-card",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 active:scale-[0.98] cursor-pointer select-none whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
