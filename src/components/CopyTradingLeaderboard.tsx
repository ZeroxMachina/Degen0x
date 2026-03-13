"use client";

import { useState, useMemo } from "react";

interface Trader {
  rank: number;
  name: string;
  avatar: string;
  address: string;
  pnl30d: number;
  pnl7d: number;
  winRate: number;
  totalTrades: number;
  followers: number;
  aum: number;
  strategy: string;
  riskLevel: "Low" | "Medium" | "High" | "Degen";
  chains: string[];
  topTokens: string[];
  sharpeRatio: number;
  maxDrawdown: number;
  copiers: number;
  verified: boolean;
}

const MOCK_TRADERS: Trader[] = [
  {
    rank: 1, name: "CryptoWhale.sol", avatar: "🐋", address: "7xKp...m3Tz",
    pnl30d: 847.3, pnl7d: 124.5, winRate: 78.2, totalTrades: 1243,
    followers: 12450, aum: 4820000, strategy: "Momentum Swing",
    riskLevel: "Medium", chains: ["SOL", "ETH"], topTokens: ["JUP", "WIF", "BONK"],
    sharpeRatio: 2.84, maxDrawdown: -18.3, copiers: 892, verified: true,
  },
  {
    rank: 2, name: "AlphaHunter", avatar: "🎯", address: "0xA3...9f2B",
    pnl30d: 634.1, pnl7d: 89.2, winRate: 72.5, totalTrades: 876,
    followers: 8930, aum: 2150000, strategy: "Dip Buyer",
    riskLevel: "High", chains: ["ETH", "ARB", "BASE"], topTokens: ["PEPE", "ARB", "AERO"],
    sharpeRatio: 2.31, maxDrawdown: -24.7, copiers: 641, verified: true,
  },
  {
    rank: 3, name: "DeFi_Sage", avatar: "🧙", address: "5mRq...kL8n",
    pnl30d: 521.8, pnl7d: 67.3, winRate: 81.4, totalTrades: 567,
    followers: 6720, aum: 1890000, strategy: "Yield Farmer",
    riskLevel: "Low", chains: ["ETH", "SOL", "AVAX"], topTokens: ["AAVE", "JTO", "AVAX"],
    sharpeRatio: 3.12, maxDrawdown: -11.2, copiers: 523, verified: true,
  },
  {
    rank: 4, name: "MemeKing420", avatar: "👑", address: "3kLp...qW7v",
    pnl30d: 2341.6, pnl7d: -12.8, winRate: 45.3, totalTrades: 3421,
    followers: 21300, aum: 890000, strategy: "Meme Sniper",
    riskLevel: "Degen", chains: ["SOL", "BASE"], topTokens: ["WIF", "BONK", "BOME"],
    sharpeRatio: 1.45, maxDrawdown: -62.5, copiers: 1203, verified: false,
  },
  {
    rank: 5, name: "Institutional_Q", avatar: "🏦", address: "0x7F...3aD1",
    pnl30d: 189.4, pnl7d: 31.2, winRate: 85.7, totalTrades: 234,
    followers: 4560, aum: 8900000, strategy: "Blue Chip Only",
    riskLevel: "Low", chains: ["ETH"], topTokens: ["ETH", "LINK", "UNI"],
    sharpeRatio: 3.89, maxDrawdown: -7.8, copiers: 312, verified: true,
  },
  {
    rank: 6, name: "NFA_Larry", avatar: "🎰", address: "8pQx...j4Rm",
    pnl30d: 1567.2, pnl7d: 234.1, winRate: 52.1, totalTrades: 2198,
    followers: 15670, aum: 560000, strategy: "Leverage Degen",
    riskLevel: "Degen", chains: ["SOL", "ETH", "ARB"], topTokens: ["SOL", "ETH", "DOGE"],
    sharpeRatio: 1.12, maxDrawdown: -78.3, copiers: 987, verified: false,
  },
  {
    rank: 7, name: "OnChainSherlock", avatar: "🔍", address: "4vNk...tP2s",
    pnl30d: 312.7, pnl7d: 45.6, winRate: 74.8, totalTrades: 412,
    followers: 5890, aum: 1340000, strategy: "On-Chain Alpha",
    riskLevel: "Medium", chains: ["ETH", "SOL", "BASE"], topTokens: ["FRIEND", "BLUR", "RNDR"],
    sharpeRatio: 2.56, maxDrawdown: -19.5, copiers: 445, verified: true,
  },
  {
    rank: 8, name: "AirdropMaxi", avatar: "🪂", address: "6tRz...wM8a",
    pnl30d: 278.4, pnl7d: 56.9, winRate: 69.3, totalTrades: 789,
    followers: 9870, aum: 720000, strategy: "Airdrop Farmer",
    riskLevel: "Medium", chains: ["ETH", "ZK", "LINEA", "SCROLL"], topTokens: ["ZK", "STRK", "EIGEN"],
    sharpeRatio: 2.01, maxDrawdown: -22.1, copiers: 678, verified: true,
  },
  {
    rank: 9, name: "NFT_Flipper_Pro", avatar: "🖼️", address: "0xBc...5nQ7",
    pnl30d: 423.9, pnl7d: -8.3, winRate: 61.2, totalTrades: 1567,
    followers: 7340, aum: 430000, strategy: "NFT + Token Rotator",
    riskLevel: "High", chains: ["ETH", "SOL"], topTokens: ["BLUR", "TENSOR", "ME"],
    sharpeRatio: 1.78, maxDrawdown: -35.4, copiers: 534, verified: false,
  },
  {
    rank: 10, name: "The_Compounder", avatar: "📈", address: "2wKp...fL9c",
    pnl30d: 156.3, pnl7d: 22.1, winRate: 88.9, totalTrades: 156,
    followers: 3210, aum: 5670000, strategy: "DCA + Stake",
    riskLevel: "Low", chains: ["ETH", "SOL"], topTokens: ["ETH", "SOL", "stETH"],
    sharpeRatio: 4.21, maxDrawdown: -5.3, copiers: 234, verified: true,
  },
];

const riskColors: Record<string, string> = {
  Low: "text-green-400 bg-green-400/10 border-green-400/20",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  High: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Degen: "text-red-400 bg-red-400/10 border-red-400/20",
};

type SortKey = "pnl30d" | "pnl7d" | "winRate" | "followers" | "aum" | "sharpeRatio" | "copiers";
type TimeFilter = "7d" | "30d" | "90d" | "all";
type RiskFilter = "all" | "Low" | "Medium" | "High" | "Degen";

export default function CopyTradingLeaderboard() {
  const [sortBy, setSortBy] = useState<SortKey>("pnl30d");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [riskFilter, setRiskFilter] = useState<RiskFilter>("all");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("30d");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrader, setSelectedTrader] = useState<Trader | null>(null);
  const [followedTraders, setFollowedTraders] = useState<Set<string>>(new Set());

  const filteredTraders = useMemo(() => {
    let traders = [...MOCK_TRADERS];
    if (riskFilter !== "all") traders = traders.filter(t => t.riskLevel === riskFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      traders = traders.filter(t => t.name.toLowerCase().includes(q) || t.strategy.toLowerCase().includes(q));
    }
    traders.sort((a, b) => {
      const mul = sortDir === "desc" ? -1 : 1;
      return mul * ((a[sortBy] as number) - (b[sortBy] as number));
    });
    return traders;
  }, [sortBy, sortDir, riskFilter, searchQuery]);

  const toggleSort = (key: SortKey) => {
    if (sortBy === key) setSortDir(d => d === "desc" ? "asc" : "desc");
    else { setSortBy(key); setSortDir("desc"); }
  };

  const toggleFollow = (name: string) => {
    setFollowedTraders(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const formatNum = (n: number) => {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
    return `$${n.toFixed(0)}`;
  };

  const SortHeader = ({ label, field }: { label: string; field: SortKey }) => (
    <th
      className="text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide px-4 py-3 cursor-pointer hover:text-[var(--color-text)] transition-colors select-none"
      onClick={() => toggleSort(field)}
    >
      <span className="inline-flex items-center gap-1">
        {label}
        {sortBy === field && <span>{sortDir === "desc" ? "↓" : "↑"}</span>}
      </span>
    </th>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Copy Trading Leaderboard</h1>
          <p className="text-[var(--color-text-secondary)] mt-1">
            Follow top traders and mirror their strategies. Updated every 5 minutes.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-green-400/10 text-green-400 font-semibold border border-green-400/20">
            {MOCK_TRADERS.length} Active Traders
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-blue-400/10 text-blue-400 font-semibold border border-blue-400/20">
            {MOCK_TRADERS.reduce((s, t) => s + t.copiers, 0).toLocaleString()} Total Copiers
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search traders or strategies..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        <div className="flex gap-2">
          {(["all", "Low", "Medium", "High", "Degen"] as RiskFilter[]).map(r => (
            <button
              key={r}
              onClick={() => setRiskFilter(r)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                riskFilter === r
                  ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/40"
                  : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-text-secondary)]"
              }`}
            >
              {r === "all" ? "All Risk" : r}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredTraders.slice(0, 3).map((trader, i) => (
          <div
            key={trader.name}
            onClick={() => setSelectedTrader(trader)}
            className={`relative bg-[var(--color-surface)] border rounded-xl p-5 cursor-pointer hover:border-indigo-500/40 transition-all ${
              i === 0 ? "border-yellow-500/40 ring-1 ring-yellow-500/20" :
              i === 1 ? "border-gray-400/30" :
              "border-orange-700/30"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{trader.avatar}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{trader.name}</span>
                  {trader.verified && <span className="text-blue-400 text-xs">✓</span>}
                </div>
                <span className="text-xs text-[var(--color-text-secondary)]">{trader.address}</span>
              </div>
              <span className="ml-auto text-2xl font-bold opacity-20">
                {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-[var(--color-text-secondary)] text-xs">30D PnL</div>
                <div className={`font-bold ${trader.pnl30d >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {trader.pnl30d >= 0 ? "+" : ""}{trader.pnl30d.toFixed(1)}%
                </div>
              </div>
              <div>
                <div className="text-[var(--color-text-secondary)] text-xs">Win Rate</div>
                <div className="font-bold">{trader.winRate}%</div>
              </div>
              <div>
                <div className="text-[var(--color-text-secondary)] text-xs">AUM</div>
                <div className="font-bold">{formatNum(trader.aum)}</div>
              </div>
              <div>
                <div className="text-[var(--color-text-secondary)] text-xs">Copiers</div>
                <div className="font-bold">{trader.copiers.toLocaleString()}</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded border ${riskColors[trader.riskLevel]}`}>
                {trader.riskLevel}
              </span>
              <span className="text-xs text-[var(--color-text-secondary)]">{trader.strategy}</span>
            </div>
            <button
              onClick={e => { e.stopPropagation(); toggleFollow(trader.name); }}
              className={`mt-3 w-full py-2 rounded-lg text-xs font-semibold transition-colors ${
                followedTraders.has(trader.name)
                  ? "bg-indigo-500 text-white"
                  : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20"
              }`}
            >
              {followedTraders.has(trader.name) ? "✓ Following" : "Follow & Copy"}
            </button>
          </div>
        ))}
      </div>

      {/* Full Table */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase px-4 py-3">#</th>
              <th className="text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase px-4 py-3">Trader</th>
              <SortHeader label="30D PnL" field="pnl30d" />
              <SortHeader label="7D PnL" field="pnl7d" />
              <SortHeader label="Win Rate" field="winRate" />
              <SortHeader label="AUM" field="aum" />
              <SortHeader label="Sharpe" field="sharpeRatio" />
              <SortHeader label="Copiers" field="copiers" />
              <th className="text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase px-4 py-3">Risk</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredTraders.map((trader, idx) => (
              <tr
                key={trader.name}
                className="border-b border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] transition-colors cursor-pointer"
                onClick={() => setSelectedTrader(trader)}
              >
                <td className="px-4 py-3 text-sm font-bold text-[var(--color-text-secondary)]">{idx + 1}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{trader.avatar}</span>
                    <div>
                      <div className="flex items-center gap-1 font-semibold text-sm">
                        {trader.name} {trader.verified && <span className="text-blue-400 text-[10px]">✓</span>}
                      </div>
                      <div className="text-[10px] text-[var(--color-text-secondary)]">{trader.strategy}</div>
                    </div>
                  </div>
                </td>
                <td className={`px-4 py-3 text-sm font-bold ${trader.pnl30d >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {trader.pnl30d >= 0 ? "+" : ""}{trader.pnl30d.toFixed(1)}%
                </td>
                <td className={`px-4 py-3 text-sm font-bold ${trader.pnl7d >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {trader.pnl7d >= 0 ? "+" : ""}{trader.pnl7d.toFixed(1)}%
                </td>
                <td className="px-4 py-3 text-sm">{trader.winRate}%</td>
                <td className="px-4 py-3 text-sm">{formatNum(trader.aum)}</td>
                <td className="px-4 py-3 text-sm">{trader.sharpeRatio.toFixed(2)}</td>
                <td className="px-4 py-3 text-sm">{trader.copiers.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded border ${riskColors[trader.riskLevel]}`}>
                    {trader.riskLevel}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={e => { e.stopPropagation(); toggleFollow(trader.name); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      followedTraders.has(trader.name)
                        ? "bg-indigo-500 text-white"
                        : "bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20"
                    }`}
                  >
                    {followedTraders.has(trader.name) ? "Following" : "Copy"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Trader Detail Modal */}
      {selectedTrader && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelectedTrader(null)}
        >
          <div
            className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl max-w-lg w-full p-6 max-h-[80vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedTrader.avatar}</span>
                <div>
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    {selectedTrader.name}
                    {selectedTrader.verified && <span className="text-blue-400 text-sm">✓ Verified</span>}
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">{selectedTrader.address}</p>
                </div>
              </div>
              <button onClick={() => setSelectedTrader(null)} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">✕</button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-[var(--color-surface)] rounded-lg p-3">
                <div className="text-xs text-[var(--color-text-secondary)]">30D PnL</div>
                <div className={`text-xl font-bold ${selectedTrader.pnl30d >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {selectedTrader.pnl30d >= 0 ? "+" : ""}{selectedTrader.pnl30d.toFixed(1)}%
                </div>
              </div>
              <div className="bg-[var(--color-surface)] rounded-lg p-3">
                <div className="text-xs text-[var(--color-text-secondary)]">Win Rate</div>
                <div className="text-xl font-bold">{selectedTrader.winRate}%</div>
              </div>
              <div className="bg-[var(--color-surface)] rounded-lg p-3">
                <div className="text-xs text-[var(--color-text-secondary)]">Sharpe Ratio</div>
                <div className="text-xl font-bold text-indigo-400">{selectedTrader.sharpeRatio.toFixed(2)}</div>
              </div>
              <div className="bg-[var(--color-surface)] rounded-lg p-3">
                <div className="text-xs text-[var(--color-text-secondary)]">Max Drawdown</div>
                <div className="text-xl font-bold text-red-400">{selectedTrader.maxDrawdown}%</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-secondary)]">Strategy</span>
                <span className="font-semibold">{selectedTrader.strategy}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-secondary)]">Risk Level</span>
                <span className={`px-2 py-0.5 rounded text-xs border ${riskColors[selectedTrader.riskLevel]}`}>{selectedTrader.riskLevel}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-secondary)]">AUM</span>
                <span className="font-semibold">{formatNum(selectedTrader.aum)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-secondary)]">Total Trades</span>
                <span className="font-semibold">{selectedTrader.totalTrades.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-secondary)]">Chains</span>
                <span className="font-semibold">{selectedTrader.chains.join(", ")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-secondary)]">Top Tokens</span>
                <span className="font-semibold">{selectedTrader.topTokens.join(", ")}</span>
              </div>
            </div>

            <button
              onClick={() => toggleFollow(selectedTrader.name)}
              className={`mt-5 w-full py-3 rounded-xl font-semibold transition-colors ${
                followedTraders.has(selectedTrader.name)
                  ? "bg-indigo-500 text-white"
                  : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20"
              }`}
            >
              {followedTraders.has(selectedTrader.name) ? "✓ Following — Stop Copy" : "Start Copy Trading"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
