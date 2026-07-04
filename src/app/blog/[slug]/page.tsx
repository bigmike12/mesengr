import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { blogPosts, site } from "@/lib/site";
import { postBodies, type PostBlock } from "@/lib/posts";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ContactCta } from "@/components/home/contact-cta";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", title: post.title, description: post.excerpt },
  };
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3 leading-relaxed">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
              <span className="text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className="my-8 rounded-3xl border border-gold/30 bg-gold-soft p-7 leading-relaxed">
          {block.text}
        </aside>
      );
    default:
      return <p className="my-5 leading-[1.85] text-foreground/90">{block.text}</p>;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const body = postBodies[slug];
  if (!post || !body) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHeader eyebrow={post.category} title={post.title}>
        <p className="mt-6 flex items-center gap-2 text-sm text-muted">
          <Clock className="size-4" aria-hidden />
          {post.readTime} min read ·{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </PageHeader>

      <Section className="pt-0">
        <Container className="max-w-3xl">
          <Reveal>
            <article className="text-[1.05rem]">
              {body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </article>
          </Reveal>

          <Reveal className="mt-14">
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
              >
                <ArrowLeft className="size-4" aria-hidden />
                All articles
              </Link>
              <ButtonLink href="/book" variant="gold" size="sm">
                Talk to us about this
              </ButtonLink>
            </div>
          </Reveal>

          {/* Related */}
          <Reveal className="mt-16">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Keep reading
            </p>
            <div className="space-y-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-soft transition-all hover:border-gold/40"
                >
                  <span className="font-display text-sm font-medium">{p.title}</span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-gold"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
