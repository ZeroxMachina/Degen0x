"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface NewsItem {
  slug: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  category: "Bitcoin" | "Ethereum" | "DeFi" | "Regulation" | "NFTs" | "Markets";
}

const newsData: NewsItem[] = [
  {
    slug: "bitcoin-etf-inflows-surge-march-2026",
    title: "Bitcoin ETF Inflows Hit $2.1B in a Single Week",
    summary: "Spot Bitcoin ETFs recorded their largest single-week inflows since approval as institutional demand accelerates. BlackRock's iShares Bitcoin Trust captured $890 million.",
    source: "CryptoDegen News",
    date: "2026-03-08",
    category: "Bitcoin",
  },
  {
    slug: "ethereum-pectra-upgrade-what-to-know",
    title: "Ethereum Pectra Upgrade: Everything You Need to Know",
    summary: "The Pectra upgrade brings account abstraction, validator improvements, and major UX wins. EIP-7702 allows EOAs to behave like smart contracts during transactions.",
    source: "CryptoDegen News",
    date: "2026-03-07",
    category: "Ethereum",
  },
  {
    slug: "solana-defi-tvl-record-2026",
    title: "Solana DeFi TVL Breaks $12B — Which Protocols Are Driving Growth",
    summary: "Solana's total value locked in DeFi protocols has hit an all-time high of $12.4 billion. Marinade Finance leads with $2.1B, followed by Raydium at $1.8B.",
    source: "CryptoDegen News",
    date: "2026-03-06",
    category: "DeFi",
  },
  {
    slug: "sec-crypto-broker-dealer-rules-2026",
    title: "SEC Finalizes Crypto Broker-Dealer Rules: What Changes for US Exchanges",
    summary: "The SEC's new framework for crypto broker-dealers provides long-awaited regulatory clarity but imposes significant compliance costs. Coinbase and Kraken are well-positioned.",
    source: "CryptoDegen News",
    date: "2026-03-05",
    category: "Regulation",
  },
  {
    slug: "best-hardware-wallets-2026-comparison",
    title: "Best Hardware Wallets of 2026: Ledger vs Trezor vs Coldcard",
    summary: "We tested the top hardware wallets of 2026 for security, usability, and multi-chain support. Ledger Flex leads with touchscreen and 5,500+ coin support.",
    source: "CryptoDegen News",
    date: "2026-03-04",
    category: "Bitcoin",
  },
  {
    slug: "aave-v4-launch-features-breakdown",
    title: "Aave v4 Launches: The Biggest DeFi Upgrade of 2026 Explained",
    summary: "Aave v4 introduces a unified liquidity layer, GHO native integration, and cross-chain capabilities. This eliminates fragmentation across separate pools.",
    source: "CryptoDegen News",
    date: "2026-03-03",
    category: "DeFi",
  },
  {
    slug: "coinbase-q4-2025-earnings-analysis",
    title: "Coinbase Q4 2025 Earnings: $1.8B Revenue, Institutional Business Doubles",
    summary: "Coinbase posted its strongest quarterly results since going public with $1.83B revenue. Institutional business doubled with Coinbase Prime reaching $220B AUM.",
    source: "CryptoDegen News",
    date: "2026-03-02",
    category: "Markets",
  },
  {
    slug: "top-nft-collections-march-2026",
    title: "Top NFT Collections to Watch in March 2026 — Volume & Floor Prices",
    summary: "NFT market volume is recovering after an 18-month decline. CryptoPunks lead with $145M in 30-day volume, followed by BAYC at $89M.",
    source: "CryptoDegen News",
    date: "2026-03-01",
    category: "NFTs",
  },
  {
    slug: "bitcoin-lightning-network-growth-2026",
    title: "Lightning Network Capacity Hits 10,000 BTC — Is Bitcoin Payments Ready?",
    summary: "Bitcoin Lightning Network crossed 10,000 BTC in capacity for the first time. Payment reliability has improved dramatically with 99% success rates for small payments.",
    source: "CryptoDegen News",
    date: "2026-02-28",
    category: "Bitcoin",
  },
  {
    slug: "crypto-tax-season-guide-2026",
    title: "Crypto Tax Season 2026: What's New and How to File Correctly",
    summary: "New IRS rules, the first year of mandatory 1099-DA reporting, and DeFi tax treatment updates make 2026 the most complex crypto tax season yet.",
    source: "CryptoDegen News",
    date: "2026-02-25",
    category: "Regulation",
  },
  {
    slug: "stablecoin-regulations-2026-update",
    title: "Global Stablecoin Regulations: EU, US, and Asia's New Rules Explained",
    summary: "Regulatory frameworks for stablecoins are finalizing across major jurisdictions. The EU's Markets in Crypto Regulation takes effect January 2026.",
    source: "CryptoDegen News",
    date: "2026-02-24",
    category: "Regulation",
  },
  {
    slug: "defi-yield-farming-strategies-2026",
    title: "Best DeFi Yield Farming Strategies for 2026 — Updated Analysis",
    summary: "Yields on major DeFi platforms vary widely. We analyze the risk-return profiles of Aave, Compound, Lido, and emerging protocols.",
    source: "CryptoDegen News",
    date: "2026-02-22",
    category: "DeFi",
  },
  {
    slug: "ethereum-layer-2-battle-2026",
    title: "Ethereum Layer 2 Battle: Arbitrum vs Optimism vs Base in 2026",
    summary: "Layer 2 networks continue to fragment the Ethereum ecosystem. We compare transaction costs, security models, and developer adoption across major L2s.",
    source: "CryptoDegen News",
    date: "2026-02-20",
    category: "Ethereum",
  },
  {
    slug: "ai-crypto-tokens-march-2026",
    title: "AI + Crypto Tokens: Which Projects Are Building Real Products?",
    summary: "The convergence of AI and blockchain is creating thousands of new tokens. We separate genuine innovation from hype in the AI-crypto space.",
    source: "CryptoDegen News",
    date: "2026-02-18",
    category: "Markets",
  },
  {
    slug: "nft-gaming-renaissance-2026",
    title: "NFT Gaming Renaissance: Top Play-to-Earn Games Gaining Mainstream Traction",
    summary: "Play-to-earn gaming is evolving beyond speculative tokens. Axie Infinity, Decentraland, and new competitors show real gameplay and monetization.",
    source: "CryptoDegen News",
    date: "2026-02-16",
    category: "NFTs",
  },
];

const CATEGORIES = ["Bitcoin", "Ethereum", "DeFi", "Regulation", "NFTs", "Markets"] as const;

const CATEGORY_COLORS: Record<NewsItem["category"], string> = {
  Bitcoin: "#f7931a",
  Ethereum: "#627eea",
  DeFi: "#8b5cf6",
  Regulation: "#ef4444",
  NFTs: "#d946ef",
  Markets: "#22c55e",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  } else if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function NewsFeed() {
  const [activeCategory, setActiveCategory] = useState<NewsItem["category"] | "All">("All");

  const filteredNews = useMemo(() => {
    if (activeCategory === "All") {
      return newsData;
    }
    return newsData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === "All"
              ? "bg-[var(--color-primary)] text-white"
              : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--glass-bg-hover)]"
          }`}
        >
          All News
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "text-white"
                : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--glass-bg-hover)]"
            }`}
            style={
              activeCategory === category
                ? { backgroundColor: CATEGORY_COLORS[category] }
                : undefined
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="group glass rounded-2xl overflow-hidden p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:bg-[var(--glass-bg-hover)] border border-[var(--glass-border)] hover:border-[var(--glass-border-hover)]"
          >
            {/* Category Tag */}
            <div className="mb-4 flex items-center justify-between">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: CATEGORY_COLORS[article.category] }}
              >
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-snug line-clamp-2">
              {article.title}
            </h3>

            {/* Summary */}
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2 leading-relaxed">
              {article.summary}
            </p>

            {/* Footer */}
            <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
              <span className="font-medium">{article.source}</span>
              <span>{formatDate(article.date)}</span>
            </div>

            {/* Hover Arrow */}
            <div className="mt-4 text-[var(--color-primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
              Read More →
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--color-text-secondary)] text-lg">
            No news articles found for {activeCategory}
          </p>
        </div>
      )}
    </div>
  );
}
