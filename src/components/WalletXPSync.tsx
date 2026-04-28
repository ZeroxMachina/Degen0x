"use client";
import { useState, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WalletXPProfile {
  walletAddress: string;
  displayName: string; // ENS / .sol domain or truncated address
  xp: number;
  level: number;
  levelName: string;
  badgesEarned: number;
  coursesCompleted: number;
  quizStreak: number;
  lastActiveAt: string; // ISO
  syncedAt: string; // ISO
  totalTxsVerified: number; // On-chain XP earning events verified
  rank: number; // Global rank
  isVerified: boolean; // Wallet ownership verified via signature
}

interface XPAction {
  action: string;
  xpAmount: number;
  timestamp: string;
  txHash?: string;
  onChain: boolean;
}

// ─── Mock data (would be replaced by actual Solana program + API) ─────────────

const DEMO_PROFILE: WalletXPProfile = {
  walletAddress: "7xKp9mRqYzL8wBnJ4cPvD2eHfNsQtAuE6mNq3bXrT5p",
  displayName: "degen.sol",
  xp: 3450,
  level: 4,
  levelName: "Degen",
  badgesEarned: 7,
  coursesCompleted: 3,
  quizStreak: 14,
  lastActiveAt: new Date(Date.now() - 3600000).toISOString(),
  syncedAt: new Date().toISOString(),
  totalTxsVerified: 23,
  rank: 142,
  isVerified: true,
};

const DEMO_HISTORY: XPAction[] = [
  { action: "Completed 'Intro to DeFi' course", xpAmount: 250, timestamp: new Date(Date.now() - 3600000).toISOString(), onChain: true, txHash: "4hWx...9mKp" },
  { action: "Quiz: Perfect score (10/10)", xpAmount: 120, timestamp: new Date(Date.now() - 7200000).toISOString(), onChain: false },
  { action: "Daily challenge streak bonus (×1.5)", xpAmount: 75, timestamp: new Date(Date.now() - 86400000).toISOString(), onChain: false },
  { action: "Minted 'Crypto Curious' soulbound badge", xpAmount: 50, timestamp: new Date(Date.now() - 172800000).toISOString(), onChain: true, txHash: "9rTm...2wQp" },
  { action: "Referred new user: phantom.sol", xpAmount: 200, timestamp: new Date(Date.now() - 259200000).toISOString(), onChain: true, txHash: "2pNx...7kRj" },
  { action: "Reviewed 5 dApps in Ecosystem Store", xpAmount: 100, timestamp: new Date(Date.now() - 345600000).toISOString(), onChain: false },
  { action: "Quiz: Speed bonus ×1.5 (answered in <5s)", xpAmount: 90, timestamp: new Date(Date.now() - 432000000).toISOString(), onChain: false },
];

const LEVEL_INFO = [
  { min: 0,    max: 499,  name: "Novice",    emoji: "🌱", color: "#94a3b8", nextName: "Explorer" },
  { min: 500,  max: 1499, name: "Explorer",  emoji: "🔭", color: "#60a5fa", nextName: "Degen" },
  { min: 1500, max: 3999, name: "Degen",     emoji: "🦊", color: "#a78bfa", nextName: "Chad" },
  { min: 4000, max: 7999, name: "Chad",      emoji: "⚡", color: "#f59e0b", nextName: "Chain God" },
  { min: 8000, max: Infinity, name: "Chain God", emoji: "🔥", color: "#ef4444", nextName: null },
];

function getLevelInfo(xp: number) {
  return LEVEL_INFO.find(l => xp >= l.min && xp <= l.max) ?? LEVEL_INFO[0];
}

function formatTimeAgo(iso: string): string {
  const secs = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (secs < 60) return "just now";
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`;
  if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`;
  return `${Math.floor(secs / 86400)}d ago`;
}

function truncateAddr(addr: string) {
  return addr.length > 12 ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : addr;
}

// ─── Sync Animation ───────────────────────────────────────────────────────────

function SyncPulse({ syncing }: { syncing: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span style={{
        width: 8, height: 8, borderRadius: "50%",
        background: syncing ? "#f59e0b" : "#3fb950",
        animation: syncing ? "pulse 1s ease infinite" : "none",
        boxShadow: `0 0 6px ${syncing ? "#f59e0b" : "#3fb950"}`,
      }} />
      <span style={{ fontSize: 11, color: syncing ? "#f59e0b" : "#3fb950", fontWeight: 600 }}>
        {syncing ? "Syncing…" : "Synced"}
      </span>
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface WalletXPSyncProps {
  walletAddress?: string | null;
  onProfileLoaded?: (profile: WalletXPProfile) => void;
  compact?: boolean;
}

export default function WalletXPSync({
  walletAddress,
  onProfileLoaded,
  compact = false,
}: WalletXPSyncProps) {
  const [syncing, setSyncing] = useState(false);
  const [synced, setSynced] = useState(false);
  const [profile, setProfile] = useState<WalletXPProfile | null>(null);
  const [history, setHistory] = useState<XPAction[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [linking, setLinking] = useState(false);
  const [linked, setLinked] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "history" | "leaderboard">("overview");

  // Demo: auto-load profile
  useEffect(() => {
    if (walletAddress || true) {
      setSyncing(true);
      const t = setTimeout(() => {
        setProfile(DEMO_PROFILE);
        setHistory(DEMO_HISTORY);
        setSyncing(false);
        setSynced(true);
        setSyncing(false);
        onProfileLoaded?.(DEMO_PROFILE);
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [walletAddress, onProfileLoaded]);

  const handleSync = useCallback(() => {
    setSyncing(true);
    setTimeout(() => {
      setProfile(p => p ? { ...p, syncedAt: new Date().toISOString(), xp: p.xp + 15 } : p);
      setSyncing(false);
    }, 1500);
  }, []);

  const handleLinkWallet = () => {
    setLinking(true);
    setTimeout(() => {
      setLinking(false);
      setLinked(true);
    }, 2000);
  };

  if (!profile && syncing) {
    return (
      <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 16, padding: 32, textAlign: "center", fontFamily: "-apple-system, sans-serif", color: "#8b949e" }}>
        <div style={{ fontSize: 28, marginBottom: 10, animation: "pulse 1s ease infinite", display: "inline-block" }}>🔗</div>
        <div style={{ fontSize: 14 }}>Syncing XP with wallet…</div>
        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      </div>
    );
  }

  if (!profile) {
    return (
      <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 16, padding: 24, fontFamily: "-apple-system, sans-serif", color: "#e6edf3" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🔗</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>Link Your Wallet</div>
          <div style={{ fontSize: 13, color: "#8b949e", marginTop: 4 }}>Connect a Solana wallet to sync your XP on-chain and earn soulbound badges.</div>
        </div>
        <button
          onClick={handleLinkWallet}
          disabled={linking}
          style={{ width: "100%", padding: "12px 24px", background: "linear-gradient(135deg,#9945FF,#14F195)", color: "#fff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer" }}
        >
          {linking ? "Signing message…" : "Connect Solana Wallet"}
        </button>
      </div>
    );
  }

  const levelInfo = getLevelInfo(profile.xp);
  const nextLevel = LEVEL_INFO[LEVEL_INFO.indexOf(levelInfo) + 1];
  const xpProgress = nextLevel
    ? ((profile.xp - levelInfo.min) / (levelInfo.max - levelInfo.min)) * 100
    : 100;

  if (compact) {
    return (
      <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "10px 14px", fontFamily: "-apple-system, sans-serif", display: "flex", alignItems: "center", gap: 12, color: "#e6edf3" }}>
        <div style={{ fontSize: 24 }}>{levelInfo.emoji}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>{profile.displayName}</div>
          <div style={{ fontSize: 11, color: "#8b949e" }}>{levelInfo.name} · {profile.xp.toLocaleString()} XP</div>
        </div>
        <div style={{ height: 36, width: 36, borderRadius: "50%", background: `${levelInfo.color}20`, border: `2px solid ${levelInfo.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: levelInfo.color }}>
          {profile.level}
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 16, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#e6edf3", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ padding: "16px 20px", background: "#161b22", borderBottom: "1px solid #30363d" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${levelInfo.color}, #06b6d4)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, boxShadow: `0 0 20px ${levelInfo.color}40` }}>
              {levelInfo.emoji}
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800 }}>{profile.displayName}</div>
              <div style={{ fontSize: 11, color: "#8b949e", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <span>🔗 {truncateAddr(profile.walletAddress)}</span>
                {profile.isVerified && <span style={{ color: "#3fb950" }}>✅ Verified</span>}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <SyncPulse syncing={syncing} />
            <button
              onClick={handleSync}
              disabled={syncing}
              style={{ padding: "6px 14px", background: "#21262d", border: "1px solid #30363d", color: "#e6edf3", borderRadius: 8, fontSize: 12, cursor: syncing ? "wait" : "pointer", fontWeight: 600 }}
            >
              {syncing ? "Syncing…" : "↻ Sync"}
            </button>
          </div>
        </div>
      </div>

      {/* Level + XP Progress */}
      <div style={{ padding: "16px 20px", borderBottom: "1px solid #30363d" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: levelInfo.color }}>{levelInfo.emoji} {levelInfo.name}</span>
            <span style={{ fontSize: 11, color: "#8b949e" }}>Level {profile.level}</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 800, color: "#f0883e" }}>{profile.xp.toLocaleString()} XP</span>
        </div>
        <div style={{ height: 8, background: "#21262d", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ height: 8, background: `linear-gradient(90deg, ${levelInfo.color}, #06b6d4)`, borderRadius: 8, width: `${xpProgress}%`, transition: "width 1s ease", boxShadow: `0 0 8px ${levelInfo.color}60` }} />
        </div>
        {nextLevel && (
          <div style={{ fontSize: 11, color: "#8b949e", marginTop: 4, display: "flex", justifyContent: "space-between" }}>
            <span>{profile.xp.toLocaleString()} XP</span>
            <span>{levelInfo.max.toLocaleString()} XP → {nextLevel.name} {nextLevel.emoji}</span>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderBottom: "1px solid #30363d" }}>
        {[
          { label: "Global Rank", value: `#${profile.rank}`, color: "#f59e0b" },
          { label: "Badges", value: profile.badgesEarned, color: "#a78bfa" },
          { label: "Courses", value: profile.coursesCompleted, color: "#60a5fa" },
          { label: "Streak 🔥", value: `${profile.quizStreak}d`, color: "#ef4444" },
        ].map((s, i) => (
          <div key={s.label} style={{ padding: "12px 0", textAlign: "center", borderRight: i < 3 ? "1px solid #30363d" : "none" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 10, color: "#8b949e", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #30363d" }}>
        {(["overview", "history", "leaderboard"] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ flex: 1, padding: "10px 0", background: "none", border: "none", color: activeTab === tab ? "#e6edf3" : "#8b949e", fontSize: 12, fontWeight: 700, cursor: "pointer", borderBottom: `2px solid ${activeTab === tab ? "#6366f1" : "transparent"}`, textTransform: "capitalize" }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: 20 }}>
        {activeTab === "overview" && (
          <div>
            {/* On-chain XP breakdown */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>XP Sources</div>
              {[
                { label: "Course completions", pct: 35, color: "#60a5fa" },
                { label: "Quiz performance", pct: 28, color: "#a78bfa" },
                { label: "Daily challenges", pct: 18, color: "#f59e0b" },
                { label: "Referrals", pct: 12, color: "#3fb950" },
                { label: "Ecosystem reviews", pct: 7, color: "#ef4444" },
              ].map(s => (
                <div key={s.label} style={{ marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 3 }}>
                    <span style={{ color: "#e6edf3" }}>{s.label}</span>
                    <span style={{ color: "#8b949e" }}>{s.pct}%</span>
                  </div>
                  <div style={{ height: 4, background: "#21262d", borderRadius: 4 }}>
                    <div style={{ height: 4, background: s.color, borderRadius: 4, width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* On-chain sync info */}
            <div style={{ padding: "12px 14px", background: "#161b22", border: "1px solid #30363d", borderRadius: 10, fontSize: 12 }}>
              <div style={{ fontWeight: 700, marginBottom: 8, color: "#e6edf3" }}>🔗 On-Chain Verification</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, color: "#8b949e" }}>
                <div>✅ {profile.totalTxsVerified} XP events verified on Solana</div>
                <div>📋 Wallet: <span style={{ color: "#60a5fa", fontFamily: "monospace" }}>{truncateAddr(profile.walletAddress)}</span></div>
                <div>🕐 Last synced: {formatTimeAgo(profile.syncedAt)}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Recent XP Activity</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {history.map((h, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 12px", background: "#161b22", border: "1px solid #30363d", borderRadius: 10 }}>
                  <div style={{ minWidth: 40, height: 36, background: h.onChain ? "#3fb95015" : "#6366f115", border: `1px solid ${h.onChain ? "#3fb95030" : "#6366f130"}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: h.onChain ? "#3fb950" : "#818cf8" }}>
                    {h.onChain ? "⛓️" : "🎮"}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#e6edf3", marginBottom: 2 }}>{h.action}</div>
                    <div style={{ fontSize: 11, color: "#8b949e", display: "flex", gap: 8 }}>
                      <span>{formatTimeAgo(h.timestamp)}</span>
                      {h.txHash && <span style={{ color: "#60a5fa", fontFamily: "monospace" }}>{h.txHash}</span>}
                      {h.onChain && <span style={{ color: "#3fb950" }}>On-chain ✅</span>}
                    </div>
                  </div>
                  <div style={{ fontWeight: 800, color: "#f0883e", fontSize: 13, minWidth: 52, textAlign: "right" }}>
                    +{h.xpAmount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "leaderboard" && (
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>Top Degens</div>
            {[
              { rank: 1, name: "cryptobro.sol", xp: 28450, level: "Chain God 🔥" },
              { rank: 2, name: "wagmi.sol", xp: 22130, level: "Chain God 🔥" },
              { rank: 3, name: "ngmi.eth", xp: 19870, level: "Chain God 🔥" },
              { rank: 142, name: profile.displayName, xp: profile.xp, level: `${levelInfo.name} ${levelInfo.emoji}`, isMe: true },
            ].map((u, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: (u as any).isMe ? "#6366f115" : "#161b22", border: `1px solid ${(u as any).isMe ? "#6366f140" : "#30363d"}`, borderRadius: 10, marginBottom: 6 }}>
                <div style={{ width: 28, fontSize: 14, fontWeight: 800, color: u.rank <= 3 ? ["#f59e0b", "#94a3b8", "#cd7f32"][u.rank - 1] : "#8b949e", textAlign: "center" }}>
                  {u.rank <= 3 ? ["🥇","🥈","🥉"][u.rank - 1] : `#${u.rank}`}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{u.name} {(u as any).isMe && <span style={{ fontSize: 10, color: "#6366f1", fontWeight: 600 }}>← you</span>}</div>
                  <div style={{ fontSize: 11, color: "#8b949e" }}>{u.level}</div>
                </div>
                <div style={{ fontWeight: 800, color: "#f0883e" }}>{u.xp.toLocaleString()} XP</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </div>
  );
}
