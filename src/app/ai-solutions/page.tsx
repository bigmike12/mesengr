import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { AiSolutionsSection } from "@/components/home/ai-solutions";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "AI customer support, knowledge-base chatbots, appointment booking, lead qualification and CRM automation — practical AI for SMEs.",
};

const benefits = [
  {
    stat: "24/7",
    title: "Always-on first response",
    text: "Most enquiries arrive outside office hours. An assistant answers in seconds, so the lead is still warm in the morning.",
  },
  {
    stat: "60–80%",
    title: "Routine questions deflected",
    text: "Opening hours, prices, policies, availability — answered instantly, freeing your team for work that needs a human.",
  },
  {
    stat: "< 1 min",
    title: "Lead response time",
    text: "Responding within a minute dramatically increases conversion versus responding within a day. AI makes that automatic.",
  },
  {
    stat: "0",
    title: "Extra headcount required",
    text: "The point isn't replacing people — it's letting the team you already have do the valuable work only they can do.",
  },
];

export default function AiSolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI solutions"
        title="Practical AI, measured in hours saved."
        lead="We deploy AI where it demonstrably helps an SME: answering customers, qualifying leads, booking appointments and automating admin — trained on your business, constrained to your rules."
      />

      <Section className="pt-0">
        <Container>
          <Reveal>
            <Eyebrow>Why it works</Eyebrow>
            <Heading>The business case, in four numbers.</Heading>
            <Lead>
              We integrate models from Anthropic and OpenAI behind interfaces
              your customers already understand.
            </Lead>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <p className="font-display text-3xl font-bold text-gold-deep">{b.stat}</p>
                  <h3 className="mt-3 font-display text-base font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <AiSolutionsSection />
      <ContactCta />
    </>
  );
}
