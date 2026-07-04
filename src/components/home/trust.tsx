import { trustedTech } from "@/lib/site";
import { Container } from "@/components/ui/section";

export function Trust() {
  const row = [...trustedTech, ...trustedTech];
  return (
    <div className="border-y border-border bg-surface py-10">
      <Container>
        <p className="mb-7 text-center text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Built on technology you can trust
        </p>
      </Container>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 pr-14 hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <span
              key={name + i}
              className="whitespace-nowrap font-display text-lg font-medium text-muted/80 transition-colors hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
