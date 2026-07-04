"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/site";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { ContactCta } from "@/components/home/contact-cta";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? blogPosts
        : blogPosts.filter((p) => p.category === category),
    [category],
  );

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Advice we'd give over coffee."
        lead="Websites, SEO, AI and growth for small and medium businesses — written to be useful, not to sell."
      />

      <Section className="pt-0">
        <Container>
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  category === c
                    ? "border-gold bg-gold-soft text-gold"
                    : "border-border text-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <Stagger key={category} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" gap={0.06}>
            {filtered.map((post) => (
              <StaggerItem key={post.slug}>
                <motion.article whileHover={{ y: -5 }} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:border-gold/40 hover:shadow-lift"
                  >
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-gold-soft px-3 py-1 text-[11px] font-semibold text-gold">
                        {post.category}
                      </span>
                      <ArrowUpRight
                        className="size-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-gold"
                        aria-hidden
                      />
                    </div>
                    <h2 className="mt-5 flex-1 font-display text-lg font-semibold leading-snug">
                      {post.title}
                    </h2>
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
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
