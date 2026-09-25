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
7. Support model: is it truly **24/7**? Live chat? Ticket response SLA?
8. **Status page** URL (competitors link one) — provide if it exists.
9. **Refund window** (e.g. competitors show 3-day / 30-day) — real value from refund policy.
10. Confirm **client area** `billing.vexanode.gg` is live.
11. Real social profiles for `sameAs` (Twitter/X `@vexanode`? GitHub? others) — verify URLs.

> **Provided by owner 2026-09-24 (now shipped on `/contact`):** address = Asuran Chowk,
> Shahpur, Gorakhpur, Uttar Pradesh, India, PIN 273001; phone = +91 63869 05613;
> email = vexanodeofficial@gmail.com. Contact form removed per owner request (contact is
> now Discord + phone + email). TODO: mirror these into `generateOrganizationSchema`
> `contactPoint`/`address` in `lib/seo.ts`.

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

## F. "Powered By" trusted-technology logos
The section (landing marquee + About grid) lives in `app/components/brand/`.
Logos are used for identification only, with a trademark disclaimer in the footer.

**Real official vector marks (shipped):**
- AMD, Intel, Cloudflare, Pterodactyl — Simple Icons, mirrored in `public/brands/`.
- AWS — owner-supplied official logo (`public/brands/aws.svg`, brand hex `#FF9900`).
  Note: AWS trademark guidelines restrict logo use — confirm permitted usage.
- Cashfree — owner-supplied official mark (`public/brands/cashfree.svg`); the compact
  brand symbol is used in the wall, brand green `#04AB61` (from the official SVG).

**Text-wordmark fallbacks (no official vector sourced yet — replace with real SVG when available):**
18. **VirtFusion** — official logo SVG + verify exact brand hex (currently `#2F6FED`, unverified).
19. **GIGABYTE** — official logo SVG + verify exact brand hex (currently `#E45501`, approx.).
20. **Micron** — official logo SVG (brand hex `#0077C8` verified: Micron "True Blue").
21. **Voxility** — official logo SVG + verify exact brand hex (currently `#1D6FB8`, unverified).

Also confirm each provider is actually part of VexaNode's stack before publishing (real-data rule):
VirtFusion, Pterodactyl, AMD, Intel, GIGABYTE, Micron, AWS, Cloudflare, Voxility, Cashfree.

## G. Payments Accepted (footer)
- Uses Cashfree's official `payments-icons-library` (remote SVGs from `cashfreelogo.cashfree.com`).
- Currently lists: Visa, Mastercard, RuPay, Amex, BHIM UPI, Google Pay, Paytm, PhonePe,
  MobiKwik, Amazon Pay. Confirm the final list matches the methods actually enabled on the
  live Cashfree account before publishing.

---
Until resolved, section A items are the top priority — they are the highest-risk for
shipping fabricated facts. See [content.md](content.md) claims register.
