import { Check, ShieldCheck } from "lucide-react";
import { carePlans } from "@/lib/site";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export function CarePlansSection() {
  return (
    <Section id="care-plans" className="bg-surface">
      <Container>
        <Reveal>
          <Eyebrow>Care plans</Eyebrow>
          <Heading>Launch day is the beginning, not the end.</Heading>
          <Lead>
            Recurring plans that keep your site fast, secure and improving —
            so it keeps earning long after it ships.
          </Lead>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3" gap={0.08}>
          {carePlans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`hover-lift flex h-full flex-col rounded-3xl border bg-card p-7 shadow-soft hover:shadow-lift ${
                  plan.highlight ? "border-gold/50" : "border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl bg-gold-soft p-2.5">
                    <ShieldCheck className="size-5 text-gold-deep" aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted">{plan.blurb}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <Check className="size-3.5 shrink-0 text-gold-deep" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <ButtonLink
                    href={`/care-plans#${plan.slug}`}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Plan details
                  </ButtonLink>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
