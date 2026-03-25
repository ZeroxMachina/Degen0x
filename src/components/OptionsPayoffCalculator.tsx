'use client';

import { useState, useMemo } from "react";

// ── Interfaces ───────────────────────────────────────────────────────────────
interface OptionsPayoffProps {
  compact?: boolean;
}

type OptionType = "call" | "put";
type Position = "buy" | "sell";

// ── Helpers ──────────────────────────────────────────────────────────────────
function calcPayoff(
  type: OptionType,
  position: Position,
  strikePrice: number,
  premium: number,
  spotAtExpiry: number
): number {
  let intrinsic = 0;
  if (type === "call") {
    intrinsic = Math.max(0, spotAtExpiry - strikePrice);
  } else {
    intrinsic = Math.max(0, strikePrice - spotAtExpiry);
  }
  const gross = position === "buy" ? intrinsic - premium : premium - intrinsic;
  return gross;
}

function fmtUSD(n: number): string {
  const abs = Math.abs(n);
  const sign = n < 0 ? "-" : "+";
  if (abs >= 1000) return `${sign}$${(abs / 1000).toFixed(1)}K`;
  return `${sign}$${abs.toFixed(0)}`;
}

// ── Component ────────────────────────────────────────────────────────────────
export default function OptionsPayoffCalculator({ compact = false }: OptionsPayoffProps) {
  const [optionType, setOptionType] = useState<OptionType>("call");
  const [position, setPosition] = useState<Position>("buy");
  const [strikePrice, setStrikePrice] = useState(3500);
  const [premium, setPremium] = useState(120);
  const [spotPrice, setSpotPrice] = useState(3200);
  const [contracts, setContracts] = useState(1);

  // Generate payoff curve data points
  const payoffData = useMemo(() => {
    const low = Math.max(strikePrice * 0.4, 100);
    const high = strikePrice * 1.8;
    const steps = 80;
    const step = (high - low) / steps;
    return Array.from({ length: steps + 1 }, (_, i) => {
      const spot = low + i * step;
      const pnl = calcPayoff(optionType, position, strikePrice, premium, spot) * contracts;
      return { spot, pnl };
    });
  }, [optionType, position, strikePrice, premium, contracts]);

  // Current P&L
  const currentPnL = useMemo(
    () => calcPayoff(optionType, position, strikePrice, premium, spotPrice) * contracts,
    [optionType, position, strikePrice, premium, spotPrice, contracts]
  );

  // Breakeven
  const breakeven = useMemo(() => {
    if (optionType === "call") return position === "buy" ? strikePrice + premium : strikePrice + premium;
    return position === "buy" ? strikePrice - premium : strikePrice - premium;
  }, [optionType, position, strikePrice, premium]);

  // Max profit / loss
  const maxLoss = position === "buy" ? -premium * contracts : -Infinity;
  const maxProfit = position === "sell"
    ? premium * contracts
    : (optionType === "call" ? Infinity : (strikePrice - premium) * contracts);

  // SVG chart
  const chartWidth = 540;
  const chartHeight = 180;
  const padding = { top: 16, right: 16, bottom: 32, left: 56 };
  const innerW = chartWidth - padding.left - padding.right;
  const innerH = chartHeight - padding.top - padding.bottom;

  const allPnls = payoffData.map((d) => d.pnl);
  const minPnl = Math.min(...allPnls);
  const maxPnl = Math.max(...allPnls);
  const pnlRange = maxPnl - minPnl || 1;
  const spotRange = payoffData[payoffData.length - 1].spot - payoffData[0].spot;

  const toX = (spot: number) =>
    padding.left + ((spot - payoffData[0].spot) / spotRange) * innerW;
  const toY = (pnl: number) =>
    padding.top + innerH - ((pnl - minPnl) / pnlRange) * innerH;

  const zeroY = toY(0);
  const linePath = payoffData
    .map((d, i) => `${i === 0 ? "M" : "L"}${toX(d.spot).toFixed(1)},${toY(d.pnl).toFixed(1)}`)
    .join(" ");

  // Area paths split at zero
  const profitArea = payoffData
    .map((d, i) => `${i === 0 ? "M" : "L"}${toX(d.spot).toFixed(1)},${Math.min(toY(d.pnl), zeroY).toFixed(1)}`)
    .join(" ") + ` L${toX(payoffData[payoffData.length - 1].spot).toFixed(1)},${zeroY.toFixed(1)} L${toX(payoffData[0].spot).toFixed(1)},${zeroY.toFixed(1)} Z`;

  const lossArea = payoffData
    .map((d, i) => `${i === 0 ? "M" : "L"}${toX(d.spot).toFixed(1)},${Math.max(toY(d.pnl), zeroY).toFixed(1)}`)
    .join(" ") + ` L${toX(payoffData[payoffData.length - 1].spot).toFixed(1)},${zeroY.toFixed(1)} L${toX(payoffData[0].spot).toFixed(1)},${zeroY.toFixed(1)} Z`;

  return (
    <div
      role="region"
      aria-label="Options Payoff Calculator"
      style={{
        background: "var(--glass-bg, #161b22)",
        border: "1px solid var(--glass-border, #30363d)",
        borderRadius: 16,
        padding: compact ? 16 : 24,
        maxWidth: 620,
        width: "100%",
        boxSizing: "border-box",
      }}>
      {/* Title */}
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text, #e6edf3)", margin: 0 }}>
          📊 Options Payoff Calculator
        </h2>
        <p style={{ fontSize: 13, color: "#8b949e", marginTop: 4 }}>
          Visualize your P&amp;L profile at expiry for any option position.
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}>

        {/* Option Type */}
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, display: "block", marginBottom: 6 }}>OPTION TYPE</label>
          <div style={{ display: "flex", gap: 8 }}>
            {(["call", "put"] as OptionType[]).map((t) => (
              <button
                key={t}
                onClick={() => setOptionType(t)}
                aria-pressed={optionType === t}
                aria-label={`${t === "call" ? "Call" : "Put"} option`}
                style={{
                  flex: 1, padding: "8px 0", minHeight: 44, borderRadius: 8, fontSize: 13, fontWeight: 700,
                  cursor: "pointer", border: "1px solid",
                  background: optionType === t ? (t === "call" ? "#22c55e20" : "#f8514920") : "transparent",
                  borderColor: optionType === t ? (t === "call" ? "#22c55e80" : "#f8514980") : "#30363d",
                  color: optionType === t ? (t === "call" ? "#22c55e" : "#f85149") : "#8b949e",
                }}
              >
                {t === "call" ? "📈 Call" : "📉 Put"}
              </button>
            ))}
          </div>
        </div>

        {/* Position */}
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, display: "block", marginBottom: 6 }}>POSITION</label>
          <div style={{ display: "flex", gap: 8 }}>
            {(["buy", "sell"] as Position[]).map((p) => (
              <button
                key={p}
                onClick={() => setPosition(p)}
                aria-pressed={position === p}
                aria-label={`${p === "buy" ? "Buy" : "Sell"} position`}
                style={{
                  flex: 1, padding: "8px 0", minHeight: 44, borderRadius: 8, fontSize: 13, fontWeight: 700,
                  cursor: "pointer", border: "1px solid",
                  background: position === p ? "#6366f120" : "transparent",
                  borderColor: position === p ? "#6366f180" : "#30363d",
                  color: position === p ? "#818cf8" : "#8b949e",
                }}
              >
                {p === "buy" ? "Buy" : "Sell"}
              </button>
            ))}
          </div>
        </div>

        {/* Strike Price */}
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, display: "block", marginBottom: 6 }}>
            STRIKE PRICE: ${strikePrice.toLocaleString()}
          </label>
          <input
            type="range"
            min={500}
            max={10000}
            step={50}
            value={strikePrice}
            onChange={(e) => setStrikePrice(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#6366f1" }}
          />
        </div>

        {/* Premium */}
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, display: "block", marginBottom: 6 }}>
            PREMIUM (per contract): ${premium}
          </label>
          <input
            type="range"
            min={10}
            max={1000}
            step={10}
            value={premium}
            onChange={(e) => setPremium(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#6366f1" }}
          />
        </div>

        {/* Spot at Expiry */}
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, display: "block", marginBottom: 6 }}>
            SPOT PRICE NOW: ${spotPrice.toLocaleString()}
          </label>
          <input
            type="range"
            min={500}
            max={10000}
            step={50}
            value={spotPrice}
            onChange={(e) => setSpotPrice(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#06b6d4" }}
          />
        </div>

        {/* Contracts */}
        <div>
          <label style={{ fontSize: 12, color: "#8b949e", fontWeight: 600, display: "block", marginBottom: 6 }}>
            CONTRACTS: {contracts}
          </label>
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={contracts}
            onChange={(e) => setContracts(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#6366f1" }}
          />
        </div>
      </div>

      {/* Summary Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 8, marginBottom: 20 }}>
        {[
          {
            label: "P&L at Current Spot",
            value: fmtUSD(currentPnL),
            color: currentPnL >= 0 ? "#22c55e" : "#f85149",
          },
          {
            label: "Breakeven",
            value: `$${breakeven.toLocaleString()}`,
            color: "#8b949e",
          },
          {
            label: "Max Loss",
            value: maxLoss === -Infinity ? "Unlimited" : fmtUSD(maxLoss),
            color: "#f85149",
          },
          {
            label: "Max Profit",
            value: maxProfit === Infinity ? "Unlimited" : fmtUSD(maxProfit),
            color: "#22c55e",
          },
        ].map((stat) => (
          <div key={stat.label} style={{ background: "#0d1117", border: "1px solid #21262d", borderRadius: 10, padding: "10px 14px" }}>
            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>{stat.label}</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: stat.color }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* SVG Payoff Chart */}
      <div style={{ background: "#0d1117", border: "1px solid #21262d", borderRadius: 12, padding: "12px 0 4px", overflow: "hidden" }}>
        <div style={{ fontSize: 12, color: "#8b949e", paddingLeft: 16, marginBottom: 4, fontWeight: 600 }} id="payoff-chart-label">PAYOFF AT EXPIRY</div>
        <svg width="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="payoff-chart-label" aria-describedby="payoff-chart-desc">
          <desc id="payoff-chart-desc">
            {`Options payoff chart showing P&L for a ${position} ${optionType} position. Strike: $${strikePrice}, Premium: $${premium}, Current P&L: ${fmtUSD(currentPnL)}`}
          </desc>
          {/* Zero line */}
          <line
            x1={padding.left} y1={zeroY}
            x2={chartWidth - padding.right} y2={zeroY}
            stroke="#30363d" strokeWidth="1" strokeDasharray="4 4"
          />
          {/* Profit area */}
          <path d={profitArea} fill="#22c55e" opacity="0.15" />
          {/* Loss area */}
          <path d={lossArea} fill="#f85149" opacity="0.15" />
          {/* Line */}
          <path d={linePath} fill="none" stroke="#6366f1" strokeWidth="2" />
          {/* Current spot marker */}
          <line
            x1={toX(spotPrice)} y1={padding.top}
            x2={toX(spotPrice)} y2={chartHeight - padding.bottom}
            stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3"
          />
          <circle cx={toX(spotPrice)} cy={toY(currentPnL)} r="5" fill="#06b6d4" aria-label={`Current spot: $${spotPrice.toLocaleString()}, P&L: ${fmtUSD(currentPnL)}`} />
          {/* Invisible larger touch target for mobile */}
          <circle cx={toX(spotPrice)} cy={toY(currentPnL)} r="20" fill="transparent" />
          {/* Axes labels */}
          <text x={padding.left - 4} y={zeroY + 4} fill="#8b949e" fontSize="10" textAnchor="end">$0</text>
          <text x={padding.left - 4} y={padding.top + 8} fill="#22c55e" fontSize="10" textAnchor="end">
            +{fmtUSD(Math.max(...allPnls))}
          </text>
          <text x={padding.left - 4} y={chartHeight - padding.bottom - 2} fill="#f85149" fontSize="10" textAnchor="end">
            {fmtUSD(Math.min(...allPnls))}
          </text>
          {/* Strike label */}
          <line
            x1={toX(strikePrice)} y1={padding.top}
            x2={toX(strikePrice)} y2={chartHeight - padding.bottom}
            stroke="#d29922" strokeWidth="1" strokeDasharray="2 3"
          />
          <text x={toX(strikePrice)} y={chartHeight - padding.bottom + 14} fill="#d29922" fontSize="10" textAnchor="middle">
            Strike ${strikePrice.toLocaleString()}
          </text>
        </svg>
        <div style={{ display: "flex", gap: 16, padding: "0 16px 10px", fontSize: 11, color: "#8b949e" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 12, height: 2, background: "#06b6d4", display: "inline-block" }} /> Current spot
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 12, height: 2, background: "#d29922", display: "inline-block", borderTop: "1px dashed #d29922" }} /> Strike
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 12, height: 2, background: "#6366f1", display: "inline-block" }} /> P&amp;L curve
          </span>
        </div>
      </div>

      <p style={{ fontSize: 12, color: "#484f58", marginTop: 12, lineHeight: 1.5 }}>
        ⚠️ For educational purposes only. Does not account for fees, early exercise, IV changes, or real market conditions.
      </p>
    </div>
  );
}
