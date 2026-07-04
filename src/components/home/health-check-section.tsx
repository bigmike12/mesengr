import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { HealthCheck } from "@/components/tools/health-check";

export function HealthCheckSection() {
  return (
    <Section id="health-check" className="bg-surface">
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>Free tool</Eyebrow>
          </div>
          <Heading>How healthy is your website?</Heading>
          <Lead className="mx-auto">
            Type your address and we&apos;ll run a real Google Lighthouse test —
            performance, SEO and accessibility scores, with your biggest
            opportunities called out.
          </Lead>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <HealthCheck />
        </Reveal>
      </Container>
    </Section>
  );
}
