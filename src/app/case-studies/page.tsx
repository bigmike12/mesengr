import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Work } from "@/components/home/work";
import { Testimonials } from "@/components/home/testimonials";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real projects, real numbers. See how Mesengr helped SMEs increase bookings, cut admin hours and grow revenue.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Work that pays for itself."
        lead="We measure every project against the numbers that matter to the business — leads, bookings, hours saved, revenue earned."
      />
      <Work />
      <Testimonials />
      <ContactCta />
    </>
  );
}
