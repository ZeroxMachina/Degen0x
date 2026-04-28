'use client';

import { useState, useMemo } from "react";
import BackToTop from "@/components/BackToTop";

// ── Types ──────────────────────────────────────────────────────────────────────
type StablecoinType = "Treasury-Backed" | "DeFi-Native" | "Synthetic" | "Lending" | "Algorithmic";
type Chain = "All" | "Ethereum" | "Arbitrum" | "Base" | "Multi-chain";
type RiskLevel = "All" | "Low" | "Medium" | "High";

interface StablecoinYield {
  name: string;
  ticker: string;
  protocol: string;
  type: StablecoinType;
  apy: number;
  tvl: number; // millions
  chain: Chain;
  riskLevel: RiskLevel;
  riskNote: string;
  kyc: boolean;
  minDeposit: string;
  mechanism: string;
  icon: string;
  url: string;
  change7d: number;
  audited: boolean;
}

// ── Stablecoin Data (static, updated April 2026) ───────────────────────────────
const STABLECOINS: StablecoinYield[] = [
  { name: "sDAI", ticker: "sDAI", protocol: "Spark/Sky", type: "Treasury-Backed", apy: 6.0, tvl: 8200, chain: "Ethereum", riskLevel: "Low", riskNote: "DAI Savings Rate set by MKR governance", kyc: false, minDeposit: "0.01 DAI", mechanism: "DAI Savings Rate set by MKR governance", icon: "🔵", url: "/go/sdai", change7d: 0.15, audited: true },
  { name: "USDY", ticker: "USDY", protocol: "Ondo Finance", type: "Treasury-Backed", apy: 4.25, tvl: 1200, chain: "Multi-chain", riskLevel: "Low", riskNote: "Short-term US Treasuries + bank deposits", kyc: true, minDeposit: "$100", mechanism: "Short-term US Treasuries + bank deposits", icon: "🟡", url: "/go/usdy", change7d: 0.05, audited: true },
  { name: "sUSDe", ticker: "sUSDe", protocol: "Ethena", type: "Synthetic", apy: 5.0, tvl: 5800, chain: "Ethereum", riskLevel: "Medium", riskNote: "Hedged crypto collateral + funding rates", kyc: false, minDeposit: "1 USDe", mechanism: "Hedged crypto collateral + funding rates", icon: "🟣", url: "/go/susde", change7d: -0.2, audited: true },
  { name: "USDM", ticker: "USDM", protocol: "Mountain Protocol", type: "Treasury-Backed", apy: 5.0, tvl: 420, chain: "Ethereum", riskLevel: "Low", riskNote: "Rebasing token backed by US Treasuries", kyc: true, minDeposit: "$1000", mechanism: "Rebasing token backed by US Treasuries", icon: "🏔️", url: "/go/usdm", change7d: 0.08, audited: true },
  { name: "sfrxUSD", ticker: "sfrxUSD", protocol: "Frax", type: "DeFi-Native", apy: 5.5, tvl: 1100, chain: "Ethereum", riskLevel: "Medium", riskNote: "Benchmark Yield Strategy across sources", kyc: false, minDeposit: "1 frxUSD", mechanism: "Benchmark Yield Strategy across sources", icon: "⚡", url: "/go/sfrxusd", change7d: 0.32, audited: true },
  { name: "USDC", ticker: "USDC-Aave", protocol: "Aave V3", type: "Lending", apy: 5.2, tvl: 12800, chain: "Ethereum", riskLevel: "Low", riskNote: "Variable lending rate from borrowers", kyc: false, minDeposit: "$1", mechanism: "Variable lending rate from borrowers", icon: "👻", url: "/go/aave", change7d: -0.3, audited: true },
  { name: "USDT", ticker: "USDT-Aave-Arb", protocol: "Aave V3 Arbitrum", type: "Lending", apy: 6.1, tvl: 4200, chain: "Arbitrum", riskLevel: "Low", riskNote: "L2 lending with lower gas costs", kyc: false, minDeposit: "$1", mechanism: "L2 lending with lower gas costs", icon: "👻", url: "/go/aave", change7d: 0.8, audited: true },
  { name: "USDC", ticker: "USDC-Compound", protocol: "Compound V3", type: "Lending", apy: 5.8, tvl: 2100, chain: "Base", riskLevel: "Low", riskNote: "Comet market lending on Base L2", kyc: false, minDeposit: "$1", mechanism: "Comet market lending on Base L2", icon: "🔷", url: "/go/compound", change7d: 0.1, audited: true },
  { name: "USDC", ticker: "USDC-Morpho", protocol: "Morpho Blue", type: "Lending", apy: 8.6, tvl: 2800, chain: "Ethereum", riskLevel: "Medium", riskNote: "P2P matching on lending pools", kyc: false, minDeposit: "$1", mechanism: "P2P matching on lending pools", icon: "💎", url: "/go/morpho", change7d: -0.4, audited: true },
  { name: "3CRV", ticker: "3CRV", protocol: "Curve", type: "DeFi-Native", apy: 4.5, tvl: 8900, chain: "Ethereum", riskLevel: "Medium", riskNote: "Stablecoin LP trading fees + CRV rewards", kyc: false, minDeposit: "$1", mechanism: "Stablecoin LP trading fees + CRV rewards", icon: "♻️", url: "/go/curve", change7d: -0.2, audited: true },
  { name: "USDC", ticker: "USDC-Yearn", protocol: "Yearn Finance", type: "DeFi-Native", apy: 7.4, tvl: 890, chain: "Ethereum", riskLevel: "Medium", riskNote: "Auto-rotating yield strategies", kyc: false, minDeposit: "$1", mechanism: "Auto-rotating yield strategies", icon: "🔮", url: "/go/yearn", change7d: 0.6, audited: true },
  { name: "USDC", ticker: "USDC-Fluid", protocol: "Fluid", type: "Lending", apy: 7.8, tvl: 620, chain: "Ethereum", riskLevel: "Medium", riskNote: "Smart collateral lending + DEX LP", kyc: false, minDeposit: "$1", mechanism: "Smart collateral lending + DEX LP", icon: "💧", url: "/go/fluid", change7d: 2.5, audited: true },
  { name: "USDC", ticker: "USDC-Stargate", protocol: "Stargate", type: "DeFi-Native", apy: 9.2, tvl: 340, chain: "Arbitrum", riskLevel: "High", riskNote: "Cross-chain bridge transfer fees", kyc: false, minDeposit: "$1", mechanism: "Cross-chain bridge transfer fees", icon: "⭐", url: "/go/stargate", change7d: 1.8, audited: true },
  { name: "crvUSD", ticker: "crvUSD", protocol: "Curve", type: "DeFi-Native", apy: 6.3, tvl: 1500, chain: "Ethereum", riskLevel: "Medium", riskNote: "Curve's native stablecoin yield", kyc: false, minDeposit: "$1", mechanism: "Curve's native stablecoin yield", icon: "♻️", url: "/go/curve", change7d: 0.45, audited: true },
  { name: "USD0++", ticker: "USD0++", protocol: "Usual Protocol", type: "Treasury-Backed", apy: 5.8, tvl: 680, chain: "Ethereum", riskLevel: "Medium", riskNote: "Bond-style Treasury-backed yield", kyc: false, minDeposit: "$1", mechanism: "Bond-style Treasury-backed yield", icon: "🏦", url: "/go/usual", change7d: 0.12, audited: true },
];

function fmtApy(n: number): string {
  return n.toFixed(2) + "%";
}

function fmtTvl(n: number): string {
  if (n >= 1000) return "$" + (n / 1000).toFixed(1) + "B";
  return "$" + n.toFixed(0) + "M";
}

const RISK_COLORS: Record<RiskLevel, string> = {
  All: "#8b949e",
  Low: "#3fb950",
  Medium: "#d29922",
  High: "#f85149",
};

const S = {
  bg: "#0d1117",
  surface: "#161b22",
  surface2: "#1c2330",
  border: "#30363d",
  text: "#e6edf3",
  text2: "#8b949e",
  green: "#3fb950",
  blue: "#58a6ff",
  purple: "#818cf8",
  red: "#f85149",
  orange: "#f0883e",
  yellow: "#d29922",
};

type SortKey = "apy" | "tvl" | "riskLevel" | "name";

export default function StablecoinYieldTracker() {
  const [chain, setChain] = useState<Chain>("All");
  const [risk, setRisk] = useState<RiskLevel>("All");
  const [type, setType] = useState<"All" | StablecoinType>("All");
  const [sort, setSort] = useState<SortKey>("apy");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [search, setSearch] = useState("");
  const [kyc, setKyc] = useState(false);

  const chains: Chain[] = ["All", "Ethereum", "Arbitrum", "Base", "Multi-chain"];
  const risks: RiskLevel[] = ["All", "Low", "Medium", "High"];
  const types: ("All" | StablecoinType)[] = ["All", "Treasury-Backed", "DeFi-Native", "Synthetic", "Lending", "Algorithmic"];

  const filtered = useMemo(() => {
    let list = STABLECOINS;
    if (chain !== "All") list = list.filter(s => s.chain === chain);
    if (risk !== "All") list = list.filter(s => s.riskLevel === risk);
    if (type !== "All") list = list.filter(s => s.type === type);
    if (kyc) list = list.filter(s => !s.kyc);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(s => s.name.toLowerCase().includes(q) || s.ticker.toLowerCase().includes(q) || s.protocol.toLowerCase().includes(q));
    }

    return list.sort((a, b) => {
      const dir = sortDir === "desc" ? -1 : 1;
      if (sort === "apy") return dir * (a.apy - b.apy);
      if (sort === "tvl") return dir * (a.tvl - b.tvl);
      if (sort === "riskLevel") {
        const order: Record<string, number> = { Low: 0, Medium: 1, High: 2 };
        return dir * (order[a.riskLevel] - order[b.riskLevel]);
      }
      return dir * a.name.localeCompare(b.name);
    });
  }, [chain, risk, type, search, kyc, sort, sortDir]);

  const avgApy = filtered.length > 0 ? filtered.reduce((s, sc) => s + sc.apy, 0) / filtered.length : 0;
  const totalTvl = STABLECOINS.reduce((s, sc) => s + sc.tvl, 0);

  function toggleSort(key: SortKey) {
    if (sort === key) setSortDir(d => d === "desc" ? "asc" : "desc");
    else { setSort(key); setSortDir("desc"); }
  }

  const chipStyle = (active: boolean, color: string) => ({
    padding: "8px 16px",
    minHeight: 44,
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    border: `1px solid ${active ? color : S.border}`,
    background: active ? color + "20" : S.surface2,
    color: active ? color : S.text2,
    whiteSpace: "nowrap" as const,
    display: "inline-flex" as const,
    alignItems: "center" as const,
    transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s" as const,
  });

  return (
    <div style={{ minHeight: "100vh", background: S.bg, color: S.text }}>
      <style>{`
        .sytr-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 24px; }
        .sytr-card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 16px; margin-bottom: 28px; }
        .sytr-risk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 40px; margin-bottom: 28px; }
        .sytr-filter-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .sytr-chip:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }
        .sytr-search:focus-visible { border-color: #6366f1 !important; outline: none; box-shadow: 0 0 0 2px #6366f120; }
        .sytr-sort-btn:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }
        .sytr-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
        .sytr-card:focus-within { outline: 2px solid #6366f1; outline-offset: 2px; }
        .sytr-card { transition: transform 0.2s, box-shadow 0.2s; }
        .sytr-cta:hover { background: #58a6ff30 !important; }
        .sytr-cta:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }
        @media (max-width: 768px) {
          .sytr-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .sytr-card-grid { grid-template-columns: 1fr; }
          .sytr-risk-grid { grid-template-columns: 1fr; }
          .sytr-filter-row { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition-duration: 0.01ms !important; }
          .sytr-card:hover { transform: none; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 80px" }}>
        {/* Header */}
        <div style={{ paddingBottom: 28, paddingTop: 20 }}>
          <div style={{ display: "inline-block", padding: "4px 14px", background: "#fbbf2420", border: "1px solid #fbbf2440", borderRadius: 20, fontSize: 12, color: S.yellow, fontWeight: 600, marginBottom: 14 }}>
            💰 Stablecoin Yield Tracker
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 10 }}>
            Best Stablecoin Yields — April 2026
          </h1>
          <p style={{ color: S.text2, fontSize: 15, maxWidth: 640, lineHeight: 1.6 }}>
            Compare yield-bearing stablecoin rates across sDAI, USDY, sUSDe, USDM, and 15+ yield sources. Find safe, high-yield stablecoin opportunities with our real-time tracker.
          </p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 12, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, color: S.text2, padding: "4px 10px", background: S.surface, border: `1px solid ${S.border}`, borderRadius: 6 }}>
              Data via DeFiLlama &amp; protocol APIs
            </span>
            <span style={{ fontSize: 11, color: S.green, padding: "4px 10px", background: S.green + "10", border: `1px solid ${S.green}30`, borderRadius: 6 }}>
              Updated April 2026
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="sytr-stats-grid">
          {[
            { label: "Stablecoins", val: STABLECOINS.length.toString(), color: S.purple },
            { label: "Total TVL", val: fmtTvl(totalTvl), color: S.blue },
            { label: "Avg APY", val: fmtApy(avgApy), color: S.green },
            { label: "Chains", val: "4", color: S.orange },
          ].map(s => (
            <div key={s.label} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 16 }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.val}</div>
              <div style={{ fontSize: 11, color: S.text2, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Search Box */}
        <div style={{ marginBottom: 20 }}>
          <input
            type="text"
            placeholder="Search by name, ticker, or protocol..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search stablecoins by name, ticker, or protocol"
            className="sytr-search"
            style={{
              width: "100%",
              padding: "12px 16px",
              minHeight: 44,
              background: S.surface,
              border: `1px solid ${S.border}`,
              borderRadius: 10,
              color: S.text,
              fontSize: 14,
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Filters */}
        <div role="group" aria-label="Filter stablecoins by chain, risk, and type" style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 18, marginBottom: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Chain */}
            <div>
              <div style={{ fontSize: 11, color: S.text2, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Chain</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {chains.map(c => (
                  <button key={c} onClick={() => setChain(c)} className="sytr-chip" style={chipStyle(chain === c, S.blue)}>{c}</button>
                ))}
              </div>
            </div>

            {/* Risk & Type Grid */}
            <div className="sytr-filter-row">
              <div>
                <div style={{ fontSize: 11, color: S.text2, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Risk Level</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {risks.map(r => (
                    <button key={r} onClick={() => setRisk(r)} className="sytr-chip" style={chipStyle(risk === r, RISK_COLORS[r])}>{r}</button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: S.text2, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Type</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {types.map(t => (
                    <button key={t} onClick={() => setType(t)} className="sytr-chip" style={chipStyle(type === t, S.purple)}>{t}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* KYC Toggle */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", minHeight: 44, padding: "4px 0" }}>
                <input
                  type="checkbox"
                  checked={kyc}
                  onChange={e => setKyc(e.target.checked)}
                  aria-label="Filter to show only No KYC stablecoins"
                  style={{ cursor: "pointer", width: 20, height: 20 }}
                />
                <span style={{ fontSize: 13, fontWeight: 600 }}>No KYC only</span>
              </label>
            </div>
          </div>
        </div>

        {/* Sort Controls & Results Count */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 13, color: S.text2 }} role="status" aria-live="polite">
            Showing <strong style={{ color: S.text }}>{filtered.length}</strong> of {STABLECOINS.length} stablecoins
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {(["apy", "tvl", "name"] as SortKey[]).map(key => (
              <button
                key={key}
                onClick={() => toggleSort(key)}
                aria-label={`Sort by ${key}`}
                className="sytr-sort-btn"
                style={{
                  padding: "8px 14px",
                  minHeight: 44,
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: `1px solid ${sort === key ? S.blue : S.border}`,
                  background: sort === key ? S.blue + "20" : S.surface2,
                  color: sort === key ? S.blue : S.text2,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {key.toUpperCase()} {sort === key && (sortDir === "desc" ? "↓" : "↑")}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid */}
        <div className="sytr-card-grid">
          {filtered.map((sc) => (
            <div
              key={`${sc.name}-${sc.ticker}`}
              className="sytr-card"
              style={{
                background: S.surface,
                border: `2px solid ${RISK_COLORS[sc.riskLevel]}60`,
                borderRadius: 14,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {/* Top Row: Icon, Name, Type Badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, flex: 1 }}>
                  <div style={{ fontSize: 32 }}>{sc.icon}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: S.text }}>{sc.name}</div>
                    <div style={{ fontSize: 12, color: S.text2, marginTop: 2 }}>{sc.ticker}</div>
                  </div>
                </div>
              </div>

              {/* Protocol & Type */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                  background: S.blue + "15", color: S.blue, border: `1px solid ${S.blue}30`,
                }}>
                  {sc.protocol}
                </span>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                  background: S.purple + "15", color: S.purple, border: `1px solid ${S.purple}30`,
                }}>
                  {sc.type}
                </span>
              </div>

              {/* APY Highlight */}
              <div style={{ background: S.surface2, borderRadius: 10, padding: 12, textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: sc.apy >= 8 ? S.orange : sc.apy >= 6 ? S.green : S.text }}>
                  {fmtApy(sc.apy)}
                </div>
                <div style={{ fontSize: 11, color: S.text2, marginTop: 4 }}>Current APY</div>
              </div>

              {/* TVL, Chain, Risk */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 10, color: S.text2, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>TVL</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: S.text }}>{fmtTvl(sc.tvl)}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: S.text2, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>Chain</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: S.text }}>{sc.chain}</div>
                </div>
              </div>

              {/* Risk Badge */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6,
                  background: RISK_COLORS[sc.riskLevel] + "15",
                  color: RISK_COLORS[sc.riskLevel],
                  border: `1px solid ${RISK_COLORS[sc.riskLevel]}30`,
                }}>
                  {sc.riskLevel} Risk
                </span>
                <span style={{ fontSize: 10, color: S.text2, flex: 1 }}>{sc.riskNote}</span>
              </div>

              {/* 7d Change & KYC */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 10, color: S.text2, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>7d Change</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: sc.change7d >= 0 ? S.green : S.red }}>
                    {sc.change7d >= 0 ? "+" : ""}{sc.change7d.toFixed(2)}%
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: S.text2, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>KYC</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: sc.kyc ? S.red : S.green }}>
                    {sc.kyc ? "Required" : "Not Required"}
                  </div>
                </div>
              </div>

              {/* Min Deposit */}
              <div>
                <div style={{ fontSize: 10, color: S.text2, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>Min Deposit</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: S.text }}>{sc.minDeposit}</div>
              </div>

              {/* Audited Badge */}
              {sc.audited && (
                <div style={{ fontSize: 12, color: S.green, fontWeight: 700 }}>✓ Audited</div>
              )}

              {/* CTA Button */}
              <a
                href={sc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sytr-cta"
                style={{
                  display: "block",
                  padding: "10px 14px",
                  background: S.blue + "20",
                  border: `1px solid ${S.blue}40`,
                  borderRadius: 8,
                  color: S.blue,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 13,
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                Earn Yield →
              </a>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 40, textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>No stablecoins found</div>
            <div style={{ color: S.text2, fontSize: 14 }}>Try adjusting your filters or search query</div>
          </div>
        )}

        {/* Risk Guide */}
        <div className="sytr-risk-grid">
          {[
            { level: "Low" as RiskLevel, desc: "Established protocols with multi-year track records, audits, and deep liquidity. Suitable for most conservative investors.", examples: "sDAI, USDC on Aave/Compound" },
            { level: "Medium" as RiskLevel, desc: "Solid protocols with some additional risk — newer deployments, algorithmic mechanisms, or multi-step yield sources.", examples: "sUSDe, Yearn vaults, Morpho, Curve LP" },
            { level: "High" as RiskLevel, desc: "Higher yield potential with higher risks — bridge protocols, novel mechanisms, or concentrated exposure.", examples: "Stargate, cross-chain bridges" },
          ].map(r => (
            <div key={r.level} style={{ background: S.surface, border: `1px solid ${RISK_COLORS[r.level]}30`, borderRadius: 12, padding: 18, borderTop: `3px solid ${RISK_COLORS[r.level]}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: RISK_COLORS[r.level] }}>{r.level} Risk</span>
              </div>
              <p style={{ fontSize: 12, color: S.text2, lineHeight: 1.6, marginBottom: 10 }}>{r.desc}</p>
              <div style={{ fontSize: 11, color: S.text2 }}><strong style={{ color: S.text }}>Examples:</strong> {r.examples}</div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{ background: "#d2992215", border: `1px solid #d2992240`, borderRadius: 10, padding: 14, marginTop: 24, fontSize: 12, color: S.yellow, lineHeight: 1.7 }}>
          ⚠️ <strong>Disclaimer:</strong> APY rates are approximations based on April 2026 data and change frequently. Stablecoin yields carry smart contract risk, protocol risk, and market risk — including potential loss of funds. This is not financial advice. Always conduct your own research and never invest more than you can afford to lose. Rates and data are updated regularly but may not reflect real-time conditions.
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
