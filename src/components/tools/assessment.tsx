"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  Mail,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Input } from "@/components/ui/field";

type Option = { label: string; score: number };

type Question = {
  id: string;
  title: string;
  hint?: string;
  multi?: boolean;
  options: Option[];
};

const questions: Question[] = [
  {
    id: "type",
    title: "What kind of business do you run?",
    options: [
      { label: "Service business (clinic, firm, salon…)", score: 0 },
      { label: "Restaurant / hospitality", score: 0 },
      { label: "Retail / ecommerce", score: 0 },
      { label: "B2B / logistics / trade", score: 0 },
      { label: "Something else", score: 0 },
    ],
  },
  {
    id: "website",
    title: "What best describes your current website?",
    options: [
      { label: "We don't have one", score: 0 },
      { label: "A DIY site we outgrew", score: 1 },
      { label: "An agency site that's aged badly", score: 1 },
      { label: "A decent site that underperforms", score: 2 },
      { label: "A modern site we actively improve", score: 3 },
    ],
  },
  {
    id: "leads",
    title: "How do new customers usually find you?",
    options: [
      { label: "Word of mouth only", score: 0 },
      { label: "Social media", score: 1 },
      { label: "Google search / Maps", score: 2 },
      { label: "Paid ads", score: 2 },
      { label: "A healthy mix of channels", score: 3 },
    ],
  },
  {
    id: "goal",
    title: "What's the number one goal for the next 12 months?",
    options: [
      { label: "Get found by more customers", score: 1 },
      { label: "Convert more visitors into enquiries", score: 2 },
      { label: "Sell or take bookings online", score: 2 },
      { label: "Reduce admin & manual work", score: 2 },
      { label: "All of it — we're rebuilding from scratch", score: 1 },
    ],
  },
  {
    id: "pains",
    title: "Which of these sound familiar?",
    hint: "Choose all that apply.",
    multi: true,
    options: [
      { label: "The website is slow or looks dated", score: 0 },
      { label: "We barely show up on Google", score: 0 },
      { label: "Enquiries go unanswered for hours", score: 0 },
      { label: "Too much repetitive admin work", score: 0 },
      { label: "No idea what our website actually does for us", score: 0 },
      { label: "None of these", score: 2 },
    ],
  },
  {
    id: "tools",
    title: "Which of these does your business already use?",
    hint: "Choose all that apply.",
    multi: true,
    options: [
      { label: "Business email on our own domain", score: 1 },
      { label: "Analytics we actually look at", score: 1 },
      { label: "Online booking or payments", score: 1 },
      { label: "A CRM or customer database", score: 1 },
      { label: "None of these yet", score: 0 },
    ],
  },
  {
    id: "budget",
    title: "What investment range feels realistic?",
    hint: "This only shapes our recommendations — nothing is quoted from it.",
    options: [
      { label: "Under ₦500,000", score: 0 },
      { label: "₦500,000 – ₦1.5m", score: 1 },
      { label: "₦1.5m – ₦5m", score: 2 },
      { label: "₦5m+ or monthly retainer", score: 3 },
      { label: "I need guidance on this", score: 1 },
    ],
  },
  {
    id: "timeline",
    title: "When would you like to be live?",
    options: [
      { label: "Yesterday — it's urgent", score: 1 },
      { label: "Within 1–2 months", score: 2 },
      { label: "This quarter", score: 2 },
      { label: "Exploring for now", score: 1 },
    ],
  },
];

type Level = {
  name: "Foundation" | "Growth" | "Scale";
  color: string;
  summary: string;
};

const levels: Level[] = [
  {
    name: "Foundation",
    color: "#ef4444",
    summary:
      "Your digital presence isn't yet pulling its weight. The good news: businesses at this stage see the fastest, most visible wins — the fundamentals compound quickly.",
  },
  {
    name: "Growth",
    color: "#d4af37",
    summary:
      "The basics exist, but they're leaking value — visitors who don't convert, admin that isn't automated, rankings left unclaimed. Targeted upgrades will move real numbers.",
  },
  {
    name: "Scale",
    color: "#22c55e",
    summary:
      "You have solid foundations. The next gains come from optimization, automation and AI — squeezing measurably more from the traffic and systems you already have.",
  },
];

function buildRecommendations(answers: Record<string, string[]>): string[] {
  const recs: string[] = [];
  const has = (id: string, text: string) =>
    (answers[id] ?? []).some((a) => a.includes(text));

  if (has("website", "don't have")) {
    recs.push("Launch a fast, credible business website — your 24/7 storefront.");
  } else if (has("website", "DIY") || has("website", "aged")) {
    recs.push("Rebuild on modern foundations — speed, mobile and SEO first.");
  } else {
    recs.push("Run a conversion audit to find where visitors drop off.");
  }

  if (has("leads", "Word of mouth") || has("pains", "Google")) {
    recs.push("Claim your search presence: technical SEO plus a Google Business profile that works as hard as you do.");
  }
  if (has("pains", "unanswered")) {
    recs.push("Deploy an AI assistant so every enquiry gets an instant, useful reply — day or night.");
  }
  if (has("pains", "admin") || has("goal", "admin")) {
    recs.push("Automate the top three repetitive workflows (follow-ups, invoicing, data entry).");
  }
  if (has("goal", "bookings") || has("goal", "Sell")) {
    recs.push("Add self-serve booking or ordering so customers can buy while you sleep.");
  }
  if (has("pains", "what our website actually does") || !has("tools", "Analytics")) {
    recs.push("Install clean analytics and a monthly plain-English report — decisions need numbers.");
  }
  if (!has("tools", "Business email")) {
    recs.push("Move to professional email on your own domain with deliverability configured.");
  }
  recs.push("Put a care plan in place so performance and security never silently decay.");

  return recs.slice(0, 5);
}

function buildServices(answers: Record<string, string[]>): string[] {
  const has = (id: string, text: string) =>
    (answers[id] ?? []).some((a) => a.includes(text));
  const svcs = new Set<string>();
  if (has("website", "don't have") || has("website", "DIY") || has("website", "aged"))
    svcs.add("Business Website");
  else svcs.add("Website Audit & Optimization");
  if (has("goal", "found") || has("pains", "Google")) svcs.add("SEO");
  if (has("pains", "unanswered")) svcs.add("AI Chatbot");
  if (has("pains", "admin") || has("goal", "admin")) svcs.add("Automation");
  if (has("goal", "bookings") || has("goal", "Sell")) svcs.add("Booking / Ecommerce");
  if (!has("tools", "Business email")) svcs.add("Business Email Setup");
  svcs.add("Hosting & Care Plan");
  return Array.from(svcs).slice(0, 6);
}

const roadmap = [
  { phase: "Weeks 1–2", label: "Discovery & strategy", detail: "Goals, customers, content and success metrics agreed." },
  { phase: "Weeks 3–6", label: "Design & build", detail: "Your new presence designed, built and reviewed with you." },
  { phase: "Weeks 6–8", label: "Launch & integrate", detail: "Go live with analytics, SEO, email and automations wired in." },
  { phase: "Ongoing", label: "Grow & optimize", detail: "Monthly measurement, improvements and honest reporting." },
];

export function Assessment() {
  const [step, setStep] = useState(0); // 0..questions.length-1, then email, then report
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);

  const total = questions.length;
  const question = questions[step];
  const atEmail = step === total;

  const score = useMemo(() => {
    let s = 0;
    for (const q of questions) {
      const chosen = answers[q.id] ?? [];
      for (const opt of q.options) {
        if (chosen.includes(opt.label)) s += opt.score;
      }
    }
    return s;
  }, [answers]);

  // Max meaningful score ≈ 16; thresholds split into thirds
  const level = score <= 6 ? levels[0] : score <= 11 ? levels[1] : levels[2];
  const recommendations = useMemo(() => buildRecommendations(answers), [answers]);
  const suggestedServices = useMemo(() => buildServices(answers), [answers]);

  const toggle = (label: string) => {
    const current = answers[question.id] ?? [];
    if (question.multi) {
      // "None of these" is exclusive of the other options
      let next: string[];
      if (label.startsWith("None")) {
        next = current.includes(label) ? [] : [label];
      } else {
        const base = current.filter((l) => !l.startsWith("None"));
        next = base.includes(label)
          ? base.filter((l) => l !== label)
          : [...base, label];
      }
      setAnswers({ ...answers, [question.id]: next });
    } else {
      setAnswers({ ...answers, [question.id]: [label] });
      setTimeout(() => setStep((s) => s + 1), 280);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setProcessing(true);
    setEmailFailed(false);
    // Send with readable question titles so the lead notification is self-explanatory
    const readableAnswers = Object.fromEntries(
      questions.map((q) => [q.title, answers[q.id] ?? []]),
    );
    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          level: level.name,
          score,
          recommendations,
          services: suggestedServices,
          answers: readableAnswers,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error);
    } catch {
      // The on-screen report still shows; we just flag that the email didn't go out
      setEmailFailed(true);
    }
    setProcessing(false);
    setDone(true);
  };

  const progress = Math.min(((done ? total + 1 : step) / (total + 1)) * 100, 100);

  if (done) {
    return (
      <m.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        {/* Maturity level */}
        <div className="rounded-3xl border border-border bg-card p-8 shadow-lift md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Your digital maturity level
              </p>
              <p
                className="mt-2 font-display text-4xl font-bold md:text-5xl"
                style={{ color: level.color }}
              >
                {level.name}
              </p>
            </div>
            <div className="flex gap-2">
              {levels.map((l) => (
                <span
                  key={l.name}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                    l.name === level.name
                      ? "text-ink"
                      : "border border-border text-muted"
                  }`}
                  style={l.name === level.name ? { background: l.color } : undefined}
                >
                  {l.name}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-5 leading-relaxed text-muted">{level.summary}</p>

          {/* Recommendations */}
          <div className="mt-10">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
              <TrendingUp className="size-5 text-gold-deep" aria-hidden />
              Your top {recommendations.length} recommended improvements
            </h3>
            <ol className="mt-5 space-y-4">
              {recommendations.map((rec, i) => (
                <m.li
                  key={rec}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold-soft font-display text-xs font-bold text-gold-deep">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{rec}</span>
                </m.li>
              ))}
            </ol>
          </div>

          {/* Suggested services */}
          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold">Suggested services</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {suggestedServices.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-gold/40 bg-gold-soft px-4 py-2 text-sm font-medium text-gold-deep"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold">
              Expected implementation roadmap
            </h3>
            <div className="mt-5 space-y-0">
              {roadmap.map((r, i) => (
                <div key={r.phase} className="relative flex gap-5 pb-6 last:pb-0">
                  {i < roadmap.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[11px] top-7 h-full w-px bg-border"
                    />
                  )}
                  <span className="z-10 mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-card">
                    <span className="size-2 rounded-full bg-gold" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                      {r.phase}
                    </p>
                    <p className="font-medium">{r.label}</p>
                    <p className="text-sm text-muted">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-surface p-6 text-center">
            <p className="flex items-center justify-center gap-2 text-sm text-muted">
              <Mail className="size-4 text-gold-deep" aria-hidden />
              {emailFailed ? (
                <>Couldn&apos;t email the report just now — save this page, or book a call and we&apos;ll walk you through it.</>
              ) : (
                <>
                  Full report sent to{" "}
                  <span className="font-medium text-foreground">{email}</span>
                </>
              )}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/book" variant="gold">
                Discuss your report — free call
              </ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Explore the services
              </ButtonLink>
            </div>
          </div>
        </div>
      </m.div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-xs text-muted">
          <span>
            {atEmail ? "Last step" : `Question ${step + 1} of ${total}`}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-border">
          <m.div
            className="h-full rounded-full bg-gradient-to-r from-gold to-[#f0d47a]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!atEmail ? (
          <m.div
            key={question.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10"
          >
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              {question.title}
            </h2>
            {question.hint && (
              <p className="mt-2 text-sm text-muted">{question.hint}</p>
            )}
            <div className="mt-7 space-y-3">
              {question.options.map((opt) => {
                const selected = (answers[question.id] ?? []).includes(opt.label);
                return (
                  <button
                    key={opt.label}
                    onClick={() => toggle(opt.label)}
                    className={`flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left text-sm transition-all ${
                      selected
                        ? "border-gold bg-gold-soft font-medium"
                        : "border-border hover:border-border-strong hover:bg-surface"
                    }`}
                  >
                    {opt.label}
                    <span
                      className={`flex size-5 shrink-0 items-center justify-center rounded-full border transition-all ${
                        selected ? "border-gold bg-gold" : "border-border-strong"
                      }`}
                    >
                      {selected && <Check className="size-3 text-ink" aria-hidden />}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground disabled:opacity-0"
              >
                <ArrowLeft className="size-4" aria-hidden />
                Back
              </button>
              {question.multi && (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={(answers[question.id] ?? []).length === 0}
                  className="disabled:opacity-40"
                >
                  Continue
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              )}
            </div>
          </m.div>
        ) : (
          <m.form
            key="email"
            onSubmit={submit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft md:p-10"
          >
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold-soft">
              <Sparkles className="size-6 text-gold-deep" aria-hidden />
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold md:text-3xl">
              Your report is ready.
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Where should we send it? You&apos;ll see the summary instantly —
              the full report lands in your inbox.
            </p>
            <div className="mx-auto mt-7 flex max-w-md gap-2">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address for your report"
                className="rounded-full px-5"
              />
              <Button type="submit" variant="gold" disabled={processing}>
                {processing ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                ) : (
                  "Get report"
                )}
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setStep(total - 1)}
              className="mt-6 flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground mx-auto"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back
            </button>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
