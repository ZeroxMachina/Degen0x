"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Level = "newbie" | "intermediate" | "degen";

const LEVELS: { key: Level; label: string; icon: string; desc: string }[] = [
  { key: "newbie", label: "I'm New", icon: "🌱", desc: "Just getting started with crypto" },
  { key: "intermediate", label: "Intermediate", icon: "📈", desc: "I know the basics, show me more" },
  { key: "degen", label: "Degen", icon: "🔥", desc: "Full send. Give me the alpha" },
];

/* ────────────────── CONTENT BY LEVEL ────────────────── */

const HERO_CONTENT: Record<Level, { subtitle: string; cta: { label: string; href: string }; ghost: { label: string; href: string } }> = {
  newbie: {
    subtitle: "The crypto world is powerful but intimidating. We\u2019re building the guide we wish we had \u2014 free tools, honest reviews, and clear explanations. No account needed. No paywall. Ever.",
    cta: { label: "Show me around \u2192", href: "/learn/crypto-for-beginners" },
    ghost: { label: "Browse beginner guides", href: "/learn" },
  },
  intermediate: {
    subtitle: "You know Bitcoin from Ethereum. Now go deeper \u2014 advanced strategies, DeFi protocols, on-chain analytics, and tools that give you an edge. All free, always.",
    cta: { label: "Explore advanced guides \u2192", href: "/learn" },
    ghost: { label: "Go to Dashboard", href: "/dashboard" },
  },
  degen: {
    subtitle: "Funding rates, whale alerts, correlation alpha, memecoin strategies, and 92+ tools to sharpen your edge. No fluff. Just signal.",
    cta: { label: "Open Dashboard \u2192", href: "/dashboard" },
    ghost: { label: "Perp funding rates", href: "/tools/perp-funding" },
  },
};

type CardItem = { href: string; icon: string; title: string; desc: string; tag: string; tagColor: string };

const LEARN_CARDS: Record<Level, { heading: string; description: string; cards: CardItem[] }> = {
  newbie: {
    heading: "Learn at your own pace",
    description: "We wrote 35+ in-depth guides that explain crypto from scratch \u2014 no jargon, no assumptions. Start with Bitcoin, work your way to DeFi, or jump straight to the topic you\u2019re curious about.",
    cards: [
      { href: "/learn/what-is-bitcoin", icon: "\u20BF", title: "What is Bitcoin?", desc: "The original cryptocurrency explained", tag: "8 min", tagColor: "#22c55e" },
      { href: "/learn/what-is-ethereum", icon: "\u27E0", title: "What is Ethereum?", desc: "Smart contracts & the world computer", tag: "10 min", tagColor: "#818cf8" },
      { href: "/learn/what-is-defi", icon: "\uD83C\uDFE6", title: "What is DeFi?", desc: "Decentralized finance without the bank", tag: "12 min", tagColor: "#06b6d4" },
      { href: "/learn/what-is-a-crypto-wallet", icon: "\uD83D\uDC5B", title: "Crypto Wallets", desc: "Your keys, your coins \u2014 how it works", tag: "6 min", tagColor: "#f59e0b" },
    ],
  },
  intermediate: {
    heading: "Go deeper",
    description: "You\u2019ve got the basics down. Now explore advanced topics like restaking, Layer 2 scaling, real-world asset tokenization, and AI-powered crypto protocols.",
    cards: [
      { href: "/learn/restaking-eigenlayer-guide", icon: "\uD83D\uDD04", title: "Restaking & EigenLayer", desc: "Next-gen staking and validator economics", tag: "15 min", tagColor: "#818cf8" },
      { href: "/learn/bitcoin-layer-2-guide", icon: "\u26A1", title: "Bitcoin Layer 2s", desc: "Scaling solutions enhancing Bitcoin", tag: "12 min", tagColor: "#f59e0b" },
      { href: "/learn/real-world-assets-rwa-guide", icon: "\uD83C\uDFE0", title: "Real World Assets (RWA)", desc: "Tokenized assets reshaping finance", tag: "14 min", tagColor: "#22c55e" },
      { href: "/learn/ai-depin-crypto-guide", icon: "\uD83E\uDD16", title: "AI & DePIN", desc: "AI meets decentralized infrastructure", tag: "13 min", tagColor: "#06b6d4" },
    ],
  },
  degen: {
    heading: "Sharpen your edge",
    description: "Memecoin alpha, AI agents, whitepaper analysis, and the strategies that separate signal from noise. You already know \u2014 this is the deep end.",
    cards: [
      { href: "/learn/memecoin-trading-strategy", icon: "\uD83D\uDC38", title: "Memecoin Strategy", desc: "Risks and alpha in memecoin markets", tag: "10 min", tagColor: "#f85149" },
      { href: "/learn/ai-crypto-agents-guide", icon: "\uD83E\uDD16", title: "AI Crypto Agents", desc: "Autonomous traders & yield optimizers", tag: "12 min", tagColor: "#818cf8" },
      { href: "/learn/how-to-read-crypto-whitepaper", icon: "\uD83D\uDCDC", title: "Read Whitepapers", desc: "7-step framework to evaluate any project", tag: "New", tagColor: "#f59e0b" },
      { href: "/learn/bitcoin-etf-guide-2026", icon: "\uD83D\uDCCA", title: "Bitcoin ETF Guide 2026", desc: "Spot ETFs, fees, and how to invest", tag: "14 min", tagColor: "#22c55e" },
    ],
  },
};

const COMPARE_CARDS: Record<Level, { heading: string; description: string; cards: CardItem[] }> = {
  newbie: {
    heading: "Compare before you commit",
    description: "Choosing an exchange, wallet, or DeFi protocol? We\u2019ve tested them all. Honest reviews with real fee comparisons, security analysis, and side-by-side breakdowns.",
    cards: [
      { href: "/exchanges/best", icon: "\uD83C\uDFC6", title: "Best Exchanges 2026", desc: "50+ exchanges rated on fees, security, UX", tag: "Hot", tagColor: "#f85149" },
      { href: "/wallets/best/hardware", icon: "\uD83D\uDD12", title: "Best Hardware Wallets", desc: "Ledger, Trezor, and more tested", tag: "Security", tagColor: "#22c55e" },
      { href: "/crypto-cards/best", icon: "\uD83D\uDCB3", title: "Best Crypto Cards", desc: "Spend crypto anywhere with cashback", tag: "Spending", tagColor: "#f59e0b" },
      { href: "/learn/crypto-for-beginners", icon: "\uD83D\uDCD6", title: "Crypto for Beginners", desc: "The ultimate starting guide", tag: "Start", tagColor: "#06b6d4" },
    ],
  },
  intermediate: {
    heading: "Find your edge",
    description: "Side-by-side protocol comparisons, yield analysis, and detailed fee breakdowns. Data-driven decisions for experienced users.",
    cards: [
      { href: "/defi-lending/best", icon: "\uD83D\uDCCA", title: "Best DeFi Lending", desc: "Compare APY, risk, and TVL", tag: "DeFi", tagColor: "#818cf8" },
      { href: "/exchanges/compare/coinbase-vs-binance", icon: "\u2694\uFE0F", title: "Coinbase vs Binance", desc: "The two giants compared in detail", tag: "vs", tagColor: "#f85149" },
      { href: "/investing/best/staking", icon: "\uD83D\uDCB0", title: "Best Staking Platforms", desc: "Maximize your passive income", tag: "Yield", tagColor: "#22c55e" },
      { href: "/wallets/best/hardware", icon: "\uD83D\uDD12", title: "Hardware Wallets", desc: "Cold storage security tested", tag: "Security", tagColor: "#f59e0b" },
    ],
  },
  degen: {
    heading: "Alpha comparisons",
    description: "Perp platforms, DEX aggregators, lending rates, and the protocols that matter when every basis point counts.",
    cards: [
      { href: "/defi-lending/best", icon: "\uD83C\uDFE6", title: "DeFi Lending Rates", desc: "Live APY comparisons across protocols", tag: "Yield", tagColor: "#22c55e" },
      { href: "/exchanges/best", icon: "\u26A1", title: "Lowest Fee Exchanges", desc: "Where the smart money trades", tag: "Fees", tagColor: "#f85149" },
      { href: "/investing/best/staking", icon: "\uD83D\uDD25", title: "Top Staking Yields", desc: "Best risk-adjusted staking returns", tag: "APY", tagColor: "#818cf8" },
      { href: "/crypto-cards/best", icon: "\uD83D\uDCB3", title: "Crypto Cards", desc: "Maximize cashback on every tx", tag: "Perks", tagColor: "#f59e0b" },
    ],
  },
};

const TOOLS_CARDS: Record<Level, { heading: string; description: string; cards: CardItem[] }> = {
  newbie: {
    heading: "Tools that make it easy",
    description: "Simple, free tools to help you get started. Convert currencies, plan investments, and track your portfolio \u2014 no signup required.",
    cards: [
      { href: "/tools/converter", icon: "\uD83D\uDD04", title: "Crypto Converter", desc: "Real-time prices, 10+ coins", tag: "Popular", tagColor: "#22c55e" },
      { href: "/tools/dca-calculator", icon: "\uD83D\uDCC5", title: "DCA Calculator", desc: "Plan your investment strategy", tag: "Popular", tagColor: "#818cf8" },
      { href: "/tools/portfolio-tracker", icon: "\uD83D\uDCBC", title: "Portfolio Tracker", desc: "Monitor your holdings", tag: "Easy", tagColor: "#06b6d4" },
      { href: "/tools/staking-rewards", icon: "\uD83D\uDCB0", title: "Staking Calculator", desc: "See your potential rewards", tag: "Yield", tagColor: "#f59e0b" },
    ],
  },
  intermediate: {
    heading: "Analytical tools",
    description: "Advanced calculators, charting tools, and portfolio analytics. 92+ tools built for users who want data-driven insights.",
    cards: [
      { href: "/tools/advanced-charting", icon: "\uD83D\uDCCA", title: "Advanced Charts", desc: "TradingView-style analysis", tag: "Pro", tagColor: "#818cf8" },
      { href: "/tools/portfolio-rebalancer", icon: "\u2696\uFE0F", title: "Portfolio Rebalancer", desc: "Drift detection & trade plans", tag: "New", tagColor: "#f59e0b" },
      { href: "/tools/correlation-matrix", icon: "\uD83D\uDD17", title: "Correlation Matrix", desc: "Find diversification edges", tag: "Data", tagColor: "#22c55e" },
      { href: "/tools/tax-loss-harvester", icon: "\uD83E\uDDFE", title: "Tax Loss Harvester", desc: "Find tax savings automatically", tag: "New", tagColor: "#f59e0b" },
    ],
  },
  degen: {
    heading: "Power tools for degens",
    description: "Funding rates, whale tracking, on-chain analytics, and the tools you need to find alpha before everyone else.",
    cards: [
      { href: "/tools/perp-funding", icon: "\uD83D\uDCC8", title: "Perp Funding Rates", desc: "Arbitrage opportunities live", tag: "Alpha", tagColor: "#f85149" },
      { href: "/tools/fear-greed-timeline", icon: "\uD83D\uDCC8", title: "Fear & Greed Index", desc: "Market sentiment over time", tag: "Signal", tagColor: "#22c55e" },
      { href: "/tools/portfolio-rebalancer", icon: "\u2696\uFE0F", title: "Portfolio Rebalancer", desc: "Drift detection & trade plans", tag: "New", tagColor: "#f59e0b" },
      { href: "/tools/tax-loss-harvester", icon: "\uD83E\uDDFE", title: "Tax Loss Harvester", desc: "Optimize your tax strategy", tag: "New", tagColor: "#818cf8" },
    ],
  },
};

const GRID_TOOLS: Record<Level, { href: string; icon: string; title: string; desc: string }[]> = {
  newbie: [
    { href: "/tools/converter", icon: "\uD83D\uDD04", title: "Crypto Converter", desc: "Convert coins to fiat" },
    { href: "/tools/dca-calculator", icon: "\uD83D\uDCC5", title: "DCA Calculator", desc: "Plan regular investments" },
    { href: "/tools/staking-rewards", icon: "\uD83D\uDCB0", title: "Staking Calculator", desc: "Calculate your rewards" },
    { href: "/tools/portfolio-tracker", icon: "\uD83D\uDCBC", title: "Portfolio Tracker", desc: "Monitor your holdings" },
    { href: "/tools/gas-tracker", icon: "\u26FD", title: "Gas Tracker", desc: "Check transaction fees" },
    { href: "/tools/crypto-calendar", icon: "\uD83D\uDCC5", title: "Crypto Calendar", desc: "Upcoming events" },
    { href: "/tools/fear-greed-timeline", icon: "\uD83D\uDCC8", title: "Fear & Greed", desc: "Is it time to buy?" },
    { href: "/tools/profit-calculator", icon: "\uD83D\uDCB5", title: "Profit Calculator", desc: "See your gains" },
  ],
  intermediate: [
    { href: "/tools/advanced-charting", icon: "\uD83D\uDCCA", title: "Advanced Charts", desc: "TradingView-style analysis" },
    { href: "/tools/portfolio-rebalancer", icon: "\u2696\uFE0F", title: "Rebalancer", desc: "Drift detection" },
    { href: "/tools/correlation-matrix", icon: "\uD83D\uDD17", title: "Correlation Matrix", desc: "Diversification edges" },
    { href: "/tools/tax-loss-harvester", icon: "\uD83E\uDDFE", title: "Tax Harvester", desc: "Optimize taxes" },
    { href: "/tools/staking-rewards", icon: "\uD83D\uDCB0", title: "Staking Calc", desc: "Compare yields" },
    { href: "/tools/gas-tracker", icon: "\u26FD", title: "Gas Tracker", desc: "Real-time fees" },
    { href: "/tools/fear-greed-timeline", icon: "\uD83D\uDCC8", title: "Fear & Greed", desc: "Sentiment history" },
    { href: "/tools/crypto-calendar", icon: "\uD83D\uDCC5", title: "Crypto Calendar", desc: "Events & launches" },
  ],
  degen: [
    { href: "/tools/perp-funding", icon: "\uD83D\uDCC8", title: "Funding Rates", desc: "Perp arbitrage opps" },
    { href: "/tools/advanced-charting", icon: "\uD83D\uDCCA", title: "Advanced Charts", desc: "Full TA suite" },
    { href: "/tools/correlation-matrix", icon: "\uD83D\uDD17", title: "Correlation Matrix", desc: "Portfolio alpha" },
    { href: "/tools/portfolio-rebalancer", icon: "\u2696\uFE0F", title: "Rebalancer", desc: "Drift alerts" },
    { href: "/tools/tax-loss-harvester", icon: "\uD83E\uDDFE", title: "Tax Harvester", desc: "Save on taxes" },
    { href: "/tools/gas-tracker", icon: "\u26FD", title: "Gas Tracker", desc: "Time your txs" },
    { href: "/tools/fear-greed-timeline", icon: "\uD83D\uDCC8", title: "Fear & Greed", desc: "Contrarian signal" },
    { href: "/tools/portfolio-tracker", icon: "\uD83D\uDCBC", title: "Portfolio", desc: "Track everything" },
  ],
};

const MISSION_CTA: Record<Level, { label: string; href: string }> = {
  newbie: { label: "Start learning \u2014 it\u2019s free \u2192", href: "/learn/crypto-for-beginners" },
  intermediate: { label: "Explore advanced guides \u2192", href: "/learn" },
  degen: { label: "Open your Dashboard \u2192", href: "/dashboard" },
};

/* ────────────────── CARD RENDERER ────────────────── */

function VisualCard({ item }: { item: CardItem }) {
  return (
    <Link
      href={item.href}
      className="flex items-center gap-3.5 p-3.5 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] transition-all hover:border-[var(--color-primary)]"
    >
      <span className="text-2xl flex-shrink-0">{item.icon}</span>
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-bold text-[var(--color-text)]">{item.title}</h4>
        <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
      </div>
      <span
        className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded"
        style={{ background: item.tagColor + "20", color: item.tagColor }}
      >
        {item.tag}
      </span>
    </Link>
  );
}

/* ────────────────── MAIN COMPONENT ────────────────── */

export default function HomeContent() {
  const [level, setLevel] = useState<Level>("newbie");
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("degen0x-level") as Level | null;
      if (saved && ["newbie", "intermediate", "degen"].includes(saved)) {
        setLevel(saved);
      }
    } catch {}
    setMounted(true);
  }, []);

  const handleLevel = (l: Level) => {
    setLevel(l);
    try { localStorage.setItem("degen0x-level", l); } catch {}
  };

  const hero = HERO_CONTENT[level];
  const learn = LEARN_CARDS[level];
  const compare = COMPARE_CARDS[level];
  const tools = TOOLS_CARDS[level];
  const grid = GRID_TOOLS[level];
  const missionCta = MISSION_CTA[level];

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 py-24">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] mb-7">
            <span>&#x2B21;</span> Our Mission
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
            <span className="text-[var(--color-text)]">Onboard the next</span>
            <br />
            <span className="gradient-text">1 billion people</span>
            <br />
            <span className="text-[var(--color-text)]">to Web3</span>
          </h1>

          {/* ── Level Selector ── */}
          <div className="flex flex-col items-center mb-10">
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">Where are you on your crypto journey?</p>
            <div className="inline-flex gap-2 p-1.5 rounded-2xl glass">
              {LEVELS.map((l) => (
                <button
                  key={l.key}
                  onClick={() => handleLevel(l.key)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    level === l.key
                      ? "affiliate-cta text-white shadow-lg"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--glass-bg)]"
                  }`}
                >
                  <span className="mr-1.5">{l.icon}</span>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Dynamic Subtitle ── */}
          <div className={`transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={hero.cta.href}
                className="affiliate-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                {hero.cta.label}
              </Link>
              <Link
                href={hero.ghost.href}
                className="glass inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-[var(--color-text-secondary)] font-medium text-base transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-text)]"
              >
                {hero.ghost.label}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-secondary)] text-sm animate-bounce">
          &darr; See how it works
        </div>
      </section>

      {/* ═══════════════ NARRATIVE BLOCKS ═══════════════ */}
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28 md:space-y-36 transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}>

        {/* Step 1: Learn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-extrabold mb-4" style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}>1</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] leading-tight tracking-tight mb-4">
              {learn.heading}
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {learn.description}
            </p>
            <Link href="/learn" className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-1.5 hover:underline">
              Browse all guides &rarr;
            </Link>
          </div>
          <div className="glass p-6 sm:p-8 rounded-2xl space-y-3">
            {learn.cards.map((item) => <VisualCard key={item.href} item={item} />)}
          </div>
        </div>

        {/* Step 2: Compare (reversed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 glass p-6 sm:p-8 rounded-2xl space-y-3">
            {compare.cards.map((item) => <VisualCard key={item.href} item={item} />)}
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-extrabold mb-4" style={{ background: "rgba(99,102,241,0.12)", color: "#818cf8" }}>2</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] leading-tight tracking-tight mb-4">
              {compare.heading}
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {compare.description}
            </p>
            <Link href="/exchanges/best" className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-1.5 hover:underline">
              Compare exchanges &rarr;
            </Link>
          </div>
        </div>

        {/* Step 3: Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-extrabold mb-4" style={{ background: "rgba(6,182,212,0.12)", color: "#06b6d4" }}>3</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] leading-tight tracking-tight mb-4">
              {tools.heading}
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {tools.description}
            </p>
            <Link href="/tools" className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-1.5 hover:underline">
              Explore all 92+ tools &rarr;
            </Link>
          </div>
          <div className="glass p-6 sm:p-8 rounded-2xl space-y-3">
            {tools.cards.map((item) => <VisualCard key={item.href} item={item} />)}
          </div>
        </div>
      </div>

      {/* ═══════════════ TOOLS GRID ═══════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] mb-3">
          Built for everyone
        </h2>
        <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-12">
          From your first trade to your 10,000th &mdash; we&apos;ve got a tool for that.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {grid.map((tool) => (
            <Link key={tool.href} href={tool.href} className="glass p-5 sm:p-6 text-center card-hover rounded-2xl">
              <div className="text-3xl mb-2.5">{tool.icon}</div>
              <h3 className="text-sm font-bold text-[var(--color-text)] mb-1">{tool.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <Link href="/tools" className="inline-flex items-center gap-1.5 mt-8 text-[var(--color-primary)] font-semibold hover:underline">
          See all 92+ tools &rarr;
        </Link>
      </section>

      {/* ═══════════════ MISSION ═══════════════ */}
      <section className="section-glass py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-6xl sm:text-8xl md:text-9xl font-black gradient-text leading-none mb-4">
            1B
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-4">
            That&apos;s our goal. One billion people in Web3.
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-2xl mx-auto">
            Not because we think everyone should trade crypto &mdash; but because everyone deserves to understand the financial system being built around them. Education is the way in.
          </p>
          <Link
            href={missionCta.href}
            className="affiliate-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            {missionCta.label}
          </Link>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] tracking-tight mb-4">
            Ready?
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10">
            Pick a guide, open a tool, or just explore. There&apos;s no wrong way to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={hero.cta.href}
              className="affiliate-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              {hero.cta.label}
            </Link>
            <Link
              href="/tools"
              className="glass inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-[var(--color-text-secondary)] font-medium text-base transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-text)]"
            >
              Browse Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
