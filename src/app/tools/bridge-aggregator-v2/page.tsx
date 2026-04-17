'use client';

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

// ── Types ────────────────────────────────────────────────────────────────────
interface Bridge {
  id: string;
  name: string;
  tvl: number;
  volume7d: number;
  volume30d: number;
  gasEstimate: number;
  fees: number;
  estimatedTime: number;
  securityScore: number;
  auditStatus: string;
  exploitHistory: number;
  trustRating: "excellent" | "good" | "fair" | "poor";
  supportedChains: string[];
}

interface Chain {
  id: string;
  name: string;
  gasPrice: number; // in gwei
  gasPriceUsd: number;
  avgBlockTime: number;
}

interface Route {
  bridgeId: string;
  sourceBridge: Bridge;
  gasEstimate: number;
  totalFee: number;
  estimatedTime: number;
  savings: number;
  recommended: boolean;
}

// ── Mock Data ────────────────────────────────────────────────────────────────
const CHAINS: Chain[] = [
  { id: "ethereum", name: "Ethereum", gasPrice: 45, gasPriceUsd: 1.80, avgBlockTime: 12 },
  { id: "arbitrum", name: "Arbitrum", gasPrice: 0.5, gasPriceUsd: 0.02, avgBlockTime: 0.25 },
  { id: "optimism", name: "Optimism", gasPrice: 1.2, gasPriceUsd: 0.048, avgBlockTime: 2 },
  { id: "polygon", name: "Polygon", gasPrice: 35, gasPriceUsd: 0.021, avgBlockTime: 2 },
  { id: "bsc", name: "BSC", gasPrice: 5, gasPriceUsd: 0.15, avgBlockTime: 3 },
  { id: "avalanche", name: "Avalanche", gasPrice: 25, gasPriceUsd: 0.50, avgBlockTime: 2 },
  { id: "base", name: "Base", gasPrice: 0.8, gasPriceUsd: 0.032, avgBlockTime: 2 },
  { id: "zksync", name: "zkSync", gasPrice: 0.3, gasPriceUsd: 0.012, avgBlockTime: 1 },
  { id: "scroll", name: "Scroll", gasPrice: 1.5, gasPriceUsd: 0.06, avgBlockTime: 15 },
  { id: "linea", name: "Linea", gasPrice: 2.0, gasPriceUsd: 0.08, avgBlockTime: 12 },
];

const BRIDGES: Bridge[] = [
  {
    id: "stargate",
    name: "Stargate Finance",
    tvl: 2450000000,
    volume7d: 1200000000,
    volume30d: 4800000000,
    gasEstimate: 250000,
    fees: 0.025,
    estimatedTime: 5,
    securityScore: 96,
    auditStatus: "Audited (Trail of Bits)",
    exploitHistory: 0,
    trustRating: "excellent",
    supportedChains: ["ethereum", "arbitrum", "optimism", "polygon", "avalanche", "base"],
  },
  {
    id: "across",
    name: "Across Protocol",
    tvl: 1850000000,
    volume7d: 950000000,
    volume30d: 3600000000,
    gasEstimate: 180000,
    fees: 0.02,
    estimatedTime: 3,
    securityScore: 94,
    auditStatus: "Audited (OpenZeppelin)",
    exploitHistory: 0,
    trustRating: "excellent",
    supportedChains: ["ethereum", "arbitrum", "optimism", "polygon", "bsc"],
  },
  {
    id: "hop",
    name: "Hop Exchange",
    tvl: 1200000000,
    volume7d: 580000000,
    volume30d: 2100000000,
    gasEstimate: 200000,
    fees: 0.03,
    estimatedTime: 4,
    securityScore: 92,
    auditStatus: "Audited (Trail of Bits)",
    exploitHistory: 0,
    trustRating: "excellent",
    supportedChains: ["ethereum", "arbitrum", "optimism", "polygon", "gnosis"],
  },
  {
    id: "synapse",
    name: "Synapse Protocol",
    tvl: 980000000,
    volume7d: 420000000,
    volume30d: 1600000000,
    gasEstimate: 220000,
    fees: 0.035,
    estimatedTime: 5,
    securityScore: 89,
    auditStatus: "Audited (Certora)",
    exploitHistory: 0,
    trustRating: "good",
    supportedChains: ["ethereum", "arbitrum", "optimism", "polygon", "avalanche", "bsc", "base"],
  },
  {
    id: "celer",
    name: "Celer Network",
    tvl: 850000000,
    volume7d: 320000000,
    volume30d: 1200000000,
    gasEstimate: 150000,
    fees: 0.015,
    estimatedTime: 3,
    securityScore: 90,
    auditStatus: "Audited (Trail of Bits)",
    exploitHistory: 0,
    trustRating: "excellent",
    supportedChains: ["ethereum", "arbitrum", "optimism", "polygon", "bsc", "avalanche", "base"],
  },
  {
    id: "wormhole",
    name: "Wormhole",
    tvl: 2100000000,
    volume7d: 780000000,
    volume30d: 3200000000,
    gasEstimate: 280000,
    fees: 0.04,
    estimatedTime: 6,
    securityScore: 87,
    auditStatus: "Audited (OtherSide)",
    exploitHistory: 1,
    trustRating: "good",
    supportedChains: ["ethereum", "arbitrum", "optimism", "polygon", "bsc", "avalanche", "base", "zksync"],
  },
  {
    id: "layerzero",
    name: "LayerZero",
    tvl: 1650000000,
    volume7d: 620000000,
    volume30d: 2450000000,
    gasEstimate: 240000,
    fees: 0.022,
    estimatedTime: 4,
    securityScore: 91,
    auditStatus: "Audited (Veridise)",
    exploitHistory: 0,
    trustRating: "excellent",
    supportedChains: ["ethereum", "arbitrum", "optimism", "polygon", "bsc", "avalanche", "base"],
  },
  {
    id: "debridge",
    name: "deBridge",
    tvl: 720000000,
    volume7d: 280000000,
    volume30d: 950000000,
    gasEstimate: 190000,
    fees: 0.018,
    estimatedTime: 4,
    securityScore: 88,
    auditStatus: "Audited (Certora)",
    exploitHistory: 0,
    trustRating: "good",
    supportedChains: ["ethereum", "arbitrum", "optimism", "polygon", "bsc", "base", "zksync"],
  },
  {
    id: "orbiter",
    name: "Orbiter Finance",
    tvl: 580000000,
    volume7d: 210000000,
    volume30d: 750000000,
    gasEstimate: 120000,
    fees: 0.01,
    estimatedTime: 2,
    securityScore: 85,
    auditStatus: "Not Audited",
    exploitHistory: 0,
    trustRating: "fair",
    supportedChains: ["ethereum", "arbitrum", "optimism", "polygon", "zksync", "linea"],
  },
  {
    id: "connext",
    name: "Connext",
    tvl: 620000000,
    volume7d: 240000000,
    volume30d: 890000000,
    gasEstimate: 160000,
    fees: 0.016,
    estimatedTime: 3,
    securityScore: 86,
    auditStatus: "Audited (Trail of Bits)",
    exploitHistory: 0,
    trustRating: "good",
    supportedChains: ["ethereum", "arbitrum", "optimism", "polygon", "base", "scroll"],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatNum(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
  return `$${n.toFixed(2)}`;
}

function getTrustColor(trust: string): string {
  switch (trust) {
    case "excellent": return "#10b981";
    case "good": return "#3b82f6";
    case "fair": return "#f59e0b";
    case "poor": return "#ef4444";
    default: return "#6b7280";
  }
}

function BridgeCard({ bridge, amount }: { bridge: Bridge; amount: number }) {
  return (
    <div className="glass p-5 border-l-4" style={{ borderLeftColor: getTrustColor(bridge.trustRating) }}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-[var(--color-text)] text-lg">{bridge.name}</h3>
          <div className="text-xs text-[var(--color-text-secondary)] mt-1">{bridge.supportedChains.length} chains</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-[var(--color-text)]">{bridge.fees * 100}%</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Fee</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-[var(--glass-subtle-bg)] p-3 rounded-lg">
          <div className="text-xs text-[var(--color-text-secondary)] mb-1">Gas Estimate</div>
          <div className="font-mono text-sm font-bold text-[var(--color-text)]">${((bridge.gasEstimate / 1e6) * 2.5).toFixed(2)}</div>
        </div>
        <div className="bg-[var(--glass-subtle-bg)] p-3 rounded-lg">
          <div className="text-xs text-[var(--color-text-secondary)] mb-1">Time</div>
          <div className="font-mono text-sm font-bold text-[var(--color-text)]">{bridge.estimatedTime}m</div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="text-xs font-bold text-[var(--color-text-secondary)]">Security</div>
        <div className="flex-1 h-2 rounded-full bg-[var(--glass-bg)] overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${bridge.securityScore}%`,
              background: bridge.securityScore >= 90 ? "#10b981" : bridge.securityScore >= 85 ? "#3b82f6" : "#f59e0b",
            }}
          />
        </div>
        <span className="text-xs font-bold text-[var(--color-text)]">{bridge.securityScore}/100</span>
      </div>

      <div className="text-xs text-[var(--color-text-secondary)]">{bridge.auditStatus}</div>
    </div>
  );
}

function GasTable({ chains, token }: { chains: Chain[]; token: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--glass-border)]">
            <th className="text-left py-3 px-4 font-bold text-[var(--color-text-secondary)]">Chain</th>
            <th className="text-right py-3 px-4 font-bold text-[var(--color-text-secondary)]">Gas (Gwei)</th>
            <th className="text-right py-3 px-4 font-bold text-[var(--color-text-secondary)]">Gas (USD)</th>
            <th className="text-center py-3 px-4 font-bold text-[var(--color-text-secondary)]">Avg Block</th>
          </tr>
        </thead>
        <tbody>
          {chains.map((chain, idx) => (
            <tr key={chain.id} className={idx % 2 === 0 ? "bg-[var(--glass-subtle-bg)]" : ""}>
              <td className="py-3 px-4 font-medium text-[var(--color-text)]">{chain.name}</td>
              <td className="text-right py-3 px-4 font-mono text-[var(--color-text)]">{chain.gasPrice.toFixed(2)}</td>
              <td className="text-right py-3 px-4 font-mono text-[var(--color-text)]">${chain.gasPriceUsd.toFixed(3)}</td>
              <td className="text-center py-3 px-4 text-[var(--color-text)]">{chain.avgBlockTime}s</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BridgeAggregatorV2Page() {
  const [activeTab, setActiveTab] = useState<"routes" | "analytics" | "gas">("routes");
  const [sourceChain, setSourceChain] = useState("ethereum");
  const [destChain, setDestChain] = useState("arbitrum");
  const [token, setToken] = useState("USDC");
  const [amount, setAmount] = useState(1000);

  const routes: Route[] = useMemo(() => {
    return BRIDGES.filter(b => b.supportedChains.includes(sourceChain) && b.supportedChains.includes(destChain))
      .map(bridge => ({
        bridgeId: bridge.id,
        sourceBridge: bridge,
        gasEstimate: bridge.gasEstimate,
        totalFee: amount * (bridge.fees / 100),
        estimatedTime: bridge.estimatedTime,
        savings: (BRIDGES.reduce((max, b) => Math.max(max, b.fees), 0) - bridge.fees) * amount,
        recommended: bridge.securityScore >= 90 && bridge.trustRating === "excellent",
      }))
      .sort((a, b) => b.recommended ? 1 : a.totalFee - b.totalFee);
  }, [sourceChain, destChain, amount]);

  const sortableAnalytics = useMemo(() => {
    return BRIDGES.map(b => ({
      ...b,
      tvlRank: BRIDGES.reduce((count, bridge) => count + (bridge.tvl > b.tvl ? 1 : 0), 1),
    })).sort((a, b) => b.tvl - a.tvl);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "Bridge Aggregator v2" }]} />

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3 mt-8">
        Multi-Chain Bridge Aggregator v2
      </h1>
      <p className="text-[var(--color-text-secondary)] mb-10 max-w-2xl">
        Find the best routes for cross-chain transfers with real-time gas estimation, route optimization, and comprehensive bridge analytics.
      </p>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-[var(--glass-border)]">
        {[
          { id: "routes" as const, label: "Route Finder", icon: "🛣️" },
          { id: "analytics" as const, label: "Bridge Analytics", icon: "📊" },
          { id: "gas" as const, label: "Gas Estimator", icon: "⛽" },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 font-bold transition-colors ${
              activeTab === tab.id
                ? "text-[var(--color-text)] border-b-2 border-[#3b82f6]"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* ROUTES TAB */}
      {activeTab === "routes" && (
        <div className="space-y-8">
          {/* Controls */}
          <div className="glass p-6 border-t-2 border-[#3b82f6]">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">Route Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-bold uppercase text-[var(--color-text-secondary)] mb-2 block">Source Chain</label>
                <select
                  value={sourceChain}
                  onChange={(e) => setSourceChain(e.target.value)}
                  className="w-full p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] font-semibold focus:outline-none focus:border-[#3b82f6]"
                >
                  {CHAINS.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-[var(--color-text-secondary)] mb-2 block">Destination Chain</label>
                <select
                  value={destChain}
                  onChange={(e) => setDestChain(e.target.value)}
                >
                  {CHAINS.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-[var(--color-text-secondary)] mb-2 block">Token</label>
                <select
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                >
                  {["USDC", "USDT", "ETH", "DAI", "ARB", "OP"].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-[var(--color-text-secondary)] mb-2 block">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>

          {/* Best Route Recommendation */}
          {routes.length > 0 && routes[0].recommended && (
            <div className="glass p-6 border-l-4 border-[#10b981] bg-gradient-to-r from-[#0d1117] to-[#161b22]">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⭐</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-[#10b981] mb-2">Best Route Recommended</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-3">
                    {routes[0].sourceBridge.name} offers the optimal balance of security, cost, and speed for this route.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Total Cost</div>
                      <div className="font-bold text-[#10b981] text-lg">${(routes[0].totalFee + (routes[0].gasEstimate / 1e6) * 2.5).toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Time</div>
                      <div className="font-bold text-[#10b981] text-lg">{routes[0].estimatedTime}m</div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Savings</div>
                      <div className="font-bold text-[#10b981] text-lg">${routes[0].savings.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Routes Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--color-text)]">Available Routes ({routes.length})</h3>
            {routes.length === 0 ? (
              <div className="glass p-8 text-center text-[var(--color-text-secondary)]">
                No bridges support both {CHAINS.find(c => c.id === sourceChain)?.name} and {CHAINS.find(c => c.id === destChain)?.name}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {routes.map(route => <BridgeCard key={route.bridgeId} bridge={route.sourceBridge} amount={amount} />)}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ANALYTICS TAB */}
      {activeTab === "analytics" && (
        <div className="space-y-6">
          <div className="glass overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--glass-border)] bg-[var(--glass-subtle-bg)]">
                    <th className="text-left py-4 px-5 font-bold text-[var(--color-text-secondary)] text-sm">Bridge</th>
                    <th className="text-right py-4 px-5 font-bold text-[var(--color-text-secondary)] text-sm">TVL</th>
                    <th className="text-right py-4 px-5 font-bold text-[var(--color-text-secondary)] text-sm">7d Volume</th>
                    <th className="text-right py-4 px-5 font-bold text-[var(--color-text-secondary)] text-sm">30d Volume</th>
                    <th className="text-center py-4 px-5 font-bold text-[var(--color-text-secondary)] text-sm">Security</th>
                    <th className="text-left py-4 px-5 font-bold text-[var(--color-text-secondary)] text-sm">Audit</th>
                    <th className="text-center py-4 px-5 font-bold text-[var(--color-text-secondary)] text-sm">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {sortableAnalytics.map((bridge, idx) => (
                    <tr key={bridge.id} className={idx % 2 === 0 ? "bg-[var(--glass-subtle-bg)]" : ""}>
                      <td className="py-4 px-5 font-bold text-[var(--color-text)]">{bridge.name}</td>
                      <td className="text-right py-4 px-5 text-[var(--color-text)] font-mono">{formatNum(bridge.tvl)}</td>
                      <td className="text-right py-4 px-5 text-[var(--color-text)] font-mono">{formatNum(bridge.volume7d)}</td>
                      <td className="text-right py-4 px-5 text-[var(--color-text)] font-mono">{formatNum(bridge.volume30d)}</td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-2 justify-center">
                          <div className="w-20 h-2 rounded-full bg-[var(--glass-bg)] overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${bridge.securityScore}%`,
                                background: bridge.securityScore >= 90 ? "#10b981" : bridge.securityScore >= 85 ? "#3b82f6" : "#f59e0b",
                              }}
                            />
                          </div>
                          <span className="text-xs font-bold text-[var(--color-text)]">{bridge.securityScore}</span>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-xs text-[var(--color-text-secondary)]">{bridge.exploitHistory === 0 ? "✓ " : "⚠ "}{bridge.auditStatus.split("(")[0].trim()}</td>
                      <td className="py-4 px-5 text-center">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{
                            backgroundColor: getTrustColor(bridge.trustRating) + "20",
                            color: getTrustColor(bridge.trustRating),
                          }}
                        >
                          {bridge.trustRating.charAt(0).toUpperCase() + bridge.trustRating.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: "Total TVL (All Bridges)", value: formatNum(BRIDGES.reduce((sum, b) => sum + b.tvl, 0)) },
              { label: "Total 7d Volume", value: formatNum(BRIDGES.reduce((sum, b) => sum + b.volume7d, 0)) },
              { label: "Average Security Score", value: `${(BRIDGES.reduce((sum, b) => sum + b.securityScore, 0) / BRIDGES.length).toFixed(0)}/100` },
            ].map((metric, idx) => (
              <div key={idx} className="glass p-5 border-t-2 border-[#3b82f6]">
                <div className="text-sm text-[var(--color-text-secondary)] mb-1">{metric.label}</div>
                <div className="text-2xl font-bold text-[var(--color-text)]">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GAS TAB */}
      {activeTab === "gas" && (
        <div className="space-y-6">
          <div className="glass p-6 border-t-2 border-[#f59e0b]">
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Real-Time Gas Costs</h3>
            <GasTable chains={CHAINS} token={token} />
          </div>

          {/* Cost Matrix */}
          <div className="glass p-6">
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Common Route Cost Matrix (1000 USDC)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--glass-border)]">
                    <th className="text-left py-3 px-4 font-bold text-[var(--color-text-secondary)]">Route</th>
                    <th className="text-right py-3 px-4 font-bold text-[var(--color-text-secondary)]">Bridge Fee</th>
                    <th className="text-right py-3 px-4 font-bold text-[var(--color-text-secondary)]">Est. Gas</th>
                    <th className="text-right py-3 px-4 font-bold text-[var(--color-text-secondary)]">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ethereum → Arbitrum", 0.025, 250000],
                    ["Ethereum → Optimism", 0.02, 220000],
                    ["Arbitrum → Optimism", 0.015, 150000],
                    ["Polygon → Avalanche", 0.03, 180000],
                    ["BSC → Base", 0.025, 200000],
                  ].map((route, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-[var(--glass-subtle-bg)]" : ""}>
                      <td className="py-3 px-4 font-medium text-[var(--color-text)]">{route[0]}</td>
                      <td className="text-right py-3 px-4 font-mono text-[var(--color-text)]">${(1000 * (route[1] as number) / 100).toFixed(2)}</td>
                      <td className="text-right py-3 px-4 font-mono text-[var(--color-text)]">${((route[2] as number / 1e6) * 2.5).toFixed(2)}</td>
                      <td className="text-right py-3 px-4 font-mono font-bold text-[var(--color-text)]">${(1000 * (route[1] as number) / 100 + (route[2] as number / 1e6) * 2.5).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <p className="text-xs text-[var(--color-text-secondary)] mt-12 text-center">
        All data is simulated for educational purposes. Actual bridge costs and times may vary. Always verify rates before bridging.
      </p>
      <RelatedContent category="tools" currentSlug="/tools/bridge-aggregator-v2" />
    </div>
  );
}