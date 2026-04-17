"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RelatedContent from '@/components/RelatedContent';

interface TokenData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  volume24h: number;
  change24h: number;
  change7d: number;
  change30d: number;
  ath: number;
  athDate: string;
  circulatingSupply: number;
  maxSupply: number | null;
  rank: number;
  category: string;
  consensus: string;
  launchYear: number;
}

const TOKENS: Record<string, TokenData> = {
  bitcoin: {
    id: "bitcoin", name: "Bitcoin", symbol: "BTC", price: 87450, marketCap: 1720000000000,
    volume24h: 38500000000, change24h: 1.2, change7d: 4.5, change30d: 12.3,
    ath: 109000, athDate: "Jan 2025", circulatingSupply: 19650000, maxSupply: 21000000,
    rank: 1, category: "Store of Value", consensus: "Proof of Work", launchYear: 2009,
  },
  ethereum: {
    id: "ethereum", name: "Ethereum", symbol: "ETH", price: 3250, marketCap: 390000000000,
    volume24h: 18200000000, change24h: 0.8, change7d: 3.1, change30d: 8.7,
    ath: 4878, athDate: "Nov 2021", circulatingSupply: 120250000, maxSupply: null,
    rank: 2, category: "Smart Contract Platform", consensus: "Proof of Stake", launchYear: 2015,
  },
  solana: {
    id: "solana", name: "Solana", symbol: "SOL", price: 195, marketCap: 92000000000,
    volume24h: 4800000000, change24h: 2.1, change7d: 6.3, change30d: 15.2,
    ath: 295, athDate: "Jan 2025", circulatingSupply: 470000000, maxSupply: null,
    rank: 5, category: "Smart Contract Platform", consensus: "Proof of History + PoS", launchYear: 2020,
  },
  xrp: {
    id: "xrp", name: "XRP", symbol: "XRP", price: 2.45, marketCap: 140000000000,
    volume24h: 5200000000, change24h: -0.3, change7d: 1.8, change30d: 22.5,
    ath: 3.84, athDate: "Jan 2018", circulatingSupply: 57000000000, maxSupply: 100000000000,
    rank: 3, category: "Payments", consensus: "XRP Ledger Consensus", launchYear: 2012,
  },
  cardano: {
    id: "cardano", name: "Cardano", symbol: "ADA", price: 0.98, marketCap: 35000000000,
    volume24h: 1200000000, change24h: -1.2, change7d: 2.4, change30d: 18.1,
    ath: 3.09, athDate: "Sep 2021", circulatingSupply: 35700000000, maxSupply: 45000000000,
    rank: 8, category: "Smart Contract Platform", consensus: "Ouroboros PoS", launchYear: 2017,
  },
  avalanche: {
    id: "avalanche", name: "Avalanche", symbol: "AVAX", price: 42, marketCap: 17000000000,
    volume24h: 680000000, change24h: 1.5, change7d: 5.2, change30d: 10.8,
    ath: 146, athDate: "Nov 2021", circulatingSupply: 405000000, maxSupply: 720000000,
    rank: 12, category: "Smart Contract Platform", consensus: "Avalanche Consensus", launchYear: 2020,
  },
  polkadot: {
    id: "polkadot", name: "Polkadot", symbol: "DOT", price: 8.50, marketCap: 12500000000,
    volume24h: 450000000, change24h: 0.6, change7d: 3.8, change30d: 7.9,
    ath: 55, athDate: "Nov 2021", circulatingSupply: 1470000000, maxSupply: null,
    rank: 14, category: "Interoperability", consensus: "Nominated PoS", launchYear: 2020,
  },
  chainlink: {
    id: "chainlink", name: "Chainlink", symbol: "LINK", price: 18.50, marketCap: 11800000000,
    volume24h: 520000000, change24h: 0.9, change7d: 4.1, change30d: 9.3,
    ath: 52.88, athDate: "May 2021", circulatingSupply: 638000000, maxSupply: 1000000000,
    rank: 15, category: "Oracle", consensus: "Oracle Network", launchYear: 2017,
  },
};

const TOKEN_LIST = Object.values(TOKENS);

function formatNum(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  return `$${n.toLocaleString()}`;
}

function formatSupply(n: number): string {
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
  return n.toLocaleString();
}

function PctBadge({ value }: { value: number }) {
  const color = value >= 0 ? "text-green-400" : "text-red-400";
  return <span className={`font-mono font-bold ${color}`}>{value >= 0 ? "+" : ""}{value.toFixed(1)}%</span>;
}

function ComparisonBar({ labelA, labelB, valueA, valueB }: { labelA: string; labelB: string; valueA: number; valueB: number }) {
  const total = valueA + valueB;
  const pctA = total > 0 ? (valueA / total) * 100 : 50;
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mb-1">
        <span>{labelA}</span>
        <span>{labelB}</span>
      </div>
      <div className="h-3 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] overflow-hidden flex">
        <div
          className="h-full rounded-l-full transition-all duration-500"
          style={{ width: `${pctA}%`, background: "linear-gradient(90deg, #6366f1, #818cf8)" }}
        />
        <div
          className="h-full rounded-r-full transition-all duration-500"
          style={{ width: `${100 - pctA}%`, background: "linear-gradient(90deg, #06b6d4, #22d3ee)" }}
        />
      </div>
    </div>
  );
}

export default function TokenComparePage() {
  const [tokenA, setTokenA] = useState<TokenData>(TOKENS.bitcoin);
  const [tokenB, setTokenB] = useState<TokenData>(TOKENS.ethereum);

  const rows: { label: string; a: React.ReactNode; b: React.ReactNode; bar?: boolean; rawA?: number; rawB?: number }[] = [
    { label: "Price", a: `$${tokenA.price.toLocaleString()}`, b: `$${tokenB.price.toLocaleString()}` },
    { label: "Market Cap", a: formatNum(tokenA.marketCap), b: formatNum(tokenB.marketCap), bar: true, rawA: tokenA.marketCap, rawB: tokenB.marketCap },
    { label: "24h Volume", a: formatNum(tokenA.volume24h), b: formatNum(tokenB.volume24h), bar: true, rawA: tokenA.volume24h, rawB: tokenB.volume24h },
    { label: "24h Change", a: <PctBadge value={tokenA.change24h} />, b: <PctBadge value={tokenB.change24h} /> },
    { label: "7d Change", a: <PctBadge value={tokenA.change7d} />, b: <PctBadge value={tokenB.change7d} /> },
    { label: "30d Change", a: <PctBadge value={tokenA.change30d} />, b: <PctBadge value={tokenB.change30d} /> },
    { label: "All-Time High", a: `$${tokenA.ath.toLocaleString()} (${tokenA.athDate})`, b: `$${tokenB.ath.toLocaleString()} (${tokenB.athDate})` },
    { label: "ATH Distance", a: <PctBadge value={-((1 - tokenA.price / tokenA.ath) * 100)} />, b: <PctBadge value={-((1 - tokenB.price / tokenB.ath) * 100)} /> },
    { label: "Rank", a: `#${tokenA.rank}`, b: `#${tokenB.rank}` },
    { label: "Circulating Supply", a: formatSupply(tokenA.circulatingSupply), b: formatSupply(tokenB.circulatingSupply) },
    { label: "Max Supply", a: tokenA.maxSupply ? formatSupply(tokenA.maxSupply) : "Unlimited", b: tokenB.maxSupply ? formatSupply(tokenB.maxSupply) : "Unlimited" },
    { label: "Category", a: tokenA.category, b: tokenB.category },
    { label: "Consensus", a: tokenA.consensus, b: tokenB.consensus },
    { label: "Launch Year", a: String(tokenA.launchYear), b: String(tokenB.launchYear) },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-8">
        <Link href="/" className="hover:text-[var(--color-text)]">Home</Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-[var(--color-text)]">Tools</Link>
        <span>/</span>
        <span className="text-[var(--color-text)]">Token Compare</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">
        Token Comparison Tool
      </h1>
      <p className="text-[var(--color-text-secondary)] mb-10 max-w-2xl">
        Compare any two cryptocurrencies side-by-side. Analyze market cap, price performance, supply dynamics, and fundamental differences.
      </p>

      {/* Token Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {[{ token: tokenA, setter: setTokenA, label: "Token A", color: "#6366f1" }, { token: tokenB, setter: setTokenB, label: "Token B", color: "#06b6d4" }].map(({ token, setter, label, color }) => (
          <div key={label} className="glass p-5" style={{ borderTop: `3px solid ${color}` }}>
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-3 block">
              {label}
            </label>
            <select
              value={token.id}
              onChange={(e) => setter(TOKENS[e.target.value])}
              className="w-full p-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] text-lg font-semibold focus:outline-none focus:border-[var(--color-primary)]"
            >
              {TOKEN_LIST.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.symbol})
                </option>
              ))}
            </select>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-2xl font-bold text-[var(--color-text)]">${token.price.toLocaleString()}</span>
              <PctBadge value={token.change24h} />
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="glass overflow-hidden">
        <div className="grid grid-cols-[1fr_1.2fr_1.2fr] text-sm font-bold uppercase tracking-wider text-[var(--color-text-secondary)] border-b border-[var(--glass-border)] px-5 py-3">
          <span>Metric</span>
          <span className="text-center" style={{ color: "#818cf8" }}>{tokenA.symbol}</span>
          <span className="text-center" style={{ color: "#22d3ee" }}>{tokenB.symbol}</span>
        </div>
        {rows.map((row, i) => (
          <div key={row.label}>
            <div className={`grid grid-cols-[1fr_1.2fr_1.2fr] px-5 py-3 items-center ${i % 2 === 0 ? "bg-[var(--glass-subtle-bg)]" : ""}`}>
              <span className="text-sm font-medium text-[var(--color-text-secondary)]">{row.label}</span>
              <span className="text-sm text-center font-semibold text-[var(--color-text)]">{row.a}</span>
              <span className="text-sm text-center font-semibold text-[var(--color-text)]">{row.b}</span>
            </div>
            {row.bar && row.rawA !== undefined && row.rawB !== undefined && (
              <div className="px-5 pb-3">
                <ComparisonBar labelA={tokenA.symbol} labelB={tokenB.symbol} valueA={row.rawA} valueB={row.rawB} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Verdict */}
      <div className="glass p-6 mt-8">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Quick Comparison Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-[var(--glass-subtle-bg)]">
            <div className="text-[var(--color-text-secondary)] mb-1">Larger Market Cap</div>
            <div className="font-bold text-[var(--color-text)]">
              {tokenA.marketCap >= tokenB.marketCap ? `${tokenA.name} (${(tokenA.marketCap / tokenB.marketCap).toFixed(1)}x)` : `${tokenB.name} (${(tokenB.marketCap / tokenA.marketCap).toFixed(1)}x)`}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--glass-subtle-bg)]">
            <div className="text-[var(--color-text-secondary)] mb-1">Better 30d Performance</div>
            <div className="font-bold text-[var(--color-text)]">
              {tokenA.change30d >= tokenB.change30d ? `${tokenA.name} (+${tokenA.change30d}%)` : `${tokenB.name} (+${tokenB.change30d}%)`}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--glass-subtle-bg)]">
            <div className="text-[var(--color-text-secondary)] mb-1">Closer to ATH</div>
            <div className="font-bold text-[var(--color-text)]">
              {(tokenA.price / tokenA.ath) >= (tokenB.price / tokenB.ath) ? `${tokenA.name} (${((tokenA.price / tokenA.ath) * 100).toFixed(0)}% of ATH)` : `${tokenB.name} (${((tokenB.price / tokenB.ath) * 100).toFixed(0)}% of ATH)`}
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-[var(--color-text-secondary)] mt-6 text-center">
        Data is for educational purposes only. Prices are simulated and may not reflect current market values. Always DYOR.
      </p>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Token Compare",
              "url": "https://degen0x.com/tools/token-compare",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/token-compare" />
      </div>
  );
}
