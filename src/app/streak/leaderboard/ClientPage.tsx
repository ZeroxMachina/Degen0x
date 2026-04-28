"use client";

import { useState } from "react";
import Link from "next/link";

const S = {
  bg: "#0d1117",
  surface: "#161b22",
  surface2: "#1c2330",
  border: "#30363d",
  text: "#e6edf3",
  text2: "#8b949e",
  blue: "#58a6ff",
  green: "#3fb950",
  orange: "#f0883e",
  yellow: "#d29922",
  purple: "#bc8cff",
  red: "#f85149",
  indigo: "#6366f1",
  cyan: "#06b6d4",
};

interface LeaderboardEntry {
  rank: number;
  address: string;
  streakDays: number;
  xp: number;
  level: number;
  joinDate: string;
}

// Mock leaderboard data
const generateMockData = (): LeaderboardEntry[] => {
  const addresses = [
    "0xdead...beef",
    "0x1337...face",
    "0xc0de...babe",
    "0xdefi...king",
    "0xnft...lord",
    "0xdao...gov",
    "0xsafe...guard",
    "0xflash...loan",
    "0xweb3...native",
    "0xbased...af",
    "0xrekt...fomo",
    "0xgm...gn",
    "0xpump...it",
    "0xholdr...hodl",
    "0xretro...active",
    "0xsigma...male",
    "0xyield...farm",
    "0xliquidity...pool",
    "0xbridge...chain",
    "0xoracle...feed",
    "0xmeme...coin",
    "0xwhale...money",
    "0xsmall...cap",
    "0xdev...ship",
    "0xcrypto...native",
  ];

  return addresses.map((address, i) => ({
    rank: i + 1,
    address,
    streakDays: Math.max(1, 365 - i * 12 + Math.random() * 30),
    xp: Math.round(100000 - i * 3000 + Math.random() * 5000),
    level: Math.max(1, 50 - Math.floor(i / 2)),
    joinDate: new Date(
      Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
    ).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  }));
};

const mockData = generateMockData();

const getRankMedal = (rank: number): string => {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  if (rank <= 10) return "⭐";
  return `#${rank}`;
};

const getColorForRank = (rank: number): string => {
  if (rank === 1) return S.yellow;
  if (rank === 2) return S.cyan;
  if (rank === 3) return S.orange;
  if (rank <= 10) return S.blue;
  return S.text2;
};

const getAvatarColor = (address: string): string => {
  const colors = [S.blue, S.green, S.orange, S.purple, S.red, S.cyan, S.yellow, S.indigo];
  const hash = address.charCodeAt(0) + address.charCodeAt(1);
  return colors[hash % colors.length];
};

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState<"allTime" | "week" | "month">("allTime");

  const currentUserRank = 847;
  const totalUsers = 12430;
  const currentUserStreakDays = 21;
  const nextRankStreakDays = 28;
  const daysNeeded = nextRankStreakDays - currentUserStreakDays;

  const topThree = mockData.slice(0, 3);
  const restOfLeaderboard = mockData.slice(3, 25);

  return (
    <div style={{ background: S.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32, fontSize: 13, color: S.text2 }}>
          <Link href="/" style={{ color: S.blue, textDecoration: "none" }}>
            Home
          </Link>
          <span>/</span>
          <Link href="/streak" style={{ color: S.blue, textDecoration: "none" }}>
            Streak
          </Link>
          <span>/</span>
          <span>Leaderboard</span>
        </div>

        {/* Title */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 40, fontWeight: 900, color: S.text, margin: 0, marginBottom: 8 }}>
            🏆 Streak Leaderboard
          </h1>
          <p style={{ fontSize: 16, color: S.text2, margin: 0 }}>Who's been learning the longest?</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, borderBottom: `1px solid ${S.border}`, paddingBottom: 16 }}>
          {[
            { id: "allTime", label: "All Time" },
            { id: "week", label: "This Week" },
            { id: "month", label: "This Month" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "allTime" | "week" | "month")}
              style={{
                padding: "8px 16px",
                background: activeTab === tab.id ? S.surface : "transparent",
                border: activeTab === tab.id ? `1px solid ${S.border}` : "none",
                borderRadius: 8,
                color: activeTab === tab.id ? S.text : S.text2,
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = S.surface2)}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) e.currentTarget.style.background = "transparent";
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Podium Section */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 20, height: 280 }}>
            {/* 2nd place */}
            <div style={{ textAlign: "center", flex: 1 }}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${S.cyan}20, ${S.surface2})`,
                  border: `2px solid ${S.cyan}`,
                  borderRadius: 12,
                  padding: "20px",
                  height: 200,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 32 }}>🥈</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: S.cyan, marginTop: 8 }}>
                    {topThree[1].address}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 900, color: S.cyan }}>
                    {Math.round(topThree[1].streakDays)}
                  </div>
                  <div style={{ fontSize: 12, color: S.text2 }}>days 🔥</div>
                </div>
              </div>
            </div>

            {/* 1st place */}
            <div style={{ textAlign: "center", flex: 1, transform: "translateY(-40px)" }}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${S.yellow}30, ${S.surface2})`,
                  border: `3px solid ${S.yellow}`,
                  borderRadius: 12,
                  padding: "24px",
                  height: 240,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 48 }}>🥇</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: S.yellow, marginTop: 8 }}>
                    {topThree[0].address}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 900, color: S.yellow }}>
                    {Math.round(topThree[0].streakDays)}
                  </div>
                  <div style={{ fontSize: 13, color: S.text2 }}>days 🔥</div>
                </div>
              </div>
            </div>

            {/* 3rd place */}
            <div style={{ textAlign: "center", flex: 1 }}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${S.orange}20, ${S.surface2})`,
                  border: `2px solid ${S.orange}`,
                  borderRadius: 12,
                  padding: "20px",
                  height: 200,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 32 }}>🥉</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: S.orange, marginTop: 8 }}>
                    {topThree[2].address}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 900, color: S.orange }}>
                    {Math.round(topThree[2].streakDays)}
                  </div>
                  <div style={{ fontSize: 12, color: S.text2 }}>days 🔥</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div
          style={{
            background: S.surface,
            border: `1px solid ${S.border}`,
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 24,
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr 120px 100px 80px 100px",
              gap: 16,
              padding: "16px 20px",
              background: S.surface2,
              borderBottom: `1px solid ${S.border}`,
              fontSize: 12,
              fontWeight: 700,
              color: S.text2,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <div>Rank</div>
            <div>User</div>
            <div>Streak</div>
            <div>XP</div>
            <div>Level</div>
            <div>Joined</div>
          </div>

          {/* Table rows */}
          {restOfLeaderboard.map((entry, idx) => (
            <div
              key={entry.rank}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 120px 100px 80px 100px",
                gap: 16,
                padding: "14px 20px",
                borderBottom: idx < restOfLeaderboard.length - 1 ? `1px solid ${S.border}` : "none",
                alignItems: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = S.surface2)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {/* Rank */}
              <div style={{ fontWeight: 700, color: getColorForRank(entry.rank), fontSize: 14 }}>
                {getRankMedal(entry.rank)}
              </div>

              {/* Avatar + Address */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: getAvatarColor(entry.address),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: 14,
                  }}
                >
                  {entry.address.charAt(2)}
                </div>
                <span style={{ fontSize: 14, color: S.text, fontWeight: 500 }}>{entry.address}</span>
              </div>

              {/* Streak */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700 }}>
                <span>{Math.round(entry.streakDays)}</span>
                <span style={{ fontSize: 16 }}>🔥</span>
              </div>

              {/* XP */}
              <div style={{ fontSize: 14, color: S.yellow, fontWeight: 700 }}>{entry.xp.toLocaleString()}</div>

              {/* Level */}
              <div
                style={{
                  background: `${S.blue}20`,
                  border: `1px solid ${S.blue}40`,
                  borderRadius: 6,
                  padding: "4px 10px",
                  fontSize: 12,
                  fontWeight: 700,
                  color: S.blue,
                  textAlign: "center",
                }}
              >
                Level {entry.level}
              </div>

              {/* Join date */}
              <div style={{ fontSize: 12, color: S.text2 }}>{entry.joinDate}</div>
            </div>
          ))}
        </div>

        {/* Your Rank sticky card */}
        <div
          style={{
            position: "sticky",
            bottom: 24,
            background: `linear-gradient(135deg, ${S.purple}20, ${S.surface})`,
            border: `2px solid ${S.purple}`,
            borderRadius: 16,
            padding: "20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
          }}
        >
          <div>
            <div style={{ fontSize: 12, color: S.text2, marginBottom: 6, fontWeight: 700, textTransform: "uppercase" }}>
              Your Rank
            </div>
            <div style={{ fontSize: 32, fontWeight: 900, color: S.purple }}>
              #{currentUserRank}
            </div>
            <div style={{ fontSize: 12, color: S.text2, marginTop: 4 }}>
              of {totalUsers.toLocaleString()} users
            </div>
          </div>

          <div>
            <div style={{ fontSize: 12, color: S.text2, marginBottom: 6, fontWeight: 700, textTransform: "uppercase" }}>
              Current Streak
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: S.orange }}>
              {currentUserStreakDays}
            </div>
            <div style={{ fontSize: 12, color: S.text2, marginTop: 4 }}>days 🔥</div>
          </div>

          <div
            style={{
              background: `${S.green}15`,
              border: `1px solid ${S.green}50`,
              borderRadius: 12,
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 12, color: S.text2, marginBottom: 6, fontWeight: 700, textTransform: "uppercase" }}>
              Beat Next Rank
            </div>
            <div style={{ fontSize: 18, fontWeight: 900, color: S.green }}>
              +{daysNeeded} more days
            </div>
            <div style={{ fontSize: 10, color: S.text2, marginTop: 4 }}>
              Reach {nextRankStreakDays} days to overtake rank #846
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
