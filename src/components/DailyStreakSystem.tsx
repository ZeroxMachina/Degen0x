"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ─── TYPES ─────────────────────────────────────────────────────────────────── */
interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastCheckinDate: string | null;
  shieldCount: number;
  xpMultiplier: number;
  totalCheckins: number;
  milestones: number[];
}

interface MilestoneConfig {
  days: number;
  label: string;
  multiplier: number;
  icon: string;
  xpBonus: number;
  color: string;
}

/* ─── CONSTANTS ─────────────────────────────────────────────────────────────── */
const MILESTONES: MilestoneConfig[] = [
  { days: 7,   label: "Week Warrior",   multiplier: 1.0, icon: "🔥",  xpBonus: 500,  color: "#f0883e" },
  { days: 14,  label: "Two-Week Degen", multiplier: 1.25, icon: "⚡", xpBonus: 1000, color: "#d29922" },
  { days: 30,  label: "Monthly Grinder",multiplier: 1.5, icon: "🌙",  xpBonus: 2500, color: "#bc8cff" },
  { days: 60,  label: "Diamond Hands",  multiplier: 1.75, icon: "💎", xpBonus: 5000, color: "#06b6d4" },
  { days: 100, label: "Crypto Legend",  multiplier: 2.0, icon: "🏆",  xpBonus: 10000,color: "#3fb950" },
  { days: 365, label: "Full Degen",     multiplier: 3.0, icon: "👑",  xpBonus: 50000,color: "#f85149" },
];

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330",
  border: "#30363d", text: "#e6edf3", text2: "#8b949e",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e",
  yellow: "#d29922", purple: "#bc8cff", red: "#f85149", cyan: "#06b6d4",
};

/* ─── HELPERS ───────────────────────────────────────────────────────────────── */
function getTodayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function getMultiplierForStreak(days: number): number {
  let mult = 1.0;
  for (const m of MILESTONES) {
    if (days >= m.days) mult = m.multiplier;
  }
  return mult;
}

function getNextMilestone(days: number): MilestoneConfig | null {
  for (const m of MILESTONES) {
    if (days < m.days) return m;
  }
  return null;
}

function loadStreak(): StreakData {
  if (typeof window === "undefined") return defaultStreak();
  try {
    const raw = localStorage.getItem("degen0x_streak");
    if (raw) return JSON.parse(raw);
  } catch {}
  return defaultStreak();
}

function defaultStreak(): StreakData {
  return {
    currentStreak: 0, longestStreak: 0, lastCheckinDate: null,
    shieldCount: 0, xpMultiplier: 1.0, totalCheckins: 0, milestones: [],
  };
}

function saveStreak(data: StreakData) {
  if (typeof window === "undefined") return;
  localStorage.setItem("degen0x_streak", JSON.stringify(data));
}

/* ─── FLAME ANIMATION ───────────────────────────────────────────────────────── */
function FlameBar({ streak }: { streak: number }) {
  const intensity = Math.min(streak / 7, 1);
  const color = streak >= 100 ? "#f85149" : streak >= 30 ? "#bc8cff" : streak >= 7 ? "#d29922" : "#f0883e";
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center", flexWrap: "wrap" }}>
      {Array.from({ length: Math.min(streak, 30) }, (_, i) => (
        <div
          key={i}
          style={{
            width: 8, height: 8 + (i % 3) * 3,
            borderRadius: 3,
            background: color,
            opacity: 0.5 + (i / Math.max(streak, 1)) * 0.5,
            transition: "all 0.3s",
          }}
        />
      ))}
      {streak > 30 && (
        <span style={{ fontSize: 11, color: S.text2, marginLeft: 4 }}>+{streak - 30} more</span>
      )}
    </div>
  );
}

/* ─── CALENDAR WIDGET ───────────────────────────────────────────────────────── */
function MiniCalendar({ streak, lastDate }: { streak: number; lastDate: string | null }) {
  const today = new Date();
  const days: { date: string; active: boolean; today: boolean }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const ds = d.toISOString().split("T")[0];
    const diffFromLast = lastDate
      ? Math.floor((new Date(ds).getTime() - new Date(lastDate).getTime()) / 86400000)
      : 999;
    const active = lastDate !== null && diffFromLast >= -streak + 1 && diffFromLast <= 0;
    days.push({ date: ds, active, today: i === 0 });
  }
  const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {days.map((d, i) => (
        <div key={d.date} style={{ textAlign: "center" }}>
          <div style={{ fontSize: 9, color: S.text2, marginBottom: 4 }}>
            {dayLabels[(new Date(d.date).getDay())]}
          </div>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: d.active ? (d.today ? S.green : `${S.green}60`) : S.surface2,
            border: `1px solid ${d.today ? S.green : S.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, color: d.active ? "#fff" : S.text2,
            fontWeight: d.today ? 700 : 400,
          }}>
            {new Date(d.date).getDate()}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────────── */
export default function DailyStreakSystem({ compact = false }: { compact?: boolean }) {
  const [data, setData] = useState<StreakData>(defaultStreak());
  const [checkedInToday, setCheckedInToday] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showShieldModal, setShowShieldModal] = useState(false);
  const [xpEarned, setXpEarned] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const d = loadStreak();
    setData(d);
    setCheckedInToday(d.lastCheckinDate === getTodayStr());
  }, []);

  const handleCheckin = useCallback(() => {
    if (checkedInToday) return;
    const today = getTodayStr();
    const prev = data.lastCheckinDate;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    let newStreak = data.currentStreak;
    let usedShield = false;

    if (!prev) {
      newStreak = 1;
    } else if (prev === yesterdayStr) {
      newStreak = data.currentStreak + 1;
    } else if (prev !== today) {
      // Missed day — check for shield
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
      const twoDaysStr = twoDaysAgo.toISOString().split("T")[0];
      if (prev === twoDaysStr && data.shieldCount > 0) {
        newStreak = data.currentStreak + 1;
        usedShield = true;
      } else {
        newStreak = 1;
      }
    }

    const newMult = getMultiplierForStreak(newStreak);
    const baseXP = 50;
    const earned = Math.round(baseXP * newMult);

    // Check milestone
    const newMilestones = [...data.milestones];
    for (const m of MILESTONES) {
      if (newStreak >= m.days && !newMilestones.includes(m.days)) {
        newMilestones.push(m.days);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }

    const updated: StreakData = {
      currentStreak: newStreak,
      longestStreak: Math.max(newStreak, data.longestStreak),
      lastCheckinDate: today,
      shieldCount: usedShield ? data.shieldCount - 1 : data.shieldCount,
      xpMultiplier: newMult,
      totalCheckins: data.totalCheckins + 1,
      milestones: newMilestones,
    };

    saveStreak(updated);
    setData(updated);
    setCheckedInToday(true);
    setXpEarned(earned);
    setTimeout(() => setXpEarned(null), 3500);
  }, [checkedInToday, data]);

  const nextMilestone = getNextMilestone(data.currentStreak);
  const progressToNext = nextMilestone
    ? Math.min(data.currentStreak / nextMilestone.days, 1)
    : 1;

  if (!mounted) return null;

  const streakColor =
    data.currentStreak >= 100 ? S.red :
    data.currentStreak >= 30 ? S.purple :
    data.currentStreak >= 7 ? S.yellow : S.orange;

  /* COMPACT MODE */
  if (compact) {
    return (
      <div style={{
        background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12,
        padding: "12px 16px", display: "flex", alignItems: "center", gap: 12,
      }}>
        <div style={{ fontSize: 28 }}>🔥</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: streakColor }}>
            {data.currentStreak} day streak
          </div>
          <div style={{ fontSize: 11, color: S.text2 }}>{data.xpMultiplier}× XP multiplier active</div>
        </div>
        {!checkedInToday && (
          <button
            onClick={handleCheckin}
            style={{
              marginLeft: "auto", padding: "7px 16px", background: S.green,
              color: "#fff", border: "none", borderRadius: 8, fontWeight: 700,
              fontSize: 12, cursor: "pointer",
            }}
          >
            Check In ✓
          </button>
        )}
        {checkedInToday && (
          <div style={{ marginLeft: "auto", fontSize: 11, color: S.green, fontWeight: 700 }}>
            ✅ Done today
          </div>
        )}
      </div>
    );
  }

  /* FULL MODE */
  return (
    <div style={{ position: "relative", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* XP popup */}
      {xpEarned !== null && (
        <div style={{
          position: "fixed", top: 80, right: 24, zIndex: 9999,
          background: S.green, color: "#fff", padding: "12px 20px",
          borderRadius: 12, fontWeight: 800, fontSize: 18,
          boxShadow: `0 8px 32px ${S.green}60`,
          animation: "slideIn 0.4s ease",
        }}>
          +{xpEarned} XP 🎉
        </div>
      )}

      {/* Confetti overlay */}
      {showConfetti && (
        <div style={{
          position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9998,
          background: "radial-gradient(ellipse at center, rgba(63,185,80,0.15) 0%, transparent 70%)",
        }} />
      )}

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 16px" }}>
        {/* Leaderboard link */}
        <div style={{ marginBottom: 16 }}>
          <Link href="/streak/leaderboard" style={{ textDecoration: "none" }}>
            <div style={{
              background: `linear-gradient(135deg, ${S.purple}20, ${S.surface2})`,
              border: `1px solid ${S.purple}40`,
              borderRadius: 12,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = S.purple;
              e.currentTarget.style.background = `linear-gradient(135deg, ${S.purple}30, ${S.surface})`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${S.purple}40`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${S.purple}20, ${S.surface2})`;
            }}
            >
              <div style={{ fontWeight: 700, fontSize: 13, color: S.text }}>🏆 View Leaderboard</div>
              <div style={{ fontSize: 14, color: S.purple }}>→</div>
            </div>
          </Link>
        </div>

        {/* Main streak card */}
        <div style={{
          background: S.surface, border: `1px solid ${S.border}`, borderRadius: 16,
          padding: 24, marginBottom: 16,
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: 40 }}>🔥</span>
                <div>
                  <div style={{ fontSize: 40, fontWeight: 900, color: streakColor, lineHeight: 1 }}>
                    {data.currentStreak}
                  </div>
                  <div style={{ fontSize: 13, color: S.text2 }}>day streak</div>
                </div>
              </div>
              <FlameBar streak={data.currentStreak} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
              <div style={{
                background: `${S.purple}20`, border: `1px solid ${S.purple}40`,
                borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 700, color: S.purple,
              }}>
                {data.xpMultiplier}× XP Multiplier
              </div>
              <div style={{ fontSize: 11, color: S.text2 }}>
                Longest: <strong style={{ color: S.text }}>{data.longestStreak} days</strong> · Total check-ins: <strong style={{ color: S.text }}>{data.totalCheckins}</strong>
              </div>
            </div>
          </div>

          {/* Check-in button */}
          <div style={{ marginTop: 20 }}>
            {!checkedInToday ? (
              <button
                onClick={handleCheckin}
                style={{
                  width: "100%", padding: "14px 24px",
                  background: `linear-gradient(135deg, ${S.green}, #2ea043)`,
                  color: "#fff", border: "none", borderRadius: 12,
                  fontWeight: 800, fontSize: 16, cursor: "pointer",
                  boxShadow: `0 4px 20px ${S.green}40`,
                  transition: "transform 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                ✓ Check In Today — Earn +{Math.round(50 * data.xpMultiplier)} XP
              </button>
            ) : (
              <div style={{
                width: "100%", padding: "14px 24px", background: `${S.green}20`,
                border: `1px solid ${S.green}40`, borderRadius: 12,
                textAlign: "center", color: S.green, fontWeight: 700, fontSize: 14,
              }}>
                ✅ Checked in today! Come back tomorrow to keep your streak.
              </div>
            )}
          </div>
        </div>

        {/* Calendar */}
        <div style={{
          background: S.surface, border: `1px solid ${S.border}`, borderRadius: 16,
          padding: 20, marginBottom: 16,
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 16, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Last 7 Days
          </div>
          <MiniCalendar streak={data.currentStreak} lastDate={data.lastCheckinDate} />
        </div>

        {/* Next milestone progress */}
        {nextMilestone && (
          <div style={{
            background: S.surface, border: `1px solid ${S.border}`, borderRadius: 16,
            padding: 20, marginBottom: 16,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, alignItems: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>
                {nextMilestone.icon} Next: {nextMilestone.label}
              </div>
              <div style={{ fontSize: 12, color: S.text2 }}>
                {data.currentStreak}/{nextMilestone.days} days · {nextMilestone.multiplier}× XP · +{nextMilestone.xpBonus.toLocaleString()} XP bonus
              </div>
            </div>
            <div style={{ background: S.surface2, borderRadius: 6, height: 8, overflow: "hidden" }}>
              <div style={{
                height: "100%", borderRadius: 6,
                width: `${progressToNext * 100}%`,
                background: `linear-gradient(90deg, ${nextMilestone.color}80, ${nextMilestone.color})`,
                transition: "width 0.6s ease",
              }} />
            </div>
            <div style={{ fontSize: 11, color: S.text2, marginTop: 6 }}>
              {nextMilestone.days - data.currentStreak} days to go
            </div>
          </div>
        )}

        {/* All milestones */}
        <div style={{
          background: S.surface, border: `1px solid ${S.border}`, borderRadius: 16,
          padding: 20, marginBottom: 16,
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 16, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Streak Milestones
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
            {MILESTONES.map((m) => {
              const achieved = data.currentStreak >= m.days;
              const unlocked = data.milestones.includes(m.days);
              return (
                <div
                  key={m.days}
                  style={{
                    background: achieved ? `${m.color}15` : S.surface2,
                    border: `1px solid ${achieved ? m.color + "50" : S.border}`,
                    borderRadius: 10, padding: "12px 14px",
                    opacity: achieved ? 1 : 0.6,
                  }}
                >
                  <div style={{ fontSize: 22, marginBottom: 4 }}>{m.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: achieved ? m.color : S.text2 }}>{m.label}</div>
                  <div style={{ fontSize: 11, color: S.text2, marginTop: 2 }}>
                    {m.days} days · {m.multiplier}× XP
                  </div>
                  <div style={{ fontSize: 11, color: S.yellow, marginTop: 2 }}>
                    +{m.xpBonus.toLocaleString()} XP bonus
                  </div>
                  {unlocked && (
                    <div style={{ fontSize: 10, color: S.green, marginTop: 4, fontWeight: 700 }}>✅ ACHIEVED</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Shield */}
        <div style={{
          background: S.surface, border: `1px solid ${S.border}`, borderRadius: 16,
          padding: 20,
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>🛡️ Streak Shields</div>
              <div style={{ fontSize: 12, color: S.text2, marginTop: 4 }}>
                Use a shield to protect your streak when you miss a day. Earn shields by completing quizzes.
              </div>
            </div>
            <div style={{
              background: `${S.blue}20`, border: `1px solid ${S.blue}40`,
              borderRadius: 10, padding: "8px 16px", textAlign: "center",
            }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: S.blue }}>{data.shieldCount}</div>
              <div style={{ fontSize: 10, color: S.text2 }}>shields</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
