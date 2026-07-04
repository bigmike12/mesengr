import type { MetadataRoute } from "next";
import { allPages, blogPosts, caseStudies, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = allPages.map((page) => ({
    url: `${site.url}${page.href === "/" ? "" : page.href}`,
    lastModified: new Date(),
    changeFrequency: page.href === "/blog" ? "weekly" : "monthly",
    priority: page.href === "/" ? 1 : 0.7,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const studies: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${site.url}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...posts, ...studies];
}
