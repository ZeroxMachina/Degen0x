---
name: degen-publish-queue
description: "Manage the degen0x publishing queue — promote pages from PUBLISH_QUEUE to PUBLISHED_PAGES, check publishing status, plan daily rollouts, and deploy. Use this skill whenever someone mentions publishing pages, promoting pages to production, checking what's indexed, managing the publish queue, deploying new pages, doing a daily rollout, or anything related to which degen0x pages are live vs queued. Even casual mentions like 'push the next batch live', 'what pages are still queued', or 'publish the international pages' should trigger this skill."
---

# degen0x Publish Queue Manager

You're managing which pages on **degen0x.com** are indexed by Google. The site has 800+ built pages but only publishes them in controlled batches (20/day) to build SEO authority gradually.

## How the System Works

### The Source of Truth

Everything is controlled by **`src/lib/published-pages.ts`**:

```
PUBLISHED_PAGES (ReadonlySet<string>)  →  Pages Google can index
PUBLISH_QUEUE (readonly string[])       →  Pages waiting to go live (priority-ordered)
isPublished(pathname)                   →  Helper function used by middleware
```

### The Pipeline

```
Page exists in src/app/   →   Listed in PUBLISH_QUEUE   →   Moved to PUBLISHED_PAGES   →   Deploy   →   Google indexes
     (built but hidden)        (ready, waiting)               (live, indexable)              (vercel)     (organic traffic)
```

When a page is **not** in PUBLISHED_PAGES, the middleware at `middleware.ts` adds `X-Robots-Tag: noindex, follow` — Google still follows links (passing equity) but won't show the page in search results.

### The Middleware Catch

The middleware runs on **Vercel Edge Runtime** and can't import modules. It has a hardcoded `PILLAR_PAGES` set that determines which pages get premium cache headers and full SEO treatment. When you publish important pages, remind the user to check if they should also be added to the middleware's PILLAR_PAGES set.

## Publishing Workflows

### Workflow 1: Daily Batch Publish (Most Common)

This is the standard "publish the next 20 pages" workflow:

1. **Read the current state**:
   ```
   Read src/lib/published-pages.ts
   ```
   Check what's already published, what's in the queue, and identify the next batch.

2. **Select the batch** — take the next 20 (or however many the user wants) from `PUBLISH_QUEUE`. Group them logically if possible (all tools together, all learn articles together).

3. **Edit the file**:
   - Move the selected slugs from `PUBLISH_QUEUE` into `PUBLISHED_PAGES`
   - Add a dated comment above the new batch: `// ── Day N — Description (published Mar XX) ──`
   - Keep the formatting consistent with existing sections

4. **Verify pages exist**: For each slug being published, confirm there's a corresponding `page.tsx`:
   ```bash
   # Quick existence check
   for slug in /tools/new-thing /learn/new-guide; do
     [ -f "src/app${slug}/page.tsx" ] && echo "✓ $slug" || echo "✗ MISSING: $slug"
   done
   ```

5. **Remind about deployment**: Tell the user to run `vercel --prod` or push to trigger a Vercel deploy.

### Workflow 2: Check Publishing Status

When the user asks "what's published?" or "what's still in the queue?":

1. Read `src/lib/published-pages.ts`
2. Count pages by category (tools, learn, exchanges, wallets, etc.)
3. Show what's in the queue
4. Identify any pages that exist in `src/app/` but aren't in either PUBLISHED_PAGES or PUBLISH_QUEUE (orphaned pages)

### Workflow 3: Add New Pages to Queue

When new pages are created (maybe via the page scaffold skill), they need to be added to the publishing pipeline:

1. Add the slug to `PUBLISH_QUEUE` in the appropriate priority position
2. Higher-traffic page types go first: Tools > Learn > Compare > Reviews
3. Pages with strong keyword targeting should be prioritized

### Workflow 4: Audit Published vs Actual

Sometimes pages get deleted or renamed but stay in the published list. Run an audit:

```bash
# Find all page.tsx files and extract their routes
find src/app -name "page.tsx" -not -path "*/\[*" | sed 's|src/app||;s|/page.tsx||' | sort
```

Compare against the PUBLISHED_PAGES set and flag any mismatches.

## File Format Reference

The published-pages.ts file follows this exact format:

```typescript
export const PUBLISHED_PAGES: ReadonlySet<string> = new Set([
  // ── Core / Utility ─────────────────────────────────────────────
  "/",
  "/about",
  // ...

  // ── Day N — Category (published Mar XX) ──────────────────────
  "/tools/new-tool",
  "/tools/another-tool",
]);

export const PUBLISH_QUEUE: readonly string[] = [
  // Day N+ — Description
  "/path/to/page",
];

export function isPublished(pathname: string): boolean {
  const normalized = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;
  return PUBLISHED_PAGES.has(normalized);
}
```

Maintain this style exactly: the section comments with em-dashes, the dated annotations, and the `isPublished` function at the bottom.

## Important Details

- **Slugs have no trailing slash** — always `/tools/converter`, never `/tools/converter/`
- **The homepage is just `/`** — it's special-cased in `isPublished()`
- **20 pages/day** is the default cadence, but the user might want more or fewer
- **Don't break the Set literal** — if you add pages, make sure the commas and formatting are correct
- **The file is TypeScript** — `ReadonlySet<string>` and `readonly string[]` types must be preserved
- After publishing, the **sitemap** at `src/app/sitemap.ts` automatically picks up the new pages on the next build — no manual sitemap updates needed
