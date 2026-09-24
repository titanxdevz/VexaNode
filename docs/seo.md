# SEO Plan

## Purpose
Technical SEO rules (from official docs) + a per-page metadata table. Implemented via the
existing `lib/seo.ts` `constructMetadata()` helper (Next.js Metadata API). Source rules in
[research-log.md](research-log.md).

## Rules (from Google Search Central / Next.js, accessed 2026-09-24)
- **Title**: no hard limit, but keep concise & unique; brand suffix " — VexaNode" or " | VexaNode". Aim ≤ 60 chars so it rarely truncates.
- **Meta description**: unique per page, human-readable, concrete; aim ≤ 160 chars.
- **Canonical**: self-referential absolute URL (`constructMetadata` already builds this).
- **OG**: og:title, og:type, og:image (1200×630), og:url required (helper sets these).
- **Twitter**: summary_large_image (helper sets these; spec unverified — 402).
- **One H1 per page**; logical H2/H3; descriptive `alt`; descriptive internal link text.
- **robots.txt** declares sitemap; **noindex** only via meta, never rely on robots.txt to canonicalize.

## Per-page metadata table (planned; ≤60 title / ≤160 desc)
Status legend: ✅ has metadata via constructMetadata · ⚠️ verify/needs unique copy · ❌ missing.

| Route | Planned title | Status |
|---|---|---|
| `/` | VexaNode — Minecraft, VPS & Discord Bot Hosting | ✅ |
| `/minecraft` | Minecraft Server Hosting — VexaNode | ⚠️ |
| `/games` | Game Server Hosting — VexaNode | ⚠️ |
| `/vps` | Cloud VPS Hosting — VexaNode | ⚠️ |
| `/discord` | Discord Bot Hosting — VexaNode | ⚠️ |
| `/lavalink` | Lavalink Audio Node Hosting — VexaNode | ⚠️ |
| `/hytale` | Hytale Server Hosting — VexaNode | ⚠️ |
| `/samp` | SA-MP Server Hosting — VexaNode | ⚠️ |
| `/dedicated` | Dedicated Servers — VexaNode | ⚠️ |
| `/databases` | Managed Database Hosting — VexaNode | ⚠️ |
| `/domains` | Domain Registration — VexaNode | ⚠️ |
| `/webhosting` | Web Hosting — VexaNode | ⚠️ |
| `/free-bot-hosting` | Free Discord Bot Hosting — VexaNode | ⚠️ |
| `/about` | About VexaNode | ⚠️ |
| `/contact` | Contact & Support — VexaNode | ⚠️ |
| `/team` | Our Team — VexaNode | ⚠️ |
| `/partners` | Partners — VexaNode | ⚠️ |
| `/affiliates` | Affiliate Program — VexaNode | ⚠️ |
| `/blog`, `/blogs` | Blog — VexaNode | ⚠️ |
| `/blog/[slug]`, `/blogs/[slug]` | {post title} — VexaNode | ⚠️ (generateMetadata) |
| `/docs` | Documentation — VexaNode | ⚠️ |
| `/sla` | Service Level Agreement — VexaNode | ⚠️ |
| `/aup` | Acceptable Use Policy — VexaNode | ⚠️ |
| `/fup` | Fair Use Policy — VexaNode | ⚠️ |
| `/terms-of-services` | Terms of Service — VexaNode | ⚠️ |
| `/privacy-policy` | Privacy Policy — VexaNode | ⚠️ |
| `/refund-policy` | Refund Policy — VexaNode | ⚠️ |

Legal/utility pages should carry `noIndex` only if the owner wants them out of the index
(default: indexable). `/free-bot-hosting` etc. must not claim "free" unless the offer is real.

## Decisions
- Keep `lib/seo.ts` as the single metadata factory; add `export const metadata` (or
  `generateMetadata`) to every route that lacks unique copy.
- Titles describe the service only — **no stats/superlatives** ("best", "cheapest",
  "99.9%") unless sourced. See [content.md](content.md) claims register.

## Implementation checklist
- [ ] Audit each route's current metadata (grep `constructMetadata`/`export const metadata`).
- [ ] Add unique title+desc per route from the table.
- [ ] Confirm one H1 per page during Phase 2 theming.
- [ ] Verify `app/sitemap.ts` lists all public routes; `app/robots.ts` references sitemap.
- [ ] Validate OG image exists at `/logo.png` (or add dedicated 1200×630 OG asset — owner).

## Open questions / needs real data
- Dedicated 1200×630 OG image (currently reuses `/logo.png`, 702×687) — see
  [todo-real-data.md](todo-real-data.md).
- Which legal pages (if any) should be `noindex`.
