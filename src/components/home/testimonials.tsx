import { Play, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const clientLogos = [
  "Smile Point Dental",
  "KruxHaul Logistics",
  "Orange Bowl",
  "Bakare & Co",
  "Havilah Interiors",
  "Lumen Fitness",
];

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface">
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>Client stories</Eyebrow>
          </div>
          <Heading>Trusted by businesses that measure everything.</Heading>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2" gap={0.08}>
          {testimonials.map((t, i) => (
            <StaggerItem key={t.name}>
              <figure className="hover-lift flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-lift"
              >
                <Quote className="size-6 text-gold-deep" aria-hidden />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-gold/30 to-gold/10 font-display text-sm font-bold text-gold-deep"
                  >
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                  {i === 0 && (
                    <button
                      className="ml-auto flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-xs text-muted transition-colors hover:border-gold hover:text-gold"
                      aria-label={`Play video testimonial from ${t.name}`}
                    >
                      <Play className="size-3.5" aria-hidden />
                      Watch
                    </button>
                  )}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="font-display text-sm font-semibold uppercase tracking-widest text-muted/60 transition-colors hover:text-muted"
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
