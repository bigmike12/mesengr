"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Command,
  Home,
  LayoutGrid,
  Mail,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

const destinations = [
  { label: "Home", href: "/", icon: Home, hint: "Start over" },
  { label: "Services", href: "/services", icon: LayoutGrid, hint: "What we do" },
  { label: "Free Audit", href: "/audit", icon: Activity, hint: "Scan your site" },
  { label: "Digital Assessment", href: "/assessment", icon: Sparkles, hint: "5-min report" },
  { label: "Contact", href: "/contact", icon: Mail, hint: "Talk to us" },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function NotFound() {
  return (
    <div className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20">
      {/* Background: grid + gold glow */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/4 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]"
      />

      <Container className="relative text-center">
        {/* Big 404 with floating brand mark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="relative inline-flex items-center justify-center"
        >
          <span className="font-display text-[7rem] font-bold leading-none tracking-tight text-gradient-gold md:text-[11rem]">
            4
          </span>
          <motion.span
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="mx-2 md:mx-4"
            aria-hidden
          >
            <span className="flex size-24 items-center justify-center rounded-[1.75rem] bg-ink font-display text-6xl font-bold text-gold shadow-lift md:size-40 md:rounded-[2.5rem] md:text-9xl dark:bg-card">
              M
              <span className="text-gold">.</span>
            </span>
          </motion.span>
          <span className="font-display text-[7rem] font-bold leading-none tracking-tight text-gradient-gold md:text-[11rem]">
            4
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl"
        >
          This message didn&apos;t reach its destination.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="mx-auto mt-4 max-w-lg text-muted"
        >
          The page you&apos;re after has moved, been renamed, or never existed.
          No dead ends here though — pick a direction below, or press{" "}
          <kbd className="rounded-md border border-border bg-surface px-1.5 py-0.5 text-xs">
            <Command className="inline size-3 -translate-y-px" aria-hidden /> K
          </kbd>{" "}
          to search the whole site.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease }}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <ButtonLink href="/" variant="gold" size="lg">
            <Home className="size-4" aria-hidden />
            Back home
          </ButtonLink>
          <ButtonLink href="/book" variant="outline" size="lg">
            Book a strategy call
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </motion.div>

        {/* Popular destinations */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.06, delayChildren: 0.34 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {destinations.map((d) => (
            <motion.div
              key={d.href}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={d.href}
                className="group flex h-full flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-5 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
              >
                <span className="rounded-xl bg-surface p-2.5 text-gold transition-transform group-hover:scale-110">
                  <d.icon className="size-5" aria-hidden />
                </span>
                <span className="mt-1 text-sm font-medium">{d.label}</span>
                <span className="flex items-center gap-0.5 text-[11px] text-muted">
                  {d.hint}
                  <ArrowUpRight
                    className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 text-sm text-muted"
        >
          Think this link should work?{" "}
          <Link href="/contact" className="font-medium text-gold underline-offset-4 hover:underline">
            Tell us
          </Link>{" "}
          and we&apos;ll fix it.
        </motion.p>
      </Container>
    </div>
  );
}
