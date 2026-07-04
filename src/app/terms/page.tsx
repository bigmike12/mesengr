import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Mesengr website and services.",
};

const sections = [
  {
    heading: "Agreement",
    body: "By using this website, you agree to these terms. Client engagements are governed by an individual services agreement that takes precedence over anything here.",
  },
  {
    heading: "Use of the site",
    body: "You may browse, use our free tools and share our content with attribution. You may not scrape the site at scale, misrepresent our work as your own, or use the site in any unlawful way.",
  },
  {
    heading: "Free tools & estimates",
    body: "The Website Health Check, ROI Calculator and Digital Assessment produce indicative estimates for educational purposes. They are not audits, guarantees or professional advice; concrete figures come from a scoped engagement.",
  },
  {
    heading: "Intellectual property",
    body: "The Mesengr name, site design and content are our property. Client work is owned per the terms of each services agreement — by default, clients own their deliverables in full upon final payment.",
  },
  {
    heading: "Third-party services",
    body: "Our site and services integrate third-party platforms (hosting, analytics, payments, AI providers). Their availability and terms are governed by those providers.",
  },
  {
    heading: "Limitation of liability",
    body: "The site is provided as-is. To the maximum extent permitted by law, Mesengr is not liable for indirect or consequential damages arising from use of the site or its free tools.",
  },
  {
    heading: "Changes",
    body: "We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms? Email hello@mesengr.com.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="June 2026"
      sections={sections}
    />
  );
}
