import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Command,
  Home,
  LayoutGrid,
  Mail,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

const destinations = [
  { label: "Home", href: "/", icon: Home, hint: "Start over" },
  { label: "Services", href: "/services", icon: LayoutGrid, hint: "What we do" },
  { label: "Free Audit", href: "/audit", icon: Activity, hint: "Scan your site" },
  { label: "Digital Assessment", href: "/assessment", icon: Sparkles, hint: "5-min report" },
  { label: "Contact", href: "/contact", icon: Mail, hint: "Talk to us" },
];

// Server component — all animation is CSS (entrances + floating mark), zero JS
export default function NotFound() {
  return (
    <div className="relative flex min-h-[92vh] items-center overflow-hidden pb-20 pt-28">
      {/* Background: grid + gold glow */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/4 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]"
      />

      <Container className="relative text-center">
        {/* Big 404 with floating brand mark */}
        <div className="anim-fade-up relative inline-flex items-center justify-center">
          <span className="font-display text-[7rem] font-bold leading-none tracking-tight text-gradient-gold md:text-[11rem]">
            4
          </span>
          <span className="mx-2 animate-float md:mx-4" aria-hidden>
            <span className="flex size-24 items-center justify-center rounded-[1.75rem] bg-ink font-display text-6xl font-bold text-gold shadow-lift md:size-40 md:rounded-[2.5rem] md:text-9xl dark:bg-card">
              M<span className="text-gold">.</span>
            </span>
          </span>
          <span className="font-display text-[7rem] font-bold leading-none tracking-tight text-gradient-gold md:text-[11rem]">
            4
          </span>
        </div>

        <h1 className="anim-rise mt-6 font-display text-3xl font-semibold tracking-tight [animation-delay:0.08s] md:text-4xl">
          This message didn&apos;t reach its destination.
        </h1>

        <p className="anim-fade-up mx-auto mt-4 max-w-lg text-muted [animation-delay:0.16s]">
          The page you&apos;re after has moved, been renamed, or never existed.
          No dead ends here though — pick a direction below, or press{" "}
          <kbd className="rounded-md border border-border bg-surface px-1.5 py-0.5 text-xs">
            <Command className="inline size-3 -translate-y-px" aria-hidden /> K
          </kbd>{" "}
          to search the whole site.
        </p>

        <div className="anim-fade-up mt-9 flex flex-wrap justify-center gap-4 [animation-delay:0.24s]">
          <ButtonLink href="/" variant="gold" size="lg">
            <Home className="size-4" aria-hidden />
            Back home
          </ButtonLink>
          <ButtonLink href="/book" variant="outline" size="lg">
            Book a strategy call
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>

        {/* Popular destinations */}
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {destinations.map((d, i) => (
            <div
              key={d.href}
              className="anim-fade-up"
              style={{ animationDelay: `${0.32 + i * 0.06}s` }}
            >
              <Link
                href={d.href}
                className="group flex h-full flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-5 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
              >
                <span className="rounded-xl bg-surface p-2.5 text-gold-deep transition-transform group-hover:scale-110">
                  <d.icon className="size-5" aria-hidden />
                </span>
                <span className="mt-1 text-sm font-medium">{d.label}</span>
                <span className="flex items-center gap-0.5 text-[11px] text-muted">
                  {d.hint}
                  <ArrowUpRight
                    className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                </span>
              </Link>
            </div>
          ))}
        </div>

        <p className="anim-fade-up mt-10 text-sm text-muted [animation-delay:0.7s]">
          Think this link should work?{" "}
          <Link href="/contact" className="font-medium text-gold-deep underline-offset-4 hover:underline">
            Tell us
          </Link>{" "}
          and we&apos;ll fix it.
        </p>
      </Container>
    </div>
  );
}
