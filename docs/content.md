# Content Guidelines & Claims Register

## Purpose
Copy/tone rules + a **claims register**: every factual claim shown on the site must have a
source (our code/config, or a URL). Unsourced claims are removed or moved to
[todo-real-data.md](todo-real-data.md). Prevents fabricated stats (HARD RULE 1).

## Tone & terminology
- Voice: clear, confident, technical-but-friendly. No hype superlatives ("best/cheapest/
  #1") unless sourced/qualified. Reflect the user's request style.
- Use correct Pterodactyl terms where relevant (Panel, Node, Server, Egg, Nest, Wings,
  Allocation) — source https://pterodactyl.io/project/terms.html (2026-09-24).
- Prices always with currency + period; never round competitor prices into ours.

## Claims register
Status: ✅ sourced · ⚠️ needs verification · ❌ remove/relabel until real.

| Claim (as shown / proposed) | Where | Source | Status |
|---|---|---|---|
| Plan prices (£ values, RAM/CPU/NVMe specs) | pricing sections | `app/config/sections/*.json` (our config) | ⚠️ confirm current/real |
| "Discord" support link `discord.gg/dJpMDfgUQq` | nav/hero/footer | our code | ✅ |
| Client area `billing.vexanode.gg` | navbar | our code | ⚠️ confirm live |
| "99.95% Uptime SLA" (landing hero/CTA) | `/` | none found | ✅ **REMOVED** (→ "Uptime SLA", links to /sla) |
| "3.2 Tbps DDoS Shield" | `/` FeatureGrid + hero | none found | ✅ **REMOVED** (→ "DDoS Protection/Filtering") |
| "7 GB/s NVMe", "sub-20ms", "30s/instant deploy", "5.7 GHz", "7,000 MB/s" | `/` hero/features/products/CTA | none found | ✅ **REMOVED** (qualitative copy) |
| "based on 450+ verified reviews", "Excellent ★★★★★" | `/` Testimonials | none found | ✅ **REMOVED** (aggregate rating deleted) |
| "24/7 support", "Join thousands…" | `/` hero/CTA | none found | ✅ **REMOVED** (→ "Discord support") |
| Named testimonials (Gaurav, Majid, …) | `/` Testimonials | unverified | ⚠️ quotes kept, header now "community feedback"; confirm real consent |
| Datacenter per-city CPU + ping (Mumbai 8ms, …) | `/` GlobeSection | none found | ✅ **REMOVED** (city/country only; regions still ⚠️ unverified) |
| "AMD Ryzen 9 & EPYC" hardware | `/` | config/infra? | ⚠️ confirm real hardware |

## Decisions
- Items marked ❌ are **fabrication risks**. Until sourced, they must be (a) removed, (b)
  replaced with real data, or (c) clearly framed as illustrative/demo. Tracked in
  [todo-real-data.md](todo-real-data.md).
- No `aggregateRating`/review JSON-LD until a real review source exists (see
  [structured-data.md](structured-data.md)).

## Implementation checklist
- [x] Landing page fabricated stats removed (Loop 3).
- [x] Page-body fabricated stats neutralized across all commercial/company pages by the
      Loop-7 theming agents (TPS, GHz, MB/s, ms, "24/7", "best", review counts) — see each
      agent report in [audit.md](audit.md).
- [x] Fabricated meta claims softened (lavalink/hytale/dedicated) + over-long titles fixed.
- [x] Grep `href="#"` → 0 dead links.
- [ ] Resolve ⚠️ rows (region names, hardware descriptors, testimonial consent, plan
      prices) — owner input pending in [todo-real-data.md](todo-real-data.md).
- [ ] Re-grep stat-like strings each loop (last run: only config-sourced specs remain).

## Open questions / needs real data
- All ❌ rows require owner input — consolidated in [todo-real-data.md](todo-real-data.md).
