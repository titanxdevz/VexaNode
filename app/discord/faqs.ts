export type Faq = { q: string; a: string }

// Shared FAQ Q&A for the Discord Bot Hosting page.
// Imported by DiscordClient (for rendering) and page.tsx (for FAQPage JSON-LD),
// so the schema text always matches what is visibly rendered.
export const faqs: Faq[] = [
  {
    q: "Which programming languages and bot frameworks are supported?",
    a: "We support Node.js (Discord.js, Eris, Oceanic), Python (discord.py, disnake, hikari), Java (JDA, Discord4J), Go (Disgord, DiscordGo), C# (DSharpPlus), Rust, and Ruby with one-click environment versions."
  },
  {
    q: "How fast is deployment after ordering?",
    a: "Your Pterodactyl container is provisioned instantly upon payment confirmation. You will immediately receive access to your management panel, SFTP credentials, and web console."
  },
  {
    q: "Do you provide automated backups and MySQL databases?",
    a: "Yes! Every bot hosting plan includes automated cloud backups and free managed MySQL database instances that can be created with a single click in your panel."
  },
  {
    q: "Is DDoS protection included?",
    a: "All VexaNode containers are shielded by our multi-layer DDoS mitigation system to help keep your bot online during traffic spikes or malicious attacks."
  }
]
