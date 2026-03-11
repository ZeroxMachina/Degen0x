"use client";

import type { Metadata } from "next";
import { useState, useMemo } from "react";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

// Simulated lending protocol data
const LENDING_PROTOCOLS = [
  { id: "aave", name: "Aave", chain: "Ethereum", audit: "✓ Certified", tvl: 10.2, insurance: "✓", founded: "2018", color: "from-purple-500 to-indigo-500" },
  { id: "compound", name: "Compound", chain: "Ethereum", audit: "✓ Certified", tvl: 3.1, insurance: "✓", founded: "2018", color: "from-cyan-500 to-blue-500" },
  { id: "makerdao", name: "MakerDAO", chain: "Ethereum", audit: "✓ Certified", tvl: 8.5, insurance: "◐ Partial", founded: "2015", color: "from-amber-500 to-orange-500" },
  { id: "venus", name: "Venus", chain: "BSC", audit: "✓ Certified", tvl: 4.3, insurance: "○ None", founded: "2020", color: "from-blue-500 to-cyan-500" },
  { id: "benqi", name: "Benqi", chain: "Avalanche", audit: "✓ Certified", tvl: 1.8, insurance: "○ None", founded: "2021", color: "from-red-500 to-pink-500" },
  { id: "spark", name: "Spark", chain: "Ethereum", audit: "✓ Certified", tvl: 0.9, insurance: "○ None", founded: "2023", color: "from-yellow-500 to-amber-500" },
  { id: "morpho", name: "Morpho", chain: "Ethereum", audit: "✓ Certified", tvl: 2.2, insurance: "◐ Partial", founded: "2022", color: "from-green-500 to-emerald-500" },
  { id: "euler", name: "Euler", chain: "Ethereum", audit: "○ Unaudited", tvl: 0.3, insurance: "○ None", founded: "2022", color: "from-slate-500 to-gray-500" },
];

const CHAINS = ["Ethereum", "Arbitrum", "Polygon", "BSC", "Avalanche"];

const ASSETS = [
  { symbol: "ETH", name: "Ethereum", decimals: 18 },
  { symbol: "BTC", name: "Bitcoin", decimals: 8 },
  { symbol: "USDC", name: "USD Coin", decimals: 6 },
  { symbol: "USDT", name: "Tether", decimals: 6 },
  { symbol: "DAI", name: "Dai", decimals: 18 },
  { symbol: "WBTC", name: "Wrapped Bitcoin", decimals: 8 },
];

// Simulated rate data
const LENDING_RATES: Record<string, Record<string, { supplyAPY: number; borrowAPY: number; collateralFactor: number }>> = {
  aave: {
    ETH: { supplyAPY: 3.2, borrowAPY: 5.1, collateralFactor: 82.5 },
    BTC: { supplyAPY: 2.8, borrowAPY: 4.9, collateralFactor: 80.0 },
    USDC: { supplyAPY: 4.5, borrowAPY: 6.2, collateralFactor: 85.0 },
    USDT: { supplyAPY: 4.3, borrowAPY: 6.0, collateralFactor: 85.0 },
    DAI: { supplyAPY: 3.9, borrowAPY: 5.5, collateralFactor: 80.0 },
    WBTC: { supplyAPY: 2.6, borrowAPY: 4.7, collateralFactor: 78.0 },
  },
  compound: {
    ETH: { supplyAPY: 2.1, borrowAPY: 4.3, collateralFactor: 75.0 },
    BTC: { supplyAPY: 1.9, borrowAPY: 4.1, collateralFactor: 72.0 },
    USDC: { supplyAPY: 3.8, borrowAPY: 5.1, collateralFactor: 90.0 },
    USDT: { supplyAPY: 3.5, borrowAPY: 4.9, collateralFactor: 90.0 },
    DAI: { supplyAPY: 2.9, borrowAPY: 4.2, collateralFactor: 85.0 },
    WBTC: { supplyAPY: 1.7, borrowAPY: 3.9, collateralFactor: 70.0 },
  },
  makerdao: {
    ETH: { supplyAPY: 2.4, borrowAPY: 3.8, collateralFactor: 65.0 },
    BTC: { supplyAPY: 2.2, borrowAPY: 3.6, collateralFactor: 60.0 },
    USDC: { supplyAPY: 4.1, borrowAPY: 5.5, collateralFactor: 80.0 },
    USDT: { supplyAPY: 3.9, borrowAPY: 5.3, collateralFactor: 80.0 },
    DAI: { supplyAPY: 3.2, borrowAPY: 4.0, collateralFactor: 75.0 },
    WBTC: { supplyAPY: 2.0, borrowAPY: 3.4, collateralFactor: 58.0 },
  },
  venus: {
    ETH: { supplyAPY: 5.1, borrowAPY: 7.2, collateralFactor: 70.0 },
    BTC: { supplyAPY: 4.9, borrowAPY: 7.0, collateralFactor: 68.0 },
    USDC: { supplyAPY: 5.8, borrowAPY: 8.1, collateralFactor: 78.0 },
    USDT: { supplyAPY: 5.5, borrowAPY: 7.8, collateralFactor: 78.0 },
    DAI: { supplyAPY: 4.8, borrowAPY: 6.5, collateralFactor: 72.0 },
    WBTC: { supplyAPY: 4.7, borrowAPY: 6.9, collateralFactor: 66.0 },
  },
  benqi: {
    ETH: { supplyAPY: 6.2, borrowAPY: 8.3, collateralFactor: 75.0 },
    BTC: { supplyAPY: 6.0, borrowAPY: 8.1, collateralFactor: 73.0 },
    USDC: { supplyAPY: 7.1, borrowAPY: 9.2, collateralFactor: 82.0 },
    USDT: { supplyAPY: 6.8, borrowAPY: 8.9, collateralFactor: 82.0 },
    DAI: { supplyAPY: 5.9, borrowAPY: 7.5, collateralFactor: 76.0 },
    WBTC: { supplyAPY: 5.8, borrowAPY: 7.9, collateralFactor: 71.0 },
  },
  spark: {
    ETH: { supplyAPY: 2.8, borrowAPY: 4.6, collateralFactor: 80.0 },
    BTC: { supplyAPY: 2.6, borrowAPY: 4.4, collateralFactor: 77.0 },
    USDC: { supplyAPY: 4.2, borrowAPY: 6.0, collateralFactor: 86.0 },
    USDT: { supplyAPY: 4.0, borrowAPY: 5.8, collateralFactor: 86.0 },
    DAI: { supplyAPY: 3.4, borrowAPY: 4.9, collateralFactor: 81.0 },
    WBTC: { supplyAPY: 2.4, borrowAPY: 4.2, collateralFactor: 75.0 },
  },
  morpho: {
    ETH: { supplyAPY: 3.9, borrowAPY: 5.7, collateralFactor: 85.0 },
    BTC: { supplyAPY: 3.7, borrowAPY: 5.5, collateralFactor: 82.0 },
    USDC: { supplyAPY: 5.2, borrowAPY: 7.1, collateralFactor: 88.0 },
    USDT: { supplyAPY: 5.0, borrowAPY: 6.9, collateralFactor: 88.0 },
    DAI: { supplyAPY: 4.3, borrowAPY: 5.9, collateralFactor: 84.0 },
    WBTC: { supplyAPY: 3.5, borrowAPY: 5.3, collateralFactor: 80.0 },
  },
  euler: {
    ETH: { supplyAPY: 4.1, borrowAPY: 6.2, collateralFactor: 70.0 },
    BTC: { supplyAPY: 3.9, borrowAPY: 6.0, collateralFactor: 68.0 },
    USDC: { supplyAPY: 5.4, borrowAPY: 7.5, collateralFactor: 75.0 },
    USDT: { supplyAPY: 5.2, borrowAPY: 7.3, collateralFactor: 75.0 },
    DAI: { supplyAPY: 4.5, borrowAPY: 6.3, collateralFactor: 70.0 },
    WBTC: { supplyAPY: 3.7, borrowAPY: 5.8, collateralFactor: 66.0 },
  },
};

export const metadata: Metadata = {
  title: `DeFi Lending Comparison Tool | Best Rates on Aave, Compound, Morpho | ${SITE_NAME}`,
  description: `Compare lending and borrowing rates across top DeFi protocols including Aave, Compound, MakerDAO, Venus, and Morpho. Find the best APY for your crypto assets with real-time protocol analysis and risk indicators.`,
  alternates: { canonical: `${SITE_URL}/tools/lending-comparison` },
};

export default function LendingComparisonPage() {
  const [selectedAsset, setSelectedAsset] = useState<string>("ETH");
  const [selectedChain, setSelectedChain] = useState<string>("All");
  const [selectedProtocol, setSelectedProtocol] = useState<string>("All");
  const [sortColumn, setSortColumn] = useState<string>("supplyAPY");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [rateFindAmount, setRateFindAmount] = useState<string>("1");

  const filteredProtocols = useMemo(() => {
    return LENDING_PROTOCOLS.filter((p) => {
      const chainMatch = selectedChain === "All" || p.chain === selectedChain;
      const protocolMatch = selectedProtocol === "All" || p.id === selectedProtocol;
      return chainMatch && protocolMatch;
    });
  }, [selectedChain, selectedProtocol]);

  const tableData = useMemo(() => {
    const data = filteredProtocols.map((protocol) => {
      const rates = LENDING_RATES[protocol.id]?.[selectedAsset] || {
        supplyAPY: 0,
        borrowAPY: 0,
        collateralFactor: 0,
      };
      return { ...protocol, ...rates };
    });

    data.sort((a, b) => {
      const aVal = a[sortColumn as keyof typeof a];
      const bVal = b[sortColumn as keyof typeof b];
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });

    return data;
  }, [filteredProtocols, selectedAsset, sortColumn, sortDirection]);

  const bestRates = useMemo(() => {
    const protocols = LENDING_PROTOCOLS;
    const supplyRates = protocols.map((p) => ({
      protocol: p.name,
      rate: LENDING_RATES[p.id]?.[selectedAsset]?.supplyAPY || 0,
    }));
    const borrowRates = protocols.map((p) => ({
      protocol: p.name,
      rate: LENDING_RATES[p.id]?.[selectedAsset]?.borrowAPY || 0,
    }));

    const bestSupply = supplyRates.reduce((a, b) => (a.rate > b.rate ? a : b));
    const bestBorrow = borrowRates.reduce((a, b) => (a.rate > b.rate ? a : b));

    return { bestSupply, bestBorrow };
  }, [selectedAsset]);

  const riskBadge = (audit: string) => {
    if (audit.includes("Certified")) return <span className="text-green-400 text-xs font-bold">✓ SAFE</span>;
    if (audit.includes("Partial")) return <span className="text-yellow-400 text-xs font-bold">⚠ MODERATE</span>;
    return <span className="text-red-400 text-xs font-bold">⚠ UNAUDITED</span>;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Tool",
    name: "DeFi Lending Comparison Tool",
    description: "Compare lending rates across top DeFi protocols",
    url: `${SITE_URL}/tools/lending-comparison`,
    applicationCategory: "Financial",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="relative mx-auto max-w-5xl px-4 text-center">
            <div className="glass-pill inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-primary)] mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              DeFi Tools
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              <span className="gradient-text">Lending Rate Comparison</span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-6">
              Find the best supply and borrow rates across 8 major DeFi protocols. Compare APYs, TVLs, and risk profiles in real-time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="glass-pill px-3 py-1.5 text-[var(--color-text-secondary)]">📊 8 Protocols</span>
              <span className="glass-pill px-3 py-1.5 text-[var(--color-text-secondary)]">🔗 5 Chains</span>
              <span className="glass-pill px-3 py-1.5 text-[var(--color-text-secondary)]">💰 6 Major Assets</span>
            </div>
          </div>
        </section>

        {/* Best Rate Finder */}
        <section className="py-16 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="glass glass-hover p-8">
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">🎯 Best Rate Finder</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Asset</label>
                  <select
                    value={selectedAsset}
                    onChange={(e) => setSelectedAsset(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[var(--glass-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  >
                    {ASSETS.map((asset) => (
                      <option key={asset.symbol} value={asset.symbol}>
                        {asset.symbol} - {asset.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Amount</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={rateFindAmount}
                      onChange={(e) => setRateFindAmount(e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-[var(--glass-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      min="0.01"
                      step="0.1"
                    />
                    <span className="text-sm font-medium text-[var(--color-text-secondary)]">{selectedAsset}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Operation</label>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-green-500/30 transition-all">
                      Supply
                    </button>
                    <button className="flex-1 px-3 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                      Borrow
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-[var(--color-border)]">
                <div className="glass-elevated p-4">
                  <div className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1">Best Supply Rate</div>
                  <div className="text-2xl font-black text-green-400">{bestRates.bestSupply.rate.toFixed(2)}%</div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-1">{bestRates.bestSupply.protocol}</div>
                </div>

                <div className="glass-elevated p-4">
                  <div className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1">Best Borrow Rate</div>
                  <div className="text-2xl font-black text-orange-400">{bestRates.bestBorrow.rate.toFixed(2)}%</div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-1">{bestRates.bestBorrow.protocol}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="glass p-6">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Filters</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Asset</label>
                  <select
                    value={selectedAsset}
                    onChange={(e) => setSelectedAsset(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[var(--glass-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  >
                    {ASSETS.map((asset) => (
                      <option key={asset.symbol} value={asset.symbol}>
                        {asset.symbol}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Chain</label>
                  <select
                    value={selectedChain}
                    onChange={(e) => setSelectedChain(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[var(--glass-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  >
                    <option value="All">All Chains</option>
                    {CHAINS.map((chain) => (
                      <option key={chain} value={chain}>
                        {chain}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Protocol</label>
                  <select
                    value={selectedProtocol}
                    onChange={(e) => setSelectedProtocol(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[var(--glass-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  >
                    <option value="All">All Protocols</option>
                    {LENDING_PROTOCOLS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 text-xs text-[var(--color-text-secondary)]">
                Showing {tableData.length} of {LENDING_PROTOCOLS.length} protocols
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="glass overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--color-border)]">
                      <th className="px-4 py-3 text-left text-xs font-bold text-[var(--color-text-secondary)] uppercase">Protocol</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-[var(--color-text-secondary)] uppercase">Chain</th>
                      <th
                        className="px-4 py-3 text-right text-xs font-bold text-[var(--color-text-secondary)] uppercase cursor-pointer hover:text-[var(--color-text)]"
                        onClick={() => {
                          setSortColumn("supplyAPY");
                          setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                        }}
                      >
                        Supply APY {sortColumn === "supplyAPY" && (sortDirection === "asc" ? "↑" : "↓")}
                      </th>
                      <th
                        className="px-4 py-3 text-right text-xs font-bold text-[var(--color-text-secondary)] uppercase cursor-pointer hover:text-[var(--color-text)]"
                        onClick={() => {
                          setSortColumn("borrowAPY");
                          setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                        }}
                      >
                        Borrow APY {sortColumn === "borrowAPY" && (sortDirection === "asc" ? "↑" : "↓")}
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-bold text-[var(--color-text-secondary)] uppercase">Collateral Factor</th>
                      <th className="px-4 py-3 text-right text-xs font-bold text-[var(--color-text-secondary)] uppercase">Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((protocol) => (
                      <tr key={protocol.id} className="border-b border-[var(--color-border)] hover:bg-[var(--glass-bg)] transition-colors">
                        <td className="px-4 py-4">
                          <div className="font-bold text-[var(--color-text)]">{protocol.name}</div>
                          <div className="text-xs text-[var(--color-text-secondary)]">Est. {protocol.founded}</div>
                        </td>
                        <td className="px-4 py-4 text-[var(--color-text)]">{protocol.chain}</td>
                        <td className="px-4 py-4">
                          <div className="text-right">
                            <div className="text-lg font-black text-green-400">{protocol.supplyAPY.toFixed(2)}%</div>
                            <div className="w-full bg-[var(--glass-bg)] rounded h-1.5 mt-1 overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-green-500 to-emerald-500 h-full"
                                style={{ width: `${Math.min(protocol.supplyAPY * 10, 100)}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-right">
                            <div className="text-lg font-black text-orange-400">{protocol.borrowAPY.toFixed(2)}%</div>
                            <div className="w-full bg-[var(--glass-bg)] rounded h-1.5 mt-1 overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-orange-500 to-red-500 h-full"
                                style={{ width: `${Math.min(protocol.borrowAPY * 10, 100)}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="font-bold text-[var(--color-text)]">{protocol.collateralFactor.toFixed(1)}%</div>
                        </td>
                        <td className="px-4 py-4 text-right">{riskBadge(protocol.audit)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Protocol Details Cards */}
        <section className="py-16 px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">Protocol Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {LENDING_PROTOCOLS.map((protocol) => (
                <div key={protocol.id} className="glass glass-hover p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[var(--color-text)]">{protocol.name}</h3>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[var(--color-text-secondary)]">Chain:</span>
                      <span className="font-medium text-[var(--color-text)]">{protocol.chain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--color-text-secondary)]">TVL:</span>
                      <span className="font-bold text-[var(--color-text)]">${protocol.tvl}B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--color-text-secondary)]">Founded:</span>
                      <span className="font-medium text-[var(--color-text)]">{protocol.founded}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[var(--color-border)] space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-text-secondary)] text-xs">Audit:</span>
                      {riskBadge(protocol.audit)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-text-secondary)] text-xs">Insurance:</span>
                      <span className="text-xs font-bold">{protocol.insurance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 px-4 section-glass">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8">Understanding the Metrics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6">
                <h3 className="font-bold text-[var(--color-text)] mb-2">Supply APY</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Annual percentage yield earned on your supplied assets. Higher rates are better for lenders but may indicate higher risk.
                </p>
              </div>

              <div className="glass p-6">
                <h3 className="font-bold text-[var(--color-text)] mb-2">Borrow APY</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Annual percentage cost of borrowing assets. Lower rates are better for borrowers. Include fees and interest accrual.
                </p>
              </div>

              <div className="glass p-6">
                <h3 className="font-bold text-[var(--color-text)] mb-2">Collateral Factor</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  The percentage of your deposit that can be borrowed against. Higher factors mean more leverage but higher liquidation risk.
                </p>
              </div>

              <div className="glass p-6">
                <h3 className="font-bold text-[var(--color-text)] mb-2">Risk Indicators</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Combines audit status, time in market, and insurance coverage. Certified audits and insurance reduce liquidation risks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="glass glass-border p-6 text-center">
              <p className="text-xs text-[var(--color-text-secondary)]">
                This data is simulated and for educational purposes only. Always verify current rates on protocol websites before making investments.
                DeFi is experimental and carries significant risks including smart contract vulnerabilities, liquidation, and protocol failures.
                Not financial advice. Do your own research.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
