"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { services, type Service } from "@/lib/site";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { Modal } from "@/components/ui/modal";
import { ButtonLink } from "@/components/ui/button";

export function ServicesGrid({
  heading = "Everything your business needs online.",
  showAll = true,
}: {
  heading?: string;
  showAll?: boolean;
}) {
  const [selected, setSelected] = useState<Service | null>(null);
  const list = showAll ? services : services.slice(0, 8);

  return (
    <Section id="services">
      <Container>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <Heading>{heading}</Heading>
          <Lead>
            One partner, sixteen capabilities. Click any service to see exactly
            what&apos;s inside.
          </Lead>
        </Reveal>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.04}>
          {list.map((service) => (
            <StaggerItem key={service.slug}>
              <button
                id={service.slug}
                onClick={() => setSelected(service)}
                className="hover-lift group h-full w-full scroll-mt-32 rounded-3xl border border-border bg-card p-6 text-left shadow-soft transition-all duration-300 hover:border-gold/40 hover:shadow-lift"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl border border-border bg-surface p-2.5 text-gold-deep">
                    <Icon name={service.icon} className="size-5" />
                  </div>
                  <ArrowUpRight
                    className="size-4 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-gold group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.short}
                </p>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>

      <Modal open={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div className="mb-5 inline-flex rounded-2xl border border-border bg-surface p-3 text-gold-deep">
              <Icon name={selected.icon} className="size-7" />
            </div>
            <h3 className="font-display text-2xl font-semibold">{selected.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{selected.detail}</p>
            <ul className="mt-6 space-y-3">
              {selected.outcomes.map((o) => (
                <li key={o} className="flex items-center gap-3 text-sm">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-soft">
                    <Check className="size-3 text-gold-deep" aria-hidden />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <ButtonLink href="/book" variant="gold" size="sm">
                Discuss this service
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="sm">
                All services
              </ButtonLink>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
