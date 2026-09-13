import type { Metadata } from "next";

export const SITE_URL = "https://vexanode.cloud";
export const SITE_NAME = "VexaNode";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export interface MetadataProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
}

/**
 * Centralized, type-safe SEO metadata constructor for Next.js App Router.
 * Ensures consistent canonical URLs, Open Graph, Twitter Cards, and robots directives.
 */
export function constructMetadata({
  title,
  description,
  canonical,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  keywords,
  type = "website",
  publishedTime,
  authors,
}: MetadataProps): Metadata {
  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical.startsWith("/") ? "" : "/"}${canonical}`
    : SITE_URL;

  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`;

  const googleVerification =
    process.env.GOOGLE_SITE_VERIFICATION ||
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
    undefined;

  return {
    title,
    description,
    keywords: keywords || [
      "Minecraft hosting",
      "Discord bot hosting",
      "Cloud VPS",
      "Lavalink hosting",
      "SA-MP hosting",
      "Game server hosting",
      "VexaNode",
      "DDoS protection",
      "AMD Ryzen hosting",
      "AMD EPYC hosting",
    ],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@vexanode",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...(googleVerification && {
      verification: {
        google: googleVerification,
      },
    }),
  };
}

/**
 * Structured Data (JSON-LD) Helpers
 */

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VexaNode",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "High-performance game hosting, Cloud VPS, Discord bot hosting, and Lavalink audio nodes with enterprise DDoS protection.",
    sameAs: ["https://discord.gg/dJpMDfgUQq", "https://twitter.com/vexanode", "https://github.com/titanxdevz/VexaNode"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://discord.gg/dJpMDfgUQq",
      availableLanguage: ["English"],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VexaNode",
    url: SITE_URL,
    description: "High-performance Minecraft hosting, Discord bot hosting, Cloud VPS and Lavalink hosting with fast deployment and DDoS protection.",
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "VexaNode",
      url: SITE_URL,
    },
    url: url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`,
    serviceType,
    areaServed: "Worldwide",
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url.startsWith("/") ? "" : "/"}${item.url}`,
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`,
    url: url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`,
    author: {
      "@type": "Organization",
      name: author || "VexaNode Team",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "VexaNode",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: datePublished || new Date().toISOString(),
  };
}

// Aliases for convenience
export const serviceSchema = generateServiceSchema;
export const organizationSchema = generateOrganizationSchema;
export const websiteSchema = generateWebSiteSchema;
export const breadcrumbSchema = generateBreadcrumbSchema;
export const articleSchema = generateArticleSchema;
