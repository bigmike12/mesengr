import type { Metadata } from "next";
import { Check, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { carePlans } from "@/lib/site";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { CarePlansSection } from "@/components/home/care-plans";
import { Faq } from "@/components/home/faq";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Care Plans",
  description:
    "Ongoing website care: hosting, security, backups, updates, content changes and monthly optimization — three plans, explained in full.",
};

export default function CarePlansPage() {
  return (
    <>
      <PageHeader
        eyebrow="Care plans"
        title="Websites that are cared for, perform."
        lead="Software ages, threats evolve, content drifts. Our care plans keep your site fast, secure and improving — for less than the cost of one emergency rescue. Every plan is explained in full below."
      />

      <CarePlansSection />

      {/* Full plan details */}
      <Section>
        <Container>
          <div className="space-y-16">
            {carePlans.map((plan, i) => (
              <Reveal key={plan.slug}>
                <article
                  id={plan.slug}
                  className={`scroll-mt-32 overflow-hidden rounded-[2rem] border shadow-soft ${
                    plan.highlight ? "border-gold/40" : "border-border"
                  }`}
                >
                  {/* Plan header */}
                  <div
                    className={`px-8 py-10 md:px-12 ${
                      plan.highlight
                        ? "bg-ink text-white dark:bg-card"
                        : "bg-surface"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      <span
                        className={`rounded-2xl p-3 ${
                          plan.highlight ? "bg-gold/20" : "bg-gold-soft"
                        }`}
                      >
                        <ShieldCheck className="size-6 text-gold" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                          Plan {i + 1} of {carePlans.length}
                        </p>
                        <h2 className="font-display text-3xl font-semibold">
                          {plan.name}
                        </h2>
                      </div>
                      {plan.highlight && (
                        <span className="ml-auto rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink">
                          Most chosen
                        </span>
                      )}
                    </div>
                    <p
                      className={`mt-5 max-w-3xl leading-relaxed ${
                        plan.highlight ? "text-white/75" : "text-muted"
                      }`}
                    >
                      {plan.detail.audience}
                    </p>
                    <p
                      className={`mt-4 flex items-start gap-2 text-sm font-medium ${
                        plan.highlight ? "text-gold" : "text-gold"
                      }`}
                    >
                      <Sparkles className="mt-0.5 size-4 shrink-0" aria-hidden />
                      {plan.detail.promise}
                    </p>
                  </div>

                  {/* Inclusions */}
                  <div className="bg-card px-8 py-10 md:px-12">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      What&apos;s included — in plain English
                    </h3>
                    <div className="mt-6 grid gap-x-10 gap-y-7 md:grid-cols-2">
                      {plan.detail.includes.map((item) => (
                        <div key={item.title} className="flex gap-4">
                          <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-soft">
                            <Check className="size-3.5 text-gold" aria-hidden />
                          </span>
                          <div>
                            <p className="font-display font-semibold">{item.title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
                      <div className="space-y-3">
                        <p className="flex items-center gap-2 text-sm text-muted">
                          <Clock className="size-4 text-gold" aria-hidden />
                          {plan.detail.response}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {plan.detail.idealFor.map((who) => (
                            <span
                              key={who}
                              className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted"
                            >
                              {who}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex shrink-0 gap-3">
                        <ButtonLink href="/book" variant="gold" size="md">
                          Start {plan.name}
                        </ButtonLink>
                        <ButtonLink href="/contact" variant="outline" size="md">
                          Ask a question
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted">
              Pricing is quoted after a short conversation about your site and
              its traffic — it takes ten minutes, and the number is fixed once
              agreed. Not sure which plan fits? Book a free call and we&apos;ll
              recommend one honestly, even if it&apos;s the cheapest.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Faq limit={8} />
      <ContactCta />
    </>
  );
}
