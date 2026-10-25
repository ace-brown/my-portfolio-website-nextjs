import { createHash } from "node:crypto";
import type { NextConfig } from "next";

import { THEME_SCRIPT } from "./lib/theme-script";

const isDev = process.env.NODE_ENV !== "production";

// the only inline script on the site; allowed by hash instead of 'unsafe-inline'
const themeScriptHash = createHash("sha256")
  .update(THEME_SCRIPT)
  .digest("base64");

/*
 * Only the theme script may run inline, which relies on
 * `next build --webpack` (see package.json): Turbopack production builds and
 * the dev server inject their own inline bootstrap scripts, which change on
 * every build and would be blocked.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'sha256-${themeScriptHash}'`,
  // next/font, styled-jsx and motion set inline styles
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // production only: the dev server's own scripts trip the CSP and nosniff
  async headers() {
    return isDev ? [] : [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
