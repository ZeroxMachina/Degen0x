'use client';

import { useState, useMemo } from "react";

// ── Interfaces ──────────────────────────────────────────────────────────────
interface TaxBracket {
  label: string;
  rate: number;
  threshold: string;
}

// ── Constants ───────────────────────────────────────────────────────────────
const SHORT_TERM_BRACKETS: TaxBracket[] = [
  { label: "10%", rate: 0.10, threshold: "Up to $11,925 (single)" },
  { label: "12%", rate: 0.12, threshold: "$11,926 – $48,475" },
  { label: "22%", rate: 0.22, threshold: "$48,476 – $103,350" },
  { label: "24%", rate: 0.24, threshold: "$103,351 – $197,300" },
  { label: "32%", rate: 0.32, threshold: "$197,301 – $250,525" },
  { label: "35%", rate: 0.35, threshold: "$250,526 – $626,350" },
  { label: "37%", rate: 0.37, threshold: "Over $626,350" },
];

const LONG_TERM_BRACKETS: TaxBracket[] = [
  { label: "0%", rate: 0.00, threshold: "Up to $48,350 (single)" },
  { label: "15%", rate: 0.15, threshold: "$48,351 – $533,400" },
  { label: "20%", rate: 0.20, threshold: "Over $533,400" },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
function fmtUSD(n: number): string {
  if (n < 0) return `-${fmtUSD(-n)}`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(2)}K`;
  return `$${n.toFixed(2)}`;
}

function fmtPct(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}

// ── Component ────────────────────────────────────────────────────────────────
export default function CryptoTaxEstimator() {
  const [salePrice, setSalePrice] = useState<string>("50000");
  const [costBasis, setCostBasis] = useState<string>("20000");
  const [holdingPeriod, setHoldingPeriod] = useState<"short" | "long">("long");
  const [taxBracketIdx, setTaxBracketIdx] = useState<number>(3); // 24% default
  const [ltBracketIdx, setLtBracketIdx] = useState<number>(1);   // 15% default
  const [includeNiit, setIncludeNiit] = useState(false);

  const result = useMemo(() => {
    const sale = parseFloat(salePrice) || 0;
    const basis = parseFloat(costBasis) || 0;
    const gain = sale - basis;

    if (gain === 0) return null;

    const isShort = holdingPeriod === "short";
    const rate = isShort
      ? SHORT_TERM_BRACKETS[taxBracketIdx].rate
      : LONG_TERM_BRACKETS[ltBracketIdx].rate;

    const niitRate = includeNiit ? 0.038 : 0;
    const effectiveRate = rate + niitRate;
    const taxOwed = gain > 0 ? gain * effectiveRate : 0;
    const afterTaxGain = gain - taxOwed;
    const roiGross = basis > 0 ? (gain / basis) * 100 : 0;
    const roiAfterTax = basis > 0 ? (afterTaxGain / basis) * 100 : 0;

    // Comparison: what if held long-term?
    const ltRate = LONG_TERM_BRACKETS[ltBracketIdx].rate;
    const ltTax = gain > 0 ? gain * (ltRate + niitRate) : 0;
    const savings = isShort ? taxOwed - ltTax : 0;

    return {
      gain,
      rate: effectiveRate,
      taxOwed,
      afterTaxGain,
      roiGross,
      roiAfterTax,
      savings,
      isGain: gain > 0,
    };
  }, [salePrice, costBasis, holdingPeriod, taxBracketIdx, ltBracketIdx, includeNiit]);

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    background: "#0d1117",
    border: "1px solid #30363d",
    borderRadius: 8,
    color: "#e6edf3",
    fontSize: 14,
    outline: "none",
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
      {/* Header */}
      <div
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 16,
          padding: "24px",
          marginBottom: 4,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: 20 }}>🧮</span>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", margin: 0 }}>
            Crypto Tax Estimator
          </h3>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: "2px 8px",
              background: "#3fb950/20",
              color: "#3fb950",
              border: "1px solid #3fb950/30",
              borderRadius: 20,
              backgroundColor: "rgba(63,185,80,0.15)",
              borderColor: "rgba(63,185,80,0.3)",
            }}
          >
            2025 Tax Year
          </span>
        </div>
        <p style={{ fontSize: 13, color: "#8b949e", margin: 0 }}>
          Estimate US capital gains tax on a crypto sale. For illustration only — consult a tax professional for your actual filing.
        </p>
      </div>

      <div
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 16,
          padding: "24px",
        }}
      >
        {/* Inputs Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 20,
          }}
        >
          {/* Sale Price */}
          <div>
            <label style={labelStyle}>Sale Price (USD)</label>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#58a6ff",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                $
              </span>
              <input
                type="number"
                min="0"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
                style={{ ...inputStyle, paddingLeft: 24 }}
                placeholder="50000"
              />
            </div>
          </div>

          {/* Cost Basis */}
          <div>
            <label style={labelStyle}>Cost Basis (USD)</label>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#58a6ff",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                $
              </span>
              <input
                type="number"
                min="0"
                value={costBasis}
                onChange={(e) => setCostBasis(e.target.value)}
                style={{ ...inputStyle, paddingLeft: 24 }}
                placeholder="20000"
              />
            </div>
          </div>

          {/* Holding Period */}
          <div>
            <label style={labelStyle}>Holding Period</label>
            <div style={{ display: "flex", gap: 8 }}>
              {(["short", "long"] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setHoldingPeriod(period)}
                  style={{
                    flex: 1,
                    padding: "10px 8px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "1px solid",
                    transition: "all 0.15s",
                    background:
                      holdingPeriod === period
                        ? period === "short"
                          ? "rgba(248,81,73,0.2)"
                          : "rgba(63,185,80,0.2)"
                        : "#0d1117",
                    borderColor:
                      holdingPeriod === period
                        ? period === "short"
                          ? "#f85149"
                          : "#3fb950"
                        : "#30363d",
                    color:
                      holdingPeriod === period
                        ? period === "short"
                          ? "#f85149"
                          : "#3fb950"
                        : "#8b949e",
                  }}
                >
                  {period === "short" ? "≤ 1 Year" : "> 1 Year"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tax Bracket Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 16,
          }}
        >
          {holdingPeriod === "short" ? (
            <div>
              <label style={labelStyle}>Your Income Bracket (Ordinary)</label>
              <select
                value={taxBracketIdx}
                onChange={(e) => setTaxBracketIdx(Number(e.target.value))}
                style={inputStyle}
              >
                {SHORT_TERM_BRACKETS.map((b, i) => (
                  <option key={i} value={i}>
                    {b.label} — {b.threshold}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <label style={labelStyle}>Long-Term Capital Gains Rate</label>
              <select
                value={ltBracketIdx}
                onChange={(e) => setLtBracketIdx(Number(e.target.value))}
                style={inputStyle}
              >
                {LONG_TERM_BRACKETS.map((b, i) => (
                  <option key={i} value={i}>
                    {b.label} — {b.threshold}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* NIIT Toggle */}
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <button
              onClick={() => setIncludeNiit((v) => !v)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 16px",
                background: includeNiit ? "rgba(99,102,241,0.2)" : "#0d1117",
                border: `1px solid ${includeNiit ? "#6366f1" : "#30363d"}`,
                borderRadius: 8,
                cursor: "pointer",
                color: includeNiit ? "#a371f7" : "#8b949e",
                fontSize: 13,
                fontWeight: 600,
                width: "100%",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 4,
                  border: `2px solid ${includeNiit ? "#6366f1" : "#30363d"}`,
                  background: includeNiit ? "#6366f1" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                {includeNiit ? "✓" : ""}
              </span>
              Include 3.8% NIIT
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div
            style={{
              marginTop: 24,
              padding: 20,
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
                marginBottom: 16,
              }}
            >
              Estimated Results
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 12,
              }}
            >
              {/* Capital Gain/Loss */}
              <div
                style={{
                  padding: 14,
                  background: result.isGain
                    ? "rgba(63,185,80,0.08)"
                    : "rgba(248,81,73,0.08)",
                  borderRadius: 10,
                  border: `1px solid ${result.isGain ? "rgba(63,185,80,0.25)" : "rgba(248,81,73,0.25)"}`,
                }}
              >
                <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>
                  {result.isGain ? "Capital Gain" : "Capital Loss"}
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: result.isGain ? "#3fb950" : "#f85149",
                  }}
                >
                  {fmtUSD(result.gain)}
                </p>
                <p style={{ fontSize: 11, color: "#8b949e", marginTop: 4 }}>
                  {result.roiGross >= 0 ? "+" : ""}
                  {result.roiGross.toFixed(1)}% ROI
                </p>
              </div>

              {/* Tax Rate */}
              <div
                style={{
                  padding: 14,
                  background: "#161b22",
                  borderRadius: 10,
                  border: "1px solid #30363d",
                }}
              >
                <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>
                  Effective Tax Rate
                </p>
                <p style={{ fontSize: 20, fontWeight: 800, color: "#e3b341" }}>
                  {fmtPct(result.rate)}
                </p>
                <p style={{ fontSize: 11, color: "#8b949e", marginTop: 4 }}>
                  {holdingPeriod === "short" ? "Short-term rate" : "Long-term rate"}
                  {includeNiit ? " + NIIT" : ""}
                </p>
              </div>

              {/* Tax Owed */}
              <div
                style={{
                  padding: 14,
                  background: "rgba(248,81,73,0.08)",
                  borderRadius: 10,
                  border: "1px solid rgba(248,81,73,0.25)",
                }}
              >
                <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>
                  Estimated Tax
                </p>
                <p style={{ fontSize: 20, fontWeight: 800, color: "#f85149" }}>
                  {fmtUSD(result.taxOwed)}
                </p>
                <p style={{ fontSize: 11, color: "#8b949e", marginTop: 4 }}>
                  Federal only (estimate)
                </p>
              </div>

              {/* After-Tax Gain */}
              <div
                style={{
                  padding: 14,
                  background: "rgba(88,166,255,0.08)",
                  borderRadius: 10,
                  border: "1px solid rgba(88,166,255,0.25)",
                }}
              >
                <p style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>
                  After-Tax Gain
                </p>
                <p style={{ fontSize: 20, fontWeight: 800, color: "#58a6ff" }}>
                  {fmtUSD(result.afterTaxGain)}
                </p>
                <p style={{ fontSize: 11, color: "#8b949e", marginTop: 4 }}>
                  {result.roiAfterTax.toFixed(1)}% net ROI
                </p>
              </div>
            </div>

            {/* Short-term vs Long-term Savings Alert */}
            {holdingPeriod === "short" && result.savings > 0 && (
              <div
                style={{
                  marginTop: 14,
                  padding: 14,
                  background: "rgba(63,185,80,0.08)",
                  borderRadius: 10,
                  border: "1px solid rgba(63,185,80,0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 18 }}>💡</span>
                <p style={{ fontSize: 13, color: "#8b949e", margin: 0 }}>
                  Holding longer than 12 months could save you{" "}
                  <strong style={{ color: "#3fb950" }}>{fmtUSD(result.savings)}</strong> in taxes
                  by qualifying for long-term capital gains rates.
                </p>
              </div>
            )}

            {/* Loss Benefit Note */}
            {!result.isGain && (
              <div
                style={{
                  marginTop: 14,
                  padding: 14,
                  background: "rgba(99,102,241,0.08)",
                  borderRadius: 10,
                  border: "1px solid rgba(99,102,241,0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 18 }}>📉</span>
                <p style={{ fontSize: 13, color: "#8b949e", margin: 0 }}>
                  A capital loss of{" "}
                  <strong style={{ color: "#a371f7" }}>{fmtUSD(Math.abs(result.gain))}</strong>{" "}
                  can offset capital gains or deduct up to $3,000 against ordinary income per year, with unlimited carryforward.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Disclaimer */}
        <p style={{ fontSize: 11, color: "#6e7681", marginTop: 16, lineHeight: 1.5 }}>
          ⚠️ This calculator is for educational purposes only and provides estimates based on federal tax rates. It does not account for state taxes, the alternative minimum tax, or other factors specific to your situation. Consult a qualified tax professional before filing.
        </p>
      </div>
    </div>
  );
}
