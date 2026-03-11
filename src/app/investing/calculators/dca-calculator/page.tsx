"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function DCACalculatorPage() {
  const [investmentAmount, setInvestmentAmount] = useState("100");
  const [frequency, setFrequency] = useState("weekly");
  const [duration, setDuration] = useState("12");
  const [startPrice, setStartPrice] = useState("50000");
  const [endPrice, setEndPrice] = useState("75000");

  const periods = frequency === "weekly" ? Number(duration) * 4.33 : Number(duration);
  const totalInvested = Number(investmentAmount) * Math.floor(periods);
  const avgPrice = (Number(startPrice) + Number(endPrice)) / 2;
  const totalTokens = totalInvested / avgPrice;
  const currentValue = totalTokens * Number(endPrice);
  const profit = currentValue - totalInvested;
  const roi = totalInvested > 0 ? ((profit / totalInvested) * 100) : 0;

  const hasValues = Number(investmentAmount) > 0 && Number(duration) > 0 && Number(startPrice) > 0 && Number(endPrice) > 0;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "DCA Calculator", href: "/investing/calculators/dca-calculator" },
      ]} />

      <h1 className="text-4xl font-bold text-white mb-4">DCA Calculator</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">
        Plan your dollar-cost averaging strategy. See how regular investments grow over time
        with this simplified DCA calculator.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Investment Amount ($)</label>
            <input type="number" value={investmentAmount} onChange={(e) => setInvestmentAmount(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Frequency</label>
            <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white focus:border-[var(--color-primary)] focus:outline-none">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Duration (months)</label>
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Starting Price ($)</label>
            <input type="number" value={startPrice} onChange={(e) => setStartPrice(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">End Price ($)</label>
            <input type="number" value={endPrice} onChange={(e) => setEndPrice(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-white mb-4">DCA Results (Estimated)</h2>
          {hasValues ? (
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Total Invested</span><span className="text-sm text-white">${totalInvested.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Number of Purchases</span><span className="text-sm text-white">{Math.floor(periods)}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Avg. Buy Price (est.)</span><span className="text-sm text-white">${avgPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Total Tokens</span><span className="text-sm text-white">{totalTokens.toFixed(6)}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Current Value</span><span className="text-sm text-white">${currentValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
              <hr className="border-[var(--color-border)]" />
              <div className="flex justify-between"><span className="text-base font-semibold text-white">Profit / Loss</span><span className={`text-base font-semibold ${profit >= 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>${profit.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-base font-semibold text-white">ROI</span><span className={`text-base font-semibold ${roi >= 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>{roi.toFixed(2)}%</span></div>
            </div>
          ) : (
            <p className="text-sm text-[var(--color-text-secondary)]">Fill in all fields to see your DCA results.</p>
          )}
          <p className="text-xs text-[var(--color-text-secondary)] mt-4">
            * This is a simplified estimate assuming linear price change. Actual results will vary based on real price fluctuations.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">About Dollar-Cost Averaging</h2>
        <p className="text-[var(--color-text-secondary)]">
          Dollar-cost averaging is a strategy where you invest a fixed amount at regular intervals,
          regardless of price. This reduces the impact of volatility by naturally buying more when
          prices are low and less when prices are high. DCA is one of the most effective strategies
          for long-term crypto investors.
        </p>
      </div>
    </div>
  );
}
