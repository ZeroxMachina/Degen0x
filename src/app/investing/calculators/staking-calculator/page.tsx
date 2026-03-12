'use client';

"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function StakingCalculatorPage() {
  const [amount, setAmount] = useState("10000");
  const [apy, setApy] = useState("4.5");
  const [duration, setDuration] = useState("12");
  const [compounding, setCompounding] = useState("monthly");
  const [tokenPrice, setTokenPrice] = useState("3000");

  const principal = Number(amount);
  const rate = Number(apy) / 100;
  const months = Number(duration);
  const price = Number(tokenPrice);

  let compoundingFreq = 12;
  if (compounding === "daily") compoundingFreq = 365;
  if (compounding === "weekly") compoundingFreq = 52;
  if (compounding === "monthly") compoundingFreq = 12;

  const years = months / 12;
  const finalValue = principal * Math.pow(1 + rate / compoundingFreq, compoundingFreq * years);
  const totalRewards = finalValue - principal;
  const rewardsInTokens = price > 0 ? totalRewards / price : 0;
  const monthlyReward = totalRewards / months;

  const hasValues = principal > 0 && rate > 0 && months > 0;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Staking Calculator", href: "/investing/calculators/staking-calculator" },
      ]} />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Crypto Staking Calculator</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">
        Estimate your staking rewards based on the amount staked, APY, and duration. See
        how compounding affects your total returns.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Staked Amount ($)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">APY (%)</label>
            <input type="number" value={apy} onChange={(e) => setApy(e.target.value)} step="0.1" className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Duration (months)</label>
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Compounding Frequency</label>
            <select value={compounding} onChange={(e) => setCompounding(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Token Price ($) (optional)</label>
            <input type="number" value={tokenPrice} onChange={(e) => setTokenPrice(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Staking Results</h2>
          {hasValues ? (
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Initial Stake</span><span className="text-sm text-[var(--color-text)]">${principal.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Final Value</span><span className="text-sm text-[var(--color-text)]">${finalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Total Rewards</span><span className="text-sm font-semibold text-[var(--color-success)]">${totalRewards.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Monthly Reward (avg)</span><span className="text-sm text-[var(--color-text)]">${monthlyReward.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
              {price > 0 && (
                <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Rewards in Tokens</span><span className="text-sm text-[var(--color-text)]">{rewardsInTokens.toFixed(4)}</span></div>
              )}
            </div>
          ) : (
            <p className="text-sm text-[var(--color-text-secondary)]">Fill in the staking details to see your estimated rewards.</p>
          )}
          <p className="text-xs text-[var(--color-text-secondary)] mt-4">
            * Assumes constant APY and token price. Actual staking rewards vary based on network conditions and validator performance.
          </p>
        </div>
      </div>
    </div>
  );
}
