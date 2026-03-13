"use client";

import { useState, useMemo } from "react";

interface TokenLaunch {
  id: string;
  name: string;
  ticker: string;
  chain: string;
  launchDate: Date;
  status: "upcoming" | "live" | "launched" | "ended";
  category: string;
  raiseTarget: number;
  raiseCompleted: number;
  platform: string;
  socialScore: number;
  riskLevel: "low" | "medium" | "high" | "extreme";
  hasAudit: boolean;
  teamDoxxed: boolean;
  description: string;
  tags: string[];
}

const RISK_COLORS: Record<string, { bg: string; text: string }> = {
  low: { bg: "#3fb95020", text: "#3fb950" },
  medium: { bg: "#d2992220", text: "#d29922" },
  high: { bg: "#f0883e20", text: "#f0883e" },
  extreme: { bg: "#f8514920", text: "#f85149" },
};

const STATUS_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  upcoming: { bg: "#58a6ff20", text: "#58a6ff", label: "Upcoming" },
  live: { bg: "#3fb95020", text: "#3fb950", label: "LIVE NOW" },
  launched: { bg: "#bc8cff20", text: "#bc8cff", label: "Launched" },
  ended: { bg: "#8b949e20", text: "#8b949e", label: "Ended" },
};

function generateTokenLaunches(): TokenLaunch[] {
  const names = [
    { name: "NeuralSwap", ticker: "NSWAP", category: "AI/DeFi", desc: "AI-powered DEX aggregator with predictive routing and MEV protection", tags: ["AI", "DEX", "MEV Protection"] },
    { name: "QuantumVault", ticker: "QVLT", category: "Security", desc: "Post-quantum cryptography wallet with multi-party computation", tags: ["Security", "Quantum", "MPC"] },
    { name: "YieldForge", ticker: "YFRG", category: "DeFi", desc: "Cross-chain yield optimizer with auto-compounding strategies across 8 chains", tags: ["DeFi", "Yield", "Cross-chain"] },
    { name: "MetaRealms", ticker: "REALM", category: "GameFi", desc: "Open-world crypto RPG with play-to-earn mechanics and NFT land ownership", tags: ["GameFi", "NFT", "Metaverse"] },
    { name: "DataLayer", ticker: "DLAY", category: "Infrastructure", desc: "Decentralized data availability layer for rollups with erasure coding", tags: ["Infrastructure", "DA", "Rollups"] },
    { name: "SocialFi Pro", ticker: "SFPRO", category: "SocialFi", desc: "Decentralized social media protocol with token-gated communities", tags: ["SocialFi", "Social", "Token-gated"] },
    { name: "ChainOracle", ticker: "CORC", category: "Oracle", desc: "Next-gen oracle network with ZK-proof verified data feeds and <100ms latency", tags: ["Oracle", "ZK", "Data"] },
    { name: "LiquidStake", ticker: "LSTK", category: "Staking", desc: "Multi-chain liquid staking with instant unbonding via flash loans", tags: ["Staking", "Liquid", "Flash Loans"] },
    { name: "PrivacyMesh", ticker: "PMSH", category: "Privacy", desc: "Privacy-preserving DeFi using FHE (fully homomorphic encryption)", tags: ["Privacy", "FHE", "DeFi"] },
    { name: "BridgeX", ticker: "BRDX", category: "Bridge", desc: "Intent-based cross-chain bridge with guaranteed execution and insurance", tags: ["Bridge", "Intents", "Insurance"] },
    { name: "DegenAI", ticker: "DGEN", category: "AI/Meme", desc: "AI agent that trades memecoins on behalf of holders with profit sharing", tags: ["AI", "Meme", "Trading Bot"] },
    { name: "RealYield", ticker: "RYLD", category: "RWA", desc: "Tokenized US Treasury + corporate bond yields on-chain with daily distributions", tags: ["RWA", "Bonds", "Yield"] },
  ];

  const chains = ["Ethereum", "Solana", "Base", "Arbitrum", "BNB Chain", "Avalanche", "Polygon"];
  const platforms = ["Fjord Foundry", "Pinksale", "Camelot", "DAO Maker", "Seedify", "Jupiter LFG", "Raydium AcceleRaytor"];
  const statuses: TokenLaunch["status"][] = ["upcoming", "live", "launched", "ended"];
  const risks: TokenLaunch["riskLevel"][] = ["low", "medium", "high", "extreme"];

  return names.map((item, i) => {
    const launchDate = new Date(Date.now() + (i - 4) * 86400000 * 3);
    const status = i < 3 ? "upcoming" : i < 5 ? "live" : i < 9 ? "launched" : "ended";
    const target = Math.floor(Math.random() * 5000000) + 500000;
    return {
      id: `launch-${i}`,
      name: item.name,
      ticker: item.ticker,
      chain: chains[i % chains.length],
      launchDate,
      status,
      category: item.category,
      raiseTarget: target,
      raiseCompleted: status === "upcoming" ? 0 : Math.floor(target * (0.3 + Math.random() * 0.7)),
      platform: platforms[i % platforms.length],
      socialScore: Math.floor(Math.random() * 60) + 40,
      riskLevel: risks[Math.min(i % 4, 3)],
      hasAudit: Math.random() > 0.3,
      teamDoxxed: Math.random() > 0.4,
      description: item.desc,
      tags: item.tags,
    };
  });
}

function formatUSD(n: number): string {
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function TokenRadarClient() {
  const [launches] = useState<TokenLaunch[]>(generateTokenLaunches);
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"date" | "social" | "raise">("date");

  const categories = useMemo(() => [...new Set(launches.map((l) => l.category))], [launches]);

  const filtered = useMemo(() => {
    return launches
      .filter((l) => statusFilter === "all" || l.status === statusFilter)
      .filter((l) => categoryFilter === "all" || l.category === categoryFilter)
      .sort((a, b) => {
        if (sortBy === "date") return a.launchDate.getTime() - b.launchDate.getTime();
        if (sortBy === "social") return b.socialScore - a.socialScore;
        return b.raiseTarget - a.raiseTarget;
      });
  }, [launches, statusFilter, categoryFilter, sortBy]);

  const liveCount = launches.filter((l) => l.status === "live").length;
  const upcomingCount = launches.filter((l) => l.status === "upcoming").length;

  return (
    <div className="min-h-screen" style={{ background: "#0d1117", color: "#e6edf3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🚀</span>
            <h1 className="text-3xl md:text-4xl font-bold">Token Launch Radar</h1>
          </div>
          <p className="text-lg" style={{ color: "#8b949e" }}>
            Discover new token launches, IDOs, and listings. DYOR — always verify contracts and team backgrounds.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl p-4" style={{ background: "#161b22", border: "1px solid #30363d" }}>
            <div className="text-xs font-semibold uppercase" style={{ color: "#8b949e" }}>Live Now</div>
            <div className="text-3xl font-bold" style={{ color: "#3fb950" }}>{liveCount}</div>
          </div>
          <div className="rounded-xl p-4" style={{ background: "#161b22", border: "1px solid #30363d" }}>
            <div className="text-xs font-semibold uppercase" style={{ color: "#8b949e" }}>Upcoming</div>
            <div className="text-3xl font-bold" style={{ color: "#58a6ff" }}>{upcomingCount}</div>
          </div>
          <div className="rounded-xl p-4" style={{ background: "#161b22", border: "1px solid #30363d" }}>
            <div className="text-xs font-semibold uppercase" style={{ color: "#8b949e" }}>Total Tracked</div>
            <div className="text-3xl font-bold" style={{ color: "#bc8cff" }}>{launches.length}</div>
          </div>
          <div className="rounded-xl p-4" style={{ background: "#161b22", border: "1px solid #30363d" }}>
            <div className="text-xs font-semibold uppercase" style={{ color: "#8b949e" }}>Total Raise Volume</div>
            <div className="text-3xl font-bold" style={{ color: "#d29922" }}>
              {formatUSD(launches.reduce((s, l) => s + l.raiseTarget, 0))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg px-3 py-2 text-sm" style={{ background: "#161b22", color: "#e6edf3", border: "1px solid #30363d" }}>
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="live">Live</option>
            <option value="launched">Launched</option>
          </select>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-lg px-3 py-2 text-sm" style={{ background: "#161b22", color: "#e6edf3", border: "1px solid #30363d" }}>
            <option value="all">All Categories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="rounded-lg px-3 py-2 text-sm" style={{ background: "#161b22", color: "#e6edf3", border: "1px solid #30363d" }}>
            <option value="date">Sort by Date</option>
            <option value="social">Sort by Social Score</option>
            <option value="raise">Sort by Raise Size</option>
          </select>
        </div>

        {/* Token Cards */}
        <div className="space-y-4">
          {filtered.map((launch) => {
            const st = STATUS_STYLES[launch.status];
            const risk = RISK_COLORS[launch.riskLevel];
            const pct = launch.raiseTarget > 0 ? Math.min((launch.raiseCompleted / launch.raiseTarget) * 100, 100) : 0;
            return (
              <div key={launch.id} className="rounded-xl p-5" style={{ background: "#161b22", border: "1px solid #30363d" }}>
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="font-bold text-lg">{launch.name}</h3>
                      <span className="text-sm font-mono font-bold" style={{ color: "#8b949e" }}>${launch.ticker}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: st.bg, color: st.text }}>
                        {st.label}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: risk.bg, color: risk.text }}>
                        {launch.riskLevel.toUpperCase()} RISK
                      </span>
                    </div>
                    <p className="text-sm mb-3" style={{ color: "#8b949e" }}>{launch.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {launch.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: "#6366f115", color: "#818cf8", border: "1px solid #6366f130" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs" style={{ color: "#8b949e" }}>
                      <span>Chain: <strong style={{ color: "#e6edf3" }}>{launch.chain}</strong></span>
                      <span>Platform: <strong style={{ color: "#e6edf3" }}>{launch.platform}</strong></span>
                      <span>Date: <strong style={{ color: "#e6edf3" }}>{formatDate(launch.launchDate)}</strong></span>
                      <span>Audit: <strong style={{ color: launch.hasAudit ? "#3fb950" : "#f85149" }}>
                        {launch.hasAudit ? "✓ Verified" : "✗ None"}
                      </strong></span>
                      <span>Team: <strong style={{ color: launch.teamDoxxed ? "#3fb950" : "#f85149" }}>
                        {launch.teamDoxxed ? "✓ Doxxed" : "✗ Anon"}
                      </strong></span>
                    </div>
                  </div>
                  <div className="md:min-w-[200px] md:text-right">
                    <div className="text-xs font-semibold uppercase mb-1" style={{ color: "#8b949e" }}>Raise Target</div>
                    <div className="text-2xl font-bold mb-2" style={{ color: "#58a6ff" }}>{formatUSD(launch.raiseTarget)}</div>
                    {launch.status !== "upcoming" && (
                      <div>
                        <div className="h-2 rounded-full overflow-hidden mb-1" style={{ background: "#30363d" }}>
                          <div className="h-full rounded-full" style={{ background: "#3fb950", width: `${pct}%` }} />
                        </div>
                        <div className="text-xs" style={{ color: "#8b949e" }}>{pct.toFixed(0)}% filled</div>
                      </div>
                    )}
                    <div className="mt-3 flex items-center gap-2 md:justify-end">
                      <span className="text-xs" style={{ color: "#8b949e" }}>Social Score:</span>
                      <span className="font-bold text-sm" style={{
                        color: launch.socialScore >= 80 ? "#3fb950" : launch.socialScore >= 60 ? "#d29922" : "#f85149"
                      }}>
                        {launch.socialScore}/100
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-xl p-4 text-sm" style={{ background: "#f8514910", border: "1px solid #f8514930", color: "#f85149" }}>
          <strong>⚠ Disclaimer:</strong> Token launches carry extreme risk. Always do your own research (DYOR). Check smart contract audits, team backgrounds, tokenomics, and vesting schedules. Never invest more than you can afford to lose. degen0x does not endorse or recommend any specific token.
        </div>
      </div>
    </div>
  );
}
