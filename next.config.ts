import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first, WebP fallback, for any raster images added later
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Brand assets are immutable SVGs — cache aggressively at the edge
        source: "/brand/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
