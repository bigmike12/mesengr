import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Mesengr — We build digital experiences that grow businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand mark as an inline SVG data URI (Satori renders these reliably)
const mark = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 512 512"><rect width="512" height="512" rx="116" fill="#111827"/><path d="M133 350L133 162L228 252L323 162L323 350" stroke="#D4AF37" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="372" cy="355" r="18" fill="#D4AF37"/></svg>`,
)}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0B0F19 0%, #111827 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* gold glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: 320,
            width: 700,
            height: 500,
            background: "radial-gradient(circle, rgba(212,175,55,0.28) 0%, rgba(212,175,55,0) 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={96} height={96} alt="" />
          <div style={{ display: "flex", fontSize: 48, fontWeight: 700, color: "#F7F8FA" }}>
            Mesengr<span style={{ color: "#D4AF37" }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#F7F8FA",
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
              display: "flex",
            }}
          >
            We build digital experiences that grow businesses.
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#8b94a7", display: "flex" }}>
            Digital growth partner for SMEs
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 28, color: "#D4AF37", fontWeight: 600 }}>
            {site.url.replace("https://", "")}
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#8b94a7" }}>
            Strategy · Design · Development · AI
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
