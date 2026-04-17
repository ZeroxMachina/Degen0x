'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import RelatedContent from '@/components/RelatedContent';

// ── Types ────────────────────────────────────────────────────────────────────
type CompoundingFrequency = "daily" | "weekly" | "monthly" | "annually";
type DurationUnit = "days" | "weeks" | "months" | "years";

interface Farm {
  name: string;
  protocol: string;
  symbol: string;
  apy: number;
  tvl: number;
  risk: "Low" | "Medium" | "High" | "Extreme";
  color: string;
}

// ── Popular Farms Data ──────────────────────────────────────────────────────
const POPULAR_FARMS: Farm[] = [
  { name: "Aave ETH", protocol: "Aave", symbol: "aETH", apy: 2.8, tvl: 850, risk: "Low", color: "#627EEA" },
  { name: "Curve 3pool", protocol: "Curve", symbol: "3CRV", apy: 4.2, tvl: 1200, risk: "Low", color: "#1099BB" },
  { name: "Uniswap ETH-USDC", protocol: "Uniswap V3", symbol: "UNI-V3-LP", apy: 15.6, tvl: 456, risk: "Medium", color: "#FF007A" },
  { name: "Lido stETH", protocol: "Lido", symbol: "stETH", apy: 3.5, tvl: 2100, risk: "Low", color: "#00A3E0" },
  { name: "Convex cvxCRV", protocol: "Convex", symbol: "cvxCRV", apy: 8.4, tvl: 678, risk: "Medium", color: "#000" },
  { name: "Yearn USDC", protocol: "Yearn", symbol: "yvUSDC", apy: 6.1, tvl: 342, risk: "Medium", color: "#0074B7" },
  { name: "Raydium SOL-USDC", protocol: "Raydium", symbol: "RAY-LP", apy: 28.5, tvl: 234, risk: "High", color: "#9945FF" },
  { name: "Marinade mSOL", protocol: "Marinade", symbol: "mSOL", apy: 7.9, tvl: 156, risk: "Medium", color: "#14F195" },
];

// ── Utility Functions ────────────────────────────────────────────────────────
function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(num);
}

function formatPercentage(num: number): string {
  return `${num.toFixed(2)}%`;
}

function formatTokenAmount(num: number): string {
  if (num < 0.01) return num.toFixed(8);
  if (num < 1) return num.toFixed(4);
  return num.toFixed(2);
}

function getDaysFromDuration(duration: number, unit: DurationUnit): number {
  const conversions: Record<DurationUnit, number> = {
    days: 1,
    weeks: 7,
    months: 30,
    years: 365,
  };
  return duration * conversions[unit];
}

function getCompoundingFrequencyDays(freq: CompoundingFrequency): number {
  const frequencies: Record<CompoundingFrequency, number> = {
    daily: 1,
    weekly: 7,
    monthly: 30,
    annually: 365,
  };
  return frequencies[freq];
}

function calculateCompoundInterest(
  principal: number,
  apr: number,
  durationDays: number,
  compoundingFrequencyDays: number
): { totalEarned: number; finalValue: number; effectiveApy: number } {
  const r = apr / 100; // Convert percentage to decimal
  const n = durationDays / compoundingFrequencyDays; // Number of compounds
  const t = durationDays / 365; // Time in years

  // Compound interest formula: A = P(1 + r/m)^(m*t)
  // Simplified for daily/monthly/yearly
  const finalValue = principal * Math.pow(1 + r / (365 / compoundingFrequencyDays), n);
  const totalEarned = finalValue - principal;

  // Effective APY = (1 + r/n)^n - 1
  const effectiveApy = (Math.pow(1 + r / (365 / compoundingFrequencyDays), 365 / compoundingFrequencyDays) - 1) * 100;

  return { totalEarned, finalValue, effectiveApy };
}

function calculateImpermanentLoss(token1PriceChange: number, token2PriceChange: number): number {
  // IL = 2 * sqrt(price_ratio) / (1 + price_ratio) - 1
  const priceRatio = (100 + token1PriceChange) / (100 + token2PriceChange);
  const il = (2 * Math.sqrt(priceRatio)) / (1 + priceRatio) - 1;
  return il * 100; // Convert to percentage
}

function getRiskLevel(apy: number): "Low" | "Medium" | "High" | "Extreme" {
  if (apy < 5) return "Low";
  if (apy < 15) return "Medium";
  if (apy < 50) return "High";
  return "Extreme";
}

function getRiskColor(risk: "Low" | "Medium" | "High" | "Extreme"): string {
  const colors: Record<string, string> = {
    "Low": "#22c55e",
    "Medium": "#f59e0b",
    "High": "#f85149",
    "Extreme": "#a41e34",
  };
  return colors[risk] || "#64748b";
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function YieldFarmingCalculatorPage() {
  // ── Input State ──
  const [initialInvestment, setInitialInvestment] = useState<number>(1000);
  const [apr, setApr] = useState<number>(25);
  const [compoundingFrequency, setCompoundingFrequency] = useState<CompoundingFrequency>("daily");
  const [duration, setDuration] = useState<number>(365);
  const [durationUnit, setDurationUnit] = useState<DurationUnit>("days");
  const [tokenPriceChange, setTokenPriceChange] = useState<number>(10);
  const [protocolFee, setProtocolFee] = useState<number>(0.5);
  const [isLP, setIsLP] = useState<boolean>(false);
  const [token1Name, setToken1Name] = useState<string>("ETH");
  const [token1PriceChange, setToken1PriceChange] = useState<number>(10);
  const [token2Name, setToken2Name] = useState<string>("USDC");
  const [token2PriceChange, setToken2PriceChange] = useState<number>(0);

  // ── Calculate Results ──
  const results = useMemo(() => {
    const durationDays = getDaysFromDuration(duration, durationUnit);
    const { totalEarned, finalValue, effectiveApy } = calculateCompoundInterest(
      initialInvestment,
      apr,
      durationDays,
      getCompoundingFrequencyDays(compoundingFrequency)
    );

    // Apply fees
    const feeAmount = totalEarned * (protocolFee / 100);
    const netEarned = totalEarned - feeAmount;
    const netFinalValue = finalValue - feeAmount;

    // Token price change effect
    const priceChangeEffect = netFinalValue * (tokenPriceChange / 100);
    const finalValueAfterPrice = netFinalValue + priceChangeEffect;

    // Impermanent loss (if LP)
    let impermanentLoss = 0;
    if (isLP) {
      impermanentLoss = calculateImpermanentLoss(token1PriceChange, token2PriceChange);
    };
    const ilAmount = (netFinalValue * Math.abs(impermanentLoss)) / 100;
    const netProfitAfterIL = finalValueAfterPrice - ilAmount;

    return {
      totalEarned,
      finalValue,
      effectiveApy,
      feeAmount,
      netEarned,
      netFinalValue,
      priceChangeEffect,
      finalValueAfterPrice,
      impermanentLoss,
      ilAmount,
      netProfitAfterIL,
      durationDays,
    };
  }, [initialInvestment, apr, compoundingFrequency, duration, durationUnit, tokenPriceChange, protocolFee, isLP, token1PriceChange, token2PriceChange]);

  // ── Comparison Table (different APY levels) ──
  const comparisonTable = useMemo(() => {
    const apyLevels = [5, 10, 25, 50, 100, 200];
    const durationDays = getDaysFromDuration(duration, durationUnit);

    return apyLevels.map((apyLevel) => {
      const { totalEarned, finalValue, effectiveApy } = calculateCompoundInterest(
        initialInvestment,
        apyLevel,
        durationDays,
        getCompoundingFrequencyDays(compoundingFrequency)
      );

      const feeAmount = totalEarned * (protocolFee / 100);
      const netFinalValue = finalValue - feeAmount;

      return {
        apy: apyLevel,
        earned: totalEarned,
        finalValue: netFinalValue,
        effectiveApy,
      };
    });
  }, [initialInvestment, duration, durationUnit, compoundingFrequency, protocolFee]);

  // ── Monthly Breakdown Chart ──
  const monthlyBreakdown = useMemo(() => {
    const durationDays = getDaysFromDuration(duration, durationUnit);
    const monthsCount = Math.min(Math.ceil(durationDays / 30), 12);
    const data = [];

    for (let i = 1; i <= monthsCount; i++) {
      const daysPassed = Math.min(i * 30, durationDays);
      const { finalValue: value } = calculateCompoundInterest(
        initialInvestment,
        apr,
        daysPassed,
        getCompoundingFrequencyDays(compoundingFrequency)
      );
      const feeAmount = (value - initialInvestment) * (protocolFee / 100);
      const netValue = value - feeAmount;

      data.push({
        month: i,
        value: netValue,
        label: `Month ${i}`,
      });
    }

    return data;
  }, [initialInvestment, apr, duration, durationUnit, compoundingFrequency, protocolFee]);

  const riskLevel = getRiskLevel(apr);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Yield Farming Calculator", href: "/tools/yield-farming-calculator" }]} />

        {/* ── Header ── */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "var(--color-text)", marginBottom: 6 }}>
            Yield Farming Calculator
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 15, lineHeight: 1.6 }}>
            Calculate estimated returns from yield farming strategies. Account for compounding, fees, token price changes, and impermanent loss.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
          {/* ── Input Panel ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Initial Investment */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Initial Investment ($)
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }}>$</span>
                <input
                  type="number"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Math.max(1, parseFloat(e.target.value) || 0))}
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 28px",
                    borderRadius: 10,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                />
              </div>
            </div>

            {/* APR/APY */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                APR/APY (%)
              </label>
              <div style={{ position: "relative" }}>
                <input
                  value={apr}
                  onChange={(e) => setApr(Math.max(0, parseFloat(e.target.value) || 0))}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: 10,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                />
                <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }}>%</span>
              </div>
            </div>

            {/* Compounding Frequency */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Compounding Frequency
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {(["daily", "weekly", "monthly", "annually"] as const).map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setCompoundingFrequency(freq)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: `1px solid ${compoundingFrequency === freq ? "var(--color-primary)" : "var(--color-border)"}`,
                      background: compoundingFrequency === freq ? "var(--color-primary)20" : "var(--color-surface)",
                      color: compoundingFrequency === freq ? "var(--color-primary)" : "var(--color-text)",
                      fontWeight: 600,
                      fontSize: 12,
                      cursor: "pointer",
                      textTransform: "capitalize",
                    }}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Duration
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 8 }}>
                <input
                  value={duration}
                  onChange={(e) => setDuration(Math.max(1, parseFloat(e.target.value) || 1))}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                />
                <select
                  value={durationUnit}
                  onChange={(e) => setDurationUnit(e.target.value as DurationUnit)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  {(["days", "weeks", "months", "years"] as const).map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Token Price Change */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Token Price Change (%)
              </label>
              <input
                value={tokenPriceChange}
                onChange={(e) => setTokenPriceChange(parseFloat(e.target.value) || 0)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-surface)",
                  color: "var(--color-text)",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              />
            </div>

            {/* Protocol Fee */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Protocol Fee (%)
              </label>
              <input
                value={protocolFee}
                onChange={(e) => setProtocolFee(Math.max(0, parseFloat(e.target.value) || 0))}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-surface)",
                  color: "var(--color-text)",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              />
            </div>

            {/* LP Toggle */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "12px 0" }}>
                <input
                  type="checkbox"
                  checked={isLP}
                  onChange={(e) => setIsLP(e.target.checked)}
                  style={{
                    width: 18,
                    height: 18,
                    cursor: "pointer",
                    accentColor: "var(--color-primary)",
                  }}
                />
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text)" }}>
                  LP Farm (Calculate Impermanent Loss)
                </span>
              </label>
            </div>

            {/* LP Inputs */}
            {isLP && (
              <>
                <div style={{ background: "var(--color-surface)", padding: 16, borderRadius: 8, border: "1px solid var(--color-border)" }}>
                  <div style={{ marginBottom: 12 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Token 1: {token1Name}
                    </label>
                    <input
                      type="text"
                      value={token1Name}
                      onChange={(e) => setToken1Name(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg)",
                        color: "var(--color-text)",
                        fontSize: 12,
                      }}
                    />
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginTop: 8, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Price Change (%)
                    </label>
                    <input
                      value={token1PriceChange}
                      onChange={(e) => setToken1PriceChange(parseFloat(e.target.value) || 0)}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg)",
                        color: "var(--color-text)",
                        fontSize: 12,
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Token 2: {token2Name}
                    </label>
                    <input
                      value={token2Name}
                      onChange={(e) => setToken2Name(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg)",
                        color: "var(--color-text)",
                        fontSize: 12,
                      }}
                    />
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginTop: 8, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Price Change (%)
                    </label>
                    <input
                      value={token2PriceChange}
                      onChange={(e) => setToken2PriceChange(parseFloat(e.target.value) || 0)}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: 6,
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg)",
                        color: "var(--color-text)",
                        fontSize: 12,
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ── Results Panel ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Main Results */}
            <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20 }}>
              <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>
                Farming Results
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Initial Investment</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text)", marginTop: 4 }}>
                    {formatCurrency(initialInvestment)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Total Earned</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#22c55e", marginTop: 4 }}>
                    {formatCurrency(results.totalEarned)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Final Value</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text)", marginTop: 4 }}>
                    {formatCurrency(results.netFinalValue)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Net Profit</div>
                  <div style={{
                    fontSize: 18,
                    fontWeight: 800,
                    marginTop: 4,
                    color: results.netProfitAfterIL >= 0 ? "#22c55e" : "#f85149"
                  }}>
                    {formatCurrency(results.netProfitAfterIL)}
                  </div>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 16, marginTop: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 13 }}>
                  <div>
                    <div style={{ color: "var(--color-text-secondary)", marginBottom: 4 }}>Effective APY</div>
                    <div style={{ fontWeight: 700, color: "#6366f1" }}>{formatPercentage(results.effectiveApy)}</div>
                  </div>
                  <div>
                    <div style={{ color: "var(--color-text-secondary)", marginBottom: 4 }}>Protocol Fees</div>
                    <div style={{ fontWeight: 700, color: "#f85149" }}>-{formatCurrency(results.feeAmount)}</div>
                  </div>
                  {isLP && (
                    <>
                      <div>
                        <div style={{ color: "var(--color-text-secondary)", marginBottom: 4 }}>Impermanent Loss</div>
                        <div style={{ fontWeight: 700, color: results.impermanentLoss < 0 ? "#22c55e" : "#f85149" }}>
                          {formatPercentage(results.impermanentLoss)}
                        </div>
                      </div>
                      <div>
                        <div style={{ color: "var(--color-text-secondary)", marginBottom: 4 }}>IL Amount</div>
                        <div style={{ fontWeight: 700, color: "#f85149" }}>-{formatCurrency(results.ilAmount)}</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Risk Assessment */}
            <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 16 }}>
              <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                Risk Assessment
              </h3>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: `${getRiskColor(riskLevel)}20`,
                  border: `2px solid ${getRiskColor(riskLevel)}`,
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: getRiskColor(riskLevel), textTransform: "uppercase" }}>
                    {riskLevel} Risk
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
                  {riskLevel === "Low" && "Low volatility, stable returns expected"}
                  {riskLevel === "Medium" && "Moderate risk, check contract audits"}
                  {riskLevel === "High" && "Higher risk, verify security thoroughly"}
                  {riskLevel === "Extreme" && "Very high risk, proceed with caution"}
                </div>
              </div>
            </div>

            {/* Price Change Effect */}
            {tokenPriceChange !== 0 && (
              <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 16 }}>
                <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                  Price Impact
                </h3>
                <div style={{
                  padding: "10px 12px",
                  background: "var(--color-bg)",
                  borderRadius: 8,
                  fontSize: 13,
                }}>
                  <div style={{ color: "var(--color-text-secondary)", marginBottom: 6 }}>
                    Token price change: {tokenPriceChange > 0 ? "+" : ""}{tokenPriceChange}%
                  </div>
                  <div style={{ fontWeight: 700, color: tokenPriceChange > 0 ? "#22c55e" : "#f85149" }}>
                    {tokenPriceChange > 0 ? "+" : ""}{formatCurrency(results.priceChangeEffect)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Comparison Table ── */}
        <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 24, marginBottom: 32 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 16 }}>
            Returns at Different APY Levels
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <th style={{ textAlign: "left", padding: "12px", fontWeight: 700, color: "var(--color-text-secondary)", fontSize: 11, textTransform: "uppercase" }}>APY</th>
                  <th style={{ textAlign: "right", padding: "12px", fontWeight: 700, color: "var(--color-text-secondary)", fontSize: 11, textTransform: "uppercase" }}>Earned</th>
                  <th style={{ textAlign: "right", padding: "12px", fontWeight: 700, color: "var(--color-text-secondary)", fontSize: 11, textTransform: "uppercase" }}>Final Value</th>
                  <th style={{ textAlign: "right", padding: "12px", fontWeight: 700, color: "var(--color-text-secondary)", fontSize: 11, textTransform: "uppercase" }}>Effective APY</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <td style={{ padding: "12px", color: "var(--color-text)", fontWeight: 600 }}>{row.apy}%</td>
                    <td style={{ padding: "12px", textAlign: "right", color: "#22c55e", fontWeight: 600 }}>{formatCurrency(row.earned)}</td>
                    <td style={{ padding: "12px", textAlign: "right", color: "var(--color-text)", fontWeight: 600 }}>{formatCurrency(row.finalValue)}</td>
                    <td style={{ padding: "12px", textAlign: "right", color: "#6366f1", fontWeight: 700 }}>{formatPercentage(row.effectiveApy)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Growth Chart ── */}
        <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 24, marginBottom: 32 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 20 }}>
            Value Growth Over Time (Monthly)
          </h2>

          {monthlyBreakdown.length > 0 && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${monthlyBreakdown.length}, 1fr)`, gap: 4, height: 200, alignItems: "flex-end", marginBottom: 12 }}>
                {monthlyBreakdown.map((point, i) => {
                  const maxValue = Math.max(...monthlyBreakdown.map(d => d.value), initialInvestment);
                  const investedHeight = (initialInvestment / maxValue) * 100;
                  const totalHeight = (point.value / maxValue) * 100;
                  const earnedHeight = totalHeight - investedHeight;

                  return (
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                      }}
                      title={`${point.label}: ${formatCurrency(point.value)}`}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: `${investedHeight}%`,
                          background: "var(--color-primary)",
                          borderRadius: 3,
                          opacity: 0.6,
                          marginBottom: earnedHeight > 0 ? 1 : 0,
                        }}
                      />
                      {earnedHeight > 0 && (
                        <div
                          style={{
                            width: "100%",
                            height: `${earnedHeight}%`,
                            background: "#22c55e",
                            borderRadius: 3,
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 12 }}>
                <span>{monthlyBreakdown[0]?.label}</span>
                <span>{monthlyBreakdown[monthlyBreakdown.length - 1]?.label}</span>
              </div>

              <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 12, height: 12, background: "var(--color-primary)", borderRadius: 2 }} />
                  <span style={{ color: "var(--color-text-secondary)" }}>Initial Investment</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 12, height: 12, background: "#22c55e", borderRadius: 2 }} />
                  <span style={{ color: "var(--color-text-secondary)" }}>Earnings</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Popular Farms ── */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text)", marginBottom: 16 }}>
            Popular Yield Farms
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {POPULAR_FARMS.map((farm, i) => (
              <div key={i} style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 4 }}>
                      {farm.name}
                    </h3>
                    <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>
                      {farm.protocol}
                    </div>
                  </div>
                  <div style={{
                    padding: "4px 8px",
                    borderRadius: 6,
                    background: `${getRiskColor(farm.risk)}20`,
                    border: `1px solid ${getRiskColor(farm.risk)}`,
                  }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: getRiskColor(farm.risk), textTransform: "uppercase" }}>
                      {farm.risk}
                    </div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4 }}>APY</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: farm.color }}>
                      {farm.apy.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4 }}>TVL</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)" }}>
                      ${farm.tvl}M
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setApr(farm.apy);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid var(--color-primary)",
                    background: "var(--color-primary)15",
                    color: "var(--color-primary)",
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Use {farm.apy.toFixed(1)}% APY
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education Section ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 32 }}>
          {[
            {
              title: "What is Yield Farming?",
              icon: "🌾",
              content: "Yield farming is an investment strategy where users provide liquidity to DeFi protocols in exchange for rewards. Returns come from trading fees, governance tokens, or other incentives."
            },
            {
              title: "Compounding Returns",
              icon: "📈",
              content: "Compounding means earning returns on your returns. Protocols that compound daily will grow your investment faster than those that compound annually due to the power of compound interest."
            },
            {
              title: "Impermanent Loss",
              icon: "⚖️",
              content: "When you provide liquidity to a pool with two tokens, impermanent loss occurs if the token prices diverge significantly. Rebalancing by the protocol can result in losses compared to just holding."
            },
            {
              title: "Protocol Fees",
              icon: "💰",
              content: "Most yield farming protocols take a percentage fee from the earnings as a platform fee. This is deducted from your rewards and affects your net returns."
            },
            {
              title: "Smart Contract Risk",
              icon: "🔐",
              content: "Always verify that the protocol has been audited. Smart contract bugs or exploits can result in loss of funds. Higher APYs often indicate higher risks."
            },
            {
              title: "Gas Costs",
              icon: "⛽",
              content: "On-chain transactions have gas fees. High gas costs can significantly reduce profits on smaller investments. Consider layer 2 solutions for lower fees."
            },
          ].map((item, i) => (
            <div key={i} style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20 }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item.content}</p>
            </div>
          ))}
        </div>

        {/* ── Disclaimer ── */}
        <div style={{ padding: 16, background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          <strong>⚠️ Disclaimer:</strong> This calculator provides educational estimates based on your inputs. Actual returns depend on market conditions, gas fees, slippage, and protocol changes. Past performance is not indicative of future results. Yield farming carries significant risks including smart contract vulnerabilities, impermanent loss, and market volatility. Always do thorough research, verify audits, and never invest more than you can afford to lose. This is not financial advice.
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/tools/yield-farming-calculator" />
    </div>
  );
}

