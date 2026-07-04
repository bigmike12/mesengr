import { Hero } from "@/components/home/hero";
import { Trust } from "@/components/home/trust";
import { Why } from "@/components/home/why";
import { Comparison } from "@/components/home/comparison";
import { ServicesGrid } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { Work } from "@/components/home/work";
import { RoiCalculator } from "@/components/home/roi-calculator";
import { Story } from "@/components/home/story";
import { HealthCheckSection } from "@/components/home/health-check-section";
import { Pricing } from "@/components/home/pricing";
import { CarePlansSection } from "@/components/home/care-plans";
import { AiSolutionsSection } from "@/components/home/ai-solutions";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { Insights } from "@/components/home/insights";
import { ContactCta } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Why />
      <Comparison />
      <ServicesGrid />
      <Process />
      <Work />
      <RoiCalculator />
      <Story />
      <HealthCheckSection />
      <Pricing compact />
      <CarePlansSection />
      <AiSolutionsSection />
      <Testimonials />
      <Faq limit={8} />
      <Insights />
      <ContactCta />
    </>
  );
}
