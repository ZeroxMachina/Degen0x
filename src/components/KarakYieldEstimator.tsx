'use client';

import { useState, useMemo } from "react";

// ── Interfaces ────────────────────────────────────────────────────────────────
interface AssetOption {
  id: string;
  label: string;
  symbol: string;
  minApy: number;
  maxApy: number;
  risk: "low" | "medium" | "high";
  chains: string[];
}

// ── Constants ─────────────────────────────────────────────────────────────────
const ASSETS: AssetOption[] = [
  { id: "steth", label: "stETH (Lido)", symbol: "stETH", minApy: 5.5, maxApy: 9.0, risk: "medium", chains: ["Ethereum"] },
  { id: "weeth", label: "weETH (ether.fi)", symbol: "weETH", minApy: 6.0, maxApy: 10.5, risk: "medium", chains: ["Ethereum", "Arbitrum"] },
  { id: "wbtc", label: "WBTC (Bitcoin)", symbol: "WBTC", minApy: 3.5, maxApy: 7.5, risk: "medium", chains: ["Ethereum", "Arbitrum"] },
  { id: "usdc", label: "USDC (Stablecoin)", symbol: "USDC", minApy: 4.0, maxApy: 8.0, risk: "low", chains: ["Ethereum", "Arbitrum", "Optimism", "BNB Chain"] },
  { id: "usde", label: "USDe (Ethena)", symbol: "USDe", minApy: 6.5, maxApy: 12.0, risk: "medium", chains: ["Ethereum"] },
  { id: "univ3", label: "Uniswap V3 LP", symbol: "UNI-LP", minApy: 8.0, maxApy: 18.0, risk: "high", chains: ["Ethereum"] },
  { id: "pendlept", label: "Pendle PT Tokens", symbol: "PT-*", minApy: 7.0, maxApy: 14.0, risk: "high", chains: ["Ethereum", "Arbitrum"] },
];

const RISK_COLORS: Record<string, string> = {
  low: "#3fb950",
  medium: "#d29922",
  high: "#f85149",
};

const RISK_LABELS: Record<string, string> = {
  low: "Low Risk",
  medium: "Medium Risk",
  high: "High Risk",
};

function formatUSD(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function KarakYieldEstimator() {
  const [selectedAsset, setSelectedAsset] = useState<string>("steth");
  const [amount, setAmount] = useState<string>("10000");

  const asset = useMemo(() => ASSETS.find((a) => a.id === selectedAsset) ?? ASSETS[0], [selectedAsset]);
  const principal = useMemo(() => {
    const n = parseFloat(amount.replace(/,/g, ""));
    return isNaN(n) || n < 0 ? 0 : n;
  }, [amount]);

  const minYearlyUSD = useMemo(() => (principal * asset.minApy) / 100, [principal, asset]);
  const maxYearlyUSD = useMemo(() => (principal * asset.maxApy) / 100, [principal, asset]);
  const minMonthlyUSD = useMemo(() => minYearlyUSD / 12, [minYearlyUSD]);
  const maxMonthlyUSD = useMemo(() => maxYearlyUSD / 12, [maxYearlyUSD]);

  const S = {
    bg: "#0d1117",
    card: "#161b22",
    border: "#30363d",
    text: "#e6edf3",
    text2: "#8b949e",
    primary: "#58a6ff",
    green: "#3fb950",
  };

  return (
    <div
      role="region"
      aria-label="Karak restaking yield estimator"
      style={{
        background: S.card,
        border: `1px solid ${S.border}`,
        borderRadius: 16,
        padding: "28px 28px 24px",
        margin: "32px 0",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <span style={{ fontSize: 20 }}>🔒</span>
        <div>
          <h3 style={{ color: S.text, fontSize: "1rem", fontWeight: 800, margin: 0 }}>
            Karak Restaking Yield Estimator
          </h3>
          <p style={{ color: S.text2, fontSize: 12, margin: "3px 0 0" }}>
            Estimated APY ranges based on March 2026 data — actual yields vary by operator and DSS
          </p>
        </div>
      </div>

      {/* Inputs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
        <div>
          <label style={{ display: "block", color: S.text2, fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
            ASSET TO RESTAKE
          </label>
          <select
            value={selectedAsset}
            onChange={(e) => setSelectedAsset(e.target.value)}
            aria-label="Select asset to restake on Karak"
            style={{
              width: "100%",
              background: S.bg,
              border: `1px solid ${S.border}`,
              borderRadius: 8,
              padding: "10px 12px",
              color: S.text,
              fontSize: 14,
              outline: "none",
              cursor: "pointer",
              appearance: "none",
            }}
          >
            {ASSETS.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ display: "block", color: S.text2, fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
            AMOUNT (USD)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="1000"
            placeholder="10000"
            aria-label="Amount in USD to restake"
            style={{
              width: "100%",
              background: S.bg,
              border: `1px solid ${S.border}`,
              borderRadius: 8,
              padding: "10px 12px",
              color: S.text,
              fontSize: 14,
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      {/* Asset Info Row */}
      <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
        <span style={{
          fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20,
          background: `${RISK_COLORS[asset.risk]}20`,
          color: RISK_COLORS[asset.risk],
          border: `1px solid ${RISK_COLORS[asset.risk]}40`,
        }}>
          {RISK_LABELS[asset.risk]}
        </span>
        {asset.chains.map((c) => (
          <span key={c} style={{
            fontSize: 12, padding: "4px 10px", borderRadius: 20,
            background: `${S.primary}15`, color: S.primary,
            border: `1px solid ${S.primary}30`,
          }}>
            {c}
          </span>
        ))}
      </div>

      {/* Results */}
      {principal > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
          {[
            { label: "Est. APY Range", value: `${asset.minApy}% – ${asset.maxApy}%`, sub: "restaking on Karak", color: S.primary },
            { label: "Yearly Earnings", value: `${formatUSD(minYearlyUSD)} – ${formatUSD(maxYearlyUSD)}`, sub: "estimated annual yield", color: S.green },
            { label: "Monthly Earnings", value: `${formatUSD(minMonthlyUSD)} – ${formatUSD(maxMonthlyUSD)}`, sub: "estimated monthly yield", color: S.green },
          ].map(({ label, value, sub, color }) => (
            <div key={label} style={{
              background: S.bg,
              border: `1px solid ${S.border}`,
              borderRadius: 10,
              padding: "14px 16px",
            }}>
              <p style={{ color: S.text2, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                {label}
              </p>
              <p style={{ color, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{value}</p>
              <p style={{ color: S.text2, fontSize: 12 }}>{sub}</p>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "20px 0", color: S.text2, fontSize: 14 }}>
          Enter an amount above to see estimated yield
        </div>
      )}

      {/* Disclaimer */}
      <p style={{ color: S.text2, fontSize: 12, marginTop: 16, lineHeight: 1.6 }}>
        ⚠️ Estimates are based on observed Karak DSS reward ranges as of March 2026 and do not account for slashing risk,
        operator commission, or changes in DSS reward schedules. Not financial advice.
      </p>
    </div>
  );
}
