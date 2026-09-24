# Accessibility (WCAG 2.2 AA)

## Purpose
Track WCAG 2.2 AA conformance per component/page. Criteria + thresholds from W3C
(accessed 2026-09-24; see [research-log.md](research-log.md)).

## Key criteria we target
- **1.4.3 Contrast (AA)**: 4.5:1 normal, 3:1 large (≥18.66px, or ≥14pt/18.66px bold).
- **2.1.1 Keyboard (A)**: all interactive elements operable by keyboard.
- **2.4.7 Focus Visible (AA)**: visible focus indicator.
- **2.4.11 Focus Not Obscured (AA)**: focused element not fully hidden (e.g. by sticky nav).
- **2.5.8 Target Size (AA)**: ≥24×24 CSS px.
- **4.1.2 Name/Role/Value (A)**: proper labels/roles on controls.
- **2.3.3 Animation from Interactions (AAA)**: honor `prefers-reduced-motion` (we do this
  even though it's AAA, since brief requires reduced-motion support).

## Findings (current)
- Contrast: neutral text tokens pass (see [design-system.md](design-system.md)). **Open
  fails**: terracotta `#d97757` used as (a) small accent text and (b) white-on-terracotta
  button labels — measured ~3.06:1 and ~3.16:1, **below 4.5:1**. Fix: darker
  `--vx-accent-strong` for text/fills. **P0.**
- Focus rings: not yet standardized site-wide — need global `:focus-visible` style.
- `prefers-reduced-motion`: not yet globally honored (framer-motion animations run
  regardless) — need a global reduce rule + `useReducedMotion` where heavy.
- ThemeToggle has `aria-label` and is keyboard-operable ✅.
- Navbar mobile menu: verify focus trap + Esc close + `aria-expanded` (has `aria-label`).

## Per-area checklist (todo/in progress/done/verified)
| Area | Contrast | Keyboard | Focus visible | Reduced motion | Status |
|---|---|---|---|---|---|
| Design tokens | fixed faint; accent P0 | — | — | — | in progress |
| Landing `/` | ✅ text; ⚠️ accent | ✅ | ⚠️ | ❌ | in progress |
| Navbar/Footer | ⚠️ (dark, pending theme) | ✅ | ⚠️ | n/a | todo |
| Other 27 pages | pending theme | pending | pending | pending | todo |

## Decisions
- Introduce `--vx-accent-strong` (~`#c2410c`/`#b0532f`) for interactive fills + small accent
  text; keep `#d97757` for large/decorative only.
- Add to `globals.css`: global `:focus-visible` ring; `@media (prefers-reduced-motion:
  reduce)` that disables non-essential transitions/animations.

## Implementation checklist
- [x] Add reduced-motion + focus-visible global rules.
- [x] Define accessible accent tokens (`--vx-accent-text` / `--vx-accent-btn`).
- [ ] Swap terracotta text/fills to the accessible accent tokens in components.
- [ ] Verify keyboard nav + focus order on every page during Phase 2.
- [ ] Screen-reader smoke test (needs AT/browser — manual TODO, mark when done).

## Open questions / needs real data
- None blocking; owner sign-off on darker accent (also in [design-system.md]).
