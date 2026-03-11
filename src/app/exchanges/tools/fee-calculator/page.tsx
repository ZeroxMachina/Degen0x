"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

/* ── Exchange Data ─────────────────────────────────────────────────── */
const EXCHANGES = [
  {
    name: "Binance",
    slug: "binance",
    makerBase: 0.1,
    takerBase: 0.1,
    makerVIP: 0.075,
    takerVIP: 0.075,
    discountNote: "25% off with BNB",
    color: "#F3BA2F",
    logo: "🟡",
    bestFor: "Volume Traders",
    minDeposit: "$0",
    withdrawFee: "Varies by coin",
    nativeToken: "BNB",
    url: "/exchanges/binance",
  },
  {
    name: "Coinbase Advanced",
    slug: "coinbase",
    makerBase: 0.0,
    takerBase: 0.6,
    makerVIP: 0.0,
    takerVIP: 0.2,
    discountNote: "Volume-based tiers",
    color: "#0052FF",
    logo: "🔵",
    bestFor: "US Beginners",
    minDeposit: "$2",
    withdrawFee: "Free (crypto)",
    nativeToken: null,
    url: "/exchanges/coinbase",
  },
  {
    name: "Kraken Pro",
    slug: "kraken",
    makerBase: 0.16,
    takerBase: 0.26,
    makerVIP: 0.0,
    takerVIP: 0.1,
    discountNote: "$100k/mo volume unlock",
    color: "#5741D9",
    logo: "🟣",
    bestFor: "Security-First",
    minDeposit: "$10",
    withdrawFee: "0.00015 BTC",
    nativeToken: null,
    url: "/exchanges/kraken",
  },
  {
    name: "OKX",
    slug: "okx",
    makerBase: 0.08,
    takerBase: 0.1,
    makerVIP: 0.06,
    takerVIP: 0.08,
    discountNote: "OKB holding discount",
    color: "#000000",
    logo: "⚫",
    bestFor: "Derivatives",
    minDeposit: "$0",
    withdrawFee: "0.0004 BTC",
    nativeToken: "OKB",
    url: "/exchanges/okx",
  },
  {
    name: "Bybit",
    slug: "bybit",
    makerBase: 0.1,
    takerBase: 0.1,
    makerVIP: 0.06,
    takerVIP: 0.08,
    discountNote: "VIP program tiers",
    color: "#F7A600",
    logo: "🟠",
    bestFor: "Futures Trading",
    minDeposit: "$0",
    withdrawFee: "0.0002 BTC",
    nativeToken: "BIT",
    url: "/exchanges/bybit",
  },
  {
    name: "KuCoin",
    slug: "kucoin",
    makerBase: 0.1,
    takerBase: 0.1,
    makerVIP: 0.08,
    takerVIP: 0.09,
    discountNote: "20% off with KCS",
    color: "#26A17B",
    logo: "🟢",
    bestFor: "Altcoins",
    minDeposit: "$0",
    withdrawFee: "0.0004 BTC",
    nativeToken: "KCS",
    url: "/exchanges/kucoin",
  },
  {
    name: "Crypto.com",
    slug: "crypto-com",
    makerBase: 0.075,
    takerBase: 0.1,
    makerVIP: 0.04,
    takerVIP: 0.07,
    discountNote: "CRO staking discount",
    color: "#003CFF",
    logo: "🔷",
    bestFor: "Crypto Card Users",
    minDeposit: "$0",
    withdrawFee: "Free (CRO chain)",
    nativeToken: "CRO",
    url: "/exchanges/crypto-com",
  },
  {
    name: "Gemini ActiveTrader",
    slug: "gemini",
    makerBase: 0.2,
    takerBase: 0.4,
    makerVIP: 0.1,
    takerVIP: 0.25,
    discountNote: "Volume-based tiers",
    color: "#00DCFA",
    logo: "🩵",
    bestFor: "Regulated US Market",
    minDeposit: "$0",
    withdrawFee: "Free (1 withdrawal/mo)",
    nativeToken: null,
    url: "/exchanges/gemini",
  },
  {
    name: "Bitget",
    slug: "bitget",
    makerBase: 0.1,
    takerBase: 0.1,
    makerVIP: 0.04,
    takerVIP: 0.06,
    discountNote: "BGB token discount",
    color: "#00B8A8",
    logo: "🟦",
    bestFor: "Copy Trading",
    minDeposit: "$0",
    withdrawFee: "0.0002 BTC",
    nativeToken: "BGB",
    url: "/exchanges/bitget",
  },
  {
    name: "Gate.io",
    slug: "gate-io",
    makerBase: 0.1,
    takerBase: 0.1,
    makerVIP: 0.06,
    takerVIP: 0.08,
    discountNote: "20% off with GT token",
    color: "#E5C800",
    logo: "🟨",
    bestFor: "New Altcoins",
    minDeposit: "$0",
    withdrawFee: "0.0004 BTC",
    nativeToken: "GT",
    url: "/exchanges/gate-io",
  },
];

const PRESETS = [
  { label: "$500", value: 500 },
  { label: "$1K", value: 1000 },
  { label: "$5K", value: 5000 },
  { label: "$10K", value: 10000 },
  { label: "$50K", value: 50000 },
  { label: "$100K", value: 100000 },
];

const TRADE_PRESETS = [
  { label: "1/mo", value: 1 },
  { label: "10/mo", value: 10 },
  { label: "30/mo", value: 30 },
  { label: "100/mo", value: 100 },
];

function fmt(n: number) {
  if (n >= 1000) return `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (n >= 10) return `$${n.toFixed(2)}`;
  return `$${n.toFixed(4)}`;
}

function pct(n: number) {
  return `${n}%`;
}

export default function FeeCalculatorPage() {
  const [tradeAmount, setTradeAmount] = useState<string>("1000");
  const [tradesPerMonth, setTradesPerMonth] = useState<string>("10");
  const [orderType, setOrderType] = useState<"maker" | "taker">("taker");
  const [vipMode, setVipMode] = useState(false);
  const [sortKey, setSortKey] = useState<"perTrade" | "monthly" | "yearly" | "name">("perTrade");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [highlight, setHighlight] = useState<string | null>(null);

  const amount = parseFloat(tradeAmount) || 0;
  const trades = parseInt(tradesPerMonth) || 0;

  const rows = useMemo(() => {
    return EXCHANGES.map((ex) => {
      const rate = orderType === "maker"
        ? (vipMode ? ex.makerVIP : ex.makerBase)
        : (vipMode ? ex.takerVIP : ex.takerBase);
      const perTrade = amount * (rate / 100);
      const monthly = perTrade * trades;
      const yearly = monthly * 12;
      return { ...ex, rate, perTrade, monthly, yearly };
    });
  }, [amount, trades, orderType, vipMode]);

  const sorted = useMemo(() => {
    return [...rows].sort((a, b) => {
      const m = sortDir === "asc" ? 1 : -1;
      if (sortKey === "name") return m * a.name.localeCompare(b.name);
      return m * (a[sortKey] - b[sortKey]);
    });
  }, [rows, sortKey, sortDir]);

  const cheapest = sorted[0];
  const mostExpensive = sorted[sorted.length - 1];
  const maxYearly = mostExpensive?.yearly ?? 0;
  const savingsIfSwitched = maxYearly - (cheapest?.yearly ?? 0);

  function toggleSort(key: typeof sortKey) {
    if (sortKey === key) {
      setSortDir(d => d === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const SortArrow = ({ col }: { col: typeof sortKey }) =>
    sortKey === col ? (
      <span className="ml-1 opacity-70">{sortDir === "asc" ? "↑" : "↓"}</span>
    ) : (
      <span className="ml-1 opacity-20">↕</span>
    );

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Tools", href: "/exchanges/tools" },
          { label: "Fee Comparison", href: "#" },
        ]}
      />

      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Crypto Exchange Fee Comparison 2026
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
          Enter your trade size and see exactly what you&apos;d pay across all 10 major exchanges — ranked from
          cheapest to most expensive. Toggle VIP rates and see monthly + yearly cost projections side by side.
        </p>
      </div>

      {/* Controls */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-6">
        <div className="grid md:grid-cols-4 gap-6">

          {/* Trade Amount */}
          <div>
            <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
              Trade Amount (USD)
            </label>
            <input
              type="number"
              value={tradeAmount}
              onChange={(e) => setTradeAmount(e.target.value)}
              placeholder="1000"
              min="0"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-white px-4 py-2.5 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] mb-2"
            />
            <div className="flex flex-wrap gap-1.5">
              {PRESETS.map(p => (
                <button
                  key={p.value}
                  onClick={() => setTradeAmount(String(p.value))}
                  className={`text-xs px-2 py-1 rounded-md transition-colors ${
                    parseFloat(tradeAmount) === p.value
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-white"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Trades/Month */}
          <div>
            <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
              Trades / Month
            </label>
            <input
              type="number"
              value={tradesPerMonth}
              onChange={(e) => setTradesPerMonth(e.target.value)}
              placeholder="10"
              min="0"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-white px-4 py-2.5 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] mb-2"
            />
            <div className="flex flex-wrap gap-1.5">
              {TRADE_PRESETS.map(p => (
                <button
                  key={p.value}
                  onClick={() => setTradesPerMonth(String(p.value))}
                  className={`text-xs px-2 py-1 rounded-md transition-colors ${
                    parseInt(tradesPerMonth) === p.value
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-white"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Order Type */}
          <div>
            <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
              Order Type
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setOrderType("taker")}
                className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                  orderType === "taker"
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:text-white"
                }`}
              >
                Taker
              </button>
              <button
                onClick={() => setOrderType("maker")}
                className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                  orderType === "maker"
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:text-white"
                }`}
              >
                Maker
              </button>
            </div>
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
              {orderType === "taker"
                ? "Market orders — you take liquidity. Higher fees."
                : "Limit orders — you add liquidity. Lower fees."}
            </p>
          </div>

          {/* VIP Toggle */}
          <div>
            <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
              Rate Tier
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setVipMode(false)}
                className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                  !vipMode
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:text-white"
                }`}
              >
                Base
              </button>
              <button
                onClick={() => setVipMode(true)}
                className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                  vipMode
                    ? "bg-amber-500 text-white"
                    : "border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:text-white"
                }`}
              >
                ⚡ VIP
              </button>
            </div>
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
              {vipMode
                ? "VIP/discounted rates (token discount or high volume)"
                : "Standard rates for new / base-tier accounts"}
            </p>
          </div>
        </div>
      </div>

      {/* Savings Banner */}
      {amount > 0 && trades > 0 && savingsIfSwitched > 0.01 && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-6 py-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="text-sm font-bold text-emerald-400 mb-0.5">💡 Potential Savings</div>
            <div className="text-[var(--color-text-secondary)] text-sm">
              Switching from <strong className="text-white">{mostExpensive?.name}</strong> to{" "}
              <strong className="text-white">{cheapest?.name}</strong> saves you{" "}
              <strong className="text-emerald-400">{fmt(savingsIfSwitched)}/year</strong> on your current trading volume.
            </div>
          </div>
          <Link
            href={cheapest?.url ?? "/exchanges"}
            className="text-xs font-bold px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 transition-colors whitespace-nowrap"
          >
            View {cheapest?.name} →
          </Link>
        </div>
      )}

      {/* Comparison Table */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                  <button onClick={() => toggleSort("name")} className="flex items-center hover:text-white transition-colors">
                    Exchange <SortArrow col="name" />
                  </button>
                </th>
                <th className="text-center px-3 py-3 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Fee Rate
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                  <button onClick={() => toggleSort("perTrade")} className="flex items-center ml-auto hover:text-white transition-colors">
                    Per Trade <SortArrow col="perTrade" />
                  </button>
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                  <button onClick={() => toggleSort("monthly")} className="flex items-center ml-auto hover:text-white transition-colors">
                    Monthly <SortArrow col="monthly" />
                  </button>
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                  <button onClick={() => toggleSort("yearly")} className="flex items-center ml-auto hover:text-white transition-colors">
                    Yearly <SortArrow col="yearly" />
                  </button>
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Best For
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((ex, i) => {
                const isCheapest = i === 0 && sortDir === "asc" && sortKey !== "name";
                const isHighlighted = highlight === ex.slug;
                const maxYearlyLocal = sorted[sorted.length - 1].yearly;
                const barPct = maxYearlyLocal > 0 ? (ex.yearly / maxYearlyLocal) * 100 : 0;
                return (
                  <tr
                    key={ex.slug}
                    onClick={() => setHighlight(isHighlighted ? null : ex.slug)}
                    className={`border-b border-[var(--color-border)] cursor-pointer transition-colors ${
                      isHighlighted
                        ? "bg-[var(--color-primary)]/10"
                        : "hover:bg-[var(--color-bg-card-hover)]"
                    }`}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{ex.logo}</span>
                        <div>
                          <div className="font-semibold text-white flex items-center gap-2">
                            {ex.name}
                            {isCheapest && (
                              <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                CHEAPEST
                              </span>
                            )}
                          </div>
                          {ex.nativeToken && (
                            <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                              {ex.discountNote}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-center">
                      <span className={`font-mono font-bold ${
                        ex.rate === 0
                          ? "text-emerald-400"
                          : ex.rate <= 0.08
                          ? "text-green-400"
                          : ex.rate >= 0.4
                          ? "text-red-400"
                          : "text-white"
                      }`}>
                        {pct(ex.rate)}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="font-mono font-semibold text-white">{fmt(ex.perTrade)}</span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="font-mono font-semibold text-white">{fmt(ex.monthly)}</span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div>
                        <span className={`font-mono font-bold ${isCheapest ? "text-emerald-400" : "text-white"}`}>
                          {fmt(ex.yearly)}
                        </span>
                        {/* Bar */}
                        <div className="mt-1 h-1 rounded-full bg-[var(--color-bg)] overflow-hidden w-20 ml-auto">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${barPct}%`,
                              background: isCheapest ? "#10b981" : "#6366f1",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-xs text-[var(--color-text-secondary)]">{ex.bestFor}</span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <Link
                        href={ex.url}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Footer Note */}
        <div className="px-4 py-3 border-t border-[var(--color-border)] bg-[var(--color-bg)] flex flex-wrap gap-4 text-xs text-[var(--color-text-secondary)]">
          <span>
            Showing <strong className="text-white">{orderType}</strong> fees ·{" "}
            <strong className="text-white">{vipMode ? "VIP/Discounted" : "Base"}</strong> tier ·{" "}
            Based on <strong className="text-white">{amount ? `$${Number(amount).toLocaleString()}` : "$0"}</strong> trades ×{" "}
            <strong className="text-white">{trades}</strong>/mo
          </span>
          <span className="ml-auto">Click a row to highlight. Click column headers to sort.</span>
        </div>
      </div>

      {/* Detail Card for highlighted exchange */}
      {highlight && (() => {
        const ex = rows.find(r => r.slug === highlight);
        if (!ex) return null;
        return (
          <div className="rounded-2xl border-2 border-[var(--color-primary)]/40 bg-[var(--color-bg-card)] p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-2xl">{ex.logo}</span> {ex.name} — Full Breakdown
              </h3>
              <button
                onClick={() => setHighlight(null)}
                className="text-xs text-[var(--color-text-secondary)] hover:text-white"
              >
                ✕ Close
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Fee Rate", value: pct(ex.rate) },
                { label: "Per Trade", value: fmt(ex.perTrade) },
                { label: `Monthly (${trades} trades)`, value: fmt(ex.monthly) },
                { label: "Yearly Cost", value: fmt(ex.yearly) },
              ].map(item => (
                <div key={item.label} className="rounded-xl bg-[var(--color-bg)] p-4 text-center">
                  <div className="text-xl font-bold text-[var(--color-primary)] mb-1">{item.value}</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <div className="flex justify-between px-3 py-2 rounded-lg bg-[var(--color-bg)]">
                <span className="text-[var(--color-text-secondary)]">Maker Base</span>
                <span className="font-mono text-white">{ex.makerBase}%</span>
              </div>
              <div className="flex justify-between px-3 py-2 rounded-lg bg-[var(--color-bg)]">
                <span className="text-[var(--color-text-secondary)]">Taker Base</span>
                <span className="font-mono text-white">{ex.takerBase}%</span>
              </div>
              <div className="flex justify-between px-3 py-2 rounded-lg bg-[var(--color-bg)]">
                <span className="text-[var(--color-text-secondary)]">VIP Maker</span>
                <span className="font-mono text-white">{ex.makerVIP}%</span>
              </div>
              <div className="flex justify-between px-3 py-2 rounded-lg bg-[var(--color-bg)]">
                <span className="text-[var(--color-text-secondary)]">VIP Taker</span>
                <span className="font-mono text-white">{ex.takerVIP}%</span>
              </div>
              <div className="flex justify-between px-3 py-2 rounded-lg bg-[var(--color-bg)]">
                <span className="text-[var(--color-text-secondary)]">Discount</span>
                <span className="text-white text-right">{ex.discountNote}</span>
              </div>
              <div className="flex justify-between px-3 py-2 rounded-lg bg-[var(--color-bg)]">
                <span className="text-[var(--color-text-secondary)]">Best For</span>
                <span className="text-white">{ex.bestFor}</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href={ex.url}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Full {ex.name} Review →
              </Link>
            </div>
          </div>
        );
      })()}

      {/* Scenario Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {[
          {
            label: "Day Trader",
            desc: "100 trades/mo · $1,000/trade",
            amount: 1000,
            trades: 100,
            icon: "⚡",
          },
          {
            label: "Active Investor",
            desc: "30 trades/mo · $5,000/trade",
            amount: 5000,
            trades: 30,
            icon: "📈",
          },
          {
            label: "Casual Buyer",
            desc: "4 trades/mo · $500/trade",
            amount: 500,
            trades: 4,
            icon: "🧘",
          },
        ].map((scenario) => {
          const cheapestForScenario = EXCHANGES.map(ex => {
            const rate = orderType === "maker"
              ? (vipMode ? ex.makerVIP : ex.makerBase)
              : (vipMode ? ex.takerVIP : ex.takerBase);
            return {
              name: ex.name,
              yearly: scenario.amount * (rate / 100) * scenario.trades * 12,
            };
          }).sort((a, b) => a.yearly - b.yearly)[0];

          return (
            <button
              key={scenario.label}
              onClick={() => {
                setTradeAmount(String(scenario.amount));
                setTradesPerMonth(String(scenario.trades));
              }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 text-left hover:border-[var(--color-primary)]/60 transition-colors"
            >
              <div className="text-2xl mb-2">{scenario.icon}</div>
              <div className="font-bold text-white mb-1">{scenario.label}</div>
              <div className="text-xs text-[var(--color-text-secondary)] mb-3">{scenario.desc}</div>
              <div className="text-xs">
                <span className="text-emerald-400 font-semibold">Cheapest: {cheapestForScenario.name}</span>
                <span className="text-[var(--color-text-secondary)] ml-2">{fmt(cheapestForScenario.yearly)}/yr</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* SEO / Educational Content */}
      <div className="prose-crypto space-y-6 mt-6">
        <h2 className="text-2xl font-bold text-white">Which Crypto Exchange Has the Lowest Fees in 2026?</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          For most traders, <strong className="text-white">Binance</strong> (with BNB discount) and{" "}
          <strong className="text-white">OKX</strong> consistently rank as the cheapest crypto exchanges for
          standard spot trading, at 0.075% taker after discount. For US traders where Binance isn&apos;t available,{" "}
          <strong className="text-white">Coinbase Advanced</strong> offers 0% maker fees.
        </p>

        <h2 className="text-2xl font-bold text-white">Maker vs Taker Fees Explained</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          <strong className="text-white">Maker fees</strong> apply when you place a limit order that doesn&apos;t
          execute immediately — your order sits on the order book and &quot;makes&quot; liquidity. Most exchanges reward
          this with lower fees. <strong className="text-white">Taker fees</strong> apply when your order executes
          immediately against existing orders — you &quot;take&quot; liquidity. If you&apos;re always using market orders,
          you&apos;re paying the taker rate every time.
        </p>

        <h2 className="text-2xl font-bold text-white">How Much Can Fees Cost You Per Year?</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          An active trader making 100 trades/month at $1,000 each on a 0.1% taker exchange pays{" "}
          <strong className="text-white">$1,200/year</strong> in fees. Switching to a 0.06% exchange saves{" "}
          <strong className="text-white">$480/year</strong> — just by changing platforms. Use the calculator
          above to model your exact scenario.
        </p>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h3 className="text-lg font-bold text-white mb-4">Fee Reduction Strategies</h3>
          <ul className="space-y-3 text-[var(--color-text-secondary)] text-sm">
            <li className="flex gap-3">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">1.</span>
              <span><strong className="text-white">Use limit orders.</strong> Switch from market orders to limit orders to access maker rates (often 0–0.08% vs 0.1–0.6% taker).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">2.</span>
              <span><strong className="text-white">Hold the exchange&apos;s native token.</strong> BNB on Binance, KCS on KuCoin, OKB on OKX — all cut fees by 20–30%.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">3.</span>
              <span><strong className="text-white">Use the pro interface.</strong> Coinbase Advanced and Kraken Pro have dramatically lower fees than their simple buy interfaces.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">4.</span>
              <span><strong className="text-white">Increase volume to unlock tiers.</strong> Most exchanges drop fees significantly once you exceed $50k–$100k monthly volume.</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>

        {[
          {
            q: "Which crypto exchange has zero fees?",
            a: "Coinbase Advanced offers 0% maker fees on limit orders. Some exchanges run zero-fee promotions on specific pairs, but these are usually temporary. Always check that the spread (difference between buy and sell price) isn't compensating for the zero fee."
          },
          {
            q: "Do exchange fees affect my profits significantly?",
            a: "Yes — for active traders, fees are one of the largest costs. A trader making 50 trades/month at $2,000 each on a 0.1% platform pays $1,200/year. Reducing that to 0.06% saves $480 annually with no other changes."
          },
          {
            q: "Are withdrawal fees included in these calculations?",
            a: "No — this calculator covers trading fees only. Withdrawal fees vary by cryptocurrency and change frequently. Always check the exchange's current fee schedule for withdrawal costs before transferring."
          },
          {
            q: "What is the cheapest exchange for US traders?",
            a: "For US-based traders, Coinbase Advanced (0% maker, 0.6% taker at base) and Kraken Pro (0.16% maker, 0.26% taker) offer competitive rates. Binance.US is available in most US states but has limited features vs the global Binance platform."
          },
          {
            q: "Does trading volume matter for fees?",
            a: "Absolutely. Most exchanges operate a tiered fee system where higher 30-day trading volume unlocks lower rates. The VIP rates shown in this calculator represent the discounted tier available to high-volume traders or native token holders."
          },
        ].map((faq) => (
          <div key={faq.q} className="border-b border-[var(--color-border)] pb-5">
            <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      {/* Related Tools */}
      <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h3 className="text-base font-bold text-white mb-4">Related Exchange Tools</h3>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Best Crypto Exchanges", href: "/exchanges/best" },
            { label: "Profit/Loss Calculator", href: "/exchanges/tools/profit-loss-calculator" },
            { label: "DCA Calculator", href: "/tools/dca-calculator" },
            { label: "Token Screener", href: "/tools/token-screener" },
            { label: "Crypto Tax Calculator", href: "/tools/tax-calculator" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-colors"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
