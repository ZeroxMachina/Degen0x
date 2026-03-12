'use client';

"use client";

import { useState, useMemo, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ─────────────────────────────────────────────────────────────
   Impermanent Loss Calculator
   Full interactive DeFi tool with:
   - Two-token AMM IL calculation
   - Price range simulation
   - Visual IL curve chart (SVG)
   - Comparison: HODL vs LP
   - Multi-pool presets (Uniswap, Curve, Balancer)
   - Fees earned estimation
   - Educational breakdown
───────────────────────────────────────────────────────────── */

interface PoolPreset {
  name: string;
  weightA: number;
  weightB: number;
  feeRate: number;
  icon: string;
  description: string;
}

const POOL_PRESETS: PoolPreset[] = [
  { name: "Uniswap V2 (50/50)", weightA: 50, weightB: 50, feeRate: 0.3, icon: "🦄", description: "Standard constant-product AMM" },
  { name: "Curve StableSwap", weightA: 50, weightB: 50, feeRate: 0.04, icon: "🔷", description: "Optimized for stablecoin pairs" },
  { name: "Balancer 80/20", weightA: 80, weightB: 20, feeRate: 0.3, icon: "⚖️", description: "Weighted pool reducing IL exposure" },
  { name: "PancakeSwap", weightA: 50, weightB: 50, feeRate: 0.25, icon: "🥞", description: "BSC DEX with lower fees" },
  { name: "SushiSwap", weightA: 50, weightB: 50, feeRate: 0.3, icon: "🍣", description: "Community-driven AMM fork" },
  { name: "Custom", weightA: 50, weightB: 50, feeRate: 0.3, icon: "⚙️", description: "Set your own parameters" },
];

const POPULAR_PAIRS = [
  { name: "ETH / USDC", tokenA: "ETH", tokenB: "USDC", priceA: 3200, priceB: 1 },
  { name: "BTC / ETH", tokenA: "BTC", tokenB: "ETH", priceA: 95000, priceB: 3200 },
  { name: "SOL / USDC", tokenA: "SOL", tokenB: "USDC", priceA: 185, priceB: 1 },
  { name: "ETH / WBTC", tokenA: "ETH", tokenB: "WBTC", priceA: 3200, priceB: 95000 },
  { name: "USDC / USDT", tokenA: "USDC", tokenB: "USDT", priceA: 1, priceB: 1 },
];

function calculateIL(priceRatio: number, weightA: number = 50): number {
  // Generalized IL formula for weighted pools
  const w = weightA / 100;
  if (w === 0.5) {
    // Standard 50/50: IL = 2*sqrt(r)/(1+r) - 1
    const sqrtR = Math.sqrt(priceRatio);
    return (2 * sqrtR) / (1 + priceRatio) - 1;
  }
  // Weighted pool IL
  return Math.pow(priceRatio, w) / (w * priceRatio + (1 - w)) - 1;
}

function formatPercent(v: number): string {
  return (v * 100).toFixed(2) + "%";
}

function formatUSD(v: number): string {
  if (v >= 1_000_000) return "$" + (v / 1_000_000).toFixed(2) + "M";
  if (v >= 1_000) return "$" + v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return "$" + v.toFixed(2);
}

/* SVG IL Curve */
function ILCurveChart({ weightA, currentRatio }: { weightA: number; currentRatio: number }) {
  const width = 600;
  const height = 300;
  const pad = { top: 20, right: 30, bottom: 40, left: 60 };
  const cw = width - pad.left - pad.right;
  const ch = height - pad.top - pad.bottom;

  const points: { x: number; y: number; ratio: number; il: number }[] = [];
  const ratios = Array.from({ length: 200 }, (_, i) => 0.01 + (i / 199) * 4.99);
  let minIL = 0;

  for (const r of ratios) {
    const il = calculateIL(r, weightA);
    if (il < minIL) minIL = il;
    points.push({ x: 0, y: 0, ratio: r, il });
  }

  const maxRatio = 5;
  const ilRange = Math.abs(minIL) * 1.15;

  for (const p of points) {
    p.x = pad.left + (p.ratio / maxRatio) * cw;
    p.y = pad.top + (1 - (p.il + ilRange) / ilRange) * ch;
  }

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");

  // Current ratio marker
  const crIL = calculateIL(currentRatio, weightA);
  const crX = pad.left + (Math.min(currentRatio, maxRatio) / maxRatio) * cw;
  const crY = pad.top + (1 - (crIL + ilRange) / ilRange) * ch;

  // Grid lines
  const yTicks = [-0.5, -0.4, -0.3, -0.2, -0.1, 0].filter(t => t >= -ilRange);
  const xTicks = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <linearGradient id="ilGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Grid */}
      {yTicks.map(t => {
        const y = pad.top + (1 - (t + ilRange) / ilRange) * ch;
        return (
          <g key={t}>
            <line x1={pad.left} y1={y} x2={width - pad.right} y2={y} stroke="#30363d" strokeWidth={0.5} />
            <text x={pad.left - 8} y={y + 4} fill="#8b949e" fontSize={10} textAnchor="end">
              {(t * 100).toFixed(0)}%
            </text>
          </g>
        );
      })}
      {xTicks.map(t => {
        const x = pad.left + (t / maxRatio) * cw;
        return (
          <g key={t}>
            <line x1={x} y1={pad.top} x2={x} y2={height - pad.bottom} stroke="#30363d" strokeWidth={0.5} />
            <text x={x} y={height - pad.bottom + 16} fill="#8b949e" fontSize={10} textAnchor="middle">
              {t}x
            </text>
          </g>
        );
      })}

      {/* Zero line */}
      {(() => {
        const zeroY = pad.top + (1 - ilRange / ilRange) * ch;
        return <line x1={pad.left} y1={zeroY} x2={width - pad.right} y2={zeroY} stroke="#3fb950" strokeWidth={1} strokeDasharray="4,3" />;
      })()}

      {/* Area fill */}
      <path
        d={`${pathD} L ${points[points.length - 1].x.toFixed(1)} ${(pad.top + (1 - ilRange / ilRange) * ch).toFixed(1)} L ${points[0].x.toFixed(1)} ${(pad.top + (1 - ilRange / ilRange) * ch).toFixed(1)} Z`}
        fill="url(#ilGrad)"
      />

      {/* IL curve */}
      <path d={pathD} fill="none" stroke="#ef4444" strokeWidth={2} />

      {/* 1:1 ratio marker */}
      {(() => {
        const oneX = pad.left + (1 / maxRatio) * cw;
        return <line x1={oneX} y1={pad.top} x2={oneX} y2={height - pad.bottom} stroke="#58a6ff" strokeWidth={1} strokeDasharray="6,3" />;
      })()}

      {/* Current ratio dot */}
      {currentRatio <= maxRatio && (
        <g>
          <circle cx={crX} cy={crY} r={6} fill="#f0883e" stroke="#fff" strokeWidth={2} />
          <text x={crX + 10} y={crY - 8} fill="#f0883e" fontSize={11} fontWeight="bold">
            {(crIL * 100).toFixed(2)}% IL
          </text>
        </g>
      )}

      {/* Axis labels */}
      <text x={width / 2} y={height - 4} fill="#8b949e" fontSize={11} textAnchor="middle">
        Price Ratio (Current / Initial)
      </text>
      <text x={14} y={height / 2} fill="#8b949e" fontSize={11} textAnchor="middle" transform={`rotate(-90, 14, ${height / 2})`}>
        Impermanent Loss
      </text>
    </svg>
  );
}

export default function ImpermanentLossPage() {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [selectedPair, setSelectedPair] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  const [initialPriceA, setInitialPriceA] = useState(3200);
  const [currentPriceA, setCurrentPriceA] = useState(4500);
  const [initialPriceB, setInitialPriceB] = useState(1);
  const [currentPriceB, setCurrentPriceB] = useState(1);
  const [daysInPool, setDaysInPool] = useState(90);
  const [dailyVolume, setDailyVolume] = useState(1_000_000);
  const [poolTVL, setPoolTVL] = useState(10_000_000);
  const [customWeightA, setCustomWeightA] = useState(50);
  const [customFeeRate, setCustomFeeRate] = useState(0.3);

  const preset = POOL_PRESETS[selectedPreset];
  const weightA = selectedPreset === 5 ? customWeightA : preset.weightA;
  const feeRate = selectedPreset === 5 ? customFeeRate : preset.feeRate;

  const handlePairSelect = useCallback((idx: number) => {
    setSelectedPair(idx);
    const p = POPULAR_PAIRS[idx];
    setInitialPriceA(p.priceA);
    setInitialPriceB(p.priceB);
    setCurrentPriceA(p.priceA * 1.2);
    setCurrentPriceB(p.priceB);
  }, []);

  const results = useMemo(() => {
    const initialRatio = initialPriceA / initialPriceB;
    const currentRatio = currentPriceA / currentPriceB;
    const priceChange = currentRatio / initialRatio;

    const il = calculateIL(priceChange, weightA);
    const ilDollar = investmentAmount * il;

    // HODL value
    const w = weightA / 100;
    const hodlValueA = investmentAmount * w * (currentPriceA / initialPriceA);
    const hodlValueB = investmentAmount * (1 - w) * (currentPriceB / initialPriceB);
    const hodlTotal = hodlValueA + hodlValueB;

    // LP value (before fees)
    const lpValueBeforeFees = hodlTotal + ilDollar;

    // Estimated fees earned
    const dailyFees = (dailyVolume * (feeRate / 100) * investmentAmount) / poolTVL;
    const totalFees = dailyFees * daysInPool;

    // LP value after fees
    const lpValueAfterFees = lpValueBeforeFees + totalFees;

    // Net outcome
    const netVsHodl = lpValueAfterFees - hodlTotal;
    const netVsHodlPct = netVsHodl / hodlTotal;

    // Break-even days
    const breakEvenDays = dailyFees > 0 ? Math.abs(ilDollar) / dailyFees : Infinity;

    return {
      priceChange,
      il,
      ilDollar,
      hodlTotal,
      lpValueBeforeFees,
      totalFees,
      dailyFees,
      lpValueAfterFees,
      netVsHodl,
      netVsHodlPct,
      breakEvenDays,
    };
  }, [investmentAmount, initialPriceA, currentPriceA, initialPriceB, currentPriceB, weightA, feeRate, daysInPool, dailyVolume, poolTVL]);

  const sectionStyle: React.CSSProperties = {
    background: "var(--color-surface, #161b22)",
    border: "1px solid var(--color-border, #30363d)",
    borderRadius: 14,
    padding: 24,
    marginBottom: 20,
  };
  const labelStyle: React.CSSProperties = { display: "block", fontSize: 12, color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, marginBottom: 6, textTransform: "uppercase" as const, letterSpacing: "0.04em" };
  const inputStyle: React.CSSProperties = { width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--color-border, #30363d)", background: "var(--color-bg, #0d1117)", color: "var(--color-text, #e6edf3)", fontSize: 15, fontWeight: 600 };

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0d1117)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Impermanent Loss Calculator", href: "/tools/impermanent-loss" }]} />

        {/* Header */}
        <div style={{ textAlign: "center", paddingBottom: 32, paddingTop: 16 }}>
          <div style={{ display: "inline-block", padding: "4px 14px", background: "#ef444420", border: "1px solid #ef444440", borderRadius: 20, fontSize: 12, color: "#ef4444", fontWeight: 600, marginBottom: 16 }}>
            🔥 DeFi Essential Tool
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 900, color: "var(--color-text, #e6edf3)", marginBottom: 10 }}>
            Impermanent Loss Calculator
          </h1>
          <p style={{ color: "var(--color-text-secondary, #8b949e)", fontSize: 15, maxWidth: 600, margin: "0 auto" }}>
            Calculate impermanent loss for any AMM pool. Compare LP returns vs HODLing, estimate fee income, and find your break-even point.
          </p>
        </div>

        {/* Pool Preset Selector */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 14 }}>Select Pool Type</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10 }}>
            {POOL_PRESETS.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setSelectedPreset(i)}
                style={{
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: `2px solid ${selectedPreset === i ? "#6366f1" : "var(--color-border, #30363d)"}`,
                  background: selectedPreset === i ? "#6366f115" : "var(--color-bg, #0d1117)",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "var(--color-text, #e6edf3)",
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 4 }}>{p.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{p.name}</div>
                <div style={{ fontSize: 10, color: "var(--color-text-secondary, #8b949e)", marginTop: 2 }}>{p.description}</div>
              </button>
            ))}
          </div>

          {/* Custom settings */}
          {selectedPreset === 5 && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
              <div>
                <label style={labelStyle}>Token A Weight (%)</label>
                <input type="number" value={customWeightA} onChange={e => setCustomWeightA(Number(e.target.value))} min={1} max={99} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Fee Rate (%)</label>
                <input type="number" value={customFeeRate} onChange={e => setCustomFeeRate(Number(e.target.value))} step={0.01} style={inputStyle} />
              </div>
            </div>
          )}
        </div>

        {/* Popular Pairs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          <span style={{ fontSize: 12, color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, alignSelf: "center" }}>Quick pair:</span>
          {POPULAR_PAIRS.map((p, i) => (
            <button key={p.name} onClick={() => handlePairSelect(i)} style={{
              padding: "4px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer",
              border: `1px solid ${selectedPair === i ? "#6366f1" : "var(--color-border, #30363d)"}`,
              background: selectedPair === i ? "#6366f115" : "transparent",
              color: selectedPair === i ? "#818cf8" : "var(--color-text-secondary, #8b949e)",
            }}>{p.name}</button>
          ))}
        </div>

        {/* Input Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          {/* Investment */}
          <div style={sectionStyle}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 14 }}>Investment</h3>
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Total Investment (USD)</label>
              <input type="number" value={investmentAmount} onChange={e => setInvestmentAmount(Number(e.target.value))} style={inputStyle} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={labelStyle}>Initial Price A</label>
                <input type="number" value={initialPriceA} onChange={e => setInitialPriceA(Number(e.target.value))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Current Price A</label>
                <input type="number" value={currentPriceA} onChange={e => setCurrentPriceA(Number(e.target.value))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Initial Price B</label>
                <input type="number" value={initialPriceB} onChange={e => setInitialPriceB(Number(e.target.value))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Current Price B</label>
                <input type="number" value={currentPriceB} onChange={e => setCurrentPriceB(Number(e.target.value))} style={inputStyle} />
              </div>
            </div>
          </div>

          {/* Pool Parameters */}
          <div style={sectionStyle}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 14 }}>Pool Parameters</h3>
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Days in Pool</label>
              <input type="number" value={daysInPool} onChange={e => setDaysInPool(Number(e.target.value))} style={inputStyle} />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Daily Pool Volume (USD)</label>
              <input type="number" value={dailyVolume} onChange={e => setDailyVolume(Number(e.target.value))} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Pool TVL (USD)</label>
              <input type="number" value={poolTVL} onChange={e => setPoolTVL(Number(e.target.value))} style={inputStyle} />
            </div>
            <div style={{ marginTop: 12, padding: "8px 12px", background: "#58a6ff10", border: "1px solid #58a6ff30", borderRadius: 8, fontSize: 11, color: "#58a6ff" }}>
              Fee Rate: {feeRate}% • Weight: {weightA}/{100 - weightA} • Daily Fees Est: {formatUSD(results.dailyFees)}
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ ...sectionStyle, borderColor: results.netVsHodl >= 0 ? "#3fb95040" : "#f8514940" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text, #e6edf3)", marginBottom: 20 }}>Results</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
            {/* IL */}
            <div style={{ padding: 16, borderRadius: 12, background: "#ef444410", border: "1px solid #ef444430" }}>
              <div style={{ fontSize: 11, color: "#ef4444", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Impermanent Loss</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#ef4444" }}>{formatPercent(results.il)}</div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary, #8b949e)" }}>{formatUSD(Math.abs(results.ilDollar))} lost to IL</div>
            </div>

            {/* HODL Value */}
            <div style={{ padding: 16, borderRadius: 12, background: "#58a6ff10", border: "1px solid #58a6ff30" }}>
              <div style={{ fontSize: 11, color: "#58a6ff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>HODL Value</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#58a6ff" }}>{formatUSD(results.hodlTotal)}</div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary, #8b949e)" }}>If you just held the tokens</div>
            </div>

            {/* LP Value (before fees) */}
            <div style={{ padding: 16, borderRadius: 12, background: "#d2992210", border: "1px solid #d2992230" }}>
              <div style={{ fontSize: 11, color: "#d29922", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>LP Value (No Fees)</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#d29922" }}>{formatUSD(results.lpValueBeforeFees)}</div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary, #8b949e)" }}>Position value without fee income</div>
            </div>

            {/* Fees Earned */}
            <div style={{ padding: 16, borderRadius: 12, background: "#22c55e10", border: "1px solid #22c55e30" }}>
              <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Fees Earned</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#22c55e" }}>{formatUSD(results.totalFees)}</div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary, #8b949e)" }}>{daysInPool} days × {formatUSD(results.dailyFees)}/day</div>
            </div>

            {/* Net LP vs HODL */}
            <div style={{ padding: 16, borderRadius: 12, background: results.netVsHodl >= 0 ? "#3fb95010" : "#f8514910", border: `1px solid ${results.netVsHodl >= 0 ? "#3fb95030" : "#f8514930"}` }}>
              <div style={{ fontSize: 11, color: results.netVsHodl >= 0 ? "#3fb950" : "#f85149", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                LP vs HODL (Net)
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: results.netVsHodl >= 0 ? "#3fb950" : "#f85149" }}>
                {results.netVsHodl >= 0 ? "+" : ""}{formatUSD(results.netVsHodl)}
              </div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary, #8b949e)" }}>
                {results.netVsHodl >= 0 ? "LP wins" : "HODL wins"} ({results.netVsHodl >= 0 ? "+" : ""}{formatPercent(results.netVsHodlPct)})
              </div>
            </div>

            {/* Break-even */}
            <div style={{ padding: 16, borderRadius: 12, background: "#bc8cff10", border: "1px solid #bc8cff30" }}>
              <div style={{ fontSize: 11, color: "#bc8cff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Break-Even</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#bc8cff" }}>
                {results.breakEvenDays === Infinity ? "∞" : Math.ceil(results.breakEvenDays) + "d"}
              </div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary, #8b949e)" }}>Days for fees to offset IL</div>
            </div>
          </div>

          {/* Visual Bar Comparison */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-secondary, #8b949e)", marginBottom: 12, textTransform: "uppercase" }}>HODL vs LP Comparison</h3>
            {[
              { label: "HODL", value: results.hodlTotal, color: "#58a6ff" },
              { label: "LP (no fees)", value: results.lpValueBeforeFees, color: "#d29922" },
              { label: "LP + Fees", value: results.lpValueAfterFees, color: "#22c55e" },
            ].map(item => {
              const maxVal = Math.max(results.hodlTotal, results.lpValueAfterFees, results.lpValueBeforeFees, investmentAmount);
              const pct = (item.value / maxVal) * 100;
              return (
                <div key={item.label} style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                    <span style={{ color: item.color, fontWeight: 700 }}>{item.label}</span>
                    <span style={{ color: "var(--color-text, #e6edf3)", fontWeight: 600 }}>{formatUSD(item.value)}</span>
                  </div>
                  <div style={{ height: 10, borderRadius: 5, background: "var(--color-bg, #0d1117)" }}>
                    <div style={{ height: 10, borderRadius: 5, background: item.color, width: `${Math.max(pct, 2)}%`, transition: "width 0.3s" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* IL Curve Chart */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 4 }}>Impermanent Loss Curve</h2>
          <p style={{ fontSize: 12, color: "var(--color-text-secondary, #8b949e)", marginBottom: 16 }}>
            Shows IL at every price ratio. Orange dot = your current position. Blue dashed line = no price change (1:1).
          </p>
          <ILCurveChart weightA={weightA} currentRatio={results.priceChange} />
        </div>

        {/* IL Reference Table */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 14 }}>IL Quick Reference ({weightA}/{100 - weightA} Pool)</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-border, #30363d)" }}>
                  <th style={{ padding: "8px 12px", textAlign: "left", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>Price Change</th>
                  <th style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>IL %</th>
                  <th style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>IL on {formatUSD(investmentAmount)}</th>
                  <th style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>Days to Break Even</th>
                </tr>
              </thead>
              <tbody>
                {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4, 5].map(r => {
                  const ilVal = calculateIL(r, weightA);
                  const ilDol = investmentAmount * ilVal;
                  const be = results.dailyFees > 0 ? Math.abs(ilDol) / results.dailyFees : Infinity;
                  return (
                    <tr key={r} style={{ borderBottom: "1px solid var(--color-border, #30363d)", background: r === 1 ? "#3fb95008" : undefined }}>
                      <td style={{ padding: "8px 12px", fontWeight: 600, color: "var(--color-text, #e6edf3)" }}>{r}x {r === 1 && "(no change)"}</td>
                      <td style={{ padding: "8px 12px", textAlign: "right", color: "#ef4444", fontWeight: 600 }}>{r === 1 ? "0.00%" : formatPercent(ilVal)}</td>
                      <td style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)" }}>{r === 1 ? "$0.00" : formatUSD(Math.abs(ilDol))}</td>
                      <td style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)" }}>{r === 1 ? "—" : be === Infinity ? "∞" : Math.ceil(be) + "d"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Educational Section */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text, #e6edf3)", marginBottom: 16 }}>Understanding Impermanent Loss</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ padding: 16, background: "var(--color-bg, #0d1117)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#ef4444", marginBottom: 8 }}>What is Impermanent Loss?</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)", lineHeight: 1.7 }}>
                Impermanent loss occurs when the price ratio of tokens in a liquidity pool changes compared to when you deposited them. The AMM automatically rebalances your position, which means you end up with more of the cheaper token and less of the expensive one compared to just holding.
              </p>
            </div>
            <div style={{ padding: 16, background: "var(--color-bg, #0d1117)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#22c55e", marginBottom: 8 }}>When is LP Still Profitable?</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)", lineHeight: 1.7 }}>
                LPing is profitable when fees earned exceed the impermanent loss. High-volume pools with stable pairs tend to be most profitable. Stablecoin pairs have minimal IL. Use the break-even metric above to gauge how long it takes for fees to cover your IL.
              </p>
            </div>
            <div style={{ padding: 16, background: "var(--color-bg, #0d1117)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#6366f1", marginBottom: 8 }}>Weighted Pools Reduce IL</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)", lineHeight: 1.7 }}>
                Balancer-style weighted pools (e.g., 80/20) reduce IL exposure significantly. An 80/20 ETH/USDC pool has roughly 60% less IL than a standard 50/50 pool for the same price movement, because less of your capital needs to be rebalanced.
              </p>
            </div>
            <div style={{ padding: 16, background: "var(--color-bg, #0d1117)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f0883e", marginBottom: 8 }}>Key IL Facts</h3>
              <ul style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)", lineHeight: 1.9, paddingLeft: 18, margin: 0 }}>
                <li>IL is symmetric — 2x up = same IL as 2x down</li>
                <li>IL is &quot;impermanent&quot; only if prices revert</li>
                <li>At 5x price change, IL ≈ 25.5% on a 50/50 pool</li>
                <li>Concentrated liquidity (Uni V3) amplifies IL</li>
                <li>Correlated pairs (ETH/stETH) minimize IL</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ textAlign: "center", padding: "24px 0", fontSize: 11, color: "var(--color-text-secondary, #8b949e)" }}>
          This calculator provides estimates only. Actual returns depend on pool conditions, MEV, and market dynamics. Not financial advice. DYOR.
        </div>
      </div>
    </div>
  );
}
