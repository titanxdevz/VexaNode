import type { Metadata } from "next";
import DiscordClient from "./DiscordClient";
import { constructMetadata, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Discord Bot Hosting | Node.js & Python | VexaNode",
  description:
    "Deploy Discord bots with reliable Node.js and Python bot hosting, fast deployment, scalable resources and DDoS-protected infrastructure.",
  canonical: "/discord",
  keywords: [
    "Discord bot hosting",
    "Python bot hosting",
    "Node.js bot hosting",
    "Pterodactyl bot hosting",
    "24/7 Discord bot",
    "Discord.js hosting",
    "discord.py hosting",
    "Free bot hosting",
  ],
});

export default function DiscordBotPage() {
  const serviceJsonLd = generateServiceSchema({
    name: "Discord Bot Hosting",
    description:
      "Deploy Discord bots with reliable Node.js and Python bot hosting, fast deployment, scalable resources and DDoS-protected infrastructure.",
    url: "/discord",
    serviceType: "Discord Bot Hosting",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Discord Bot Hosting", url: "/discord" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <DiscordClient />
    </>
  );
}
