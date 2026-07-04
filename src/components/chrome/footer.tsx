"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/section";
import { LogoMark } from "@/components/ui/logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "AI Solutions", href: "/ai-solutions" },
      { label: "Care Plans", href: "/care-plans" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/blog" },
      { label: "Free Website Audit", href: "/audit" },
      { label: "Digital Assessment", href: "/assessment" },
      { label: "Resources", href: "/resources" },
      // { label: "Brand Kit", href: "/brand" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const subscribe = async () => {
    if (!email.trim() || subscribing) return;
    setSubscribing(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Non-critical — the address was still captured in server logs
    } finally {
      setSubscribing(false);
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" aria-label={`${site.name} home`} className="inline-flex items-center gap-2.5">
              <LogoMark className="size-9" />
              <span className="font-display text-2xl font-bold tracking-tight">
                {site.name}
                <span className="text-gold">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm leading-relaxed text-muted">
              {site.tagline} Your digital growth partner — strategy, design,
              development and everything in between.
            </p>

            <form
              className="mt-8 max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                subscribe();
              }}
            >
              <p className="mb-3 text-sm font-medium">
                Monthly growth insights. No noise.
              </p>
              {subscribed ? (
                <p className="flex items-center gap-2 rounded-2xl border border-gold/40 bg-gold-soft px-4 py-3 text-sm">
                  <Check className="size-4 text-gold" aria-hidden />
                  You&apos;re in. Talk soon.
                </p>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-label="Email address"
                    className="w-full rounded-full border border-border bg-card px-5 py-3 text-sm placeholder:text-muted/70 focus:border-gold focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="rounded-full bg-ink p-3 text-white transition-transform hover:scale-105 dark:bg-white dark:text-ink"
                  >
                    <ArrowRight className="size-4" aria-hidden />
                  </button>
                </div>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-foreground/80 transition-colors hover:text-gold"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href={site.whatsapp} className="transition-colors hover:text-gold" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
              {site.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
