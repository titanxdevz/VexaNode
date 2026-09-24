# Research Log

## Purpose
Chronological record of every web search and page fetch used to inform this project, so
every external claim is traceable. All entries accessed **2026-09-24** unless noted.

## Loop 1 — 2026-09-24

### Competitor pages fetched (via research agents)
| Brand | URL | Takeaway |
|---|---|---|
| Apex Hosting | https://apexminecrafthosting.com | "Starting at" RAM tiers; monthly/quarterly/annual terms; FAQPage JSON-LD; 24/7 live chat |
| Shockbyte | https://shockbyte.com | "Starting at $2.99"; "since 2013"; "3-day money back"; Trustpilot 4.7 |
| BisectHosting | https://www.bisecthosting.com | "$2.99/month"; "21 Locations"; Trustpilot 4.8 / 25,000+ reviews; Organization JSON-LD |
| Aternos | https://aternos.org/:en/ | Free-forever model; live player counters; DDoS protected; no pricing |
| Minehut | https://minehut.com | Free tier; live counters; Organization+WebSite+FAQPage JSON-LD |
| Sparked Host | https://sparkedhost.com | Category cards not price table; 48-hour refund; Trustpilot embed |
| ScalaCube | https://scalacube.com | "from $2/month"; multi-currency; "99.9% Uptime"/"24/7"/"Total DDoS Protection" |
| Nodecraft | https://nodecraft.com | JS SPA; only title tags server-rendered |
| Hostinger MC | https://www.hostinger.com/minecraft-server-hosting | Full Product+Offer+FAQPage+Breadcrumb JSON-LD; crossed-out price + renewal + 24-mo total; "MOST POPULAR" |
| PloudOS | https://ploudos.com | UNREACHABLE (ECONNREFUSED) |

### Popularity-list sources (to select 8–10 brands)
- https://godlike.host/best-minecraft-server-hosting-2026-12-ranked-providers-blog/
- https://cybernews.com/game-server-hosting/best-minecraft-server-hosting/
- https://www.techradar.com/web-hosting/best-minecraft-server-hosting/
- https://hostadvice.com/game-server-hosting/best-minecraft/
- https://www.ghostcap.com/minecraft-server-hosting/

### Official documentation fetched
| Topic | URL | Takeaway |
|---|---|---|
| Title links | https://developers.google.com/search/docs/appearance/title-link | No hard char limit; truncated to device width; concise/unique; brand with delimiter |
| Snippets/meta desc | https://developers.google.com/search/docs/appearance/snippet | No length limit; unique, human-readable, concrete details |
| Canonical | https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls | Self-referential absolute canonical; don't use robots.txt/noindex to canonicalize |
| Sitemaps | https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap | ≤50MB / 50,000 URLs per file; declare in robots.txt |
| Robots meta | https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag | noindex ignored if URL blocked in robots.txt |
| Organization SD | https://developers.google.com/search/docs/appearance/structured-data/organization | logo ≥112px; recommend sameAs, contactPoint, address |
| Sitelinks searchbox | https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox | **Deprecated / removed (2024-11-29)** |
| Merchant/Product+Offer | https://developers.google.com/search/docs/appearance/structured-data/merchant-listing | Product needs name/image/offers; Offer needs price>0 + priceCurrency (ISO 4217) |
| FAQPage | https://developers.google.com/search/docs/appearance/structured-data/faqpage | **Rich result discontinued; removal from 2026-05-07**; markup still valid schema |
| Breadcrumb | https://developers.google.com/search/docs/appearance/structured-data/breadcrumb | ≥2 ListItems; position, name, item(URL) |
| Open Graph | https://ogp.me/ | Required: og:title, og:type, og:image, og:url |
| Twitter/X cards | developer.x.com | **UNVERIFIED — HTTP 402 blocked**; use common tags with caution |
| WCAG 1.4.3 contrast | https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | 4.5:1 normal, 3:1 large (≥18pt or ≥14pt bold) |
| WCAG 2.4.7 focus visible | https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html | Visible keyboard focus indicator |
| WCAG 2.4.11 focus not obscured | https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html | Focused element not entirely hidden |
| WCAG 2.5.8 target size | https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | ≥24×24 CSS px (with exceptions) |
| WCAG 2.3.3 animation | https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | **AAA** (not AA); honor prefers-reduced-motion |
| Core Web Vitals | https://web.dev/articles/vitals | LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 |
| Pterodactyl terms | https://pterodactyl.io/project/terms.html | Panel, Node, Wings, Server, Egg, Nest |
| Next.js Metadata | https://nextjs.org/docs/app/api-reference/functions/generate-metadata | static metadata / generateMetadata |
| Next.js sitemap | https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap | app/sitemap.ts → MetadataRoute.Sitemap |
| Next.js robots | https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots | app/robots.ts → MetadataRoute.Robots |
| Next.js JSON-LD | https://nextjs.org/docs/app/guides/json-ld | `<script type="application/ld+json">`, sanitize `<`→`<` |

### Notes
- Research agents reported prompt-injection text inside some fetched competitor pages;
  correctly ignored as untrusted content. No such content was acted upon.
- PloudOS unreachable and Nodecraft SPA-only → excluded from deep structural analysis.

## Open questions / needs
- Re-verify Twitter/X card spec when an unblocked source is available.
- Confirm whether owner wants FAQ JSON-LD kept despite loss of Google rich result (kept as
  valid schema by default — see [structured-data.md](structured-data.md)).
