import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";

export function LegalPage({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lead={`Last updated: ${updated}`} />
      <Section className="pt-0">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <section key={s.heading}>
                <h2 className="font-display text-xl font-semibold">
                  {i + 1}. {s.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
