'use client';

import { useState, useMemo } from "react";

// ── Constants ────────────────────────────────────────────────────────────────
const BTC_PRICE_FALLBACK = 85_000; // USD — fallback if live price unavailable
const BABY_PRICE_FALLBACK = 0.022;  // USD — approximate March 2026
const MIN_STAKE_BTC = 0.005;

// Yield scenarios (annual BABY reward rate on staked BTC value)
const YIELD_SCENARIOS = [
  { label: "Conservative", apy: 0.005, color: "#60a5fa", desc: "Based on low BSN demand" },
  { label: "Base Case",    apy: 0.0085, color: "#fb923c", desc: "Current average rate (March 2026)" },
  { label: "Optimistic",  apy: 0.012, color: "#22c55e", desc: "If new BSNs boost demand" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function fmtBTC(n: number): string {
  return n.toFixed(4);
}

function fmtUSD(n: number): string {
  if (n >= 1_000) return `$${(n / 1_000).toFixed(2)}K`;
  return `$${n.toFixed(2)}`;
}

function fmtBABY(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M BABY`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(2)}K BABY`;
  return `${n.toFixed(0)} BABY`;
}

// ── Component ────────────────────────────────────────────────────────────────
export default function BabylonYieldEstimator() {
  const [btcAmount, setBtcAmount] = useState<string>("0.1");
  const [btcPrice, setBtcPrice] = useState<number>(BTC_PRICE_FALLBACK);
  const [babyPrice, setBabyPrice] = useState<number>(BABY_PRICE_FALLBACK);
  const [lockPeriod, setLockPeriod] = useState<number>(12); // months

  const btcNum = parseFloat(btcAmount) || 0;
  const isValid = btcNum >= MIN_STAKE_BTC;
  const btcValueUSD = btcNum * btcPrice;

  const results = useMemo(() => {
    if (!isValid) return null;
    const periodYears = lockPeriod / 12;

    return YIELD_SCENARIOS.map((scenario) => {
      // Annual BABY rewards = (btcValueUSD * apy) / babyPrice
      const annualBabyRewards = (btcValueUSD * scenario.apy) / babyPrice;
      const periodBabyRewards = annualBabyRewards * periodYears;
      const periodUsdValue = periodBabyRewards * babyPrice;

      return {
        ...scenario,
        annualBabyRewards,
        periodBabyRewards,
        periodUsdValue,
        effectiveApy: scenario.apy * 100,
      };
    });
  }, [btcNum, btcPrice, babyPrice, lockPeriod, isValid, btcValueUSD]);

  const lockOptions = [3, 6, 12, 24];

  return (
    <div
      style={{
        background: "#161b22",
        border: "1px solid #30363d",
        borderRadius: 16,
        padding: "24px",
        marginTop: 8,
        marginBottom: 8,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 16, fontWeight: 800, color: "#e6edf3", margin: "0 0 4px" }}>
          ⚡ Babylon Yield Estimator
        </p>
        <p style={{ fontSize: 13, color: "#6e7681", margin: 0 }}>
          Estimate BABY token rewards for your BTC stake. Rates are approximate — not financial advice.
        </p>
      </div>

      {/* Inputs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 12,
          marginBottom: 20,
        }}
      >
        {/* BTC Amount */}
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, display: "block", marginBottom: 6 }}>
            BTC Amount to Stake
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="number"
              value={btcAmount}
              onChange={(e) => setBtcAmount(e.target.value)}
              min={MIN_STAKE_BTC}
              step={0.001}
              style={{
                width: "100%",
                background: "#0d1117",
                border: `1px solid ${!isValid && btcNum > 0 ? "#f85149" : "#30363d"}`,
                borderRadius: 8,
                padding: "10px 48px 10px 12px",
                color: "#e6edf3",
                fontSize: 15,
                fontFamily: "monospace",
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
                fontSize: 12,
                color: "#6e7681",
                fontWeight: 600,
              }}
            >
              BTC
            </span>
          </div>
          {!isValid && btcNum > 0 && (
            <p style={{ fontSize: 11, color: "#f85149", margin: "4px 0 0" }}>
              Minimum stake: 0.005 BTC
            </p>
          )}
          {isValid && (
            <p style={{ fontSize: 11, color: "#6e7681", margin: "4px 0 0" }}>
              ≈ {fmtUSD(btcValueUSD)} at current prices
            </p>
          )}
        </div>

        {/* Lock Period */}
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, display: "block", marginBottom: 6 }}>
            Lock Period
          </label>
          <div style={{ display: "flex", gap: 6 }}>
            {lockOptions.map((mo) => (
              <button
                key={mo}
                onClick={() => setLockPeriod(mo)}
                style={{
                  flex: 1,
                  padding: "10px 4px",
                  borderRadius: 8,
                  border: lockPeriod === mo ? "1px solid #fb923c" : "1px solid #30363d",
                  background: lockPeriod === mo ? "rgba(251,146,60,0.15)" : "#0d1117",
                  color: lockPeriod === mo ? "#fb923c" : "#8b949e",
                  fontSize: 13,
                  fontWeight: lockPeriod === mo ? 700 : 400,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {mo}mo
              </button>
            ))}
          </div>
        </div>

        {/* BTC Price */}
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, display: "block", marginBottom: 6 }}>
            BTC Price (USD)
          </label>
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 14,
                color: "#6e7681",
              }}
            >
              $
            </span>
            <input
              type="number"
              value={btcPrice}
              onChange={(e) => setBtcPrice(parseFloat(e.target.value) || BTC_PRICE_FALLBACK)}
              step={1000}
              style={{
                width: "100%",
                background: "#0d1117",
                border: "1px solid #30363d",
                borderRadius: 8,
                padding: "10px 12px 10px 24px",
                color: "#e6edf3",
                fontSize: 15,
                fontFamily: "monospace",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        {/* BABY Price */}
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, display: "block", marginBottom: 6 }}>
            BABY Price (USD)
          </label>
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 14,
                color: "#6e7681",
              }}
            >
              $
            </span>
            <input
              type="number"
              value={babyPrice}
              onChange={(e) => setBabyPrice(parseFloat(e.target.value) || BABY_PRICE_FALLBACK)}
              step={0.001}
              style={{
                width: "100%",
                background: "#0d1117",
                border: "1px solid #30363d",
                borderRadius: 8,
                padding: "10px 12px 10px 24px",
                color: "#e6edf3",
                fontSize: 15,
                fontFamily: "monospace",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {isValid && results ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 10,
            marginBottom: 16,
          }}
        >
          {results.map((r) => (
            <div
              key={r.label}
              style={{
                background: "#0d1117",
                border: `1px solid ${r.color}40`,
                borderRadius: 12,
                padding: 16,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: r.color, margin: 0 }}>{r.label}</p>
                <span
                  style={{
                    fontSize: 11,
                    color: r.color,
                    background: `${r.color}20`,
                    border: `1px solid ${r.color}40`,
                    padding: "2px 7px",
                    borderRadius: 10,
                    fontFamily: "monospace",
                  }}
                >
                  {r.effectiveApy.toFixed(2)}% APY
                </span>
              </div>

              <p style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", margin: "0 0 2px", fontFamily: "monospace" }}>
                {fmtBABY(r.periodBabyRewards)}
              </p>
              <p style={{ fontSize: 13, color: "#8b949e", margin: "0 0 8px" }}>
                over {lockPeriod} months
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                <span style={{ color: "#6e7681" }}>USD value</span>
                <span style={{ color: "#c9d1d9", fontFamily: "monospace" }}>
                  {fmtUSD(r.periodUsdValue)}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginTop: 4 }}>
                <span style={{ color: "#6e7681" }}>Annual rate</span>
                <span style={{ color: "#c9d1d9", fontFamily: "monospace" }}>
                  {fmtBABY(r.annualBabyRewards)}/yr
                </span>
              </div>

              <p style={{ fontSize: 11, color: "#6e7681", marginTop: 8, marginBottom: 0 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      ) : !isValid && btcNum > 0 ? (
        <div
          style={{
            background: "#0d1117",
            border: "1px solid #f8514940",
            borderRadius: 12,
            padding: 16,
            textAlign: "center",
            color: "#f85149",
            fontSize: 14,
          }}
        >
          Enter at least 0.005 BTC to see yield estimates.
        </div>
      ) : null}

      {/* Disclaimer */}
      <div
        style={{
          background: "#0d1117",
          borderRadius: 8,
          padding: "10px 14px",
          marginTop: 4,
        }}
      >
        <p style={{ fontSize: 11, color: "#6e7681", margin: 0, lineHeight: 1.5 }}>
          ⚠️ Estimates use static APY ranges and may not reflect current on-chain rates.
          BABY token price is highly volatile. USD yield values assume BABY price stays constant —
          real returns will vary. Not financial advice.
        </p>
      </div>
    </div>
  );
}
