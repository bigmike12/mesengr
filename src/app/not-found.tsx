import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
      />
      <Container className="relative text-center">
        <p className="font-display text-8xl font-bold text-gradient-gold md:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The link may be old, or the page moved. Either way — the good stuff
          is one click away.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <ButtonLink href="/" variant="gold">
            Back home
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Report a broken link
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
