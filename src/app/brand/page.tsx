"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, Download } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactCta } from "@/components/home/contact-cta";

const logos = [
  { src: "/brand/mesengr-icon.svg", name: "App icon", note: "Primary mark · gold on ink", dark: true },
  { src: "/brand/mesengr-icon-gold.svg", name: "App icon (gold)", note: "Ink on gold", dark: false },
  { src: "/brand/mesengr-mark-gold.svg", name: "Mark · gold", note: "Transparent · for dark backgrounds", dark: true },
  { src: "/brand/mesengr-mark-ink.svg", name: "Mark · ink", note: "Transparent · for light backgrounds", dark: false },
];

const lockups = [
  { src: "/brand/mesengr-lockup-ink.svg", name: "Lockup · dark", note: "Use on light backgrounds", dark: false },
  { src: "/brand/mesengr-lockup-light.svg", name: "Lockup · light", note: "Use on dark backgrounds", dark: true },
];

const social = [
  { src: "/brand/social-square.svg", name: "Social post", ratio: "1080 × 1080", aspect: "aspect-square" },
  { src: "/brand/social-banner.svg", name: "Banner / link card", ratio: "1200 × 630", aspect: "aspect-[1200/630]" },
  { src: "/brand/social-story.svg", name: "Story / status", ratio: "1080 × 1920", aspect: "aspect-[1080/1920]" },
];

const palette = [
  { name: "Ink", hex: "#0B0F19", text: "#fff" },
  { name: "Ink 2", hex: "#111827", text: "#fff" },
  { name: "Gold", hex: "#D4AF37", text: "#0B0F19" },
  { name: "Gold light", hex: "#E8C766", text: "#0B0F19" },
  { name: "Text", hex: "#0F172A", text: "#fff" },
  { name: "Surface", hex: "#F7F8FA", text: "#0B0F19" },
];

function Swatch({ name, hex, text }: { name: string; hex: string; text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="group overflow-hidden rounded-2xl border border-border text-left shadow-soft transition-transform hover:-translate-y-1"
    >
      <div className="flex h-24 items-end justify-end p-3" style={{ background: hex, color: text }}>
        {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />}
      </div>
      <div className="bg-card p-3">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted">{hex}</p>
      </div>
    </button>
  );
}

function AssetCard({
  src,
  name,
  note,
  dark,
  contain = true,
}: {
  src: string;
  name: string;
  note?: string;
  dark: boolean;
  contain?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div
        className={`flex items-center justify-center p-8 ${dark ? "bg-ink" : "bg-surface"}`}
      >
        <Image
          src={src}
          alt={name}
          width={280}
          height={contain ? 160 : 280}
          className="h-32 w-auto max-w-full object-contain"
          unoptimized
        />
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <div>
          <p className="text-sm font-medium">{name}</p>
          {note && <p className="text-xs text-muted">{note}</p>}
        </div>
        <a
          href={src}
          download
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs transition-colors hover:border-gold hover:text-gold"
        >
          <Download className="size-3.5" aria-hidden />
          SVG
        </a>
      </div>
    </div>
  );
}

export default function BrandPage() {
  return (
    <>
      <PageHeader
        eyebrow="Brand kit"
        title="The Mesengr brand, ready to use."
        lead="Logos, colours, type and social templates — everything you need to make on-brand flyers, posts and profiles. Download any asset below."
      />

      {/* Logos */}
      <Section className="pt-0">
        <Container>
          <Reveal>
            <Eyebrow>Logo</Eyebrow>
            <Heading>The mark &amp; its variants.</Heading>
            <Lead>
              The monogram is an “M.” — our initial with the signature gold dot.
              Use the tile version as an app icon or profile picture; use the
              transparent marks over photography.
            </Lead>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {logos.map((l) => (
              <Reveal key={l.src}>
                <AssetCard {...l} />
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {lockups.map((l) => (
              <Reveal key={l.src}>
                <AssetCard {...l} contain />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Colour */}
      <Section className="bg-surface">
        <Container>
          <Reveal>
            <Eyebrow>Colour</Eyebrow>
            <Heading>A disciplined palette.</Heading>
            <Lead>Ink and white do the work; gold is the accent, used sparingly. Click any swatch to copy its hex.</Lead>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {palette.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Type */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Typography</Eyebrow>
            <Heading>Two typefaces, clear roles.</Heading>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Headings · Space Grotesk
                </p>
                <p className="mt-4 font-display text-5xl font-semibold tracking-tight">Ag</p>
                <p className="mt-4 font-display text-xl">We grow businesses.</p>
                <p className="mt-1 text-sm text-muted">Weights 500 · 600 · 700</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Body · Inter
                </p>
                <p className="mt-4 text-5xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-inter)" }}>Ag</p>
                <p className="mt-4 text-lg text-muted" style={{ fontFamily: "var(--font-inter)" }}>
                  Clear, quiet, and highly readable at every size.
                </p>
                <p className="mt-1 text-sm text-muted">Weights 400 · 500 · 600</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Social templates */}
      <Section className="bg-surface">
        <Container>
          <Reveal>
            <Eyebrow>Social &amp; flyers</Eyebrow>
            <Heading>Editable templates.</Heading>
            <Lead>
              Drop these into Canva, Figma or Illustrator, swap the copy, export
              and post. Built at the exact sizes each platform wants.
            </Lead>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {social.map((s) => (
              <Reveal key={s.src}>
                <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                  <div className={`relative w-full ${s.aspect} bg-ink`}>
                    <Image src={s.src} alt={s.name} fill className="object-contain" unoptimized />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-4">
                    <div>
                      <p className="text-sm font-medium">{s.name}</p>
                      <p className="text-xs text-muted">{s.ratio}</p>
                    </div>
                    <a
                      href={s.src}
                      download
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs transition-colors hover:border-gold hover:text-gold"
                    >
                      <Download className="size-3.5" aria-hidden />
                      SVG
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Usage */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Usage</Eyebrow>
            <Heading>A few simple rules.</Heading>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-gold/30 bg-gold-soft p-8">
                <p className="font-display text-lg font-semibold">Do</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {[
                    "Keep clear space around the logo — at least the height of the dot.",
                    "Use gold as an accent, never as a full background for text.",
                    "Pair Space Grotesk for headings with Inter for body.",
                    "Use the light lockup on dark photos, the dark lockup on light ones.",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                <p className="font-display text-lg font-semibold">Don&apos;t</p>
                <ul className="mt-4 space-y-2.5 text-sm text-muted">
                  {[
                    "Don't recolour the mark outside the ink/gold/white palette.",
                    "Don't stretch, rotate or add drop shadows to the logo.",
                    "Don't place the gold mark on a light background — use the ink mark.",
                    "Don't set the wordmark in a different typeface.",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-8">
            <p className="text-sm text-muted">
              Note: the wordmark and templates are set in{" "}
              <span className="font-medium text-foreground">Space Grotesk</span>{" "}
              (free, open-source). Install it, or convert text to outlines in
              your design tool for perfect fidelity when sharing files.
            </p>
          </Reveal>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
