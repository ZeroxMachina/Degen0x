'use client';

import { useState } from "react";

// ── Interfaces ───────────────────────────────────────────────────────────────
interface Spoke {
  id: string;
  label: string;
  icon: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  assets: string[];
  tvlTarget: string;
  riskLevel: "Low" | "Medium" | "High";
  riskColor: string;
  description: string;
  keyFeatures: string[];
  bestFor: string;
  permissioned: boolean;
}

// ── Static Data ──────────────────────────────────────────────────────────────
const SPOKES: Spoke[] = [
  {
    id: "stablecoin",
    label: "Stablecoin Spoke",
    icon: "💵",
    tag: "Low Risk",
    tagColor: "#3fb950",
    tagBg: "#3fb95020",
    assets: ["USDC", "USDT", "DAI", "USDS", "GHO", "FRAX"],
    tvlTarget: "~40% of Hub",
    riskLevel: "Low",
    riskColor: "#3fb950",
    description:
      "The stablecoin Spoke serves as the backbone of the Aave v4 liquidity system. All major stablecoin deposits pool here with optimized parameters for maximum capital efficiency. This is where GHO minting integrates natively.",
    keyFeatures: [
      "Optimized LTV ratios for stablecoin collateral",
      "Native GHO minting within the Spoke",
      "Lowest borrowing rates in the Hub",
      "Ideal for yield optimization strategies",
    ],
    bestFor: "Yield seekers, GHO minters, stablecoin carry trades",
    permissioned: false,
  },
  {
    id: "eth-derivatives",
    label: "ETH Derivatives Spoke",
    icon: "🔷",
    tag: "Medium Risk",
    tagColor: "#d29922",
    tagBg: "#d2992220",
    assets: ["wstETH", "rETH", "cbETH", "ETHx", "weETH"],
    tvlTarget: "~35% of Hub",
    riskLevel: "Medium",
    riskColor: "#d29922",
    description:
      "The ETH derivatives Spoke is optimized for liquid staking tokens and restaking derivatives. These assets share high correlation with ETH, allowing elevated LTV ratios and tight risk parameters.",
    keyFeatures: [
      "High LTV ratios (up to 90%+) for correlated LSTs",
      "Supports major liquid staking tokens across providers",
      "Ideal for leveraged staking strategies",
      "eMode-equivalent optimization for LST collateral",
    ],
    bestFor: "LST leverage loopers, yield maximizers, restakers",
    permissioned: false,
  },
  {
    id: "high-risk",
    label: "High-Risk Assets Spoke",
    icon: "🔥",
    tag: "High Risk",
    tagColor: "#f85149",
    tagBg: "#f8514920",
    assets: ["ARB", "OP", "LINK", "UNI", "MKR", "CRV"],
    tvlTarget: "~15% of Hub",
    riskLevel: "High",
    riskColor: "#f85149",
    description:
      "The high-risk Spoke handles volatile long-tail assets with lower LTV ratios, higher liquidation thresholds, and dynamic risk premiums. V4's fuzzy liquidation engine is most active here — it softens the blow when markets move fast.",
    keyFeatures: [
      "Dynamic risk premiums based on asset volatility",
      "Fuzzy liquidation curve reduces cascade risk",
      "Lower LTV ratios protect protocol solvency",
      "Isolated debt ceilings per asset",
    ],
    bestFor: "Altcoin holders who want liquidity without selling",
    permissioned: false,
  },
  {
    id: "horizon",
    label: "Horizon Spoke",
    icon: "🏛️",
    tag: "Permissioned",
    tagColor: "#a371f7",
    tagBg: "#a371f720",
    assets: ["bIB01", "BUIDL", "STBT", "Tokenized Treasuries", "RWA Equity"],
    tvlTarget: "$1B+ target",
    riskLevel: "Low",
    riskColor: "#3fb950",
    description:
      "Horizon is Aave's permissioned institutional Spoke. KYC is required. It connects regulated institutions and tokenized real-world assets (RWAs) to the Aave liquidity ecosystem. Partners include Franklin Templeton, VanEck, Circle, and Ripple.",
    keyFeatures: [
      "KYC/AML compliant access — institutional grade",
      "Accepts tokenized Treasuries, bonds, and equity as collateral",
      "On-chain compliance framework via allowlisted addresses",
      "Bridge to TradFi — connects institutional DeFi to retail liquidity",
    ],
    bestFor: "Institutional investors, RWA token holders, TradFi entrants",
    permissioned: true,
  },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function AaveV4SpokesExplorer() {
  const [activeSpoke, setActiveSpoke] = useState<string>(SPOKES[0].id);

  const selected = SPOKES.find((s) => s.id === activeSpoke)!;

  return (
    <div
      style={{
        background: "#0d1117",
        border: "1px solid #30363d",
        borderRadius: 14,
        padding: "24px",
        marginBottom: 40,
        marginTop: 8,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6e7681",
            margin: "0 0 6px",
          }}
        >
          Interactive Explorer
        </p>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3", margin: 0 }}>
          ⚙️ Aave v4 — Hub &amp; Spoke Architecture
        </h3>
        <p style={{ fontSize: 13, color: "#6e7681", margin: "4px 0 0" }}>
          Click a Spoke to explore its assets, risk profile, and use cases.
        </p>
      </div>

      {/* Hub label */}
      <div
        style={{
          background: "#1f6feb18",
          border: "1px solid #1f6feb55",
          borderRadius: 8,
          padding: "10px 16px",
          textAlign: "center",
          marginBottom: 14,
        }}
      >
        <span style={{ fontWeight: 700, color: "#79c0ff", fontSize: 14 }}>
          🏛 Unified Liquidity Hub
        </span>
        <span style={{ fontSize: 12, color: "#6e7681", marginLeft: 10 }}>
          — Single asset pool per chain. All Spokes draw from here.
        </span>
      </div>

      {/* Spoke Tabs */}
      <div
        role="tablist"
        aria-label="Aave v4 Spoke selector"
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        {SPOKES.map((spoke) => {
          const isActive = spoke.id === activeSpoke;
          return (
            <button
              key={spoke.id}
              onClick={() => setActiveSpoke(spoke.id)}
              role="tab"
              aria-selected={isActive}
              aria-label={`${spoke.label} — ${spoke.tag}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                border: isActive
                  ? `1px solid ${spoke.tagColor}`
                  : "1px solid #30363d",
                background: isActive ? `${spoke.tagColor}18` : "#161b22",
                color: isActive ? spoke.tagColor : "#8b949e",
                fontSize: 13,
                fontWeight: isActive ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.15s",
                outline: "none",
              }}
              onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 2px ${spoke.tagColor}`)}
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <span>{spoke.icon}</span>
              <span>{spoke.label}</span>
              {spoke.permissioned && (
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    background: "#a371f730",
                    color: "#a371f7",
                    padding: "1px 5px",
                    borderRadius: 4,
                    letterSpacing: "0.05em",
                  }}
                >
                  KYC
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Detail Panel */}
      <div
        style={{
          background: "#161b22",
          border: `1px solid ${selected.tagColor}44`,
          borderLeft: `3px solid ${selected.tagColor}`,
          borderRadius: 10,
          padding: "20px 22px",
        }}
      >
        {/* Spoke Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 14,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>{selected.icon}</span>
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#e6edf3",
                  margin: 0,
                }}
              >
                {selected.label}
              </h4>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "#8b949e",
                margin: "6px 0 0",
                lineHeight: 1.6,
                maxWidth: 520,
              }}
            >
              {selected.description}
            </p>
          </div>

          {/* Risk Badge */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: 6,
                background: selected.tagBg,
                color: selected.tagColor,
                border: `1px solid ${selected.tagColor}44`,
                whiteSpace: "nowrap",
              }}
            >
              {selected.tag}
            </span>
            <span
              style={{
                fontSize: 11,
                color: "#6e7681",
                whiteSpace: "nowrap",
              }}
            >
              Hub share: {selected.tvlTarget}
            </span>
          </div>
        </div>

        {/* Assets + Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
            marginBottom: 14,
          }}
        >
          {/* Assets */}
          <div
            style={{
              background: "#0d1117",
              borderRadius: 8,
              padding: "12px 14px",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#6e7681",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 8px",
              }}
            >
              Assets Supported
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {selected.assets.map((asset) => (
                <span
                  key={asset}
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    background: "#21262d",
                    color: "#c9d1d9",
                    padding: "3px 8px",
                    borderRadius: 5,
                    border: "1px solid #30363d",
                  }}
                >
                  {asset}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div
            style={{
              background: "#0d1117",
              borderRadius: 8,
              padding: "12px 14px",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#6e7681",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 8px",
              }}
            >
              Key Features
            </p>
            <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 4 }}>
              {selected.keyFeatures.map((feat) => (
                <li key={feat} style={{ fontSize: 12, color: "#c9d1d9", lineHeight: 1.5 }}>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Best For */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            background: "#0d1117",
            borderRadius: 8,
          }}
        >
          <span style={{ fontSize: 13, color: "#6e7681", fontWeight: 600 }}>🎯 Best for:</span>
          <span style={{ fontSize: 13, color: "#c9d1d9" }}>{selected.bestFor}</span>
        </div>
      </div>

      {/* Footer note */}
      <p style={{ fontSize: 11, color: "#6e7681", marginTop: 12, margin: "12px 0 0" }}>
        Data reflects planned Aave v4 architecture targeting Q2 2026 mainnet launch. Subject to governance changes.
      </p>
    </div>
  );
}
