'use client';

"use client";

import { useState, useMemo, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { ToolStructuredData } from "@/components/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── Types ─────────────────────────────────────────────────────────────────────
interface NFT {
  id: string;
  name: string;
  image: string;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  rarityScore: number;
  purchasePrice: number;
  currentPrice: number;
  chain: "ethereum" | "solana" | "polygon" | "base";
  collection: string;
  mintDate: number;
  gasFeePaid: number;
}

interface CollectionData {
  name: string;
  symbol: string;
  chain: "ethereum" | "solana" | "polygon" | "base";
  floorPrice: number;
  volume24h: number;
  holders: number;
  totalSupply: number;
  avgPrice: number;
  priceChange24h: number;
  image: string;
  color: string;
  nfts: NFT[];
}

type SortKey = "name" | "floorPrice" | "value" | "pnl" | "rarity" | "date";
type ViewMode = "grid" | "list";
type ChainFilter = "all" | "ethereum" | "solana" | "polygon" | "base";
type RarityFilter = "all" | "common" | "uncommon" | "rare" | "epic" | "legendary";

// ── Simulated Collections Data ────────────────────────────────────────────────
const DEMO_COLLECTIONS: CollectionData[] = [
  {
    name: "Bored Ape Yacht Club",
    symbol: "BAYC",
    chain: "ethereum",
    floorPrice: 31.2,
    volume24h: 4850000,
    holders: 4320,
    totalSupply: 10000,
    avgPrice: 42.8,
    priceChange24h: 3.4,
    image: "🐵",
    color: "#FFA500",
    nfts: Array.from({ length: 4 }, (_, i) => ({
      id: `bayc-${i + 1}`,
      name: `Bored Ape #${1205 + i}`,
      image: "🐵",
      rarity: ["common", "uncommon", "rare", "epic"][i] as NFT["rarity"],
      rarityScore: 25 + i * 20,
      purchasePrice: 28 + i * 5,
      currentPrice: 31.2 + i * 3,
      chain: "ethereum",
      collection: "Bored Ape Yacht Club",
      mintDate: Date.now() - 365 * 24 * 60 * 60 * 1000 * (i + 1),
      gasFeePaid: 0.5 + i * 0.15,
    })),
  },
  {
    name: "CryptoPunks",
    symbol: "CP",
    chain: "ethereum",
    floorPrice: 48.5,
    volume24h: 2320000,
    holders: 3012,
    totalSupply: 10000,
    avgPrice: 65.3,
    priceChange24h: -1.2,
    image: "👽",
    color: "#7B68EE",
    nfts: Array.from({ length: 3 }, (_, i) => ({
      id: `cp-${i + 1}`,
      name: `CryptoPunk #${5234 + i * 100}`,
      image: "👽",
      rarity: ["uncommon", "rare", "epic"][i] as NFT["rarity"],
      rarityScore: 42 + i * 18,
      purchasePrice: 45 + i * 8,
      currentPrice: 48.5 + i * 5,
      chain: "ethereum",
      collection: "CryptoPunks",
      mintDate: Date.now() - 365 * 24 * 60 * 60 * 1000 * (i + 2),
      gasFeePaid: 0.8 + i * 0.2,
    })),
  },
  {
    name: "Azuki",
    symbol: "AZK",
    chain: "ethereum",
    floorPrice: 8.75,
    volume24h: 1240000,
    holders: 8450,
    totalSupply: 10000,
    avgPrice: 12.4,
    priceChange24h: 2.8,
    image: "🍜",
    color: "#FF1493",
    nfts: Array.from({ length: 5 }, (_, i) => ({
      id: `azuki-${i + 1}`,
      name: `Azuki #${3421 + i * 50}`,
      image: "🍜",
      rarity: ["common", "common", "uncommon", "uncommon", "rare"][i] as NFT["rarity"],
      rarityScore: 18 + i * 12,
      purchasePrice: 7.5 + i * 1.2,
      currentPrice: 8.75 + i * 0.5,
      chain: "ethereum",
      collection: "Azuki",
      mintDate: Date.now() - 365 * 24 * 60 * 60 * 1000 * (i + 0.5),
      gasFeePaid: 0.3 + i * 0.08,
    })),
  },
  {
    name: "DeGods",
    symbol: "DGOD",
    chain: "solana",
    floorPrice: 22.4,
    volume24h: 850000,
    holders: 5234,
    totalSupply: 10000,
    avgPrice: 28.5,
    priceChange24h: 5.2,
    image: "💀",
    color: "#FF4500",
    nfts: Array.from({ length: 3 }, (_, i) => ({
      id: `dgod-${i + 1}`,
      name: `DeGod #${1843 + i * 80}`,
      image: "💀",
      rarity: ["uncommon", "rare", "epic"][i] as NFT["rarity"],
      rarityScore: 38 + i * 20,
      purchasePrice: 20 + i * 4,
      currentPrice: 22.4 + i * 2.5,
      chain: "solana",
      collection: "DeGods",
      mintDate: Date.now() - 365 * 24 * 60 * 60 * 1000 * (i + 1.5),
      gasFeePaid: 0.12 + i * 0.03,
    })),
  },
  {
    name: "Pudgy Penguins",
    symbol: "PP",
    chain: "ethereum",
    floorPrice: 12.8,
    volume24h: 920000,
    holders: 6820,
    totalSupply: 8888,
    avgPrice: 15.6,
    priceChange24h: 1.1,
    image: "🐧",
    color: "#00CED1",
    nfts: Array.from({ length: 4 }, (_, i) => ({
      id: `pp-${i + 1}`,
      name: `Pudgy Penguin #${2341 + i * 70}`,
      image: "🐧",
      rarity: ["common", "uncommon", "uncommon", "rare"][i] as NFT["rarity"],
      rarityScore: 22 + i * 15,
      purchasePrice: 11.2 + i * 1.5,
      currentPrice: 12.8 + i * 0.8,
      chain: "ethereum",
      collection: "Pudgy Penguins",
      mintDate: Date.now() - 365 * 24 * 60 * 60 * 1000 * (i + 0.8),
      gasFeePaid: 0.35 + i * 0.1,
    })),
  },
  {
    name: "Magic Eden",
    symbol: "ME",
    chain: "solana",
    floorPrice: 3.5,
    volume24h: 180000,
    holders: 15234,
    totalSupply: 50000,
    avgPrice: 5.2,
    priceChange24h: -0.8,
    image: "✨",
    color: "#9370DB",
    nfts: Array.from({ length: 6 }, (_, i) => ({
      id: `me-${i + 1}`,
      name: `Magic Eden Gen #${12345 + i * 100}`,
      image: "✨",
      rarity: ["common", "common", "common", "uncommon", "uncommon", "rare"][i] as NFT["rarity"],
      rarityScore: 12 + i * 8,
      purchasePrice: 3.0 + i * 0.3,
      currentPrice: 3.5 + i * 0.2,
      chain: "solana",
      collection: "Magic Eden",
      mintDate: Date.now() - 365 * 24 * 60 * 60 * 1000 * (i + 0.3),
      gasFeePaid: 0.08 + i * 0.02,
    })),
  },
  {
    name: "Doodles",
    symbol: "DOODLES",
    chain: "ethereum",
    floorPrice: 5.6,
    volume24h: 340000,
    holders: 4921,
    totalSupply: 10000,
    avgPrice: 7.8,
    priceChange24h: 0.4,
    image: "🎨",
    color: "#FFD700",
    nfts: Array.from({ length: 2 }, (_, i) => ({
      id: `doodles-${i + 1}`,
      name: `Doodle #${4532 + i * 60}`,
      image: "🎨",
      rarity: ["uncommon", "rare"][i] as NFT["rarity"],
      rarityScore: 32 + i * 16,
      purchasePrice: 5.2 + i * 1.5,
      currentPrice: 5.6 + i * 0.6,
      chain: "ethereum",
      collection: "Doodles",
      mintDate: Date.now() - 365 * 24 * 60 * 60 * 1000 * (i + 1.2),
      gasFeePaid: 0.28 + i * 0.12,
    })),
  },
  {
    name: "Primates",
    symbol: "PRIM",
    chain: "polygon",
    floorPrice: 0.85,
    volume24h: 42000,
    holders: 12340,
    totalSupply: 100000,
    avgPrice: 1.2,
    priceChange24h: -2.1,
    image: "🐒",
    color: "#8B4513",
    nfts: Array.from({ length: 5 }, (_, i) => ({
      id: `prim-${i + 1}`,
      name: `Primate #${23145 + i * 200}`,
      image: "🐒",
      rarity: ["common", "common", "uncommon", "uncommon", "rare"][i] as NFT["rarity"],
      rarityScore: 15 + i * 10,
      purchasePrice: 0.75 + i * 0.1,
      currentPrice: 0.85 + i * 0.08,
      chain: "polygon",
      collection: "Primates",
      mintDate: Date.now() - 365 * 24 * 60 * 60 * 1000 * (i + 0.2),
      gasFeePaid: 0.02 + i * 0.005,
    })),
  },
];

// ── Utility Functions ─────────────────────────────────────────────────────────
function formatUSD(n: number): string {
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}K`;
  if (n >= 1) return `$${n.toFixed(2)}`;
  return `$${n.toFixed(4)}`;
}

function formatNum(n: number): string {
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toFixed(0);
}

function pctColor(v: number): string {
  if (v > 0) return "#22c55e";
  if (v < 0) return "#f85149";
  return "#8b949e";
}

function pctLabel(v: number): string {
  return `${v >= 0 ? "+" : ""}${v.toFixed(2)}%`;
}

function rarityBgColor(rarity: NFT["rarity"]): string {
  const colors: Record<NFT["rarity"], string> = {
    common: "#6e7681",
    uncommon: "#22c55e",
    rare: "#3b82f6",
    epic: "#a855f7",
    legendary: "#fbbf24",
  };
  return colors[rarity];
}

function chainIcon(chain: string): string {
  const icons: Record<string, string> = {
    ethereum: "⟠",
    solana: "◎",
    polygon: "⬡",
    base: "⬢",
  };
  return icons[chain] || "●";
}

// ── SVG Components ────────────────────────────────────────────────────────────
function PortfolioPieChart({ collections }: { collections: CollectionData[] }) {
  const values = collections.map((c) =>
    c.nfts.reduce((sum, nft) => sum + nft.currentPrice, 0)
  );
  const total = values.reduce((a, b) => a + b, 0);

  let startAngle = 0;
  const slices = values.map((v, i) => {
    const sliceAngle = (v / total) * 360;
    const color = collections[i].color;
    const start = startAngle;
    startAngle += sliceAngle;

    const largeArc = sliceAngle > 180 ? 1 : 0;
    const rad = (angle: number) => (angle * Math.PI) / 180;
    const x1 = 50 + 40 * Math.cos(rad(start));
    const y1 = 50 + 40 * Math.sin(rad(start));
    const x2 = 50 + 40 * Math.cos(rad(start + sliceAngle));
    const y2 = 50 + 40 * Math.sin(rad(start + sliceAngle));

    return (
      <path
        key={i}
        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
        fill={color}
        opacity="0.85"
      />
    );
  });

  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      {slices}
      <circle cx="50" cy="50" r="20" fill="#0d1117" />
    </svg>
  );
}

function RarityDistributionChart({ nfts }: { nfts: NFT[] }) {
  const counts: Record<NFT["rarity"], number> = {
    common: 0,
    uncommon: 0,
    rare: 0,
    epic: 0,
    legendary: 0,
  };

  nfts.forEach((nft) => {
    counts[nft.rarity]++;
  });

  const total = nfts.length;
  const rarities = ["common", "uncommon", "rare", "epic", "legendary"] as const;
  const bars = rarities.map((r, i) => {
    const pct = (counts[r] / total) * 100;
    const colors: Record<string, string> = {
      common: "#6e7681",
      uncommon: "#22c55e",
      rare: "#3b82f6",
      epic: "#a855f7",
      legendary: "#fbbf24",
    };
    return (
      <g key={r}>
        <rect x={i * 18} y={60 - (pct * 50) / 100} width="15" height={(pct * 50) / 100} fill={colors[r]} />
        <text x={i * 18 + 7.5} y="75" textAnchor="middle" fontSize="10" fill="#e6edf3">
          {counts[r]}
        </text>
      </g>
    );
  });

  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      {bars}
      <line x1="0" y1="60" x2="100" y2="60" stroke="#30363d" strokeWidth="0.5" />
    </svg>
  );
}

function CollectionThumbnail({ color, emoji }: { color: string; emoji: string }) {
  return (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <defs>
        <linearGradient id={`grad-${emoji}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.6 }} />
        </linearGradient>
      </defs>
      <rect width="80" height="80" fill={`url(#grad-${emoji})`} rx="12" />
      <text x="40" y="50" fontSize="36" textAnchor="middle" dominantBaseline="middle">
        {emoji}
      </text>
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function NFTPortfolioTracker() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortKey>("name");
  const [chainFilter, setChainFilter] = useState<ChainFilter>("all");
  const [rarityFilter, setRarityFilter] = useState<RarityFilter>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCollection, setExpandedCollection] = useState<string | null>(null);

  // ── Derived Data ──────────────────────────────────────────────────────────
  const filteredCollections = useMemo(() => {
    return DEMO_COLLECTIONS.filter((col) => {
      const matchChain = chainFilter === "all" || col.chain === chainFilter;
      const matchSearch = col.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchChain && matchSearch;
    });
  }, [chainFilter, searchTerm]);

  const allNFTs = useMemo(
    () => filteredCollections.flatMap((c) => c.nfts),
    [filteredCollections]
  );

  const filteredNFTs = useMemo(() => {
    return allNFTs.filter((nft) => {
      const matchRarity = rarityFilter === "all" || nft.rarity === rarityFilter;
      return matchRarity;
    });
  }, [allNFTs, rarityFilter]);

  const totalPortfolioValue = useMemo(
    () => filteredNFTs.reduce((sum, nft) => sum + nft.currentPrice, 0),
    [filteredNFTs]
  );

  const totalInvested = useMemo(
    () => filteredNFTs.reduce((sum, nft) => sum + nft.purchasePrice, 0),
    [filteredNFTs]
  );

  const totalGasPaid = useMemo(
    () => filteredNFTs.reduce((sum, nft) => sum + nft.gasFeePaid, 0),
    [filteredNFTs]
  );

  const portfolioPnL = useMemo(
    () => totalPortfolioValue - totalInvested - totalGasPaid,
    [totalPortfolioValue, totalInvested, totalGasPaid]
  );

  const portfolioPnLPct = useMemo(
    () => totalInvested > 0 ? (portfolioPnL / totalInvested) * 100 : 0,
    [portfolioPnL, totalInvested]
  );

  const trendingCollections = useMemo(() => {
    return [...filteredCollections]
      .sort((a, b) => b.priceChange24h - a.priceChange24h)
      .slice(0, 3);
  }, [filteredCollections]);

  const collectionStats = useMemo(() => {
    return filteredCollections.map((col) => {
      const colNFTs = filteredNFTs.filter((n) => n.collection === col.name);
      const colValue = colNFTs.reduce((sum, n) => sum + n.currentPrice, 0);
      const colInvested = colNFTs.reduce((sum, n) => sum + n.purchasePrice, 0);
      const colGas = colNFTs.reduce((sum, n) => sum + n.gasFeePaid, 0);
      const colPnL = colValue - colInvested - colGas;
      return {
        ...col,
        count: colNFTs.length,
        value: colValue,
        invested: colInvested,
        gas: colGas,
        pnl: colPnL,
        pnlPct: colInvested > 0 ? (colPnL / colInvested) * 100 : 0,
      };
    });
  }, [filteredCollections, filteredNFTs]);

  const sortedCollections = useMemo(() => {
    const data = [...collectionStats];
    switch (sortBy) {
      case "floorPrice":
        return data.sort((a, b) => b.floorPrice - a.floorPrice);
      case "value":
        return data.sort((a, b) => b.value - a.value);
      case "pnl":
        return data.sort((a, b) => b.pnl - a.pnl);
      case "rarity":
        return data.sort(
          (a, b) =>
            (b.nfts.filter((n) => n.rarityScore > 50).length) -
            (a.nfts.filter((n) => n.rarityScore > 50).length)
        );
      case "date":
        return data.sort(
          (a, b) =>
            Math.max(...b.nfts.map((n) => n.mintDate)) -
            Math.max(...a.nfts.map((n) => n.mintDate))
        );
      default:
        return data.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [collectionStats, sortBy]);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "NFT Portfolio Tracker" },
  ];

  // ── Export Functions ──────────────────────────────────────────────────────
  const exportAsJSON = useCallback(() => {
    const data = {
      exportDate: new Date().toISOString(),
      portfolio: {
        totalValue: totalPortfolioValue,
        totalInvested,
        totalGasPaid,
        pnl: portfolioPnL,
        pnlPct: portfolioPnLPct,
      },
      collections: sortedCollections.map((c) => ({
        name: c.name,
        chain: c.chain,
        floorPrice: c.floorPrice,
        count: c.count,
        value: c.value,
        invested: c.invested,
        gas: c.gas,
        pnl: c.pnl,
      })),
      nfts: filteredNFTs.map((n) => ({
        name: n.name,
        collection: n.collection,
        chain: n.chain,
        rarity: n.rarity,
        purchasePrice: n.purchasePrice,
        currentPrice: n.currentPrice,
        pnl: n.currentPrice - n.purchasePrice - n.gasFeePaid,
      })),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nft-portfolio-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [
    totalPortfolioValue,
    totalInvested,
    totalGasPaid,
    portfolioPnL,
    portfolioPnLPct,
    sortedCollections,
    filteredNFTs,
  ]);

  const exportAsCSV = useCallback(() => {
    let csv = "NFT Portfolio Export\n\n";
    csv += `Export Date,${new Date().toISOString()}\n`;
    csv += `Total Value,${totalPortfolioValue}\n`;
    csv += `Total Invested,${totalInvested}\n`;
    csv += `Total Gas Paid,${totalGasPaid}\n`;
    csv += `Total P&L,${portfolioPnL}\n`;
    csv += `Total P&L %,${portfolioPnLPct}\n\n`;
    csv += "Collection Name,Chain,Floor Price,Count,Value,Invested,Gas,P&L\n";
    sortedCollections.forEach((c) => {
      csv += `${c.name},${c.chain},${c.floorPrice},${c.count},${c.value},${c.invested},${c.gas},${c.pnl}\n`;
    });
    csv += "\n\nNFT Name,Collection,Chain,Rarity,Purchase Price,Current Price,P&L\n";
    filteredNFTs.forEach((n) => {
      csv += `${n.name},${n.collection},${n.chain},${n.rarity},${n.purchasePrice},${n.currentPrice},${n.currentPrice - n.purchasePrice - n.gasFeePaid}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nft-portfolio-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [
    totalPortfolioValue,
    totalInvested,
    totalGasPaid,
    portfolioPnL,
    portfolioPnLPct,
    sortedCollections,
    filteredNFTs,
  ]);

  return (
    <>
      <ToolStructuredData
        title="NFT Portfolio Tracker"
        description="Track your NFT collections across multiple blockchains with real-time floor prices, P&L analysis, rarity scoring, and portfolio diversification analytics."
        slug="tools/nft-portfolio"
      />
      <Header />

      <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#58a6ff] to-[#79c0ff] bg-clip-text text-transparent">
              NFT Portfolio Tracker
            </h1>
            <p className="text-[#8b949e] text-lg">
              Monitor your NFT collections across multiple chains with advanced analytics and P&L tracking
            </p>
          </div>

          {/* Portfolio Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-[#8b949e] text-sm font-medium mb-2">Portfolio Value</p>
              <p className="text-3xl font-bold text-[#58a6ff]">{formatUSD(totalPortfolioValue)}</p>
              <p className="text-xs text-[#8b949e] mt-2">{filteredNFTs.length} NFTs</p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-[#8b949e] text-sm font-medium mb-2">Amount Invested</p>
              <p className="text-3xl font-bold text-[#79c0ff]">{formatUSD(totalInvested)}</p>
              <p className="text-xs text-[#8b949e] mt-2">Base investment</p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-[#8b949e] text-sm font-medium mb-2">Total P&L</p>
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{ color: pctColor(portfolioPnL) }}
                >
                  {formatUSD(Math.abs(portfolioPnL))}
                </p>
                <p
                  className="text-xs mt-2 font-medium"
                  style={{ color: pctColor(portfolioPnLPct) }}
                >
                  {pctLabel(portfolioPnLPct)}
                </p>
              </div>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-[#8b949e] text-sm font-medium mb-2">Gas Fees Paid</p>
              <p className="text-3xl font-bold text-[#f85149]">{formatUSD(totalGasPaid)}</p>
              <p className="text-xs text-[#8b949e] mt-2">Mint & transfer costs</p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-[#8b949e] text-sm font-medium mb-2">Collections</p>
              <p className="text-3xl font-bold text-[#79c0ff]">{filteredCollections.length}</p>
              <p className="text-xs text-[#8b949e] mt-2">Active collections</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Portfolio Diversification */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#e6edf3] mb-4">Portfolio Diversification</h3>
              <div className="w-full h-64">
                <PortfolioPieChart collections={filteredCollections} />
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {filteredCollections.slice(0, 4).map((c) => (
                  <div key={c.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: c.color }}
                      />
                      <span className="text-[#8b949e]">{c.name}</span>
                    </div>
                    <span className="font-medium text-[#e6edf3]">
                      {(
                        (filteredNFTs
                          .filter((n) => n.collection === c.name)
                          .reduce((sum, n) => sum + n.currentPrice, 0) /
                          totalPortfolioValue) *
                        100
                      ).toFixed(1)}
                      %
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rarity Distribution */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#e6edf3] mb-4">Rarity Distribution</h3>
              <div className="w-full h-64">
                <RarityDistributionChart nfts={filteredNFTs} />
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {(["common", "uncommon", "rare", "epic", "legendary"] as const).map(
                  (r) => {
                    const count = filteredNFTs.filter((n) => n.rarity === r).length;
                    return (
                      <div key={r} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            style={{ backgroundColor: rarityBgColor(r) }}
                          />
                          <span className="text-[#8b949e] capitalize">{r}</span>
                        </div>
                        <span className="font-medium text-[#e6edf3]">{count}</span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Trending Collections */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#e6edf3] mb-4">Trending Collections</h3>
              <div className="space-y-3">
                {trendingCollections.map((col) => (
                  <div
                    key={col.name}
                    className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 hover:border-[#58a6ff] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{col.image}</span>
                        <div>
                          <p className="font-semibold text-[#e6edf3]">{col.name}</p>
                          <p className="text-xs text-[#8b949e]">
                            {col.symbol} • {chainIcon(col.chain)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#e6edf3]">{formatUSD(col.floorPrice)}</p>
                        <p
                          className="text-sm font-medium"
                          style={{ color: pctColor(col.priceChange24h) }}
                        >
                          {pctLabel(col.priceChange24h)}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <p className="text-[#8b949e]">Volume</p>
                        <p className="text-[#e6edf3]">{formatNum(col.volume24h)}</p>
                      </div>
                      <div>
                        <p className="text-[#8b949e]">Holders</p>
                        <p className="text-[#e6edf3]">{formatNum(col.holders)}</p>
                      </div>
                      <div>
                        <p className="text-[#8b949e]">Supply</p>
                        <p className="text-[#e6edf3]">{formatNum(col.totalSupply)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-[#e6edf3] mb-2">Search Collections</label>
                <input
                  type="text"
                  placeholder="BAYC, Azuki, etc..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2 text-[#e6edf3] placeholder-[#6e7681] focus:border-[#58a6ff] focus:outline-none transition-colors"
                />
              </div>

              {/* Chain Filter */}
              <div>
                <label className="block text-sm font-medium text-[#e6edf3] mb-2">Chain</label>
                <select
                  value={chainFilter}
                  onChange={(e) => setChainFilter(e.target.value as ChainFilter)}
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2 text-[#e6edf3] focus:border-[#58a6ff] focus:outline-none transition-colors"
                >
                  <option value="all">All Chains</option>
                  <option value="ethereum">Ethereum</option>
                  <option value="solana">Solana</option>
                  <option value="polygon">Polygon</option>
                  <option value="base">Base</option>
                </select>
              </div>

              {/* Rarity Filter */}
              <div>
                <label className="block text-sm font-medium text-[#e6edf3] mb-2">Rarity</label>
                <select
                  value={rarityFilter}
                  onChange={(e) => setRarityFilter(e.target.value as RarityFilter)}
                >
                  <option value="all">All Rarities</option>
                  <option value="common">Common</option>
                  <option value="uncommon">Uncommon</option>
                  <option value="rare">Rare</option>
                  <option value="epic">Epic</option>
                  <option value="legendary">Legendary</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Sort Options */}
              <div className="flex gap-2">
                <label className="text-sm font-medium text-[#e6edf3]">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-1 text-sm text-[#e6edf3] focus:border-[#58a6ff] focus:outline-none transition-colors"
                >
                  <option value="name">Name</option>
                  <option value="floorPrice">Floor Price</option>
                  <option value="value">Portfolio Value</option>
                  <option value="pnl">P&L</option>
                  <option value="rarity">Rarity</option>
                  <option value="date">Date</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === "grid"
                      ? "bg-[#58a6ff] text-[#0d1117]"
                      : "bg-[#0d1117] border border-[#30363d] text-[#e6edf3] hover:border-[#58a6ff]"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === "list"
                  }`}
                >
                  List
                </button>
              </div>

              {/* Export Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={exportAsJSON}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-[#238636] text-[var(--color-text)] hover:bg-[#2ea043] transition-colors"
                >
                  Export JSON
                </button>
                <button
                  onClick={exportAsCSV}
                >
                  Export CSV
                </button>
              </div>
            </div>
          </div>

          {/* Collections Grid/List View */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {sortedCollections.map((col) => {
                const isExpanded = expandedCollection === col.name;
                return (
                  <div
                    key={col.name}
                    className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#58a6ff] transition-colors"
                  >
                    {/* Collection Header */}
                    <div
                      onClick={() =>
                        setExpandedCollection(isExpanded ? null : col.name)
                      }
                      className="p-6 cursor-pointer hover:bg-[#0d1117] transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 rounded-lg bg-[#0d1117] border border-[#30363d] flex items-center justify-center flex-shrink-0">
                            <CollectionThumbnail color={col.color} emoji={col.image} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#e6edf3] text-lg">{col.name}</h3>
                            <p className="text-xs text-[#8b949e]">
                              {col.symbol} • {chainIcon(col.chain)}
                            </p>
                          </div>
                        </div>
                        <span className="text-2xl">
                          {isExpanded ? "−" : "+"}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-[#0d1117] rounded-lg p-3 border border-[#30363d]">
                          <p className="text-xs text-[#8b949e] mb-1">Floor Price</p>
                          <p className="font-bold text-[#e6edf3]">
                            {formatUSD(col.floorPrice)}
                          </p>
                        </div>
                        <div className="bg-[#0d1117] rounded-lg p-3 border border-[#30363d]">
                          <p className="text-xs text-[#8b949e] mb-1">Change (24h)</p>
                          <p
                            className="font-bold"
                            style={{ color: pctColor(col.priceChange24h) }}
                          >
                            {pctLabel(col.priceChange24h)}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                        <div className="bg-[#0d1117] rounded-lg p-2 border border-[#30363d]">
                          <p className="text-xs text-[#8b949e]">Your Holdings</p>
                          <p className="text-sm font-bold text-[#e6edf3]">
                            {col.count}
                          </p>
                        </div>
                        <div className="bg-[#0d1117] rounded-lg p-2 border border-[#30363d]">
                          <p className="text-xs text-[#8b949e]">Holders</p>
                          <p className="text-sm font-bold text-[#e6edf3]">
                            {formatNum(col.holders)}
                          </p>
                        </div>
                        <div className="bg-[#0d1117] rounded-lg p-2 border border-[#30363d]">
                          <p className="text-xs text-[#8b949e]">Supply</p>
                          <p className="text-sm font-bold text-[#e6edf3]">
                            {formatNum(col.totalSupply)}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#0d1117] rounded-lg p-3 border border-[#30363d]">
                          <p className="text-xs text-[#8b949e] mb-1">Portfolio Value</p>
                          <p className="font-bold text-[#e6edf3]">
                            {formatUSD(col.value)}
                          </p>
                          <p className="text-xs text-[#8b949e] mt-1">
                            Avg: {formatUSD(col.value / (col.count || 1))}
                          </p>
                        </div>
                        <div
                          className="rounded-lg p-3 border"
                          style={{
                            backgroundColor: pctColor(col.pnl) + "15",
                            borderColor: pctColor(col.pnl) + "40",
                          }}
                        >
                          <p className="text-xs text-[#8b949e] mb-1">Total P&L</p>
                          <p
                            style={{ color: pctColor(col.pnl) }}
                          >
                            {formatUSD(Math.abs(col.pnl))}
                          </p>
                          <p
                            className="text-xs font-medium mt-1"
                            style={{ color: pctColor(col.pnlPct) }}
                          >
                            {pctLabel(col.pnlPct)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Expanded NFT List */}
                    {isExpanded && (
                      <div className="border-t border-[#30363d] bg-[#0d1117]">
                        <div className="p-6 space-y-3">
                          {col.nfts
                            .filter(
                              (nft) =>
                                rarityFilter === "all" || nft.rarity === rarityFilter
                            )
                            .map((nft) => (
                              <div
                                key={nft.id}
                                className="bg-[#161b22] rounded-lg p-4 border border-[#30363d]"
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <p className="font-semibold text-[#e6edf3]">
                                      {nft.name}
                                    </p>
                                    <div className="flex gap-2 mt-1">
                                      <span
                                        className="px-2 py-1 rounded text-xs font-medium text-[var(--color-text)]"
                                        style={{
                                          backgroundColor: rarityBgColor(
                                            nft.rarity
                                          ),
                                        }}
                                      >
                                        {nft.rarity}
                                      </span>
                                      <span className="px-2 py-1 rounded text-xs font-medium bg-[#0d1117] text-[#8b949e]">
                                        Score: {nft.rarityScore}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p
                                      style={{
                                        color: pctColor(
                                          nft.currentPrice - nft.purchasePrice
                                        ),
                                      }}
                                    >
                                      {formatUSD(
                                        nft.currentPrice - nft.purchasePrice
                                      )}
                                    </p>
                                    <p
                                      className="text-xs font-medium"
                                      style={{
                                        color: pctColor(
                                          ((nft.currentPrice - nft.purchasePrice) /
                                            nft.purchasePrice) *
                                            100
                                        ),
                                      }}
                                    >
                                      {pctLabel(
                                        ((nft.currentPrice - nft.purchasePrice) /
                                          nft.purchasePrice) *
                                          100
                                      )}
                                    </p>
                                  </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-xs mt-3">
                                  <div className="bg-[#0d1117] rounded p-2">
                                    <p className="text-[#8b949e]">Bought</p>
                                    <p className="font-semibold text-[#e6edf3]">
                                      {formatUSD(nft.purchasePrice)}
                                    </p>
                                  </div>
                                  <div className="bg-[#0d1117] rounded p-2">
                                    <p className="text-[#8b949e]">Current</p>
                                    <p className="font-semibold text-[#e6edf3]">
                                      {formatUSD(nft.currentPrice)}
                                    </p>
                                  </div>
                                  <div className="bg-[#0d1117] rounded p-2">
                                    <p className="text-[#8b949e]">Gas</p>
                                    <p className="font-semibold text-[#e6edf3]">
                                      {formatUSD(nft.gasFeePaid)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* List View */
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#30363d] bg-[#0d1117]">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#e6edf3]">
                        Collection
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#e6edf3]">
                        Chain
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                        Floor Price
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                        24h
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                        Holdings
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                        Portfolio Value
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                        P&L
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                        % Return
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedCollections.map((col, idx) => (
                      <tr
                        key={col.name}
                        className={`border-b border-[#30363d] hover:bg-[#0d1117] transition-colors ${
                          idx % 2 === 0 ? "bg-[#161b22]" : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{col.image}</span>
                            <div>
                              <p className="font-semibold text-[#e6edf3]">
                                {col.name}
                              </p>
                              <p className="text-xs text-[#8b949e]">{col.symbol}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-[#e6edf3] capitalize flex items-center gap-1">
                            {chainIcon(col.chain)} {col.chain}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-[#e6edf3] font-semibold">
                          {formatUSD(col.floorPrice)}
                        </td>
                        <td
                          className="px-6 py-4 text-right text-sm font-semibold"
                          style={{ color: pctColor(col.priceChange24h) }}
                        >
                          {pctLabel(col.priceChange24h)}
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-[#e6edf3] font-semibold">
                          {col.count}
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-[#e6edf3] font-semibold">
                          {formatUSD(col.value)}
                        </td>
                        <td
                          style={{ color: pctColor(col.pnl) }}
                        >
                          {formatUSD(Math.abs(col.pnl))}
                        </td>
                        <td
                          style={{ color: pctColor(col.pnlPct) }}
                        >
                          {pctLabel(col.pnlPct)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Individual NFTs Detailed View */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#e6edf3] mb-6">All NFTs ({filteredNFTs.length})</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#30363d] bg-[#0d1117]">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#e6edf3]">
                      NFT
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#e6edf3]">
                      Collection
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#e6edf3]">
                      Rarity
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                      Score
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                      Purchase
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                      Current
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                      Gas
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                      P&L
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNFTs.map((nft, idx) => (
                    <tr
                      key={nft.id}
                      className={`border-b border-[#30363d] hover:bg-[#0d1117] transition-colors ${
                        idx % 2 === 0 ? "bg-[#0d1117]/50" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{nft.image}</span>
                          <span className="text-sm text-[#e6edf3]">{nft.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#e6edf3]">
                        {nft.collection}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold text-[var(--color-text)]"
                          style={{
                            backgroundColor: rarityBgColor(nft.rarity),
                          }}
                        >
                          {nft.rarity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-semibold text-[#e6edf3]">
                        {nft.rarityScore}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-[#e6edf3]">
                        {formatUSD(nft.purchasePrice)}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-[#e6edf3] font-semibold">
                        {formatUSD(nft.currentPrice)}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-[#f85149]">
                        {formatUSD(nft.gasFeePaid)}
                      </td>
                      <td
                        style={{
                          color: pctColor(
                            nft.currentPrice - nft.purchasePrice - nft.gasFeePaid
                          ),
                        }}
                      >
                        {formatUSD(
                          nft.currentPrice - nft.purchasePrice - nft.gasFeePaid
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Metadata Section */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-[#e6edf3] mb-4">Portfolio Metadata</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
                <p className="text-sm text-[#8b949e] mb-1">Average Purchase Price</p>
                <p className="text-2xl font-bold text-[#e6edf3]">
                  {formatUSD(totalInvested / (filteredNFTs.length || 1))}
                </p>
              </div>
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
                <p className="text-sm text-[#8b949e] mb-1">Average Current Price</p>
                <p className="text-2xl font-bold text-[#e6edf3]">
                  {formatUSD(totalPortfolioValue / (filteredNFTs.length || 1))}
                </p>
              </div>
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
                <p className="text-sm text-[#8b949e] mb-1">Avg Gas Per Mint</p>
                <p className="text-2xl font-bold text-[#e6edf3]">
                  {formatUSD(totalGasPaid / (filteredNFTs.length || 1))}
                </p>
              </div>
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
                <p className="text-sm text-[#8b949e] mb-1">Avg ROI Per NFT</p>
                <p
                  className="text-2xl font-bold"
                  style={{
                    color: pctColor(
                      ((totalPortfolioValue - totalInvested - totalGasPaid) /
                        totalInvested) *
                        100
                    ),
                  }}
                >
                  {pctLabel(
                    ((totalPortfolioValue - totalInvested - totalGasPaid) /
                      totalInvested) *
                      100
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
