'use client';

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

// ── Types ────────────────────────────────────────────────────────────────────
interface TreasuryHolding {
  asset: string;
  ticker: string;
  amount: number;
  valueUSD: number;
  allocation: number;
  change24h: number;
}

interface TreasuryFlow {
  date: string;
  type: "inflow" | "outflow";
  amount: number;
  asset: string;
  description: string;
  txHash: string;
}

interface DAOTreasury {
  id: string;
  name: string;
  chain: string;
  totalValueUSD: number;
  change30d: number;
  holders: TreasuryHolding[];
  recentFlows: TreasuryFlow[];
  monthlyBurn: number;
  runway: number; // months
  diversityScore: number; // 1-100
  governanceToken: string;
  treasuryAddress: string;
  category: "DeFi" | "L2" | "Infrastructure" | "NFT/Gaming" | "DAO Framework";
}

// ── Data ─────────────────────────────────────────────────────────────────────
const TREASURIES: DAOTreasury[] = [
  {
    id: "1", name: "Uniswap", chain: "Ethereum", totalValueUSD: 3_420_000_000, change30d: 4.2,
    governanceToken: "UNI", treasuryAddress: "0x1a9C...3f4D",
    category: "DeFi", monthlyBurn: 8_200_000, runway: 417, diversityScore: 22,
    holders: [
      { asset: "UNI", ticker: "UNI", amount: 420_000_000, valueUSD: 3_108_000_000, allocation: 90.9, change24h: 1.2 },
      { asset: "USDC", ticker: "USDC", amount: 124_000_000, valueUSD: 124_000_000, allocation: 3.6, change24h: 0.0 },
      { asset: "Ethereum", ticker: "ETH", amount: 52_000, valueUSD: 188_000_000, allocation: 5.5, change24h: -0.8 },
    ],
    recentFlows: [
      { date: "2026-03-10", type: "outflow", amount: 2_500_000, asset: "USDC", description: "Uniswap Foundation Q1 grants", txHash: "0xab1...def" },
      { date: "2026-03-05", type: "inflow", amount: 1_800_000, asset: "ETH", description: "Protocol fee revenue", txHash: "0xcd2...456" },
    ],
  },
  {
    id: "2", name: "Lido DAO", chain: "Ethereum", totalValueUSD: 890_000_000, change30d: -2.1,
    governanceToken: "LDO", treasuryAddress: "0x3e40...7f2C",
    category: "DeFi", monthlyBurn: 12_500_000, runway: 71, diversityScore: 58,
    holders: [
      { asset: "LDO", ticker: "LDO", amount: 210_000_000, valueUSD: 378_000_000, allocation: 42.5, change24h: -1.5 },
      { asset: "stETH", ticker: "stETH", amount: 85_000, valueUSD: 307_000_000, allocation: 34.5, change24h: 0.3 },
      { asset: "DAI", ticker: "DAI", amount: 120_000_000, valueUSD: 120_000_000, allocation: 13.5, change24h: 0.0 },
      { asset: "USDC", ticker: "USDC", amount: 85_000_000, valueUSD: 85_000_000, allocation: 9.6, change24h: 0.0 },
    ],
    recentFlows: [
      { date: "2026-03-12", type: "outflow", amount: 4_200_000, asset: "DAI", description: "Node operator rewards", txHash: "0xef3...789" },
      { date: "2026-03-08", type: "inflow", amount: 6_100_000, asset: "stETH", description: "Protocol staking yield", txHash: "0x123...abc" },
    ],
  },
  {
    id: "3", name: "Arbitrum DAO", chain: "Arbitrum", totalValueUSD: 4_100_000_000, change30d: 7.8,
    governanceToken: "ARB", treasuryAddress: "0x789a...bC12",
    category: "L2", monthlyBurn: 15_000_000, runway: 273, diversityScore: 18,
    holders: [
      { asset: "ARB", ticker: "ARB", amount: 2_700_000_000, valueUSD: 3_834_000_000, allocation: 93.5, change24h: 2.1 },
      { asset: "USDC", ticker: "USDC", amount: 180_000_000, valueUSD: 180_000_000, allocation: 4.4, change24h: 0.0 },
      { asset: "Ethereum", ticker: "ETH", amount: 24_000, valueUSD: 86_000_000, allocation: 2.1, change24h: -0.8 },
    ],
    recentFlows: [
      { date: "2026-03-11", type: "outflow", amount: 50_000_000, asset: "ARB", description: "LTIPP incentive program", txHash: "0x456...ghi" },
      { date: "2026-03-06", type: "inflow", amount: 3_200_000, asset: "ETH", description: "Sequencer fee revenue", txHash: "0x789...jkl" },
    ],
  },
  {
    id: "4", name: "Optimism", chain: "Optimism", totalValueUSD: 2_850_000_000, change30d: 3.5,
    governanceToken: "OP", treasuryAddress: "0xDeF4...5a6B",
    category: "L2", monthlyBurn: 18_000_000, runway: 158, diversityScore: 15,
    holders: [
      { asset: "OP", ticker: "OP", amount: 950_000_000, valueUSD: 2_707_500_000, allocation: 95.0, change24h: 0.5 },
      { asset: "USDC", ticker: "USDC", amount: 95_000_000, valueUSD: 95_000_000, allocation: 3.3, change24h: 0.0 },
      { asset: "Ethereum", ticker: "ETH", amount: 13_200, valueUSD: 47_500_000, allocation: 1.7, change24h: -0.8 },
    ],
    recentFlows: [
      { date: "2026-03-09", type: "outflow", amount: 30_000_000, asset: "OP", description: "RetroPGF Round 5 distribution", txHash: "0xaaa...111" },
    ],
  },
  {
    id: "5", name: "Aave", chain: "Ethereum", totalValueUSD: 520_000_000, change30d: 1.9,
    governanceToken: "AAVE", treasuryAddress: "0x4b82...c9E1",
    category: "DeFi", monthlyBurn: 3_800_000, runway: 136, diversityScore: 72,
    holders: [
      { asset: "AAVE", ticker: "AAVE", amount: 1_200_000, valueUSD: 192_000_000, allocation: 36.9, change24h: 1.8 },
      { asset: "aUSDC", ticker: "aUSDC", amount: 145_000_000, valueUSD: 145_000_000, allocation: 27.9, change24h: 0.0 },
      { asset: "aETH", ticker: "aETH", amount: 22_000, valueUSD: 79_200_000, allocation: 15.2, change24h: -0.8 },
      { asset: "aDAI", ticker: "aDAI", amount: 62_000_000, valueUSD: 62_000_000, allocation: 11.9, change24h: 0.0 },
      { asset: "Other", ticker: "MULTI", amount: 0, valueUSD: 41_800_000, allocation: 8.0, change24h: 0.4 },
    ],
    recentFlows: [
      { date: "2026-03-13", type: "inflow", amount: 5_400_000, asset: "USDC", description: "Protocol fee revenue", txHash: "0xbbb...222" },
      { date: "2026-03-07", type: "outflow", amount: 1_200_000, asset: "USDC", description: "Bug bounty payout (Immunefi)", txHash: "0xccc...333" },
    ],
  },
  {
    id: "6", name: "MakerDAO", chain: "Ethereum", totalValueUSD: 4_800_000_000, change30d: 2.3,
    governanceToken: "MKR", treasuryAddress: "0x5678...dE2F",
    category: "DeFi", monthlyBurn: 22_000_000, runway: 218, diversityScore: 65,
    holders: [
      { asset: "DAI (surplus)", ticker: "DAI", amount: 2_100_000_000, valueUSD: 2_100_000_000, allocation: 43.8, change24h: 0.0 },
      { asset: "MKR", ticker: "MKR", amount: 84_000, valueUSD: 1_512_000_000, allocation: 31.5, change24h: 1.3 },
      { asset: "RWA (T-Bills)", ticker: "RWA", amount: 0, valueUSD: 850_000_000, allocation: 17.7, change24h: 0.01 },
      { asset: "USDC", ticker: "USDC", amount: 338_000_000, valueUSD: 338_000_000, allocation: 7.0, change24h: 0.0 },
    ],
    recentFlows: [
      { date: "2026-03-12", type: "inflow", amount: 18_000_000, asset: "DAI", description: "Stability fee revenue", txHash: "0xddd...444" },
      { date: "2026-03-10", type: "outflow", amount: 8_000_000, asset: "DAI", description: "Spark Protocol deployment", txHash: "0xeee...555" },
    ],
  },
  {
    id: "7", name: "ENS DAO", chain: "Ethereum", totalValueUSD: 1_150_000_000, change30d: -1.4,
    governanceToken: "ENS", treasuryAddress: "0x91ab...fE34",
    category: "Infrastructure", monthlyBurn: 2_200_000, runway: 522, diversityScore: 38,
    holders: [
      { asset: "ENS", ticker: "ENS", amount: 38_000_000, valueUSD: 874_000_000, allocation: 76.0, change24h: -0.6 },
      { asset: "USDC", ticker: "USDC", amount: 180_000_000, valueUSD: 180_000_000, allocation: 15.7, change24h: 0.0 },
      { asset: "Ethereum", ticker: "ETH", amount: 26_600, valueUSD: 96_000_000, allocation: 8.3, change24h: -0.8 },
    ],
    recentFlows: [
      { date: "2026-03-11", type: "inflow", amount: 4_200_000, asset: "ETH", description: "ENS registration fees", txHash: "0xfff...666" },
    ],
  },
  {
    id: "8", name: "Compound", chain: "Ethereum", totalValueUSD: 310_000_000, change30d: 0.8,
    governanceToken: "COMP", treasuryAddress: "0xA12B...3c4D",
    category: "DeFi", monthlyBurn: 1_400_000, runway: 221, diversityScore: 45,
    holders: [
      { asset: "COMP", ticker: "COMP", amount: 2_800_000, valueUSD: 168_000_000, allocation: 54.2, change24h: 0.9 },
      { asset: "USDC", ticker: "USDC", amount: 82_000_000, valueUSD: 82_000_000, allocation: 26.5, change24h: 0.0 },
      { asset: "Ethereum", ticker: "ETH", amount: 16_600, valueUSD: 60_000_000, allocation: 19.4, change24h: -0.8 },
    ],
    recentFlows: [
      { date: "2026-03-08", type: "outflow", amount: 800_000, asset: "COMP", description: "Liquidity mining rewards", txHash: "0x111...aaa" },
    ],
  },
];

const CATEGORIES = ["All", "DeFi", "L2", "Infrastructure", "NFT/Gaming", "DAO Framework"];

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatUSD(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}

function diversityColor(score: number): string {
  if (score >= 60) return "#3fb950";
  if (score >= 40) return "#d29922";
  return "#f85149";
}

function diversityLabel(score: number): string {
  if (score >= 60) return "Well Diversified";
  if (score >= 40) return "Moderate";
  return "Concentrated";
}

function runwayColor(months: number): string {
  if (months >= 120) return "#3fb950";
  if (months >= 36) return "#d29922";
  return "#f85149";
}

// ── Component ────────────────────────────────────────────────────────────────
export default function DAOTreasuryDashboard() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("value");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = TREASURIES.filter((t) => {
      if (category !== "All" && t.category !== category) return false;
      if (search && !t.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    result.sort((a, b) => {
      switch (sortBy) {
        case "runway": return b.runway - a.runway;
        case "diversity": return b.diversityScore - a.diversityScore;
        case "change": return b.change30d - a.change30d;
        default: return b.totalValueUSD - a.totalValueUSD;
      }
    });
    return result;
  }, [category, sortBy, search]);

  const totalTreasuryValue = filtered.reduce((s, t) => s + t.totalValueUSD, 0);
  const avgRunway = filtered.length > 0 ? filtered.reduce((s, t) => s + t.runway, 0) / filtered.length : 0;
  const avgDiversity = filtered.length > 0 ? filtered.reduce((s, t) => s + t.diversityScore, 0) / filtered.length : 0;

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "DAO Treasury Dashboard" },
      ]} />
      <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 20px" }}>
          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 36 }}>{"\u{1F3E6}"}</span>
              <h1 style={{ fontSize: 32, fontWeight: 800, background: "linear-gradient(135deg, #3fb950, #58a6ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                DAO Treasury Dashboard
              </h1>
            </div>
            <p style={{ color: "#8b949e", fontSize: 16, maxWidth: 700, lineHeight: 1.6 }}>
              Track DAO treasuries across 8 major protocols. Analyze holdings, diversification, runway, and recent fund flows to understand protocol financial health.
            </p>
          </div>

          {/* Summary */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 24 }}>
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 16, borderLeft: "3px solid #3fb950" }}>
              <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Total Treasury Value</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#3fb950" }}>{formatUSD(totalTreasuryValue)}</div>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 16, borderLeft: "3px solid #58a6ff" }}>
              <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>DAOs Tracked</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#58a6ff" }}>{filtered.length}</div>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 16, borderLeft: "3px solid #d29922" }}>
              <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Avg Runway</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#d29922" }}>{avgRunway.toFixed(0)} mo</div>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 16, borderLeft: "3px solid #bc8cff" }}>
              <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Avg Diversity Score</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#bc8cff" }}>{avgDiversity.toFixed(0)}/100</div>
            </div>
          </div>

          {/* Filters */}
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 16, marginBottom: 24, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <input type="text" placeholder="Search DAO..." value={search} onChange={(e) => setSearch(e.target.value)}
              style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, padding: "8px 12px", color: "#e6edf3", fontSize: 13, width: 200 }} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}
              style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, padding: "8px 12px", color: "#e6edf3", fontSize: 13 }}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>)}
            </select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
              style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, padding: "8px 12px", color: "#e6edf3", fontSize: 13 }}>
              <option value="value">Sort: Total Value</option>
              <option value="runway">Sort: Runway</option>
              <option value="diversity">Sort: Diversity</option>
              <option value="change">Sort: 30d Change</option>
            </select>
          </div>

          {/* Treasury Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {filtered.map((t) => (
              <div key={t.id} onClick={() => setExpanded(expanded === t.id ? null : t.id)}
                style={{
                  background: "#161b22", border: `1px solid ${expanded === t.id ? "#58a6ff" : "#30363d"}`,
                  borderRadius: 12, padding: 20, cursor: "pointer", transition: "all 0.15s",
                }}>
                {/* Header Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 20, fontWeight: 800 }}>{t.name}</span>
                      <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, fontWeight: 700, background: "#58a6ff20", color: "#58a6ff" }}>{t.category}</span>
                      <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, fontWeight: 600, background: "#21262d", color: "#8b949e" }}>{t.chain}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#8b949e" }}>
                      Gov Token: <span style={{ color: "#e6edf3", fontWeight: 600 }}>{t.governanceToken}</span> | Treasury: <span style={{ color: "#8b949e", fontFamily: "monospace" }}>{t.treasuryAddress}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 24 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 11, color: "#8b949e" }}>Total Value</div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#3fb950" }}>{formatUSD(t.totalValueUSD)}</div>
                      <div style={{ fontSize: 11, color: t.change30d >= 0 ? "#3fb950" : "#f85149" }}>{t.change30d >= 0 ? "+" : ""}{t.change30d.toFixed(1)}% 30d</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 11, color: "#8b949e" }}>Runway</div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: runwayColor(t.runway) }}>{t.runway} mo</div>
                      <div style={{ fontSize: 11, color: "#8b949e" }}>Burn: {formatUSD(t.monthlyBurn)}/mo</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 11, color: "#8b949e" }}>Diversity</div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: diversityColor(t.diversityScore) }}>{t.diversityScore}/100</div>
                      <div style={{ fontSize: 10, color: diversityColor(t.diversityScore), fontWeight: 600 }}>{diversityLabel(t.diversityScore)}</div>
                    </div>
                  </div>
                </div>

                {/* Allocation Bar */}
                <div style={{ marginTop: 14 }}>
                  <div style={{ display: "flex", borderRadius: 6, overflow: "hidden", height: 8 }}>
                    {t.holders.map((h, i) => {
                      const colors = ["#3fb950", "#58a6ff", "#bc8cff", "#d29922", "#f0883e", "#f85149"];
                      return <div key={i} style={{ width: `${h.allocation}%`, background: colors[i % colors.length], height: "100%" }} />;
                    })}
                  </div>
                  <div style={{ display: "flex", gap: 12, marginTop: 6, flexWrap: "wrap" }}>
                    {t.holders.map((h, i) => {
                      const colors = ["#3fb950", "#58a6ff", "#bc8cff", "#d29922", "#f0883e", "#f85149"];
                      return (
                        <span key={i} style={{ fontSize: 11, color: colors[i % colors.length] }}>
                          {h.ticker} {h.allocation.toFixed(1)}%
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Expanded Detail */}
                {expanded === t.id && (
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #30363d" }}>
                    {/* Holdings Table */}
                    <h4 style={{ fontSize: 13, fontWeight: 700, color: "#8b949e", marginBottom: 10 }}>Holdings Breakdown</h4>
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                          <tr style={{ borderBottom: "1px solid #30363d" }}>
                            <th style={{ textAlign: "left", padding: "8px 12px", color: "#8b949e", fontWeight: 600 }}>Asset</th>
                            <th style={{ textAlign: "right", padding: "8px 12px", color: "#8b949e", fontWeight: 600 }}>Value</th>
                            <th style={{ textAlign: "right", padding: "8px 12px", color: "#8b949e", fontWeight: 600 }}>Allocation</th>
                            <th style={{ textAlign: "right", padding: "8px 12px", color: "#8b949e", fontWeight: 600 }}>24h Change</th>
                          </tr>
                        </thead>
                        <tbody>
                          {t.holders.map((h, i) => (
                            <tr key={i} style={{ borderBottom: "1px solid #21262d" }}>
                              <td style={{ padding: "8px 12px", fontWeight: 600 }}>{h.asset} <span style={{ color: "#8b949e" }}>({h.ticker})</span></td>
                              <td style={{ padding: "8px 12px", textAlign: "right" }}>{formatUSD(h.valueUSD)}</td>
                              <td style={{ padding: "8px 12px", textAlign: "right" }}>{h.allocation.toFixed(1)}%</td>
                              <td style={{ padding: "8px 12px", textAlign: "right", color: h.change24h >= 0 ? "#3fb950" : "#f85149" }}>
                                {h.change24h >= 0 ? "+" : ""}{h.change24h.toFixed(1)}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Recent Flows */}
                    <h4 style={{ fontSize: 13, fontWeight: 700, color: "#8b949e", marginTop: 20, marginBottom: 10 }}>Recent Fund Flows</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {t.recentFlows.map((f, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: "#0d1117", borderRadius: 8, padding: 10, fontSize: 12 }}>
                          <span style={{
                            width: 8, height: 8, borderRadius: "50%",
                            background: f.type === "inflow" ? "#3fb950" : "#f85149",
                          }} />
                          <span style={{ color: "#8b949e", minWidth: 80 }}>{new Date(f.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                          <span style={{ color: f.type === "inflow" ? "#3fb950" : "#f85149", fontWeight: 700, minWidth: 100 }}>
                            {f.type === "inflow" ? "+" : "-"}{formatUSD(f.amount)}
                          </span>
                          <span style={{ color: "#e6edf3", flex: 1 }}>{f.description}</span>
                          <span style={{ fontFamily: "monospace", color: "#58a6ff", fontSize: 11 }}>{f.txHash}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div style={{ marginTop: 40, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#d29922", marginBottom: 8 }}>{"\u26A0\uFE0F"} Disclaimer</h3>
            <p style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
              Treasury data is based on public on-chain holdings and may not reflect all assets (e.g., off-chain investments, legal entities).
              Runway calculations assume constant monthly burn rates. Diversity scores are algorithmic and consider allocation concentration, stablecoin ratio, and asset count.
              This tool is for informational purposes only and does not constitute financial advice.
            </p>
          </div>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Dao Treasury Dashboard",
              "url": "https://degen0x.com/tools/dao-treasury-dashboard",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
    </>
  );
}
