import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * Robots.txt configuration for CryptoDegen
 *
 * Defines crawling rules for search engines and web crawlers
 * Supports 2,275+ pages with proper indexing guidelines
 */

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Main rule: Allow all bots to crawl except API and admin
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",           // API endpoints (not for indexing)
          "/admin/",         // Admin pages (if any)
          "/_next/",         // Next.js internal files
          "/private/",       // Private content
          "/*.json",         // JSON data files
          "/.well-known/",   // Well-known files
        ],
        crawlDelay: 0,       // No delay for crawlers
      },
      // Aggressive crawlers
      {
        userAgent: "AhrefsBot",
        disallow: "/",       // Block aggressive scrapers
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",       // Block SEO tools bots
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
