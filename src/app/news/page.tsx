import type { Metadata } from "next";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

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

// Read the briefing JSON from disk at request time so the hourly cron push
// surfaces here without a redeploy. Pairs with `revalidate = 60` below.
const BRIEFING_PATH = path.join(process.cwd(), "src", "data", "news-briefing.json");

async function loadBriefing(): Promise<Briefing | null> {
  try {
    const raw = await fs.readFile(BRIEFING_PATH, "utf8");
    return JSON.parse(raw) as Briefing;
  } catch {
    return null;
  }
}

// ── Styling lookups ────────────────────────────────────────
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

function formatGenerated(iso: string): string {
  try {
    const d = new Date(iso);
    return (
      d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }) +
      " UTC · " +
      d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    );
  } catch {
    return iso;
  }
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// ── SEO ────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Crypto News — Hourly Briefing | ${SITE_NAME}`,
  description: `Hourly smart-brevity crypto briefing — the ${""}stories moving Bitcoin, Ethereum, DeFi, and regulation right now. Curated by the ${SITE_NAME} desk.`,
  keywords: "crypto news, bitcoin news, ethereum news, DeFi news, blockchain updates, web3 news, regulatory updates, market analysis, hourly crypto briefing",
  alternates: { canonical: "https://degen0x.com/news" },
  openGraph: {
    title: `Crypto News — Hourly Briefing | ${SITE_NAME}`,
    description: "Hourly smart-brevity briefing on the top crypto stories. Updated every hour.",
    url: "https://degen0x.com/news",
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Crypto News — Hourly Briefing | ${SITE_NAME}`,
    description: "Hourly smart-brevity briefing on the top crypto stories. Updated every hour.",
  },
};

// Rebuild the page from disk at most once a minute so each hourly briefing
// push lands without a full redeploy.
export const revalidate = 60;

// ── Page ───────────────────────────────────────────────────
export default async function NewsPage() {
  const briefing = await loadBriefing();
  const stories = briefing?.stories ?? [];
  const top = stories[0];
  const secondary = stories.slice(1, 3);
  const rest = stories.slice(3);
  const categories = Array.from(new Set(stories.map((s) => s.category)));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Crypto News`,
    description: `Hourly crypto news briefing from ${SITE_NAME}`,
    url: "https://degen0x.com/news",
    publisher: { "@type": "Organization", name: SITE_NAME },
    ...(briefing && { dateModified: briefing.generated_at }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Crypto News", href: "/news" },
          ]}
        />

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-black tracking-widest uppercase text-[#f59e0b]">📰 Hourly Briefing</span>
            {briefing && (
              <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-[#8e8e93]">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}
                />
                Updated {formatGenerated(briefing.generated_at)}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">Crypto News</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Smart-brevity crypto briefing. {briefing?.story_count ?? 0} stories moving Bitcoin,
            Ethereum, DeFi, and regulation right now — distilled and refreshed every hour.
          </p>
        </div>

        {/* Category chips — anchored to in-page sections */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/news"
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary)] text-[var(--color-text)]"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                href={`/news#${cat}`}
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors capitalize"
                style={{ borderColor: `${categoryColor(cat)}40` }}
              >
                {cat}
              </Link>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!top && (
          <div className="rounded-2xl border border-[#1c1c1e] bg-[#0f1013] p-10 text-center">
            <p className="text-[#8e8e93]">
              No briefing available right now. The next hourly update will appear here.
            </p>
          </div>
        )}

        {/* Hero (top story) */}
        {top && (
          <section className="mb-10" id={top.category}>
            <Link
              href={`/news/briefing/${top.slug}`}
              className="block rounded-2xl overflow-hidden bg-[#0f1013] border border-[#1c1c1e] hover:border-[#f59e0b]/60 transition-all group"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span
                    className="text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded"
                    style={{
                      color: categoryColor(top.category),
                      background: `${categoryColor(top.category)}18`,
                      border: `1px solid ${categoryColor(top.category)}40`,
                    }}
                  >
                    {top.category}
                  </span>
                  <span
                    className="text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded"
                    style={{
                      color: IMPACT_STYLES[top.impact].fg,
                      background: IMPACT_STYLES[top.impact].bg,
                    }}
                  >
                    {IMPACT_STYLES[top.impact].label}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#636366]">
                    {top.source} · {timeAgo(top.timestamp)}
                  </span>
                  <span className="text-xs text-[var(--color-text-secondary)] glass-pill px-3 py-1 rounded-full ml-auto">
                    ⭐ Top story
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight group-hover:text-[#f59e0b] transition-colors">
                  {top.headline}
                </h2>
                <p className="text-[#adadad] mt-4 text-lg leading-relaxed">{top.tldr}</p>
                <p className="text-[#8e8e93] mt-3 text-sm leading-relaxed italic">
                  {top.why_it_matters}
                </p>
                {top.the_details?.length > 0 && (
                  <ul className="mt-5 space-y-1.5">
                    {top.the_details.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex gap-2 text-sm text-[#adadad]">
                        <span className="text-[#636366]">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6 flex items-center gap-2 text-[#f59e0b] text-sm font-semibold">
                  Read full briefing
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Secondary featured */}
        {secondary.length > 0 && (
          <section className="grid md:grid-cols-2 gap-6 mb-12">
            {secondary.map((s) => (
              <Link
                href={`/news/briefing/${s.slug}`}
                key={s.id}
                id={s.category}
                className="block rounded-xl bg-[#0f1013] border border-[#1c1c1e] p-6 hover:border-[#6366f1]/60 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span
                    className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded"
                    style={{
                      color: categoryColor(s.category),
                      background: `${categoryColor(s.category)}18`,
                    }}
                  >
                    {s.category}
                  </span>
                  <span
                    className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded"
                    style={{
                      color: IMPACT_STYLES[s.impact].fg,
                      background: IMPACT_STYLES[s.impact].bg,
                    }}
                  >
                    {IMPACT_STYLES[s.impact].label}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#818cf8] transition-colors leading-snug">
                  {s.headline}
                </h3>
                <p className="text-sm text-[#adadad] mb-4 leading-relaxed line-clamp-3">
                  {s.tldr}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#636366] uppercase tracking-wider font-semibold">
                  <span>{s.source}</span>
                  <span>•</span>
                  <span>{timeAgo(s.timestamp)}</span>
                </div>
              </Link>
            ))}
          </section>
        )}

        {/* All News + Sidebar */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-[var(--color-primary)] inline-block" />
              More in this briefing
            </h2>
            {rest.length === 0 ? (
              <p className="text-sm text-[#8e8e93]">
                That's the full briefing. Check back next hour for the next drop.
              </p>
            ) : (
              <div className="space-y-4">
                {rest.map((s) => (
                  <Link
                    key={s.id}
                    href={`/news/briefing/${s.slug}`}
                    id={s.category}
                    className="block rounded-xl bg-[#0f1013] border border-[#1c1c1e] p-5 hover:border-[#6366f1]/50 transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{
                          color: categoryColor(s.category),
                          background: `${categoryColor(s.category)}18`,
                        }}
                      >
                        {s.category}
                      </span>
                      <span
                        className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{
                          color: IMPACT_STYLES[s.impact].fg,
                          background: IMPACT_STYLES[s.impact].bg,
                        }}
                      >
                        {IMPACT_STYLES[s.impact].label}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#636366]">
                        {s.source} · {timeAgo(s.timestamp)}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#818cf8] transition-colors">
                      {s.headline}
                    </h3>
                    <p className="text-sm text-[#8e8e93] mt-2 leading-relaxed line-clamp-2">
                      {s.tldr}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Browse by category */}
            {categories.length > 0 && (
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">In this briefing</h3>
                <div className="space-y-2">
                  {categories.map((cat) => {
                    const count = stories.filter((s) => s.category === cat).length;
                    return (
                      <Link
                        href={`/news#${cat}`}
                        key={cat}
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[var(--glass-bg)] transition-colors group capitalize"
                      >
                        <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                          {cat}
                        </span>
                        <span
                          className="text-xs glass-pill px-2 py-0.5 rounded-full"
                          style={{ color: categoryColor(cat) }}
                        >
                          {count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Newsletter CTA */}
            <div
              className="rounded-xl p-6 border border-[var(--color-primary)] border-opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, var(--glass-bg) 0%, rgba(99,102,241,0.05) 100%)",
              }}
            >
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">📬 Daily Crypto Brief</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                Get the top crypto stories delivered to your inbox every morning. No spam, ever.
              </p>
              <Link
                href="/news"
                className="affiliate-cta block text-center py-2.5 px-4 rounded-lg text-white text-sm font-semibold"
              >
                Subscribe Free →
              </Link>
            </div>

            {/* Editorial Note */}
            <div className="rounded-xl border border-[var(--color-border)] p-5">
              <h3 className="text-sm font-bold text-[var(--color-text)] mb-2">📋 Editorial Standards</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                The {SITE_NAME} briefing is curated and summarized by our editorial desk
                every hour. Primary sources are linked on each story page. We don't accept
                payment for coverage.
              </p>
            </div>

            {briefing && (
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#636366]">
                Briefing ID: {briefing.briefing_id}
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
