# VexaNode Website Overhaul — BRIEF (Source of Truth)

> Reconstructed on 2026-09-24 from the `/goal` specification because no `/BRIEF.md`
> existed in the repo. This file is the canonical scope/rules reference for all loop
> iterations. If the owner provides an authoritative BRIEF.md, replace this file.

## GOAL
Transform VexaNode (vexanode.cloud) into a professional, best-in-class game/Minecraft
hosting site with perfect UX, full dark AND light themes on every page, complete SEO on
every page, and a complete sourced `/docs` folder. Work in loop mode until every item in
the Definition of Done is verified. Do not stop after one pass.

Context: VexaNode is a Minecraft/game hosting site on an existing Pterodactyl-based
Next.js codebase. Read the existing codebase first; follow its framework, structure, and
conventions. Do not rewrite from scratch and do not break working features.

## HARD RULES
1. REAL DATA ONLY. No invented numbers, testimonials, uptime claims, review counts,
   player counts, awards, or competitor facts. If it can't be verified from a source or
   our own code/config, remove it or list it in `docs/todo-real-data.md`.
2. Every competitor/market/SEO/UX fact must come from web search or a fetched page with a
   source URL. No source = do not state it.
3. Scope = frontend/UI/SEO only. No backend, DB, auth, payments, or Pterodactyl API.
   Existing demo/mock UI may stay but MUST be clearly labeled as demo/preview.
4. No lorem ipsum, fake stats, dead links, or generic filler in code or docs.

## RESEARCH (documentation-first, every phase)
Research with web search + fetch OFFICIAL/PUBLIC docs before implementing an area:
Google Search Central, Bing Webmaster, web.dev/Lighthouse, W3C WCAG 2.2 & WAI-ARIA,
schema.org, Open Graph, Twitter/X cards, MDN, framework/library docs, Pterodactyl docs,
competitor public pages, UX research (NN/g, Baymard).

## PHASES
- Phase 1: Research 8-10 competitors + best practices; gap analysis in docs/competitors.md.
- Phase 2: UX+UI overhaul on ALL pages; full dark+light themes; design system; a11y;
  responsive 320-1920px; standard pages; reduced motion; image/font optimization.
- Phase 3: SEO on every page (title <60, meta <160, canonical, OG/Twitter, one H1,
  headings, alt text, JSON-LD Organization/WebSite/Product/Offer/FAQPage/BreadcrumbList,
  sitemap, robots, favicons, manifest, theme-color both themes). Lighthouse 90+.
- Phase 4: Verify (build/lint/type-check, Lighthouse per page/theme/device, links,
  console, contrast, claims grep), update docs + changelog, loop until DoD met.

## /docs FILES (each: Purpose, Findings[+source URL+date], Decisions, Implementation
checklist[todo/in progress/done/verified], Open questions)
README, research-log, competitors, uiux, design-system, seo, keywords, structured-data,
customer-interaction, accessibility, performance, content (claims register), audit,
todo-real-data. Write docs BEFORE implementing, implement from docs, then update docs to
match what shipped.

## DEFINITION OF DONE
- Every page professional in both themes; complete unique SEO + valid structured data.
- Lighthouse 90+ all four categories, all pages, both themes, mobile+desktop.
- Zero console/build/lint/type errors; zero broken links.
- No fabricated data; every claim traceable in claims register + research log.
- All /docs complete, sourced, consistent with shipped site.
- Final summary + docs/todo-real-data.md of what still needs owner input.
