"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

const CRYPTO_OPTIONS = [
  { name: "Bitcoin (BTC)", symbol: "BTC", price: 97500 },
  { name: "Ethereum (ETH)", symbol: "ETH", price: 3400 },
  { name: "Cronos (CRO)", symbol: "CRO", price: 0.095 },
  { name: "BNB (BNB)", symbol: "BNB", price: 640 },
  { name: "Solana (SOL)", symbol: "SOL", price: 185 },
  { name: "Cardano (ADA)", symbol: "ADA", price: 0.72 },
  { name: "XRP (XRP)", symbol: "XRP", price: 2.35 },
  { name: "USD Coin (USDC)", symbol: "USDC", price: 1.0 },
];

export default function RewardsCalculatorPage() {
  const [monthlySpending, setMonthlySpending] = useState<number>(2000);
  const [cashbackRate, setCashbackRate] = useState<number>(3);
  const [selectedCrypto, setSelectedCrypto] = useState<number>(0);

  const crypto = CRYPTO_OPTIONS[selectedCrypto];
  const monthlyRewardsUSD = (monthlySpending * cashbackRate) / 100;
  const yearlyRewardsUSD = monthlyRewardsUSD * 12;
  const monthlyCryptoAmount = monthlyRewardsUSD / crypto.price;
  const yearlyCryptoAmount = yearlyRewardsUSD / crypto.price;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Calculators", href: "/crypto-cards/calculators" },
          { label: "Rewards Calculator", href: "#" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
        Crypto Card Rewards Calculator
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Estimate how much you could earn in crypto rewards based on your monthly spending, cashback
        rate, and preferred cryptocurrency. Adjust the inputs below to see your projected monthly and
        yearly earnings in both USD and crypto.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-6">Your Inputs</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Monthly Spending (USD)
                </label>
                <input
                  type="number"
                  min={0}
                  max={100000}
                  value={monthlySpending}
                  onChange={(e) => setMonthlySpending(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
                <input
                  type="range"
                  min={0}
                  max={20000}
                  step={100}
                  value={monthlySpending}
                  onChange={(e) => setMonthlySpending(Number(e.target.value))}
                  className="w-full mt-2 accent-[var(--color-primary)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Cashback Rate (%)
                </label>
                <input
                  type="number"
                  min={0}
                  max={10}
                  step={0.1}
                  value={cashbackRate}
                  onChange={(e) => setCashbackRate(Math.max(0, Math.min(10, Number(e.target.value))))}
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={0.1}
                  value={cashbackRate}
                  onChange={(e) => setCashbackRate(Number(e.target.value))}
                  className="w-full mt-2 accent-[var(--color-primary)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
                  <span>0%</span>
                  <span>Common: 1-5%</span>
                  <span>10%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                  Reward Cryptocurrency
                </label>
                <select
                  value={selectedCrypto}
                  onChange={(e) => setSelectedCrypto(Number(e.target.value))}
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                >
                  {CRYPTO_OPTIONS.map((c, i) => (
                    <option key={c.symbol} value={i}>
                      {c.name} (${c.price.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-6">Your Estimated Rewards</h2>

            <div className="space-y-6">
              <div className="rounded-lg bg-[var(--color-bg)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">Monthly Rewards (USD)</p>
                <p className="text-3xl font-bold text-[var(--color-primary)]">
                  ${monthlyRewardsUSD.toFixed(2)}
                </p>
              </div>

              <div className="rounded-lg bg-[var(--color-bg)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">Yearly Rewards (USD)</p>
                <p className="text-3xl font-bold text-[var(--color-primary)]">
                  ${yearlyRewardsUSD.toFixed(2)}
                </p>
              </div>

              <div className="rounded-lg bg-[var(--color-bg)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">
                  Monthly in {crypto.symbol}
                </p>
                <p className="text-3xl font-bold text-[var(--color-text)]">
                  {monthlyCryptoAmount < 0.0001
                    ? monthlyCryptoAmount.toExponential(4)
                    : monthlyCryptoAmount < 1
                    ? monthlyCryptoAmount.toFixed(6)
                    : monthlyCryptoAmount.toFixed(2)}{" "}
                  {crypto.symbol}
                </p>
              </div>

              <div className="rounded-lg bg-[var(--color-bg)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">
                  Yearly in {crypto.symbol}
                </p>
                <p className="text-3xl font-bold text-[var(--color-text)]">
                  {yearlyCryptoAmount < 0.0001
                    ? yearlyCryptoAmount.toExponential(4)
                    : yearlyCryptoAmount < 1
                    ? yearlyCryptoAmount.toFixed(6)
                    : yearlyCryptoAmount.toFixed(2)}{" "}
                  {crypto.symbol}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            <p className="text-xs text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-accent)]">Disclaimer:</strong> This calculator
              provides estimates based on current crypto prices and the cashback rate you enter.
              Actual rewards may vary based on card terms, eligible purchase categories, and
              cryptocurrency price fluctuations. Crypto prices are approximate and for illustrative
              purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
