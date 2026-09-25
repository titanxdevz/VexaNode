# VexaNode Docs — Index & Changelog

## Purpose
Single source of truth for the VexaNode website overhaul (UX, dark+light theming, SEO,
structured data, accessibility, performance). Docs are written **before** implementing an
area, then updated to match what shipped. See [BRIEF.md](../BRIEF.md) for full scope/rules.

## Doc index
| File | Topic |
|---|---|
| [research-log.md](research-log.md) | Every search/fetch (query, URL, date, takeaway) |
| [competitors.md](competitors.md) | 8–10 competitor breakdown + gap analysis |
| [uiux.md](uiux.md) | UX principles, page-by-page audit, IA, CTA, states |
| [design-system.md](design-system.md) | Tokens, dark+light palette, type, spacing, contrast |
| [seo.md](seo.md) | Technical SEO rules + per-page title/meta/canonical table |
| [keywords.md](keywords.md) | Keyword/search-intent list mapped to pages |
| [structured-data.md](structured-data.md) | JSON-LD per page + validation |
| [customer-interaction.md](customer-interaction.md) | Support channels, onboarding, trust |
| [accessibility.md](accessibility.md) | WCAG 2.2 AA checklist per page |
| [performance.md](performance.md) | Core Web Vitals / Lighthouse per page+theme |
| [content.md](content.md) | Copy guidelines + claims register (every claim + source) |
| [audit.md](audit.md) | QA results per loop iteration |
| [todo-real-data.md](todo-real-data.md) | What needs real info from the owner |

## Project summary
- Stack: Next.js 16 (App Router), React 19, Tailwind CSS v4, framer-motion, next-themes.
- Routes: 28 `page.tsx` (see [seo.md](seo.md) for the full list).
- Theming: CSS-variable design tokens (`--vx-*`) in `app/globals.css`, toggled via
  `.dark` class (next-themes, `attribute="class"`). Light default = Anthropic-inspired
  ivory; dark = ink. Toggle component: `app/components/ThemeToggle.tsx`.

## Changelog
### Loop 11 — 2026-09-25
- Added **Lighthouse CI** config (`lighthouserc.json`, desktop preset; a11y/best-practices/SEO
  asserted ≥0.90) + run instructions in [performance.md](performance.md). This is the path to
  close Condition 3 — run `npx @lhci/cli autorun` in an environment with Chrome (owner/CI).

### Loop 10 — 2026-09-24
- **Condition 2 complete (structured data):** Product/Offer JSON-LD now on **all** commercial
  pages — `/webhosting` (GBP from config) + `/discord`, `/games`, `/minecraft`, `/databases`,
  `/samp`, `/hytale`, `/lavalink` (INR "from" prices, owner-confirmed real). `/vps` + `/dedicated`
  are Discord-CTA pages with no plans (Service + Breadcrumb only). `tsc` 0, lint clean on all.

### Loop 9 — 2026-09-24
- **`next build` is GREEN (exit 0); ESLint 0 errors (was 74); `tsc` 0.** Condition 4 met
  (1 non-blocking `<img>` perf warning remains). Fixed `any` types (fonts.d.ts, api routes,
  i18n, plan handlers), react-hooks immutability (globe refs, `location.assign`), and mount
  `setState` effects — all behavior-preserving. All routes prerender; sitemap/robots/OG
  image generate. See [audit.md](audit.md) Loop 9.

### Loop 8 — 2026-09-24
- Fixed a build-blocking JSX error (`react/no-unescaped-entities` in `/team`). `tsc` remains
  exit 0 repo-wide.
- **Decision logged** ([structured-data.md](structured-data.md)): Product/Offer JSON-LD is
  deferred for the 8 non-webhosting commercial pages because their prices are hardcoded in
  client components and **unconfirmed** — emitting merchant structured data with unverified
  prices would violate the real-data rule. Will add once the owner confirms prices.
- Re-checked DoD: conditions 1, 5, 6, 7, 8 hold; 2 mostly (meta on all routes, Breadcrumb on
  all commercial pages, Product/Offer on `/`+`/webhosting`); **3** blocked (no Lighthouse
  tooling here); **4** blocked by pre-existing lint in backend/context/animation files whose
  fix conflicts with the frontend-only scope (condition 8) — awaiting owner sign-off.

### Loop 7 — 2026-09-24
- **All page bodies themed** (light+dark) via 6 parallel agents → every route responds to
  the theme toggle. `/docs` fully redesigned to landing quality (functional filter, real
  links only). `/contact` reworked with owner's real address/phone/email (form removed).
- Real contact details added to Organization JSON-LD; BreadcrumbList on all commercial
  pages; over-long SEO titles shortened to <60 (minecraft, databases, dedicated, samp,
  hytale, blog).
- Verified: `tsc` exit 0 repo-wide; 0 `href="#"` dead links; 27/28 routes HTTP 200
  (`/blogs` plural is an unlinked 404 — `/blog` is the index).
- Remaining: Lighthouse (no tooling here), ESLint 24 errors/67 warnings (mostly
  pre-existing, out-of-scope files), Product/Offer JSON-LD on the other commercial pages.
  See [audit.md](audit.md) Loop 7 + [todo-real-data.md](todo-real-data.md).

### Loop 6 — 2026-09-24
- **Structured data + real-data.** Added BreadcrumbList JSON-LD to `/lavalink`, `/hytale`,
  `/samp` → all 9 commercial pages now have Service + Breadcrumb. Removed fabricated meta
  claims (lavalink "99.9% uptime guarantee", hytale "best…/24/7 uptime") and shortened
  hytale's >60-char title. Verified via dev server (BreadcrumbList renders; title updated).

### Loop 5 — 2026-09-24
- **Structured data.** Added `generateProductSchema` (Product + Offer[]) to `lib/seo.ts` —
  enforces positive real prices + ISO-4217 currency, skips invalid offers. Wired it into
  `/webhosting` using **real config prices** (GBP); verified rendered JSON-LD
  (`"price":2.99,"priceCurrency":"GBP"` …). Service + BreadcrumbList already present there.
- Verified: `tsc` clean; `/webhosting` emits valid Product/Service/Breadcrumb JSON-LD.
- Pattern established to roll Product/Offer + Breadcrumb to the other commercial pages.

### Loop 4 — 2026-09-24
- **Phase 3 (SEO) — per-page metadata now on every route.** 13 routes already had metadata;
  the 15 remaining routes were `"use client"` pages that can't export `metadata`, so added a
  co-located server `layout.tsx` per route (about, affiliates, aup, contact, docs, domains,
  free-bot-hosting, free-bot-hosting-policy, fup, partners, privacy-policy, refund-policy,
  sla, team, terms-of-services) using `constructMetadata` → unique title (<60), description
  (<160), canonical, Open Graph + Twitter. Verified rendering via dev server (200 + correct
  `<title>`/`<meta description>`). See [seo.md](seo.md).
- Verified: `tsc` clean; new routes return HTTP 200 with correct meta.

### Loop 3 — 2026-09-24
- **Condition 7 (real-data) — landing page cleaned.** Removed every fabricated numeric
  claim from the home page: uptime %, "3.2 Tbps", "7 GB/s", "5.7 GHz", "7,000 MB/s",
  "sub-20ms", "30s deploy", "450+ verified reviews"/star aggregate, per-city CPU+ping,
  "24/7", "thousands of…". Replaced with honest qualitative copy or deleted. See
  [content.md](content.md) claims register + [audit.md](audit.md) Loop 3.
- Individual testimonial quotes kept but header relabeled "What our community says";
  consent still to confirm ([todo-real-data.md](todo-real-data.md)).
- Verified: `tsc` clean, ESLint clean on all edited files, dev HTTP 200.

### Loop 2 — 2026-09-24
- **Phase 2 started.** Themed the shared **Navbar** and **Footer** with `vx-*` tokens →
  every route's chrome now responds to dark/light. Navbar Client-area CTA switched to the
  accessible `vx-btn-accent`; removed 3 pre-existing unused imports (lint-clean).
- **Real-data fix**: Footer's "All Systems Operational" live-status assertion (with fake
  ping) replaced by a neutral "Server Status" link (condition 7).
- Added accessible accent tokens + global `:focus-visible` and `prefers-reduced-motion`
  rules (see [design-system.md](design-system.md), [accessibility.md](accessibility.md)).
- Verified: `tsc` clean, ESLint clean on changed files, dev server HTTP 200, no compile
  errors. See [audit.md](audit.md) Loop 2.

### Loop 1 — 2026-09-24
- Reconstructed `BRIEF.md` (no brief existed in repo).
- Phase 1 research complete: 3 research agents covered 10 competitor brands + official
  docs (Google Search Central, schema.org, WCAG 2.2, OG, web.dev CWV, Pterodactyl,
  Next.js). Logged in [research-log.md](research-log.md) & [competitors.md](competitors.md).
- Landing page (`/`) already converted to dark+light `vx-*` tokens with animated theme
  toggle in navbar (prior work this session).
- Key research flags: **FAQPage rich result discontinued (Google, May 2026)** and
  **WebSite sitelinks searchbox removed (2024)** — markup stays valid schema but yields no
  Google rich result. Twitter/X card spec could not be fetched (402) — treat as unverified.
- Next loops: extend tokens to Navbar/Footer + all 28 routes (Phase 2); per-page SEO +
  JSON-LD (Phase 3); verify + Lighthouse (Phase 4).

## Verification gaps (honest status)
- **Lighthouse**: no headless-browser/Lighthouse tooling is available in this environment.
  Scores in [performance.md](performance.md) are marked `NOT RUN` until the owner (or CI)
  runs Lighthouse. We implement to the documented CWV/Lighthouse best practices meanwhile.
- **Live console-error / screen-reader checks**: require a browser; tracked as manual TODO.
