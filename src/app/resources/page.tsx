import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowUpRight, BookOpen, Calculator, ClipboardList, FileText, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Insights } from "@/components/home/insights";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free tools and guides from Mesengr: website health check, ROI calculator, digital assessment and honest growth writing.",
};

const resources = [
  {
    icon: Activity,
    title: "Website Health Check",
    text: "Instant performance, SEO and accessibility scores for any site.",
    href: "/audit",
    tag: "Free tool",
  },
  {
    icon: Sparkles,
    title: "Digital Assessment",
    text: "8 guided questions → a personalized digital maturity report.",
    href: "/assessment",
    tag: "Free tool",
  },
  {
    icon: Calculator,
    title: "ROI Calculator",
    text: "Estimate what a real digital presence is worth to your business.",
    href: "/pricing#roi",
    tag: "Free tool",
  },
  {
    icon: BookOpen,
    title: "Insights Library",
    text: "Plain-spoken articles on websites, SEO, AI and growth.",
    href: "/blog",
    tag: "Reading",
  },
  {
    icon: FileText,
    title: "Case Studies",
    text: "Real projects with real numbers — problems, solutions, results.",
    href: "/case-studies",
    tag: "Reading",
  },
  {
    icon: ClipboardList,
    title: "Care Plan Guide",
    text: "What website maintenance should actually include, tier by tier.",
    href: "/care-plans",
    tag: "Guide",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Free tools. Honest answers."
        lead="Use these before you spend a cent with us — or anyone else."
      />

      <Section className="pt-0">
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
            {resources.map((r) => (
              <StaggerItem key={r.title}>
                <Link
                  href={r.href}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:border-gold/40 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-2xl bg-gold-soft p-3 text-gold transition-transform group-hover:scale-110">
                      <r.icon className="size-5" aria-hidden />
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-[11px] text-muted">
                      {r.tag}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-lg font-semibold">{r.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{r.text}</p>
                  <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-gold">
                    Open
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Insights />
      <ContactCta />
    </>
  );
}
