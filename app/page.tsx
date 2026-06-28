// VexaNode — landing page
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingHero from "./components/landing/LandingHero";
import FeatureGrid from "./components/landing/FeatureGrid";
import ProductsSection from "./components/landing/ProductsSection";
import GlobeSection from "./components/landing/GlobeSection";
import Testimonials from "./components/landing/Testimonials";
import FaqSection from "./components/landing/FaqSection";
import CtaSection from "./components/landing/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white">
      <Navbar />
      <main>
        <LandingHero />
        <FeatureGrid />
        <ProductsSection />
        <GlobeSection />
        <Testimonials />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
