import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { HealthCheck } from "@/components/tools/health-check";
import { Story } from "@/components/home/story";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Run a free instant health check on your website — performance, SEO and accessibility scores with plain-English suggestions.",
};

export default function AuditPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free website audit"
        title="Find out what your website is costing you."
        lead="A real Lighthouse audit right now — run by Google's servers on a simulated mobile device — and a deep human audit if you want the full picture. Both start here."
      />

      <Section className="pt-0">
        <Container>
          <Reveal>
            <HealthCheck />
          </Reveal>
        </Container>
      </Section>

      <Story />
      <ContactCta />
    </>
  );
}
