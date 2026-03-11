"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function LoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [apr, setApr] = useState(8);
  const [months, setMonths] = useState(12);

  const monthlyRate = apr / 100 / 12;
  const totalInterest = loanAmount * (apr / 100) * (months / 12);
  const totalCost = loanAmount + totalInterest;
  const monthlyInterest = totalInterest / months;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Calculators", href: "/crypto-loans/calculators/loan-calculator" }, { label: "Loan Calculator", href: "/crypto-loans/calculators/loan-calculator" }]} />
      <h1 className="text-4xl font-bold text-white mb-4">Crypto Loan Calculator</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">Calculate the total cost of a crypto-backed loan including interest charges over time.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div><label className="block text-sm font-medium text-white mb-2">Loan Amount ($)</label><input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-white" /></div>
          <div><label className="block text-sm font-medium text-white mb-2">Annual Interest Rate (%)</label><input type="number" step="0.1" value={apr} onChange={(e) => setApr(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-white" /></div>
          <div><label className="block text-sm font-medium text-white mb-2">Loan Duration (months)</label><input type="number" value={months} onChange={(e) => setMonths(Number(e.target.value))} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-white" /></div>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Loan Cost Breakdown</h2>
          <div className="space-y-4">
            <div className="flex justify-between pb-4 border-b border-[var(--color-border)]"><span className="text-[var(--color-text-secondary)]">Loan Amount</span><span className="text-white font-semibold">${loanAmount.toLocaleString()}</span></div>
            <div className="flex justify-between pb-4 border-b border-[var(--color-border)]"><span className="text-[var(--color-text-secondary)]">Total Interest</span><span className="text-[var(--color-danger)] font-semibold">${totalInterest.toFixed(2)}</span></div>
            <div className="flex justify-between pb-4 border-b border-[var(--color-border)]"><span className="text-[var(--color-text-secondary)]">Monthly Interest Cost</span><span className="text-[var(--color-text-secondary)] font-semibold">${monthlyInterest.toFixed(2)}</span></div>
            <div className="flex justify-between pt-2"><span className="text-white font-semibold">Total Repayment</span><span className="text-white font-bold text-xl">${totalCost.toFixed(2)}</span></div>
          </div>
        </div>
      </div>
      <div className="mt-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">About This Calculator</h2>
        <p className="text-[var(--color-text-secondary)]">This calculator estimates the cost of a crypto-backed loan with simple interest. Most crypto loan platforms use simple interest rather than amortizing repayment schedules. Variable-rate loans will have different actual costs depending on rate changes over the loan period. Always check the specific terms of your loan platform.</p>
      </div>
    </div>
  );
}
