'use client';

"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

const TAX_BRACKETS_SINGLE = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

const LONG_TERM_BRACKETS_SINGLE = [
  { min: 0, max: 47025, rate: 0.0 },
  { min: 47025, max: 518900, rate: 0.15 },
  { min: 518900, max: Infinity, rate: 0.20 },
];

function calculateTax(
  income: number,
  shortTermGains: number,
  longTermGains: number,
  shortTermLosses: number,
  longTermLosses: number,
  cryptoIncome: number,
) {
  const netShortTerm = shortTermGains - shortTermLosses;
  const netLongTerm = longTermGains - longTermLosses;

  let netGainForOrdinary = 0;
  let netGainForLongTerm = 0;
  let capitalLossDeduction = 0;

  if (netShortTerm >= 0 && netLongTerm >= 0) {
    netGainForOrdinary = netShortTerm;
    netGainForLongTerm = netLongTerm;
  } else if (netShortTerm >= 0 && netLongTerm < 0) {
    const combined = netShortTerm + netLongTerm;
    if (combined >= 0) {
      netGainForOrdinary = combined;
      netGainForLongTerm = 0;
    } else {
      netGainForOrdinary = 0;
      netGainForLongTerm = 0;
      capitalLossDeduction = Math.min(Math.abs(combined), 3000);
    }
  } else if (netShortTerm < 0 && netLongTerm >= 0) {
    const combined = netShortTerm + netLongTerm;
    if (combined >= 0) {
      netGainForOrdinary = 0;
      netGainForLongTerm = combined;
    } else {
      netGainForOrdinary = 0;
      netGainForLongTerm = 0;
      capitalLossDeduction = Math.min(Math.abs(combined), 3000);
    }
  } else {
    const combined = netShortTerm + netLongTerm;
    capitalLossDeduction = Math.min(Math.abs(combined), 3000);
  };

  const ordinaryTaxableIncome = income + cryptoIncome + netGainForOrdinary - capitalLossDeduction;

  let ordinaryTax = 0;
  for (const bracket of TAX_BRACKETS_SINGLE) {
    if (ordinaryTaxableIncome > bracket.min) {
      const taxableInBracket = Math.min(ordinaryTaxableIncome, bracket.max) - bracket.min;
      ordinaryTax += taxableInBracket * bracket.rate;
    }
  }

  let longTermTax = 0;
  for (const bracket of LONG_TERM_BRACKETS_SINGLE) {
    if (netGainForLongTerm > 0) {
      const base = Math.max(ordinaryTaxableIncome, bracket.min);
      const top = Math.min(ordinaryTaxableIncome + netGainForLongTerm, bracket.max);
      if (top > base) {
        longTermTax += (top - base) * bracket.rate;
      }
    }
  };

  const totalTax = ordinaryTax + longTermTax;
  const effectiveRate = (ordinaryTaxableIncome + netGainForLongTerm) > 0
    ? (totalTax / (ordinaryTaxableIncome + netGainForLongTerm)) * 100
    : 0;

  return {
    netShortTerm,
    netLongTerm,
    capitalLossDeduction,
    ordinaryTax,
    longTermTax,
    totalTax,
    effectiveRate,
    cryptoIncome,
  };
}

export default function TaxCalculatorPage() {
  const [income, setIncome] = useState("");
  const [shortTermGains, setShortTermGains] = useState("");
  const [longTermGains, setLongTermGains] = useState("");
  const [shortTermLosses, setShortTermLosses] = useState("");
  const [longTermLosses, setLongTermLosses] = useState("");
  const [cryptoIncome, setCryptoIncome] = useState("");

  const incomeVal = parseFloat(income) || 0;
  const stgVal = parseFloat(shortTermGains) || 0;
  const ltgVal = parseFloat(longTermGains) || 0;
  const stlVal = parseFloat(shortTermLosses) || 0;
  const ltlVal = parseFloat(longTermLosses) || 0;
  const ciVal = parseFloat(cryptoIncome) || 0;

  const hasValues = incomeVal > 0 || stgVal > 0 || ltgVal > 0 || ciVal > 0;

  const result = hasValues
    ? calculateTax(incomeVal, stgVal, ltgVal, stlVal, ltlVal, ciVal)
    : null;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Taxes", href: "/taxes" },
        { label: "Tax Calculator", href: "/taxes/calculators/tax-calculator" },
      ]} />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Crypto Tax Calculator</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">
        Estimate your cryptocurrency tax liability based on your gains, losses, and income. This
        calculator uses 2024 single filer tax brackets for estimation purposes.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[var(--color-text)]">Your Information</h2>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Other Taxable Income (W-2, salary, etc.)
            </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="50000"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Crypto Income (staking, mining, airdrops)
            </label>
            <input
              value={cryptoIncome}
              onChange={(e) => setCryptoIncome(e.target.value)}
              placeholder="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Short-Term Capital Gains (held &lt; 1 year)
            </label>
            <input
              value={shortTermGains}
              onChange={(e) => setShortTermGains(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Long-Term Capital Gains (held &gt; 1 year)
            </label>
            <input
              value={longTermGains}
              onChange={(e) => setLongTermGains(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Short-Term Capital Losses
            </label>
            <input
              value={shortTermLosses}
              onChange={(e) => setShortTermLosses(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Long-Term Capital Losses
            </label>
            <input
              value={longTermLosses}
              onChange={(e) => setLongTermLosses(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">Estimated Tax Liability</h2>
          {result ? (
            <div className="space-y-4">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)]">Net Short-Term Gains</p>
                <p className={`text-2xl font-bold ${result.netShortTerm >= 0 ? "text-[var(--color-text)]" : "text-[var(--color-danger)]"}`}>
                  {fmt(result.netShortTerm)}
                </p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)]">Net Long-Term Gains</p>
                <p className={`text-2xl font-bold ${result.netLongTerm >= 0 ? "text-[var(--color-text)]" : "text-[var(--color-danger)]"}`}>
                  {fmt(result.netLongTerm)}
                </p>
              </div>
              {result.capitalLossDeduction > 0 && (
                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                  <p className="text-sm text-[var(--color-text-secondary)]">Capital Loss Deduction</p>
                  <p className="text-2xl font-bold text-[var(--color-success)]">
                    -{fmt(result.capitalLossDeduction)}
                  </p>
                </div>
              )}
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)]">Tax on Ordinary Income + Short-Term Gains</p>
                <p className="text-2xl font-bold text-[var(--color-text)]">{fmt(result.ordinaryTax)}</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)]">Tax on Long-Term Gains</p>
                <p className="text-2xl font-bold text-[var(--color-text)]">{fmt(result.longTermTax)}</p>
              </div>
              <div className="rounded-xl border-2 border-[var(--color-primary)] bg-[var(--color-bg-card)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)]">Estimated Total Tax</p>
                <p className="text-3xl font-bold text-[var(--color-primary)]">{fmt(result.totalTax)}</p>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  Effective Rate: {result.effectiveRate.toFixed(1)}%
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 text-center">
              <p className="text-[var(--color-text-secondary)]">
                Enter your income and crypto gains to see your estimated tax liability.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
        <p className="text-xs text-[var(--color-text-secondary)]">
          <strong>Disclaimer:</strong> This calculator provides estimates based on 2024 single filer
          federal tax brackets. It does not account for state taxes, deductions, credits, the Net
          Investment Income Tax, or individual circumstances. For accurate tax preparation, use
          dedicated crypto tax software and consult a qualified tax professional.
        </p>
      </div>
    </div>
  );
}
