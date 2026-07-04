"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

const stages = ["sketch", "design", "live"] as const;
type Stage = (typeof stages)[number];

const stageLabel: Record<Stage, string> = {
  sketch: "01 · Wireframe",
  design: "02 · Design",
  live: "03 · Live",
};

function BrowserMockup() {
  const [stage, setStage] = useState<Stage>("sketch");

  useEffect(() => {
    const id = setInterval(() => {
      setStage((s) => stages[(stages.indexOf(s) + 1) % stages.length]);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const isSketch = stage === "sketch";
  const isLive = stage === "live";

  const block = (extra: string) =>
    `rounded-lg transition-all duration-700 ${extra} ${
      isSketch
        ? "border-2 border-dashed border-border-strong bg-transparent"
        : isLive
          ? "border border-transparent"
          : "border border-border bg-surface"
    }`;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-surface px-5 py-3.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <div className="ml-3 flex-1 rounded-full border border-border bg-card px-4 py-1 text-[11px] text-muted">
          yourbusiness.com
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={stage}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="rounded-full bg-gold-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold"
          >
            {stageLabel[stage]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Page canvas */}
      <div className="space-y-4 p-6">
        {/* Nav row */}
        <div className="flex items-center justify-between">
          <div className={block(`h-4 w-20 ${isLive ? "bg-ink dark:bg-white" : ""}`)} />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className={block(`h-3 w-10 ${isLive ? "bg-surface" : ""}`)} />
            ))}
            <div className={block(`h-3 w-14 ${isLive ? "bg-gold" : ""}`)} />
          </div>
        </div>

        {/* Hero rows */}
        <div className="space-y-2 pt-2">
          <div className={block(`h-7 w-4/5 ${isLive ? "bg-gradient-to-r from-ink to-ink/70 dark:from-white dark:to-white/70" : ""}`)} />
          <div className={block(`h-7 w-3/5 ${isLive ? "bg-gradient-to-r from-ink/80 to-ink/50 dark:from-white/80 dark:to-white/50" : ""}`)} />
          <div className={block(`mt-3 h-3 w-2/3 ${isLive ? "bg-surface" : ""}`)} />
          <div className={block(`h-3 w-1/2 ${isLive ? "bg-surface" : ""}`)} />
        </div>

        {/* CTA row */}
        <div className="flex gap-3 pt-1">
          <div className={block(`h-9 w-32 ${isLive ? "bg-gold shadow-[0_6px_20px_rgba(212,175,55,0.4)]" : ""}`)} />
          <div className={block(`h-9 w-28 ${isLive ? "bg-surface" : ""}`)} />
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={isLive ? { y: [0, -3, 0] } : { y: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              className={block(
                `h-20 ${isLive ? "bg-gradient-to-br from-surface to-gold-soft" : ""}`,
              )}
            />
          ))}
        </div>
      </div>

      {/* Live badge */}
      <AnimatePresence>
        {isLive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-[10px] font-semibold text-white dark:bg-white dark:text-ink"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-green-400" aria-hidden />
            Live · 100/100 Lighthouse
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const mockX = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const mockY = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const gridX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const gridY = useTransform(sy, [-0.5, 0.5], [-10, 10]);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48"
    >
      {/* Moving grid + glow background */}
      <motion.div
        aria-hidden
        style={{ x: gridX, y: gridY }}
        className="bg-grid absolute -inset-14 opacity-70 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted shadow-soft"
            >
              <Sparkles className="size-3.5 text-gold" aria-hidden />
              Digital Growth Partner for SMEs
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance md:text-7xl"
            >
              Your business deserves more than{" "}
              <span className="text-gradient-gold">just a website</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
            >
              Mesengr helps SMEs launch, automate and grow their digital
              presence through strategy, design, development and continuous
              support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <ButtonLink href="/book" variant="gold" size="lg">
                Book Free Strategy Call
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/case-studies" variant="outline" size="lg">
                View Our Work
              </ButtonLink>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 text-sm text-muted"
            >
              No pressure, no jargon — just an honest conversation about your
              growth.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            style={{ x: mockX, y: mockY }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold/20 via-transparent to-transparent blur-2xl"
            />
            <BrowserMockup />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
