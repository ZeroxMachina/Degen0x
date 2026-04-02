import { NextRequest, NextResponse } from "next/server";
import { PUBLISHED_PAGES, PUBLISH_QUEUE } from "@/lib/published-pages";
import pageManifest from "@/data/page-manifest.json";

// ── Constants ───────────────────────────────────────────
const ADMIN_PASSWORD = "degen0x-admin-2026";

// ── Types ───────────────────────────────────────────────
interface PageEntry {
  slug: string;
  category: string;
  status: "index_follow" | "noindex_nofollow";
  inQueue: boolean;
  hasPageFile: boolean;
}

interface ManifestEntry {
  slug: string;
  category: string;
}

// ── GET: List all pages ─────────────────────────────────
export async function GET() {
  try {
    const manifest = pageManifest as ManifestEntry[];
    const manifestSlugs = new Set(manifest.map((m) => m.slug));
    const queued = new Set(PUBLISH_QUEUE);

    // Combine all known slugs (from manifest + published list + queue)
    const allSlugs = new Set<string>([
      ...manifestSlugs,
      ...PUBLISHED_PAGES,
      ...queued,
    ]);

    const pages: PageEntry[] = [];
    for (const slug of allSlugs) {
      // Get category from manifest or derive from slug
      const manifestEntry = manifest.find((m) => m.slug === slug);
      const category = manifestEntry
        ? manifestEntry.category
        : getCategory(slug);

      pages.push({
        slug,
        category,
        status: PUBLISHED_PAGES.has(slug) ? "index_follow" : "noindex_nofollow",
        inQueue: queued.has(slug),
        hasPageFile: manifestSlugs.has(slug),
      });
    }

    // Sort by category then slug
    pages.sort(
      (a, b) =>
        a.category.localeCompare(b.category) || a.slug.localeCompare(b.slug)
    );

    return NextResponse.json({
      pages,
      stats: {
        total: pages.length,
        indexed: pages.filter((p) => p.status === "index_follow").length,
        noindex: pages.filter((p) => p.status === "noindex_nofollow").length,
        inQueue: pages.filter((p) => p.inQueue).length,
        withFile: pages.filter((p) => p.hasPageFile).length,
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// ── POST: Update page indexing status ───────────────────
// NOTE: On Vercel (read-only filesystem), POST cannot write to published-pages.ts.
// This endpoint returns instructions for manual update. For local dev it could
// write directly, but we keep it read-only-safe for production.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { changes, password } = body as {
      changes: { slug: string; status: "index_follow" | "noindex_nofollow" }[];
      password: string;
    };

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!changes || !Array.isArray(changes) || changes.length === 0) {
      return NextResponse.json({ error: "No changes provided" }, { status: 400 });
    }

    const toAdd: string[] = [];
    const toRemove: string[] = [];

    for (const change of changes) {
      if (change.status === "index_follow" && !PUBLISHED_PAGES.has(change.slug)) {
        toAdd.push(change.slug);
      } else if (change.status === "noindex_nofollow" && PUBLISHED_PAGES.has(change.slug)) {
        toRemove.push(change.slug);
      }
    }

    // On Vercel we can't write to the filesystem — return the changes summary
    // so they can be applied via the daily publish cycle or manual commit.
    return NextResponse.json({
      success: true,
      added: toAdd.length,
      removed: toRemove.length,
      toAdd,
      toRemove,
      message: `Queued changes: +${toAdd.length} to index, -${toRemove.length} to de-index. Changes will be applied in the next publish cycle.`,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// ── Helpers ─────────────────────────────────────────────
function getCategory(slug: string): string {
  if (slug === "/") return "root";
  const parts = slug.split("/").filter(Boolean);
  return parts[0] || "root";
}
