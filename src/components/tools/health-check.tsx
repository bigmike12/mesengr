"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Activity, ArrowRight, Globe, Loader2, RefreshCw } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

type Report = {
  url: string;
  performance: number;
  seo: number;
  accessibility: number;
  suggestions: string[];
  source?: "lighthouse" | "basic";
};

function ScoreRing({ score, label, delay }: { score: number; label: string; delay: number }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const color = score >= 80 ? "#22c55e" : score >= 60 ? "#d4af37" : "#ef4444";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <svg width="112" height="112" viewBox="0 0 112 112" role="img" aria-label={`${label}: ${score} out of 100`}>
          <circle
            cx="56"
            cy="56"
            r={radius}
            fill="none"
            stroke="var(--border)"
            strokeWidth="7"
          />
          <m.circle
            cx="56"
            cy="56"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference * (1 - score / 100) }}
            transition={{ duration: 1.4, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            transform="rotate(-90 56 56)"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-2xl font-bold">
          {score}
        </span>
      </div>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}

// Status lines rotated while the real Lighthouse run is in flight (~15–30s)
const phases = [
  "Contacting Google's testing servers…",
  "Loading your site on a simulated mobile device…",
  "Measuring performance and Core Web Vitals…",
  "Crawling SEO signals…",
  "Auditing accessibility…",
  "Almost there — compiling your report…",
];

export function HealthCheck() {
  const [url, setUrl] = useState("");
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState(0);
  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  const run = async (e: React.FormEvent) => {
    e.preventDefault();
    if (running || !url.trim()) return;
    setReport(null);
    setError(null);
    setRunning(true);
    setPhase(0);
    timer.current = setInterval(
      () => setPhase((p) => Math.min(p + 1, phases.length - 1)),
      4500,
    );

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error ?? "Something went wrong running the audit. Please try again.");
      } else {
        setReport(json);
      }
    } catch {
      setError("Something went wrong running the audit. Please check your connection and try again.");
    } finally {
      if (timer.current) clearInterval(timer.current);
      setRunning(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <form
        onSubmit={run}
        className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-3 shadow-soft sm:flex-row"
      >
        <div className="flex flex-1 items-center gap-3 px-3">
          <Globe className="size-4 shrink-0 text-muted" aria-hidden />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="yourbusiness.com"
            aria-label="Your website URL"
            required
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted/60"
          />
        </div>
        <button
          type="submit"
          disabled={running}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-6 py-3 text-sm font-medium text-ink transition-all hover:brightness-110 disabled:opacity-60"
        >
          {running ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <Activity className="size-4" aria-hidden />
          )}
          {running ? "Auditing…" : "Run free audit"}
        </button>
      </form>

      <p className="mt-3 text-center text-xs text-muted/80">
        A real Lighthouse test by Google&apos;s servers on a simulated mobile
        device — it takes 15–30 seconds.
      </p>

      <AnimatePresence mode="wait">
        {running && (
          <m.p
            key={phase}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-6 text-center text-sm text-muted"
            aria-live="polite"
          >
            {phases[phase]}
          </m.p>
        )}

        {error && !running && (
          <m.div
            key="error"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-red-300/40 bg-red-500/10 p-8 text-center"
          >
            <p className="text-sm leading-relaxed text-red-500">{error}</p>
            <button
              onClick={() => setError(null)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-gold hover:text-gold"
            >
              <RefreshCw className="size-4" aria-hidden />
              Try again
            </button>
          </m.div>
        )}

        {report && (
          <m.div
            key="report"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <p className="mb-8 text-center text-xs text-muted">
              Results for{" "}
              <span className="font-medium text-foreground">
                {report.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>{" "}
              · mobile ·{" "}
              {report.source === "basic"
                ? "Mesengr quick scan"
                : "Google Lighthouse"}
            </p>
            <div className="grid grid-cols-3 gap-4">
              <ScoreRing score={report.performance} label="Performance" delay={0.1} />
              <ScoreRing score={report.seo} label="SEO" delay={0.25} />
              <ScoreRing score={report.accessibility} label="Accessibility" delay={0.4} />
            </div>

            {report.suggestions.length > 0 && (
              <div className="mt-8 border-t border-border pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Biggest opportunities found
                </p>
                <ul className="space-y-3">
                  {report.suggestions.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm leading-relaxed">
                      <ArrowRight className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-surface p-6 text-center">
              <p className="text-sm text-muted">
                These scores show <em>what</em> needs fixing. A full audit tells
                you <em>why</em>, what it&apos;s costing you, and what to fix
                first — and it&apos;s the first step of every engagement.
              </p>
              <ButtonLink href="/book" variant="gold" size="sm">
                Book a free consultation
              </ButtonLink>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
