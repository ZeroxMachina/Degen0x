'use client';

"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

interface Chain {
  id: string;
  name: string;
  shortName: string;
  nativeToken: string;
  avgGasGwei: number;
  gasPrice: number;
  blockTime: number;
  tvl: number;
  color: string;
}

interface Bridge {
  id: string;
  name: string;
  logo: string;
  tvl: number;
  auditStatus: "completed" | "pending" | "none";
  exploitHistory: boolean;
  trustScore: number;
  supportedChains: string[];
  avgFeePercentage: number;
  speedCategory: "fast" | "medium" | "slow";
  estimatedTime: string;
  lastAudit: string;
  auditors: string[];
}

interface RouteResult {
  bridgeId: string;
  bridgeName: string;
  sourceChain: string;
  destChain: string;
  estimatedFee: number;
  feePercentage: number;
  estimatedTime: string;
  speedCategory: string;
  trustScore: number;
  gasEstimate: number;
  securityScore: number;
  rank: number;
}

const chains: Chain[] = [
  { id: "eth", name: "Ethereum", shortName: "ETH", nativeToken: "ETH", avgGasGwei: 45.2, gasPrice: 1350, blockTime: 12, tvl: 156.8, color: "#627EEA" },
  { id: "arb", name: "Arbitrum One", shortName: "ARB", nativeToken: "ETH", avgGasGwei: 0.85, gasPrice: 25, blockTime: 0.25, tvl: 89.4, color: "#28A0F0" },
  { id: "opt", name: "Optimism", shortName: "OPT", nativeToken: "ETH", avgGasGwei: 0.42, gasPrice: 12, blockTime: 2, tvl: 76.2, color: "#FF0420" },
  { id: "base", name: "Base", shortName: "BASE", nativeToken: "ETH", avgGasGwei: 0.35, gasPrice: 10, blockTime: 2, tvl: 54.8, color: "#0052FF" },
  { id: "pol", name: "Polygon", shortName: "POL", nativeToken: "POL", avgGasGwei: 45.5, gasPrice: 90, blockTime: 2.1, tvl: 42.1, color: "#8247E5" },
  { id: "bsc", name: "BNB Smart Chain", shortName: "BSC", nativeToken: "BNB", avgGasGwei: 3.2, gasPrice: 6, blockTime: 3, tvl: 65.3, color: "#F3BA2F" },
  { id: "avax", name: "Avalanche C-Chain", shortName: "AVAX", nativeToken: "AVAX", avgGasGwei: 28.4, gasPrice: 85, blockTime: 2, tvl: 38.7, color: "#E84142" },
  { id: "sol", name: "Solana", shortName: "SOL", nativeToken: "SOL", avgGasGwei: 0.00005, gasPrice: 0.00005, blockTime: 0.4, tvl: 28.5, color: "#00D4AA" },
  { id: "zk", name: "zkSync Era", shortName: "zkSync", nativeToken: "ETH", avgGasGwei: 0.15, gasPrice: 4, blockTime: 1.5, tvl: 18.9, color: "#4E529A" },
  { id: "lin", name: "Linea", shortName: "LINEA", nativeToken: "ETH", avgGasGwei: 0.08, gasPrice: 2.4, blockTime: 12, tvl: 12.4, color: "#121212" },
  { id: "scr", name: "Scroll", shortName: "SCROLL", nativeToken: "ETH", avgGasGwei: 0.22, gasPrice: 6.5, blockTime: 3, tvl: 8.6, color: "#FFA500" },
  { id: "ftm", name: "Fantom", shortName: "FTM", nativeToken: "FTM", avgGasGwei: 145.2, gasPrice: 290, blockTime: 1, tvl: 19.2, color: "#13B0F5" },
  { id: "gno", name: "Gnosis Chain", shortName: "GNO", nativeToken: "XDAI", avgGasGwei: 8.5, gasPrice: 17, blockTime: 5, tvl: 7.3, color: "#04795B" },
  { id: "man", name: "Mantle", shortName: "MNT", nativeToken: "MNT", avgGasGwei: 0.18, gasPrice: 5.2, blockTime: 2, tvl: 11.8, color: "#FF00DC" },
  { id: "bla", name: "Blast", shortName: "BLAST", nativeToken: "ETH", avgGasGwei: 0.28, gasPrice: 8.5, blockTime: 1, tvl: 6.2, color: "#FFFF00" },
];

const bridges: Bridge[] = [
  { id: "across", name: "Across", logo: "🌉", tvl: 42.3, auditStatus: "completed", exploitHistory: false, trustScore: 9.2, supportedChains: ["eth", "arb", "opt", "base", "pol", "bsc", "avax"], avgFeePercentage: 0.05, speedCategory: "fast", estimatedTime: "15-120 sec", lastAudit: "Jan 2026", auditors: ["Trail of Bits", "OpenZeppelin"] },
  { id: "stargate", name: "Stargate Finance", logo: "⭐", tvl: 78.6, auditStatus: "completed", exploitHistory: false, trustScore: 9.1, supportedChains: ["eth", "arb", "opt", "pol", "avax", "bsc", "sol", "ftm"], avgFeePercentage: 0.08, speedCategory: "fast", estimatedTime: "10-60 sec", lastAudit: "Dec 2025", auditors: ["OpenZeppelin", "Certik"] },
  { id: "hop", name: "Hop Protocol", logo: "🐰", tvl: 18.4, auditStatus: "completed", exploitHistory: false, trustScore: 8.8, supportedChains: ["eth", "arb", "opt", "pol", "avax", "gno"], avgFeePercentage: 0.12, speedCategory: "medium", estimatedTime: "2-5 min", lastAudit: "Nov 2025", auditors: ["Trail of Bits"] },
  { id: "synapse", name: "Synapse", logo: "🔄", tvl: 35.2, auditStatus: "completed", exploitHistory: false, trustScore: 8.9, supportedChains: ["eth", "arb", "opt", "avax", "bsc", "ftm", "lin", "man"], avgFeePercentage: 0.06, speedCategory: "medium", estimatedTime: "3-10 min", lastAudit: "Feb 2026", auditors: ["OpenZeppelin", "Pessimistic"] },
  { id: "celer", name: "Celer cBridge", logo: "🌊", tvl: 25.8, auditStatus: "completed", exploitHistory: false, trustScore: 8.6, supportedChains: ["eth", "arb", "opt", "pol", "bsc", "avax", "ftm"], avgFeePercentage: 0.04, speedCategory: "fast", estimatedTime: "30-180 sec", lastAudit: "Dec 2025", auditors: ["Certik"] },
  { id: "multichain", name: "Multichain", logo: "🔗", tvl: 12.1, auditStatus: "completed", exploitHistory: true, trustScore: 6.2, supportedChains: ["eth", "arb", "pol", "avax", "bsc", "ftm"], avgFeePercentage: 0.15, speedCategory: "slow", estimatedTime: "10-30 min", lastAudit: "Aug 2025", auditors: ["Certik"] },
  { id: "wormhole", name: "Wormhole", logo: "🌌", tvl: 89.5, auditStatus: "completed", exploitHistory: false, trustScore: 8.7, supportedChains: ["eth", "arb", "opt", "pol", "avax", "sol", "bsc"], avgFeePercentage: 0.07, speedCategory: "medium", estimatedTime: "4-15 min", lastAudit: "Jan 2026", auditors: ["Trail of Bits", "Certik"] },
  { id: "layerzero", name: "LayerZero Labs", logo: "📡", tvl: 52.3, auditStatus: "completed", exploitHistory: false, trustScore: 8.9, supportedChains: ["eth", "arb", "opt", "avax", "bsc", "pol", "ftm", "man"], avgFeePercentage: 0.09, speedCategory: "medium", estimatedTime: "2-8 min", lastAudit: "Feb 2026", auditors: ["OpenZeppelin"] },
  { id: "orbiter", name: "Orbiter Finance", logo: "🚀", tvl: 14.6, auditStatus: "completed", exploitHistory: false, trustScore: 8.4, supportedChains: ["eth", "arb", "opt", "zk", "lin", "scr"], avgFeePercentage: 0.1, speedCategory: "fast", estimatedTime: "1-3 min", lastAudit: "Jan 2026", auditors: ["Certik"] },
  { id: "connext", name: "Connext", logo: "🔀", tvl: 16.9, auditStatus: "completed", exploitHistory: false, trustScore: 8.5, supportedChains: ["eth", "arb", "opt", "pol", "avax", "bsc"], avgFeePercentage: 0.11, speedCategory: "fast", estimatedTime: "1-5 min", lastAudit: "Jan 2026", auditors: ["Trail of Bits"] },
  { id: "debridge", name: "deBridge", logo: "🌉", tvl: 28.7, auditStatus: "completed", exploitHistory: false, trustScore: 8.3, supportedChains: ["eth", "arb", "opt", "pol", "bsc", "avax", "ftm", "lin"], avgFeePercentage: 0.13, speedCategory: "medium", estimatedTime: "5-20 min", lastAudit: "Jan 2026", auditors: ["Certik"] },
  { id: "axelar", name: "Axelar Network", logo: "🔗", tvl: 31.4, auditStatus: "completed", exploitHistory: false, trustScore: 8.8, supportedChains: ["eth", "arb", "pol", "avax", "bsc", "ftm"], avgFeePercentage: 0.08, speedCategory: "medium", estimatedTime: "3-12 min", lastAudit: "Feb 2026", auditors: ["OpenZeppelin", "Certik"] },
];

const popularRoutes = [
  { name: "ETH → Arbitrum", source: "eth", dest: "arb", token: "USDC" },
  { name: "Ethereum → Optimism", source: "eth", dest: "opt", token: "USDC" },
  { name: "Arbitrum → Polygon", source: "arb", dest: "pol", token: "USDC" },
  { name: "Avalanche → BSC", source: "avax", dest: "bsc", token: "USDC" },
  { name: "Ethereum → Solana", source: "eth", dest: "sol", token: "USDC" },
  { name: "Optimism → Base", source: "opt", dest: "base", token: "USDC" },
];

export default function BridgeAggregator() {
  const [sourceChain, setSourceChain] = useState<string>("eth");
  const [destChain, setDestChain] = useState<string>("arb");
  const [amount, setAmount] = useState<string>("1000");
  const [selectedToken, setSelectedToken] = useState<string>("USDC");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [expandedBridge, setExpandedBridge] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"routes" | "security" | "education">("routes");

  const tokens = ["USDC", "USDT", "ETH", "DAI", "WBTC", "MATIC", "ARB"];

  const sourceChainData = useMemo(() => chains.find((c) => c.id === sourceChain), [sourceChain]);
  const destChainData = useMemo(() => chains.find((c) => c.id === destChain), [destChain]);

  const availableBridges = useMemo(() => {
    return bridges.filter(
      (b) => b.supportedChains.includes(sourceChain) && b.supportedChains.includes(destChain)
    );
  }, [sourceChain, destChain]);

  const routes = useMemo(() => {
    if (!showResults || availableBridges.length === 0) return [];

    return availableBridges
      .map((bridge) => {
        const numAmount = parseFloat(amount) || 0;
        const baseFee = numAmount * (bridge.avgFeePercentage / 100);
        const gasCost = (sourceChainData?.gasPrice || 0) * 0.5;
        const totalFee = baseFee + gasCost;
        const feePercentage = (totalFee / numAmount) * 100;

        // Security score calculation
        let securityScore = bridge.trustScore * 10;
        if (bridge.auditStatus === "completed") securityScore += 15;
        if (!bridge.exploitHistory) securityScore += 10;

        return {
          bridgeId: bridge.id,
          bridgeName: bridge.name,
          sourceChain: sourceChain,
          destChain: destChain,
          estimatedFee: totalFee,
          feePercentage: feePercentage,
          estimatedTime: bridge.estimatedTime,
          speedCategory: bridge.speedCategory,
          trustScore: bridge.trustScore,
          gasEstimate: gasCost,
          securityScore: Math.min(securityScore, 100),
          rank: 0,
        };
      })
      .sort((a, b) => {
        // Prioritize by: security score, then fees, then speed
        if (Math.abs(a.securityScore - b.securityScore) > 5) {
          return b.securityScore - a.securityScore;
        }
        return a.estimatedFee - b.estimatedFee;
      })
      .map((route, idx) => ({ ...route, rank: idx + 1 }));
  }, [availableBridges, sourceChain, destChain, amount, showResults, sourceChainData?.gasPrice]);

  const handleQuickRoute = useCallback((source: string, dest: string) => {
    setSourceChain(source);
    setDestChain(dest);
    setShowResults(true);
  }, []);

  const averageFee = useMemo(
    () => (routes.length > 0 ? routes.reduce((sum, r) => sum + r.estimatedFee, 0) / routes.length : 0),
    [routes]
  );

  const getFeeColor = (fee: number) => {
    if (fee < averageFee * 0.7) return "text-green-400";
    if (fee > averageFee * 1.3) return "text-red-400";
    return "text-yellow-400";
  };

  const getSpeedEmoji = (speed: string) => {
    switch (speed) {
      case "fast":
        return "⚡";
      case "medium":
        return "🚀";
      default:
        return "🐢";
    }
  };

  const swapChains = useCallback(() => {
    const temp = sourceChain;
    setSourceChain(destChain);
    setDestChain(temp);
  }, [sourceChain, destChain]);

  useEffect(() => {
    if (sourceChain === destChain) {
      const nextChain = chains.find((c) => c.id !== sourceChain);
      if (nextChain) {
        setDestChain(nextChain.id);
      }
    }
  }, [sourceChain, destChain]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-[var(--color-text)] p-6">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Bridge Aggregator", href: "/tools/bridge-aggregator" },
        ]}
      />

      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Cross-Chain Bridge Aggregator
        </h1>
        <p className="text-gray-400 text-lg">
          Compare bridges, analyze routes, and find the best path for your cross-chain transfers across 15 blockchains.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left: Route Configuration */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-6 text-cyan-400">Route Builder</h2>

            {/* Source Chain */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2 text-gray-300">Source Chain</label>
              <select
                value={sourceChain}
                onChange={(e) => setSourceChain(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-[var(--color-text)] hover:border-cyan-400 transition"
              >
                {chains.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              {sourceChainData && (
                <div className="text-xs text-gray-400 mt-2">
                  <div>Gas: {sourceChainData.gasPrice} GWEI</div>
                  <div>TVL: ${sourceChainData.tvl.toFixed(1)}B</div>
                </div>
              )}
            </div>

            {/* Swap Button */}
            <button
              onClick={swapChains}
              aria-label="Swap source and destination chains"
              className="w-full bg-gray-700 hover:bg-blue-600 transition rounded-lg p-2 mb-5 text-sm font-semibold flex items-center justify-center gap-2"
            >
              ⇅ Swap Chains
            </button>

            {/* Destination Chain */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2 text-gray-300">Destination Chain</label>
              <select
                value={destChain}
                onChange={(e) => setDestChain(e.target.value)}
              >
                {chains.map((c) => (
                  <option key={c.id} value={c.id} disabled={c.id === sourceChain}>
                    {c.name}
                  </option>
                ))}
              </select>
              {destChainData && (
                <div className="text-xs text-gray-400 mt-2">
                  <div>Gas: {destChainData.gasPrice} GWEI</div>
                  <div>TVL: ${destChainData.tvl.toFixed(1)}B</div>
                </div>
              )}
            </div>

            {/* Token Selection */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2 text-gray-300">Token</label>
              <select
                value={selectedToken}
                onChange={(e) => setSelectedToken(e.target.value)}
              >
                {tokens.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-300">Amount ({selectedToken})</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1000"
                min={10}
                max={1000000}
                aria-describedby="amount-helper"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-[var(--color-text)] placeholder-gray-500 hover:border-cyan-400 transition"
              />
              <div id="amount-helper" className="text-xs text-gray-400 mt-1">Min: 10 | Max: 1,000,000</div>
            </div>

            {/* Find Routes Button */}
            <button
              onClick={() => setShowResults(true)}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[var(--color-text)] font-bold py-3 rounded-lg transition transform hover:scale-105"
            >
              Find Best Routes →
            </button>
          </div>

          {/* Popular Routes */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mt-6">
            <h3 className="text-sm font-bold mb-4 text-cyan-400">Popular Routes</h3>
            <div className="space-y-2">
              {popularRoutes.map((route, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickRoute(route.source, route.dest)}
                  className="w-full text-left bg-gray-700 hover:bg-gray-600 p-3 rounded-lg text-sm transition border border-gray-600 hover:border-cyan-400"
                >
                  {route.name} <span className="text-gray-500 text-xs">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Results and Information */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-gray-700">
            {["routes", "security", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-3 font-semibold text-sm transition ${
                  activeTab === tab
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab === "routes" && "Routes"}
                {tab === "security" && "Security"}
                {tab === "education" && "Education"}
              </button>
            ))}
          </div>

          {/* Routes Tab */}
          {activeTab === "routes" && (
            <div>
              {!showResults ? (
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
                  <div className="text-5xl mb-4">🌉</div>
                  <p className="text-gray-400">Select your route and click "Find Best Routes" to see available bridges</p>
                </div>
              ) : routes.length === 0 ? (
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
                  <p className="text-yellow-400">No bridges support this route. Try different chains.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Fee Comparison Chart */}
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="font-bold mb-4 text-cyan-400">Fee Comparison</h3>
                    <div className="space-y-3">
                      {routes.slice(0, 5).map((route) => {
                        const bridgeData = bridges.find((b) => b.id === route.bridgeId);
                        const maxFee = Math.max(...routes.map((r) => r.estimatedFee));
                        const barWidth = (route.estimatedFee / maxFee) * 100;
                        return (
                          <div key={route.bridgeId}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-semibold">{route.bridgeName}</span>
                              <span className={getFeeColor(route.estimatedFee)}>
                                ${route.estimatedFee.toFixed(2)}
                              </span>
                            </div>
                            <div className="w-full h-6 bg-gray-700 rounded-lg overflow-hidden">
                              <div
                                style={{ width: `${barWidth}%` }}
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center px-2"
                              >
                                <span className="text-xs font-bold">{route.feePercentage.toFixed(3)}%</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Route Results */}
                  <div className="space-y-3">
                    {routes.map((route) => {
                      const bridgeData = bridges.find((b) => b.id === route.bridgeId);
                      const isExpanded = expandedBridge === route.bridgeId;

                      return (
                        <div key={route.bridgeId} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden transition hover:border-cyan-400">
                          <button
                            onClick={() => setExpandedBridge(isExpanded ? null : route.bridgeId)}
                            aria-expanded={isExpanded}
                            aria-label={`View details for ${route.bridgeName} bridge`}
                            className="w-full p-4 flex items-center justify-between hover:bg-gray-750"
                          >
                            <div className="flex items-center gap-4 flex-1 text-left">
                              <div className="text-3xl">{bridgeData?.logo}</div>
                              <div className="flex-1">
                                <div className="font-bold flex items-center gap-2">
                                  {route.bridgeName}
                                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                                    Rank #{route.rank}
                                  </span>
                                </div>
                                <div className="text-sm text-gray-400">
                                  {getSpeedEmoji(route.speedCategory)} {route.estimatedTime}
                                </div>
                              </div>
                            </div>

                            <div className="text-right mr-4">
                              <div className={`text-lg font-bold ${getFeeColor(route.estimatedFee)}`}>
                                ${route.estimatedFee.toFixed(2)}
                              </div>
                              <div className="text-xs text-gray-400">{route.feePercentage.toFixed(3)}%</div>
                            </div>

                            <span className="text-2xl" aria-hidden="true">{isExpanded ? "▼" : "▶"}</span>
                          </button>

                          {isExpanded && (
                            <div className="bg-gray-750 p-4 border-t border-gray-700 space-y-3">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <div className="text-gray-400 mb-1">Security Score</div>
                                  <div className="flex items-center gap-2">
                                    <div className="text-xl font-bold text-green-400">{route.securityScore.toFixed(0)}</div>
                                    <div className="w-24 h-2 bg-gray-600 rounded-full overflow-hidden">
                                      <div
                                        style={{ width: `${route.securityScore}%` }}
                                        className="h-full bg-green-500"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-gray-400 mb-1">Trust Score</div>
                                  <div className="font-bold text-yellow-400">{route.trustScore.toFixed(1)}/10</div>
                                </div>
                                <div>
                                  <div className="text-gray-400 mb-1">Gas Estimate</div>
                                  <div className="font-bold">${route.gasEstimate.toFixed(2)}</div>
                                </div>
                                <div>
                                  <div className="text-gray-400 mb-1">Speed</div>
                                  <div className="font-bold capitalize">{route.speedCategory}</div>
                                </div>
                              </div>

                              {bridgeData && (
                                <div className="pt-3 border-t border-gray-600 text-xs">
                                  <div className="text-gray-400 mb-2">Bridge Details</div>
                                  <div className="space-y-1 text-gray-300">
                                    <div>TVL: ${bridgeData.tvl.toFixed(1)}B</div>
                                    <div>Audit: {bridgeData.auditStatus === "completed" ? "✓ " : ""}{bridgeData.auditStatus}</div>
                                    <div>Last Audit: {bridgeData.lastAudit}</div>
                                    <div>Auditors: {bridgeData.auditors.join(", ")}</div>
                                  </div>
                                </div>
                              )}

                              <button className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-2 rounded-lg font-semibold transition text-sm">
                                Use This Bridge →
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="space-y-4">
              {bridges.sort((a, b) => b.trustScore - a.trustScore).map((bridge) => (
                <div key={bridge.id} className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{bridge.logo}</div>
                      <div>
                        <div className="font-bold text-lg">{bridge.name}</div>
                        <div className="text-xs text-gray-400">TVL: ${bridge.tvl.toFixed(1)}B</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-400">{bridge.trustScore.toFixed(1)}</div>
                      <div className="text-xs text-gray-400">Trust Score</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div className="bg-gray-750 p-3 rounded-lg">
                      <div className="text-gray-400 mb-1">Audit Status</div>
                      <div className={bridge.auditStatus === "completed" ? "text-green-400 font-bold" : "text-yellow-400 font-bold"}>
                        {bridge.auditStatus === "completed" ? "✓ Completed" : "⏳ " + bridge.auditStatus}
                      </div>
                    </div>
                    <div className="bg-gray-750 p-3 rounded-lg">
                      <div className="text-gray-400 mb-1">Exploits</div>
                      <div className={bridge.exploitHistory ? "text-red-400 font-bold" : "text-green-400 font-bold"}>
                        {bridge.exploitHistory ? "⚠ Yes" : "✓ None"}
                      </div>
                    </div>
                    <div className="bg-gray-750 p-3 rounded-lg">
                      <div className="text-gray-400 mb-1">Fee</div>
                      <div className="font-bold">{bridge.avgFeePercentage.toFixed(2)}%</div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 mt-3">
                    Last Audit: {bridge.lastAudit} | Auditors: {bridge.auditors.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-6 border border-cyan-700/50">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">How Bridges Work</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Cross-chain bridges enable asset transfers between different blockchains. They typically use one of three mechanisms: liquidity pools, wrapped assets, or validator networks. When you bridge an asset, the source chain locks your tokens while the destination chain mints an equivalent representation.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Popular bridge types include automated market maker (AMM) bridges for fast swaps, liquidity pool bridges for efficient transfers, and light client bridges for security. Each has tradeoffs in speed, cost, and security.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-xl p-6 border border-yellow-700/50">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">⚠ Security Risks</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• <strong>Smart Contract Risk:</strong> Bridge contracts may have vulnerabilities. Always verify audit history.</li>
                  <li>• <strong>Validator Risk:</strong> Centralized validator sets can be compromised. Prefer bridges with multiple audited validators.</li>
                  <li>• <strong>Liquidity Risk:</strong> Insufficient liquidity can cause failed transactions or slippage.</li>
                  <li>• <strong>Custody Risk:</strong> Bridge operators may mishandle or lose user funds. Check TVL and track record.</li>
                  <li>• <strong>Exploit Risk:</strong> Even audited bridges have been exploited. Recent: Multichain (2023), Nomad (2022).</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-700/50">
                <h3 className="text-xl font-bold text-green-400 mb-3">Best Practices</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>✓ Start with small amounts to test bridge functionality</li>
                  <li>✓ Use bridges with completed security audits from reputable firms</li>
                  <li>✓ Prefer bridges with high TVL and long operational history</li>
                  <li>✓ Check recent exploit history and track recovery record</li>
                  <li>✓ Use multiple bridges for larger transfers (split risk)</li>
                  <li>✓ Always verify contract addresses before bridging</li>
                  <li>✓ Monitor bridge status pages for maintenance windows</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold mb-3">Bridge Selection Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-bold text-cyan-400 mb-2">⚡ For Speed</div>
                    <p className="text-gray-400">Choose "fast" bridges like Across or Stargate for transactions under 1 minute.</p>
                  </div>
                  <div>
                    <div className="font-bold text-green-400 mb-2">💰 For Cost</div>
                    <p className="text-gray-400">Compare fees carefully; cheaper isn't always better if security is compromised.</p>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-400 mb-2">🔒 For Security</div>
                    <p className="text-gray-400">Prioritize bridges with completed audits, high TVL, and no recent exploits.</p>
                  </div>
                  <div>
                    <div className="font-bold text-purple-400 mb-2">🎯 For Liquidity</div>
                    <p className="text-gray-400">Ensure the bridge has sufficient liquidity for your token and amount.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Bridge Aggregator",
              "url": "https://degen0x.com/tools/bridge-aggregator",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/tools/strategy-builder" style={{ color: "#fb923c", marginRight: "1rem" }}>Strategy Builder</a>
        
          <a href="/tools/portfolio-analytics" style={{ color: "#fb923c", marginRight: "1rem" }}>Portfolio Analytics</a>
        
          <a href="/tools/portfolio-heatmap" style={{ color: "#fb923c", marginRight: "1rem" }}>Portfolio Heatmap</a>
        </nav>
      <RelatedContent category="tools" currentSlug="/tools/bridge-aggregator" />
    </main>
  );
}
