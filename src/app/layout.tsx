// Force all pages to render dynamically (SSR) to avoid 45-minute Vercel build timeout
// Static generation of 826+ pages exceeds the Pro Trial build limit
// Pages are still CDN-cached by Vercel after first request, so performance is preserved
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import nextDynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import WalletProvider from "@/components/WalletProvider";
import { DegenModeProvider } from "@/components/DegenMode";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import RiskDisclaimer from "@/components/RiskDisclaimer";
import { AchievementProvider } from "@/components/AchievementSystem";

// Dynamic imports for non-critical UI — reduces initial JS bundle by ~40%
const ScrollingNewsTicker = nextDynamic(() => import("@/components/ScrollingNewsTicker"), { ssr: false });
const MarketPulse = nextDynamic(() => import("@/components/MarketPulse"), { ssr: false });
const ReadingProgress = nextDynamic(() => import("@/components/ReadingProgress"), { ssr: false });
const BackToTop = nextDynamic(() => import("@/components/BackToTop"), { ssr: false });
const CookieConsent = nextDynamic(() => import("@/components/CookieConsent"), { ssr: false });
const ExitIntentPopup = nextDynamic(() => import("@/components/ExitIntentPopup"), { ssr: false });
const WebVitals = nextDynamic(() => import("@/components/WebVitals"), { ssr: false });
const AnalyticsProvider = nextDynamic(() => import("@/components/AnalyticsProvider").then(m => ({ default: m.AnalyticsProvider })), { ssr: false });
const OnboardingFlow = nextDynamic(() => import("@/components/OnboardingFlow"), { ssr: false });
const MobileBottomNav = nextDynamic(() => import("@/components/MobileBottomNav"), { ssr: false });
const CommandPalette = nextDynamic(() => import("@/components/CommandPalette"), { ssr: false });
const KeyboardShortcutHint = nextDynamic(() => import("@/components/KeyboardShortcutHint"), { ssr: false });
const SocialProofBanner = nextDynamic(() => import("@/components/SocialProofBanner"), { ssr: false });
const EventTracker = nextDynamic(() => import("@/components/EventTracker"), { ssr: false });
const AIChatAssistant = nextDynamic(() => import("@/components/AIChatAssistant"), { ssr: false });
const PerformanceMonitor = nextDynamic(() => import("@/components/PerformanceMonitor"), { ssr: false });
const XPNotificationSystem = nextDynamic(() => import("@/components/XPNotificationSystem"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Compare Crypto Exchanges, Wallets & DeFi`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "degen0x",
  },
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
  const jsonLd = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon-512.png`,
      description: SITE_DESCRIPTION,
      sameAs: [
        "https://twitter.com/degen0x",
        "https://github.com/degen0x",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: `${SITE_URL}/contact`,
      },
    },
  ];

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
        <meta name="theme-color" content="#6366f1" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#6366f1" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="alternate" type="application/rss+xml" title="degen0x Learn Articles" href="/feed.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="degen0x" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t)}else{document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.className} relative overflow-x-hidden`}>
        <WalletProvider>
          <DegenModeProvider>
            <ThemeProvider>
              <AchievementProvider>
                <MarketPulse />
                <Header />
                <ScrollingNewsTicker />
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
                <MobileBottomNav />
                <CommandPalette />
                <KeyboardShortcutHint />
                <SocialProofBanner />
                <EventTracker />
                <AIChatAssistant />
                <PerformanceMonitor />
                <XPNotificationSystem />
              </AchievementProvider>
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
