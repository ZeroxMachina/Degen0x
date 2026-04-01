import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// ── Constants ───────────────────────────────────────────
const ADMIN_PASSWORD = "degen0x-admin-2026";
const PUBLISHED_PAGES_PATH = path.join(process.cwd(), "src/lib/published-pages.ts");
const APP_DIR = path.join(process.cwd(), "src/app");

// ── Types ───────────────────────────────────────────────
interface PageEntry {
  slug: string;
  category: string;
  status: "index_follow" | "noindex_nofollow";
  inQueue: boolean;
  hasPageFile: boolean;
}

// ── Helpers ─────────────────────────────────────────────

/**
 * Parse the published-pages.ts file to extract PUBLISHED_PAGES and PUBLISH_QUEUE slugs.
 */
function parsePublishedPages(): { published: Set<string>; queued: Set<string> } {
  const content = fs.readFileSync(PUBLISHED_PAGES_PATH, "utf-8");

  // Extract PUBLISHED_PAGES set entries
  const publishedMatch = content.match(/PUBLISHED_PAGES:\s*ReadonlySet<string>\s*=\s*new\s+Set\(\[([\s\S]*?)\]\)/);
  const published = new Set<string>();
  if (publishedMatch) {
    const entries = publishedMatch[1].matchAll(/"([^"]+)"/g);
    for (const m of entries) published.add(m[1]);
  }

  // Extract PUBLISH_QUEUE array entries
  const queueMatch = content.match(/PUBLISH_QUEUE:\s*readonly\s+string\[\]\s*=\s*\[([\s\S]*?)\]/);
  const queued = new Set<string>();
  if (queueMatch) {
    const entries = queueMatch[1].matchAll(/"([^"]+)"/g);
    for (const m of entries) queued.add(m[1]);
  }

  return { published, queued };
}

/**
 * Recursively find all page.tsx files under src/app and derive their slugs.
 */
function findAllPageSlugs(): Map<string, boolean> {
  const slugs = new Map<string, boolean>(); // slug -> hasPageFile

  function walk(dir: string, prefix: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.name.startsWith(".") || entry.name.startsWith("_next")) continue;

      if (entry.isDirectory()) {
        // Skip API routes, internal dirs, locale dirs (2-char)
        if (entry.name === "api" || entry.name.startsWith("(")) {
          walk(path.join(dir, entry.name), prefix);
          continue;
        }
        // Skip dynamic route segments for category scanning
        if (entry.name.startsWith("[")) continue;

        walk(path.join(dir, entry.name), `${prefix}/${entry.name}`);
      } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
        const slug = prefix || "/";
        slugs.set(slug, true);
      }
    }
  }

  walk(APP_DIR, "");
  return slugs;
}

/**
 * Derive category from a slug (first path segment).
 */
function getCategory(slug: string): string {
  if (slug === "/") return "root";
  const parts = slug.split("/").filter(Boolean);
  return parts[0] || "root";
}

// ── GET: List all pages ─────────────────────────────────
export async function GET() {
  try {
    const { published, queued } = parsePublishedPages();
    const pageSlugs = findAllPageSlugs();

    // Combine all known slugs (from files + published list + queue)
    const allSlugs = new Set<string>([...pageSlugs.keys(), ...published, ...queued]);

    const pages: PageEntry[] = [];
    for (const slug of allSlugs) {
      pages.push({
        slug,
        category: getCategory(slug),
        status: published.has(slug) ? "index_follow" : "noindex_nofollow",
        inQueue: queued.has(slug),
        hasPageFile: pageSlugs.has(slug),
      });
    }

    // Sort by category then slug
    pages.sort((a, b) => a.category.localeCompare(b.category) || a.slug.localeCompare(b.slug));

    return NextResponse.json({
      pages,
      stats: {
        total: pages.length,
        indexed: pages.filter(p => p.status === "index_follow").length,
        noindex: pages.filter(p => p.status === "noindex_nofollow").length,
        inQueue: pages.filter(p => p.inQueue).length,
        withFile: pages.filter(p => p.hasPageFile).length,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ── POST: Update page indexing status ───────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { changes, password } = body as {
      changes: { slug: string; status: "index_follow" | "noindex_nofollow" }[];
      password: string;
    };

    // Auth check
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!changes || !Array.isArray(changes) || changes.length === 0) {
      return NextResponse.json({ error: "No changes provided" }, { status: 400 });
    }

    // Read current file
    let content = fs.readFileSync(PUBLISHED_PAGES_PATH, "utf-8");

    // Parse current published pages
    const { published } = parsePublishedPages();

    // Apply changes
    const toAdd: string[] = [];
    const toRemove: string[] = [];

    for (const change of changes) {
      if (change.status === "index_follow" && !published.has(change.slug)) {
        toAdd.push(change.slug);
      } else if (change.status === "noindex_nofollow" && published.has(change.slug)) {
        toRemove.push(change.slug);
      }
    }

    // Remove slugs from PUBLISHED_PAGES
    for (const slug of toRemove) {
      // Remove the line containing this slug (with possible trailing comma and whitespace)
      const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\s*"${escaped}",?\\n?`, "g");
      content = content.replace(regex, "\n");
    }

    // Add slugs to PUBLISHED_PAGES (before the closing ]);)
    if (toAdd.length > 0) {
      const insertLines = toAdd.map(slug => `  "${slug}",`).join("\n");
      // Find the closing of the PUBLISHED_PAGES Set
      content = content.replace(
        /(\n)(]\);[\s\S]*?export const PUBLISH_QUEUE)/,
        `\n\n  // ── Admin Panel Additions (${new Date().toISOString().split("T")[0]}) ──\n${insertLines}\n$1$2`
      );
    }

    // Also remove slugs from PUBLISH_QUEUE if they were promoted to published
    for (const slug of toAdd) {
      const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const queueRegex = new RegExp(`\\s*"${escaped}",?\\n?`, "g");
      // Only replace within the PUBLISH_QUEUE section
      const queueStart = content.indexOf("PUBLISH_QUEUE");
      if (queueStart !== -1) {
        const before = content.slice(0, queueStart);
        let after = content.slice(queueStart);
        after = after.replace(queueRegex, "\n");
        content = before + after;
      }
    }

    // Clean up any double blank lines
    content = content.replace(/\n{3,}/g, "\n\n");

    // Write back
    fs.writeFileSync(PUBLISHED_PAGES_PATH, content, "utf-8");

    return NextResponse.json({
      success: true,
      added: toAdd.length,
      removed: toRemove.length,
      message: `Updated published-pages.ts: +${toAdd.length} indexed, -${toRemove.length} de-indexed. Commit & deploy to apply.`,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
