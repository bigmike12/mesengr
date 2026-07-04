# Mesengr — Digital Growth Partner for SMEs

Premium marketing website built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion. Deploy-ready for Vercel.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes static)
npm start        # serve the production build
```

## Stack

- **Next.js 16** (App Router, Turbopack, fully static output)
- **TypeScript**, **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **Framer Motion** — scroll reveals, page transitions, micro-interactions
- **React Hook Form + Zod** — contact form validation
- **Lucide** icons · Space Grotesk / Inter via `next/font`

## Structure

```
src/
  lib/site.ts            # ALL site content: services, FAQs, case studies, pricing, posts
  app/                   # one folder per page (services, pricing, blog, assessment, …)
  components/
    chrome/              # navbar, footer, ⌘K command menu, scroll progress, floating contact
    home/                # homepage sections (hero, comparison, ROI calculator, …)
    tools/               # interactive tools: health check, assessment, booking, contact form
    ui/                  # primitives: button, section, reveal, accordion, modal, fields
```

## Features

- Dark/light theme (toggle in navbar, persisted, no flash on load)
- ⌘K command menu with global search across pages, services and articles
- Interactive tools: Website Health Check, ROI Calculator, Booking flow,
  and the **Digital Assessment** (8 questions → instant maturity report)
- SEO: per-page metadata, OpenGraph, schema.org JSON-LD, sitemap, robots, PWA manifest
- Accessibility: skip link, focus rings, aria labels, `prefers-reduced-motion` support

## Editing content

Nearly all copy lives in [`src/lib/site.ts`](src/lib/site.ts) — services, FAQs,
case studies, testimonials, pricing tiers, care plans and blog previews. Edit
there; the components render from it.

Contact details (email, phone, WhatsApp) are in the `site` object at the top of
the same file. The contact/booking/assessment forms currently simulate
submission client-side — wire them to an API route or service (Resend,
Formspree, Cal.com, etc.) before launch.
