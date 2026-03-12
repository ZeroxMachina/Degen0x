'use client';

"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function ROICalculatorPage() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [holdingPeriod, setHoldingPeriod] = useState("");

  const initial = Number(initialInvestment);
  const current = Number(currentValue);
  const period = Number(holdingPeriod);

  const profit = current - initial;
  const roi = initial > 0 ? ((profit / initial) * 100) : 0;
  const annualizedROI = period > 0 && initial > 0
    ? (Math.pow(current / initial, 12 / period) - 1) * 100
    : 0;
  const multiplier = initial > 0 ? current / initial : 0;

  const hasValues = initial > 0 && current > 0;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "ROI Calculator", href: "/investing/calculators/roi-calculator" },
      ]} />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Crypto ROI Calculator</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">
        Calculate the return on investment for your crypto holdings. See your total ROI,
        annualized return, and profit multiplier.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Initial Investment ($)</label>
            <input type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(e.target.value)} placeholder="e.g. 10000" className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Current Value ($)</label>
            <input type="number" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} placeholder="e.g. 25000" className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Holding Period (months)</label>
            <input type="number" value={holdingPeriod} onChange={(e) => setHoldingPeriod(e.target.value)} placeholder="e.g. 24" className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">ROI Results</h2>
          {hasValues ? (
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Profit / Loss</span><span className={`text-sm font-semibold ${profit >= 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>${profit.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Total ROI</span><span className={`text-sm font-semibold ${roi >= 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>{roi.toFixed(2)}%</span></div>
              {period > 0 && (
                <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Annualized ROI</span><span className={`text-sm font-semibold ${annualizedROI >= 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>{annualizedROI.toFixed(2)}%</span></div>
              )}
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Multiplier</span><span className="text-sm text-[var(--color-text)]">{multiplier.toFixed(2)}x</span></div>
            </div>
          ) : (
            <p className="text-sm text-[var(--color-text-secondary)]">Enter your initial investment and current value to see results.</p>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Understanding ROI</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Return on Investment measures the percentage gain or loss relative to your initial
          investment. A 100% ROI means your investment doubled. The annualized ROI normalizes
          returns to a yearly basis, making it easier to compare investments held for different
          time periods. The multiplier shows how many times your initial investment has grown.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Remember that past returns do not guarantee future performance. Crypto markets are
          volatile, and both gains and losses can be extreme. Use ROI calculations to evaluate
          past performance and set realistic expectations, not to predict future returns.
        </p>
      </div>
    </div>
  );
}
