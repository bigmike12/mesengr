import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Mesengr — a small senior team building digital growth for SMEs. Remote-first, craft-obsessed, jargon-free.",
};

const roles = [
  {
    title: "Senior Product Designer",
    type: "Full-time · Remote",
    text: "Own end-to-end design for client engagements — research, UX, UI and design systems.",
  },
  {
    title: "Full-Stack Engineer (Next.js)",
    type: "Full-time · Remote",
    text: "Build fast, accessible websites and applications on Next.js, TypeScript and Supabase.",
  },
  {
    title: "AI Solutions Engineer",
    type: "Contract · Remote",
    text: "Design and ship production chatbots and automations on Anthropic and OpenAI models.",
  },
];

const perks = [
  "Remote-first, async-friendly",
  "Small team, senior peers",
  "Client work you can be proud of",
  "Learning budget & conference time",
  "No timesheet theatre",
  "Profit-share on retained clients",
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Do the best work of your career, for businesses that feel it."
        lead="Every project here has a face behind it — an owner whose livelihood improves when we do our job well. It's the most satisfying kind of work we know."
      />

      <Section className="pt-0">
        <Container>
          <Reveal>
            <Eyebrow>Open roles</Eyebrow>
            <Heading>We hire slowly and deliberately.</Heading>
            <Lead>
              Nothing that fits? Write to us anyway —{" "}
              <a href={`mailto:${site.email}`} className="text-gold underline-offset-4 hover:underline">
                {site.email}
              </a>
              . Exceptional people change our plans.
            </Lead>
          </Reveal>

          <Stagger className="mt-12 space-y-4" gap={0.07}>
            {roles.map((role) => (
              <StaggerItem key={role.title}>
                <a
                  href={`mailto:${site.email}?subject=Application: ${encodeURIComponent(role.title)}`}
                  className="group flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:border-gold/40 hover:shadow-lift"
                >
                  <div>
                    <h2 className="font-display text-xl font-semibold">{role.title}</h2>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                      <MapPin className="size-3.5" aria-hidden />
                      {role.type}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{role.text}</p>
                  </div>
                  <span className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors group-hover:border-gold group-hover:text-gold">
                    Apply
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-16">
            <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
              <h2 className="font-display text-xl font-semibold">How we work</h2>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2.5 text-sm">
                    <span className="size-1.5 rounded-full bg-gold" aria-hidden />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
