'use client';

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(num);
}

function formatCurrencyDetailed(num: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(num);
}

function calculateYearsOfRetirement(portfolioValue: number, monthlyExpenses: number, withdrawalRate: number = 0.04): number {
  const annualExpenses = monthlyExpenses * 12;
  const annualIncome = portfolioValue * withdrawalRate;

  if (annualIncome <= 0) return 0;
  if (annualIncome < annualExpenses) {
    // Not enough to sustain full expenses
    return (portfolioValue / annualExpenses);
  }

  return 9999; // Can sustain indefinitely (or until portfolio depletes faster than 4% withdrawal)
}

// ── Types ────────────────────────────────────────────────────────────────────
interface RetirementProjection {
  year: number;
  age: number;
  balance: number;
  cryptoValue: number;
  traditionalValue: number;
  contributions: number;
  gains: number;
}

interface ScenarioResult {
  projectedValue: number;
  cryptoValue: number;
  traditionalValue: number;
  monthlyPassiveIncome: number;
  yearsOfRetirement: number;
  fireNumber: number;
  totalContributions: number;
}

export default function RetirementCalculatorPage() {
  // ── Input State ──────────────────────────────────────────────────────────
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [currentSavings, setCurrentSavings] = useState<number>(25000);
  const [cryptoPortfolioValue, setCryptoPortfolioValue] = useState<number>(5000);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(5000);
  const [monthlySavingsRate, setMonthlySavingsRate] = useState<number>(20);
  const [cryptoAllocation, setCryptoAllocation] = useState<number>(30);
  const [cryptoReturn, setCryptoReturn] = useState<number>(25);
  const [traditionalReturn, setTraditionalReturn] = useState<number>(8);
  const [inflationRate, setInflationRate] = useState<number>(3);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(3500);

  // ── Calculations ─────────────────────────────────────────────────────────
  const yearsToRetirement = retirementAge - currentAge;
  const monthlyContribution = (monthlyIncome * monthlySavingsRate) / 100;
  const monthlyContributionToPhrase = `$${monthlyContribution.toFixed(0)}`;
  const fireNumber = (monthlyExpenses * 12) / 0.04; // 4% rule

  // Calculate projections with compound growth
  const { scenarios, projections } = useMemo(() => {
    const projectAllocation = (
      startCrypto: number,
      startTraditional: number,
      cryptoRate: number,
      tradRate: number,
      months: number,
      monthlyContrib: number,
      cryptoAlloc: number
    ): RetirementProjection[] => {
      const data: RetirementProjection[] = [];
      let crypto = startCrypto;
      let traditional = startTraditional;
      let totalContributions = startCrypto + startTraditional;

      for (let month = 0; month <= months; month++) {
        const year = Math.floor(month / 12);
        const age = currentAge + year;

        // Add contribution
        if (month > 0) {
          const monthlyTocrypto = monthlyContrib * (cryptoAlloc / 100);
          const monthlyToTraditional = monthlyContrib * ((100 - cryptoAlloc) / 100);
          crypto += monthlyTocrypto;
          traditional += monthlyToTraditional;
          totalContributions += monthlyContrib;
        }

        // Apply monthly returns
        if (month > 0) {
          const monthlyRateCrypto = cryptoRate / 100 / 12;
          const monthlyRateTrad = tradRate / 100 / 12;
          crypto *= (1 + monthlyRateCrypto);
          traditional *= (1 + monthlyRateTrad);
        }

        // Add yearly snapshot (every 12 months)
        if (month % 12 === 0) {
          const total = crypto + traditional;
          data.push({
            year,
            age,
            balance: total,
            cryptoValue: crypto,
            traditionalValue: traditional,
            contributions: totalContributions,
            gains: total - totalContributions,
          });
        }
      }

      return data;
    };

    // Conservative: 15% crypto, 5% crypto return, 7% traditional
    const conservativeProj = projectAllocation(
      currentSavings * 0.15 + cryptoPortfolioValue,
      currentSavings * 0.85,
      5,
      7,
      yearsToRetirement * 12,
      monthlyContribution,
      15
    );

    // Moderate: 30% crypto, 25% crypto return, 8% traditional
    const moderateProj = projectAllocation(
      currentSavings * 0.30 + cryptoPortfolioValue,
      currentSavings * 0.70,
      cryptoReturn,
      traditionalReturn,
      yearsToRetirement * 12,
      monthlyContribution,
      cryptoAllocation
    );

    // Aggressive: 60% crypto, 50% crypto return, 9% traditional
    const aggressiveProj = projectAllocation(
      currentSavings * 0.60 + cryptoPortfolioValue,
      currentSavings * 0.40,
      50,
      9,
      yearsToRetirement * 12,
      monthlyContribution,
      60
    );

    const getScenarioResult = (projections: RetirementProjection[]): ScenarioResult => {
      const final = projections[projections.length - 1] || { balance: 0, cryptoValue: 0, traditionalValue: 0, contributions: 0 };
      const monthlyPassive = (final.balance * 0.04) / 12;
      const yearsOfRetire = calculateYearsOfRetirement(final.balance, monthlyExpenses);

      return {
        projectedValue: final.balance,
        cryptoValue: final.cryptoValue,
        traditionalValue: final.traditionalValue,
        monthlyPassiveIncome: monthlyPassive,
        yearsOfRetirement: yearsOfRetire,
        fireNumber: fireNumber,
        totalContributions: final.contributions,
      };
    };

    return {
      scenarios: {
        conservative: getScenarioResult(conservativeProj),
        moderate: getScenarioResult(moderateProj),
        aggressive: getScenarioResult(aggressiveProj),
      },
      projections: {
        conservative: conservativeProj,
        moderate: moderateProj,
        aggressive: aggressiveProj,
      },
    };
  }, [currentAge, retirementAge, currentSavings, cryptoPortfolioValue, monthlyIncome, monthlySavingsRate, cryptoAllocation, cryptoReturn, traditionalReturn, monthlyExpenses, fireNumber, yearsToRetirement, monthlyContribution]);

  // ── Render Chart ─────────────────────────────────────────────────────────
  const renderChart = (projections: RetirementProjection[]) => {
    if (projections.length === 0) return null;

    const maxValue = Math.max(...projections.map(p => p.balance), 1);

    return (
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${projections.length}, 1fr)`, gap: 3, height: 200, alignItems: "flex-end", marginBottom: 12 }}>
        {projections.map((point, i) => {
          const totalHeight = (point.balance / maxValue) * 100;
          const cryptoHeight = (point.cryptoValue / maxValue) * 100;
          const tradHeight = (point.traditionalValue / maxValue) * 100;

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
              title={`Age ${point.age}: ${formatCurrency(point.balance)}`}
            >
              <div
                style={{
                  width: "100%",
                  height: `${tradHeight}%`,
                  background: "linear-gradient(135deg, #06b6d4, #06b6d4)",
                  borderRadius: 2,
                  marginBottom: cryptoHeight > 0 ? 1 : 0,
                }}
              />
              {cryptoHeight > 0 && (
                <div
                  style={{
                    width: "100%",
                    height: `${cryptoHeight}%`,
                    background: "linear-gradient(135deg, #6366f1, #a855f7)",
                    borderRadius: 2,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Retirement Calculator", href: "/tools/retirement-calculator" }]} />

        {/* ── Header ── */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "var(--color-text)", marginBottom: 6 }}>
            Crypto Retirement Calculator
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 15, lineHeight: 1.6 }}>
            Model your path to financial independence with a mix of crypto and traditional investments. Calculate your FIRE number and see how long your portfolio can sustain you.
          </p>
        </div>

        {/* ── Input Panel & Quick Stats ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
          {/* ── Input Controls ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Current Age */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Current Age: {currentAge}
              </label>
              <input
                type="range"
                min="18"
                max="65"
                value={currentAge}
                onChange={(e) => setCurrentAge(parseInt(e.target.value))}
                style={{
                  width: "100%",
                  height: 6,
                  borderRadius: 3,
                  background: "var(--color-surface)",
                  outline: "none",
                  WebkitAppearance: "none",
                }}
              />
            </div>

            {/* Retirement Age */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Target Retirement Age: {retirementAge}
              </label>
              <input
                min={currentAge + 1}
                max="100"
                value={retirementAge}
                onChange={(e) => setRetirementAge(parseInt(e.target.value))}
                style={{
                  width: "100%",
                  height: 6,
                  borderRadius: 3,
                  background: "var(--color-surface)",
                  outline: "none",
                  WebkitAppearance: "none",
                }}
              />
            </div>

            {/* Current Savings */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Current Savings (Fiat)
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }}>$</span>
                <input
                  type="number"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(Math.max(0, parseFloat(e.target.value) || 0))}
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

            {/* Current Crypto Portfolio */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Current Crypto Portfolio Value
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }}>$</span>
                <input
                  value={cryptoPortfolioValue}
                  onChange={(e) => setCryptoPortfolioValue(Math.max(0, parseFloat(e.target.value) || 0))}
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

            {/* Monthly Income */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Monthly Income
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }}>$</span>
                <input
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Math.max(0, parseFloat(e.target.value) || 0))}
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

            {/* Monthly Savings Rate */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Monthly Savings Rate: {monthlySavingsRate}% ({monthlyContributionToPhrase}/month)
              </label>
              <input
                min="0"
                value={monthlySavingsRate}
                onChange={(e) => setMonthlySavingsRate(parseInt(e.target.value))}
                style={{
                  width: "100%",
                  height: 6,
                  borderRadius: 3,
                  background: "var(--color-surface)",
                  outline: "none",
                  WebkitAppearance: "none",
                }}
              />
            </div>

            {/* Crypto Allocation */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Crypto Allocation: {cryptoAllocation}% (Traditional: {100 - cryptoAllocation}%)
              </label>
              <input
                value={cryptoAllocation}
                onChange={(e) => setCryptoAllocation(parseInt(e.target.value))}
                style={{
                  width: "100%",
                  height: 6,
                  borderRadius: 3,
                  background: "var(--color-surface)",
                  outline: "none",
                  WebkitAppearance: "none",
                }}
              />
            </div>

            {/* Crypto Return */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Expected Annual Crypto Return: {cryptoReturn}%
              </label>
              <input
                min="5"
                value={cryptoReturn}
                onChange={(e) => setCryptoReturn(parseInt(e.target.value))}
                style={{
                  width: "100%",
                  height: 6,
                  borderRadius: 3,
                  background: "var(--color-surface)",
                  outline: "none",
                  WebkitAppearance: "none",
                }}
              />
            </div>

            {/* Traditional Return */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Expected Annual Traditional Return: {traditionalReturn}%
              </label>
              <input
                min="2"
                max="15"
                value={traditionalReturn}
                onChange={(e) => setTraditionalReturn(parseInt(e.target.value))}
                style={{
                  width: "100%",
                  height: 6,
                  borderRadius: 3,
                  background: "var(--color-surface)",
                  outline: "none",
                  WebkitAppearance: "none",
                }}
              />
            </div>

            {/* Monthly Expenses */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Monthly Expenses in Retirement
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }}>$</span>
                <input
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Math.max(0, parseFloat(e.target.value) || 0))}
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
          </div>

          {/* ── Quick Stats ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* FIRE Number */}
            <div style={{ background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                Your FIRE Number
              </h3>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#ffffff", marginBottom: 4 }}>
                {formatCurrency(fireNumber)}
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>
                Amount needed to sustain {formatCurrency(monthlyExpenses)}/month using the 4% rule
              </p>
            </div>

            {/* Years to Retirement */}
            <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                Timeline
              </div>
              <div style={{ fontSize: 24, fontWeight: 800, color: "var(--color-text)" }}>
                {yearsToRetirement} years
              </div>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 6 }}>
                From age {currentAge} to {retirementAge}
              </p>
            </div>

            {/* Monthly Contribution */}
            <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                Monthly Contribution
              </div>
              <div style={{ fontSize: 24, fontWeight: 800, color: "var(--color-text)" }}>
                {formatCurrency(monthlyContribution)}
              </div>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 6 }}>
                {monthlySavingsRate}% of {formatCurrency(monthlyIncome)} income
              </p>
            </div>

            {/* Moderate Scenario (Main) */}
            <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20 }}>
              <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                Moderate Scenario
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Projected Value</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text)", marginTop: 4 }}>
                    {formatCurrency(scenarios.moderate.projectedValue)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Monthly Income (4%)</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#22c55e", marginTop: 4 }}>
                    {formatCurrency(scenarios.moderate.monthlyPassiveIncome)}
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: 12, borderTop: "1px solid var(--color-border)" }}>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4 }}>
                  Years of Retirement Funded
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: scenarios.moderate.yearsOfRetirement > 50 ? "#22c55e" : "var(--color-text)" }}>
                  {scenarios.moderate.yearsOfRetirement > 50 ? "Indefinitely ∞" : `${scenarios.moderate.yearsOfRetirement.toFixed(1)} years`}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scenario Comparison ── */}
        <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 24, marginBottom: 32 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 20 }}>
            Scenario Comparison
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {/* Conservative */}
            <div style={{ background: "var(--color-bg)", borderRadius: 10, border: "1px solid var(--color-border)", padding: 16 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text)", marginBottom: 12 }}>
                Conservative
              </h3>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 8 }}>
                15% crypto, 5% crypto return
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>Portfolio Value</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "var(--color-text)" }}>
                    {formatCurrency(scenarios.conservative.projectedValue)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>Monthly Income</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#3b82f6" }}>
                    {formatCurrency(scenarios.conservative.monthlyPassiveIncome)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>Years Funded</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: scenarios.conservative.yearsOfRetirement > 50 ? "#22c55e" : "#f85149" }}>
                    {scenarios.conservative.yearsOfRetirement > 50 ? "Indefinitely" : scenarios.conservative.yearsOfRetirement.toFixed(1) + "y"}
                  </div>
                </div>
              </div>
            </div>

            {/* Moderate */}
            <div style={{ background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)", borderRadius: 10, padding: 16, border: "2px solid #6366f1" }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>
                Moderate
              </h3>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", marginBottom: 8 }}>
                {cryptoAllocation}% crypto, {cryptoReturn}% crypto return
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>Portfolio Value</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#ffffff" }}>
                    {formatCurrency(scenarios.moderate.projectedValue)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>Monthly Income</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#ecfdf5" }}>
                    {formatCurrency(scenarios.moderate.monthlyPassiveIncome)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>Years Funded</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#ecfdf5" }}>
                    {scenarios.moderate.yearsOfRetirement > 50 ? "Indefinitely" : scenarios.moderate.yearsOfRetirement.toFixed(1) + "y"}
                  </div>
                </div>
              </div>
            </div>

            {/* Aggressive */}
            <div style={{ background: "var(--color-bg)", borderRadius: 10, border: "1px solid var(--color-border)", padding: 16 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text)", marginBottom: 12 }}>
                Aggressive
              </h3>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 8 }}>
                60% crypto, 50% crypto return
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>Portfolio Value</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "var(--color-text)" }}>
                    {formatCurrency(scenarios.aggressive.projectedValue)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>Monthly Income</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#a855f7" }}>
                    {formatCurrency(scenarios.aggressive.monthlyPassiveIncome)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>Years Funded</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: scenarios.aggressive.yearsOfRetirement > 50 ? "#22c55e" : "#f85149" }}>
                    {scenarios.aggressive.yearsOfRetirement > 50 ? "Indefinitely" : scenarios.aggressive.yearsOfRetirement.toFixed(1) + "y"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Growth Charts ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: 24, marginBottom: 32 }}>
          {/* Conservative Chart */}
          <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text)", marginBottom: 16 }}>
              Conservative Growth
            </h3>
            {renderChart(projections.conservative)}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 12 }}>
              <span>Age {projections.conservative[0]?.age || currentAge}</span>
              <span>Age {projections.conservative[projections.conservative.length - 1]?.age || retirementAge}</span>
            </div>
            <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 12, height: 12, background: "#06b6d4", borderRadius: 2 }} />
                <span style={{ color: "var(--color-text-secondary)" }}>Traditional</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 12, height: 12, background: "#6366f1", borderRadius: 2 }} />
                <span style={{ color: "var(--color-text-secondary)" }}>Crypto</span>
              </div>
            </div>
          </div>

          {/* Moderate Chart */}
          <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text)", marginBottom: 16 }}>
              Moderate Growth
            </h3>
            {renderChart(projections.moderate)}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 12 }}>
              <span>Age {projections.moderate[0]?.age || currentAge}</span>
              <span>Age {projections.moderate[projections.moderate.length - 1]?.age || retirementAge}</span>
            </div>
            <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 12, height: 12, background: "#06b6d4", borderRadius: 2 }} />
                <span style={{ color: "var(--color-text-secondary)" }}>Traditional</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 12, height: 12, background: "#6366f1", borderRadius: 2 }} />
                <span style={{ color: "var(--color-text-secondary)" }}>Crypto</span>
              </div>
            </div>
          </div>

          {/* Aggressive Chart */}
          <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text)", marginBottom: 16 }}>
              Aggressive Growth
            </h3>
            {renderChart(projections.aggressive)}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 12 }}>
              <span>Age {projections.aggressive[0]?.age || currentAge}</span>
              <span>Age {projections.aggressive[projections.aggressive.length - 1]?.age || retirementAge}</span>
            </div>
            <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 12, height: 12, background: "#06b6d4", borderRadius: 2 }} />
                <span style={{ color: "var(--color-text-secondary)" }}>Traditional</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 12, height: 12, background: "#6366f1", borderRadius: 2 }} />
                <span style={{ color: "var(--color-text-secondary)" }}>Crypto</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Education Section ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 32 }}>
          {[
            {
              title: "The 4% Rule",
              icon: "💰",
              content: "The 4% rule suggests you can safely withdraw 4% of your portfolio annually in retirement. This is based on historical market data showing portfolios lasting 30+ years with minimal risk of depletion."
            },
            {
              title: "Crypto Allocation",
              icon: "🔗",
              content: "Crypto offers higher growth potential but with greater volatility. Conservative portfolios use 10-20% crypto, moderate 25-40%, and aggressive 50%+. Find your risk tolerance and adjust accordingly."
            },
            {
              title: "FIRE Principle",
              icon: "🚀",
              content: "FIRE (Financial Independence, Retire Early) = (Annual Expenses ÷ 0.04). For $42,000 annual expenses, your FIRE number is $1,050,000. Reach this and you can theoretically retire indefinitely."
            },
            {
              title: "Monthly Contributions Matter",
              icon: "📈",
              content: "Compound growth is your ally. Regular monthly contributions accelerate wealth building. Even small increases in savings rate or returns can dramatically impact your retirement timeline over 20+ years."
            },
            {
              title: "Scenario Planning",
              icon: "🎯",
              content: "Use conservative, moderate, and aggressive scenarios to understand your range of outcomes. Conservative shows worst-case, aggressive shows best-case, and moderate is your most likely path."
            },
            {
              title: "Tax Implications",
              icon: "📋",
              content: "This calculator doesn't account for taxes. Capital gains, crypto tax events, and retirement account rules (401k, Roth IRA) can significantly impact your net returns. Consult a tax professional."
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
          <strong>⚠️ Disclaimer:</strong> This calculator is for educational purposes only and does not constitute financial advice. Past performance is not indicative of future results. Crypto assets are highly volatile and subject to regulatory changes. Projected returns are speculative and may not materialize. The 4% rule is a general guideline and doesn't guarantee your portfolio will last through retirement. Always do your own research, diversify your investments, and consult with a qualified financial advisor or tax professional before making investment decisions.
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Retirement Calculator",
              "url": "https://degen0x.com/tools/retirement-calculator",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
