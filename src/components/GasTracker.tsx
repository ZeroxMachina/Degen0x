"use client";

import { useState, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────────
interface EthereumGasPrices {
  low: number;
  standard: number;
  fast: number;
  instant: number;
}

interface ChainGasPrices {
  name: string;
  symbol: string;
  price: number;
  unit: string;
  color: "green" | "yellow" | "red";
}

interface CongestionLevel {
  level: "Low" | "Medium" | "High";
  percentage: number;
  color: string;
}

interface TransactionCost {
  operation: string;
  gasUnits: number;
  costUSD: string;
}

// ─── Utility Functions ───────────────────────────────────────────────────
function getCongestionLevel(gasPrice: number): CongestionLevel {
  if (gasPrice < 30) {
    return { level: "Low", percentage: 25, color: "bg-green-500" };
  } else if (gasPrice < 60) {
    return { level: "Medium", percentage: 50, color: "bg-yellow-500" };
  } else {
    return { level: "High", percentage: 75, color: "bg-red-500" };
  }
}

function getGasColor(price: number): "green" | "yellow" | "red" {
  if (price < 30) return "green";
  if (price < 60) return "yellow";
  return "red";
}

function getGasColorClasses(color: "green" | "yellow" | "red"): {
  bg: string;
  text: string;
  badge: string;
} {
  switch (color) {
    case "green":
      return {
        bg: "bg-emerald-500/10",
        text: "text-emerald-400",
        badge: "bg-emerald-500/20 text-emerald-300",
      };
    case "yellow":
      return {
        bg: "bg-yellow-500/10",
        text: "text-yellow-400",
        badge: "bg-yellow-500/20 text-yellow-300",
      };
    case "red":
      return {
        bg: "bg-red-500/10",
        text: "text-red-400",
        badge: "bg-red-500/20 text-red-300",
      };
  }
}

// ─── Gas Price Card Component ────────────────────────────────────────────
function GasPriceCard({
  title,
  price,
  unit,
  color,
}: {
  title: string;
  price: number;
  unit: string;
  color: "green" | "yellow" | "red";
}) {
  const colors = getGasColorClasses(color);

  return (
    <div className={`${colors.bg} p-4 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300`}>
      <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">{title}</p>
      <div className="flex items-baseline gap-2">
        <p className={`text-2xl font-bold ${colors.text}`}>{price.toFixed(1)}</p>
        <p className="text-sm text-gray-500">{unit}</p>
      </div>
      <div className={`${colors.badge} px-2 py-1 rounded text-xs font-semibold mt-3 inline-block`}>
        {color === "green" ? "💚 Cheap" : color === "yellow" ? "🟡 Moderate" : "🔴 Expensive"}
      </div>
    </div>
  );
}

// ─── Chain Gas Price Card Component ──────────────────────────────────────
function ChainGasPriceCard({ chain }: { chain: ChainGasPrices }) {
  const colors = getGasColorClasses(chain.color);

  return (
    <div className={`${colors.bg} p-4 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300`}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-gray-200">{chain.name}</p>
        <span className="text-xs bg-gray-700/50 px-2 py-1 rounded text-gray-300">{chain.symbol}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <p className={`text-xl font-bold ${colors.text}`}>{chain.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">{chain.unit}</p>
      </div>
    </div>
  );
}

// ─── Congestion Gauge Component ─────────────────────────────────────────
function CongestionGauge({ level, percentage, color }: CongestionLevel) {
  return (
    <div className="glass p-6 rounded-2xl border border-gray-700/30">
      <h3 className="text-lg font-semibold text-gray-100 mb-4">Network Congestion</h3>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Congestion Level</span>
            <span
              className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                level === "Low"
                  ? "bg-emerald-500/20 text-emerald-300"
                  : level === "Medium"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-red-500/20 text-red-300"
              }`}
            >
              {level}
            </span>
          </div>
          <div className="w-full bg-gray-700/30 rounded-full h-3">
            <div
              className={`${color} h-3 rounded-full transition-all duration-300`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="text-center">
            <p className="text-xs text-gray-500">Min Wait</p>
            <p className="text-sm font-semibold text-gray-200">
              {level === "Low" ? "15s" : level === "Medium" ? "30s" : "2m"}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Avg Wait</p>
            <p className="text-sm font-semibold text-gray-200">
              {level === "Low" ? "30s" : level === "Medium" ? "1m" : "5m"}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Max Wait</p>
            <p className="text-sm font-semibold text-gray-200">
              {level === "Low" ? "1m" : level === "Medium" ? "3m" : "10m"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Transaction Cost Card Component ────────────────────────────────────
function TransactionCostCard({ operation, gasUnits, costUSD }: TransactionCost) {
  return (
    <div className="glass-subtle p-4 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-200">{operation}</p>
          <p className="text-xs text-gray-500 mt-1">{gasUnits.toLocaleString()} gas</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-400">{costUSD}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Best Time to Transact Component ────────────────────────────────────
function BestTimeToTransact() {
  return (
    <div className="glass p-6 rounded-2xl border border-gray-700/30">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-100">Best Time to Transact</h3>
        <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold">✓ Optimal</span>
      </div>

      <div className="space-y-3">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
          <p className="text-sm text-emerald-300 font-semibold mb-2">Perfect Window: 2:00 AM - 4:00 AM UTC</p>
          <p className="text-xs text-gray-400">
            Network congestion is at its lowest during these hours. Average gas prices drop 30-40% during this window.
          </p>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
          <p className="text-sm text-yellow-300 font-semibold mb-2">Good Window: Weekdays 4:00 AM - 7:00 AM UTC</p>
          <p className="text-xs text-gray-400">
            Lower gas prices during early morning hours before Asian market opens.
          </p>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-sm text-red-300 font-semibold mb-2">Avoid: 12:00 PM - 4:00 PM UTC</p>
          <p className="text-xs text-gray-400">
            Peak hours with maximum congestion and highest gas prices. Avoid non-critical transactions.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main GasTracker Component ──────────────────────────────────────────
export default function GasTracker() {
  const [ethereumGas, setEthereumGas] = useState<EthereumGasPrices>({
    low: 28.5,
    standard: 31.2,
    fast: 45.8,
    instant: 62.4,
  });

  const [lastUpdated, setLastUpdated] = useState<string>(new Date().toLocaleTimeString());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const chainGasPrices: ChainGasPrices[] = [
    {
      name: "Solana",
      symbol: "SOL",
      price: 0.00025,
      unit: "SOL",
      color: "green",
    },
    {
      name: "Arbitrum",
      symbol: "ARB",
      price: 0.08,
      unit: "gwei",
      color: "green",
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      price: 1.2,
      unit: "gwei",
      color: "green",
    },
    {
      name: "BSC",
      symbol: "BNB",
      price: 3.5,
      unit: "gwei",
      color: "yellow",
    },
    {
      name: "Base",
      symbol: "BASE",
      price: 0.15,
      unit: "gwei",
      color: "green",
    },
    {
      name: "Optimism",
      symbol: "OP",
      price: 0.12,
      unit: "gwei",
      color: "green",
    },
  ];

  const congestionLevel = getCongestionLevel(ethereumGas.standard);

  const transactionCosts: TransactionCost[] = [
    {
      operation: "Simple Transfer",
      gasUnits: 21000,
      costUSD: "$0.67",
    },
    {
      operation: "Token Swap",
      gasUnits: 85000,
      costUSD: "$2.73",
    },
    {
      operation: "NFT Mint",
      gasUnits: 110000,
      costUSD: "$3.54",
    },
    {
      operation: "Contract Deploy",
      gasUnits: 2000000,
      costUSD: "$64.32",
    },
  ];

  // Simulate refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setEthereumGas({
        low: Math.max(15, ethereumGas.low + (Math.random() - 0.5) * 10),
        standard: Math.max(18, ethereumGas.standard + (Math.random() - 0.5) * 10),
        fast: Math.max(25, ethereumGas.fast + (Math.random() - 0.5) * 15),
        instant: Math.max(35, ethereumGas.instant + (Math.random() - 0.5) * 15),
      });
      setLastUpdated(new Date().toLocaleTimeString());
      setIsRefreshing(false);
    }, 600);
  };

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(handleRefresh, 30000);
    return () => clearInterval(interval);
  }, [ethereumGas]);

  const ethPrice = 3891;

  return (
    <div className="space-y-6">
      {/* Header with Refresh */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-1">Ethereum Gas Prices</h2>
          <p className="text-sm text-gray-400">Real-time network gas costs</p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="glass px-4 py-2 rounded-lg text-sm font-medium text-blue-400 hover:bg-gray-700/30 transition-all duration-300 disabled:opacity-50"
        >
          {isRefreshing ? "⟳ Refreshing..." : "⟳ Refresh"}
        </button>
      </div>

      <p className="text-xs text-gray-500">Last updated: {lastUpdated}</p>

      {/* Ethereum Gas Price Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <GasPriceCard
          title="Low"
          price={ethereumGas.low}
          unit="gwei"
          color={getGasColor(ethereumGas.low)}
        />
        <GasPriceCard
          title="Standard"
          price={ethereumGas.standard}
          unit="gwei"
          color={getGasColor(ethereumGas.standard)}
        />
        <GasPriceCard
          title="Fast"
          price={ethereumGas.fast}
          unit="gwei"
          color={getGasColor(ethereumGas.fast)}
        />
        <GasPriceCard
          title="Instant"
          price={ethereumGas.instant}
          unit="gwei"
          color={getGasColor(ethereumGas.instant)}
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Congestion Gauge */}
          <CongestionGauge {...congestionLevel} />

          {/* Best Time to Transact */}
          <BestTimeToTransact />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Transaction Costs */}
          <div className="glass p-6 rounded-2xl border border-gray-700/30">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Estimated Costs (USD)</h3>
            <div className="space-y-3">
              {transactionCosts.map((cost) => (
                <TransactionCostCard key={cost.operation} {...cost} />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Based on current ETH price of ${ethPrice.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Other Chains */}
      <div className="glass p-6 rounded-2xl border border-gray-700/30">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Gas Prices - Other Chains</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chainGasPrices.map((chain) => (
            <ChainGasPriceCard key={chain.name} chain={chain} />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="glass p-6 rounded-2xl border border-gray-700/30">
        <h3 className="text-lg font-semibold text-gray-100 mb-3">About Gas Fees</h3>
        <div className="space-y-2 text-sm text-gray-400">
          <p>
            Gas fees are the cost paid to execute transactions on blockchain networks. They're measured in Gwei (1
            Gwei = 0.000000001 ETH) on Ethereum.
          </p>
          <p>
            The price varies based on network demand. During peak times, competition increases gas prices. Off-peak
            hours typically offer the lowest fees.
          </p>
          <p>
            Set appropriate gas prices to balance speed vs. cost. Too low and your transaction may get stuck; too high
            and you overpay unnecessarily.
          </p>
        </div>
      </div>
    </div>
  );
}
