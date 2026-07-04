import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Assessment } from "@/components/tools/assessment";

export const metadata: Metadata = {
  title: "Digital Assessment",
  description:
    "Answer 8 guided questions and get an instant personalized report: your digital maturity level, top recommended improvements and an implementation roadmap.",
};

export default function AssessmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mesengr Digital Assessment"
        title="Find out exactly where your business stands online."
        lead="Eight questions, five minutes, zero sales pitch. Get your digital maturity level, your top five improvements and a realistic roadmap — instantly."
      />
      <Section className="pt-0">
        <Container>
          <Reveal>
            <Assessment />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
