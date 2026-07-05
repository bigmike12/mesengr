"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/site";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { ButtonLink } from "@/components/ui/button";

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative select-none overflow-hidden rounded-2xl border border-border">
      {/* After layer (full) */}
      <div className="flex h-44 flex-col justify-between bg-gradient-to-br from-ink to-ink-2 p-5 text-white">
        <span className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink w-fit">
          After
        </span>
        <div>
          <div className="mb-2 h-2.5 w-3/5 rounded-full bg-white/80" />
          <div className="mb-3 h-2.5 w-2/5 rounded-full bg-white/40" />
          <p className="text-xs text-gold">{after}</p>
        </div>
      </div>

      {/* Before layer, clipped */}
      <div
        className="absolute inset-0 flex flex-col justify-between bg-surface p-5"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <span className="w-fit rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted">
          Before
        </span>
        <div>
          <div className="mb-2 h-2.5 w-3/5 rounded-full border border-dashed border-border-strong" />
          <div className="mb-3 h-2.5 w-2/5 rounded-full border border-dashed border-border-strong" />
          <p className="text-xs text-muted">{before}</p>
        </div>
      </div>

      {/* Divider handle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-gold"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-ink shadow-lift">
          ⇔
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

export function Work() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const study = caseStudies[index];

  const paginate = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + caseStudies.length) % caseStudies.length);
  };

  return (
    <Section id="work">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Featured work</Eyebrow>
              <Heading>Results our clients can measure.</Heading>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous case study"
                className="rounded-full border border-border p-3 transition-colors hover:border-gold hover:text-gold"
              >
                <ArrowLeft className="size-4" aria-hidden />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next case study"
                className="rounded-full border border-border p-3 transition-colors hover:border-gold hover:text-gold"
              >
                <ArrowRight className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-12 overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <m.div
              key={study.slug}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12 lg:grid-cols-[1.2fr_1fr]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold">{study.client}</h3>
                  <span className="rounded-full bg-surface px-3 py-1 text-xs text-muted">
                    {study.industry}
                  </span>
                </div>

                <dl className="mt-8 space-y-6">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Problem
                    </dt>
                    <dd className="mt-2 leading-relaxed text-foreground/90">
                      {study.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Solution
                    </dt>
                    <dd className="mt-2 leading-relaxed text-foreground/90">
                      {study.solution}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <BeforeAfter before={study.beforeNote} after={study.afterNote} />
                <div className="grid grid-cols-3 gap-3">
                  {study.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-2xl border border-border bg-surface p-4 text-center"
                    >
                      <p className="font-display text-lg font-bold text-gold-deep md:text-xl">
                        {r.value}
                      </p>
                      <p className="mt-1 text-[11px] leading-tight text-muted">{r.label}</p>
                    </div>
                  ))}
                </div>
                <ButtonLink
                  href={`/case-studies/${study.slug}`}
                  variant="outline"
                  size="sm"
                  className="mt-auto"
                >
                  Read the full case study
                </ButtonLink>
              </div>
            </m.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {caseStudies.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to ${s.client}`}
                aria-current={i === index ? "true" : undefined}
                className="flex min-h-6 items-center px-1.5 py-2"
              >
                <span
                  aria-hidden
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-gold" : "w-3 bg-border-strong"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Animated aggregate stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { to: 30, suffix: "+", label: "Projects delivered" },
            { to: 45, suffix: "%", label: "Avg. increase in enquiries" },
            { to: 9, suffix: "h", label: "Admin hours saved weekly" },
            { to: 99.9, suffix: "%", label: "Uptime maintained", decimals: 1 },
          ].map((stat) => (
            <Reveal key={stat.label}>
              <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
                <Counter
                  to={stat.to}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                  className="font-display text-3xl font-bold text-gold-deep md:text-4xl"
                />
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
