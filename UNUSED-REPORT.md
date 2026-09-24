# UNUSED-REPORT — VexaNode

**Audit type:** Read-only (no files were modified, moved, or deleted)
**Scope:** Next.js 16 (App Router), React 19, TypeScript 5.8 (strict), Tailwind CSS v4, ESLint 9 flat config
**Tooling used:** `grep` (repo-wide reference search), `tsc --noEmit`, ESLint (`npm run lint`), `ts-prune`, `depcheck` via `npx --yes`, manual file inventory
**Tooling caveats:** `tsc --noEmit` is clean. `knip` timed out after 300 s and produced no output (evidence for unused code comes from `ts-prune` + manual reference checks instead). ESLint reports **207 problems** (warnings + errors) — full list captured at `C:\Users\acer\.local\share\opencode\tool-output\tool_0d271953d00110Enx4wKiZg53k`.

---

## Confidence legend

| Level | Meaning |
|---|---|
| **High** | Verified by repo-wide reference search / compiler tooling — zero importers/usages anywhere. Safe to delete. |
| **Medium** | Only referenced by other *dead* files ("dead chain"), or reachable by direct URL but never linked. Deleting requires removing the feeder files first. |
| **Low / needs manual check** | Dynamic, convention-based, or SEO/runtime-dependent usage that a static search cannot confirm. Investigate before deleting. |

---

## Executive summary

| # | Category | High | Medium | Low/check | Total flagged |
|---|---|---|---|---|---|
| 1 | Unused files & components | 22 | – | – | 22 |
| 2 | Dead lib modules & unused exports | 16 files + 6 exports | – | – | 22 |
| 3 | Unused dependencies | 7 | 7 | – | 14 + 1 false positive |
| 4 | Unused types & config data | 6 JSON + 6 types | – | 1 (`fonts.d.ts`) | 13 |
| 5 | Unused assets (`public/`) | 19 | 18 | 1 | 38 |
| 6 | Dead/duplicate routes & SEO conflicts | – | 4 files | 2 | 6 |
| 7 | Unused CSS classes & tokens | 15 | – | – | 15 |
| 8 | Leftovers & duplicates | 4 | 1 | 1 | 6 |
| 9 | Stray `console.log` / lint noise | 1 | – | – | §9 |

**Safest items to remove first** (zero-dependency deletions, High confidence):

1. `lib/hooks/*` — steady-stale React Query hook set, nothing imports any of the 9 files.
2. `app/components/ui/{button.tsx, select.tsx, world-map.tsx, network-globe.tsx}` and `components/ui/{button.tsx, dropdown-menu.tsx}` — superseded/duplicated shadcn-style primitives with no importers.
3. `app/components/{Skeleton.tsx, HeroSection.tsx, ComparisonSection.tsx, PricingSection.tsx, ReviewMarquee.tsx, TestimonialsSection.tsx, TopBanner.tsx, DiscordBanner.tsx, LavalinkTest.tsx}` — old landing-page components replaced by the live `app/components/landing/*` stack (`app/page.tsx:4-41`).
4. `app/webhosting/WebhostingClient.tsx` — duplicate of `app/webhosting/page.tsx`, never imported.
5. Unused deps: `@supabase/ssr`, `bcryptjs`, `lru-cache`, `pm2`, `tesseract.js`, `@tailwindcss/forms`, `@types/bcryptjs`.
6. Unreferenced assets: `public/{features-6.png, image.png, hero-bg.mp4, favicon.png, World_map_with_points.svg, "VexaNode Data Center.png"}`, `public/about/"VexaNode Data Center.png"`, `public/advertisement/dezerx.png`, `public/banners/{rust-banner.webp, Vexa-Banner-1.webp}`, `public/christmas/{leaf-up.png, leaf-down.png}`, `public/cpu/intel.png`, `public/flags/{australia,canada,singapore}.png`, `public/locations/london.jpg`, `public/meta/Logo.png`, `public/showcase/placeholder.png`.

> **Negative finding (do NOT delete):** `@tailwindcss/postcss` is flagged by `depcheck` but is required by `postcss.config.mjs` — **keep it**.

---

## 1. Unused files & components (never imported anywhere)

### `app/components/`

| File | Reason | Confidence |
|---|---|---|
| `LavalinkTest.tsx` | Zero importers; live Lavalink page uses `app/lavalink/LavalinkClient.tsx` | High |
| `Skeleton.tsx` | Zero importers; exports `Skeleton`, `SkeletonCard`, `SkeletonTable`, `SkeletonText`, `SkeletonAvatar`, `SkeletonSidebar`, `SkeletonConversation` — all only self-referenced | High |
| `ComparisonSection.tsx` | Zero importers | High |
| `DiscordBanner.tsx` | Zero importers; only consumer of `public/joinus.png` | High |
| `HeroSection.tsx` | Zero importers; `app/page.tsx` uses `landing/LandingHero` | High |
| `PricingSection.tsx` | Zero importers; the only live use of `animate-gradient-x` | High |
| `ReviewMarquee.tsx` | Zero importers | High |
| `TestimonialsSection.tsx` | Zero importers | High |
| `TopBanner.tsx` | Zero importers; only consumer of `app/config/sections/navigation.json` banner aside from live code | High |
| `dedicated/VDSPricingSection.tsx` | Not imported by `DedicatedClient.tsx`; only consumer of `dedicated.json` + `useCurrency` | High |
| `discord/DiscordPricingSection.tsx` | Not imported by `DiscordClient.tsx`; only consumer of `discord.json` | High |
| `vps/VPSPricingSection.tsx` | Not imported by `VpsClient.tsx`; only consumer of `vps.json` | High |
| `vps/OSSelectionSection.tsx` | Not imported by `VpsClient.tsx`; only consumer of `/os/*` images | High |
| `games/GameServerList.tsx` | Only importer is the also-unused `GameServerListWrapper` | High |
| `games/GameServerListWrapper.tsx` | Not imported by `GamesClient.tsx`; only consumer of `games.json` | High |
| `ui/button.tsx` | Duplicate of `components/ui/button.tsx`; zero importers | High |
| `ui/select.tsx` | Zero importers | High |
| `ui/world-map.tsx` | Zero importers; only consumer of `dotted-map` | High |
| `ui/network-globe.tsx` | Zero importers; only consumer of `three` + `react-globe.gl` | High |
| `webhosting/WebhostingClient.tsx` | Duplicate of `app/webhosting/page.tsx` (same layout/markup, weaker metadata); zero importers | High |

### `components/ui/`

| File | Reason | Confidence |
|---|---|---|
| `button.tsx` | Zero importers | High |
| `dropdown-menu.tsx` | Zero importers; only consumer of `@radix-ui/react-dropdown-menu` | High |

> **Notice:** `components/ui/globe.tsx` and `app/components/landing/*` (`LandingHero`, `ProductsSection`, `GlobeSection`, etc.) are **live** (used by `app/page.tsx`, `LocationsSection.tsx`, `GlobeSection.tsx`) — not flagged.

---

## 2. Dead lib modules & unused exports

| File | Unused exports / reason | Confidence |
|---|---|---|
| `lib/db.ts` | Entire module dead (only importer is `lib/supabase.ts`, itself dead). Unused exports: `getTickets, createTicket, getTicketById, getTicketReplies, addTicketReply, updateTicketStatus, banUser, unbanUser, deleteOrder, updateOrderStatus, getUserOrders, createOrder, getAllData, UserProfile` | High |
| `lib/supabase.ts` | `createClient` unused — only imported by dead `lib/db.ts` | High |
| `lib/settings.ts` | `getSetting`, `setSetting` unused; references `app/config/sections/settings.json` which **does not exist** (broken ref) | High |
| `lib/pterodactyl.ts` | `getPteroUser`, `createPteroUser`, `createPteroServer` unused | High |
| `lib/validate.ts` | `ticketSchema, replySchema, orderSchema, adminActionSchema, adminCreateServerSchema` unused | High |
| `lib/validations/schemas.ts` | Exported zod schemas unused; only importer of `zod`-based schema set | High |
| `lib/utils/errors.ts` | `formatApiError`, `isNetworkError` unused | High |
| `lib/hooks/useUserMutations.ts` | Unused | High |
| `lib/hooks/useUserData.ts` | Unused | High |
| `lib/hooks/useTickets.ts` | Unused | High |
| `lib/hooks/useTicketMutations.ts` | Unused | High |
| `lib/hooks/usePaymentsConfig.ts` | Unused | High |
| `lib/hooks/useOrderMutations.ts` | Unused | High |
| `lib/hooks/useFormValidation.ts` | Unused | High |
| `lib/hooks/useAdminMutations.ts` | Unused | High |
| `lib/hooks/useAdminData.ts` | Unused | High |
| `lib/seo.ts` | Exported but unused: `organizationSchema`, `websiteSchema`, `articleSchema` (lines 223–226). `constructMetadata`, `serviceSchema`, `breadcrumbSchema`, `SITE_URL` are live | High |
| `app/components/CookieConsent.tsx` | Unused export `areCookiesAccepted` (component itself is used in `layout.tsx`) | High |

---

## 3. Unused dependencies & devDependencies

### Fully unused (no references in source, configs, or scripts)

| Package | Reason | Confidence |
|---|---|---|
| `@supabase/ssr` | Imported nowhere; `lib/supabase.ts` imports only `@supabase/supabase-js` | High |
| `@tailwindcss/forms` | Not listed in `tailwind.config.ts` plugins; no import anywhere | High |
| `bcryptjs` | No imports in source; only in lockfiles | High |
| `lru-cache` | No imports in source; only in lockfiles | High |
| `pm2` | Not imported, not in any npm script (only mentioned in README install/deploy docs) | High |
| `tesseract.js` | No imports in source | High |
| `@types/bcryptjs` (dev) | No consumers of `bcryptjs` | High |

### Dead-chain only (deletable only after §4 files are removed)

| Package | Only consumed by | Confidence |
|---|---|---|
| `@radix-ui/react-dropdown-menu` | `components/ui/dropdown-menu.tsx` (unused) | Medium |
| `@radix-ui/react-select` | `app/components/ui/select.tsx` (unused) | Medium |
| `@radix-ui/react-slot` | unused `button.tsx` files | Medium |
| `class-variance-authority` | unused `button.tsx` files | Medium |
| `dotted-map` | `app/components/ui/world-map.tsx` (unused) | Medium |
| `react-globe.gl` | `app/components/ui/network-globe.tsx` (unused) | Medium |
| `three` | `app/components/ui/network-globe.tsx` (unused) | Medium |

### False positive — keep

| Package | Why | Confidence |
|---|---|---|
| `@tailwindcss/postcss` | Required by `postcss.config.mjs` (line 2) — flag is a `depcheck` FP | High |

---

## 4. Unused types & config data files

### Unused config data (`app/config/sections/`)

| File | Reason | Confidence |
|---|---|---|
| `pricing.json` | Zero references; only consumer would be dead `PricingSection.tsx` | High |
| `legal.json` | Zero references | High |
| `dedicated.json` | Zero references (dead `VDSPricingSection.tsx` was its only consumer) | High |
| `vps.json` | Only referenced by dead `VPSPricingSection` / `OSSelectionSection` | High |
| `discord.json` | Only referenced by dead `DiscordPricingSection` | High |
| `games.json` | Only referenced by dead `GameServerList*` | High |
| `sections/settings.json` | **Does not exist**; referenced only by dead `lib/settings.ts` | High |

> Live configs not flagged: `hero.json`, `language.json`, `navigation.json`, `ui.json`, `webhosting.json`, `showcase.json`.

### Unused type files (`app/types/`, `types/`)

| File | Reason | Confidence |
|---|---|---|
| `app/types/pricing.ts` | `PricingConfig` and related flagged unused by ts-prune; only consumer would be dead `PricingSection`/`pricing.json` | High |
| `app/types/legal.ts` | `LegalConfig` unused (dead `legal.json`) | High |
| `app/types/dedicated.ts` | `DediConfig` unused (dead `dedicated.json`) | High |
| `app/types/vps.ts` | Only used by dead `VPSPricingSection` | High |
| `app/types/discord.ts` | Only used by dead `DiscordPricingSection` | High |
| `app/types/games.ts` | Only used by dead `GameServerList` | High |
| `types/fonts.d.ts` | Overrides `next/font/google` typings (`any` options) — Next 16 ships its own types, so this is almost certainly an obsolete workaround; hacks out type-checking on `Geist/Geist_Mono/Orbitron/Quicksand` | Low/check |
| `next-env.d.ts` | Gitignored auto-generated (present in working tree) | Low/check |

---

## 5. Unused assets (`public/`)

### No references anywhere — High

| Asset | Reason | Confidence |
|---|---|---|
| `features-6.png` | Zero references | High |
| `image.png` | Zero references | High |
| `hero-bg.mp4` | Zero references (video never used by any page/component) | High |
| `favicon.png` (root) | Layout declares `icon/favicon-16x16/32x32/48x48` + `apple-touch-icon.png` only; this file unused | High |
| `World_map_with_points.svg` | Zero references (live `globe.tsx` uses `cobe`; `world-map.tsx` is dead) | High |
| `VexaNode Data Center.png` (root) | Zero references; about page uses `/about/datacenter.png` instead | High |
| `about/VexaNode Data Center.png` | Zero references (space-named duplicate) | High |
| `advertisement/dezerx.png` | Zero references; hero.json uses the other 5 (`hetzner/intel/pterodactyl/neoprotect/samsung`) | High |
| `banners/rust-banner.webp` | Zero references (only `rust-banner-2.webp` is referenced, in dead config) | High |
| `banners/Vexa-Banner-1.webp` | Zero references (`Vexa-Banner.webp` used by live hero.json) | High |
| `christmas/leaf-up.png` | Zero references | High |
| `christmas/leaf-down.png` | Zero references | High |
| `cpu/intel.png` | Zero references (advertisement/intel.png is the live one) | High |
| `flags/australia.png` | Only referenced by dead `vps.json`/`dedicated.json` | High* |
| `flags/canada.png` | Only referenced by dead configs | High* |
| `flags/singapore.png` | Only referenced by dead configs | High* |
| `locations/london.jpg` | Zero references (`vps.json` uses an id `uk-london`, no image) | High |
| `meta/Logo.png` | `manifest.json` references only `/meta/Banner.png` | High |
| `showcase/placeholder.png` | Zero references (showcase uses `dark/content`+`light/content` images only) | High |

\* `flags/{australia,canada,singapore}.png` are unreferenced *now*; they only appear in dead-chain configs (`vps.json`, `dedicated.json`). If those configs later come back to life, they may be needed again.

### Dead-chain only (delete only with their feeder files) — Medium

| Asset | Only consumed by | Confidence |
|---|---|---|
| `games.jpg`, `vps.png`, `dedicated.webp` | `pricing.json` (unused §4) | Medium |
| `banners/{ark-banners, cs2-banner, gmod-banner, rust-banner-2, valheim-banner, node.webp}.webp` | `games.json` / `pricing.json` (unused §4) | Medium |
| `banners/webhosting.png` | `pricing.json` (unused §4) | Medium |
| `christmas/ice.png` | `games/GameServerList.tsx` (unused §1) | Medium |
| `cpu/ryzen7.png` | `games.json` + `dedicated.json` (unused §4); live `webhosting.json` uses only `ryzen9.png` | Medium |
| `os/{ubuntu, windows, fedora, debian, kali, download}.png` | `vps/OSSelectionSection.tsx` (unused §1) | Medium |

### Needs manual check — Low

| Asset | Reason | Confidence |
|---|---|---|
| `llms.txt` | Served statically and listed in stale `public/sitemap.xml` as `https://vexanode.com/llms.txt` (offline domain) — decide if still wanted | Low/check |

> Broken refs **inside dead files** (redirect to dead-chain cleanup, not production): `vps.json`/`dedicated.json` reference flags that don't exist on disk (`brazil, ireland, uk, sweden, italy, bahrain, uae, south-africa, south-korea, japan`), and `about/VexaNode Data Center.png`-style space-named paths are never used.

### Verified live (do NOT flag): `/about/datacenter.png`, `/about/network.png`, `/advertisement/{hetzner,intel,pterodactyl,neoprotect,samsung}.png`, `/banners/{minecraft-banners,Vexa-Banner}.webp`, `/cpu/ryzen9.png`, `/flags/{usa,france,germany,lebanon,turkey,russian,chinese,japanese,india,spain,portugal}.png`, `/icons/*`, `/images/samp-banner.webp`, `/lang/*.json` (dynamic `fetch('/lang/${lang}.json')`), `/meta/Banner.png`, `/partners/*`, `/showcase/dark|light/*`, root `logo.png`, `favicon-16x16/32x32/48x48.png`, `apple-touch-icon.png`, `minecraft_block.jpg`, `feature-9.webp`, `christmas/button-deco-{up,down}.png`.

---

## 6. Dead / duplicate routes & SEO metadata conflicts

| Item | Reason | Confidence |
|---|---|---|
| `app/blogs/page.tsx` | Duplicate blog index. Live `Footer` (`Footer.tsx:58`) and `navigation.json` link `/blog`, and `sitemap.ts` emits `/blog`. `/blogs` is never linked (reachable only by direct URL) | Medium |
| `app/blogs/[slug]/page.tsx` | Cards in `BlogsClient.tsx` link `/blog/${slug}`, so `/blogs/[slug]` is unreachable via any link | Medium |
| `public/sitemap.xml` + `app/sitemap.ts` | Static `public/sitemap.xml` takes precedence over the generated route, making `app/sitemap.ts` effectively dead. Static file is stale (`vexanode.com`, missing live pages) | Low/check |
| `public/robots.txt` + `app/robots.ts` | Static `public/robots.txt` takes precedence over `app/robots.ts`; static file points to `https://Node.vexanode.cloud/sitemap.xml` (stale casing/domain) while `app/robots.ts` uses configured `SITE_URL` | Low/check |

Resolution advice (not executed): pick one source of truth — either keep the static `public/*` files and drop `app/sitemap.ts`+`app/robots.ts`, or delete the static files and let Next generate them.

---

## 7. Unused CSS classes & tokens (`app/globals.css`)

Verified against every `.tsx` in the repo — defined but never referenced:

| Class / block | Notes | Confidence |
|---|---|---|
| `.terminal-typewriter`, `.terminal-reveal`, `.terminal-delay-1..5`, `.terminal-cursor` (+ keyframes) | Legacy terminal-mockup styles; zero usage | High |
| `.hero-image`, `.hero-image-loading`, `.hero-image-loaded`, `.animate-image-load`, `.loading-shimmer`, `.optimize-images` | Legacy hero-loading styles; zero usage | High |
| `.animate-gradient-x` | Only used by dead `PricingSection.tsx` | High |
| `.animate-float`, `.animate-pulse-soft`, `.animate-scroll` | Defined, never used | High |
| `.dottedfeatures` | Defined, never used | High |
| `.bg-cyber-dark`, `.glow-brand-blob` | Defined, never used | High |
| `.blob-primary`, `.blob-secondary`, `.svg-gradient-fill`, `.bottom-border-gradient` | Legacy token classes; never used | High |
| `.color-primary`, `.color-secondary`, `.button-color`, `.button-bg`, `.border-top-nav`, `.text-card-primary`, `.border-primary`, `.hover-gradient`, `.icon-text-primary` | Legacy tokens; `hover-gradient`/`border-secondary`/`card-primary`/`icon-primary`/`button-primary`/`text-button-primary`/`icon-text-primary` only appear in dead `OSSelectionSection.tsx` and the live-but-superseded-styling `CookieConsent.tsx` | High (recheck if CookieConsent is restyled) |
| `--globe-base-color`, `--globe-marker-color`, `--globe-glow-color` tokens | Zero references; live `components/ui/globe.tsx` uses hardcoded `GLOBE_CONFIG` | High |
| `@tailwind base; @tailwind components; @tailwind utilities;` (lines 5–7) | Redundant with Tailwind v4 `@import "tailwindcss"` (line 1) | High |

> Live/custom-found (do NOT flag): `vx-*` design tokens, `eq-bar-*` (used by `LavalinkClient`), `text-neon-glow-brand`, `animate-reverse`, `orbital/hero features` keyframes, `orbitron-font`, `quicksand-font`, `article-body`, `will-change-transform`.

---

## 8. Leftovers, duplicates & artifacts

| Item | Reason | Confidence |
|---|---|---|
| `bun.lock` vs `package-lock.json` | Both tracked in git. README uses `npm install` / `npm run build` / `npm start` and there is no `packageManager` field — `bun.lock` is the stray duplicate | Medium |
| `tsconfig.tsbuildinfo` | Build artifact, gitignored, present in working tree — leave or ignore | Low/check |
| `next-env.d.ts` | Auto-generated, gitignored, present — leave | Low/check |
| `DATABASE/setup_database.sql` | One-off SQL setup not referenced by code; candidates for move to docs or keep | High (non-code) |
| `app/logo.svg` | Not a valid App Router metadata filename (`favicon.ico`, `icon.png`, `opengraph-image.*` are); zero references | Medium |
| `docs/research-log.md`, `docs/seo.md` | Engineering/SEO notes; not build inputs (informational) | Low/check |

---

## 9. Stray `console.log` & lint noise

| Location | Issue | Confidence |
|---|---|---|
| `app/api/contact/route.ts:12` | Stray `console.log("Contact form submission:", …)` — remove or gate behind server logging | High |
| `app/api/lavalink/search/route.ts:28` | `no-explicit-any` | High |
| `app/api/lavalink/stats/route.ts:22` | `no-explicit-any` | High |
| `app/contexts/LanguageContext.tsx:70` | `console.warn` fallback — **intentional**, keep | – |

### Unused imports / frontend lint (ESLint)

| Location | Issue |
|---|---|
| `app/about/page.tsx:4` | `Award` unused |
| `app/affiliates/page.tsx:4` | `Users`, `CheckCircle2` unused |
| `app/affiliates/page.tsx:61:40, 144:90` | `react/no-unescaped-entities` |
| `app/aup/page.tsx:4` | `AlertTriangle`, `CheckCircle2`, `Info`, `MessageSquare` unused |
| `app/blog/[slug]/page.tsx:4` | `Shield` unused |
| `app/blogs/BlogsClient.tsx:4` | `Bookmark` unused |
| `app/api/domains/check/route.ts:24` | `error` unused |
| `app/api/lavalink/stats/route.ts:1` | `NextRequest` unused |
| (Lavalink client, ~27:40 / 28:52) | Unused `audioRef` assignment + `no-explicit-any` |

ESLint total: **207 problems** (mix of `unused-vars`, `no-explicit-any`, `react/no-unescaped-entities`, and warnings). Full machine-readable list at `C:\Users\acer\.local\share\opencode\tool-output\tool_0d271953d00110Enx4wKiZg53k`.

---

## Recommended removal order

1. **§2 hooks + lib** (`lib/hooks/*`, `lib/db.ts`, `lib/supabase.ts`, `lib/settings.ts`, `lib/pterodactyl.ts`, `lib/validate.ts`, `lib/validations/schemas.ts`, `lib/utils/errors.ts`) — zero dependents.
2. **§1 UI primitives + stale landing components** (`components/ui/*`, `app/components/ui/*`, `Skeleton.tsx`, old landing sections).
3. **§1 dead per-service components + §4 feed files** (`dedicated/discord/vps/games` components, then their JSON configs and types).
4. **§3 deps** — first set immediately; second set after step 3.
5. **§5 assets** — High group immediately; Medium group after step 3.
6. **§6 routes/SEO** — reconcile `/blog` vs `/blogs` and static vs generated `robots/sitemap` (decide ownership, then delete the losing side).
7. **§7 CSS + §8 leftovers + §9 console.log/lint fixes** as housekeeping.

Nothing in this report has been changed. All deletions/modifications wait for your approval.