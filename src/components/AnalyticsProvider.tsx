'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackTimeOnPage, markAnalyticsReady } from '@/lib/analytics';

const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || 'placeholder-umami-id';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const timeOnPageRef = useRef<number>(0);
  const pageStartTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Inject Umami script tag if not already present
    if (typeof window !== 'undefined' && !window.umamiLoaded) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://analytics.umami.is/script.js';
      script.setAttribute('data-website-id', UMAMI_WEBSITE_ID);
      script.onload = () => {
        window.umamiLoaded = true;
        markAnalyticsReady();
      };
      script.onerror = () => {
        // Mark as ready even if Umami fails to load so other analytics can work
        markAnalyticsReady();
      };

      document.head.appendChild(script);
    } else if (typeof window !== 'undefined' && window.umamiLoaded) {
      // Umami already loaded
      markAnalyticsReady();
    }
  }, []);

  useEffect(() => {
    // Track page view on route change
    trackPageView(pathname, document.title);
    pageStartTimeRef.current = Date.now();

    // Track time on page when leaving
    return () => {
      const timeOnPage = (Date.now() - pageStartTimeRef.current) / 1000;
      if (timeOnPage > 0) {
        trackTimeOnPage(pathname, timeOnPage);
      }
    };
  }, [pathname]);

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

      // Store scroll depth for analytics (could be tracked separately if needed)
      timeOnPageRef.current = scrollPercent;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <>{children}</>;
}

declare global {
  interface Window {
    umamiLoaded?: boolean;
  }
}
