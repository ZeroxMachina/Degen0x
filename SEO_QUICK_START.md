# SEO Quick Start Guide

Quick reference for using the new SEO infrastructure.

---

## 1. Add Breadcrumbs to a Page

**Use Case:** Navigation guides like `/tools` → `/tools/dca-calculator`

```typescript
import { generateBreadcrumbSchema } from "@/lib/seo-utils";

export const metadata = {
  // ... other metadata
  alternates: {
    canonical: "https://degen0x.com/tools/dca-calculator",
  },
};

export default function Page() {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Tools", path: "/tools" },
    { label: "DCA Calculator", path: "/tools/dca-calculator" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page content */}
    </>
  );
}
```

---

## 2. Mark Up a Tool (Calculator/App)

**Use Case:** `/tools/dca-calculator`, `/tools/tax-calculator`, etc.

```typescript
import { generateSoftwareApplicationSchema, generateMetaTags } from "@/lib/seo-utils";

export const metadata = generateMetaTags({
  title: "DCA Calculator - Calculate Dollar-Cost Averaging Returns | degen0x",
  description: "Free DCA calculator for crypto. See your potential returns with different crypto amounts and time periods.",
  ogImage: "https://degen0x.com/og-dca-calculator.png",
  ogType: "website",
  robots: "index, follow",
});

export default function DCACalculatorPage() {
  const toolSchema = generateSoftwareApplicationSchema({
    name: "DCA Calculator",
    description: "Calculate dollar-cost averaging returns for cryptocurrency investments",
    url: "https://degen0x.com/tools/dca-calculator",
    applicationCategory: "CalculatorApplication",
    ratingValue: 4.8,
    ratingCount: 1250,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      {/* Tool interface */}
    </>
  );
}
```

---

## 3. Mark Up an Article/Guide

**Use Case:** `/learn/*` pages with educational content

```typescript
import { generateArticleSchema } from "@/lib/seo-utils";

export const metadata = {
  title: "How to Stake Cryptocurrency: Complete Guide 2026 | degen0x",
  description: "Learn how to stake crypto and earn passive income. Complete beginner guide with step-by-step instructions.",
  openGraph: {
    type: "article",
    publishedTime: "2024-03-12T10:00:00Z",
    modifiedTime: "2024-03-12T10:00:00Z",
    authors: ["degen0x Team"],
  },
};

export default function StakingGuidePage() {
  const articleSchema = generateArticleSchema({
    headline: "How to Stake Cryptocurrency: Complete Guide 2026",
    description: "Learn how to stake crypto and earn passive income.",
    datePublished: "2024-03-12T10:00:00Z",
    dateModified: "2024-03-12T10:00:00Z",
    image: "https://degen0x.com/og-staking-guide.png",
    url: "https://degen0x.com/learn/how-to-stake",
    wordCount: 2500,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Article content */}
    </>
  );
}
```

---

## 4. Mark Up a Review Page

**Use Case:** `/exchanges/coinbase`, `/wallets/ledger`, etc.

```typescript
import { generateReviewSchema } from "@/lib/seo-utils";

export const metadata = {
  title: "Coinbase Review 2026: Fees, Security, Features | degen0x",
  description: "Expert Coinbase review. Compare fees, security features, and available cryptocurrencies.",
  openGraph: {
    type: "article",
  },
};

export default function CoinbaseReviewPage() {
  const reviewSchema = generateReviewSchema({
    itemName: "Coinbase",
    itemType: "Exchange",
    reviewRating: 4.5,
    reviewText: "Coinbase is one of the most user-friendly exchanges... [full review text]",
    datePublished: "2024-03-12T10:00:00Z",
    url: "https://degen0x.com/exchanges/coinbase",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {/* Review content */}
    </>
  );
}
```

---

## 5. Add FAQ Schema to a Page

**Use Case:** Pages with Q&A sections

```typescript
import { generateFAQSchema } from "@/lib/seo-utils";

export const metadata = {
  title: "Bitcoin ETF Guide: FAQ, How to Buy, Pros & Cons | degen0x",
  description: "Complete Bitcoin ETF guide with answers to common questions.",
};

export default function BitcoinETFGuidePage() {
  const faqs = [
    {
      question: "What is a Bitcoin ETF?",
      answer: "A Bitcoin ETF is a fund that tracks the price of Bitcoin...",
    },
    {
      question: "How do I buy Bitcoin ETFs?",
      answer: "You can buy Bitcoin ETFs through any brokerage...",
    },
    {
      question: "What are the fees?",
      answer: "Bitcoin ETF fees typically range from 0.2% to 0.25%...",
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* FAQ content */}
    </>
  );
}
```

---

## 6. How the Middleware Works (No Action Needed)

The middleware automatically handles X-Robots-Tag for you:

```
Unpublished page → Request comes in → Middleware adds X-Robots-Tag: noindex
Published page → Request comes in → Middleware allows indexing
```

**No configuration needed!** It automatically checks `PUBLISHED_PAGES`.

---

## 7. Check if a Page is Published

If you need to check in your code:

```typescript
import { isPublished } from "@/lib/published-pages";

// In a component or page
const pagePublished = isPublished("/tools/dca-calculator");

if (!pagePublished) {
  // Show draft banner
}
```

---

## 8. View Generated Files

**Sitemap:**
```
https://degen0x.com/sitemap.xml
```
Shows all 120+ published pages with priorities.

**Robots.txt:**
```
https://degen0x.com/robots.txt
```
Shows crawling rules.

---

## 9. Debug Schema

To debug schema on a page:
1. Right-click → Inspect
2. Find the `<script type="application/ld+json">` tag
3. Paste the JSON into https://schema.org/validator
4. Should show green checkmarks

---

## 10. Common Functions Reference

```typescript
// For tools/calculators
generateSoftwareApplicationSchema({ ... })

// For articles/guides
generateArticleSchema({ ... })

// For reviews (exchanges, wallets)
generateReviewSchema({ ... })

// For Q&A pages
generateFAQSchema({ ... })

// For navigation
generateBreadcrumbSchema({ ... })

// For organization/brand
generateOrganizationSchema()

// For meta tags
generateMetaTags({ ... })
```

---

## Performance Notes

✅ **Static Generation:** Sitemap and robots.txt pre-built
✅ **Daily Revalidation:** Content stays fresh
✅ **Edge Middleware:** Runs on Vercel CDN (no server hit)
✅ **Cached:** Published pages aggressively cached
✅ **No New Dependencies:** Uses Next.js APIs only

---

## What Improved

| Aspect | Before | After |
|--------|--------|-------|
| Sitemap | Basic | 10+ priority levels |
| Robots | Simple | Aggressive bot blocking |
| Tools | No schema | SoftwareApplication schema |
| Articles | No schema | BlogPosting schema |
| Reviews | No schema | Review schema with ratings |
| FAQs | No schema | FAQ rich snippets |
| Draft Pages | No protection | Auto X-Robots-Tag: noindex |

---

## Support

For detailed info, see:
- `SEO_IMPROVEMENTS_SUMMARY.md` - Full documentation
- `src/lib/seo-utils.ts` - Function documentation
- `src/app/sitemap.ts` - Sitemap comments
- `src/app/robots.ts` - Robots rules
- `middleware.ts` - Middleware logic
