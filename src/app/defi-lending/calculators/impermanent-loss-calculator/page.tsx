'use client';

"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function ImpermanentLossCalculatorPage() {
  const [initialPrice, setInitialPrice] = useState(2000);
  const [currentPrice, setCurrentPrice] = useState(3000);
  const [depositValue, setDepositValue] = useState(10000);

  const priceRatio = currentPrice / initialPrice;
  const ilPercent = (2 * Math.sqrt(priceRatio) / (1 + priceRatio) - 1) * 100;
  const holdValue = depositValue * (1 + priceRatio) / 2;
  const lpValue = depositValue * Math.sqrt(priceRatio) / ((1 + priceRatio) / 2) * ((1 + priceRatio) / 2);
  const actualLpValue = holdValue * (1 + ilPercent / 100);
  const ilDollar = holdValue - actualLpValue;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Calculators", href: "/defi-lending/calculators/impermanent-loss-calculator" }, { label: "IL Calculator", href: "/defi-lending/calculators/impermanent-loss-calculator" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Impermanent Loss Calculator</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">Calculate the impermanent loss on a 50/50 liquidity pool position. Enter the initial and current price of one token (relative to the other) to see the percentage loss compared to simply holding.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Initial Token Price ($)</label>
            <input type="number" value={initialPrice} onChange={(e) => setInitialPrice(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-[var(--color-text)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Current Token Price ($)</label>
            <input type="number" value={currentPrice} onChange={(e) => setCurrentPrice(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-[var(--color-text)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Total Deposit Value ($)</label>
            <input type="number" value={depositValue} onChange={(e) => setDepositValue(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-[var(--color-text)]" />
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-6">Results</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-secondary)]">Price Change</span>
              <span className="text-[var(--color-text)] font-semibold">{((priceRatio - 1) * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-secondary)]">Impermanent Loss</span>
              <span className="text-[var(--color-danger)] font-semibold">{ilPercent.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-secondary)]">Value if HODL</span>
              <span className="text-[var(--color-text)] font-semibold">${holdValue.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-secondary)]">LP Position Value</span>
              <span className="text-[var(--color-text)] font-semibold">${actualLpValue.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-[var(--color-text)] font-semibold">IL in Dollar Terms</span>
              <span className="text-[var(--color-danger)] font-bold text-xl">${Math.abs(ilDollar).toFixed(2)}</span>
            </div>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-4">Note: This does not include trading fees earned, which may offset or exceed the impermanent loss.</p>
        </div>
      </div>

      <div className="mt-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How Impermanent Loss Works</h2>
        <p className="text-[var(--color-text-secondary)]">Impermanent loss occurs when the price ratio of tokens in a 50/50 liquidity pool changes. The AMM automatically rebalances your position, buying more of the depreciating token and selling the appreciating one. This means your pool position is always worth less than if you had simply held the tokens. The loss only becomes permanent when you withdraw from the pool.</p>
        <p className="text-[var(--color-text-secondary)] mt-4">A 2x price increase results in approximately 5.7% impermanent loss. A 5x increase results in about 25.5% loss. For stablecoin pairs, the price ratio stays near 1:1, so impermanent loss is negligible. This is why stablecoin pools on Curve are popular among risk-averse LPs.</p>
      </div>
    </div>
  );
}
