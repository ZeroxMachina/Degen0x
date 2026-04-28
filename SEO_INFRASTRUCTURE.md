# CryptoDegen SEO Infrastructure Guide

## Overview

CryptoDegen has comprehensive SEO infrastructure optimized for 2,275+ pages. This guide covers all SEO components, their configuration, and how to maintain them.

---

## 1. XML Sitemap (`src/app/sitemap.ts`)

### Purpose
Provides search engines with a comprehensive index of all 2,275+ pages on the site, helping with crawling and indexing efficiency.

### Configuration
- **File**: `/src/app/sitemap.ts`
- **Output**: Generated automatically as `/sitemap.xml`
- **Build**: Static generation (`export const dynamic = "force-static"`)
- **Base URL**: Uses `SITE_URL` from `@/lib/constants` (https://cryptodegen.com)

### Priority Levels (URL ranking for crawlers)

| Priority | Type | Change Frequency | Use Cases |
|----------|------|------------------|-----------|
| 1.0 | Homepage | Daily | `/` |
| 0.9 | Best guides | Weekly | `/exchanges/best`, `/wallets/best`, etc. |
| 0.8 | Category pages | Weekly | `/exchanges`, `/wallets`, `/learn`, etc. |
| 0.8 | Reviews | Weekly | `/exchanges/reviews/*`, `/wallets/reviews/*` |
| 0.7 | Comparison pages | Weekly | `/compare/*`, `/*/compare/*` |
| 0.6 | Learning/Tools | Monthly | `/learn/*`, `/tools/*`, `/calculators/*` |
| 0.6 | Token pages | Weekly | `/token/*` |
| 0.5 | Tertiary content | Weekly | Other pages |
| 0.4 | Glossary | Monthly | `/glossary/*` |

### Route Organization
The sitemap is organized by category for easy maintenance:

```
Homepage (/)
├── Exchanges (/exchanges/*)
│   ├── Best
│   ├── Reviews
│   └── Compare
├── Wallets (/wallets/*)
├── Investing (/investing/*)
├── DeFi Lending (/defi-lending/*)
├── Crypto Loans (/crypto-loans/*)
├── Taxes (/taxes/*)
├── Insurance (/insurance/*)
├── Web3 Business (/web3-business/*)
├── Crypto Cards (/crypto-cards/*)
├── NFTs (/nfts/*)
├── Spending (/spending/*)
├── Learn (/learn/*)
├── Compare (/compare/*)
├── Token Pages (/token/*)
├── Prices (/prices)
├── Terms (/terms)
├── Privacy (/privacy)
├── About (/about)
└── Contact (/contact)
```

### Maintenance
1. **New routes**: Add to the `routes` array in `sitemap.ts`
2. **Priority updates**: Modify the priority logic in the mapping function
3. **Frequency changes**: Update `changeFrequency` based on content update schedule

### Technical Details
- Uses Next.js 16 metadata route API
- Supports unlimited URLs (tested with 2,275+)
- Automatically includes trailing slashes (configured in `next.config.ts`)
- All URLs are absolute (uses `SITE_URL` as base)

---

## 2. Robots.txt Configuration (`src/app/robots.ts`)

### Purpose
Controls which pages search engines can crawl and which they should skip.

### Configuration
- **File**: `/src/app/robots.ts`
- **Output**: Generated automatically as `/robots.txt`
- **Build**: Static generation

### Rules

**Default Rule (All Bots)**
```
Allow: /
Disallow: ["/api/", "/admin/", "/_next/", "/private/", "/*.json", "/.well-known/"]
Crawl-Delay: 0
```

**Blocked Bots** (Aggressive scrapers)
- AhrefsBot (SEO scraper)
- SemrushBot (SEO scraper)

### What Gets Blocked
| Path | Reason |
|------|--------|
| `/api/*` | API endpoints not meant for indexing |
| `/admin/*` | Admin pages (security) |
| `/_next/*` | Next.js internal files |
| `/private/*` | Private content |
| `/*.json` | JSON data files |
| `/.well-known/*` | Well-known configuration |

### Sitemap Reference
The robots.txt automatically references:
```
Sitemap: https://cryptodegen.com/sitemap.xml
```

### Maintenance
- Add new routes to disallow if they shouldn't be indexed
- Review crawler access logs to identify problematic bots
- Update blocked bot list based on site analytics

---

## 3. Open Graph (OG) & Twitter Meta Tags

### Purpose
Controls how pages appear when shared on social media platforms.

### Current Configuration

**Location**: `/src/app/layout.tsx`

**Global Metadata**:
```typescript
openGraph: {
  type: "website",
  locale: "en_US",
  url: SITE_URL,
  siteName: "CryptoDegen",
  title: "CryptoDegen - Compare Crypto Exchanges, Wallets & DeFi Protocols",
  description: SITE_DESCRIPTION,
}

twitter: {
  card: "summary_large_image",
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}
```

### Setting Up OG Images

#### 1. Create OG Image Asset
Create a 1200x630px image and save as `/public/og-image.png`

**Recommended specifications**:
- Format: PNG or JPG
- Size: 1200x630 pixels
- File size: < 500KB
- Design: Include CryptoDegen branding, crypto theme, clear text

#### 2. Update layout.tsx
Uncomment the OG image configuration:

```typescript
openGraph: {
  // ... other properties
  images: [
    {
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: `${SITE_NAME} - The NerdWallet of Crypto`,
      type: "image/png",
    },
  ],
}

twitter: {
  // ... other properties
  image: `${SITE_URL}/og-image.png`,
}
```

#### 3. Test OG Tags
Use these tools to verify OG tag rendering:
- [Open Graph Debugger](https://www.opengraphcheck.com/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)

### Per-Page OG Customization
For category pages, create custom metadata:

```typescript
// Example: /src/app/exchanges/page.tsx
export const metadata: Metadata = {
  title: "Best Crypto Exchanges | CryptoDegen",
  description: "Compare and review the best crypto exchanges...",
  openGraph: {
    title: "Best Crypto Exchanges",
    description: "Compare top-rated crypto exchanges...",
    // Can override with category-specific image
    images: [
      {
        url: `${SITE_URL}/og-images/exchanges.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

---

## 4. Structured Data (Schema.org JSON-LD)

### Current Implementation
The root layout includes a WebSite schema:

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CryptoDegen",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
```

### Recommended Additional Schemas

**1. Organization Schema** (Add to layout.tsx)
```typescript
{
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CryptoDegen",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  logo: `${SITE_URL}/logo.png`,
}
```

**2. BreadcrumbList** (Per page navigation)
```typescript
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Exchanges",
      item: `${SITE_URL}/exchanges`,
    },
    // ... more items
  ],
}
```

**3. Product/Review Schemas** (For comparison/review pages)
```typescript
{
  "@context": "https://schema.org",
  "@type": "Review",
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.5",
    bestRating: "5",
    worstRating: "1",
  },
  reviewBody: "Review text here...",
  datePublished: "2024-03-11",
  author: {
    "@type": "Organization",
    name: "CryptoDegen",
  },
}
```

---

## 5. Core Web Vitals & Performance

### Current Optimizations
- Image optimization disabled for static export (`images: { unoptimized: true }`)
- CSS optimization enabled (`experimental: { optimizeCss: true }`)
- Compression enabled
- Strict mode for React

### Recommended Additions

**1. Preload Critical Resources** (In `layout.tsx`)
```typescript
<link rel="preconnect" href="https://api.coingecko.com" crossOrigin="anonymous" />
<link rel="dns-prefetch" href="https://api.coingecko.com" />
<link rel="prefetch" href="/critical-page" />
```

**2. Canonical Tags**
Already configured globally. For dynamic pages:
```typescript
alternates: {
  canonical: `${SITE_URL}/current-page-path`,
}
```

**3. Meta Robots**
Currently set to:
```
index: true
follow: true
```

---

## 6. Configuration Files

### next.config.ts
```typescript
{
  output: "export",           // Static export for hosting
  trailingSlash: true,        // Important for SEO consistency
  images: { unoptimized: true },
  compiler: { removeConsole: true }, // Production
  experimental: { optimizeCss: true },
  poweredByHeader: false,     // Security
  compress: true,             // Gzip compression
  reactStrictMode: true,
}
```

### lib/constants.ts
Key constants used in SEO:
```typescript
SITE_NAME = "CryptoDegen"
SITE_URL = "https://cryptodegen.com"
SITE_DESCRIPTION = "CryptoDegen is the leading crypto comparison and review platform..."
```

---

## 7. SEO Checklist

### Monthly Tasks
- [ ] Monitor Google Search Console for crawl errors
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Review top performing pages in Google Analytics
- [ ] Check for broken links using external tools
- [ ] Verify sitemap is being crawled (GSC)

### Quarterly Tasks
- [ ] Update OG images if branding changes
- [ ] Review and update page priorities in sitemap
- [ ] Audit new pages for proper meta tags
- [ ] Check robots.txt is blocking correctly
- [ ] Verify structured data with Schema.org validator

### Annually
- [ ] Full SEO audit of all 2,275+ pages
- [ ] Competitive analysis and keyword research
- [ ] Review and update internal linking strategy
- [ ] Analyze backlink profile
- [ ] Plan content updates based on search trends

---

## 8. Tools & Resources

### Essential Tools
- [Google Search Console](https://search.google.com/search-console) - Monitor indexing
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance metrics
- [Schema.org Validator](https://schema.org/docs/schema_org_data_types.html) - JSON-LD validation
- [OpenGraph Debugger](https://www.opengraphcheck.com/) - Social sharing preview

### Monitoring
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) - Site crawling analysis
- [Ahrefs Site Audit](https://ahrefs.com/site-audit) - Comprehensive SEO audit
- [SEMrush](https://www.semrush.com/) - Competitive analysis (though bots are blocked)

### Content Optimization
- [Yoast SEO](https://yoast.com/) - Content guidelines
- [Google Keyword Planner](https://ads.google.com/intl/en/home/tools/keyword-planner/) - Keyword research
- [AnswerThePublic](https://answerthepublic.com/) - Content ideas

---

## 9. Common Issues & Solutions

### Issue: Pages not appearing in search results

**Solutions:**
1. Check Google Search Console for indexing errors
2. Verify robots.txt isn't blocking the page
3. Ensure proper meta tags are present
4. Check if page is canonicalized correctly
5. Review Core Web Vitals - poor metrics reduce ranking

### Issue: Sitemap not being crawled

**Solutions:**
1. Verify sitemap is accessible at `/sitemap.xml`
2. Check robots.txt references correct sitemap URL
3. Submit sitemap to Google Search Console manually
4. Check for XML syntax errors

### Issue: OG images not showing on social media

**Solutions:**
1. Verify image URL is absolute (includes domain)
2. Check image dimensions (1200x630 recommended)
3. Use debuggers to verify OG tags
4. Ensure image is accessible (no robots blocking)
5. Clear social platform cache and re-share

### Issue: Poor Core Web Vitals scores

**Solutions:**
1. Optimize images with appropriate sizes
2. Defer non-critical JavaScript
3. Use CSS critical path optimization
4. Enable compression in `next.config.ts`
5. Consider CDN for static assets

---

## 10. Build & Deployment

### Build Process
```bash
# Development
npm run dev

# Production build (static export)
npm run build

# Verify static output
ls -la .next/standalone/

# Serve static files
npm run start
```

### Static Export Details
With `output: "export"` in `next.config.ts`:
- All pages must be static (no API routes with res.json() response)
- No dynamic server-side rendering
- Sitemap.ts generates `/out/sitemap.xml` on build
- Robots.ts generates `/out/robots.txt` on build
- Trailing slashes are added to all URLs

### Deployment
Deploy the output directory (usually `out/` or `.next/standalone/`) to:
- Static hosting (Vercel, Netlify, AWS S3 + CloudFront)
- Never use server-side rendering mode with this config

---

## 11. Maintenance & Updates

### Adding New Pages
1. Create page component in appropriate directory
2. Ensure page has proper metadata (title, description)
3. Add route to `sitemap.ts` if manually managing routes
4. Test with `npm run build` to verify no errors
5. Submit sitemap update to Google Search Console

### Updating Page Metadata
Edit individual page metadata:

```typescript
// src/app/exchanges/page.tsx
export const metadata: Metadata = {
  title: "Best Crypto Exchanges",
  description: "Compare top exchanges...",
  openGraph: {
    title: "Best Crypto Exchanges",
    description: "Compare top exchanges...",
  },
};
```

### Monitoring Crawl Efficiency
Track in Google Search Console:
1. Coverage report - identify any excluded pages
2. Crawl stats - monitor crawl rate
3. Core Web Vitals - ensure good performance
4. Mobile usability - check mobile-specific issues

---

## Summary

CryptoDegen's SEO infrastructure includes:
✓ Comprehensive sitemap for 2,275+ pages
✓ Intelligent robots.txt with crawler blocking
✓ Open Graph meta tags for social sharing
✓ Schema.org structured data
✓ Optimized Next.js configuration
✓ Performance optimizations

All components work together to ensure maximum visibility in search engines while maintaining site security and performance.

For questions or updates, refer to:
- Next.js Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata
- Schema.org: https://schema.org/
- Google SEO Starter Guide: https://developers.google.com/search/docs
