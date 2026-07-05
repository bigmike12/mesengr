import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/site";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export function Insights({ limit = 3 }: { limit?: number }) {
  return (
    <Section id="insights" className="bg-surface">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <Heading>Learn before you spend.</Heading>
              <Lead>
                Honest writing on websites, SEO, AI and growth — the advice we
                give clients, published for everyone.
              </Lead>
            </div>
            <ButtonLink href="/blog" variant="outline" size="md">
              All articles
            </ButtonLink>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3" gap={0.07}>
          {blogPosts.slice(0, limit).map((post) => (
            <StaggerItem key={post.slug}>
              <article className="hover-lift h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:border-gold/40 hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-gold-soft px-3 py-1 text-[11px] font-semibold text-gold-deep">
                      {post.category}
                    </span>
                    <ArrowUpRight
                      className="size-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-gold"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-5 flex-1 font-display text-lg font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <p className="mt-5 flex items-center gap-2 text-xs text-muted">
                    <Clock className="size-3.5" aria-hidden />
                    {post.readTime} min read ·{" "}
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
