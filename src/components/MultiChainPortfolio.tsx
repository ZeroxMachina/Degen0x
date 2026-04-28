"use client";

import { useState, useMemo } from "react";

/* ─── Types ────────────────────────────────────────────────── */
interface ChainAsset {
  symbol: string;
  name: string;
  chain: string;
  chainColor: string;
  balance: number;
  price: number;
  value: number;
  change24h: number;
  type: "token" | "nft" | "lp" | "staked";
  protocol?: string;
  apy?: number;
}

interface ChainSummary {
  chain: string;
  color: string;
  icon: string;
  totalValue: number;
  assets: number;
  change24h: number;
}

/* ─── Mock Data ────────────────────────────────────────────── */
const PORTFOLIO_ASSETS: ChainAsset[] = [
  // Ethereum
  { symbol: "ETH", name: "Ethereum", chain: "Ethereum", chainColor: "#627eea", balance: 4.28, price: 3842.50, value: 16445.90, change24h: 2.1, type: "token" },
  { symbol: "USDC", name: "USD Coin", chain: "Ethereum", chainColor: "#627eea", balance: 8500, price: 1.00, value: 8500, change24h: 0.01, type: "token" },
  { symbol: "AAVE", name: "Aave", chain: "Ethereum", chainColor: "#627eea", balance: 12.5, price: 284.30, value: 3553.75, change24h: -1.2, type: "token" },
  { symbol: "stETH", name: "Lido Staked ETH", chain: "Ethereum", chainColor: "#627eea", balance: 2.1, price: 3845.00, value: 8074.50, change24h: 2.15, type: "staked", protocol: "Lido", apy: 3.4 },
  { symbol: "UNI-V3", name: "ETH/USDC LP", chain: "Ethereum", chainColor: "#627eea", balance: 1, price: 5200, value: 5200, change24h: 1.8, type: "lp", protocol: "Uniswap V3", apy: 18.7 },
  // Solana
  { symbol: "SOL", name: "Solana", chain: "Solana", chainColor: "#9945FF", balance: 85.4, price: 187.20, value: 15989.28, change24h: 4.3, type: "token" },
  { symbol: "JUP", name: "Jupiter", chain: "Solana", chainColor: "#9945FF", balance: 2400, price: 1.42, value: 3408, change24h: 6.8, type: "token" },
  { symbol: "mSOL", name: "Marinade SOL", chain: "Solana", chainColor: "#9945FF", balance: 30, price: 192.10, value: 5763, change24h: 4.5, type: "staked", protocol: "Marinade", apy: 6.8 },
  { symbol: "RAY-LP", name: "SOL/USDC LP", chain: "Solana", chainColor: "#9945FF", balance: 1, price: 3200, value: 3200, change24h: 3.1, type: "lp", protocol: "Raydium", apy: 24.2 },
  // Arbitrum
  { symbol: "ETH", name: "Ethereum", chain: "Arbitrum", chainColor: "#28A0F0", balance: 1.5, price: 3842.50, value: 5763.75, change24h: 2.1, type: "token" },
  { symbol: "ARB", name: "Arbitrum", chain: "Arbitrum", chainColor: "#28A0F0", balance: 5000, price: 1.18, value: 5900, change24h: 3.4, type: "token" },
  { symbol: "GMX", name: "GMX", chain: "Arbitrum", chainColor: "#28A0F0", balance: 45, price: 48.60, value: 2187, change24h: -0.8, type: "token" },
  { symbol: "GLP", name: "GMX LP", chain: "Arbitrum", chainColor: "#28A0F0", balance: 1, price: 4100, value: 4100, change24h: 1.2, type: "lp", protocol: "GMX", apy: 15.3 },
  // Optimism
  { symbol: "OP", name: "Optimism", chain: "Optimism", chainColor: "#FF0420", balance: 3200, price: 2.84, value: 9088, change24h: 5.2, type: "token" },
  { symbol: "VELO-LP", name: "OP/USDC LP", chain: "Optimism", chainColor: "#FF0420", balance: 1, price: 2800, value: 2800, change24h: 2.4, type: "lp", protocol: "Velodrome", apy: 32.1 },
  // Base
  { symbol: "ETH", name: "Ethereum", chain: "Base", chainColor: "#0052FF", balance: 0.8, price: 3842.50, value: 3074, change24h: 2.1, type: "token" },
  { symbol: "AERO", name: "Aerodrome", chain: "Base", chainColor: "#0052FF", balance: 8000, price: 0.92, value: 7360, change24h: 8.4, type: "token" },
];

const CHAINS = [
  { chain: "All Chains", color: "#e6edf3", icon: "🌐" },
  { chain: "Ethereum", color: "#627eea", icon: "⟠" },
  { chain: "Solana", color: "#9945FF", icon: "◎" },
  { chain: "Arbitrum", color: "#28A0F0", icon: "🔷" },
  { chain: "Optimism", color: "#FF0420", icon: "🔴" },
  { chain: "Base", color: "#0052FF", icon: "🔵" },
];

type SortKey = "value" | "change24h" | "apy";
type FilterType = "all" | "token" | "staked" | "lp" | "nft";

/* ================================================================= */
export default function MultiChainPortfolio() {
  const [selectedChain, setSelectedChain] = useState("All Chains");
  const [sortBy, setSortBy] = useState<SortKey>("value");
  const [filterType, setFilterType] = useState<FilterType>("all");
  const [sortDir, setSortDir] = useState<"desc" | "asc">("desc");

  const filteredAssets = useMemo(() => {
    let assets = [...PORTFOLIO_ASSETS];
    if (selectedChain !== "All Chains") assets = assets.filter((a) => a.chain === selectedChain);
    if (filterType !== "all") assets = assets.filter((a) => a.type === filterType);
    assets.sort((a, b) => {
      const av = sortBy === "apy" ? (a.apy || 0) : a[sortBy];
      const bv = sortBy === "apy" ? (b.apy || 0) : b[sortBy];
      return sortDir === "desc" ? bv - av : av - bv;
    });
    return assets;
  }, [selectedChain, sortBy, filterType, sortDir]);

  const totalValue = PORTFOLIO_ASSETS.reduce((sum, a) => sum + a.value, 0);
  const totalChange = PORTFOLIO_ASSETS.reduce((sum, a) => sum + (a.value * a.change24h) / 100, 0);
  const totalChangePercent = (totalChange / (totalValue - totalChange)) * 100;

  const chainSummaries: ChainSummary[] = useMemo(() => {
    const map = new Map<string, ChainSummary>();
    PORTFOLIO_ASSETS.forEach((a) => {
      const existing = map.get(a.chain);
      if (existing) {
        existing.totalValue += a.value;
        existing.assets += 1;
        existing.change24h = (existing.change24h * (existing.assets - 1) + a.change24h) / existing.assets;
      } else {
        const c = CHAINS.find((ch) => ch.chain === a.chain);
        map.set(a.chain, { chain: a.chain, color: c?.color || "#8b949e", icon: c?.icon || "•", totalValue: a.value, assets: 1, change24h: a.change24h });
      }
    });
    return Array.from(map.values()).sort((a, b) => b.totalValue - a.totalValue);
  }, []);

  const toggleSort = (key: SortKey) => {
    if (sortBy === key) setSortDir(sortDir === "desc" ? "asc" : "desc");
    else { setSortBy(key); setSortDir("desc"); }
  };

  const s = {
    page: { background: "#0d1117", minHeight: "100vh", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" } as React.CSSProperties,
    container: { maxWidth: 1100, margin: "0 auto", padding: "24px 16px" } as React.CSSProperties,
    card: { background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 } as React.CSSProperties,
    chip: (active: boolean, color: string) => ({
      padding: "6px 14px", borderRadius: 8, border: `1px solid ${active ? color + "80" : "#30363d"}`,
      background: active ? color + "20" : "transparent", color: active ? color : "#8b949e",
      fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
    }) as React.CSSProperties,
  };

  return (
    <div style={s.page}>
      <div style={s.container}>
        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, background: "linear-gradient(135deg, #627eea, #9945FF, #28A0F0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Multi-Chain Portfolio
          </h1>
          <p style={{ fontSize: 14, color: "#8b949e", marginTop: 4 }}>Aggregate view across Ethereum, Solana, Arbitrum, Optimism & Base</p>
        </div>

        {/* Total Value Card */}
        <div style={{ ...s.card, marginBottom: 16, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 600, textTransform: "uppercase" }}>Total Portfolio Value</div>
            <div style={{ fontSize: 36, fontWeight: 900, marginTop: 4 }}>${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
            <div style={{ fontSize: 14, color: totalChangePercent >= 0 ? "#3fb950" : "#f85149", marginTop: 4 }}>
              {totalChangePercent >= 0 ? "▲" : "▼"} ${Math.abs(totalChange).toLocaleString(undefined, { minimumFractionDigits: 2 })} ({totalChangePercent.toFixed(2)}%) 24h
            </div>
          </div>
          {/* Mini donut chart visual */}
          <div style={{ flex: 1, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {chainSummaries.map((cs) => {
              const pct = ((cs.totalValue / totalValue) * 100).toFixed(1);
              return (
                <div key={cs.chain} style={{ padding: "8px 14px", background: `${cs.color}10`, border: `1px solid ${cs.color}30`, borderRadius: 10, minWidth: 120 }}>
                  <div style={{ fontSize: 11, color: cs.color, fontWeight: 700 }}>{cs.icon} {cs.chain}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, marginTop: 2 }}>${(cs.totalValue / 1000).toFixed(1)}k</div>
                  <div style={{ fontSize: 11, color: "#8b949e" }}>{pct}% • {cs.assets} assets</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chain Filter */}
        <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
          {CHAINS.map((ch) => (
            <button key={ch.chain} onClick={() => setSelectedChain(ch.chain)} style={s.chip(selectedChain === ch.chain, ch.color)}>
              <span>{ch.icon}</span> {ch.chain}
            </button>
          ))}
        </div>

        {/* Type Filter */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
          {([
            ["all", "All Types"],
            ["token", "Tokens"],
            ["staked", "Staked"],
            ["lp", "LP Positions"],
          ] as [FilterType, string][]).map(([key, label]) => (
            <button key={key} onClick={() => setFilterType(key)} style={{
              padding: "6px 14px", borderRadius: 8, border: `1px solid ${filterType === key ? "#6366f180" : "#30363d"}`,
              background: filterType === key ? "#6366f120" : "transparent", color: filterType === key ? "#818cf8" : "#8b949e",
              fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>
              {label}
            </button>
          ))}
        </div>

        {/* Asset Table */}
        <div style={s.card}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Asset", "Chain", "Type", "Balance", "Price"].map((h) => (
                  <th key={h} style={{ textAlign: "left", fontSize: 11, color: "#8b949e", fontWeight: 600, textTransform: "uppercase", padding: "8px 10px", borderBottom: "1px solid #30363d" }}>{h}</th>
                ))}
                {(["value", "change24h", "apy"] as SortKey[]).map((key) => (
                  <th key={key} onClick={() => toggleSort(key)} style={{
                    textAlign: "right", fontSize: 11, color: sortBy === key ? "#818cf8" : "#8b949e",
                    fontWeight: 600, textTransform: "uppercase", padding: "8px 10px", borderBottom: "1px solid #30363d", cursor: "pointer",
                  }}>
                    {key === "change24h" ? "24h %" : key === "apy" ? "APY" : "Value"} {sortBy === key ? (sortDir === "desc" ? "↓" : "↑") : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredAssets.map((asset, i) => (
                <tr key={`${asset.chain}-${asset.symbol}-${i}`} style={{ borderBottom: "1px solid #30363d" }}>
                  <td style={{ padding: "10px", fontSize: 13 }}>
                    <div style={{ fontWeight: 700 }}>{asset.symbol}</div>
                    <div style={{ fontSize: 11, color: "#8b949e" }}>{asset.name}</div>
                  </td>
                  <td style={{ padding: "10px" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: asset.chainColor, background: `${asset.chainColor}20`, padding: "2px 8px", borderRadius: 4 }}>{asset.chain}</span>
                  </td>
                  <td style={{ padding: "10px" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#8b949e", textTransform: "uppercase" }}>
                      {asset.type}{asset.protocol ? ` • ${asset.protocol}` : ""}
                    </span>
                  </td>
                  <td style={{ padding: "10px", fontSize: 13, fontFamily: "monospace" }}>{asset.balance.toLocaleString()}</td>
                  <td style={{ padding: "10px", fontSize: 13, fontFamily: "monospace" }}>${asset.price.toLocaleString()}</td>
                  <td style={{ padding: "10px", fontSize: 13, fontWeight: 700, fontFamily: "monospace", textAlign: "right" }}>${asset.value.toLocaleString()}</td>
                  <td style={{ padding: "10px", fontSize: 13, fontWeight: 600, textAlign: "right", color: asset.change24h >= 0 ? "#3fb950" : "#f85149" }}>
                    {asset.change24h >= 0 ? "+" : ""}{asset.change24h.toFixed(1)}%
                  </td>
                  <td style={{ padding: "10px", fontSize: 13, fontWeight: 600, textAlign: "right", color: asset.apy ? "#d29922" : "#30363d" }}>
                    {asset.apy ? `${asset.apy}%` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: "center", padding: "12px 0", fontSize: 12, color: "#8b949e" }}>
            Showing {filteredAssets.length} of {PORTFOLIO_ASSETS.length} assets
          </div>
        </div>
      </div>
    </div>
  );
}
