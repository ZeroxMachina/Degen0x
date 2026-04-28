'use client';

"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";

interface ChainGasData {
  chainId: string;
  name: string;
  symbol: string;
  icon: string;
  color: string;
  currentGas: number;
  avgLastHour: number;
  avgLastDay: number;
  unit: string;
  coinPrice: number;
  costTransfer: number;
  costSwap: number;
  costMint: number;
  costDeploy: number;
}

interface HistoricalPoint {
  chainId: string;
  timestamp: number;
  gasPrice: number;
}

const CHAINS: Omit<
  ChainGasData,
  "currentGas" | "avgLastHour" | "avgLastDay" | "costTransfer" | "costSwap" | "costMint" | "costDeploy"
>[] = [
  {
    chainId: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    icon: "⟠",
    color: "#627EEA",
    unit: "Gwei",
    coinPrice: 3420,
  },
  {
    chainId: "arbitrum",
    name: "Arbitrum",
    symbol: "ETH",
    icon: "◉",
    color: "#28A0F0",
    unit: "Gwei",
    coinPrice: 3420,
  },
  {
    chainId: "optimism",
    name: "Optimism",
    symbol: "ETH",
    icon: "🔴",
    color: "#FF0420",
    unit: "Gwei",
    coinPrice: 3420,
  },
  {
    chainId: "polygon",
    name: "Polygon",
    symbol: "MATIC",
    icon: "⬡",
    color: "#8247E5",
    unit: "Gwei",
    coinPrice: 0.58,
  },
  {
    chainId: "base",
    name: "Base",
    symbol: "ETH",
    icon: "🔵",
    color: "#0052FF",
    unit: "Gwei",
    coinPrice: 3420,
  },
  {
    chainId: "bsc",
    name: "BSC",
    symbol: "BNB",
    icon: "💛",
    color: "#F0B90B",
    unit: "Gwei",
    coinPrice: 612,
  },
  {
    chainId: "avalanche",
    name: "Avalanche",
    symbol: "AVAX",
    icon: "🔺",
    color: "#E84142",
    unit: "nAVAX",
    coinPrice: 38.5,
  },
  {
    chainId: "solana",
    name: "Solana",
    symbol: "SOL",
    icon: "◎",
    color: "#9945FF",
    unit: "SOL",
    coinPrice: 195,
  },
  {
    chainId: "fantom",
    name: "Fantom",
    symbol: "FTM",
    icon: "👻",
    color: "#1969FF",
    unit: "Gwei",
    coinPrice: 0.85,
  },
  {
    chainId: "zksync",
    name: "zkSync Era",
    symbol: "ETH",
    icon: "⚡",
    color: "#4E529A",
    unit: "Gwei",
    coinPrice: 3420,
  },
];

function generateRealisticGas(basePrice: number, variance: number): number {
  const change = (Math.random() - 0.5) * variance;
  return Math.max(basePrice + change, basePrice * 0.1);
}

function calculateTxCost(
  gasPrice: number,
  gasUnits: number,
  coinPrice: number,
  isSolana: boolean
): number {
  if (isSolana) {
    return gasPrice * coinPrice;
  };
  const ethAmount = (gasPrice * gasUnits) / 1e9;
  return ethAmount * coinPrice;
}

function getGasStatus(gasPrice: number, baselineHigh: number): "low" | "medium" | "high" {
  const ratio = gasPrice / baselineHigh;
  if (ratio < 0.5) return "low";
  if (ratio < 0.8) return "medium";
  return "high";
}

function formatGas(value: number, unit: string): string {
  if (unit === "SOL") {
    return `${value.toFixed(6)} SOL`;
  }
  if (value < 0.01) return `<0.01 ${unit}`;
  return `${value.toFixed(2)} ${unit}`;
}

function formatUsd(value: number): string {
  if (value < 0.001) return "<$0.001";
  if (value < 1) return `$${value.toFixed(4)}`;
  return `$${value.toFixed(2)}`;
}

export default function MultiChainGasDashboard() {
  const [chains, setChains] = useState<ChainGasData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [selectedChain, setSelectedChain] = useState<string | null>(null);
  const [savings, setSavings] = useState<{ l2: string; percentage: string } | null>(null);

  const initializeData = useCallback((): ChainGasData[] => {
    return CHAINS.map((chain) => {
      const baseGas =
        chain.chainId === "ethereum"
          ? 28
          : chain.chainId === "solana"
            ? 0.000005
            : chain.chainId === "polygon"
              ? 50
              : chain.chainId === "avalanche"
                ? 30
                : chain.chainId === "bsc"
                  ? 5
                  : chain.chainId === "fantom"
                    ? 80
                    : 0.1;

      const variance =
        chain.chainId === "ethereum"
          ? 15
          : chain.chainId === "solana"
            ? 0.000002
            : chain.chainId === "polygon"
              ? 25
              : chain.chainId === "avalanche"
                ? 15
                : chain.chainId === "bsc"
                  ? 2
                  : chain.chainId === "fantom"
                    ? 40
                    : 0.05;

      const currentGas = generateRealisticGas(baseGas, variance);
      const avgLastHour = generateRealisticGas(baseGas, variance);
      const avgLastDay = generateRealisticGas(baseGas, variance * 1.5);

      const isSolana = chain.symbol === "SOL";
      const gasUnits = isSolana ? 1 : 21000;

      return {
        ...chain,
        currentGas,
        avgLastHour,
        avgLastDay,
        costTransfer: calculateTxCost(currentGas, gasUnits, chain.coinPrice, isSolana),
        costSwap: calculateTxCost(currentGas, gasUnits * 3, chain.coinPrice, isSolana),
        costMint: calculateTxCost(currentGas, gasUnits * 2.5, chain.coinPrice, isSolana),
        costDeploy: calculateTxCost(currentGas, gasUnits * 10, chain.coinPrice, isSolana),
      };
    });
  }, []);

  const refreshData = useCallback(() => {
    setChains(initializeData());
    setLastUpdated(new Date().toLocaleTimeString());

    const ethChain = chains.find((c) => c.chainId === "ethereum");
    const arbitrumChain = chains.find((c) => c.chainId === "arbitrum");
    if (ethChain && arbitrumChain) {
      const ethCost = ethChain.costSwap;
      const arbCost = arbitrumChain.costSwap;
      const savedAmount = ethCost - arbCost;
      const percentage = ((savedAmount / ethCost) * 100).toFixed(1);
      setSavings({
        l2: formatUsd(savedAmount),
        percentage: `${percentage}%`,
      });
    }
  }, [initializeData, chains]);

  useEffect(() => {
    const initialized = initializeData();
    setChains(initialized);
    setLastUpdated(new Date().toLocaleTimeString());

    const ethChain = initialized.find((c) => c.chainId === "ethereum");
    const arbChain = initialized.find((c) => c.chainId === "arbitrum");
    if (ethChain && arbChain) {
      const ethCost = ethChain.costSwap;
      const arbCost = arbChain.costSwap;
      const savedAmount = ethCost - arbCost;
      const percentage = ((savedAmount / ethCost) * 100).toFixed(1);
      setSavings({
        l2: formatUsd(savedAmount),
        percentage: `${percentage}%`,
      });
    }
    setLoading(false);
  }, [initializeData]);

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(refreshData, 15000);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshData]);

  const selectedChainData = selectedChain ? chains.find((c) => c.chainId === selectedChain) : null;

  const l2Chains = ["arbitrum", "optimism", "base", "zksync"];
  const cheapestChain = useMemo(() => {
    if (chains.length === 0) return null;
    return chains.reduce((prev, current) =>
      prev.costSwap < current.costSwap ? prev : current
    );
  }, [chains]);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", padding: "2rem 1rem" }}>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/multi-chain-gas"
        name="Ethereum Mainnet"
        description="Ethereum Mainnet"
      />
      <style>{`
        :root {
          --color-text: #e6edf3;
          --color-text-secondary: #8b949e;
          --color-bg: #0d1117;
          --glass-bg: rgba(22, 27, 34, 0.7);
          --color-border: #30363d;
        }
        .glass {
          background: var(--glass-bg);
          border: 1px solid var(--color-border);
          backdrop-filter: blur(10px);
          border-radius: 12px;
        }
        .gas-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 0.4rem;
        }
        .gas-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 0.3s ease;
        }
        .status-low { --color: #3fb950; }
        .status-medium { --color: #d29922; }
        .status-high { --color: #f85149; }
        .status-low .gas-bar-fill { background: #3fb950; }
        .status-medium .gas-bar-fill { background: #d29922; }
        .status-high .gas-bar-fill { background: #f85149; }
        button { transition: all 0.2s ease; }
        button:hover { opacity: 0.85; }
      `}</style>

      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Multi-Chain Gas Dashboard" },
          ]}
        />

        {/* Header */}
        <div style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "900",
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            ⛽ Multi-Chain Gas Dashboard
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem", maxWidth: "800px", marginBottom: "1rem" }}>
            Real-time gas prices across 10+ blockchains. Compare costs, find savings, and optimize your transactions.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <div
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                background: autoRefresh ? "rgba(63, 185, 80, 0.2)" : "rgba(48, 54, 61, 0.5)",
                border: `1px solid ${autoRefresh ? "#3fb950" : "var(--color-border)"}`,
              }}
            >
              <span style={{ color: autoRefresh ? "#3fb950" : "var(--color-text-secondary)", fontSize: "0.85rem" }}>
                ● {autoRefresh ? "Auto-refresh every 15s" : "Manual mode"}
              </span>
            </div>
            {lastUpdated && (
              <span style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem" }}>Last updated: {lastUpdated}</span>
            )}
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "6px",
                border: "1px solid var(--color-border)",
                background: "transparent",
                color: "var(--color-text-secondary)",
                fontSize: "0.85rem",
                cursor: "pointer",
              }}
            >
              {autoRefresh ? "Pause" : "Resume"}
            </button>
            <button
              onClick={refreshData}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "6px",
                border: "1px solid var(--color-border)",
                background: "transparent",
                color: "var(--color-text-secondary)",
                fontSize: "0.85rem",
                cursor: "pointer",
              }}
            >
              🔄 Refresh Now
            </button>
          </div>
        </div>

        {/* Gas Savings Calculator */}
        {savings && (
          <div
            className="glass"
            style={{
              padding: "1.5rem",
              marginBottom: "2rem",
              borderLeft: "3px solid #3fb950",
              background: "rgba(63, 185, 80, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", color: "var(--color-text)", marginBottom: "0.75rem", fontWeight: "700" }}>
              💰 L2 vs Ethereum Mainnet: Token Swap Comparison
            </h2>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
              <div>
                <div style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem", marginBottom: "0.3rem" }}>
                  Using Arbitrum instead of Ethereum
                </div>
                <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#3fb950" }}>{savings.l2}</div>
                <div style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem", marginTop: "0.3rem" }}>
                  {savings.percentage} savings per swap
                </div>
              </div>
              <div style={{ fontSize: "2rem", opacity: "0.3" }}>→</div>
              <div>
                <div style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                  Key takeaway:
                </div>
                <ul style={{ margin: 0, paddingLeft: "1.5rem", color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                  <li>Use L2s for frequent trading and DeFi interactions</li>
                  <li>Mainnet best for rare, high-value transactions</li>
                  <li>Combine multiple actions on L2 for max savings</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Chain Grid */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--color-text)", marginBottom: "1.2rem", fontWeight: "700" }}>
            Real-Time Gas Prices
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1rem",
            }}
          >
            {chains.map((chain) => {
              const status = getGasStatus(chain.currentGas, 100);
              const maxGas = Math.max(...chains.map((c) => c.currentGas));
              const fillPercentage = (chain.currentGas / maxGas) * 100;
              const isL2 = l2Chains.includes(chain.chainId);

              return (
                <div
                  key={chain.chainId}
                  className={`glass status-${status}`}
                  style={{
                    padding: "1.5rem",
                    cursor: "pointer",
                    border: selectedChain === chain.chainId ? "1px solid #818cf8" : undefined,
                    boxShadow: selectedChain === chain.chainId ? "0 0 20px rgba(129, 140, 248, 0.3)" : undefined,
                  }}
                  onClick={() => setSelectedChain(selectedChain === chain.chainId ? null : chain.chainId)}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
                        <span style={{ fontSize: "1.8rem" }}>{chain.icon}</span>
                        <h3 style={{ color: "var(--color-text)", fontSize: "1.1rem", fontWeight: "700", margin: 0 }}>
                          {chain.name}
                        </h3>
                      </div>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {isL2 && (
                          <span
                            style={{
                              fontSize: "0.65rem",
                              fontWeight: "700",
                              padding: "2px 6px",
                              borderRadius: "3px",
                              background: "rgba(63, 185, 80, 0.2)",
                              color: "#3fb950",
                            }}
                          >
                            L2
                          </span>
                        )}
                        <span style={{ fontSize: "0.7rem", color: "var(--color-text-secondary)" }}>
                          {status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: "700",
                        padding: "0.3rem 0.6rem",
                        borderRadius: "4px",
                        background: `var(--color)20`,
                        color: "var(--color)",
                      }}
                    >
                      {status}
                    </div>
                  </div>

                  <div style={{ marginBottom: "1.2rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                      <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)" }}>Current Gas</span>
                      <span style={{ fontSize: "1rem", fontWeight: "700", color: "var(--color-text)" }}>
                        {formatGas(chain.currentGas, chain.unit)}
                      </span>
                    </div>
                    <div className="gas-bar">
                      <div className="gas-bar-fill" style={{ width: `${fillPercentage}%` }} />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.6rem",
                      fontSize: "0.75rem",
                      marginBottom: "1rem",
                      paddingBottom: "1rem",
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    <div>
                      <div style={{ color: "var(--color-text-secondary)", marginBottom: "0.2rem" }}>1h Avg</div>
                      <div style={{ color: "var(--color-text)", fontWeight: "600" }}>
                        {formatGas(chain.avgLastHour, chain.unit)}
                      </div>
                    </div>
                    <div>
                      <div style={{ color: "var(--color-text-secondary)", marginBottom: "0.2rem" }}>24h Avg</div>
                      <div style={{ color: "var(--color-text)", fontWeight: "600" }}>
                        {formatGas(chain.avgLastDay, chain.unit)}
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: "0.8rem" }}>
                    <div style={{ color: "var(--color-text-secondary)", marginBottom: "0.4rem", fontWeight: "600" }}>
                      Est. Transaction Costs
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                      {[
                        { label: "Transfer", cost: chain.costTransfer },
                        { label: "Swap", cost: chain.costSwap },
                        { label: "NFT Mint", cost: chain.costMint },
                        { label: "Deploy", cost: chain.costDeploy },
                      ].map((tx) => (
                        <div
                          key={tx.label}
                          style={{
                            background: "rgba(0, 0, 0, 0.2)",
                            padding: "0.4rem 0.5rem",
                            borderRadius: "4px",
                          }}
                        >
                          <div style={{ color: "var(--color-text-secondary)", fontSize: "0.7rem" }}>{tx.label}</div>
                          <div style={{ color: "var(--color-text)", fontWeight: "600" }}>{formatUsd(tx.cost)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Historical Visualization */}
        {selectedChainData && (
          <div className="glass" style={{ padding: "1.5rem", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.3rem", color: "var(--color-text)", marginBottom: "1rem", fontWeight: "700" }}>
              {selectedChainData.name} - Gas Trend (Last 24 Hours)
            </h2>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "0.3rem", height: "200px", marginBottom: "1rem" }}>
              {Array.from({ length: 24 }).map((_, i) => {
                const variance = Math.sin(i / 4) * 0.3 + 0.7;
                const gasValue = selectedChainData.currentGas * variance;
                const maxGas = selectedChainData.currentGas * 1.5;
                const height = (gasValue / maxGas) * 100;

                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      background: `linear-gradient(to top, ${selectedChainData.color}, ${selectedChainData.color}80)`,
                      borderRadius: "2px 2px 0 0",
                      opacity: 0.8,
                    }}
                    title={`${i}:00 - ${formatGas(gasValue, selectedChainData.unit)}`}
                  />
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>
              <span>00:00</span>
              <span>12:00</span>
              <span>24:00</span>
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="glass" style={{ padding: "1.5rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", color: "var(--color-text)", marginBottom: "1.2rem", fontWeight: "700" }}>
            💡 Best Time to Transact
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {[
              {
                icon: "⏰",
                title: "Ethereum Mainnet",
                desc: "Cheapest Sat-Sun, 12am-6am UTC. Avoid minting events and major protocol updates.",
              },
              {
                icon: "⚡",
                title: "Layer 2s (Arbitrum, Optimism, Base)",
                desc: "Consistent low fees regardless of time. Ideal for frequent trading and DeFi strategies.",
              },
              {
                icon: "🌍",
                title: "Alt-L1s (Polygon, BSC, Avalanche)",
                desc: "Gas varies by network activity. Monitor real-time prices before submitting large transactions.",
              },
              {
                icon: "📊",
                title: "Pro Tip: Batch Transactions",
                desc: "Combine multiple swaps/interactions into one tx to divide gas costs. Use routers for efficiency.",
              },
            ].map((tip, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                  padding: "1rem",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{tip.icon}</div>
                <h3 style={{ color: "var(--color-text)", fontSize: "0.95rem", fontWeight: "700", margin: "0 0 0.4rem 0" }}>
                  {tip.title}
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem", margin: 0, lineHeight: "1.5" }}>
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {cheapestChain && (
            <div className="glass" style={{ padding: "1.5rem" }}>
              <div style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                💚 Cheapest Chain
              </div>
              <div style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-text)", marginBottom: "0.3rem" }}>
                {cheapestChain.name}
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "#3fb950" }}>
                {formatUsd(cheapestChain.costSwap)}
              </div>
              <div style={{ color: "var(--color-text-secondary)", fontSize: "0.75rem", marginTop: "0.5rem" }}>
                per token swap
              </div>
            </div>
          )}
          <div className="glass" style={{ padding: "1.5rem" }}>
            <div style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>
              🔗 L2 Networks Tracked
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--color-text)" }}>4</div>
            <div style={{ color: "var(--color-text-secondary)", fontSize: "0.75rem", marginTop: "0.5rem" }}>
              ARB, OP, BASE, zkSync
            </div>
          </div>
          <div className="glass" style={{ padding: "1.5rem" }}>
            <div style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>
              📡 Networks
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--color-text)" }}>{chains.length}</div>
            <div style={{ color: "var(--color-text-secondary)", fontSize: "0.75rem", marginTop: "0.5rem" }}>
              all blockchains
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          style={{
            textAlign: "center",
            color: "var(--color-text-secondary)",
            fontSize: "0.8rem",
            padding: "1rem",
            borderTop: "1px solid var(--color-border)",
            marginTop: "2rem",
          }}
        >
          <p style={{ margin: "0.5rem 0" }}>
            ⓘ All gas prices and transaction costs are simulated estimates. Actual fees depend on network congestion, transaction complexity, and current market prices.
          </p>
          <p style={{ margin: "0.5rem 0" }}>
            Data updates every 15 seconds. For production use, integrate with real gas APIs like Etherscan, BlockScout, or RPC endpoints.
          </p>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Multi Chain Gas",
              "url": "https://degen0x.com/tools/multi-chain-gas",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/multi-chain-gas" />
      </div>
  );
}
