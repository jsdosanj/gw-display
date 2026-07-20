# Security Policy

This is a bilingual Sikh heritage kiosk/PWA (Astro + Cloudflare Workers)
with no user accounts, no login, and no PII collected. The only network
call beyond static assets is a best-effort, anonymous analytics ping
(a random per-device ID + current view name) to `/api/analytics`; see
`src/pages/api/analytics.ts`.

## Reporting a Vulnerability

If you find a security issue in this repository (dependency vulnerability,
exposed credential, an unescaped-output/XSS pattern, unsafe handling of
outbound links, etc.), please open a private report via GitHub's
**Security** tab → **Report a vulnerability**, rather than a public issue.
This repo has private vulnerability reporting enabled.

## Supported Versions

Only the `main` branch is maintained; there are no released version
branches to backport fixes to.
