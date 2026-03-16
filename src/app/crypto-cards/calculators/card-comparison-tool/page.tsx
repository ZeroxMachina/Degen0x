"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

interface CardData {
  name: string;
  slug: string;
  rating: number;
  cashbackRate: string;
  annualFee: string;
  cardType: string;
  stakingRequired: string;
  supportedCountries: string;
  atmWithdrawals: string;
  foreignTxFee: string;
  loungeAccess: string;
  rewardCurrency: string;
  bestFor: string;
}

const ALL_CARDS: CardData[] = [
  {
    name: "Crypto.com Visa",
    slug: "crypto-com-visa",
    rating: 4.7,
    cashbackRate: "1% – 5% (tiered)",
    annualFee: "$0",
    cardType: "Prepaid Visa Debit",
    stakingRequired: "Yes (CRO, $400–$400K)",
    supportedCountries: "100+ countries",
    atmWithdrawals: "Free up to $800/mo (higher tiers)",
    foreignTxFee: "0%",
    loungeAccess: "Yes (Icy White & Obsidian)",
    rewardCurrency: "CRO",
    bestFor: "Premium perks & high cashback",
  },
  {
    name: "Coinbase Card",
    slug: "coinbase-card",
    rating: 4.4,
    cashbackRate: "1% – 4% (varies by crypto)",
    annualFee: "$0",
    cardType: "Visa Debit",
    stakingRequired: "No",
    supportedCountries: "US only",
    atmWithdrawals: "Standard ATM fees",
    foreignTxFee: "$0 on USDC spend",
    loungeAccess: "No",
    rewardCurrency: "Choice of crypto",
    bestFor: "US users, no staking",
  },
  {
    name: "Binance Card",
    slug: "binance-card",
    rating: 4.3,
    cashbackRate: "1% – 8% (BNB-based tiers)",
    annualFee: "$0",
    cardType: "Visa Debit",
    stakingRequired: "BNB holdings for tiers",
    supportedCountries: "EEA, UK, select countries",
    atmWithdrawals: "0.9% fee",
    foreignTxFee: "0%",
    loungeAccess: "No",
    rewardCurrency: "BNB",
    bestFor: "Binance users with BNB",
  },
  {
    name: "Gemini Credit Card",
    slug: "gemini-card",
    rating: 4.1,
    cashbackRate: "3% dining, 2% groceries, 1% other",
    annualFee: "$0",
    cardType: "Mastercard Credit",
    stakingRequired: "No",
    supportedCountries: "US only",
    atmWithdrawals: "Cash advance fees",
    foreignTxFee: "3%",
    loungeAccess: "Mastercard World Elite perks",
    rewardCurrency: "Choice of 60+ cryptos",
    bestFor: "Credit building & dining rewards",
  },
  {
    name: "Nexo Card",
    slug: "nexo-card",
    rating: 4.2,
    cashbackRate: "Up to 2% in NEXO or BTC",
    annualFee: "$0",
    cardType: "Mastercard (Credit Line)",
    stakingRequired: "Collateral required",
    supportedCountries: "200+ countries",
    atmWithdrawals: "Free up to limits",
    foreignTxFee: "0%",
    loungeAccess: "No",
    rewardCurrency: "NEXO or BTC",
    bestFor: "HODLers, spend without selling",
  },
  {
    name: "Fold Card",
    slug: "fold-card",
    rating: 4.3,
    cashbackRate: "0.5% – 1.5%+ in BTC",
    annualFee: "Free or $150/yr (Fold+)",
    cardType: "Visa Debit",
    stakingRequired: "No",
    supportedCountries: "US only",
    atmWithdrawals: "Standard fees",
    foreignTxFee: "Standard Visa rates",
    loungeAccess: "No",
    rewardCurrency: "Bitcoin (BTC)",
    bestFor: "Bitcoin maximalists",
  },
  {
    name: "BitPay Card",
    slug: "bitpay-card",
    rating: 4.0,
    cashbackRate: "None",
    annualFee: "$0 ($5 inactivity fee)",
    cardType: "Mastercard Prepaid",
    stakingRequired: "No",
    supportedCountries: "US only",
    atmWithdrawals: "$3 domestic fee",
    foreignTxFee: "3%",
    loungeAccess: "No",
    rewardCurrency: "None",
    bestFor: "Simple crypto spending",
  },
  {
    name: "Wirex Card",
    slug: "wirex-card",
    rating: 3.9,
    cashbackRate: "Up to 8% in WXT",
    annualFee: "Free (premium from $9.99/mo)",
    cardType: "Visa Debit",
    stakingRequired: "WXT for best rates",
    supportedCountries: "130+ (not US)",
    atmWithdrawals: "Free up to limits",
    foreignTxFee: "0%",
    loungeAccess: "No",
    rewardCurrency: "WXT",
    bestFor: "Multi-currency travelers",
  },
  {
    name: "Plutus Card",
    slug: "plutus-card",
    rating: 4.1,
    cashbackRate: "Up to 8% in PLU",
    annualFee: "Free (Pro from EUR 14.99/mo)",
    cardType: "Visa Debit",
    stakingRequired: "PLU for higher tiers",
    supportedCountries: "EEA and UK",
    atmWithdrawals: "Free up to limits",
    foreignTxFee: "0% in EEA",
    loungeAccess: "No",
    rewardCurrency: "PLU",
    bestFor: "European decentralized rewards",
  },
  {
    name: "Bybit Card",
    slug: "bybit-card",
    rating: 4.0,
    cashbackRate: "2% standard, up to 10% select",
    annualFee: "$0",
    cardType: "Mastercard Debit",
    stakingRequired: "No",
    supportedCountries: "Select countries (not US)",
    atmWithdrawals: "Standard fees",
    foreignTxFee: "Standard rates",
    loungeAccess: "No",
    rewardCurrency: "Varies",
    bestFor: "Bybit users",
  },
];

const FEATURES: { key: keyof CardData; label: string }[] = [
  { key: "cashbackRate", label: "Cashback Rate" },
  { key: "annualFee", label: "Annual Fee" },
  { key: "cardType", label: "Card Type" },
  { key: "stakingRequired", label: "Staking Required" },
  { key: "supportedCountries", label: "Supported Countries" },
  { key: "atmWithdrawals", label: "ATM Withdrawals" },
  { key: "foreignTxFee", label: "Foreign Tx Fee" },
  { key: "loungeAccess", label: "Lounge Access" },
  { key: "rewardCurrency", label: "Reward Currency" },
  { key: "bestFor", label: "Best For" },
];

function StarDisplay({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-sm">&#9733;</span>
      ))}
      {hasHalf && <span className="text-yellow-400 text-sm">&#9734;</span>}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-600 text-sm">&#9734;</span>
      ))}
      <span className="text-xs text-[var(--color-text-secondary)] ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function CardComparisonToolPage() {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([0, 1]);

  const addCard = (index: number) => {
    if (selectedIndices.length < 3 && !selectedIndices.includes(index)) {
      setSelectedIndices((prev) => [...prev, index]);
    }
  };

  const removeCard = (index: number) => {
    setSelectedIndices((prev) => prev.filter((i) => i !== index));
  };

  const updateCard = (position: number, newIndex: number) => {
    setSelectedIndices((prev) => {
      const updated = [...prev];
      updated[position] = newIndex;
      return updated;
    });
  };

  const selectedCards = selectedIndices.map((i) => ALL_CARDS[i]);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Calculators", href: "/crypto-cards/calculators" },
          { label: "Card Comparison Tool", href: "#" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
        Crypto Card Comparison Tool
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Select two or three crypto cards to compare side by side. See how they stack up across
        cashback rates, fees, card type, staking requirements, availability, and more.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        {selectedIndices.map((cardIndex, position) => (
          <div key={position} className="flex items-center gap-2">
            <select
              value={cardIndex}
              onChange={(e) => updateCard(position, Number(e.target.value))}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              {ALL_CARDS.map((card, i) => (
                <option key={card.slug} value={i}>
                  {card.name}
                </option>
              ))}
            </select>
            {selectedIndices.length > 2 && (
              <button
                onClick={() => removeCard(cardIndex)}
                className="text-[var(--color-text-secondary)] hover:text-red-400 transition-colors text-lg"
                aria-label={`Remove ${ALL_CARDS[cardIndex].name}`}
              >
                &times;
              </button>
            )}
          </div>
        ))}
        {selectedIndices.length < 3 && (
          <button
            onClick={() => {
              const nextCard = ALL_CARDS.findIndex(
                (_, i) => !selectedIndices.includes(i)
              );
              if (nextCard >= 0) addCard(nextCard);
            }}
            className="rounded-lg border border-dashed border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text)] transition-colors"
          >
            + Add Card
          </button>
        )}
      </div>

      {selectedCards.length >= 2 && (
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-card)]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--color-text)] min-w-[140px]">
                  Feature
                </th>
                {selectedCards.map((card) => (
                  <th
                    key={card.slug}
                    className="px-6 py-4 text-center text-sm font-semibold text-[var(--color-text)] min-w-[180px]"
                  >
                    {card.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[var(--color-border)]">
                <td className="px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                  Rating
                </td>
                {selectedCards.map((card) => (
                  <td key={card.slug} className="px-6 py-3 text-center">
                    <div className="flex justify-center">
                      <StarDisplay rating={card.rating} />
                    </div>
                  </td>
                ))}
              </tr>
              {FEATURES.map((feature) => (
                <tr key={feature.key} className="border-t border-[var(--color-border)]">
                  <td className="px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    {feature.label}
                  </td>
                  {selectedCards.map((card) => (
                    <td
                      key={card.slug}
                      className="px-6 py-3 text-center text-sm text-[var(--color-text-secondary)]"
                    >
                      {card[feature.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-card)]">
                <td className="px-6 py-4" />
                {selectedCards.map((card) => (
                  <td key={card.slug} className="px-6 py-4 text-center">
                    <a
                      href={`https://degen0x.com/go/${card.slug}`}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="affiliate-cta inline-block px-4 py-2 rounded-lg text-white text-sm font-medium"
                    >
                      Visit {card.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedCards.length < 2 && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 text-center">
          <p className="text-[var(--color-text-secondary)]">
            Select at least two cards above to see a side-by-side comparison.
          </p>
        </div>
      )}

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 mt-8">
        <p className="text-xs text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-accent)]">Disclaimer:</strong> Card features, rates,
          and availability may change. Information shown is based on publicly available data and may
          not reflect the most recent updates. Always verify details on the card provider&apos;s
          website before applying. Some links may be affiliate links.
        </p>
      </div>
    </div>
  );
}
