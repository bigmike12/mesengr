import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Booking } from "@/components/tools/booking";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Pick a time for a free 30-minute strategy call. Leave with a clear picture of your digital presence and what to do next.",
};

const expectations = [
  "A straight assessment of your current digital presence",
  "The two or three highest-impact improvements for your business",
  "Honest advice on what not to spend money on",
  "A concrete idea of timeline and investment — if you want one",
];

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a call"
        title="30 minutes that pay for themselves."
        lead="No slideshows, no pressure. You talk about your business; we tell you exactly what we'd do — whether or not you hire us."
      />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="rounded-3xl border border-border bg-surface p-8">
                <h2 className="font-display text-xl font-semibold">
                  What you&apos;ll leave with
                </h2>
                <ul className="mt-6 space-y-4">
                  {expectations.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-soft">
                        <Check className="size-3 text-gold-deep" aria-hidden />
                      </span>
                      {e}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted">
                  “The call alone was worth more than the audit we&apos;d paid
                  another agency for.”
                  <span className="mt-2 block font-medium text-foreground">
                    — Maryann Abaniwu, Orange Bowl
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Booking />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
