"use client";

import { useState, useEffect, useCallback } from "react";

/* ─── Types ────────────────────────────────────────────────── */
interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlockedAt?: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  requirement: string;
}

interface Level {
  level: number;
  name: string;
  xpRequired: number;
  color: string;
  perks: string[];
}

interface StreakData {
  current: number;
  longest: number;
  lastCheckIn: string;
  multiplier: number;
}

interface UserProgress {
  xp: number;
  level: number;
  totalTrades: number;
  badges: Badge[];
  streak: StreakData;
  weeklyXP: number[];
  achievements: string[];
}

/* ─── Constants ────────────────────────────────────────────── */
const LEVELS: Level[] = [
  { level: 1, name: "Newbie", xpRequired: 0, color: "#8b949e", perks: ["Basic market data"] },
  { level: 2, name: "Paper Hands", xpRequired: 500, color: "#58a6ff", perks: ["Watchlist access", "3 price alerts"] },
  { level: 3, name: "Diamond Hands", xpRequired: 1500, color: "#3fb950", perks: ["10 price alerts", "Copy trading (follow)"] },
  { level: 4, name: "Whale Watcher", xpRequired: 4000, color: "#d29922", perks: ["Whale alerts", "DeFi yields", "Advanced charts"] },
  { level: 5, name: "Alpha Hunter", xpRequired: 8000, color: "#bc8cff", perks: ["Trading signals", "NFT analytics", "Priority API"] },
  { level: 6, name: "Degen Lord", xpRequired: 15000, color: "#f0883e", perks: ["Copy trading (lead)", "Custom strategies"] },
  { level: 7, name: "Protocol King", xpRequired: 30000, color: "#f85149", perks: ["Governance votes", "Early launch access"] },
  { level: 8, name: "Chain God", xpRequired: 60000, color: "#39d353", perks: ["All features", "VIP support", "Revenue share"] },
];

const ALL_BADGES: Badge[] = [
  { id: "first-trade", name: "First Trade", icon: "🔰", description: "Execute your first trade", rarity: "common", requirement: "1 trade" },
  { id: "streak-7", name: "Week Warrior", icon: "🔥", description: "7-day login streak", rarity: "common", requirement: "7-day streak" },
  { id: "streak-30", name: "Monthly Degen", icon: "💎", description: "30-day login streak", rarity: "rare", requirement: "30-day streak" },
  { id: "whale-spotter", name: "Whale Spotter", icon: "🐋", description: "Track 10 whale wallets", rarity: "rare", requirement: "Track 10 wallets" },
  { id: "yield-farmer", name: "Yield Farmer", icon: "🌾", description: "Stake in 5 different protocols", rarity: "rare", requirement: "5 protocol stakes" },
  { id: "nft-collector", name: "NFT Collector", icon: "🖼️", description: "Own NFTs from 3 collections", rarity: "epic", requirement: "3 NFT collections" },
  { id: "alpha-caller", name: "Alpha Caller", icon: "📡", description: "3 profitable signal follows", rarity: "epic", requirement: "3 profitable signals" },
  { id: "copy-master", name: "Copy Master", icon: "👑", description: "Get 50 copy followers", rarity: "epic", requirement: "50 followers" },
  { id: "chain-bridge", name: "Chain Bridger", icon: "🌉", description: "Bridge to 5 different chains", rarity: "rare", requirement: "5 chain bridges" },
  { id: "degen-100", name: "Degen 100x", icon: "🚀", description: "Achieve a 100x return on any trade", rarity: "legendary", requirement: "100x return" },
  { id: "community-og", name: "Community OG", icon: "⭐", description: "100 community contributions", rarity: "legendary", requirement: "100 contributions" },
  { id: "full-stack", name: "Full Stack Degen", icon: "🏆", description: "Use every platform feature", rarity: "legendary", requirement: "All features used" },
];

/* ─── Mock user data ──────────────────────────────────────── */
const MOCK_USER: UserProgress = {
  xp: 6420,
  level: 5,
  totalTrades: 247,
  streak: { current: 12, longest: 34, lastCheckIn: "2026-03-13", multiplier: 1.6 },
  weeklyXP: [320, 480, 290, 510, 440, 380, 620],
  achievements: ["first-trade", "streak-7", "streak-30", "whale-spotter", "yield-farmer", "chain-bridge", "alpha-caller"],
  badges: ALL_BADGES.filter((b) =>
    ["first-trade", "streak-7", "streak-30", "whale-spotter", "yield-farmer", "chain-bridge", "alpha-caller"].includes(b.id)
  ).map((b) => ({ ...b, unlockedAt: "2026-03-10" })),
};

/* ─── XP Activity feed ────────────────────────────────────── */
const XP_FEED = [
  { action: "Daily login streak (12 days)", xp: 60, time: "2m ago", icon: "🔥" },
  { action: "Followed trading signal #ETH-LONG", xp: 25, time: "18m ago", icon: "📡" },
  { action: "Added 2 tokens to watchlist", xp: 10, time: "1h ago", icon: "👁️" },
  { action: "Completed DeFi safety quiz", xp: 100, time: "3h ago", icon: "📚" },
  { action: "Bridged SOL → Arbitrum", xp: 40, time: "5h ago", icon: "🌉" },
  { action: "Staked in Aave v3", xp: 50, time: "8h ago", icon: "🌾" },
  { action: "Referred a friend", xp: 200, time: "1d ago", icon: "🎁" },
];

/* ─── Rarity colors ───────────────────────────────────────── */
const RARITY_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  common: { bg: "#8b949e15", border: "#8b949e40", text: "#8b949e" },
  rare: { bg: "#58a6ff15", border: "#58a6ff40", text: "#58a6ff" },
  epic: { bg: "#bc8cff15", border: "#bc8cff40", text: "#bc8cff" },
  legendary: { bg: "#f0883e15", border: "#f0883e40", text: "#f0883e" },
};

/* ─── Tabs ────────────────────────────────────────────────── */
type TabKey = "overview" | "badges" | "leaderboard" | "quests";

/* ================================================================= */
export default function GamificationSystem() {
  const [user] = useState<UserProgress>(MOCK_USER);
  const [tab, setTab] = useState<TabKey>("overview");
  const [claimedDaily, setClaimedDaily] = useState(false);
  const [animateXP, setAnimateXP] = useState(false);

  const currentLevel = LEVELS.find((l) => l.level === user.level) || LEVELS[0];
  const nextLevel = LEVELS.find((l) => l.level === user.level + 1);
  const xpProgress = nextLevel ? ((user.xp - currentLevel.xpRequired) / (nextLevel.xpRequired - currentLevel.xpRequired)) * 100 : 100;

  const claimDaily = useCallback(() => {
    setClaimedDaily(true);
    setAnimateXP(true);
    setTimeout(() => setAnimateXP(false), 1500);
  }, []);

  useEffect(() => {
    // Animate XP bar on mount
    setAnimateXP(true);
    const t = setTimeout(() => setAnimateXP(false), 1200);
    return () => clearTimeout(t);
  }, []);

  /* ─── Styles ──────────────────────────────────────────────── */
  const s = {
    page: { background: "#0d1117", minHeight: "100vh", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" } as React.CSSProperties,
    container: { maxWidth: 1100, margin: "0 auto", padding: "24px 16px" } as React.CSSProperties,
    header: { marginBottom: 24 } as React.CSSProperties,
    title: { fontSize: 28, fontWeight: 800, background: "linear-gradient(135deg, #f0883e, #bc8cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } as React.CSSProperties,
    subtitle: { fontSize: 14, color: "#8b949e", marginTop: 4 } as React.CSSProperties,
    card: { background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 } as React.CSSProperties,
    grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } as React.CSSProperties,
    grid3: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 } as React.CSSProperties,
    tabBar: { display: "flex", gap: 4, marginBottom: 24, background: "#161b22", borderRadius: 10, padding: 4, border: "1px solid #30363d" } as React.CSSProperties,
    tabBtn: (active: boolean) => ({
      padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
      background: active ? "#6366f1" : "transparent", color: active ? "#fff" : "#8b949e",
      transition: "all 0.2s",
    }) as React.CSSProperties,
    progressBar: { height: 12, background: "#1c2330", borderRadius: 6, overflow: "hidden", position: "relative" as const } as React.CSSProperties,
    progressFill: (pct: number, color: string) => ({
      height: "100%", borderRadius: 6, background: `linear-gradient(90deg, ${color}, ${color}cc)`,
      width: animateXP ? `${pct}%` : "0%", transition: "width 1s ease-out",
    }) as React.CSSProperties,
    badge: (rarity: string) => ({
      background: RARITY_COLORS[rarity]?.bg || "#1c2330",
      border: `1px solid ${RARITY_COLORS[rarity]?.border || "#30363d"}`,
      borderRadius: 10, padding: 16, display: "flex", flexDirection: "column" as const, gap: 8, transition: "transform 0.15s",
    }) as React.CSSProperties,
    streakCircle: { width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #f0883e, #f85149)", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center" } as React.CSSProperties,
    xpFeedItem: { display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid #30363d" } as React.CSSProperties,
    btn: (variant: "primary" | "ghost") => ({
      padding: "8px 16px", borderRadius: 8, border: variant === "ghost" ? "1px solid #30363d" : "none",
      background: variant === "primary" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "transparent",
      color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer",
    }) as React.CSSProperties,
  };

  /* ─── Overview Tab ─────────────────────────────────────────── */
  const renderOverview = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Level + XP Card */}
      <div style={{ ...s.card, display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: "0 0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 48, fontWeight: 900, color: currentLevel.color }}>{user.level}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: currentLevel.color }}>{currentLevel.name}</div>
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 13, color: "#8b949e" }}>Level {user.level} → {nextLevel ? nextLevel.level : "MAX"}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3" }}>{user.xp.toLocaleString()} / {nextLevel ? nextLevel.xpRequired.toLocaleString() : "∞"} XP</span>
          </div>
          <div style={s.progressBar}>
            <div style={s.progressFill(xpProgress, currentLevel.color)} />
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
            {currentLevel.perks.map((p, i) => (
              <span key={i} style={{ fontSize: 11, background: `${currentLevel.color}20`, color: currentLevel.color, padding: "2px 8px", borderRadius: 4 }}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
        {[
          { label: "Total XP", value: user.xp.toLocaleString(), color: "#bc8cff", icon: "⚡" },
          { label: "Total Trades", value: user.totalTrades.toString(), color: "#58a6ff", icon: "📊" },
          { label: "Badges Earned", value: `${user.badges.length}/${ALL_BADGES.length}`, color: "#f0883e", icon: "🏅" },
          { label: "Current Streak", value: `${user.streak.current} days`, color: "#f85149", icon: "🔥" },
          { label: "Streak Multiplier", value: `${user.streak.multiplier}x`, color: "#3fb950", icon: "✨" },
          { label: "Weekly XP", value: user.weeklyXP.reduce((a, b) => a + b, 0).toLocaleString(), color: "#d29922", icon: "📈" },
        ].map((stat) => (
          <div key={stat.label} style={{ ...s.card, padding: 14 }}>
            <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{stat.icon} {stat.label}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: stat.color, marginTop: 4 }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Streak + Daily + XP Feed */}
      <div style={s.grid2}>
        {/* Streak + Daily Claim */}
        <div style={s.card}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={s.streakCircle}>
              <span style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{user.streak.current}</span>
              <span style={{ fontSize: 9, color: "#ffffff99", fontWeight: 600 }}>DAYS</span>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Login Streak</div>
              <div style={{ fontSize: 12, color: "#8b949e" }}>Longest: {user.streak.longest} days</div>
              <div style={{ fontSize: 12, color: "#3fb950", marginTop: 4 }}>+{user.streak.multiplier}x XP multiplier active</div>
            </div>
          </div>
          <button onClick={claimDaily} disabled={claimedDaily} style={{ ...s.btn(claimedDaily ? "ghost" : "primary"), width: "100%", opacity: claimedDaily ? 0.6 : 1 }}>
            {claimedDaily ? "✅ Daily XP Claimed (+60 XP)" : "🎁 Claim Daily XP Bonus"}
          </button>
          {/* Weekly bar chart */}
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 600, marginBottom: 8 }}>WEEKLY XP</div>
            <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 60 }}>
              {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{
                    width: "100%", borderRadius: 3,
                    background: i === 6 ? "linear-gradient(180deg, #6366f1, #8b5cf6)" : "#1c2330",
                    height: `${(user.weeklyXP[i] / Math.max(...user.weeklyXP)) * 50}px`,
                    transition: "height 0.5s ease",
                  }} />
                  <span style={{ fontSize: 9, color: "#8b949e" }}>{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* XP Activity Feed */}
        <div style={s.card}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>⚡ Recent XP Activity</div>
          {XP_FEED.map((item, i) => (
            <div key={i} style={s.xpFeedItem}>
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{item.action}</div>
                <div style={{ fontSize: 11, color: "#8b949e" }}>{item.time}</div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#3fb950" }}>+{item.xp} XP</span>
            </div>
          ))}
        </div>
      </div>

      {/* Level Roadmap */}
      <div style={s.card}>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>🗺️ Level Roadmap</div>
        <div style={{ display: "flex", gap: 4, overflowX: "auto", paddingBottom: 8 }}>
          {LEVELS.map((lvl) => (
            <div key={lvl.level} style={{
              flex: "0 0 120px", padding: 12, borderRadius: 10, textAlign: "center",
              background: lvl.level <= user.level ? `${lvl.color}15` : "#1c2330",
              border: `1px solid ${lvl.level <= user.level ? `${lvl.color}40` : "#30363d"}`,
              opacity: lvl.level <= user.level ? 1 : 0.5,
            }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: lvl.color }}>{lvl.level}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: lvl.color }}>{lvl.name}</div>
              <div style={{ fontSize: 10, color: "#8b949e", marginTop: 4 }}>{lvl.xpRequired.toLocaleString()} XP</div>
              {lvl.level <= user.level && <div style={{ fontSize: 9, color: "#3fb950", marginTop: 4 }}>✓ Unlocked</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* ─── Badges Tab ──────────────────────────────────────────── */
  const renderBadges = () => {
    const unlocked = new Set(user.achievements);
    return (
      <div style={s.grid3}>
        {ALL_BADGES.map((badge) => {
          const earned = unlocked.has(badge.id);
          return (
            <div key={badge.id} style={{
              ...s.badge(badge.rarity),
              opacity: earned ? 1 : 0.4,
              filter: earned ? "none" : "grayscale(0.8)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 32 }}>{badge.icon}</span>
                <span style={{
                  fontSize: 10, fontWeight: 700, textTransform: "uppercase",
                  color: RARITY_COLORS[badge.rarity]?.text || "#8b949e",
                  letterSpacing: "0.06em",
                }}>{badge.rarity}</span>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{badge.name}</div>
                <div style={{ fontSize: 12, color: "#8b949e" }}>{badge.description}</div>
              </div>
              <div style={{ fontSize: 11, color: earned ? "#3fb950" : "#8b949e" }}>
                {earned ? "✅ Unlocked" : `🔒 ${badge.requirement}`}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  /* ─── Leaderboard Tab ─────────────────────────────────────── */
  const LEADERBOARD = [
    { rank: 1, name: "DegenKing.eth", xp: 58200, level: 8, streak: 89, badge: "🏆" },
    { rank: 2, name: "AlphaVault.sol", xp: 45100, level: 7, streak: 67, badge: "🥈" },
    { rank: 3, name: "YieldMaxi", xp: 38800, level: 7, streak: 52, badge: "🥉" },
    { rank: 4, name: "NFT_Whale", xp: 29400, level: 6, streak: 41, badge: "" },
    { rank: 5, name: "CryptoNomad", xp: 22100, level: 6, streak: 33, badge: "" },
    { rank: 6, name: "ChainHopper.eth", xp: 18700, level: 5, streak: 28, badge: "" },
    { rank: 7, name: "You", xp: user.xp, level: user.level, streak: user.streak.current, badge: "⭐" },
    { rank: 8, name: "SolanaMaxi", xp: 5200, level: 4, streak: 15, badge: "" },
    { rank: 9, name: "BullRunBob", xp: 3100, level: 3, streak: 8, badge: "" },
    { rank: 10, name: "NoviceTrader", xp: 850, level: 2, streak: 3, badge: "" },
  ];

  const renderLeaderboard = () => (
    <div style={s.card}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Rank", "Trader", "Level", "XP", "Streak", ""].map((h) => (
              <th key={h} style={{ textAlign: "left", fontSize: 11, color: "#8b949e", fontWeight: 600, textTransform: "uppercase", padding: "8px 12px", borderBottom: "1px solid #30363d" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {LEADERBOARD.map((row) => {
            const lvl = LEVELS.find((l) => l.level === row.level) || LEVELS[0];
            const isYou = row.name === "You";
            return (
              <tr key={row.rank} style={{ background: isYou ? "#6366f110" : "transparent" }}>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #30363d", fontSize: 14, fontWeight: 700 }}>{row.badge || `#${row.rank}`}</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #30363d", fontSize: 13, fontWeight: isYou ? 700 : 500, color: isYou ? "#6366f1" : "#e6edf3" }}>{row.name}</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #30363d" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: lvl.color, background: `${lvl.color}20`, padding: "2px 8px", borderRadius: 4 }}>Lv.{row.level} {lvl.name}</span>
                </td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #30363d", fontSize: 13, fontWeight: 700, fontFamily: "monospace" }}>{row.xp.toLocaleString()}</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #30363d", fontSize: 13 }}>🔥 {row.streak}d</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #30363d" }}>
                  {isYou && <span style={{ fontSize: 11, background: "#6366f120", color: "#818cf8", padding: "2px 8px", borderRadius: 4 }}>You</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  /* ─── Quests Tab ──────────────────────────────────────────── */
  const QUESTS = [
    { title: "Daily: Check-in & claim XP", xp: 60, progress: 100, category: "daily", icon: "📅" },
    { title: "Daily: View 3 trading signals", xp: 30, progress: 66, category: "daily", icon: "📡" },
    { title: "Daily: Add a token to watchlist", xp: 15, progress: 0, category: "daily", icon: "👁️" },
    { title: "Weekly: Execute 5 trades", xp: 200, progress: 60, category: "weekly", icon: "💱" },
    { title: "Weekly: Earn 500 XP", xp: 100, progress: 82, category: "weekly", icon: "⚡" },
    { title: "Weekly: Share a trade on social feed", xp: 75, progress: 0, category: "weekly", icon: "📣" },
    { title: "Milestone: Reach Level 6", xp: 500, progress: 80, category: "milestone", icon: "🎯" },
    { title: "Milestone: Earn 10 badges", xp: 1000, progress: 70, category: "milestone", icon: "🏅" },
  ];

  const renderQuests = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {["daily", "weekly", "milestone"].map((cat) => (
        <div key={cat}>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "#8b949e", letterSpacing: "0.05em", marginBottom: 8, marginTop: 8 }}>
            {cat === "daily" ? "📅 Daily Quests" : cat === "weekly" ? "📆 Weekly Quests" : "🏔️ Milestone Quests"}
          </div>
          {QUESTS.filter((q) => q.category === cat).map((quest, i) => (
            <div key={i} style={{ ...s.card, marginBottom: 8, display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 24 }}>{quest.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{quest.title}</div>
                <div style={{ ...s.progressBar, height: 6, marginTop: 6 }}>
                  <div style={{ height: "100%", borderRadius: 6, width: `${quest.progress}%`, background: quest.progress === 100 ? "#3fb950" : "linear-gradient(90deg, #6366f1, #8b5cf6)", transition: "width 0.5s" }} />
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#3fb950" }}>+{quest.xp} XP</div>
                <div style={{ fontSize: 11, color: "#8b949e" }}>{quest.progress}%</div>
              </div>
              {quest.progress === 100 && (
                <button style={s.btn("primary")}>Claim</button>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  /* ─── Render ─────────────────────────────────────────────── */
  return (
    <div style={s.page}>
      <div style={s.container}>
        <div style={s.header}>
          <h1 style={s.title}>Gamification & Rewards</h1>
          <p style={s.subtitle}>Earn XP, unlock badges, climb the leaderboard, and level up your degen status</p>
        </div>

        <div style={s.tabBar}>
          {([
            ["overview", "🏠 Overview"],
            ["badges", "🏅 Badges"],
            ["leaderboard", "🏆 Leaderboard"],
            ["quests", "⚔️ Quests"],
          ] as [TabKey, string][]).map(([key, label]) => (
            <button key={key} style={s.tabBtn(tab === key)} onClick={() => setTab(key)}>{label}</button>
          ))}
        </div>

        {tab === "overview" && renderOverview()}
        {tab === "badges" && renderBadges()}
        {tab === "leaderboard" && renderLeaderboard()}
        {tab === "quests" && renderQuests()}
      </div>
    </div>
  );
}
