# UI/UX Audit & Principles

## Purpose
UX principles (from research) + a page-by-page audit and IA plan. Sources: competitor
patterns ([competitors.md](competitors.md)) and general UX heuristics (NN/g, Baymard —
to be cited inline as specific findings are added).

## Principles
- One clear primary CTA per view; consistent placement (hero + pricing).
- Pricing clarity: plan name, headline spec (RAM for MC), price+period, "Most Popular"
  highlight, single CTA; billing-term toggle only if multiple real terms exist.
- Trust near decision points — but only real trust facts.
- Every interactive state designed: hover, focus, active, disabled, loading, empty, error.
- Responsive 320–1920px; semantic HTML; keyboard-first; reduced motion.

## Information architecture
- Primary nav (from `config/sections/navigation.json`): services (Minecraft, Games, VPS,
  Discord, Lavalink, Hytale, SA-MP, Dedicated, Databases, Web Hosting, Domains), Company
  (About, Team, Partners, Affiliates, Blog), Support (Docs, Contact), Legal.
- Footer mirrors this in 4–6 groups + Discord + legal.

## Page-by-page audit (status: todo until themed+reviewed)
| Route | Theme (light) | Primary CTA | States | Notes |
|---|---|---|---|---|
| `/` | ✅ done | Try Now → #pricing | partial | stats need real data ([content.md]) |
| `/minecraft` | todo | order | todo | headline spec = RAM |
| `/games` | todo | pick game | todo | game grid |
| `/vps` | todo | order | todo | OS selection |
| `/discord`, `/free-bot-hosting` | todo | deploy | todo | label demo panel |
| `/lavalink`, `/hytale`, `/samp`, `/dedicated`, `/databases`, `/webhosting`, `/domains` | todo | order | todo | — |
| `/about`, `/team`, `/partners`, `/affiliates` | todo | contact | todo | company |
| `/contact` | todo | submit | form states! | validate a11y of form |
| `/blog`, `/blogs`, `/blog/[slug]`, `/blogs/[slug]` | todo | read | todo | article layout |
| `/docs` | todo | browse | todo | docs index |
| `/sla`,`/aup`,`/fup`,`/terms-of-services`,`/privacy-policy`,`/refund-policy` | todo | — | todo | legal readability |
| 404 | verify exists | home | todo | add themed not-found |

## Decisions
- Extend `vx-*` tokens to Navbar/Footer + all routes; keep dark-hero/light-body hybrid on
  marketing pages, full theme response elsewhere.
- Add a themed `app/not-found.tsx` if missing.
- Label demo/mock UI (panel/console/coins) explicitly.

## Implementation checklist
- [x] Theme Navbar + Footer with tokens (shared → affects all pages). Client-area CTA now
      uses accessible `vx-btn-accent`; footer "All Systems Operational" assertion removed
      (relabeled "Server Status").
- [ ] Theme each route; verify one H1, states, responsiveness.
- [ ] Audit `/contact` form for labels/errors/focus.
- [ ] Confirm/So add `not-found.tsx`.

## Open questions / needs real data
- Which services are actually offered/live (some pages may be placeholders) — owner.
