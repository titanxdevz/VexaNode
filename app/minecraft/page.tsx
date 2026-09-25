import type { Metadata } from "next";
import GamesClient from "../games/GamesClient";
import { constructMetadata, generateServiceSchema, generateBreadcrumbSchema, generateProductSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Minecraft Server Hosting — VexaNode",
  description:
    "Deploy high-performance Minecraft server hosting with dedicated AMD Ryzen 9 and EPYC infrastructure, 1-click Paper/Fabric/Forge installers, and zero-lag NVMe storage.",
  canonical: "/minecraft",
  keywords: [
    "Minecraft server hosting",
    "AMD Ryzen Minecraft",
    "PaperMC hosting",
    "Spigot hosting",
    "Forge server hosting",
    "Fabric Minecraft hosting",
    "Purpur hosting",
    "DDoS protected Minecraft",
  ],
});

export default function MinecraftPage() {
  const serviceJsonLd = generateServiceSchema({
    name: "Minecraft Server Hosting",
    description:
      "High-performance Minecraft server hosting with modern AMD infrastructure, fast deployment, DDoS protection and flexible plans from VexaNode.",
    url: "/minecraft",
    serviceType: "Game Server Hosting",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Minecraft Hosting", url: "/minecraft" },
  ]);

  const productJsonLd = generateProductSchema({
    name: "Minecraft Server Hosting",
    description:
      "Minecraft server hosting on AMD infrastructure with DDoS protection and flexible plans.",
    url: "/minecraft",
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
