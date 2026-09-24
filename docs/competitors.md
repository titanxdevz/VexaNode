# Competitor Analysis & Gap Analysis

## Purpose
Break down 8–10 popular Minecraft/game hosting brands (public pages only) to identify
patterns VexaNode should adopt, and produce a prioritized gap list. All data fetched
2026-09-24; see [research-log.md](research-log.md) for URLs. **We copy patterns, never
facts** — no competitor stat is reproduced on our site as ours.

## Findings (per brand)
Format: Navbar · Hero · Pricing · Trust signals (quoted) · Footer · SEO · Support.

### Apex Hosting — apexminecrafthosting.com
- Navbar: Minecraft, Features, Panel, Billing, Guides. Hero H1 "Minecraft Server Hosting".
- Pricing: "Starting at" RAM tiers 1–14GB; monthly/quarterly/annual terms.
- Trust (quoted): "24/7 Chat Support", "24/7 Server Support", "24/7 uptime.", Trustpilot.
- Footer: About Us, Company, Products, Resources. SEO title "Minecraft Server Hosting - Apex Hosting". JSON-LD: FAQPage. Support: live chat, Discord, ticket.

### Shockbyte — shockbyte.com
- Navbar: Minecraft, Games, Support, Panel, Billing. H1 "Minecraft Server Hosting And More".
- Pricing: "Starting at $2.99"; CTA "View Minecraft Plans".
- Trust: "RATED EXCELLENT", "4.7 out of 5", "99.9% Uptime", "24/7 Support", "since 2013", "3-day money back guarantee".
- Footer: Company, Games, Support, About. Support: Knowledgebase, Discord.

### BisectHosting — bisecthosting.com
- Navbar: Game Servers, Other Servers, Learn, Support. H1 "MINECRAFT SERVER HOSTING".
- Pricing: "$2.99/month", unlimited slots, one-click modpacks; CTA "Create Server".
- Trust: "Excellent", "4.8/5.0", "25,000+ Reviews", "24/7/365 Support", "21 Locations".
- Footer: Company, Services, Customers, Legal, Social. JSON-LD: Organization, ContactPoint, WebPage.

### Aternos — aternos.org
- Free-forever model. CTAs "Create your free SMP", "Sign up". Live player counters.
- Trust: "Free. Forever.", "DDOS Protected", "Automatic Backups". Support: Discord, Reddit, Help.

### Minehut — minehut.com
- Navbar: Home, Servers, SMP, Lifesteal, Server Plans, Ranks & Credits. Free tier + credits.
- Trust: "DDoS protected", "no credit card required", live counters. JSON-LD: Organization, WebSite, FAQPage.

### Sparked Host — sparkedhost.com
- Category cards (Minecraft/Game/Cloud) not a price table. CTA "Start My Minecraft Server".
- Trust: "48 hour refund guarantee", "Get a Ticket Response in 10 Mins", Trustpilot. Support: 24/7 tickets + live chat, status page, Discord.

### ScalaCube — scalacube.com
- Multi-currency (USD/EUR/GBP/CAD/AUD). "from $2/month", "50% off" first month.
- Trust: "99.9% Uptime", "24/7 Customer Service", "Total DDoS Protection". Title "Game Server Hosting - Virtual & Dedicated | ScalaCube".

### Hostinger (Minecraft) — hostinger.com/minecraft-server-hosting
- Pricing cards: discount badge, name, crossed-out price, monthly rate, CTA, term total, renewal, vCPU/RAM/NVMe/bandwidth; "MOST POPULAR".
- Trust: "guaranteed 99.9% uptime", "30-day money-back guarantee".
- **Richest JSON-LD**: WebSite, WebPage, Service, Product (4 Offers), FAQPage, BreadcrumbList, Organization, Brand, ImageObject. Breadcrumb: VPS → Game server → Minecraft.

### Nodecraft / PloudOS
- Nodecraft: SPA, only titles server-rendered ("Minecraft Server Hosting — Nodecraft").
- PloudOS: unreachable; excluded.

## Common patterns (adopt)
1. Hero: "[Game] Server Hosting" H1 + one-line value prop + single primary CTA.
2. Pricing cards: plan name, RAM (headline spec for MC), price with "Starting at"/period,
   a "Most Popular" highlight, clear CTA; billing-term toggle where multiple terms exist.
3. Trust row near hero/pricing: uptime %, 24/7 support, DDoS protection, money-back window,
   real review widget. **VexaNode must only show trust facts it can back with source/config.**
4. Footer: 4–6 groups (Products/Games, Company, Support/Resources, Legal, Social) + payment
   icons + legal entity line.
5. Support: Discord + ticket + knowledgebase are table stakes; status page common.
6. Breadcrumbs + Product/Offer JSON-LD on plan pages (Hostinger is the model).

## Gap analysis vs VexaNode (prioritized)
| # | Gap | Priority | Notes |
|---|---|---|---|
| 1 | No light theme site-wide (only `/` done) | P0 | Phase 2 — extend `vx-*` tokens everywhere |
| 2 | Per-page SEO metadata incomplete/duplicated | P0 | Phase 3 — see [seo.md](seo.md) |
| 3 | No Product/Offer JSON-LD on plan pages | P0 | Real config prices only ([structured-data.md](structured-data.md)) |
| 4 | Breadcrumbs missing on sub-pages | P1 | BreadcrumbList JSON-LD + visual crumbs |
| 5 | Trust signals unverified/absent | P1 | Only ship provable claims; rest → [todo-real-data.md](todo-real-data.md) |
| 6 | Status page link absent | P2 | Add link only if a real status URL exists (owner) |
| 7 | Money-back / refund window not surfaced | P2 | Pull from existing refund-policy page copy |
| 8 | Review widget | P2 | Needs real Trustpilot/Google account (owner) |

## Decisions
- Model our plan pages' SEO/JSON-LD on Hostinger's structure (most complete), using our own
  real config prices/specs only.
- Do NOT add fake review counts, uptime %, or "since YEAR" unless owner supplies real data.

## Open questions / needs real data
See [todo-real-data.md](todo-real-data.md): real uptime figure, review widget account,
status page URL, refund window, datacenter locations, support response SLA.
