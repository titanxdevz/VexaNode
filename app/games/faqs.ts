// Shared Minecraft hosting FAQ content.
// Rendered visibly by GamesClient AND emitted as FAQPage JSON-LD by the
// /games and /minecraft server pages — the on-page text and schema MUST match.
export interface MinecraftFaq {
  q: string;
  a: string;
}

export const minecraftFaqs: MinecraftFaq[] = [
  {
    q: "Can I install any Minecraft version, Forge, Fabric, or Paper?",
    a: "Yes! Our game panel features 1-click installer eggs for Vanilla, PaperMC, Purpur, Spigot, Forge, Fabric, NeoForge, Mohist, BungeeCord, and Velocity, plus 1-click modpack installs from CurseForge and Modrinth.",
  },
  {
    q: "Which Java versions are supported?",
    a: "We provide automated 1-click switcher support for Java 8 (1.8-1.16), Java 11, Java 17 (1.17-1.20.4), and Java 21 (1.20.5+ and 1.21 Tricky Trials) with zero manual flag configuration needed.",
  },
  {
    q: "How fast is game server setup after ordering?",
    a: "Deployment is fast. Your Minecraft server is automatically provisioned and ready for players within moments of checkout.",
  },
  {
    q: "Do you provide DDoS protection for game servers?",
    a: "Yes! All game nodes are shielded by game-specific DDoS filtering that stops bot flood joins, null-ping attacks, and UDP reflection spam without raising tickrate latency.",
  },
  {
    q: "Can I upgrade my RAM or CPU later?",
    a: "Yes, you can upgrade your plan at any time without losing world saves, player data, whitelist, or custom plugin configurations.",
  },
  {
    q: "Where are your Minecraft server locations?",
    a: "We host Minecraft servers in India (Mumbai), Germany (Frankfurt), and the USA, so you can pick the region closest to your community for the lowest possible ping.",
  },
];
