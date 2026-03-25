'use client';

import { useState, useMemo } from "react";

// ── Interfaces ──────────────────────────────────────────────────────────────
interface YieldLayer {
  label: string;
  minApy: number;
  maxApy: number;
  description: string;
  sustainable: "High" | "Medium" | "Low";
}

interface Protocol {
  id: string;
  name: string;
  token: string;
  color: string;
  baseApyMin: number;
  baseApyMax: number;
  layers: YieldLayer[];
  chains: string;
  riskLevel: "Low" | "Medium" | "Medium-High";
}

// ── Constants ───────────────────────────────────────────────────────────────
const BTC_PRICE_FALLBACK = 85_000;

const PROTOCOLS: Protocol[] = [
  {
    id: "lombard",
    name: "Lombard",
    token: "LBTC",
    color: "#fb923c",
    baseApyMin: 0.5,
    baseApyMax: 1.0,
    chains: "Ethereum, Arbitrum, BNB",
    riskLevel: "Medium",
    layers: [
      {
        label: "Babylon Staking (BABY rewards)",
        minApy: 0.5,
        maxApy: 1.0,
        description: "Base staking yield from securing Bitcoin Secured Networks",
        sustainable: "Medium",
      },
      {
        label: "Aave / Morpho Lending",
        minApy: 0.5,
        maxApy: 2.5,
        description: "Deposit LBTC as collateral; earn lending interest from borrowers",
        sustainable: "High",
      },
      {
        label: "Pendle Yield Markets",
        minApy: 1.0,
        maxApy: 3.5,
        description: "Structure fixed or leveraged yield on LBTC via Pendle PT/YT",
        sustainable: "Medium",
      },
    ],
  },
  {
    id: "solv",
    name: "Solv Protocol",
    token: "SolvBTC",
    color: "#a78bfa",
    baseApyMin: 0.5,
    baseApyMax: 1.0,
    chains: "ETH, BNB, Arbitrum, Solana, Core",
    riskLevel: "Medium",
    layers: [
      {
        label: "Babylon Staking (BABY rewards)",
        minApy: 0.5,
        maxApy: 1.0,
        description: "Base staking yield from Babylon Protocol",
        sustainable: "Medium",
      },
      {
        label: "BTC+ Yield Vault",
        minApy: 1.0,
        maxApy: 3.0,
        description: "Solv's multi-strategy vault blending DeFi, CeFi, and RWA yield",
        sustainable: "Medium",
      },
      {
        label: "Cross-chain DeFi Farming",
        minApy: 0.5,
        maxApy: 2.0,
        description: "Deploy SolvBTC across BNB Chain, Solana and Arbitrum DeFi",
        sustainable: "Low",
      },
    ],
  },
  {
    id: "pumpbtc",
    name: "pumpBTC",
    token: "pumpBTC",
    color: "#34d399",
    baseApyMin: 0.5,
    baseApyMax: 1.0,
    chains: "Ethereum, BNB",
    riskLevel: "Medium",
    layers: [
      {
        label: "Babylon Staking (BABY rewards)",
        minApy: 0.5,
        maxApy: 1.0,
        description: "Direct Babylon staking yield in liquid token form",
        sustainable: "Medium",
      },
      {
        label: "DeFi Integrations (limited)",
        minApy: 0.3,
        maxApy: 1.5,
        description: "Growing set of DeFi protocol integrations",
        sustainable: "Medium",
      },
    ],
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
function fmtBTC(n: number): string {
  if (n >= 1) return `${n.toFixed(4)} BTC`;
  return `${(n * 1000).toFixed(2)} mBTC`;
}

function fmtUSD(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}

function sustainColor(s: "High" | "Medium" | "Low"): string {
  if (s === "High") return "#34d399";
  if (s === "Medium") return "#fde68a";
  return "#fca5a5";
}

// ── Component ────────────────────────────────────────────────────────────────
export default function BitcoinLSTYieldEstimator() {
  const [btcAmount, setBtcAmount] = useState<string>("0.1");
  const [btcPrice, setBtcPrice] = useState<number>(BTC_PRICE_FALLBACK);
  const [selectedProtocol, setSelectedProtocol] = useState<string>("lombard");
  const [selectedLayers, setSelectedLayers] = useState<Record<string, boolean>>({
    "Babylon Staking (BABY rewards)": true,
    "Aave / Morpho Lending": false,
    "Pendle Yield Markets": false,
    "BTC+ Yield Vault": false,
    "Cross-chain DeFi Farming": false,
    "DeFi Integrations (limited)": false,
  });

  const protocol = useMemo(
    () => PROTOCOLS.find((p) => p.id === selectedProtocol)!,
    [selectedProtocol]
  );

  const btcNum = useMemo(() => {
    const n = parseFloat(btcAmount);
    return isNaN(n) || n < 0 ? 0 : n;
  }, [btcAmount]);

  const usdValue = useMemo(() => btcNum * btcPrice, [btcNum, btcPrice]);

  const { minApy, maxApy, activeLayers } = useMemo(() => {
    const active = protocol.layers.filter((l) => selectedLayers[l.label]);
    const minApy = active.reduce((s, l) => s + l.minApy, 0);
    const maxApy = active.reduce((s, l) => s + l.maxApy, 0);
    return { minApy, maxApy, activeLayers: active };
  }, [protocol, selectedLayers]);

  const projection = useMemo(() => {
    const midApy = (minApy + maxApy) / 2;
    return {
      annualMinBTC: btcNum * (minApy / 100),
      annualMaxBTC: btcNum * (maxApy / 100),
      annualMidUSD: usdValue * (midApy / 100),
      monthlyMinBTC: btcNum * (minApy / 100) / 12,
      monthlyMaxBTC: btcNum * (maxApy / 100) / 12,
      apy: { min: minApy, max: maxApy, mid: midApy },
    };
  }, [btcNum, usdValue, minApy, maxApy]);

  const handleProtocolChange = (id: string) => {
    setSelectedProtocol(id);
    // Reset layers — keep "Babylon Staking" always on by default
    const newProto = PROTOCOLS.find((p) => p.id === id)!;
    const reset: Record<string, boolean> = {};
    newProto.layers.forEach((l) => {
      reset[l.label] = l.label.startsWith("Babylon Staking");
    });
    setSelectedLayers(reset);
  };

  const toggleLayer = (label: string) => {
    // The Babylon base layer is always required
    if (label.startsWith("Babylon Staking")) return;
    setSelectedLayers((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div
      role="region"
      aria-label="BTC Liquid Staking Yield Estimator"
      style={{
        background: "#161b22",
        border: "1px solid #30363d",
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 40,
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,191,36,0.08))",
          borderBottom: "1px solid #30363d",
          padding: "20px 24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>₿</span>
          <div>
            <h3
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: "#e6edf3",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              BTC Liquid Staking Yield Estimator
            </h3>
            <p style={{ fontSize: 12, color: "#6e7681", margin: "3px 0 0 0" }}>
              Compare projected yields across protocols and DeFi strategies
            </p>
          </div>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 10,
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: 6,
              background: "rgba(88,166,255,0.12)",
              color: "#58a6ff",
              border: "1px solid rgba(88,166,255,0.2)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Illustrative
          </span>
        </div>
      </div>

      <div style={{ padding: 24 }}>
        {/* ── Inputs row ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >
          {/* BTC Amount */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 700,
                color: "#6e7681",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 6,
              }}
            >
              Your BTC Amount
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="number"
                value={btcAmount}
                onChange={(e) => setBtcAmount(e.target.value)}
                min="0"
                step="0.01"
                style={{
                  width: "100%",
                  background: "#0d1117",
                  border: "1px solid #30363d",
                  borderRadius: 8,
                  color: "#e6edf3",
                  fontSize: 16,
                  fontWeight: 700,
                  padding: "10px 44px 10px 12px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fb923c",
                }}
              >
                BTC
              </span>
            </div>
            <p style={{ fontSize: 11, color: "#484f58", margin: "4px 0 0 0" }}>
              ≈ {fmtUSD(usdValue)}
            </p>
          </div>

          {/* BTC Price */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 700,
                color: "#6e7681",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 6,
              }}
            >
              BTC Price (USD)
            </label>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#6e7681",
                }}
              >
                $
              </span>
              <input
                type="number"
                value={btcPrice}
                onChange={(e) => setBtcPrice(Math.max(1, parseInt(e.target.value) || BTC_PRICE_FALLBACK))}
                min="1"
                step="1000"
                style={{
                  width: "100%",
                  background: "#0d1117",
                  border: "1px solid #30363d",
                  borderRadius: 8,
                  color: "#e6edf3",
                  fontSize: 16,
                  fontWeight: 700,
                  padding: "10px 12px 10px 26px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Quick amounts */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 700,
                color: "#6e7681",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 6,
              }}
            >
              Quick Select
            </label>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["0.01", "0.1", "0.5", "1", "5"].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setBtcAmount(amt)}
                  aria-label={`Set amount to ${amt} BTC`}
                  aria-pressed={btcAmount === amt}
                  style={{
                    padding: "8px 12px",
                    minHeight: 36,
                    borderRadius: 6,
                    border: `1px solid ${btcAmount === amt ? "rgba(251,146,60,0.5)" : "#30363d"}`,
                    background: btcAmount === amt ? "rgba(251,146,60,0.12)" : "#0d1117",
                    color: btcAmount === amt ? "#fb923c" : "#8b949e",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {amt} BTC
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Protocol selector ── */}
        <div style={{ marginBottom: 20 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#6e7681",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 10,
            }}
          >
            Select Protocol
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {PROTOCOLS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleProtocolChange(p.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: `1px solid ${selectedProtocol === p.id ? p.color + "80" : "#30363d"}`,
                  background:
                    selectedProtocol === p.id
                      ? `rgba(${p.color === "#fb923c" ? "251,146,60" : p.color === "#a78bfa" ? "167,139,250" : "52,211,153"},0.12)`
                      : "#0d1117",
                  color: selectedProtocol === p.id ? p.color : "#8b949e",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    padding: "1px 6px",
                    borderRadius: 4,
                    background: `${p.color}22`,
                    color: p.color,
                    fontFamily: "monospace",
                  }}
                >
                  {p.token}
                </span>
                {p.name}
              </button>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#484f58", marginTop: 6 }}>
            Available on: {protocol.chains}
          </p>
        </div>

        {/* ── Yield Layers ── */}
        <div style={{ marginBottom: 24 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#6e7681",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 10,
            }}
          >
            Yield Layers
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {protocol.layers.map((layer) => {
              const isBase = layer.label.startsWith("Babylon Staking");
              const isActive = selectedLayers[layer.label] ?? false;
              return (
                <label
                  key={layer.label}
                  onClick={(e) => { if (isBase) e.preventDefault(); else toggleLayer(layer.label); }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 14px",
                    minHeight: 44,
                    background: isActive ? "rgba(251,146,60,0.05)" : "#0d1117",
                    border: `1px solid ${isActive ? "rgba(251,146,60,0.25)" : "#21262d"}`,
                    borderRadius: 10,
                    cursor: isBase ? "default" : "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {/* Checkbox — native input with custom styling */}
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      border: `2px solid ${isActive ? "#fb923c" : "#30363d"}`,
                      background: isActive ? "#fb923c" : "transparent",
                      flexShrink: 0,
                      marginTop: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                    aria-hidden="true"
                  >
                    <input
                      type="checkbox"
                      checked={isActive}
                      disabled={isBase}
                      onChange={() => toggleLayer(layer.label)}
                      aria-label={`${layer.label} yield layer`}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        cursor: isBase ? "default" : "pointer",
                        margin: 0,
                      }}
                    />
                    {isActive && (
                      <svg width="12" height="10" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#0d1117" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        flexWrap: "wrap",
                        marginBottom: 3,
                      }}
                    >
                      <span
                        style={{ fontSize: 13, fontWeight: 700, color: isActive ? "#e6edf3" : "#8b949e" }}
                      >
                        {layer.label}
                      </span>
                      {isBase && (
                        <span
                          style={{
                            fontSize: 10,
                            padding: "1px 6px",
                            borderRadius: 4,
                            background: "rgba(88,166,255,0.1)",
                            color: "#58a6ff",
                          }}
                        >
                          Required
                        </span>
                      )}
                      <span
                        style={{
                          marginLeft: "auto",
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#34d399",
                        }}
                      >
                        +{layer.minApy}–{layer.maxApy}%
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: "#6e7681", margin: 0, lineHeight: 1.5 }}>
                      {layer.description}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: 4,
                        fontSize: 10,
                        color: sustainColor(layer.sustainable),
                      }}
                    >
                      Sustainability: {layer.sustainable}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* ── Results ── */}
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            background: "linear-gradient(135deg, rgba(251,146,60,0.1), rgba(251,191,36,0.05))",
            border: "1px solid rgba(251,146,60,0.25)",
            borderRadius: 12,
            padding: 20,
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#fb923c",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 16,
            }}
          >
            Projected Yield — {btcAmount || "0"} BTC on {protocol.name} ({protocol.token})
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 16,
              marginBottom: 16,
            }}
          >
            {[
              {
                label: "Total APY Range",
                value:
                  activeLayers.length === 0
                    ? "—"
                    : `${projection.apy.min.toFixed(1)}–${projection.apy.max.toFixed(1)}%`,
                sub: "Combined across active layers",
              },
              {
                label: "Annual Yield (BTC)",
                value:
                  btcNum === 0 || activeLayers.length === 0
                    ? "—"
                    : `${fmtBTC(projection.annualMinBTC)} – ${fmtBTC(projection.annualMaxBTC)}`,
                sub: "Best/worst case range",
              },
              {
                label: "Annual Yield (USD)",
                value:
                  btcNum === 0 || activeLayers.length === 0
                    ? "—"
                    : `~${fmtUSD(projection.annualMidUSD)}`,
                sub: `At mid-APY (${projection.apy.mid.toFixed(1)}%)`,
              },
              {
                label: "Monthly Yield (BTC)",
                value:
                  btcNum === 0 || activeLayers.length === 0
                    ? "—"
                    : `${fmtBTC(projection.monthlyMinBTC)} – ${fmtBTC(projection.monthlyMaxBTC)}`,
                sub: "Estimated monthly",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <p style={{ fontSize: 11, color: "#6e7681", marginBottom: 4, lineHeight: 1.3 }}>
                  {stat.label}
                </p>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#e6edf3",
                    margin: 0,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ fontSize: 11, color: "#484f58", margin: "3px 0 0 0" }}>{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Active layers summary */}
          {activeLayers.length > 0 && (
            <div
              style={{
                borderTop: "1px solid rgba(251,146,60,0.15)",
                paddingTop: 12,
                marginTop: 4,
              }}
            >
              <p style={{ fontSize: 11, color: "#6e7681", marginBottom: 6 }}>
                Active yield layers ({activeLayers.length}):
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {activeLayers.map((l) => (
                  <span
                    key={l.label}
                    style={{
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 5,
                      background: "rgba(251,146,60,0.1)",
                      color: "#fb923c",
                      border: "1px solid rgba(251,146,60,0.2)",
                    }}
                  >
                    {l.label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p style={{ fontSize: 11, color: "#484f58", lineHeight: 1.6, marginTop: 12, margin: "12px 0 0 0" }}>
          ⚠️ These are estimates only. APY ranges are based on market data as of March 2026 and are
          subject to change. Yield denominated in BABY tokens depends on token price. This is not
          financial advice.
        </p>
      </div>
    </div>
  );
}
