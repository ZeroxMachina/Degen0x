'use client';

"use client";

import { useState } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export default function ProfitCalculatorPage() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyFee, setBuyFee] = useState("0.5");
  const [sellFee, setSellFee] = useState("0.5");

  const buyTotal = Number(buyPrice) * Number(quantity);
  const buyFeeAmount = buyTotal * (Number(buyFee) / 100);
  const sellTotal = Number(sellPrice) * Number(quantity);
  const sellFeeAmount = sellTotal * (Number(sellFee) / 100);
  const totalCost = buyTotal + buyFeeAmount;
  const totalRevenue = sellTotal - sellFeeAmount;
  const profit = totalRevenue - totalCost;
  const roi = totalCost > 0 ? ((profit / totalCost) * 100) : 0;

  const hasValues = Number(buyPrice) > 0 && Number(sellPrice) > 0 && Number(quantity) > 0;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Profit Calculator", href: "/investing/calculators/profit-calculator" },
      ]} />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Crypto Profit Calculator</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">
        Calculate your cryptocurrency profits and losses. Enter your buy and sell prices,
        quantity, and fees to see your total return.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Buy Price ($)</label>
            <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} placeholder="e.g. 50000" className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Sell Price ($)</label>
            <input type="number" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} placeholder="e.g. 75000" className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Quantity</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="e.g. 0.5" className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Buy Fee (%)</label>
              <input type="number" value={buyFee} onChange={(e) => setBuyFee(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Sell Fee (%)</label>
              <input type="number" value={sellFee} onChange={(e) => setSellFee(e.target.value)} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Results</h2>
          {hasValues ? (
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Total Cost</span><span className="text-sm text-[var(--color-text)]">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Buy Fees</span><span className="text-sm text-[var(--color-text)]">${buyFeeAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Total Revenue</span><span className="text-sm text-[var(--color-text)]">${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-sm text-[var(--color-text-secondary)]">Sell Fees</span><span className="text-sm text-[var(--color-text)]">${sellFeeAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
              <hr className="border-[var(--color-border)]" />
              <div className="flex justify-between"><span className="text-base font-semibold text-[var(--color-text)]">Profit / Loss</span><span className={`text-base font-semibold ${profit >= 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>${profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
              <div className="flex justify-between"><span className="text-base font-semibold text-[var(--color-text)]">ROI</span><span className={`text-base font-semibold ${roi >= 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>{roi.toFixed(2)}%</span></div>
            </div>
          ) : (
            <p className="text-sm text-[var(--color-text-secondary)]">Enter your buy price, sell price, and quantity to see results.</p>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Use This Calculator</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Enter the price at which you bought the cryptocurrency, the price at which you sold
          (or plan to sell), the quantity of tokens, and any trading fees. The calculator will
          show your total profit or loss including fees, and your return on investment percentage.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Note that this calculator does not account for taxes. In most countries, crypto profits
          are subject to capital gains tax. Consult a tax professional or use crypto tax software
          to understand your tax obligations.
        </p>
      </div>
    </div>
  );
}
