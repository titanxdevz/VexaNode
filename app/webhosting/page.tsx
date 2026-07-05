import WebHostingPricingSection from '../components/webhosting/WebHostingPricingSection';
import FeaturesSection from "../components/FeaturesSection"
import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import PanelShowcase from "../components/PanelShowcase"
import LocationsSection from '../components/LocationsSection';

export default function WebHostingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
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
