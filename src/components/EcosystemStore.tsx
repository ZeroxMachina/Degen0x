"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  DAPPS,
  CHAINS_META,
  CATEGORIES_META,
  DAPP_LOGO_URLS,
  DAPP_LEVEL_MAP,
  type DApp,
  type Chain,
  type Category,
} from "@/data/dapps";

type SortKey = "rating" | "tvl" | "users" | "newest";
type UserLevel = "all" | "newbie" | "intermediate" | "degen";

/* ─── LOGO COMPONENT ─────────────────────────────────────────────────────── */
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
      style={{
        width: size,
        height: size,
        background: dapp.color + "20",
        borderColor: dapp.color + "50",
        fontSize: size * 0.48,
      }}
    >
      {dapp.logo}
    </div>
  );
}

/* ─── STAR RATING ─────────────────────────────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-xs ${i <= Math.round(rating) ? "text-[#f59e0b]" : "text-[#3c3c3e]"}`}>
          ★
        </span>
      ))}
      <span className="text-xs text-[#8e8e93] ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

/* ─── DAPP CARD ────────────────────────────────────────────────────────────── */
function DAppCard({ dapp }: { dapp: DApp }) {
  const levelLabel = DAPP_LEVEL_MAP[dapp.slug];
  const levelColors: Record<string, string> = {
    newbie:       "#22c55e",
    intermediate: "#f59e0b",
    degen:        "#f85149",
  };

  return (
    <Link
      href={`/ecosystem/${dapp.slug}`}
      className="group flex flex-col bg-[#111113] border border-[#1e1e21] rounded-2xl p-4 hover:border-[#6366f1] hover:bg-[#14141a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* Header: logo + badges */}
      <div className="flex items-start justify-between mb-4">
        <DAppLogo dapp={dapp} size={52} />
        <div className="flex flex-col items-end gap-1.5 ml-2">
          {dapp.verified && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#22c55e12] border border-[#22c55e20] text-[#22c55e] text-[10px] font-bold">
              ✓ Verified
            </div>
          )}
          {dapp.featured && (
            <div className="px-2 py-0.5 rounded-lg bg-[#6366f112] border border-[#6366f120] text-[#818cf8] text-[10px] font-bold">
              ⭐ Featured
            </div>
          )}
          {dapp.trending && !dapp.featured && (
            <div className="px-2 py-0.5 rounded-lg bg-[#f59e0b12] border border-[#f59e0b20] text-[#f59e0b] text-[10px] font-bold">
              🔥 Trending
            </div>
          )}
          {dapp.new && (
            <div className="px-2 py-0.5 rounded-lg bg-[#818cf812] border border-[#818cf820] text-[#818cf8] text-[10px] font-bold">
              ✨ New
            </div>
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
      <p className="text-xs text-[#8e8e93] leading-relaxed mb-3 line-clamp-2 flex-1">
        {dapp.tagline}
      </p>

      {/* Rating */}
      <StarRating rating={dapp.rating} />

      {/* Divider */}
      <div className="h-px bg-[#1e1e21] my-3" />

      {/* Metrics row */}
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
          <div className="text-xs font-bold text-[#8e8e93]">{(dapp.reviewCount / 1000).toFixed(1)}k</div>
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
        {dapp.chains.length > 4 && (
          <span className="text-[9px] text-[#636366] self-center">+{dapp.chains.length - 4}</span>
        )}
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

/* ─── FEATURED STRIP ──────────────────────────────────────────────────────── */
function FeaturedStrip() {
  const featured = DAPPS.filter((d) => d.featured).slice(0, 5);

  return (
    <section className="mb-8">
      <h2 className="text-xs font-black tracking-widest uppercase text-[#6366f1] mb-4">⭐ Featured dApps</h2>
      <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
        {featured.map((dapp) => (
          <Link
            key={dapp.slug}
            href={`/ecosystem/${dapp.slug}`}
            className="flex-shrink-0 w-60 bg-[#111113] border border-[#1e1e21] rounded-2xl p-4 hover:border-[#6366f1] transition-all hover:-translate-y-0.5 group"
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
    </section>
  );
}

/* ─── TOGGLE SWITCH ────────────────────────────────────────────────────────── */
function Toggle({ on, onChange, color = "#22c55e" }: { on: boolean; onChange: () => void; color?: string }) {
  return (
    <div
      onClick={onChange}
      className="relative cursor-pointer rounded-full transition-colors"
      style={{ width: 36, height: 20, background: on ? color : "#2c2c2e" }}
    >
      <div
        className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all"
        style={{ left: on ? "18px" : "2px" }}
      />
    </div>
  );
}

/* ─── MAIN STORE ─────────────────────────────────────────────────────────── */
export default function EcosystemStore() {
  const [search, setSearch] = useState("");
  const [selectedChain, setSelectedChain] = useState<Chain | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedLevel, setSelectedLevel] = useState<UserLevel>("all");
  const [sortKey, setSortKey] = useState<SortKey>("rating");
  const [auditedOnly, setAuditedOnly] = useState(false);
  const [openSourceOnly, setOpenSourceOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const parseTVL = (tvl?: string): number => {
    if (!tvl) return 0;
    const n = parseFloat(tvl.replace(/[$,]/g, ""));
    if (tvl.includes("B")) return n * 1e9;
    if (tvl.includes("M")) return n * 1e6;
    return n;
  };

  const filteredDApps = useMemo(() => {
    return DAPPS.filter((d) => {
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
  }, [search, selectedChain, selectedCategory, selectedLevel, sortKey, auditedOnly, openSourceOnly]);

  const activeFilterCount = [
    selectedChain !== "all",
    selectedCategory !== "all",
    selectedLevel !== "all",
    auditedOnly,
    openSourceOnly,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen" style={{ background: "#060608" }}>
      {/* ── PAGE HEADER ── */}
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
              {DAPPS.length}+ curated dApps across 15+ chains. Discover, compare, and launch.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-[#1c1c1e]">
            {[
              { value: `${DAPPS.length}+`, label: "dApps",       color: "#6366f1" },
              { value: "15+",              label: "Chains",      color: "#06b6d4" },
              { value: "16",               label: "Categories",  color: "#f59e0b" },
              { value: String(DAPPS.filter((d) => d.audited).length),  label: "Audited",  color: "#22c55e" },
              { value: String(DAPPS.filter((d) => d.verified).length), label: "Verified", color: "#818cf8" },
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
        <FeaturedStrip />

        {/* ── SEARCH + FILTER BAR (sticky) ── */}
        <div
          className="sticky z-10 pb-4 pt-2 -mx-4 px-4"
          style={{ top: "104px", background: "#060608" }}
        >
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#636366]">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${DAPPS.length} dApps…`}
                className="w-full bg-[#111113] border border-[#1e1e21] rounded-xl pl-10 pr-9 py-2.5 text-sm text-white placeholder-[#636366] outline-none focus:border-[#6366f1] transition-colors"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#636366] hover:text-white text-lg leading-none">×</button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="bg-[#111113] border border-[#1e1e21] rounded-xl px-3 py-2.5 text-sm text-white outline-none cursor-pointer focus:border-[#6366f1]"
            >
              <option value="rating">⭐ Top Rated</option>
              <option value="tvl">💰 Highest TVL</option>
              <option value="users">👥 Most Users</option>
              <option value="newest">✨ Newest</option>
            </select>

            {/* Filters toggle */}
            <button
              onClick={() => setShowFilters((f) => !f)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                showFilters || activeFilterCount > 0
                  ? "bg-[#6366f1] text-white border-[#6366f1]"
                  : "bg-[#111113] border-[#1e1e21] text-[#8e8e93] hover:border-[#3c3c3e] hover:text-white"
              }`}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
              </svg>
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-0.5 bg-white text-[#6366f1] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <span className="text-sm text-[#636366] ml-auto whitespace-nowrap">
              {filteredDApps.length} / {DAPPS.length} dApps
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
                    { key: "all",          label: "All Levels",  emoji: "🌐" },
                    { key: "newbie",       label: "Beginner",    emoji: "👋" },
                    { key: "intermediate", label: "Intermediate",emoji: "📈" },
                    { key: "degen",        label: "Degen",       emoji: "🔥" },
                  ].map((l) => (
                    <button
                      key={l.key}
                      onClick={() => setSelectedLevel(l.key as UserLevel)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedLevel === l.key
                          ? "bg-[#6366f1] text-white"
                          : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white"
                      }`}
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedCategory === "all"
                        ? "bg-[#6366f1] text-white"
                        : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white"
                    }`}
                  >
                    All
                  </button>
                  {(Object.entries(CATEGORIES_META) as [Category, { label: string; emoji: string }][]).map(([key, meta]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedCategory === key
                          ? "bg-[#6366f1] text-white"
                          : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white"
                      }`}
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedChain === "all"
                        ? "bg-[#6366f1] text-white"
                        : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white"
                    }`}
                  >
                    🌐 All Chains
                  </button>
                  {(Object.entries(CHAINS_META) as [Chain, { label: string; emoji: string; color: string }][]).map(([key, meta]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedChain(key)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedChain === key ? "text-white" : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white"
                      }`}
                      style={selectedChain === key ? { background: meta.color, borderColor: meta.color } : {}}
                    >
                      {meta.emoji} {meta.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Toggle on={auditedOnly} onChange={() => setAuditedOnly((v) => !v)} color="#22c55e" />
                  <span className="text-xs text-[#8e8e93]">Audited only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Toggle on={openSourceOnly} onChange={() => setOpenSourceOnly((v) => !v)} color="#818cf8" />
                  <span className="text-xs text-[#8e8e93]">Open source</span>
                </label>
                {activeFilterCount > 0 && (
                  <button
                    onClick={() => {
                      setSelectedChain("all");
                      setSelectedCategory("all");
                      setSelectedLevel("all");
                      setAuditedOnly(false);
                      setOpenSourceOnly(false);
                    }}
                    className="text-xs text-[#f85149] hover:underline ml-auto"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── CHAIN PILLS (quick filter row) ── */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6" style={{ scrollbarWidth: "none" }}>
          <button
            onClick={() => setSelectedChain("all")}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedChain === "all"
                ? "bg-[#6366f1] text-white"
                : "bg-[#111113] border border-[#1e1e21] text-[#8e8e93] hover:text-white"
            }`}
          >
            🌐 All
          </button>
          {(Object.entries(CHAINS_META) as [Chain, { label: string; emoji: string; color: string }][]).map(([key, meta]) => (
            <button
              key={key}
              onClick={() => setSelectedChain(key === selectedChain ? "all" : key)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedChain === key ? "text-white" : "bg-[#111113] border-[#1e1e21] text-[#8e8e93] hover:text-white"
              }`}
              style={selectedChain === key ? { background: meta.color + "dd", borderColor: meta.color } : {}}
            >
              {meta.emoji} {meta.label}
            </button>
          ))}
        </div>

        {/* ── DAPPS GRID ── */}
        {filteredDApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredDApps.map((dapp) => (
              <DAppCard key={dapp.slug} dapp={dapp} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-white mb-2">No dApps found</h3>
            <p className="text-[#8e8e93] mb-4">Try adjusting your filters or search</p>
            <button
              onClick={() => { setSearch(""); setSelectedChain("all"); setSelectedCategory("all"); setSelectedLevel("all"); }}
              className="px-4 py-2 rounded-xl bg-[#6366f1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
