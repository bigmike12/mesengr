import { NextResponse } from "next/server";
import { z } from "zod";

// Primary audit: Google PageSpeed Insights (Lighthouse), mobile strategy.
// Fallback: a lightweight first-party scan (load time + on-page SEO/accessibility
// signals) so the tool always returns something real when PSI is unavailable.
// Set PAGESPEED_API_KEY for a dedicated ~25k/day quota; without a key the shared
// anonymous quota is easily exhausted and we lean on the fallback.
export const maxDuration = 60;

const schema = z.object({ url: z.string().min(3).max(300) });

type PsiAudit = { title: string; score: number | null };
type PsiCategory = {
  score: number | null;
  auditRefs: { id: string; weight: number }[];
};

type AuditResult = {
  url: string;
  performance: number;
  seo: number;
  accessibility: number;
  suggestions: string[];
  source: "lighthouse" | "basic";
};

function normalizeUrl(input: string): string | null {
  let raw = input.trim();
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
  try {
    const u = new URL(raw);
    if (!u.hostname.includes(".")) return null;
    // Refuse obvious non-public targets (best-effort SSRF guard)
    const host = u.hostname.toLowerCase();
    if (
      host === "localhost" ||
      host.endsWith(".local") ||
      /^127\./.test(host) ||
      /^10\./.test(host) ||
      /^192\.168\./.test(host) ||
      /^169\.254\./.test(host) ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(host)
    ) {
      return null;
    }
    return u.toString();
  } catch {
    return null;
  }
}

/* ------------------------------- PageSpeed ------------------------------- */

function pickSuggestions(
  categories: Record<string, PsiCategory>,
  audits: Record<string, PsiAudit>,
): string[] {
  const scored: { title: string; impact: number }[] = [];
  for (const key of ["performance", "seo", "accessibility"]) {
    const cat = categories[key];
    if (!cat) continue;
    for (const ref of cat.auditRefs) {
      if (ref.weight <= 0) continue;
      const audit = audits[ref.id];
      if (!audit || audit.score === null || audit.score >= 0.9) continue;
      scored.push({ title: audit.title, impact: ref.weight * (1 - audit.score) });
    }
  }
  const seen = new Set<string>();
  return scored
    .sort((a, b) => b.impact - a.impact)
    .filter((s) => !seen.has(s.title) && seen.add(s.title))
    .slice(0, 5)
    .map((s) => s.title);
}

async function runLighthouse(url: string): Promise<AuditResult | null> {
  const psi = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  psi.searchParams.set("url", url);
  psi.searchParams.set("strategy", "mobile");
  psi.searchParams.append("category", "PERFORMANCE");
  psi.searchParams.append("category", "SEO");
  psi.searchParams.append("category", "ACCESSIBILITY");
  if (process.env.PAGESPEED_API_KEY) {
    psi.searchParams.set("key", process.env.PAGESPEED_API_KEY);
  }

  const res = await fetch(psi.toString(), {
    signal: AbortSignal.timeout(45_000),
    cache: "no-store",
  });
  const data = (await res.json()) as {
    lighthouseResult?: {
      categories: Record<string, PsiCategory>;
      audits: Record<string, PsiAudit>;
    };
  };
  if (!res.ok || !data.lighthouseResult) {
    if (res.status === 429 && !process.env.PAGESPEED_API_KEY) {
      console.warn(
        "[audit] Anonymous PageSpeed quota exhausted — set PAGESPEED_API_KEY for a dedicated quota. Using basic fallback scan.",
      );
    }
    return null;
  }
  const { categories, audits } = data.lighthouseResult;
  const score = (key: string) =>
    Math.round(((categories[key]?.score ?? 0) as number) * 100);
  return {
    url,
    performance: score("performance"),
    seo: score("seo"),
    accessibility: score("accessibility"),
    suggestions: pickSuggestions(categories, audits),
    source: "lighthouse",
  };
}

/* ------------------------------ Basic scan ------------------------------- */

function clamp(n: number) {
  return Math.max(0, Math.min(100, Math.round(n)));
}

// Real, first-party signals: fetch the page, time it, inspect the HTML.
async function runBasicScan(url: string): Promise<AuditResult | null> {
  const started = Date.now();
  let res: Response;
  let html: string;
  try {
    res = await fetch(url, {
      signal: AbortSignal.timeout(15_000),
      redirect: "follow",
      headers: {
        // Present as a normal browser so servers return their real markup
        "User-Agent":
          "Mozilla/5.0 (compatible; MesengrAudit/1.0; +https://mesengr.com/audit)",
        Accept: "text/html,application/xhtml+xml",
      },
      cache: "no-store",
    });
    html = (await res.text()).slice(0, 600_000);
  } catch {
    return null;
  }
  const elapsed = Date.now() - started;
  const bytes = html.length;
  const isHttps = url.startsWith("https://");
  const head = html.slice(0, html.search(/<\/head>/i) + 1 || html.length);
  const lower = html.toLowerCase();

  const has = (re: RegExp) => re.test(html);
  const count = (re: RegExp) => (html.match(re) ?? []).length;

  // Performance proxy from load time, payload size and blocking scripts
  const scripts = count(/<script(?![^>]*\btype=["']application\/(ld\+json)["'])[^>]*\bsrc=/gi);
  const headBlocking = (head.match(/<script[^>]*\bsrc=/gi) ?? []).length;
  let perf = 100;
  if (elapsed > 600) perf -= Math.min(45, (elapsed - 600) / 60);
  if (bytes > 120_000) perf -= Math.min(20, (bytes - 120_000) / 25_000);
  if (scripts > 8) perf -= Math.min(20, (scripts - 8) * 2);
  if (headBlocking > 2) perf -= Math.min(15, (headBlocking - 2) * 3);
  if (!isHttps) perf -= 8;
  const performance = clamp(perf);

  // SEO signals
  const seoChecks: [boolean, string][] = [
    [has(/<title[^>]*>[^<]{3,}<\/title>/i), "Add a descriptive, unique <title> tag."],
    [has(/<meta[^>]+name=["']description["'][^>]+content=["'][^"']{20,}/i), "Add a meta description that summarizes each page."],
    [has(/<h1[^>]*>/i), "Add a single clear <h1> heading to each page."],
    [has(/<link[^>]+rel=["']canonical["']/i), "Set a canonical URL to avoid duplicate-content issues."],
    [has(/<meta[^>]+name=["']viewport["']/i), "Add a mobile viewport meta tag."],
    [/og:title|og:description|og:image/.test(lower), "Add Open Graph tags so links preview well when shared."],
    [/application\/ld\+json/.test(lower), "Add structured data (schema.org) so search engines understand your business."],
    [isHttps, "Serve the site over HTTPS — it's a ranking and trust signal."],
  ];
  const seo = clamp((seoChecks.filter(([ok]) => ok).length / seoChecks.length) * 100);

  // Accessibility signals
  const imgs = count(/<img\b/gi);
  const imgsWithAlt = count(/<img\b[^>]*\balt=/gi);
  const altCoverage = imgs === 0 ? 1 : imgsWithAlt / imgs;
  const a11yChecks: [boolean, string][] = [
    [has(/<html[^>]+lang=/i), "Set a lang attribute on the <html> element."],
    [has(/<meta[^>]+name=["']viewport["']/i), "Add a viewport meta tag for mobile accessibility."],
    [altCoverage >= 0.8, "Add descriptive alt text to images for screen readers."],
    [has(/<title[^>]*>[^<]{3,}<\/title>/i), "Give the page a descriptive title for assistive tech."],
    [!/<a[^>]*>\s*(click here|here|read more)\s*<\/a>/i.test(html), "Use descriptive link text instead of 'click here'."],
    [/aria-|role=/.test(lower) || !/<(nav|form|button)/i.test(lower), "Add ARIA labels/roles to interactive regions."],
  ];
  const accessibility = clamp((a11yChecks.filter(([ok]) => ok).length / a11yChecks.length) * 100);

  const suggestions: string[] = [];
  if (elapsed > 1500) suggestions.push(`Server responded in ${(elapsed / 1000).toFixed(1)}s — compress assets and use a CDN to speed it up.`);
  if (bytes > 200_000) suggestions.push("The page is heavy — optimize images and remove unused scripts.");
  for (const [ok, tip] of [...seoChecks, ...a11yChecks]) {
    if (!ok && !suggestions.includes(tip)) suggestions.push(tip);
  }

  return {
    url,
    performance,
    seo,
    accessibility,
    suggestions: suggestions.slice(0, 5),
    source: "basic",
  };
}

/* -------------------------------- Handler -------------------------------- */

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Please enter a website address." }, { status: 400 });
  }
  const url = normalizeUrl(parsed.data.url);
  if (!url) {
    return NextResponse.json(
      { ok: false, error: "That doesn't look like a valid public website address — try something like yourbusiness.com." },
      { status: 400 },
    );
  }

  // Try the real Lighthouse audit first; fall back to our own scan on any failure.
  let result: AuditResult | null = null;
  try {
    result = await runLighthouse(url);
  } catch {
    result = null;
  }
  if (!result) {
    result = await runBasicScan(url);
  }

  if (!result) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't reach that site — check the address is live and publicly accessible, then try again. If it keeps failing, book a free call and we'll audit it manually.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, ...result });
}
