import { Container, Eyebrow } from "@/components/ui/section";
import type { ReactNode } from "react";

// Server component — the H1 here is the LCP element on interior pages, so it
// enters via pure CSS animation (transform-only) and paints with the first byte.
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden pb-16 pt-40 md:pb-20 md:pt-48">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-72 w-[640px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <Container className="relative">
        <div className="anim-fade-up">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="anim-rise max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance [animation-delay:0.06s] md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="anim-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted [animation-delay:0.15s]">
            {lead}
          </p>
        )}
        {children}
      </Container>
    </div>
  );
}
