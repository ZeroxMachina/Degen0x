'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

interface StakingAsset {
  name: string;
  symbol: string;
  baseApy: number;
  icon: string;
  color: string;
  minStake: number;
  lockPeriod: string;
}

const STAKING_ASSETS: StakingAsset[] = [
  { name: "Ethereum", symbol: "ETH", baseApy: 3.8, icon: "⟠", color: "#627eea", minStake: 0.01, lockPeriod: "Variable" },
  { name: "Solana", symbol: "SOL", baseApy: 6.5, icon: "◎", color: "#9945ff", minStake: 0.1, lockPeriod: "1 epoch (~2 days)" },
  { name: "Cardano", symbol: "ADA", baseApy: 4.2, icon: "₳", color: "#0033ad", minStake: 10, lockPeriod: "None (liquid)" },
  { name: "Polkadot", symbol: "DOT", baseApy: 11.5, icon: "●", color: "#e6007a", minStake: 1, lockPeriod: "28 days" },
  { name: "Cosmos", symbol: "ATOM", baseApy: 17.2, icon: "⚛", color: "#2e3148", minStake: 0.1, lockPeriod: "21 days" },
  { name: "Avalanche", symbol: "AVAX", baseApy: 8.2, icon: "🔺", color: "#e84142", minStake: 0.1, lockPeriod: "14 days" },
  { name: "Near", symbol: "NEAR", baseApy: 9.5, icon: "Ⓝ", color: "#00c08b", minStake: 1, lockPeriod: "2-3 days" },
  { name: "Polygon", symbol: "POL", baseApy: 4.5, icon: "⬡", color: "#8247e5", minStake: 1, lockPeriod: "3-4 days" },
];

export default function StakingRewardsPage() {
  const [selectedAsset, setSelectedAsset] = useState(STAKING_ASSETS[0]);
  const [amount, setAmount] = useState("10");
  const [tokenPrice, setTokenPrice] = useState("2000");
  const [duration, setDuration] = useState(12); // months
  const [compounding, setCompounding] = useState<"none" | "monthly" | "weekly" | "daily">("monthly");
  const [customApy, setCustomApy] = useState("");

  const apy = customApy ? parseFloat(customApy) : selectedAsset.baseApy;

  const results = useMemo(() => {
    const principal = parseFloat(amount) || 0;
    const price = parseFloat(tokenPrice) || 0;
    const principalUsd = principal * price;
    const rate = (apy || 0) / 100;
    const months = duration;

    let finalTokens: number;
    let compoundPeriods: number;

    switch (compounding) {
      case "daily":
        compoundPeriods = 365;
        break;
      case "weekly":
        compoundPeriods = 52;
        break;
      case "monthly":
        compoundPeriods = 12;
        break;
      default:
        compoundPeriods = 1;
    };

    const years = months / 12;

    if (compounding === "none") {
      finalTokens = principal * (1 + rate * years);
    } else {
      finalTokens = principal * Math.pow(1 + rate / compoundPeriods, compoundPeriods * years);
    };

    const tokensEarned = finalTokens - principal;
    const usdEarned = tokensEarned * price;
    const finalUsd = finalTokens * price;

    // Monthly breakdown
    const monthly: { month: number; tokens: number; usd: number; cumTokens: number; cumUsd: number }[] = [];
    for (let m = 1; m <= Math.min(months, 60); m++) {
      const y = m / 12;
      let cumTokens: number;
      if (compounding === "none") {
        cumTokens = principal * (1 + rate * y);
      } else {
        cumTokens = principal * Math.pow(1 + rate / compoundPeriods, compoundPeriods * y);
      };
      const earned = cumTokens - principal;
      const prevCum = m === 1 ? principal : monthly[m - 2].cumTokens;
      const monthEarned = cumTokens - prevCum;
      monthly.push({
        month: m,
        tokens: monthEarned,
        usd: monthEarned * price,
        cumTokens: earned,
        cumUsd: earned * price,
      });
    }

    return { finalTokens, tokensEarned, usdEarned, finalUsd, principalUsd, monthly };
  }, [amount, tokenPrice, apy, duration, compounding]);

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Staking Rewards Calculator" },
      ]} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Staking Rewards Calculator
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Calculate potential staking rewards for top PoS cryptocurrencies. Compare APY rates, compounding strategies, and projected earnings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Configuration */}
          <div className="lg:col-span-1 space-y-6">
            {/* Asset selector */}
            <div className="glass p-6 rounded-2xl">
              <label className="block text-sm font-semibold text-[var(--color-text)] mb-3">Select Asset</label>
              <div className="grid grid-cols-2 gap-2">
                {STAKING_ASSETS.map(asset => (
                  <button
                    key={asset.symbol}
                    onClick={() => { setSelectedAsset(asset); setCustomApy(""); }}
                    className={`p-3 rounded-xl text-left text-sm transition-all ${
                      selectedAsset.symbol === asset.symbol
                        ? "border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/10"
                        : "glass hover:bg-[var(--glass-bg)] border-2 border-transparent"
                    }`}
                  >
                    <span className="text-lg">{asset.icon}</span>
                    <div className="font-semibold text-[var(--color-text)]">{asset.symbol}</div>
                    <div className="text-xs text-green-400">{asset.baseApy}% APY</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="glass p-6 rounded-2xl space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-text)] mb-1">
                  Amount ({selectedAsset.symbol})
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
                  placeholder="0.00"
                  min="0"
                  step="any"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text)] mb-1">
                  Token Price (USD)
                </label>
                <input
                  value={tokenPrice}
                  onChange={e => setTokenPrice(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text)] mb-1">
                  Custom APY % <span className="text-[var(--color-text-secondary)] font-normal">(optional)</span>
                </label>
                <input
                  value={customApy}
                  onChange={e => setCustomApy(e.target.value)}
                  placeholder={`Default: ${selectedAsset.baseApy}%`}
                  max="1000"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text)] mb-1">
                  Duration: {duration} month{duration !== 1 ? "s" : ""}
                </label>
                <input
                  type="range"
                  value={duration}
                  onChange={e => setDuration(parseInt(e.target.value))}
                  min="1"
                  max="60"
                  className="w-full accent-[var(--color-accent)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-text-secondary)]">
                  <span>1 mo</span>
                  <span>1 yr</span>
                  <span>3 yr</span>
                  <span>5 yr</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">
                  Compounding
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(["none", "monthly", "weekly", "daily"] as const).map(c => (
                    <button
                      key={c}
                      onClick={() => setCompounding(c)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        compounding === c
                          ? "bg-[var(--color-accent)] text-[var(--color-text)]"
                          : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                      }`}
                    >
                      {c === "none" ? "None" : c.charAt(0).toUpperCase() + c.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Asset info */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3">{selectedAsset.name} Staking Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">Base APY</span>
                  <span className="text-green-400 font-semibold">{selectedAsset.baseApy}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">Min Stake</span>
                  <span className="text-[var(--color-text)]">{selectedAsset.minStake} {selectedAsset.symbol}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">Lock Period</span>
                  <span className="text-[var(--color-text)]">{selectedAsset.lockPeriod}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass p-5 rounded-2xl">
                <div className="text-xs text-[var(--color-text-secondary)] mb-1">Total Rewards</div>
                <div className="text-xl font-bold text-green-400">
                  {results.tokensEarned.toFixed(4)}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">{selectedAsset.symbol}</div>
              </div>
              <div className="glass p-5 rounded-2xl">
                <div className="text-xs text-[var(--color-text-secondary)] mb-1">USD Value</div>
                <div className="text-xl font-bold text-[var(--color-accent)]">
                  ${results.usdEarned.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">earned</div>
              </div>
              <div className="glass p-5 rounded-2xl">
                <div className="text-xs text-[var(--color-text-secondary)] mb-1">Final Balance</div>
                <div className="text-xl font-bold text-[var(--color-text)]">
                  {results.finalTokens.toFixed(4)}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">{selectedAsset.symbol}</div>
              </div>
              <div className="glass p-5 rounded-2xl">
                <div className="text-xs text-[var(--color-text-secondary)] mb-1">Total USD</div>
                <div className="text-xl font-bold text-[var(--color-text)]">
                  ${results.finalUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">final value</div>
              </div>
            </div>

            {/* Visual growth bar */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">Growth Projection</h3>
              <div className="relative h-12 rounded-xl overflow-hidden bg-[var(--glass-bg)]">
                <div
                  className="absolute inset-y-0 left-0 bg-[var(--color-accent)]/30 flex items-center px-3"
                  style={{ width: `${Math.min((results.principalUsd / results.finalUsd) * 100, 100)}%` }}
                >
                  <span className="text-xs font-semibold text-[var(--color-text)] whitespace-nowrap">
                    Principal: ${results.principalUsd.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div
                  className="absolute inset-y-0 bg-green-500/30 flex items-center justify-end px-3"
                  style={{
                    left: `${Math.min((results.principalUsd / results.finalUsd) * 100, 100)}%`,
                    width: `${100 - Math.min((results.principalUsd / results.finalUsd) * 100, 100)}%`
                  }}
                >
                  <span className="text-xs font-semibold text-green-400 whitespace-nowrap">
                    +${results.usdEarned.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-[var(--color-text-secondary)]">
                <span>Effective APY: {apy}%</span>
                <span>ROI: {results.principalUsd > 0 ? ((results.usdEarned / results.principalUsd) * 100).toFixed(2) : 0}%</span>
              </div>
            </div>

            {/* Monthly breakdown table */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">Monthly Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[var(--color-text-secondary)] border-b border-[var(--color-border)]">
                      <th className="text-left py-2 px-3">Month</th>
                      <th className="text-right py-2 px-3">Rewards ({selectedAsset.symbol})</th>
                      <th className="text-right py-2 px-3">Rewards (USD)</th>
                      <th className="text-right py-2 px-3">Cumulative ({selectedAsset.symbol})</th>
                      <th className="text-right py-2 px-3">Cumulative (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.monthly.map(row => (
                      <tr key={row.month} className="border-b border-[var(--color-border)]/30 hover:bg-[var(--glass-bg)]">
                        <td className="py-2 px-3 text-[var(--color-text)]">{row.month}</td>
                        <td className="py-2 px-3 text-right text-green-400">{row.tokens.toFixed(6)}</td>
                        <td className="py-2 px-3 text-right text-[var(--color-text-secondary)]">${row.usd.toFixed(2)}</td>
                        <td className="py-2 px-3 text-right text-[var(--color-accent)]">{row.cumTokens.toFixed(4)}</td>
                        <td className="py-2 px-3 text-right text-[var(--color-text)]">${row.cumUsd.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
              <p className="text-xs text-yellow-400/80">
                <strong>Disclaimer:</strong> Staking rewards are estimates based on current APY rates and may vary. Actual returns depend on network conditions, validator performance, and protocol changes. Token prices are volatile — past performance does not guarantee future results. This is not financial advice.
              </p>
            </div>
          </div>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Staking Rewards",
              "url": "https://degen0x.com/tools/staking-rewards",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
    </>
  );
}
