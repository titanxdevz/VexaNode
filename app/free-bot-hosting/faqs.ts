export type Faq = { q: string; a: string }

// Shared FAQ Q&A for the Free Bot Hosting page.
// Imported by the page for both visible rendering and FAQPage JSON-LD,
// so the schema text always matches what is visibly rendered.
export const faqs: Faq[] = [
  {
    q: "Is VexaNode Free Bot Hosting really 100% free?",
    a: "Yes, completely free forever! No credit card, payment details, or hidden fees are required. You get a dedicated Pterodactyl container simply by being a member of our Discord server."
  },
  {
    q: "What hardware specs do I get on the Free Plan?",
    a: "You get 50% vCPU core allocation, 512 MB DDR4/DDR5 RAM, 1 GB NVMe SSD storage, unmetered network bandwidth, and full web console access."
  },
  {
    q: "Which bot programming languages and frameworks are supported?",
    a: "We support Node.js (Discord.js, Eris), Python (discord.py, disnake, hikari), Java (JDA), Rust (serenity, poise), Go, and custom binary builds with instant package installation."
  },
  {
    q: "How do I claim my free bot container?",
    a: "1. Join our Discord community at discord.gg/dJpMDfgUQq\n2. Navigate to the #free-bot-hosting channel\n3. Click claim to receive your automated Pterodactyl credentials in seconds!"
  },
  {
    q: "Can I upgrade to a premium plan later?",
    a: "Yes! When your bot joins many guilds and needs more RAM or dedicated CPU threads, you can upgrade seamlessly without data loss or downtime."
  }
]
