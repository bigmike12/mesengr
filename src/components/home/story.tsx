"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  MailX,
  SearchX,
  ShieldAlert,
  Smartphone,
  UserX,
  Wrench,
} from "lucide-react";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

const problems = [
  {
    icon: Gauge,
    title: "Slow pages",
    text: "Every extra second of load time sends measurable numbers of visitors — and their money — to a competitor.",
  },
  {
    icon: SearchX,
    title: "Invisible on Google",
    text: "Without technical SEO, your business simply doesn't exist for the customers actively searching for it.",
  },
  {
    icon: Wrench,
    title: "No maintenance",
    text: "Software ages. Unpatched sites break quietly, get hacked loudly, and cost far more to rescue than to maintain.",
  },
  {
    icon: MailX,
    title: "Broken forms",
    text: "The most expensive bug in small business: an enquiry form that fails silently while leads bounce off it for months.",
  },
  {
    icon: ShieldAlert,
    title: "Security risks",
    text: "One breach can cost you customer trust that took years to earn — and cheap builds skip security entirely.",
  },
  {
    icon: Smartphone,
    title: "Poor mobile experience",
    text: "Most of your visitors are on a phone. If the site fights their thumbs, they leave within seconds.",
  },
  {
    icon: UserX,
    title: "Lost customers",
    text: "Add it up: the cheap website doesn't save money. It quietly leaks revenue every single day it's online.",
  },
];

export function Story() {
  return (
    <Section id="story">
      <Container>
        <Reveal>
          <Eyebrow>The hidden ledger</Eyebrow>
          <Heading>
            Why cheap websites are the
            <span className="text-gradient-gold"> most expensive</span> ones.
          </Heading>
          <Lead>
            The invoice is small. The costs are not — they&apos;re just spread
            across every customer who never called.
          </Lead>
        </Reveal>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
          {problems.map((p) => (
            <StaggerItem key={p.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift"
              >
                <p.icon className="size-6 text-red-400" strokeWidth={1.75} aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </motion.div>
            </StaggerItem>
          ))}

          <StaggerItem className="sm:col-span-2">
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-gold/30 bg-ink p-8 text-white shadow-lift dark:bg-card">
              <div
                aria-hidden
                className="absolute -left-16 -top-16 size-56 rounded-full bg-gold/20 blur-3xl"
              />
              <h3 className="font-display text-xl font-semibold">
                Mesengr closes every one of these leaks.
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
                Performance engineering, technical SEO, security, monitoring and
                monthly maintenance are built into every engagement — not sold
                as afterthoughts. Your website becomes an asset with a
                measurable return, not a liability with a renewal fee.
              </p>
              <div className="mt-6">
                <ButtonLink href="/audit" variant="gold" size="sm">
                  Check your website free
                </ButtonLink>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </Container>
    </Section>
  );
}
