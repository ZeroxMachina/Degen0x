import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * Robots.txt configuration for degen0x
 * ─────────────────────────────────────────────────────────────────
 * Defines crawling rules for search engines and web crawlers.
 * Supports 2,275+ pages with proper indexing guidelines.
 *
 * Robots.txt tells search engines:
 * - Which paths to crawl and which to avoid
 * - How fast to crawl (crawlDelay)
 * - Where to find the sitemap
 * - Whether to respect noindex headers
 *
 * All rules are evaluated in order. Use specific user-agents for
 * targeted blocking of aggressive crawlers.
 *
 * Accessible at: /robots.txt
 * ─────────────────────────────────────────────────────────────────
 */

export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate daily (24 hours)

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Main rule: Allow all major search engines with smart rate limiting
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",             // API endpoints (not for indexing)
          "/api/*",            // All API sub-routes
          "/admin/",           // Admin pages (if any)
          "/_next/",           // Next.js internal files
          "/private/",         // Private content directories
          "/*.json",           // JSON data files
          "/.well-known/",     // Well-known files
          "/search",           // Search pages (avoid duplicate content)
          "/*?*",              // Pages with query parameters (avoid duplicates)
        ],
        crawlDelay: 0,         // No delay for major search engines
        userAgentSpecific: true,
      },

      // Google-specific rules
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/", "/*.json", "/.well-known/"],
      },

      // Bing-specific rules
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/", "/*.json", "/.well-known/"],
      },

      // Aggressive/bad-faith crawlers - block entirely
      {
        userAgent: "AhrefsBot",
        disallow: "/",         // Block aggressive SEO tool scraper
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",         // Block SEO tool crawler
      },
      {
        userAgent: "DotBot",
        disallow: "/",         // Block Moz crawler
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",         // Block Majestic crawler
      },
      {
        userAgent: "AhrefsBot-Abuserate",
        disallow: "/",         // Block aggressive Ahrefs variant
      },
      {
        userAgent: "YandexBot",
        disallow: "/",         // Yandex crawler (regional priority)
      },
      {
        userAgent: "BaiduSpider",
        disallow: "/",         // Baidu crawler (regional priority)
      },

      // Respect for budget: slow down very aggressive crawlers slightly
      {
        userAgent: "MJ12bot",
        crawlDelay: 2,         // 2 second delay
      },
    ],

    // Sitemap URL - helps search engines discover all indexed pages
    sitemap: `${SITE_URL}/sitemap.xml`,

    // Host preference - tells Google which version to use
    // (Typically not needed in Next.js, but included for completeness)
  };
}
