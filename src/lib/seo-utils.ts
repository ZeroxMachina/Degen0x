/**
 * SEO Utilities for degen0x
 * ─────────────────────────────────────────────────────────────────
 * Comprehensive collection of SEO functions for generating structured data
 * (JSON-LD), meta tags, and other SEO enhancements.
 *
 * Structured data helps search engines understand content better, enabling:
 * - Rich snippets in search results
 * - Knowledge panels
 * - Better indexing of articles and tools
 * - Enhanced SERP features
 *
 * All functions follow schema.org specifications.
 * ─────────────────────────────────────────────────────────────────
 */

import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./constants";

/**
 * Breadcrumb JSON-LD Schema
 * Generates structured breadcrumb navigation data that helps search engines
 * understand page hierarchy and improves SERP appearance.
 *
 * Example output:
 * {
 *   "@context": "https://schema.org",
 *   "@type": "BreadcrumbList",
 *   "itemListElement": [
 *     {
 *       "@type": "ListItem",
 *       "position": 1,
 *       "name": "Home",
 *       "item": "https://degen0x.com"
 *     },
 *     {
 *       "@type": "ListItem",
 *       "position": 2,
 *       "name": "Tools",
 *       "item": "https://degen0x.com/tools"
 *     }
 *   ]
 * }
 *
 * @param breadcrumbs - Array of {label, path} objects representing the breadcrumb trail
 * @returns JSON-LD structured data object
 */
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ label: string; path: string }>
): Record<string, any> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `${SITE_URL}${crumb.path}`,
    })),
  };
}

/**
 * FAQ JSON-LD Schema
 * Generates structured data for FAQ pages. Enables "FAQ" rich snippet in SERPs.
 * Google can display up to 10 FAQs in a featured snippet.
 *
 * Example output:
 * {
 *   "@context": "https://schema.org",
 *   "@type": "FAQPage",
 *   "mainEntity": [
 *     {
 *       "@type": "Question",
 *       "name": "What is Bitcoin?",
 *       "acceptedAnswer": {
 *         "@type": "Answer",
 *         "text": "Bitcoin is a decentralized cryptocurrency..."
 *       }
 *     }
 *   ]
 * }
 *
 * @param faqs - Array of {question, answer} objects
 * @returns JSON-LD structured data object
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): Record<string, any> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

/**
 * Article JSON-LD Schema
 * Generates structured data for articles and blog posts.
 * Enables "Article" rich snippet and improves indexing of written content.
 *
 * Example output:
 * {
 *   "@context": "https://schema.org",
 *   "@type": "BlogPosting",
 *   "headline": "How to Stake Cryptocurrency",
 *   "description": "A comprehensive guide...",
 *   "author": {
 *     "@type": "Organization",
 *     "name": "degen0x"
 *   },
 *   "datePublished": "2024-03-12T10:00:00Z",
 *   "dateModified": "2024-03-12T10:00:00Z",
 *   "image": "https://..."
 * }
 *
 * @param options - Article metadata including title, description, author, dates, image, etc.
 * @returns JSON-LD structured data object
 */
export function generateArticleSchema(options: {
  headline: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url?: string;
  wordCount?: number;
  articleBody?: string;
}): Record<string, any> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": options.headline,
    "description": options.description,
    "author": {
      "@type": "Organization",
      "name": options.author || SITE_NAME,
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
      },
    },
    "datePublished": options.datePublished,
    ...(options.dateModified && { "dateModified": options.dateModified }),
    ...(options.image && { "image": options.image }),
    ...(options.url && { "mainEntityOfPage": options.url }),
    ...(options.wordCount && { "wordCount": options.wordCount }),
    ...(options.articleBody && { "articleBody": options.articleBody }),
  };
}

/**
 * SoftwareApplication JSON-LD Schema
 * Generates structured data for interactive tools and applications.
 * Enables "Tool" or "Application" rich snippets and improves indexing.
 *
 * Example output:
 * {
 *   "@context": "https://schema.org",
 *   "@type": "SoftwareApplication",
 *   "name": "DCA Calculator",
 *   "description": "Calculate dollar-cost averaging returns...",
 *   "applicationCategory": "FinanceApplication",
 *   "operatingSystem": "Web Browser",
 *   "url": "https://degen0x.com/tools/dca-calculator",
 *   "aggregateRating": {
 *     "@type": "AggregateRating",
 *     "ratingValue": 4.8,
 *     "ratingCount": 1250
 *   }
 * }
 *
 * @param options - Tool/application metadata including name, description, category, ratings, etc.
 * @returns JSON-LD structured data object
 */
export function generateSoftwareApplicationSchema(options: {
  name: string;
  description: string;
  url: string;
  applicationCategory?:
    | "FinanceApplication"
    | "CalculatorApplication"
    | "ChartApplication"
    | "AnalyticsApplication"
    | "UtilityApplication";
  image?: string;
  ratingValue?: number;
  ratingCount?: number;
  author?: string;
  offers?: Array<{
    priceCurrency: string;
    price: string;
  }>;
}): Record<string, any> {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": options.name,
    "description": options.description,
    "url": options.url,
    "applicationCategory": options.applicationCategory || "UtilityApplication",
    "operatingSystem": "Web Browser",
  };

  if (options.image) {
    schema.image = options.image;
  }

  if (options.ratingValue && options.ratingCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": options.ratingValue,
      "ratingCount": options.ratingCount,
    };
  }

  if (options.author) {
    schema.author = {
      "@type": "Organization",
      "name": options.author,
    };
  } else {
    schema.author = {
      "@type": "Organization",
      "name": SITE_NAME,
    };
  }

  if (options.offers && options.offers.length > 0) {
    schema.offers = options.offers.map((offer) => ({
      "@type": "Offer",
      "priceCurrency": offer.priceCurrency,
      "price": offer.price,
    }));
  } else {
    // Default to free
    schema.offers = {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
    };
  }

  return schema;
}

/**
 * Organization JSON-LD Schema
 * Generates structured data for your organization/website.
 * Improves knowledge panel and brand credibility signals.
 *
 * @returns JSON-LD structured data object for degen0x organization
 */
export function generateOrganizationSchema(): Record<string, any> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "description": SITE_DESCRIPTION,
    "logo": `${SITE_URL}/logo.png`,
    "sameAs": [
      "https://twitter.com/degen0x", // Update with actual social media
      "https://discord.com/invite/degen0x", // Update with actual social media
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@degen0x.com", // Update with actual contact
      "url": `${SITE_URL}/contact`,
    },
  };
}

/**
 * NewsArticle JSON-LD Schema
 * Use for time-sensitive news or market updates.
 * Better indexing and display in Google News.
 *
 * @param options - News article metadata
 * @returns JSON-LD structured data object
 */
export function generateNewsArticleSchema(options: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url?: string;
}): Record<string, any> {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": options.headline,
    "description": options.description,
    "author": {
      "@type": "Organization",
      "name": options.author || SITE_NAME,
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
    },
    "datePublished": options.datePublished,
    ...(options.dateModified && { "dateModified": options.dateModified }),
    ...(options.image && { "image": options.image }),
    ...(options.url && { "mainEntityOfPage": options.url }),
  };
}

/**
 * Review Schema
 * Use for product/service reviews.
 * Enables star ratings in search results.
 *
 * @param options - Review metadata including item, reviewer, rating, review text
 * @returns JSON-LD structured data object
 */
export function generateReviewSchema(options: {
  itemName: string;
  itemType: "Exchange" | "Wallet" | "Protocol" | "Tool" | "Service";
  reviewRating: number; // 1-5
  reviewText: string;
  author?: string;
  datePublished?: string;
  url?: string;
}): Record<string, any> {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": options.reviewRating,
      "bestRating": "5",
      "worstRating": "1",
    },
    "reviewBody": options.reviewText,
    "itemReviewed": {
      "@type": options.itemType,
      "name": options.itemName,
    },
    "author": {
      "@type": "Organization",
      "name": options.author || SITE_NAME,
    },
    ...(options.datePublished && { "datePublished": options.datePublished }),
    ...(options.url && { "url": options.url }),
  };
}

/**
 * Common SEO Meta Tags
 * Generates standard meta tags for HTML head
 *
 * @param options - Meta tag options
 * @returns Object with meta tag properties
 */
export function generateMetaTags(options: {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterImage?: string;
  robots?: string; // e.g., "index, follow" or "noindex, nofollow"
  author?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
}): Record<string, any> {
  return {
    title: options.title,
    description: options.description,
    canonical: options.canonical || `${SITE_URL}`,
    openGraph: {
      title: options.ogTitle || options.title,
      description: options.ogDescription || options.description,
      ...(options.ogImage && { images: [{ url: options.ogImage }] }),
      type: options.ogType || "website",
      url: options.canonical || `${SITE_URL}`,
    },
    twitter: {
      card: options.twitterCard || "summary_large_image",
      ...(options.twitterImage && { image: options.twitterImage }),
      creator: "@degen0x", // Update with actual Twitter handle
    },
    robots: options.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    ...(options.author && { author: options.author }),
    ...(options.datePublished && { publishedTime: options.datePublished }),
    ...(options.dateModified && { modifiedTime: options.dateModified }),
    ...(options.keywords && options.keywords.length > 0 && {
      keywords: options.keywords.join(", "),
    }),
  };
}

/**
 * Additional Meta Tags for Enhanced SEO
 * Returns HTML meta tag strings for direct insertion into <head>
 *
 * @param options - Additional meta information
 * @returns Array of HTML meta tag strings
 */
export function generateAdditionalMetaTags(options: {
  viewport?: string;
  charset?: string;
  colorScheme?: string;
  themeColor?: string;
  appleTouchIcon?: string;
  msapplicationTileImage?: string;
  msapplicationTileColor?: string;
}): Array<{ name?: string; content?: string; httpEquiv?: string; rel?: string; href?: string }> {
  const tags = [];

  if (options.viewport) {
    tags.push({
      name: "viewport",
      content: options.viewport || "width=device-width, initial-scale=1, viewport-fit=cover",
    });
  }

  if (options.charset) {
    tags.push({
      httpEquiv: "Content-Type",
      content: options.charset || "text/html; charset=utf-8",
    });
  }

  if (options.colorScheme) {
    tags.push({
      name: "color-scheme",
      content: options.colorScheme || "light dark",
    });
  }

  if (options.themeColor) {
    tags.push({
      name: "theme-color",
      content: options.themeColor || "#000000",
    });
  }

  // Icon tags
  if (options.appleTouchIcon) {
    tags.push({
      rel: "apple-touch-icon",
      href: options.appleTouchIcon,
    });
  }

  if (options.msapplicationTileImage) {
    tags.push({
      name: "msapplication-TileImage",
      content: options.msapplicationTileImage,
    });
  }

  if (options.msapplicationTileColor) {
    tags.push({
      name: "msapplication-TileColor",
      content: options.msapplicationTileColor,
    });
  }

  return tags;
}

/**
 * Sitemap Index Schema
 * For large sites with multiple sitemaps
 * Currently using single sitemap, but included for future scalability
 *
 * @param sitemapUrls - Array of sitemap URLs
 * @returns XML string for sitemap index
 */
export function generateSitemapIndex(sitemapUrls: string[]): string {
  const xmlContent = sitemapUrls
    .map(
      (url) =>
        `  <sitemap>
    <loc>${url}</loc>
  </sitemap>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlContent}
</sitemapindex>`;
}

/**
 * Canonical Tag Generator
 * Prevents duplicate content issues
 *
 * @param url - The canonical URL for the page
 * @returns Meta tag object
 */
export function generateCanonicalTag(url: string): { rel: string; href: string } {
  return {
    rel: "canonical",
    href: url,
  };
}

/**
 * Hreflang Tags Generator
 * Helps Google understand multi-language/multi-region content
 * Currently unused but included for future i18n support
 *
 * @param hreflangs - Object mapping language codes to URLs
 * @returns Array of hreflang link objects
 */
export function generateHreflangTags(
  hreflangs: Record<string, string>
): Array<{ rel: string; hrefLang: string; href: string }> {
  return Object.entries(hreflangs).map(([lang, url]) => ({
    rel: "alternate",
    hrefLang: lang,
    href: url,
  }));
}

/**
 * Preload/Prefetch Links
 * Performance optimization hints for the browser and search engines
 *
 * @param resources - Array of resource URLs to preload/prefetch
 * @returns Array of link objects
 */
export function generateResourceHints(resources: Array<{
  url: string;
  as?: "image" | "font" | "script" | "style" | "fetch";
  rel?: "preload" | "prefetch" | "preconnect" | "dns-prefetch";
}>): Array<{ rel: string; href: string; as?: string; crossOrigin?: string }> {
  return resources.map((resource) => ({
    rel: resource.rel || "prefetch",
    href: resource.url,
    ...(resource.as && { as: resource.as }),
    ...(resource.as === "font" && { crossOrigin: "anonymous" }),
  }));
}
