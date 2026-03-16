'use client';

"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function ProfitCalculatorPage() {
  const [buyPrice, setBuyPrice] = useState("");
  const [buyCurrency, setBuyCurrency] = useState("ETH");
  const [buyGas, setBuyGas] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [sellCurrency, setSellCurrency] = useState("ETH");
  const [sellGas, setSellGas] = useState("");
  const [marketplaceFee, setMarketplaceFee] = useState("2.5");
  const [royaltyFee, setRoyaltyFee] = useState("5");
  const [ethPriceAtBuy, setEthPriceAtBuy] = useState("3000");
  const [ethPriceAtSell, setEthPriceAtSell] = useState("3000");
  const [solPriceAtBuy, setSolPriceAtBuy] = useState("150");
  const [solPriceAtSell, setSolPriceAtSell] = useState("150");
  const [results, setResults] = useState<{
    totalCostCrypto: number;
    totalCostUsd: number;
    grossRevenueCrypto: number;
    grossRevenueUsd: number;
    marketplaceFeeAmount: number;
    royaltyFeeAmount: number;
    netRevenueCrypto: number;
    netRevenueUsd: number;
    profitCrypto: number;
    profitUsd: number;
    roi: number;
  } | null>(null);

  const getUsdRate = (currency: string, isBuy: boolean) => {
    if (currency === "ETH") return parseFloat(isBuy ? ethPriceAtBuy : ethPriceAtSell) || 0;
    if (currency === "SOL") return parseFloat(isBuy ? solPriceAtBuy : solPriceAtSell) || 0;
    return 1;
  };

  const calculate = () => {
    const buy = parseFloat(buyPrice) || 0;
    const sell = parseFloat(sellPrice) || 0;
    const gas1 = parseFloat(buyGas) || 0;
    const gas2 = parseFloat(sellGas) || 0;
    const mpFee = parseFloat(marketplaceFee) || 0;
    const royal = parseFloat(royaltyFee) || 0;

    if (buy <= 0 || sell <= 0) return;

    const buyUsdRate = getUsdRate(buyCurrency, true);
    const sellUsdRate = getUsdRate(sellCurrency, false);

    const totalCostCrypto = buy + gas1;
    const totalCostUsd = buy * buyUsdRate + gas1 * buyUsdRate;

    const grossRevenueCrypto = sell;
    const grossRevenueUsd = sell * sellUsdRate;

    const marketplaceFeeAmount = sell * (mpFee / 100);
    const royaltyFeeAmount = sell * (royal / 100);

    const netRevenueCrypto = sell - marketplaceFeeAmount - royaltyFeeAmount - gas2;
    const netRevenueUsd = (sell - marketplaceFeeAmount - royaltyFeeAmount) * sellUsdRate - gas2 * sellUsdRate;

    const profitCrypto = netRevenueCrypto - totalCostCrypto;
    const profitUsd = netRevenueUsd - totalCostUsd;

    const roi = totalCostUsd > 0 ? (profitUsd / totalCostUsd) * 100 : 0;

    setResults({
      totalCostCrypto,
      totalCostUsd,
      grossRevenueCrypto,
      grossRevenueUsd,
      marketplaceFeeAmount,
      royaltyFeeAmount,
      netRevenueCrypto,
      netRevenueUsd,
      profitCrypto,
      profitUsd,
      roi,
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "NFTs", href: "/nfts" },
          { label: "Tools", href: "/nfts/tools" },
          { label: "Profit Calculator", href: "#" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">NFT Profit Calculator</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Calculate your actual profit or loss from an NFT trade. This calculator accounts for marketplace
        fees, creator royalties, gas costs, and crypto price changes between buy and sell dates for an
        accurate USD profit analysis.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">Purchase Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Buy Price</label>
                <input
                  type="number"
                  step="0.001"
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(e.target.value)}
                  placeholder="1.5"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Currency</label>
                <select
                  value={buyCurrency}
                  onChange={(e) => setBuyCurrency(e.target.value)}
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none"
                >
                  <option value="ETH">ETH</option>
                  <option value="SOL">SOL</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Gas Fee (buy)</label>
              <input
                type="number"
                step="0.001"
                value={buyGas}
                onChange={(e) => setBuyGas(e.target.value)}
                placeholder="0.01"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                {buyCurrency} Price at Buy (USD)
              </label>
              <input
                type="number"
                value={buyCurrency === "ETH" ? ethPriceAtBuy : solPriceAtBuy}
                onChange={(e) => buyCurrency === "ETH" ? setEthPriceAtBuy(e.target.value) : setSolPriceAtBuy(e.target.value)}
                placeholder="3000"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">Sale Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Sell Price</label>
                <input
                  type="number"
                  step="0.001"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(e.target.value)}
                  placeholder="3.0"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Currency</label>
                <select
                  value={sellCurrency}
                  onChange={(e) => setSellCurrency(e.target.value)}
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none"
                >
                  <option value="ETH">ETH</option>
                  <option value="SOL">SOL</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Gas Fee (sell)</label>
              <input
                type="number"
                step="0.001"
                value={sellGas}
                onChange={(e) => setSellGas(e.target.value)}
                placeholder="0.01"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                {sellCurrency} Price at Sell (USD)
              </label>
              <input
                type="number"
                value={sellCurrency === "ETH" ? ethPriceAtSell : solPriceAtSell}
                onChange={(e) => sellCurrency === "ETH" ? setEthPriceAtSell(e.target.value) : setSolPriceAtSell(e.target.value)}
                placeholder="3000"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">Fees</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Marketplace Fee (%)</label>
            <input
              type="number"
              step="0.1"
              value={marketplaceFee}
              onChange={(e) => setMarketplaceFee(e.target.value)}
              placeholder="2.5"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Creator Royalty (%)</label>
            <input
              type="number"
              step="0.1"
              value={royaltyFee}
              onChange={(e) => setRoyaltyFee(e.target.value)}
              placeholder="5"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          <button onClick={() => setMarketplaceFee("0")} className="rounded-lg border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] transition-colors">Blur (0%)</button>
          <button onClick={() => setMarketplaceFee("0.5")} className="rounded-lg border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] transition-colors">X2Y2 (0.5%)</button>
          <button onClick={() => setMarketplaceFee("1.5")} className="rounded-lg border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] transition-colors">Tensor (1.5%)</button>
          <button onClick={() => setMarketplaceFee("2")} className="rounded-lg border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] transition-colors">Magic Eden (2%)</button>
          <button onClick={() => setMarketplaceFee("2.5")} className="rounded-lg border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] transition-colors">OpenSea (2.5%)</button>
          <button onClick={() => setMarketplaceFee("5")} className="rounded-lg border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] transition-colors">Foundation (5%)</button>
        </div>
        <button
          onClick={calculate}
          className="affiliate-cta mt-6 w-full rounded-lg px-6 py-3 text-sm font-medium text-white"
        >
          Calculate Profit
        </button>
      </div>

      {results && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">Profit Analysis</h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">Net Profit (USD)</p>
              <p className={`text-2xl font-bold ${results.profitUsd >= 0 ? "text-green-400" : "text-red-400"}`}>
                {results.profitUsd >= 0 ? "+" : ""}${results.profitUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">ROI</p>
              <p className={`text-2xl font-bold ${results.roi >= 0 ? "text-green-400" : "text-red-400"}`}>
                {results.roi >= 0 ? "+" : ""}{results.roi.toFixed(2)}%
              </p>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">Total Fees</p>
              <p className="text-2xl font-bold text-yellow-400">
                {(results.marketplaceFeeAmount + results.royaltyFeeAmount).toFixed(4)}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm border-b border-[var(--color-border)] pb-2">
              <span className="text-[var(--color-text-secondary)]">Total Cost (inc. gas)</span>
              <span className="text-[var(--color-text)]">{results.totalCostCrypto.toFixed(4)} / ${results.totalCostUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-sm border-b border-[var(--color-border)] pb-2">
              <span className="text-[var(--color-text-secondary)]">Gross Sale Revenue</span>
              <span className="text-[var(--color-text)]">{results.grossRevenueCrypto.toFixed(4)} / ${results.grossRevenueUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-sm border-b border-[var(--color-border)] pb-2">
              <span className="text-[var(--color-text-secondary)]">Marketplace Fee</span>
              <span className="text-yellow-400">-{results.marketplaceFeeAmount.toFixed(4)}</span>
            </div>
            <div className="flex justify-between text-sm border-b border-[var(--color-border)] pb-2">
              <span className="text-[var(--color-text-secondary)]">Creator Royalty</span>
              <span className="text-yellow-400">-{results.royaltyFeeAmount.toFixed(4)}</span>
            </div>
            <div className="flex justify-between text-sm border-b border-[var(--color-border)] pb-2">
              <span className="text-[var(--color-text-secondary)]">Net Revenue (after fees &amp; gas)</span>
              <span className="text-[var(--color-text)]">{results.netRevenueCrypto.toFixed(4)} / ${results.netRevenueUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-sm font-bold pt-2">
              <span className="text-[var(--color-text)]">Net Profit / Loss</span>
              <span className={results.profitUsd >= 0 ? "text-green-400" : "text-red-400"}>
                {results.profitUsd >= 0 ? "+" : ""}${results.profitUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
