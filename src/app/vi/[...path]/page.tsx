import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import I18nPageRenderer, { type I18nPageData } from "@/components/I18nPageRenderer";

export const dynamic = "force-dynamic";

const LOCALE = "vi";
const LOCALE_PATH = "/vi";
const DATA_DIR = path.join(process.cwd(), "data", "i18n", LOCALE);

function loadPageData(segments: string[]): I18nPageData | null {
  const jsonPath = path.join(DATA_DIR, ...segments.slice(0, -1), `${segments[segments.length - 1]}.json`);
  try {
    const raw = fs.readFileSync(jsonPath, "utf-8");
    return JSON.parse(raw) as I18nPageData;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ path: string[] }> }): Promise<Metadata> {
  const { path: segments } = await params;
  const data = loadPageData(segments);
  if (!data) return {};

  const url = `${LOCALE_PATH}/${segments.join("/")}`;
  const enPath = `/${segments.join("/")}`;
  return {
    title: `${data.title} | Degen0x`,
    description: data.desc,
    openGraph: {
      type: "article",
      title: data.title,
      description: data.desc,
      url: `https://degen0x.com${url}`,
      locale: data.ogLocale,
      images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.desc,
    },
    alternates: {
      canonical: url,
      languages: {
        en: enPath,
        tr: `/tr${enPath}`,
        vi: `/vi${enPath}`,
        "pt-BR": `/pt-br${enPath}`,
        "x-default": enPath,
      },
    },
  };
}

export default async function CatchAllI18nPage({ params }: { params: Promise<{ path: string[] }> }) {
  const { path: segments } = await params;
  const data = loadPageData(segments);
  if (!data) notFound();
  return <I18nPageRenderer data={data} />;
}
