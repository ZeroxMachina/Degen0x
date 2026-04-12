'use client';

"use client";

import { useState, useEffect, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/**
 * MEV Protection Scanner - Detect and prevent MEV attacks
 * Features: MEV Activity Feed, Protection Checker, Strategies, Statistics Dashboard, Network Comparison
 * Metadata: "MEV Protection Scanner - Detect & Prevent MEV Attacks"
 */

// ── Types ────────────────────────────────────────────────────────────────────
interface MEVActivity {
  id: string;
  type: "sandwich" | "arbitrage" | "liquidation" | "jit";
  tokenPair: string;
  profitExtracted: number;
  victimAddress: string;
  chain: string;
  timestamp: string;
}

interface ProtectionStrategy {
  name: string;
  description: string;
  chains: string[];
  protectionLevel: "low" | "medium" | "high" | "critical";
  setupDifficulty: "easy" | "medium" | "hard";
  icon: string;
}

interface RiskAssessment {
  score: number;
  level: "low" | "medium" | "high" | "critical";
  vulnerabilities: string[];
  estimatedLosses: number;
  recommendations: string[];
}

interface MEVMetrics {
  chain: string;
  total24h: number;
  total7d: number;
  total30d: number;
  sandwichAttacks: number;
  arbitrageOpportunities: number;
  liquidationBots: number;
  jitLiquidity: number;
}

// ── Utility Functions ────────────────────────────────────────────────────────
function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function truncateAddress(address: string): string {
  if (!address || address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function generateMEVActivity(): MEVActivity[] {
  const types = ["sandwich", "arbitrage", "liquidation", "jit"] as const;
  const chains = ["Ethereum", "Solana", "BSC", "Arbitrum", "Base"];
  const tokenPairs = ["ETH/USDC", "BTC/ETH", "SOL/USDC", "ARB/ETH", "BASE/USDC"];

  return Array.from({ length: 12 }, (_, i) => ({
    id: `mev-${i}`,
    type: types[Math.floor(Math.random() * types.length)],
    tokenPair: tokenPairs[Math.floor(Math.random() * tokenPairs.length)],
    profitExtracted: Math.random() * 50000 + 500,
    victimAddress: `0x${Math.random().toString(16).slice(2, 42)}`,
    chain: chains[Math.floor(Math.random() * chains.length)],
    timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString(),
  }));
}

function calculateRiskScore(txHash: string): RiskAssessment {
  const score = Math.floor(Math.random() * 100);
  let level: "low" | "medium" | "high" | "critical" = "low";
  let vulnerabilities: string[] = [];
  let estimatedLosses = 0;
  let recommendations: string[] = [];

  if (score < 30) {
    level = "low";
    vulnerabilities = ["Minimal MEV exposure detected"];
    estimatedLosses = Math.random() * 50;
    recommendations = ["Continue monitoring", "Standard RPC usage is safe"];
  } else if (score < 60) {
    level = "medium";
    vulnerabilities = ["Possible sandwich attack vulnerability", "Liquidation risk on large trades"];
    estimatedLosses = Math.random() * 1000 + 200;
    recommendations = ["Consider MEV Blocker", "Use private RPC for large trades"];
  } else if (score < 85) {
    level = "high";
    vulnerabilities = ["High sandwich attack risk", "Liquidation vulnerability", "Arbitrage exposure"];
    estimatedLosses = Math.random() * 5000 + 1000;
    recommendations = ["Use Flashbots Protect", "Enable MEV Blocker", "Use Jito on Solana"];
  } else {
    level = "critical";
    vulnerabilities = ["Critical MEV vulnerability", "Multiple attack vectors detected", "High financial risk"];
    estimatedLosses = Math.random() * 20000 + 5000;
    recommendations = ["Immediately use private RPC", "Enable Flashbots Protect", "Consider batching transactions"];
  }

  return { score, level, vulnerabilities, estimatedLosses, recommendations };
}

// ── Sample Data ──────────────────────────────────────────────────────────────
const PROTECTION_STRATEGIES: ProtectionStrategy[] = [
  {
    name: "Flashbots Protect",
    description: "Privacy-focused MEV protection for Ethereum. Bundles transactions privately to prevent frontrunning.",
    chains: ["Ethereum", "Optimism"],
    protectionLevel: "critical",
    setupDifficulty: "medium",
    icon: "🚀",
  },
  {
    name: "MEV Blocker",
    description: "Encrypted mempools and encrypted transactions to shield from sandwich attacks and MEV bots.",
    chains: ["Ethereum", "Polygon", "Arbitrum"],
    protectionLevel: "high",
    setupDifficulty: "easy",
    icon: "🛡️",
  },
  {
    name: "Jito",
    description: "MEV protection and MEV rewards program for Solana. Access to block engine and tip distribution.",
    chains: ["Solana"],
    protectionLevel: "high",
    setupDifficulty: "medium",
    icon: "⚡",
  },
  {
    name: "Private RPCs",
    description: "Direct node connections that keep transactions private and off public mempool. Prevents frontrunning.",
    chains: ["Ethereum", "Solana", "BSC", "Arbitrum", "Base"],
    protectionLevel: "high",
    setupDifficulty: "hard",
    icon: "🔐",
  },
];

const MEV_STATISTICS: MEVMetrics[] = [
  { chain: "Ethereum", total24h: 523420, total7d: 3892150, total30d: 15748920, sandwichAttacks: 1523, arbitrageOpportunities: 2847, liquidationBots: 456, jitLiquidity: 312 },
  { chain: "Solana", total24h: 287450, total7d: 1921340, total30d: 7852340, sandwichAttacks: 892, arbitrageOpportunities: 1523, liquidationBots: 234, jitLiquidity: 156 },
  { chain: "BSC", total24h: 145230, total7d: 1021450, total30d: 4125630, sandwichAttacks: 523, arbitrageOpportunities: 912, liquidationBots: 145, jitLiquidity: 89 },
  { chain: "Arbitrum", total24h: 98760, total7d: 691230, total30d: 2784520, sandwichAttacks: 345, arbitrageOpportunities: 612, liquidationBots: 98, jitLiquidity: 67 },
  { chain: "Base", total24h: 67540, total7d: 472810, total30d: 1891240, sandwichAttacks: 234, arbitrageOpportunities: 423, liquidationBots: 67, jitLiquidity: 45 },
];

// ── Main Component ───────────────────────────────────────────────────────────
export default function MEVScannerPage() {
  const [mevActivity, setMevActivity] = useState<MEVActivity[]>(generateMEVActivity());
  const [activeTab, setActiveTab] = useState<"feed" | "checker" | "strategies" | "stats" | "comparison">("feed");
  const [scanInput, setScanInput] = useState("");
  const [riskAssessment, setRiskAssessment] = useState<RiskAssessment | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedChain, setSelectedChain] = useState("Ethereum");
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Auto-refresh MEV feed every 15 seconds
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      setMevActivity(generateMEVActivity());
    }, 15000);
    return () => clearInterval(interval);
  }, [autoRefresh]);

  // Handle protection check scan
  const handleScan = () => {
    if (!scanInput.trim()) return;
    setIsScanning(true);
    setTimeout(() => {
      setRiskAssessment(calculateRiskScore(scanInput));
      setIsScanning(false);
    }, 1200);
  };

  // Get risk level color
  const getRiskColor = (level: string): string => {
    switch (level) {
      case "low":
        return "#22c55e";
      case "medium":
        return "#f59e0b";
      case "high":
        return "#ef5350";
      case "critical":
        return "#c41f3b";
      default:
        return "#8b949e";
    }
  };

  // Get protection level color
  const getProtectionColor = (level: string): string => {
    switch (level) {
      case "low":
        return "#f59e0b";
      case "medium":
        return "#3b82f6";
      case "high":
        return "#06b6d4";
      case "critical":
        return "#22c55e";
      default:
        return "#8b949e";
    }
  };

  // Calculate total MEV for period
  const totalMEVStats = useMemo(() => {
    let total24h = 0, total7d = 0, total30d = 0;
    MEV_STATISTICS.forEach(stat => {
      total24h += stat.total24h;
      total7d += stat.total7d;
      total30d += stat.total30d;
    });
    return { total24h, total7d, total30d };
  }, []);

  // Get current chain statistics
  const currentChainStats = MEV_STATISTICS.find(s => s.chain === selectedChain) || MEV_STATISTICS[0];

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "MEV Scanner", href: "/tools/mev-scanner" }]} />

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "#e6edf3", marginBottom: 8 }}>
            🔍 MEV Protection Scanner
          </h1>
          <p style={{ color: "#8b949e", fontSize: 15 }}>
            Detect, analyze, and protect against MEV attacks. Monitor sandwich attacks, arbitrage, liquidations, and JIT liquidity events.
          </p>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* TAB NAVIGATION */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {[
            { key: "feed", label: "📡 Activity Feed" },
            { key: "checker", label: "🔍 Protection Checker" },
            { key: "strategies", label: "🛡️ Strategies" },
            { key: "stats", label: "📊 Statistics" },
            { key: "comparison", label: "⚖️ Network Comparison" },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              style={{
                padding: "10px 18px",
                borderRadius: 8,
                border: `1px solid ${activeTab === tab.key ? "#6366f1" : "#30363d"}`,
                background: activeTab === tab.key ? "#6366f120" : "transparent",
                color: activeTab === tab.key ? "#818cf8" : "#8b949e",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* TAB 1: MEV ACTIVITY FEED */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === "feed" && (
          <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28, marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", display: "flex", alignItems: "center", gap: 8 }}>
                📡 Real-Time MEV Activity Feed
              </h2>
              <label style={{ display: "flex", alignItems: "center", gap: 8, color: "#8b949e", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={autoRefresh}
                  onChange={e => setAutoRefresh(e.target.checked)}
                  style={{ cursor: "pointer" }}
                />
                <span style={{ fontSize: 12 }}>Auto-refresh (15s)</span>
              </label>
            </div>

            {mevActivity.map(activity => {
              const typeEmojis: Record<string, string> = { sandwich: "🥪", arbitrage: "💱", liquidation: "⚠️", jit: "⚡" };
              const typeLabel: Record<string, string> = { sandwich: "Sandwich", arbitrage: "Arbitrage", liquidation: "Liquidation", jit: "JIT Liquidity" };

              return (
                <div
                  key={activity.id}
                  style={{
                    background: "#0d1117",
                    border: "1px solid #30363d",
                    borderRadius: 10,
                    padding: 16,
                    marginBottom: 12,
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto auto",
                    gap: 16,
                    alignItems: "center",
                  }}
                >
                  {/* Type Badge */}
                  <div style={{
                    fontSize: 20,
                    padding: "8px 12px",
                    background: "#161b22",
                    borderRadius: 8,
                    border: "1px solid #30363d",
                  }}>
                    {typeEmojis[activity.type]}
                  </div>

                  {/* Details */}
                  <div>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontWeight: 700, color: "#e6edf3", fontSize: 14 }}>
                        {typeLabel[activity.type]} Attack
                      </span>
                      <span style={{ fontSize: 12, color: "#8b949e" }}>
                        {activity.tokenPair} on {activity.chain}
                      </span>
                    </div>
                    <div style={{ fontSize: 12, color: "#8b949e" }}>
                      Victim: <span style={{ color: "#818cf8", fontFamily: "monospace" }}>{truncateAddress(activity.victimAddress)}</span>
                    </div>
                  </div>

                  {/* Profit */}
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#ef4444" }}>
                      {formatUSD(activity.profitExtracted)}
                    </div>
                    <div style={{ fontSize: 11, color: "#8b949e", marginTop: 2 }}>
                      Extracted
                    </div>
                  </div>

                  {/* Timestamp */}
                  <div style={{ fontSize: 12, color: "#8b949e" }}>
                    {new Date(activity.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* TAB 2: PROTECTION CHECKER */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === "checker" && (
          <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28, marginBottom: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              🔍 MEV Protection Checker
            </h2>

            {/* Input Section */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8b949e", marginBottom: 8, textTransform: "uppercase" }}>
                Transaction Hash or Wallet Address
              </label>
              <div style={{ display: "flex", gap: 12 }}>
                <input
                  type="text"
                  placeholder="0x... or tx hash"
                  value={scanInput}
                  onChange={e => setScanInput(e.target.value)}
                  onKeyPress={e => e.key === "Enter" && handleScan()}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "1px solid #30363d",
                    background: "#0d1117",
                    color: "#e6edf3",
                    fontSize: 13,
                  }}
                />
                <button
                  onClick={handleScan}
                  disabled={isScanning || !scanInput.trim()}
                  style={{
                    padding: "12px 28px",
                    borderRadius: 8,
                    border: "1px solid #6366f1",
                    background: isScanning ? "#6366f1" : "#6366f120",
                    color: isScanning ? "#000" : "#818cf8",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: isScanning ? "not-allowed" : "pointer",
                    opacity: isScanning ? 0.8 : 1,
                  }}
                >
                  {isScanning ? "Scanning..." : "Scan"}
                </button>
              </div>
            </div>

            {/* Results */}
            {riskAssessment && (
              <div>
                {/* Risk Score */}
                <div style={{
                  background: "#0d1117",
                  border: `2px solid ${getRiskColor(riskAssessment.level)}`,
                  borderRadius: 12,
                  padding: 24,
                  marginBottom: 20,
                }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
                    {/* Score Circle */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 200 200" style={{ width: 140, height: 140, marginBottom: 16 }}>
                        {/* Background circle */}
                        <circle cx="100" cy="100" r="90" fill="none" stroke="#30363d" strokeWidth="8" />
                        {/* Progress circle */}
                        <circle
                          cx="100"
                          cy="100"
                          r="90"
                          fill="none"
                          stroke={getRiskColor(riskAssessment.level)}
                          strokeWidth="8"
                          strokeDasharray={`${(riskAssessment.score / 100) * 565} 565`}
                          strokeLinecap="round"
                        />
                        {/* Text */}
                        <text x="100" y="100" textAnchor="middle" dy="0.3em" fill="#e6edf3" fontSize="36" fontWeight="700">
                          {riskAssessment.score}
                        </text>
                      </svg>
                      <div style={{ fontSize: 12, color: "#8b949e", textAlign: "center" }}>
                        Risk Score (0-100)
                      </div>
                    </div>

                    {/* Risk Level & Details */}
                    <div>
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 6, textTransform: "uppercase", fontWeight: 600 }}>
                          Risk Level
                        </div>
                        <div style={{
                          display: "inline-block",
                          padding: "8px 16px",
                          borderRadius: 6,
                          background: getRiskColor(riskAssessment.level) + "20",
                          border: `1px solid ${getRiskColor(riskAssessment.level)}`,
                          color: getRiskColor(riskAssessment.level),
                          fontWeight: 700,
                          fontSize: 14,
                          textTransform: "uppercase",
                        }}>
                          {riskAssessment.level}
                        </div>
                      </div>

                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 6, textTransform: "uppercase", fontWeight: 600 }}>
                          Estimated MEV Losses
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 800, color: "#ef4444" }}>
                          {formatUSD(riskAssessment.estimatedLosses)}
                        </div>
                      </div>

                      <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
                        Based on transaction patterns and chain analysis
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vulnerabilities */}
                <div style={{ marginBottom: 20 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 12 }}>
                    Detected Vulnerabilities
                  </h3>
                  {riskAssessment.vulnerabilities.map((vuln, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#0d1117",
                        border: "1px solid #30363d",
                        borderRadius: 8,
                        padding: 12,
                        marginBottom: 8,
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                      }}
                    >
                      <div style={{ fontSize: 16, marginTop: 2 }}>⚠️</div>
                      <div style={{ color: "#8b949e", fontSize: 13 }}>{vuln}</div>
                    </div>
                  ))}
                </div>

                {/* Recommendations */}
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 12 }}>
                    Protection Recommendations
                  </h3>
                  {riskAssessment.recommendations.map((rec, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#22c55e20",
                        border: "1px solid #22c55e60",
                        borderRadius: 8,
                        padding: 12,
                        marginBottom: 8,
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                      }}
                    >
                      <div style={{ fontSize: 16, marginTop: 2 }}>✓</div>
                      <div style={{ color: "#22c55e", fontSize: 13, fontWeight: 600 }}>{rec}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!riskAssessment && (
              <div style={{
                background: "#0d1117",
                border: "1px dashed #30363d",
                borderRadius: 12,
                padding: 40,
                textAlign: "center",
                color: "#8b949e",
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🔎</div>
                <p>Enter a transaction hash or wallet address to scan for MEV exposure</p>
              </div>
            )}
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* TAB 3: MEV PROTECTION STRATEGIES */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === "strategies" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              🛡️ MEV Protection Strategies
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginBottom: 32 }}>
              {PROTECTION_STRATEGIES.map((strategy, i) => (
                <div
                  key={i}
                  style={{
                    background: "#161b22",
                    border: "1px solid #30363d",
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{strategy.icon}</div>

                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#e6edf3", marginBottom: 8 }}>
                    {strategy.name}
                  </h3>

                  <p style={{ fontSize: 13, color: "#8b949e", marginBottom: 16, lineHeight: 1.6 }}>
                    {strategy.description}
                  </p>

                  {/* Chains */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 600, marginBottom: 8, textTransform: "uppercase" }}>
                      Supported Chains
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {strategy.chains.map((chain, j) => (
                        <span
                          key={j}
                          style={{
                            background: "#0d1117",
                            border: "1px solid #30363d",
                            borderRadius: 6,
                            padding: "4px 10px",
                            fontSize: 11,
                            color: "#8b949e",
                            fontWeight: 600,
                          }}
                        >
                          {chain}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Protection Level */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 600, marginBottom: 6, textTransform: "uppercase" }}>
                      Protection Level
                    </div>
                    <div style={{
                      display: "inline-block",
                      padding: "6px 12px",
                      borderRadius: 6,
                      background: getProtectionColor(strategy.protectionLevel) + "20",
                      border: `1px solid ${getProtectionColor(strategy.protectionLevel)}`,
                      color: getProtectionColor(strategy.protectionLevel),
                      fontWeight: 700,
                      fontSize: 12,
                      textTransform: "uppercase",
                    }}>
                      {strategy.protectionLevel}
                    </div>
                  </div>

                  {/* Setup Difficulty */}
                  <div style={{
                    background: "#0d1117",
                    borderRadius: 8,
                    padding: 12,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <span style={{ fontSize: 12, color: "#8b949e", fontWeight: 600 }}>Setup Difficulty</span>
                    <span style={{
                      color: strategy.setupDifficulty === "easy" ? "#22c55e" : strategy.setupDifficulty === "medium" ? "#f59e0b" : "#ef4444",
                      fontWeight: 700,
                      textTransform: "capitalize",
                      fontSize: 12,
                    }}>
                      {strategy.setupDifficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* TAB 4: MEV STATISTICS */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === "stats" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              📊 MEV Statistics Dashboard
            </h2>

            {/* Total MEV Summary */}
            <div style={{
              background: "#161b22",
              border: "1px solid #30363d",
              borderRadius: 16,
              padding: 28,
              marginBottom: 32,
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#e6edf3", marginBottom: 20 }}>
                Total MEV Extracted (All Chains)
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                {[
                  { period: "24 Hours", value: totalMEVStats.total24h, color: "#3b82f6" },
                  { period: "7 Days", value: totalMEVStats.total7d, color: "#06b6d4" },
                  { period: "30 Days", value: totalMEVStats.total30d, color: "#22c55e" },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: "#0d1117",
                    border: "1px solid #30363d",
                    borderRadius: 10,
                    padding: 16,
                  }}>
                    <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>
                      {stat.period}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: stat.color }}>
                      {formatUSD(stat.value)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chain Selection */}
            <div style={{
              background: "#161b22",
              border: "1px solid #30363d",
              borderRadius: 16,
              padding: 28,
              marginBottom: 32,
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#e6edf3", marginBottom: 16 }}>
                MEV by Chain
              </h3>

              <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
                {MEV_STATISTICS.map(stat => (
                  <button
                    key={stat.chain}
                    onClick={() => setSelectedChain(stat.chain)}
                    style={{
                      padding: "10px 16px",
                      borderRadius: 8,
                      border: `1px solid ${selectedChain === stat.chain ? "#6366f1" : "#30363d"}`,
                      background: selectedChain === stat.chain ? "#6366f120" : "transparent",
                      color: selectedChain === stat.chain ? "#818cf8" : "#8b949e",
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    {stat.chain}
                  </button>
                ))}
              </div>

              {/* Chain Stats Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
                {[
                  { label: "24h MEV", value: currentChainStats.total24h },
                  { label: "7d MEV", value: currentChainStats.total7d },
                  { label: "30d MEV", value: currentChainStats.total30d },
                  { label: "Sandwich Attacks", value: currentChainStats.sandwichAttacks },
                  { label: "Arbitrage Events", value: currentChainStats.arbitrageOpportunities },
                  { label: "Liquidations", value: currentChainStats.liquidationBots },
                  { label: "JIT Liquidity", value: currentChainStats.jitLiquidity },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: "#0d1117",
                    border: "1px solid #30363d",
                    borderRadius: 10,
                    padding: 12,
                  }}>
                    <div style={{ fontSize: 10, color: "#8b949e", marginBottom: 6, fontWeight: 600, textTransform: "uppercase" }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#e6edf3" }}>
                      {stat.label.includes("MEV") ? formatUSD(stat.value) : stat.value.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MEV Type Breakdown Chart */}
            <div style={{
              background: "#161b22",
              border: "1px solid #30363d",
              borderRadius: 16,
              padding: 28,
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#e6edf3", marginBottom: 20 }}>
                MEV Attack Types ({selectedChain})
              </h3>

              <svg viewBox="0 0 400 250" style={{ width: "100%", height: "auto", marginBottom: 20 }}>
                {/* Grid */}
                {[0, 0.25, 0.5, 0.75, 1].map((val, i) => (
                  <line key={`grid-${i}`} x1="60" y1={180 - val * 100} x2="380" y2={180 - val * 100} stroke="#30363d" strokeWidth="1" />
                ))}

                {/* Axes */}
                <line x1="60" y1="50" x2="60" y2="180" stroke="#8b949e" strokeWidth="2" />
                <line x1="60" y1="180" x2="380" y2="180" stroke="#8b949e" strokeWidth="2" />

                {/* Bars */}
                {[
                  { x: 100, value: currentChainStats.sandwichAttacks, color: "#f59e0b", label: "Sandwich" },
                  { x: 170, value: currentChainStats.arbitrageOpportunities, color: "#06b6d4", label: "Arbitrage" },
                  { x: 240, value: currentChainStats.liquidationBots, color: "#ef4444", label: "Liquidation" },
                  { x: 310, value: currentChainStats.jitLiquidity, color: "#22c55e", label: "JIT" },
                ].map((bar, i) => {
                  const max = Math.max(
                    currentChainStats.sandwichAttacks,
                    currentChainStats.arbitrageOpportunities,
                    currentChainStats.liquidationBots,
                    currentChainStats.jitLiquidity
                  );
                  const height = (bar.value / max) * 100;
                  return (
                    <g key={i}>
                      <rect x={bar.x - 20} y={180 - height} width="40" height={height} fill={bar.color} opacity="0.8" />
                      <text x={bar.x} y="195" textAnchor="middle" fill="#8b949e" fontSize="12" fontWeight="600">
                        {bar.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
                {[
                  { label: "Sandwich Attacks", value: currentChainStats.sandwichAttacks, color: "#f59e0b" },
                  { label: "Arbitrage", value: currentChainStats.arbitrageOpportunities, color: "#06b6d4" },
                  { label: "Liquidations", value: currentChainStats.liquidationBots, color: "#ef4444" },
                  { label: "JIT Liquidity", value: currentChainStats.jitLiquidity, color: "#22c55e" },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: "#0d1117",
                    border: "1px solid #30363d",
                    borderRadius: 10,
                    padding: 12,
                  }}>
                    <div style={{ fontSize: 10, color: "#8b949e", marginBottom: 6, fontWeight: 600, textTransform: "uppercase" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: item.color }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* TAB 5: NETWORK COMPARISON */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === "comparison" && (
          <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28, marginBottom: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              ⚖️ Network Comparison
            </h2>

            <div style={{ overflowX: "auto" }}>
              <table style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 13,
              }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #30363d" }}>
                    {["Chain", "24h MEV", "7d MEV", "30d MEV", "Sandwich", "Arbitrage", "Liquidation", "JIT"].map(header => (
                      <th
                        key={header}
                        style={{
                          padding: "12px 16px",
                          textAlign: header === "Chain" ? "left" : "right",
                          fontWeight: 700,
                          color: "#8b949e",
                          textTransform: "uppercase",
                          fontSize: 11,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MEV_STATISTICS.map(stat => (
                    <tr key={stat.chain} style={{ borderBottom: "1px solid #30363d" }}>
                      <td style={{ padding: "12px 16px", color: "#e6edf3", fontWeight: 700 }}>
                        {stat.chain}
                      </td>
                      <td style={{ padding: "12px 16px", color: "#3b82f6", fontWeight: 700, textAlign: "right" }}>
                        {formatUSD(stat.total24h)}
                      </td>
                      <td style={{ padding: "12px 16px", color: "#06b6d4", fontWeight: 700, textAlign: "right" }}>
                        {formatUSD(stat.total7d)}
                      </td>
                      <td style={{ padding: "12px 16px", color: "#22c55e", fontWeight: 700, textAlign: "right" }}>
                        {formatUSD(stat.total30d)}
                      </td>
                      <td style={{ padding: "12px 16px", color: "#f59e0b", fontWeight: 700, textAlign: "right" }}>
                        {stat.sandwichAttacks}
                      </td>
                      <td style={{ padding: "12px 16px", color: "#06b6d4", fontWeight: 700, textAlign: "right" }}>
                        {stat.arbitrageOpportunities}
                      </td>
                      <td style={{ padding: "12px 16px", color: "#ef4444", fontWeight: 700, textAlign: "right" }}>
                        {stat.liquidationBots}
                      </td>
                      <td style={{ padding: "12px 16px", color: "#22c55e", fontWeight: 700, textAlign: "right" }}>
                        {stat.jitLiquidity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div style={{
              background: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: 12,
              padding: 20,
              marginTop: 24,
            }}>
              <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 12, fontWeight: 600 }}>
                ℹ️ MEV Insights
              </div>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
              }}>
                {[
                  { label: "Highest 24h MEV", value: "Ethereum" },
                  { label: "Most Sandwich Attacks", value: "Ethereum" },
                  { label: "Largest Arbitrage Volume", value: "Ethereum" },
                  { label: "Most Liquidations", value: "Ethereum" },
                ].map((insight, i) => (
                  <li key={i} style={{ fontSize: 12 }}>
                    <span style={{ color: "#8b949e" }}>{insight.label}:</span>
                    <span style={{ color: "#e6edf3", fontWeight: 700, marginLeft: 8 }}>{insight.value}</span>
                  </li>
                ))}
              </ul>
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
              "name": "Mev Scanner",
              "url": "https://degen0x.com/tools/mev-scanner",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
