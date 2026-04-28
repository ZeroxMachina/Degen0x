'use client';

"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function LtvCalculatorPage() {
  const [collateralValue, setCollateralValue] = useState(10000);
  const [loanAmount, setLoanAmount] = useState(5000);
  const [liquidationThreshold, setLiquidationThreshold] = useState(80);

  const currentLtv = (loanAmount / collateralValue) * 100;
  const maxBorrow = collateralValue * (liquidationThreshold / 100) * 0.9;
  const priceDropToLiquidation = ((1 - (loanAmount / (collateralValue * (liquidationThreshold / 100)))) * 100);
  const healthFactor = (collateralValue * (liquidationThreshold / 100)) / loanAmount;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Calculators", href: "/crypto-loans/calculators/ltv-calculator" }, { label: "LTV Calculator", href: "/crypto-loans/calculators/ltv-calculator" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">LTV Calculator</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">Calculate your current Loan-to-Value ratio and see how much buffer you have before liquidation.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Collateral Value ($)</label><input type="number" value={collateralValue} onChange={(e) => setCollateralValue(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-[var(--color-text)]" /></div>
          <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Loan Amount ($)</label><input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-[var(--color-text)]" /></div>
          <div><label className="block text-sm font-medium text-[var(--color-text)] mb-2">Liquidation Threshold (%)</label><input type="number" value={liquidationThreshold} onChange={(e) => setLiquidationThreshold(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-[var(--color-text)]" /></div>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-6">LTV Analysis</h2>
          <div className="space-y-4">
            <div className="flex justify-between pb-4 border-b border-[var(--color-border)]"><span className="text-[var(--color-text-secondary)]">Current LTV</span><span className={`font-semibold ${currentLtv > 70 ? "text-[var(--color-danger)]" : currentLtv > 50 ? "text-[var(--color-accent)]" : "text-[var(--color-success)]"}`}>{currentLtv.toFixed(1)}%</span></div>
            <div className="flex justify-between pb-4 border-b border-[var(--color-border)]"><span className="text-[var(--color-text-secondary)]">Health Factor</span><span className={`font-semibold ${healthFactor < 1.2 ? "text-[var(--color-danger)]" : healthFactor < 1.5 ? "text-[var(--color-accent)]" : "text-[var(--color-success)]"}`}>{healthFactor.toFixed(2)}</span></div>
            <div className="flex justify-between pb-4 border-b border-[var(--color-border)]"><span className="text-[var(--color-text-secondary)]">Price Drop to Liquidation</span><span className="text-[var(--color-text)] font-semibold">{priceDropToLiquidation.toFixed(1)}%</span></div>
            <div className="flex justify-between pt-2"><span className="text-[var(--color-text)] font-semibold">Safe Max Borrow</span><span className="text-[var(--color-text)] font-bold text-xl">${maxBorrow.toFixed(0)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
