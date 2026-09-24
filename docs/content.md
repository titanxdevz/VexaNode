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
| "99.95% Uptime SLA" (landing hero/CTA) | `/` | none found | ❌ needs real SLA source |
| "3.2 Tbps DDoS Shield" | `/` FeatureGrid | none found | ❌ needs real infra source |
| "7 GB/s NVMe", "sub-20ms", "30s deploy" | `/` | none found | ❌ needs real benchmark |
| "based on 450+ verified reviews", "Excellent ★★★★★" | `/` Testimonials | none found | ❌ remove or replace with real review source |
| Named testimonials (Gaurav, Majid, …) | `/` Testimonials | unverified | ❌ confirm real consent/quotes or relabel |
| Datacenter regions/pings (Mumbai 8ms, …) | `/` GlobeSection | none found | ❌ needs real location/latency data |
| "AMD Ryzen 9 & EPYC" hardware | `/` | config/infra? | ⚠️ confirm real hardware |

## Decisions
- Items marked ❌ are **fabrication risks**. Until sourced, they must be (a) removed, (b)
  replaced with real data, or (c) clearly framed as illustrative/demo. Tracked in
  [todo-real-data.md](todo-real-data.md).
- No `aggregateRating`/review JSON-LD until a real review source exists (see
  [structured-data.md](structured-data.md)).

## Implementation checklist
- [ ] Resolve every ❌ row (remove, source, or relabel) before final sign-off.
- [ ] Grep the codebase for stat-like strings (`%`, `Tbps`, `ms`, `+ reviews`) and cross-
      check against this register each loop.

## Open questions / needs real data
- All ❌ rows require owner input — consolidated in [todo-real-data.md](todo-real-data.md).
