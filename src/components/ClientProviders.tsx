'use client';

import dynamic from 'next/dynamic';

// All client-only (ssr:false) components live here so they can be
// used from the Server Component layout.tsx without triggering the
// "ssr:false is not allowed in Server Components" build error.

const ScrollingNewsTicker  = dynamic(() => import('@/components/ScrollingNewsTicker'),  { ssr: false });
const MarketPulse          = dynamic(() => import('@/components/MarketPulse'),           { ssr: false });
const ReadingProgress      = dynamic(() => import('@/components/ReadingProgress'),       { ssr: false });
const BackToTop            = dynamic(() => import('@/components/BackToTop'),             { ssr: false });
const CookieConsent        = dynamic(() => import('@/components/CookieConsent'),         { ssr: false });
const ExitIntentPopup      = dynamic(() => import('@/components/ExitIntentPopup'),       { ssr: false });
const WebVitals            = dynamic(() => import('@/components/WebVitals'),             { ssr: false });
const AnalyticsProvider    = dynamic(() => import('@/components/AnalyticsProvider').then(m => ({ default: m.AnalyticsProvider })), { ssr: false });
const OnboardingFlow       = dynamic(() => import('@/components/OnboardingFlow'),        { ssr: false });
const MobileBottomNav      = dynamic(() => import('@/components/MobileBottomNav'),       { ssr: false });
const CommandPalette       = dynamic(() => import('@/components/CommandPalette'),        { ssr: false });
const KeyboardShortcutHint = dynamic(() => import('@/components/KeyboardShortcutHint'), { ssr: false });
const SocialProofBanner    = dynamic(() => import('@/components/SocialProofBanner'),     { ssr: false });
const EventTracker         = dynamic(() => import('@/components/EventTracker'),          { ssr: false });
const AIChatAssistant      = dynamic(() => import('@/components/AIChatAssistant'),       { ssr: false });
const PerformanceMonitor   = dynamic(() => import('@/components/PerformanceMonitor'),    { ssr: false });
const XPNotificationSystem = dynamic(() => import('@/components/XPNotificationSystem'), { ssr: false });

export default function ClientProviders() {
  return (
    <>
      <ScrollingNewsTicker />
      <MarketPulse />
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
    </>
  );
}
