/**
 * JSON-LD Structured Data Generator
 * Generates schema.org compliant structured data for SEO and rich snippets
 * Supports various page types including tools, articles, FAQs, and more
 */

import { SITE_NAME, SITE_URL } from "./constants";

/**
 * Base JSON-LD context type
 */
interface BaseSchema {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

/**
 * Software Application Schema
 * Used for crypto tools, calculators, and software products
 */
interface ToolSchemaInput {
  name: string;
  description: string;
  url: string;
  category: string;
  image?: string;
  author?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
}

/**
 * Article Schema
 * Used for blog posts, guides, and educational content
 */
interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
  wordCount?: number;
  articleBody?: string;
}

/**
 * FAQ Schema Item
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Breadcrumb Schema Item
 */
interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Product Review Schema
 */
interface ProductReviewSchemaInput {
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  url: string;
  price?: string;
  priceCurrency?: string;
  image?: string;
}

/**
 * Comparison Schema Item
 */
interface ComparisonSchemaInput {
  name: string;
  description: string;
  items: string[];
}

/**
 * How-To Step
 */
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

/**
 * How-To Schema Input
 */
interface HowToSchemaInput {
  name: string;
  description: string;
  steps: HowToStep[];
  image?: string;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}

/**
 * Financial Tool Schema
 */
interface FinancialToolSchemaInput {
  name: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
}

/**
 * Generate SoftwareApplication schema for crypto tools
 * Ideal for calculators, converters, and other web applications
 */
export function generateToolPageSchema(
  tool: ToolSchemaInput
): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: tool.applicationCategory || "FinanceApplication",
    operatingSystem: tool.operatingSystem || "Web",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(tool.image && { image: tool.image }),
    ...(tool.aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: tool.aggregateRating.ratingValue,
        ratingCount: tool.aggregateRating.ratingCount,
      },
    }),
  };
}

/**
 * Generate Article schema for blog posts and guides
 * Includes structured data for articles, news items, and educational content
 */
export function generateArticleSchema(
  article: ArticleSchemaInput
): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.author,
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
    ...(article.image && { image: article.image }),
    ...(article.wordCount && { wordCount: article.wordCount }),
    ...(article.articleBody && { articleBody: article.articleBody }),
  };
}

/**
 * Generate FAQPage schema for FAQ sections
 * Improves visibility in Google's FAQ rich results
 */
export function generateFAQSchema(faqs: FAQItem[]): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema for navigation trails
 * Helps search engines understand site hierarchy
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Product schema with AggregateRating
 * Used for product reviews, ratings, and recommendations
 */
export function generateProductReviewSchema(
  review: ProductReviewSchemaInput
): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: review.name,
    description: review.description,
    url: review.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: review.rating,
      ratingCount: review.reviewCount,
    },
    ...(review.image && { image: review.image }),
    ...(review.price && {
      offers: {
        "@type": "Offer",
        price: review.price,
        priceCurrency: review.priceCurrency || "USD",
        availability: "https://schema.org/InStock",
      },
    }),
  };
}

/**
 * Generate ItemList schema for comparisons and lists
 * Used to show structured lists of items (e.g., top 10 exchanges)
 */
export function generateComparisonSchema(
  comparison: ComparisonSchemaInput
): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: comparison.name,
    description: comparison.description,
    itemListElement: comparison.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item,
    })),
  };
}

/**
 * Generate HowTo schema for step-by-step guides
 * Enables Google to display your guide in rich results
 */
export function generateHowToSchema(howTo: HowToSchemaInput): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    ...(howTo.image && { image: howTo.image }),
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    ...(howTo.estimatedCost && {
      estimatedCost: {
        "@type": "PriceSpecification",
        priceCurrency: howTo.estimatedCost.currency,
        price: howTo.estimatedCost.value,
      },
    }),
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };
}

/**
 * Generate FinancialProduct schema for financial tools
 * Used for crypto products like exchanges, wallets, lending platforms, etc.
 */
export function generateFinancialToolSchema(
  tool: FinancialToolSchemaInput
): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: tool.name,
    description: tool.description,
    url: tool.url,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(tool.image && { image: tool.image }),
    ...(tool.author && {
      author: {
        "@type": "Person",
        name: tool.author,
      },
    }),
  };
}

/**
 * Generate Organization schema for homepage/site-wide schema
 * Provides general information about the organization
 */
export function generateOrganizationSchema(description: string): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: description,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://twitter.com/degen0x",
      "https://discord.gg/degen0x",
      "https://github.com/degen0x",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: `${SITE_URL}/contact`,
    },
  };
}

/**
 * Generate WebSite schema with search action
 * Helps Google understand site search functionality
 */
export function generateWebSiteSchema(): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Utility function to serialize schema to JSON-LD string
 */
export function serializeSchema(schema: BaseSchema | BaseSchema[]): string {
  return JSON.stringify(schema);
}

/**
 * Utility function to create multiple schemas as array
 * Useful when combining multiple schema types on a single page
 */
export function combineSchemas(schemas: BaseSchema[]): BaseSchema[] {
  return schemas;
}

/**
 * Type exports for use in components and pages
 */
export type {
  ToolSchemaInput,
  ArticleSchemaInput,
  FAQItem,
  BreadcrumbItem,
  ProductReviewSchemaInput,
  ComparisonSchemaInput,
  HowToSchemaInput,
  HowToStep,
  FinancialToolSchemaInput,
  BaseSchema,
};
