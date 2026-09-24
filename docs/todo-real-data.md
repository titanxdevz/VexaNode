# TODO — Real Data Needed From Owner

## Purpose
Everything the site currently states or needs, that we **cannot verify** from code/config
or a public source. Per HARD RULE 1, these must be provided as real data, removed, or
clearly labeled as demo before final sign-off. Nothing here may ship as fact until sourced.

## A. Claims currently on the site that are UNVERIFIED (fabrication risk)
These pre-exist in the landing components. Confirm real (with source) or we remove/relabel:
1. **Uptime**: "99.95% Uptime SLA" (hero, CTA, stat card). Real figure + where it's backed?
2. **DDoS**: "3.2 Tbps DDoS Shield". Real capacity + provider?
3. **Storage/latency/deploy**: "7 GB/s NVMe", "sub-20ms", "30s deploy". Real benchmarks?
4. **Reviews**: "Excellent ★★★★★ based on 450+ verified reviews" + named testimonials
   (Gaurav, Majid, Kunal, …). Real review source (Trustpilot/Google) + consent to quote?
5. **Datacenter regions + pings**: Mumbai 8ms, Delhi 7ms, Singapore 12ms, etc. Real
   locations + measured latencies?
6. **Hardware**: "AMD Ryzen 9 & EPYC". Confirm actual hardware.

## B. Business/contact facts
7. Support model: is it truly **24/7**? Live chat? Ticket response SLA? Support email?
8. **Status page** URL (competitors link one) — provide if it exists.
9. **Refund window** (e.g. competitors show 3-day / 30-day) — real value from refund policy.
10. Confirm **client area** `billing.vexanode.gg` is live.
11. Real social profiles for `sameAs` (Twitter/X `@vexanode`? GitHub? others) — verify URLs.

## C. Pricing / product
12. Confirm **plan prices + specs** in `app/config/sections/*.json` are current and real
    (used for visible pricing AND Product/Offer JSON-LD).
13. Which services are actually **offered/live** vs placeholder pages (Domains? Web Hosting?
    Databases? Dedicated?).
14. Which "free" offers are genuinely free (`/free-bot-hosting`) — affects SEO targeting.

## D. Assets
15. Dedicated **1200×630 OG image** (currently reuses `/logo.png` 702×687).
16. Full **favicon set** + `theme-color` for light theme (dark exists).

## E. Design sign-off
17. OK to **darken terracotta** for buttons/small text to meet WCAG AA contrast?

---
Until resolved, section A items are the top priority — they are the highest-risk for
shipping fabricated facts. See [content.md](content.md) claims register.
