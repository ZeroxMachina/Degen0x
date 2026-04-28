#!/usr/bin/env node
/**
 * generate-page-manifest.mjs
 * ──────────────────────────────────────────────────────────
 * Runs at build time to create a JSON manifest of all page slugs.
 * The admin API reads this manifest instead of scanning the filesystem at runtime.
 *
 * Usage: node scripts/generate-page-manifest.mjs
 * Output: src/data/page-manifest.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "src/app");
const OUTPUT = path.join(ROOT, "src/data/page-manifest.json");

// ── Walk the app directory to find all page.tsx files ──────
function findAllPageSlugs(dir, prefix = "") {
  const slugs = [];
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return slugs;
  }

  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name.startsWith("_next")) continue;

    if (entry.isDirectory()) {
      // Skip API routes and dynamic route segments
      if (entry.name === "api") continue;
      if (entry.name.startsWith("[")) continue;

      // Route groups (parenthesized) — pass through without adding to prefix
      if (entry.name.startsWith("(")) {
        slugs.push(...findAllPageSlugs(path.join(dir, entry.name), prefix));
        continue;
      }

      slugs.push(...findAllPageSlugs(path.join(dir, entry.name), `${prefix}/${entry.name}`));
    } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
      const slug = prefix || "/";
      slugs.push(slug);
    }
  }

  return slugs;
}

// ── Derive category from slug ──────────────────────────────
function getCategory(slug) {
  if (slug === "/") return "root";
  const parts = slug.split("/").filter(Boolean);
  return parts[0] || "root";
}

// ── Main ───────────────────────────────────────────────────
const slugs = findAllPageSlugs(APP_DIR);

const manifest = slugs.map((slug) => ({
  slug,
  category: getCategory(slug),
}));

// Sort by category then slug
manifest.sort((a, b) => a.category.localeCompare(b.category) || a.slug.localeCompare(b.slug));

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2), "utf-8");

console.log(`✅ Page manifest generated: ${manifest.length} pages → src/data/page-manifest.json`);
