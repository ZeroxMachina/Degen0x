'use client';

import React, { useState } from 'react';
import { ArrowUpDown, Shield, Zap, Globe, AlertCircle, Check, Layers } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

// ── Types ────────────────────────────────────────────────────────────────────
interface Bridge {
  name: string;
  type: 'Canonical' | 'Third-Party' | 'Liquidity Network' | 'Atomic Swap';
  supportedChains: string[];
  tvl: string;
  avgTime: string;
  avgCost: string;
  securityModel: string;
  trustLevel: 'Trustless' | 'Trust-Minimized' | 'Trusted';
  riskRating: number; // 1-5 (1=lowest risk)
  description: string;
}

interface L2Network {
  name: string;
  type: 'Optimistic Rollup' | 'ZK Rollup' | 'Validium' | 'Optimium';
  tps: string;
  finality: string;
  tvl: string;
  bridgeMechanism: string;
  fraudProofWindow: string;
  bestFor: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const BRIDGES: Bridge[] = [
  {
    name: "Arbitrum Bridge",
    type: "Canonical",
    supportedChains: ["Ethereum", "Arbitrum One", "Arbitrum Nova"],
    tvl: "$4.2B",
    avgTime: "~7 days (to L1) / ~10 min (to L2)",
    avgCost: "$2-8 (to L2) / $5-15 (to L1)",
    securityModel: "Inherits Ethereum security via optimistic fraud proofs. 7-day challenge period for L2-to-L1 withdrawals.",
    trustLevel: "Trustless",
    riskRating: 1,
    description: "Official Arbitrum canonical bridge. Most secure option for Arbitrum transfers but requires 7-day withdrawal wait.",
  },
  {
    name: "Optimism Gateway",
    type: "Canonical",
    supportedChains: ["Ethereum", "OP Mainnet", "Base", "Mode", "Zora"],
    tvl: "$3.8B",
    avgTime: "~7 days (to L1) / ~5 min (to L2)",
    avgCost: "$1-6 (to L2) / $3-12 (to L1)",
    securityModel: "OP Stack canonical bridge with 7-day challenge period. Superchain interop enables fast transfers between OP chains.",
    trustLevel: "Trustless",
    riskRating: 1,
    description: "Official Optimism canonical bridge supporting the entire Superchain ecosystem.",
  },
  {
    name: "zkSync Bridge",
    type: "Canonical",
    supportedChains: ["Ethereum", "zkSync Era"],
    tvl: "$870M",
    avgTime: "~24 hours (to L1) / ~5 min (to L2)",
    avgCost: "$0.50-3 (to L2) / $2-8 (to L1)",
    securityModel: "ZK validity proofs provide cryptographic guarantees. No fraud proof window needed — withdrawals finalize after proof verification.",
    trustLevel: "Trustless",
    riskRating: 1,
    description: "Official zkSync Era bridge using zero-knowledge proofs for instant cryptographic finality.",
  },
  {
    name: "Stargate (LayerZero)",
    type: "Liquidity Network",
    supportedChains: ["Ethereum", "Arbitrum", "Optimism", "Polygon", "BSC", "Avalanche", "Base", "Solana"],
    tvl: "$620M",
    avgTime: "~1-5 minutes",
    avgCost: "$0.50-5 + 0.06% fee",
    securityModel: "Unified liquidity pools with Delta algorithm. Relies on LayerZero oracle + relayer for cross-chain messaging.",
    trustLevel: "Trust-Minimized",
    riskRating: 2,
    description: "Leading liquidity network bridge supporting 8+ chains with instant transfers via unified liquidity pools.",
  },
  {
    name: "Across Protocol",
    type: "Liquidity Network",
    supportedChains: ["Ethereum", "Arbitrum", "Optimism", "Polygon", "Base", "zkSync", "Linea"],
    tvl: "$340M",
    avgTime: "~1-3 minutes",
    avgCost: "$0.10-3 + variable fee",
    securityModel: "Optimistic oracle design. Relayers front capital, UMA oracle verifies. Fastest for small-medium transfers.",
    trustLevel: "Trust-Minimized",
    riskRating: 2,
    description: "Fast and cheap L2-to-L2 bridge using intents architecture and UMA optimistic oracle verification.",
  },
  {
    name: "Synapse Protocol",
    type: "Liquidity Network",
    supportedChains: ["Ethereum", "Arbitrum", "Optimism", "Avalanche", "BNB Chain", "Polygon", "Base"],
    tvl: "$210M",
    avgTime: "~2-10 minutes",
    avgCost: "$0.30-5",
    securityModel: "AMM-based bridge with cross-chain messaging. Multi-sig committee for governance.",
    trustLevel: "Trust-Minimized",
    riskRating: 3,
    description: "Multi-chain bridge combining AMM liquidity pools with generic cross-chain messaging capabilities.",
  },
  {
    name: "Hop Protocol",
    type: "Liquidity Network",
    supportedChains: ["Ethereum", "Arbitrum", "Optimism", "Polygon", "Base", "Gnosis"],
    tvl: "$95M",
    avgTime: "~5-20 minutes",
    avgCost: "$0.20-4",
    securityModel: "Bonder-based model with automatic market makers. Bonders front capital and are reimbursed via canonical bridges.",
    trustLevel: "Trust-Minimized",
    riskRating: 2,
    description: "Pioneer rollup-to-rollup bridge using bonded AMM system for quick L2-to-L2 transfers.",
  },
  {
    name: "deBridge",
    type: "Third-Party",
    supportedChains: ["Ethereum", "Solana", "BNB Chain", "Polygon", "Arbitrum", "Avalanche", "Base"],
    tvl: "$180M",
    avgTime: "~1-5 minutes",
    avgCost: "$0.30-3 + 0.04% fee",
    securityModel: "Decentralized validator network with slashing. Supports cross-chain limit orders and DeFi composability.",
    trustLevel: "Trust-Minimized",
    riskRating: 2,
    description: "Cross-chain infrastructure with DeFi-native features including limit orders and cross-chain swaps.",
  },
];

const L2_NETWORKS: L2Network[] = [
  {
    name: "Arbitrum One",
    type: "Optimistic Rollup",
    tps: "~40,000 TPS",
    finality: "~7 days (to L1)",
    tvl: "$14.2B",
    bridgeMechanism: "Canonical bridge + 50+ third-party bridges",
    fraudProofWindow: "7 days",
    bestFor: "DeFi power users, large TVL protocols, general-purpose dApps",
  },
  {
    name: "OP Mainnet",
    type: "Optimistic Rollup",
    tps: "~20,000 TPS",
    finality: "~7 days (to L1)",
    tvl: "$8.5B",
    bridgeMechanism: "Superchain canonical bridge + third-party bridges",
    fraudProofWindow: "7 days",
    bestFor: "Superchain ecosystem, retroPGF projects, institutional DeFi",
  },
  {
    name: "Base",
    type: "Optimistic Rollup",
    tps: "~20,000 TPS",
    finality: "~7 days (to L1)",
    tvl: "$6.8B",
    bridgeMechanism: "OP Stack canonical + Coinbase on/off ramp",
    fraudProofWindow: "7 days",
    bestFor: "Consumer apps, social dApps, Coinbase ecosystem integration",
  },
  {
    name: "zkSync Era",
    type: "ZK Rollup",
    tps: "~10,000 TPS",
    finality: "~24 hours (to L1)",
    tvl: "$1.2B",
    bridgeMechanism: "Canonical ZK bridge with validity proofs",
    fraudProofWindow: "N/A (ZK proofs)",
    bestFor: "Privacy-focused apps, account abstraction, native ZK features",
  },
  {
    name: "Starknet",
    type: "ZK Rollup",
    tps: "~15,000 TPS",
    finality: "~12 hours (to L1)",
    tvl: "$620M",
    bridgeMechanism: "StarkGate canonical bridge + SHARP proof aggregation",
    fraudProofWindow: "N/A (STARK proofs)",
    bestFor: "Gaming, complex computation, Cairo-native apps",
  },
  {
    name: "Scroll",
    type: "ZK Rollup",
    tps: "~8,000 TPS",
    finality: "~4 hours (to L1)",
    tvl: "$480M",
    bridgeMechanism: "Canonical zkEVM bridge with bytecode-level compatibility",
    fraudProofWindow: "N/A (ZK proofs)",
    bestFor: "EVM-compatible ZK apps, DeFi migration from L1",
  },
  {
    name: "Linea",
    type: "ZK Rollup",
    tps: "~12,000 TPS",
    finality: "~8 hours (to L1)",
    tvl: "$390M",
    bridgeMechanism: "Canonical bridge backed by ConsenSys + MetaMask integration",
    fraudProofWindow: "N/A (ZK proofs)",
    bestFor: "MetaMask-native experience, enterprise DeFi",
  },
  {
    name: "Polygon zkEVM",
    type: "ZK Rollup",
    tps: "~7,000 TPS",
    finality: "~30 min (to L1)",
    tvl: "$310M",
    bridgeMechanism: "LxLy unified bridge for Polygon ecosystem",
    fraudProofWindow: "N/A (ZK proofs)",
    bestFor: "Polygon ecosystem apps, type-2 zkEVM compatibility",
  },
];

const RISK_SECTIONS = [
  {
    title: "Smart Contract Risk",
    icon: "code",
    description: "Bridge contracts can contain bugs or vulnerabilities. Canonical bridges are generally more audited, but all bridges carry some smart contract risk.",
    mitigation: "Use bridges with multiple audits, bug bounties, and battle-tested codebases. Check DeFiSafety and L2Beat ratings.",
  },
  {
    title: "Liquidity Risk",
    icon: "droplet",
    description: "Liquidity network bridges depend on available liquidity. During high-volume events, slippage can increase or transfers may be delayed.",
    mitigation: "Check bridge TVL relative to your transfer size. For large transfers (&gt;$100K), consider splitting across multiple bridges.",
  },
  {
    title: "Censorship Risk",
    icon: "shield",
    description: "Some bridges rely on centralized sequencers or validator sets that could theoretically censor transactions.",
    mitigation: "Prefer bridges with decentralized validator sets. Canonical bridges inherit L1 censorship resistance through forced inclusion.",
  },
  {
    title: "Oracle/Relayer Risk",
    icon: "radio",
    description: "Third-party bridges depend on oracles and relayers for cross-chain message verification. Compromised oracles can lead to false message delivery.",
    mitigation: "Choose bridges with decentralized oracle networks and slashing mechanisms for malicious relayers.",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function riskColor(rating: number): string {
  if (rating <= 1) return "#3fb950";
  if (rating <= 2) return "#58a6ff";
  if (rating <= 3) return "#d29922";
  return "#f85149";
}

function riskLabel(rating: number): string {
  if (rating <= 1) return "Lowest Risk";
  if (rating <= 2) return "Low Risk";
  if (rating <= 3) return "Moderate";
  return "Higher Risk";
}

function trustColor(level: string): string {
  if (level === "Trustless") return "#3fb950";
  if (level === "Trust-Minimized") return "#58a6ff";
  return "#d29922";
}

// ── Component ────────────────────────────────────────────────────────────────
export default function L2BridgesRollupsGuide() {
  const [activeTab, setActiveTab] = useState<"bridges" | "l2s" | "risks">("bridges");
  const [bridgeFilter, setBridgeFilter] = useState("All");
  const [expandedBridge, setExpandedBridge] = useState<string | null>(null);

  const bridgeTypes = ["All", "Canonical", "Liquidity Network", "Third-Party"];

  const filteredBridges = bridgeFilter === "All"
    ? BRIDGES
    : BRIDGES.filter((b) => b.type === bridgeFilter);

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Learn", href: "/learn" },
        { label: "L2 Bridges & Rollups Guide" },
      ]} />
      <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "32px 20px" }}>
          {/* Hero */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <Layers size={36} color="#58a6ff" />
              <h1 style={{ fontSize: 36, fontWeight: 800, background: "linear-gradient(135deg, #58a6ff, #bc8cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                L2 Bridges & Rollups: The Complete 2026 Guide
              </h1>
            </div>
            <p style={{ color: "#8b949e", fontSize: 17, lineHeight: 1.7, maxWidth: 800 }}>
              Ethereum Layer 2 scaling solutions process thousands of transactions per second while inheriting mainnet security. But moving assets between L1 and L2 — and between different L2s — requires bridges. This guide covers the major bridge types, their security models, the leading rollup networks, and how to minimize risk when bridging your assets.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 6, background: "#58a6ff20", color: "#58a6ff", fontWeight: 600 }}>8 Bridges Compared</span>
              <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 6, background: "#bc8cff20", color: "#bc8cff", fontWeight: 600 }}>8 L2 Networks</span>
              <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 6, background: "#3fb95020", color: "#3fb950", fontWeight: 600 }}>Security Deep-Dive</span>
              <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 6, background: "#d2992220", color: "#d29922", fontWeight: 600 }}>Updated March 2026</span>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginBottom: 24, background: "#161b22", borderRadius: 10, padding: 4 }}>
            {(["bridges", "l2s", "risks"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1, padding: "10px 16px", borderRadius: 8, border: "none", cursor: "pointer",
                  background: activeTab === tab ? "#58a6ff20" : "transparent",
                  color: activeTab === tab ? "#58a6ff" : "#8b949e",
                  fontWeight: 700, fontSize: 13, transition: "all 0.15s",
                }}>
                {tab === "bridges" ? "Bridge Comparison" : tab === "l2s" ? "L2 Networks" : "Risk Guide"}
              </button>
            ))}
          </div>

          {/* ── Bridges Tab ── */}
          {activeTab === "bridges" && (
            <>
              {/* What are bridges? */}
              <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: "#58a6ff" }}>What Are Blockchain Bridges?</h2>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.7, marginBottom: 16 }}>
                  Bridges are protocols that enable moving tokens and data between different blockchain networks. They solve the fundamental problem of blockchain interoperability — each chain is an isolated system, and bridges create the connective tissue between them.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                  <div style={{ background: "#0d1117", borderRadius: 8, padding: 14, borderLeft: "3px solid #3fb950" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#3fb950", marginBottom: 4 }}>Canonical Bridges</div>
                    <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.5 }}>Official L2 bridges. Most secure, but slow L2-to-L1 withdrawals due to fraud/validity proof windows.</div>
                  </div>
                  <div style={{ background: "#0d1117", borderRadius: 8, padding: 14, borderLeft: "3px solid #58a6ff" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#58a6ff", marginBottom: 4 }}>Liquidity Networks</div>
                    <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.5 }}>Use liquidity pools across chains. Fast transfers but rely on liquidity providers and oracle/relayer networks.</div>
                  </div>
                  <div style={{ background: "#0d1117", borderRadius: 8, padding: 14, borderLeft: "3px solid #bc8cff" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#bc8cff", marginBottom: 4 }}>Third-Party Bridges</div>
                    <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.5 }}>Independent validator networks for cross-chain messaging. More flexible but introduce external trust assumptions.</div>
                  </div>
                </div>
              </div>

              {/* Filter */}
              <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
                {bridgeTypes.map((t) => (
                  <button key={t} onClick={() => setBridgeFilter(t)}
                    style={{
                      padding: "6px 14px", borderRadius: 8, border: "1px solid #30363d", cursor: "pointer",
                      background: bridgeFilter === t ? "#58a6ff20" : "transparent",
                      color: bridgeFilter === t ? "#58a6ff" : "#8b949e", fontSize: 12, fontWeight: 600,
                    }}>
                    {t}
                  </button>
                ))}
              </div>

              {/* Bridge Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {filteredBridges.map((b) => (
                  <div key={b.name} onClick={() => setExpandedBridge(expandedBridge === b.name ? null : b.name)}
                    style={{
                      background: "#161b22", border: `1px solid ${expandedBridge === b.name ? "#58a6ff" : "#30363d"}`,
                      borderRadius: 12, padding: 18, cursor: "pointer", borderLeft: `4px solid ${riskColor(b.riskRating)}`,
                    }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                      <div style={{ flex: 1, minWidth: 220 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <span style={{ fontSize: 17, fontWeight: 800 }}>{b.name}</span>
                          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, fontWeight: 700, background: `${trustColor(b.trustLevel)}20`, color: trustColor(b.trustLevel) }}>{b.trustLevel}</span>
                          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, fontWeight: 600, background: "#21262d", color: "#8b949e" }}>{b.type}</span>
                        </div>
                        <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.5 }}>{b.description}</div>
                      </div>
                      <div style={{ display: "flex", gap: 20 }}>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 10, color: "#8b949e" }}>TVL</div>
                          <div style={{ fontSize: 15, fontWeight: 800, color: "#3fb950" }}>{b.tvl}</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 10, color: "#8b949e" }}>Speed</div>
                          <div style={{ fontSize: 12, fontWeight: 600 }}>{b.avgTime.split("/")[0]}</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 10, color: "#8b949e" }}>Risk</div>
                          <div style={{ fontSize: 14, fontWeight: 800, color: riskColor(b.riskRating) }}>{riskLabel(b.riskRating)}</div>
                        </div>
                      </div>
                    </div>

                    {expandedBridge === b.name && (
                      <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #30363d" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                          <div style={{ background: "#0d1117", borderRadius: 8, padding: 12 }}>
                            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>Supported Chains</div>
                            <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.6 }}>{b.supportedChains.join(", ")}</div>
                          </div>
                          <div style={{ background: "#0d1117", borderRadius: 8, padding: 12 }}>
                            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>Transfer Time</div>
                            <div style={{ fontSize: 12, fontWeight: 600 }}>{b.avgTime}</div>
                          </div>
                          <div style={{ background: "#0d1117", borderRadius: 8, padding: 12 }}>
                            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>Avg Cost</div>
                            <div style={{ fontSize: 12, fontWeight: 600 }}>{b.avgCost}</div>
                          </div>
                        </div>
                        <div style={{ background: "#0d1117", borderRadius: 8, padding: 12, marginTop: 12 }}>
                          <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>Security Model</div>
                          <div style={{ fontSize: 12, color: "#e6edf3", lineHeight: 1.6 }}>{b.securityModel}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── L2 Networks Tab ── */}
          {activeTab === "l2s" && (
            <>
              <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: "#bc8cff" }}>Optimistic vs. ZK Rollups</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ background: "#0d1117", borderRadius: 10, padding: 16, borderLeft: "3px solid #f0883e" }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f0883e", marginBottom: 8 }}>Optimistic Rollups</h3>
                    <p style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
                      Assume transactions are valid by default. Anyone can submit a fraud proof during the 7-day challenge window.
                      Currently lead in TVL and DeFi adoption. EVM-equivalent, making migration from L1 seamless.
                    </p>
                    <div style={{ marginTop: 8, fontSize: 11, color: "#f0883e" }}>Examples: Arbitrum, Optimism, Base, Blast</div>
                  </div>
                  <div style={{ background: "#0d1117", borderRadius: 10, padding: 16, borderLeft: "3px solid #bc8cff" }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#bc8cff", marginBottom: 8 }}>ZK Rollups</h3>
                    <p style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
                      Generate cryptographic validity proofs for every state transition. No challenge period needed — finality is faster.
                      Higher computational overhead for proof generation, but rapidly improving. Leading in privacy features.
                    </p>
                    <div style={{ marginTop: 8, fontSize: 11, color: "#bc8cff" }}>Examples: zkSync, Starknet, Scroll, Linea, Polygon zkEVM</div>
                  </div>
                </div>
              </div>

              {/* L2 Network Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {L2_NETWORKS.map((l2) => (
                  <div key={l2.name} style={{
                    background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 18,
                    borderLeft: `4px solid ${l2.type.includes("ZK") ? "#bc8cff" : "#f0883e"}`,
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <span style={{ fontSize: 17, fontWeight: 800 }}>{l2.name}</span>
                          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, fontWeight: 700, background: l2.type.includes("ZK") ? "#bc8cff20" : "#f0883e20", color: l2.type.includes("ZK") ? "#bc8cff" : "#f0883e" }}>{l2.type}</span>
                        </div>
                        <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.5 }}>Best for: {l2.bestFor}</div>
                      </div>
                      <div style={{ display: "flex", gap: 20 }}>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 10, color: "#8b949e" }}>TVL</div>
                          <div style={{ fontSize: 15, fontWeight: 800, color: "#3fb950" }}>{l2.tvl}</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 10, color: "#8b949e" }}>TPS</div>
                          <div style={{ fontSize: 13, fontWeight: 700 }}>{l2.tps}</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: 10, color: "#8b949e" }}>Finality</div>
                          <div style={{ fontSize: 13, fontWeight: 700 }}>{l2.finality}</div>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: 10, display: "flex", gap: 12, fontSize: 11, color: "#8b949e" }}>
                      <span>Bridge: <span style={{ color: "#e6edf3" }}>{l2.bridgeMechanism}</span></span>
                      <span>|</span>
                      <span>Fraud/Validity Proof: <span style={{ color: "#e6edf3" }}>{l2.fraudProofWindow}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── Risks Tab ── */}
          {activeTab === "risks" && (
            <>
              <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: "#f85149" }}>
                  <AlertCircle size={20} style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }} />
                  Bridge Security: What You Need to Know
                </h2>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.7 }}>
                  Bridges have historically been the largest attack vector in crypto, with over $2.5 billion lost to bridge exploits between 2021-2025.
                  Understanding the risk landscape is critical before moving significant assets across chains.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {RISK_SECTIONS.map((r) => (
                  <div key={r.title} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, borderLeft: "3px solid #f85149" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f0883e", marginBottom: 8 }}>{r.title}</h3>
                    <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.7, marginBottom: 12 }}>{r.description}</p>
                    <div style={{ background: "#0d1117", borderRadius: 8, padding: 12 }}>
                      <div style={{ fontSize: 11, color: "#3fb950", fontWeight: 700, marginBottom: 4 }}>
                        <Shield size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
                        MITIGATION
                      </div>
                      <div style={{ fontSize: 12, color: "#e6edf3", lineHeight: 1.5 }}>{r.mitigation}</div>
                    </div>
                  </div>
                ))}

                {/* Best Practices */}
                <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 24, borderLeft: "3px solid #3fb950" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#3fb950", marginBottom: 16 }}>
                    <Check size={18} style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }} />
                    Best Practices for Safe Bridging
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
                    {[
                      { title: "Start Small", desc: "Always test with a small amount first before bridging large sums." },
                      { title: "Check Bridge Health", desc: "Verify TVL, recent audit status, and L2Beat risk assessment before using a bridge." },
                      { title: "Use Canonical for Large Amounts", desc: "For transfers over $50K, prefer canonical L2 bridges despite slower withdrawal times." },
                      { title: "Monitor Gas Costs", desc: "L1 gas can spike 10x during congestion. Time your bridge transactions during low-fee periods." },
                      { title: "Verify Contract Addresses", desc: "Always verify bridge contract addresses through official sources. Phishing bridges are common." },
                      { title: "Diversify Bridges", desc: "Don't route all your assets through a single bridge. Spread risk across multiple protocols." },
                    ].map((tip, i) => (
                      <div key={i} style={{ background: "#0d1117", borderRadius: 8, padding: 12 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#3fb950", marginBottom: 4 }}>{tip.title}</div>
                        <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.5 }}>{tip.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Disclaimer */}
          <div style={{ marginTop: 40, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 }}>
            <p style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
              Bridge data and TVL figures are approximate and sourced from L2Beat, DefiLlama, and project documentation as of March 2026.
              TPS figures represent theoretical maximums. Always verify current bridge status before transferring assets.
              This guide is for educational purposes only and does not constitute financial advice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
