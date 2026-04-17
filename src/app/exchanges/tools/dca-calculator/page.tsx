'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

const FREQUENCIES = [
  { label: "Daily", value: "daily", periodsPerYear: 365 },
  { label: "Weekly", value: "weekly", periodsPerYear: 52 },
  { label: "Bi-weekly", value: "biweekly", periodsPerYear: 26 },
  { label: "Monthly", value: "monthly", periodsPerYear: 12 },
];

const HISTORICAL_RETURNS: Record<string, number> = {
  "Bitcoin (BTC)": 150,
  "Ethereum (ETH)": 120,
  "Conservative (20%)": 20,
  "Moderate (50%)": 50,
  "Aggressive (100%)": 100,
  "Custom": 0,
};

export default function DcaCalculatorPage() {
  const [investmentAmount, setInvestmentAmount] = useState<string>("100");
  const [frequency, setFrequency] = useState("weekly");
  const [timePeriod, setTimePeriod] = useState<string>("3");
  const [selectedReturn, setSelectedReturn] = useState("Moderate (50%)");
  const [customReturn, setCustomReturn] = useState<string>("50");

  const results = useMemo(() => {
    const amount = parseFloat(investmentAmount) || 0;
    const years = parseFloat(timePeriod) || 0;
    const annualReturn = selectedReturn === "Custom"
      ? (parseFloat(customReturn) || 0)
      : HISTORICAL_RETURNS[selectedReturn];
    const freq = FREQUENCIES.find((f) => f.value === frequency) || FREQUENCIES[2];
    const totalPeriods = Math.floor(freq.periodsPerYear * years);
    const periodicRate = annualReturn / 100 / freq.periodsPerYear;

    let totalInvested = 0;
    let portfolioValue = 0;

    const dataPoints: { period: number; invested: number; value: number }[] = [];

    for (let i = 1; i <= totalPeriods; i++) {
      totalInvested += amount;
      portfolioValue = (portfolioValue + amount) * (1 + periodicRate);

      if (
        totalPeriods <= 52 ||
        i % Math.max(1, Math.floor(totalPeriods / 52)) === 0 ||
        i === totalPeriods
      ) {
        dataPoints.push({
          period: i,
          invested: totalInvested,
          value: portfolioValue,
        });
      }
    };

    const totalReturn = portfolioValue - totalInvested;
    const totalReturnPercent = totalInvested > 0 ? (totalReturn / totalInvested) * 100 : 0;

    return {
      totalInvested,
      portfolioValue,
      totalReturn,
      totalReturnPercent,
      totalPeriods,
      dataPoints,
    };
  }, [investmentAmount, frequency, timePeriod, selectedReturn, customReturn]);

  const maxValue = Math.max(...results.dataPoints.map((d) => d.value), 1);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Exchanges", href: "/exchanges" },
          { label: "Tools", href: "/exchanges/tools" },
          { label: "DCA Calculator", href: "#" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
        Dollar-Cost Averaging (DCA) Calculator
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        See how dollar-cost averaging can grow your crypto portfolio over time. Enter your regular investment
        amount, choose a frequency and time period, and visualize the projected growth of your investment using
        historical return estimates.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Investment Amount (USD)</label>
            <input
              type="number"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              placeholder="100"
              min="0"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Frequency</label>
            <div className="grid grid-cols-2 gap-2">
              {FREQUENCIES.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFrequency(f.value)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    frequency === f.value
                      ? "bg-[var(--color-primary)] text-[var(--color-text)]"
                      : "border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Time Period (Years)</label>
            <input
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              placeholder="3"
              min="0.5"
              max="30"
              step="0.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Estimated Annual Return</label>
            <select
              value={selectedReturn}
              onChange={(e) => setSelectedReturn(e.target.value)}
            >
              {Object.keys(HISTORICAL_RETURNS).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          {selectedReturn === "Custom" && (
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Custom Annual Return (%)</label>
              <input
                value={customReturn}
                onChange={(e) => setCustomReturn(e.target.value)}
                placeholder="50"
              />
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">Projected Results</h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--color-text-secondary)]">Total Invested</span>
                <span className="text-sm font-medium text-[var(--color-text)]">
                  ${results.totalInvested.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--color-text-secondary)]">Number of Purchases</span>
                <span className="text-sm font-medium text-[var(--color-text)]">{results.totalPeriods}</span>
              </div>
              <div className="border-t border-[var(--color-border)] pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[var(--color-text-secondary)]">Portfolio Value</span>
                  <span className="text-lg font-bold text-[var(--color-primary)]">
                    ${results.portfolioValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--color-text-secondary)]">Total Return</span>
                <span className={`text-lg font-bold ${results.totalReturn >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {results.totalReturn >= 0 ? "+" : ""}$
                  {results.totalReturn.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  {" "}({results.totalReturnPercent.toFixed(1)}%)
                </span>
              </div>
            </div>
          </div>

          {/* Simple Bar Chart */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">Growth Over Time</h3>
            <div className="space-y-1">
              {results.dataPoints.slice(-12).map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-full flex flex-col gap-0.5">
                    <div
                      className="h-2 rounded-full bg-[var(--color-primary)]"
                      style={{ width: `${(point.value / maxValue) * 100}%` }}
                    />
                    <div
                      className="h-2 rounded-full bg-[var(--color-text-secondary)] opacity-30"
                      style={{ width: `${(point.invested / maxValue) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-1">
                <div className="w-3 h-2 rounded-full bg-[var(--color-primary)]" />
                <span>Portfolio value</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-2 rounded-full bg-[var(--color-text-secondary)] opacity-30" />
                <span>Total invested</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Content */}
      <div className="mt-12 prose-crypto">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Is Dollar-Cost Averaging?</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
          Dollar-cost averaging (DCA) is an investment strategy where you invest a fixed amount of money at
          regular intervals, regardless of the current price. When prices are low, your fixed amount buys more
          units. When prices are high, it buys fewer. Over time, this averages out your cost basis and reduces
          the impact of short-term volatility.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
          DCA is particularly well-suited for volatile assets like cryptocurrency. Instead of trying to time
          the market and risking buying at a peak, DCA removes the emotional decision of when to invest. Many
          exchanges support automated recurring purchases, making DCA effortless.
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] italic">
          Disclaimer: This calculator uses hypothetical returns for illustration purposes only. Past performance
          does not guarantee future results. Cryptocurrency investments are subject to high market risk and
          volatility. Always do your own research and never invest more than you can afford to lose.
        </p>
      </div>
      <RelatedContent category="tools" currentSlug="/exchanges/tools/dca-calculator" />
    </div>
  );
}
