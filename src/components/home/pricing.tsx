import { Check } from "lucide-react";
import { engagementModels } from "@/lib/site";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export function Pricing({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="pricing">
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>Engagement models</Eyebrow>
          </div>
          <Heading>Priced around outcomes, not pages.</Heading>
          <Lead className="mx-auto">
            Three ways to work together. Every engagement includes discovery,
            design, development, hosting, maintenance, support and AI
            integrations — scaled to your stage.
          </Lead>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3" gap={0.08}>
          {engagementModels.map((model) => (
            <StaggerItem key={model.name}>
              <div
                className={`hover-lift relative flex h-full flex-col rounded-3xl border p-8 ${
                  model.highlight
                    ? "border-gold/50 bg-ink text-white shadow-lift dark:bg-card"
                    : "border-border bg-card shadow-soft hover:shadow-lift"
                }`}
              >
                {model.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                    Most chosen
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold">{model.name}</h3>
                <p className={`mt-1 text-sm ${model.highlight ? "text-gold" : "text-gold-deep"}`}>
                  {model.audience}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    model.highlight ? "text-white/70" : "text-muted"
                  }`}
                >
                  {model.blurb}
                </p>
                <ul className="mt-7 flex-1 space-y-3.5">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span
                        className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
                          model.highlight ? "bg-gold/20" : "bg-gold-soft"
                        }`}
                      >
                        <Check className="size-3 text-gold" aria-hidden />
                      </span>
                      <span className={model.highlight ? "text-white/90" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink
                    href="/book"
                    variant={model.highlight ? "gold" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    Start with {model.name}
                  </ButtonLink>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {!compact && (
          <Reveal delay={0.15} className="mt-10 text-center">
            <p className="text-sm text-muted">
              Not sure which fits?{" "}
              <a href="/assessment" className="font-medium text-gold-deep underline-offset-4 hover:underline">
                Take the 5-minute Digital Assessment
              </a>{" "}
              and we&apos;ll tell you.
            </p>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
