"use client";

import { useMemo, useState } from "react";
import { faqs } from "@/lib/site";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Input } from "@/components/ui/field";

export function Faq({ limit }: { limit?: number }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q
      ? faqs.filter(
          (f) =>
            f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q),
        )
      : faqs;
    return limit && !q ? base.slice(0, limit) : base;
  }, [query, limit]);

  return (
    <Section id="faq">
      <Container className="max-w-4xl">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>Questions, answered</Eyebrow>
          </div>
          <Heading>Everything you&apos;re wondering.</Heading>
          <Lead className="mx-auto">
            Straight answers to the {faqs.length} questions we hear most. Still
            unsure? Ask us directly — we answer fast.
          </Lead>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions… e.g. “hosting”, “AI”, “cost”"
            aria-label="Search frequently asked questions"
            className="rounded-full px-6"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          {filtered.length > 0 ? (
            <Accordion items={filtered} />
          ) : (
            <p className="rounded-3xl border border-border bg-card p-10 text-center text-muted">
              No matches — but we&apos;d love to answer it.{" "}
              <a href="/contact" className="text-gold underline-offset-4 hover:underline">
                Ask us directly
              </a>
              .
            </p>
          )}
        </Reveal>
      </Container>
    </Section>
  );
}
