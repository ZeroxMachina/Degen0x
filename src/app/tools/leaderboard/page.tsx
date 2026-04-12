'use client';

"use client";

// ─────────────────────────────────────────────────────────────────────────────
//  degen0x · Live Leaderboard
//  Sprint 26 · Day 32
//
//  Ranks users by their degen0x Score (from /tools/degen-score)
//  Architecture: Supabase real-time subscriptions ready
//  Current state: mock data with real-time polling simulation
//
//  Supabase schema (run in SQL editor to enable real backend):
//  ─────────────────────────────────────────────────────────
//  create table leaderboard (
//    id uuid primary key default gen_random_uuid(),
//    username text not null unique,
//    avatar_seed text,
//    degen_score int not null default 0,
//    portfolio_value_usd numeric,
//    best_call text,         -- e.g. "ETH 2x ✓"
//    badges text[],          -- ["Diamond Hands", "DeFi Degen", "Whale"]
//    tier text default 'free', -- 'free' | 'pro' | 'elite'
//    streak_days int default 0,
//    total_wins int default 0,
//    total_calls int default 0,
//    last_active timestamptz default now(),
//    created_at timestamptz default now()
//  );
//  alter table leaderboard enable row level security;
//  create policy "public read" on leaderboard for select using (true);
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────

interface LeaderboardEntry {
  rank: number;
  id: string;
  username: string;
  avatarSeed: string;
  degenScore: number;
  portfolioValue: string;
  bestCall: string;
  badges: string[];
  tier: "free" | "pro" | "elite";
  streakDays: number;
  winRate: number;
  totalCalls: number;
  change24h: number; // rank change in last 24h
  lastActive: string;
}

// ── Mock data (replace with Supabase real-time query) ─────────────────────────

const MOCK_LEADERS: Omit<LeaderboardEntry, "rank">[] = [
  { id: "1", username: "sol_maxi_69", avatarSeed: "sol", degenScore: 9847, portfolioValue: "$2.4M", bestCall: "SOL $18 → $240 ✓", badges: ["Whale 🐳", "Diamond Hands 💎", "100x Club"], tier: "elite", streakDays: 147, winRate: 78, totalCalls: 41, change24h: 0, lastActive: "2 min ago" },
  { id: "2", username: "ethmaxi_real", avatarSeed: "eth", degenScore: 9234, portfolioValue: "$890K", bestCall: "ETH $1,100 → $4,800 ✓", badges: ["OG 🏆", "DeFi Degen", "Validator"], tier: "elite", streakDays: 89, winRate: 71, totalCalls: 67, change24h: 1, lastActive: "14 min ago" },
  { id: "3", username: "btc_hodlr_2140", avatarSeed: "btc", degenScore: 8911, portfolioValue: "$1.1M", bestCall: "BTC $16K → $100K ✓", badges: ["Diamond Hands 💎", "Bitcoin Bull", "Whale 🐳"], tier: "pro", streakDays: 312, winRate: 66, totalCalls: 29, change24h: -1, lastActive: "1 hr ago" },
  { id: "4", username: "ape_together_strong", avatarSeed: "ape", degenScore: 8445, portfolioValue: "$320K", bestCall: "PEPE $0.000001 → $0.00002 ✓", badges: ["Meme Lord 🐸", "100x Club", "Degen"], tier: "pro", streakDays: 54, winRate: 61, totalCalls: 112, change24h: 2, lastActive: "30 min ago" },
  { id: "5", username: "defi_wizard_420", avatarSeed: "defi", degenScore: 8102, portfolioValue: "$445K", bestCall: "AAVE $50 → $660 ✓", badges: ["DeFi Degen", "Yield Farmer 🌾", "Protocol Maxi"], tier: "elite", streakDays: 201, winRate: 74, totalCalls: 38, change24h: 0, lastActive: "5 min ago" },
  { id: "6", username: "nft_flipper_pro", avatarSeed: "nft", degenScore: 7890, portfolioValue: "$178K", bestCall: "BAYC 0.08 → 150 ETH ✓", badges: ["NFT Degen 🖼️", "Floor Sweeper", "Flipper"], tier: "pro", streakDays: 33, winRate: 58, totalCalls: 144, change24h: -2, lastActive: "2 hr ago" },
  { id: "7", username: "altcoin_szn_always", avatarSeed: "alt", degenScore: 7654, portfolioValue: "$92K", bestCall: "AVAX $3 → $146 ✓", badges: ["Altcoin Hunter", "Season Player", "Degen"], tier: "pro", streakDays: 67, winRate: 55, totalCalls: 89, change24h: 3, lastActive: "45 min ago" },
  { id: "8", username: "on_chain_oracle", avatarSeed: "oracle", degenScore: 7321, portfolioValue: "$560K", bestCall: "LDO $0.40 → $3.50 ✓", badges: ["On-Chain OG", "Whale 🐳", "Research God"], tier: "elite", streakDays: 178, winRate: 81, totalCalls: 22, change24h: 1, lastActive: "20 min ago" },
  { id: "9", username: "rekt_proof_trader", avatarSeed: "rekt", degenScore: 6988, portfolioValue: "$67K", bestCall: "OP $0.40 → $3.20 ✓", badges: ["Survivor 🛡️", "Layer 2 Believer", "Degen"], tier: "free", streakDays: 22, winRate: 52, totalCalls: 201, change24h: 0, lastActive: "3 hr ago" },
  { id: "10", username: "moonmath_quant", avatarSeed: "quant", degenScore: 6712, portfolioValue: "$234K", bestCall: "BNB $12 → $690 ✓", badges: ["Quant 📐", "Algo Trader", "Bot Builder"], tier: "pro", streakDays: 91, winRate: 69, totalCalls: 56, change24h: -1, lastActive: "1 hr ago" },
];

// Add random fluctuation to simulate real-time (replace with Supabase subscription)
function jitterScore(base: number): number {
  return base + Math.floor((Math.random() - 0.5) * 20);
}

function buildLeaderboard(seed = 0): LeaderboardEntry[] {
  const entries = MOCK_LEADERS.map((e, i) => ({
    ...e,
    rank: i + 1,
    degenScore: jitterScore(e.degenScore + seed),
  }));
  return entries.sort((a, b) => b.degenScore - a.degenScore).map((e, i) => ({ ...e, rank: i + 1 }));
}

// ── Tier badge ─────────────────────────────────────────────────────────────────

const TIER_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  free: { bg: "#30363d20", color: "#8b949e", label: "Free" },
  pro: { bg: "#6366f120", color: "#818cf8", label: "Pro ✦" },
  elite: { bg: "#f7931a20", color: "#f7931a", label: "Elite 💎" },
};

// ── Avatar ─────────────────────────────────────────────────────────────────────

const AVATAR_COLORS = ["#6366f1", "#06b6d4", "#f7931a", "#3fb950", "#f85149", "#bc8cff", "#f0883e", "#d29922"];

function AvatarIcon({ seed, size = 40 }: { seed: string; size?: number }) {
  const idx = seed.charCodeAt(0) % AVATAR_COLORS.length;
  const emoji = ["🦈", "🐋", "🦊", "🐸", "🦁", "🐯", "🦅", "🐲"][idx];
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: `${AVATAR_COLORS[idx]}30`,
      border: `2px solid ${AVATAR_COLORS[idx]}60`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.5,
    }}>
      {emoji}
    </div>
  );
}

// ── Rank medal ─────────────────────────────────────────────────────────────────

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <span style={{ fontSize: 22 }}>🥇</span>;
  if (rank === 2) return <span style={{ fontSize: 22 }}>🥈</span>;
  if (rank === 3) return <span style={{ fontSize: 22 }}>🥉</span>;
  return (
    <span style={{
      fontSize: 15, fontWeight: 900, color: "#8b949e",
      minWidth: 28, textAlign: "center", display: "inline-block",
    }}>
      #{rank}
    </span>
  );
}

// ── Change arrow ──────────────────────────────────────────────────────────────

function ChangeIndicator({ delta }: { delta: number }) {
  if (delta === 0) return <span style={{ color: "#8b949e", fontSize: 11 }}>–</span>;
  const up = delta > 0;
  return (
    <span style={{ color: up ? "#3fb950" : "#f85149", fontSize: 11, fontWeight: 700 }}>
      {up ? "▲" : "▼"}{Math.abs(delta)}
    </span>
  );
}

// ── Score bar ──────────────────────────────────────────────────────────────────

function ScoreBar({ score, max }: { score: number; max: number }) {
  const pct = Math.min((score / max) * 100, 100);
  return (
    <div style={{ height: 4, borderRadius: 2, background: "#30363d", width: 80, marginTop: 4 }}>
      <div style={{
        height: "100%", borderRadius: 2, width: `${pct}%`,
        background: "linear-gradient(90deg, #6366f1, #06b6d4)",
        transition: "width 0.5s ease",
      }} />
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState<LeaderboardEntry[]>(() => buildLeaderboard());
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "elite" | "pro" | "free">("all");
  const [liveMode, setLiveMode] = useState(true);

  const maxScore = leaders[0]?.degenScore ?? 10000;

  // ── Simulate real-time updates (replace with Supabase subscription) ─────────
  const refresh = useCallback(() => {
    setLeaders((prev) => {
      const newBoard = buildLeaderboard(Date.now() % 1000);
      // Find any rank changes
      const changed = newBoard.find((e, i) => e.id !== prev[i]?.id);
      if (changed) setHighlightId(changed.id);
      return newBoard;
    });
    setLastUpdate(new Date());
  }, []);

  useEffect(() => {
    if (!liveMode) return;
    const id = setInterval(refresh, 8000);
    return () => clearInterval(id);
  }, [liveMode, refresh]);

  useEffect(() => {
    if (!highlightId) return;
    const t = setTimeout(() => setHighlightId(null), 2000);
    return () => clearTimeout(t);
  }, [highlightId]);

  const filtered = filter === "all" ? leaders : leaders.filter((l) => l.tier === filter);

  return (
    <div style={{ background: "#0d1117", minHeight: "100vh", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* ── Header ── */}
      <div style={{
        background: "#161b22", borderBottom: "1px solid #30363d",
        padding: "24px 24px 20px", maxWidth: 900, margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 900, margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
              🏆 Degen Leaderboard
              <span style={{
                background: liveMode ? "#3fb95020" : "#30363d",
                color: liveMode ? "#3fb950" : "#8b949e",
                border: `1px solid ${liveMode ? "#3fb95040" : "#30363d"}`,
                borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700,
              }}>
                {liveMode ? "● LIVE" : "PAUSED"}
              </span>
            </h1>
            <p style={{ color: "#8b949e", fontSize: 13, marginTop: 4 }}>
              Updated {lastUpdate.toLocaleTimeString()} · {leaders.length} ranked degens · Sorted by Degen Score
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setLiveMode((v) => !v)}
              style={{
                background: liveMode ? "#3fb95015" : "#30363d",
                border: `1px solid ${liveMode ? "#3fb95040" : "#30363d"}`,
                color: liveMode ? "#3fb950" : "#8b949e",
                borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer",
              }}
            >
              {liveMode ? "⏸ Pause" : "▶ Resume"}
            </button>
            <Link href="/tools/degen-score" style={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              color: "white", padding: "7px 16px", borderRadius: 8,
              fontWeight: 700, fontSize: 12, textDecoration: "none",
            }}>
              Get Your Score →
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 24px" }}>

        {/* ── Tier filter ── */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          {(["all", "elite", "pro", "free"] as const).map((t) => (
            <button key={t} onClick={() => setFilter(t)} style={{
              background: filter === t ? "#6366f120" : "#161b22",
              border: `1px solid ${filter === t ? "#6366f160" : "#30363d"}`,
              color: filter === t ? "#818cf8" : "#8b949e",
              borderRadius: 8, padding: "5px 14px", fontSize: 12, fontWeight: 700,
              cursor: "pointer", textTransform: "capitalize",
            }}>
              {t === "all" ? "All Tiers" : t === "elite" ? "💎 Elite" : t === "pro" ? "✦ Pro" : "Free"}
            </button>
          ))}
          <div style={{ marginLeft: "auto", fontSize: 12, color: "#8b949e", display: "flex", alignItems: "center" }}>
            {filtered.length} players
          </div>
        </div>

        {/* ── Top 3 Podium ── */}
        {filter === "all" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: 12, marginBottom: 24 }}>
            {[leaders[1], leaders[0], leaders[2]].map((entry, podiumIdx) => {
              if (!entry) return <div key={podiumIdx} />;
              const isPrimary = podiumIdx === 1;
              const heights = ["120px", "148px", "110px"];
              return (
                <div key={entry.id} style={{
                  background: isPrimary ? "linear-gradient(135deg, #6366f115, #06b6d415)" : "#161b22",
                  border: `1px solid ${isPrimary ? "#6366f140" : "#30363d"}`,
                  borderRadius: 12, padding: "16px", textAlign: "center",
                  minHeight: heights[podiumIdx],
                }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
                    <AvatarIcon seed={entry.avatarSeed} size={isPrimary ? 52 : 40} />
                  </div>
                  <RankBadge rank={entry.rank} />
                  <div style={{ fontWeight: 800, fontSize: 13, marginTop: 4 }}>{entry.username}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#f7931a", marginTop: 4 }}>
                    {entry.degenScore.toLocaleString()}
                  </div>
                  <div style={{ fontSize: 10, color: "#8b949e" }}>Degen Score</div>
                  <div style={{ fontSize: 10, color: "#3fb950", marginTop: 6 }}>{entry.bestCall}</div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Full Table ── */}
        <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, overflow: "hidden" }}>
          {/* Table header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "60px 1fr 120px 100px 80px 80px 70px",
            gap: 8, padding: "10px 16px",
            borderBottom: "1px solid #30363d",
            fontSize: 10, fontWeight: 700, color: "#8b949e",
            textTransform: "uppercase", letterSpacing: "0.05em",
          }}>
            <div>Rank</div>
            <div>Player</div>
            <div>Best Call</div>
            <div>Portfolio</div>
            <div>Win %</div>
            <div>Score</div>
            <div>24h</div>
          </div>

          {/* Rows */}
          {filtered.map((entry) => (
            <div key={entry.id} style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr 120px 100px 80px 80px 70px",
              gap: 8, padding: "12px 16px",
              borderBottom: "1px solid #30363d22",
              alignItems: "center",
              background: highlightId === entry.id ? "#6366f108" : "transparent",
              transition: "background 0.5s ease",
            }}>
              {/* Rank */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RankBadge rank={entry.rank} />
              </div>
              {/* Player info */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                <AvatarIcon seed={entry.avatarSeed} size={32} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 700, fontSize: 13, color: "#e6edf3" }}>{entry.username}</span>
                    <span style={{
                      background: TIER_STYLE[entry.tier].bg,
                      color: TIER_STYLE[entry.tier].color,
                      borderRadius: 4, padding: "1px 6px", fontSize: 9, fontWeight: 700,
                    }}>{TIER_STYLE[entry.tier].label}</span>
                  </div>
                  <div style={{ fontSize: 10, color: "#8b949e", marginTop: 2 }}>
                    🔥 {entry.streakDays}d streak · {entry.lastActive}
                  </div>
                  <div style={{ display: "flex", gap: 4, marginTop: 4, flexWrap: "wrap" }}>
                    {entry.badges.slice(0, 2).map((b) => (
                      <span key={b} style={{ fontSize: 9, background: "#30363d", color: "#8b949e", padding: "1px 5px", borderRadius: 3 }}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Best call */}
              <div style={{ fontSize: 11, color: "#3fb950", fontWeight: 600 }}>{entry.bestCall}</div>
              {/* Portfolio */}
              <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3" }}>{entry.portfolioValue}</div>
              {/* Win rate */}
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: entry.winRate >= 70 ? "#3fb950" : entry.winRate >= 55 ? "#d29922" : "#8b949e" }}>
                  {entry.winRate}%
                </div>
                <div style={{ fontSize: 10, color: "#8b949e" }}>{entry.totalCalls} calls</div>
              </div>
              {/* Score */}
              <div>
                <div style={{ fontSize: 13, fontWeight: 900, color: "#f7931a" }}>
                  {entry.degenScore.toLocaleString()}
                </div>
                <ScoreBar score={entry.degenScore} max={maxScore} />
              </div>
              {/* 24h change */}
              <div style={{ textAlign: "center" }}>
                <ChangeIndicator delta={entry.change24h} />
              </div>
            </div>
          ))}
        </div>

        {/* ── Supabase backend notice ── */}
        <div style={{
          marginTop: 20, background: "#161b22", border: "1px solid #30363d", borderRadius: 10,
          padding: "14px 18px", display: "flex", gap: 12, alignItems: "flex-start",
        }}>
          <span style={{ fontSize: 20 }}>⚡</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3", marginBottom: 4 }}>
              Real-Time Backend Ready (Needs Supabase)
            </div>
            <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
              This leaderboard is fully wired for Supabase real-time subscriptions. Add{" "}
              <code style={{ color: "#58a6ff", background: "#30363d", padding: "1px 5px", borderRadius: 3 }}>
                NEXT_PUBLIC_SUPABASE_URL
              </code>{" "}
              +{" "}
              <code style={{ color: "#58a6ff", background: "#30363d", padding: "1px 5px", borderRadius: 3 }}>
                NEXT_PUBLIC_SUPABASE_ANON_KEY
              </code>{" "}
              to activate live scores. SQL schema is in the file header.
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{
          marginTop: 20, textAlign: "center",
          background: "linear-gradient(135deg, #6366f115, #06b6d415)",
          border: "1px solid #6366f130", borderRadius: 12, padding: "24px",
        }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>🎮</div>
          <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Get Your Degen Score</div>
          <div style={{ color: "#8b949e", fontSize: 13, marginBottom: 16 }}>
            Take the quiz and find your rank among 10,000+ degens
          </div>
          <Link href="/tools/degen-score" style={{
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            color: "white", padding: "10px 24px", borderRadius: 8,
            fontWeight: 700, fontSize: 14, textDecoration: "none",
          }}>
            Calculate My Score →
          </Link>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Leaderboard",
              "url": "https://degen0x.com/tools/leaderboard",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
