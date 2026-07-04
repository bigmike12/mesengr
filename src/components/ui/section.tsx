import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
      <span className="size-1.5 rounded-full bg-gold" aria-hidden />
      {children}
    </p>
  );
}

export function Heading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed text-muted", className)}>
      {children}
    </p>
  );
}
