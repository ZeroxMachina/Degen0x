"use client";

import { useEffect } from "react";

interface WebVital {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta?: number;
}

export default function WebVitals() {
  useEffect(() => {
    const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT || "/api/analytics";
    const isDevelopment = process.env.NODE_ENV === "development";

    // Thresholds for Core Web Vitals
    const thresholds = {
      LCP: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint
      FID: { good: 100, needsImprovement: 300 }, // First Input Delay
      CLS: { good: 0.1, needsImprovement: 0.25 }, // Cumulative Layout Shift
      TTFB: { good: 600, needsImprovement: 1200 }, // Time to First Byte
      INP: { good: 200, needsImprovement: 500 }, // Interaction to Next Paint
    };

    const getRating = (
      metric: string,
      value: number
    ): "good" | "needs-improvement" | "poor" => {
      const threshold = thresholds[metric as keyof typeof thresholds];
      if (!threshold) return "poor";
      if (value <= threshold.good) return "good";
      if (value <= threshold.needsImprovement) return "needs-improvement";
      return "poor";
    };

    const sendMetric = (metric: WebVital) => {
      const payload = {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        timestamp: new Date().toISOString(),
        url: typeof window !== "undefined" ? window.location.href : "",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      };

      if (isDevelopment) {
        console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric.rating);
      } else {
        // Send to analytics endpoint in production
        if (navigator.sendBeacon) {
          navigator.sendBeacon(endpoint, JSON.stringify(payload));
        } else {
          fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
            keepalive: true,
          }).catch(() => {
            // Silently fail - don't impact user experience
          });
        }
      }
    };

    // Track Largest Contentful Paint (LCP)
    const observeLCP = () => {
      try {
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          const metric: WebVital = {
            name: "LCP",
            value: Math.round(lastEntry.renderingStart || lastEntry.loadingTime),
            rating: getRating("LCP", Math.round(lastEntry.renderingStart || lastEntry.loadingTime)),
          };
          sendMetric(metric);
        });

        observer.observe({ type: "largest-contentful-paint", buffered: true });
        return () => observer.disconnect();
      } catch (e) {
        if (isDevelopment) console.warn("LCP observer not supported");
      }
    };

    // Track First Input Delay (FID) / Interaction to Next Paint (INP)
    const observeFIDINP = () => {
      try {
        const observer = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            const metric: WebVital = {
              name: entry.name === "first-input" ? "FID" : "INP",
              value: Math.round(entry.processingEnd - entry.startTime),
              rating: getRating(
                entry.name === "first-input" ? "FID" : "INP",
                Math.round(entry.processingEnd - entry.startTime)
              ),
            };
            sendMetric(metric);
          }
        });

        observer.observe({ type: "first-input", buffered: true });
        observer.observe({ type: "event", buffered: true });
        return () => observer.disconnect();
      } catch (e) {
        if (isDevelopment) console.warn("FID/INP observer not supported");
      }
    };

    // Track Cumulative Layout Shift (CLS)
    const observeCLS = () => {
      try {
        let clsValue = 0;
        let sessionValue = 0;
        let sessionTimeout: NodeJS.Timeout;

        const observer = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              const metric: WebVital = {
                name: "CLS",
                value: Math.round((clsValue + (entry as any).value) * 10000) / 10000,
                rating: getRating("CLS", clsValue + (entry as any).value),
              };
              clsValue += (entry as any).value;
              sessionValue += (entry as any).value;

              clearTimeout(sessionTimeout);
              sessionTimeout = setTimeout(() => {
                if (isDevelopment) {
                  console.log("[Web Vitals] CLS (session):", sessionValue);
                }
                sessionValue = 0;
              }, 1000);

              sendMetric(metric);
            }
          }
        });

        observer.observe({ type: "layout-shift", buffered: true });
        return () => observer.disconnect();
      } catch (e) {
        if (isDevelopment) console.warn("CLS observer not supported");
      }
    };

    // Track Time to First Byte (TTFB)
    const observeTTFB = () => {
      try {
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          for (const entry of entries) {
            if (entry.name === "measure" && (entry as any).name === "TTFB") continue;

            const ttfb = Math.round(
              (entry as PerformanceNavigationTiming).responseStart -
                (entry as PerformanceNavigationTiming).fetchStart
            );

            if (ttfb > 0) {
              const metric: WebVital = {
                name: "TTFB",
                value: ttfb,
                rating: getRating("TTFB", ttfb),
              };
              sendMetric(metric);
              return; // Only send once
            }
          }
        });

        observer.observe({ type: "navigation", buffered: true });
        return () => observer.disconnect();
      } catch (e) {
        // TTFB fallback using performance.timing
        if (typeof window !== "undefined" && window.performance) {
          const { fetchStart, responseStart } = window.performance.timing;
          if (fetchStart && responseStart) {
            const ttfb = Math.round(responseStart - fetchStart);
            if (ttfb > 0) {
              const metric: WebVital = {
                name: "TTFB",
                value: ttfb,
                rating: getRating("TTFB", ttfb),
              };
              sendMetric(metric);
            }
          }
        }
      }
    };

    // Initialize observers
    const disconnectLCP = observeLCP();
    const disconnectFIDINP = observeFIDINP();
    const disconnectCLS = observeCLS();
    const disconnectTTFB = observeTTFB();

    // Cleanup on unmount
    return () => {
      disconnectLCP?.();
      disconnectFIDINP?.();
      disconnectCLS?.();
      disconnectTTFB?.();
    };
  }, []);

  return null;
}
