"use client";

import { useState } from "react";
import Link from "next/link";
import RelatedContent from '@/components/RelatedContent';

import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  category: "bitcoin" | "ethereum" | "defi" | "regulation" | "nft" | "altcoin" | "market";
  sentiment: "bullish" | "bearish" | "neutral";
  timeAgo: string;
  readTime: string;
  trending: boolean;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1", title: "Bitcoin Surges Past $88K as Institutional Demand Accelerates",
    summary: "Major asset managers report record inflows into Bitcoin ETFs, with BlackRock's IBIT leading at $2.1B weekly volume. Analysts point to a potential supply shock.",
    source: "CoinDesk", category: "bitcoin", sentiment: "bullish", timeAgo: "25m ago", readTime: "3 min", trending: true,
  },
  {
    id: "2", title: "Ethereum Pectra Upgrade: What Developers Need to Know",
    summary: "The upcoming Pectra upgrade combines Prague and Electra changes, introducing EIP-7702 for account abstraction and EIP-7251 for increased validator limits.",
    source: "The Block", category: "ethereum", sentiment: "bullish", timeAgo: "1h ago", readTime: "5 min", trending: true,
  },
  {
    id: "3", title: "SEC Approves Three New Spot Ethereum ETF Applications",
    summary: "Following BlackRock and Fidelity, three additional asset managers have received the green light for spot ETH ETFs, expanding institutional access to Ethereum.",
    source: "Bloomberg", category: "regulation", sentiment: "bullish", timeAgo: "2h ago", readTime: "4 min", trending: true,
  },
  {
    id: "4", title: "Solana DeFi TVL Reaches $32B All-Time High",
    summary: "Driven by Jupiter's perpetuals, Marinade staking, and new lending protocols, Solana's total value locked has never been higher.",
    source: "DeFi Llama", category: "defi", sentiment: "bullish", timeAgo: "3h ago", readTime: "3 min", trending: false,
  },
  {
    id: "5", title: "EU MiCA Regulations: Six-Month Impact Report Shows Mixed Results",
    summary: "While compliance costs have increased for smaller exchanges, the regulatory clarity has attracted traditional finance players to the European crypto market.",
    source: "Reuters", category: "regulation", sentiment: "neutral", timeAgo: "4h ago", readTime: "6 min", trending: false,
  },
  {
    id: "6", title: "NFT Market Sees Revival as AI-Generated Collections Gain Traction",
    summary: "A new wave of AI-assisted NFT projects is breathing life into the market, with weekly volumes up 340% from January lows.",
    source: "NFT Now", category: "nft", sentiment: "bullish", timeAgo: "5h ago", readTime: "4 min", trending: false,
  },
  {
    id: "7", title: "Render Network Partners with Major Film Studio for Decentralized VFX",
    summary: "RNDR token surges 12% as Render Network announces a partnership with a top-5 film studio to handle visual effects rendering on its decentralized GPU network.",
    source: "Decrypt", category: "altcoin", sentiment: "bullish", timeAgo: "6h ago", readTime: "3 min", trending: false,
  },
  {
    id: "8", title: "Whale Alert: 12,000 BTC Moved from Exchanges to Cold Storage",
    summary: "On-chain analytics reveal a massive withdrawal pattern, with exchange reserves dropping to levels not seen since 2018. Accumulation signal strengthens.",
    source: "Glassnode", category: "bitcoin", sentiment: "bullish", timeAgo: "7h ago", readTime: "2 min", trending: false,
  },
  {
    id: "9", title: "Aave V4 Proposal Introduces Cross-Chain Unified Liquidity",
    summary: "The governance proposal for Aave V4 would enable unified liquidity pools across Ethereum, Arbitrum, Base, and Polygon with a single deposit.",
    source: "Aave Governance", category: "defi", sentiment: "bullish", timeAgo: "8h ago", readTime: "5 min", trending: false,
  },
  {
    id: "10", title: "Memecoin Sector Cools Off After 6-Week Rally",
    summary: "DOGE, PEPE, and SHIB all post losses as traders rotate into AI and RWA tokens. Analysts suggest memecoin euphoria may be waning.",
    source: "CoinTelegraph", category: "market", sentiment: "bearish", timeAgo: "9h ago", readTime: "3 min", trending: false,
  },
];

const CATEGORIES = [
  { key: "all", label: "All News" },
  { key: "bitcoin", label: "Bitcoin" },
  { key: "ethereum", label: "Ethereum" },
  { key: "defi", label: "DeFi" },
  { key: "regulation", label: "Regulation" },
  { key: "altcoin", label: "Altcoins" },
  { key: "nft", label: "NFTs" },
  { key: "market", label: "Market" },
];

const SENTIMENT_COLORS = {
  bullish: "text-green-400 bg-green-500/15 border-green-500/30",
  bearish: "text-red-400 bg-red-500/15 border-red-500/30",
  neutral: "text-yellow-400 bg-yellow-500/15 border-yellow-500/30",
};

const CATEGORY_COLORS: Record<string, string> = {
  bitcoin: "text-orange-400 bg-orange-500/15",
  ethereum: "text-indigo-400 bg-indigo-500/15",
  defi: "text-purple-400 bg-purple-500/15",
  regulation: "text-amber-400 bg-amber-500/15",
  nft: "text-pink-400 bg-pink-500/15",
  altcoin: "text-cyan-400 bg-cyan-500/15",
  market: "text-blue-400 bg-blue-500/15",
};

export default function NewsFeedPage() {
  const [category, setCategory] = useState("all");
  const [sentimentFilter, setSentimentFilter] = useState<string>("all");

  const filtered = NEWS_ITEMS.filter((n) => {
    if (category !== "all" && n.category !== category) return false;
    if (sentimentFilter !== "all" && n.sentiment !== sentimentFilter) return false;
    return true;
  });

  const trending = NEWS_ITEMS.filter((n) => n.trending);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/news-feed"
        name="Bitcoin Surges Past $88K as Institutional Demand Accelerates"
        description="Bitcoin Surges Past $88K as Institutional Demand Accelerates"
      />
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-8">
        <Link href="/" className="hover:text-[var(--color-text)]">Home</Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-[var(--color-text)]">Tools</Link>
        <span>/</span>
        <span className="text-[var(--color-text)]">News Feed</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
        Crypto News Aggregator
      </h1>
      <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl">
        Stay on top of the crypto market. Curated news from top sources, filtered by topic and sentiment.
      </p>

      {/* Trending Bar */}
      <div className="glass p-4 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Trending Now</span>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {trending.map((n) => (
            <div key={n.id} className="flex-1 p-3 rounded-xl bg-[var(--glass-subtle-bg)] border border-[var(--glass-border)]">
              <div className="text-sm font-semibold text-[var(--color-text)] line-clamp-2">{n.title}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-[var(--color-text-secondary)]">{n.source}</span>
                <span className="text-xs text-[var(--color-text-secondary)]">{n.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setCategory(c.key)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
              category === c.key
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "bg-[var(--glass-bg)] text-[var(--color-text-secondary)] border-[var(--glass-border)] hover:border-[var(--color-primary)]"
            }`}
          >
            {c.label}
          </button>
        ))}
        <div className="h-6 w-px bg-[var(--glass-border)] mx-1 self-center" />
        {["all", "bullish", "bearish", "neutral"].map((s) => (
          <button
            key={s}
            onClick={() => setSentimentFilter(s)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
              sentimentFilter === s
            }`}
          >
            {s === "all" ? "Any Sentiment" : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* News List */}
      <div className="space-y-4">
        {filtered.map((n) => (
          <article key={n.id} className="glass p-5 hover:border-[var(--color-primary)] transition-colors cursor-pointer">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${CATEGORY_COLORS[n.category]}`}>
                    {n.category}
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${SENTIMENT_COLORS[n.sentiment]}`}>
                    {n.sentiment}
                  </span>
                  {n.trending && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[var(--color-primary)]/15 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                      Trending
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-[var(--color-text)] mb-2 leading-snug">{n.title}</h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{n.summary}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-[var(--color-text-secondary)]">
                  <span className="font-semibold">{n.source}</span>
                  <span>{n.timeAgo}</span>
                  <span>{n.readTime} read</span>
                </div>
              </div>
            </div>
          
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "News Feed",
              "url": "https://degen0x.com/tools/news-feed",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </article>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-[var(--color-text-secondary)]">
            No news matches your filters. Try a different combination.
          </div>
        )}
      </div>

      <p className="text-xs text-[var(--color-text-secondary)] mt-8 text-center">
        News data is simulated for demonstration. In production, this aggregates from CoinDesk, The Block, Decrypt, and other sources via API.
      </p>
      <RelatedContent category="tools" currentSlug="/tools/news-feed" />
    </div>
  );
}
