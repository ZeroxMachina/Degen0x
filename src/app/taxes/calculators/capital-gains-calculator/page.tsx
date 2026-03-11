"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function CapitalGainsCalculatorPage() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyFee, setBuyFee] = useState("");
  const [sellFee, setSellFee] = useState("");
  const [holdingPeriod, setHoldingPeriod] = useState<"short" | "long">("short");
  const [taxBracket, setTaxBracket] = useState("22");

  const buyPriceVal = parseFloat(buyPrice) || 0;
  const sellPriceVal = parseFloat(sellPrice) || 0;
  const quantityVal = parseFloat(quantity) || 0;
  const buyFeeVal = parseFloat(buyFee) || 0;
  const sellFeeVal = parseFloat(sellFee) || 0;
  const bracketVal = parseFloat(taxBracket) || 0;

  const hasValues = buyPriceVal > 0 && sellPriceVal > 0 && quantityVal > 0;

  const totalCostBasis = (buyPriceVal * quantityVal) + buyFeeVal;
  const totalProceeds = (sellPriceVal * quantityVal) - sellFeeVal;
  const capitalGain = totalProceeds - totalCostBasis;
  const isGain = capitalGain >= 0;

  const shortTermRate = bracketVal / 100;
  const longTermRate = bracketVal <= 12 ? 0 : bracketVal <= 35 ? 0.15 : 0.20;
  const applicableRate = holdingPeriod === "short" ? shortTermRate : longTermRate;
  const estimatedTax = isGain ? capitalGain * applicableRate : 0;
  const netProfit = capitalGain - estimatedTax;
  const roi = totalCostBasis > 0 ? (capitalGain / totalCostBasis) * 100 : 0;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
  const pct = (n: number) => n.toFixed(1) + "%";

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Taxes", href: "/taxes" },
        { label: "Capital Gains Calculator", href: "/taxes/calculators/capital-gains-calculator" },
      ]} />

      <h1 className="text-4xl font-bold text-white mb-4">Crypto Capital Gains Calculator</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">
        Calculate your capital gain or loss on a crypto trade and estimate the tax owed based
        on your holding period and tax bracket.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Trade Details</h2>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Buy Price (per unit)
            </label>
            <input
              type="number"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              placeholder="30000"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Sell Price (per unit)
            </label>
            <input
              type="number"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              placeholder="50000"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="0.5"
              step="any"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                Buy Fees
              </label>
              <input
                type="number"
                value={buyFee}
                onChange={(e) => setBuyFee(e.target.value)}
                placeholder="0"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                Sell Fees
              </label>
              <input
                type="number"
                value={sellFee}
                onChange={(e) => setSellFee(e.target.value)}
                placeholder="0"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Holding Period
            </label>
            <select
              value={holdingPeriod}
              onChange={(e) => setHoldingPeriod(e.target.value as "short" | "long")}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white"
            >
              <option value="short">Short-Term (under 1 year)</option>
              <option value="long">Long-Term (over 1 year)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Federal Tax Bracket
            </label>
            <select
              value={taxBracket}
              onChange={(e) => setTaxBracket(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-white"
            >
              <option value="10">10%</option>
              <option value="12">12%</option>
              <option value="22">22%</option>
              <option value="24">24%</option>
              <option value="32">32%</option>
              <option value="35">35%</option>
              <option value="37">37%</option>
            </select>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-6">Results</h2>
          {hasValues ? (
            <div className="space-y-4">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)]">Total Cost Basis</p>
                <p className="text-2xl font-bold text-white">{fmt(totalCostBasis)}</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)]">Total Proceeds</p>
                <p className="text-2xl font-bold text-white">{fmt(totalProceeds)}</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Capital {isGain ? "Gain" : "Loss"} ({holdingPeriod === "short" ? "Short-Term" : "Long-Term"})
                </p>
                <p className={`text-2xl font-bold ${isGain ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>
                  {fmt(capitalGain)}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">ROI: {pct(roi)}</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Estimated Tax ({holdingPeriod === "short" ? pct(bracketVal) : pct(longTermRate * 100)} rate)
                </p>
                <p className="text-2xl font-bold text-white">{fmt(estimatedTax)}</p>
              </div>
              <div className="rounded-xl border-2 border-[var(--color-primary)] bg-[var(--color-bg-card)] p-4">
                <p className="text-sm text-[var(--color-text-secondary)]">Net Profit After Tax</p>
                <p className={`text-3xl font-bold ${netProfit >= 0 ? "text-[var(--color-primary)]" : "text-[var(--color-danger)]"}`}>
                  {fmt(netProfit)}
                </p>
              </div>

              {holdingPeriod === "short" && isGain && (
                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                    If held long-term instead:
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Tax at {pct(longTermRate * 100)}: {fmt(capitalGain * longTermRate)}
                  </p>
                  <p className="text-sm text-[var(--color-success)]">
                    You would save: {fmt(estimatedTax - (capitalGain * longTermRate))}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 text-center">
              <p className="text-[var(--color-text-secondary)]">
                Enter your trade details to calculate capital gains and estimated tax.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
        <p className="text-xs text-[var(--color-text-secondary)]">
          <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes
          only. Actual tax liability depends on your total income, filing status, deductions, state
          taxes, and other factors. The long-term capital gains rate shown is a simplified estimate
          based on your selected bracket. Use dedicated crypto tax software for accurate calculations
          and consult a qualified tax professional for personalized advice.
        </p>
      </div>
    </div>
  );
}
