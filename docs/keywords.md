# Keywords & Search Intent (Search List)

## Purpose
Real keyword/search-intent mapping to pages. Based on competitor titles/headings and
search-suggestion patterns observed 2026-09-24 (see [competitors.md](competitors.md)).
**Search volumes are unknown** — no keyword-tool access; never invented.

## Findings (patterns observed on competitor pages)
- Competitor titles cluster on "Minecraft Server Hosting" (Apex, BisectHosting, ScalaCube,
  Nodecraft, Hostinger) → strongest head term for the category.
- "Free Minecraft server hosting" is a distinct high-intent cluster (Minehut title:
  "Free Minecraft Server Hosting…"; Aternos "Free. Forever."). Only target if we have a
  genuinely free offer.
- Secondary heads: "game server hosting" (ScalaCube, Nodecraft), "Discord bot hosting".
- Modpack/one-click intent appears in body copy (BisectHosting "2,300+ modpacks",
  Shockbyte "instant modpack and plugin install").

## Keyword → page map
Intent: I=informational, C=commercial, T=transactional. Volume: unknown (not measured).

| Keyword / query | Intent | Target page | Volume |
|---|---|---|---|
| minecraft server hosting | C/T | `/minecraft` | unknown |
| game server hosting | C | `/games` | unknown |
| discord bot hosting | C/T | `/discord` | unknown |
| free discord bot hosting | C/T | `/free-bot-hosting` (only if real) | unknown |
| cloud vps hosting | C/T | `/vps` | unknown |
| lavalink hosting | C | `/lavalink` | unknown |
| hytale server hosting | C | `/hytale` | unknown |
| sa-mp server hosting | C | `/samp` | unknown |
| dedicated server hosting | C/T | `/dedicated` | unknown |
| managed database hosting | C | `/databases` | unknown |
| how to make a minecraft server | I | `/docs` / blog | unknown |
| minecraft modpack hosting | C | `/minecraft` (section) | unknown |

## Question keywords (from competitor FAQ topics; validate before publishing answers)
- "Do you offer a refund?" → `/refund-policy` + FAQ
- "Is DDoS protection included?" → feature copy (only if real)
- "Can I switch server location?" → support/FAQ (only if locations real)
- "How fast is setup?" → onboarding copy (only if real)

## Decisions
- One primary keyword per commercial page, reflected in H1 + title + first paragraph.
- Do not target "free …" terms on paid pages (mismatch = poor UX + bounce).
- Long-tail informational queries → `/docs` and blog, not commercial pages.

## Implementation checklist
- [ ] Ensure each commercial page H1 contains its primary keyword naturally.
- [ ] Map blog/docs topics to informational queries as content is written.

## Open questions / needs real data
- Access to a keyword tool (Search Console, Keyword Planner) for real volumes/priority.
- Confirm which "free" offers are genuinely free before targeting free-intent terms.
