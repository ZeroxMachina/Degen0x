'use client';

"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

const presets = [
  { label: "ETH (Lido)", apy: "3.3", fee: "10" },
  { label: "ETH (Rocket Pool)", apy: "3.0", fee: "14" },
  { label: "ETH (Coinbase)", apy: "3.5", fee: "25" },
  { label: "SOL (Jito)", apy: "7.5", fee: "4" },
  { label: "SOL (Marinade)", apy: "6.8", fee: "6" },
  { label: "Custom", apy: "", fee: "" },
];

export default function StakingRewardsCalculatorPage() {
  const [amount, setAmount] = useState("10000");
  const [apy, setApy] = useState("3.3");
  const [fee, setFee] = useState("10");
  const [duration, setDuration] = useState("12");
  const [tokenPrice, setTokenPrice] = useState("3000");
  const [selectedPreset, setSelectedPreset] = useState("ETH (Lido)");

  const handlePreset = (label: string) => {
    setSelectedPreset(label);
    const preset = presets.find((p) => p.label === label);
    if (preset && preset.apy) {
      setApy(preset.apy);
      setFee(preset.fee);
    }
  };

  const principal = Number(amount);
  const grossRate = Number(apy) / 100;
  const feeRate = Number(fee) / 100;
  const netRate = grossRate * (1 - feeRate);
  const months = Number(duration);
  const price = Number(tokenPrice);
  const years = months / 12;

  const grossRewards = principal * grossRate * years;
  const feeAmount = grossRewards * feeRate;
  const netRewards = grossRewards - feeAmount;
  const finalValue = principal + netRewards;
  const rewardsInTokens = price > 0 ? netRewards / price : 0;
  const monthlyReward = months > 0 ? netRewards / months : 0;
  const effectiveApy = netRate * 100;

  const hasValues = principal > 0 && grossRate > 0 && months > 0;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Investing", href: "/investing" },
          { label: "Staking", href: "/investing/staking" },
          { label: "Staking Rewards Calculator", href: "/investing/staking/calculators/staking-rewards-calculator" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Staking Rewards Calculator</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">
        Estimate your staking rewards after platform fees. Compare different protocols side by side
        and see how fees impact your net returns over time.
      </p>

      {/* Presets */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Quick Presets</label>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => handlePreset(preset.label)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedPreset === preset.label
                  ? "bg-[var(--color-primary)] text-[var(--color-text)]"
                  : "border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
              Staked Amount ($)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
              Gross APY (%) <span className="text-[var(--color-text-secondary)] font-normal">- before fees</span>
            </label>
            <input
              value={apy}
              onChange={(e) => { setApy(e.target.value); setSelectedPreset("Custom"); }}
              step="0.1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
              Platform Fee (%) <span className="text-[var(--color-text-secondary)] font-normal">- % of rewards taken</span>
            </label>
            <input
              value={fee}
              onChange={(e) => { setFee(e.target.value); setSelectedPreset("Custom"); }}
              step="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Duration (months)</label>
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
              Token Price ($) <span className="text-[var(--color-text-secondary)] font-normal">- optional</span>
            </label>
            <input
              value={tokenPrice}
              onChange={(e) => setTokenPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Staking Results</h2>
          {hasValues ? (
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-[var(--color-text-secondary)]">Initial Stake</span>
                <span className="text-sm text-[var(--color-text)]">
                  ${principal.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[var(--color-text-secondary)]">Gross Rewards</span>
                <span className="text-sm text-[var(--color-text)]">
                  ${grossRewards.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[var(--color-text-secondary)]">Platform Fees Paid</span>
                <span className="text-sm text-[var(--color-danger)]">
                  -${feeAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="border-t border-[var(--color-border)] my-2" />
              <div className="flex justify-between">
                <span className="text-sm text-[var(--color-text-secondary)]">Net Rewards</span>
                <span className="text-sm font-semibold text-[var(--color-success)]">
                  ${netRewards.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[var(--color-text-secondary)]">Final Value</span>
                <span className="text-sm font-semibold text-[var(--color-text)]">
                  ${finalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[var(--color-text-secondary)]">Effective APY (after fees)</span>
                <span className="text-sm text-[var(--color-text)]">{effectiveApy.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[var(--color-text-secondary)]">Monthly Reward (avg)</span>
                <span className="text-sm text-[var(--color-text)]">
                  ${monthlyReward.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              {price > 0 && (
                <div className="flex justify-between">
                  <span className="text-sm text-[var(--color-text-secondary)]">Net Rewards in Tokens</span>
                  <span className="text-sm text-[var(--color-text)]">{rewardsInTokens.toFixed(4)}</span>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-[var(--color-text-secondary)]">
              Fill in the staking details to see your estimated rewards.
            </p>
          )}
          <p className="text-xs text-[var(--color-text-secondary)] mt-4">
            * Assumes constant APY and token price. Actual staking rewards vary based on network
            conditions, validator performance, and market dynamics. This calculator uses simple
            interest; see our compound calculator for compounding estimates.
          </p>
        </div>
      </div>

      {/* Educational Content */}
      <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Understanding Staking Returns</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Staking returns are expressed as Annual Percentage Yield (APY), which represents the
          annualized rate of return. However, the APY you see advertised is often the gross rate
          before platform fees are deducted. This calculator helps you understand the actual net
          returns you receive after the staking platform takes its commission.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          For example, if Ethereum staking yields 3.5% APY and you use Lido (10% fee), your net
          APY is 3.15%. On Coinbase (25% fee), your net APY drops to 2.625%. Over a year on a
          $50,000 stake, that is a difference of $262.50. Over five years, the fee difference
          compounds to over $1,300. Choosing a low-fee platform can meaningfully impact long-term
          returns.
        </p>
      </div>
    </div>
  );
}
