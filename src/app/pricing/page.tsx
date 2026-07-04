import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Pricing } from "@/components/home/pricing";
import { CarePlansSection } from "@/components/home/care-plans";
import { RoiCalculator } from "@/components/home/roi-calculator";
import { Faq } from "@/components/home/faq";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three engagement models — Launch, Growth and Partner — plus ongoing care plans. Transparent, outcome-based pricing for SMEs.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Transparent engagements, honest numbers."
        lead="No per-page pricing games. We scope around your goals, quote a fixed figure, and stand behind it."
      />
      <Pricing />
      <CarePlansSection />
      <RoiCalculator />
      <Faq limit={10} />
      <ContactCta />
    </>
  );
}
