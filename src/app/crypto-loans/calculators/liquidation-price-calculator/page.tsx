'use client';

"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function LiquidationPriceCalculatorPage() {
  const [collateralAmount, setCollateralAmount] = useState(5);
  const [currentPrice, setCurrentPrice] = useState(2000);
  const [borrowAmount, setBorrowAmount] = useState(5000);
  const [liquidationThreshold, setLiquidationThreshold] = useState(82.5);

  const collateralValue = collateralAmount * currentPrice;
  const liquidationPrice = borrowAmount / (collateralAmount * (liquidationThreshold / 100));
  const currentLtv = (borrowAmount / collateralValue) * 100;
  const priceDropPercent = ((currentPrice - liquidationPrice) / currentPrice) * 100;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Calculators", href: "/crypto-loans/calculators/liquidation-price-calculator" }, { label: "Liquidation Price", href: "/crypto-loans/calculators/liquidation-price-calculator" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Liquidation Price Calculator</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">Find the exact price at which your crypto loan position would be liquidated.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Collateral Amount (tokens)</label><input type="number" step="0.01" value={collateralAmount} onChange={(e) => setCollateralAmount(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-[var(--color-text)]" /></div>
          <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Current Token Price ($)</label><input type="number" value={currentPrice} onChange={(e) => setCurrentPrice(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-[var(--color-text)]" /></div>
          <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Borrow Amount ($)</label><input type="number" value={borrowAmount} onChange={(e) => setBorrowAmount(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-[var(--color-text)]" /></div>
          <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Liquidation Threshold (%)</label><input type="number" step="0.5" value={liquidationThreshold} onChange={(e) => setLiquidationThreshold(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-[var(--color-text)]" /></div>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-6">Liquidation Analysis</h2>
          <div className="space-y-4">
            <div className="flex justify-between pb-4 border-b border-[var(--color-border)]"><span className="text-[var(--color-text-secondary)]">Collateral Value</span><span className="text-[var(--color-text)] font-semibold">${collateralValue.toLocaleString()}</span></div>
            <div className="flex justify-between pb-4 border-b border-[var(--color-border)]"><span className="text-[var(--color-text-secondary)]">Current LTV</span><span className="text-[var(--color-text)] font-semibold">{currentLtv.toFixed(1)}%</span></div>
            <div className="flex justify-between pb-4 border-b border-[var(--color-border)]"><span className="text-[var(--color-text-secondary)]">Price Drop Buffer</span><span className={`font-semibold ${priceDropPercent < 20 ? "text-[var(--color-danger)]" : priceDropPercent < 40 ? "text-[var(--color-accent)]" : "text-[var(--color-success)]"}`}>{priceDropPercent.toFixed(1)}%</span></div>
            <div className="flex justify-between pt-2"><span className="text-[var(--color-danger)] font-semibold">Liquidation Price</span><span className="text-[var(--color-danger)] font-bold text-xl">${liquidationPrice.toFixed(2)}</span></div>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-4">Your position will be liquidated if the token price drops to ${liquidationPrice.toFixed(2)} ({priceDropPercent.toFixed(1)}% below current price).</p>
        </div>
      </div>
    </div>
  );
}
