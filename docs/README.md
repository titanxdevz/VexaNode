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
