'use client';

import { useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent, trackScrollDepth, trackExternalLinkClick, trackAffiliateClick } from '@/lib/analytics';

/**
 * EventTracker — Sprint 19
 * Deep event tracking: scroll depth milestones, affiliate clicks,
 * external link tracking, engagement scoring, conversion funnels.
 */

// Engagement score thresholds
const SCROLL_MILESTONES = [25, 50, 75, 90, 100];

export default function EventTracker() {
  const pathname = usePathname();
  const scrollMilestonesHit = useRef<Set<number>>(new Set());
  const engagementScore = useRef(0);
  const startTime = useRef(Date.now());

  // Reset on route change
  useEffect(() => {
    scrollMilestonesHit.current = new Set();
    engagementScore.current = 0;
    startTime.current = Date.now();
  }, [pathname]);

  // Scroll depth tracking with milestones
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) { ticking = false; return; }

        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        SCROLL_MILESTONES.forEach(milestone => {
          if (scrollPercent >= milestone && !scrollMilestonesHit.current.has(milestone)) {
            scrollMilestonesHit.current.add(milestone);
            trackScrollDepth(pathname, milestone);

            // Engagement scoring
            engagementScore.current += milestone >= 75 ? 20 : 10;
          }
        });

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // External link & affiliate click tracking
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.href;
      if (!href) return;

      // External link
      try {
        const url = new URL(href);
        if (url.hostname !== window.location.hostname) {
          trackExternalLinkClick(href, anchor.textContent?.trim() || '');

          // Check if it's an affiliate link
          const affiliatePatterns = [
            'binance', 'coinbase', 'kraken', 'bybit', 'okx',
            'kucoin', 'gate.io', 'bitget', 'mexc', 'huobi',
            'ledger', 'trezor', 'exodus',
          ];

          const matchedAffiliate = affiliatePatterns.find(p =>
            url.hostname.includes(p) || href.includes(p)
          );

          if (matchedAffiliate) {
            trackAffiliateClick(matchedAffiliate, pathname);
            engagementScore.current += 30;

            // Track conversion funnel step
            trackEvent('funnel_affiliate_click', {
              exchange: matchedAffiliate,
              page_path: pathname,
              engagement_score: engagementScore.current,
              time_on_page: Math.round((Date.now() - startTime.current) / 1000),
            });
          }
        }
      } catch {
        // invalid URL, ignore
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, [pathname]);

  // Tool usage tracking (detect interaction with calculators/tools)
  useEffect(() => {
    if (!pathname.startsWith('/tools/')) return;

    const handleInput = () => {
      engagementScore.current += 5;
    };

    const handleSubmit = () => {
      engagementScore.current += 15;
      trackEvent('tool_calculation', {
        tool_path: pathname,
        engagement_score: engagementScore.current,
      });
    };

    document.addEventListener('input', handleInput, { passive: true });
    document.addEventListener('submit', handleSubmit);

    return () => {
      document.removeEventListener('input', handleInput);
      document.removeEventListener('submit', handleSubmit);
    };
  }, [pathname]);

  // Send engagement score on page leave
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (engagementScore.current > 0) {
        trackEvent('engagement_score', {
          page_path: pathname,
          score: engagementScore.current,
          time_on_page: Math.round((Date.now() - startTime.current) / 1000),
          scroll_depth: Math.max(...Array.from(scrollMilestonesHit.current), 0),
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      handleBeforeUnload(); // also fire on route change
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname]);

  return null; // No UI
}
