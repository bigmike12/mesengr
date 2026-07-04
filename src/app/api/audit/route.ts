import { NextResponse } from "next/server";
import { z } from "zod";

// Real audit via Google PageSpeed Insights (Lighthouse), mobile strategy.
// Works without a key at low volume; set PAGESPEED_API_KEY for higher quotas.
export const maxDuration = 60;

const schema = z.object({ url: z.string().min(3).max(300) });

type PsiAudit = { title: string; score: number | null };
type PsiCategory = {
  score: number | null;
  auditRefs: { id: string; weight: number }[];
};

function normalizeUrl(input: string): string | null {
  let raw = input.trim();
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
  try {
    const u = new URL(raw);
    if (!u.hostname.includes(".")) return null;
    return u.toString();
  } catch {
    return null;
  }
}

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

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Please enter a website address." }, { status: 400 });
  }
  const url = normalizeUrl(parsed.data.url);
  if (!url) {
    return NextResponse.json(
      { ok: false, error: "That doesn't look like a valid website address — try something like yourbusiness.com." },
      { status: 400 },
    );
  }

  const psi = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  psi.searchParams.set("url", url);
  psi.searchParams.set("strategy", "mobile");
  psi.searchParams.append("category", "PERFORMANCE");
  psi.searchParams.append("category", "SEO");
  psi.searchParams.append("category", "ACCESSIBILITY");
  if (process.env.PAGESPEED_API_KEY) {
    psi.searchParams.set("key", process.env.PAGESPEED_API_KEY);
  }

  let data: {
    error?: { message?: string };
    lighthouseResult?: {
      categories: Record<string, PsiCategory>;
      audits: Record<string, PsiAudit>;
    };
  };
  try {
    const res = await fetch(psi.toString(), {
      signal: AbortSignal.timeout(55_000),
      cache: "no-store",
    });
    data = await res.json();
    if (!res.ok || !data.lighthouseResult) {
      const msg = data.error?.message ?? "";
      const friendly =
        res.status === 429
          ? "The audit service is at capacity right now — please try again in a few minutes."
          : /FAILED_DOCUMENT_REQUEST|ERRORED_DOCUMENT_REQUEST|DNS/i.test(msg)
            ? "We couldn't reach that site. Check the address is live and publicly accessible, then try again."
            : "Google's testing service couldn't audit that page right now. Please try again in a minute.";
      if (res.status === 429 && !process.env.PAGESPEED_API_KEY) {
        console.warn(
          "[audit] Anonymous PageSpeed quota exhausted — set PAGESPEED_API_KEY for a dedicated 25k/day quota.",
        );
      }
      return NextResponse.json({ ok: false, error: friendly }, { status: 502 });
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "The audit timed out — the site may be very slow or unreachable. Try again, or book a call for a manual audit." },
      { status: 504 },
    );
  }

  const { categories, audits } = data.lighthouseResult;
  const score = (key: string) => Math.round(((categories[key]?.score ?? 0) as number) * 100);

  return NextResponse.json({
    ok: true,
    url,
    performance: score("performance"),
    seo: score("seo"),
    accessibility: score("accessibility"),
    suggestions: pickSuggestions(categories, audits),
  });
}
