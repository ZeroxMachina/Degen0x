"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

interface CardConfig {
  name: string;
  rates: Record<string, number>;
  flatRate?: number;
}

const CARDS: CardConfig[] = [
  {
    name: "Crypto.com Visa (Ruby Steel, 2%)",
    flatRate: 2,
    rates: { groceries: 2, dining: 2, gas: 2, travel: 2, other: 2 },
  },
  {
    name: "Crypto.com Visa (Jade Green, 3%)",
    flatRate: 3,
    rates: { groceries: 3, dining: 3, gas: 3, travel: 3, other: 3 },
  },
  {
    name: "Crypto.com Visa (Icy White, 5%)",
    flatRate: 5,
    rates: { groceries: 5, dining: 5, gas: 5, travel: 5, other: 5 },
  },
  {
    name: "Coinbase Card (1% BTC)",
    flatRate: 1,
    rates: { groceries: 1, dining: 1, gas: 1, travel: 1, other: 1 },
  },
  {
    name: "Coinbase Card (4% select crypto)",
    flatRate: 4,
    rates: { groceries: 4, dining: 4, gas: 4, travel: 4, other: 4 },
  },
  {
    name: "Gemini Credit Card",
    rates: { groceries: 2, dining: 3, gas: 1, travel: 1, other: 1 },
  },
  {
    name: "Binance Card (2% tier)",
    flatRate: 2,
    rates: { groceries: 2, dining: 2, gas: 2, travel: 2, other: 2 },
  },
  {
    name: "Binance Card (8% tier)",
    flatRate: 8,
    rates: { groceries: 8, dining: 8, gas: 8, travel: 8, other: 8 },
  },
  {
    name: "Fold Card (Fold+, 1.5%)",
    flatRate: 1.5,
    rates: { groceries: 1.5, dining: 1.5, gas: 1.5, travel: 1.5, other: 1.5 },
  },
  {
    name: "Bybit Card (2% standard)",
    flatRate: 2,
    rates: { groceries: 2, dining: 2, gas: 2, travel: 2, other: 2 },
  },
  {
    name: "BitPay Card (0% - no rewards)",
    flatRate: 0,
    rates: { groceries: 0, dining: 0, gas: 0, travel: 0, other: 0 },
  },
];

const CATEGORIES = [
  { key: "groceries", label: "Groceries" },
  { key: "dining", label: "Dining" },
  { key: "gas", label: "Gas" },
  { key: "travel", label: "Travel" },
  { key: "other", label: "Other" },
];

function calculateCashback(card: CardConfig, spending: Record<string, number>): number {
  let total = 0;
  for (const cat of CATEGORIES) {
    const spend = spending[cat.key] || 0;
    const rate = card.rates[cat.key] || 0;
    total += (spend * rate) / 100;
  }
  return total;
}

export default function CashbackCalculatorPage() {
  const [spending, setSpending] = useState<Record<string, number>>({
    groceries: 600,
    dining: 400,
    gas: 200,
    travel: 150,
    other: 650,
  });

  const [selectedCards, setSelectedCards] = useState<number[]>([0, 3, 5]);

  const updateSpending = (key: string, value: number) => {
    setSpending((prev) => ({ ...prev, [key]: Math.max(0, value) }));
  };

  const toggleCard = (index: number) => {
    setSelectedCards((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      if (prev.length >= 5) return prev;
      return [...prev, index];
    });
  };

  const totalSpending = Object.values(spending).reduce((a, b) => a + b, 0);

  const results = selectedCards
    .map((i) => ({
      card: CARDS[i],
      monthly: calculateCashback(CARDS[i], spending),
    }))
    .sort((a, b) => b.monthly - a.monthly);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Calculators", href: "/crypto-cards/calculators" },
          { label: "Cashback Calculator" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
        Crypto Cashback Calculator
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Enter your monthly spending by category and select up to five cards to compare. See exactly
        how much cashback each card would earn based on your real spending habits.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-6">Monthly Spending by Category</h2>

            <div className="space-y-4">
              {CATEGORIES.map((cat) => (
                <div key={cat.key}>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                    {cat.label}
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--color-text-secondary)]">$</span>
                    <input
                      type="number"
                      min={0}
                      max={50000}
                      value={spending[cat.key]}
                      onChange={(e) => updateSpending(cat.key, Number(e.target.value))}
                      aria-label={`Monthly ${cat.label} spending in USD`}
                      className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                </div>
              ))}
              <div className="pt-3 border-t border-[var(--color-border)]">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-[var(--color-text-secondary)]">Total Monthly</span>
                  <span className="text-lg font-bold text-[var(--color-text)]">${totalSpending.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">Select Cards to Compare (up to 5)</h2>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {CARDS.map((card, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-[var(--color-bg)] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedCards.includes(i)}
                    onChange={() => toggleCard(i)}
                    className="accent-[var(--color-primary)] w-4 h-4"
                  />
                  <span className="text-sm text-[var(--color-text-secondary)]">{card.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-6">Cashback Comparison</h2>

            {results.length === 0 ? (
              <p className="text-[var(--color-text-secondary)]">Select at least one card to see results.</p>
            ) : (
              <div className="space-y-4">
                {results.map((result, index) => {
                  const maxMonthly = results[0].monthly;
                  const barWidth = maxMonthly > 0 ? (result.monthly / maxMonthly) * 100 : 0;

                  return (
                    <div key={result.card.name} className="rounded-lg bg-[var(--color-bg)] p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="text-sm font-medium text-[var(--color-text)]">
                            {index === 0 && results.length > 1 && result.monthly > 0 ? "🏆 " : ""}
                            {result.card.name}
                          </span>
                        </div>
                      </div>

                      <div className="w-full bg-[var(--color-border)] rounded-full h-2 mb-3">
                        <div
                          className="h-2 rounded-full transition-all duration-500"
                          style={{
                            width: `${barWidth}%`,
                            backgroundColor: index === 0 ? "var(--color-primary)" : "var(--color-text-secondary)",
                          }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-xs text-[var(--color-text-secondary)]">Monthly</p>
                          <p className="text-lg font-bold text-[var(--color-primary)]">
                            ${result.monthly.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[var(--color-text-secondary)]">Yearly</p>
                          <p className="text-lg font-bold text-[var(--color-text)]">
                            ${(result.monthly * 12).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="mt-2 grid grid-cols-5 gap-1">
                        {CATEGORIES.map((cat) => (
                          <div key={cat.key} className="text-center">
                            <p className="text-xs text-[var(--color-text-secondary)]">{cat.label}</p>
                            <p className="text-xs font-medium text-[var(--color-text)]">
                              {result.card.rates[cat.key]}%
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {results.length > 1 && results[0].monthly > results[results.length - 1].monthly && (
                  <div className="rounded-lg border border-[var(--color-primary)] bg-[var(--color-bg)] p-4 mt-4">
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      <strong className="text-[var(--color-text)]">{results[0].card.name}</strong> earns you{" "}
                      <strong className="text-[var(--color-primary)]">
                        ${((results[0].monthly - results[results.length - 1].monthly) * 12).toFixed(2)} more per year
                      </strong>{" "}
                      than {results[results.length - 1].card.name} based on your spending.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 mt-6">
            <p className="text-xs text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-accent)]">Note:</strong> Cashback rates shown are
              the advertised rates for each card and tier. Actual rates may vary. Some cards require
              staking or paid subscriptions for the rates shown. This calculator does not account for
              conversion spreads, annual fees, or staking costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
