import { ArrowRight, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export function ContactCta() {
  return (
    <Section id="cta">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/25 bg-ink px-8 py-16 text-center text-white shadow-lift md:px-16 md:py-24 dark:bg-card">
            <div
              aria-hidden
              className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-56 w-[560px] -translate-x-1/2 rounded-full bg-gold/20 blur-[100px]"
            />
            <div className="relative">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                <Sparkles className="size-3.5 text-gold" aria-hidden />
                Free 30-minute strategy call
              </p>
              <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                More than websites.
                <br />
                <span className="text-gradient-gold-bright">We build your digital business.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-white/70">
                One conversation. A clear picture of where your business stands
                online and exactly what to do next — whether you work with us
                or not.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/book" variant="gold" size="lg">
                  Book Free Strategy Call
                  <ArrowRight className="size-4" aria-hidden />
                </ButtonLink>
                <ButtonLink
                  href="/assessment"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:border-gold hover:text-gold"
                >
                  Take the Digital Assessment
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
