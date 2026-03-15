"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { COURSES, type Course } from "@/data/courses";
import { DAPPS, DAPP_LOGO_URLS, getHomepageDApps, type DApp, type Category, CATEGORIES_META } from "@/data/dapps";

type Level = "newbie" | "intermediate" | "degen";
type PlatformTab = "learn" | "courses" | "ecosystem" | "tools";

/* ════════════════════════════════════════════════════════════════════════════
   LEVEL CONTENT DATA
════════════════════════════════════════════════════════════════════════════ */

const LEVELS: { key: Level; label: string; emoji: string }[] = [
  { key: "newbie",       label: "I'm New",      emoji: "👋" },
  { key: "intermediate", label: "Intermediate",  emoji: "📈" },
  { key: "degen",        label: "Degen",         emoji: "🔥" },
];

const HERO_CONTENT: Record<Level, {
  badge: string;
  headline: string[];
  subtitle: string;
  cta: { label: string; href: string };
  ghost: { label: string; href: string };
  stats: { value: string; label: string }[];
}> = {
  newbie: {
    badge: "Free · No signup · No paywall",
    headline: ["Onboard the Next", "1 Billion Users", "to Web3"],
    subtitle: "The crypto world is powerful but intimidating. We built the guide we wish we had — free tools, honest reviews, and clear explanations.",
    cta:   { label: "Start Learning Free →", href: "/courses/crypto-101" },
    ghost: { label: "Browse beginner guides", href: "/learn" },
    stats: [
      { value: "1M+",  label: "Learners" },
      { value: "50+",  label: "Courses" },
      { value: "92+",  label: "Free Tools" },
    ],
  },
  intermediate: {
    badge: "Advanced DeFi · Layer 2 · On-chain analytics",
    headline: ["Go Deeper.", "Earn More.", "Beat the Market."],
    subtitle: "You know Bitcoin from Ethereum. Now explore DeFi protocols, on-chain analytics, Layer 2 scaling, and tools that give you an edge.",
    cta:   { label: "Explore DeFi Courses →", href: "/courses/defi-masterclass" },
    ghost: { label: "Go to Dashboard", href: "/dashboard" },
    stats: [
      { value: "$2T+",  label: "DeFi TVL tracked" },
      { value: "67+",   label: "dApps catalogued" },
      { value: "15",    label: "Chains covered" },
    ],
  },
  degen: {
    badge: "Perps · Whale alerts · Funding rate arb",
    headline: ["Full Send.", "Pure Alpha.", "Zero Fluff."],
    subtitle: "Funding rates, whale alerts, correlation alpha, memecoin strategies, and 92+ tools to sharpen your edge. No fluff. Just signal.",
    cta:   { label: "Open Dashboard →", href: "/dashboard" },
    ghost: { label: "Perp Funding Rates", href: "/tools/perp-funding" },
    stats: [
      { value: "92+",  label: "Pro tools" },
      { value: "24/7", label: "Live data" },
      { value: "0",    label: "Paywalls" },
    ],
  },
};

type CardItem = { href: string; title: string; desc: string; tag: string; tagColor: string };

const LEARN_CARDS: Record<Level, { heading: string; description: string; cta: string; href: string; cards: CardItem[] }> = {
  newbie: {
    heading: "Learn at your own pace",
    description: "35+ in-depth guides that explain crypto from scratch. No jargon, no assumptions.",
    cta: "Browse all guides", href: "/learn",
    cards: [
      { href: "/learn/what-is-bitcoin",       title: "What is Bitcoin?",    desc: "The original cryptocurrency explained",      tag: "8 min",  tagColor: "#22c55e" },
      { href: "/learn/what-is-ethereum",      title: "What is Ethereum?",   desc: "Smart contracts and the world computer",     tag: "10 min", tagColor: "#818cf8" },
      { href: "/learn/what-is-defi",          title: "What is DeFi?",       desc: "Decentralized finance without the bank",     tag: "12 min", tagColor: "#06b6d4" },
      { href: "/learn/what-is-a-crypto-wallet", title: "Crypto Wallets",    desc: "Your keys, your coins, how it works",        tag: "6 min",  tagColor: "#f59e0b" },
    ],
  },
  intermediate: {
    heading: "Go deeper",
    description: "Advanced topics: restaking, Layer 2 scaling, RWAs, and prediction markets.",
    cta: "All advanced guides", href: "/learn",
    cards: [
      { href: "/learn/restaking-eigenlayer-guide",     title: "Restaking & EigenLayer", desc: "Next-gen staking and validator economics", tag: "15 min", tagColor: "#818cf8" },
      { href: "/learn/bitcoin-layer-2-guide",          title: "Bitcoin Layer 2s",        desc: "Scaling solutions enhancing Bitcoin",      tag: "12 min", tagColor: "#f59e0b" },
      { href: "/learn/prediction-markets-guide",       title: "Prediction Markets",      desc: "Trade on real-world event outcomes",        tag: "10 min", tagColor: "#22c55e" },
      { href: "/learn/real-world-assets-rwa-guide",    title: "Real World Assets",       desc: "Tokenized assets reshaping finance",         tag: "14 min", tagColor: "#06b6d4" },
    ],
  },
  degen: {
    heading: "Sharpen your edge",
    description: "Memecoin alpha, prediction market strategies, AI agents, and the deep end.",
    cta: "All alpha guides", href: "/learn",
    cards: [
      { href: "/learn/memecoin-trading-strategy",   title: "Memecoin Strategy",   desc: "Risks and alpha in memecoin markets",         tag: "10 min", tagColor: "#f85149" },
      { href: "/learn/prediction-markets-guide",    title: "Prediction Markets",  desc: "Advanced strategies for event trading",        tag: "10 min", tagColor: "#22c55e" },
      { href: "/learn/ai-crypto-agents-guide",      title: "AI Crypto Agents",    desc: "Autonomous traders and yield optimizers",      tag: "12 min", tagColor: "#818cf8" },
      { href: "/learn/how-to-read-crypto-whitepaper", title: "Read Whitepapers",  desc: "7-step framework to evaluate any project",     tag: "New",    tagColor: "#f59e0b" },
    ],
  },
};

const TOOLS_CARDS: Record<Level, { heading: string; description: string; cards: CardItem[] }> = {
  newbie: {
    heading: "Tools that make it easy",
    description: "Simple, free tools to help you get started. No signup required.",
    cards: [
      { href: "/tools/converter",        title: "Crypto Converter",     desc: "Real-time prices, 10+ coins",          tag: "Popular", tagColor: "#22c55e" },
      { href: "/tools/dca-calculator",   title: "DCA Calculator",       desc: "Plan your investment strategy",        tag: "Popular", tagColor: "#818cf8" },
      { href: "/tools/portfolio-tracker", title: "Portfolio Tracker",   desc: "Monitor your holdings",                tag: "Easy",    tagColor: "#06b6d4" },
      { href: "/tools/staking-rewards",  title: "Staking Calculator",   desc: "See your potential rewards",           tag: "Yield",   tagColor: "#f59e0b" },
      { href: "/tools/gas-tracker",      title: "Gas Tracker",          desc: "Check transaction fees",               tag: "Live",    tagColor: "#22c55e" },
      { href: "/tools/fear-greed-timeline", title: "Fear & Greed",      desc: "Is it time to buy?",                   tag: "Signal",  tagColor: "#f85149" },
    ],
  },
  intermediate: {
    heading: "Analytical tools",
    description: "Advanced calculators, charting tools, and portfolio analytics.",
    cards: [
      { href: "/tools/advanced-charting",       title: "Advanced Charts",       desc: "TradingView-style analysis",           tag: "Pro",     tagColor: "#818cf8" },
      { href: "/tools/portfolio-rebalancer",    title: "Portfolio Rebalancer",  desc: "Drift detection and trade plans",      tag: "New",     tagColor: "#f59e0b" },
      { href: "/tools/correlation-matrix",      title: "Correlation Matrix",    desc: "Find diversification edges",           tag: "Data",    tagColor: "#22c55e" },
      { href: "/tools/tax-loss-harvester",      title: "Tax Loss Harvester",    desc: "Find tax savings automatically",       tag: "New",     tagColor: "#f59e0b" },
      { href: "/tools/staking-rewards",         title: "Staking Calculator",    desc: "Compare yields across protocols",      tag: "Yield",   tagColor: "#818cf8" },
      { href: "/tools/gas-tracker",             title: "Gas Tracker",           desc: "Real-time transaction fees",           tag: "Live",    tagColor: "#22c55e" },
    ],
  },
  degen: {
    heading: "Power tools for degens",
    description: "Funding rates, whale tracking, on-chain analytics, and alpha.",
    cards: [
      { href: "/tools/perp-funding",           title: "Perp Funding Rates",    desc: "Arbitrage opportunities live",         tag: "Alpha",   tagColor: "#f85149" },
      { href: "/tools/advanced-charting",      title: "Advanced Charts",       desc: "Full TA suite",                        tag: "Pro",     tagColor: "#818cf8" },
      { href: "/tools/correlation-matrix",     title: "Correlation Matrix",    desc: "Find diversification edges",           tag: "Data",    tagColor: "#22c55e" },
      { href: "/tools/portfolio-rebalancer",   title: "Portfolio Rebalancer",  desc: "Drift alerts and trade plans",         tag: "New",     tagColor: "#f59e0b" },
      { href: "/tools/fear-greed-timeline",    title: "Fear & Greed Index",    desc: "Contrarian market signal",             tag: "Signal",  tagColor: "#22c55e" },
      { href: "/tools/tax-loss-harvester",     title: "Tax Loss Harvester",    desc: "Optimize your tax strategy",           tag: "New",     tagColor: "#818cf8" },
    ],
  },
};

const COURSES_BY_LEVEL: Record<Level, string[]> = {
  newbie:       ["crypto-101", "crypto-security"],
  intermediate: ["defi-masterclass", "layer-2-deep-dive"],
  degen:        ["defi-masterclass", "layer-2-deep-dive", "solana-deep-dive"],
};

/* ════════════════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
════════════════════════════════════════════════════════════════════════════ */

function VisualCard({ item }: { item: CardItem }) {
  return (
    <Link
      href={item.href}
      className="flex items-center gap-3 p-3.5 rounded-xl border border-[#2c2c2e] bg-[#1c1c1e] hover:border-[#6366f1] transition-all hover:-translate-y-0.5 group"
    >
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">{item.title}</h4>
        <p className="text-xs text-[#8e8e93] mt-0.5">{item.desc}</p>
      </div>
      <span
        className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md"
        style={{ background: item.tagColor + "20", color: item.tagColor }}
      >
        {item.tag}
      </span>
    </Link>
  );
}

function DAppLogo({ dapp, size = 40 }: { dapp: DApp; size?: number }) {
  const [imgError, setImgError] = useState(false);
  const logoUrl = DAPP_LOGO_URLS[dapp.slug];

  if (logoUrl && !imgError) {
    return (
      <div
        className="rounded-xl overflow-hidden flex-shrink-0 border border-[#2c2c2e]"
        style={{ width: size, height: size, background: dapp.color + "18" }}
      >
        <img
          src={logoUrl}
          alt={dapp.name}
          width={size}
          height={size}
          className="w-full h-full object-contain p-1"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Emoji fallback with brand color background
  return (
    <div
      className="rounded-xl flex-shrink-0 flex items-center justify-center border border-[#2c2c2e]"
      style={{ width: size, height: size, background: dapp.color + "22", borderColor: dapp.color + "44" }}
    >
      <span style={{ fontSize: size * 0.48 }} role="img">{dapp.logo}</span>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const [xp, setXp] = useState(0);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`degen0x_course_${course.slug}`) || "{}");
      setXp(saved.xpEarned || 0);
    } catch {}
  }, [course.slug]);

  const progress = Math.round((xp / course.totalXP) * 100);

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="flex-shrink-0 w-52 bg-[#1c1c1e] border border-[#2c2c2e] rounded-2xl p-4 hover:border-[#6366f1] transition-all hover:-translate-y-0.5 group"
    >
      {/* Course emoji + level badge */}
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
          style={{ background: course.color + "20", borderColor: course.color + "40" }}
        >
          {course.emoji}
        </div>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-md capitalize"
          style={{ background: course.color + "20", color: course.color }}
        >
          {course.level}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold text-white leading-tight mb-1 group-hover:text-indigo-300 transition-colors line-clamp-2">
        {course.title}
      </h3>
      <p className="text-xs text-[#8e8e93] mb-3 line-clamp-2">{course.subtitle}</p>

      {/* XP + time */}
      <div className="flex items-center justify-between text-xs text-[#636366] mb-2">
        <span>⚡ {course.totalXP} XP</span>
        <span>~{course.estimatedHours}h</span>
      </div>

      {/* Progress bar */}
      {xp > 0 ? (
        <div>
          <div className="flex justify-between text-[10px] text-[#636366] mb-1">
            <span>{progress}% complete</span>
            <span>{xp}/{course.totalXP} XP</span>
          </div>
          <div className="h-1.5 bg-[#2c2c2e] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${progress}%`, background: `linear-gradient(90deg, #6366f1, #06b6d4)` }}
            />
          </div>
        </div>
      ) : (
        <div className="h-1.5 bg-[#2c2c2e] rounded-full" />
      )}
    </Link>
  );
}

/* ────────────── ECOSYSTEM MINI APP STORE ────────────── */

const ECOSYSTEM_CATEGORIES: { key: Category | "all"; label: string }[] = [
  { key: "all",         label: "All" },
  { key: "dex",         label: "DEX" },
  { key: "lending",     label: "Lending" },
  { key: "derivatives", label: "Perps" },
  { key: "wallet",      label: "Wallets" },
  { key: "nft",         label: "NFT" },
  { key: "staking",     label: "Staking" },
  { key: "yield",       label: "Yield" },
  { key: "analytics",   label: "Analytics" },
];

function DAppCard({ dapp }: { dapp: DApp }) {
  return (
    <Link
      href={`/ecosystem/${dapp.slug}`}
      className="flex flex-col bg-[#1c1c1e] border border-[#2c2c2e] rounded-2xl p-4 hover:border-[#6366f1] transition-all hover:-translate-y-0.5 group"
    >
      {/* Logo + verified badge */}
      <div className="flex items-start justify-between mb-3">
        <DAppLogo dapp={dapp} size={44} />
        <div className="flex flex-col items-end gap-1">
          {dapp.verified && (
            <span className="text-[9px] font-bold bg-[#22c55e18] text-[#22c55e] border border-[#22c55e30] px-1.5 py-0.5 rounded">✓ Verified</span>
          )}
          {(dapp.trending || dapp.new) && (
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${dapp.trending ? "bg-[#f59e0b18] text-[#f59e0b] border-[#f59e0b30]" : "bg-[#818cf818] text-[#818cf8] border-[#818cf830]"}`}>
              {dapp.trending ? "🔥 Hot" : "✨ New"}
            </span>
          )}
        </div>
      </div>

      {/* Name + tagline */}
      <h3 className="text-sm font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors line-clamp-1">{dapp.name}</h3>
      <p className="text-xs text-[#8e8e93] mb-3 line-clamp-2 flex-1">{dapp.tagline}</p>

      {/* Footer: rating + TVL/users */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1">
          <span className="text-[#f59e0b] text-xs">★</span>
          <span className="text-xs text-white font-medium">{dapp.rating.toFixed(1)}</span>
          <span className="text-[10px] text-[#636366]">({(dapp.reviewCount / 1000).toFixed(1)}k)</span>
        </div>
        {dapp.tvl ? (
          <span className="text-[10px] font-medium text-[#22c55e]">TVL {dapp.tvl}</span>
        ) : dapp.monthlyUsers ? (
          <span className="text-[10px] text-[#636366]">{dapp.monthlyUsers}/mo</span>
        ) : null}
      </div>

      {/* Chain chips */}
      <div className="flex gap-1 mt-2 flex-wrap">
        {dapp.chains.slice(0, 3).map((c) => (
          <span key={c} className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-[#2c2c2e] text-[#8e8e93] capitalize">{c}</span>
        ))}
        {dapp.chains.length > 3 && (
          <span className="text-[9px] text-[#636366] px-1.5 py-0.5">+{dapp.chains.length - 3}</span>
        )}
      </div>
    </Link>
  );
}

function EcosystemSection({ level }: { level: Level }) {
  const [categoryFilter, setCategoryFilter] = useState<Category | "all">("all");
  const [search, setSearch] = useState("");
  const homepageDapps = getHomepageDApps(level);

  const filtered = homepageDapps.filter((d) => {
    const matchCat = categoryFilter === "all" || d.category === categoryFilter;
    const matchSearch = !search ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.tagline.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Search + filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#636366] text-sm">🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search dApps..."
            className="w-full bg-[#1c1c1e] border border-[#2c2c2e] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-[#636366] outline-none focus:border-[#6366f1] transition-colors"
          />
        </div>
        {/* Category pills */}
        <div className="flex gap-1.5 flex-wrap">
          {ECOSYSTEM_CATEGORIES.map((c) => {
            // Only show categories that exist in this level's dApps
            if (c.key !== "all" && !homepageDapps.some((d) => d.category === c.key)) return null;
            return (
              <button
                key={c.key}
                onClick={() => setCategoryFilter(c.key as Category | "all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  categoryFilter === c.key
                    ? "bg-[#6366f1] text-white"
                    : "bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:text-white hover:border-[#3c3c3e]"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* dApp grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((dapp) => (
            <DAppCard key={dapp.slug} dapp={dapp} />
          ))}
          {/* View All card */}
          <Link
            href="/ecosystem"
            className="flex flex-col items-center justify-center bg-[#1c1c1e] border border-dashed border-[#3c3c3e] rounded-2xl p-4 hover:border-[#6366f1] hover:bg-[#1c1c2e] transition-all group min-h-[180px]"
          >
            <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">🌐</span>
            <span className="text-sm font-bold text-[#8e8e93] group-hover:text-indigo-300 transition-colors">View All 67+</span>
            <span className="text-xs text-[#636366] mt-1">dApps across 15 chains</span>
          </Link>
        </div>
      ) : (
        <div className="text-center py-10 text-[#636366]">
          <div className="text-3xl mb-2">🔍</div>
          <p className="text-sm">No dApps match your search</p>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   PLATFORM NAV (sticky, below main nav)
════════════════════════════════════════════════════════════════════════════ */

const PLATFORM_TABS: {
  key: PlatformTab;
  label: string;
  emoji: string;
  accent: string;
  isNew?: boolean;
}[] = [
  { key: "learn",     label: "Learn",     emoji: "📖", accent: "#22c55e" },
  { key: "courses",   label: "Courses",   emoji: "🎓", accent: "#818cf8", isNew: true },
  { key: "ecosystem", label: "Ecosystem", emoji: "🌐", accent: "#06b6d4", isNew: true },
  { key: "tools",     label: "Tools",     emoji: "🔧", accent: "#f59e0b" },
];

/* ════════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════════════════ */

export default function HomeContent() {
  const [level, setLevel] = useState<Level>("newbie");
  const [activeTab, setActiveTab] = useState<PlatformTab>("learn");
  const [mounted, setMounted] = useState(false);
  const [xp, setXp] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Section refs for scroll-spy
  const learnRef    = useRef<HTMLDivElement>(null);
  const coursesRef  = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const toolsRef    = useRef<HTMLDivElement>(null);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const savedLevel = localStorage.getItem("degen0x-level") as Level | null;
      if (savedLevel && ["newbie", "intermediate", "degen"].includes(savedLevel)) {
        setLevel(savedLevel);
      }
      const savedXp = parseInt(localStorage.getItem("degen0x_xp") || "0", 10);
      setXp(isNaN(savedXp) ? 0 : savedXp);
    } catch {}
    setMounted(true);
  }, []);

  const handleLevel = (l: Level) => {
    setLevel(l);
    try { localStorage.setItem("degen0x-level", l); } catch {}
  };

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    if (!mounted) return;
    const OFFSET = 112; // 56px main nav + 56px platform nav

    const observers: IntersectionObserver[] = [];
    const sectionMap: { ref: React.RefObject<HTMLDivElement>; tab: PlatformTab }[] = [
      { ref: learnRef,    tab: "learn" },
      { ref: coursesRef,  tab: "courses" },
      { ref: ecosystemRef, tab: "ecosystem" },
      { ref: toolsRef,    tab: "tools" },
    ];

    sectionMap.forEach(({ ref, tab }) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrolling) {
            setActiveTab(tab);
          }
        },
        { rootMargin: `-${OFFSET}px 0px -40% 0px`, threshold: 0 }
      );
      obs.observe(ref.current);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [mounted, isScrolling]);

  const scrollToSection = useCallback((tab: PlatformTab) => {
    const refMap: Record<PlatformTab, React.RefObject<HTMLDivElement>> = {
      learn:     learnRef,
      courses:   coursesRef,
      ecosystem: ecosystemRef,
      tools:     toolsRef,
    };
    setActiveTab(tab);
    setIsScrolling(true);
    const el = refMap[tab].current;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 112;
      window.scrollTo({ top, behavior: "smooth" });
      setTimeout(() => setIsScrolling(false), 800);
    }
  }, []);

  const hero = HERO_CONTENT[level];
  const learn = LEARN_CARDS[level];
  const tools = TOOLS_CARDS[level];

  // Level → CourseLevel mapping
  const courseLevelMap: Record<Level, string[]> = COURSES_BY_LEVEL;
  const levelCourses: Course[] = courseLevelMap[level]
    .map((slug) => COURSES.find((c) => c.slug === slug))
    .filter(Boolean) as Course[];
  // Supplement with other courses if fewer than 4
  const allCourses = [...COURSES].sort((a, b) => b.enrollmentCount - a.enrollmentCount);
  const extraCourses = allCourses.filter((c) => !levelCourses.some((lc) => lc.slug === c.slug));
  const displayCourses = [...levelCourses, ...extraCourses].slice(0, 6);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO — matches the dark, gradient, minimal style from user's design
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden text-center px-4 sm:px-6">
        {/* Ambient gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 90% 65% at 50% 20%, rgba(99,102,241,0.12) 0%, rgba(6,182,212,0.04) 50%, transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-4xl mx-auto w-full">
          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2c2c2e] bg-[#1c1c1e] text-xs font-semibold text-[#8e8e93] mb-8 transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            {hero.badge}
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-[-0.04em] mb-6">
            <span className="block text-white">{hero.headline[0]}</span>
            <span
              className="block"
              style={{ background: "linear-gradient(135deg, #6366f1 0%, #818cf8 40%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {hero.headline[1]}
            </span>
            <span className="block text-white">{hero.headline[2]}</span>
          </h1>

          {/* Level selector */}
          <div className={`transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
            <p className="text-sm text-[#636366] mb-3">Where are you on your crypto journey?</p>
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#1c1c1e] border border-[#2c2c2e] mb-7">
              {LEVELS.map((l) => (
                <button
                  key={l.key}
                  onClick={() => handleLevel(l.key)}
                  aria-label={`Set level to ${l.label}`}
                  aria-pressed={level === l.key}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 ${
                    level === l.key
                      ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                      : "text-[#8e8e93] hover:text-white hover:bg-[#2c2c2e]"
                  }`}
                >
                  <span>{l.emoji}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#8e8e93] max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-300">
              {hero.subtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              <Link
                href={hero.cta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-base text-white transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
                style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)" }}
              >
                {hero.cta.label}
              </Link>
              <Link
                href={hero.ghost.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-[#8e8e93] font-medium text-base border border-[#2c2c2e] bg-[#1c1c1e] hover:border-[#6366f1] hover:text-white transition-all"
              >
                {hero.ghost.label}
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-center gap-8 sm:gap-12">
              {hero.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-[#636366] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#3c3c3e] animate-bounce">
          <span className="text-xs font-medium tracking-widest uppercase">scroll</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STICKY PLATFORM NAV
      ══════════════════════════════════════════════════════════════════════ */}
      <nav
        aria-label="Platform navigation"
        className="sticky z-[190] flex items-stretch overflow-x-auto border-b border-[#1c1c1e]"
        style={{ top: "56px", background: "rgba(8,8,10,0.96)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex items-stretch flex-1 px-4" role="tablist" aria-label="Platform sections">
          {PLATFORM_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => scrollToSection(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-current={activeTab === tab.key ? "true" : undefined}
              className={`flex items-center gap-2 px-5 h-12 text-sm font-semibold whitespace-nowrap transition-all border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1]/50 ${
                activeTab === tab.key
                  ? "text-white border-[--tab-accent]"
                  : "text-[#636366] border-transparent hover:text-[#adadad]"
              }`}
              style={activeTab === tab.key ? { "--tab-accent": tab.accent, borderBottomColor: tab.accent } as React.CSSProperties : {}}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
              {tab.isNew && (
                <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-[#6366f120] text-[#818cf8] border border-[#6366f130]">
                  NEW
                </span>
              )}
            </button>
          ))}

          {/* Right: XP badge + level indicator */}
          {mounted && (
            <div className="ml-auto flex items-center gap-3 pl-4">
              {xp > 0 && (
                <div className="flex items-center gap-2 bg-[#1c1c1e] border border-[#2c2c2e] rounded-full px-3 py-1.5 text-xs font-bold text-[#818cf8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                  ⚡ {xp.toLocaleString()} XP
                </div>
              )}
              <div className="flex items-center gap-1.5 bg-[#1c1c1e] border border-[#2c2c2e] rounded-full px-3 py-1.5 text-xs font-semibold text-[#8e8e93]">
                {LEVELS.find((l) => l.key === level)?.emoji}
                <span className="capitalize">{level}</span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          CONTENT SECTIONS
      ══════════════════════════════════════════════════════════════════════ */}
      <div className={`transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`} aria-busy={!mounted}>

        {/* ── SECTION: LEARN ── */}
        <div
          id="learn"
          ref={learnRef}
          style={{ scrollMarginTop: "112px" }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#1c1c1e]"
        >
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-black tracking-widest uppercase text-[#22c55e] mb-2">📖 Learn</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {learn.heading}
              </h2>
              <p className="text-[#8e8e93] mt-2 max-w-lg">{learn.description}</p>
            </div>
            <Link href={learn.href} className="text-[#6366f1] font-semibold text-sm hover:underline whitespace-nowrap">
              {learn.cta} →
            </Link>
          </div>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {learn.cards.map((item) => (
              <VisualCard key={item.href} item={item} />
            ))}
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["Crypto Basics", "DeFi", "Layer 2", "Security", "NFTs", "Trading"].map((tag) => (
              <Link
                key={tag}
                href={`/learn#${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1c1c1e] border border-[#2c2c2e] text-[#8e8e93] hover:border-[#6366f1] hover:text-white transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* ── SECTION: COURSES ── */}
        <div
          id="courses"
          ref={coursesRef}
          style={{ scrollMarginTop: "112px" }}
          className="py-20 border-b border-[#1c1c1e]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="text-xs font-black tracking-widest uppercase text-[#818cf8] mb-2">🎓 Courses</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {level === "newbie" && "Start from zero"}
                  {level === "intermediate" && "Level up your DeFi game"}
                  {level === "degen" && "Master the deep end"}
                </h2>
                <p className="text-[#8e8e93] mt-2">
                  {level === "newbie" && "Structured paths with XP, quizzes, and badges. No experience needed."}
                  {level === "intermediate" && "In-depth courses on DeFi, Layer 2, and on-chain strategies."}
                  {level === "degen" && "Advanced courses for experienced traders and protocol researchers."}
                </p>
              </div>
              <Link href="/courses" className="text-[#6366f1] font-semibold text-sm hover:underline whitespace-nowrap">
                All courses →
              </Link>
            </div>

            {/* Horizontal scroll of course cards */}
            <div
              className="flex gap-4 overflow-x-auto pb-3"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#3c3c3e transparent" }}
            >
              {displayCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
              {/* View All card */}
              <Link
                href="/courses"
                className="flex-shrink-0 w-52 flex flex-col items-center justify-center bg-[#1c1c1e] border border-dashed border-[#3c3c3e] rounded-2xl p-6 hover:border-[#6366f1] hover:bg-[#1c1c2e] transition-all group"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">🎓</span>
                <span className="text-sm font-bold text-[#8e8e93] group-hover:text-indigo-300 transition-colors text-center">View All Courses</span>
                <span className="text-xs text-[#636366] mt-1 text-center">50+ lessons · 5 tracks</span>
              </Link>
            </div>

            {/* XP strip */}
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-between p-4 rounded-2xl bg-[#1c1c1e] border border-[#2c2c2e]">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-sm font-bold text-white">Earn XP as you learn</div>
                  <div className="text-xs text-[#636366]">Complete courses to unlock badges and level up</div>
                </div>
              </div>
              {xp > 0 ? (
                <div className="text-sm font-bold text-[#818cf8]">
                  You have {xp.toLocaleString()} XP 🔥
                </div>
              ) : (
                <Link href="/courses/crypto-101" className="text-xs font-bold text-[#6366f1] hover:underline">
                  Start earning XP →
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* ── SECTION: ECOSYSTEM (App Store) ── */}
        <div
          id="ecosystem"
          ref={ecosystemRef}
          style={{ scrollMarginTop: "112px" }}
          className="py-20 border-b border-[#1c1c1e]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="text-xs font-black tracking-widest uppercase text-[#06b6d4] mb-2">🌐 Ecosystem</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {level === "newbie" && "Start with the best apps"}
                  {level === "intermediate" && "Explore top DeFi protocols"}
                  {level === "degen" && "Elite-tier protocols"}
                </h2>
                <p className="text-[#8e8e93] mt-2 max-w-lg">
                  {level === "newbie" && "The safest, most popular apps to get started with. Wallets, swaps, and simple DeFi."}
                  {level === "intermediate" && "Battle-tested DeFi protocols across multiple chains. Lending, liquidity, and staking."}
                  {level === "degen" && "Perpetuals, complex yield strategies, and analytics tools used by serious traders."}
                </p>
              </div>
              <Link href="/ecosystem" className="text-[#6366f1] font-semibold text-sm hover:underline whitespace-nowrap">
                Full App Store →
              </Link>
            </div>

            <EcosystemSection level={level} />
          </div>
        </div>

        {/* ── SECTION: TOOLS ── */}
        <div
          id="tools"
          ref={toolsRef}
          style={{ scrollMarginTop: "112px" }}
          className="py-20 border-b border-[#1c1c1e]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="text-xs font-black tracking-widest uppercase text-[#f59e0b] mb-2">🔧 Tools</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {tools.heading}
                </h2>
                <p className="text-[#8e8e93] mt-2 max-w-lg">{tools.description}</p>
              </div>
              <Link href="/tools" className="text-[#6366f1] font-semibold text-sm hover:underline whitespace-nowrap">
                All 92+ tools →
              </Link>
            </div>

            {/* Tools grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {tools.cards.map((item) => (
                <VisualCard key={item.href} item={item} />
              ))}
            </div>

            {/* Full tools grid (compact) */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { href: "/tools/converter",        title: "Converter",        emoji: "💱" },
                { href: "/tools/dca-calculator",   title: "DCA Calc",         emoji: "📊" },
                { href: "/tools/gas-tracker",      title: "Gas Tracker",      emoji: "⛽" },
                { href: "/tools/portfolio-tracker", title: "Portfolio",       emoji: "📈" },
                { href: "/tools/staking-rewards",  title: "Staking Calc",     emoji: "🥩" },
                { href: "/tools/fear-greed-timeline", title: "Fear & Greed",  emoji: "😱" },
                { href: "/tools/perp-funding",     title: "Funding Rates",    emoji: "🔥" },
                { href: "/tools/correlation-matrix", title: "Correlation",    emoji: "🔗" },
              ].map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="flex items-center gap-2 p-3 rounded-xl bg-[#1c1c1e] border border-[#2c2c2e] hover:border-[#6366f1] transition-all"
                >
                  <span className="text-base">{t.emoji}</span>
                  <span className="text-xs font-medium text-[#8e8e93] hover:text-white">{t.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MISSION SECTION (final)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 text-center bg-[#050507] border-t border-[#1c1c1e]">
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="text-7xl sm:text-9xl font-black leading-none mb-4"
            style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            1B
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            That&apos;s our goal. One billion users in Web3.
          </h2>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed mb-10 max-w-2xl mx-auto">
            Not because we think everyone should trade crypto, but because everyone deserves to understand the financial system being built around them. Education is the way in.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
              style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)" }}
            >
              🎓 Start Learning Free
            </Link>
            <Link
              href="/ecosystem"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-[#8e8e93] font-medium text-base border border-[#2c2c2e] bg-[#1c1c1e] hover:border-[#06b6d4] hover:text-white transition-all"
            >
              🌐 Explore dApps
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
