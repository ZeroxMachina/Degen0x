"use client";
import { useState, useEffect } from "react";

// ─────────────────────────────────────────────
//  Trivia Leaderboard & Leagues — degen0x
//  Sprint 24 · Day 30
// ─────────────────────────────────────────────

interface LeaderboardEntry {
  name: string;
  score: number;
  streak: number;
  league: "bronze" | "silver" | "gold" | "diamond";
  gamesPlayed: number;
  avgScore: number;
  lastPlayed: string;
  badge?: string;
}

interface UserStats {
  name: string;
  totalScore: number;
  bestStreak: number;
  gamesPlayed: number;
  highScore: number;
  league: "bronze" | "silver" | "gold" | "diamond";
  rank?: number;
}

const LEAGUE_CONFIG = {
  bronze:  { label: "Bronze",  min: 0,    max: 999,   color: "#cd7f32", bg: "#cd7f3215", icon: "🥉", next: "Silver",  nextMin: 1000 },
  silver:  { label: "Silver",  min: 1000, max: 4999,  color: "#c0c0c0", bg: "#c0c0c015", icon: "🥈", next: "Gold",    nextMin: 5000 },
  gold:    { label: "Gold",    min: 5000, max: 14999, color: "#ffd700", bg: "#ffd70015", icon: "🥇", next: "Diamond", nextMin: 15000 },
  diamond: { label: "Diamond", min: 15000, max: Infinity, color: "#b9f2ff", bg: "#b9f2ff15", icon: "💎", next: null, nextMin: Infinity },
};

// Simulated global leaderboard (in a real app, this would be fetched from a backend)
const GLOBAL_MOCK: LeaderboardEntry[] = [
  { name: "SatoshiS", score: 38400, streak: 47, league: "diamond", gamesPlayed: 102, avgScore: 876, lastPlayed: "Today", badge: "🔥 47-day streak" },
  { name: "ETHwhale", score: 31200, streak: 32, league: "diamond", gamesPlayed: 88, avgScore: 854, lastPlayed: "Today", badge: "🐋 Whale" },
  { name: "DeFiDegen", score: 28900, streak: 28, league: "diamond", gamesPlayed: 79, avgScore: 841, lastPlayed: "Today" },
  { name: "BlockSage", score: 24100, streak: 21, league: "diamond", gamesPlayed: 71, avgScore: 820, lastPlayed: "Yesterday" },
  { name: "HODLking", score: 19800, streak: 19, league: "diamond", gamesPlayed: 63, avgScore: 808, lastPlayed: "Today", badge: "👑 HODLer" },
  { name: "AltcoinAce", score: 15200, streak: 14, league: "diamond", gamesPlayed: 55, avgScore: 793, lastPlayed: "2d ago" },
  { name: "RektRacer", score: 12700, streak: 11, league: "gold",    gamesPlayed: 48, avgScore: 780, lastPlayed: "Today" },
  { name: "Wen_Moon",  score: 10100, streak: 9,  league: "gold",    gamesPlayed: 42, avgScore: 762, lastPlayed: "Yesterday" },
  { name: "LedgerLord", score: 8400, streak: 7,  league: "gold",    gamesPlayed: 36, avgScore: 748, lastPlayed: "3d ago" },
  { name: "GasGremlin", score: 6600, streak: 5,  league: "gold",    gamesPlayed: 30, avgScore: 730, lastPlayed: "Today" },
  { name: "MempoolMax", score: 4900, streak: 4,  league: "silver",  gamesPlayed: 25, avgScore: 712, lastPlayed: "Yesterday" },
  { name: "FiatKiller",  score: 3200, streak: 3,  league: "silver",  gamesPlayed: 19, avgScore: 695, lastPlayed: "4d ago" },
  { name: "NFTNerd",    score: 2100, streak: 2,  league: "silver",  gamesPlayed: 14, avgScore: 677, lastPlayed: "Today" },
  { name: "ZkZealot",   score: 1400, streak: 2,  league: "silver",  gamesPlayed: 10, avgScore: 660, lastPlayed: "Yesterday" },
  { name: "NewbieNick", score: 700,  streak: 1,  league: "bronze",  gamesPlayed: 6,  avgScore: 633, lastPlayed: "Today" },
];

const WEEKLY_MOCK: LeaderboardEntry[] = [
  { name: "SatoshiS",   score: 4800, streak: 7, league: "diamond", gamesPlayed: 7, avgScore: 914, lastPlayed: "Today",     badge: "🏆 Week Champ" },
  { name: "ZkZealot",   score: 4200, streak: 5, league: "silver",  gamesPlayed: 7, avgScore: 867, lastPlayed: "Today" },
  { name: "ETHwhale",   score: 3900, streak: 4, league: "diamond", gamesPlayed: 6, avgScore: 843, lastPlayed: "Yesterday" },
  { name: "GasGremlin", score: 3600, streak: 6, league: "gold",    gamesPlayed: 7, avgScore: 831, lastPlayed: "Today" },
  { name: "DeFiDegen",  score: 3300, streak: 3, league: "diamond", gamesPlayed: 6, avgScore: 818, lastPlayed: "Today" },
  { name: "NFTNerd",    score: 2900, streak: 4, league: "silver",  gamesPlayed: 6, avgScore: 804, lastPlayed: "Today" },
  { name: "NewbieNick", score: 2600, streak: 7, league: "bronze",  gamesPlayed: 7, avgScore: 791, lastPlayed: "Today",     badge: "⚡ On Fire" },
  { name: "HODLking",   score: 2200, streak: 2, league: "diamond", gamesPlayed: 5, avgScore: 777, lastPlayed: "3d ago" },
  { name: "BlockSage",  score: 1900, streak: 3, league: "diamond", gamesPlayed: 5, avgScore: 763, lastPlayed: "Yesterday" },
  { name: "RektRacer",  score: 1600, streak: 2, league: "gold",    gamesPlayed: 4, avgScore: 750, lastPlayed: "Today" },
];

function getLeague(score: number): "bronze" | "silver" | "gold" | "diamond" {
  if (score >= 15000) return "diamond";
  if (score >= 5000)  return "gold";
  if (score >= 1000)  return "silver";
  return "bronze";
}

function getRankMedal(rank: number): string {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `#${rank}`;
}

export default function TriviaLeaderboard() {
  const [tab, setTab] = useState<"global" | "weekly">("weekly");
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [activeLeague, setActiveLeague] = useState<"all" | "bronze" | "silver" | "gold" | "diamond">("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load user stats from localStorage (set by DailyTrivia component)
    try {
      const stored = localStorage.getItem("trivia_leaderboard_profile");
      if (stored) {
        const parsed = JSON.parse(stored);
        setUserStats(parsed);
      }
      const storedName = localStorage.getItem("trivia_username");
      if (storedName) setUserName(storedName);
    } catch {}
  }, []);

  const data = tab === "global" ? GLOBAL_MOCK : WEEKLY_MOCK;
  const filtered = activeLeague === "all" ? data : data.filter(e => e.league === activeLeague);

  // Insert the user into the leaderboard if they have stats
  const displayData = [...filtered];
  let userRank: number | null = null;
  if (userStats && tab === "global") {
    const insertIdx = displayData.findIndex(e => e.score <= (userStats.totalScore || 0));
    userRank = insertIdx === -1 ? displayData.length + 1 : insertIdx + 1;
  }

  const league = userStats ? LEAGUE_CONFIG[userStats.league] : null;
  const nextLeague = league && league.next ? LEAGUE_CONFIG[getLeague((league.nextMin || 0))] : null;
  const progressPct = league && userStats
    ? Math.min(100, ((userStats.totalScore - league.min) / (league.nextMin - league.min)) * 100)
    : 0;

  function handleJoin() {
    if (!userName.trim()) return;
    const newProfile: UserStats = {
      name: userName.trim(),
      totalScore: 0,
      bestStreak: 0,
      gamesPlayed: 0,
      highScore: 0,
      league: "bronze",
    };
    try { localStorage.setItem("trivia_leaderboard_profile", JSON.stringify(newProfile)); } catch {}
    try { localStorage.setItem("trivia_username", userName.trim()); } catch {}
    setUserStats(newProfile);
    setShowJoinModal(false);
  }

  if (!mounted) return null;

  return (
    <div className="space-y-6">

      {/* ── League Header ── */}
      <div className="rounded-2xl overflow-hidden border border-[var(--color-border)]"
           style={{ background: "linear-gradient(135deg, #6366f108, #06b6d408)" }}>
        <div className="p-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-black text-[var(--color-text)] mb-1">
                🏆 Trivia Leaderboard
              </h2>
              <p className="text-[var(--color-text-secondary)] text-sm">
                Compete globally · Earn your league rank · New week resets Sunday midnight UTC
              </p>
            </div>

            {/* League Badges */}
            <div className="flex gap-2 flex-wrap">
              {(Object.keys(LEAGUE_CONFIG) as Array<keyof typeof LEAGUE_CONFIG>).map(l => {
                const cfg = LEAGUE_CONFIG[l];
                return (
                  <button key={l}
                    onClick={() => setActiveLeague(activeLeague === l ? "all" : l)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all"
                    style={{
                      background: activeLeague === l ? cfg.bg : "transparent",
                      borderColor: activeLeague === l ? cfg.color : "var(--color-border)",
                      color: activeLeague === l ? cfg.color : "var(--color-text-secondary)",
                    }}>
                    {cfg.icon} {cfg.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* User Card */}
          {userStats ? (
            <div className="mt-5 rounded-xl border p-4"
                 style={{ background: league?.bg, borderColor: league?.color + "40" }}>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{league?.icon}</div>
                  <div>
                    <div className="font-bold text-[var(--color-text)]">{userStats.name}</div>
                    <div className="text-xs" style={{ color: league?.color }}>
                      {league?.label} League
                      {userRank && <span className="ml-2 opacity-70">· Rank #{userRank}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 text-center">
                  <div>
                    <div className="text-xl font-black text-[var(--color-text)]">{userStats.totalScore.toLocaleString()}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Total Score</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-[var(--color-text)]">{userStats.bestStreak}🔥</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Best Streak</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-[var(--color-text)]">{userStats.gamesPlayed}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Games</div>
                  </div>
                </div>
              </div>

              {/* Progress to next league */}
              {league?.next && (
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: league.color }}>{league.label}</span>
                    <span className="text-[var(--color-text-secondary)]">
                      {(league.nextMin - userStats.totalScore).toLocaleString()} pts to {league.next}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--color-bg)] overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500"
                         style={{ width: `${progressPct}%`, background: league.color }} />
                  </div>
                </div>
              )}
              {!league?.next && (
                <div className="mt-2 text-xs font-bold" style={{ color: "#b9f2ff" }}>
                  💎 Max League Achieved — You&apos;re a Diamond Degen!
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowJoinModal(true)}
              className="mt-4 px-5 py-2.5 rounded-xl font-bold text-sm text-[var(--color-text)]"
              style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
              🎮 Join the Leaderboard
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex border-t border-[var(--color-border)]">
          {(["weekly", "global"] as const).map(t => (
            <button key={t}
              onClick={() => setTab(t)}
              className="flex-1 py-3 text-sm font-bold transition-colors"
              style={{
                background: tab === t ? "var(--color-surface)" : "transparent",
                color: tab === t ? "var(--color-primary)" : "var(--color-text-secondary)",
                borderBottom: tab === t ? "2px solid var(--color-primary)" : "2px solid transparent",
              }}>
              {t === "weekly" ? "📅 This Week" : "🌍 All-Time"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Leaderboard Table ── */}
      <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden"
           style={{ background: "var(--color-surface)" }}>
        {/* Column headers */}
        <div className="grid grid-cols-12 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]"
             style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="col-span-1">Rank</div>
          <div className="col-span-4">Player</div>
          <div className="col-span-2 text-right">Score</div>
          <div className="col-span-2 text-right">Streak</div>
          <div className="col-span-2 text-right">Avg</div>
          <div className="col-span-1 text-right">Last</div>
        </div>

        {filtered.length === 0 ? (
          <div className="p-8 text-center text-[var(--color-text-secondary)] text-sm">
            No players in this league yet. Be the first!
          </div>
        ) : (
          filtered.map((entry, i) => {
            const cfg = LEAGUE_CONFIG[entry.league];
            const isTop3 = i < 3;
            return (
              <div key={entry.name + i}
                   className="grid grid-cols-12 items-center px-4 py-3 text-sm transition-colors hover:bg-[var(--color-bg)]"
                   style={{
                     borderBottom: "1px solid var(--color-border)",
                     background: isTop3
                       ? `linear-gradient(90deg, ${cfg.color}08, transparent)`
                       : undefined,
                   }}>
                <div className="col-span-1 font-black text-base">{getRankMedal(i + 1)}</div>
                <div className="col-span-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-[var(--color-text)]">{entry.name}</span>
                    <span className="text-xs" style={{ color: cfg.color }}>{cfg.icon}</span>
                    {entry.badge && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full"
                            style={{ background: cfg.bg, color: cfg.color }}>
                        {entry.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                    {entry.gamesPlayed} games played
                  </div>
                </div>
                <div className="col-span-2 text-right font-black text-[var(--color-text)]">
                  {entry.score.toLocaleString()}
                </div>
                <div className="col-span-2 text-right">
                  <span className="font-bold text-[var(--color-text)]">{entry.streak}</span>
                  <span className="text-xs ml-0.5">🔥</span>
                </div>
                <div className="col-span-2 text-right text-[var(--color-text-secondary)]">
                  {entry.avgScore}
                </div>
                <div className="col-span-1 text-right text-xs text-[var(--color-text-secondary)]">
                  {entry.lastPlayed}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ── League Guide ── */}
      <div className="rounded-2xl border border-[var(--color-border)] p-6"
           style={{ background: "var(--color-surface)" }}>
        <h3 className="font-black text-[var(--color-text)] mb-4">🏅 League System</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(Object.values(LEAGUE_CONFIG)).map(cfg => (
            <div key={cfg.label} className="rounded-xl border p-3 text-center"
                 style={{ background: cfg.bg, borderColor: cfg.color + "40" }}>
              <div className="text-3xl mb-1">{cfg.icon}</div>
              <div className="font-bold text-sm" style={{ color: cfg.color }}>{cfg.label}</div>
              <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                {cfg.min === 0
                  ? `0 – ${cfg.max.toLocaleString()} pts`
                  : cfg.max === Infinity
                  ? `${cfg.min.toLocaleString()}+ pts`
                  : `${cfg.min.toLocaleString()} – ${cfg.max.toLocaleString()} pts`}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mt-4">
          Earn points by playing the daily trivia. Harder questions = more points. Maintain streaks for bonus multipliers.
          Weekly leaderboard resets every Sunday. All-time scores persist forever.
        </p>
      </div>

      {/* ── Join Modal ── */}
      {showJoinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
             style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="rounded-2xl border border-[var(--color-border)] p-6 w-full max-w-sm"
               style={{ background: "var(--color-surface)" }}>
            <h3 className="text-xl font-black text-[var(--color-text)] mb-2">🎮 Join the Leaderboard</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Choose your degen name to track your rank and compete globally.
            </p>
            <input
              type="text"
              maxLength={20}
              placeholder="Your degen name..."
              value={userName}
              onChange={e => setUserName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleJoin()}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] mb-4 focus:outline-none focus:border-[var(--color-primary)]"
            />
            <div className="flex gap-3">
              <button onClick={() => setShowJoinModal(false)}
                      className="flex-1 py-2.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-bold">
                Cancel
              </button>
              <button onClick={handleJoin}
                      disabled={!userName.trim()}
                      className="flex-1 py-2.5 rounded-xl text-[var(--color-text)] text-sm font-bold disabled:opacity-40"
                      style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
                Let&apos;s Go! 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
