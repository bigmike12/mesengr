import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Process } from "@/components/home/process";
import { ContactCta } from "@/components/home/contact-cta";
import { Counter } from "@/components/ui/counter";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mesengr is a digital growth partner for SMEs — a small senior team accountable for your entire online presence.",
};

const values = [
  {
    title: "Outcomes over deliverables",
    text: "We're not paid to ship files. We're paid to move numbers — leads, bookings, hours saved, revenue earned.",
  },
  {
    title: "Educate, don't sell",
    text: "You'll always understand what we're doing and why. Jargon is a tax on trust; we don't charge it.",
  },
  {
    title: "Senior people, small team",
    text: "The people on your strategy call do the work. No hand-offs to juniors, no account-manager telephone.",
  },
  {
    title: "Built to last",
    text: "Proven, modern technology and clean handovers. You own everything we make — code, content and data.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Mesengr"
        title={
          <>
            The digital department
            <br />
            your business never had.
          </>
        }
        lead="Most SMEs can't justify an in-house design, engineering and growth team. We built one you can share."
      />

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { to: 40, suffix: "+", label: "Projects delivered" },
              { to: 12, suffix: "", label: "Industries served" },
              { to: 98, suffix: "%", label: "Client retention" },
              { to: 5, suffix: "★", label: "Average rating" },
            ].map((stat) => (
              <Reveal key={stat.label}>
                <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
                  <Counter
                    to={stat.to}
                    suffix={stat.suffix}
                    className="font-display text-3xl font-bold text-gold md:text-4xl"
                  />
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <Heading>Why Mesengr exists.</Heading>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-foreground/90">
                We kept watching the same story: a small business pays for a
                website, gets a file dump and a login, and is left alone with
                it. The site ages, the forms break, Google forgets it exists —
                and two years later they pay again for a new one.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg leading-relaxed text-muted">
                Mesengr was founded to break that cycle. We work the way an
                in-house team would: strategy first, launch fast, then stay —
                measuring, maintaining and improving month after month. The
                website is the start of the relationship, never the end of it.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <Eyebrow>What we believe</Eyebrow>
            <Heading>Principles that survive deadlines.</Heading>
            <Lead>Four commitments every client can hold us to.</Lead>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2" gap={0.07}>
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                  <span className="font-display text-sm font-bold text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Process />
      <ContactCta />
    </>
  );
}
