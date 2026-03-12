// Force all pages to render dynamically (SSR) to avoid 45-minute Vercel build timeout
// Static generation of 826+ pages exceeds the Pro Trial build limit
// Pages are still CDN-cached by Vercel after first request, so performance is preserved
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MarketStatsBar from "@/components/MarketStatsBar";
import PriceTicker from "@/components/PriceTicker";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import WalletProvider from "@/components/WalletProvider";
import { DegenModeProvider } from "@/components/DegenMode";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import RiskDisclaimer from "@/components/RiskDisclaimer";
import WebVitals from "@/components/WebVitals";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import OnboardingFlow from "@/components/OnboardingFlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Compare Crypto Exchanges, Wallets & DeFi`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Compare Crypto Exchanges, Wallets & DeFi Protocols`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Compare Crypto Exchanges, Wallets & DeFi`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D043RT3BPM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-D043RT3BPM');`,
          }}
        />
        <link rel="dns-prefetch" href="https://api.coingecko.com" />
        <link rel="preconnect" href="https://api.coingecko.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0d1117" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="degen0x Learn Articles" href="/feed.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t)}else{document.documentElement.setAttribute('data-theme','light')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.className} relative overflow-x-hidden`}>
        <WalletProvider>
          <DegenModeProvider>
            <ThemeProvider>
              <Header />
              <main className="min-h-screen">
                {children}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <RiskDisclaimer />
                </div>
              </main>
              <Footer />
              <ReadingProgress />
              <BackToTop />
              <CookieConsent />
              <ExitIntentPopup />
              <WebVitals />
              <AnalyticsProvider />
              <OnboardingFlow />
            </ThemeProvider>
          </DegenModeProvider>
        </WalletProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').then(
                    (registration) => {
                      console.log('Service Worker registered successfully:', registration);
                    },
                    (error) => {
                      console.log('Service Worker registration failed:', error);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
