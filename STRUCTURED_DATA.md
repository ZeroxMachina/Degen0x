# JSON-LD Structured Data Utilities

This document explains how to use the JSON-LD structured data generator and component in the degen0x project.

## Overview

The structured data utilities provide a set of TypeScript functions for generating schema.org compliant JSON-LD data that improves SEO, enables rich snippets in search results, and helps search engines better understand your content.

## Files

- **`src/lib/structured-data.ts`** - Schema generation functions
- **`src/components/StructuredData.tsx`** - React server component for rendering schemas
- **`src/lib/structured-data.examples.ts`** - Comprehensive usage examples

## Quick Start

### 1. Generate a Schema

```tsx
import { generateToolPageSchema } from "@/lib/structured-data";

const schema = generateToolPageSchema({
  name: "Bitcoin Calculator",
  description: "Calculate Bitcoin investment returns",
  url: "https://degen0x.com/tools/bitcoin-calculator",
  category: "Financial Calculator",
});
```

### 2. Render in Your Page

```tsx
import StructuredData from "@/components/StructuredData";

export default function Page() {
  return (
    <>
      <StructuredData data={schema} />
      {/* Your page content */}
    </>
  );
}
```

## Available Functions

### 1. `generateToolPageSchema(tool)`

Generates a SoftwareApplication schema for tools, calculators, and web apps.

**When to use:**
- Crypto calculators (ROI, tax, portfolio)
- Conversion tools
- Portfolio trackers
- Trading simulators

**Input:**
```typescript
{
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
```

**Example:**
```typescript
const schema = generateToolPageSchema({
  name: "Bitcoin ROI Calculator",
  description: "Calculate potential Bitcoin investment returns",
  url: "https://degen0x.com/tools/bitcoin-roi",
  category: "Calculator",
  image: "https://degen0x.com/images/bitcoin-calc.png",
  aggregateRating: {
    ratingValue: 4.8,
    ratingCount: 324,
  },
});
```

### 2. `generateArticleSchema(article)`

Generates an Article schema for blog posts, guides, and educational content.

**When to use:**
- Blog posts
- Educational guides
- News articles
- Tutorials
- How-to articles

**Input:**
```typescript
{
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
```

**Example:**
```typescript
const schema = generateArticleSchema({
  title: "Complete Guide to Crypto Taxes 2026",
  description: "Everything you need to know about reporting crypto gains",
  url: "https://degen0x.com/learn/crypto-tax-guide",
  datePublished: "2026-03-01T10:00:00Z",
  dateModified: "2026-03-13T15:30:00Z",
  author: "Sarah Chen",
  image: "https://degen0x.com/images/tax-guide.jpg",
  wordCount: 4500,
});
```

### 3. `generateFAQSchema(faqs)`

Generates a FAQPage schema for FAQ sections. This enables Google's FAQ rich results.

**When to use:**
- FAQ pages
- Help centers
- Dedicated Q&A sections
- Product pages with FAQs

**Input:**
```typescript
{
  question: string;
  answer: string;
}[]
```

**Example:**
```typescript
const schema = generateFAQSchema([
  {
    question: "What is a cold wallet?",
    answer: "A cold wallet is a cryptocurrency wallet not connected to the internet...",
  },
  {
    question: "Is a hardware wallet worth it?",
    answer: "Yes, hardware wallets provide maximum security for long-term storage...",
  },
]);
```

### 4. `generateBreadcrumbSchema(items)`

Generates a BreadcrumbList schema for navigation trails. Shows breadcrumbs in search results.

**When to use:**
- Any page with hierarchical navigation
- Category pages
- Product pages
- Nested content

**Input:**
```typescript
{
  name: string;
  url: string;
}[]
```

**Example:**
```typescript
const schema = generateBreadcrumbSchema([
  { name: "Home", url: "https://degen0x.com" },
  { name: "Exchanges", url: "https://degen0x.com/exchanges" },
  { name: "Coinbase", url: "https://degen0x.com/exchanges/reviews/coinbase" },
]);
```

### 5. `generateProductReviewSchema(review)`

Generates a Product schema with AggregateRating. Shows ratings in search results.

**When to use:**
- Exchange reviews
- Wallet reviews
- DeFi protocol reviews
- Any product comparison

**Input:**
```typescript
{
  name: string;
  description: string;
  url: string;
  rating: number;
  reviewCount: number;
  price?: string;
  priceCurrency?: string;
  image?: string;
}
```

**Example:**
```typescript
const schema = generateProductReviewSchema({
  name: "Coinbase Exchange",
  description: "Leading crypto exchange with user-friendly interface",
  url: "https://degen0x.com/exchanges/reviews/coinbase",
  rating: 4.6,
  reviewCount: 2847,
  price: "0",
  priceCurrency: "USD",
});
```

### 6. `generateComparisonSchema(comparison)`

Generates an ItemList schema for comparisons and ranked lists.

**When to use:**
- "Top 10" pages
- Comparison charts
- Ranked lists
- Feature comparisons

**Input:**
```typescript
{
  name: string;
  description: string;
  items: string[];
}
```

**Example:**
```typescript
const schema = generateComparisonSchema({
  name: "Best Crypto Exchanges 2026",
  description: "Ranked comparison of top cryptocurrency exchanges",
  items: [
    "Coinbase - Best for Beginners",
    "Kraken - Best for Traders",
    "Binance - Most Pairs",
    "Gemini - Best Security",
  ],
});
```

### 7. `generateHowToSchema(howTo)`

Generates a HowTo schema for step-by-step guides. Google shows these in rich results.

**When to use:**
- Setup guides
- Tutorial articles
- Step-by-step instructions
- Process documentation

**Input:**
```typescript
{
  name: string;
  description: string;
  steps: {
    name: string;
    text: string;
    image?: string;
  }[];
  image?: string;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}
```

**Example:**
```typescript
const schema = generateHowToSchema({
  name: "How to Set Up a Hardware Wallet",
  description: "Step-by-step guide to setting up your first hardware wallet",
  steps: [
    {
      name: "Purchase a Hardware Wallet",
      text: "Buy from official retailer like Ledger or Trezor",
      image: "https://degen0x.com/images/step1.jpg",
    },
    {
      name: "Initialize Device",
      text: "Connect to computer and follow initialization",
      image: "https://degen0x.com/images/step2.jpg",
    },
    {
      name: "Secure Seed Phrase",
      text: "Write down 24-word recovery phrase safely",
      image: "https://degen0x.com/images/step3.jpg",
    },
  ],
  totalTime: "PT30M",
  estimatedCost: {
    currency: "USD",
    value: "60-150",
  },
});
```

### 8. `generateFinancialToolSchema(tool)`

Generates a FinancialProduct schema for financial platforms and tools.

**When to use:**
- Exchange pages
- Lending platform pages
- DeFi protocol pages
- Financial tool descriptions

**Input:**
```typescript
{
  name: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
}
```

**Example:**
```typescript
const schema = generateFinancialToolSchema({
  name: "Aave Lending Protocol",
  description: "Decentralized lending protocol for crypto assets",
  url: "https://degen0x.com/defi-lending/reviews/aave",
  image: "https://degen0x.com/images/aave-logo.png",
});
```

### 9. `generateOrganizationSchema(description)`

Generates an Organization schema for your site. Provide site-wide information.

**When to use:**
- Homepage
- Global site schema
- Navigation footer
- Organization details

**Example:**
```typescript
const schema = generateOrganizationSchema(
  "degen0x is the leading crypto comparison platform"
);
```

### 10. `generateWebSiteSchema()`

Generates a WebSite schema with search action. Helps Google understand your site search.

**When to use:**
- Homepage
- Any page with site search
- Global navigation

**Example:**
```typescript
const schema = generateWebSiteSchema();
```

## Advanced Usage

### Combining Multiple Schemas

Use `combineSchemas()` to include multiple schemas on one page:

```tsx
import { combineSchemas } from "@/lib/structured-data";

const breadcrumbs = generateBreadcrumbSchema([...]);
const productReview = generateProductReviewSchema({...});
const faqs = generateFAQSchema([...]);

const allSchemas = combineSchemas([breadcrumbs, productReview, faqs]);

export default function ExchangeReview() {
  return <StructuredData data={allSchemas} />;
}
```

### Type Safety

All functions are fully typed with TypeScript. Use the exported types:

```typescript
import type {
  ToolSchemaInput,
  ArticleSchemaInput,
  FAQItem,
  BreadcrumbItem,
  ProductReviewSchemaInput,
  ComparisonSchemaInput,
  HowToSchemaInput,
  FinancialToolSchemaInput,
} from "@/lib/structured-data";

// Type-safe function
function createToolSchema(tool: ToolSchemaInput) {
  return generateToolPageSchema(tool);
}
```

## StructuredData Component

The `StructuredData` component renders JSON-LD in a `<script>` tag:

```tsx
import StructuredData from "@/components/StructuredData";

export default function Page() {
  return (
    <>
      <StructuredData
        data={schema}
        id="page-schema" // Optional ID for testing
      />
      <h1>Your content</h1>
    </>
  );
}
```

**Important Notes:**
- This is a **Server Component** (no `use client` directive)
- Always place near the top of your page component
- Can accept single schema or array of schemas
- Uses `suppressHydrationWarning` for Next.js compatibility

## SEO Best Practices

### 1. Always Include Breadcrumbs

Every page with navigation should have breadcrumb schema:

```typescript
const breadcrumbs = generateBreadcrumbSchema([
  { name: "Home", url: "https://degen0x.com" },
  { name: "Category", url: "https://degen0x.com/category" },
  { name: "Current Page", url: "https://degen0x.com/category/page" },
]);
```

### 2. Add Homepage Schema

Include Organization and WebSite schemas on your homepage:

```typescript
const homeSchemas = combineSchemas([
  generateOrganizationSchema("Your description"),
  generateWebSiteSchema(),
]);
```

### 3. Use Images Where Possible

Images enhance rich snippets in search results:

```typescript
generateToolPageSchema({
  // ... other props
  image: "https://degen0x.com/images/tool-preview.png",
});
```

### 4. Keep Data Synchronized

Update schema data whenever page content changes:

```typescript
// Bad: Static data that doesn't match content
const schema = generateArticleSchema({
  title: "Old Title",
  description: "Old description",
  // ...
});

// Good: Dynamic data from page content
const schema = generateArticleSchema({
  title: article.title,
  description: article.description,
  dateModified: article.updatedAt,
  // ...
});
```

### 5. Test with Google Rich Results

Test your schemas before deploying:

1. Go to https://search.google.com/test/rich-results
2. Paste your page URL
3. Check for errors and warnings
4. Monitor Google Search Console

## Common Patterns

### Blog Post with Full Schema

```tsx
import StructuredData from "@/components/StructuredData";
import { combineSchemas, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/structured-data";

export default function BlogPost({ article }) {
  const schemas = combineSchemas([
    generateBreadcrumbSchema([
      { name: "Home", url: "https://degen0x.com" },
      { name: "Blog", url: "https://degen0x.com/blog" },
      { name: article.title, url: article.url },
    ]),
    generateArticleSchema({
      title: article.title,
      description: article.excerpt,
      url: article.url,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      author: article.author.name,
      image: article.coverImage,
      wordCount: article.content.split(/\s+/).length,
    }),
  ]);

  return (
    <>
      <StructuredData data={schemas} />
      <article>
        <h1>{article.title}</h1>
        {/* Article content */}
      </article>
    </>
  );
}
```

### Exchange Review Page

```tsx
import StructuredData from "@/components/StructuredData";
import { combineSchemas, generateBreadcrumbSchema, generateProductReviewSchema, generateFAQSchema } from "@/lib/structured-data";

export default function ExchangeReview({ exchange, reviews, faqs }) {
  const schemas = combineSchemas([
    generateBreadcrumbSchema([
      { name: "Home", url: "https://degen0x.com" },
      { name: "Exchanges", url: "https://degen0x.com/exchanges" },
      { name: exchange.name, url: exchange.reviewUrl },
    ]),
    generateProductReviewSchema({
      name: exchange.name,
      description: exchange.description,
      url: exchange.reviewUrl,
      rating: exchange.averageRating,
      reviewCount: exchange.reviewCount,
      image: exchange.logo,
    }),
    generateFAQSchema(faqs),
  ]);

  return (
    <>
      <StructuredData data={schemas} />
      <div>
        <h1>{exchange.name} Review</h1>
        {/* Review content */}
      </div>
    </>
  );
}
```

## Troubleshooting

### Schema Not Showing in Rich Results

1. **Check with Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Verify JSON format**: Use `JSON.parse()` to validate
3. **Check required fields**: Some schema types require specific fields
4. **Ensure URL is accessible**: Google must be able to crawl the page
5. **Wait for indexing**: New pages take time to appear in results

### Common Errors

**Missing required field:**
```
Error: Property "datePublished" is required for BlogPosting
```
Solution: Add all required fields to the input object.

**Invalid date format:**
```
Error: datePublished must be ISO 8601 format
```
Solution: Use ISO 8601 dates: `new Date().toISOString()`

**Invalid rating value:**
```
Error: ratingValue must be between 1 and 5
```
Solution: Ensure `ratingValue` is a valid number between 1-5.

## References

- **Schema.org Documentation**: https://schema.org
- **Google Rich Results Guide**: https://developers.google.com/search/docs/appearance/rich-results
- **JSON-LD Format**: https://json-ld.org/
- **Google Search Console**: https://search.google.com/search-console
- **Rich Results Test**: https://search.google.com/test/rich-results

## Support

For questions or issues with structured data:

1. Check the examples in `src/lib/structured-data.examples.ts`
2. Review schema types in `src/lib/structured-data.ts`
3. Test with Google Rich Results Tool
4. Check Google Search Console for warnings
