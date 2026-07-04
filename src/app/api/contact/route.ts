import { NextResponse } from "next/server";
import { z } from "zod";
import { CTA, NOTIFY, P, emailLayout, esc, sendEmail } from "@/lib/email";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  company: z.string().optional(),
  interest: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }
  const d = parsed.data;

  const notify = sendEmail({
    to: NOTIFY,
    replyTo: d.email,
    subject: `New enquiry — ${d.name}${d.company ? ` (${d.company})` : ""}`,
    html: emailLayout(
      "New contact form enquiry",
      P(`<strong>Name:</strong> ${esc(d.name)}`) +
        P(`<strong>Email:</strong> ${esc(d.email)}`) +
        (d.company ? P(`<strong>Company:</strong> ${esc(d.company)}`) : "") +
        P(`<strong>Needs:</strong> ${esc(d.interest)}`) +
        P(`<strong>Budget:</strong> ${esc(d.budget)}`) +
        P(`<strong>Message:</strong><br/>${esc(d.message)}`),
    ),
  });

  const autoReply = sendEmail({
    to: d.email,
    subject: "We got your message — Mesengr",
    html: emailLayout(
      `Thanks, ${esc(d.name.split(" ")[0])}.`,
      P("Your message just landed with a real person. We reply within one business day — usually much faster.") +
        P("If it's urgent, reach us directly on WhatsApp or by phone.") +
        CTA(site.whatsapp, "Message us on WhatsApp") +
        P(`Or call ${site.phone}.`),
    ),
  });

  const [n] = await Promise.all([notify, autoReply]);
  if (!n.ok) {
    return NextResponse.json({ ok: false, error: "Could not send your message. Please try WhatsApp or email us directly." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
