import { SITE_NAME, SITE_URL } from "@/lib/constants";

// Type definitions for structured data props

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
      "CryptoDegen is the leading crypto comparison and review platform. Compare exchanges, wallets, DeFi protocols, and more.",
    sameAs: [
      "https://twitter.com/cryptodegen",
      "https://discord.gg/cryptodegen",
      "https://github.com/cryptodegen",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@cryptodegen.com",
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
