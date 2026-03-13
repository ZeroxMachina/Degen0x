"use client";

import { useState, useMemo } from "react";

interface ProtocolData {
  name: string;
  ticker: string;
  category: string;
  revenue24h: number;
  revenue7d: number;
  revenue30d: number;
  revenueChange7d: number;
  tvl: number;
  mcap: number;
  peRatio: number;
  chain: string;
  color: string;
}

const PROTOCOLS: ProtocolData[] = [
  { name: "Lido", ticker: "LDO", category: "Liquid Staking", revenue24h: 2847000, revenue7d: 19929000, revenue30d: 85410000, revenueChange7d: 12.4, tvl: 28500000000, mcap: 2100000000, peRatio: 24.6, chain: "Ethereum", color: "#00A3FF" },
  { name: "Aave", ticker: "AAVE", category: "Lending", revenue24h: 1923000, revenue7d: 13461000, revenue30d: 57690000, revenueChange7d: 8.7, tvl: 18200000000, mcap: 4200000000, peRatio: 72.8, chain: "Multi-chain", color: "#B6509E" },
  { name: "Uniswap", ticker: "UNI", category: "DEX", revenue24h: 3412000, revenue7d: 23884000, revenue30d: 102360000, revenueChange7d: -3.2, tvl: 8900000000, mcap: 7800000000, peRatio: 76.2, chain: "Multi-chain", color: "#FF007A" },
  { name: "MakerDAO", ticker: "MKR", category: "Lending", revenue24h: 1156000, revenue7d: 8092000, revenue30d: 34680000, revenueChange7d: 5.1, tvl: 12400000000, mcap: 2800000000, peRatio: 80.7, chain: "Ethereum", color: "#1AAB9B" },
  { name: "Jito", ticker: "JTO", category: "Liquid Staking", revenue24h: 987000, revenue7d: 6909000, revenue30d: 29610000, revenueChange7d: 22.8, tvl: 3200000000, mcap: 890000000, peRatio: 30.1, chain: "Solana", color: "#C13584" },
  { name: "Raydium", ticker: "RAY", category: "DEX", revenue24h: 2156000, revenue7d: 15092000, revenue30d: 64680000, revenueChange7d: 18.3, tvl: 2100000000, mcap: 1200000000, peRatio: 18.6, chain: "Solana", color: "#3E6FDB" },
  { name: "Jupiter", ticker: "JUP", category: "DEX Aggregator", revenue24h: 1845000, revenue7d: 12915000, revenue30d: 55350000, revenueChange7d: 15.6, tvl: 1800000000, mcap: 2400000000, peRatio: 43.4, chain: "Solana", color: "#C5F467" },
  { name: "Curve", ticker: "CRV", category: "DEX", revenue24h: 423000, revenue7d: 2961000, revenue30d: 12690000, revenueChange7d: -7.8, tvl: 4600000000, mcap: 580000000, peRatio: 45.7, chain: "Multi-chain", color: "#FF6B6B" },
  { name: "Convex", ticker: "CVX", category: "Yield", revenue24h: 312000, revenue7d: 2184000, revenue30d: 9360000, revenueChange7d: -4.2, tvl: 3100000000, mcap: 340000000, peRatio: 36.3, chain: "Ethereum", color: "#3A67D7" },
  { name: "GMX", ticker: "GMX", category: "Perps", revenue24h: 1234000, revenue7d: 8638000, revenue30d: 37020000, revenueChange7d: 9.4, tvl: 820000000, mcap: 490000000, peRatio: 13.2, chain: "Arbitrum", color: "#4FA3E0" },
  { name: "dYdX", ticker: "DYDX", category: "Perps", revenue24h: 876000, revenue7d: 6132000, revenue30d: 26280000, revenueChange7d: 6.1, tvl: 540000000, mcap: 1100000000, peRatio: 41.9, chain: "Cosmos", color: "#6966FF" },
  { name: "Hyperliquid", ticker: "HYPE", category: "Perps", revenue24h: 2340000, revenue7d: 16380000, revenue30d: 70200000, revenueChange7d: 31.2, tvl: 2800000000, mcap: 8400000000, peRatio: 119.7, chain: "Hyperliquid", color: "#00FF88" },
  { name: "Ethena", ticker: "ENA", category: "Stablecoin", revenue24h: 1567000, revenue7d: 10969000, revenue30d: 47010000, revenueChange7d: 14.9, tvl: 6200000000, mcap: 3100000000, peRatio: 65.9, chain: "Ethereum", color: "#7B61FF" },
  { name: "Pendle", ticker: "PENDLE", category: "Yield", revenue24h: 678000, revenue7d: 4746000, revenue30d: 20340000, revenueChange7d: 11.3, tvl: 4800000000, mcap: 720000000, peRatio: 35.4, chain: "Multi-chain", color: "#01C0AB" },
  { name: "Marinade", ticker: "MNDE", category: "Liquid Staking", revenue24h: 423000, revenue7d: 2961000, revenue30d: 12690000, revenueChange7d: 7.6, tvl: 1600000000, mcap: 120000000, peRatio: 9.4, chain: "Solana", color: "#FFFB00" },
  { name: "Orca", ticker: "ORCA", category: "DEX", revenue24h: 534000, revenue7d: 3738000, revenue30d: 16020000, revenueChange7d: 13.1, tvl: 680000000, mcap: 210000000, peRatio: 13.1, chain: "Solana", color: "#FFD700" },
];

const CATEGORIES = ["All", "DEX", "Lending", "Liquid Staking", "Perps", "Yield", "DEX Aggregator", "Stablecoin"];
const CHAINS = ["All", "Ethereum", "Solana", "Multi-chain", "Arbitrum", "Cosmos", "Hyperliquid"];
const SORT_OPTIONS = [
  { key: "revenue24h", label: "24h Revenue" },
  { key: "revenue7d", label: "7d Revenue" },
  { key: "revenue30d", label: "30d Revenue" },
  { key: "tvl", label: "TVL" },
  { key: "peRatio", label: "P/E Ratio" },
  { key: "revenueChange7d", label: "7d Change %" },
] as const;

function formatCurrency(n: number, compact = false): string {
  if (compact) {
    if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`;
    if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
    if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`;
  }
  return `$${n.toLocaleString()}`;
}

function ChangeIndicator({ value }: { value: number }) {
  const isPositive = value >= 0;
  return (
    <span style={{ color: isPositive ? "#3fb950" : "#f85149", fontWeight: 600 }}>
      {isPositive ? "▲" : "▼"} {Math.abs(value).toFixed(1)}%
    </span>
  );
}

function MiniBar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ width: "80px", height: "8px", background: "#21262d", borderRadius: "4px", overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: "4px", transition: "width 0.5s ease" }} />
    </div>
  );
}

export default function ProtocolRevenuePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedChain, setSelectedChain] = useState("All");
  const [sortBy, setSortBy] = useState<string>("revenue24h");
  const [sortDir, setSortDir] = useState<"desc" | "asc">("desc");
  const [view, setView] = useState<"table" | "cards">("table");
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let data = [...PROTOCOLS];
    if (selectedCategory !== "All") data = data.filter((p) => p.category === selectedCategory);
    if (selectedChain !== "All") data = data.filter((p) => p.chain === selectedChain);
    data.sort((a, b) => {
      const aVal = a[sortBy as keyof ProtocolData] as number;
      const bVal = b[sortBy as keyof ProtocolData] as number;
      return sortDir === "desc" ? bVal - aVal : aVal - bVal;
    });
    return data;
  }, [selectedCategory, selectedChain, sortBy, sortDir]);

  const totals = useMemo(() => ({
    revenue24h: filtered.reduce((s, p) => s + p.revenue24h, 0),
    revenue7d: filtered.reduce((s, p) => s + p.revenue7d, 0),
    revenue30d: filtered.reduce((s, p) => s + p.revenue30d, 0),
    tvl: filtered.reduce((s, p) => s + p.tvl, 0),
  }), [filtered]);

  const maxRevenue = Math.max(...filtered.map((p) => p.revenue24h));

  const handleSort = (key: string) => {
    if (sortBy === key) setSortDir(sortDir === "desc" ? "asc" : "desc");
    else { setSortBy(key); setSortDir("desc"); }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #161b22 0%, #1a1e2e 100%)", borderBottom: "1px solid #30363d", padding: "28px 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <span style={{ fontSize: "28px" }}>💰</span>
            <h1 style={{ fontSize: "26px", fontWeight: 800, background: "linear-gradient(135deg, #58a6ff, #bc8cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Protocol Revenue Dashboard
            </h1>
            <span style={{ background: "#3fb95020", color: "#3fb950", border: "1px solid #3fb95040", borderRadius: "6px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>LIVE</span>
          </div>
          <p style={{ color: "#8b949e", fontSize: "14px", maxWidth: "600px" }}>
            Compare on-chain revenue across top DeFi protocols. Discover the most profitable protocols by actual earnings, not just hype.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "20px 24px" }}>
        {/* Summary Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "20px" }}>
          {[
            { label: "Total 24h Revenue", value: formatCurrency(totals.revenue24h, true), color: "#58a6ff" },
            { label: "Total 7d Revenue", value: formatCurrency(totals.revenue7d, true), color: "#bc8cff" },
            { label: "Total 30d Revenue", value: formatCurrency(totals.revenue30d, true), color: "#3fb950" },
            { label: "Total TVL", value: formatCurrency(totals.tvl, true), color: "#d29922" },
            { label: "Protocols Tracked", value: filtered.length.toString(), color: "#f0883e" },
          ].map((card) => (
            <div key={card.label} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: "12px", padding: "16px", borderLeft: `3px solid ${card.color}` }}>
              <div style={{ fontSize: "11px", color: "#8b949e", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>{card.label}</div>
              <div style={{ fontSize: "22px", fontWeight: 800, color: card.color }}>{card.value}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", marginBottom: "16px" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} style={{ padding: "6px 14px", borderRadius: "8px", border: "1px solid", borderColor: selectedCategory === cat ? "#58a6ff" : "#30363d", background: selectedCategory === cat ? "#58a6ff20" : "#161b22", color: selectedCategory === cat ? "#58a6ff" : "#8b949e", fontSize: "12px", fontWeight: 600, cursor: "pointer", transition: "all 0.15s" }}>
                {cat}
              </button>
            ))}
          </div>
          <div style={{ height: "24px", width: "1px", background: "#30363d" }} />
          <select value={selectedChain} onChange={(e) => setSelectedChain(e.target.value)} style={{ padding: "6px 12px", borderRadius: "8px", border: "1px solid #30363d", background: "#161b22", color: "#e6edf3", fontSize: "12px", cursor: "pointer" }}>
            {CHAINS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <div style={{ marginLeft: "auto", display: "flex", gap: "4px" }}>
            {(["table", "cards"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)} style={{ padding: "6px 14px", borderRadius: "8px", border: "1px solid", borderColor: view === v ? "#bc8cff" : "#30363d", background: view === v ? "#bc8cff20" : "#161b22", color: view === v ? "#bc8cff" : "#8b949e", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>
                {v === "table" ? "📊 Table" : "🃏 Cards"}
              </button>
            ))}
          </div>
        </div>

        {/* Table View */}
        {view === "table" ? (
          <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #30363d" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "#161b22" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>#</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 700, fontSize: "11px", textTransform: "uppercase" }}>Protocol</th>
                  {SORT_OPTIONS.map((opt) => (
                    <th key={opt.key} onClick={() => handleSort(opt.key)} style={{ padding: "12px 16px", textAlign: "right", color: sortBy === opt.key ? "#58a6ff" : "#8b949e", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap", userSelect: "none" }}>
                      {opt.label} {sortBy === opt.key ? (sortDir === "desc" ? "↓" : "↑") : ""}
                    </th>
                  ))}
                  <th style={{ padding: "12px 16px", textAlign: "right", color: "#8b949e", fontWeight: 700, fontSize: "11px", textTransform: "uppercase" }}>Share</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr key={p.ticker} onMouseEnter={() => setHoveredRow(i)} onMouseLeave={() => setHoveredRow(null)} style={{ background: hoveredRow === i ? "#1c2333" : i % 2 === 0 ? "#0d1117" : "#161b2210", borderBottom: "1px solid #21262d", transition: "background 0.15s" }}>
                    <td style={{ padding: "12px 16px", color: "#8b949e", fontWeight: 600 }}>{i + 1}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${p.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 800, color: p.color, border: `1px solid ${p.color}40` }}>
                          {p.ticker.slice(0, 2)}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, color: "#e6edf3" }}>{p.name}</div>
                          <div style={{ fontSize: "11px", color: "#8b949e" }}>{p.category} · {p.chain}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "12px 16px", textAlign: "right" }}>
                      <div style={{ fontWeight: 700 }}>{formatCurrency(p.revenue24h, true)}</div>
                      <MiniBar value={p.revenue24h} max={maxRevenue} color={p.color} />
                    </td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: 600 }}>{formatCurrency(p.revenue7d, true)}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: 600 }}>{formatCurrency(p.revenue30d, true)}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: 600 }}>{formatCurrency(p.tvl, true)}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: p.peRatio < 30 ? "#3fb950" : p.peRatio < 60 ? "#d29922" : "#f85149" }}>{p.peRatio.toFixed(1)}x</td>
                    <td style={{ padding: "12px 16px", textAlign: "right" }}><ChangeIndicator value={p.revenueChange7d} /></td>
                    <td style={{ padding: "12px 16px", textAlign: "right", color: "#8b949e" }}>{((p.revenue24h / totals.revenue24h) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Card View */
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
            {filtered.map((p, i) => (
              <div key={p.ticker} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: "12px", padding: "20px", borderTop: `3px solid ${p.color}`, transition: "transform 0.15s, box-shadow 0.15s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${p.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 800, color: p.color, border: `1px solid ${p.color}40` }}>
                      {p.ticker.slice(0, 2)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "16px" }}>{p.name}</div>
                      <div style={{ fontSize: "11px", color: "#8b949e" }}>{p.ticker} · {p.chain}</div>
                    </div>
                  </div>
                  <span style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}40`, borderRadius: "6px", padding: "2px 8px", fontSize: "10px", fontWeight: 700 }}>{p.category}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div><div style={{ fontSize: "10px", color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: "2px" }}>24h Revenue</div><div style={{ fontSize: "18px", fontWeight: 800, color: p.color }}>{formatCurrency(p.revenue24h, true)}</div></div>
                  <div><div style={{ fontSize: "10px", color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: "2px" }}>7d Change</div><div style={{ fontSize: "18px", fontWeight: 800 }}><ChangeIndicator value={p.revenueChange7d} /></div></div>
                  <div><div style={{ fontSize: "10px", color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: "2px" }}>TVL</div><div style={{ fontSize: "14px", fontWeight: 700 }}>{formatCurrency(p.tvl, true)}</div></div>
                  <div><div style={{ fontSize: "10px", color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: "2px" }}>P/E Ratio</div><div style={{ fontSize: "14px", fontWeight: 700, color: p.peRatio < 30 ? "#3fb950" : p.peRatio < 60 ? "#d29922" : "#f85149" }}>{p.peRatio.toFixed(1)}x</div></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Methodology */}
        <div style={{ marginTop: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: "12px", padding: "20px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "8px", color: "#8b949e" }}>📋 Methodology</h3>
          <p style={{ fontSize: "12px", color: "#6e7681", lineHeight: 1.7 }}>
            Revenue data is sourced from on-chain transactions and protocol fee contracts. P/E Ratio = Market Cap / Annualized Revenue.
            TVL sourced from DeFiLlama. Revenue includes protocol fees only (not LP fees paid to providers). Updated every 15 minutes.
            Data shown is simulated for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
