"use client";

import { useState, useMemo } from "react";
// Inline SVG icons
const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
);
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

// ── Types ─────────────────────────────────────────────────────────────────────
type Chain = "All" | "Ethereum" | "Arbitrum" | "Avalanche" | "Polygon" | "Solana" | "BSC";
type RiskLevel = "Low" | "Medium" | "High";
type PlatformType = "All" | "DeFi" | "CeFi";
type Asset = "USDC" | "USDT" | "DAI" | "ETH" | "WBTC" | "SOL" | "AVAX" | "MATIC" | "ARB" | "OP";

interface LendingRate {
  id: string;
  platform: string;
  type: "DeFi" | "CeFi";
  asset: Asset;
  chain: Chain;
  supplyAPY: number;
  borrowAPR: number;
  tvl: number; // in millions USD
  riskScore: number; // 1-10, 1=lowest risk
  riskLevel: RiskLevel;
  audited: boolean;
  age: number; // years since launch
  icon: string;
  url: string;
  fees: string; // e.g., "0% deposit, 0% withdraw"
  insurance: boolean;
  lockPeriod: string;
}

// ── Platform Data (15+ platforms, realistic March 2026 data) ──────────────────
const LENDING_RATES: LendingRate[] = [
  // DeFi - Ethereum
  {
    id: "aave-eth-usdc",
    platform: "Aave V3",
    type: "DeFi",
    asset: "USDC",
    chain: "Ethereum",
    supplyAPY: 5.2,
    borrowAPR: 6.8,
    tvl: 12800,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 7,
    icon: "👻",
    url: "/go/aave-eth",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None (instant withdraw)",
  },
  {
    id: "aave-eth-usdt",
    platform: "Aave V3",
    type: "DeFi",
    asset: "USDT",
    chain: "Ethereum",
    supplyAPY: 4.8,
    borrowAPR: 6.2,
    tvl: 12800,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 7,
    icon: "👻",
    url: "/go/aave-eth",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "aave-eth-eth",
    platform: "Aave V3",
    type: "DeFi",
    asset: "ETH",
    chain: "Ethereum",
    supplyAPY: 3.4,
    borrowAPR: 5.1,
    tvl: 12800,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 7,
    icon: "👻",
    url: "/go/aave-eth",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "aave-eth-dai",
    platform: "Aave V3",
    type: "DeFi",
    asset: "DAI",
    chain: "Ethereum",
    supplyAPY: 5.6,
    borrowAPR: 7.2,
    tvl: 12800,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 7,
    icon: "👻",
    url: "/go/aave-eth",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "compound-eth-usdc",
    platform: "Compound V3",
    type: "DeFi",
    asset: "USDC",
    chain: "Ethereum",
    supplyAPY: 5.9,
    borrowAPR: 7.4,
    tvl: 8900,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 8,
    icon: "🔷",
    url: "/go/compound",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "morpho-eth-usdc",
    platform: "Morpho Blue",
    type: "DeFi",
    asset: "USDC",
    chain: "Ethereum",
    supplyAPY: 8.6,
    borrowAPR: 9.8,
    tvl: 3200,
    riskScore: 4,
    riskLevel: "Medium",
    audited: true,
    age: 2,
    icon: "🔵",
    url: "/go/morpho",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "spark-eth-dai",
    platform: "Spark Protocol",
    type: "DeFi",
    asset: "DAI",
    chain: "Ethereum",
    supplyAPY: 6.8,
    borrowAPR: 8.2,
    tvl: 2100,
    riskScore: 3,
    riskLevel: "Low",
    audited: true,
    age: 2,
    icon: "✨",
    url: "/go/spark",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "makerdao-eth-dai",
    platform: "MakerDAO",
    type: "DeFi",
    asset: "DAI",
    chain: "Ethereum",
    supplyAPY: 5.2,
    borrowAPR: 4.8,
    tvl: 15600,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 8,
    icon: "🎨",
    url: "/go/makerdao",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "yearn-eth-usdc",
    platform: "Yearn Finance",
    type: "DeFi",
    asset: "USDC",
    chain: "Ethereum",
    supplyAPY: 7.4,
    borrowAPR: 0,
    tvl: 890,
    riskScore: 5,
    riskLevel: "Medium",
    audited: true,
    age: 5,
    icon: "🔮",
    url: "/go/yearn",
    fees: "0% deposit, 20% performance",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "pendle-eth-wbtc",
    platform: "Pendle Finance",
    type: "DeFi",
    asset: "WBTC",
    chain: "Ethereum",
    supplyAPY: 11.2,
    borrowAPR: 0,
    tvl: 1540,
    riskScore: 6,
    riskLevel: "Medium",
    audited: true,
    age: 3,
    icon: "🌱",
    url: "/go/pendle",
    fees: "0% deposit, variable",
    insurance: false,
    lockPeriod: "Until maturity",
  },
  // DeFi - Arbitrum
  {
    id: "aave-arb-usdc",
    platform: "Aave V3",
    type: "DeFi",
    asset: "USDC",
    chain: "Arbitrum",
    supplyAPY: 6.1,
    borrowAPR: 7.6,
    tvl: 4200,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 7,
    icon: "👻",
    url: "/go/aave-arb",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "aave-arb-eth",
    platform: "Aave V3",
    type: "DeFi",
    asset: "ETH",
    chain: "Arbitrum",
    supplyAPY: 4.2,
    borrowAPR: 6.1,
    tvl: 4200,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 7,
    icon: "👻",
    url: "/go/aave-arb",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "compound-arb-usdc",
    platform: "Compound V3",
    type: "DeFi",
    asset: "USDC",
    chain: "Arbitrum",
    supplyAPY: 6.8,
    borrowAPR: 8.1,
    tvl: 2800,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 8,
    icon: "🔷",
    url: "/go/compound",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "gmx-arb-usdc",
    platform: "GMX Protocol",
    type: "DeFi",
    asset: "USDC",
    chain: "Arbitrum",
    supplyAPY: 12.4,
    borrowAPR: 0,
    tvl: 680,
    riskScore: 7,
    riskLevel: "High",
    audited: true,
    age: 3,
    icon: "📈",
    url: "/go/gmx",
    fees: "0% deposit, variable",
    insurance: false,
    lockPeriod: "None",
  },
  // DeFi - Avalanche
  {
    id: "aave-avax-usdc",
    platform: "Aave V3",
    type: "DeFi",
    asset: "USDC",
    chain: "Avalanche",
    supplyAPY: 7.3,
    borrowAPR: 8.9,
    tvl: 1840,
    riskScore: 3,
    riskLevel: "Low",
    audited: true,
    age: 7,
    icon: "👻",
    url: "/go/aave-avax",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "benqi-avax-avax",
    platform: "Benqi",
    type: "DeFi",
    asset: "AVAX",
    chain: "Avalanche",
    supplyAPY: 5.4,
    borrowAPR: 6.7,
    tvl: 580,
    riskScore: 4,
    riskLevel: "Medium",
    audited: true,
    age: 4,
    icon: "🔺",
    url: "/go/benqi",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "traderjoe-avax-usdc",
    platform: "Trader Joe",
    type: "DeFi",
    asset: "USDC",
    chain: "Avalanche",
    supplyAPY: 8.2,
    borrowAPR: 9.4,
    tvl: 420,
    riskScore: 5,
    riskLevel: "Medium",
    audited: true,
    age: 3,
    icon: "💼",
    url: "/go/traderjoe",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  // DeFi - Solana
  {
    id: "solend-sol-sol",
    platform: "Solend",
    type: "DeFi",
    asset: "SOL",
    chain: "Solana",
    supplyAPY: 8.6,
    borrowAPR: 9.8,
    tvl: 240,
    riskScore: 6,
    riskLevel: "Medium",
    audited: true,
    age: 4,
    icon: "🟣",
    url: "/go/solend",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "marinade-sol-sol",
    platform: "Marinade Finance",
    type: "DeFi",
    asset: "SOL",
    chain: "Solana",
    supplyAPY: 6.8,
    borrowAPR: 0,
    tvl: 1900,
    riskScore: 3,
    riskLevel: "Low",
    audited: true,
    age: 5,
    icon: "🟩",
    url: "/go/marinade",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None (liquid)",
  },
  {
    id: "justlend-sol-usdc",
    platform: "JustLend",
    type: "DeFi",
    asset: "USDC",
    chain: "Solana",
    supplyAPY: 9.4,
    borrowAPR: 10.6,
    tvl: 380,
    riskScore: 5,
    riskLevel: "Medium",
    audited: false,
    age: 2,
    icon: "⚡",
    url: "/go/justlend",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  // DeFi - Polygon
  {
    id: "aave-poly-usdc",
    platform: "Aave V3",
    type: "DeFi",
    asset: "USDC",
    chain: "Polygon",
    supplyAPY: 5.8,
    borrowAPR: 7.2,
    tvl: 1620,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 7,
    icon: "👻",
    url: "/go/aave-poly",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "aave-poly-matic",
    platform: "Aave V3",
    type: "DeFi",
    asset: "MATIC",
    chain: "Polygon",
    supplyAPY: 3.2,
    borrowAPR: 4.8,
    tvl: 1620,
    riskScore: 2,
    riskLevel: "Low",
    audited: true,
    age: 7,
    icon: "👻",
    url: "/go/aave-poly",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  // DeFi - BSC
  {
    id: "venus-bsc-usdc",
    platform: "Venus Protocol",
    type: "DeFi",
    asset: "USDC",
    chain: "BSC",
    supplyAPY: 4.9,
    borrowAPR: 6.2,
    tvl: 1100,
    riskScore: 5,
    riskLevel: "Medium",
    audited: true,
    age: 6,
    icon: "🌸",
    url: "/go/venus",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "venus-bsc-bnb",
    platform: "Venus Protocol",
    type: "DeFi",
    asset: "SOL",
    chain: "BSC",
    supplyAPY: 3.6,
    borrowAPR: 5.1,
    tvl: 1100,
    riskScore: 5,
    riskLevel: "Medium",
    audited: true,
    age: 6,
    icon: "🌸",
    url: "/go/venus",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  // CeFi
  {
    id: "celsius-usdc",
    platform: "Celsius",
    type: "CeFi",
    asset: "USDC",
    chain: "Ethereum",
    supplyAPY: 8.2,
    borrowAPR: 12.4,
    tvl: 1200,
    riskScore: 7,
    riskLevel: "High",
    audited: false,
    age: 8,
    icon: "🔥",
    url: "/go/celsius",
    fees: "0% deposit, 0% withdraw",
    insurance: true,
    lockPeriod: "30 days (variable)",
  },
  {
    id: "nexo-usdc",
    platform: "Nexo",
    type: "CeFi",
    asset: "USDC",
    chain: "Ethereum",
    supplyAPY: 7.6,
    borrowAPR: 11.8,
    tvl: 950,
    riskScore: 7,
    riskLevel: "High",
    audited: false,
    age: 7,
    icon: "🔒",
    url: "/go/nexo",
    fees: "0% deposit, 0% withdraw",
    insurance: true,
    lockPeriod: "None",
  },
  {
    id: "blockfi-usdc",
    platform: "BlockFi",
    type: "CeFi",
    asset: "USDC",
    chain: "Ethereum",
    supplyAPY: 5.4,
    borrowAPR: 9.6,
    tvl: 640,
    riskScore: 8,
    riskLevel: "High",
    audited: false,
    age: 8,
    icon: "🏦",
    url: "/go/blockfi",
    fees: "0% deposit, 0% withdraw",
    insurance: true,
    lockPeriod: "None",
  },
  {
    id: "ondo-usdc",
    platform: "Ondo Finance",
    type: "DeFi",
    asset: "USDC",
    chain: "Ethereum",
    supplyAPY: 5.8,
    borrowAPR: 0,
    tvl: 280,
    riskScore: 6,
    riskLevel: "Medium",
    audited: true,
    age: 2,
    icon: "🎯",
    url: "/go/ondo",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
  {
    id: "ethena-usde",
    platform: "Ethena",
    type: "DeFi",
    asset: "USDC",
    chain: "Ethereum",
    supplyAPY: 8.4,
    borrowAPR: 0,
    tvl: 1840,
    riskScore: 5,
    riskLevel: "Medium",
    audited: true,
    age: 2,
    icon: "💙",
    url: "/go/ethena",
    fees: "0% deposit, 0% withdraw",
    insurance: false,
    lockPeriod: "None",
  },
];

type SortKey = "platform" | "supplyAPY" | "tvl" | "riskScore" | "chain";

export default function LendingRatesClient() {
  const [selectedAsset, setSelectedAsset] = useState<Asset | "All">("All");
  const [selectedChain, setSelectedChain] = useState<Chain>("All");
  const [selectedType, setSelectedType] = useState<PlatformType>("All");
  const [minAPY, setMinAPY] = useState(0);
  const [sortBy, setSortBy] = useState<SortKey>("supplyAPY");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [comparisonMode, setComparisonMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [lastUpdated] = useState(new Date("2026-03-11T15:30:00Z"));

  const assets: (Asset | "All")[] = [
    "All",
    "USDC",
    "USDT",
    "DAI",
    "ETH",
    "WBTC",
    "SOL",
    "AVAX",
    "MATIC",
    "ARB",
    "OP",
  ];
  const chains: Chain[] = ["All", "Ethereum", "Arbitrum", "Avalanche", "Polygon", "Solana", "BSC"];
  const types: PlatformType[] = ["All", "DeFi", "CeFi"];

  // Filter and sort
  const filtered = useMemo(() => {
    let result = LENDING_RATES;

    if (selectedAsset !== "All") {
      result = result.filter((r) => r.asset === selectedAsset);
    }
    if (selectedChain !== "All") {
      result = result.filter((r) => r.chain === selectedChain);
    }
    if (selectedType !== "All") {
      result = result.filter((r) => r.type === selectedType);
    }
    if (minAPY > 0) {
      result = result.filter((r) => r.supplyAPY >= minAPY);
    }

    // Sort
    result.sort((a, b) => {
      let aVal: number | string = 0;
      let bVal: number | string = 0;

      if (sortBy === "supplyAPY") {
        aVal = a.supplyAPY;
        bVal = b.supplyAPY;
      } else if (sortBy === "tvl") {
        aVal = a.tvl;
        bVal = b.tvl;
      } else if (sortBy === "riskScore") {
        aVal = a.riskScore;
        bVal = b.riskScore;
      } else if (sortBy === "platform") {
        aVal = a.platform.toLowerCase();
        bVal = b.platform.toLowerCase();
      } else if (sortBy === "chain") {
        aVal = a.chain.toLowerCase();
        bVal = b.chain.toLowerCase();
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDir === "asc" ? aVal - bVal : bVal - aVal;
      } else {
        return sortDir === "asc"
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      }
    });

    return result;
  }, [selectedAsset, selectedChain, selectedType, minAPY, sortBy, sortDir]);

  // Comparison data
  const comparisonData = useMemo(() => {
    return LENDING_RATES.filter((r) => selectedIds.includes(r.id));
  }, [selectedIds]);

  const toggleComparison = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev.slice(-1), id]
    );
  };

  const getRiskColor = (level: RiskLevel) => {
    if (level === "Low") return "#3fb950";
    if (level === "Medium") return "#d29922";
    return "#f85149";
  };

  const renderSort = (key: SortKey, label: string) => {
    const isActive = sortBy === key;
    return (
      <button
        onClick={() => {
          if (isActive) {
            setSortDir(sortDir === "asc" ? "desc" : "asc");
          } else {
            setSortBy(key);
            setSortDir("desc");
          }
        }}
        className="flex items-center gap-1 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
      >
        {label}
        {isActive && (
          <span className="text-[var(--color-primary)]">
            {sortDir === "asc" ? (
              <ChevronUpIcon />
            ) : (
              <ChevronDownIcon />
            )}
          </span>
        )}
      </button>
    );
  };

  return (
    <div className="space-y-6">
      {/* Comparison Mode */}
      {comparisonMode && comparisonData.length > 0 && (
        <div className="glass rounded-xl p-5 border border-[var(--color-primary)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[var(--color-text)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">⚖️</span> Comparing {comparisonData.length}{" "}
              Platform{comparisonData.length > 1 ? "s" : ""}
            </h3>
            <button
              onClick={() => {
                setComparisonMode(false);
                setSelectedIds([]);
              }}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            >
              <XIcon />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
            {comparisonData.map((rate) => (
              <div key={rate.id} className="bg-[var(--color-surface)] rounded-lg p-3 text-sm">
                <div className="font-semibold text-[var(--color-text)]">{rate.platform}</div>
                <div className="text-xs text-[var(--color-text-secondary)] mb-2">
                  {rate.asset} • {rate.chain}
                </div>
                <div className="text-lg font-bold text-[var(--color-primary)]">
                  {rate.supplyAPY.toFixed(1)}%
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] mt-1">Supply APY</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              {
                label: "Avg Supply APY",
                value: (comparisonData.reduce((s, r) => s + r.supplyAPY, 0) / comparisonData.length).toFixed(2) + "%",
              },
              {
                label: "Avg TVL",
                value: "$" + (comparisonData.reduce((s, r) => s + r.tvl, 0) / comparisonData.length).toFixed(0) + "M",
              },
              {
                label: "Best Risk Score",
                value: Math.min(...comparisonData.map((r) => r.riskScore)).toString(),
              },
            ].map((stat) => (
              <div key={stat.label} className="bg-[var(--color-surface)] rounded-lg p-3">
                <div className="text-xs text-[var(--color-text-secondary)]">{stat.label}</div>
                <div className="font-semibold text-[var(--color-text)]">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="glass rounded-xl p-5 space-y-4">
        {/* Row 1: Assets */}
        <div>
          <label className="text-xs font-semibold text-[var(--color-text-secondary)] mb-2 block">
            Asset
          </label>
          <div className="flex flex-wrap gap-2">
            {assets.map((asset) => (
              <button
                key={asset}
                onClick={() => setSelectedAsset(asset)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedAsset === asset
                    ? "bg-[var(--color-primary)] text-white"
                    : "glass hover:bg-[var(--color-surface)]"
                }`}
              >
                {asset}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Chain */}
        <div>
          <label className="text-xs font-semibold text-[var(--color-text-secondary)] mb-2 block">
            Blockchain
          </label>
          <div className="flex flex-wrap gap-2">
            {chains.map((chain) => (
              <button
                key={chain}
                onClick={() => setSelectedChain(chain)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedChain === chain
                    ? "bg-[var(--color-primary)] text-white"
                    : "glass hover:bg-[var(--color-surface)]"
                }`}
              >
                {chain}
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Type & Min APY */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-[var(--color-text-secondary)] mb-2 block">
              Platform Type
            </label>
            <div className="flex gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex-1 ${
                    selectedType === type
                      ? "bg-[var(--color-primary)] text-white"
                      : "glass hover:bg-[var(--color-surface)]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-[var(--color-text-secondary)] mb-2 block">
              Min APY: {minAPY.toFixed(1)}%
            </label>
            <input
              type="range"
              min="0"
              max="15"
              step="0.5"
              value={minAPY}
              onChange={(e) => setMinAPY(parseFloat(e.target.value))}
              className="w-full h-2 bg-[var(--color-surface)] rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Results & Mode Toggle */}
        <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)]">
          <span className="text-xs text-[var(--color-text-secondary)]">
            {filtered.length} rates found
          </span>
          <button
            onClick={() => {
              setComparisonMode(!comparisonMode);
              if (comparisonMode) setSelectedIds([]);
            }}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
              comparisonMode
                ? "bg-[var(--color-primary)] text-white"
                : "glass hover:bg-[var(--color-surface)]"
            }`}
          >
            {comparisonMode ? "Exit Comparison" : "Compare Mode"}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
              {comparisonMode && <th className="px-3 py-3 w-12 text-center">✓</th>}
              <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">
                {renderSort("platform", "Platform")}
              </th>
              <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold text-xs hidden md:table-cell">
                Asset
              </th>
              <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold text-xs hidden lg:table-cell">
                {renderSort("chain", "Chain")}
              </th>
              <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">
                {renderSort("supplyAPY", "Supply APY")}
              </th>
              <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold text-xs hidden md:table-cell">
                Borrow APR
              </th>
              <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold text-xs hidden lg:table-cell">
                {renderSort("tvl", "TVL")}
              </th>
              <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold text-xs hidden xl:table-cell">
                {renderSort("riskScore", "Risk")}
              </th>
              <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold text-xs hidden sm:table-cell">
                Audited
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((rate) => (
              <tr
                key={rate.id}
                className={`border-b border-[var(--color-border)] transition-colors ${
                  comparisonMode && selectedIds.includes(rate.id)
                    ? "bg-[var(--color-primary)] bg-opacity-10"
                    : "hover:bg-[var(--color-surface)]"
                }`}
              >
                {comparisonMode && (
                  <td className="px-3 py-3 text-center">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(rate.id)}
                      onChange={() => toggleComparison(rate.id)}
                      disabled={
                        selectedIds.length >= 3 && !selectedIds.includes(rate.id)
                      }
                      className="w-4 h-4 rounded cursor-pointer"
                    />
                  </td>
                )}
                <td className="px-4 py-3">
                  <a
                    href={rate.url}
                    className="flex items-center gap-2 group"
                  >
                    <span className="text-lg">{rate.icon}</span>
                    <div>
                      <div className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                        {rate.platform}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">
                        {rate.type}
                      </div>
                    </div>
                  </a>
                </td>
                <td className="px-4 py-3 text-center text-[var(--color-text)] hidden md:table-cell font-medium text-xs">
                  {rate.asset}
                </td>
                <td className="px-4 py-3 text-center text-[var(--color-text-secondary)] text-xs hidden lg:table-cell">
                  {rate.chain}
                </td>
                <td className="px-4 py-3 text-right font-bold text-[var(--color-primary)] text-base">
                  {rate.supplyAPY.toFixed(1)}%
                </td>
                <td className="px-4 py-3 text-right text-[var(--color-text-secondary)] text-xs hidden md:table-cell">
                  {rate.borrowAPR > 0 ? `${rate.borrowAPR.toFixed(1)}%` : "—"}
                </td>
                <td className="px-4 py-3 text-right text-[var(--color-text-secondary)] text-xs hidden lg:table-cell">
                  ${rate.tvl.toFixed(0)}M
                </td>
                <td className="px-4 py-3 text-center hidden xl:table-cell">
                  <div className="flex items-center justify-center">
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-full text-white"
                      style={{ backgroundColor: getRiskColor(rate.riskLevel) }}
                    >
                      {rate.riskLevel}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center text-xs hidden sm:table-cell">
                  {rate.audited ? (
                    <span className="text-green-400">✓ Yes</span>
                  ) : (
                    <span className="text-orange-400">⚠ No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="glass rounded-xl p-8 text-center">
          <p className="text-[var(--color-text-secondary)]">
            No rates match your filters. Try adjusting your selection.
          </p>
        </div>
      )}

      {/* Yield Strategies */}
      <section className="glass rounded-xl p-5">
        <h3 className="font-bold text-[var(--color-text)] mb-4">Suggested Strategies</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Best for Stablecoins",
              desc: "Focus on USDC/USDT yields with low risk",
              rates: filtered.filter((r) => (r.asset === "USDC" || r.asset === "USDT") && r.riskLevel === "Low").slice(0, 1),
            },
            {
              title: "Highest ETH Yield",
              desc: "Maximum yield for ETH suppliers",
              rates: filtered.filter((r) => r.asset === "ETH").sort((a, b) => b.supplyAPY - a.supplyAPY).slice(0, 1),
            },
            {
              title: "Best Risk/Reward",
              desc: "Balance yield and safety",
              rates: filtered.filter((r) => r.riskLevel === "Medium" && r.supplyAPY >= 7).slice(0, 1),
            },
          ].map((strategy, i) => (
            <div key={i} className="bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)]">
              <h4 className="font-semibold text-[var(--color-text)] text-sm mb-1">{strategy.title}</h4>
              <p className="text-xs text-[var(--color-text-secondary)] mb-3">{strategy.desc}</p>
              {strategy.rates.length > 0 ? (
                <div className="text-sm">
                  <div className="font-semibold text-[var(--color-primary)]">
                    {strategy.rates[0].platform}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    {strategy.rates[0].supplyAPY.toFixed(1)}% APY
                  </div>
                </div>
              ) : (
                <p className="text-xs text-[var(--color-text-secondary)]">No matching rates</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Last Updated & Disclaimer */}
      <div className="text-xs text-[var(--color-text-secondary)] space-y-2">
        <div>
          <strong className="text-[var(--color-text)]">Last Updated:</strong> {lastUpdated.toLocaleDateString()} at{" "}
          {lastUpdated.toLocaleTimeString()}
        </div>
        <div>
          <strong className="text-[var(--color-text)]">Disclaimer:</strong> Rates shown are indicative and subject to
          change. Always verify on official protocol/platform websites before transacting. Past yields do not guarantee
          future returns. High yields may indicate elevated risk. This is not investment advice.
        </div>
      </div>
    </div>
  );
}
