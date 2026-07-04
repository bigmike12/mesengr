"use client";

import { motion } from "framer-motion";
import { aiSolutions } from "@/lib/site";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/button";

export function AiSolutionsSection() {
  return (
    <Section id="ai" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-gold/8 blur-[120px]"
      />
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>AI solutions</Eyebrow>
          </div>
          <Heading>
            Put AI to work in your business —{" "}
            <span className="text-gradient-gold">usefully</span>.
          </Heading>
          <Lead className="mx-auto">
            Not gimmicks. Assistants and automations trained on your business
            that answer customers, book appointments and delete busywork.
          </Lead>
        </Reveal>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.05}>
          {aiSolutions.map((sol) => (
            <StaggerItem key={sol.title}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:border-gold/40 hover:shadow-lift"
              >
                <div className="inline-flex rounded-2xl border border-border bg-surface p-2.5 text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon name={sol.icon} className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{sol.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{sol.text}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 text-center">
          <ButtonLink href="/ai-solutions" variant="outline" size="md">
            Explore AI solutions
          </ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}
