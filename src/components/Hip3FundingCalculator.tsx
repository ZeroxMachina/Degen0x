'use client';

import { useState, useMemo } from "react";

// ── Interfaces ───────────────────────────────────────────
interface Market {
  id: string;
  label: string;
  ticker: string;
  category: string;
  defaultPrice: number;
  defaultFunding: number; // hourly %, positive = longs pay
  maxLeverage: number;
  color: string;
}

interface CalculatorResult {
  positionSize: number;
  collateralRequired: number;
  hourlyFundingCost: number;
  dailyFundingCost: number;
  weeklyFundingCost: number;
  monthlyFundingCost: number;
  annualizedFundingPct: number;
  liquidationPrice: number;
  liquidationDistance: number; // %
  isPayingFunding: boolean; // true = paying out, false = receiving
}

// ── Constants ────────────────────────────────────────────
const MARKETS: Market[] = [
  { id: "CL-USDC",     label: "WTI Crude Oil",     ticker: "CL-USDC",     category: "Commodity",    defaultPrice: 71.2,   defaultFunding:  0.0082, maxLeverage: 20, color: "#f59e0b" },
  { id: "XYZ100-USDC", label: "US Equity Index",   ticker: "XYZ100-USDC", category: "Equity Index", defaultPrice: 18340,  defaultFunding:  0.0045, maxLeverage: 20, color: "#6366f1" },
  { id: "GC-USDC",     label: "Gold Futures",      ticker: "GC-USDC",     category: "Commodity",    defaultPrice: 3028,   defaultFunding:  0.0031, maxLeverage: 20, color: "#d29922" },
  { id: "SI-USDC",     label: "Silver Futures",    ticker: "SI-USDC",     category: "Commodity",    defaultPrice: 34.1,   defaultFunding:  0.0021, maxLeverage: 20, color: "#8b949e" },
  { id: "TSLA-USDC",   label: "Tesla Stock Perp",  ticker: "TSLA-USDC",   category: "Single Stock", defaultPrice: 248,    defaultFunding: -0.0011, maxLeverage: 10, color: "#22c55e" },
];

const DIRECTION_OPTIONS = [
  { id: "long",  label: "↑ Long",  help: "Profit when price rises" },
  { id: "short", label: "↓ Short", help: "Profit when price falls" },
];

// ── Helpers ──────────────────────────────────────────────
function fmtUSD(n: number): string {
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (Math.abs(n) >= 1_000)     return `$${(n / 1_000).toFixed(2)}K`;
  return `$${n.toFixed(2)}`;
}

function fmtPct(n: number): string {
  return `${n >= 0 ? "+" : ""}${n.toFixed(4)}%`;
}

// ── Component ────────────────────────────────────────────
export default function Hip3FundingCalculator() {
  const [selectedMarket, setSelectedMarket] = useState<Market>(MARKETS[0]);
  const [direction, setDirection] = useState<"long" | "short">("long");
  const [collateral, setCollateral] = useState<string>("1000");
  const [leverage, setLeverage] = useState<number>(5);
  const [fundingOverride, setFundingOverride] = useState<string>("");

  // Use override if provided, else default
  const effectiveFundingRate = useMemo(() => {
    const parsed = parseFloat(fundingOverride);
    return isNaN(parsed) ? selectedMarket.defaultFunding : parsed / 100;
  }, [fundingOverride, selectedMarket.defaultFunding]);

  const result = useMemo<CalculatorResult | null>(() => {
    const col = parseFloat(collateral);
    if (!col || col <= 0 || leverage <= 0) return null;

    const positionSize = col * leverage;
    const priceAtEntry = selectedMarket.defaultPrice;

    // Funding: positive rate = longs pay shorts, negative = shorts pay longs
    const isLong = direction === "long";
    // Positive funding → longs pay. Negative funding → shorts pay.
    const payingFunding = (isLong && effectiveFundingRate > 0) || (!isLong && effectiveFundingRate < 0);
    const hourlyAbs = Math.abs(effectiveFundingRate) * positionSize / 100;

    // Liquidation: price moves that wipe out collateral (accounting for fees ~0.05%)
    // Simplified: liq when unrealizedPnL = -collateral * 0.9 (90% buffer)
    const priceMoveToLiq = (col * 0.9) / (positionSize / priceAtEntry);
    const liquidationPrice = isLong
      ? priceAtEntry - priceMoveToLiq
      : priceAtEntry + priceMoveToLiq;
    const liquidationDistance = (Math.abs(priceMoveToLiq) / priceAtEntry) * 100;

    return {
      positionSize,
      collateralRequired: col,
      hourlyFundingCost: hourlyAbs,
      dailyFundingCost: hourlyAbs * 24,
      weeklyFundingCost: hourlyAbs * 24 * 7,
      monthlyFundingCost: hourlyAbs * 24 * 30,
      annualizedFundingPct: Math.abs(effectiveFundingRate) * 24 * 365,
      liquidationPrice: Math.max(0, liquidationPrice),
      liquidationDistance,
      isPayingFunding: payingFunding,
    };
  }, [collateral, leverage, direction, effectiveFundingRate, selectedMarket]);

  const inputStyle = {
    width: "100%",
    background: "#0d1117",
    border: "1px solid #30363d",
    borderRadius: 8,
    padding: "10px 12px",
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
    <div role="region" aria-label="HIP-3 Position and Funding Calculator" style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 16, padding: 24, marginBottom: 40 }}>
      <div style={{ marginBottom: 20 }}>
        <h3 id="calc-heading" style={{ fontSize: 17, fontWeight: 700, color: "#e6edf3", margin: 0 }}>
          ⚡ HIP-3 Position &amp; Funding Calculator
        </h3>
        <p style={{ fontSize: 13, color: "#8b949e", marginTop: 4, marginBottom: 0 }}>
          Estimate your position size, funding costs, and liquidation price for any HIP-3 market.
        </p>
      </div>

      {/* Market Selector */}
      <fieldset style={{ border: "none", padding: 0, margin: 0, marginBottom: 20 }}>
        <legend style={labelStyle}>Select Market</legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {MARKETS.map((m) => (
            <button
              key={m.id}
              aria-pressed={selectedMarket.id === m.id}
              aria-label={`${m.label} (${m.ticker})`}
              onClick={() => {
                setSelectedMarket(m);
                setFundingOverride("");
              }}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                border: `1px solid ${selectedMarket.id === m.id ? m.color : "#30363d"}`,
                background: selectedMarket.id === m.id ? `${m.color}20` : "#0d1117",
                color: selectedMarket.id === m.id ? m.color : "#8b949e",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {m.ticker}
            </button>
          ))}
        </div>
        <div style={{ marginTop: 8, fontSize: 12, color: "#8b949e" }}>
          <span style={{ color: "#e6edf3" }}>{selectedMarket.label}</span>
          {" · "}Category: {selectedMarket.category}
          {" · "}Reference price: {fmtUSD(selectedMarket.defaultPrice)}
          {" · "}Max leverage: {selectedMarket.maxLeverage}x
        </div>
      </fieldset>

      {/* Direction + Collateral + Leverage */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 20 }}>
        {/* Direction */}
        <div>
          <label style={labelStyle}>Direction</label>
          <div style={{ display: "flex", gap: 8 }}>
            {DIRECTION_OPTIONS.map((d) => (
              <button
                key={d.id}
                aria-pressed={direction === d.id}
                aria-label={`${d.label} — ${d.help}`}
                onClick={() => setDirection(d.id as "long" | "short")}
                style={{
                  flex: 1,
                  padding: "9px 12px",
                  borderRadius: 8,
                  border: `1px solid ${direction === d.id ? (d.id === "long" ? "#22c55e" : "#f85149") : "#30363d"}`,
                  background: direction === d.id ? (d.id === "long" ? "#22c55e20" : "#f8514920") : "#0d1117",
                  color: direction === d.id ? (d.id === "long" ? "#22c55e" : "#f85149") : "#8b949e",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Collateral */}
        <div>
          <label htmlFor="hip3-collateral" style={labelStyle}>Collateral (USDC)</label>
          <input
            id="hip3-collateral"
            type="number"
            value={collateral}
            onChange={(e) => setCollateral(e.target.value)}
            placeholder="e.g. 1000"
            min={10}
            style={inputStyle}
          />
        </div>

        {/* Leverage */}
        <div>
          <label htmlFor="hip3-leverage" style={labelStyle}>Leverage: {leverage}x</label>
          <input
            id="hip3-leverage"
            type="range"
            min={1}
            max={selectedMarket.maxLeverage}
            step={1}
            value={leverage}
            onChange={(e) => setLeverage(Number(e.target.value))}
            aria-valuemin={1}
            aria-valuemax={selectedMarket.maxLeverage}
            aria-valuenow={leverage}
            aria-label={`Leverage: ${leverage}x`}
            style={{ width: "100%", accentColor: selectedMarket.color, marginTop: 4 }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#8b949e", marginTop: 2 }}>
            <span>1x</span>
            <span>{Math.floor(selectedMarket.maxLeverage / 2)}x</span>
            <span>{selectedMarket.maxLeverage}x</span>
          </div>
        </div>

        {/* Funding Rate Override */}
        <div>
          <label htmlFor="hip3-funding-rate" style={labelStyle}>
            Hourly Funding Rate (%)
            <span style={{ fontSize: 10, fontWeight: 400, marginLeft: 4, color: "#6e7681" }}>optional override</span>
          </label>
          <input
            id="hip3-funding-rate"
            type="number"
            value={fundingOverride}
            onChange={(e) => setFundingOverride(e.target.value)}
            placeholder={`Default: ${(selectedMarket.defaultFunding * 100).toFixed(4)}%`}
            step={0.0001}
            style={inputStyle}
          />
          <div style={{ fontSize: 11, color: "#8b949e", marginTop: 4 }}>
            Positive = longs pay shorts. Negative = shorts pay longs.
          </div>
        </div>
      </div>

      {/* Results */}
      {result ? (
        <div aria-live="polite" aria-atomic="true">
          <div style={{ borderTop: "1px solid #21262d", paddingTop: 20, marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
              Position Summary
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
              {[
                { label: "Position Size", value: fmtUSD(result.positionSize), color: selectedMarket.color },
                { label: "Collateral", value: fmtUSD(result.collateralRequired), color: "#e6edf3" },
                { label: "Effective Leverage", value: `${leverage}x`, color: leverage >= 10 ? "#f85149" : leverage >= 5 ? "#d29922" : "#22c55e" },
                {
                  label: "Liq. Price",
                  value: fmtUSD(result.liquidationPrice),
                  color: result.liquidationDistance < 5 ? "#f85149" : result.liquidationDistance < 15 ? "#d29922" : "#22c55e",
                },
                {
                  label: "Liq. Distance",
                  value: `${result.liquidationDistance.toFixed(1)}%`,
                  color: result.liquidationDistance < 5 ? "#f85149" : result.liquidationDistance < 15 ? "#d29922" : "#22c55e",
                },
              ].map((stat) => (
                <div key={stat.label} style={{ background: "#0d1117", borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: 12, color: "#8b949e", marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Funding Cost Breakdown */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
              Funding {result.isPayingFunding ? "Cost" : "Income"} — at {fmtPct(effectiveFundingRate * 100)} / hour
            </div>
            <div
              style={{
                background: result.isPayingFunding ? "#f8514910" : "#22c55e10",
                border: `1px solid ${result.isPayingFunding ? "#f8514940" : "#22c55e40"}`,
                borderRadius: 10,
                padding: 16,
              }}
            >
              <div style={{ fontSize: 12, color: result.isPayingFunding ? "#f85149" : "#22c55e", fontWeight: 700, marginBottom: 12 }}>
                {result.isPayingFunding
                  ? `⚠️ You're paying funding — this position has a holding cost`
                  : `✅ You're receiving funding — this position earns a rebate`}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10 }}>
                {[
                  { period: "Per Hour", amount: result.hourlyFundingCost },
                  { period: "Per Day", amount: result.dailyFundingCost },
                  { period: "Per Week", amount: result.weeklyFundingCost },
                  { period: "Per Month", amount: result.monthlyFundingCost },
                ].map((row) => (
                  <div key={row.period} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: result.isPayingFunding ? "#f85149" : "#22c55e" }}>
                      {result.isPayingFunding ? "-" : "+"}{fmtUSD(row.amount)}
                    </div>
                    <div style={{ fontSize: 11, color: "#8b949e" }}>{row.period}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12, fontSize: 12, color: "#8b949e" }}>
                Annualized funding rate on position: <strong style={{ color: "#e6edf3" }}>{(result.annualizedFundingPct).toFixed(1)}%</strong>
              </div>
            </div>
          </div>

          {/* Risk Warnings */}
          {(result.liquidationDistance < 10 || leverage >= 10) && (
            <div style={{ background: "#f8514910", border: "1px solid #f8514940", borderRadius: 10, padding: 14, marginTop: 16, fontSize: 13, color: "#f85149" }}>
              ⚠️ <strong>High-risk position:</strong>
              {result.liquidationDistance < 10 && ` Your liquidation price is only ${result.liquidationDistance.toFixed(1)}% away.`}
              {leverage >= 10 && ` ${leverage}x leverage is extremely high for commodity markets.`}
              {" "}Consider reducing leverage or increasing collateral.
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "20px 0", color: "#8b949e", fontSize: 14 }}>
          Enter a collateral amount to see your position breakdown.
        </div>
      )}

      <div style={{ marginTop: 16, fontSize: 11, color: "#6e7681", borderTop: "1px solid #21262d", paddingTop: 12 }}>
        ⚠️ Calculations are estimates for educational purposes only. Liquidation prices vary based on mark price, fees, and exchange-specific parameters. Always verify on-platform before trading. Not financial advice.
      </div>
    </div>
  );
}
