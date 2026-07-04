import { NextResponse } from "next/server";
import { z } from "zod";
import { CTA, NOTIFY, P, emailLayout, esc, sendEmail } from "@/lib/email";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  date: z.string().min(4), // human-readable, e.g. "Monday, July 6"
  time: z.string().min(4), // e.g. "10:30"
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }
  const d = parsed.data;

  const confirm = sendEmail({
    to: d.email,
    subject: `Booked: strategy call on ${d.date} at ${d.time}`,
    html: emailLayout(
      "Your strategy call is booked.",
      P(`Hi ${esc(d.name.split(" ")[0])},`) +
        P(`You're confirmed for <strong>${esc(d.date)} at ${esc(d.time)}</strong> — 30 minutes, video call, genuinely free.`) +
        P("We'll send the video link from this address before the call. To prepare, think about: what's working in your business, what isn't, and what you'd like your digital presence to do about it.") +
        P(`Need to reschedule? Just reply to this email or message us on WhatsApp (${site.phone}).`) +
        CTA(site.whatsapp, "WhatsApp us"),
    ),
  });

  const notify = sendEmail({
    to: NOTIFY,
    replyTo: d.email,
    subject: `New booking — ${d.name}, ${d.date} ${d.time}`,
    html: emailLayout(
      "New strategy call booked",
      P(`<strong>Name:</strong> ${esc(d.name)}`) +
        P(`<strong>Email:</strong> ${esc(d.email)}`) +
        P(`<strong>Slot:</strong> ${esc(d.date)} at ${esc(d.time)}`) +
        P("Remember to send the calendar invite and video link."),
    ),
  });

  const [c] = await Promise.all([confirm, notify]);
  if (!c.ok) {
    return NextResponse.json({ ok: false, error: "Could not confirm the booking by email." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
