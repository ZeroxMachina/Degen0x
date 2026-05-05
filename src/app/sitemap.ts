import type { MetadataRoute } from "next";
import { PUBLISHED_PAGES } from "@/lib/published-pages";
import fs from "fs";
import path from "path";

const BASE_URL = "https://degen0x.com";
const I18N_LOCALES = ["pt-br", "tr", "vi"] as const;

// Map our internal locale folder name to the proper hreflang code
// (BCP 47 / ISO 639-1, with ISO 3166-1 region where relevant).
const HREFLANG: Record<(typeof I18N_LOCALES)[number], string> = {
  "pt-br": "pt-BR",
  "tr": "tr",
  "vi": "vi",
};

/**
 * For each i18n locale, return a Set of *English path strings* (e.g. "/learn/aave-v4-guide")
 * for which a translated JSON exists at data/i18n/<locale>/<path>.json.
 *
 * This lets us:
 *   - emit standalone sitemap entries for the localized URLs
 *   - attach hreflang alternates linking each English entry to its translations
 *   - attach hreflang alternates on each translated entry pointing back to the English original + sibling locales
 */
function collectI18nPathsByLocale(): Record<string, Set<string>> {
  const result: Record<string, Set<string>> = {};
  const root = path.join(process.cwd(), "data", "i18n");

  for (const locale of I18N_LOCALES) {
    const localeDir = path.join(root, locale);
    const set = new Set<string>();
    if (!fs.existsSync(localeDir)) {
      result[locale] = set;
      continue;
    }
    function walk(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(full);
        } else if (entry.name.endsWith(".json")) {
          // Convert data/i18n/<locale>/exchanges/binance.json → /exchanges/binance
          const enPath = full
            .slice(localeDir.length)
            .replace(/\\/g, "/")
            .replace(/\.json$/, "");
          set.add(enPath);
        }
      }
    }
    walk(localeDir);
    result[locale] = set;
  }
  return result;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticDate = new Date("2026-04-21");
  const i18nByLocale = collectI18nPathsByLocale();

  const entries: MetadataRoute.Sitemap = [];

  // ── English pages ──────────────────────────────────────────────────────────
  // Attach hreflang alternates pointing to whichever locales have a translation
  // of the same path. Always include x-default pointing to the English URL so
  // Google has a fallback for users whose language doesn't match any alternate.
  for (const enPath of PUBLISHED_PAGES) {
    const languages: Record<string, string> = {};
    let hasAnyTranslation = false;
    for (const locale of I18N_LOCALES) {
      if (i18nByLocale[locale]?.has(enPath)) {
        languages[HREFLANG[locale]] = `${BASE_URL}/${locale}${enPath}`;
        hasAnyTranslation = true;
      }
    }

    const entry: MetadataRoute.Sitemap[number] = {
      url: `${BASE_URL}${enPath}`,
      lastModified: enPath === "/" ? now : staticDate,
      changeFrequency: enPath === "/" ? "daily" : "weekly",
      priority:
        enPath === "/" ? 1.0 : enPath.split("/").length <= 2 ? 0.8 : 0.6,
    };

    if (hasAnyTranslation) {
      // Bidirectional hreflang requires self-reference + x-default
      languages["en"] = `${BASE_URL}${enPath}`;
      languages["x-default"] = `${BASE_URL}${enPath}`;
      entry.alternates = { languages };
    }

    entries.push(entry);
  }

  // ── i18n pages (one entry per translated JSON) ─────────────────────────────
  // Attach hreflang alternates pointing back to the English original and to
  // any sibling locales that also have a translation of the same path.
  for (const locale of I18N_LOCALES) {
    const set = i18nByLocale[locale];
    if (!set) continue;
    for (const enPath of set) {
      const languages: Record<string, string> = {
        "en": `${BASE_URL}${enPath}`,
        "x-default": `${BASE_URL}${enPath}`,
        [HREFLANG[locale]]: `${BASE_URL}/${locale}${enPath}`,
      };
      // Add sibling locale translations
      for (const otherLocale of I18N_LOCALES) {
        if (otherLocale === locale) continue;
        if (i18nByLocale[otherLocale]?.has(enPath)) {
          languages[HREFLANG[otherLocale]] =
            `${BASE_URL}/${otherLocale}${enPath}`;
        }
      }

      const localizedPath = `/${locale}${enPath}`;
      const depth = localizedPath.split("/").filter(Boolean).length;
      entries.push({
        url: `${BASE_URL}${localizedPath}`,
        lastModified: staticDate,
        changeFrequency: "monthly",
        priority: depth <= 2 ? 0.7 : 0.5,
        alternates: { languages },
      });
    }
  }

  return entries;
}
