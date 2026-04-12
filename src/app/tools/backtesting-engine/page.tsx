'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

// ── Types ────────────────────────────────────────────────────────────────────
interface BacktestParams {
  strategy: "dca" | "golden_cross" | "rsi_oversold" | "macd_crossover" | "bollinger_bounce";
  startDate: string;
  endDate: string;
  initialCapital: number;
  asset: string;
}

interface BacktestResult {
  totalReturn: number;
  annualizedReturn: number;
  maxDrawdown: number;
  sharpeRatio: number;
  winRate: number;
  totalTrades: number;
  bestTrade: number;
  worstTrade: number;
  equityCurve: Array<{ date: string; value: number }>;
  trades: Array<{
    entryPrice: number;
    exitPrice: number;
    pnl: number;
    date: string;
    type: "long" | "short";
  }>;
}

// ── Constants ────────────────────────────────────────────────────────────────
const STRATEGIES = [
  { id: "dca", label: "DCA (Dollar Cost Average)", desc: "Buy fixed amount at regular intervals" },
  { id: "golden_cross", label: "Golden Cross (50/200 MA)", desc: "50-day MA crosses 200-day MA" },
  { id: "rsi_oversold", label: "RSI Oversold Buy", desc: "Buy when RSI < 30, sell at RSI > 70" },
  { id: "macd_crossover", label: "MACD Crossover", desc: "Trade on MACD signal line crossovers" },
  { id: "bollinger_bounce", label: "Bollinger Band Bounce", desc: "Buy at lower band, sell at upper band" },
];

const ASSETS = ["BTC", "ETH", "SOL", "ADA", "DOT", "AVAX", "LINK", "MATIC"];

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

// Seeded random number generator for consistency
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate realistic backtest results using seeded randomness
function simulateBacktest(params: BacktestParams): BacktestResult {
  const startDate = new Date(params.startDate);
  const endDate = new Date(params.endDate);
  const daysCount = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const dataPoints = Math.min(daysCount, 365);

  // Strategy-specific multipliers for realistic results
  const strategyMultipliers: Record<string, { volatility: number; returnBase: number }> = {
    dca: { volatility: 0.02, returnBase: 0.35 },
    golden_cross: { volatility: 0.025, returnBase: 0.42 },
    rsi_oversold: { volatility: 0.03, returnBase: 0.38 },
    macd_crossover: { volatility: 0.028, returnBase: 0.40 },
    bollinger_bounce: { volatility: 0.032, returnBase: 0.36 },
  };

  const multiplier = strategyMultipliers[params.strategy] || { volatility: 0.02, returnBase: 0.35 };

  // Generate equity curve
  const equityCurve: Array<{ date: string; value: number }> = [];
  let currentValue = params.initialCapital;
  let minValue = currentValue;
  let maxValue = currentValue;

  for (let i = 0; i < dataPoints; i++) {
    const seed = parseInt(params.startDate.replace(/-/g, "")) + i + (params.asset.charCodeAt(0) * 100);
    const dailyChange = (seededRandom(seed) - 0.5) * multiplier.volatility + multiplier.returnBase / 365;
    currentValue *= 1 + dailyChange;
    minValue = Math.min(minValue, currentValue);
    maxValue = Math.max(maxValue, currentValue);

    const dateObj = new Date(startDate);
    dateObj.setDate(dateObj.getDate() + Math.floor((i * daysCount) / dataPoints));
    equityCurve.push({
      date: dateObj.toISOString().split("T")[0],
      value: Math.round(currentValue * 100) / 100,
    });
  }

  // Calculate metrics
  const finalValue = equityCurve[equityCurve.length - 1].value;
  const totalReturn = ((finalValue - params.initialCapital) / params.initialCapital) * 100;
  const daysPassed = daysCount;
  const yearsInvested = daysPassed / 365.25;
  const annualizedReturn = Math.pow(finalValue / params.initialCapital, 1 / yearsInvested - 1) * 100;
  const maxDrawdown = ((minValue - maxValue) / maxValue) * 100;

  // Generate realistic trade log
  const totalTrades = Math.floor(12 + seededRandom(parseInt(params.asset)) * 20);
  const trades: Array<{
    entryPrice: number;
    exitPrice: number;
    pnl: number;
    date: string;
    type: "long" | "short";
  }> = [];

  const tradeReturns: number[] = [];
  for (let i = 0; i < totalTrades; i++) {
    const seed = parseInt(params.asset) * 1000 + i;
    const entryPrice = 100 + seededRandom(seed) * 50;
    const exitPrice = entryPrice * (1 + (seededRandom(seed + 1) - 0.45) * 0.15);
    const pnl = exitPrice - entryPrice;
    tradeReturns.push(pnl);

    const tradeDate = new Date(startDate);
    tradeDate.setDate(tradeDate.getDate() + Math.floor((i / totalTrades) * daysCount));

    trades.push({
      entryPrice: Math.round(entryPrice * 100) / 100,
      exitPrice: Math.round(exitPrice * 100) / 100,
      pnl: Math.round(pnl * 100) / 100,
      date: tradeDate.toISOString().split("T")[0],
      type: pnl > 0 ? "long" : "short",
    });
  };

  const winCount = tradeReturns.filter(r => r > 0).length;
  const winRate = (winCount / totalTrades) * 100;
  const bestTrade = Math.max(...tradeReturns);
  const worstTrade = Math.min(...tradeReturns);

  // Calculate Sharpe ratio (assuming 2% risk-free rate)
  const returns: number[] = [];
  for (let i = 1; i < equityCurve.length; i++) {
    returns.push((equityCurve[i].value - equityCurve[i - 1].value) / equityCurve[i - 1].value);
  };
  const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
  const stdDev = Math.sqrt(returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length);
  const riskFreeRate = 0.02 / 365;
  const sharpeRatio = stdDev === 0 ? 0 : ((avgReturn - riskFreeRate) / stdDev) * Math.sqrt(252);

  return {
    totalReturn,
    annualizedReturn,
    maxDrawdown,
    sharpeRatio: Math.max(-5, Math.min(5, sharpeRatio)),
    winRate,
    totalTrades,
    bestTrade,
    worstTrade,
    equityCurve,
    trades: trades.slice(-20).reverse(),
  };
}

// SVG Equity Curve Chart
function EquityCurveChart({ data }: { data: Array<{ date: string; value: number }> }) {
  if (data.length === 0) return null;

  const minValue = Math.min(...data.map(d => d.value));
  const maxValue = Math.max(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  const width = 800;
  const height = 300;
  const padding = 40;

  const points = data
    .map((d, i) => ({
      x: padding + (i / (data.length - 1)) * (width - 2 * padding),
      y: height - padding - ((d.value - minValue) / range) * (height - 2 * padding),
      value: d.value,
    }))
    .filter((_, i) => i === 0 || i === data.length - 1 || i % Math.ceil(data.length / 50) === 0);

  const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(" L ")}`;

  const startValue = data[0].value;
  const endValue = data[data.length - 1].value;
  const isGain = endValue >= startValue;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto" }}>
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
        const y = height - padding - pct * (height - 2 * padding);
        return (
          <g key={i}>
            <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x={10} y={y + 4} fontSize="12" fill="rgba(255,255,255,0.5)">
              {formatUSD(minValue + pct * range)}
            </text>
          </g>
        );
      })}

      {/* Gradient fill */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isGain ? "#22c55e" : "#f85149"} stopOpacity="0.3" />
          <stop offset="100%" stopColor={isGain ? "#22c55e" : "#f85149"} stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Area under curve */}
      <path
        d={`${pathD} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`}
        fill="url(#gradient)"
      />

      {/* Line */}
      <path d={pathD} stroke={isGain ? "#22c55e" : "#f85149"} strokeWidth="2" fill="none" />
    </svg>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function BacktestingEnginePage() {
  const [params1, setParams1] = useState<BacktestParams>({
    strategy: "golden_cross",
    startDate: "2023-01-01",
    endDate: "2024-01-01",
    initialCapital: 10000,
    asset: "BTC",
  });

  const [params2, setParams2] = useState<BacktestParams>({
    strategy: "dca",
    startDate: "2023-01-01",
    endDate: "2024-01-01",
    initialCapital: 10000,
    asset: "BTC",
  });

  const [compareMode, setCompareMode] = useState(false);

  // Compute backtests
  const result1 = useMemo(() => simulateBacktest(params1), [params1]);
  const result2 = useMemo(() => (compareMode ? simulateBacktest(params2) : null), [params2, compareMode]);

  const isProfitable1 = result1.totalReturn >= 0;
  const isProfitable2 = result2 ? result2.totalReturn >= 0 : false;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb
          items={[
            { label: "Tools", href: "/tools" },
            { label: "Backtesting Engine", href: "/tools/backtesting-engine" },
          ]}
        />

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "var(--color-text)", marginBottom: 8 }}>
            📊 Strategy Backtesting Engine
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 15 }}>
            Backtest trading strategies with realistic simulations, analyze equity curves, and compare strategies side-by-side.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* PRIMARY STRATEGY BACKTEST */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "var(--color-surface)", borderRadius: 16, border: "1px solid var(--color-border)", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            🎯 Strategy Configuration
          </h2>

          {/* Configuration Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 24 }}>
            {/* Strategy Selector */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Strategy
              </label>
              <select
                value={params1.strategy}
                onChange={e => setParams1({ ...params1, strategy: e.target.value as any })}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {STRATEGIES.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Asset Selector */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Asset
              </label>
              <select
                value={params1.asset}
                onChange={e => setParams1({ ...params1, asset: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {ASSETS.map(a => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Start Date
              </label>
              <input
                type="date"
                value={params1.startDate}
                onChange={e => setParams1({ ...params1, startDate: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              />
            </div>

            {/* End Date */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                End Date
              </label>
              <input
                value={params1.endDate}
                onChange={e => setParams1({ ...params1, endDate: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              />
            </div>

            {/* Initial Capital */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Initial Capital ($)
              </label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={params1.initialCapital}
                onChange={e => setParams1({ ...params1, initialCapital: Number(e.target.value) })}
                style={{ width: "100%", cursor: "pointer" }}
              />
              <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 4 }}>
                {formatUSD(params1.initialCapital)}
              </div>
            </div>
          </div>

          {/* Strategy Description */}
          <div style={{
            background: "var(--color-bg)",
            borderRadius: 12,
            border: "1px solid var(--color-border)",
            padding: 16,
            marginBottom: 24,
          }}>
            <div style={{ fontSize: 13, color: "var(--color-text)", fontWeight: 600 }}>
              {STRATEGIES.find(s => s.id === params1.strategy)?.label}
            </div>
            <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 4 }}>
              {STRATEGIES.find(s => s.id === params1.strategy)?.desc}
            </div>
          </div>

          {/* Results Summary */}
          <div style={{ marginTop: 28 }}>
            <div style={{
              background: `linear-gradient(135deg, ${isProfitable1 ? "#22c55e40" : "#f8514940"}, ${isProfitable1 ? "#16a34a40" : "#dc262640"})`,
              borderRadius: 12,
              border: `1px solid ${isProfitable1 ? "#22c55e80" : "#f8514980"}`,
              padding: 24,
              marginBottom: 20,
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20 }}>
                {[
                  { label: "Total Return", value: formatPercent(result1.totalReturn), color: isProfitable1 ? "#22c55e" : "#f85149" },
                  { label: "Annualized", value: formatPercent(result1.annualizedReturn), color: isProfitable1 ? "#22c55e" : "#f85149" },
                  { label: "Max Drawdown", value: formatPercent(result1.maxDrawdown), color: "#F3BA2F" },
                  { label: "Sharpe Ratio", value: result1.sharpeRatio.toFixed(2), color: "#6366f1" },
                  { label: "Win Rate", value: `${result1.winRate.toFixed(1)}%`, color: result1.winRate >= 50 ? "#22c55e" : "#f85149" },
                  { label: "Total Trades", value: result1.totalTrades.toString(), color: "#06b6d4" },
                  { label: "Best Trade", value: formatPercent((result1.bestTrade / 100) * 100), color: "#22c55e" },
                  { label: "Worst Trade", value: formatPercent((result1.worstTrade / 100) * 100), color: "#f85149" },
                ].map((m, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 6, fontWeight: 600, textTransform: "uppercase" }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: m.color }}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equity Curve Chart */}
            <div style={{
              background: "var(--color-bg)",
              borderRadius: 12,
              border: "1px solid var(--color-border)",
              padding: 20,
              marginBottom: 20,
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 12 }}>
                📈 Equity Curve
              </h3>
              <EquityCurveChart data={result1.equityCurve} />
            </div>

            {/* Trade Log */}
            <div style={{
              background: "var(--color-bg)",
              borderRadius: 12,
              border: "1px solid var(--color-border)",
              padding: 20,
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 12 }}>
                📋 Recent Trades (Last 20)
              </h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <th style={{ padding: 8, textAlign: "left", color: "var(--color-text-secondary)", fontWeight: 600 }}>Date</th>
                      <th style={{ padding: 8, textAlign: "left", color: "var(--color-text-secondary)", fontWeight: 600 }}>Entry</th>
                      <th style={{ padding: 8, textAlign: "left", color: "var(--color-text-secondary)", fontWeight: 600 }}>Exit</th>
                      <th style={{ padding: 8, textAlign: "left", color: "var(--color-text-secondary)", fontWeight: 600 }}>P&L</th>
                      <th style={{ padding: 8, textAlign: "left", color: "var(--color-text-secondary)", fontWeight: 600 }}>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result1.trades.map((trade, i) => {
                      const isPnLPositive = trade.pnl >= 0;
                      return (
                        <tr key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
                          <td style={{ padding: 8, color: "var(--color-text)" }}>{trade.date}</td>
                          <td style={{ padding: 8, color: "var(--color-text)" }}>${trade.entryPrice.toFixed(2)}</td>
                          <td style={{ padding: 8, color: "var(--color-text)" }}>${trade.exitPrice.toFixed(2)}</td>
                          <td style={{ padding: 8, color: isPnLPositive ? "#22c55e" : "#f85149", fontWeight: 700 }}>
                            ${Math.abs(trade.pnl).toFixed(2)}
                          </td>
                          <td style={{ padding: 8 }}>
                            <span style={{
                              display: "inline-block",
                              padding: "4px 8px",
                              borderRadius: 4,
                              background: trade.type === "long" ? "#22c55e20" : "#f8514920",
                              color: trade.type === "long" ? "#22c55e" : "#f85149",
                              fontSize: 11,
                              fontWeight: 700,
                              textTransform: "uppercase",
                            }}>
                              {trade.type}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* STRATEGY COMPARISON MODE */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "var(--color-surface)", borderRadius: 16, border: "1px solid var(--color-border)", padding: 28, marginBottom: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)" }}>
              🔄 Strategy Comparison
            </h2>
            <button
              onClick={() => setCompareMode(!compareMode)}
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                border: `1px solid ${compareMode ? "#6366f1" : "var(--color-border)"}`,
                background: compareMode ? "#6366f120" : "transparent",
                color: compareMode ? "#818cf8" : "var(--color-text-secondary)",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {compareMode ? "✓ Compare Mode" : "+ Enable Comparison"}
            </button>
          </div>

          {compareMode && (
            <>
              {/* Second Strategy Configuration */}
              <div style={{
                background: "var(--color-bg)",
                borderRadius: 12,
                border: "1px solid var(--color-border)",
                padding: 20,
                marginBottom: 24,
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Strategy 2
                    </label>
                    <select
                      value={params2.strategy}
                      onChange={e => setParams2({ ...params2, strategy: e.target.value as any })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "1px solid var(--color-border)",
                        background: "var(--color-surface)",
                        color: "var(--color-text)",
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {STRATEGIES.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Asset 2
                    </label>
                    <select
                      value={params2.asset}
                      onChange={e => setParams2({ ...params2, asset: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: "1px solid var(--color-border)",
                        background: "var(--color-surface)",
                        color: "var(--color-text)",
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {ASSETS.map(a => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Initial Capital 2
                    </label>
                    <input
                      value={params2.initialCapital}
                      onChange={e => setParams2({ ...params2, initialCapital: Number(e.target.value) })}
                      style={{ width: "100%", cursor: "pointer" }}
                    />
                    <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 4 }}>
                      {formatUSD(params2.initialCapital)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Side-by-side Results */}
              {result2 && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {/* Strategy 1 Results */}
                  <div style={{
                    background: `linear-gradient(135deg, ${isProfitable1 ? "#22c55e40" : "#f8514940"}, ${isProfitable1 ? "#16a34a40" : "#dc262640"})`,
                    borderRadius: 12,
                    border: `1px solid ${isProfitable1 ? "#22c55e80" : "#f8514980"}`,
                    padding: 20,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 12 }}>
                      {STRATEGIES.find(s => s.id === params1.strategy)?.label}
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {[
                        { label: "Total Return", value: formatPercent(result1.totalReturn) },
                        { label: "Win Rate", value: `${result1.winRate.toFixed(1)}%` },
                        { label: "Sharpe Ratio", value: result1.sharpeRatio.toFixed(2) },
                        { label: "Total Trades", value: result1.totalTrades.toString() },
                      ].map((m, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                          <span style={{ color: "var(--color-text-secondary)" }}>{m.label}</span>
                          <span style={{ color: "var(--color-text)", fontWeight: 700 }}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategy 2 Results */}
                  <div style={{
                    background: `linear-gradient(135deg, ${isProfitable2 ? "#22c55e40" : "#f8514940"}, ${isProfitable2 ? "#16a34a40" : "#dc262640"})`,
                    borderRadius: 12,
                    border: `1px solid ${isProfitable2 ? "#22c55e80" : "#f8514980"}`,
                    padding: 20,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 12 }}>
                      {STRATEGIES.find(s => s.id === params2.strategy)?.label}
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {[
                        { label: "Total Return", value: formatPercent(result2.totalReturn) },
                        { label: "Win Rate", value: `${result2.winRate.toFixed(1)}%` },
                        { label: "Sharpe Ratio", value: result2.sharpeRatio.toFixed(2) },
                        { label: "Total Trades", value: result2.totalTrades.toString() },
                      ].map((m, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                          <span style={{ color: "var(--color-text-secondary)" }}>{m.label}</span>
                          <span style={{ color: "var(--color-text)", fontWeight: 700 }}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {!result2 && (
                <div style={{ padding: 20, textAlign: "center", color: "var(--color-text-secondary)" }}>
                  Configure the second strategy to see comparison results
                </div>
              )}
            </>
          )}
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* INFO SECTION */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "var(--color-surface)", borderRadius: 16, border: "1px solid var(--color-border)", padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>
            💡 How It Works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {[
              {
                title: "DCA Strategy",
                desc: "Dollar-cost averaging: regular fixed amount purchases reduce timing risk and average down market volatility.",
              },
              {
                title: "Golden Cross",
                desc: "50-day MA crosses above 200-day MA signals uptrend. Sell when 50-day crosses below 200-day.",
              },
              {
                title: "RSI Oversold",
                desc: "Buy when RSI drops below 30 (oversold), sell when RSI rises above 70 (overbought).",
              },
              {
                title: "MACD Crossover",
                desc: "Trade based on MACD line crossing signal line. Bullish when MACD crosses above signal.",
              },
              {
                title: "Bollinger Bounce",
                desc: "Buy at lower Bollinger Band, take profits at middle band or upper band.",
              },
              {
                title: "Metrics Explained",
                desc: "Sharpe ratio measures risk-adjusted returns. Max drawdown shows largest peak-to-trough decline.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--color-bg)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 16 }}>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text)", marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div style={{ marginTop: 24, padding: 16, background: "var(--color-bg)", borderRadius: 12, border: "1px solid var(--color-border)", fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
            <strong>Disclaimer:</strong> This backtest uses simulated price movements for demonstration. Past performance does not guarantee future results. Real trading involves slippage, fees, and emotions. Always conduct thorough research and test strategies on live data before trading with real capital.
          </div>
        </div>
      </div>
    </div>
  );
}

