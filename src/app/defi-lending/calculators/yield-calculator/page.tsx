"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function YieldCalculatorPage() {
  const [deposit, setDeposit] = useState(10000);
  const [apr, setApr] = useState(5);
  const [compounding, setCompounding] = useState<"daily" | "weekly" | "monthly" | "yearly">("daily");
  const [months, setMonths] = useState(12);

  const compoundingFreq = { daily: 365, weekly: 52, monthly: 12, yearly: 1 };
  const n = compoundingFreq[compounding];
  const years = months / 12;
  const apy = (Math.pow(1 + apr / 100 / n, n) - 1) * 100;
  const finalAmount = deposit * Math.pow(1 + apr / 100 / n, n * years);
  const earnings = finalAmount - deposit;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Calculators", href: "/defi-lending/calculators/yield-calculator" }, { label: "Yield Calculator", href: "/defi-lending/calculators/yield-calculator" }]} />
      <h1 className="text-4xl font-bold text-white mb-4">DeFi Yield Calculator</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">Calculate your expected returns from DeFi lending and yield farming. Enter your deposit amount, expected APR, and compounding frequency to see projected earnings over time.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Deposit Amount ($)</label>
            <input type="number" value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">APR (%)</label>
            <input type="number" step="0.1" value={apr} onChange={(e) => setApr(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Compounding Frequency</label>
            <select value={compounding} onChange={(e) => setCompounding(e.target.value as typeof compounding)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-white">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">Time Period (months)</label>
            <input type="number" value={months} onChange={(e) => setMonths(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-white" />
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Projected Results</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-secondary)]">Initial Deposit</span>
              <span className="text-white font-semibold">${deposit.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-secondary)]">APR</span>
              <span className="text-white font-semibold">{apr}%</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-secondary)]">Effective APY</span>
              <span className="text-[var(--color-primary)] font-semibold">{apy.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[var(--color-border)]">
              <span className="text-[var(--color-text-secondary)]">Total Earnings</span>
              <span className="text-[var(--color-success)] font-semibold">${earnings.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-white font-semibold">Final Amount</span>
              <span className="text-white font-bold text-xl">${finalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding DeFi Yield Calculations</h2>
        <p className="text-[var(--color-text-secondary)]">DeFi yields are typically quoted as APR (Annual Percentage Rate) or APY (Annual Percentage Yield). APR is the simple annual rate, while APY includes the effect of compounding. Most yield aggregators auto-compound daily, which means the APY is higher than the quoted APR. This calculator helps you understand the difference and project your earnings based on different compounding frequencies.</p>
        <p className="text-[var(--color-text-secondary)] mt-4">Note that DeFi yields are variable and can change daily based on market conditions. The rates used in this calculator are for estimation purposes only and do not represent guaranteed returns. Always check current rates on the specific protocol you are considering.</p>
      </div>
    </div>
  );
}
