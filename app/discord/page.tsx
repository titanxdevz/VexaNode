import type { Metadata } from "next";
import DiscordClient from "./DiscordClient";
import { faqs } from "./faqs";
import { constructMetadata, generateServiceSchema, generateBreadcrumbSchema, generateProductSchema, generateFaqPageSchema } from "@/lib/seo";

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

  // Prices are the real base (INR) monthly plan prices from DiscordClient.
  const productJsonLd = generateProductSchema({
    name: "Discord Bot Hosting",
    description:
      "Node.js and Python Discord bot hosting on DDoS-protected infrastructure.",
    url: "/discord",
    priceCurrency: "INR",
    offers: [{ name: "Discord Bot Hosting (from)", price: 35 }],
  });

  const faqJsonLd = generateFaqPageSchema(
    faqs.map((f) => ({ question: f.q, answer: f.a }))
  );

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <DiscordClient />
    </>
  );
}
