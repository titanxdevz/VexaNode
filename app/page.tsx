// The Main Page
'use client'
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import PanelShowcase from "./components/PanelShowcase"
import LocationsSection from "./components/LocationsSection"
import FAQSection from "./components/FAQSection"
import PricingSection from "./components/PricingSection"
import ReviewMarquee from "./components/ReviewMarquee"
import ComparisonSection from "./components/ComparisonSection"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030408] text-white transition-colors duration-300">
      <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ComparisonSection />
        <PricingSection />
        <ReviewMarquee />
        <LocationsSection />
        <FAQSection />
        <PanelShowcase />
        <Footer />
    </div>
  )
}

// hey smexy, i love you bb :0-
