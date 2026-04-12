'use client';

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type RiskProfile = "conservative" | "moderate" | "aggressive" | "degen";
type TimeHorizon = "short" | "medium" | "long" | "forever";
type ExperienceLevel = "beginner" | "intermediate" | "advanced" | "whale";

type Allocation = {
  symbol: string;
  name: string;
  pct: number;
  color: string;
  emoji: string;
  rationale: string;
  category: "large-cap" | "mid-cap" | "defi" | "stablecoin" | "emerging";
};

type Portfolio = {
  name: string;
  emoji: string;
  description: string;
  expectedReturn: string;
  riskLevel: string;
  allocations: Allocation[];
  tags: string[];
};

const PORTFOLIOS: Record<string, Portfolio> = {
  conservative: {
    name: "The Hodler",
    emoji: "🛡️",
    description: "Capital preservation with steady upside. Dominated by blue-chip assets and stablecoins to weather any storm.",
    expectedReturn: "20–80% in a bull market",
    riskLevel: "Low",
    tags: ["Bitcoin-heavy", "Stablecoin buffer", "Low volatility"],
    allocations: [
      { symbol: "BTC", name: "Bitcoin", pct: 50, color: "#F7931A", emoji: "₿", category: "large-cap", rationale: "Digital gold. The safest crypto bet with deepest liquidity and institutional backing." },
      { symbol: "ETH", name: "Ethereum", pct: 25, color: "#627EEA", emoji: "Ξ", category: "large-cap", rationale: "The foundational smart contract platform. Powers DeFi, NFTs, and Web3." },
      { symbol: "USDC", name: "USD Coin", pct: 15, color: "#2775CA", emoji: "💵", category: "stablecoin", rationale: "Dollar-pegged safety buffer. Earn 5-8% yield on Aave/Compound." },
      { symbol: "BNB", name: "BNB", pct: 10, color: "#F3BA2F", emoji: "⬡", category: "large-cap", rationale: "Binance ecosystem token. Burns regularly, exchange fee discounts, stable demand." },
    ],
  },
  moderate: {
    name: "The Balanced Bull",
    emoji: "⚖️",
    description: "Best of both worlds. Strong blue-chips as foundation with strategic mid-cap bets for higher upside.",
    expectedReturn: "100–400% in a bull market",
    riskLevel: "Medium",
    tags: ["Diversified", "Blue-chip + growth", "Balanced risk"],
    allocations: [
      { symbol: "BTC", name: "Bitcoin", pct: 35, color: "#F7931A", emoji: "₿", category: "large-cap", rationale: "Dominant store of value. Must-hold anchor for any serious portfolio." },
      { symbol: "ETH", name: "Ethereum", pct: 25, color: "#627EEA", emoji: "Ξ", category: "large-cap", rationale: "King of smart contracts with massive ecosystem and institutional backing." },
      { symbol: "SOL", name: "Solana", pct: 15, color: "#9945FF", emoji: "◎", category: "large-cap", rationale: "High-speed, low-fee blockchain with rapid developer adoption and DeFi growth." },
      { symbol: "AVAX", name: "Avalanche", pct: 10, color: "#E84142", emoji: "🔺", category: "mid-cap", rationale: "Sub-second finality, EVM-compatible chain powering institutional DeFi." },
      { symbol: "LINK", name: "Chainlink", pct: 10, color: "#375BD2", emoji: "⬡", category: "defi", rationale: "Critical oracle infrastructure. Every DeFi protocol depends on Chainlink data." },
      { symbol: "MATIC", name: "Polygon", pct: 5, color: "#8247E5", emoji: "⬡", category: "mid-cap", rationale: "Ethereum Layer 2 with massive enterprise adoption (Starbucks, Nike, Reddit)." },
    ],
  },
  aggressive: {
    name: "The Alpha Seeker",
    emoji: "🚀",
    description: "Maximum growth potential. Concentrates in high-momentum narratives and emerging L1/L2s with breakout potential.",
    expectedReturn: "500–2000% at cycle peak",
    riskLevel: "High",
    tags: ["Narrative plays", "High upside", "Requires conviction"],
    allocations: [
      { symbol: "BTC", name: "Bitcoin", pct: 20, color: "#F7931A", emoji: "₿", category: "large-cap", rationale: "Minimum blue-chip anchor. Still the tide that lifts all boats." },
      { symbol: "ETH", name: "Ethereum", pct: 15, color: "#627EEA", emoji: "Ξ", category: "large-cap", rationale: "ETH ETF approval + staking yield = institutional narrative." },
      { symbol: "SOL", name: "Solana", pct: 15, color: "#9945FF", emoji: "◎", category: "large-cap", rationale: "Memecoins, DePIN, and consumer apps driving massive on-chain activity." },
      { symbol: "SUI", name: "Sui", pct: 10, color: "#4DA2FF", emoji: "💧", category: "emerging", rationale: "Move-language L1 with breakout DeFi TVL and gaming ecosystem growth." },
      { symbol: "INJ", name: "Injective", pct: 8, color: "#00BFFF", emoji: "🌊", category: "defi", rationale: "Purpose-built DeFi chain for derivatives and finance-native applications." },
      { symbol: "JUP", name: "Jupiter", pct: 8, color: "#FFC107", emoji: "☄️", category: "defi", rationale: "Solana DEX aggregator with massive retail volume and token buybacks." },
      { symbol: "RENDER", name: "Render Network", pct: 7, color: "#FF6B35", emoji: "🎨", category: "emerging", rationale: "Decentralized GPU rendering. AI + Web3 intersection narrative." },
      { symbol: "WIF", name: "dogwifhat", pct: 7, color: "#FF69B4", emoji: "🐕", category: "emerging", rationale: "Top Solana memecoin with dedicated community and exchange listings." },
      { symbol: "PEPE", name: "Pepe", pct: 5, color: "#00CC44", emoji: "🐸", category: "emerging", rationale: "Cultural memecoin phenomenon. High-risk viral upside play." },
      { symbol: "USDC", name: "USDC (dry powder)", pct: 5, color: "#2775CA", emoji: "💵", category: "stablecoin", rationale: "Dry powder for buying dips on the way up." },
    ],
  },
  degen: {
    name: "The Full Degen",
    emoji: "💀",
    description: "Absolute maximum risk for maximum reward. Diamond hands or bust. Only for those who can lose it all and still sleep.",
    expectedReturn: "10x–100x or ZERO",
    riskLevel: "Extreme",
    tags: ["Meme plays", "Micro-caps", "YOLO allocation", "Not financial advice lol"],
    allocations: [
      { symbol: "SOL", name: "Solana", pct: 20, color: "#9945FF", emoji: "◎", category: "large-cap", rationale: "Meme launchpad and retail chain of choice. Everything launches here." },
      { symbol: "WIF", name: "dogwifhat", pct: 15, color: "#FF69B4", emoji: "🐕", category: "emerging", rationale: "Solana's flagship memecoin. Tier-1 exchange listings, $1B+ market cap." },
      { symbol: "BONK", name: "Bonk", pct: 12, color: "#FF6B35", emoji: "🔨", category: "emerging", rationale: "OG Solana dog coin with massive community and use cases in Solana DeFi." },
      { symbol: "PEPE", name: "Pepe", pct: 12, color: "#00CC44", emoji: "🐸", category: "emerging", rationale: "Ethereum's biggest memecoin. Massive cultural momentum and retail hype." },
      { symbol: "FLOKI", name: "Floki", pct: 8, color: "#F05E23", emoji: "⚡", category: "emerging", rationale: "Cross-chain Viking meme with actual utility: Valhalla metaverse & FlokiFi." },
      { symbol: "JUP", name: "Jupiter", pct: 8, color: "#FFC107", emoji: "☄️", category: "defi", rationale: "Solana DEX king. Buyback mechanism provides real token utility." },
      { symbol: "AI16Z", name: "ai16z", pct: 7, color: "#8B5CF6", emoji: "🤖", category: "emerging", rationale: "The flagship AI agent token. Eliza framework has 10K+ GitHub stars." },
      { symbol: "GOAT", name: "Goat", pct: 7, color: "#FF9D00", emoji: "🐐", category: "emerging", rationale: "AI agent memecoin that started the AI agents narrative in crypto." },
      { symbol: "BTC", name: "Bitcoin", pct: 6, color: "#F7931A", emoji: "₿", category: "large-cap", rationale: "Even degens need some adult supervision in the portfolio." },
      { symbol: "USDC", name: "USDC", pct: 5, color: "#2775CA", emoji: "💵", category: "stablecoin", rationale: "For sniping launch drops and dip buying." },
    ],
  },
};

const QUESTIONS = [
  {
    id: "risk",
    question: "If your portfolio dropped 50% overnight, what would you do?",
    options: [
      { value: "conservative", label: "Sell everything and buy bonds", emoji: "😰" },
      { value: "moderate", label: "Hold and wait for recovery", emoji: "😐" },
      { value: "aggressive", label: "Hold and buy more on the dip", emoji: "😤" },
      { value: "degen", label: "Max out credit card to buy more", emoji: "🤡" },
    ],
  },
  {
    id: "horizon",
    question: "How long are you planning to invest?",
    options: [
      { value: "short", label: "Less than 1 year", emoji: "⚡" },
      { value: "medium", label: "1–3 years", emoji: "📅" },
      { value: "long", label: "3–5 years", emoji: "🌱" },
      { value: "forever", label: "Never selling (generational wealth)", emoji: "♾️" },
    ],
  },
  {
    id: "experience",
    question: "What's your crypto experience level?",
    options: [
      { value: "beginner", label: "I just heard about Bitcoin", emoji: "🐣" },
      { value: "intermediate", label: "I've bought on Coinbase/Binance", emoji: "📊" },
      { value: "advanced", label: "I use DeFi, staking, and hardware wallets", emoji: "🧠" },
      { value: "whale", label: "I've been through multiple cycles", emoji: "🐋" },
    ],
  },
];

const RISK_MAP: Record<string, Record<string, number>> = {
  conservative: { conservative: 3, moderate: 1, aggressive: 0, degen: -2 },
  moderate:     { conservative: 1, moderate: 2, aggressive: 1, degen: -1 },
  aggressive:   { conservative: 0, moderate: 1, aggressive: 2, degen: 1 },
  degen:        { conservative: -1, moderate: 0, aggressive: 1, degen: 3 },
};
const HORIZON_MAP: Record<string, Record<string, number>> = {
  short:   { conservative: 2, moderate: 1, aggressive: -1, degen: -2 },
  medium:  { conservative: 1, moderate: 2, aggressive: 1, degen: 0 },
  long:    { conservative: 0, moderate: 1, aggressive: 2, degen: 1 },
  forever: { conservative: -1, moderate: 0, aggressive: 2, degen: 2 },
};
const EXP_MAP: Record<string, Record<string, number>> = {
  beginner:    { conservative: 2, moderate: 1, aggressive: -1, degen: -3 },
  intermediate:{ conservative: 1, moderate: 2, aggressive: 1, degen: 0 },
  advanced:    { conservative: 0, moderate: 1, aggressive: 2, degen: 1 },
  whale:       { conservative: -1, moderate: 0, aggressive: 1, degen: 2 },
};

export default function RoboAdvisorPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0); // 0 = quiz, 1 = result
  const [investAmount, setInvestAmount] = useState(10000);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const recommendedProfile = useMemo((): RiskProfile => {
    if (Object.keys(answers).length < 3) return "moderate";
    const scores: Record<string, number> = { conservative: 0, moderate: 0, aggressive: 0, degen: 0 };
    const r = answers.risk || "moderate";
    const h = answers.horizon || "medium";
    const e = answers.experience || "intermediate";
    for (const profile of Object.keys(scores) as RiskProfile[]) {
      scores[profile] += (RISK_MAP[r]?.[profile] || 0);
      scores[profile] += (HORIZON_MAP[h]?.[profile] || 0);
      scores[profile] += (EXP_MAP[e]?.[profile] || 0);
    }
    return Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0] as RiskProfile;
  }, [answers]);

  const [selectedProfile, setSelectedProfile] = useState<RiskProfile | null>(null);
  const activeProfile = selectedProfile || recommendedProfile;
  const portfolio = PORTFOLIOS[activeProfile];

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep(1);
    }
  };

  const fmt = (n: number) =>
    n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` :
    n >= 1e3 ? `$${(n / 1e3).toFixed(1)}K` :
    `$${n.toFixed(0)}`;

  const CATEGORY_LABELS: Record<string, string> = {
    "large-cap": "🔵 Large Cap",
    "mid-cap": "🟡 Mid Cap",
    "defi": "⚡ DeFi",
    "stablecoin": "💵 Stablecoin",
    "emerging": "🚀 Emerging",
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="text-sm font-semibold mb-2" style={{ color: "#818cf8" }}>
            <Link href="/tools">Tools</Link> › Crypto Robo-Advisor
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "var(--color-text)" }}>
            🤖 Crypto Portfolio Advisor
          </h1>
          <p style={{ color: "var(--color-text-secondary)" }}>
            Answer 3 questions. Get a personalized crypto portfolio allocation built for your risk tolerance and goals.
          </p>
        </div>

        {/* Quiz Step */}
        {step === 0 && (
          <div className="glass rounded-2xl p-6">
            {/* Progress */}
            <div className="flex gap-2 mb-6">
              {QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1.5 rounded-full"
                  style={{ background: i <= currentQuestion ? "#6366f1" : "#30363d" }}
                />
              ))}
            </div>

            <div className="mb-2 text-xs font-bold" style={{ color: "var(--color-text-secondary)" }}>
              QUESTION {currentQuestion + 1} OF {QUESTIONS.length}
            </div>
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
              {QUESTIONS[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {QUESTIONS[currentQuestion].options.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(QUESTIONS[currentQuestion].id, opt.value)}
                  className="w-full text-left p-4 rounded-xl font-semibold transition-all hover:scale-[1.01]"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid #30363d",
                    color: "var(--color-text)",
                  }}
                >
                  <span className="mr-3 text-lg">{opt.emoji}</span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result Step */}
        {step === 1 && (
          <>
            {/* Profile Header */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{
                background: "linear-gradient(135deg, #0d1117, #1a1040)",
                border: "2px solid #6366f1",
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-xs font-bold mb-1" style={{ color: "#818cf8" }}>YOUR RECOMMENDED PROFILE</div>
                  <div className="text-3xl font-extrabold" style={{ color: "var(--color-text)" }}>
                    {portfolio.emoji} {portfolio.name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>Expected Return</div>
                  <div className="text-sm font-bold" style={{ color: "#3fb950" }}>{portfolio.expectedReturn}</div>
                </div>
              </div>
              <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>{portfolio.description}</p>
              <div className="flex flex-wrap gap-2">
                {portfolio.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full" style={{ background: "#6366f120", color: "#818cf8", border: "1px solid #6366f130" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Switch Profile */}
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className="text-sm self-center" style={{ color: "var(--color-text-secondary)" }}>Switch profile:</span>
              {(["conservative", "moderate", "aggressive", "degen"] as RiskProfile[]).map(p => (
                <button
                  key={p}
                  onClick={() => setSelectedProfile(p)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold capitalize"
                  style={{
                    background: activeProfile === p ? "#6366f1" : "var(--color-surface)",
                    color: activeProfile === p ? "white" : "var(--color-text-secondary)",
                    border: "1px solid #30363d",
                  }}
                >
                  {PORTFOLIOS[p].emoji} {PORTFOLIOS[p].name}
                  {p === recommendedProfile && activeProfile !== p && (
                    <span className="ml-1 text-[10px]" style={{ color: "#3fb950" }}>★ rec</span>
                  )}
                </button>
              ))}
            </div>

            {/* Investment Amount */}
            <div className="glass rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>Investment Amount</label>
                <span className="text-lg font-extrabold" style={{ color: "#6366f1" }}>{fmt(investAmount)}</span>
              </div>
              <input
                type="range" min={500} max={100000} step={500}
                value={investAmount}
                onChange={e => setInvestAmount(Number(e.target.value))}
                className="w-full accent-indigo-500"
              />
            </div>

            {/* Allocation */}
            <div className="glass rounded-2xl p-6 mb-6">
              <h3 className="font-bold mb-4" style={{ color: "var(--color-text)" }}>Portfolio Allocation</h3>

              {/* Visual Bar */}
              <div className="flex h-5 rounded-full overflow-hidden mb-4">
                {portfolio.allocations.map(a => (
                  <div
                    key={a.symbol}
                    style={{ width: `${a.pct}%`, background: a.color }}
                    title={`${a.symbol}: ${a.pct}%`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-2 mb-6">
                {portfolio.allocations.map(a => (
                  <div key={a.symbol} className="flex items-center gap-1 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: a.color }} />
                    <span style={{ color: "var(--color-text)" }}>{a.symbol}</span>
                  </div>
                ))}
              </div>

              {/* Detailed List */}
              <div className="space-y-3">
                {portfolio.allocations.map(a => (
                  <div key={a.symbol} className="rounded-xl p-3" style={{ background: "var(--color-bg)", border: "1px solid #30363d" }}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span>{a.emoji}</span>
                        <span className="font-bold" style={{ color: "var(--color-text)" }}>{a.symbol}</span>
                        <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{a.name}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "#ffffff08", color: "var(--color-text-secondary)" }}>
                          {CATEGORY_LABELS[a.category]}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-extrabold" style={{ color: a.color }}>{a.pct}%</span>
                        <span className="text-sm font-bold" style={{ color: "var(--color-text)" }}>
                          {fmt(investAmount * a.pct / 100)}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{a.rationale}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Where to Buy */}
            <div className="glass rounded-2xl p-5 mb-6">
              <h3 className="font-bold mb-3" style={{ color: "var(--color-text)" }}>Where to Build This Portfolio</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Coinbase", desc: "Best for beginners", href: "/go/coinbase", color: "#0052FF" },
                  { name: "Binance", desc: "Lowest fees", href: "/go/binance", color: "#F3BA2F" },
                  { name: "Bybit", desc: "$30K bonus", href: "/go/bybit", color: "#F7A600" },
                ].map(ex => (
                  <Link href={ex.href}
                    key={ex.name}
                    className="rounded-xl p-3 text-center block"
                    style={{ background: `${ex.color}15`, border: `1px solid ${ex.color}40` }}
                  >
                    <div className="font-bold text-sm mb-0.5" style={{ color: ex.color }}>{ex.name}</div>
                    <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{ex.desc}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Retake */}
            <div className="flex gap-3">
              <button
                onClick={() => { setStep(0); setCurrentQuestion(0); setAnswers({}); setSelectedProfile(null); }}
                className="flex-1 py-3 rounded-xl font-semibold"
                style={{ background: "var(--color-surface)", color: "var(--color-text)", border: "1px solid #30363d" }}
              >
                Retake Quiz
              </button>
              <Link href="/tools/portfolio-tracker" className="flex-1 affiliate-cta py-3 rounded-xl font-bold text-white text-center">
                Track This Portfolio
              </Link>
            </div>
          </>
        )}

        {/* Disclaimer */}
        <div className="mt-8 p-4 rounded-xl text-xs" style={{ background: "var(--color-surface)", color: "var(--color-text-secondary)", border: "1px solid #30363d" }}>
          ⚠️ <strong>Not Financial Advice.</strong> degen0x&apos;s Robo-Advisor is an educational tool based on general risk profiles. Cryptocurrency investments are highly volatile. Always do your own research and consult a licensed financial advisor before investing.
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Robo Advisor",
              "url": "https://degen0x.com/tools/robo-advisor",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
