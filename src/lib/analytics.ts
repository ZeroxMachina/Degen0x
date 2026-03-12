/**
 * Analytics Event Tracking Library
 *
 * A lightweight custom event tracker supporting:
 * - Umami Analytics integration
 * - Google Analytics 4 (GA4) event forwarding
 * - Event queuing when analytics not loaded
 * - Do Not Track browser setting respect
 */

// Types for analytics events
export interface AnalyticsEvent {
  eventName: string;
  eventData?: Record<string, string | number | boolean>;
  timestamp?: number;
}

// Event queue for when analytics libraries haven't loaded yet
let eventQueue: AnalyticsEvent[] = [];
let analyticsReady = false;

/**
 * Check if user has "Do Not Track" enabled
 */
function respectsDoNotTrack(): boolean {
  if (typeof navigator === 'undefined') return false;

  const dnt = navigator.doNotTrack;
  return dnt === '1' || dnt === 'yes';
}

/**
 * Send event to GA4 via gtag
 */
function sendToGA4(eventName: string, eventData?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined' || respectsDoNotTrack()) return;

  if (typeof gtag !== 'undefined') {
    try {
      gtag('event', eventName, eventData || {});
    } catch (error) {
      console.error('GA4 tracking error:', error);
    }
  }
}

/**
 * Send event to Umami Analytics
 */
function sendToUmami(eventName: string, eventData?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined' || respectsDoNotTrack()) return;

  if (typeof umami !== 'undefined' && umami.track) {
    try {
      // Umami accepts event name and data object
      umami.track(eventName, eventData || {});
    } catch (error) {
      console.error('Umami tracking error:', error);
    }
  }
}

/**
 * Queue event for later processing
 */
function queueEvent(event: AnalyticsEvent): void {
  event.timestamp = Date.now();
  eventQueue.push(event);
}

/**
 * Process queued events
 */
function processQueuedEvents(): void {
  while (eventQueue.length > 0) {
    const event = eventQueue.shift();
    if (event) {
      sendToGA4(event.eventName, event.eventData);
      sendToUmami(event.eventName, event.eventData);
    }
  }
}

/**
 * Track a custom event
 */
export function trackEvent(eventName: string, eventData?: Record<string, string | number | boolean>): void {
  if (respectsDoNotTrack()) return;

  const event: AnalyticsEvent = {
    eventName,
    eventData,
  };

  if (analyticsReady) {
    sendToGA4(eventName, eventData);
    sendToUmami(eventName, eventData);
  } else {
    queueEvent(event);
  }
}

/**
 * Mark analytics as ready and process queued events
 */
export function markAnalyticsReady(): void {
  analyticsReady = true;
  processQueuedEvents();
}

/**
 * Track page view event
 */
export function trackPageView(pathname: string, title?: string): void {
  trackEvent('page_view', {
    page_path: pathname,
    page_title: title || document.title,
  });
}

/**
 * Track tool usage
 */
export function trackToolUsage(toolName: string, toolCategory?: string): void {
  trackEvent('tool_usage', {
    tool_name: toolName,
    tool_category: toolCategory || 'unknown',
  });
}

/**
 * Track affiliate click
 */
export function trackAffiliateClick(exchange: string, source?: string): void {
  trackEvent('affiliate_click', {
    exchange,
    source: source || 'organic',
  });
}

/**
 * Track newsletter signup
 */
export function trackNewsletterSignup(source?: string): void {
  trackEvent('newsletter_signup', {
    signup_source: source || 'unknown',
  });
}

/**
 * Track search query
 */
export function trackSearchQuery(query: string, resultCount?: number): void {
  trackEvent('search_query', {
    search_query: query,
    result_count: resultCount || 0,
  });
}

/**
 * Track CTA (Call-To-Action) click
 */
export function trackCTAClick(ctaText: string, ctaLocation?: string): void {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation || 'unknown',
  });
}

/**
 * Track time on page
 */
export function trackTimeOnPage(pathname: string, timeInSeconds: number): void {
  trackEvent('time_on_page', {
    page_path: pathname,
    time_seconds: Math.round(timeInSeconds),
  });
}

/**
 * Track external link click
 */
export function trackExternalLinkClick(url: string, linkText?: string): void {
  trackEvent('external_link_click', {
    url,
    link_text: linkText || 'unknown',
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(pathname: string, depth: number): void {
  trackEvent('scroll_depth', {
    page_path: pathname,
    scroll_depth: depth,
  });
}

/**
 * Track conversion event
 */
export function trackConversion(conversionType: string, value?: number): void {
  trackEvent('conversion', {
    conversion_type: conversionType,
    conversion_value: value || 0,
  });
}

/**
 * Get current event queue length
 */
export function getQueueLength(): number {
  return eventQueue.length;
}

/**
 * Clear event queue (for testing purposes)
 */
export function clearQueue(): void {
  eventQueue = [];
}

// Declare global gtag and umami functions
declare let gtag: Function;
declare let umami: {
  track: (eventName: string, data?: Record<string, any>) => void;
};
