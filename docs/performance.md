# Performance (Core Web Vitals / Lighthouse)

## Purpose
Track performance to the Core Web Vitals thresholds and Lighthouse 90+ goal. Thresholds
from web.dev (accessed 2026-09-24).

## Thresholds (web.dev, 75th percentile)
| Metric | Good | Needs improvement | Poor |
|---|---|---|---|
| LCP | ≤ 2.5s | 2.5–4.0s | > 4.0s |
| INP | ≤ 200ms | 200–500ms | > 500ms |
| CLS | ≤ 0.1 | 0.1–0.25 | > 0.25 |

## Findings (static review of the codebase)
- Next.js 16 App Router + Turbopack; fonts via `next/font` (Geist, Orbitron, Quicksand)
  with `display: swap` and selective `preload` ✅.
- Heavy libs present: `framer-motion`, `three`, `react-globe.gl`, `cobe`, `tesseract.js`,
  `react-confetti`. `three`/`react-globe.gl` are large — ensure they load only on routes
  that use them (GlobeSection on `/`). **Action**: confirm dynamic import / route-splitting.
- Images: `next/image` used in places; ensure explicit width/height + modern formats +
  lazy loading everywhere (audit during Phase 2).
- `next.config.ts` sets custom Cache-Control for static assets (dev warning only).

## Lighthouse scores
**Status: NOT RUN.** No headless-browser/Lighthouse tooling is available in this
environment. Scores must be captured by the owner or CI (e.g. `lhci` / PageSpeed Insights)
per page, per theme (dark+light), mobile+desktop, then recorded here.

| Page | Theme | Device | Perf | A11y | BP | SEO | Date |
|---|---|---|---|---|---|---|---|
| (pending) | — | — | — | — | — | — | — |

## Decisions
- Lazy/dynamically import `three`/`react-globe.gl`/`cobe`/`tesseract.js`/`react-confetti`
  so they don't ship on pages that don't use them.
- Enforce explicit dimensions on all images to protect CLS.
- Keep animations subtle + GPU-friendly (`transform`/`opacity`), honor reduced motion.

## Implementation checklist
- [ ] Audit bundle: which routes import three/globe; dynamic-import them.
- [ ] Audit all `<img>`/`Image` for dimensions, formats, lazy loading.
- [ ] Owner/CI: run Lighthouse and fill the table; fix anything <90 and re-run.

## Open questions / needs real data
- Need CI or owner to run Lighthouse (not runnable here).
