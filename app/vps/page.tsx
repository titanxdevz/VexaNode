import type { Metadata } from "next";
import VpsClient from "./VpsClient";
import { constructMetadata, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Cloud VPS Hosting | VexaNode",
  description:
    "Deploy high-performance Cloud VPS servers with modern AMD processors, NVMe storage, fast networking and DDoS-protected infrastructure.",
  canonical: "/vps",
  keywords: [
    "Cloud VPS hosting",
    "AMD Ryzen VPS",
    "KVM VPS",
    "NVMe VPS hosting",
    "Linux VPS",
    "Root access VPS",
    "India VPS",
    "Germany VPS",
    "USA VPS",
  ],
});

export default function VPSPage() {
  const serviceJsonLd = generateServiceSchema({
    name: "Cloud VPS Hosting",
    description:
      "Deploy high-performance Cloud VPS servers with modern AMD processors, NVMe storage, fast networking and DDoS-protected infrastructure.",
    url: "/vps",
    serviceType: "Cloud Compute & Virtual Private Servers",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cloud VPS", url: "/vps" },
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
      <VpsClient />
    </>
  );
}
