"use client";

import { useState } from "react";

interface Props {
  streakDays?: number;
  username?: string;
  xp?: number;
  level?: number;
  onShare?: () => void;
}

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

const MILESTONE_NAMES: { [key: number]: string } = {
  7: "Week Warrior",
  30: "Month Master",
  100: "Century Club",
  365: "Year Legend",
};

const MILESTONE_COLORS: { [key: number]: string } = {
  7: S.orange,
  30: S.yellow,
  100: S.purple,
  365: S.red,
};

export default function StreakShareCard({
  streakDays = 7,
  username = "0x1234...5678",
  xp = 250,
  level = 5,
  onShare,
}: Props) {
  const [sharedBonus, setSharedBonus] = useState(false);

  const getMilestoneName = () => {
    for (const [days, name] of Object.entries(MILESTONE_NAMES)) {
      if (streakDays >= parseInt(days)) {
        return name;
      }
    }
    return null;
  };

  const getMilestoneColor = () => {
    for (const [days, color] of Object.entries(MILESTONE_COLORS)) {
      if (streakDays >= parseInt(days)) {
        return color;
      }
    }
    return S.orange;
  };

  const milestoneName = getMilestoneName();
  const milestoneColor = getMilestoneColor();
  const isMilestone = milestoneName !== null;

  const handleShare = (platform: string) => {
    setSharedBonus(true);
    onShare?.();
    setTimeout(() => setSharedBonus(false), 3000);
  };

  const handleCopy = () => {
    const link = `https://degen0x.dev/streak/${streakDays}/${username}`;
    navigator.clipboard.writeText(link);
    handleShare("link");
  };

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Card Preview */}
      <div
        style={{
          background: `linear-gradient(135deg, ${milestoneColor}20 0%, ${S.surface2} 100%)`,
          border: `1px solid ${S.border}`,
          borderRadius: 16,
          padding: "32px",
          marginBottom: 24,
          aspectRatio: "640 / 336",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          maxWidth: 640,
        }}
      >
        {/* Gradient overlay effect */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at top right, ${milestoneColor}40, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Logo */}
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 20, color: S.text }}>
            degen0x
          </div>

          {/* Flame and streak */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 64 }}>🔥</div>
            <div>
              <div style={{ fontSize: 56, fontWeight: 900, color: milestoneColor, lineHeight: 1 }}>
                {streakDays}
              </div>
              <div style={{ fontSize: 18, color: S.text2, marginTop: 4 }}>Day Streak!</div>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Username and stats */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, color: S.text2, marginBottom: 8 }}>@{username}</div>
            <div style={{ display: "flex", gap: 20, fontSize: 14, color: S.text }}>
              <div>
                <span style={{ color: S.yellow, fontWeight: 700 }}>{xp.toLocaleString()}</span> XP
              </div>
              <div>
                Level <span style={{ color: S.blue, fontWeight: 700 }}>{level}</span>
              </div>
            </div>
          </div>

          {/* Milestone badge */}
          {isMilestone && (
            <div
              style={{
                display: "inline-block",
                background: `${milestoneColor}30`,
                border: `1px solid ${milestoneColor}80`,
                borderRadius: 8,
                padding: "6px 12px",
                fontSize: 12,
                fontWeight: 700,
                color: milestoneColor,
                marginBottom: 12,
              }}
            >
              ⭐ {milestoneName}
            </div>
          )}

          {/* Tagline */}
          <div style={{ fontSize: 12, color: S.text2, fontStyle: "italic" }}>
            Onboarding the next billion to crypto
          </div>
        </div>
      </div>

      {/* Milestone announcement */}
      {isMilestone && (
        <div
          style={{
            background: `${milestoneColor}15`,
            border: `1px solid ${milestoneColor}50`,
            borderRadius: 12,
            padding: "16px",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, color: milestoneColor, marginBottom: 4 }}>
            🎉 Milestone Unlocked!
          </div>
          <div style={{ fontSize: 12, color: S.text }}>
            You've achieved <strong>{milestoneName}</strong> with a {streakDays}-day streak!
          </div>
        </div>
      )}

      {/* Share buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
        <button
          onClick={() => handleShare("x")}
          style={{
            padding: "12px 16px",
            background: "#000000",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 12,
            cursor: "pointer",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          𝕏 Share
        </button>

        <button
          onClick={() => handleShare("farcaster")}
          style={{
            padding: "12px 16px",
            background: S.purple,
            color: "#fff",
            border: "none",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 12,
            cursor: "pointer",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          🟣 Farcaster
        </button>

        <button
          onClick={() => handleShare("lens")}
          style={{
            padding: "12px 16px",
            background: S.green,
            color: "#fff",
            border: "none",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 12,
            cursor: "pointer",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
          onMouseEnter={(e) => (e.currenturrent.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          🌿 Lens
        </button>

        <button
          onClick={handleCopy}
          style={{
            padding: "12px 16px",
            background: S.surface,
            color: S.text,
            border: `1px solid ${S.border}`,
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 12,
            cursor: "pointer",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          📋 Copy
        </button>
      </div>

      {/* Share bonus */}
      {sharedBonus && (
        <div
          style={{
            background: `${S.yellow}20`,
            border: `1px solid ${S.yellow}50`,
            borderRadius: 12,
            padding: "12px 16px",
            textAlign: "center",
            animation: "slideUp 0.4s ease",
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, color: S.yellow }}>
            ⭐ +50 XP bonus earned for sharing!
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
