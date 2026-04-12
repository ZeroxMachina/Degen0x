"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

interface NetworkGas {
  name: string;
  symbol: string;
  slow: string;
  standard: string;
  fast: string;
  unit: string;
  avgTxCostUsd: string;
  blockTime: string;
  color: string;
}

const networks: NetworkGas[] = [
  {
    name: "Ethereum",
    symbol: "ETH",
    slow: "12",
    standard: "18",
    fast: "25",
    unit: "Gwei",
    avgTxCostUsd: "$2.50 - $15.00",
    blockTime: "~12 sec",
    color: "#627EEA",
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    slow: "30",
    standard: "50",
    fast: "80",
    unit: "Gwei",
    avgTxCostUsd: "$0.01 - $0.05",
    blockTime: "~2 sec",
    color: "#8247E5",
  },
  {
    name: "Arbitrum",
    symbol: "ETH",
    slow: "0.1",
    standard: "0.1",
    fast: "0.15",
    unit: "Gwei",
    avgTxCostUsd: "$0.10 - $0.50",
    blockTime: "~0.25 sec",
    color: "#28A0F0",
  },
  {
    name: "Optimism",
    symbol: "ETH",
    slow: "0.001",
    standard: "0.001",
    fast: "0.002",
    unit: "Gwei",
    avgTxCostUsd: "$0.05 - $0.30",
    blockTime: "~2 sec",
    color: "#FF0420",
  },
  {
    name: "Base",
    symbol: "ETH",
    slow: "0.001",
    standard: "0.001",
    fast: "0.002",
    unit: "Gwei",
    avgTxCostUsd: "$0.01 - $0.10",
    blockTime: "~2 sec",
    color: "#0052FF",
  },
  {
    name: "BNB Chain",
    symbol: "BNB",
    slow: "3",
    standard: "5",
    fast: "7",
    unit: "Gwei",
    avgTxCostUsd: "$0.05 - $0.30",
    blockTime: "~3 sec",
    color: "#F0B90B",
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
    slow: "25",
    standard: "30",
    fast: "40",
    unit: "nAVAX",
    avgTxCostUsd: "$0.02 - $0.10",
    blockTime: "~2 sec",
    color: "#E84142",
  },
  {
    name: "Solana",
    symbol: "SOL",
    slow: "0.000005",
    standard: "0.000005",
    fast: "0.00001",
    unit: "SOL",
    avgTxCostUsd: "$0.0001 - $0.01",
    blockTime: "~0.4 sec",
    color: "#9945FF",
  },
];

type SpeedFilter = "all" | "slow" | "standard" | "fast";

export default function GasFeeTrackerPage() {
  const [selectedNetwork, setSelectedNetwork] = useState<string>("all");
  const [speedFilter, setSpeedFilter] = useState<SpeedFilter>("all");

  const filteredNetworks =
    selectedNetwork === "all"
      ? networks
      : networks.filter((n) => n.name === selectedNetwork);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Tools", href: "/wallets/tools" },
          { label: "Gas Fee Tracker", href: "/wallets/tools/gas-fee-tracker" },
        ]}
      />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Gas Fee Tracker</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Track current gas fees across major blockchain networks. Use this tool to find the cheapest time
          and network for your transactions.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
            Network
          </label>
          <select
            value={selectedNetwork}
            onChange={(e) => setSelectedNetwork(e.target.value)}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          >
            <option value="all">All Networks</option>
            {networks.map((n) => (
              <option key={n.name} value={n.name}>
                {n.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
            Speed
          </label>
          <select
            value={speedFilter}
            onChange={(e) => setSpeedFilter(e.target.value as SpeedFilter)}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-[var(--color-text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          >
            <option value="all">All Speeds</option>
            <option value="slow">Slow</option>
            <option value="standard">Standard</option>
            <option value="fast">Fast</option>
          </select>
        </div>
      </div>

      {/* Network Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
        {filteredNetworks.map((network) => (
          <div
            key={network.name}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: network.color }}
              />
              <h3 className="text-lg font-semibold text-[var(--color-text)]">{network.name}</h3>
              <span className="text-xs text-[var(--color-text-secondary)] ml-auto">
                {network.symbol}
              </span>
            </div>

            <div className="space-y-3">
              {(speedFilter === "all" || speedFilter === "slow") && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[var(--color-text-secondary)]">Slow</span>
                  <span className="text-sm font-medium text-green-400">
                    {network.slow} {network.unit}
                  </span>
                </div>
              )}
              {(speedFilter === "all" || speedFilter === "standard") && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[var(--color-text-secondary)]">Standard</span>
                  <span className="text-sm font-medium text-yellow-400">
                    {network.standard} {network.unit}
                  </span>
                </div>
              )}
              {(speedFilter === "all" || speedFilter === "fast") && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[var(--color-text-secondary)]">Fast</span>
                  <span className="text-sm font-medium text-red-400">
                    {network.fast} {network.unit}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-[var(--color-text-secondary)]">Avg Tx Cost</span>
                <span className="text-xs font-medium text-[var(--color-text)]">{network.avgTxCostUsd}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[var(--color-text-secondary)]">Block Time</span>
                <span className="text-xs font-medium text-[var(--color-text)]">{network.blockTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cost Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Transaction Cost Comparison</h2>
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
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-card)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Network</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Simple Transfer</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Token Swap</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">NFT Mint</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Block Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Ethereum", transfer: "$1.50 - $8", swap: "$5 - $25", nft: "$8 - $40", block: "~12 sec" },
                { name: "Polygon", transfer: "$0.001", swap: "$0.01", nft: "$0.02", block: "~2 sec" },
                { name: "Arbitrum", transfer: "$0.05", swap: "$0.15", nft: "$0.20", block: "~0.25 sec" },
                { name: "Optimism", transfer: "$0.03", swap: "$0.10", nft: "$0.15", block: "~2 sec" },
                { name: "Base", transfer: "$0.005", swap: "$0.02", nft: "$0.03", block: "~2 sec" },
                { name: "BNB Chain", transfer: "$0.03", swap: "$0.10", nft: "$0.15", block: "~3 sec" },
                { name: "Solana", transfer: "$0.0001", swap: "$0.001", nft: "$0.002", block: "~0.4 sec" },
              ].map((row) => (
                <tr key={row.name} className="border-t border-[var(--color-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text)]">{row.name}</td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">{row.transfer}</td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">{row.swap}</td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">{row.nft}</td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">{row.block}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mt-2">
          * Costs are estimates based on typical network conditions. Actual costs vary with network congestion and token prices.
        </p>
      </section>

      {/* Tips Section */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Tips to Save on Gas Fees</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Use Layer 2 Networks</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Arbitrum, Optimism, and Base offer the same Ethereum security at a fraction of the cost.
              Bridge your assets to L2 and save 90-99% on transaction fees.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Time Your Transactions</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Ethereum gas fees are lowest during weekends and off-peak hours (UTC late night).
              Non-urgent transactions can save 50% or more by waiting for low-fee periods.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Batch Transactions</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              If you need to make multiple transactions, batch them into a single transaction using
              tools like Safe&apos;s transaction builder to pay gas only once.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Set Custom Gas Limits</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Most wallets let you set custom gas prices. For non-urgent transactions, set a lower gas
              price and wait for the network to process it during a quieter period.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
