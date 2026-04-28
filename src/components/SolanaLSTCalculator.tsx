'use client';

import { useState, useMemo } from "react";

// ── Interfaces ──────────────────────────────────────────
interface LSTOption {
  name: string;
  ticker: string;
  apy: number;
  mevBoost: number;
  validators: number;
  color: string;
}

// ── Constants ───────────────────────────────────────────
const LST_OPTIONS: LSTOption[] = [
  { name: "JitoSOL", ticker: "jitoSOL", apy: 5.87, mevBoost: 0.4, validators: 200, color: "#9945FF" },
  { name: "Marinade mSOL", ticker: "mSOL", apy: 7.1, mevBoost: 0.3, validators: 100, color: "#00D18C" },
  { name: "Sanctum INF", ticker: "INF", apy: 8.5, mevBoost: 1.2, validators: 50, color: "#06b6d4" },
  { name: "JupSOL", ticker: "jupSOL", apy: 7.4, mevBoost: 0.5, validators: 80, color: "#F5A623" },
  { name: "STKESOL", ticker: "STKESOL", apy: 6.8, mevBoost: 0.2, validators: 33, color: "#6366f1" },
];

const SOL_PRICE_FALLBACK = 180;

// ── Helpers ─────────────────────────────────────────────
function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(2)}K`;
  return n.toFixed(2);
}

// ── Component ───────────────────────────────────────────
export default function SolanaLSTCalculator() {
  const [solAmount, setSolAmount] = useState(100);
  const [timeMonths, setTimeMonths] = useState(12);
  const [solPrice, setSolPrice] = useState(SOL_PRICE_FALLBACK);

  const results = useMemo(() => {
    return LST_OPTIONS.map((lst) => {
      const totalApy = lst.apy + lst.mevBoost;
      const yearlyYield = solAmount * (totalApy / 100);
      const periodYield = yearlyYield * (timeMonths / 12);
      const periodYieldUsd = periodYield * solPrice;
      const endBalance = solAmount + periodYield;
      return {
        ...lst,
        totalApy,
        periodYield,
        periodYieldUsd,
        endBalance,
      };
    }).sort((a, b) => b.totalApy - a.totalApy);
  }, [solAmount, timeMonths, solPrice]);

  const bestOption = results[0];

  return (
    <div style={{
      background: "#161b22",
      border: "1px solid #30363d",
      borderRadius: 16,
      padding: 24,
      marginBottom: 32,
    }}>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 4 }}>
        ⚡ Solana LST Yield Calculator
      </h3>
      <p style={{ fontSize: 13, color: "#8b949e", marginBottom: 20 }}>
        Compare estimated yields across top Solana liquid staking tokens.
      </p>

      {/* ── Input Controls ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: 12,
        marginBottom: 20,
      }}>
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", display: "block", marginBottom: 4 }}>
            SOL Amount
          </label>
          <input
            type="number"
            value={solAmount}
            min={0}
            max={10000000}
            step={1}
            inputMode="decimal"
            aria-label="Amount of SOL to stake"
            onChange={(e) => setSolAmount(Math.max(0, Number(e.target.value)))}
            style={{
              width: "100%",
              padding: "10px 12px",
              background: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: 8,
              color: "#e6edf3",
              fontSize: 14,
              minHeight: 44,
            }}
          />
        </div>
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", display: "block", marginBottom: 4 }}>
            Time Period (months)
          </label>
          <input
            type="number"
            value={timeMonths}
            min={1}
            max={60}
            step={1}
            inputMode="numeric"
            aria-label="Staking time period in months"
            onChange={(e) => setTimeMonths(Math.max(1, Math.min(60, Number(e.target.value))))}
            style={{
              width: "100%",
              padding: "10px 12px",
              background: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: 8,
              color: "#e6edf3",
              fontSize: 14,
              minHeight: 44,
            }}
          />
        </div>
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", display: "block", marginBottom: 4 }}>
            SOL Price (USD)
          </label>
          <input
            type="number"
            value={solPrice}
            min={0}
            max={100000}
            step={0.01}
            inputMode="decimal"
            aria-label="Current SOL price in USD"
            onChange={(e) => setSolPrice(Math.max(0, Number(e.target.value)))}
            style={{
              width: "100%",
              padding: "10px 12px",
              background: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: 8,
              color: "#e6edf3",
              fontSize: 14,
              minHeight: 44,
            }}
          />
        </div>
      </div>

      {/* ── Results Table ── */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #30363d" }}>
              <th style={{ padding: "8px 12px", textAlign: "left", color: "#8b949e", fontWeight: 600, fontSize: 12 }}>LST</th>
              <th style={{ padding: "8px 12px", textAlign: "right", color: "#8b949e", fontWeight: 600, fontSize: 12 }}>APY</th>
              <th style={{ padding: "8px 12px", textAlign: "right", color: "#8b949e", fontWeight: 600, fontSize: 12 }}>Yield (SOL)</th>
              <th style={{ padding: "8px 12px", textAlign: "right", color: "#8b949e", fontWeight: 600, fontSize: 12 }}>Yield (USD)</th>
              <th style={{ padding: "8px 12px", textAlign: "right", color: "#8b949e", fontWeight: 600, fontSize: 12 }}>End Balance</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr
                key={r.ticker}
                style={{
                  borderBottom: "1px solid #21262d",
                  background: i === 0 ? "rgba(34, 197, 94, 0.05)" : "transparent",
                }}
              >
                <td style={{ padding: "10px 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: r.color,
                      flexShrink: 0,
                    }} />
                    <span style={{ color: "#e6edf3", fontWeight: 600 }}>{r.name}</span>
                    {i === 0 && (
                      <span style={{
                        fontSize: 10,
                        padding: "2px 6px",
                        background: "#22c55e20",
                        color: "#22c55e",
                        borderRadius: 4,
                        fontWeight: 700,
                      }}>
                        BEST
                      </span>
                    )}
                  </div>
                </td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#3fb950", fontWeight: 600 }}>
                  {r.totalApy.toFixed(2)}%
                </td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#e6edf3" }}>
                  {r.periodYield.toFixed(4)} SOL
                </td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#e6edf3" }}>
                  ${formatNumber(r.periodYieldUsd)}
                </td>
                <td style={{ padding: "10px 12px", textAlign: "right", color: "#e6edf3", fontWeight: 600 }}>
                  {r.endBalance.toFixed(4)} SOL
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Summary ── */}
      {bestOption && solAmount > 0 && (
        <div style={{
          marginTop: 16,
          padding: "12px 16px",
          background: "rgba(34, 197, 94, 0.08)",
          border: "1px solid rgba(34, 197, 94, 0.2)",
          borderRadius: 10,
          fontSize: 13,
          color: "#c9d1d9",
        }}>
          💡 With <strong style={{ color: "#e6edf3" }}>{solAmount} SOL</strong> staked for{" "}
          <strong style={{ color: "#e6edf3" }}>{timeMonths} months</strong>,{" "}
          <strong style={{ color: bestOption.color }}>{bestOption.name}</strong> yields the most:{" "}
          <strong style={{ color: "#3fb950" }}>
            +{bestOption.periodYield.toFixed(4)} SOL (${formatNumber(bestOption.periodYieldUsd)})
          </strong>{" "}
          at {bestOption.totalApy.toFixed(2)}% APY.
        </div>
      )}

      <p style={{ fontSize: 11, color: "#484f58", marginTop: 12, fontStyle: "italic" }}>
        Estimates based on current APY rates as of March 2026. Actual yields vary. Not financial advice.
      </p>
    </div>
  );
}
