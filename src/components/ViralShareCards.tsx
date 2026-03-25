"use client";

import { useState, useRef, useCallback } from "react";

/**
 * ViralShareCards — Sprint 49
 * Shareable achievement/course cards for Twitter & Telegram.
 * Canvas-based card generation → PNG download / native share.
 * Cards: XP Level Card, Course Certificate, Badge Showcase, Daily Streak.
 */

type CardType = "xp-level" | "certificate" | "badge-showcase" | "streak";

interface XPCard {
  type: "xp-level";
  username: string;
  level: number;
  levelName: string;
  xp: number;
  xpToNext: number;
  rank: number;
  badges: string[];
  joinDate: string;
}

interface CertCard {
  type: "certificate";
  username: string;
  courseName: string;
  category: string;
  completedDate: string;
  score: number;
  xpEarned: number;
  timeSpent: string;
}

interface BadgeCard {
  type: "badge-showcase";
  username: string;
  badges: { emoji: string; name: string; rarity: "common" | "rare" | "epic" | "legendary" }[];
  totalXP: number;
  level: number;
}

interface StreakCard {
  type: "streak";
  username: string;
  streak: number;
  longestStreak: number;
  totalDays: number;
  xpFromStreak: number;
  currentLevel: string;
}

type ShareCard = XPCard | CertCard | BadgeCard | StreakCard;

const RARITY_COLORS = {
  common:    { bg: "#374151", text: "#9ca3af", border: "#4b5563" },
  rare:      { bg: "#1e3a5f", text: "#60a5fa", border: "#3b82f6" },
  epic:      { bg: "#2d1b69", text: "#c084fc", border: "#9333ea" },
  legendary: { bg: "#78350f", text: "#fbbf24", border: "#f59e0b" },
};

const LEVEL_NAMES: Record<number, string> = {
  1: "Normie",
  2: "Curious Chad",
  3: "Paper Hands",
  4: "Diamond Hands",
  5: "DeFi Explorer",
  6: "Chain Wizard",
  7: "On-Chain God",
  8: "Crypto Legend",
};

// Mock data representing logged-in user
const DEMO_DATA = {
  xpLevel: {
    type: "xp-level" as const,
    username: "0xDegenJefe",
    level: 5,
    levelName: "DeFi Explorer",
    xp: 12450,
    xpToNext: 15000,
    rank: 247,
    badges: ["🔥", "💎", "🎓", "⚡", "🦁"],
    joinDate: "Sep 2025",
  },
  certificate: {
    type: "certificate" as const,
    username: "0xDegenJefe",
    courseName: "DeFi Fundamentals",
    category: "Decentralized Finance",
    completedDate: "Mar 14, 2026",
    score: 94,
    xpEarned: 1500,
    timeSpent: "3h 20m",
  },
  badges: {
    type: "badge-showcase" as const,
    username: "0xDegenJefe",
    badges: [
      { emoji: "🔥", name: "Early Adopter",    rarity: "legendary" as const },
      { emoji: "💎", name: "Diamond Hands",    rarity: "epic" as const },
      { emoji: "🎓", name: "DeFi Graduate",    rarity: "rare" as const },
      { emoji: "⚡", name: "Speed Learner",    rarity: "rare" as const },
      { emoji: "🦁", name: "Brave Explorer",   rarity: "common" as const },
      { emoji: "🌊", name: "DeFi Surfer",      rarity: "common" as const },
    ],
    totalXP: 12450,
    level: 5,
  },
  streak: {
    type: "streak" as const,
    username: "0xDegenJefe",
    streak: 42,
    longestStreak: 67,
    totalDays: 148,
    xpFromStreak: 8400,
    currentLevel: "DeFi Explorer",
  },
};

// ─── SVG Card Renderers ───────────────────────────────────────────────────────

function XPLevelCardSVG({ data }: { data: XPCard }) {
  const pct = Math.min((data.xp / data.xpToNext) * 100, 100);
  const barW = 340;
  const fillW = (pct / 100) * barW;
  return (
    <svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-2xl">
      <defs>
        <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d1117"/>
          <stop offset="100%" stopColor="#161b22"/>
        </linearGradient>
        <linearGradient id="xpBar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1"/>
          <stop offset="100%" stopColor="#06b6d4"/>
        </linearGradient>
        <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f130"/>
          <stop offset="100%" stopColor="#06b6d410"/>
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#6366f1" floodOpacity="0.3"/>
        </filter>
      </defs>

      {/* Background */}
      <rect width="440" height="260" rx="20" fill="url(#bg1)"/>
      <rect width="440" height="260" rx="20" fill="url(#glow)"/>
      <rect x="1" y="1" width="438" height="258" rx="19" fill="none" stroke="#30363d" strokeWidth="1.5"/>

      {/* Level badge */}
      <rect x="20" y="20" width="56" height="56" rx="14" fill="#6366f120" stroke="#6366f140" strokeWidth="1.5" filter="url(#shadow)"/>
      <text x="48" y="57" textAnchor="middle" fontSize="28">⚡</text>
      <rect x="20" y="82" width="56" height="18" rx="5" fill="#6366f1"/>
      <text x="48" y="94" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">LVL {data.level}</text>

      {/* Username & level name */}
      <text x="90" y="42" fontSize="18" fontWeight="bold" fill="white" fontFamily="-apple-system, sans-serif">{data.username}</text>
      <text x="90" y="62" fontSize="12" fill="#8b949e" fontFamily="-apple-system, sans-serif">{data.levelName} · #{data.rank} on leaderboard</text>

      {/* degen0x brand */}
      <text x="420" y="25" textAnchor="end" fontSize="13" fontWeight="900" fill="url(#xpBar)" fontFamily="-apple-system, sans-serif">degen0x</text>

      {/* XP Bar */}
      <text x="20" y="126" fontSize="11" fill="#8b949e" fontFamily="-apple-system, sans-serif">XP Progress</text>
      <text x="420" y="126" textAnchor="end" fontSize="11" fill="#8b949e" fontFamily="-apple-system, sans-serif">{data.xp.toLocaleString()} / {data.xpToNext.toLocaleString()}</text>
      <rect x="20" y="132" width={barW} height="10" rx="5" fill="#21262d"/>
      <rect x="20" y="132" width={fillW} height="10" rx="5" fill="url(#xpBar)"/>

      {/* Stats */}
      {[
        { label: "Total XP", value: data.xp.toLocaleString(), x: 50 },
        { label: "Level", value: String(data.level), x: 170 },
        { label: "Rank", value: `#${data.rank}`, x: 290 },
      ].map((s) => (
        <g key={s.label}>
          <rect x={s.x - 35} y="158" width="90" height="52" rx="10" fill="#161b22" stroke="#30363d" strokeWidth="1"/>
          <text x={s.x} y="180" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white" fontFamily="-apple-system, sans-serif">{s.value}</text>
          <text x={s.x} y="198" textAnchor="middle" fontSize="10" fill="#8b949e" fontFamily="-apple-system, sans-serif">{s.label}</text>
        </g>
      ))}

      {/* Badges */}
      <text x="20" y="232" fontSize="10" fill="#8b949e" fontFamily="-apple-system, sans-serif">Badges earned</text>
      {data.badges.slice(0, 8).map((b, i) => (
        <text key={i} x={140 + i * 36} y="234" fontSize="22" textAnchor="middle">{b}</text>
      ))}

      {/* Bottom tagline */}
      <text x="220" y="255" textAnchor="middle" fontSize="9" fill="#30363d" fontFamily="-apple-system, sans-serif">
        Onboarding the next 1 billion users to crypto · degen0x.com
      </text>
    </svg>
  );
}

function CertificateCardSVG({ data }: { data: CertCard }) {
  return (
    <svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-2xl">
      <defs>
        <linearGradient id="certBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d1117"/>
          <stop offset="100%" stopColor="#1a1f2e"/>
        </linearGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fbbf24"/>
          <stop offset="100%" stopColor="#f59e0b"/>
        </linearGradient>
        <linearGradient id="certGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf2415"/>
          <stop offset="100%" stopColor="#f59e0b08"/>
        </linearGradient>
      </defs>

      <rect width="440" height="260" rx="20" fill="url(#certBg)"/>
      <rect width="440" height="260" rx="20" fill="url(#certGlow)"/>
      {/* Gold border accent */}
      <rect x="1" y="1" width="438" height="258" rx="19" fill="none" stroke="#f59e0b40" strokeWidth="1.5"/>
      {/* Decorative corner lines */}
      <line x1="20" y1="20" x2="60" y2="20" stroke="#f59e0b60" strokeWidth="1.5"/>
      <line x1="20" y1="20" x2="20" y2="60" stroke="#f59e0b60" strokeWidth="1.5"/>
      <line x1="420" y1="20" x2="380" y2="20" stroke="#f59e0b60" strokeWidth="1.5"/>
      <line x1="420" y1="20" x2="420" y2="60" stroke="#f59e0b60" strokeWidth="1.5"/>
      <line x1="20" y1="240" x2="60" y2="240" stroke="#f59e0b60" strokeWidth="1.5"/>
      <line x1="20" y1="240" x2="20" y2="200" stroke="#f59e0b60" strokeWidth="1.5"/>
      <line x1="420" y1="240" x2="380" y2="240" stroke="#f59e0b60" strokeWidth="1.5"/>
      <line x1="420" y1="240" x2="420" y2="200" stroke="#f59e0b60" strokeWidth="1.5"/>

      {/* Certificate icon */}
      <text x="220" y="64" textAnchor="middle" fontSize="36">🎓</text>

      {/* Header text */}
      <text x="220" y="90" textAnchor="middle" fontSize="11" fill="#8b949e" fontFamily="-apple-system, sans-serif" letterSpacing="3">CERTIFICATE OF COMPLETION</text>

      {/* Course name */}
      <text x="220" y="120" textAnchor="middle" fontSize="20" fontWeight="bold" fill="url(#gold)" fontFamily="-apple-system, sans-serif">{data.courseName}</text>
      <text x="220" y="140" textAnchor="middle" fontSize="11" fill="#8b949e" fontFamily="-apple-system, sans-serif">{data.category}</text>

      {/* Awarded to */}
      <text x="220" y="164" textAnchor="middle" fontSize="10" fill="#8b949e" fontFamily="-apple-system, sans-serif">Awarded to</text>
      <text x="220" y="184" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white" fontFamily="-apple-system, sans-serif">{data.username}</text>

      {/* Stats row */}
      {[
        { label: "Score",    value: `${data.score}%`,       x: 100 },
        { label: "XP",      value: `+${data.xpEarned}`,    x: 220 },
        { label: "Time",    value: data.timeSpent,          x: 340 },
      ].map((s) => (
        <g key={s.label}>
          <text x={s.x} y="210" textAnchor="middle" fontSize="14" fontWeight="bold" fill="url(#gold)" fontFamily="-apple-system, sans-serif">{s.value}</text>
          <text x={s.x} y="224" textAnchor="middle" fontSize="9" fill="#8b949e" fontFamily="-apple-system, sans-serif">{s.label}</text>
        </g>
      ))}

      {/* Footer */}
      <text x="220" y="250" textAnchor="middle" fontSize="9" fill="#30363d" fontFamily="-apple-system, sans-serif">
        degen0x.com · {data.completedDate} · Onboarding the next 1B users to crypto
      </text>
    </svg>
  );
}

function StreakCardSVG({ data }: { data: StreakCard }) {
  return (
    <svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-2xl">
      <defs>
        <linearGradient id="streakBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d1117"/>
          <stop offset="100%" stopColor="#1a1107"/>
        </linearGradient>
        <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316"/>
          <stop offset="100%" stopColor="#ef4444"/>
        </linearGradient>
        <linearGradient id="fireGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f9731620"/>
          <stop offset="100%" stopColor="#ef444410"/>
        </linearGradient>
      </defs>

      <rect width="440" height="260" rx="20" fill="url(#streakBg)"/>
      <rect width="440" height="260" rx="20" fill="url(#fireGlow)"/>
      <rect x="1" y="1" width="438" height="258" rx="19" fill="none" stroke="#f9731640" strokeWidth="1.5"/>

      {/* Big fire emoji */}
      <text x="220" y="80" textAnchor="middle" fontSize="48">🔥</text>

      {/* Streak number */}
      <text x="220" y="130" textAnchor="middle" fontSize="48" fontWeight="900" fill="url(#fireGrad)" fontFamily="-apple-system, sans-serif">{data.streak}</text>
      <text x="220" y="152" textAnchor="middle" fontSize="13" fill="#8b949e" fontFamily="-apple-system, sans-serif">Day Streak</text>

      {/* Username */}
      <text x="220" y="175" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" fontFamily="-apple-system, sans-serif">{data.username}</text>
      <text x="220" y="191" textAnchor="middle" fontSize="11" fill="#8b949e" fontFamily="-apple-system, sans-serif">{data.currentLevel}</text>

      {/* Stats */}
      {[
        { label: "Best Streak", value: `${data.longestStreak}d`, x: 100 },
        { label: "Total Days",  value: `${data.totalDays}d`,    x: 220 },
        { label: "Streak XP",  value: data.xpFromStreak.toLocaleString(), x: 340 },
      ].map((s) => (
        <g key={s.label}>
          <text x={s.x} y="218" textAnchor="middle" fontSize="14" fontWeight="bold" fill="url(#fireGrad)" fontFamily="-apple-system, sans-serif">{s.value}</text>
          <text x={s.x} y="232" textAnchor="middle" fontSize="9" fill="#8b949e" fontFamily="-apple-system, sans-serif">{s.label}</text>
        </g>
      ))}

      {/* Brand */}
      <text x="420" y="25" textAnchor="end" fontSize="13" fontWeight="900" fill="url(#fireGrad)" fontFamily="-apple-system, sans-serif">degen0x</text>
      <text x="220" y="255" textAnchor="middle" fontSize="9" fill="#30363d" fontFamily="-apple-system, sans-serif">
        Onboarding the next 1 billion users to crypto · degen0x.com
      </text>
    </svg>
  );
}

function BadgeShowcaseCardSVG({ data }: { data: BadgeCard }) {
  return (
    <svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-2xl">
      <defs>
        <linearGradient id="badgeBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d1117"/>
          <stop offset="100%" stopColor="#130d1a"/>
        </linearGradient>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7"/>
          <stop offset="100%" stopColor="#6366f1"/>
        </linearGradient>
        <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f720"/>
          <stop offset="100%" stopColor="#6366f110"/>
        </linearGradient>
      </defs>

      <rect width="440" height="260" rx="20" fill="url(#badgeBg)"/>
      <rect width="440" height="260" rx="20" fill="url(#purpleGlow)"/>
      <rect x="1" y="1" width="438" height="258" rx="19" fill="none" stroke="#a855f740" strokeWidth="1.5"/>

      <text x="220" y="36" textAnchor="middle" fontSize="13" fontWeight="900" fill="url(#purpleGrad)" fontFamily="-apple-system, sans-serif">degen0x</text>
      <text x="220" y="54" textAnchor="middle" fontSize="10" fill="#8b949e" letterSpacing="2" fontFamily="-apple-system, sans-serif">BADGE SHOWCASE</text>

      {/* Username */}
      <text x="220" y="76" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white" fontFamily="-apple-system, sans-serif">{data.username}</text>
      <text x="220" y="93" textAnchor="middle" fontSize="11" fill="#8b949e" fontFamily="-apple-system, sans-serif">Level {data.level} · {data.totalXP.toLocaleString()} XP</text>

      {/* Badges grid */}
      {data.badges.slice(0, 6).map((b, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const cx = 80 + col * 120;
        const cy = 130 + row * 80;
        const rc = RARITY_COLORS[b.rarity];
        return (
          <g key={i}>
            <rect x={cx - 36} y={cy - 36} width="72" height="72" rx="14" fill={rc.bg} stroke={rc.border} strokeWidth="1.5"/>
            <text x={cx} y={cy + 12} textAnchor="middle" fontSize="30">{b.emoji}</text>
            <text x={cx} y={cy + 48} textAnchor="middle" fontSize="9" fill={rc.text} fontFamily="-apple-system, sans-serif">{b.name}</text>
          </g>
        );
      })}

      <text x="220" y="255" textAnchor="middle" fontSize="9" fill="#30363d" fontFamily="-apple-system, sans-serif">
        Onboarding the next 1 billion users to crypto · degen0x.com
      </text>
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ViralShareCards() {
  const [activeCard, setActiveCard] = useState<CardType>("xp-level");
  const [shareStatus, setShareStatus] = useState<string | null>(null);

  const shareToTwitter = useCallback((text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://twitter.com/intent/tweet?text=${encoded}`, "_blank");
  }, []);

  const shareToTelegram = useCallback((text: string, url: string) => {
    const t = encodeURIComponent(text);
    const u = encodeURIComponent(url);
    window.open(`https://t.me/share/url?url=${u}&text=${t}`, "_blank");
  }, []);

  const handleShare = useCallback((platform: "twitter" | "telegram") => {
    const url = "https://degen0x.com";
    const shareTexts: Record<CardType, string> = {
      "xp-level":       `⚡ Level ${DEMO_DATA.xpLevel.level} on degen0x! ${DEMO_DATA.xpLevel.xp.toLocaleString()} XP earned and counting. Learn crypto the fun way 👇`,
      "certificate":    `🎓 Just completed "${DEMO_DATA.certificate.courseName}" on degen0x with a ${DEMO_DATA.certificate.score}% score! +${DEMO_DATA.certificate.xpEarned} XP 🔥`,
      "badge-showcase": `💎 Check out my badge collection on degen0x! ${DEMO_DATA.badges.badges.length} badges earned. Onboarding to Web3 one badge at a time 🚀`,
      "streak":         `🔥 ${DEMO_DATA.streak.streak} day learning streak on degen0x! Consistent gains in the crypto game 📈`,
    };
    const text = `${shareTexts[activeCard]}\n\n${url}`;
    if (platform === "twitter") shareToTwitter(text);
    else shareToTelegram(shareTexts[activeCard], url);
    setShareStatus(platform);
    setTimeout(() => setShareStatus(null), 2000);
  }, [activeCard, shareToTwitter, shareToTelegram]);

  const CARD_TABS: { id: CardType; label: string; emoji: string }[] = [
    { id: "xp-level",       label: "XP Level",    emoji: "⚡" },
    { id: "certificate",    label: "Certificate", emoji: "🎓" },
    { id: "badge-showcase", label: "Badges",      emoji: "💎" },
    { id: "streak",         label: "Streak",      emoji: "🔥" },
  ];

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-[var(--color-border)]"
        style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(99,102,241,0.05))" }}>
        <h2 className="text-xl font-bold text-[var(--color-text)]">📤 Share Your Achievements</h2>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
          Flex your Web3 journey on Twitter & Telegram. Cards auto-generated from your profile.
        </p>
      </div>

      {/* Card Type Selector */}
      <div className="flex gap-2 p-4 border-b border-[var(--color-border)] flex-wrap">
        {CARD_TABS.map((tab) => (
          <button key={tab.id} onClick={() => setActiveCard(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCard === tab.id
                ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)] border border-transparent"
            }`}>
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* Card Preview */}
      <div className="p-6">
        <div className="max-w-md mx-auto mb-6 shadow-2xl rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(99,102,241,0.2)" }}>
          {activeCard === "xp-level"       && <XPLevelCardSVG data={DEMO_DATA.xpLevel} />}
          {activeCard === "certificate"    && <CertificateCardSVG data={DEMO_DATA.certificate} />}
          {activeCard === "badge-showcase" && <BadgeShowcaseCardSVG data={DEMO_DATA.badges} />}
          {activeCard === "streak"         && <StreakCardSVG data={DEMO_DATA.streak} />}
        </div>

        {/* Share Actions */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <button onClick={() => handleShare("twitter")}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #1a1a1a, #000)", border: "1px solid #333" }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-white">{shareStatus === "twitter" ? "Opened! ✓" : "Share on X"}</span>
          </button>

          <button onClick={() => handleShare("telegram")}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #2AABEE, #1a9ed4)", border: "1px solid #2AABEE40" }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            {shareStatus === "telegram" ? "Opened! ✓" : "Share on Telegram"}
          </button>
        </div>

        {/* Screenshot hint */}
        <p className="text-center text-xs text-[var(--color-text-secondary)] mt-4">
          💡 Screenshot the card above to paste directly into Discord, WhatsApp, or any platform
        </p>
      </div>
    </div>
  );
}
