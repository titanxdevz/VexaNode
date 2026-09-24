import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingHero from "./components/landing/LandingHero";
import FeatureGrid from "./components/landing/FeatureGrid";
import ProductsSection from "./components/landing/ProductsSection";
import GlobeSection from "./components/landing/GlobeSection";
import Testimonials from "./components/landing/Testimonials";
import FaqSection from "./components/landing/FaqSection";
import CtaSection from "./components/landing/CtaSection";
import { constructMetadata, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "VexaNode — Minecraft, VPS & Discord Bot Hosting",
  description:
    "VexaNode provides high-performance Minecraft hosting, Discord bot hosting, Cloud VPS and Lavalink hosting with fast deployment, modern AMD infrastructure and DDoS protection.",
  canonical: "/",
});

export default function Home() {
  const organizationJsonLd = generateOrganizationSchema();
  const webSiteJsonLd = generateWebSiteSchema();

  return (
    <div className="min-h-screen vx-bg vx-ink">
      {/* Homepage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />

      <Navbar />
      <main>
        <LandingHero />
        <ProductsSection />
        <FeatureGrid />
        <GlobeSection />
        <Testimonials />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
