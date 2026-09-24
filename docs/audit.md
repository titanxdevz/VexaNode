# QA Audit Log

## Purpose
Record QA results per loop iteration: build/lint/type-check, link/console checks, contrast,
responsiveness, claims grep. One section per iteration.

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
