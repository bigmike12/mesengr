import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mesengr collects, uses and protects your information.",
};

const sections = [
  {
    heading: "What we collect",
    body: "We collect information you provide directly — your name, email address, company details and anything you share through our contact form, booking tool or Digital Assessment. We also collect standard analytics data (pages visited, device type, approximate location) to understand how the site is used.",
  },
  {
    heading: "How we use it",
    body: "We use your information to respond to enquiries, prepare for strategy calls, deliver assessment reports you request, and send the newsletter if you subscribe. We do not sell, rent or trade your personal information with anyone, ever.",
  },
  {
    heading: "Cookies & analytics",
    body: "We use privacy-respecting analytics to measure site performance and a small number of functional cookies (for example, remembering your theme preference). You can disable cookies in your browser without losing access to any content.",
  },
  {
    heading: "Data retention",
    body: "Enquiry and assessment data is kept only as long as needed to serve you — typically the duration of our conversation or engagement, plus a reasonable archive period. You may request deletion at any time.",
  },
  {
    heading: "Your rights",
    body: "You can request a copy of the data we hold about you, ask us to correct it, or ask us to delete it. Email hello@mesengr.com and we'll act on your request within 30 days.",
  },
  {
    heading: "Security",
    body: "Data is transmitted over encrypted connections and stored with reputable providers with strong security practices. Access is limited to team members who need it to serve you.",
  },
  {
    heading: "Changes to this policy",
    body: "If we make material changes to this policy, we'll note the new date at the top of this page and, where appropriate, notify subscribers by email.",
  },
  {
    heading: "Contact",
    body: "Questions about privacy? Email hello@mesengr.com — a real person will answer.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="June 2026"
      sections={sections}
    />
  );
}
