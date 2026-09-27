// Shared Minecraft modpack hosting FAQ content.
// Rendered visibly by ModpackClient AND emitted as FAQPage JSON-LD by the
// /minecraft-modpack-hosting server page — the on-page text and schema MUST match.
export interface ModpackFaq {
  q: string;
  a: string;
}

export const modpackFaqs: ModpackFaq[] = [
  {
    q: "How do I install a CurseForge or Modrinth modpack?",
    a: "Every plan includes 1-click modpack installers. Paste a CurseForge or Modrinth pack ID or URL into the panel, pick the version, and the correct loader and mods are downloaded and configured automatically — no manual JAR uploads needed.",
  },
  {
    q: "How much RAM does a modpack server need?",
    a: "Light packs under 50 mods run well on 4 GB. Medium 50-150 mod packs want 6 GB. Heavy 150+ mod packs and kitchen-sink packs like All the Mods need 8-12 GB, while RLCraft is comfortable on 6-8 GB. More concurrent players raises these figures.",
  },
  {
    q: "Which mod loaders do you support?",
    a: "We support Forge, Fabric, NeoForge, and Quilt, plus hybrid loaders like Mohist. The panel switches loaders and Java versions in one click, so you can move between packs without rebuilding your server.",
  },
  {
    q: "Do modpack servers include DDoS protection?",
    a: "Yes. Every modpack server sits behind always-on, game-aware DDoS mitigation that absorbs volumetric L3/L4 floods and drops Minecraft-specific L7 abuse like BungeeCord spoof joins and null-ping packets, at no extra cost.",
  },
  {
    q: "Can I upgrade RAM as my modpack grows?",
    a: "Yes. You can upgrade memory and CPU at any time without losing your world, mods, configs, or player data, so you can start small and scale up as your pack or community grows.",
  },
];
