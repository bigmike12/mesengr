import { NextResponse } from "next/server";
import { z } from "zod";
import { CTA, NOTIFY, P, emailLayout, esc, sendEmail } from "@/lib/email";
import { site } from "@/lib/site";

const schema = z.object({
  email: z.email(),
  level: z.enum(["Foundation", "Growth", "Scale"]),
  score: z.number(),
  recommendations: z.array(z.string()).max(8),
  services: z.array(z.string()).max(10),
  answers: z.record(z.string(), z.array(z.string())),
});

const roadmap = [
  ["Weeks 1–2", "Discovery & strategy — goals, customers, content and success metrics agreed."],
  ["Weeks 3–6", "Design & build — your new presence designed, built and reviewed with you."],
  ["Weeks 6–8", "Launch & integrate — live with analytics, SEO, email and automations wired in."],
  ["Ongoing", "Grow & optimize — monthly measurement, improvements and honest reporting."],
];

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }
  const d = parsed.data;

  const list = (items: string[], ordered = false) =>
    `<${ordered ? "ol" : "ul"} style="margin:0 0 14px;padding-left:20px;">${items
      .map((i) => `<li style="font-size:14px;line-height:1.7;color:#334155;margin-bottom:6px;">${esc(i)}</li>`)
      .join("")}</${ordered ? "ol" : "ul"}>`;

  // Report to the lead
  const report = sendEmail({
    to: d.email,
    subject: `Your Digital Assessment report — ${d.level} level`,
    html: emailLayout(
      `Your digital maturity level: ${d.level}`,
      P("Thanks for taking the Mesengr Digital Assessment. Here's your personalized report.") +
        P(`<strong>Top recommended improvements:</strong>`) +
        list(d.recommendations, true) +
        P(`<strong>Suggested services:</strong>`) +
        list(d.services) +
        P(`<strong>Expected roadmap:</strong>`) +
        list(roadmap.map(([phase, text]) => `${phase}: ${text}`)) +
        P("Want to turn this into a concrete plan? The strategy call is free and genuinely useful.") +
        CTA(`${site.url}/book`, "Book your free strategy call"),
    ),
  });

  // Rich lead notification for you
  const answersHtml = Object.entries(d.answers)
    .map(([q, a]) => P(`<strong>${esc(q)}:</strong> ${esc(a.join("; "))}`))
    .join("");

  const notify = sendEmail({
    to: NOTIFY,
    replyTo: d.email,
    subject: `New assessment lead — ${d.level} (${d.email})`,
    html: emailLayout(
      `Assessment lead: ${d.level} level (score ${d.score})`,
      P(`<strong>Email:</strong> ${esc(d.email)}`) +
        answersHtml +
        P(`<strong>Recommendations shown:</strong> ${d.recommendations.map(esc).join(" · ")}`) +
        P(`<strong>Services suggested:</strong> ${d.services.map(esc).join(" · ")}`),
    ),
  });

  const [r] = await Promise.all([report, notify]);
  if (!r.ok) {
    return NextResponse.json({ ok: false, error: "Could not email the report." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
