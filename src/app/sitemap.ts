import type { MetadataRoute } from "next";
import { PUBLISHED_PAGES } from "@/lib/published-pages";
import fs from "fs";
import path from "path";

function collectI18nPaths(): string[] {
  const appDir = path.join(process.cwd(), "src", "app");
  const locales = ["tr", "vi", "pt-br"];
  const paths: string[] = [];

  for (const locale of locales) {
    const localeDir = path.join(appDir, locale);
    if (!fs.existsSync(localeDir)) continue;

    function walk(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory() && !entry.name.startsWith("[")) {
          walk(path.join(dir, entry.name));
        } else if (entry.name === "page.tsx") {
          const rel = dir.slice(appDir.length).replace(/\\/g, "/");
          paths.push(rel);
        }
      }
    }
    walk(localeDir);
  }
  return paths;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://degen0x.com";
  const now = new Date();
  const staticDate = new Date("2026-04-21");

  // English pages from PUBLISHED_PAGES
  const entries: MetadataRoute.Sitemap = Array.from(PUBLISHED_PAGES).map(
    (p) => ({
      url: `${baseUrl}${p}`,
      lastModified: p === "/" ? now : staticDate,
      changeFrequency: (p === "/" ? "daily" : "weekly") as "daily" | "weekly",
      priority: p === "/" ? 1.0 : p.split("/").length <= 2 ? 0.8 : 0.6,
    })
  );

  // i18n pages from filesystem
  for (const p of collectI18nPaths()) {
    const depth = p.split("/").filter(Boolean).length;
    entries.push({
      url: `${baseUrl}${p}`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: depth <= 2 ? 0.7 : 0.5,
    });
  }

  return entries;
}
