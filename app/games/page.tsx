import type { Metadata } from "next";
import GamesClient from "./GamesClient";
import { constructMetadata, generateServiceSchema, generateBreadcrumbSchema, generateProductSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Minecraft Server Hosting | VexaNode",
  description:
    "High-performance Minecraft server hosting with modern AMD infrastructure, fast deployment, DDoS protection and flexible plans from VexaNode.",
  canonical: "/games",
  keywords: [
    "Minecraft server hosting",
    "AMD EPYC Minecraft",
    "PaperMC hosting",
    "Spigot hosting",
    "Modpack server hosting",
    "Purpur hosting",
    "DDoS protected Minecraft",
  ],
});

export default function GameHostingPage() {
  const serviceJsonLd = generateServiceSchema({
    name: "Minecraft Server Hosting",
    description:
      "High-performance Minecraft server hosting with modern AMD infrastructure, fast deployment, DDoS protection and flexible plans from VexaNode.",
    url: "/games",
    serviceType: "Game Server Hosting",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Minecraft Hosting", url: "/games" },
  ]);

  // Real base (INR) starting price from GamesClient plans.
  const productJsonLd = generateProductSchema({
    name: "Minecraft Server Hosting",
    description:
      "Minecraft server hosting on AMD infrastructure with DDoS protection and flexible plans.",
    url: "/games",
    priceCurrency: "INR",
    offers: [{ name: "Minecraft Hosting (from)", price: 99 }],
  });

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
      <GamesClient />
    </>
  );
}
