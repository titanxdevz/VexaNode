import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron, Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { LayoutWrapper } from "./components/layout-wrapper";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";

import { QueryProvider } from "./components/QueryProvider";
import { ToastProvider } from "./components/ToastProvider";
import CookieConsent from "./components/CookieConsent";
import SummerSalePopup from "./components/SummerSalePopup";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
// hi there
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});
// hello again
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#1e3a8a",
}

export const metadata: Metadata = {
  title: {
    default: "VexaNode - Game Hosting, VPS & Dedicated Servers",
    template: "%s | VexaNode"
  },
  description: "Premium game hosting, VPS & dedicated servers by VexaNode. High-performance infrastructure with 99.9% uptime, DDoS protection & 24/7 support.",
  keywords: [
    "game hosting",
    "minecraft hosting",
    "discord bot hosting",
    "VPS hosting",
    "dedicated servers",
    "cloud servers",
    "gaming servers",
    "VexaNode",
    "low latency hosting",
    "DDoS protection",
    "24/7 support",
    "custom server hosting",
    "modded game hosting",
    "server rental"
  ],
  authors: [{ name: "Anthony" }],
  creator: "Anthony",
  publisher: "VexaNode | NodeTemplate",
  category: "Game Hosting & Server Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Node.vexanode.cloud",
    siteName: "VexaNode - Game Hosting & Servers",
    title: "VexaNode - Game Hosting, VPS & Dedicated Servers",
    description: "Premium game hosting, VPS, and dedicated server solutions. High-performance infrastructure for gaming communities and developers with DDoS protection.",
    images: [
      {
        url: "https://Node.vexanode.cloud/meta/Banner.png",
        width: 1200,
        height: 630,
        alt: "VexaNode - Game Hosting, VPS & Dedicated Servers",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "VexaNode - Game Hosting, VPS & Dedicated Servers",
    description: "Premium game hosting and server solutions. High-performance infrastructure for gaming communities with DDoS protection and 24/7 support.",
    images: ["https://Node.vexanode.cloud/meta/Banner.png"]
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: "vzsKvhNUgAPlCbf1annB0Sl-bttSFos87mhOyQSU2aY",
  },

  applicationName: "VexaNode",
  referrer: "origin-when-cross-origin",

  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/logo.png',
      },
    ],
  },

  alternates: {
    canonical: "https://Node.vexanode.cloud"
  },
  other: {
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml",
    "terms-of-service": "https://Node.vexanode.cloud/terms-of-services",
    "privacy-policy": "https://Node.vexanode.cloud/privacy-policy"
  }
};
// yo yo, wassup, ma name is big A aka the big ANTHONYYYYYYYYYYYYYYYYYY. like my work so far? rate it a 5 star on BBB pweaseeeeeeeeee
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VexaNode" />
        <meta name="crawl-delay" content="10" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VexaNode",
              "url": "https://Node.vexanode.cloud",
              "logo": "https://Node.vexanode.cloud/logo.png",
              "description": "Premium game hosting, VPS, and dedicated server solutions for gaming communities and developers",
              "serviceType": ["Game Server Hosting", "VPS Hosting", "Dedicated Servers", "Cloud Infrastructure"],
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Gaming & Server Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Game Server Hosting",
                      "description": "High-performance game servers with DDoS protection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VPS Hosting",
                      "description": "Virtual private servers with full root access"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dedicated Servers",
                      "description": "Bare metal servers for maximum performance"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://discord.gg/dJpMDfgUQq"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English",
                "serviceType": "Technical Support",
                "url": "https://discord.gg/dJpMDfgUQq"
              },
              "founder": {
                "@type": "Person",
                "name": "Anthony "
              },
              "termsOfService": "https://Node.vexanode.cloud/terms-of-services",
              "privacyPolicy": "https://Node.vexanode.cloud/privacy-policy"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${quicksand.variable} antialiased min-h-screen bg-black text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <LanguageProvider>
            <CurrencyProvider>
              <QueryProvider>
                <ToastProvider>
                  <LayoutWrapper>
                    {children}
                    <SummerSalePopup />
                    <Analytics />
                  </LayoutWrapper>
                </ToastProvider>
              </QueryProvider>
              <CookieConsent />
            </CurrencyProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
