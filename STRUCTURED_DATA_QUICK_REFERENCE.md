# Structured Data - Quick Reference

## What's What

**`src/lib/structured-data.ts`** - Generates JSON-LD schemas
**`src/components/StructuredData.tsx`** - Renders schemas in pages
**`src/lib/structured-data.examples.ts`** - Usage examples
**`STRUCTURED_DATA.md`** - Full documentation

## 8 Main Schema Functions

| Function | Use Case | Output Schema |
|----------|----------|---------------|
| `generateToolPageSchema()` | Calculators, tools | SoftwareApplication |
| `generateArticleSchema()` | Blog posts, guides | BlogPosting |
| `generateFAQSchema()` | FAQ sections | FAQPage |
| `generateBreadcrumbSchema()` | Navigation | BreadcrumbList |
| `generateProductReviewSchema()` | Reviews, ratings | Product |
| `generateComparisonSchema()` | Top 10, comparisons | ItemList |
| `generateHowToSchema()` | Step-by-step guides | HowTo |
| `generateFinancialToolSchema()` | Exchanges, DeFi | FinancialProduct |

## Plus 2 Bonus Functions

- `generateOrganizationSchema()` - Organization info
- `generateWebSiteSchema()` - Site search action

## Basic Usage (3 Steps)

### Step 1: Import
```typescript
import { generateArticleSchema } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
```

### Step 2: Generate
```typescript
const schema = generateArticleSchema({
  title: "My Blog Post",
  description: "A great article",
  url: "https://degen0x.com/blog/my-post",
  datePublished: "2026-03-01T10:00:00Z",
  dateModified: "2026-03-13T15:30:00Z",
  author: "John Doe",
});
```

### Step 3: Render
```typescript
export default function Page() {
  return (
    <>
      <StructuredData data={schema} />
      {/* Your content */}
    </>
  );
}
```

## Multiple Schemas (Advanced)

```typescript
import { combineSchemas } from "@/lib/structured-data";

const allSchemas = combineSchemas([
  generateBreadcrumbSchema([...]),
  generateArticleSchema({...}),
  generateFAQSchema([...]),
]);

return <StructuredData data={allSchemas} />;
```

## Where to Add Schemas

| Page Type | Schemas | Location |
|-----------|---------|----------|
| Blog Post | Breadcrumb + Article + FAQ | Page component top |
| Exchange Review | Breadcrumb + Product + FAQ | Page component top |
| Guide/Tutorial | Breadcrumb + Article + HowTo | Page component top |
| Tool/Calculator | Tool + Breadcrumb | Page component top |
| Home Page | Organization + Website | Layout or page top |
| Category Page | Breadcrumb + Comparison | Page component top |

## Field Mapping Quick List

### For Articles
```
title → headline
description → description
url → url
datePublished → datePublished (ISO 8601)
dateModified → dateModified (ISO 8601)
author → author.name
image → image (optional)
wordCount → wordCount (optional)
```

### For Products/Reviews
```
name → name
description → description
url → url
rating → aggregateRating.ratingValue (1-5)
reviewCount → aggregateRating.ratingCount
image → image (optional)
```

### For Tools
```
name → name
description → description
url → url
category → applicationCategory
image → image (optional)
```

## Testing Your Schemas

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Paste your page URL** and click Test
3. **Check for errors** (red icons)
4. **Review warnings** (yellow icons)
5. **Fix and retest**

## Common Date Formats

```typescript
// Current moment in ISO 8601
new Date().toISOString()
// → "2026-03-13T23:04:00.000Z"

// Specific date
new Date("2026-03-01").toISOString()
// → "2026-03-01T00:00:00.000Z"

// With time
new Date("2026-03-01T10:30:00").toISOString()
// → "2026-03-01T10:30:00.000Z"
```

## Required vs Optional Fields

### Always Required
- `name` / `title`
- `description`
- `url`
- Schema-specific required fields (check full docs)

### Usually Optional
- `image`
- `author`
- `rating` / `reviewCount`
- Additional metadata

**Check full documentation** for schema-specific requirements.

## Example Snippets

### Blog Post (Minimal)
```typescript
generateArticleSchema({
  title: "How to Invest in Bitcoin",
  description: "A beginner's guide",
  url: "https://degen0x.com/blog/bitcoin-investing",
  datePublished: "2026-03-01T10:00:00Z",
  dateModified: "2026-03-13T15:30:00Z",
  author: "Jane Doe",
})
```

### Exchange Review
```typescript
generateProductReviewSchema({
  name: "Coinbase",
  description: "User-friendly crypto exchange",
  url: "https://degen0x.com/exchanges/reviews/coinbase",
  rating: 4.6,
  reviewCount: 2847,
  image: "https://degen0x.com/images/coinbase.png",
})
```

### How-To Guide
```typescript
generateHowToSchema({
  name: "Set Up a Wallet",
  description: "Complete setup guide",
  steps: [
    { name: "Download", text: "Get the app..." },
    { name: "Create", text: "Create account..." },
    { name: "Secure", text: "Backup seed..." },
  ],
  totalTime: "PT15M",
})
```

### Breadcrumbs (Any Page)
```typescript
generateBreadcrumbSchema([
  { name: "Home", url: "https://degen0x.com" },
  { name: "Wallets", url: "https://degen0x.com/wallets" },
  { name: "Ledger", url: "https://degen0x.com/wallets/ledger" },
])
```

## Files Reference

| File | Purpose | Main Export |
|------|---------|-------------|
| `src/lib/structured-data.ts` | All schema generators | Named exports for each function |
| `src/components/StructuredData.tsx` | Render schemas | Default: `StructuredData`, Legacy: named exports |
| `src/lib/structured-data.examples.ts` | Code examples | Non-executable documentation |
| `STRUCTURED_DATA.md` | Full docs | Documentation |

## TypeScript Types

All fully typed for IDE autocomplete:

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
  BaseSchema,
} from "@/lib/structured-data";
```

## Pro Tips

1. **Always add breadcrumbs** - Helps search engines navigate your site
2. **Use real images** - Improves rich snippet appearance
3. **Keep dates updated** - dateModified keeps content fresh
4. **Test before pushing** - Use Google Rich Results Test
5. **Monitor GSC** - Check Google Search Console for issues
6. **Sync with content** - Schema data must match page content
7. **Use TypeScript types** - Better IDE support and type safety
8. **Combine schemas** - Use combineSchemas() for full page coverage

## Support

- Full docs: `STRUCTURED_DATA.md`
- Code examples: `src/lib/structured-data.examples.ts`
- Schema types: `src/lib/structured-data.ts` (interfaces)
- Component: `src/components/StructuredData.tsx`
