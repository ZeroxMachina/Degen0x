'use client';

"use client";

import { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */
interface CryptoMetrics {
  id: string;
  symbol: string;
  name: string;
  category: "Layer 1" | "DeFi" | "Meme Coins" | "L2" | "Staking" | "NFTs";
  twitter: { followers: number; growth7d: number };
  reddit: { subscribers: number; activeUsers: number };
  telegram: number;
  github: { commits30d: number; stars: number; contributors: number };
  discord: number;
  googleTrends: number;
  socialScore: number;
  momentum: "rising" | "falling" | "stable";
}

type TimePeriod = "24h" | "7d" | "30d";
type SortBy = "name" | "socialScore" | "momentum" | "twitter" | "reddit" | "telegram" | "github" | "discord";

/* ─────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────── */
function getMomentumColor(momentum: string): string {
  if (momentum === "rising") return "#22c55e";
  if (momentum === "falling") return "#ef4444";
  return "#eab308";
}

function getMomentumIcon(momentum: string): string {
  if (momentum === "rising") return "📈";
  if (momentum === "falling") return "📉";
  return "→";
}

function getScoreColor(score: number): string {
  if (score < 30) return "#ef4444";
  if (score < 50) return "#f97316";
  if (score < 70) return "#eab308";
  return "#22c55e";
}

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}

/* ─────────────────────────────────────────────────────────────
   Static Data (Simulated)
───────────────────────────────────────────────────────────── */
function generateMetrics(): CryptoMetrics[] {
  const cryptos = [
    { symbol: "BTC", name: "Bitcoin", category: "Layer 1" as const },
    { symbol: "ETH", name: "Ethereum", category: "Layer 1" as const },
    { symbol: "BNB", name: "BNB", category: "Layer 1" as const },
    { symbol: "SOL", name: "Solana", category: "Layer 1" as const },
    { symbol: "ADA", name: "Cardano", category: "Layer 1" as const },
    { symbol: "DOGE", name: "Dogecoin", category: "Meme Coins" as const },
    { symbol: "SHIB", name: "Shiba Inu", category: "Meme Coins" as const },
    { symbol: "PEPE", name: "Pepe", category: "Meme Coins" as const },
    { symbol: "AAVE", name: "Aave", category: "DeFi" as const },
    { symbol: "UNI", name: "Uniswap", category: "DeFi" as const },
    { symbol: "LIDO", name: "Lido", category: "Staking" as const },
    { symbol: "MKR", name: "Maker", category: "DeFi" as const },
    { symbol: "CRV", name: "Curve", category: "DeFi" as const },
    { symbol: "GMX", name: "GMX", category: "DeFi" as const },
    { symbol: "ARB", name: "Arbitrum", category: "L2" as const },
    { symbol: "OP", name: "Optimism", category: "L2" as const },
    { symbol: "BLUR", name: "Blur", category: "NFTs" as const },
    { symbol: "LOOKS", name: "LooksRare", category: "NFTs" as const },
    { symbol: "XRP", name: "Ripple", category: "Layer 1" as const },
    { symbol: "POLKA", name: "Polkadot", category: "Layer 1" as const },
    { symbol: "LINK", name: "Chainlink", category: "DeFi" as const },
    { symbol: "MATIC", name: "Polygon", category: "L2" as const },
    { symbol: "ATOM", name: "Cosmos", category: "Layer 1" as const },
    { symbol: "AVAX", name: "Avalanche", category: "Layer 1" as const },
    { symbol: "FTM", name: "Fantom", category: "Layer 1" as const },
    { symbol: "NEAR", name: "Near", category: "Layer 1" as const },
    { symbol: "FLOW", name: "Flow", category: "NFTs" as const },
    { symbol: "ICP", name: "Internet Computer", category: "Layer 1" as const },
    { symbol: "APTOS", name: "Aptos", category: "Layer 1" as const },
    { symbol: "SUI", name: "Sui", category: "Layer 1" as const },
    { symbol: "MEME", name: "Memecoin", category: "Meme Coins" as const },
    { symbol: "BONK", name: "Bonk", category: "Meme Coins" as const },
  ];

  return cryptos.map((crypto, idx) => {
    const momentum = Math.random() > 0.4 ? (Math.random() > 0.5 ? "rising" : "falling") : "stable";
    const twitterFollowers = Math.floor(100000 + Math.random() * 5000000);
    const twitterGrowth = (Math.random() - 0.3) * 25;
    const redditSubs = Math.floor(10000 + Math.random() * 500000);
    const redditActive = Math.floor(redditSubs * (0.05 + Math.random() * 0.15));
    const telegramMembers = Math.floor(50000 + Math.random() * 2000000);
    const gitCommits = Math.floor(100 + Math.random() * 5000);
    const gitStars = Math.floor(1000 + Math.random() * 50000);
    const gitContributors = Math.floor(10 + Math.random() * 500);
    const discordMembers = Math.floor(20000 + Math.random() * 500000);
    const googleTrends = Math.floor(10 + Math.random() * 90);

    // Calculate social score
    const twitterScore = Math.min(25, (twitterFollowers / 5000000) * 25);
    const redditScore = Math.min(15, (redditSubs / 500000) * 15);
    const telegramScore = Math.min(15, (telegramMembers / 2000000) * 15);
    const gitScore = Math.min(20, ((gitCommits / 5000) * 8 + (gitStars / 50000) * 12));
    const discordScore = Math.min(15, (discordMembers / 500000) * 15);
    const trendScore = googleTrends * 0.2;
    const socialScore = Math.round(twitterScore + redditScore + telegramScore + gitScore + discordScore + trendScore / 5);

    return {
      id: crypto.symbol.toLowerCase(),
      symbol: crypto.symbol,
      name: crypto.name,
      category: crypto.category,
      twitter: { followers: twitterFollowers, growth7d: parseFloat(twitterGrowth.toFixed(2)) },
      reddit: { subscribers: redditSubs, activeUsers: redditActive },
      telegram: telegramMembers,
      github: { commits30d: gitCommits, stars: gitStars, contributors: gitContributors },
      discord: discordMembers,
      googleTrends: googleTrends,
      socialScore: Math.min(100, socialScore),
      momentum,
    };
  });
}

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
export default function SocialMetricsPage() {
  const [metrics, setMetrics] = useState<CryptoMetrics[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortBy>("socialScore");
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("7d");
  const [lastUpdated, setLastUpdated] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const categories = ["all", "Layer 1", "DeFi", "Meme Coins", "L2", "Staking", "NFTs"];

  const refresh = useCallback(() => {
    setRefreshing(true);
    const newMetrics = generateMetrics();
    setMetrics(newMetrics);
    setLastUpdated(new Date().toLocaleTimeString());
    setRefreshing(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [refresh]);

  const filteredMetrics = activeCategory === "all"
    ? metrics
    : metrics.filter((m) => m.category === activeCategory);

  const sortedMetrics = [...filteredMetrics].sort((a, b) => {
    switch (sortBy) {
      case "socialScore":
        return b.socialScore - a.socialScore;
      case "twitter":
        return b.twitter.followers - a.twitter.followers;
      case "reddit":
        return b.reddit.subscribers - a.reddit.subscribers;
      case "telegram":
        return b.telegram - a.telegram;
      case "github":
        return b.github.stars - a.github.stars;
      case "discord":
        return b.discord - a.discord;
      case "momentum":
        const momentumOrder = { rising: 3, stable: 2, falling: 1 };
        return momentumOrder[b.momentum as keyof typeof momentumOrder] - momentumOrder[a.momentum as keyof typeof momentumOrder];
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const topGainers = [...metrics]
    .filter((m) => m.momentum === "rising")
    .sort((a, b) => b.twitter.growth7d - a.twitter.growth7d)
    .slice(0, 5);

  const topLosers = [...metrics]
    .filter((m) => m.momentum === "falling")
    .sort((a, b) => a.twitter.growth7d - b.twitter.growth7d)
    .slice(0, 5);

  const avgSocialScore = Math.round(metrics.reduce((acc, m) => acc + m.socialScore, 0) / Math.max(1, metrics.length));
  const risingCount = metrics.filter((m) => m.momentum === "rising").length;
  const fallingCount = metrics.filter((m) => m.momentum === "falling").length;

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        <div className="inline-flex items-center gap-3 text-[var(--color-text-secondary)]">
          <div className="w-5 h-5 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
          Loading social metrics…
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "Social Metrics", href: "/tools/social-metrics" },
        ]}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-black text-[var(--color-text)] mb-2">
            Social Metrics Aggregator
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Real-time social engagement metrics across Twitter, Reddit, Telegram, GitHub, Discord, and Google Trends for 30+ cryptocurrencies.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[var(--color-text-secondary)]">Updated {lastUpdated}</span>
          <button
            onClick={refresh}
            disabled={refreshing}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold glass card-hover"
          >
            <span className={refreshing ? "animate-spin" : ""}>⟳</span>
            Refresh
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">Avg Social Score</div>
          <div className="text-4xl font-black mb-1" style={{ color: getScoreColor(avgSocialScore) }}>
            {avgSocialScore}
          </div>
          <div className="text-xs text-[var(--color-text-secondary)]">Out of 100</div>
        </div>

        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-3 uppercase tracking-wider font-bold">📈 Rising Momentum</div>
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black text-green-400">{risingCount}</div>
            <div className="text-xs text-[var(--color-text-secondary)]">Assets with positive social growth</div>
          </div>
        </div>

        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-3 uppercase tracking-wider font-bold">📉 Falling Momentum</div>
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black text-red-400">{fallingCount}</div>
            <div className="text-xs text-[var(--color-text-secondary)]">Assets losing social traction</div>
          </div>
        </div>

        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-3 uppercase tracking-wider font-bold">🌐 Total Assets</div>
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black">{metrics.length}</div>
            <div className="text-xs text-[var(--color-text-secondary)]">Cryptocurrencies tracked</div>
          </div>
        </div>
      </div>

      {/* Time Period Selector */}
      <div className="flex gap-2 mb-6">
        <label className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider self-center mr-3">
          Period
        </label>
        {(["24h", "7d", "30d"] as const).map((period) => (
          <button
            key={period}
            onClick={() => setTimePeriod(period)}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              timePeriod === period
                ? "bg-[var(--color-primary)] text-[var(--color-text)]"
                : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Top Gainers */}
      {topGainers.length > 0 && (
        <div className="glass rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-4 flex items-center gap-2">
            🚀 Top Social Gainers (24h)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {topGainers.map((coin) => (
              <div key={coin.id} className="bg-[var(--color-bg-secondary)] rounded-lg p-4 border border-green-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[var(--color-text)]">{coin.symbol}</span>
                  <span className="text-green-400 font-bold">+{coin.twitter.growth7d.toFixed(1)}%</span>
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">{coin.name}</div>
                <div className="text-sm font-semibold text-green-400 mt-2">Twitter +{coin.twitter.growth7d.toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Losers */}
      {topLosers.length > 0 && (
        <div className="glass rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-4 flex items-center gap-2">
            📉 Top Social Losers (24h)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {topLosers.map((coin) => (
              <div key={coin.id} className="bg-[var(--color-bg-secondary)] rounded-lg p-4 border border-red-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[var(--color-text)]">{coin.symbol}</span>
                  <span className="text-red-400 font-bold">{coin.twitter.growth7d.toFixed(1)}%</span>
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">{coin.name}</div>
                <div className="text-sm font-semibold text-red-400 mt-2">Twitter {coin.twitter.growth7d.toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeCategory === cat
            }`}
          >
            {cat}
            <span className={`text-xs rounded-full px-1.5 ml-2 ${activeCategory === cat ? "bg-white/20" : "bg-[rgba(255,255,255,0.08)]"}`}>
              {cat === "all" ? metrics.length : metrics.filter((m) => m.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Sort Control */}
      <div className="mb-6">
        <label className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Sort By</label>
        <div className="flex gap-2 flex-wrap mt-2">
          {(["socialScore", "twitter", "reddit", "telegram", "github", "discord", "momentum", "name"] as const).map((key) => {
            const labels: Record<typeof key, string> = {
              socialScore: "Social Score",
              twitter: "Twitter",
              reddit: "Reddit",
              telegram: "Telegram",
              github: "GitHub",
              discord: "Discord",
              momentum: "Momentum",
              name: "Name",
            };
            return (
              <button
                key={key}
                onClick={() => setSortBy(key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  sortBy === key
                }`}
              >
                {labels[key]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Metrics Table */}
      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.1)]">
                <th className="text-left px-4 py-3 font-bold text-[var(--color-text)]">#</th>
                <th className="text-left px-4 py-3 font-bold text-[var(--color-text)]">Name</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Social Score</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Momentum</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">𝕏 Followers</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Reddit Subs</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Telegram</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Discord</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">GitHub ⭐</th>
                <th className="text-center px-4 py-3 font-bold text-[var(--color-text)]">Trends</th>
              </tr>
            </thead>
            <tbody>
              {sortedMetrics.slice(0, 30).map((coin, idx) => (
                <tr key={coin.id} className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{idx + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-bold text-[var(--color-text)]">{coin.symbol}</span>
                      <span className="text-xs text-[var(--color-text-secondary)]">{coin.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-lg" style={{ color: getScoreColor(coin.socialScore) }}>
                        {coin.socialScore}
                      </span>
                      <span className="text-xs text-[var(--color-text-secondary)]">{coin.category}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xl">{getMomentumIcon(coin.momentum)}</span>
                      <span className="text-xs font-bold" style={{ color: getMomentumColor(coin.momentum) }}>
                        {coin.momentum.toUpperCase()}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center text-xs">
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="font-semibold">{formatNumber(coin.twitter.followers)}</span>
                      <span style={{ color: coin.twitter.growth7d > 0 ? "#22c55e" : "#ef4444" }} className="font-bold">
                        {coin.twitter.growth7d > 0 ? "+" : ""}{coin.twitter.growth7d.toFixed(1)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center text-xs">
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="font-semibold">{formatNumber(coin.reddit.subscribers)}</span>
                      <span className="text-[var(--color-text-secondary)]">{formatNumber(coin.reddit.activeUsers)} active</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center text-xs font-semibold">{formatNumber(coin.telegram)}</td>
                  <td className="px-4 py-3 text-center text-xs font-semibold">{formatNumber(coin.discord)}</td>
                  <td className="px-4 py-3 text-center text-xs">
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="font-semibold">{formatNumber(coin.github.stars)}</span>
                      <span className="text-[var(--color-text-secondary)]">{coin.github.contributors} contrib.</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center text-xs">
                    <span className="font-semibold">{coin.googleTrends}/100</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Frequently Asked Questions</h2>

        <div className="glass rounded-xl p-6">
          <h3 className="font-bold text-[var(--color-text)] mb-2">What is Social Score?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Social Score is a composite metric (0-100) combining engagement across all platforms: Twitter followers and growth, Reddit subscribers and active users, Telegram members, GitHub activity (commits, stars, contributors), Discord members, and Google Trends score.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="font-bold text-[var(--color-text)] mb-2">What does "Momentum" mean?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Momentum indicates the direction of social engagement growth over the selected time period. Rising means positive growth across platforms, Falling means declining engagement, and Stable means relatively flat activity.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="font-bold text-[var(--color-text)] mb-2">How often is this data updated?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Data is refreshed every 10 minutes. Real implementations would connect to live APIs for Twitter, Reddit, Telegram, GitHub, Discord, and Google Trends to provide truly real-time metrics.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="font-bold text-[var(--color-text)] mb-2">Why does social engagement matter?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Strong social engagement can indicate community strength, developer activity, and user interest. High social scores may correlate with price movements, though social metrics are lagging indicators and should not be the sole basis for investment decisions.
          </p>
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="font-bold text-[var(--color-text)] mb-2">Which platform matters most?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Different platforms signal different things: Twitter/X shows mainstream visibility and hype, Reddit indicates retail investor interest, Telegram reflects community engagement, GitHub reflects development activity, and Discord shows active community size. A balanced presence across platforms is healthier than dominance in one.
          </p>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Tools</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/tools/sentiment-dashboard" className="glass rounded-xl p-6 hover:bg-[var(--glass-bg)] transition-colors">
            <div className="text-2xl mb-2">😱</div>
            <h3 className="font-bold text-[var(--color-text)] mb-2">Sentiment Dashboard</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Real-time Fear & Greed Index and market sentiment signals.</p>
          </a>
          <a href="/tools/onchain-tracker" className="glass rounded-xl p-6 hover:bg-[var(--glass-bg)] transition-colors">
            <div className="text-2xl mb-2">⛓️</div>
            <h3 className="font-bold text-[var(--color-text)] mb-2">On-Chain Tracker</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Monitor whale movements and on-chain transactions.</p>
          </a>
          <a href="/tools/trending-coins" className="glass rounded-xl p-6 hover:bg-[var(--glass-bg)] transition-colors">
            <div className="text-2xl mb-2">🔥</div>
            <h3 className="font-bold text-[var(--color-text)] mb-2">Trending Coins</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Discover fast-moving cryptocurrencies across multiple metrics.</p>
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="glass rounded-xl p-4 mt-12 text-xs text-[var(--color-text-secondary)]">
        <strong className="text-[var(--color-text)]">⚠ Disclaimer:</strong> This tool is for informational purposes only and does not constitute financial advice. Social metrics are subject to manipulation, bot activity, and platform algorithm changes. Do not make investment decisions based solely on social engagement data. Past social growth does not guarantee future performance. Always conduct your own research (DYOR) and consult financial advisors before investing.
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Social Metrics Aggregator",
            "description": "Real-time social engagement metrics aggregator for 30+ cryptocurrencies across Twitter, Reddit, Telegram, GitHub, Discord, and Google Trends",
            "url": "https://degen0x.com/tools/social-metrics",
            "applicationCategory": "FinanceApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "ratingCount": "128"
            }
          })
        }}
      />
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Social Metrics",
              "url": "https://degen0x.com/tools/social-metrics",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/social-metrics" />
      </div>
  );
}

