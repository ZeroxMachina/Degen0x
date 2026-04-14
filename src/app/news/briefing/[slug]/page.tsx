import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

// ── Types ──────────────────────────────────────────────────
interface BriefingStory {
  id: string;
  headline: string;
  slug: string;
  tldr: string;
  why_it_matters: string;
  the_details: string[];
  source: string;
  source_url: string;
  category: string;
  impact: "high" | "medium" | "low";
  timestamp: string;
}

interface Briefing {
  generated_at: string;
  briefing_id: string;
  story_count: number;
  stories: BriefingStory[];
}

// Read the briefing JSON from disk at request time. Using a static `import`
// snapshots the file at build time, which is why stories stopped updating
// between hourly cron runs without a redeploy.
const BRIEFING_PATH = path.join(process.cwd(), "src", "data", "news-briefing.json");

async function loadBriefing(): Promise<Briefing> {
  const raw = await fs.readFile(BRIEFING_PATH, "utf8");
  return JSON.parse(raw) as Briefing;
}

const CATEGORY_COLORS: Record<string, string> = {
  regulation: "#ef4444",
  defi: "#8b5cf6",
  bitcoin: "#f7931a",
  ethereum: "#818cf8",
  altcoins: "#06b6d4",
  nfts: "#d946ef",
  infrastructure: "#22c55e",
  markets: "#f59e0b",
  security: "#f85149",
  adoption: "#10b981",
};

const IMPACT_STYLES: Record<BriefingStory["impact"], { bg: string; fg: string; label: string }> = {
  high:   { bg: "#f8514920", fg: "#f85149", label: "HIGH IMPACT" },
  medium: { bg: "#f59e0b20", fg: "#f59e0b", label: "MED IMPACT"  },
  low:    { bg: "#6366f120", fg: "#818cf8", label: "LOW IMPACT"  },
};

function categoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] ?? "#8e8e93";
}

function formatDateTime(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return iso;
  }
}

interface Props {
  params: Promise<{ slug: string }>;
}

// ── Static params (regenerated on each deploy) ─────────────
export async function generateStaticParams() {
  const briefing = await loadBriefing();
  return briefing.stories.map((s) => ({ slug: s.slug }));
}

// New slugs that appear in the JSON after deploy should still render via ISR.
export const dynamicParams = true;

// ── SEO metadata ───────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const briefing = await loadBriefing();
  const story = briefing.stories.find((s) => s.slug === slug);
  if (!story) return { title: "Not Found" };

  const title = `${story.headline} | ${SITE_NAME}`;
  const description = story.tldr;
  const url = `${SITE_URL}/news/briefing/${story.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: story.headline,
      description,
      type: "article",
      url,
      publishedTime: story.timestamp,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: story.headline,
      description,
    },
  };
}

// ── Page ───────────────────────────────────────────────────
export default async function BriefingStoryPage({ params }: Props) {
  const { slug } = await params;
  const briefing = await loadBriefing();
  const story = briefing.stories.find((s) => s.slug === slug);
  if (!story) notFound();

  const others = briefing.stories.filter((s) => s.slug !== story.slug).slice(0, 4);
  const cat = categoryColor(story.category);
  const impact = IMPACT_STYLES[story.impact];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: story.headline,
    description: story.tldr,
    datePublished: story.timestamp,
    dateModified: briefing.generated_at,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/news/briefing/${story.slug}`,
    },
    isBasedOn: story.source_url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "News", href: "/news" },
            { label: "Briefing", href: "/news" },
            { label: story.headline },
          ]}
        />

        {/* Meta row */}
        <div className="flex items-center gap-2 mt-4 mb-4 flex-wrap">
          <span
            className="text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded"
            style={{ color: cat, background: `${cat}18`, border: `1px solid ${cat}40` }}
          >
            {story.category}
          </span>
          <span
            className="text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded"
            style={{ color: impact.fg, background: impact.bg }}
          >
            {impact.label}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#636366]">
            {formatDateTime(story.timestamp)}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
          {story.headline}
        </h1>

        {/* TL;DR */}
        <section className="mt-6 p-5 rounded-2xl bg-[#0f1013] border border-[#1c1c1e]">
          <div className="text-[10px] font-black tracking-widest uppercase text-[#f59e0b] mb-2">
            TL;DR
          </div>
          <p className="text-lg text-white leading-relaxed">{story.tldr}</p>
        </section>

        {/* Why it matters */}
        <section className="mt-6">
          <h2 className="text-[11px] font-black tracking-widest uppercase text-[#818cf8] mb-2">
            Why it matters
          </h2>
          <p className="text-[#adadad] leading-relaxed">{story.why_it_matters}</p>
        </section>

        {/* The details */}
        {story.the_details?.length > 0 && (
          <section className="mt-8">
            <h2 className="text-[11px] font-black tracking-widest uppercase text-[#22c55e] mb-3">
              The details
            </h2>
            <ul className="space-y-3">
              {story.the_details.map((d, i) => (
                <li key={i} className="flex gap-3 text-[#d4d4d4] leading-relaxed">
                  <span className="text-[#636366] shrink-0">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Source attribution */}
        <section className="mt-10 p-5 rounded-2xl bg-[#0f1013] border border-[#1c1c1e]">
          <div className="text-[10px] font-black tracking-widest uppercase text-[#8e8e93] mb-2">
            Primary source
          </div>
          <a
            href={story.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#f59e0b] font-semibold hover:underline"
          >
            Read the original report on {story.source} ↗
          </a>
          <p className="text-xs text-[#636366] mt-3">
            degen0x summarizes, contextualizes, and curates. All credit to the reporting
            outlet. This briefing was generated {formatDateTime(briefing.generated_at)}.
          </p>
        </section>

        {/* Related stories */}
        {others.length > 0 && (
          <section className="mt-12 pt-8 border-t border-[#1c1c1e]">
            <h2 className="text-lg font-bold text-white mb-4">More in this briefing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/news/briefing/${s.slug}`}
                  className="p-4 rounded-xl bg-[#0f1013] border border-[#1c1c1e] hover:border-[#6366f1]/50 transition-all"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#636366] mb-1">
                    {s.category} · {s.source}
                  </div>
                  <div className="text-sm font-bold text-white leading-snug">{s.headline}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="text-sm text-[#6366f1] hover:underline font-semibold"
          >
            ← Back to all news
          </Link>
        </div>
      </div>
    </>
  );
}

// ISR: regenerate these pages at most once a minute so fresh hourly briefings
// propagate quickly without rebuilding the whole site. Actual data reads
// happen from disk in `loadBriefing`.
export const revalidate = 60;
