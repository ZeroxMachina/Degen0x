"use client";

import Link from "next/link";

interface HeadlineItem {
  slug: string;
  title: string;
  date: string;
  category: string;
}

const latestHeadlines: HeadlineItem[] = [
  {
    slug: "bitcoin-etf-inflows-surge-march-2026",
    title: "Bitcoin ETF Inflows Hit $2.1B in a Single Week",
    date: "2026-03-08",
    category: "Bitcoin",
  },
  {
    slug: "ethereum-pectra-upgrade-what-to-know",
    title: "Ethereum Pectra Upgrade: Everything You Need to Know",
    date: "2026-03-07",
    category: "Ethereum",
  },
  {
    slug: "solana-defi-tvl-record-2026",
    title: "Solana DeFi TVL Breaks $12B — New All-Time High",
    date: "2026-03-06",
    category: "DeFi",
  },
  {
    slug: "sec-crypto-broker-dealer-rules-2026",
    title: "SEC Finalizes Crypto Broker-Dealer Rules",
    date: "2026-03-05",
    category: "Regulation",
  },
  {
    slug: "best-hardware-wallets-2026-comparison",
    title: "Best Hardware Wallets of 2026: Full Comparison",
    date: "2026-03-04",
    category: "Bitcoin",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
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

  const diffTime = today.getTime() - date.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 30) {
    return `${diffDays}d ago`;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function LatestNews() {
  return (
    <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-[var(--glass-border)]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-[var(--color-text)]">📰 Latest News</h3>
        <Link
          href="/news"
          className="text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-3">
        {latestHeadlines.map((article, index) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="group block p-3 rounded-xl hover:bg-[var(--glass-bg-hover)] transition-all duration-300 border border-transparent hover:border-[var(--glass-border)]"
          >
            <div className="flex items-start gap-3">
              {/* Number Badge */}
              <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[var(--color-text-secondary)] bg-[var(--glass-bg)]">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Category Tag */}
                <div className="mb-1.5">
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: CATEGORY_COLORS[article.category] || "#6366f1" }}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Headline */}
                <h4 className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-snug line-clamp-2">
                  {article.title}
                </h4>

                {/* Date */}
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  {formatDate(article.date)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="/news"
        className="mt-6 w-full block text-center py-2.5 px-4 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-all duration-300"
      >
        Explore Full News Feed
      </Link>
    </div>
  );
}
