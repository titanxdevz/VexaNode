// Shared DDoS-protected game hosting FAQ content.
// Rendered visibly by DdosClient AND emitted as FAQPage JSON-LD by the
// /ddos-protected-game-hosting server page — the on-page text and schema MUST match.
export interface DdosFaq {
  q: string;
  a: string;
}

export const ddosFaqs: DdosFaq[] = [
  {
    q: "Is DDoS protection included for free?",
    a: "Yes. Always-on DDoS protection is included on every VexaNode game server at no extra cost — there is no separate add-on fee and no need to enable it manually. Every node is protected from the moment it deploys.",
  },
  {
    q: "What size of attacks can you absorb?",
    a: "Our network provides multi-Tbps of scrubbing capacity for volumetric L3/L4 floods such as UDP, SYN, and amplification attacks. Traffic is filtered at the edge across multiple points of presence before it can saturate your server.",
  },
  {
    q: "Do you filter game-specific Layer 7 attacks?",
    a: "Yes. Beyond volumetric protection we run game-aware Layer 7 filtering that drops application-level abuse like BungeeCord spoof joins, null-ping packets, and UDP reflection, keeping real players connected during an attack.",
  },
  {
    q: "Will DDoS protection add latency to my server?",
    a: "No. Mitigation runs inline at the network edge with low-jitter routing, so there is no latency penalty under normal conditions and legitimate players see no added ping while protection is active.",
  },
  {
    q: "Which games are protected?",
    a: "All of our game servers are protected, including Minecraft, SA-MP, Hytale, and Lavalink audio nodes, as well as titles like FiveM and Rust. The same always-on mitigation applies across every supported game.",
  },
];
