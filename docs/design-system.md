# Design System

## Purpose
Define the theming tokens, palette (dark + light), and component rules so every page is
consistent and accessible. Palette is Anthropic-inspired (owner-chosen): ivory + ink +
terracotta. Tokens live in `app/globals.css` (`:root` = light, `.dark` = dark), toggled by
next-themes (`attribute="class"`).

## Tokens (`--vx-*`)
| Token | Light | Dark | Use |
|---|---|---|---|
| `--vx-surface` | `#faf9f5` | `#141413` | section base |
| `--vx-surface-alt` | `#f0eee6` | `#191817` | alternate section |
| `--vx-card` | `#ffffff` | `#1e1d1b` | cards/panels |
| `--vx-ink` | `#141413` | `#faf9f5` | headings / strong text |
| `--vx-ink-hover` | `#2a2926` | `#e9e7e0` | solid-button hover |
| `--vx-muted` | `#6b6a63` | `#a3a199` | body text |
| `--vx-muted2` | `#57564f` | `#c9c7bf` | secondary text |
| `--vx-faint` | `#78766e` | `#7c7a72` | faint labels |
| `--vx-line` | `#e8e6dc` | `rgba(255,255,255,.10)` | borders |
| accent (literal) | `#d97757` | `#d97757` | terracotta accent |

Utilities: `.vx-bg .vx-bg-alt .vx-card .vx-ink .vx-muted .vx-muted2 .vx-faint .vx-line
.vx-hover-ink .vx-solid` (solid inverts ink/surface for buttons). 0.35s color transition
on theme change.

## Contrast checks (WCAG 1.4.3, computed; verify with a tool)
| Pair | Ratio | Verdict |
|---|---|---|
| ink `#141413` on ivory `#faf9f5` | ~18.4:1 | ✅ AAA |
| muted `#6b6a63` on ivory | ~5.2:1 | ✅ AA |
| muted2 `#57564f` on ivory | ~7:1 | ✅ AAA |
| faint `#78766e` on ivory | ~4.5:1 | ✅ AA (was #b0aea5 ≈2.2:1 ❌ — FIXED) |
| terracotta `#d97757` text on ivory | ~3.06:1 | ⚠️ large text only; **fails** normal |
| white on terracotta button `#d97757` | ~3.16:1 | ❌ **fails** AA normal (13px bold) |
| terracotta `#d97757` on ink (dark) | ~6.0:1 | ✅ AA |

## Decisions
- Body/label text uses ink/muted/muted2/faint only (all pass on both themes).
- **Terracotta accent contrast fix (P0, tracked in [accessibility.md](accessibility.md))**:
  introduce `--vx-accent` (decorative, `#d97757`) and `--vx-accent-strong` (interactive
  fills + small accent text on light) at a darker terracotta (~`#c2410c`/`#b0532f`, ≥4.5:1
  with white). Swap component literals `#d97757` → tokens in the Phase-2 a11y pass.
- Restrained motion: subtle only; honor `prefers-reduced-motion` (add global rule).
- No glassmorphism/neon on light theme; soft shadows + `--vx-line` borders.

## Component rules
- Cards: `rounded-2xl/3xl`, `vx-card`, `border vx-line`, `shadow-sm` → hover `shadow-lg`.
- Primary button: `vx-solid` (auto-inverts) OR terracotta-strong fill with white text.
- Focus: visible ring on all interactive elements (WCAG 2.4.7) — add `focus-visible` ring.
- Targets ≥ 24×24px (WCAG 2.5.8).

## Implementation checklist
- [x] Tokens defined in globals.css; faint darkened for AA.
- [x] Added `--vx-accent` / `--vx-accent-text` / `--vx-accent-btn` tokens + `.vx-accent-text`
      / `.vx-btn-accent` utilities (accessible terracotta for text/fills).
- [x] Added global `prefers-reduced-motion` reduce rule.
- [x] Added global `:focus-visible` ring using accent.
- [ ] Swap component terracotta literals (`#d97757`) → `.vx-accent-text` / `.vx-btn-accent`
      where used for small text / button fills.
- [ ] Apply tokens to Navbar, Footer, and all 28 routes (Phase 2).

## Open questions / needs real data
- Owner sign-off on darkening terracotta for buttons/small text (needed for AA).
