"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* ─── Types ─────────────────────────────────────────────────── */
interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Challenge {
  id: string;
  date: string; // YYYY-MM-DD
  theme: string;
  themeIcon: string;
  themeColor: string;
  question: string;
  difficulty: "easy" | "medium" | "hard";
  xpReward: number;
  streakBonus: number;
  options: QuizOption[];
  explanation: string;
  learnMoreUrl?: string;
  funFact?: string;
}

type ChallengeState = "idle" | "answering" | "correct" | "wrong" | "already-done";

/* ─── Daily challenges pool ──────────────────────────────────── */
const CHALLENGES: Challenge[] = [
  {
    id: "dc-001",
    date: "2026-03-14",
    theme: "Bitcoin Basics",
    themeIcon: "₿",
    themeColor: "#f0883e",
    question: "What is the maximum supply of Bitcoin that will ever exist?",
    difficulty: "easy",
    xpReward: 75,
    streakBonus: 25,
    options: [
      { id: "a", text: "18 million BTC", isCorrect: false },
      { id: "b", text: "21 million BTC", isCorrect: true },
      { id: "c", text: "100 million BTC", isCorrect: false },
      { id: "d", text: "There is no maximum supply", isCorrect: false },
    ],
    explanation: "Bitcoin has a hard cap of **21 million BTC**, written into its code by Satoshi Nakamoto. About 19.6M have already been mined. The last Bitcoin is estimated to be mined around year 2140.",
    learnMoreUrl: "/learn/bitcoin-20-million-supply-milestone",
    funFact: "About 3-4 million BTC are estimated to be permanently lost — making the effective supply even scarcer 💀",
  },
  {
    id: "dc-002",
    date: "2026-03-13",
    theme: "DeFi",
    themeIcon: "🌾",
    themeColor: "#3fb950",
    question: "What does 'TVL' stand for in DeFi?",
    difficulty: "easy",
    xpReward: 75,
    streakBonus: 25,
    options: [
      { id: "a", text: "Total Volume Locked", isCorrect: false },
      { id: "b", text: "Transaction Velocity Limit", isCorrect: false },
      { id: "c", text: "Total Value Locked", isCorrect: true },
      { id: "d", text: "Token Velocity Liquidity", isCorrect: false },
    ],
    explanation: "**Total Value Locked (TVL)** represents the total amount of assets deposited in a DeFi protocol. It's a key metric for measuring the size and health of a protocol.",
    learnMoreUrl: "/learn/defi-metrics",
    funFact: "At peak bull market, total DeFi TVL exceeded $180 billion across all protocols 🤯",
  },
  {
    id: "dc-003",
    date: "2026-03-12",
    theme: "Layer 2s",
    themeIcon: "⚡",
    themeColor: "#58a6ff",
    question: "Which technology do Optimism and Arbitrum use to reduce Ethereum gas fees?",
    difficulty: "medium",
    xpReward: 100,
    streakBonus: 35,
    options: [
      { id: "a", text: "Zero-Knowledge Proofs", isCorrect: false },
      { id: "b", text: "Optimistic Rollups", isCorrect: true },
      { id: "c", text: "Plasma Chains", isCorrect: false },
      { id: "d", text: "State Channels", isCorrect: false },
    ],
    explanation: "Both Optimism and Arbitrum use **Optimistic Rollups**, which bundle hundreds of transactions off-chain and post them to Ethereum with a fraud proof window (usually 7 days).",
    learnMoreUrl: "/learn/layer2-rollups",
    funFact: "Optimistic rollups assume transactions are valid unless challenged — that's why they're 'optimistic' 🤙",
  },
  {
    id: "dc-004",
    date: "2026-03-11",
    theme: "NFTs",
    themeIcon: "🖼️",
    themeColor: "#bc8cff",
    question: "What token standard do most Ethereum NFTs use?",
    difficulty: "easy",
    xpReward: 75,
    streakBonus: 25,
    options: [
      { id: "a", text: "ERC-20", isCorrect: false },
      { id: "b", text: "ERC-721", isCorrect: true },
      { id: "c", text: "ERC-1155", isCorrect: false },
      { id: "d", text: "ERC-4337", isCorrect: false },
    ],
    explanation: "**ERC-721** is the original NFT standard where each token is unique. ERC-1155 supports both fungible and non-fungible tokens in one contract, making it more efficient for games.",
    learnMoreUrl: "/learn/nft-standards",
  },
  {
    id: "dc-005",
    date: "2026-03-10",
    theme: "Solana",
    themeIcon: "◎",
    themeColor: "#9945ff",
    question: "Solana uses 'Proof of History' — what does this mechanism primarily improve?",
    difficulty: "hard",
    xpReward: 150,
    streakBonus: 50,
    options: [
      { id: "a", text: "Transaction privacy and anonymity", isCorrect: false },
      { id: "b", text: "Smart contract execution speed", isCorrect: false },
      { id: "c", text: "Network throughput and validator efficiency", isCorrect: true },
      { id: "d", text: "Cross-chain bridge security", isCorrect: false },
    ],
    explanation: "**Proof of History (PoH)** is a cryptographic clock that allows Solana validators to agree on time without coordinating. This dramatically reduces messaging overhead and enables 65,000+ TPS.",
    learnMoreUrl: "/learn/solana-poh",
    funFact: "Solana's PoH was invented by Anatoly Yakovenko, a former Qualcomm engineer who applied telecommunications concepts to blockchain 🧠",
  },
];

/* ─── Difficulty badge ───────────────────────────────────────── */
const DIFF_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  easy: { bg: "rgba(63,185,80,0.15)", text: "#3fb950", label: "Easy" },
  medium: { bg: "rgba(210,153,34,0.15)", text: "#d29922", label: "Medium" },
  hard: { bg: "rgba(248,81,73,0.15)", text: "#f85149", label: "Hard" },
};

function DiffBadge({ level }: { level: "easy" | "medium" | "hard" }) {
  const c = DIFF_COLORS[level];
  return (
    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: c.bg, color: c.text }}>
      {c.label}
    </span>
  );
}

/* ─── Animated XP popup ──────────────────────────────────────── */
function XPPopup({ xp, visible }: { xp: number; visible: boolean }) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(-50%, -60px)" : "translate(-50%, 0)",
      }}
    >
      <div
        className="px-4 py-2 rounded-full text-lg font-black"
        style={{
          background: "linear-gradient(135deg, #3fb950, #06b6d4)",
          color: "white",
          boxShadow: "0 4px 20px rgba(63,185,80,0.5)",
        }}
      >
        +{xp} XP ⚡
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function DailyChallenge({ compact = false }: { compact?: boolean }) {
  const todayChallenge = CHALLENGES[0]; // In prod: fetch based on today's date
  const [state, setState] = useState<ChallengeState>("idle");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [streak, setStreak] = useState(12);
  const [showXP, setShowXP] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const [pastChallenges] = useState(CHALLENGES.slice(1));
  // Hydration-safe: read localStorage only client-side, after mount
  const [pastResults, setPastResults] = useState<Record<string, string>>({});
  const hasMounted = useRef(false);

  // Hydration-safe localStorage reads — only after mount
  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    try {
      // Today's challenge
      const done = localStorage.getItem(`dc_done_${todayChallenge.id}`);
      if (done) setState("already-done");

      // Past challenge results (avoids calling localStorage inside render)
      const results: Record<string, string> = {};
      for (const ch of CHALLENGES.slice(1)) {
        const r = localStorage.getItem(`dc_done_${ch.id}`);
        if (r) results[ch.id] = r;
      }
      setPastResults(results);
    } catch {}
  }, [todayChallenge.id]);

  // Countdown to next challenge
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${h}h ${m}m ${s}s`);
    };
    updateCountdown();
    const t = setInterval(updateCountdown, 1000);
    return () => clearInterval(t);
  }, []);

  const handleAnswer = useCallback((optionId: string) => {
    if (state !== "idle" && state !== "answering") return;
    setSelectedOption(optionId);
    setState("answering");

    setTimeout(() => {
      const correct = todayChallenge.options.find((o) => o.id === optionId)?.isCorrect;
      if (correct) {
        setState("correct");
        setShowXP(true);
        setStreak((s) => s + 1);
        try {
          localStorage.setItem(`dc_done_${todayChallenge.id}`, "correct");
        } catch {}
        setTimeout(() => setShowXP(false), 1500);
      } else {
        setState("wrong");
        try {
          localStorage.setItem(`dc_done_${todayChallenge.id}`, "wrong");
        } catch {}
      }
    }, 600);
  }, [state, todayChallenge]);

  const totalXP = todayChallenge.xpReward + (state === "correct" ? todayChallenge.streakBonus : 0);

  const getOptionStyle = (opt: QuizOption): React.CSSProperties => {
    const isSelected = selectedOption === opt.id;
    const revealed = state === "correct" || state === "wrong";
    if (!revealed) {
      return {
        background: isSelected ? "rgba(99,102,241,0.15)" : "var(--surface2, #1c2330)",
        border: `1px solid ${isSelected ? "#6366f1" : "var(--border, #30363d)"}`,
        color: "var(--text, #e6edf3)",
      };
    }
    if (opt.isCorrect) return { background: "rgba(63,185,80,0.15)", border: "1px solid #3fb950", color: "#3fb950" };
    if (isSelected && !opt.isCorrect) return { background: "rgba(248,81,73,0.15)", border: "1px solid #f85149", color: "#f85149" };
    return { background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--text2)", opacity: 0.5 };
  };

  /* ── Compact mode (widget) ── */
  if (compact) {
    return (
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: "var(--surface, #161b22)", border: "1px solid var(--border, #30363d)" }}
      >
        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{ background: `linear-gradient(135deg, ${todayChallenge.themeColor}15, transparent)`, borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">{todayChallenge.themeIcon}</span>
            <div>
              <div className="text-xs font-bold" style={{ color: todayChallenge.themeColor }}>DAILY CHALLENGE</div>
              <div className="text-sm font-semibold">{todayChallenge.theme}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs" style={{ color: "var(--text2)" }}>🔥 {streak} day streak</div>
            <div className="text-xs font-bold" style={{ color: "#f0883e" }}>+{totalXP} XP</div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm font-semibold mb-3">{todayChallenge.question}</p>
          {state === "already-done" ? (
            <div className="text-center py-2">
              <div className="text-2xl mb-1">✅</div>
              <p className="text-sm" style={{ color: "var(--text2)" }}>Done for today!</p>
              <p className="text-xs mt-1" style={{ color: "var(--text2)" }}>Next challenge in {timeLeft}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {todayChallenge.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleAnswer(opt.id)}
                  disabled={state === "correct" || state === "wrong"}
                  aria-label={`Option ${opt.id.toUpperCase()}: ${opt.text}`}
                  className="px-3 py-3 rounded-xl text-xs font-semibold text-left transition-all min-h-[44px]"
                  style={getOptionStyle(opt)}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  /* ── Full mode ── */
  return (
    <div className="min-h-screen" style={{ background: "var(--bg, #0d1117)", color: "var(--text, #e6edf3)" }}>
      {/* Header */}
      <div
        className="px-4 py-5"
        style={{ background: "var(--surface, #161b22)", borderBottom: "1px solid var(--border, #30363d)" }}
      >
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-black">⚡ Daily Challenge</h1>
              <p className="text-xs mt-0.5" style={{ color: "var(--text2)" }}>
                One question. Every day. Get smarter about crypto.
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs" style={{ color: "var(--text2)" }}>Next in</div>
              <div className="text-sm font-black" style={{ color: "#58a6ff" }}>{timeLeft}</div>
            </div>
          </div>

          {/* Streak bar */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl">🔥</span>
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span style={{ color: "var(--text2)" }}>Streak: <strong style={{ color: "var(--text)" }}>{streak} days</strong></span>
                <span style={{ color: "var(--text2)" }}>Best: 34 days</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--surface2)" }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${Math.min(100, (streak / 34) * 100)}%`,
                    background: "linear-gradient(90deg, #f0883e, #f85149)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 py-6 space-y-4">
        {/* Challenge card */}
        <div
          className="rounded-2xl overflow-hidden relative"
          style={{ background: "var(--surface, #161b22)", border: "1px solid var(--border, #30363d)" }}
        >
          {/* Theme header */}
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{
              background: `linear-gradient(135deg, ${todayChallenge.themeColor}20, transparent)`,
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{todayChallenge.themeIcon}</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color: todayChallenge.themeColor }}>
                  Today's Theme
                </div>
                <div className="font-bold">{todayChallenge.theme}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DiffBadge level={todayChallenge.difficulty} />
            </div>
          </div>

          {/* XP popup */}
          <div className="relative px-5 pt-5">
            <XPPopup xp={totalXP} visible={showXP} />

            {/* XP reward display */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-bold"
                style={{ background: "rgba(240,136,62,0.12)", border: "1px solid rgba(240,136,62,0.25)", color: "#f0883e" }}
              >
                ⚡ +{todayChallenge.xpReward} XP
              </div>
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-bold"
                style={{ background: "rgba(63,185,80,0.12)", border: "1px solid rgba(63,185,80,0.25)", color: "#3fb950" }}
              >
                🔥 +{todayChallenge.streakBonus} streak bonus
              </div>
            </div>

            {/* Question */}
            <p className="text-lg font-bold mb-5 leading-snug">{todayChallenge.question}</p>

            {/* Already done */}
            {state === "already-done" ? (
              <div
                className="text-center py-8 px-4 rounded-xl mb-5"
                style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}
              >
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-lg font-bold mb-1">Challenge Complete!</h3>
                <p className="text-sm" style={{ color: "var(--text2)" }}>
                  You already answered today's challenge. Come back in{" "}
                  <strong style={{ color: "#58a6ff" }}>{timeLeft}</strong>
                </p>
              </div>
            ) : (
              /* Options */
              <div className="space-y-3 mb-5">
                {todayChallenge.options.map((opt) => {
                  const revealed = state === "correct" || state === "wrong";
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleAnswer(opt.id)}
                      disabled={revealed}
                      aria-label={`Option ${opt.id.toUpperCase()}: ${opt.text}`}
                      aria-pressed={selectedOption === opt.id}
                      className="w-full px-4 py-4 rounded-xl text-left font-semibold transition-all duration-300 flex items-center gap-3"
                      style={getOptionStyle(opt)}
                    >
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          color: "inherit",
                        }}
                      >
                        {opt.id.toUpperCase()}
                      </span>
                      <span>{opt.text}</span>
                      {(revealed) && opt.isCorrect && <span className="ml-auto text-lg">✅</span>}
                      {(revealed) && selectedOption === opt.id && !opt.isCorrect && <span className="ml-auto text-lg">❌</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Result explanation */}
          {(state === "correct" || state === "wrong") && (
            <div
              className="mx-5 mb-5 p-4 rounded-xl"
              style={{
                background: state === "correct" ? "rgba(63,185,80,0.08)" : "rgba(248,81,73,0.08)",
                border: `1px solid ${state === "correct" ? "rgba(63,185,80,0.25)" : "rgba(248,81,73,0.25)"}`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{state === "correct" ? "🎉" : "😅"}</span>
                <span className="font-bold" style={{ color: state === "correct" ? "#3fb950" : "#f85149" }}>
                  {state === "correct" ? `Correct! +${totalXP} XP earned` : "Not quite — here's why:"}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text2)" }}
                dangerouslySetInnerHTML={{
                  __html: todayChallenge.explanation.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text)">$1</strong>'),
                }}
              />
              {todayChallenge.funFact && (
                <div
                  className="mt-3 px-3 py-2 rounded-lg text-xs"
                  style={{ background: "rgba(88,166,255,0.08)", color: "#58a6ff" }}
                >
                  💡 {todayChallenge.funFact}
                </div>
              )}
              {todayChallenge.learnMoreUrl && (
                <a
                  href={todayChallenge.learnMoreUrl}
                  className="inline-flex items-center gap-1 text-xs font-semibold mt-3 underline"
                  style={{ color: "#818cf8" }}
                >
                  Deep dive →
                </a>
              )}
            </div>
          )}
        </div>

        {/* Past challenges */}
        <div>
          <h2 className="text-sm font-bold mb-3 px-1" style={{ color: "var(--text2)" }}>
            PAST CHALLENGES
          </h2>
          <div className="space-y-2">
            {pastChallenges.map((ch) => {
              const done = pastResults[ch.id] ?? null;
              return (
                <div
                  key={ch.id}
                  className="rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <span className="text-xl">{ch.themeIcon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">{ch.question}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text2)" }}>
                      {ch.theme} · {ch.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <DiffBadge level={ch.difficulty} />
                    <span className="text-sm">
                      {done === "correct" ? "✅" : done === "wrong" ? "❌" : "⬜"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-5 text-center"
          style={{ background: "linear-gradient(135deg, rgba(240,136,62,0.12), rgba(248,81,73,0.08))", border: "1px solid rgba(240,136,62,0.2)" }}
        >
          <p className="text-sm font-semibold mb-1">🔥 Keep your streak alive!</p>
          <p className="text-xs mb-4" style={{ color: "var(--text2)" }}>
            Come back every day. Longer streaks = bigger XP multipliers.
          </p>
          <a
            href="/courses"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #f0883e, #f85149)", boxShadow: "0 4px 15px rgba(240,136,62,0.3)" }}
          >
            Explore Courses to Earn More →
          </a>
        </div>
      </div>
    </div>
  );
}
