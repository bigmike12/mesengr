"use client";

import { useRef } from "react";
import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { processSteps } from "@/lib/site";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <Section id="process" className="bg-surface">
      <Container>
        <Reveal>
          <Eyebrow>How we work</Eyebrow>
          <Heading>A process built for certainty.</Heading>
          <Lead>
            Six stages, zero surprises. You always know where the project
            stands and what happens next.
          </Lead>
        </Reveal>

        <ol ref={ref} className="relative mt-16 space-y-0">
          {/* Progress line */}
          <div
            aria-hidden
            className="absolute bottom-6 left-[19px] top-6 w-px bg-border md:left-1/2"
          />
          <m.div
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute bottom-6 left-[19px] top-6 w-px origin-top bg-gradient-to-b from-gold to-gold/40 md:left-1/2"
          />

          {processSteps.map((step, i) => (
            <li key={step.title} className="relative py-6 md:py-8">
              <div
                className={`flex items-start gap-6 md:w-1/2 md:items-center ${
                  i % 2 === 0
                    ? "md:pr-14 md:text-right"
                    : "md:ml-auto md:flex-row-reverse md:pl-14 md:text-left"
                }`}
              >
                <m.span
                  initial={{ scale: 0.6, opacity: 0.4 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4 }}
                  className={`z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-card font-display text-sm font-semibold text-gold-deep shadow-soft md:absolute md:left-1/2 md:-translate-x-1/2`}
                >
                  {i + 1}
                </m.span>
                <Reveal
                  delay={0.05}
                  className={i % 2 === 0 ? "md:mr-0 md:w-full" : "md:ml-0 md:w-full"}
                >
                  <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </Reveal>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
