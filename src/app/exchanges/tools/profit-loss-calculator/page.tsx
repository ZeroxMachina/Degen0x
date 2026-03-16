'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function ProfitLossCalculatorPage() {
  const [buyPrice, setBuyPrice] = useState<string>("30000");
  const [sellPrice, setSellPrice] = useState<string>("45000");
  const [amount, setAmount] = useState<string>("1");
  const [investmentType, setInvestmentType] = useState<"units" | "usd">("units");
  const [buyFeePercent, setBuyFeePercent] = useState<string>("0.1");
  const [sellFeePercent, setSellFeePercent] = useState<string>("0.1");
  const [leverage, setLeverage] = useState<string>("1");

  const results = useMemo(() => {
    const buy = parseFloat(buyPrice) || 0;
    const sell = parseFloat(sellPrice) || 0;
    const qty = parseFloat(amount) || 0;
    const buyFee = parseFloat(buyFeePercent) || 0;
    const sellFee = parseFloat(sellFeePercent) || 0;
    const lev = parseFloat(leverage) || 1;

    let units: number;
    let investmentCost: number;

    if (investmentType === "units") {
      units = qty;
      investmentCost = units * buy;
    } else {
      investmentCost = qty;
      units = buy > 0 ? qty / buy : 0;
    }

    const buyFeeAmount = investmentCost * (buyFee / 100);
    const totalBuyCost = investmentCost + buyFeeAmount;

    const grossSellValue = units * sell;
    const sellFeeAmount = grossSellValue * (sellFee / 100);
    const netSellValue = grossSellValue - sellFeeAmount;

    const grossPnL = grossSellValue - investmentCost;
    const totalFees = buyFeeAmount + sellFeeAmount;
    const netPnL = netSellValue - totalBuyCost;

    // With leverage
    const leveragedNetPnL = netPnL * lev;
    const leveragedReturnPercent = totalBuyCost > 0 ? (leveragedNetPnL / totalBuyCost) * 100 : 0;

    const priceChange = buy > 0 ? ((sell - buy) / buy) * 100 : 0;

    // Break-even sell price (accounting for fees)
    const breakEvenSell = buy > 0 ? totalBuyCost / (units * (1 - sellFee / 100)) : 0;

    // Liquidation price (for leveraged positions)
    const liquidationPrice = lev > 1 ? buy * (1 - 1 / lev) : 0;

    return {
      units,
      investmentCost,
      buyFeeAmount,
      totalBuyCost,
      grossSellValue,
      sellFeeAmount,
      netSellValue,
      grossPnL,
      totalFees,
      netPnL,
      leveragedNetPnL,
      leveragedReturnPercent,
      priceChange,
      breakEvenSell,
      liquidationPrice,
    };
  }, [buyPrice, sellPrice, amount, investmentType, buyFeePercent, sellFeePercent, leverage]);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Exchanges", href: "/exchanges" },
          { label: "Tools", href: "/exchanges/tools" },
          { label: "Profit/Loss Calculator", href: "#" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
        Crypto Profit &amp; Loss Calculator
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Calculate your potential profit or loss on a crypto trade. Enter your buy price, sell price, and position
        size to see a detailed breakdown including fees, leverage impact, break-even price, and liquidation levels.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Buy Price (USD)</label>
            <input
              type="number"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              placeholder="30000"
              min="0"
              step="any"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Sell Price (USD)</label>
            <input
              type="number"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              placeholder="45000"
              min="0"
              step="any"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Amount</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1"
                min="0"
                step="any"
                className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <button
                onClick={() => setInvestmentType(investmentType === "units" ? "usd" : "units")}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] px-4 py-3 text-sm font-medium hover:text-[var(--color-text)] transition-colors whitespace-nowrap"
              >
                {investmentType === "units" ? "Units" : "USD"}
              </button>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">
              Click the button to switch between units and USD investment
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Buy Fee (%)</label>
              <input
                type="number"
                value={buyFeePercent}
                onChange={(e) => setBuyFeePercent(e.target.value)}
                placeholder="0.1"
                min="0"
                max="100"
                step="0.01"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Sell Fee (%)</label>
              <input
                type="number"
                value={sellFeePercent}
                onChange={(e) => setSellFeePercent(e.target.value)}
                placeholder="0.1"
                min="0"
                max="100"
                step="0.01"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Leverage (1x = no leverage)</label>
            <div className="flex gap-2">
              {["1", "2", "5", "10", "25"].map((lev) => (
                <button
                  key={lev}
                  onClick={() => setLeverage(lev)}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    leverage === lev
                      ? "bg-[var(--color-primary)] text-[var(--color-text)]"
                      : "border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {lev}x
                </button>
              ))}
              <input
                type="number"
                value={leverage}
                onChange={(e) => setLeverage(e.target.value)}
                min="1"
                max="125"
                step="1"
                className="w-20 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] px-3 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          {/* Main P&L Result */}
          <div
            className={`rounded-xl border p-6 ${
              results.leveragedNetPnL >= 0
                ? "border-green-500/30 bg-green-500/5"
                : "border-red-500/30 bg-red-500/5"
            }`}
          >
            <p className="text-sm text-[var(--color-text-secondary)] mb-1">
              Net Profit/Loss {parseFloat(leverage) > 1 ? `(${leverage}x leverage)` : ""}
            </p>
            <p className={`text-3xl font-bold ${results.leveragedNetPnL >= 0 ? "text-green-400" : "text-red-400"}`}>
              {results.leveragedNetPnL >= 0 ? "+" : ""}$
              {results.leveragedNetPnL.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className={`text-sm font-medium mt-1 ${results.leveragedReturnPercent >= 0 ? "text-green-400" : "text-red-400"}`}>
              {results.leveragedReturnPercent >= 0 ? "+" : ""}{results.leveragedReturnPercent.toFixed(2)}% return on investment
            </p>
          </div>

          {/* Detailed Breakdown */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">Trade Breakdown</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Position Size</span>
                <span className="text-[var(--color-text)]">{results.units.toFixed(6)} units</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Investment Cost</span>
                <span className="text-[var(--color-text)]">
                  ${results.investmentCost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Price Change</span>
                <span className={results.priceChange >= 0 ? "text-green-400" : "text-red-400"}>
                  {results.priceChange >= 0 ? "+" : ""}{results.priceChange.toFixed(2)}%
                </span>
              </div>

              <div className="border-t border-[var(--color-border)] pt-3">
                <p className="text-xs text-[var(--color-text-secondary)] mb-2 font-medium uppercase tracking-wide">Fees</p>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">Buy Fee</span>
                  <span className="text-[var(--color-accent)]">
                    -${results.buyFeeAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[var(--color-text-secondary)]">Sell Fee</span>
                  <span className="text-[var(--color-accent)]">
                    -${results.sellFeeAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[var(--color-text-secondary)]">Total Fees</span>
                  <span className="text-[var(--color-accent)] font-medium">
                    -${results.totalFees.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <div className="border-t border-[var(--color-border)] pt-3">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">Break-Even Sell Price</span>
                  <span className="text-[var(--color-text)] font-medium">
                    ${results.breakEvenSell.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                {parseFloat(leverage) > 1 && results.liquidationPrice > 0 && (
                  <div className="flex justify-between mt-2">
                    <span className="text-[var(--color-text-secondary)]">Est. Liquidation Price</span>
                    <span className="text-red-400 font-medium">
                      ${results.liquidationPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {parseFloat(leverage) > 1 && (
            <div className="rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-4">
              <p className="text-xs text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-accent)]">Leverage Warning:</strong> Trading with {leverage}x
                leverage means a {(100 / parseFloat(leverage)).toFixed(1)}% move against your position will result
                in liquidation. Leverage amplifies both gains and losses. Only use leverage if you fully understand
                the risks.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Educational Content */}
      <div className="mt-12 prose-crypto">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Calculate Crypto Profit and Loss</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
          Calculating your profit or loss on a crypto trade involves three components: the price difference
          between your buy and sell prices, the fees paid to the exchange on both sides of the trade, and the
          leverage multiplier (if applicable). The formula is straightforward: Net P&amp;L = (Sell Value - Buy
          Cost - Total Fees) x Leverage.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
          Fees are often overlooked but can significantly impact your returns, especially on frequent trades.
          A round-trip trade (buy and sell) at 0.1% per side costs 0.2% total. Over 100 trades, that adds up
          to 20% of your trading volume consumed by fees alone. Always factor in fees when evaluating the
          profitability of a trade.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The break-even price is the sell price at which you recover your investment cost plus all fees. Any
          sell price above break-even results in a profit; any sell price below results in a loss. This calculator
          automatically computes this for you, making it easy to set realistic profit targets.
        </p>
      </div>
    </div>
  );
}
