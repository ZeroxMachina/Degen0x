'use client';

import Link from "next/link";
import { useState } from "react";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e",
  yellow: "#d29922", purple: "#bc8cff", cyan: "#06b6d4", indigo: "#6366f1",
};

const BADGES = [
  { id: "degen", emoji: "💎", label: "Diamond Hands", desc: "Held through a 50%+ drawdown", color: S.cyan },
  { id: "streak30", emoji: "🔥", label: "30-Day Streak", desc: "Logged in 30 days in a row", color: S.orange },
  { id: "course", emoji: "🎓", label: "Grad Cap", desc: "Completed first full course", color: S.green },
  { id: "quiz100", emoji: "🧠", label: "Brain", desc: "100 quizzes completed", color: S.purple },
  { id: "eas", emoji: "⛓️", label: "On-Chain XP", desc: "Minted XP attestation on EAS", color: S.blue },
  { id: "referral5", emoji: "🤝", label: "Connector", desc: "Referred 5+ friends", color: S.yellow },
  { id: "ecosystem50", emoji: "🌐", label: "Ecosystem Pro", desc: "Explored 50+ dApps", color: S.indigo },
  { id: "firstswap", emoji: "🦄", label: "First Swap", desc: "Made first DeFi swap", color: S.orange },
];

const COURSES = [
  { title: "Crypto Fundamentals", progress: 100, xp: 500, chain: "Bitcoin & Ethereum basics" },
  { title: "DeFi Mastery", progress: 78, xp: 350, chain: "Uniswap, Aave, Curve" },
  { title: "NFT Deep Dive", progress: 45, xp: 200, chain: "OpenSea, Blur, Manifold" },
  { title: "L2 & Scaling", progress: 20, xp: 80, chain: "Arbitrum, Optimism, Base" },
];

const ACTIVITY = [
  { type: "quiz", text: 'Scored 10/10 on "DeFi Lending" quiz', xp: "+50 XP", time: "2h ago", icon: "🧠" },
  { type: "course", text: 'Completed "Uniswap V4 Hooks" module', xp: "+75 XP", time: "1d ago", icon: "🎓" },
  { type: "streak", text: "Hit 30-day learning streak!", xp: "+200 XP", time: "1d ago", icon: "🔥" },
  { type: "ecosystem", text: "Explored 50 dApps in the Ecosystem Store", xp: "+100 XP", time: "3d ago", icon: "🌐" },
  { type: "eas", text: "Minted XP attestation on-chain via EAS", xp: "+25 XP", time: "5d ago", icon: "⛓️" },
  { type: "quiz", text: 'Scored 9/10 on "Liquid Staking" quiz', xp: "+45 XP", time: "6d ago", icon: "🧠" },
];

const LEVEL_THRESHOLDS = [0, 500, 1500, 3000, 5500, 9000, 14000, 21000, 30000, 42000];

function getLevel(xp: number) {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) return i + 1;
  }
  return 1;
}

function getLevelProgress(xp: number) {
  const level = getLevel(xp);
  const current = LEVEL_THRESHOLDS[level - 1] || 0;
  const next = LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  return Math.round(((xp - current) / (next - current)) * 100);
}

const LEVEL_NAMES: Record<number, string> = {
  1: "Crypto Curious", 2: "Wallet Warrior", 3: "DeFi Explorer",
  4: "Yield Farmer", 5: "Chain Hopper", 6: "Protocol Degen",
  7: "On-Chain Sage", 8: "Blockchain Wizard", 9: "Crypto Mythic", 10: "1B Onboarder",
};

export default function ProfilePage({ params }: { params: { address: string } }) {
  const [activeTab, setActiveTab] = useState<"activity" | "courses" | "badges">("activity");

  const address = params.address;
  const shortAddr = address.length > 10
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : address;

  // Mock stats derived from address (deterministic)
  const seed = address.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const totalXP = 4_820 + (seed % 2000);
  const level = getLevel(totalXP);
  const levelProg = getLevelProgress(totalXP);
  const streak = 30 + (seed % 60);
  const coursesCompleted = 1 + (seed % 3);
  const quizzesTaken = 47 + (seed % 80);
  const dAppsExplored = 50 + (seed % 50);
  const rank = 142 + (seed % 500);

  const earnedBadges = BADGES.slice(0, 5 + (seed % 3));

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Nav */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "14px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Profile</span>
        <span>/</span>
        <span style={{ color: S.text }}>{shortAddr}</span>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* Profile Hero */}
        <div style={{ background: `linear-gradient(135deg, ${S.indigo}15, ${S.cyan}10)`, border: `1px solid ${S.indigo}30`, borderRadius: 20, padding: "32px", marginBottom: 24, display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start" }}>
          {/* Avatar */}
          <div style={{ position: "relative" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${S.indigo}, ${S.cyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `3px solid ${S.indigo}` }}>
              🧛
            </div>
            <div style={{ position: "absolute", bottom: -4, right: -4, background: S.orange, borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff", border: `2px solid ${S.bg}` }}>
              {level}
            </div>
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>{shortAddr}</h1>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 10, background: `${S.indigo}20`, color: S.indigo, border: `1px solid ${S.indigo}40` }}>
                Lv.{level} {LEVEL_NAMES[level] || ""}
              </span>
            </div>
            <div style={{ color: S.text2, fontSize: 13, marginBottom: 16 }}>
              Member since Jan 2026 · {streak}-day streak 🔥 · Rank #{rank} globally
            </div>

            {/* XP Bar */}
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6 }}>
                <span style={{ fontWeight: 700 }}>{totalXP.toLocaleString()} XP</span>
                <span style={{ color: S.text2 }}>Level {level + 1} needs {LEVEL_THRESHOLDS[level]?.toLocaleString() || "∞"} XP</span>
              </div>
              <div style={{ background: S.surface2, borderRadius: 999, height: 8, overflow: "hidden" }}>
                <div style={{ background: `linear-gradient(90deg, ${S.indigo}, ${S.cyan})`, width: `${levelProg}%`, height: "100%", borderRadius: 999, transition: "width 0.5s" }} />
              </div>
              <div style={{ fontSize: 11, color: S.text2, marginTop: 4 }}>{levelProg}% to Level {level + 1}</div>
            </div>

            {/* Share */}
            <button style={{ fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 8, background: `${S.indigo}20`, color: S.indigo, border: `1px solid ${S.indigo}40`, cursor: "pointer" }}>
              🔗 Share Profile
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, minWidth: 200 }}>
            {[
              ["Total XP", totalXP.toLocaleString(), S.indigo],
              ["Streak", `${streak} days`, S.orange],
              ["Courses", `${coursesCompleted} done`, S.green],
              ["Quizzes", quizzesTaken.toString(), S.purple],
              ["dApps", dAppsExplored.toString(), S.cyan],
              ["Rank", `#${rank}`, S.yellow],
            ].map(([label, value, color]) => (
              <div key={String(label)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
                <div style={{ fontSize: 10, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: String(color), marginTop: 2 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges Row */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Badges Earned ({earnedBadges.length}/{BADGES.length})
          </h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {BADGES.map((badge, i) => {
              const earned = i < earnedBadges.length;
              return (
                <div key={badge.id} title={earned ? badge.desc : "Not yet earned"} style={{
                  background: earned ? `${badge.color}15` : S.surface,
                  border: `1px solid ${earned ? badge.color + "40" : S.border}`,
                  borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8,
                  opacity: earned ? 1 : 0.4, cursor: "help"
                }}>
                  <span style={{ fontSize: 20 }}>{badge.emoji}</span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: earned ? badge.color : S.text2 }}>{badge.label}</div>
                    <div style={{ fontSize: 10, color: S.text2 }}>{earned ? "Earned" : "Locked"}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, borderBottom: `1px solid ${S.border}`, marginBottom: 20 }}>
          {(["activity", "courses", "badges"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer",
              background: "none", border: "none", color: activeTab === tab ? S.text : S.text2,
              borderBottom: `2px solid ${activeTab === tab ? S.indigo : "transparent"}`,
              transition: "all 0.2s", textTransform: "capitalize",
            }}>
              {tab === "activity" ? "📋 Activity" : tab === "courses" ? "🎓 Courses" : "🏅 All Badges"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "activity" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {ACTIVITY.map((item, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{item.text}</div>
                  <div style={{ fontSize: 11, color: S.text2, marginTop: 2 }}>{item.time}</div>
                </div>
                <span style={{ fontSize: 12, fontWeight: 800, color: S.green, background: `${S.green}15`, padding: "3px 10px", borderRadius: 8, border: `1px solid ${S.green}30` }}>
                  {item.xp}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "courses" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {COURSES.map((course, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{course.title}</div>
                    <div style={{ fontSize: 12, color: S.text2, marginTop: 2 }}>{course.chain}</div>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 800, color: S.green }}>{course.xp} XP</span>
                </div>
                <div style={{ background: S.surface2, borderRadius: 999, height: 6, overflow: "hidden" }}>
                  <div style={{
                    background: course.progress === 100
                      ? `linear-gradient(90deg, ${S.green}, #86efac)`
                      : `linear-gradient(90deg, ${S.indigo}, ${S.cyan})`,
                    width: `${course.progress}%`, height: "100%", borderRadius: 999
                  }} />
                </div>
                <div style={{ fontSize: 11, color: S.text2, marginTop: 4 }}>{course.progress}% complete</div>
              </div>
            ))}
            <Link href="/courses" style={{ display: "block", textAlign: "center", padding: "14px", background: `${S.indigo}15`, border: `1px solid ${S.indigo}30`, borderRadius: 12, color: S.indigo, fontWeight: 700, fontSize: 14, textDecoration: "none", marginTop: 4 }}>
              Explore All Courses →
            </Link>
          </div>
        )}

        {activeTab === "badges" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {BADGES.map((badge, i) => {
              const earned = i < earnedBadges.length;
              return (
                <div key={badge.id} style={{
                  background: earned ? `${badge.color}12` : S.surface,
                  border: `1px solid ${earned ? badge.color + "40" : S.border}`,
                  borderRadius: 14, padding: "20px", textAlign: "center", opacity: earned ? 1 : 0.5
                }}>
                  <div style={{ fontSize: 40, marginBottom: 10 }}>{badge.emoji}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: earned ? badge.color : S.text, marginBottom: 4 }}>{badge.label}</div>
                  <div style={{ fontSize: 12, color: S.text2, marginBottom: 10 }}>{badge.desc}</div>
                  {earned
                    ? <span style={{ fontSize: 11, fontWeight: 700, color: S.green, background: `${S.green}15`, padding: "2px 8px", borderRadius: 6 }}>✅ Earned</span>
                    : <span style={{ fontSize: 11, fontWeight: 700, color: S.text2, background: S.surface2, padding: "2px 8px", borderRadius: 6 }}>🔒 Locked</span>
                  }
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: 40, background: `linear-gradient(135deg, ${S.indigo}15, ${S.cyan}08)`, border: `1px solid ${S.indigo}30`, borderRadius: 16, padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>Keep earning XP to level up! 🚀</div>
            <div style={{ color: S.text2, fontSize: 13, marginTop: 4 }}>Complete courses, take quizzes, and explore the ecosystem.</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <Link href="/courses" style={{ background: S.indigo, color: "#fff", padding: "10px 20px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Continue Learning</Link>
            <Link href="/leaderboard" style={{ background: S.surface2, color: S.text, padding: "10px 20px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: `1px solid ${S.border}` }}>Leaderboard</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
