'use client';

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import RelatedContent from '@/components/RelatedContent';

type Exchange = {
  id: string;
  name: string;
  logo: string;
  makerFee: number; // base %
  takerFee: number; // base %
  makerVIP: number; // VIP/reduced %
  takerVIP: number;
  hasCashback: boolean;
  cashbackPct: number; // % of fees as rebate
  nativeToken: string | null;
  nativeDiscount: number; // % discount when paying with token
  withdrawalFee: number; // avg $ per withdrawal
  minWithdrawal: number;
  features: string[];
  affiliateBonus: string;
  affiliateUrl: string;
  color: string;
  promoText?: string;
};

const EXCHANGES: Exchange[] = [
  {
    id: "binance",
    name: "Binance",
    logo: "🔶",
    makerFee: 0.1,
    takerFee: 0.1,
    makerVIP: 0.02,
    takerVIP: 0.04,
    hasCashback: true,
    cashbackPct: 10,
    nativeToken: "BNB",
    nativeDiscount: 25,
    withdrawalFee: 1.5,
    minWithdrawal: 10,
    features: ["Spot", "Futures", "Staking", "NFT", "Launchpad"],
    affiliateBonus: "Up to 20% fee kickback",
    affiliateUrl: "/go/binance",
    color: "#F3BA2F",
    promoText: "World's largest exchange by volume",
  },
  {
    id: "coinbase",
    name: "Coinbase Advanced",
    logo: "🔵",
    makerFee: 0.4,
    takerFee: 0.6,
    makerVIP: 0.0,
    takerVIP: 0.05,
    hasCashback: false,
    cashbackPct: 0,
    nativeToken: null,
    nativeDiscount: 0,
    withdrawalFee: 2.5,
    minWithdrawal: 25,
    features: ["Spot", "Staking", "Institutional", "FDIC Insured"],
    affiliateBonus: "$10 BTC on first buy",
    affiliateUrl: "/go/coinbase",
    color: "#0052FF",
    promoText: "Best for US beginners & institutions",
  },
  {
    id: "kraken",
    name: "Kraken Pro",
    logo: "🦑",
    makerFee: 0.16,
    takerFee: 0.26,
    makerVIP: 0.0,
    takerVIP: 0.1,
    hasCashback: false,
    cashbackPct: 0,
    nativeToken: null,
    nativeDiscount: 0,
    withdrawalFee: 1.5,
    minWithdrawal: 10,
    features: ["Spot", "Futures", "Staking", "OTC", "Regulated"],
    affiliateBonus: "Fee discount tiers",
    affiliateUrl: "/go/kraken",
    color: "#5741D9",
  },
  {
    id: "bybit",
    name: "Bybit",
    logo: "🟡",
    makerFee: 0.1,
    takerFee: 0.1,
    makerVIP: 0.01,
    takerVIP: 0.03,
    hasCashback: true,
    cashbackPct: 15,
    nativeToken: "BIT",
    nativeDiscount: 10,
    withdrawalFee: 1.0,
    minWithdrawal: 10,
    features: ["Spot", "Derivatives", "Copy Trading", "Launchpad"],
    affiliateBonus: "Up to $30K bonus for new users",
    affiliateUrl: "/go/bybit",
    color: "#F7A600",
    promoText: "🔥 Up to $30,000 welcome bonus",
  },
  {
    id: "okx",
    name: "OKX",
    logo: "⬛",
    makerFee: 0.08,
    takerFee: 0.1,
    makerVIP: 0.0,
    takerVIP: 0.03,
    hasCashback: true,
    cashbackPct: 20,
    nativeToken: "OKB",
    nativeDiscount: 20,
    withdrawalFee: 1.0,
    minWithdrawal: 10,
    features: ["Spot", "Derivatives", "DEX", "Web3 Wallet", "Staking"],
    affiliateBonus: "Mystery Box + fee rebates",
    affiliateUrl: "/go/okx",
    color: "#00B4D8",
    promoText: "Lowest fees + best Web3 tools",
  },
  {
    id: "kucoin",
    name: "KuCoin",
    logo: "🟢",
    makerFee: 0.1,
    takerFee: 0.1,
    makerVIP: 0.02,
    takerVIP: 0.04,
    hasCashback: true,
    cashbackPct: 20,
    nativeToken: "KCS",
    nativeDiscount: 20,
    withdrawalFee: 1.2,
    minWithdrawal: 10,
    features: ["Spot", "Futures", "P2P", "Bots", "Lending"],
    affiliateBonus: "20% fee rebate for life",
    affiliateUrl: "/go/kucoin",
    color: "#23AF91",
  },
];

const VOLUME_PRESETS = [
  { label: "$1K/mo", value: 1000 },
  { label: "$5K/mo", value: 5000 },
  { label: "$10K/mo", value: 10000 },
  { label: "$25K/mo", value: 25000 },
  { label: "$50K/mo", value: 50000 },
  { label: "$100K/mo", value: 100000 },
];

export default function ExchangeCashbackPage() {
  const [monthlyVolume, setMonthlyVolume] = useState(10000);
  const [useNativeToken, setUseNativeToken] = useState(false);
  const [tradeType, setTradeType] = useState<"taker" | "maker" | "mixed">("mixed");
  const [sortBy, setSortBy] = useState<"savings" | "fees" | "cashback">("savings");

  const calculations = useMemo(() => {
    return EXCHANGES.map(ex => {
      let feeRate: number;
      if (tradeType === "taker") feeRate = ex.takerFee;
      else if (tradeType === "maker") feeRate = ex.makerFee;
      else feeRate = (ex.makerFee + ex.takerFee) / 2;

      let baseFees = monthlyVolume * (feeRate / 100);
      if (useNativeToken && ex.nativeToken) {
        baseFees *= (1 - ex.nativeDiscount / 100);
      };

      const cashbackAmount = ex.hasCashback ? baseFees * (ex.cashbackPct / 100) : 0;
      const netFees = baseFees - cashbackAmount;
      const annualFees = netFees * 12;
      const annualCashback = cashbackAmount * 12;

      return {
        exchange: ex,
        monthlyFees: baseFees,
        monthlyCashback: cashbackAmount,
        monthlyNet: netFees,
        annualFees,
        annualCashback,
        annualNet: annualFees,
        effectiveRate: (netFees / monthlyVolume) * 100,
      };
    }).sort((a, b) => {
      if (sortBy === "fees") return a.monthlyNet - b.monthlyNet;
      if (sortBy === "cashback") return b.monthlyCashback - a.monthlyCashback;
      return a.monthlyNet - b.monthlyNet; // savings = lowest fees
    });
  }, [monthlyVolume, useNativeToken, tradeType, sortBy]);

  const cheapest = calculations[0];
  const mostExpensive = calculations[calculations.length - 1];
  const maxSaving = mostExpensive.monthlyNet - cheapest.monthlyNet;

  const fmt = (n: number) =>
    n >= 10000 ? `$${(n / 1000).toFixed(1)}K` : `$${n.toFixed(2)}`;

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="text-sm font-semibold mb-2" style={{ color: "#818cf8" }}>
            <Link href="/tools">Tools</Link> › Exchange Fee Calculator
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "var(--color-text)" }}>
            💸 Exchange Fee & Cashback Calculator
          </h1>
          <p style={{ color: "var(--color-text-secondary)" }}>
            Find out exactly how much you&apos;re paying in fees — and how much you could save by switching exchanges.
          </p>
        </div>

        {/* Calculator Inputs */}
        <div className="glass rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ color: "var(--color-text)" }}>Your Trading Profile</h2>

          {/* Volume */}
          <div className="mb-5">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>Monthly Trading Volume</label>
              <span className="text-lg font-extrabold" style={{ color: "#6366f1" }}>{fmt(monthlyVolume)}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {VOLUME_PRESETS.map(p => (
                <button
                  key={p.value}
                  onClick={() => setMonthlyVolume(p.value)}
                  className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all"
                  style={{
                    background: monthlyVolume === p.value ? "#6366f1" : "var(--color-surface)",
                    color: monthlyVolume === p.value ? "white" : "var(--color-text-secondary)",
                    border: "1px solid",
                    borderColor: monthlyVolume === p.value ? "#6366f1" : "#30363d",
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <input
              type="range"
              min={1000}
              max={500000}
              step={1000}
              value={monthlyVolume}
              onChange={e => setMonthlyVolume(Number(e.target.value))}
              className="w-full accent-indigo-500"
            />
            <div className="flex justify-between text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
              <span>$1K</span><span>$500K</span>
            </div>
          </div>

          {/* Trade Type & Token */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>Trade Type</label>
              <div className="flex rounded-lg overflow-hidden" style={{ border: "1px solid #30363d" }}>
                {(["taker", "maker", "mixed"] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setTradeType(t)}
                    className="flex-1 py-2 text-xs font-semibold capitalize transition-all"
                    style={{
                      background: tradeType === t ? "#6366f1" : "transparent",
                      color: tradeType === t ? "white" : "var(--color-text-secondary)",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>Options</label>
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg" style={{ border: "1px solid #30363d", background: "var(--color-surface)" }}>
                <input type="checkbox" checked={useNativeToken} onChange={e => setUseNativeToken(e.target.checked)} className="w-4 h-4 accent-indigo-500" />
                <span className="text-sm" style={{ color: "var(--color-text)" }}>Use native token discounts (BNB, OKB, etc.)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Savings Alert */}
        <div className="rounded-xl p-4 mb-6" style={{ background: "#3fb95015", border: "1px solid #3fb95040" }}>
          <div className="flex items-center gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <div className="font-bold" style={{ color: "#3fb950" }}>
                You could save up to {fmt(maxSaving)}/month (${(maxSaving * 12).toFixed(0)}/year) by switching exchanges
              </div>
              <div className="text-sm mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
                Comparing {cheapest.exchange.name} vs {mostExpensive.exchange.name} at {fmt(monthlyVolume)} monthly volume
              </div>
            </div>
          </div>
        </div>

        {/* Sort */}
        <div className="flex gap-3 mb-4 items-center flex-wrap">
          <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>Sort by:</span>
          {(["savings", "cashback"] as const).map(s => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold capitalize"
              style={{
                background: sortBy === s ? "#6366f1" : "var(--color-surface)",
                color: sortBy === s ? "white" : "var(--color-text-secondary)",
                border: "1px solid",
                borderColor: sortBy === s ? "#6366f1" : "#30363d",
              }}
            >
              {s === "savings" ? "Lowest Fees" : "Most Cashback"}
            </button>
          ))}
        </div>

        {/* Results Table */}
        <div className="space-y-3 mb-10">
          {calculations.map((calc, rank) => (
            <div
              key={calc.exchange.id}
              className="rounded-2xl overflow-hidden transition-all hover:scale-[1.01]"
              style={{
                background: "var(--color-surface)",
                border: rank === 0 ? `2px solid ${calc.exchange.color}` : "1px solid #30363d",
                boxShadow: rank === 0 ? `0 4px 20px ${calc.exchange.color}20` : undefined,
              }}
            >
              <div className="p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Exchange Info */}
                  <div className="flex items-center gap-3 flex-1">
                    <div className="text-3xl">{calc.exchange.logo}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold" style={{ color: "var(--color-text)" }}>{calc.exchange.name}</span>
                        {rank === 0 && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "#3fb95020", color: "#3fb950" }}>
                            #1 CHEAPEST
                          </span>
                        )}
                      </div>
                      {calc.exchange.promoText && (
                        <div className="text-xs mt-0.5" style={{ color: calc.exchange.color }}>{calc.exchange.promoText}</div>
                      )}
                      <div className="flex gap-1 mt-1 flex-wrap">
                        {calc.exchange.features.slice(0, 3).map(f => (
                          <span key={f} className="text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--color-bg)", color: "var(--color-text-secondary)" }}>{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Fee Breakdown */}
                  <div className="grid grid-cols-3 gap-3 md:gap-6 flex-shrink-0">
                    <div className="text-center">
                      <div className="text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>Monthly Fees</div>
                      <div className="font-extrabold" style={{ color: "#f85149" }}>{fmt(calc.monthlyFees)}</div>
                      <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{calc.effectiveRate.toFixed(3)}%</div>
                    </div>
                    {calc.exchange.hasCashback ? (
                      <div className="text-center">
                        <div className="text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>Cashback</div>
                        <div className="font-extrabold" style={{ color: "#3fb950" }}>+{fmt(calc.monthlyCashback)}</div>
                        <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{calc.exchange.cashbackPct}% rebate</div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>Cashback</div>
                        <div className="font-extrabold" style={{ color: "var(--color-text-secondary)" }}>$0</div>
                        <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>None</div>
                      </div>
                    )}
                    <div className="text-center">
                      <div className="text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>Annual Net</div>
                      <div className="font-extrabold" style={{ color: "var(--color-text)" }}>{fmt(calc.annualNet)}</div>
                      <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>per year</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0">
                    <Link href={calc.exchange.affiliateUrl}
                      className="block text-center px-4 py-2 rounded-xl font-bold text-sm text-[var(--color-text)]"
                      style={{ background: calc.exchange.color }}
                    >
                      Start Trading →
                    </Link>
                    <div className="text-xs text-center mt-1" style={{ color: "var(--color-text-secondary)" }}>
                      {calc.exchange.affiliateBonus}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Education */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4" style={{ color: "var(--color-text)" }}>How to Minimize Exchange Fees</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "📊", title: "Use Limit Orders", desc: "Maker fees are typically 50-75% cheaper than taker fees. Always use limit orders when not in a rush." },
              { icon: "🪙", title: "Pay with Native Token", desc: "Holding BNB on Binance or OKB on OKX gives you up to 25% discount on all trading fees." },
              { icon: "💎", title: "Increase Your Volume", desc: "All exchanges have VIP tiers. Trading $100K+/month can drop your fee rate to near zero." },
              { icon: "💸", title: "Claim Cashback Programs", desc: "Some exchanges return 10-20% of your fees. Always check for active rebate programs." },
            ].map(tip => (
              <div key={tip.title} className="flex gap-3">
                <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "var(--color-text)" }}>{tip.title}</div>
                  <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Exchange Cashback",
              "url": "https://degen0x.com/tools/exchange-cashback",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/exchange-cashback" />
      </div>
  );
}
