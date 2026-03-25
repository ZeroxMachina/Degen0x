"use client";

import { useState, useEffect, useMemo } from "react";

/* ─── Types ─────────────────────────────────────────────────── */
interface LeaderboardUser {
  rank: number;
  id: string;
  displayName: string;
  avatar: string;
  xp: number;
  level: number;
  levelName: string;
  levelColor: string;
  streak: number;
  badges: string[];
  country: string;
  weeklyXP: number;
  change: number; // rank change this week
  walletAddress?: string;
}

type FilterPeriod = "all-time" | "weekly" | "monthly";
type FilterLevel = "all" | "beginner" | "mid" | "advanced";

/* ─── Mock data ──────────────────────────────────────────────── */
const LEVEL_MAP: Record<number, { name: string; color: string }> = {
  1: { name: "Newbie", color: "#8b949e" },
  2: { name: "Paper Hands", color: "#58a6ff" },
  3: { name: "Diamond Hands", color: "#3fb950" },
  4: { name: "Whale Watcher", color: "#d29922" },
  5: { name: "Alpha Hunter", color: "#bc8cff" },
  6: { name: "Degen Lord", color: "#f0883e" },
  7: { name: "Protocol King", color: "#f85149" },
  8: { name: "Chain God", color: "#39d353" },
};

const COUNTRIES = ["🇺🇸", "🇬🇧", "🇩🇪", "🇧🇷", "🇯🇵", "🇰🇷", "🇮🇳", "🇨🇦", "🇦🇺", "🇫🇷", "🇳🇬", "🇸🇬", "🇦🇷", "🇵🇭", "🇻🇳"];
const NAMES = [
  "0xSatoshi", "DegenQueen", "ChainGod_X", "MoonLord", "YieldFarmer",
  "BasedAlpha", "CryptoNinja", "Web3Sage", "DeFiWitch", "SolanaKing",
  "ETHMaxi", "NFTCollector", "ApeStrong", "BullMarket", "GWEIGoblin",
  "LayerZero_", "ArbitrageBot", "LiquidStaker", "DAO_Voter", "BridgeMaster",
  "GasOptimizer", "WhaleAlert", "FlashLoan_", "MEVHunter", "ProtocolDev",
  "OnChainOG", "DexTrader", "L2Believer", "ZkProof_", "RealYield_",
  "ChainAbstract", "IntentCoder", "EigenLayerFan", "RestakingMax", "BlastUser",
  "BaseBuilder", "ScrollDev", "ZkSyncFan", "StarkNetUser", "FuelUser",
  "CelestiaNode", "AltLayer_", "EigenDA_", "PolygonCDK", "MantleUser",
  "LineaBuild", "TaikoNode", "ModeNetwork", "BlastPoint", "FrameworkDev",
];
const BADGE_POOL = ["🔥", "💎", "🚀", "🏆", "⚡", "🐋", "🦅", "🎯", "🌾", "🌉"];

function randomBadges(n = 3): string[] {
  const shuffled = [...BADGE_POOL].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function generateLeaderboard(n = 50): LeaderboardUser[] {
  return Array.from({ length: n }, (_, i) => {
    const level = Math.max(1, Math.min(8, 8 - Math.floor(i / 7)));
    const baseXP = 80000 - i * 1500 + Math.floor(Math.random() * 800);
    return {
      rank: i + 1,
      id: `user_${i}`,
      displayName: NAMES[i % NAMES.length],
      avatar: ["🦊", "🐻", "🦁", "🐯", "🦅", "🐉", "🦄", "🤖", "👾", "🧙"][i % 10],
      xp: Math.max(500, baseXP),
      level,
      levelName: LEVEL_MAP[level].name,
      levelColor: LEVEL_MAP[level].color,
      streak: Math.floor(Math.random() * 90) + 1,
      badges: randomBadges(Math.min(5, 1 + Math.floor((n - i) / 10))),
      country: COUNTRIES[i % COUNTRIES.length],
      weeklyXP: Math.floor(Math.random() * 2000) + 200,
      change: Math.floor(Math.random() * 10) - 5,
      walletAddress: `${["0x", "sol_", "apt_"][i % 3]}${Math.random().toString(36).slice(2, 10)}`,
    };
  });
}

const ALL_USERS = generateLeaderboard(50);

/* ─── Rank change indicator ──────────────────────────────────── */
function RankChange({ change }: { change: number }) {
  if (change === 0) return <span style={{ color: "var(--text2)" }} className="text-xs font-bold">–</span>;
  const up = change > 0;
  return (
    <span className="text-xs font-bold flex items-center gap-0.5" style={{ color: up ? "#3fb950" : "#f85149" }}>
      {up ? "▲" : "▼"} {Math.abs(change)}
    </span>
  );
}

/* ─── Podium ─────────────────────────────────────────────────── */
function Podium({ users }: { users: LeaderboardUser[] }) {
  const [first, second, third] = users;
  const podium = [second, first, third];
  const heights = ["h-20", "h-28", "h-16"];
  const rankColors = ["silver", "#f0883e", "#d29922"];
  const rankLabels = ["2nd", "1st", "3rd"];
  const medals = ["🥈", "🥇", "🥉"];

  return (
    <div className="flex items-end justify-center gap-4 py-6 px-4">
      {podium.map((user, i) => (
        <div key={user.id} className="flex flex-col items-center gap-2 flex-1 max-w-[120px]">
          <div className="text-3xl">{user.avatar}</div>
          <div className="text-sm font-bold text-center truncate w-full" style={{ color: "var(--text)" }}>
            {user.displayName}
          </div>
          <div className="text-xs" style={{ color: user.levelColor }}>
            {user.levelName}
          </div>
          <div className="text-sm font-black" style={{ color: "#f0883e" }}>
            {(user.xp / 1000).toFixed(1)}K XP
          </div>
          <div
            className={`w-full ${heights[i]} rounded-t-xl flex items-start justify-center pt-2`}
            style={{
              background: i === 1
                ? "linear-gradient(180deg, rgba(240,136,62,0.25), rgba(240,136,62,0.08))"
                : "rgba(255,255,255,0.05)",
              border: `1px solid ${i === 1 ? "rgba(240,136,62,0.4)" : "var(--border)"}`,
            }}
          >
            <span className="text-xl">{medals[i]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function XPLeaderboard() {
  const [period, setPeriod] = useState<FilterPeriod>("all-time");
  const [levelFilter, setLevelFilter] = useState<FilterLevel>("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const PER_PAGE = 10;

  // Simulate "my rank"
  const myUser = useMemo<LeaderboardUser>(() => ({
    rank: 142,
    id: "me",
    displayName: "You",
    avatar: "🦊",
    xp: 6420,
    level: 5,
    levelName: "Alpha Hunter",
    levelColor: "#bc8cff",
    streak: 12,
    badges: ["⚡", "🔥", "💎"],
    country: "🌍",
    weeklyXP: 620,
    change: 3,
  }), []);

  const filtered = useMemo(() => {
    let list = [...ALL_USERS];

    // period sort
    if (period === "weekly") {
      list = list.sort((a, b) => b.weeklyXP - a.weeklyXP).map((u, i) => ({ ...u, rank: i + 1 }));
    }

    // level filter
    if (levelFilter === "beginner") list = list.filter((u) => u.level <= 2);
    else if (levelFilter === "mid") list = list.filter((u) => u.level >= 3 && u.level <= 5);
    else if (levelFilter === "advanced") list = list.filter((u) => u.level >= 6);

    // search
    if (search) {
      list = list.filter((u) => u.displayName.toLowerCase().includes(search.toLowerCase()));
    }

    return list;
  }, [period, levelFilter, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const page = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  useEffect(() => { setCurrentPage(1); }, [period, levelFilter, search]);

  const xpValue = (u: LeaderboardUser) => period === "weekly" ? u.weeklyXP : u.xp;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg, #0d1117)", color: "var(--text, #e6edf3)" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 px-4 py-4"
        style={{ background: "var(--surface, #161b22)", borderBottom: "1px solid var(--border, #30363d)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl font-black">🏆 XP Leaderboard</h1>
              <p className="text-xs mt-0.5" style={{ color: "var(--text2)" }}>
                Top degens onboarding the world to crypto
              </p>
            </div>
            <div
              className="text-right px-3 py-2 rounded-xl"
              style={{ background: "rgba(188,140,255,0.1)", border: "1px solid rgba(188,140,255,0.2)" }}
            >
              <div className="text-xs" style={{ color: "#bc8cff" }}>Your Rank</div>
              <div className="text-lg font-black" style={{ color: "#bc8cff" }}>#{myUser.rank}</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {/* Period */}
            <div
              className="flex rounded-xl overflow-hidden p-0.5"
              style={{ background: "var(--surface2, #1c2330)", border: "1px solid var(--border, #30363d)" }}
            >
              {(["all-time", "weekly", "monthly"] as FilterPeriod[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all"
                  style={{
                    background: period === p ? "var(--border)" : "transparent",
                    color: period === p ? "var(--text)" : "var(--text2)",
                  }}
                >
                  {p === "all-time" ? "All Time" : p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>

            {/* Level filter */}
            <div
              className="flex rounded-xl overflow-hidden p-0.5"
              style={{ background: "var(--surface2, #1c2330)", border: "1px solid var(--border, #30363d)" }}
            >
              {(["all", "beginner", "mid", "advanced"] as FilterLevel[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLevelFilter(l)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all"
                  style={{
                    background: levelFilter === l ? "var(--border)" : "transparent",
                    color: levelFilter === l ? "var(--text)" : "var(--text2)",
                  }}
                >
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-1 min-w-[160px]">
              <input
                type="text"
                placeholder="Search degen…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded-xl text-xs font-medium focus:outline-none transition-all"
                style={{
                  background: "var(--surface2, #1c2330)",
                  border: "1px solid var(--border, #30363d)",
                  color: "var(--text, #e6edf3)",
                }}
              />
              <svg
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5"
                style={{ color: "var(--text2)" }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-24">
        {/* Podium - only on all-time, no filter */}
        {period === "all-time" && levelFilter === "all" && !search && (
          <div
            className="mt-4 rounded-2xl overflow-hidden"
            style={{ background: "var(--surface, #161b22)", border: "1px solid var(--border, #30363d)" }}
          >
            <div className="px-4 pt-4">
              <h2 className="text-sm font-bold" style={{ color: "var(--text2)" }}>TOP 3 DEGENS</h2>
            </div>
            <Podium users={ALL_USERS.slice(0, 3)} />
          </div>
        )}

        {/* Table */}
        <div
          className="mt-4 rounded-2xl overflow-hidden"
          style={{ background: "var(--surface, #161b22)", border: "1px solid var(--border, #30363d)" }}
        >
          {/* My rank sticky */}
          <div
            className="px-4 py-3 flex items-center gap-3"
            style={{
              background: "rgba(188,140,255,0.07)",
              borderBottom: "1px solid rgba(188,140,255,0.2)",
            }}
          >
            <span className="text-sm font-black w-8 text-center" style={{ color: "#bc8cff" }}>#{myUser.rank}</span>
            <span className="text-xl">{myUser.avatar}</span>
            <div className="flex-1">
              <div className="font-bold text-sm">{myUser.displayName} <span className="text-xs font-normal" style={{ color: "var(--text2)" }}>(you)</span></div>
              <div className="text-xs" style={{ color: myUser.levelColor }}>{myUser.levelName}</div>
            </div>
            <div className="flex items-center gap-2">
              {myUser.badges.map((b, i) => <span key={i} className="text-base">{b}</span>)}
            </div>
            <div className="text-right">
              <div className="font-black text-sm" style={{ color: "#f0883e" }}>
                {(xpValue(myUser) / 1000).toFixed(1)}K XP
              </div>
              <RankChange change={myUser.change} />
            </div>
          </div>

          {/* User list */}
          {page.length === 0 ? (
            <div className="px-4 py-12 text-center" style={{ color: "var(--text2)" }}>
              No degens found. Try a different filter.
            </div>
          ) : (
            page.map((user, idx) => {
              const isTop3 = user.rank <= 3;
              const rankColor = user.rank === 1 ? "#f0883e" : user.rank === 2 ? "#8b949e" : user.rank === 3 ? "#d29922" : "var(--text2)";
              return (
                <div
                  key={user.id}
                  className="px-4 py-3 flex items-center gap-3 transition-all cursor-pointer"
                  style={{
                    borderTop: "1px solid var(--border, #30363d)",
                    background: highlightId === user.id ? "rgba(99,102,241,0.07)" : "transparent",
                  }}
                  onMouseEnter={() => setHighlightId(user.id)}
                  onMouseLeave={() => setHighlightId(null)}
                >
                  <span className="text-sm font-black w-8 text-center" style={{ color: rankColor }}>
                    {isTop3 ? ["🥇", "🥈", "🥉"][user.rank - 1] : `#${user.rank}`}
                  </span>

                  <span className="text-xl">{user.avatar}</span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm truncate">{user.displayName}</span>
                      <span>{user.country}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-medium" style={{ color: user.levelColor }}>
                        {user.levelName}
                      </span>
                      <span className="text-xs" style={{ color: "var(--text2)" }}>
                        🔥 {user.streak}d streak
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {user.badges.slice(0, 3).map((b, i) => (
                      <span key={i} className="text-sm">{b}</span>
                    ))}
                  </div>

                  <div className="text-right min-w-[70px]">
                    <div className="font-black text-sm" style={{ color: "#f0883e" }}>
                      {xpValue(user) >= 1000
                        ? `${(xpValue(user) / 1000).toFixed(1)}K`
                        : xpValue(user)}{" "}
                      XP
                    </div>
                    <RankChange change={user.change} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-40"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
            >
              ← Prev
            </button>
            <span className="text-sm" style={{ color: "var(--text2)" }}>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-40"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
            >
              Next →
            </button>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-6 rounded-2xl p-5 text-center"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.1))", border: "1px solid rgba(99,102,241,0.2)" }}
        >
          <div className="text-2xl mb-2">🚀</div>
          <h3 className="font-bold mb-1">Climb the ranks</h3>
          <p className="text-sm mb-4" style={{ color: "var(--text2)" }}>
            Complete courses, quizzes & daily challenges to earn XP and move up the leaderboard.
          </p>
          <a
            href="/courses"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
            style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", boxShadow: "0 4px 15px rgba(99,102,241,0.3)" }}
          >
            Start Earning XP →
          </a>
        </div>
      </div>
    </div>
  );
}
