import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/chrome/site-shell";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — We build digital experiences that grow businesses`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "digital growth partner",
    "web design",
    "web development",
    "SME websites",
    "AI chatbots",
    "business automation",
    "SEO",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — We build digital experiences that grow businesses`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Digital Growth Partner for SMEs`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "./" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  slogan: site.tagline,
  sameAs: [site.whatsapp],
  areaServed: "Worldwide",
  priceRange: "₦₦",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          // Before paint: apply stored theme (no flash) and mark JS available
          // (scroll-reveal hidden states only apply under html.js, so content
          // is never invisible for crawlers or no-JS visitors)
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js");try{var t=localStorage.getItem("mesengr-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
