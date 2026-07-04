import { NextResponse } from "next/server";
import { z } from "zod";
import { NOTIFY, P, emailLayout, esc, sendEmail } from "@/lib/email";

const schema = z.object({ email: z.email() });

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
  }
  const { email } = parsed.data;

  const welcome = sendEmail({
    to: email,
    subject: "You're in — Mesengr insights",
    html: emailLayout(
      "Welcome aboard.",
      P("Once a month you'll get honest, useful writing on websites, SEO, AI and growth for SMEs. No noise, no spam, unsubscribe anytime by replying."),
    ),
  });

  const notify = sendEmail({
    to: NOTIFY,
    subject: `New newsletter subscriber: ${email}`,
    html: emailLayout("New subscriber", P(`<strong>Email:</strong> ${esc(email)}`)),
  });

  const [w] = await Promise.all([welcome, notify]);
  if (!w.ok) {
    return NextResponse.json({ ok: false, error: "Could not subscribe right now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
