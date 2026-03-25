"use client";

import { useState, useCallback, useMemo } from "react";

/**
 * ReferralSystemV2 — Sprint 49
 * Full rebuild: unique codes, +200 XP per referral, dashboard, shareable cards,
 * tier leaderboard, Telegram/Twitter share integration.
 */

interface ReferralUser {
  rank: number;
  name: string;
  avatar: string;
  referrals: number;
  xpEarned: number;
  tier: Tier;
  joinedDaysAgo: number;
}

type Tier = "bronze" | "silver" | "gold" | "diamond" | "legend";

const TIERS: Record<Tier, { min: number; color: string; label: string; xpPerRef: number; perk: string; emoji: string }> = {
  bronze:  { min: 0,   color: "#cd7f32", label: "Bronze",  xpPerRef: 200, perk: "200 XP per referral",                  emoji: "🥉" },
  silver:  { min: 5,   color: "#c0c0c0", label: "Silver",  xpPerRef: 250, perk: "250 XP + early feature access",        emoji: "🥈" },
  gold:    { min: 20,  color: "#ffd700", label: "Gold",    xpPerRef: 300, perk: "300 XP + premium tools",               emoji: "🥇" },
  diamond: { min: 50,  color: "#7dd3fc", label: "Diamond", xpPerRef: 400, perk: "400 XP + VIP badge + priority support", emoji: "💎" },
  legend:  { min: 100, color: "#a78bfa", label: "Legend",  xpPerRef: 500, perk: "500 XP + revenue share + custom badge", emoji: "⚡" },
};

const MOCK_LEADERBOARD: ReferralUser[] = [
  { rank: 1,  name: "0xSatoshi",    avatar: "🧙", referrals: 247, xpEarned: 123500, tier: "legend",  joinedDaysAgo: 120 },
  { rank: 2,  name: "defi_wizard",  avatar: "🔮", referrals: 183, xpEarned: 91500,  tier: "legend",  joinedDaysAgo: 98  },
  { rank: 3,  name: "ape_anon",     avatar: "🦍", referrals: 142, xpEarned: 71000,  tier: "legend",  joinedDaysAgo: 85  },
  { rank: 4,  name: "gmgm.eth",     avatar: "🌅", referrals: 89,  xpEarned: 44500,  tier: "diamond", joinedDaysAgo: 67  },
  { rank: 5,  name: "sol_maxi",     avatar: "💜", referrals: 74,  xpEarned: 37000,  tier: "diamond", joinedDaysAgo: 55  },
  { rank: 6,  name: "layer2enjoyr", avatar: "🚀", referrals: 61,  xpEarned: 30500,  tier: "diamond", joinedDaysAgo: 44  },
  { rank: 7,  name: "wagmi_vibes",  avatar: "💪", referrals: 38,  xpEarned: 19000,  tier: "gold",    joinedDaysAgo: 38  },
  { rank: 8,  name: "nftdegenx",    avatar: "🎭", referrals: 29,  xpEarned: 14500,  tier: "gold",    joinedDaysAgo: 30  },
  { rank: 9,  name: "bridgemaxi",   avatar: "🌉", referrals: 22,  xpEarned: 11000,  tier: "gold",    joinedDaysAgo: 25  },
  { rank: 10, name: "You",          avatar: "⭐", referrals: 14,  xpEarned: 3500,   tier: "silver",  joinedDaysAgo: 18  },
];

function getTier(referrals: number): Tier {
  if (referrals >= 100) return "legend";
  if (referrals >= 50)  return "diamond";
  if (referrals >= 20)  return "gold";
  if (referrals >= 5)   return "silver";
  return "bronze";
}

function getNextTier(tier: Tier): { name: Tier; remaining: number } | null {
  const order: Tier[] = ["bronze", "silver", "gold", "diamond", "legend"];
  const idx = order.indexOf(tier);
  if (idx === order.length - 1) return null;
  const next = order[idx + 1];
  return { name: next, remaining: TIERS[next].min };
}

function ShareCard({ code, referrals, tier, xpEarned }: { code: string; referrals: number; tier: Tier; xpEarned: number }) {
  const t = TIERS[tier];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 text-center"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1c2330 100%)" }}>
      {/* glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${t.color}40, transparent 70%)` }} />

      <div className="relative z-10">
        <div className="text-4xl mb-2">{t.emoji}</div>
        <div className="text-2xl font-black mb-1" style={{
          background: `linear-gradient(135deg, ${t.color}, #fff)`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>degen0x</div>
        <div className="text-xs text-gray-400 mb-4">Onboarding the next 1B users to crypto</div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl bg-white/5 p-3">
            <div className="text-2xl font-bold text-white">{referrals}</div>
            <div className="text-xs text-gray-400">Referrals</div>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <div className="text-2xl font-bold" style={{ color: t.color }}>{xpEarned.toLocaleString()}</div>
            <div className="text-xs text-gray-400">XP Earned</div>
          </div>
        </div>

        <div className="rounded-xl border px-4 py-2 mb-4 font-mono text-sm font-bold tracking-wider"
          style={{ borderColor: t.color + "60", color: t.color, background: t.color + "10" }}>
          {t.emoji} {t.label} Referrer
        </div>

        <div className="text-xs text-gray-500">
          Join with my code: <span className="font-mono font-bold text-white">{code}</span>
        </div>
        <div className="text-xs text-gray-600 mt-1">degen0x.com/?ref={code}</div>
      </div>
    </div>
  );
}

export default function ReferralSystemV2() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "leaderboard" | "share">("dashboard");
  const [copied, setCopied] = useState<"link" | "code" | null>(null);
  const [showXPBurst, setShowXPBurst] = useState(false);

  // In production this would come from auth context
  const myStats = useMemo(() => ({
    referrals: 14,
    clicks: 312,
    conversions: 14,
    xpEarned: 3500,
    pendingXP: 400,
    tier: getTier(14) as Tier,
    code: "DEGEN-7FX2K9",
    joinDate: "2025-09-15",
  }), []);

  const currentTier = TIERS[myStats.tier];
  const nextTierInfo = getNextTier(myStats.tier);
  const progressToNext = nextTierInfo
    ? ((myStats.referrals - TIERS[myStats.tier].min) / (TIERS[nextTierInfo.name].min - TIERS[myStats.tier].min)) * 100
    : 100;

  const referralUrl = `https://degen0x.com/?ref=${myStats.code}`;

  const copy = useCallback((type: "link" | "code") => {
    const text = type === "link" ? referralUrl : myStats.code;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }, [referralUrl, myStats.code]);

  const shareTwitter = useCallback(() => {
    const text = encodeURIComponent(
      `🚀 I'm learning crypto on @degen0x and already at ${currentTier.label} tier!\n\nJoin me and earn XP while mastering Web3:\ndegen0x.com/?ref=${myStats.code}\n\n#crypto #web3 #degen0x`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  }, [currentTier, myStats.code]);

  const shareTelegram = useCallback(() => {
    const text = encodeURIComponent(
      `🚀 Join degen0x — learn crypto, earn XP, get badges!\nUse my referral: degen0x.com/?ref=${myStats.code}`
    );
    window.open(`https://t.me/share/url?url=${encodeURIComponent(referralUrl)}&text=${text}`, "_blank");
  }, [referralUrl, myStats.code]);

  const claimPendingXP = useCallback(() => {
    setShowXPBurst(true);
    setTimeout(() => setShowXPBurst(false), 2000);
  }, []);

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-[var(--color-border)]"
        style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(6,182,212,0.05))" }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-text)] flex items-center gap-2">
              🎯 Refer & Earn
              <span className="text-xs font-normal px-2 py-0.5 rounded-full"
                style={{ background: currentTier.color + "20", color: currentTier.color, border: `1px solid ${currentTier.color}40` }}>
                {currentTier.emoji} {currentTier.label}
              </span>
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Invite friends to degen0x and earn <strong className="text-[var(--color-text)]">{currentTier.xpPerRef} XP</strong> per successful referral
            </p>
          </div>
          {myStats.pendingXP > 0 && (
            <button
              onClick={claimPendingXP}
              className="relative shrink-0 px-4 py-2 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
              {showXPBurst && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-400 font-black text-lg animate-bounce pointer-events-none">
                  +{myStats.pendingXP} XP!
                </span>
              )}
              Claim +{myStats.pendingXP} XP
            </button>
          )}
        </div>

        {/* Tier Progress */}
        {nextTierInfo && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mb-1.5">
              <span>{currentTier.emoji} {currentTier.label}</span>
              <span>{myStats.referrals}/{TIERS[nextTierInfo.name].min} refs to {TIERS[nextTierInfo.name].emoji} {TIERS[nextTierInfo.name].label}</span>
            </div>
            <div className="h-2 rounded-full bg-[var(--color-border)] overflow-hidden">
              <div className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${Math.min(progressToNext, 100)}%`,
                  background: `linear-gradient(90deg, ${currentTier.color}, ${TIERS[nextTierInfo.name].color})`
                }} />
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">
              {TIERS[nextTierInfo.name].min - myStats.referrals} more referrals → unlock {TIERS[nextTierInfo.name].perk}
            </p>
          </div>
        )}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 divide-x divide-[var(--color-border)] border-b border-[var(--color-border)]">
        {[
          { label: "Referrals",  value: myStats.referrals,               color: "#6366f1" },
          { label: "Link Clicks", value: myStats.clicks,                  color: "#06b6d4" },
          { label: "XP Earned",  value: myStats.xpEarned.toLocaleString(), color: "#f59e0b" },
          { label: "Conv. Rate", value: `${Math.round((myStats.conversions / myStats.clicks) * 100)}%`, color: "#3fb950" },
        ].map((s) => (
          <div key={s.label} className="p-4 text-center">
            <div className="text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[var(--color-border)]">
        {(["dashboard", "leaderboard", "share"] as const).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-medium capitalize transition-colors ${
              activeTab === tab
                ? "text-indigo-400 border-b-2 border-indigo-400"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            }`}>
            {tab === "dashboard" ? "📊 Dashboard" : tab === "leaderboard" ? "🏆 Leaderboard" : "📤 Share"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">

        {/* DASHBOARD TAB */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            {/* Referral Link */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                Your Referral Link
              </label>
              <div className="flex gap-2">
                <div className="flex-1 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 font-mono text-sm text-[var(--color-text-secondary)] overflow-hidden">
                  <span className="truncate">{referralUrl}</span>
                </div>
                <button onClick={() => copy("link")}
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                  style={copied === "link"
                    ? { background: "#3fb95020", color: "#3fb950", border: "1px solid #3fb95040" }
                    : { background: "rgba(99,102,241,0.1)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.2)" }}>
                  {copied === "link" ? "✓ Copied!" : "Copy Link"}
                </button>
              </div>
            </div>

            {/* Referral Code */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                Your Referral Code
              </label>
              <div className="flex gap-2 items-center">
                <div className="flex-1 rounded-xl border px-4 py-3 font-mono text-lg font-bold tracking-widest text-center"
                  style={{ borderColor: currentTier.color + "60", color: currentTier.color, background: currentTier.color + "08" }}>
                  {myStats.code}
                </div>
                <button onClick={() => copy("code")}
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                  style={copied === "code"
                    ? { background: "#3fb95020", color: "#3fb950", border: "1px solid #3fb95040" }
                    : { background: "rgba(99,102,241,0.1)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.2)" }}>
                  {copied === "code" ? "✓ Copied!" : "Copy Code"}
                </button>
              </div>
            </div>

            {/* Tier Perks Grid */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-3">
                All Tiers & Perks
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
                {(Object.entries(TIERS) as [Tier, typeof TIERS[Tier]][]).map(([key, t]) => (
                  <div key={key}
                    className={`rounded-xl border p-3 transition-all ${myStats.tier === key ? "ring-1" : "opacity-60"}`}
                    style={{
                      borderColor: t.color + (myStats.tier === key ? "80" : "30"),
                      background: t.color + (myStats.tier === key ? "12" : "06"),
                      ringColor: t.color,
                    }}>
                    <div className="text-xl text-center mb-1">{t.emoji}</div>
                    <div className="text-xs font-bold text-center mb-1" style={{ color: t.color }}>{t.label}</div>
                    <div className="text-xs text-center text-[var(--color-text-secondary)]">{t.min}+ refs</div>
                    <div className="text-xs text-center mt-1 font-semibold" style={{ color: t.color }}>+{t.xpPerRef} XP/ref</div>
                  </div>
                ))}
              </div>
            </div>

            {/* QR Code placeholder */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]">
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center text-2xl shrink-0">
                <svg viewBox="0 0 100 100" className="w-14 h-14" fill="#0d1117">
                  {/* Simplified QR code visual */}
                  <rect x="10" y="10" width="30" height="30" rx="3"/>
                  <rect x="15" y="15" width="20" height="20" rx="1" fill="white"/>
                  <rect x="19" y="19" width="12" height="12" rx="1"/>
                  <rect x="60" y="10" width="30" height="30" rx="3"/>
                  <rect x="65" y="15" width="20" height="20" rx="1" fill="white"/>
                  <rect x="69" y="19" width="12" height="12" rx="1"/>
                  <rect x="10" y="60" width="30" height="30" rx="3"/>
                  <rect x="15" y="65" width="20" height="20" rx="1" fill="white"/>
                  <rect x="19" y="69" width="12" height="12" rx="1"/>
                  <rect x="55" y="55" width="8" height="8"/>
                  <rect x="67" y="55" width="8" height="8"/>
                  <rect x="79" y="55" width="12" height="8"/>
                  <rect x="55" y="67" width="8" height="8"/>
                  <rect x="67" y="67" width="24" height="8"/>
                  <rect x="55" y="79" width="36" height="12"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">QR Code</p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">Share your QR at events, in videos, or print it for IRL onboarding</p>
                <button className="mt-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                  Download QR PNG →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* LEADERBOARD TAB */}
        {activeTab === "leaderboard" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[var(--color-text)]">Top Referrers — All Time</h3>
              <span className="text-xs text-[var(--color-text-secondary)]">Updated live</span>
            </div>

            {/* Podium */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[MOCK_LEADERBOARD[1], MOCK_LEADERBOARD[0], MOCK_LEADERBOARD[2]].map((u, i) => {
                const actualRank = i === 0 ? 2 : i === 1 ? 1 : 3;
                const heights = ["h-24", "h-32", "h-20"];
                const medals = ["🥈", "🥇", "🥉"];
                return (
                  <div key={u.rank} className="flex flex-col items-center">
                    <div className="text-2xl mb-1">{u.avatar}</div>
                    <div className="text-xs font-semibold text-[var(--color-text)] truncate max-w-full">{u.name}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">{u.referrals} refs</div>
                    <div className={`w-full mt-2 rounded-t-lg flex items-end justify-center pb-2 ${heights[i]}`}
                      style={{ background: `${TIERS[u.tier].color}20`, border: `1px solid ${TIERS[u.tier].color}40` }}>
                      <span className="text-xl">{medals[i]}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Full Table */}
            <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                    <th className="text-left px-4 py-2 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">#</th>
                    <th className="text-left px-4 py-2 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">User</th>
                    <th className="text-right px-4 py-2 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Tier</th>
                    <th className="text-right px-4 py-2 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Refs</th>
                    <th className="text-right px-4 py-2 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">XP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {MOCK_LEADERBOARD.map((u) => {
                    const t = TIERS[u.tier];
                    const isMe = u.name === "You";
                    return (
                      <tr key={u.rank}
                        className={`hover:bg-[var(--color-bg)] transition-colors ${isMe ? "ring-1 ring-inset ring-indigo-500/30 bg-indigo-500/5" : ""}`}>
                        <td className="px-4 py-3 font-mono font-bold text-[var(--color-text-secondary)]">
                          {u.rank <= 3 ? ["🥇","🥈","🥉"][u.rank-1] : u.rank}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{u.avatar}</span>
                            <div>
                              <span className={`font-semibold ${isMe ? "text-indigo-400" : "text-[var(--color-text)]"}`}>
                                {u.name}{isMe && " (you)"}
                              </span>
                              <div className="text-xs text-[var(--color-text-secondary)]">{u.joinedDaysAgo}d ago</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="text-xs font-bold px-2 py-1 rounded-full"
                            style={{ background: t.color + "20", color: t.color }}>
                            {t.emoji} {t.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-[var(--color-text)]">{u.referrals}</td>
                        <td className="px-4 py-3 text-right font-bold" style={{ color: "#f59e0b" }}>
                          {u.xpEarned.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SHARE TAB */}
        {activeTab === "share" && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Twitter Share */}
              <button onClick={shareTwitter}
                className="flex items-center gap-3 p-4 rounded-xl border border-[var(--color-border)] hover:border-sky-500/40 hover:bg-sky-500/5 transition-all text-left group">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text)]">Share on X / Twitter</div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">Auto-filled post with your referral link</div>
                </div>
                <svg className="w-4 h-4 ml-auto text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </button>

              {/* Telegram Share */}
              <button onClick={shareTelegram}
                className="flex items-center gap-3 p-4 rounded-xl border border-[var(--color-border)] hover:border-sky-400/40 hover:bg-sky-400/5 transition-all text-left group">
                <div className="w-10 h-10 rounded-full bg-[#2AABEE] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text)]">Share on Telegram</div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">Send to your crypto groups & channels</div>
                </div>
                <svg className="w-4 h-4 ml-auto text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </button>
            </div>

            {/* Achievement Card Preview */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-3">
                Your Achievement Card
              </label>
              <div className="max-w-xs mx-auto">
                <ShareCard
                  code={myStats.code}
                  referrals={myStats.referrals}
                  tier={myStats.tier}
                  xpEarned={myStats.xpEarned}
                />
              </div>
              <p className="text-center text-xs text-[var(--color-text-secondary)] mt-3">
                Screenshot and share on social media to flex your degen status 📸
              </p>
            </div>

            {/* Message Templates */}
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-3">
                Message Templates
              </label>
              <div className="space-y-2">
                {[
                  {
                    label: "For Beginners",
                    text: `🔥 Best way to learn crypto in 2026! degen0x has free courses, quizzes, and you earn XP as you learn. Way better than random YouTube videos. Start here: degen0x.com/?ref=${myStats.code}`
                  },
                  {
                    label: "For DeFi Users",
                    text: `📊 degen0x has the most comprehensive DeFi guide I've seen + tracks 100+ dApps across every L1/L2. If you haven't checked it out yet: degen0x.com/?ref=${myStats.code}`
                  },
                  {
                    label: "For Traders",
                    text: `⚡ degen0x has live price feeds, whale watch, gas tracker, and a whole gamified learning platform. Actually useful: degen0x.com/?ref=${myStats.code}`
                  },
                ].map((tmpl) => (
                  <div key={tmpl.label} className="rounded-xl border border-[var(--color-border)] p-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-[var(--color-text)]">{tmpl.label}</span>
                      <button
                        onClick={() => { navigator.clipboard.writeText(tmpl.text).catch(() => {}); }}
                        className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                        Copy
                      </button>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{tmpl.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
