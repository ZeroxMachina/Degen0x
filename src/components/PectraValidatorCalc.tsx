'use client';

import { useState, useMemo } from "react";

// ── Interfaces ──────────────────────────────────────────────────────────────
interface ConsolidationResult {
  beforeValidators: number;
  afterValidators: number;
  reductionPct: number;
  attestationsReduced: number;
  totalEth: number;
  compoundingGainAnnual: number;
  depositTime: { before: number; after: number };
}

// ── Constants ───────────────────────────────────────────────────────────────
const ETH_STAKING_APR = 0.038; // ~3.8% base staking APR (March 2026)
const ATTESTATIONS_PER_VALIDATOR_PER_DAY = 225; // approx
const MAX_VALIDATOR_BALANCE = 2048;
const MIN_VALIDATOR_BALANCE = 32;

// ── Helpers ─────────────────────────────────────────────────────────────────
function fmtNumber(n: number, decimals = 0): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function fmtETH(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(2)}K ETH`;
  return `${n.toFixed(2)} ETH`;
}

// ── Component ────────────────────────────────────────────────────────────────
export default function PectraValidatorCalc() {
  const [totalEth, setTotalEth] = useState<string>("1024");
  const [ethPriceUSD, setEthPriceUSD] = useState<string>("3800");

  const result = useMemo<ConsolidationResult | null>(() => {
    const eth = parseFloat(totalEth) || 0;
    if (eth < MIN_VALIDATOR_BALANCE) return null;

    // Before: all 32 ETH validators
    const beforeValidators = Math.floor(eth / MIN_VALIDATOR_BALANCE);

    // After: consolidate into 2048 ETH validators + remainder in 32 ETH
    const fullBigValidators = Math.floor(eth / MAX_VALIDATOR_BALANCE);
    const remainder = eth % MAX_VALIDATOR_BALANCE;
    const smallRemainder = remainder >= MIN_VALIDATOR_BALANCE
      ? Math.floor(remainder / MIN_VALIDATOR_BALANCE)
      : 0;
    const afterValidators = fullBigValidators + smallRemainder;

    const reductionPct = beforeValidators > 0
      ? ((beforeValidators - afterValidators) / beforeValidators) * 100
      : 0;

    const attestationsReduced =
      (beforeValidators - afterValidators) * ATTESTATIONS_PER_VALIDATOR_PER_DAY;

    // Compounding gain: before Pectra, rewards above 32 ETH don't compound
    // After Pectra, rewards up to 2048 ETH compound within the validator
    // Approximate: one extra compounding cycle per year on accumulated rewards
    const annualRewards = eth * ETH_STAKING_APR;
    // Rough estimate: pre-Pectra you lose ~50% of compounding on the excess
    const compoundingGainAnnual = annualRewards * 0.5 * ETH_STAKING_APR;

    return {
      beforeValidators,
      afterValidators,
      reductionPct,
      attestationsReduced,
      totalEth: eth,
      compoundingGainAnnual,
      depositTime: {
        before: 9 * 60, // ~9 hours in minutes
        after: 13,      // ~13 minutes
      },
    };
  }, [totalEth]);

  const ethPrice = parseFloat(ethPriceUSD) || 3800;

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    background: "#0d1117",
    border: "1px solid #30363d",
    borderRadius: 8,
    color: "#e6edf3",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box" as const,
  } as React.CSSProperties;

  const labelStyle = {
    fontSize: 12,
    fontWeight: 600,
    color: "#8b949e",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    marginBottom: 6,
    display: "block",
  };

  return (
    <div style={{ marginTop: 32, marginBottom: 40 }}>
      {/* Header Card */}
      <div
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: "16px 16px 0 0",
          padding: "20px 24px 16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <span style={{ fontSize: 20 }}>⚡</span>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", margin: 0 }}>
            EIP-7251 Validator Consolidation Calculator
          </h3>
        </div>
        <p style={{ fontSize: 13, color: "#8b949e", margin: 0 }}>
          See how Pectra&apos;s EIP-7251 reduces your validator count and operational overhead when you consolidate from 32 ETH to up to 2,048 ETH validators.
        </p>
      </div>

      <div
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderTop: "none",
          borderRadius: "0 0 16px 16px",
          padding: "20px 24px 24px",
        }}
      >
        {/* Inputs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div>
            <label style={labelStyle}>Total ETH Staked</label>
            <div style={{ position: "relative" }}>
              <input
                type="number"
                min="32"
                max="1000000"
                step="32"
                value={totalEth}
                onChange={(e) => setTotalEth(e.target.value)}
                style={inputStyle}
                placeholder="1024"
              />
            </div>
            <p style={{ fontSize: 11, color: "#6e7681", marginTop: 4 }}>
              Must be ≥ 32 ETH (minimum validator size)
            </p>
          </div>

          <div>
            <label style={labelStyle}>ETH Price (USD)</label>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#8b949e",
                  fontSize: 14,
                }}
              >
                $
              </span>
              <input
                type="number"
                min="0"
                value={ethPriceUSD}
                onChange={(e) => setEthPriceUSD(e.target.value)}
                style={{ ...inputStyle, paddingLeft: 24 }}
                placeholder="3800"
              />
            </div>
            <p style={{ fontSize: 11, color: "#6e7681", marginTop: 4 }}>
              Used to show USD equivalents
            </p>
          </div>

          {/* Quick presets */}
          <div>
            <label style={labelStyle}>Quick Presets</label>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {[
                { label: "32 ETH", value: "32" },
                { label: "256 ETH", value: "256" },
                { label: "1K ETH", value: "1024" },
                { label: "10K ETH", value: "10240" },
              ].map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setTotalEth(preset.value)}
                  style={{
                    padding: "6px 12px",
                    background: totalEth === preset.value ? "rgba(88,166,255,0.2)" : "#0d1117",
                    border: `1px solid ${totalEth === preset.value ? "#58a6ff" : "#30363d"}`,
                    borderRadius: 6,
                    color: totalEth === preset.value ? "#58a6ff" : "#8b949e",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        {result ? (
          <>
            {/* Before / After comparison */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: 12,
                alignItems: "start",
                marginBottom: 20,
              }}
            >
              {/* Before */}
              <div
                style={{
                  padding: 16,
                  background: "#0d1117",
                  borderRadius: 12,
                  border: "1px solid #30363d",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#f85149",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 12,
                  }}
                >
                  Before Pectra
                </p>
                <div style={{ space: "y-2" }}>
                  <div style={{ marginBottom: 10 }}>
                    <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 2 }}>Validators</p>
                    <p style={{ fontSize: 28, fontWeight: 800, color: "#f85149" }}>
                      {fmtNumber(result.beforeValidators)}
                    </p>
                    <p style={{ fontSize: 11, color: "#8b949e" }}>32 ETH each</p>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 2 }}>Daily Attestations</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3" }}>
                      ~{fmtNumber(result.beforeValidators * ATTESTATIONS_PER_VALIDATOR_PER_DAY)}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 2 }}>New Deposit Activation</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#f85149" }}>~9 hours</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 4px",
                  paddingTop: 40,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(99,102,241,0.2)",
                    border: "1px solid rgba(99,102,241,0.4)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    color: "#a371f7",
                  }}
                >
                  →
                </div>
              </div>

              {/* After */}
              <div
                style={{
                  padding: 16,
                  background: "#0d1117",
                  borderRadius: 12,
                  border: "1px solid rgba(63,185,80,0.3)",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#3fb950",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 12,
                  }}
                >
                  After Pectra (EIP-7251)
                </p>
                <div>
                  <div style={{ marginBottom: 10 }}>
                    <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 2 }}>Validators</p>
                    <p style={{ fontSize: 28, fontWeight: 800, color: "#3fb950" }}>
                      {fmtNumber(result.afterValidators)}
                    </p>
                    <p style={{ fontSize: 11, color: "#8b949e" }}>Up to 2,048 ETH each</p>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 2 }}>Daily Attestations</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3" }}>
                      ~{fmtNumber(result.afterValidators * ATTESTATIONS_PER_VALIDATOR_PER_DAY)}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 2 }}>New Deposit Activation</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#3fb950" }}>~13 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 10,
                marginBottom: 16,
              }}
            >
              {[
                {
                  label: "Validators Eliminated",
                  value: fmtNumber(result.beforeValidators - result.afterValidators),
                  sub: `${result.reductionPct.toFixed(0)}% reduction`,
                  color: "#3fb950",
                  bg: "rgba(63,185,80,0.08)",
                  border: "rgba(63,185,80,0.25)",
                },
                {
                  label: "Attestations Saved/Day",
                  value: fmtNumber(result.attestationsReduced),
                  sub: "less network traffic",
                  color: "#58a6ff",
                  bg: "rgba(88,166,255,0.08)",
                  border: "rgba(88,166,255,0.25)",
                },
                {
                  label: "Total ETH Staked",
                  value: fmtETH(result.totalEth),
                  sub: `≈ $${fmtNumber(result.totalEth * ethPrice / 1_000_000, 2)}M USD`,
                  color: "#e3b341",
                  bg: "rgba(227,179,65,0.08)",
                  border: "rgba(227,179,65,0.25)",
                },
                {
                  label: "Native Compounding Gain",
                  value: `+${(result.compoundingGainAnnual).toFixed(4)} ETH/yr`,
                  sub: "from in-validator auto-compounding",
                  color: "#a371f7",
                  bg: "rgba(163,113,247,0.08)",
                  border: "rgba(163,113,247,0.25)",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: 14,
                    background: stat.bg,
                    borderRadius: 10,
                    border: `1px solid ${stat.border}`,
                  }}
                >
                  <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>
                    {stat.label}
                  </p>
                  <p style={{ fontSize: 18, fontWeight: 800, color: stat.color }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: 11, color: "#6e7681", marginTop: 2 }}>{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Deposit Time Visual */}
            <div
              style={{
                padding: 16,
                background: "#0d1117",
                borderRadius: 12,
                border: "1px solid #21262d",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#8b949e",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 12,
                }}
              >
                New Validator Activation Time (EIP-6110)
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {/* Before bar */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: "#f85149" }}>Before Pectra</span>
                    <span style={{ fontSize: 12, color: "#f85149", fontWeight: 700 }}>~9 hours</span>
                  </div>
                  <div
                    style={{
                      height: 10,
                      background: "rgba(248,81,73,0.15)",
                      borderRadius: 5,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        background: "#f85149",
                        borderRadius: 5,
                      }}
                    />
                  </div>
                </div>
                {/* After bar */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: "#3fb950" }}>After Pectra</span>
                    <span style={{ fontSize: 12, color: "#3fb950", fontWeight: 700 }}>~13 minutes (97% faster)</span>
                  </div>
                  <div
                    style={{
                      height: 10,
                      background: "rgba(63,185,80,0.15)",
                      borderRadius: 5,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "2.4%", // 13min / 540min = ~2.4%
                        background: "#3fb950",
                        borderRadius: 5,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            style={{
              padding: 24,
              textAlign: "center",
              color: "#8b949e",
              fontSize: 14,
            }}
          >
            Enter at least 32 ETH to see consolidation estimates.
          </div>
        )}

        <p style={{ fontSize: 11, color: "#6e7681", marginTop: 16, lineHeight: 1.5 }}>
          Estimates are approximate. Consolidation from 32 ETH to 2,048 ETH validators is optional and not required by the Pectra upgrade. APR is approximate (March 2026 ~3.8% base rate) and varies with network conditions.
        </p>
      </div>
    </div>
  );
}
