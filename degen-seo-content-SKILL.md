---
name: degen-seo-content
description: "Generate SEO-optimized crypto content for degen0x — metadata, structured data, keyword-targeted articles, and search-optimized page copy. Use this skill whenever someone asks about SEO for degen0x, wants to write a crypto article or guide, needs metadata or structured data for a page, asks about keywords or search rankings, wants to optimize existing content, or mentions anything related to Google indexing, rich snippets, schema markup, or organic traffic for the site. Also trigger when users say things like 'write about restaking', 'we need content on RWAs', or 'optimize the DCA calculator page' — if it touches content + search visibility, use this skill."
---

# degen0x SEO Content Generator

You're creating search-optimized content for **degen0x.com**, a crypto comparison and tools platform. The site already has a mature SEO infrastructure — your job is to leverage it properly so every piece of content has the best possible chance of ranking.

## The SEO Stack

degen0x uses these SEO systems (all already built and ready to use):

| System | File | What It Does |
|--------|------|-------------|
| **Metadata** | Each `page.tsx` | `export const metadata: Metadata` with title, description, OG, Twitter |
| **Structured Data** | `src/lib/structured-data.ts` | JSON-LD schema generators for 10+ page types |
| **StructuredData component** | `src/components/StructuredData.tsx` | Renders JSON-LD into `<script>` tags |
| **Breadcrumbs** | `src/components/Breadcrumb.tsx` | Navigation + BreadcrumbList schema automatically |
| **Sitemap** | `src/app/sitemap.ts` | Auto-generated from PUBLISHED_PAGES |
| **Robots** | `src/app/robots.ts` | Crawl rules, blocks aggressive bots |
| **Publishing** | `src/lib/published-pages.ts` | Controls which pages are indexable |
| **Middleware** | `middleware.ts` | Sets X-Robots-Tag + cache headers per page |

## Writing Metadata

Every page needs a `metadata` export. Here's how to write them well:

### Title Tag Formula

```
[Primary Keyword] - [Value Prop/Differentiator] | degen0x
```

- Keep under 60 characters (Google truncates after that)
- Put the primary keyword first — Google weights early words more heavily
- Include the current year (2026) for time-sensitive topics
- Examples:
  - `"DCA Calculator - Dollar Cost Average Any Crypto | degen0x"`
  - `"Restaking Guide 2026 — EigenLayer, Symbiotic & Beyond | degen0x"`

### Meta Description Formula

```
[What it does/covers] + [Why use this one] + [Call to action or key detail]
```

- 140-160 characters (Google truncates after ~155)
- Include the primary keyword naturally
- Be specific — vague descriptions get lower click-through rates
- Example: `"Calculate your DCA returns for any crypto over any time period. Supports 50+ tokens with live CoinGecko prices. Free, no signup required."`

### Open Graph

```typescript
openGraph: {
  title: "Slightly different title optimized for social sharing",
  description: "Shorter, punchier description for social cards",
  url: "https://degen0x.com/tools/slug-here",
  type: "website",  // or "article" for learn/blog content
  images: [{
    url: "https://degen0x.com/og-descriptive-name.png",
    width: 1200,
    height: 630,
    alt: "Descriptive alt text for accessibility",
  }],
},
```

For articles, also include:
```typescript
openGraph: {
  type: "article",
  publishedTime: "2026-03-14T00:00:00Z",
  modifiedTime: "2026-03-14T00:00:00Z",
  authors: ["degen0x Team"],
},
```

## Structured Data

Import the generators and the renderer component:

```typescript
import { generateToolPageSchema, generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
```

### Which Schema to Use

| Page Type | Primary Schema | Bonus Schemas |
|-----------|---------------|---------------|
| **Tool/Calculator** | `generateToolPageSchema()` | FAQ, Breadcrumb |
| **Learn Guide** | `generateArticleSchema()` | FAQ, HowTo, Breadcrumb |
| **Exchange Review** | `generateProductReviewSchema()` | FAQ, Breadcrumb |
| **Comparison** | `generateComparisonSchema()` | FAQ |
| **How-To Guide** | `generateHowToSchema()` | FAQ, Article |
| **Blog Post** | `generateArticleSchema()` | FAQ |

### Tool Page Schema Example

```tsx
const schema = generateToolPageSchema({
  name: "DCA Calculator",
  description: "Calculate dollar-cost averaging returns for any cryptocurrency",
  url: "https://degen0x.com/tools/dca-calculator",
  category: "CalculatorApplication",
  image: "https://degen0x.com/og-dca-calculator.png",
  aggregateRating: { ratingValue: 4.8, ratingCount: 1250 },
});

// In JSX:
<StructuredData data={schema} />
```

### Article Schema Example

```tsx
const schema = generateArticleSchema({
  title: "Restaking Guide 2026",
  description: "Complete guide to restaking...",
  url: "https://degen0x.com/learn/restaking-guide",
  datePublished: "2026-03-14T00:00:00Z",
  dateModified: "2026-03-14T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-restaking.png",
  wordCount: 3000,
});
```

### FAQ Schema (Add to Almost Everything)

FAQ schemas are one of the highest-value structured data types for SEO — they can get your page featured snippets and "People Also Ask" placements.

```tsx
const faqSchema = generateFAQSchema([
  { question: "What is dollar-cost averaging?", answer: "DCA is an investment strategy where..." },
  { question: "How often should I DCA into crypto?", answer: "Most investors DCA weekly or monthly..." },
]);

// Combine with other schemas:
const combined = combineSchemas([toolSchema, faqSchema]);
<StructuredData data={combined} />
```

Write 4-6 FAQs per page. Target questions people actually search for — check "People Also Ask" boxes in Google for your target keyword.

## Content Strategy for Different Page Types

### Tool Pages

**Goal**: Rank for "[tool name] crypto" and "[action] calculator/tracker"

The tool itself is the main content. Below the tool, add:

1. **Features section** — 3-4 cards explaining what the tool does
2. **How to use** — brief 3-step guide
3. **FAQ section** — 4-6 questions targeting long-tail searches
4. **Related tools** — internal links to other degen0x tools

### Learn/Guide Articles

**Goal**: Rank for informational queries like "what is [concept]", "[topic] guide 2026", "how does [thing] work"

Structure for maximum SEO value:

1. **Hook paragraph** — immediately answer the core question (Google pulls this for featured snippets)
2. **Table of Contents** — with anchor links (helps Google understand page structure)
3. **Numbered sections** — H2 headings with the keyword variation (e.g., "1. What Is Restaking?", "2. How Restaking Works", "3. Best Restaking Protocols")
4. **Info boxes** — key terms, warnings, pro tips (these break up walls of text and reduce bounce rate)
5. **Comparison tables** — if comparing protocols/approaches (Google loves tables)
6. **FAQ section** — 4-6 questions targeting "People Also Ask"

### Blog Posts

**Goal**: Rank for timely queries and drive newsletter signups

Blog content should be opinionated and current. Include specific data points, protocol names, and dates. Blog metadata should use `type: "article"` with `publishedTime`.

## Keyword Targeting Guidelines

### Title Keywords by Category

| Category | Keyword Patterns |
|----------|-----------------|
| **Tools** | "[name] calculator", "crypto [name]", "[name] tracker", "free [name] tool" |
| **Learn** | "what is [concept]", "[concept] explained", "[concept] guide 2026", "how does [concept] work" |
| **Compare** | "[A] vs [B]", "[A] vs [B] 2026", "best [category]", "[A] or [B]" |
| **Reviews** | "[name] review 2026", "is [name] safe", "[name] fees", "[name] pros and cons" |
| **Blog** | "[event/trend] 2026", "[topic] impact", "[topic] what to expect" |

### Internal Linking

Every page should link to 3-5 other degen0x pages. This distributes link equity and helps Google discover all pages. Good linking patterns:

- Tool pages → related tools + relevant learn guide
- Learn guides → related tools + related guides + relevant reviews
- Reviews → comparison pages + related tools
- Blog posts → learn guides + tools

Use descriptive anchor text, not "click here" — `<a href="/tools/dca-calculator">our DCA calculator</a>` is much better than `<a href="/tools/dca-calculator">this tool</a>`.

## Constants Reference

Always import site-wide values from `src/lib/constants.ts`:

```typescript
import { SITE_NAME, SITE_URL, CURRENT_YEAR } from "@/lib/constants";
// SITE_NAME = "degen0x"
// SITE_URL = "https://degen0x.com"
// CURRENT_YEAR = 2026
```

Use these in metadata rather than hardcoding, so everything stays consistent if the domain or branding changes.

## Quality Checklist

Before considering a page's SEO complete, verify:

- [ ] Title tag under 60 chars, primary keyword first
- [ ] Meta description 140-160 chars, specific and compelling
- [ ] OpenGraph title, description, and image set
- [ ] Twitter card configured
- [ ] Breadcrumb component included (auto-generates BreadcrumbList schema)
- [ ] Appropriate structured data (Tool/Article/FAQ/etc.)
- [ ] FAQ section with 4-6 real questions
- [ ] 3-5 internal links to other degen0x pages
- [ ] Current year mentioned where relevant
- [ ] Canonical URL set (Next.js handles this via `metadataBase` in root layout)
- [ ] Page added to `published-pages.ts` (PUBLISH_QUEUE or PUBLISHED_PAGES)
