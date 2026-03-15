import type { Metadata } from "next";
import DailyStreakSystem from "@/components/DailyStreakSystem";

export const metadata: Metadata = {
  title: "Daily Streak — degen0x | Earn XP Every Day",
  description: "Check in daily to maintain your streak and earn XP multipliers. 7-day → 1.0×, 30-day → 1.5×, 100-day → 2.0× XP. Streaks up to 3× for 365-day legends.",
  openGraph: {
    title: "Daily Streak — degen0x",
    description: "Earn XP multipliers by checking in daily. The longer the streak, the bigger the boost.",
  },
};

const S = {
  bg: "#0d1117", surface: "#161b22", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", orange: "#f0883e",
};

export default function StreakPage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, rgba(240,136,62,0.12) 0%, rgba(13,17,23,0) 60%)",
        borderBottom: `1px solid ${S.border}`, padding: "48px 24px 40px",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, marginBottom: 12, lineHeight: 1.15 }}>
            Daily Check-In Streak
          </h1>
          <p style={{ color: S.text2, fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 24px" }}>
            Show up every day and unlock XP multipliers. The longer your streak, the more XP you earn — up to 3× for 365-day legends.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[["🔥", "7 days", "1.0× XP", "#f0883e"], ["🌙", "30 days", "1.5× XP", "#bc8cff"], ["🏆", "100 days", "2.0× XP", "#3fb950"], ["👑", "365 days", "3.0× XP", "#f85149"]].map(([icon, label, mult, color]) => (
              <div key={String(label)} style={{ background: `${color}15`, border: `1px solid ${color}40`, borderRadius: 10, padding: "8px 16px", textAlign: "center" }}>
                <div style={{ fontSize: 18 }}>{icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: String(color) }}>{mult}</div>
                <div style={{ fontSize: 10, color: S.text2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Streak Widget */}
      <div style={{ maxWidth: 740, margin: "40px auto", padding: "0 16px 80px" }}>
        <DailyStreakSystem />
      </div>
    </main>
  );
}
