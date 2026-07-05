import type { Metadata } from "next";
import { CalendarPlus, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/tools/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Mesengr — book a strategy call, send a message, or reach us on WhatsApp, email or phone.",
};

const channels = [
  {
    icon: CalendarPlus,
    title: "Book a strategy call",
    text: "The fastest path. 30 minutes, free, genuinely useful.",
    href: "/book",
    label: "Pick a time",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Quick question? Message us directly.",
    href: site.whatsapp,
    label: "Open WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    text: site.email,
    href: `mailto:${site.email}`,
    label: "Write to us",
  },
  {
    icon: Phone,
    title: "Phone",
    text: site.phone,
    href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
    label: "Call us",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your growth."
        lead="Whichever channel you prefer — a real person answers, and fast."
      />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div className="space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <Link
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    className="group flex items-center gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:border-gold/40 hover:shadow-lift"
                  >
                    <span className="rounded-2xl bg-gold-soft p-3.5 text-gold-deep transition-transform group-hover:scale-110">
                      <c.icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-display font-semibold">{c.title}</span>
                      <span className="mt-0.5 block text-sm text-muted">{c.text}</span>
                    </span>
                    <span className="ml-auto text-xs font-medium text-gold-deep opacity-0 transition-opacity group-hover:opacity-100">
                      {c.label} →
                    </span>
                  </Link>
                </Reveal>
              ))}

              <Reveal delay={0.3}>
                <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                  <div className="relative flex h-52 items-center justify-center bg-surface">
                    <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
                    <div className="relative flex flex-col items-center gap-2 text-center">
                      <span className="rounded-full bg-gold p-3 text-ink shadow-lift">
                        <MapPin className="size-5" aria-hidden />
                      </span>
                      <p className="text-sm font-medium">Remote-first, worldwide</p>
                      <p className="text-xs text-muted">
                        Serving clients across four time zones
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
