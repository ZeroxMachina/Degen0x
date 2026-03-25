"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import {
  DAPPS,
  CHAINS_META,
  CATEGORIES_META,
  ECOSYSTEMS_META,
  DAPP_LOGO_URLS,
  DAPP_LEVEL_MAP,
  getDAppsByEcosystem,
  type DApp,
  type Chain,
  type Category,
  type EcosystemKey,
} from "@/data/dapps";

type SortKey = "rating" | "tvl" | "users" | "newest";
type UserLevel = "all" | "newbie" | "intermediate" | "degen";

/* ─── LOGO ──────────────────────────────────────────────────────────────────── */
function DAppLogo({ dapp, size = 52 }: { dapp: DApp; size?: number }) {
  const [err, setErr] = useState(false);
  const logoUrl = DAPP_LOGO_URLS[dapp.slug];
  if (logoUrl && !err) {
    return (
      <div
        className="rounded-2xl overflow-hidden border border-[#2c2c2e] flex-shrink-0"
        style={{ width: size, height: size, background: dapp.color + "15" }}
      >
        <img
          src={logoUrl}
          alt={`${dapp.name} logo`}
          width={size}
          height={size}
          className="w-full h-full object-contain p-1.5"
          onError={() => setErr(true)}
        />
      </div>
    );
  }
  return (
    <div
      className="rounded-2xl border flex-shrink-0 flex items-center justify-center"
      style={{ width: size, height: size, background: dapp.color + "20", borderColor: dapp.color + "50", fontSize: size * 0.48 }}
    >
      {dapp.logo}
    </div>
  );
}

/* ─── STAR RATING ───────────────────────────────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-xs ${i <= Math.round(rating) ? "text-[#f59e0b]" : "text-[#3c3c3e]"}`}>★</span>
      ))}
      <span className="text-xs text-[#8e8e93] ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

/* ─── DAPP CARD ─────────────────────────────────────────────────────────────── */
function DAppCard({ dapp, compact = false }: { dapp: DApp; compact?: boolean }) {
  const levelLabel = DAPP_LEVEL_MAP[dapp.slug];
  const levelColors: Record<string, string> = { newbie: "#22c55e", intermediate: "#f59e0b", degen: "#f85149" };

  if (compact) {
    return (
      <Link
        href={`/ecosystem/${dapp.slug}`}
        className="group flex items-center gap-3 p-3 bg-[#111113] border border-[#1e1e21] rounded-xl hover:border-[#6366f1] hover:bg-[#14141a] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
      >
        <DAppLogo dapp={dapp} size={40} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-sm font-bold text-white truncate group-hover:text-indigo-300 transition-colors">{dapp.name}</span>
            {dapp.verified && <span className="text-[10px] text-[#22c55e]">✓</span>}
          </div>
          <p className="text-xs text-[#636366] truncate">{dapp.tagline}</p>
        </div>
        {dapp.tvl && <span className="text-xs font-bold text-[#22c55e] flex-shrink-0">{dapp.tvl}</span>}
      </Link>
    );
  }

  return (
    <Link
      href={`/ecosystem/${dapp.slug}`}
      className="group flex flex-col bg-[#111113] border border-[#1e1e21] rounded-2xl p-4 hover:border-[#6366f1] hover:bg-[#14141a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <DAppLogo dapp={dapp} size={52} />
        <div className="flex flex-col items-end gap-1.5 ml-2">
          {dapp.verified && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#22c55e12] border border-[#22c55e20] text-[#22c55e] text-[10px] font-bold">✓ Verified</div>
          )}
          {dapp.featured && (
            <div className="px-2 py-0.5 rounded-lg bg-[#6366f112] border border-[#6366f120] text-[#818cf8] text-[10px] font-bold">⭐ Featured</div>
          )}
          {dapp.trending && !dapp.featured && (
            <div className="px-2 py-0.5 rounded-lg bg-[#f59e0b12] border border-[#f59e0b20] text-[#f59e0b] text-[10px] font-bold">🔥 Trending</div>
          )}
          {dapp.new && !dapp.trending && !dapp.featured && (
            <div className="px-2 py-0.5 rounded-lg bg-[#818cf812] border border-[#818cf820] text-[#818cf8] text-[10px] font-bold">✨ New</div>
          )}
        </div>
      </div>

      {/* Name + category */}
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">{dapp.name}</h3>
        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-[#2c2c2e] text-[#8e8e93] whitespace-nowrap">
          {CATEGORIES_META[dapp.category]?.emoji} {CATEGORIES_META[dapp.category]?.label}
        </span>
      </div>

      {/* Tagline */}
      <p className="text-xs text-[#8e8e93] leading-relaxed mb-3 line-clamp-2 flex-1">{dapp.tagline}</p>

      <StarRating rating={dapp.rating} />
      <div className="h-px bg-[#1e1e21] my-3" />

      {/* Metrics */}
      <div className="flex items-center gap-3 mb-3">
        {dapp.tvl && (
          <div>
            <div className="text-xs font-bold text-[#22c55e]">{dapp.tvl}</div>
            <div className="text-[9px] text-[#636366]">TVL</div>
          </div>
        )}
        {dapp.monthlyUsers && (
          <div>
            <div className="text-xs font-bold text-white">{dapp.monthlyUsers}</div>
            <div className="text-[9px] text-[#636366]">Monthly</div>
          </div>
        )}
        <div className="ml-auto">
          <div className="text-xs font-bold text-[#8e8e93]">{((dapp.reviewCount || 0) / 1000).toFixed(1)}k</div>
          <div className="text-[9px] text-[#636366]">Reviews</div>
        </div>
      </div>

      {/* Chain pills */}
      <div className="flex flex-wrap gap-1 mb-2">
        {dapp.chains.slice(0, 4).map((c) => (
          <span key={c} className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93]">
            {CHAINS_META[c]?.emoji} {CHAINS_META[c]?.label || c}
          </span>
        ))}
        {dapp.chains.length > 4 && <span className="text-[9px] text-[#636366] self-center">+{dapp.chains.length - 4}</span>}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {dapp.tags.slice(0, 3).map((t) => (
          <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-[#2c2c2e] text-[#636366]">{t}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {levelLabel && (
          <span
            className="text-[9px] font-bold px-2 py-0.5 rounded-lg capitalize"
            style={{ background: levelColors[levelLabel] + "18", color: levelColors[levelLabel] }}
          >
            {levelLabel === "newbie" ? "Beginner" : levelLabel === "intermediate" ? "Intermediate" : "Degen"}
          </span>
        )}
        <div className="flex items-center gap-2 ml-auto">
          {dapp.audited && <span className="text-[9px] text-[#22c55e] font-medium">🔒 Audited</span>}
          {dapp.openSource && <span className="text-[9px] text-[#8e8e93]">Open Source</span>}
        </div>
      </div>
    </Link>
  );
}

/* ─── ECOSYSTEM TAB BAR ─────────────────────────────────────────────────────── */
function EcosystemTabs({ active, onChange }: { active: EcosystemKey; onChange: (k: EcosystemKey) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ecosystems = Object.entries(ECOSYSTEMS_META) as [EcosystemKey, typeof ECOSYSTEMS_META[EcosystemKey]][];

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {ecosystems.map(([key, meta]) => {
          const isActive = active === key;
          const count = key === "all" ? DAPPS.length : getDAppsByEcosystem(key).length;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              role="tab"
              aria-selected={isActive}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all border whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
              style={
                isActive
                  ? { background: meta.color + "22", borderColor: meta.color, color: meta.color }
                  : { background: "#111113", borderColor: "#1e1e21", color: "#8e8e93" }
              }
            >
              <span className="text-base leading-none">{meta.emoji}</span>
              <span>{meta.label}</span>
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: isActive ? meta.color + "30" : "#2c2c2e", color: isActive ? meta.color : "#636366" }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
      <div className="absolute right-0 top-0 bottom-1 w-12 pointer-events-none bg-gradient-to-l from-[#060608] to-transparent sm:hidden" />
    </div>
  );
}

/* ─── FEATURED STRIP ────────────────────────────────────────────────────────── */
function FeaturedStrip({ dapps }: { dapps: DApp[] }) {
  const featured = dapps.filter((d) => d.featured).slice(0, 6);
  if (!featured.length) return null;
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-black tracking-widest uppercase text-[#6366f1]">⭐ Featured</span>
        <span className="text-xs text-[#636366]">Hand-picked top dApps</span>
      </div>
      <div className="relative">
        <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {featured.map((dapp) => (
            <Link
              key={dapp.slug}
              href={`/ecosystem/${dapp.slug}`}
              className="flex-shrink-0 w-60 bg-[#111113] border border-[#1e1e21] rounded-2xl p-4 hover:border-[#6366f1] transition-all hover:-translate-y-0.5 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
              style={{ background: `linear-gradient(135deg, ${dapp.color}08, #111113)` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <DAppLogo dapp={dapp} size={40} />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white truncate group-hover:text-indigo-300 transition-colors">{dapp.name}</h3>
                  <span className="text-[10px] text-[#636366]">{CATEGORIES_META[dapp.category]?.label}</span>
                </div>
              </div>
              <p className="text-xs text-[#8e8e93] line-clamp-2 mb-2">{dapp.tagline}</p>
              <div className="flex items-center justify-between">
                <StarRating rating={dapp.rating} />
                {dapp.tvl && <span className="text-xs font-bold text-[#22c55e]">{dapp.tvl}</span>}
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-2 w-12 pointer-events-none bg-gradient-to-l from-[#060608] to-transparent sm:hidden" />
      </div>
    </section>
  );
}

/* ─── TRENDING STRIP ────────────────────────────────────────────────────────── */
function TrendingStrip({ dapps }: { dapps: DApp[] }) {
  const trending = dapps.filter((d) => d.trending && !d.featured).slice(0, 8);
  if (!trending.length) return null;
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-black tracking-widest uppercase text-[#f59e0b]">🔥 Trending Now</span>
        <span className="text-xs text-[#636366]">What the community is using</span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
        {trending.map((dapp) => (
          <Link
            key={dapp.slug}
            href={`/ecosystem/${dapp.slug}`}
            className="flex-shrink-0 flex items-center gap-2.5 px-3 py-2 bg-[#111113] border border-[#1e1e21] rounded-xl hover:border-[#f59e0b] transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
          >
            <DAppLogo dapp={dapp} size={28} />
            <div>
              <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors whitespace-nowrap">{dapp.name}</div>
              {dapp.tvl && <div className="text-[9px] text-[#22c55e] font-semibold">{dapp.tvl}</div>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ─── NEW ARRIVALS STRIP ────────────────────────────────────────────────────── */
function NewArrivalsStrip({ dapps }: { dapps: DApp[] }) {
  const newDapps = dapps.filter((d) => d.new && !d.featured && !d.trending).slice(0, 6);
  if (!newDapps.length) return null;
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-black tracking-widest uppercase text-[#818cf8]">✨ New Arrivals</span>
        <span className="text-xs text-[#636366]">Recently added to the store</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {newDapps.map((dapp) => (
          <DAppCard key={dapp.slug} dapp={dapp} compact />
        ))}
      </div>
    </section>
  );
}

/* ─── CATEGORY ROW ──────────────────────────────────────────────────────────── */
function CategoryRow({ label, emoji, dapps }: { label: string; emoji: string; dapps: DApp[] }) {
  if (!dapps.length) return null;
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">{emoji}</span>
          <h2 className="text-sm font-black text-white tracking-wide">{label}</h2>
          <span className="text-xs text-[#636366]">{dapps.length} dApps</span>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
        {dapps.slice(0, 8).map((dapp) => (
          <Link
            key={dapp.slug}
            href={`/ecosystem/${dapp.slug}`}
            className="flex-shrink-0 w-52 flex flex-col bg-[#111113] border border-[#1e1e21] rounded-2xl p-3 hover:border-[#6366f1] hover:bg-[#14141a] transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <DAppLogo dapp={dapp} size={36} />
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate group-hover:text-indigo-300 transition-colors">{dapp.name}</div>
                {dapp.tvl && <div className="text-[9px] text-[#22c55e] font-semibold">{dapp.tvl}</div>}
              </div>
            </div>
            <p className="text-[10px] text-[#636366] line-clamp-2 leading-relaxed">{dapp.tagline}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ─── TOGGLE ────────────────────────────────────────────────────────────────── */
function Toggle({ on, onChange, color = "#22c55e" }: { on: boolean; onChange: () => void; color?: string }) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChange();
    }
  };

  return (
    <div
      onClick={onChange}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={on}
      tabIndex={0}
      className="relative cursor-pointer rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
      style={{ width: 36, height: 20, background: on ? color : "#2c2c2e" }}
    >
      <div className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all" style={{ left: on ? "18px" : "2px" }} />
    </div>
  );
}

/* ─── MAIN STORE ─────────────────────────────────────────────────────────────── */
export default function EcosystemStore() {
  const [ecosystem, setEcosystem] = useState<EcosystemKey>("all");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedChain, setSelectedChain] = useState<Chain | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedLevel, setSelectedLevel] = useState<UserLevel>("all");
  const [sortKey, setSortKey] = useState<SortKey>("rating");
  const [auditedOnly, setAuditedOnly] = useState(false);
  const [openSourceOnly, setOpenSourceOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"browse" | "grid">("browse");

  // Debounce search input (300ms)
  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput), 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const isFiltering = search !== "" || selectedChain !== "all" || selectedCategory !== "all" || selectedLevel !== "all" || auditedOnly || openSourceOnly;

  const parseTVL = (tvl?: string): number => {
    if (!tvl) return 0;
    const n = parseFloat(tvl.replace(/[$,]/g, ""));
    if (tvl.includes("B")) return n * 1e9;
    if (tvl.includes("M")) return n * 1e6;
    return n;
  };

  // Base pool from selected ecosystem
  const ecosystemDApps = useMemo(() => getDAppsByEcosystem(ecosystem), [ecosystem]);

  // Apply all filters on top
  const filteredDApps = useMemo(() => {
    return ecosystemDApps.filter((d) => {
      if (selectedChain !== "all" && !d.chains.includes(selectedChain)) return false;
      if (selectedCategory !== "all" && d.category !== selectedCategory) return false;
      if (selectedLevel !== "all" && DAPP_LEVEL_MAP[d.slug] !== selectedLevel) return false;
      if (auditedOnly && !d.audited) return false;
      if (openSourceOnly && !d.openSource) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          d.name.toLowerCase().includes(q) ||
          d.tagline.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q)) ||
          d.chains.some((c) => c.includes(q)) ||
          d.category.includes(q)
        );
      }
      return true;
    }).sort((a, b) => {
      if (sortKey === "rating")  return b.rating - a.rating;
      if (sortKey === "tvl")     return parseTVL(b.tvl) - parseTVL(a.tvl);
      if (sortKey === "users")   return parseInt(b.monthlyUsers?.replace(/[^0-9]/g, "") || "0") - parseInt(a.monthlyUsers?.replace(/[^0-9]/g, "") || "0");
      if (sortKey === "newest")  return b.launchYear - a.launchYear;
      return 0;
    });
  }, [ecosystemDApps, search, selectedChain, selectedCategory, selectedLevel, sortKey, auditedOnly, openSourceOnly]);

  const activeFilterCount = [selectedChain !== "all", selectedCategory !== "all", selectedLevel !== "all", auditedOnly, openSourceOnly].filter(Boolean).length;

  // Category sections for browse view
  const categoryRows = useMemo(() => {
    const cats = Object.entries(CATEGORIES_META) as [Category, { label: string; emoji: string }][];
    return cats
      .map(([cat, meta]) => ({ cat, meta, dapps: filteredDApps.filter((d) => d.category === cat) }))
      .filter((r) => r.dapps.length > 0)
      .sort((a, b) => b.dapps.length - a.dapps.length);
  }, [filteredDApps]);

  const ecoMeta = ECOSYSTEMS_META[ecosystem];

  const clearAll = () => {
    setSelectedChain("all");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setAuditedOnly(false);
    setOpenSourceOnly(false);
    setSearch("");
    setSearchInput("");
  };

  return (
    <div className="min-h-screen" style={{ background: "#060608" }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────────────────── */}
      <div className="border-b border-[#1c1c1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-2xl">
            <div className="text-xs font-black tracking-widest uppercase text-[#06b6d4] mb-3">🌐 dApp Ecosystem</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              The Universal<br />
              <span style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Web3 App Store
              </span>
            </h1>
            <p className="text-[#8e8e93] text-base">
              {DAPPS.length}+ curated dApps across {Object.keys(CHAINS_META).length} chains. Discover, compare, and launch.
            </p>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-[#1c1c1e]">
            {[
              { value: `${DAPPS.length}+`,                                              label: "dApps",      color: "#6366f1" },
              { value: `${Object.keys(CHAINS_META).length}`,                            label: "Chains",     color: "#06b6d4" },
              { value: `${Object.keys(CATEGORIES_META).length}`,                        label: "Categories", color: "#f59e0b" },
              { value: `${DAPPS.filter((d) => d.audited).length}`,                      label: "Audited",    color: "#22c55e" },
              { value: `${DAPPS.filter((d) => d.verified).length}`,                     label: "Verified",   color: "#818cf8" },
              { value: `${DAPPS.filter((d) => d.trending || d.new).length}`,            label: "New/Trending", color: "#f59e0b" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-black" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs text-[#636366]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── ECOSYSTEM TABS ─────────────────────────────────────────────────── */}
        <div className="mb-8">
          <div className="text-[10px] font-black tracking-widest uppercase text-[#636366] mb-3">Filter by Ecosystem</div>
          <EcosystemTabs active={ecosystem} onChange={(k) => { setEcosystem(k); setSelectedChain("all"); }} />
        </div>

        {/* ── ECOSYSTEM HERO (when a specific ecosystem is selected) ──────── */}
        {ecosystem !== "all" && (
          <div
            className="mb-8 p-5 rounded-2xl border"
            style={{ background: ecoMeta.color + "08", borderColor: ecoMeta.color + "25" }}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl">{ecoMeta.emoji}</span>
              <h2 className="text-lg font-black text-white">{ecoMeta.label}</h2>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: ecoMeta.color + "25", color: ecoMeta.color }}
              >
                {ecosystemDApps.length} dApps
              </span>
            </div>
            <p className="text-sm text-[#8e8e93]">{ecoMeta.description}</p>
          </div>
        )}

        {/* ── SEARCH + FILTER BAR (sticky) ───────────────────────────────────── */}
        <div className="sticky z-10 pb-4 pt-2 -mx-4 px-4" style={{ top: "104px", background: "#060608" }}>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">

            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#636366]">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
              </span>
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={`Search ${ecosystemDApps.length} dApps…`}
                aria-label="Search dApps"
                className="w-full bg-[#111113] border border-[#1e1e21] rounded-xl pl-10 pr-9 py-2.5 text-sm text-white placeholder-[#636366] outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
              />
              {searchInput && (
                <button onClick={() => { setSearchInput(""); setSearch(""); }} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#636366] hover:text-white text-lg leading-none">×</button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              aria-label="Sort dApps by"
              className="bg-[#111113] border border-[#1e1e21] rounded-xl px-3 py-2.5 text-sm text-white outline-none cursor-pointer focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/30"
            >
              <option value="rating">⭐ Top Rated</option>
              <option value="tvl">💰 Highest TVL</option>
              <option value="users">👥 Most Users</option>
              <option value="newest">✨ Newest</option>
            </select>

            {/* View mode toggle */}
            {!isFiltering && (
              <div className="flex gap-1 bg-[#111113] border border-[#1e1e21] rounded-xl p-1">
                <button
                  onClick={() => setViewMode("browse")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${viewMode === "browse" ? "bg-[#6366f1] text-white" : "text-[#8e8e93] hover:text-white"}`}
                >
                  Browse
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${viewMode === "grid" ? "bg-[#6366f1] text-white" : "text-[#8e8e93] hover:text-white"}`}
                >
                  Grid
                </button>
              </div>
            )}

            {/* Filters toggle */}
            <button
              onClick={() => setShowFilters((f) => !f)}
              aria-label={showFilters ? "Hide filters" : "Show filters"}
              aria-expanded={showFilters}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                showFilters || activeFilterCount > 0
                  ? "bg-[#6366f1] text-white border-[#6366f1]"
                  : "bg-[#111113] border-[#1e1e21] text-[#8e8e93] hover:border-[#3c3c3e] hover:text-white"
              }`}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" />
              </svg>
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-0.5 bg-white text-[#6366f1] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <span className="text-sm text-[#636366] ml-auto whitespace-nowrap">
              {filteredDApps.length} / {ecosystemDApps.length} dApps
            </span>
          </div>

          {/* Expandable filter panel */}
          {showFilters && (
            <div className="mt-3 p-4 bg-[#111113] border border-[#1e1e21] rounded-2xl space-y-4">
              {/* Level */}
              <div>
                <div className="text-[10px] font-black tracking-widest uppercase text-[#636366] mb-2">User Level</div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { key: "all", label: "All", emoji: "🌐" },
                    { key: "newbie", label: "Beginner", emoji: "👋" },
                    { key: "intermediate", label: "Intermediate", emoji: "📈" },
                    { key: "degen", label: "Degen", emoji: "🔥" },
                  ].map((l) => (
                    <button
                      key={l.key}
                      onClick={() => setSelectedLevel(l.key as UserLevel)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedLevel === l.key ? "bg-[#6366f1] text-white" : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white"}`}
                    >
                      {l.emoji} {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <div className="text-[10px] font-black tracking-widest uppercase text-[#636366] mb-2">Category</div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedCategory === "all" ? "bg-[#6366f1] text-white" : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white"}`}
                  >
                    All
                  </button>
                  {(Object.entries(CATEGORIES_META) as [Category, { label: string; emoji: string }][]).map(([key, meta]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedCategory === key ? "bg-[#6366f1] text-white" : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white"}`}
                    >
                      {meta.emoji} {meta.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chain */}
              <div>
                <div className="text-[10px] font-black tracking-widest uppercase text-[#636366] mb-2">Blockchain</div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedChain("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedChain === "all" ? "bg-[#6366f1] text-white" : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white"}`}
                  >
                    🌐 All Chains
                  </button>
                  {(Object.entries(CHAINS_META) as [Chain, { label: string; emoji: string; color: string }][]).map(([key, meta]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedChain(key)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedChain === key ? "text-white" : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white"}`}
                      style={selectedChain === key ? { background: meta.color, borderColor: meta.color } : {}}
                    >
                      {meta.emoji} {meta.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles + clear */}
              <div className="flex items-center gap-6 flex-wrap">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Toggle on={auditedOnly} onChange={() => setAuditedOnly((v) => !v)} color="#22c55e" />
                  <span className="text-xs text-[#8e8e93]">Audited only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Toggle on={openSourceOnly} onChange={() => setOpenSourceOnly((v) => !v)} color="#818cf8" />
                  <span className="text-xs text-[#8e8e93]">Open source only</span>
                </label>
                {activeFilterCount > 0 && (
                  <button onClick={clearAll} className="text-xs text-[#f85149] hover:underline ml-auto">Clear all filters</button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── CHAIN QUICK FILTER PILLS ────────────────────────────────────────── */}
        {!isFiltering && (
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6" style={{ scrollbarWidth: "none" }}>
            <button
              onClick={() => setSelectedChain("all")}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${selectedChain === "all" ? "bg-[#6366f1] text-white" : "bg-[#111113] border border-[#1e1e21] text-[#8e8e93] hover:text-white"}`}
            >
              🌐 All
            </button>
            {(Object.entries(CHAINS_META) as [Chain, { label: string; emoji: string; color: string }][]).map(([key, meta]) => (
              <button
                key={key}
                onClick={() => setSelectedChain(key === selectedChain ? "all" : key)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${selectedChain === key ? "text-white" : "bg-[#111113] border-[#1e1e21] text-[#8e8e93] hover:text-white"}`}
                style={selectedChain === key ? { background: meta.color + "dd", borderColor: meta.color } : {}}
              >
                {meta.emoji} {meta.label}
              </button>
            ))}
          </div>
        )}

        {/* ── CONTENT AREA ────────────────────────────────────────────────────── */}
        {filteredDApps.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center" role="status" aria-live="polite">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-white mb-2">No dApps found</h3>
            <p className="text-[#8e8e93] mb-2">Try adjusting your filters or search</p>
            {(search || activeFilterCount > 0) && (
              <p className="text-xs text-[#636366] mb-4">
                {search && <span>Search: &ldquo;{search}&rdquo;</span>}
                {search && activeFilterCount > 0 && <span> · </span>}
                {activeFilterCount > 0 && <span>{activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""} active</span>}
              </p>
            )}
            <button
              onClick={clearAll}
              className="px-4 py-2 rounded-xl bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : isFiltering || viewMode === "grid" ? (
          /* ── GRID VIEW ── */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredDApps.map((dapp) => (
              <DAppCard key={dapp.slug} dapp={dapp} />
            ))}
          </div>
        ) : (
          /* ── BROWSE VIEW (sections) ── */
          <div>
            <FeaturedStrip dapps={filteredDApps} />
            <TrendingStrip dapps={filteredDApps} />
            <NewArrivalsStrip dapps={filteredDApps} />

            {/* Category rows */}
            <div className="mt-4">
              <div className="h-px bg-[#1c1c1e] mb-8" />
              {categoryRows.map(({ cat, meta, dapps }) => (
                <CategoryRow key={cat} label={meta.label} emoji={meta.emoji} dapps={dapps} />
              ))}
            </div>

            {/* View All button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setViewMode("grid")}
                className="px-6 py-3 rounded-2xl bg-[#111113] border border-[#1e1e21] text-sm font-semibold text-[#8e8e93] hover:text-white hover:border-[#6366f1] transition-all"
              >
                View all {filteredDApps.length} dApps as grid →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
