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
import { Analytics } from "@vercel/analytics/next";
import { constructMetadata, generateOrganizationSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#07090e",
};

export const metadata: Metadata = {
  ...constructMetadata({
    title: "VexaNode — Minecraft, VPS & Discord Bot Hosting",
    description:
      "VexaNode provides high-performance Minecraft hosting, Discord bot hosting, Cloud VPS and Lavalink hosting with fast deployment, modern AMD infrastructure and DDoS protection.",
    canonical: "/",
  }),
  applicationName: "VexaNode",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo.png", sizes: "702x687", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = generateOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="b63fw5tWAHnoKKQUEc0zKw"
          async
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${quicksand.variable} antialiased min-h-screen vx-bg vx-ink overflow-x-hidden selection:bg-[#d97757]/30`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
