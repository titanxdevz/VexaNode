# Customer Interaction & Support

## Purpose
Define how visitors interact with VexaNode and how we support them, benchmarked against
competitors (see [competitors.md](competitors.md), fetched 2026-09-24). Ship only real
channels.

## Findings (competitor patterns)
- Discord + ticket + knowledgebase are universal; live chat common (Apex, Sparked Host);
  status page common (Sparked Host). Trust signals sit near hero/pricing.
- Onboarding CTAs are single + prominent ("Start Your Server", "Create Server").

## VexaNode current (from code/config)
- Discord: `https://discord.gg/dJpMDfgUQq` (used in nav, hero, footer) — real.
- Contact page exists (`/contact`) + `/api/contact` route. Support pages: `/sla`, `/aup`,
  `/fup`, `/refund-policy`, `/terms-of-services`, `/privacy-policy`, `/docs`.
- Client area link `https://billing.vexanode.gg` (navbar CTA).
- Panel preview / coins / console are DEMO UI — must be labeled "Demo/Preview".

## Decisions
- Surface support channels consistently: Discord (real), contact form (real), docs.
- Add a visible "Demo/Preview" label to any mock panel/console/coins UI.
- Only add a "Status" link if a real status page URL exists (owner — see todo-real-data).
- Trust row shows only provable items: DDoS protection (if real infra), 24/7 support (only
  if truly staffed), money-back window (from refund-policy copy) — otherwise omit.

## Onboarding flow (target)
1. Land on service page → 2. Pick plan (real specs/price) → 3. CTA to client area/billing
→ 4. Support via Discord/ticket if stuck. Keep one primary CTA per view.

## Implementation checklist
- [ ] Label all demo/mock UI as "Demo".
- [ ] Ensure Discord + contact + docs reachable from every page (footer).
- [ ] Pull refund window text from `/refund-policy` into pricing FAQ (if real).
- [ ] Add status link only when real URL provided.

## Open questions / needs real data
- Real support hours (is it truly 24/7?), status page URL, live-chat availability, ticket
  SLA, support email. See [todo-real-data.md](todo-real-data.md).
