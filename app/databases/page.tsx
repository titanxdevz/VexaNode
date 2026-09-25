import type { Metadata } from "next";
import { constructMetadata, serviceSchema, breadcrumbSchema, productSchema } from "@/lib/seo";
import DatabasesClient from "./DatabasesClient";

export const metadata: Metadata = constructMetadata({
  title: "Managed Database Hosting — VexaNode",
  description:
    "High-performance managed MongoDB, PostgreSQL, and Redis caching databases on ultra-fast NVMe storage. Automated snapshots, private networking, and instant provisioning.",
  canonical: "/databases",
  keywords: [
    "database hosting",
    "managed mongodb hosting",
    "postgresql hosting",
    "redis cloud hosting",
    "cheap database hosting",
    "fast nvme databases",
  ],
});

export default function DatabasesPage() {
  const serviceJsonLd = serviceSchema({
    name: "Managed Database Hosting",
    description:
      "High-performance managed MongoDB, PostgreSQL, and Redis databases on enterprise NVMe storage with automated snapshots.",
    url: "/databases",
    serviceType: "Managed Cloud Database",
  });

  const breadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Database Hosting", url: "/databases" },
  ]);

  const productJsonLd = productSchema({
    name: "Managed Database Hosting",
    description:
      "Managed MongoDB, PostgreSQL, and Redis databases on NVMe storage with automated snapshots.",
    url: "/databases",
    priceCurrency: "INR",
    offers: [{ name: "Managed Database (from)", price: 40 }],
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
      <DatabasesClient />
    </>
  );
}

