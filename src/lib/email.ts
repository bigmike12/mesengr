import { Resend } from "resend";
import { site } from "@/lib/site";

// Server-only email helper. Reads config from env:
//   RESEND_API_KEY  — required in production (starts with "re_")
//   EMAIL_FROM      — verified sender, e.g. 'Mesengr <hello@mesengr.com>'
//   NOTIFY_EMAIL    — where lead notifications land (defaults to site.email)

const FROM = process.env.EMAIL_FROM ?? `Mesengr <onboarding@resend.dev>`;
export const NOTIFY = process.env.NOTIFY_EMAIL ?? site.email;

let client: Resend | null = null;

function resend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  client ??= new Resend(key);
  return client;
}

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ ok: boolean; simulated?: boolean; error?: string }> {
  const r = resend();
  if (!r) {
    // Local/dev without a key: log instead of failing so the site stays usable
    console.warn(`[email simulated] to=${to} subject="${subject}" (set RESEND_API_KEY to send for real)`);
    return { ok: true, simulated: true };
  }
  const { error } = await r.emails.send({
    from: FROM,
    to,
    subject,
    html,
    replyTo,
  });
  if (error) {
    console.error("[email failed]", error);
    return { ok: false, error: error.message };
  }
  return { ok: true };
}

// Shared shell so every mail matches the brand
export function emailLayout(title: string, body: string): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f7f8fa;font-family:Inter,Segoe UI,Arial,sans-serif;color:#0f172a;">
    <div style="max-width:560px;margin:0 auto;padding:32px 20px;">
      <p style="font-size:22px;font-weight:700;margin:0 0 24px;">Mesengr<span style="color:#d4af37;">.</span></p>
      <div style="background:#ffffff;border:1px solid rgba(15,23,42,0.08);border-radius:20px;padding:32px;">
        <h1 style="font-size:20px;margin:0 0 16px;">${title}</h1>
        ${body}
      </div>
      <p style="font-size:12px;color:#64748b;margin:24px 0 0;text-align:center;">
        ${site.name} · ${site.email} · ${site.phone}<br/>
        <a href="${site.url}" style="color:#d4af37;">${site.url.replace("https://", "")}</a>
      </p>
    </div>
  </body>
</html>`;
}

export const P = (text: string) =>
  `<p style="font-size:14px;line-height:1.7;color:#334155;margin:0 0 14px;">${text}</p>`;

export const CTA = (href: string, label: string) =>
  `<p style="margin:24px 0 8px;"><a href="${href}" style="display:inline-block;background:#d4af37;color:#0b0f19;text-decoration:none;font-weight:600;font-size:14px;padding:12px 28px;border-radius:999px;">${label}</a></p>`;

// Escape user-provided strings before interpolating into HTML
export function esc(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
