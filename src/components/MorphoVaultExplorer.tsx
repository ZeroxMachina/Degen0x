'use client';

import { useState, useMemo } from "react";

// ── Interfaces ─────────────────────────────────────────────────────────────
interface MorphoVault {
  name: string;
  curator: string;
  asset: string;
  strategy: string;
  apy: number;       // annual percentage yield (%)
  tvl: number;       // total value locked (USD)
  riskLevel: "Low" | "Medium" | "High";
  chains: string[];
}

// ── Mock Vault Data (representative of March 2026 landscape) ────────────────
const VAULTS: MorphoVault[] = [
  {
    name: "Steakhouse USDC",
    curator: "Steakhouse Financial",
    asset: "USDC",
    strategy: "RWA-backed & institutional lending markets",
    apy: 7.4,
    tvl: 1_420_000_000,
    riskLevel: "Low",
    chains: ["Ethereum"],
  },
  {
    name: "Gauntlet USDC Core",
    curator: "Gauntlet",
    asset: "USDC",
    strategy: "Risk-optimized allocation across blue-chip collateral",
    apy: 8.1,
    tvl: 980_000_000,
    riskLevel: "Low",
    chains: ["Ethereum", "Base"],
  },
  {
    name: "Re7 USDC",
    curator: "Re7 Capital",
    asset: "USDC",
    strategy: "DeFi-native yield — LRT & high-yield markets",
    apy: 11.2,
    tvl: 340_000_000,
    riskLevel: "Medium",
    chains: ["Ethereum"],
  },
  {
    name: "Gauntlet wstETH Core",
    curator: "Gauntlet",
    asset: "wstETH",
    strategy: "ETH liquid staking collateral lending",
    apy: 4.8,
    tvl: 760_000_000,
    riskLevel: "Low",
    chains: ["Ethereum"],
  },
  {
    name: "B.Protocol ETH",
    curator: "B.Protocol",
    asset: "WETH",
    strategy: "Backstop liquidation markets, MEV-protected",
    apy: 5.9,
    tvl: 290_000_000,
    riskLevel: "Medium",
    chains: ["Ethereum"],
  },
  {
    name: "Steakhouse WBTC",
    curator: "Steakhouse Financial",
    asset: "WBTC",
    strategy: "Bitcoin collateral with RWA loan exposure",
    apy: 3.2,
    tvl: 520_000_000,
    riskLevel: "Low",
    chains: ["Ethereum"],
  },
  {
    name: "Gauntlet Base USDC",
    curator: "Gauntlet",
    asset: "USDC",
    strategy: "Base-native DeFi markets, cbETH collateral",
    apy: 9.3,
    tvl: 210_000_000,
    riskLevel: "Medium",
    chains: ["Base"],
  },
  {
    name: "Re7 LRT wETH",
    curator: "Re7 Capital",
    asset: "WETH",
    strategy: "Liquid restaking token collateral (weETH, rsETH)",
    apy: 7.1,
    tvl: 165_000_000,
    riskLevel: "High",
    chains: ["Ethereum"],
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
function formatTVL(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(0)}M`;
  return `$${n.toLocaleString()}`;
}

const RISK_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  Low:    { bg: "#2ea04320", color: "#3fb950", border: "#2ea04340" },
  Medium: { bg: "#d2992220", color: "#d29922", border: "#d2992240" },
  High:   { bg: "#f8514920", color: "#f85149", border: "#f8514940" },
};

const ASSETS = ["All", "USDC", "WETH", "wstETH", "WBTC"];
const CURATORS = ["All", "Gauntlet", "Steakhouse Financial", "Re7 Capital", "B.Protocol"];
const SORT_OPTIONS = [
  { value: "apy", label: "Highest APY" },
  { value: "tvl", label: "Largest TVL" },
  { value: "risk", label: "Lowest Risk" },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function MorphoVaultExplorer() {
  const [assetFilter, setAssetFilter] = useState("All");
  const [curatorFilter, setCuratorFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"apy" | "tvl" | "risk">("apy");
  const [selectedVault, setSelectedVault] = useState<MorphoVault | null>(null);

  const filtered = useMemo(() => {
    let list = [...VAULTS];
    if (assetFilter !== "All") list = list.filter(v => v.asset === assetFilter);
    if (curatorFilter !== "All") list = list.filter(v => v.curator === curatorFilter);
    if (sortBy === "apy") list.sort((a, b) => b.apy - a.apy);
    else if (sortBy === "tvl") list.sort((a, b) => b.tvl - a.tvl);
    else if (sortBy === "risk") {
      const order = { Low: 0, Medium: 1, High: 2 };
      list.sort((a, b) => order[a.riskLevel] - order[b.riskLevel]);
    }
    return list;
  }, [assetFilter, curatorFilter, sortBy]);

  const totalTVL = useMemo(() => VAULTS.reduce((s, v) => s + v.tvl, 0), []);

  return (
    <div style={{ marginTop: 8 }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", margin: 0, marginBottom: 4 }}>
          🏦 MetaMorpho Vault Explorer
        </h3>
        <p style={{ color: "#8b949e", fontSize: 13, margin: 0 }}>
          Representative vault data · {formatTVL(totalTVL)} total TVL shown · APYs approximate as of March 2026
        </p>
      </div>

      {/* Filters */}
      <div style={{
        background: "#161b22",
        border: "1px solid #30363d",
        borderRadius: 10,
        padding: "14px 16px",
        marginBottom: 16,
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        alignItems: "center",
      }}>
        {/* Asset Filter */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#8b949e", fontSize: 12, fontWeight: 600 }}>ASSET</span>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {ASSETS.map(a => (
              <button
                key={a}
                onClick={() => setAssetFilter(a)}
                style={{
                  padding: "4px 10px",
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: assetFilter === a ? "#388bfd" : "#30363d",
                  background: assetFilter === a ? "#388bfd22" : "transparent",
                  color: assetFilter === a ? "#58a6ff" : "#8b949e",
                  transition: "all 0.15s",
                }}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#8b949e", fontSize: 12, fontWeight: 600 }}>SORT</span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as "apy" | "tvl" | "risk")}
            style={{
              background: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: 6,
              color: "#e6edf3",
              fontSize: 12,
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Vault Table */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #21262d" }}>
              {["Vault", "Asset", "Curator", "APY", "TVL", "Risk", "Chain"].map(h => (
                <th key={h} style={{ padding: "8px 12px", textAlign: "left", color: "#8b949e", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((vault, i) => {
              const risk = RISK_COLORS[vault.riskLevel];
              const isSelected = selectedVault?.name === vault.name;
              return (
                <tr
                  key={vault.name}
                  onClick={() => setSelectedVault(isSelected ? null : vault)}
                  style={{
                    borderBottom: "1px solid #21262d",
                    cursor: "pointer",
                    background: isSelected ? "#388bfd08" : i % 2 === 0 ? "transparent" : "#0d111708",
                    transition: "background 0.15s",
                  }}
                >
                  <td style={{ padding: "10px 12px", color: "#e6edf3", fontWeight: 600 }}>{vault.name}</td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{ background: "#21262d", color: "#79c0ff", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontFamily: "monospace", fontWeight: 700 }}>
                      {vault.asset}
                    </span>
                  </td>
                  <td style={{ padding: "10px 12px", color: "#8b949e" }}>{vault.curator}</td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{ color: "#3fb950", fontWeight: 700, fontSize: 14 }}>{vault.apy.toFixed(1)}%</span>
                  </td>
                  <td style={{ padding: "10px 12px", color: "#c9d1d9", fontWeight: 500 }}>{formatTVL(vault.tvl)}</td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{
                      background: risk.bg,
                      color: risk.color,
                      border: `1px solid ${risk.border}`,
                      padding: "2px 8px",
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 700,
                    }}>
                      {vault.riskLevel}
                    </span>
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                      {vault.chains.map(c => (
                        <span key={c} style={{ background: "#21262d", color: "#8b949e", padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 600 }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "32px 16px", color: "#8b949e" }}>
            No vaults match the current filters.
          </div>
        )}
      </div>

      {/* Expanded Detail Panel */}
      {selectedVault && (
        <div style={{
          marginTop: 16,
          background: "#161b22",
          border: "1px solid #388bfd40",
          borderRadius: 10,
          padding: "16px 20px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div>
              <h4 style={{ color: "#e6edf3", fontWeight: 700, fontSize: 16, margin: 0 }}>{selectedVault.name}</h4>
              <p style={{ color: "#8b949e", fontSize: 13, margin: "4px 0 0" }}>Curated by {selectedVault.curator}</p>
            </div>
            <button
              onClick={() => setSelectedVault(null)}
              style={{ background: "none", border: "none", color: "#8b949e", cursor: "pointer", fontSize: 18, lineHeight: 1 }}
            >
              ×
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 12 }}>
            {[
              { label: "APY", value: `${selectedVault.apy.toFixed(1)}%`, color: "#3fb950" },
              { label: "TVL", value: formatTVL(selectedVault.tvl), color: "#e6edf3" },
              { label: "Asset", value: selectedVault.asset, color: "#79c0ff" },
              { label: "Risk Level", value: selectedVault.riskLevel, color: RISK_COLORS[selectedVault.riskLevel].color },
            ].map(stat => (
              <div key={stat.label} style={{ background: "#0d1117", borderRadius: 8, padding: "10px 14px" }}>
                <p style={{ color: "#8b949e", fontSize: 11, fontWeight: 600, margin: 0, textTransform: "uppercase" }}>{stat.label}</p>
                <p style={{ color: stat.color, fontSize: 18, fontWeight: 700, margin: "4px 0 0" }}>{stat.value}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "#8b949e" }}>Strategy: </strong>{selectedVault.strategy}
          </p>
        </div>
      )}

      {/* Disclaimer */}
      <p style={{ color: "#6e7681", fontSize: 11, marginTop: 14, lineHeight: 1.5 }}>
        ⚠️ APYs are approximate and change based on market utilization. TVL figures are representative estimates for March 2026. Not financial advice — always verify current rates on{" "}
        <a href="https://app.morpho.org" target="_blank" rel="noopener noreferrer" style={{ color: "#58a6ff" }}>app.morpho.org</a> before depositing.
      </p>
    </div>
  );
}
