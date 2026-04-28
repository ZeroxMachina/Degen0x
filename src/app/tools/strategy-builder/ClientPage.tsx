'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

// ── Types ────────────────────────────────────────────────────────────────────
interface Rule {
  id: string;
  indicator: string;
  operator: string;
  value: number;
}

interface Strategy {
  id: string;
  name: string;
  description: string;
  rules: Rule[];
  riskSettings: {
    positionSize: number;
    stopLoss: number;
    takeProfit: number;
    maxPositions: number;
  };
}

interface BacktestResult {
  totalReturn: number;
  winRate: number;
  maxDrawdown: number;
  sharpeRatio: number;
  totalTrades: number;
  avgHoldingPeriod: number;
  equityCurve: Array<{ date: string; value: number }>;
  trades: Array<{
    date: string;
    type: "buy" | "sell";
    price: number;
    pnl: number;
  }>;
}

// ── Constants ────────────────────────────────────────────────────────────────
const PRESET_TEMPLATES = [
  {
    id: "macd_crossover",
    name: "MACD Crossover",
    description: "Trade when MACD crosses above/below signal line",
    rules: [
      { id: "r1", indicator: "MACD", operator: "crosses_above", value: 0 },
      { id: "r2", indicator: "Volume", operator: "greater_than", value: 1000000 },
    ],
  },
  {
    id: "rsi_oversold",
    name: "RSI Oversold Bounce",
    description: "Buy oversold, sell overbought conditions",
    rules: [
      { id: "r1", indicator: "RSI", operator: "less_than", value: 30 },
      { id: "r2", indicator: "RSI", operator: "greater_than", value: 70 },
    ],
  },
  {
    id: "golden_cross",
    name: "Golden Cross",
    description: "50-day MA crosses above 200-day MA",
    rules: [
      { id: "r1", indicator: "Moving Average (50)", operator: "crosses_above", value: 0 },
      { id: "r2", indicator: "Moving Average (200)", operator: "less_than", value: 0 },
    ],
  },
  {
    id: "breakout_momentum",
    name: "Breakout Momentum",
    description: "Trade breakouts with high momentum",
    rules: [
      { id: "r1", indicator: "Price Change %", operator: "greater_than", value: 2 },
      { id: "r2", indicator: "Volume", operator: "greater_than", value: 1500000 },
    ],
  },
  {
    id: "mean_reversion",
    name: "Mean Reversion",
    description: "Revert to mean using Bollinger Bands",
    rules: [
      { id: "r1", indicator: "Bollinger Bands", operator: "touch_lower", value: 0 },
      { id: "r2", indicator: "RSI", operator: "less_than", value: 40 },
    ],
  },
];

const INDICATORS = [
  "RSI",
  "MACD",
  "Bollinger Bands",
  "Moving Average (20)",
  "Moving Average (50)",
  "Moving Average (200)",
  "Volume",
  "Price Change %",
];

const OPERATORS = [
  { value: "less_than", label: "<" },
  { value: "greater_than", label: ">" },
  { value: "crosses_above", label: "Crosses Above" },
  { value: "crosses_below", label: "Crosses Below" },
  { value: "touch_upper", label: "Touch Upper Band" },
  { value: "touch_lower", label: "Touch Lower Band" },
];

const COLORS = {
  bg: "#0d1117",
  surface: "#161b22",
  border: "#30363d",
  text: "#e6edf3",
  textSecondary: "#8b949e",
  bullish: "#3fb950",
  bearish: "#f85149",
  buy: "#3fb950",
  sell: "#f85149",
  accent: "#58a6ff",
  warning: "#ffa657",
};

// ── Utility Functions ────────────────────────────────────────────────────────
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

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

function generateBacktestResults(strategy: Strategy): BacktestResult {
  const dataPoints = 100;
  let currentValue = 10000;
  let minValue = currentValue;
  let maxValue = currentValue;
  const equityCurve: Array<{ date: string; value: number }> = [];

  const ruleCount = strategy.rules.length;
  const strategyScore = 0.35 + (ruleCount * 0.08);
  const volatility = 0.02 + (ruleCount * 0.004);

  for (let i = 0; i < dataPoints; i++) {
    const seed = strategy.id.charCodeAt(0) + i + ruleCount * 100;
    const dailyChange = (seededRandom(seed) - 0.5) * volatility + strategyScore / 365;
    currentValue *= 1 + dailyChange;
    minValue = Math.min(minValue, currentValue);
    maxValue = Math.max(maxValue, currentValue);

    const date = new Date();
    date.setDate(date.getDate() - (dataPoints - i));
    equityCurve.push({
      date: date.toISOString().split("T")[0],
      value: Math.round(currentValue * 100) / 100,
    });
  };

  const finalValue = equityCurve[equityCurve.length - 1].value;
  const totalReturn = ((finalValue - 10000) / 10000) * 100;
  const maxDrawdown = ((minValue - maxValue) / maxValue) * 100;

  const totalTrades = 8 + Math.floor(seededRandom(parseInt(strategy.id)) * 12);
  const trades: Array<{ date: string; type: "buy" | "sell"; price: number; pnl: number }> = [];
  let buySide = null;

  for (let i = 0; i < totalTrades; i++) {
    const seed = parseInt(strategy.id) * 1000 + i;
    const isBuy = i % 2 === 0;
    const price = 45000 + seededRandom(seed) * 10000;

    if (isBuy) {
      buySide = { price, date: new Date() };
      buySide.date.setDate(buySide.date.getDate() - Math.floor((totalTrades - i) / 2));
      trades.push({
        date: buySide.date.toISOString().split("T")[0],
        type: "buy",
        price: Math.round(price * 100) / 100,
        pnl: 0,
      });
    } else if (buySide) {
      const sellDate = new Date(buySide.date);
      sellDate.setDate(sellDate.getDate() + Math.floor(seededRandom(seed) * 10) + 1);
      const pnl = Math.round((price - buySide.price) * 100) / 100;
      trades.push({
        date: sellDate.toISOString().split("T")[0],
        type: "sell",
        price: Math.round(price * 100) / 100,
        pnl,
      });
      buySide = null;
    }
  };

  const winningTrades = trades.filter((t) => t.type === "sell" && t.pnl > 0).length;
  const totalClosedTrades = Math.ceil(totalTrades / 2);
  const winRate = totalClosedTrades > 0 ? (winningTrades / totalClosedTrades) * 100 : 0;

  const returns: number[] = [];
  for (let i = 1; i < equityCurve.length; i++) {
    returns.push((equityCurve[i].value - equityCurve[i - 1].value) / equityCurve[i - 1].value);
  };
  const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
  const stdDev = Math.sqrt(returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length);
  const sharpeRatio = stdDev === 0 ? 0 : (avgReturn * 252) / (stdDev * Math.sqrt(252));

  return {
    totalReturn,
    winRate,
    maxDrawdown,
    sharpeRatio: Math.max(-3, Math.min(3, sharpeRatio)),
    totalTrades,
    avgHoldingPeriod: 5 + Math.floor(seededRandom(parseInt(strategy.id) * 2) * 10),
    equityCurve,
    trades: trades.slice(-10),
  };
}

// SVG Equity Curve Chart
function EquityCurveChart({ data }: { data: Array<{ date: string; value: number }> }) {
  if (data.length === 0) return null;

  const minValue = Math.min(...data.map((d) => d.value));
  const maxValue = Math.max(...data.map((d) => d.value));
  const range = maxValue - minValue || 1;

  const width = 700;
  const height = 250;
  const padding = 40;

  const points = data
    .map((d, i) => ({
      x: padding + (i / (data.length - 1)) * (width - 2 * padding),
      y: height - padding - ((d.value - minValue) / range) * (height - 2 * padding),
      value: d.value,
    }))
    .filter((_, i) => i === 0 || i === data.length - 1 || i % Math.ceil(data.length / 40) === 0);

  const pathD = `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")}`;
  const startValue = data[0].value;
  const endValue = data[data.length - 1].value;
  const isGain = endValue >= startValue;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto" }}>
      {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
        const y = height - padding - pct * (height - 2 * padding);
        return (
          <g key={i}>
            <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x={10} y={y + 4} fontSize="11" fill="rgba(255,255,255,0.4)">
              {formatUSD(minValue + pct * range)}
            </text>
          </g>
        );
      })}

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isGain ? "#3fb950" : "#f85149"} stopOpacity="0.3" />
          <stop offset="100%" stopColor={isGain ? "#3fb950" : "#f85149"} stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <path
        d={`${pathD} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`}
        fill="url(#gradient)"
      />
      <path d={pathD} stroke={isGain ? "#3fb950" : "#f85149"} strokeWidth="2" fill="none" />
    </svg>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function StrategyBuilderPage() {
  const [activeStrategy, setActiveStrategy] = useState<Strategy>({
    id: "custom_1",
    name: "My Trading Strategy",
    description: "Custom strategy built with rule builder",
    rules: [
      { id: "r1", indicator: "RSI", operator: "less_than", value: 30 },
      { id: "r2", indicator: "Volume", operator: "greater_than", value: 1000000 },
    ],
    riskSettings: {
      positionSize: 5,
      stopLoss: 2,
      takeProfit: 5,
      maxPositions: 3,
    },
  });

  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null);

  const backtest = useMemo(() => generateBacktestResults(activeStrategy), [activeStrategy]);

  const handleAddRule = () => {
    const newRule: Rule = {
      id: `r${Date.now()}`,
      indicator: INDICATORS[0],
      operator: OPERATORS[0].value,
      value: 30,
    };
    setActiveStrategy({
      ...activeStrategy,
      rules: [...activeStrategy.rules, newRule],
    });
  };

  const handleRemoveRule = (ruleId: string) => {
    setActiveStrategy({
      ...activeStrategy,
      rules: activeStrategy.rules.filter((r) => r.id !== ruleId),
    });
  };

  const handleUpdateRule = (ruleId: string, updates: Partial<Rule>) => {
    setActiveStrategy({
      ...activeStrategy,
      rules: activeStrategy.rules.map((r) => (r.id === ruleId ? { ...r, ...updates } : r)),
    });
  };

  const handleApplyTemplate = (templateId: string) => {
    const template = PRESET_TEMPLATES.find((t) => t.id === templateId);
    if (template) {
      setActiveStrategy({
        id: templateId,
        name: template.name,
        description: template.description,
        rules: template.rules.map((r) => ({ ...r })),
        riskSettings: {
          positionSize: 5,
          stopLoss: 2,
          takeProfit: 5,
          maxPositions: 3,
        },
      });
      setPreviewTemplate(null);
    }
  };

  const handleRiskSettingChange = (key: keyof Strategy["riskSettings"], value: number) => {
    setActiveStrategy({
      ...activeStrategy,
      riskSettings: {
        ...activeStrategy.riskSettings,
        [key]: value,
      },
    });
  };

  const isProfitable = backtest.totalReturn >= 0;

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb
          items={[
            { label: "Tools", href: "/tools" },
            { label: "Strategy Builder", href: "/tools/strategy-builder" },
          ]}
        />

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: COLORS.text, marginBottom: 8 }}>
            🎯 AI Trading Strategy Builder
          </h1>
          <p style={{ color: COLORS.textSecondary, fontSize: 15 }}>
            Build, test, and refine trading strategies using custom rule combinations. Backtest against historical data with detailed performance metrics.
          </p>
        </div>

        {/* Strategy Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
          {/* Preset Templates */}
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: COLORS.text, marginBottom: 16 }}>
              📚 Preset Templates
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {PRESET_TEMPLATES.map((template) => (
                <div
                  key={template.id}
                  style={{
                    background: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 12,
                    padding: 16,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    opacity: previewTemplate === template.id ? 1 : 0.7,
                    borderColor: previewTemplate === template.id ? COLORS.accent : COLORS.border,
                  }}
                  onMouseEnter={() => setPreviewTemplate(template.id)}
                  onMouseLeave={() => setPreviewTemplate(null)}
                  onClick={() => handleApplyTemplate(template.id)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, margin: 0 }}>
                        {template.name}
                      </h3>
                      <p style={{ fontSize: 12, color: COLORS.textSecondary, margin: "4px 0 0" }}>
                        {template.description}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {template.rules.map((rule) => (
                      <span
                        key={rule.id}
                        style={{
                          fontSize: 11,
                          padding: "4px 8px",
                          background: COLORS.accent,
                          color: COLORS.bg,
                          borderRadius: 4,
                          fontWeight: 600,
                        }}
                      >
                        {rule.indicator}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Strategy */}
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: COLORS.text, marginBottom: 16 }}>
              ⚙️ Active Strategy
            </h2>
            <div
              style={{
                background: COLORS.surface,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 12,
                padding: 20,
              }}
            >
              <input
                type="text"
                value={activeStrategy.name}
                onChange={(e) => setActiveStrategy({ ...activeStrategy, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  background: COLORS.bg,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 8,
                  color: COLORS.text,
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              />
              <textarea
                value={activeStrategy.description}
                onChange={(e) => setActiveStrategy({ ...activeStrategy, description: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  background: COLORS.bg,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 8,
                  color: COLORS.text,
                  fontSize: 13,
                  marginBottom: 16,
                  minHeight: 60,
                  fontFamily: "inherit",
                }}
              />

              <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: COLORS.text, marginBottom: 12 }}>
                  📋 Trading Rules ({activeStrategy.rules.length})
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
                  {activeStrategy.rules.map((rule) => (
                    <div
                      key={rule.id}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr auto",
                        gap: 8,
                        alignItems: "center",
                      }}
                    >
                      <select
                        value={rule.indicator}
                        onChange={(e) => handleUpdateRule(rule.id, { indicator: e.target.value })}
                        style={{
                          padding: "8px",
                          background: COLORS.bg,
                          border: `1px solid ${COLORS.border}`,
                          borderRadius: 6,
                          color: COLORS.text,
                          fontSize: 12,
                        }}
                      >
                        {INDICATORS.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>

                      <select
                        value={rule.operator}
                        onChange={(e) => handleUpdateRule(rule.id, { operator: e.target.value })}
                        style={{
                          padding: "8px",
                          background: COLORS.bg,
                          border: `1px solid ${COLORS.border}`,
                          borderRadius: 6,
                          color: COLORS.text,
                          fontSize: 12,
                        }}
                      >
                        {OPERATORS.map((op) => (
                          <option key={op.value} value={op.value}>
                            {op.label}
                          </option>
                        ))}
                      </select>

                      <input
                        type="number"
                        value={rule.value}
                        onChange={(e) => handleUpdateRule(rule.id, { value: parseFloat(e.target.value) })}
                        style={{
                          padding: "8px",
                          background: COLORS.bg,
                          border: `1px solid ${COLORS.border}`,
                          borderRadius: 6,
                          color: COLORS.text,
                          fontSize: 12,
                        }}
                      />

                      <button
                        onClick={() => handleRemoveRule(rule.id)}
                        style={{
                          padding: "6px 10px",
                          background: COLORS.bearish,
                          color: "white",
                          border: "none",
                          borderRadius: 6,
                          cursor: "pointer",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleAddRule}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: COLORS.accent,
                    color: COLORS.bg,
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  + Add Rule
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Settings */}
        <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: COLORS.text, marginBottom: 20 }}>
            ⚠️ Risk Management Settings
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { key: "positionSize", label: "Position Size (%)", min: 0.5, max: 10 },
              { key: "stopLoss", label: "Stop Loss (%)", min: 0.5, max: 10 },
              { key: "takeProfit", label: "Take Profit (%)", min: 1, max: 20 },
              { key: "maxPositions", label: "Max Concurrent Positions", min: 1, max: 10 },
            ].map((setting) => (
              <div key={setting.key}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: COLORS.textSecondary, marginBottom: 8 }}>
                  {setting.label}
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <input
                    type="range"
                    min={setting.min}
                    max={setting.max}
                    step={0.5}
                    value={activeStrategy.riskSettings[setting.key as keyof typeof activeStrategy.riskSettings]}
                    onChange={(e) =>
                      handleRiskSettingChange(setting.key as keyof typeof activeStrategy.riskSettings, parseFloat(e.target.value))
                    }
                    style={{ flex: 1 }}
                  />
                  <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, minWidth: 40 }}>
                    {activeStrategy.riskSettings[setting.key as keyof typeof activeStrategy.riskSettings]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backtest Results */}
        <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: COLORS.text, marginBottom: 20 }}>
            📊 Backtest Results
          </h2>

          {/* Metrics Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 24 }}>
            {[
              { label: "Total Return", value: formatPercent(backtest.totalReturn), color: isProfitable ? COLORS.bullish : COLORS.bearish },
              { label: "Win Rate", value: formatPercent(backtest.winRate), color: COLORS.accent },
              { label: "Max Drawdown", value: formatPercent(backtest.maxDrawdown), color: COLORS.bearish },
              { label: "Sharpe Ratio", value: backtest.sharpeRatio.toFixed(2), color: COLORS.accent },
              { label: "Total Trades", value: backtest.totalTrades.toString(), color: COLORS.text },
              { label: "Avg Holding Period", value: `${backtest.avgHoldingPeriod} days`, color: COLORS.text },
            ].map((metric) => (
              <div key={metric.label} style={{ background: COLORS.bg, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: 16 }}>
                <p style={{ fontSize: 12, color: COLORS.textSecondary, margin: "0 0 8px" }}>
                  {metric.label}
                </p>
                <p style={{ fontSize: 18, fontWeight: 700, color: metric.color, margin: 0 }}>
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {/* Equity Curve */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, marginBottom: 12 }}>
              Equity Curve
            </h3>
            <div style={{ background: COLORS.bg, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: 16 }}>
              <EquityCurveChart data={backtest.equityCurve} />
            </div>
          </div>

          {/* Trade History */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, marginBottom: 12 }}>
              Recent Trades
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                    <th style={{ padding: "12px 8px", textAlign: "left", color: COLORS.textSecondary, fontWeight: 600 }}>
                      Date
                    </th>
                    <th style={{ padding: "12px 8px", textAlign: "left", color: COLORS.textSecondary, fontWeight: 600 }}>
                      Type
                    </th>
                    <th style={{ padding: "12px 8px", textAlign: "right", color: COLORS.textSecondary, fontWeight: 600 }}>
                      Price
                    </th>
                    <th style={{ padding: "12px 8px", textAlign: "right", color: COLORS.textSecondary, fontWeight: 600 }}>
                      P&L
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {backtest.trades.map((trade, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                      <td style={{ padding: "12px 8px", color: COLORS.text }}>
                        {trade.date}
                      </td>
                      <td style={{ padding: "12px 8px", color: COLORS.text }}>
                        <span
                          style={{
                            padding: "4px 8px",
                            borderRadius: 4,
                            fontSize: 11,
                            fontWeight: 700,
                            background: trade.type === "buy" ? COLORS.bullish : COLORS.bearish,
                            color: COLORS.bg,
                          }}
                        >
                          {trade.type.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: "12px 8px", textAlign: "right", color: COLORS.text }}>
                        {formatUSD(trade.price)}
                      </td>
                      <td style={{ padding: "12px 8px", textAlign: "right", color: trade.pnl >= 0 ? COLORS.bullish : COLORS.bearish }}>
                        {formatUSD(trade.pnl)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Strategy Builder",
              "url": "https://degen0x.com/tools/strategy-builder",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/strategy-builder" />
      </div>
  );
}
