export type Faq = { q: string; a: string }

// Shared FAQ Q&A for the Lavalink Hosting page.
// Imported by LavalinkClient (for rendering) and page.tsx (for FAQPage JSON-LD),
// so the schema text always matches what is visibly rendered.
export const faqs: Faq[] = [
  {
    q: "What is the difference between Managed and Self-Managed?",
    a: "Managed Lavalink is completely handled by our team with automated setup, YouTube/Spotify plugin configurations, ongoing health monitoring, and auto-restarts. Self-Managed gives you direct Pterodactyl panel access to modify JVM arguments, YAML configuration, and upload custom plugins."
  },
  {
    q: "Which Discord bot libraries are supported?",
    a: "All major Lavalink client libraries work seamlessly: Discord.js (Lavalink-Client, Poru, Kazagumo, Erela.js, Shoukaku), Python (Wavelink, Lavalink.py, Mafic), Java (LavaPlayer, JDA Lavalink), Go, and C#."
  },
  {
    q: "Are YouTube and Spotify music sources supported?",
    a: "Yes! All nodes support YouTube, Spotify, SoundCloud, Apple Music, Deezer, Bandcamp, Twitch, and direct audio streams with active IPv6 rotating proxies."
  },
  {
    q: "How fast is deployment after ordering?",
    a: "Deployment is instantaneous. For Managed plans, connection credentials are sent immediately. For Self-Managed, your Pterodactyl container is active shortly after."
  }
]
