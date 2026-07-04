import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ServicesGrid } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { Comparison } from "@/components/home/comparison";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, ecommerce, booking systems, AI chatbots, automation, SEO, hosting and maintenance — every capability an SME needs to grow online, from one accountable partner.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            One partner.
            <br />
            Every digital capability.
          </>
        }
        lead="Sixteen services that usually require five vendors. Under one roof, with one team accountable for the outcome."
      />
      <ServicesGrid heading="Explore every service." />
      <Process />
      <Comparison />
      <ContactCta />
    </>
  );
}
