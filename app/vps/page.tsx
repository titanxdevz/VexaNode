import type { Metadata } from "next";
import VpsClient from "./VpsClient";
import { constructMetadata, generateServiceSchema, generateBreadcrumbSchema, generateFaqPageSchema } from "@/lib/seo";
import { vpsFaqs } from "./faqs";

export const metadata: Metadata = constructMetadata({
  title: "VPS Hosting India | NVMe KVM Cloud VPS with Root Access | VexaNode",
  description:
    "VPS hosting in India, Germany & USA on AMD Ryzen with Gen4 NVMe storage, full root access, KVM virtualization and always-on DDoS protection. Custom Cloud VPS deployments.",
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

  const faqJsonLd = generateFaqPageSchema(
    vpsFaqs.map((f) => ({ question: f.q, answer: f.a }))
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <VpsClient />
    </>
  );
}
