import { Check, X } from "lucide-react";
import { comparison } from "@/lib/site";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export function Comparison() {
  return (
    <Section id="comparison" className="bg-surface">
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>The difference</Eyebrow>
          </div>
          <Heading>A website is a deliverable. Growth is a relationship.</Heading>
          <Lead className="mx-auto">
            Most agencies hand you files and move on. We take responsibility
            for the outcome.
          </Lead>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full rounded-3xl border border-border bg-card/60 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Traditional Agency
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-muted">
                A project that ends
              </p>
              <ul className="mt-8 space-y-4">
                {comparison.traditional.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border">
                      <X className="size-3.5" aria-hidden />
                    </span>
                    <span className="line-through decoration-border-strong decoration-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-gold/30 bg-ink p-8 text-white shadow-lift md:p-10 dark:bg-card">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 size-64 rounded-full bg-gold/20 blur-3xl"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Mesengr
              </p>
              <p className="mt-2 font-display text-2xl font-semibold">
                A partnership that compounds
              </p>
              <Stagger className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2" gap={0.05}>
                {comparison.mesengr.map((item) => (
                  <StaggerItem key={item}>
                    <span className="flex items-center gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                        <Check className="size-3.5 text-gold" aria-hidden />
                      </span>
                      <span className="text-sm text-white/90">{item}</span>
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
