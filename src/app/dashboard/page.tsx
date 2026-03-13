"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { CATEGORIES } from "@/lib/constants";

// Dynamic imports for heavy client components
const MarketPulseHero = dynamic(() => import("@/components/MarketPulseHero"), { ssr: false });
const WebSocketPriceFeed = dynamic(() => import("@/components/WebSocketPriceFeed"), { ssr: false });
const TrendingCoins = dynamic(() => import("@/components/TrendingCoins"), { ssr: false });
const MarketPulse = dynamic(() => import("@/components/MarketPulse"), { ssr: false });
const TopMovers = dynamic(() => import("@/components/TopMovers"), { ssr: false });
const TokenUnlockCalendar = dynamic(() => import("@/components/TokenUnlockCalendar"), { ssr: false });
const FearGreedWidget = dynamic(() => import("@/components/FearGreedWidget"), { ssr: false });
const LatestNews = dynamic(() => import("@/components/LatestNews"), { ssr: false });
const WhaleAlertFeed = dynamic(() => import("@/components/WhaleAlertFeed"), { ssr: false });
const TrendingNewsFeed = dynamic(() => import("@/components/TrendingNewsFeed"), { ssr: false });
const PortfolioSimulator = dynamic(() => import("@/components/PortfolioSimulator"), { ssr: false });
const MarketOverview = dynamic(() => import("@/components/MarketOverview"), { ssr: false });
const NewsletterSignup = dynamic(() => import("@/components/NewsletterSignup"), { ssr: false });
const CategoryCard = dynamic(() => import("@/components/CategoryCard"), { ssr: false });

const TOOL_SHORTCUTS = [
  { href: "/tools/converter", icon: "🔄", label: "Converter" },
  { href: "/tools/dca-calculator", icon: "📊", label: "DCA Calc" },
  { href: "/tools/gas-tracker", icon: "⛽", label: "Gas Tracker" },
  { href: "/tools/portfolio-tracker", icon: "💼", label: "Portfolio" },
  { href: "/tools/staking-rewards", icon: "💰", label: "Staking" },
  { href: "/tools/fear-greed-timeline", icon: "📈", label: "Fear & Greed" },
  { href: "/tools/advanced-charting", icon: "📊", label: "Charts" },
  { href: "/tools/portfolio-rebalancer", icon: "⚖️", label: "Rebalancer" },
  { href: "/tools/tax-loss-harvester", icon: "🧾", label: "Tax Harvest" },
  { href: "/tools/crypto-calendar", icon: "📅", label: "Calendar" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      {/* Dashboard Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-text)]">Dashboard</h1>
            <p className="text-[var(--color-text-secondary)] text-sm mt-1">
              Your real-time crypto command center
            </p>
          </div>
          <Link
            href="/tools"
            className="glass px-4 py-2 text-sm font-semibold text-[var(--color-primary)] card-hover rounded-xl"
          >
            All 92+ Tools →
          </Link>
        </div>
      </section>

      {/* Market Pulse Hero — Live Price Ticker */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <MarketPulseHero />
      </section>

      {/* WebSocket Live Price Feed */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <WebSocketPriceFeed />
      </section>

      {/* Tool Shortcuts Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">Quick Tools</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {TOOL_SHORTCUTS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="glass flex-shrink-0 px-4 py-3 rounded-xl card-hover flex items-center gap-2 min-w-fit"
            >
              <span className="text-lg">{tool.icon}</span>
              <span className="text-sm font-semibold text-[var(--color-text)] whitespace-nowrap">{tool.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Coins */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <TrendingCoins />
      </section>

      {/* Market Pulse Widget */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Market Pulse</h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-6">
          Real-time market sentiment, top movers, and trending tokens.
        </p>
        <MarketPulse />
      </section>

      {/* Top Movers + Token Unlocks */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TopMovers />
          <TokenUnlockCalendar />
        </div>
      </section>

      {/* Fear & Greed + Latest News + Whale Alerts */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <FearGreedWidget />
          <LatestNews />
          <WhaleAlertFeed />
        </div>
      </section>

      {/* Trending News Feed */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <TrendingNewsFeed />
      </section>

      {/* Portfolio Simulator */}
      <section className="py-8">
        <PortfolioSimulator />
      </section>

      {/* Market Overview */}
      <section className="py-8">
        <MarketOverview />
      </section>

      {/* Explore All Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2 text-center">
          Explore All Categories
        </h2>
        <p className="text-[var(--color-text-secondary)] text-center mb-8 max-w-2xl mx-auto text-sm">
          From exchanges to taxes, wallets to DeFi — every corner of the crypto ecosystem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <NewsletterSignup variant="banner" />
      </section>
    </div>
  );
}
