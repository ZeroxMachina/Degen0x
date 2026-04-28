---
name: degen-page-scaffold
description: "Scaffold new pages for the degen0x crypto platform — tool pages, learn/guide articles, compare pages, or any new route. Use this skill whenever someone asks to add a new page, tool, calculator, tracker, guide, article, or comparison to the degen0x Next.js site. Also trigger when the user says things like 'add a new tool for X', 'create a page about Y', 'build a Z calculator', or 'write a guide on W'. Even if they just say 'add token radar' or 'we need an options chain page', use this skill — any new route on degen0x should go through here so it matches the existing architecture."
---

# degen0x Page Scaffold

You're adding a new page to **degen0x**, a crypto comparison/tools/education platform built with Next.js (App Router), deployed on Vercel. The site has 800+ pages and a very consistent architecture. Your job is to generate pages that fit seamlessly into the existing codebase.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── tools/[slug]/page.tsx    # Tool pages (calculators, trackers, scanners)
│   ├── learn/[slug]/page.tsx    # Educational guides & articles
│   ├── compare/[type]/[slug]/page.tsx  # Comparison pages
│   ├── exchanges/[slug]/page.tsx       # Exchange reviews
│   ├── wallets/[slug]/page.tsx         # Wallet reviews
│   └── ...
├── components/             # React components (140+ existing)
├── data/                   # Static data files (tokens, exchanges, etc.)
└── lib/
    ├── constants.ts        # SITE_NAME, SITE_URL, CATEGORIES
    ├── published-pages.ts  # Controls Google indexing
    ├── structured-data.ts  # JSON-LD schema generators
    ├── seo-utils.ts        # Meta tag helpers
    └── types.ts            # Shared TypeScript interfaces
```

## Step 1: Determine the Page Type

Ask the user (or infer from their request) what kind of page this is:

| Type | Route Pattern | Example |
|------|--------------|---------|
| **Tool** | `/tools/[slug]` | `/tools/options-chain`, `/tools/whale-alerts` |
| **Learn/Guide** | `/learn/[slug]` | `/learn/restaking-guide`, `/learn/what-is-rwa` |
| **Compare** | `/compare/[category]/[slug]` | `/compare/exchanges/coinbase-vs-kraken` |
| **Exchange Review** | `/exchanges/[slug]` | `/exchanges/hyperliquid` |
| **Wallet Review** | `/wallets/[slug]` | `/wallets/backpack` |
| **Blog Post** | `/blog/[slug]` | `/blog/solana-firedancer-impact` |

## Step 2: Create the Page Files

### For Tool Pages

Tool pages have two files: a **page.tsx** (route + metadata + layout) and a **component** (the interactive tool itself).

**`src/app/tools/[slug]/page.tsx`** — follows this pattern exactly:

```tsx
import { Metadata } from "next";
import MyToolComponent from "@/components/MyToolComponent";
import Breadcrumb from "@/components/Breadcrumb";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tool Name - Short Value Prop | degen0x",
  description: "140-160 char description with primary keywords. Be specific about what the tool does and why it's useful.",
  keywords: "comma, separated, keywords, targeting, search, intent",
  openGraph: {
    title: "Tool Name - Slightly Different Title for Social",
    description: "Shorter OG description optimized for social sharing.",
    url: "https://degen0x.com/tools/slug-here",
    type: "website",
    images: [{
      url: "https://degen0x.com/og-tool-name.png",
      width: 1200,
      height: 630,
      alt: "Tool Name Description",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tool Name - Value Prop",
    description: "Concise Twitter description.",
  },
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function ToolNamePage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Tool Name" },
          ]}
        />

        {/* ── Header ── */}
        <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
          <div style={{
            display: "inline-block",
            padding: "6px 14px",
            background: "rgba(99, 102, 241, 0.15)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            borderRadius: 20,
            fontSize: 12,
            color: "var(--color-primary)",
            fontWeight: 700,
            marginBottom: 12,
          }}>
            CATEGORY BADGE
          </div>
          <h1 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 900,
            color: "var(--color-text)",
            letterSpacing: "-0.02em",
          }}>
            Tool Name
          </h1>
          <p style={{
            fontSize: "1.05rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
            marginTop: 8,
          }}>
            One-line description of what this tool does and why it's useful.
          </p>
        </div>

        <MyToolComponent />
      </div>
    </div>
  );
}
```

**`src/components/MyToolComponent.tsx`** — the interactive component:

```tsx
'use client';

import { useState, useEffect, useMemo } from "react";

// Define TypeScript interfaces for all data
interface DataItem {
  // ...specific to this tool
}

// Mock/static data (or API-fetched)
const MOCK_DATA: DataItem[] = [/* ... */];

export default function MyToolComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  // ... state for filters, selections, etc.

  return (
    <div>
      {/* Search/Filter Bar */}
      <div style={{
        padding: "1.25rem",
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        borderRadius: "var(--glass-radius-sm)",
        backdropFilter: "blur(var(--glass-blur))",
        WebkitBackdropFilter: "blur(var(--glass-blur))",
        marginBottom: 16,
      }}>
        {/* Controls here */}
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 16,
      }}>
        {/* Cards / data display */}
      </div>
    </div>
  );
}
```

### For Learn/Guide Pages

Learn pages are single-file — everything lives in `page.tsx` since the content is static.

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide Title 2026 — Subtitle | degen0x",
  description: "SEO description targeting search intent...",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Guide Title 2026 | degen0x",
    description: "Social sharing description...",
    type: "article",
    publishedTime: "2026-03-14T00:00:00Z",
  },
};

export default function GuideNamePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      <article style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: "#6366f120", color: "#818cf8", border: "1px solid #6366f140" }}>Category</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: "#d2992220", color: "#d29922", border: "1px solid #d2992240" }}>Difficulty</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 12, background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Guide Title Here
          </h1>
          <p style={{ color: "#8b949e", fontSize: 16, lineHeight: 1.7 }}>
            Opening paragraph that hooks the reader and explains what they'll learn.
          </p>
          <div style={{ marginTop: 12, fontSize: 13, color: "#8b949e" }}>Updated March 2026 · X min read</div>
        </div>

        {/* Table of Contents */}
        <nav style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 32 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: "#58a6ff" }}>Table of Contents</h2>
          <ol style={{ paddingLeft: 20, color: "#8b949e", fontSize: 14, lineHeight: 2 }}>
            <li><a href="#section-1" style={{ color: "#58a6ff", textDecoration: "none" }}>Section 1</a></li>
            {/* ... more sections */}
          </ol>
        </nav>

        {/* Content Sections */}
        <section id="section-1" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>1. Section Title</h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Content paragraph...
          </p>

          {/* Info box pattern */}
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", marginBottom: 10 }}>Key Info</h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>Important detail...</p>
          </div>
        </section>

        {/* FAQ Section (optional, great for SEO) */}
        <section style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: "#e6edf3" }}>Frequently Asked Questions</h2>
          {/* FAQ items */}
        </section>
      </article>
    </div>
  );
}
```

## Step 3: Styling Rules

These rules keep the page visually consistent with the rest of the site:

- **Dark theme colors**: Background `#0d1117`, text `#e6edf3`, secondary `#8b949e`, links `#58a6ff`, cards `#161b22`, borders `#30363d`
- **Tool pages** use CSS custom properties: `var(--color-bg)`, `var(--glass-bg)`, `var(--glass-border)`, etc.
- **Learn pages** use hardcoded dark theme colors (they're always dark)
- **Glass-morphism** for tool cards: `backdropFilter: "blur(var(--glass-blur))"` with `WebkitBackdropFilter`
- **Typography**: headings use `clamp()` for responsive sizing, body at `15-16px`, line-height `1.7-1.8`
- **Gradient text** for hero headings: `background: "linear-gradient(135deg, #6366f1, #06b6d4)"` with `-webkit-background-clip: text`
- **Badge colors**: Primary (indigo) `#6366f1`, Success (green) `#22c55e`, Warning (amber) `#d29922`, Danger (red) `#f85149`
- **Grids**: Use `repeat(auto-fit, minmax(Xpx, 1fr))` — never hardcoded column counts
- **Spacing**: 16px gaps between cards, 40px between sections, 32px after header

## Step 4: Content Quality Guidelines

For any page with educational content (learn guides, tool descriptions, blog posts):

- Write with **authority** — this is a platform crypto enthusiasts trust. Be specific with numbers, protocols, and technical details.
- Include **current year** (2026) in titles and content where relevant for freshness signals.
- Name **specific protocols/exchanges** (Hyperliquid, dYdX, Uniswap, Aave, etc.) — the audience knows them.
- Every learn page should have a **Table of Contents** with anchor links.
- Include an **FAQ section** at the bottom — these are SEO gold for featured snippets.
- Use **info boxes** (the dark card pattern) to highlight key concepts, warnings, or pro tips.
- Content should work for readers ranging from intermediate to advanced ("degen" audience).

## Step 5: After Creating the Page

Remind the user about these follow-up steps:

1. **Add to publish queue**: The page won't be indexed by Google until it's in `src/lib/published-pages.ts`. Tell the user to add the slug to `PUBLISHED_PAGES` or `PUBLISH_QUEUE`.
2. **Structured data**: For tool pages, consider adding `StructuredData` component with `generateToolPageSchema()` from `src/lib/structured-data.ts`. For articles, use `generateArticleSchema()`.
3. **Test the build**: Run `npm run build` to verify no TypeScript/import errors.
4. **Check the sitemap**: The new page will automatically appear in `sitemap.xml` once built.

## Common Patterns Reference

### Color-coded status/risk indicators
```tsx
// Green (safe/profit)
{ background: "#22c55e20", color: "#22c55e", border: "1px solid #22c55e80" }
// Yellow (caution/medium)
{ background: "#F3BA2F20", color: "#F3BA2F", border: "1px solid #F3BA2F80" }
// Red (danger/loss)
{ background: "#f8514920", color: "#f85149", border: "1px solid #f8514980" }
```

### Number formatting utility
```tsx
function formatNumber(num: number): string {
  if (num >= 1_000_000_000) return `$${(num / 1_000_000_000).toFixed(2)}B`;
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(2)}M`;
  if (num >= 1_000) return `$${(num / 1_000).toFixed(2)}K`;
  return `$${num.toFixed(2)}`;
}
```

### Lucide icons (already installed)
```tsx
import { Search, Filter, TrendingUp, AlertTriangle, CheckCircle, Zap, Shield } from "lucide-react";
```
