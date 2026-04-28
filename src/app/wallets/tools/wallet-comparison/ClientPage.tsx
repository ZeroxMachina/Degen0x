"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import StarRating from "@/components/StarRating";
import RelatedContent from '@/components/RelatedContent';

interface WalletFeature {
  name: string;
  slug: string;
  rating: number;
  type: string;
  price: string;
  chains: string;
  openSource: string;
  secureElement: string;
  mobileApp: string;
  defiAccess: string;
  nftSupport: string;
  staking: string;
  multiSig: string;
  backupMethod: string;
  swapFeature: string;
  bestFor: string;
  affiliateUrl: string;
}

const allWallets: WalletFeature[] = [
  {
    name: "Ledger Nano X",
    slug: "ledger",
    rating: 4.7,
    type: "Hardware",
    price: "$149",
    chains: "5,500+ coins",
    openSource: "Partial",
    secureElement: "Yes (CC EAL5+)",
    mobileApp: "Yes (Bluetooth)",
    defiAccess: "Via Ledger Live",
    nftSupport: "Yes",
    staking: "Yes",
    multiSig: "No",
    backupMethod: "24-word seed phrase",
    swapFeature: "Yes (via providers)",
    bestFor: "Overall best hardware wallet",
    affiliateUrl: "https://degen0x.com/go/ledger",
  },
  {
    name: "Trezor Model T",
    slug: "trezor",
    rating: 4.6,
    type: "Hardware",
    price: "$219",
    chains: "1,800+ coins",
    openSource: "Yes (fully)",
    secureElement: "No",
    mobileApp: "Web-based",
    defiAccess: "Via Trezor Suite",
    nftSupport: "Limited",
    staking: "Yes",
    multiSig: "Via third-party",
    backupMethod: "Shamir / 24-word seed",
    swapFeature: "Yes (built-in)",
    bestFor: "Open-source security",
    affiliateUrl: "https://degen0x.com/go/trezor",
  },
  {
    name: "MetaMask",
    slug: "metamask",
    rating: 4.4,
    type: "Software (Hot)",
    price: "Free",
    chains: "All EVM chains",
    openSource: "Yes",
    secureElement: "N/A",
    mobileApp: "Yes",
    defiAccess: "Native (industry standard)",
    nftSupport: "Yes",
    staking: "Via dApps",
    multiSig: "No",
    backupMethod: "12-word seed phrase",
    swapFeature: "Yes (0.875% fee)",
    bestFor: "Ethereum DeFi & dApps",
    affiliateUrl: "https://degen0x.com/go/metamask",
  },
  {
    name: "Phantom",
    slug: "phantom",
    rating: 4.5,
    type: "Software (Hot)",
    price: "Free",
    chains: "Solana, ETH, Polygon, BTC",
    openSource: "No",
    secureElement: "N/A",
    mobileApp: "Yes",
    defiAccess: "Native",
    nftSupport: "Excellent",
    staking: "Yes (SOL native)",
    multiSig: "No",
    backupMethod: "12-word seed phrase",
    swapFeature: "Yes (0.85% fee)",
    bestFor: "Solana ecosystem",
    affiliateUrl: "https://degen0x.com/go/phantom",
  },
  {
    name: "Trust Wallet",
    slug: "trust-wallet",
    rating: 4.3,
    type: "Software (Hot)",
    price: "Free",
    chains: "100+ blockchains",
    openSource: "Partial",
    secureElement: "N/A",
    mobileApp: "Yes",
    defiAccess: "Built-in dApp browser",
    nftSupport: "Yes",
    staking: "Yes",
    multiSig: "No",
    backupMethod: "12-word seed phrase",
    swapFeature: "Yes (DEX aggregator)",
    bestFor: "Multi-chain mobile",
    affiliateUrl: "https://degen0x.com/go/trust-wallet",
  },
  {
    name: "Exodus",
    slug: "exodus",
    rating: 4.3,
    type: "Software (Hot)",
    price: "Free",
    chains: "300+ assets",
    openSource: "No",
    secureElement: "N/A",
    mobileApp: "Yes",
    defiAccess: "Limited",
    nftSupport: "Yes",
    staking: "Yes",
    multiSig: "No",
    backupMethod: "12-word seed phrase",
    swapFeature: "Yes (2-5% spread)",
    bestFor: "Beginners",
    affiliateUrl: "https://degen0x.com/go/exodus",
  },
  {
    name: "Coinbase Wallet",
    slug: "coinbase-wallet",
    rating: 4.2,
    type: "Software (Hot)",
    price: "Free",
    chains: "ETH, SOL, BTC, EVM",
    openSource: "Partial",
    secureElement: "N/A",
    mobileApp: "Yes",
    defiAccess: "Built-in dApp browser",
    nftSupport: "Yes",
    staking: "Limited",
    multiSig: "No",
    backupMethod: "12-word / Cloud backup",
    swapFeature: "Yes (DEX aggregator)",
    bestFor: "Coinbase users",
    affiliateUrl: "https://degen0x.com/go/coinbase-wallet",
  },
  {
    name: "Rabby",
    slug: "rabby",
    rating: 4.4,
    type: "Software (Hot)",
    price: "Free",
    chains: "All EVM chains",
    openSource: "Yes",
    secureElement: "N/A",
    mobileApp: "No",
    defiAccess: "Native (tx simulation)",
    nftSupport: "Yes",
    staking: "Via dApps",
    multiSig: "No",
    backupMethod: "12-word seed phrase",
    swapFeature: "Yes (DEX aggregator)",
    bestFor: "DeFi security",
    affiliateUrl: "https://degen0x.com/go/rabby",
  },
  {
    name: "Safe (Gnosis)",
    slug: "safe",
    rating: 4.5,
    type: "Smart Contract",
    price: "Free (gas fees)",
    chains: "ETH + EVM chains",
    openSource: "Yes",
    secureElement: "N/A",
    mobileApp: "Yes",
    defiAccess: "Via Safe Apps",
    nftSupport: "Yes",
    staking: "Via Safe Apps",
    multiSig: "Yes (native)",
    backupMethod: "Smart contract based",
    swapFeature: "Via Safe Apps",
    bestFor: "DAOs & teams",
    affiliateUrl: "https://degen0x.com/go/safe",
  },
];

const featureKeys: { key: keyof WalletFeature; label: string }[] = [
  { key: "type", label: "Wallet Type" },
  { key: "price", label: "Price" },
  { key: "chains", label: "Supported Chains" },
  { key: "openSource", label: "Open Source" },
  { key: "secureElement", label: "Secure Element" },
  { key: "mobileApp", label: "Mobile App" },
  { key: "defiAccess", label: "DeFi Access" },
  { key: "nftSupport", label: "NFT Support" },
  { key: "staking", label: "Staking" },
  { key: "multiSig", label: "Multi-Sig" },
  { key: "backupMethod", label: "Backup Method" },
  { key: "swapFeature", label: "Swap Feature" },
  { key: "bestFor", label: "Best For" },
];

export default function WalletComparisonToolPage() {
  const [selected, setSelected] = useState<string[]>(["ledger", "metamask", "phantom"]);

  const toggleWallet = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) {
        if (prev.length <= 2) return prev; // minimum 2 wallets
        return prev.filter((s) => s !== slug);
      }
      if (prev.length >= 4) return prev; // maximum 4 wallets
      return [...prev, slug];
    });
  };

  const selectedWallets = allWallets.filter((w) => selected.includes(w.slug));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Tools", href: "/wallets/tools" },
          { label: "Wallet Comparison", href: "/wallets/tools/wallet-comparison" },
        ]}
      />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Interactive Wallet Comparison Tool</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Select 2-4 wallets to compare their features side by side. Choose from hardware wallets, software
          wallets, and smart contract wallets.
        </p>
      </header>

      {/* Wallet Selector */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wide">
          Select Wallets to Compare (2-4)
        </h2>
        {/* editorial-voice */}
        <div style={{ background: '#0a1a0f', border: '1px solid #14532d', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🛡️</span>
            <strong style={{ color: '#22c55e', fontSize: 15 }}>Security Verdict</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We evaluate wallet security by examining the code, the team, the supply chain, and the recovery options. Marketing claims get zero weight.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {allWallets.map((wallet) => {
            const isSelected = selected.includes(wallet.slug);
            return (
              <button
                key={wallet.slug}
                onClick={() => toggleWallet(wallet.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isSelected
                    ? "bg-[var(--color-primary)] text-[var(--color-text)]"
                    : "border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]"
                }`}
              >
                {wallet.name}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mt-2">
          {selected.length} of 4 wallets selected.{" "}
          {selected.length >= 4 && "Maximum reached. Deselect a wallet to add a different one."}
          {selected.length <= 2 && "Minimum 2 wallets required for comparison."}
        </p>
      </section>

      {/* Comparison Table */}
      <section className="mb-12">
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-card)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)] min-w-[160px]">
                  Feature
                </th>
                {selectedWallets.map((wallet) => (
                  <th
                    key={wallet.slug}
                    className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)] min-w-[160px]"
                  >
                    {wallet.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Rating Row */}
              <tr className="border-t border-[var(--color-border)]">
                <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                  Rating
                </td>
                {selectedWallets.map((wallet) => (
                  <td key={wallet.slug} className="px-4 py-3 text-center">
                    <div className="flex justify-center">
                      <StarRating rating={wallet.rating} size="sm" />
                    </div>
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      {wallet.rating}/5
                    </span>
                  </td>
                ))}
              </tr>

              {/* Feature Rows */}
              {featureKeys.map((feature) => (
                <tr key={feature.key} className="border-t border-[var(--color-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    {feature.label}
                  </td>
                  {selectedWallets.map((wallet) => (
                    <td
                      key={wallet.slug}
                      className="px-4 py-3 text-center text-sm text-[var(--color-text-secondary)]"
                    >
                      {String(wallet[feature.key])}
                    </td>
                  ))}
                </tr>
              ))}

              {/* CTA Row */}
              <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-card)]">
                <td className="px-4 py-4"></td>
                {selectedWallets.map((wallet) => (
                  <td key={wallet.slug} className="px-4 py-4 text-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="affiliate-cta inline-block px-4 py-2 rounded-lg text-white text-sm font-medium"
                    >
                      Visit {wallet.name.split(" ")[0]}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Recommendation */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Quick Recommendations</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Best for Security</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-text)]">Ledger Nano X</strong> for individuals with its Secure Element chip.
              <strong className="text-[var(--color-text)]"> Safe</strong> for organizations with multi-sig protection.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Best for DeFi</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-text)]">MetaMask</strong> for broadest EVM compatibility.
              <strong className="text-[var(--color-text)]"> Rabby</strong> for transaction simulation and safety.
              <strong className="text-[var(--color-text)]"> Phantom</strong> for Solana DeFi.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Best for Beginners</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-text)]">Exodus</strong> for the most intuitive interface.
              <strong className="text-[var(--color-text)]"> Coinbase Wallet</strong> for easy Coinbase integration.
            </p>
          </div>
        </div>
      </section>
      <RelatedContent category="tools" currentSlug="/wallets/tools/wallet-comparison" />
    </div>
  );
}
