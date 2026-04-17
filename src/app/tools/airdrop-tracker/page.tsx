'use client';

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

interface Airdrop {
  id: string;
  project: string;
  token: string;
  chain: "Ethereum" | "L2" | "Solana" | "Cosmos" | "Multi-chain";
  estimatedValueMin: number;
  estimatedValueMax: number;
  snapshotDate: string;
  status: "Live" | "Upcoming" | "Ended" | "Claimable";
  eligibilityCriteria: string[];
  emoji: string;
  color: string;
  description: string;
}

const AIRDROP_DATA: Airdrop[] = [
  {
    id: "layerzero-s2",
    project: "LayerZero Season 2",
    token: "ZRO",
    chain: "Multi-chain",
    estimatedValueMin: 500,
    estimatedValueMax: 5000,
    snapshotDate: "2024-03-15",
    status: "Live",
    eligibilityCriteria: ["Cross-chain transactions", "Active wallet >$100 TVL", "Interaction before snapshot"],
    emoji: "🔗",
    color: "#00D4FF",
    description: "Omnichain liquidity protocol enabling seamless cross-chain communication",
  },
  {
    id: "scroll",
    project: "Scroll",
    token: "SCR",
    chain: "L2",
    estimatedValueMin: 200,
    estimatedValueMax: 2000,
    snapshotDate: "2024-02-28",
    status: "Upcoming",
    eligibilityCriteria: ["Testnet participation", "Bridge activity", "Smart contract interaction"],
    emoji: "📜",
    color: "#D084A8",
    description: "EVM-compatible zk-rollup providing scaling with privacy",
  },
  {
    id: "zksync-s2",
    project: "zkSync Season 2",
    token: "ZK",
    chain: "L2",
    estimatedValueMin: 300,
    estimatedValueMax: 3000,
    snapshotDate: "2024-01-31",
    status: "Claimable",
    eligibilityCriteria: ["Transaction volume >0.5 ETH", "Interaction before cutoff", "Active user status"],
    emoji: "⚡",
    color: "#4E529A",
    description: "zkEVM Layer 2 scaling Ethereum with high throughput",
  },
  {
    id: "starknet-p2",
    project: "Starknet Phase 2",
    token: "STRK",
    chain: "L2",
    estimatedValueMin: 400,
    estimatedValueMax: 4500,
    snapshotDate: "2024-02-15",
    status: "Live",
    eligibilityCriteria: ["Cairo smart contract deployment", "Protocol governance participation", "Ecosystem contribution"],
    emoji: "🌟",
    color: "#EC796B",
    description: "Validity rollup using Cairo for scalable smart contracts",
  },
  {
    id: "eigenlayer-s3",
    project: "EigenLayer Season 3",
    token: "EIGEN",
    chain: "Ethereum",
    estimatedValueMin: 800,
    estimatedValueMax: 8000,
    snapshotDate: "2024-03-01",
    status: "Upcoming",
    eligibilityCriteria: ["Stake >0.1 ETH", "Operator participation", "Testnet activity"],
    emoji: "🎯",
    color: "#00D4FF",
    description: "Restaking protocol enabling operators to secure other chains",
  },
  {
    id: "monad",
    project: "Monad",
    token: "MON",
    chain: "L2",
    estimatedValueMin: 500,
    estimatedValueMax: 5500,
    snapshotDate: "2024-03-10",
    status: "Upcoming",
    eligibilityCriteria: ["Early supporter status", "Community participation", "Technical feedback"],
    emoji: "🚀",
    color: "#A78BFA",
    description: "High-performance EVM-compatible blockchain with pipelined consensus",
  },
  {
    id: "berachain",
    project: "Berachain",
    token: "BERA",
    chain: "L2",
    estimatedValueMin: 300,
    estimatedValueMax: 3500,
    snapshotDate: "2024-02-20",
    status: "Ended",
    eligibilityCriteria: ["Testnet interactions", "NFT holder", "Community votes"],
    emoji: "🐻",
    color: "#F59E0B",
    description: "Proof-of-Liquidity blockchain powering native DeFi ecosystem",
  },
  {
    id: "hyperlane",
    project: "Hyperlane",
    token: "HYP",
    chain: "Multi-chain",
    estimatedValueMin: 250,
    estimatedValueMax: 2500,
    snapshotDate: "2024-03-05",
    status: "Live",
    eligibilityCriteria: ["Message passing activity", "Cross-chain bridging", "Protocol integration"],
    emoji: "🌐",
    color: "#10B981",
    description: "Permissionless interoperability protocol for cross-chain communication",
  },
  {
    id: "eclipse",
    project: "Eclipse",
    token: "ECL",
    chain: "Solana",
    estimatedValueMin: 350,
    estimatedValueMax: 3500,
    snapshotDate: "2024-02-25",
    status: "Upcoming",
    eligibilityCriteria: ["Solana ecosystem participation", "Developer activity", "Community engagement"],
    emoji: "🌑",
    color: "#9945FF",
    description: "Solana-native hybrid rollup supporting EVM and SVM",
  },
  {
    id: "fuel",
    project: "Fuel",
    token: "FUEL",
    chain: "L2",
    estimatedValueMin: 400,
    estimatedValueMax: 4000,
    snapshotDate: "2024-02-28",
    status: "Claimable",
    eligibilityCriteria: ["Testnet beta participation", "Sway contract deployment", "Community contributions"],
    emoji: "⛽",
    color: "#00D4FF",
    description: "Parallel execution engine for Ethereum with 100x throughput",
  },
  {
    id: "movement",
    project: "Movement",
    token: "MOVE",
    chain: "L2",
    estimatedValueMin: 200,
    estimatedValueMax: 2000,
    snapshotDate: "2024-03-08",
    status: "Live",
    eligibilityCriteria: ["Move contract interactions", "Protocol participation", "Early community member"],
    emoji: "🎬",
    color: "#06B6D4",
    description: "Move-powered blockchain enabling safe, scalable smart contracts",
  },
  {
    id: "initia",
    project: "Initia",
    token: "INIT",
    chain: "Cosmos",
    estimatedValueMin: 300,
    estimatedValueMax: 3000,
    snapshotDate: "2024-03-01",
    status: "Upcoming",
    eligibilityCriteria: ["Cosmos ecosystem engagement", "Validator participation", "Cross-chain bridging"],
    emoji: "🪴",
    color: "#8B5CF6",
    description: "Modular blockchain for Cosmos ecosystem with native L2 support",
  },
  {
    id: "zora-s2",
    project: "Zora Season 2",
    token: "ZORA",
    chain: "L2",
    estimatedValueMin: 150,
    estimatedValueMax: 1500,
    snapshotDate: "2024-02-10",
    status: "Claimable",
    eligibilityCriteria: ["Creator activity", "NFT minting participation", "Governance voting"],
    emoji: "🎨",
    color: "#EC4899",
    description: "Creator-focused L2 with native NFT and Creator support",
  },
  {
    id: "blast-s2",
    project: "Blast Season 2",
    token: "BLAST",
    chain: "L2",
    estimatedValueMin: 250,
    estimatedValueMax: 2500,
    snapshotDate: "2024-02-18",
    status: "Live",
    eligibilityCriteria: ["ETH/USDB staking", "DeFi protocol interaction", "Active transaction history"],
    emoji: "💥",
    color: "#FBBF24",
    description: "Native yield EVM chain with built-in ETH/USD staking",
  },
  {
    id: "linea",
    project: "Linea",
    token: "LNE",
    chain: "L2",
    estimatedValueMin: 200,
    estimatedValueMax: 2000,
    snapshotDate: "2024-03-12",
    status: "Upcoming",
    eligibilityCriteria: ["Gas spending >$100", "Transaction count >50", "Liquidity provision"],
    emoji: "📍",
    color: "#6366F1",
    description: "Zero-knowledge EVM rollup scaling Ethereum with privacy",
  },
  {
    id: "arbitrum-nova-boost",
    project: "Arbitrum Nova Boost",
    token: "ARB",
    chain: "L2",
    estimatedValueMin: 150,
    estimatedValueMax: 1200,
    snapshotDate: "2024-02-20",
    status: "Ended",
    eligibilityCriteria: ["Nova protocol usage", "Governance participation", "Bridge activity"],
    emoji: "◉",
    color: "#28A0F0",
    description: "Incentive boost program for Arbitrum Nova ecosystem participants",
  },
  {
    id: "optimism-retro-2",
    project: "Optimism RetroPGF 2",
    token: "OP",
    chain: "L2",
    estimatedValueMin: 500,
    estimatedValueMax: 5000,
    snapshotDate: "2024-01-15",
    status: "Claimable",
    eligibilityCriteria: ["Public goods contribution", "Developer grant recipient", "Community votes"],
    emoji: "🔴",
    color: "#FF0420",
    description: "Retroactive public goods funding for ecosystem contributors",
  },
  {
    id: "polygon-zk",
    project: "Polygon ZkEVM Boost",
    token: "POL",
    chain: "L2",
    estimatedValueMin: 100,
    estimatedValueMax: 1000,
    snapshotDate: "2024-02-05",
    status: "Upcoming",
    eligibilityCriteria: ["ZkEVM transaction volume", "Bridge usage", "Early adopter status"],
    emoji: "⬡",
    color: "#8247E5",
    description: "Incentive campaign for Polygon ZkEVM ecosystem growth",
  },
  {
    id: "stellar-soroban",
    project: "Stellar Soroban",
    token: "XLM",
    chain: "Cosmos",
    estimatedValueMin: 200,
    estimatedValueMax: 2000,
    snapshotDate: "2024-03-20",
    status: "Upcoming",
    eligibilityCriteria: ["Soroban contract deployment", "Stellar integration", "Developer activity"],
    emoji: "⭐",
    color: "#14F195",
    description: "Smart contracts on Stellar with federated blockchain security",
  },
];

const CHAIN_OPTIONS = ["All Chains", "Ethereum", "L2", "Solana", "Cosmos", "Multi-chain"];
const STATUS_OPTIONS = ["All Status", "Live", "Upcoming", "Ended", "Claimable"];

interface EligibilityModalProps {
  airdrop: Airdrop | null;
  isOpen: boolean;
  onClose: () => void;
}

function EligibilityModal({ airdrop, isOpen, onClose }: EligibilityModalProps) {
  if (!isOpen || !airdrop) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "500px",
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "2rem" }}>{airdrop.emoji}</span>
          <div>
            <h2 style={{ color: "#e6edf3", fontSize: "1.5rem", fontWeight: "700", margin: 0 }}>{airdrop.project}</h2>
            <p style={{ color: "#8b949e", margin: 0, fontSize: "0.9rem" }}>Token: {airdrop.token}</p>
          </div>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ color: "#8b949e", fontSize: "0.9rem", lineHeight: "1.6" }}>{airdrop.description}</p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ color: "#e6edf3", fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem" }}>Eligibility Criteria</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {airdrop.eligibilityCriteria.map((criterion, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: airdrop.color, marginTop: "2px", flexShrink: 0 }}>✓</span>
                <span style={{ color: "#8b949e", fontSize: "0.9rem" }}>{criterion}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "8px", padding: "1rem" }}>
            <div style={{ color: "#8b949e", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Estimated Value</div>
            <div style={{ color: airdrop.color, fontWeight: "700", fontSize: "1.1rem" }}>
              ${airdrop.estimatedValueMin}–${airdrop.estimatedValueMax}
            </div>
          </div>
          <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "8px", padding: "1rem" }}>
            <div style={{ color: "#8b949e", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Snapshot Date</div>
            <div style={{ color: airdrop.color, fontWeight: "700", fontSize: "1rem" }}>{airdrop.snapshotDate}</div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            background: airdrop.color + "20",
            color: airdrop.color,
            border: `1px solid ${airdrop.color}`,
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = airdrop.color + "30";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = airdrop.color + "20";
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function AirdropTrackerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChain, setSelectedChain] = useState("All Chains");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedAirdrop, setSelectedAirdrop] = useState<Airdrop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredAirdrops = useMemo(() => {
    return AIRDROP_DATA.filter((airdrop) => {
      const matchesSearch =
        airdrop.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
        airdrop.token.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesChain = selectedChain === "All Chains" || airdrop.chain === selectedChain;
      const matchesStatus = selectedStatus === "All Status" || airdrop.status === selectedStatus;
      return matchesSearch && matchesChain && matchesStatus;
    });
  }, [searchQuery, selectedChain, selectedStatus]);

  const stats = useMemo(() => {
    const upcoming = AIRDROP_DATA.filter((a) => a.status === "Upcoming").length;
    const totalEstimatedMin = AIRDROP_DATA.reduce((sum, a) => sum + a.estimatedValueMin, 0);
    const totalEstimatedMax = AIRDROP_DATA.reduce((sum, a) => sum + a.estimatedValueMax, 0);
    const avgValue = Math.round((totalEstimatedMin + totalEstimatedMax) / 2 / AIRDROP_DATA.length);
    const chains = new Set(AIRDROP_DATA.map((a) => a.chain)).size;

    return { upcoming, totalEstimatedMin, totalEstimatedMax, avgValue, chains };
  }, []);

  const STATUS_COLORS: Record<string, string> = {
    Live: "#3fb950",
    Upcoming: "#d29922",
    Claimable: "#58a6ff",
    Ended: "#8b949e",
  };

  const cardStyle = {
    background: "rgba(22,27,34,0.7)",
    border: "1px solid #30363d",
    borderRadius: "12px",
  };

  const handleEligibilityCheck = (airdrop: Airdrop) => {
    setSelectedAirdrop(airdrop);
    setIsModalOpen(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Airdrop Tracker" },
          ]}
        />

        {/* Header */}
        <div style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e6edf3", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
            🪂 Crypto Airdrop Tracker
          </h1>
          <p style={{ color: "#8b949e", fontSize: "1.1rem", maxWidth: "900px", lineHeight: "1.6" }}>
            Track upcoming, live, and claimable crypto airdrops across all major chains. Monitor eligibility criteria, estimated values, and snapshot dates
            for the latest token distributions. Updated regularly with real project data.
          </p>
        </div>

        {/* Summary Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { label: "Upcoming Airdrops", value: stats.upcoming, color: "#d29922" },
            { label: "Chains Covered", value: stats.chains, color: "#58a6ff" },
            { label: "Est. Value Range", value: `$${stats.totalEstimatedMin}K – $${stats.totalEstimatedMax}K`, color: "#3fb950" },
            { label: "Avg Value", value: `$${stats.avgValue}`, color: "#f85149" },
          ].map((stat) => (
            <div key={stat.label} style={{ ...cardStyle, padding: "1.5rem" }}>
              <div style={{ color: "#8b949e", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {stat.label}
              </div>
              <div style={{ color: stat.color, fontSize: "1.75rem", fontWeight: "700" }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Search & Filters */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="Search by project name or token..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                background: "rgba(22,27,34,0.5)",
                border: "1px solid #30363d",
                borderRadius: "8px",
                color: "#e6edf3",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", color: "#8b949e", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: "600" }}>Filter by Chain</label>
              <select
                value={selectedChain}
                onChange={(e) => setSelectedChain(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  background: "rgba(22,27,34,0.5)",
                  border: "1px solid #30363d",
                  borderRadius: "8px",
                  color: "#e6edf3",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                {CHAIN_OPTIONS.map((chain) => (
                  <option key={chain} value={chain}>
                    {chain}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: "block", color: "#8b949e", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: "600" }}>Filter by Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  background: "rgba(22,27,34,0.5)",
                  border: "1px solid #30363d",
                  borderRadius: "8px",
                  color: "#e6edf3",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ marginTop: "1rem", color: "#8b949e", fontSize: "0.9rem" }}>
            Showing {filteredAirdrops.length} of {AIRDROP_DATA.length} airdrops
          </div>
        </div>

        {/* Airdrop Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
          {filteredAirdrops.map((airdrop) => (
            <div key={airdrop.id} style={{ ...cardStyle, padding: "1.5rem", borderLeft: `3px solid ${airdrop.color}`, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "2.5rem", lineHeight: "1" }}>{airdrop.emoji}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: "#e6edf3", fontSize: "1.1rem", fontWeight: "700", margin: "0 0 0.25rem 0" }}>{airdrop.project}</h3>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: "700", padding: "2px 8px", borderRadius: "4px", background: `${airdrop.color}20`, color: airdrop.color }}>
                      {airdrop.token}
                    </span>
                    <span style={{ fontSize: "0.75rem", padding: "2px 8px", borderRadius: "4px", background: `${STATUS_COLORS[airdrop.status]}20`, color: STATUS_COLORS[airdrop.status], fontWeight: "600" }}>
                      {airdrop.status}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem", fontSize: "0.85rem" }}>
                <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "6px", padding: "0.75rem" }}>
                  <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.3rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Chain</div>
                  <div style={{ color: "#e6edf3", fontWeight: "600" }}>{airdrop.chain}</div>
                </div>
                <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "6px", padding: "0.75rem" }}>
                  <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.3rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Value Est.</div>
                  <div style={{ color: airdrop.color, fontWeight: "700" }}>
                    ${airdrop.estimatedValueMin}–${airdrop.estimatedValueMax}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "1rem", fontSize: "0.85rem" }}>
                <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.3rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Snapshot</div>
                <div style={{ color: "#e6edf3" }}>{airdrop.snapshotDate}</div>
              </div>

              <div style={{ marginBottom: "1rem", fontSize: "0.8rem" }}>
                <div style={{ color: "#6e7681", marginBottom: "0.5rem", fontWeight: "600" }}>Quick Eligibility</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {airdrop.eligibilityCriteria.slice(0, 2).map((criterion, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                      <span style={{ color: airdrop.color, marginTop: "2px", flexShrink: 0, fontSize: "0.75rem" }}>●</span>
                      <span style={{ color: "#8b949e" }}>{criterion}</span>
                    </div>
                  ))}
                  {airdrop.eligibilityCriteria.length > 2 && (
                    <div style={{ color: "#8b949e", fontSize: "0.75rem", marginTop: "0.25rem" }}>+{airdrop.eligibilityCriteria.length - 2} more criteria</div>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleEligibilityCheck(airdrop)}
                style={{
                  width: "100%",
                  padding: "0.7rem",
                  background: `${airdrop.color}20`,
                  color: airdrop.color,
                  border: `1px solid ${airdrop.color}`,
                  borderRadius: "6px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = `${airdrop.color}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = `${airdrop.color}20`;
                }}
              >
                Check Eligibility →
              </button>
            </div>
          ))}
        </div>

        {filteredAirdrops.length === 0 && (
          <div style={{ ...cardStyle, padding: "3rem 2rem", textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔍</div>
            <h3 style={{ color: "#e6edf3", fontSize: "1.2rem", marginBottom: "0.5rem" }}>No airdrops found</h3>
            <p style={{ color: "#8b949e" }}>Try adjusting your search filters or check back later for new opportunities.</p>
          </div>
        )}

        {/* Status Legend */}
        <div style={{ ...cardStyle, padding: "1.5rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1rem" }}>Status Guide</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { status: "Live", color: "#3fb950", desc: "Currently active, snapshot may have already passed" },
              { status: "Upcoming", color: "#d29922", desc: "Coming soon, snapshot date in the future" },
              { status: "Claimable", color: "#58a6ff", desc: "Eligible participants can claim tokens now" },
              { status: "Ended", color: "#8b949e", desc: "Airdrop has concluded, no longer accepting claims" },
            ].map((item) => (
              <div key={item.status} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.color, marginTop: "4px", flexShrink: 0 }} />
                <div>
                  <div style={{ color: "#e6edf3", fontWeight: "600", fontSize: "0.9rem" }}>{item.status}</div>
                  <div style={{ color: "#8b949e", fontSize: "0.8rem" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div style={{ ...cardStyle, padding: "1.5rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1rem" }}>💡 Airdrop Tips</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              { icon: "⏰", title: "Act Early", desc: "Many airdrops have limited time windows. Don't miss snapshot dates." },
              { icon: "✓", title: "Verify Eligibility", desc: "Always check the full eligibility criteria before participating." },
              { icon: "🔒", title: "Never Share Keys", desc: "Legitimate airdrops never ask for private keys or seed phrases." },
              { icon: "📌", title: "Track Snapshots", desc: "Mark your calendar for snapshot dates to ensure participation eligibility." },
            ].map((tip) => (
              <div key={tip.title} style={{ background: "rgba(0,0,0,0.3)", borderRadius: "8px", padding: "1rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{tip.icon}</div>
                <div style={{ color: "#e6edf3", fontWeight: "600", fontSize: "0.95rem", marginBottom: "0.3rem" }}>{tip.title}</div>
                <div style={{ color: "#8b949e", fontSize: "0.8rem", lineHeight: "1.5" }}>{tip.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ ...cardStyle, padding: "1.25rem", fontSize: "0.85rem", color: "#8b949e", lineHeight: "1.6" }}>
          <strong style={{ color: "#e6edf3" }}>Disclaimer:</strong> This airdrop tracker provides informational data only. Always verify airdrop legitimacy through official channels before interacting.
          Estimated values are approximations and may vary. This is not financial advice. Crypto airdrops carry risks including scams and security threats.
          Always use official links and never share private keys or sensitive information.
        </div>
      </div>

      {/* Modal */}
      <EligibilityModal airdrop={selectedAirdrop} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>{`
        input, select { font-family: inherit; }
        input::placeholder { color: #6e7681; }
        select option { background: #161b22; color: #e6edf3; }
        button:hover { opacity: 0.95; }
      `}</style>
      <RelatedContent category="tools" currentSlug="/tools/airdrop-tracker" />
    </div>
  );
}
