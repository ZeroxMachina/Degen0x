'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

// ── Types ────────────────────────────────────────────────────────────────────
interface GreeksValue {
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  rho: number;
}

interface StrategyLeg {
  type: "call" | "put";
  strike: number;
  premium: number;
  quantity: number;
  side: "buy" | "sell";
}

// ── Utility Functions ────────────────────────────────────────────────────────
function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

// Black-Scholes approximation for Greeks
function normalDistribution(x: number): number {
  return Math.exp((-x * x) / 2) / Math.sqrt(2 * Math.PI);
}

function cumulativeNormal(x: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp((-x * x) / 2);
  const prob = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return x >= 0 ? 1 - prob : prob;
}

function calculateBlackScholesGreeks(
  S: number,
  K: number,
  T: number,
  r: number,
  sigma: number,
  isCall: boolean
): GreeksValue {
  if (T <= 0 || sigma <= 0) {
    return { delta: isCall ? 1 : 0, gamma: 0, theta: 0, vega: 0, rho: 0 };
  };

  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);

  const N_d1 = cumulativeNormal(d1);
  const N_d2 = cumulativeNormal(d2);
  const n_d1 = normalDistribution(d1);

  let delta = isCall ? N_d1 : N_d1 - 1;
  const gamma = n_d1 / (S * sigma * Math.sqrt(T));
  const theta = isCall
    ? (-(S * n_d1 * sigma) / (2 * Math.sqrt(T)) - r * K * Math.exp(-r * T) * N_d2) / 365
    : (-(S * n_d1 * sigma) / (2 * Math.sqrt(T)) + r * K * Math.exp(-r * T) * (1 - N_d2)) / 365;
  const vega = (S * n_d1 * Math.sqrt(T)) / 100;
  const rho = isCall
    ? (K * T * Math.exp(-r * T) * N_d2) / 100
    : (-(K * T * Math.exp(-r * T) * (1 - N_d2)) / 100);

  return { delta, gamma, theta, vega, rho };
}

function calculateOptionValue(
  S: number,
  K: number,
  T: number,
  r: number,
  sigma: number,
  isCall: boolean
): number {
  if (T <= 0) {
    return isCall ? Math.max(S - K, 0) : Math.max(K - S, 0);
  };

  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);

  const N_d1 = cumulativeNormal(d1);
  const N_d2 = cumulativeNormal(d2);

  if (isCall) {
    return S * N_d1 - K * Math.exp(-r * T) * N_d2;
  } else {
    return K * Math.exp(-r * T) * (1 - N_d2) - S * (1 - N_d1);
  }
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function OptionsCalculatorPage() {
  const [optionType, setOptionType] = useState<"call" | "put">("call");
  const [underlyingPrice, setUnderlyingPrice] = useState(50000);
  const [strikePrice, setStrikePrice] = useState(50000);
  const [premiumPaid, setPremiumPaid] = useState(2000);
  const [quantity, setQuantity] = useState(1);
  const [daysToExpiry, setDaysToExpiry] = useState(30);
  const [impliedVolatility, setImpliedVolatility] = useState(0.25);
  const [riskFreeRate, setRiskFreeRate] = useState(0.05);
  const [strategy, setStrategy] = useState("single");

  // Strategy legs state
  const [legs, setLegs] = useState<StrategyLeg[]>([
    { type: "call", strike: 50000, premium: 2000, quantity: 1, side: "buy" },
  ]);

  // Predefined strategies
  const strategyPresets: Record<string, StrategyLeg[]> = {
    single: [{ type: "call", strike: 50000, premium: 2000, quantity: 1, side: "buy" }],
    longCall: [{ type: "call", strike: 50000, premium: 2000, quantity: 1, side: "buy" }],
    longPut: [{ type: "put", strike: 50000, premium: 1500, quantity: 1, side: "buy" }],
    bullCallSpread: [
      { type: "call", strike: 48000, premium: 3000, quantity: 1, side: "buy" },
      { type: "call", strike: 52000, premium: 1000, quantity: 1, side: "sell" },
    ],
    bearPutSpread: [
      { type: "put", strike: 50000, premium: 2000, quantity: 1, side: "sell" },
      { type: "put", strike: 48000, premium: 1000, quantity: 1, side: "buy" },
    ],
    straddle: [
      { type: "call", strike: 50000, premium: 2000, quantity: 1, side: "buy" },
      { type: "put", strike: 50000, premium: 2000, quantity: 1, side: "buy" },
    ],
  };

  const handleStrategySelect = (strategyKey: string) => {
    setStrategy(strategyKey);
    setLegs(strategyPresets[strategyKey].map(l => ({ ...l })));
  };

  // Calculate P&L for all legs across price range
  const T = daysToExpiry / 365;

  const calculateStrategyPnL = (priceAtExpiry: number) => {
    let totalPnL = 0;
    legs.forEach(leg => {
      const intrinsicValue = leg.type === "call"
        ? Math.max(priceAtExpiry - leg.strike, 0)
        : Math.max(leg.strike - priceAtExpiry, 0);

      const legValue = intrinsicValue * leg.quantity * 100;
      const legCost = leg.premium * leg.quantity * 100;

      if (leg.side === "buy") {
        totalPnL += legValue - legCost;
      } else {
        totalPnL += legCost - legValue;
      }
    });
    return totalPnL;
  };

  // Calculate Greeks for current single leg
  const greeks = useMemo(() => {
    if (optionType && strikePrice > 0 && underlyingPrice > 0) {
      return calculateBlackScholesGreeks(
        underlyingPrice,
        strikePrice,
        T,
        riskFreeRate,
        impliedVolatility,
        optionType === "call"
      );
    }
    return { delta: 0, gamma: 0, theta: 0, vega: 0, rho: 0 };
  }, [underlyingPrice, strikePrice, T, riskFreeRate, impliedVolatility, optionType]);

  // Calculate max profit/loss and breakevens
  const maxPnL = useMemo(() => {
    let maxProfit = 0,
      maxLoss = 0;
    const prices = Array.from({ length: 201 }, (_, i) => underlyingPrice * 0.5 + (underlyingPrice * i) / 200);

    prices.forEach(price => {
      const pnl = calculateStrategyPnL(price);
      maxProfit = Math.max(maxProfit, pnl);
      maxLoss = Math.min(maxLoss, pnl);
    });

    return { maxProfit, maxLoss };
  }, [legs, underlyingPrice]);

  // Find breakeven prices
  const breakevens = useMemo(() => {
    const be: number[] = [];
    let prevPnL = calculateStrategyPnL(underlyingPrice * 0.5);

    for (let price = underlyingPrice * 0.5; price <= underlyingPrice * 1.5; price += underlyingPrice * 0.001) {
      const pnl = calculateStrategyPnL(price);
      if ((prevPnL < 0 && pnl >= 0) || (prevPnL > 0 && pnl <= 0)) {
        be.push(price);
      }
      prevPnL = pnl;
    }

    return be.slice(0, 3);
  }, [legs, underlyingPrice]);

  // Generate SVG chart data
  const chartPrices = Array.from({ length: 201 }, (_, i) => underlyingPrice * 0.5 + (underlyingPrice * i) / 200);
  const chartPnLs = chartPrices.map(p => calculateStrategyPnL(p));
  const minPnL = Math.min(...chartPnLs);
  const maxPnLChart = Math.max(...chartPnLs);
  const pnLRange = maxPnLChart - minPnL || 1;

  const svgWidth = 600,
    svgHeight = 300;
  const padding = { top: 30, right: 30, bottom: 40, left: 50 };
  const plotWidth = svgWidth - padding.left - padding.right;
  const plotHeight = svgHeight - padding.top - padding.bottom;

  const scalePrice = (price: number) => {
    const minPrice = underlyingPrice * 0.5;
    const maxPrice = underlyingPrice * 1.5;
    return ((price - minPrice) / (maxPrice - minPrice)) * plotWidth + padding.left;
  };

  const scalePnL = (pnl: number) => {
    return padding.top + plotHeight - ((pnl - minPnL) / pnLRange) * plotHeight;
  };

  const pathData = chartPrices
    .map((p, i) => `${i === 0 ? "M" : "L"} ${scalePrice(p)} ${scalePnL(chartPnLs[i])}`)
    .join(" ");

  const currentPnL = calculateStrategyPnL(underlyingPrice);
  const isProfitable = currentPnL >= 0;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb
          items={[
            { label: "Tools", href: "/tools" },
            { label: "Options Calculator", href: "/tools/options-calculator" },
          ]}
        />

        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "var(--color-text)", marginBottom: 8 }}>
            📈 Options P&L Calculator with Greeks
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 15 }}>
            Calculate option payoffs, Greeks (Delta, Gamma, Theta, Vega, Rho), and build complex strategies with visualizations.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 1: OPTION INPUTS */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            background: "var(--color-surface)",
            borderRadius: 16,
            border: "1px solid var(--color-border)",
            padding: 28,
            marginBottom: 32,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>
            ⚙️ Option Configuration
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 24 }}>
            {[
              { label: "Option Type", value: optionType, onChange: (v: string) => setOptionType(v as "call" | "put"), type: "toggle", options: ["call", "put"] },
              { label: "Underlying Price ($)", value: underlyingPrice, onChange: setUnderlyingPrice, type: "number" },
              { label: "Strike Price ($)", value: strikePrice, onChange: setStrikePrice, type: "number" },
              { label: "Premium Paid ($)", value: premiumPaid, onChange: setPremiumPaid, type: "number" },
              { label: "Quantity", value: quantity, onChange: setQuantity, type: "number", step: 0.1 },
              { label: "Days to Expiry", value: daysToExpiry, onChange: setDaysToExpiry, type: "number" },
              { label: "Implied Volatility", value: (impliedVolatility * 100).toFixed(0), onChange: (v: any) => setImpliedVolatility(Number(v) / 100), type: "number", suffix: "%" },
              { label: "Risk-Free Rate", value: (riskFreeRate * 100).toFixed(1), onChange: (v: any) => setRiskFreeRate(Number(v) / 100), type: "number", suffix: "%" },
            ].map((field, i) => (
              <div key={i}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase" }}>
                  {field.label}
                </label>
                {(field as any).type === "toggle" ? (
                  <div style={{ display: "flex", gap: 6 }}>
                    {((field as any).options as string[]).map(opt => (
                      <button
                        key={opt}
                        onClick={() => (field as any).onChange(opt)}
                        style={{
                          flex: 1,
                          padding: "10px 12px",
                          borderRadius: 8,
                          border: `1px solid ${optionType === opt ? "#6366f1" : "var(--color-border)"}`,
                          background: optionType === opt ? "#6366f120" : "transparent",
                          color: optionType === opt ? "#818cf8" : "var(--color-text-secondary)",
                          fontSize: 12,
                          fontWeight: 700,
                          cursor: "pointer",
                          textTransform: "uppercase",
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div style={{ display: "flex" }}>
                    <input
                      type="number"
                      value={(field as any).value}
                      onChange={e => (field as any).onChange(Number(e.target.value))}
                      step={(field as any).step || 1}
                      style={{
                        flex: 1,
                        padding: "10px 14px",
                        borderRadius: "8px 0 0 8px",
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg)",
                        color: "var(--color-text)",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    />
                    {(field as any).suffix && (
                      <div
                        style={{
                          padding: "10px 14px",
                          background: "var(--color-bg)",
                          border: "1px solid var(--color-border)",
                          borderLeft: "none",
                          borderRadius: "0 8px 8px 0",
                          color: "var(--color-text-secondary)",
                          fontWeight: 600,
                          fontSize: 12,
                        }}
                      >
                        {(field as any).suffix}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 2: GREEKS DISPLAY */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            background: "var(--color-surface)",
            borderRadius: 16,
            border: "1px solid var(--color-border)",
            padding: 28,
            marginBottom: 32,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>
            🔢 Greeks & Risk Metrics
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
            {[
              { label: "Delta", value: greeks.delta.toFixed(4), color: "#6366f1", desc: "Price sensitivity" },
              { label: "Gamma", value: greeks.gamma.toFixed(4), color: "#06b6d4", desc: "Delta acceleration" },
              { label: "Theta", value: greeks.theta.toFixed(4), color: "#F3BA2F", desc: "Time decay (daily)" },
              { label: "Vega", value: greeks.vega.toFixed(4), color: "#9945FF", desc: "Vol sensitivity" },
              { label: "Rho", value: greeks.rho.toFixed(4), color: "#22c55e", desc: "Rate sensitivity" },
            ].map((metric, i) => (
              <div key={i} style={{ background: "var(--color-bg)", borderRadius: 10, padding: 16, border: "1px solid var(--color-border)" }}>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 2, fontWeight: 600, textTransform: "uppercase" }}>
                  {metric.label}
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: metric.color, marginBottom: 4 }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 3: P&L VISUALIZATION */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            background: "var(--color-surface)",
            borderRadius: 16,
            border: "1px solid var(--color-border)",
            padding: 28,
            marginBottom: 32,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>
            📊 P&L Diagram at Expiration
          </h2>

          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <svg width={svgWidth} height={svgHeight} style={{ minWidth: svgWidth }}>
              {/* Background grid */}
              {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => (
                <line
                  key={`h-${i}`}
                  x1={padding.left}
                  y1={padding.top + plotHeight * pct}
                  x2={svgWidth - padding.right}
                  y2={padding.top + plotHeight * pct}
                  stroke="var(--color-border)"
                  strokeDasharray="4"
                  opacity="0.3"
                />
              ))}

              {/* Zero line */}
              <line
                x1={padding.left}
                y1={scalePnL(0)}
                x2={svgWidth - padding.right}
                y2={scalePnL(0)}
                stroke="#6366f1"
                strokeWidth="2"
                opacity="0.5"
              />

              {/* Current price line */}
              <line
                x1={scalePrice(underlyingPrice)}
                y1={padding.top}
                x2={scalePrice(underlyingPrice)}
                y2={svgHeight - padding.bottom}
                stroke="#22c55e"
                opacity="0.6"
              />

              {/* P&L curve */}
              <path d={pathData} stroke="#f97316" strokeWidth="3" fill="none" />

              {/* Axes */}
              <line x1={padding.left} y1={padding.top} x2={padding.left} y2={svgHeight - padding.bottom} stroke="var(--color-border)" strokeWidth="2" />
              <line x1={padding.left} y1={svgHeight - padding.bottom} x2={svgWidth - padding.right} y2={svgHeight - padding.bottom} stroke="var(--color-border)" strokeWidth="2" />

              {/* Y-axis labels */}
              {[0, 0.5, 1].map((pct, i) => {
                const value = minPnL + pct * pnLRange;
                return (
                  <text
                    key={`y-${i}`}
                    x={padding.left - 10}
                    y={scalePnL(value) + 5}
                    textAnchor="end"
                    fontSize="11"
                    fill="var(--color-text-secondary)"
                  >
                    {formatUSD(value)}
                  </text>
                );
              })}

              {/* X-axis labels */}
              {[0, 0.5, 1].map((pct, i) => {
                const price = underlyingPrice * 0.5 + pct * underlyingPrice;
                return (
                  <text
                    key={`x-${i}`}
                    x={scalePrice(price)}
                    y={svgHeight - 10}
                    textAnchor="middle"
                  >
                    ${price.toFixed(0)}
                  </text>
                );
              })}
            </svg>
          </div>

          {/* P&L Summary */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
            {[
              { label: "Current P&L", value: formatUSD(currentPnL), color: isProfitable ? "#22c55e" : "#f85149" },
              { label: "Max Profit", value: formatUSD(maxPnL.maxProfit), color: "#22c55e" },
              { label: "Max Loss", value: formatUSD(maxPnL.maxLoss), color: "#f85149" },
              { label: "Breakevens", value: breakevens.map(b => formatUSD(b)).join(" / ") || "N/A", color: "#F3BA2F" },
            ].map((m, i) => (
              <div key={i} style={{ background: "var(--color-bg)", borderRadius: 10, padding: 14, border: "1px solid var(--color-border)" }}>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4, fontWeight: 600, textTransform: "uppercase" }}>
                  {m.label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: m.color }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 4: STRATEGY BUILDER */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div
          style={{
            background: "var(--color-surface)",
            borderRadius: 16,
            border: "1px solid var(--color-border)",
            padding: 28,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>
            🎯 Strategy Builder
          </h2>

          {/* Strategy Presets */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 8, marginBottom: 24 }}>
            {Object.entries(strategyPresets)
              .slice(1)
              .map(([key, _]) => (
                <button
                  key={key}
                  onClick={() => handleStrategySelect(key)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: `1px solid ${strategy === key ? "#6366f1" : "var(--color-border)"}`,
                    background: strategy === key ? "#6366f120" : "var(--color-bg)",
                    color: strategy === key ? "#818cf8" : "var(--color-text)",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    textTransform: "capitalize",
                  }}
                >
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </button>
              ))}
          </div>

          {/* Strategy Legs */}
          <div style={{ marginBottom: 24 }}>
            {legs.map((leg, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--color-bg)",
                  borderRadius: 10,
                  border: "1px solid var(--color-border)",
                  padding: 14,
                  marginBottom: 10,
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: 10 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 4, textTransform: "uppercase" }}>
                      Type
                    </label>
                    <select
                      value={leg.type}
                      onChange={e => {
                        const newLegs = [...legs];
                        newLegs[idx].type = e.target.value as "call" | "put";
                        setLegs(newLegs);
                      }}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid var(--color-border)",
                        background: "var(--color-surface)",
                        color: "var(--color-text)",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      <option value="call">Call</option>
                      <option value="put">Put</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 4, textTransform: "uppercase" }}>
                      Strike
                    </label>
                    <input
                      value={leg.strike}
                      onChange={e => {
                        const newLegs = [...legs];
                        newLegs[idx].strike = Number(e.target.value);
                        setLegs(newLegs);
                      }}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid var(--color-border)",
                        background: "var(--color-surface)",
                        color: "var(--color-text)",
                        fontSize: 12,
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 4, textTransform: "uppercase" }}>
                      Premium
                    </label>
                    <input
                      value={leg.premium}
                      onChange={e => {
                        const newLegs = [...legs];
                        newLegs[idx].premium = Number(e.target.value);
                        setLegs(newLegs);
                      }}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid var(--color-border)",
                        background: "var(--color-surface)",
                        color: "var(--color-text)",
                        fontSize: 12,
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 4, textTransform: "uppercase" }}>
                      Side
                    </label>
                    <select
                      value={leg.side}
                      onChange={e => {
                        const newLegs = [...legs];
                        newLegs[idx].side = e.target.value as "buy" | "sell";
                        setLegs(newLegs);
                      }}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid var(--color-border)",
                        background: "var(--color-surface)",
                        color: "var(--color-text)",
                        fontSize: 12,
                      }}
                    >
                      <option value="buy">Buy</option>
                      <option value="sell">Sell</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              setLegs([...legs, { type: "call", strike: strikePrice, premium: 1000, quantity: 1, side: "buy" }])
            }
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "1px solid #6366f1",
              background: "#6366f120",
              color: "#818cf8",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              marginBottom: 20,
            }}
          >
            + Add Leg
          </button>

          {/* Combined Strategy P&L */}
          <div
            style={{
              background: `linear-gradient(135deg, ${isProfitable ? "#22c55e40" : "#f8514940"}, ${isProfitable ? "#16a34a40" : "#dc262640"})`,
              borderRadius: 12,
              border: `1px solid ${isProfitable ? "#22c55e80" : "#f8514980"}`,
              padding: 24,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
              Strategy P&L at Current Price
            </div>
            <div style={{ fontSize: 36, fontWeight: 900, color: isProfitable ? "#22c55e" : "#f85149" }}>
              {formatUSD(currentPnL)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

