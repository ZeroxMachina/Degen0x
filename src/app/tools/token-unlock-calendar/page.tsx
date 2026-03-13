'use client';

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

// ── Types ────────────────────────────────────────────────────────────────────
interface TokenUnlock {
  id: string;
  project: string;
  ticker: string;
  chain: string;
  unlockDate: string;
  unlockAmount: number;
  unlockPercent: number;
  totalSupply: number;
  circulatingSupply: number;
  currentPrice: number;
  unlockValueUSD: number;
  unlockType: "cliff" | "linear" | "milestone";
  category: "Team" | "Investor" | "Ecosystem" | "Foundation" | "Community" | "Treasury";
  description: string;
  impactScore: number; // 1-10 severity
  historicalImpact: number; // avg % price change after similar unlocks
}

interface FilterState {
  chain: string;
  category: string;
  timeframe: string;
  minImpact: number;
  search: string;
  sortBy: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const TOKEN_UNLOCKS: TokenUnlock[] = [
  {
    id: "1", project: "Arbitrum", ticker: "ARB", chain: "Ethereum",
    unlockDate: "2026-03-16", unlockAmount: 92_650_000, unlockPercent: 0.93,
    totalSupply: 10_000_000_000, circulatingSupply: 3_400_000_000,
    currentPrice: 1.42, unlockValueUSD: 131_563_000,
    unlockType: "cliff", category: "Investor",
    description: "Series B investor unlock — 92.65M ARB tokens released to early backers.",
    impactScore: 8, historicalImpact: -6.2,
  },
  {
    id: "2", project: "Optimism", ticker: "OP", chain: "Ethereum",
    unlockDate: "2026-03-18", unlockAmount: 31_340_000, unlockPercent: 0.73,
    totalSupply: 4_294_967_296, circulatingSupply: 1_250_000_000,
    currentPrice: 2.85, unlockValueUSD: 89_319_000,
    unlockType: "linear", category: "Ecosystem",
    description: "Monthly ecosystem fund distribution for grants and incentives.",
    impactScore: 5, historicalImpact: -2.1,
  },
  {
    id: "3", project: "Aptos", ticker: "APT", chain: "Aptos",
    unlockDate: "2026-03-20", unlockAmount: 11_310_000, unlockPercent: 1.08,
    totalSupply: 1_047_083_866, circulatingSupply: 478_000_000,
    currentPrice: 11.20, unlockValueUSD: 126_672_000,
    unlockType: "cliff", category: "Team",
    description: "Core contributors and foundation team vesting cliff release.",
    impactScore: 9, historicalImpact: -8.5,
  },
  {
    id: "4", project: "Sui", ticker: "SUI", chain: "Sui",
    unlockDate: "2026-03-22", unlockAmount: 64_190_000, unlockPercent: 0.64,
    totalSupply: 10_000_000_000, circulatingSupply: 2_800_000_000,
    currentPrice: 1.95, unlockValueUSD: 125_170_500,
    unlockType: "linear", category: "Investor",
    description: "Early investor monthly linear unlock — Series A participants.",
    impactScore: 7, historicalImpact: -4.8,
  },
  {
    id: "5", project: "Celestia", ticker: "TIA", chain: "Ethereum",
    unlockDate: "2026-03-25", unlockAmount: 45_200_000, unlockPercent: 4.52,
    totalSupply: 1_000_000_000, circulatingSupply: 220_000_000,
    currentPrice: 8.35, unlockValueUSD: 377_420_000,
    unlockType: "cliff", category: "Investor",
    description: "Major cliff unlock — seed and Series A investors. Largest TIA unlock to date.",
    impactScore: 10, historicalImpact: -12.3,
  },
  {
    id: "6", project: "Starknet", ticker: "STRK", chain: "Ethereum",
    unlockDate: "2026-03-28", unlockAmount: 127_000_000, unlockPercent: 1.27,
    totalSupply: 10_000_000_000, circulatingSupply: 1_800_000_000,
    currentPrice: 0.82, unlockValueUSD: 104_140_000,
    unlockType: "linear", category: "Foundation",
    description: "Foundation reserve monthly distribution for ecosystem development.",
    impactScore: 6, historicalImpact: -3.4,
  },
  {
    id: "7", project: "dYdX", ticker: "DYDX", chain: "Ethereum",
    unlockDate: "2026-04-01", unlockAmount: 8_330_000, unlockPercent: 1.19,
    totalSupply: 1_000_000_000, circulatingSupply: 700_000_000,
    currentPrice: 3.15, unlockValueUSD: 26_239_500,
    unlockType: "linear", category: "Team",
    description: "Core team and advisor monthly linear vesting distribution.",
    impactScore: 4, historicalImpact: -1.8,
  },
  {
    id: "8", project: "Worldcoin", ticker: "WLD", chain: "Ethereum",
    unlockDate: "2026-04-03", unlockAmount: 36_700_000, unlockPercent: 0.37,
    totalSupply: 10_000_000_000, circulatingSupply: 640_000_000,
    currentPrice: 4.10, unlockValueUSD: 150_470_000,
    unlockType: "cliff", category: "Community",
    description: "Community airdrop phase 3 — tokens allocated to World ID verified users.",
    impactScore: 6, historicalImpact: -3.9,
  },
  {
    id: "9", project: "Jito", ticker: "JTO", chain: "Solana",
    unlockDate: "2026-04-05", unlockAmount: 22_100_000, unlockPercent: 2.21,
    totalSupply: 1_000_000_000, circulatingSupply: 265_000_000,
    currentPrice: 3.70, unlockValueUSD: 81_770_000,
    unlockType: "cliff", category: "Investor",
    description: "Seed and strategic round investor cliff unlock.",
    impactScore: 8, historicalImpact: -7.1,
  },
  {
    id: "10", project: "Blur", ticker: "BLUR", chain: "Ethereum",
    unlockDate: "2026-04-07", unlockAmount: 195_000_000, unlockPercent: 6.50,
    totalSupply: 3_000_000_000, circulatingSupply: 1_600_000_000,
    currentPrice: 0.38, unlockValueUSD: 74_100_000,
    unlockType: "cliff", category: "Team",
    description: "Core team and advisor cliff unlock — 6.5% of total supply.",
    impactScore: 9, historicalImpact: -9.2,
  },
  {
    id: "11", project: "Wormhole", ticker: "W", chain: "Solana",
    unlockDate: "2026-04-10", unlockAmount: 600_000_000, unlockPercent: 6.00,
    totalSupply: 10_000_000_000, circulatingSupply: 1_800_000_000,
    currentPrice: 0.42, unlockValueUSD: 252_000_000,
    unlockType: "cliff", category: "Investor",
    description: "Major investor cliff unlock — 600M W tokens from Series A & B investors.",
    impactScore: 10, historicalImpact: -11.5,
  },
  {
    id: "12", project: "Ethena", ticker: "ENA", chain: "Ethereum",
    unlockDate: "2026-04-12", unlockAmount: 450_000_000, unlockPercent: 3.00,
    totalSupply: 15_000_000_000, circulatingSupply: 4_200_000_000,
    currentPrice: 0.55, unlockValueUSD: 247_500_000,
    unlockType: "cliff", category: "Ecosystem",
    description: "Ecosystem rewards distribution — staking incentives and protocol growth.",
    impactScore: 7, historicalImpact: -5.3,
  },
  {
    id: "13", project: "Sei", ticker: "SEI", chain: "Sei",
    unlockDate: "2026-04-15", unlockAmount: 85_000_000, unlockPercent: 0.85,
    totalSupply: 10_000_000_000, circulatingSupply: 3_500_000_000,
    currentPrice: 0.48, unlockValueUSD: 40_800_000,
    unlockType: "linear", category: "Foundation",
    description: "Foundation monthly distribution for ecosystem grants and development.",
    impactScore: 4, historicalImpact: -2.0,
  },
  {
    id: "14", project: "Pyth Network", ticker: "PYTH", chain: "Solana",
    unlockDate: "2026-04-18", unlockAmount: 210_000_000, unlockPercent: 1.40,
    totalSupply: 15_000_000_000, circulatingSupply: 3_600_000_000,
    currentPrice: 0.35, unlockValueUSD: 73_500_000,
    unlockType: "cliff", category: "Investor",
    description: "Seed round investor cliff — 210M PYTH tokens from earliest backers.",
    impactScore: 7, historicalImpact: -5.8,
  },
  {
    id: "15", project: "ZKsync", ticker: "ZK", chain: "Ethereum",
    unlockDate: "2026-04-22", unlockAmount: 350_000_000, unlockPercent: 1.67,
    totalSupply: 21_000_000_000, circulatingSupply: 3_900_000_000,
    currentPrice: 0.18, unlockValueUSD: 63_000_000,
    unlockType: "linear", category: "Treasury",
    description: "Protocol treasury distribution for L2 incentives and liquidity mining.",
    impactScore: 5, historicalImpact: -3.0,
  },
];

const CHAINS = ["All", "Ethereum", "Solana", "Sui", "Aptos", "Sei"];
const CATEGORIES: string[] = ["All", "Team", "Investor", "Ecosystem", "Foundation", "Community", "Treasury"];
const TIMEFRAMES = ["All", "7 days", "14 days", "30 days", "60 days"];
const SORT_OPTIONS = [
  { value: "date_asc", label: "Date (soonest)" },
  { value: "date_desc", label: "Date (latest)" },
  { value: "value_desc", label: "Value (highest)" },
  { value: "impact_desc", label: "Impact (highest)" },
  { value: "percent_desc", label: "% Supply (highest)" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatUSD(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}

function formatNumber(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

function daysUntil(dateStr: string): number {
  const now = new Date();
  const target = new Date(dateStr);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function impactColor(score: number): string {
  if (score >= 8) return "#f85149";
  if (score >= 6) return "#f0883e";
  if (score >= 4) return "#d29922";
  return "#3fb950";
}

function impactLabel(score: number): string {
  if (score >= 8) return "High Risk";
  if (score >= 6) return "Medium Risk";
  if (score >= 4) return "Low Risk";
  return "Minimal";
}

function categoryColor(cat: string): string {
  const map: Record<string, string> = {
    Team: "#f85149", Investor: "#f0883e", Ecosystem: "#58a6ff",
    Foundation: "#bc8cff", Community: "#3fb950", Treasury: "#d29922",
  };
  return map[cat] || "#8b949e";
}

function unlockTypeIcon(type: string): string {
  if (type === "cliff") return "\u{1F9F1}";
  if (type === "linear") return "\u{1F4C8}";
  return "\u{1F3AF}";
}

// ── Component ────────────────────────────────────────────────────────────────
export default function TokenUnlockCalendar() {
  const [filters, setFilters] = useState<FilterState>({
    chain: "All", category: "All", timeframe: "All",
    minImpact: 0, search: "", sortBy: "date_asc",
  });
  const [selectedUnlock, setSelectedUnlock] = useState<TokenUnlock | null>(null);
  const [view, setView] = useState<"list" | "calendar">("list");

  const filteredUnlocks = useMemo(() => {
    let result = TOKEN_UNLOCKS.filter((u) => {
      if (filters.chain !== "All" && u.chain !== filters.chain) return false;
      if (filters.category !== "All" && u.category !== filters.category) return false;
      if (filters.minImpact > 0 && u.impactScore < filters.minImpact) return false;
      if (filters.search && !u.project.toLowerCase().includes(filters.search.toLowerCase()) && !u.ticker.toLowerCase().includes(filters.search.toLowerCase())) return false;
      if (filters.timeframe !== "All") {
        const days = parseInt(filters.timeframe);
        if (daysUntil(u.unlockDate) > days || daysUntil(u.unlockDate) < 0) return false;
      }
      return true;
    });
    result.sort((a, b) => {
      switch (filters.sortBy) {
        case "date_desc": return new Date(b.unlockDate).getTime() - new Date(a.unlockDate).getTime();
        case "value_desc": return b.unlockValueUSD - a.unlockValueUSD;
        case "impact_desc": return b.impactScore - a.impactScore;
        case "percent_desc": return b.unlockPercent - a.unlockPercent;
        default: return new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime();
      }
    });
    return result;
  }, [filters]);

  const totalUnlockValue = filteredUnlocks.reduce((s, u) => s + u.unlockValueUSD, 0);
  const avgImpact = filteredUnlocks.length > 0
    ? filteredUnlocks.reduce((s, u) => s + u.impactScore, 0) / filteredUnlocks.length
    : 0;

  const weeklyGroups = useMemo(() => {
    const groups: Record<string, TokenUnlock[]> = {};
    filteredUnlocks.forEach((u) => {
      const d = new Date(u.unlockDate);
      const weekStart = new Date(d);
      weekStart.setDate(d.getDate() - d.getDay());
      const key = weekStart.toISOString().split("T")[0];
      if (!groups[key]) groups[key] = [];
      groups[key].push(u);
    });
    return groups;
  }, [filteredUnlocks]);

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Token Unlock Calendar" },
      ]} />
      <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 20px" }}>
          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 36 }}>{"\u{1F513}"}</span>
              <h1 style={{ fontSize: 32, fontWeight: 800, background: "linear-gradient(135deg, #f0883e, #f85149)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Token Unlock Calendar
              </h1>
            </div>
            <p style={{ color: "#8b949e", fontSize: 16, maxWidth: 700, lineHeight: 1.6 }}>
              Track upcoming token unlocks across 15+ projects. Understand supply impact, price risk, and historical correlation data to stay ahead of sell pressure.
            </p>
          </div>

          {/* Summary Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 24 }}>
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 16, borderLeft: "3px solid #f0883e" }}>
              <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Upcoming Unlocks</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#f0883e" }}>{filteredUnlocks.length}</div>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 16, borderLeft: "3px solid #f85149" }}>
              <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Total Value</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#f85149" }}>{formatUSD(totalUnlockValue)}</div>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 16, borderLeft: "3px solid #d29922" }}>
              <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Avg Impact Score</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#d29922" }}>{avgImpact.toFixed(1)}/10</div>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 16, borderLeft: "3px solid #58a6ff" }}>
              <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Chains Tracked</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#58a6ff" }}>5</div>
            </div>
          </div>

          {/* Filters */}
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 16, marginBottom: 24 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <input
                type="text" placeholder="Search project or ticker..."
                value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, padding: "8px 12px", color: "#e6edf3", fontSize: 13, width: 220 }}
              />
              <select value={filters.chain} onChange={(e) => setFilters({ ...filters, chain: e.target.value })}
                style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, padding: "8px 12px", color: "#e6edf3", fontSize: 13 }}>
                {CHAINS.map((c) => <option key={c} value={c}>{c === "All" ? "All Chains" : c}</option>)}
              </select>
              <select value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, padding: "8px 12px", color: "#e6edf3", fontSize: 13 }}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>)}
              </select>
              <select value={filters.timeframe} onChange={(e) => setFilters({ ...filters, timeframe: e.target.value })}
                style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, padding: "8px 12px", color: "#e6edf3", fontSize: 13 }}>
                {TIMEFRAMES.map((t) => <option key={t} value={t}>{t === "All" ? "All Dates" : `Next ${t}`}</option>)}
              </select>
              <select value={filters.sortBy} onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, padding: "8px 12px", color: "#e6edf3", fontSize: 13 }}>
                {SORT_OPTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
              <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
                <button onClick={() => setView("list")}
                  style={{ background: view === "list" ? "#58a6ff20" : "transparent", border: "1px solid #30363d", borderRadius: 8, padding: "8px 14px", color: view === "list" ? "#58a6ff" : "#8b949e", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
                  List
                </button>
                <button onClick={() => setView("calendar")}
                  style={{ background: view === "calendar" ? "#58a6ff20" : "transparent", border: "1px solid #30363d", borderRadius: 8, padding: "8px 14px", color: view === "calendar" ? "#58a6ff" : "#8b949e", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
                  Weekly
                </button>
              </div>
            </div>
          </div>

          {/* List View */}
          {view === "list" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filteredUnlocks.map((u) => {
                const days = daysUntil(u.unlockDate);
                return (
                  <div key={u.id} onClick={() => setSelectedUnlock(selectedUnlock?.id === u.id ? null : u)}
                    style={{
                      background: "#161b22", border: `1px solid ${selectedUnlock?.id === u.id ? "#58a6ff" : "#30363d"}`,
                      borderRadius: 12, padding: 20, cursor: "pointer",
                      borderLeft: `4px solid ${impactColor(u.impactScore)}`,
                      transition: "all 0.15s",
                    }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <span style={{ fontSize: 18, fontWeight: 800 }}>{u.project}</span>
                          <span style={{ fontSize: 13, color: "#8b949e", fontWeight: 600 }}>{u.ticker}</span>
                          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, fontWeight: 700, background: `${categoryColor(u.category)}20`, color: categoryColor(u.category) }}>{u.category}</span>
                          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, fontWeight: 600, background: "#21262d", color: "#8b949e" }}>{u.chain}</span>
                        </div>
                        <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.5 }}>{u.description}</div>
                      </div>
                      <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 2 }}>Unlock Date</div>
                          <div style={{ fontSize: 15, fontWeight: 700, color: days <= 3 ? "#f85149" : days <= 7 ? "#f0883e" : "#e6edf3" }}>
                            {new Date(u.unlockDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </div>
                          <div style={{ fontSize: 11, color: days <= 3 ? "#f85149" : "#8b949e" }}>
                            {days <= 0 ? "Today!" : `${days}d away`}
                          </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 2 }}>Value</div>
                          <div style={{ fontSize: 15, fontWeight: 800, color: "#f0883e" }}>{formatUSD(u.unlockValueUSD)}</div>
                          <div style={{ fontSize: 11, color: "#8b949e" }}>{formatNumber(u.unlockAmount)} {u.ticker}</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 2 }}>% Supply</div>
                          <div style={{ fontSize: 15, fontWeight: 800, color: u.unlockPercent >= 3 ? "#f85149" : u.unlockPercent >= 1 ? "#f0883e" : "#e6edf3" }}>
                            {u.unlockPercent.toFixed(2)}%
                          </div>
                          <div style={{ fontSize: 11, color: "#8b949e" }}>{unlockTypeIcon(u.unlockType)} {u.unlockType}</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 2 }}>Impact</div>
                          <div style={{ fontSize: 15, fontWeight: 800, color: impactColor(u.impactScore) }}>
                            {u.impactScore}/10
                          </div>
                          <div style={{ fontSize: 10, color: impactColor(u.impactScore), fontWeight: 600 }}>{impactLabel(u.impactScore)}</div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded detail */}
                    {selectedUnlock?.id === u.id && (
                      <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #30363d" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                          <div style={{ background: "#0d1117", borderRadius: 8, padding: 12 }}>
                            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>Current Price</div>
                            <div style={{ fontSize: 16, fontWeight: 700 }}>${u.currentPrice.toFixed(2)}</div>
                          </div>
                          <div style={{ background: "#0d1117", borderRadius: 8, padding: 12 }}>
                            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>Total Supply</div>
                            <div style={{ fontSize: 16, fontWeight: 700 }}>{formatNumber(u.totalSupply)}</div>
                          </div>
                          <div style={{ background: "#0d1117", borderRadius: 8, padding: 12 }}>
                            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>Circulating Supply</div>
                            <div style={{ fontSize: 16, fontWeight: 700 }}>{formatNumber(u.circulatingSupply)}</div>
                          </div>
                          <div style={{ background: "#0d1117", borderRadius: 8, padding: 12 }}>
                            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>Hist. Avg Impact</div>
                            <div style={{ fontSize: 16, fontWeight: 700, color: u.historicalImpact < -5 ? "#f85149" : u.historicalImpact < -2 ? "#f0883e" : "#d29922" }}>
                              {u.historicalImpact.toFixed(1)}%
                            </div>
                          </div>
                        </div>
                        {/* Impact Bar */}
                        <div style={{ marginTop: 12 }}>
                          <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 6 }}>Supply Impact Visualization</div>
                          <div style={{ background: "#0d1117", borderRadius: 8, height: 32, position: "relative", overflow: "hidden" }}>
                            <div style={{ width: `${(u.circulatingSupply / u.totalSupply) * 100}%`, height: "100%", background: "#3fb95040", borderRadius: "8px 0 0 8px" }} />
                            <div style={{
                              position: "absolute", left: `${(u.circulatingSupply / u.totalSupply) * 100}%`,
                              top: 0, width: `${u.unlockPercent}%`, height: "100%", background: "#f8514960",
                            }} />
                            <div style={{ position: "absolute", top: 7, left: 12, fontSize: 11, fontWeight: 600, color: "#3fb950" }}>
                              Circulating: {((u.circulatingSupply / u.totalSupply) * 100).toFixed(1)}%
                            </div>
                            <div style={{ position: "absolute", top: 7, right: 12, fontSize: 11, fontWeight: 600, color: "#f85149" }}>
                              +{u.unlockPercent.toFixed(2)}% unlock
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              {filteredUnlocks.length === 0 && (
                <div style={{ textAlign: "center", padding: 60, color: "#8b949e" }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>{"\u{1F50D}"}</div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>No unlocks match your filters</div>
                  <div style={{ fontSize: 13, marginTop: 4 }}>Try adjusting your search or filter criteria</div>
                </div>
              )}
            </div>
          )}

          {/* Weekly View */}
          {view === "calendar" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {Object.entries(weeklyGroups).sort(([a], [b]) => a.localeCompare(b)).map(([weekKey, unlocks]) => {
                const weekStart = new Date(weekKey);
                const weekEnd = new Date(weekStart);
                weekEnd.setDate(weekStart.getDate() + 6);
                const weekValue = unlocks.reduce((s, u) => s + u.unlockValueUSD, 0);
                return (
                  <div key={weekKey}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#58a6ff" }}>
                        Week of {weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" })} — {weekEnd.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </h3>
                      <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
                        <span style={{ color: "#8b949e" }}>{unlocks.length} unlock{unlocks.length !== 1 ? "s" : ""}</span>
                        <span style={{ color: "#f0883e", fontWeight: 700 }}>{formatUSD(weekValue)}</span>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
                      {unlocks.map((u) => (
                        <div key={u.id} style={{
                          background: "#161b22", border: "1px solid #30363d", borderRadius: 10,
                          padding: 14, borderLeft: `3px solid ${impactColor(u.impactScore)}`,
                        }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                            <span style={{ fontWeight: 800, fontSize: 14 }}>{u.project} <span style={{ color: "#8b949e", fontWeight: 500 }}>{u.ticker}</span></span>
                            <span style={{ fontSize: 12, color: impactColor(u.impactScore), fontWeight: 700 }}>{impactLabel(u.impactScore)}</span>
                          </div>
                          <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#8b949e" }}>
                            <span>{new Date(u.unlockDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                            <span style={{ color: "#f0883e", fontWeight: 700 }}>{formatUSD(u.unlockValueUSD)}</span>
                            <span>{u.unlockPercent.toFixed(2)}% supply</span>
                          </div>
                          <div style={{ fontSize: 11, color: "#8b949e", marginTop: 6 }}>{u.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Risk Disclaimer */}
          <div style={{ marginTop: 40, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#d29922", marginBottom: 8 }}>{"\u26A0\uFE0F"} Risk Disclaimer</h3>
            <p style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
              Token unlock data is sourced from project documentation and may change. Historical impact scores are averages and past performance is not indicative of future results.
              Always do your own research (DYOR) before making trading decisions based on unlock schedules. This tool is for informational purposes only and does not constitute financial advice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
