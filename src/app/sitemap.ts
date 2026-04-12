import type { MetadataRoute } from "next";
import { PUBLISHED_PAGES } from "@/lib/published-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://degen0x.com";
  const staticLastModDate = new Date("2026-04-12");

  return Array.from(PUBLISHED_PAGES).map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: path === "/" ? new Date() : staticLastModDate,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1.0 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
