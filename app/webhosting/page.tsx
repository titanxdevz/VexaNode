import type { Metadata } from "next";
import WebHostingPricingSection from "../components/webhosting/WebHostingPricingSection";
import FeaturesSection from "../components/FeaturesSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PanelShowcase from "../components/PanelShowcase";
import LocationsSection from "../components/LocationsSection";
import { constructMetadata, serviceSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "High Speed Web Hosting | cPanel & NVMe SSD | VexaNode",
  description:
    "Fast, secure, and reliable cPanel cloud web hosting with free SSL, automated daily backups, LiteSpeed web server, and DDoS protection.",
  canonical: "/webhosting",
  keywords: [
    "web hosting",
    "cpanel hosting",
    "litespeed web hosting",
    "cheap web hosting",
    "nvme web hosting",
    "wordpress hosting",
  ],
});

export default function WebHostingPage() {
  const serviceJsonLd = serviceSchema({
    name: "High Speed Web Hosting",
    description:
      "Fast cPanel web hosting powered by LiteSpeed, NVMe SSD storage, and free SSL certificates.",
    url: "/webhosting",
    serviceType: "Web Hosting Service",
  });

  const breadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Web Hosting", url: "/webhosting" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <Navbar />
      <WebHostingPricingSection />
      <FeaturesSection />
      <LocationsSection />
      <FAQSection />
      <PanelShowcase />
      <Footer />
    </div>
  );
}

