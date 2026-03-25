'use client';

import { useState, useMemo } from "react";

// ── Constants ─────────────────────────────────────────────────────────────────
const PROTOCOLS = [
  { id: "fluid", label: "Fluid DEX", multiplier: 39, color: "#3fb950", description: "Debt-as-liquidity architecture" },
  { id: "univ3", label: "Uniswap V3", multiplier: 8, color: "#ff007a", description: "Concentrated liquidity" },
  { id: "curve", label: "Curve / Balancer", multiplier: 3, color: "#3b82f6", description: "Stable / weighted AMM" },
  { id: "univ2", label: "Uniswap V2 Style", multiplier: 1, color: "#8b949e", description: "Standard x*y=k AMM" },
];

function formatNumber(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function FluidCapitalEfficiencyCalc() {
  const [tvlInput, setTvlInput] = useState<string>("1000000");

  const tvl = useMemo(() => {
    const n = parseFloat(tvlInput.replace(/[^0-9.]/g, ""));
    return isNaN(n) || n <= 0 ? 0 : n;
  }, [tvlInput]);

  const maxLiquidity = useMemo(() => tvl * 39, [tvl]);

  const S = {
    bg: "#0d1117",
    card: "#161b22",
    border: "#30363d",
    text: "#e6edf3",
    text2: "#8b949e",
    primary: "#3fb950",
  };

  return (
    <div
      role="region"
      aria-label="Fluid capital efficiency calculator"
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
        <span style={{ fontSize: 20 }}>📊</span>
        <div>
          <h3 style={{ color: S.text, fontSize: "1rem", fontWeight: 800, margin: 0 }}>
            Capital Efficiency Calculator
          </h3>
          <p style={{ color: S.text2, fontSize: 12, margin: "3px 0 0" }}>
            See how much DEX liquidity each protocol generates from the same TVL
          </p>
        </div>
      </div>

      {/* Input */}
      <div style={{ marginBottom: 28 }}>
        <label style={{ display: "block", color: S.text2, fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
          TOTAL VALUE LOCKED (TVL)
        </label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <input
            type="number"
            value={tvlInput}
            onChange={(e) => setTvlInput(e.target.value)}
            min="0"
            step="100000"
            placeholder="1000000"
            aria-label="Total value locked in USD"
            style={{
              flex: "1",
              minWidth: 160,
              background: S.bg,
              border: `1px solid ${S.border}`,
              borderRadius: 8,
              padding: "10px 12px",
              color: S.text,
              fontSize: 14,
              outline: "none",
            }}
          />
          {[100_000, 1_000_000, 10_000_000, 100_000_000].map((v) => (
            <button
              key={v}
              onClick={() => setTvlInput(String(v))}
              aria-label={`Set TVL to ${formatNumber(v)}`}
              aria-pressed={tvl === v}
              style={{
                background: tvl === v ? `${S.primary}20` : S.bg,
                border: `1px solid ${tvl === v ? S.primary : S.border}`,
                borderRadius: 8,
                padding: "10px 14px",
                minHeight: 44,
                color: tvl === v ? S.primary : S.text2,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {formatNumber(v)}
            </button>
          ))}
        </div>
      </div>

      {/* Bars */}
      {tvl > 0 && (
        <div style={{ marginBottom: 24 }}>
          {PROTOCOLS.map(({ id, label, multiplier, color, description }) => {
            const liquidity = tvl * multiplier;
            const pct = (liquidity / maxLiquidity) * 100;
            return (
              <div key={id} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <div>
                    <span style={{ color: S.text, fontSize: 14, fontWeight: 700 }}>{label}</span>
                    <span style={{ color: S.text2, fontSize: 12, marginLeft: 8 }}>{description}</span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ color, fontSize: 14, fontWeight: 800 }}>{formatNumber(liquidity)}</span>
                    <span style={{ color: S.text2, fontSize: 12, marginLeft: 6 }}>({multiplier}x)</span>
                  </div>
                </div>
                <div style={{ background: `${S.border}60`, borderRadius: 6, height: 10, overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${pct}%`,
                      height: "100%",
                      background: color,
                      borderRadius: 6,
                      transition: "width 0.4s ease",
                      boxShadow: `0 0 8px ${color}60`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Summary callout */}
      {tvl > 0 && (
        <div style={{
          background: `${S.primary}10`,
          border: `1px solid ${S.primary}30`,
          borderRadius: 10,
          padding: "14px 16px",
        }}>
          <p style={{ color: S.text2, fontSize: 13, lineHeight: 1.7 }}>
            With <strong style={{ color: S.text }}>{formatNumber(tvl)}</strong> in TVL, Fluid generates{" "}
            <strong style={{ color: S.primary }}>{formatNumber(maxLiquidity)}</strong> in DEX liquidity —{" "}
            <strong style={{ color: S.primary }}>
              {(39 / 8).toFixed(1)}x more than Uniswap V3
            </strong>{" "}
            and 39x more than a standard AMM. That means tighter spreads and less slippage for every trade.
          </p>
        </div>
      )}

      {tvl <= 0 && (
        <div style={{ textAlign: "center", padding: "16px 0", color: S.text2, fontSize: 14 }}>
          Enter a TVL amount above to see the comparison
        </div>
      )}

      <p style={{ color: S.text2, fontSize: 12, marginTop: 14, lineHeight: 1.6 }}>
        Multipliers are approximate figures based on Fluid&apos;s published debt-as-liquidity architecture and observed
        DEX volume-to-TVL ratios as of March 2026. Actual efficiency varies by market conditions and asset pair.
      </p>
    </div>
  );
}
