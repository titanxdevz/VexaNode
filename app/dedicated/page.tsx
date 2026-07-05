'use client'
import { lazy, Suspense } from 'react'
import Navbar from "../components/Navbar"
import VDSPricingSection from "../components/dedicated/VDSPricingSection"
import { PageMeta } from "../components/PageMeta"

const OSSelectionSection = lazy(() => import("../components/vps/OSSelectionSection"))
const FeaturesSection = lazy(() => import("../components/FeaturesSection"))
const LocationsSection = lazy(() => import("../components/LocationsSection"))
const FAQSection = lazy(() => import("../components/FAQSection"))
const Footer = lazy(() => import("../components/Footer"))
const PanelShowcase = lazy(() => import("../components/PanelShowcase"))


export default function DedicatedPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <PageMeta title="Dedicated Servers" />
      <Navbar />
      <VDSPricingSection />
      <Suspense fallback={<div className="h-64 bg-zinc-900/50 animate-pulse rounded-2xl mx-4 my-8" />}>
        <OSSelectionSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-80 bg-zinc-900/50 animate-pulse rounded-2xl mx-4 my-8" />}>
        <FeaturesSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-zinc-900/50 animate-pulse rounded-2xl mx-4 my-8" />}>
        <LocationsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-64 bg-zinc-900/50 animate-pulse rounded-2xl mx-4 my-8" />}>
        <FAQSection />
      </Suspense>

       <Suspense fallback={<div className="h-72 bg-zinc-900/50 animate-pulse rounded-2xl mx-4 my-8" />}>
        <PanelShowcase />
      </Suspense>
      
      <Suspense fallback={<div className="h-48 bg-zinc-900/50 animate-pulse rounded-2xl mx-4 my-8" />}>
        <Footer />
      </Suspense>
    </div>
  )
}