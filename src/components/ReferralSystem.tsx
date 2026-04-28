"use client";

import { useState, useCallback } from "react";

interface ReferralStats {
  referrals: number;
  clicks: number;
  earnings: number;
  tier: "bronze" | "silver" | "gold" | "diamond";
}

const TIERS = {
  bronze: { min: 0, color: "#cd7f32", label: "Bronze", perk: "Basic access" },
  silver: { min: 5, color: "#c0c0c0", label: "Silver", perk: "Early access to tools" },
  gold: { min: 20, color: "#ffd700", label: "Gold", perk: "Premium features + priority support" },
  diamond: { min: 50, color: "#b9f2ff", label: "Diamond", perk: "VIP access + revenue share" },
};

export default function ReferralSystem() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [stats] = useState<ReferralStats>({
    referrals: 12,
    clicks: 248,
    earnings: 0,
    tier: "silver",
  });

  const referralCode = "DEGEN-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  const referralUrl = `https://degen0x.com/?ref=${referralCode}`;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [referralUrl]);

  const handleShare = (platform: string) => {
    const text = encodeURIComponent("Check out degen0x — the best crypto research platform with 800+ pages of guides, tools, and live data! 🚀");
    const url = encodeURIComponent(referralUrl);
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      telegram: `https://t.me/share/url?url=${url}&text=${text}`,
      discord: `https://discord.com/channels/@me`,
    };
    if (shareUrls[platform]) window.open(shareUrls[platform], "_blank");
  };

  const tier = TIERS[stats.tier];
  const nextTier = stats.tier === "bronze" ? TIERS.silver : stats.tier === "silver" ? TIERS.gold : stats.tier === "gold" ? TIERS.diamond : null;
  const progressToNext = nextTier ? (stats.referrals / nextTier.min) * 100 : 100;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
        style={{ background: "#6366f115", color: "#818cf8", border: "1px solid #6366f130" }}
      >
        🎁 Refer & Earn
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="w-full max-w-md rounded-2xl overflow-hidden" style={{ background: "#161b22", border: "1px solid #30363d" }}>
            <div className="p-5" style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Refer & Earn</h2>
                <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white text-lg">✕</button>
              </div>
              <p className="text-sm text-white/80 mt-1">Share degen0x and earn rewards as the community grows.</p>
            </div>

            <div className="p-5 space-y-5">
              {/* Tier Badge */}
              <div className="flex items-center gap-4 p-3 rounded-xl" style={{ background: "#0d1117" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ background: `${tier.color}20`, color: tier.color, border: `2px solid ${tier.color}` }}>
                  {tier.label[0]}
                </div>
                <div>
                  <div className="font-bold" style={{ color: tier.color }}>{tier.label} Tier</div>
                  <div className="text-xs" style={{ color: "#8b949e" }}>{tier.perk}</div>
                  {nextTier && (
                    <div className="mt-1">
                      <div className="h-1.5 w-32 rounded-full overflow-hidden" style={{ background: "#30363d" }}>
                        <div className="h-full rounded-full" style={{ background: "#6366f1", width: `${Math.min(progressToNext, 100)}%` }} />
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "#8b949e" }}>
                        {stats.referrals}/{nextTier.min} to {nextTier.label}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 rounded-xl" style={{ background: "#0d1117" }}>
                  <div className="text-xl font-bold" style={{ color: "#3fb950" }}>{stats.referrals}</div>
                  <div className="text-xs" style={{ color: "#8b949e" }}>Referrals</div>
                </div>
                <div className="text-center p-3 rounded-xl" style={{ background: "#0d1117" }}>
                  <div className="text-xl font-bold" style={{ color: "#58a6ff" }}>{stats.clicks}</div>
                  <div className="text-xs" style={{ color: "#8b949e" }}>Link Clicks</div>
                </div>
                <div className="text-center p-3 rounded-xl" style={{ background: "#0d1117" }}>
                  <div className="text-xl font-bold" style={{ color: "#d29922" }}>{((stats.referrals / Math.max(stats.clicks, 1)) * 100).toFixed(1)}%</div>
                  <div className="text-xs" style={{ color: "#8b949e" }}>Conv. Rate</div>
                </div>
              </div>

              {/* Referral Link */}
              <div>
                <div className="text-xs font-semibold uppercase mb-2" style={{ color: "#8b949e" }}>Your Referral Link</div>
                <div className="flex gap-2">
                  <input
                    readOnly
                    value={referralUrl}
                    className="flex-1 rounded-lg px-3 py-2 text-sm font-mono"
                    style={{ background: "#0d1117", color: "#e6edf3", border: "1px solid #30363d" }}
                  />
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                    style={{ background: copied ? "#3fb950" : "#6366f1" }}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex gap-2">
                {[
                  { id: "twitter", label: "𝕏 Twitter", bg: "#1da1f220", color: "#1da1f2" },
                  { id: "telegram", label: "✈ Telegram", bg: "#0088cc20", color: "#0088cc" },
                  { id: "discord", label: "💬 Discord", bg: "#5865f220", color: "#5865f2" },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleShare(p.id)}
                    className="flex-1 py-2 rounded-lg text-xs font-semibold transition-opacity hover:opacity-80"
                    style={{ background: p.bg, color: p.color, border: `1px solid ${p.color}30` }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
