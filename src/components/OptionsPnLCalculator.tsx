'use client';

import { useState, useMemo, useCallback } from "react";

// ── Interfaces ──────────────────────────────────────────────────────────────
interface CalcInputs {
  optionType: "call" | "put";
  position: "buy" | "sell";
  strikePrice: number;
  premium: number;
  underlyingPrice: number;
  contractSize: number;
}

interface PnLPoint {
  price: number;
  pnl: number;
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function calcPnL(inputs: CalcInputs, priceAtExpiry: number): number {
  const { optionType, position, strikePrice, premium, contractSize } = inputs;
  let intrinsicValue: number;

  if (optionType === "call") {
    intrinsicValue = Math.max(0, priceAtExpiry - strikePrice);
  } else {
    intrinsicValue = Math.max(0, strikePrice - priceAtExpiry);
  }

  const grossPnL = (intrinsicValue - premium) * contractSize;
  return position === "buy" ? grossPnL : -grossPnL;
}

function formatCurrency(n: number): string {
  const abs = Math.abs(n);
  const sign = n < 0 ? "-" : "+";
  if (abs >= 1_000) return `${sign}$${abs.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  return `${sign}$${abs.toFixed(2)}`;
}

function formatPrice(n: number): string {
  if (n >= 10_000) return `$${n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  if (n >= 100) return `$${n.toFixed(2)}`;
  return `$${n.toFixed(4)}`;
}

// ── SVG P&L Chart ────────────────────────────────────────────────────────────
function PnLChart({ points, breakEven }: { points: PnLPoint[]; breakEven: number[] }) {
  const W = 580;
  const H = 260;
  const PAD = { top: 20, right: 20, bottom: 36, left: 64 };
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;

  const prices = points.map((p) => p.price);
  const pnls = points.map((p) => p.pnl);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const minPnl = Math.min(...pnls);
  const maxPnl = Math.max(...pnls);
  const pnlRange = Math.max(maxPnl - minPnl, 1);

  const toX = (price: number) =>
    PAD.left + ((price - minPrice) / (maxPrice - minPrice)) * plotW;
  const toY = (pnl: number) =>
    PAD.top + plotH - ((pnl - minPnl) / pnlRange) * plotH;

  const linePath = points.map((p, i) =>
    `${i === 0 ? "M" : "L"} ${toX(p.price).toFixed(2)} ${toY(p.pnl).toFixed(2)}`
  ).join(" ");

  // Build fill regions by tracing the P&L line and closing back to the zero line
  const zeroY = toY(0);
  const clampedZeroY = Math.max(PAD.top, Math.min(PAD.top + plotH, zeroY));

  // Profit fill: trace the line, then close along the zero line
  const profitFill = `M ${toX(points[0].price).toFixed(2)} ${clampedZeroY} ` +
    points
      .map((p) => {
        const y = toY(Math.max(0, p.pnl));
        return `L ${toX(p.price).toFixed(2)} ${y.toFixed(2)}`;
      })
      .join(" ") +
    ` L ${toX(points[points.length - 1].price).toFixed(2)} ${clampedZeroY} Z`;

  // Loss fill: trace the line, then close along the zero line
  const lossFill = `M ${toX(points[0].price).toFixed(2)} ${clampedZeroY} ` +
    points
      .map((p) => {
        const y = toY(Math.min(0, p.pnl));
        return `L ${toX(p.price).toFixed(2)} ${y.toFixed(2)}`;
      })
      .join(" ") +
    ` L ${toX(points[points.length - 1].price).toFixed(2)} ${clampedZeroY} Z`;

  // Y-axis ticks
  const yTicks = 5;
  const yTickValues = Array.from({ length: yTicks }, (_, i) =>
    minPnl + (pnlRange / (yTicks - 1)) * i
  );

  // X-axis ticks
  const xTicks = 5;
  const xTickValues = Array.from({ length: xTicks }, (_, i) =>
    minPrice + ((maxPrice - minPrice) / (xTicks - 1)) * i
  );

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ width: "100%", maxWidth: "100%", display: "block", height: "auto" }}
      aria-label="Options profit and loss chart showing P&L curve from 40% to 180% of strike price"
      role="img"
    >
      <defs>
        <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="lossGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.25" />
        </linearGradient>
        <clipPath id="chartClip">
          <rect x={PAD.left} y={PAD.top} width={plotW} height={plotH} />
        </clipPath>
      </defs>

      {/* Grid lines */}
      {yTickValues.map((v, i) => (
        <line
          key={i}
          x1={PAD.left}
          y1={toY(v)}
          x2={PAD.left + plotW}
          y2={toY(v)}
          stroke="#30363d"
          strokeWidth="1"
          strokeDasharray={v === 0 ? "none" : "3,3"}
        />
      ))}

      {/* Zero line (prominent) */}
      {minPnl < 0 && maxPnl > 0 && (
        <line
          x1={PAD.left}
          y1={toY(0)}
          x2={PAD.left + plotW}
          y2={toY(0)}
          stroke="#8b949e"
          strokeWidth="1.5"
        />
      )}

      {/* Profit fill */}
      <path
        d={profitFill}
        fill="url(#profitGrad)"
        clipPath="url(#chartClip)"
        opacity="0.8"
      />

      {/* Loss fill */}
      <path
        d={lossFill}
        fill="url(#lossGrad)"
        clipPath="url(#chartClip)"
        opacity="0.8"
      />

      {/* P&L line */}
      <path
        d={linePath}
        fill="none"
        stroke="#58a6ff"
        strokeWidth="2"
        clipPath="url(#chartClip)"
      />

      {/* Break-even markers */}
      {breakEven.map((be) => {
        const x = toX(be);
        if (x < PAD.left || x > PAD.left + plotW) return null;
        return (
          <g key={be}>
            <line
              x1={x}
              y1={PAD.top}
              x2={x}
              y2={PAD.top + plotH}
              stroke="#d29922"
              strokeWidth="1.5"
              strokeDasharray="4,3"
            />
            <text
              x={x + 4}
              y={PAD.top + 12}
              fill="#d29922"
              fontSize="10"
              fontFamily="monospace"
            >
              BE: {formatPrice(be)}
            </text>
          </g>
        );
      })}

      {/* Y-axis labels */}
      {yTickValues.map((v, i) => (
        <text
          key={i}
          x={PAD.left - 6}
          y={toY(v) + 4}
          fill="#8b949e"
          fontSize="10"
          textAnchor="end"
          fontFamily="monospace"
        >
          {v === 0 ? "$0" : formatCurrency(v).replace("+", "")}
        </text>
      ))}

      {/* X-axis labels */}
      {xTickValues.map((v, i) => (
        <text
          key={i}
          x={toX(v)}
          y={H - 6}
          fill="#8b949e"
          fontSize="10"
          textAnchor="middle"
          fontFamily="monospace"
        >
          {formatPrice(v)}
        </text>
      ))}

      {/* Axis lines */}
      <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={PAD.top + plotH} stroke="#30363d" strokeWidth="1" />
      <line x1={PAD.left} y1={PAD.top + plotH} x2={PAD.left + plotW} y2={PAD.top + plotH} stroke="#30363d" strokeWidth="1" />
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function OptionsPnLCalculator() {
  const [inputs, setInputs] = useState<CalcInputs>({
    optionType: "call",
    position: "buy",
    strikePrice: 3500,
    premium: 120,
    underlyingPrice: 3500,
    contractSize: 1,
  });

  const update = useCallback(
    (key: keyof CalcInputs, value: string | number) => {
      if (typeof value === "number") {
        // Prevent negative or zero values for price inputs
        if ((key === "strikePrice" || key === "underlyingPrice") && value < 0.01) value = 0.01;
        if (key === "premium" && value < 0) value = 0;
        if (key === "contractSize" && value < 0.01) value = 0.01;
        // Cap to reasonable maximums to prevent rendering issues
        if (value > 10_000_000) value = 10_000_000;
      }
      setInputs((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  // Current P&L
  const currentPnL = useMemo(
    () => calcPnL(inputs, inputs.underlyingPrice),
    [inputs]
  );

  // Break-even price(s)
  const breakEven = useMemo((): number[] => {
    const { optionType, position, strikePrice, premium } = inputs;
    if (optionType === "call") {
      return [strikePrice + premium];
    } else {
      return [strikePrice - premium];
    }
  }, [inputs]);

  // Max profit / max loss
  const maxProfit = useMemo(() => {
    const { optionType, position, premium, contractSize } = inputs;
    if (position === "buy") {
      if (optionType === "call") return Infinity; // theoretically unlimited
      return (inputs.strikePrice - premium) * contractSize; // put: price goes to 0
    } else {
      // Selling
      return premium * contractSize; // max profit = premium collected
    }
  }, [inputs]);

  const maxLoss = useMemo(() => {
    const { optionType, position, premium, contractSize, strikePrice } = inputs;
    if (position === "buy") {
      return -premium * contractSize; // max loss = premium paid
    } else {
      if (optionType === "call") return -Infinity; // unlimited risk for naked call seller
      return -(strikePrice - premium) * contractSize; // put seller: price goes to 0
    }
  }, [inputs]);

  // P&L curve points — 100 points from 50% below strike to 150% above
  const pnlPoints = useMemo((): PnLPoint[] => {
    const { strikePrice } = inputs;
    const low = strikePrice * 0.4;
    const high = strikePrice * 1.8;
    const step = (high - low) / 99;
    return Array.from({ length: 100 }, (_, i) => {
      const price = low + step * i;
      return { price, pnl: calcPnL(inputs, price) };
    });
  }, [inputs]);

  const pnlColor = currentPnL >= 0 ? "#22c55e" : "#f85149";

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0d1117",
    border: "1px solid #30363d",
    borderRadius: 8,
    padding: "8px 12px",
    color: "#e6edf3",
    fontSize: 14,
    fontFamily: "monospace",
    outline: "none",
    minHeight: 44,
    boxSizing: "border-box" as const,
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#8b949e",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  };

  const btnBase: React.CSSProperties = {
    flex: 1,
    padding: "8px 0",
    minHeight: 44,
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    border: "1px solid #30363d",
    transition: "all 0.15s",
  };

  return (
    <div role="region" aria-label="Options Profit and Loss Calculator" style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 16, padding: 24 }}>
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 4 }}>
          Options P&amp;L Calculator
        </h3>
        <p style={{ fontSize: 13, color: "#8b949e", margin: 0 }}>
          Visualize your profit &amp; loss for any crypto option position.
        </p>
      </div>

      {/* Option Type + Position selectors */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 20 }}>
        <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
          <legend style={labelStyle}>Option Type</legend>
          <div style={{ display: "flex", gap: 8 }}>
            {(["call", "put"] as const).map((type) => (
              <button
                key={type}
                onClick={() => update("optionType", type)}
                aria-pressed={inputs.optionType === type}
                aria-label={`${type === "call" ? "Call" : "Put"} option`}
                style={{
                  ...btnBase,
                  background:
                    inputs.optionType === type
                      ? type === "call"
                        ? "#22c55e20"
                        : "#f8514920"
                      : "#0d1117",
                  color:
                    inputs.optionType === type
                      ? type === "call"
                        ? "#22c55e"
                        : "#f85149"
                      : "#8b949e",
                  borderColor:
                    inputs.optionType === type
                      ? type === "call"
                        ? "#22c55e60"
                        : "#f8514960"
                      : "#30363d",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {type === "call" ? "📈 Call" : "📉 Put"}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
          <legend style={labelStyle}>Position</legend>
          <div style={{ display: "flex", gap: 8 }}>
            {(["buy", "sell"] as const).map((pos) => (
              <button
                key={pos}
                onClick={() => update("position", pos)}
                aria-pressed={inputs.position === pos}
                aria-label={`${pos === "buy" ? "Buy" : "Sell"} position`}
                style={{
                  ...btnBase,
                  background: inputs.position === pos ? "#6366f120" : "#0d1117",
                  color: inputs.position === pos ? "#818cf8" : "#8b949e",
                  borderColor: inputs.position === pos ? "#6366f160" : "#30363d",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {pos === "buy" ? "Buy" : "Sell"}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Numeric inputs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, marginBottom: 24 }}>
        {([
          { key: "strikePrice", label: "Strike Price ($)", min: 1, step: 10 },
          { key: "premium", label: "Premium Paid ($)", min: 0.01, step: 1 },
          { key: "underlyingPrice", label: "Price at Expiry ($)", min: 1, step: 10 },
          { key: "contractSize", label: "Contract Size", min: 0.01, step: 0.1 },
        ] as const).map(({ key, label, min, step }) => (
          <div key={key}>
            <label htmlFor={`pnl-${key}`} style={labelStyle}>{label}</label>
            <input
              id={`pnl-${key}`}
              type="number"
              min={min}
              step={step}
              value={inputs[key]}
              inputMode="decimal"
              onChange={(e) => update(key, parseFloat(e.target.value) || 0)}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.boxShadow = "0 0 0 2px #6366f140"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#30363d"; e.currentTarget.style.boxShadow = "none"; }}
              aria-label={label}
              style={inputStyle}
            />
          </div>
        ))}
      </div>

      {/* P&L Chart */}
      <div style={{ background: "#0d1117", borderRadius: 12, padding: "16px 8px 8px", marginBottom: 20 }}>
        <PnLChart points={pnlPoints} breakEven={breakEven} />
        <p style={{ textAlign: "center", fontSize: 11, color: "#8b949e", margin: "4px 0 0" }}>
          Price at expiry → Profit / Loss &nbsp;|&nbsp;
          <span style={{ color: "#d29922" }}>━ ━</span> Break-even
        </p>
      </div>

      {/* Results */}
      <div aria-live="polite" aria-atomic="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
        {[
          {
            label: "P&L at Selected Price",
            value: formatCurrency(currentPnL),
            color: pnlColor,
            bg: currentPnL >= 0 ? "#22c55e15" : "#f8514915",
            border: currentPnL >= 0 ? "#22c55e30" : "#f8514930",
          },
          {
            label: "Break-even Price",
            value: breakEven.map(formatPrice).join(" / "),
            color: "#d29922",
            bg: "#d2992215",
            border: "#d2992230",
          },
          {
            label: "Max Profit",
            value: maxProfit === Infinity ? "Unlimited" : maxProfit === -Infinity ? "Unlimited Loss" : formatCurrency(maxProfit),
            color: "#22c55e",
            bg: "#22c55e15",
            border: "#22c55e30",
          },
          {
            label: "Max Loss",
            value: maxLoss === -Infinity ? "Unlimited" : formatCurrency(maxLoss),
            color: "#f85149",
            bg: "#f8514915",
            border: "#f8514930",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: stat.bg,
              border: `1px solid ${stat.border}`,
              borderRadius: 10,
              padding: "12px 14px",
            }}
          >
            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              {stat.label}
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: stat.color, fontFamily: "monospace" }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, color: "#8b949e", marginTop: 14, textAlign: "center" }}>
        ⚠️ For educational purposes only. Not financial advice. Values are estimates.
      </p>
    </div>
  );
}
