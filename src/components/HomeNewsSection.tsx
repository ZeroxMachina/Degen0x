"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import briefingData from "@/data/news-briefing.json";

// ── Props ──────────────────────────────────────────────────
// A server component can pass a freshly-read briefing as `initialBriefing`
// to avoid the stale-flash on first paint. Falls back to the bundled JSON
// (updated only on deploy) if no prop is supplied.
interface HomeNewsSectionProps {
  initialBriefing?: NewsBriefing;
}

// ── Types ──────────────────────────────────────────────────
interface NewsStory {
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

interface NewsBriefing {
  generated_at: string;
  briefing_id: string;
  story_count: number;
  stories: NewsStory[];
}

// ── Constants ──────────────────────────────────────────────
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

const IMPACT_STYLES: Record<NewsStory["impact"], { bg: string; fg: string; label: string }> = {
  high:   { bg: "#f8514920", fg: "#f85149", label: "HIGH IMPACT" },
  medium: { bg: "#f59e0b20", fg: "#f59e0b", label: "MED IMPACT"  },
  low:    { bg: "#6366f120", fg: "#818cf8", label: "LOW IMPACT"  },
};

// Client-side refresh cadence: re-check the API every 5 minutes.
const REFRESH_MS = 5 * 60 * 1000;

// ── Helpers ────────────────────────────────────────────────
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

function formatGenerated(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }) +
      " · " +
      d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

function categoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] ?? "#8e8e93";
}

// ── Component ──────────────────────────────────────────────
export default function HomeNewsSection({ initialBriefing }: HomeNewsSectionProps = {}) {
  const initial = initialBriefing ?? (briefingData as unknown as NewsBriefing);
  const [briefing, setBriefing] = useState<NewsBriefing>(initial);
  const [isLive, setIsLive] = useState<boolean>(Boolean(initialBriefing));

  // Try to pull a fresher briefing from the API on mount + every 5 min.
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch("/api/news-briefing", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as NewsBriefing;
        if (!cancelled && json?.stories?.length) {
          setBriefing(json);
          setIsLive(true);
        }
      } catch {
        // Silently fall back to the imported JSON — still good data.
      }
    };

    load();
    const id = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const top = briefing.stories[0];
  const rest = useMemo(() => briefing.stories.slice(1, 5), [briefing.stories]);

  if (!top) return null;

  return (
    <div
      id="news"
      style={{ scrollMarginTop: "112px" }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#1c1c1e]"
    >
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black tracking-widest uppercase text-[#f59e0b]">📰 News</span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-[#8e8e93]">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: isLive ? "#22c55e" : "#6366f1",
                  boxShadow: isLive ? "0 0 8px #22c55e" : "none",
                }}
              />
              Live · Updated {formatGenerated(briefing.generated_at)}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hourly alpha. Zero fluff.
          </h2>
          <p className="text-[#8e8e93] mt-2 max-w-lg">
            The {briefing.story_count} stories moving the market right now, distilled and updated every hour.
          </p>
        </div>
        <Link
          href="/news"
          className="text-[#6366f1] font-semibold text-sm hover:underline whitespace-nowrap"
        >
          All news →
        </Link>
      </div>

      {/* Layout: 1 hero + 4 stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Hero (top story) */}
        <Link
          href={`/news/briefing/${top.slug}`}
          className="lg:col-span-3 group relative overflow-hidden rounded-2xl bg-[#0f1013] border border-[#1c1c1e] p-6 sm:p-8 hover:border-[#f59e0b]/60 transition-all flex flex-col"
        >
          {/* Top meta */}
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
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-[#f59e0b] transition-colors">
            {top.headline}
          </h3>

          <p className="text-[#adadad] mt-3 text-base leading-relaxed">{top.tldr}</p>

          <p className="text-[#8e8e93] mt-3 text-sm leading-relaxed italic">
            {top.why_it_matters}
          </p>

          {top.the_details?.length > 0 && (
            <ul className="mt-4 space-y-1.5">
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
        </Link>

        {/* Stacked: 4 shorter stories */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {rest.map((s) => (
            <Link
              key={s.id}
              href={`/news/briefing/${s.slug}`}
              className="group relative rounded-2xl bg-[#0f1013] border border-[#1c1c1e] p-4 hover:border-[#6366f1]/50 transition-all flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded"
                  style={{
                    color: categoryColor(s.category),
                    background: `${categoryColor(s.category)}18`,
                  }}
                >
                  {s.category}
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-[#636366]">
                  {s.source} · {timeAgo(s.timestamp)}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-[#818cf8] transition-colors">
                {s.headline}
              </h4>
              <p className="text-xs text-[#8e8e93] mt-1.5 line-clamp-2 leading-relaxed">
                {s.tldr}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer strip — categories */}
      <div className="flex flex-wrap gap-2 mt-6">
        {Array.from(new Set(briefing.stories.map((s) => s.category))).map((cat) => (
          <Link
            key={cat}
            href={`/news#${cat}`}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white transition-all capitalize"
            style={{ borderColor: `${categoryColor(cat)}30` }}
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}
