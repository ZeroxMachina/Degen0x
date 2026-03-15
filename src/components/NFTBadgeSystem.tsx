"use client";
import { useState, useMemo } from "react";

// ─── Badge Definitions ────────────────────────────────────────────────────────

export type BadgeRarity = "common" | "rare" | "epic" | "legendary";

export interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  rarity: BadgeRarity;
  xpRequired: number;
  category: "learning" | "trading" | "social" | "defi" | "special";
  mintable: boolean; // Soulbound NFT mintable on Solana
  mintedCount: number; // How many users have this badge globally
  unlockedAt?: string; // ISO date if earned
  solanaTokenAddress?: string; // Soulbound NFT address once minted
}

const RARITY_META: Record<BadgeRarity, { label: string; color: string; glow: string; border: string; bg: string }> = {
  common:    { label: "Common",    color: "#94a3b8", glow: "#94a3b820", border: "#94a3b840", bg: "#94a3b810" },
  rare:      { label: "Rare",      color: "#60a5fa", glow: "#60a5fa30", border: "#60a5fa60", bg: "#60a5fa15" },
  epic:      { label: "Epic",      color: "#a78bfa", glow: "#a78bfa40", border: "#a78bfa70", bg: "#a78bfa15" },
  legendary: { label: "Legendary", color: "#f59e0b", glow: "#f59e0b50", border: "#f59e0b80", bg: "#f59e0b15" },
};

export const ALL_BADGES: Badge[] = [
  // ─── Learning Badges ─────────────────────────────────────────────────────────
  {
    id: "first-lesson",
    name: "First Block",
    description: "Completed your first crypto lesson. The chain has started.",
    emoji: "🧱",
    rarity: "common",
    xpRequired: 50,
    category: "learning",
    mintable: true,
    mintedCount: 48234,
  },
  {
    id: "quiz-streak-3",
    name: "Triple Threat",
    description: "Answered 3 quiz questions correctly in a row.",
    emoji: "🎯",
    rarity: "common",
    xpRequired: 150,
    category: "learning",
    mintable: true,
    mintedCount: 23187,
  },
  {
    id: "course-complete-intro",
    name: "Crypto Curious",
    description: "Completed the Intro to Crypto course. You now know more than 90% of normies.",
    emoji: "🎓",
    rarity: "rare",
    xpRequired: 500,
    category: "learning",
    mintable: true,
    mintedCount: 8921,
  },
  {
    id: "defi-scholar",
    name: "DeFi Scholar",
    description: "Completed all DeFi modules. You understand liquidity pools, AMMs, and yield strategies.",
    emoji: "📚",
    rarity: "rare",
    xpRequired: 1200,
    category: "learning",
    mintable: true,
    mintedCount: 4312,
  },
  {
    id: "speed-runner",
    name: "Speed Runner",
    description: "Answered 5 consecutive quiz questions in under 5 seconds each.",
    emoji: "⚡",
    rarity: "rare",
    xpRequired: 800,
    category: "learning",
    mintable: true,
    mintedCount: 2891,
  },
  {
    id: "perfect-quiz",
    name: "Flawless",
    description: "Scored 100% on a full quiz session without a single mistake.",
    emoji: "💎",
    rarity: "epic",
    xpRequired: 2000,
    category: "learning",
    mintable: true,
    mintedCount: 1456,
  },
  {
    id: "course-complete-advanced",
    name: "Chain God",
    description: "Mastered all advanced topics: MEV, ZK proofs, modular blockchains, account abstraction.",
    emoji: "🔥",
    rarity: "legendary",
    xpRequired: 8000,
    category: "learning",
    mintable: true,
    mintedCount: 312,
  },

  // ─── DeFi Badges ─────────────────────────────────────────────────────────────
  {
    id: "ecosystem-explorer",
    name: "Ecosystem Explorer",
    description: "Visited and reviewed 10+ dApps in the ecosystem store.",
    emoji: "🗺️",
    rarity: "common",
    xpRequired: 200,
    category: "defi",
    mintable: true,
    mintedCount: 15678,
  },
  {
    id: "dapp-reviewer",
    name: "App Critic",
    description: "Left detailed reviews on 5 different dApps.",
    emoji: "⭐",
    rarity: "rare",
    xpRequired: 750,
    category: "defi",
    mintable: true,
    mintedCount: 3421,
  },
  {
    id: "chain-hopper",
    name: "Chain Hopper",
    description: "Explored dApps on 5 different blockchain networks.",
    emoji: "🌉",
    rarity: "rare",
    xpRequired: 1000,
    category: "defi",
    mintable: true,
    mintedCount: 4891,
  },
  {
    id: "defi-native",
    name: "DeFi Native",
    description: "Learned about 20+ DeFi protocols across the ecosystem store.",
    emoji: "🌊",
    rarity: "epic",
    xpRequired: 3000,
    category: "defi",
    mintable: true,
    mintedCount: 876,
  },

  // ─── Social Badges ────────────────────────────────────────────────────────────
  {
    id: "early-adopter",
    name: "Early Adopter",
    description: "Joined degen0x in its first month of launch.",
    emoji: "🌅",
    rarity: "epic",
    xpRequired: 0,
    category: "social",
    mintable: true,
    mintedCount: 2341,
  },
  {
    id: "referral-king",
    name: "Referral King",
    description: "Successfully referred 10 friends to degen0x.",
    emoji: "👑",
    rarity: "legendary",
    xpRequired: 0,
    category: "social",
    mintable: true,
    mintedCount: 187,
  },
  {
    id: "streak-30",
    name: "30-Day Streak",
    description: "Maintained a 30-day daily challenge streak. Absolute unit.",
    emoji: "🔥",
    rarity: "epic",
    xpRequired: 4000,
    category: "social",
    mintable: true,
    mintedCount: 621,
  },
  {
    id: "leaderboard-top10",
    name: "Top 10 Degen",
    description: "Reached top 10 on the global XP leaderboard.",
    emoji: "🏆",
    rarity: "legendary",
    xpRequired: 15000,
    category: "social",
    mintable: true,
    mintedCount: 10,
  },

  // ─── Special / OG Badges ─────────────────────────────────────────────────────
  {
    id: "degen-mode",
    name: "Full Degen",
    description: "Discovered the secret Degen Mode. You know the Konami code. LFG.",
    emoji: "🦊",
    rarity: "legendary",
    xpRequired: 0,
    category: "special",
    mintable: true,
    mintedCount: 4312,
  },
  {
    id: "wallet-connected",
    name: "On-Chain Identity",
    description: "Connected a Web3 wallet to degen0x. Your on-chain identity is established.",
    emoji: "🔗",
    rarity: "rare",
    xpRequired: 0,
    category: "special",
    mintable: true,
    mintedCount: 31245,
  },
  {
    id: "billion-vision",
    name: "1B Mission",
    description: "Shared degen0x with your community, contributing to onboarding 1B users.",
    emoji: "🌍",
    rarity: "epic",
    xpRequired: 0,
    category: "special",
    mintable: true,
    mintedCount: 8734,
  },
];

// ─── Helper ───────────────────────────────────────────────────────────────────

function getBadgeStatus(badge: Badge, userXP: number, earnedIds: Set<string>): "locked" | "earned" | "mintable" | "minted" {
  const earned = earnedIds.has(badge.id);
  if (!earned && badge.xpRequired > 0 && userXP < badge.xpRequired) return "locked";
  if (earned) return badge.mintable ? "mintable" : "earned";
  if (badge.xpRequired === 0 && !earned) return "locked";
  return "earned";
}

// ─── MintModal ────────────────────────────────────────────────────────────────

function MintModal({ badge, onClose }: { badge: Badge; onClose: () => void }) {
  const [step, setStep] = useState<"preview" | "minting" | "done">("preview");
  const rarity = RARITY_META[badge.rarity];

  const handleMint = () => {
    setStep("minting");
    setTimeout(() => setStep("done"), 2500);
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }} onClick={onClose}>
      <div style={{ background: "#161b22", border: `1px solid ${rarity.border}`, borderRadius: 20, padding: 32, maxWidth: 400, width: "100%", boxShadow: `0 0 80px ${rarity.glow}` }} onClick={e => e.stopPropagation()}>
        {step === "preview" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 72, marginBottom: 12, filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))" }}>{badge.emoji}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#e6edf3", marginBottom: 6 }}>{badge.name}</div>
              <div style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.5, marginBottom: 12 }}>{badge.description}</div>
              <span style={{ padding: "4px 12px", background: rarity.bg, color: rarity.color, border: `1px solid ${rarity.border}`, borderRadius: 20, fontSize: 12, fontWeight: 700 }}>✨ {rarity.label}</span>
            </div>
            <div style={{ background: "#0d1117", borderRadius: 12, padding: 14, marginBottom: 20, fontSize: 12, color: "#8b949e" }}>
              <div style={{ fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>🔗 Soulbound NFT Details</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div>Chain: <span style={{ color: "#14F195" }}>Solana</span></div>
                <div>Standard: <span style={{ color: "#14F195" }}>SPL Token (Soulbound)</span></div>
                <div>Transferable: <span style={{ color: "#ef4444" }}>No — bound to your wallet</span></div>
                <div>Gas: <span style={{ color: "#3fb950" }}>~$0.0001 (Solana)</span></div>
                <div>Owners globally: <span style={{ color: "#60a5fa" }}>{badge.mintedCount.toLocaleString()}</span></div>
              </div>
            </div>
            <button onClick={handleMint} style={{ width: "100%", padding: "14px 24px", background: `linear-gradient(135deg, ${rarity.color}, #06b6d4)`, color: "#fff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 8 }}>
              Mint Soulbound NFT
            </button>
            <button onClick={onClose} style={{ width: "100%", padding: "10px 24px", background: "transparent", color: "#8b949e", border: "1px solid #30363d", borderRadius: 12, fontSize: 14, cursor: "pointer" }}>
              Cancel
            </button>
          </>
        )}
        {step === "minting" && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16, animation: "spin 1s linear infinite", display: "inline-block" }}>⚡</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>Minting on Solana…</div>
            <div style={{ fontSize: 13, color: "#8b949e" }}>Signing soulbound transaction. This takes about 2 seconds.</div>
            <div style={{ marginTop: 20, height: 4, background: "#21262d", borderRadius: 4 }}>
              <div style={{ height: 4, background: "linear-gradient(90deg,#14F195,#9945FF)", borderRadius: 4, animation: "progressFill 2.5s ease forwards" }} />
            </div>
          </div>
        )}
        {step === "done" && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 64, marginBottom: 12 }}>🎉</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#e6edf3", marginBottom: 8 }}>Badge Minted!</div>
            <div style={{ fontSize: 13, color: "#3fb950", marginBottom: 16 }}>Your soulbound NFT is on-chain. It is permanently bound to your wallet.</div>
            <div style={{ background: "#0d1117", borderRadius: 10, padding: 12, marginBottom: 20, fontSize: 11, color: "#8b949e", wordBreak: "break-all" }}>
              <div style={{ color: "#60a5fa", fontWeight: 700, marginBottom: 4 }}>Solana Token Address</div>
              7xKp...mNq3 (soulbound — non-transferable)
            </div>
            <button onClick={onClose} style={{ width: "100%", padding: "12px 24px", background: "linear-gradient(135deg,#14F195,#9945FF)", color: "#000", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 800, cursor: "pointer" }}>
              Awesome! Back to badges
            </button>
          </div>
        )}
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes progressFill { from { width: 0; } to { width: 100%; } }
        `}</style>
      </div>
    </div>
  );
}

// ─── BadgeCard ────────────────────────────────────────────────────────────────

function BadgeCard({ badge, userXP, earnedIds, onMint }: {
  badge: Badge;
  userXP: number;
  earnedIds: Set<string>;
  onMint: (badge: Badge) => void;
}) {
  const status = getBadgeStatus(badge, userXP, earnedIds);
  const rarity = RARITY_META[badge.rarity];
  const locked = status === "locked";

  return (
    <div style={{
      background: locked ? "#0d1117" : rarity.bg,
      border: `1px solid ${locked ? "#21262d" : rarity.border}`,
      borderRadius: 14,
      padding: 16,
      opacity: locked ? 0.5 : 1,
      transition: "transform 0.15s, box-shadow 0.15s",
      cursor: locked ? "default" : "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      textAlign: "center",
      boxShadow: locked ? "none" : `0 0 20px ${rarity.glow}`,
      position: "relative",
    }}
    onMouseEnter={e => { if (!locked) { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${rarity.glow}`; } }}
    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = locked ? "none" : `0 0 20px ${rarity.glow}`; }}
    >
      {/* Rarity corner tag */}
      <div style={{ position: "absolute", top: 8, right: 8, fontSize: 9, fontWeight: 800, padding: "2px 6px", background: rarity.bg, color: rarity.color, border: `1px solid ${rarity.border}`, borderRadius: 4 }}>
        {rarity.label.toUpperCase()}
      </div>

      <div style={{ fontSize: 40, lineHeight: 1, filter: locked ? "grayscale(1)" : `drop-shadow(0 0 12px ${rarity.glow})` }}>
        {locked ? "🔒" : badge.emoji}
      </div>

      <div style={{ fontSize: 13, fontWeight: 700, color: locked ? "#8b949e" : "#e6edf3", lineHeight: 1.3 }}>
        {badge.name}
      </div>

      <div style={{ fontSize: 11, color: "#8b949e", lineHeight: 1.4 }}>
        {locked
          ? badge.xpRequired > 0 ? `Unlock at ${badge.xpRequired.toLocaleString()} XP` : "Earn through achievements"
          : badge.description}
      </div>

      {/* Progress bar for locked badges */}
      {locked && badge.xpRequired > 0 && (
        <div style={{ width: "100%", marginTop: 4 }}>
          <div style={{ height: 3, background: "#21262d", borderRadius: 3 }}>
            <div style={{ height: 3, background: rarity.color, borderRadius: 3, width: `${Math.min((userXP / badge.xpRequired) * 100, 100)}%`, transition: "width 0.5s" }} />
          </div>
          <div style={{ fontSize: 10, color: "#8b949e", marginTop: 3 }}>{userXP.toLocaleString()} / {badge.xpRequired.toLocaleString()} XP</div>
        </div>
      )}

      {/* Mint button for earned mintable badges */}
      {status === "mintable" && badge.mintable && (
        <button
          onClick={() => onMint(badge)}
          style={{ marginTop: 4, padding: "6px 14px", background: `linear-gradient(135deg, ${rarity.color}, #06b6d4)`, color: "#fff", border: "none", borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: "pointer", width: "100%" }}
        >
          ⚡ Mint NFT
        </button>
      )}
      {status === "minted" && (
        <div style={{ fontSize: 10, color: "#3fb950", fontWeight: 700 }}>✅ Minted on Solana</div>
      )}
      {status === "earned" && (
        <div style={{ fontSize: 10, color: "#8b949e" }}>{badge.mintedCount.toLocaleString()} holders</div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface NFTBadgeSystemProps {
  userXP?: number;
  walletConnected?: boolean;
}

const DEMO_EARNED = new Set([
  "first-lesson", "quiz-streak-3", "ecosystem-explorer",
  "wallet-connected", "early-adopter",
]);

export default function NFTBadgeSystem({ userXP = 1500, walletConnected = true }: NFTBadgeSystemProps) {
  const [filterCat, setFilterCat] = useState<string>("all");
  const [filterRarity, setFilterRarity] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [mintingBadge, setMintingBadge] = useState<Badge | null>(null);
  const [earnedIds, setEarnedIds] = useState<Set<string>>(DEMO_EARNED);

  // Compute badge statuses
  const badgesWithStatus = useMemo(() => {
    return ALL_BADGES.map(b => ({
      badge: b,
      status: getBadgeStatus(b, userXP, earnedIds),
    }));
  }, [userXP, earnedIds]);

  const filtered = useMemo(() => {
    return badgesWithStatus.filter(({ badge, status }) => {
      if (filterCat !== "all" && badge.category !== filterCat) return false;
      if (filterRarity !== "all" && badge.rarity !== filterRarity) return false;
      if (filterStatus === "earned" && status === "locked") return false;
      if (filterStatus === "locked" && status !== "locked") return false;
      if (filterStatus === "mintable" && status !== "mintable") return false;
      return true;
    });
  }, [badgesWithStatus, filterCat, filterRarity, filterStatus]);

  const earnedCount = badgesWithStatus.filter(b => b.status !== "locked").length;
  const mintableCount = badgesWithStatus.filter(b => b.status === "mintable").length;

  const handleMint = (badge: Badge) => {
    if (!walletConnected) return;
    setMintingBadge(badge);
  };

  const handleMintComplete = () => {
    if (mintingBadge) {
      // Mark as minted (demo: move from mintable to minted status)
      setMintingBadge(null);
    }
  };

  const filterBtn = (val: string, current: string, label: string, set: (v: string) => void) => (
    <button
      key={val}
      onClick={() => set(val)}
      style={{ padding: "5px 12px", background: current === val ? "#6366f120" : "transparent", color: current === val ? "#818cf8" : "#8b949e", border: `1px solid ${current === val ? "#6366f140" : "#30363d"}`, borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer" }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ background: "#0d1117", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#e6edf3", borderRadius: 16, border: "1px solid #30363d", overflow: "hidden" }}>
      {mintingBadge && (
        <MintModal badge={mintingBadge} onClose={handleMintComplete} />
      )}

      {/* Header */}
      <div style={{ padding: "16px 20px", background: "#161b22", borderBottom: "1px solid #30363d" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, background: "linear-gradient(135deg,#f59e0b,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              🏅 Achievement Badges
            </div>
            <div style={{ fontSize: 12, color: "#8b949e", marginTop: 2 }}>Earn badges → Mint as Soulbound NFTs on Solana</div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ textAlign: "center", padding: "6px 14px", background: "#3fb95015", border: "1px solid #3fb95030", borderRadius: 10 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#3fb950" }}>{earnedCount}</div>
              <div style={{ fontSize: 10, color: "#8b949e" }}>Earned</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 14px", background: "#f59e0b15", border: "1px solid #f59e0b30", borderRadius: 10 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#f59e0b" }}>{mintableCount}</div>
              <div style={{ fontSize: 10, color: "#8b949e" }}>Mintable</div>
            </div>
            <div style={{ textAlign: "center", padding: "6px 14px", background: "#21262d", border: "1px solid #30363d", borderRadius: 10 }}>
              <div style={{ fontSize: 18, fontWeight: 800 }}>{ALL_BADGES.length}</div>
              <div style={{ fontSize: 10, color: "#8b949e" }}>Total</div>
            </div>
          </div>
        </div>

        {/* Wallet notice */}
        {!walletConnected && (
          <div style={{ marginTop: 12, padding: "8px 14px", background: "#f59e0b15", border: "1px solid #f59e0b30", borderRadius: 8, fontSize: 12, color: "#f59e0b" }}>
            ⚠️ Connect a Solana wallet to mint your badges as soulbound NFTs
          </div>
        )}
      </div>

      {/* Filters */}
      <div style={{ padding: "12px 20px", background: "#0d1117", borderBottom: "1px solid #30363d", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontSize: 11, color: "#8b949e", marginRight: 4 }}>Category:</span>
        {[
          { val: "all", label: "All" },
          { val: "learning", label: "📚 Learning" },
          { val: "defi", label: "🌊 DeFi" },
          { val: "social", label: "👥 Social" },
          { val: "special", label: "✨ Special" },
        ].map(o => filterBtn(o.val, filterCat, o.label, setFilterCat))}
        <span style={{ margin: "0 4px", color: "#30363d" }}>|</span>
        <span style={{ fontSize: 11, color: "#8b949e", marginRight: 4 }}>Rarity:</span>
        {[
          { val: "all", label: "All" },
          { val: "common", label: "Common" },
          { val: "rare", label: "Rare" },
          { val: "epic", label: "Epic" },
          { val: "legendary", label: "Legendary" },
        ].map(o => filterBtn(o.val, filterRarity, o.label, setFilterRarity))}
        <span style={{ margin: "0 4px", color: "#30363d" }}>|</span>
        {[
          { val: "all", label: "All" },
          { val: "earned", label: "Earned" },
          { val: "mintable", label: "Mintable" },
          { val: "locked", label: "Locked" },
        ].map(o => filterBtn(o.val, filterStatus, o.label, setFilterStatus))}
      </div>

      {/* Badge Grid */}
      <div style={{ padding: 20 }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "#8b949e" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
            No badges match this filter
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
            {filtered.map(({ badge }) => (
              <BadgeCard
                key={badge.id}
                badge={badge}
                userXP={userXP}
                earnedIds={earnedIds}
                onMint={handleMint}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: "12px 20px", background: "#161b22", borderTop: "1px solid #30363d", fontSize: 11, color: "#8b949e", display: "flex", gap: 16, flexWrap: "wrap" }}>
        <span>🔗 Soulbound = non-transferable, bound to your wallet forever</span>
        <span>⚡ Minting powered by Solana — near-zero gas</span>
        <span>🌍 On-chain proof of your crypto knowledge</span>
      </div>
    </div>
  );
}
