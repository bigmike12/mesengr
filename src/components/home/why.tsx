import { whyCards } from "@/lib/site";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";

// Server component — reveals and hover lifts are pure CSS (see globals.css)
export function Why() {
  return (
    <Section id="why">
      <Container>
        <Reveal>
          <Eyebrow>Why Mesengr</Eyebrow>
          <Heading>
            We don&apos;t just build websites.
            <br />
            <span className="text-muted">We become your digital partner.</span>
          </Heading>
          <Lead>
            Seven disciplines, one accountable team. Everything your business
            needs to establish, run and grow its online presence.
          </Lead>
        </Reveal>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card, i) => (
            <StaggerItem key={card.title} className={i === 6 ? "sm:col-span-2 lg:col-span-2" : ""}>
              <div className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-lift">
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-gold/0 blur-3xl transition-all duration-500 group-hover:bg-gold/15"
                />
                <div className="mb-5 inline-flex rounded-2xl border border-border bg-surface p-3 text-gold-deep transition-transform duration-300 group-hover:scale-110">
                  <Icon name={card.icon} className="size-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">{card.title}</h3>
                <p className="mt-2.5 hidden max-h-0 overflow-hidden text-sm leading-relaxed text-muted opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 lg:block">
                  {card.text}
                </p>
                {/* Hover isn't available on touch devices, so show the text outright */}
                <p className="mt-2.5 text-sm leading-relaxed text-muted lg:hidden">
                  {card.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
