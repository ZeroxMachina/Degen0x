/**
 * StructuredData Component
 * Server component that renders JSON-LD structured data in a <script> tag
 *
 * This is the generic reusable component for rendering any JSON-LD schema.
 * For schema generation, use the functions from @/lib/structured-data
 *
 * Usage:
 * <StructuredData data={generateToolPageSchema(...)} />
 * <StructuredData data={[schema1, schema2]} /> // Multiple schemas
 */

import { ReactNode } from "react";

interface StructuredDataProps {
  /**
   * JSON-LD schema object or array of schema objects
   * Can be generated using functions from @/lib/structured-data
   */
  data: Record<string, any> | Record<string, any>[];
  /**
   * Optional ID for the script tag (useful for testing/debugging)
   */
  id?: string;
}

/**
 * StructuredData Component
 * Renders JSON-LD structured data as a <script type="application/ld+json"> tag
 * This is a Server Component (no "use client" directive)
 *
 * The component safely serializes the provided schema object(s) to JSON
 * and renders them in a script tag that search engines and other tools can parse.
 *
 * @param data - JSON-LD schema object or array of objects
 * @param id - Optional ID for the script element
 * @returns Server-rendered script tag with JSON-LD data
 *
 * @example
 * // Single schema
 * const toolSchema = generateToolPageSchema({
 *   name: "Bitcoin Calculator",
 *   description: "Calculate Bitcoin values",
 *   url: "https://degen0x.com/tools/bitcoin-calculator",
 *   category: "Calculator"
 * });
 *
 * return <StructuredData data={toolSchema} />;
 *
 * @example
 * // Multiple schemas
 * const schemas = [
 *   generateToolPageSchema(...),
 *   generateBreadcrumbSchema(...)
 * ];
 *
 * return <StructuredData data={schemas} />;
 */
export default function StructuredData({
  data,
  id,
}: StructuredDataProps): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
      {...(id && { id })}
    />
  );
}

// ============================================================================
// Legacy Component Exports (for backward compatibility)
// ============================================================================
// These exported named components maintain compatibility with existing code
// while allowing gradual migration to the new structured-data.ts utility

import { SITE_NAME, SITE_URL } from "@/lib/constants";

interface ArticleStructuredDataProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  slug: string;
  author?: string;
  image?: string;
}

interface ToolStructuredDataProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  questions: FAQItem[];
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[];
}

// Helper function to create schema markup with proper JSON-LD structure
function createJsonLdScript(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}

// ArticleStructuredData Component
export function ArticleStructuredData({
  title,
  description,
  datePublished,
  dateModified,
  slug,
  author = SITE_NAME,
  image,
}: ArticleStructuredDataProps) {
  const url = `${SITE_URL}/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    image: image || `${SITE_URL}/og-image.png`,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Organization",
      name: author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={createJsonLdScript(schema)}
    />
  );
}

// ToolStructuredData Component
export function ToolStructuredData({
  title,
  description,
  slug,
  image,
}: ToolStructuredDataProps) {
  const url = `${SITE_URL}/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: title,
    description: description,
    url: url,
    image: image || `${SITE_URL}/og-image.png`,
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "100",
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={createJsonLdScript(schema)}
    />
  );
}

// FAQStructuredData Component
export function FAQStructuredData({ questions }: FAQStructuredDataProps) {
  const mainEntity = questions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={createJsonLdScript(schema)}
    />
  );
}

// BreadcrumbStructuredData Component
export function BreadcrumbStructuredData({
  items,
}: BreadcrumbStructuredDataProps) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.href}`,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={createJsonLdScript(schema)}
    />
  );
}

// OrganizationStructuredData Component (Singleton)
export function OrganizationStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "degen0x is the leading crypto comparison and review platform. Compare exchanges, wallets, DeFi protocols, and more.",
    sameAs: [
      "https://twitter.com/degen0x",
      "https://discord.gg/degen0x",
      "https://github.com/degen0x",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@degen0x.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={createJsonLdScript(schema)}
    />
  );
}
