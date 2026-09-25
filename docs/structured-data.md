# Structured Data (JSON-LD)

## Purpose
Define JSON-LD per page, using only real config data. Helpers exist in `lib/seo.ts`
(`generateOrganizationSchema`, `generateWebSiteSchema`, `generateServiceSchema`,
`generateBreadcrumbSchema`, `generateArticleSchema`). Rules from Google structured-data
docs (accessed 2026-09-24; see [research-log.md](research-log.md)).

## Findings / constraints (official)
- **Organization**: no required props; recommend name, url, logo (≥112px), sameAs,
  contactPoint. (Already emitted in `app/layout.tsx` + `app/page.tsx`.)
- **WebSite**: emitted. NOTE: sitelinks **searchbox `SearchAction` is deprecated/removed
  (2024-11-29)** — do not add it expecting a rich result.
- **Product + Offer**: Product needs `name`, `image`, `offers`; Offer needs `price` (>0)
  and `priceCurrency` (ISO 4217). Use ONLY real prices from `app/config/sections/*.json`.
- **FAQPage**: **rich result discontinued (Google, removal from 2026-05-07)**. Markup is
  still valid schema.org but yields no Google rich result. Decision below.
- **BreadcrumbList**: ≥2 ListItems; `position`, `name`, `item` (URL).

## Per-page plan
| Page | JSON-LD | Source of data |
|---|---|---|
| `/` (home) | Organization + WebSite | `lib/seo.ts` (real brand info) |
| `/minecraft`, `/games`, `/vps`, `/discord`, `/lavalink`, `/hytale`, `/samp`, `/dedicated`, `/databases`, `/webhosting` | Service + Product/Offer (real prices) + BreadcrumbList | `app/config/sections/*.json` prices |
| `/blog/[slug]`, `/blogs/[slug]` | Article + BreadcrumbList | post data |
| `/contact` | Organization contactPoint + BreadcrumbList | real Discord/contact |
| legal pages | BreadcrumbList | — |
| FAQ sections | FAQPage (valid schema; no rich result) — real Q&A only | page copy |

## Decisions
- Add a `generateProductSchema({name, description, url, image, offers[]})` helper that maps
  our config plans to Product+Offer with `priceCurrency` from the plan's currency and
  `price` as a number (>0). Skip any plan whose price isn't a real positive number.
- Keep FAQPage markup where we have **real** Q&A (documented in [content.md](content.md)),
  accepting it won't produce a Google rich result (still valid + used by other engines).
- Add BreadcrumbList to every non-home page via `generateBreadcrumbSchema`.
- Do NOT emit `aggregateRating`/`review` schema (no verified reviews) — would be fabricated.

## Implementation checklist
- [x] Add `generateProductSchema` to `lib/seo.ts`; price parsed to a positive number, GBP
      currency, skips non-positive prices. Exported as `productSchema`.
- [x] Emit Product/Offer on `/webhosting` from real config prices (verified: renders
      `"@type":"Product"` with `"price":2.99,"priceCurrency":"GBP"` …). Service + Breadcrumb
      already present there.
- [x] Emit Product/Offer on all commercial pages with real prices. **DONE 2026-09-24**
      (owner confirmed prices real): `/webhosting` (GBP, from config) + `/discord`, `/games`,
      `/minecraft`, `/databases`, `/samp`, `/hytale`, `/lavalink` (INR "from" price mirroring
      the base plan prices shown in each client). `/vps` and `/dedicated` are Discord-CTA
      landing pages with no plan pricing, so no Product/Offer (Service + Breadcrumb only).
- [ ] Emit Breadcrumb on legal/company pages.
- [ ] Validate all with Google Rich Results Test / Schema Markup Validator (owner/CI — no
      validator tooling in this environment; mark results here when run).

## Open questions / needs real data
- Confirm plan prices in config are the real, current prices (see [todo-real-data.md]).
- No `aggregateRating` until a real review source exists.
