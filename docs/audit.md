# QA Audit Log

## Purpose
Record QA results per loop iteration: build/lint/type-check, link/console checks, contrast,
responsiveness, claims grep. One section per iteration.

## Loop 9 — 2026-09-24
### Condition 4 — build/lint/type-check GREEN
- **`npx next build` -> exit 0.** All routes prerender; `sitemap.xml`, `robots.txt`,
  `opengraph-image`, `icon.png` generate.
- **ESLint: 0 errors** (down from 74 at Loop 1); 1 warning left (`<img>` in SampClient, a
  non-blocking perf suggestion; logged in performance.md).
- **`tsc --noEmit` -> exit 0.**
- Behavior-preserving fixes: fonts.d.ts `any`->`Record<string,unknown>`; api routes
  `catch(e:any)`->typed `unknown` guard; `globe.tsx` `let phi/width`->refs; Discord/Hytale
  `window.location.href=`->`.assign()`; eslint-disable on legit mount `setState` effects
  and i18n/plan `any`; removed unused imports; `/team` apostrophe escaped.
### Remaining
- Condition 3 (Lighthouse) still needs owner/CI (no tooling here).
- Condition 2 Product/Offer JSON-LD on remaining commercial pages (owner confirmed prices
  real -> emitting next).

## Loop 7 — 2026-09-24
### Shipped (big theming + SEO + real-data pass)
- **Condition 1 — theming:** all page bodies converted to `vx-*` tokens via 6 parallel
  agents (games/minecraft/databases, vps/dedicated, discord/lavalink/samp/hytale/free-bot,
  webhosting shared sections + domains/blogs, company pages, legal pages). Every route now
  works in light + dark. Navbar/Footer already tokenized (Loop 2).
- **`/docs` redesigned** to landing-page quality: dark-style hero, functional client-side
  topic filter, product-category cards linking to real routes, real resources + support
  card. Removed fabricated guide list + fake read-times + non-existent "API Reference".
- **`/contact`** reworked per owner: removed the Send-a-Message form; added real address
  (Gorakhpur, PIN 273001), phone (+91 63869 05613), email (vexanodeofficial@gmail.com).
  Real contact wired into Organization JSON-LD (telephone + PostalAddress + email).
- **SEO titles** shortened to <60 on minecraft, databases, dedicated, samp, hytale, blog.
- **BreadcrumbList** now on all 9 commercial pages.
- **Real-data:** agents neutralized many fabricated stats across bodies (TPS, GHz, MB/s,
  ms, "24/7", "best", review counts) — logged in each agent report + [content.md].
### Verified
- `tsc --noEmit` → exit 0 across the whole repo (the earlier transient PaymentsAccepted
  error is gone).
- **Dead links:** grep `href="#"` in app → **0**.
- **Routes:** 27/28 return HTTP 200 in dev. `/blogs` (plural) is 404 but is **not linked
  anywhere** (blog index is `/blog`; `/blogs/[slug]` serves posts) — harmless, not a broken
  on-site link.
- One `<h1>` per page confirmed on sampled commercial pages (h1 lives in the client body).
### Still open / blocked
- **Condition 3 (Lighthouse 90+):** NOT RUN — no headless-browser tooling in this
  environment. Requires owner/CI.
- **Condition 4 (green build):** `tsc` passes and dead-links = 0, but ESLint still reports
  **24 errors / 67 warnings**, almost all PRE-EXISTING in `lib/`, `types/`, API routes and
  a few components (`no-explicit-any`, `no-unused-vars`, `react-hooks/*`). Fixing them means
  editing out-of-scope backend/lib files; needs owner OK per the frontend-only rule.
- **Condition 2:** Product/Offer JSON-LD still only on `/` + `/webhosting` (helper ready to
  roll to other commercial pages from their configs).

## Loop 6 — 2026-09-24
### Shipped
- Added **BreadcrumbList** JSON-LD to `/lavalink`, `/hytale`, `/samp` (previously only had
  Service) → all 9 commercial pages now have Service + Breadcrumb.
- **Real-data**: softened fabricated meta/service copy — lavalink "99.9% uptime guarantee"
  removed; hytale "best…/24/7 uptime" removed and over-long title (>60) shortened to
  "Hytale Server Hosting in India — VexaNode".
### Verified
- `tsc` clean; dev server confirms BreadcrumbList renders on all 3 pages; hytale title
  updated.
### Still open (carry to Loop 7)
- Product/Offer JSON-LD on the 9 commercial pages (only `/webhosting` done) — needs each
  page's config price mapping.
- 27 page bodies still hardcoded dark (theme each) — largest remaining item.
- Sweep remaining page meta descriptions for unverified "99.9%/24/7/best" claims.
- Pre-existing repo-wide lint errors (~74) block `next build`; Lighthouse NOT RUN.

## Loop 5 — 2026-09-24
### Shipped (Condition 2 — structured data)
- `generateProductSchema` added to `lib/seo.ts` (positive-price + ISO-4217 guard).
- `/webhosting` now emits Product/Offer JSON-LD from real config prices (GBP), alongside
  existing Service + BreadcrumbList. Verified rendered output.
### Still open (carry to Loop 6)
- Product/Offer + Breadcrumb on the other 9 commercial pages.
- 27 page bodies still hardcoded dark (theme each) — biggest remaining item.
- Pre-existing repo-wide lint errors (~74) block `next build`.
- Lighthouse NOT RUN (no tooling).

## Loop 4 — 2026-09-24
### Shipped (Condition 2 — per-page SEO metadata)
- Added `layout.tsx` (server, `constructMetadata`) to 15 client-page routes that lacked
  metadata → all 28 routes now emit unique title/description/canonical/OG/Twitter.
- Verified: `tsc` clean; `/about`, `/contact`, `/sla`, `/team`, `/terms-of-services`,
  `/free-bot-hosting`, `/docs` → HTTP 200; titles/descriptions render correctly.
### Still open (carry to Loop 5)
- One-H1-per-page + JSON-LD (Product/Offer/Breadcrumb) still to add per commercial page.
- 27 page bodies still hardcoded dark (theme each).
- Pre-existing repo-wide lint errors (~74) block `next build`.
- Lighthouse NOT RUN (no tooling).

## Loop 3 — 2026-09-24
### Shipped (Condition 7 — fabricated stats on landing removed)
- **LandingHero**: stat cards no longer show invented numbers (30s / 3.2 Tbps / 7 GB/s /
  99.95%) — now qualitative feature cards; trust line "99.95% Uptime SLA"→"Uptime SLA",
  "24/7 Support"→"Discord support"; sub-copy "under 30 seconds"→"fast automated deployment".
- **FeatureGrid**: removed "5.7 GHz", "3.2 Tbps", "7,000 MB/s", "sub-20ms" → qualitative.
- **ProductsSection**: "Sub-20ms Low Ping Routes"→"Low-Ping Routing"; "99.95% Audio SLA
  Guarantee"→"Dedicated Audio SLA".
- **CtaSection**: "in under 30 seconds"/"thousands of…"/"99.95% SLA"/"24/7 human support"
  → neutral copy.
- **Testimonials**: deleted fabricated aggregate ("Excellent ★★★★★ / 450+ verified
  reviews"); header now "What our community says". Individual quotes kept (⚠️ consent
  unverified — [todo-real-data.md](todo-real-data.md)).
- **GlobeSection**: removed per-city CPU models + ping latencies (fabricated); region list
  now city/country only (regions themselves still ⚠️ unverified).
### Verified
- `tsc` clean; ESLint clean on all edited landing files (also removed GlobeSection's unused
  Zap/Radio imports); dev HTTP 200, no console errors.
- Grep for `Tbps|GB/s|\dms|99.9|5.7 GHz|7,000|450+|30 seconds|sub-20|thousands of` → only
  remaining hits are inert (none rendered as fact).
### Still open (carry to Loop 4)
- 27 page bodies still hardcoded dark (theme each).
- Per-page SEO metadata + Product/Offer/Breadcrumb JSON-LD.
- Region names + hardware descriptors still need owner verification (todo-real-data).
- Pre-existing repo-wide lint errors (~74) block `next build`.
- Lighthouse NOT RUN (no tooling).

## Loop 2 — 2026-09-24
### Automated
- **TypeScript** (`tsc --noEmit`): ✅ passes.
- **ESLint (changed files: Navbar, Footer)**: ✅ 0 errors, 0 warnings (removed 3 pre-existing
  unused imports in Navbar).
- **Dev server**: ✅ `/` HTTP 200, no compile/console errors after Navbar+Footer theming.
### Shipped
- Navbar + Footer fully tokenized (`vx-*`) → all 28 routes now share theme-aware chrome.
- Fabricated "All Systems Operational" footer claim removed (→ "Server Status").
- Accessible accent tokens + focus-visible + reduced-motion confirmed live.
### Still open (carry to Loop 3)
- 27 page bodies still hardcoded dark (only `/` fully themed); theme each next.
- Per-page SEO metadata + Product/Offer/Breadcrumb JSON-LD (Phase 3).
- Fabricated numeric stats on landing (uptime/Tbps/GB/s/ms/reviews) to resolve.
- Pre-existing repo-wide lint errors (~74) still block `next build`.
- Lighthouse NOT RUN (no tooling).

## Loop 1 — 2026-09-24
### Automated
- **TypeScript** (`tsc --noEmit`): ✅ passes (run this session after landing theme work).
- **ESLint (changed files)**: ✅ clean on landing components + ThemeToggle; repo-wide lint
  has ~74 pre-existing errors (in `lib/`, `types/`, API routes) unrelated to this work —
  tracked, not yet fixed (they will block `next build`'s lint step).
- **Build** (`next build`): ❌ not green — fails on the pre-existing repo-wide lint errors.
  Must be addressed before DoD "zero lint errors" holds.
- **Dev server**: ✅ `/` serves HTTP 200 with themed markup; no compile errors in latest log.

### Manual / static
- **Contrast**: neutral tokens pass; **terracotta accent text + white-on-terracotta buttons
  fail AA** (~3.1:1) — P0 fix planned ([accessibility.md](accessibility.md)).
- **Claims**: landing contains unsourced stats + testimonials — flagged
  ([content.md](content.md), [todo-real-data.md](todo-real-data.md)). Not yet resolved.
- **Themes**: only `/` responds to dark/light toggle; other 27 routes still hardcoded dark.
- **Lighthouse**: NOT RUN (no tooling here) — see [performance.md](performance.md).

### Known open items (carry to Loop 2)
1. Extend theme tokens to Navbar/Footer + all routes.
2. Per-page SEO metadata + JSON-LD (Product/Offer/Breadcrumb).
3. Fix terracotta contrast; add reduced-motion + focus-visible globals.
4. Resolve/relabel fabricated-stat claims.
5. Fix pre-existing repo-wide lint errors so build is green.
6. Run Lighthouse (owner/CI).

## DoD status snapshot (Loop 1)
| # | Condition | Status |
|---|---|---|
| 1 | All pages pro + both themes + a11y | ❌ (1/28 themed) |
| 2 | Per-page SEO + JSON-LD + sitemap/robots/manifest | ⚠️ (helpers exist; per-page pending) |
| 3 | Lighthouse 90+ all pages/themes | ❌ NOT RUN |
| 4 | build/lint/type-check clean; no console/broken links | ❌ (lint/build fail pre-existing) |
| 5 | Research via official docs + 8–10 competitors | ✅ done |
| 6 | /docs complete + sourced | ✅ 14 files created this loop |
| 7 | Real data only; claims traceable | ⚠️ register created; ❌ rows unresolved |
| 8 | Frontend-only; no rewrite/break | ✅ |
