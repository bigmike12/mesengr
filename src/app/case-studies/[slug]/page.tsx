import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Quote, Timer } from "lucide-react";
import { caseStudies } from "@/lib/site";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactCta } from "@/components/home/contact-cta";
import { ButtonLink } from "@/components/ui/button";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: `${study.client} — Case Study`,
    description: study.problem,
  };
}

function StoryBlock({
  step,
  title,
  paragraphs,
}: {
  step: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <Reveal>
      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">
          {step} · {title}
        </p>
        <div className="space-y-5">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`Case study · ${study.industry}`}
        title={study.client}
        lead={study.problem}
      >
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-gold" aria-hidden />
            {study.location}
          </span>
          <span className="flex items-center gap-2">
            <Timer className="size-4 text-gold" aria-hidden />
            {study.timeline}
          </span>
        </div>
      </PageHeader>

      <Section className="pt-0">
        <Container>
          {/* Headline results */}
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {study.results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-3xl border border-border bg-card p-7 text-center shadow-soft"
                >
                  <p className="font-display text-2xl font-bold text-gold md:text-3xl">
                    {r.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{r.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Narrative */}
          <div className="mx-auto mt-20 max-w-4xl space-y-16">
            <StoryBlock step="01" title="The business" paragraphs={study.story.context} />
            <StoryBlock step="02" title="What we did" paragraphs={study.story.approach} />
            <StoryBlock step="03" title="What happened" paragraphs={study.story.outcome} />

            {/* Quote */}
            <Reveal>
              <figure className="relative overflow-hidden rounded-3xl border border-gold/25 bg-ink p-10 text-white shadow-lift md:p-12 dark:bg-card">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 size-48 rounded-full bg-gold/20 blur-3xl"
                />
                <Quote className="size-8 text-gold" aria-hidden />
                <blockquote className="mt-5 text-xl leading-relaxed md:text-2xl">
                  “{study.quote.text}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-white/70">
                  <span className="font-semibold text-white">{study.quote.name}</span> ·{" "}
                  {study.quote.role}
                </figcaption>
              </figure>
            </Reveal>

            {/* Stack + nav */}
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
                  >
                    <ArrowLeft className="size-4" aria-hidden />
                    All case studies
                  </Link>
                  <ButtonLink href="/book" variant="gold" size="sm">
                    Get results like these
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
