import type { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import LivePriceTable from "@/components/LivePriceTable";
import { tokens, TOKEN_CATEGORIES } from "@/data/tokens";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Prices — Bitcoin, Ethereum & Top Tokens | degen0x`,
  description: `Track crypto prices, market caps, and 24h changes for Bitcoin, Ethereum, Solana, and 100+ top cryptocurrencies. Expert analysis and investment guides for every major asset class.`,
  alternates: { canonical: `${SITE_URL}/prices` },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

function PriceChange({ change }: { change: number }) {
  const isPositive = change >= 0;
  return (
    <span className={`text-sm font-semibold ${isPositive ? "text-green-400" : "text-red-400"}`}>
      {isPositive ? "▲" : "▼"} {Math.abs(change).toFixed(1)}%
    </span>
  );
}

const CATEGORY_LABELS: Record<string, string> = {
  layer1: "Layer 1", layer2: "Layer 2", defi: "DeFi", stablecoin: "Stablecoin",
  meme: "Meme", ai: "AI & Data", infrastructure: "Infrastructure", gaming: "Gaming",
};

const CATEGORY_COLORS: Record<string, string> = {
  layer1: "#6366f1", layer2: "#06b6d4", defi: "#8b5cf6", stablecoin: "#22c55e",
  meme: "#f59e0b", ai: "#ec4899", infrastructure: "#64748b", gaming: "#d946ef",
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Prices', },
  ],
};

export default function PricesPage() {
  const topGainers = [...tokens].sort((a, b) => b.change24h - a.change24h).slice(0, 5);
  const topLosers = [...tokens].sort((a, b) => a.change24h - b.change24h).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Crypto Prices — ${SITE_NAME}`,
    description: "Live cryptocurrency prices and market data. Bitcoin, Ethereum, Solana, and 5,000+ altcoins. Real-time charts, technical analysis, and tracking.",
    url: `${SITE_URL}/prices`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Prices", href: "/prices" }]} />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">Live Cryptocurrency Prices</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Real-time prices and market data for Bitcoin, Ethereum, and the top 20 cryptocurrencies.
            Live-updating data with 24h, 7d performance metrics and 7-day sparkline charts.
          </p>
        </div>

        {/* Live Price Table */}
        <section className="mb-12">
          <LivePriceTable />
          <p className="text-xs text-[var(--color-text-secondary)] mt-2">
            Market data powered by CoinGecko. Updates every 60 seconds. Last updated {CURRENT_MONTH} {CURRENT_YEAR}.
          </p>
        </section>

        {/* Market Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Market Cap", value: "$2.87T", change: 2.1 },
            { label: "24h Volume", value: "$94.2B", change: 8.4 },
            { label: "BTC Dominance", value: "60.6%", change: 0.3 },
            { label: "DeFi TVL", value: "$120B", change: 4.2 },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4">
              <div className="text-xs text-[var(--color-text-secondary)] mb-1">{stat.label}</div>
              <div className="text-xl font-bold text-[var(--color-text)]">{stat.value}</div>
              <PriceChange change={stat.change} />
            </div>
          ))}
        </div>

        {/* Top Movers */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="glass rounded-xl p-5">
            <h3 className="font-bold text-[var(--color-text)] mb-4 flex items-center gap-2">
              <span className="text-green-400">▲</span> Top Gainers (24h)
            </h3>
            <div className="space-y-3">
              {topGainers.map((token) => (
                <Link href={`/prices/${token.slug}`}
                  key={token.slug}
                  className="flex items-center justify-between py-1.5 hover:opacity-80 transition-opacity group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[var(--color-text-secondary)] w-5">{token.rank}</span>
                    <span className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors w-14">
                      {token.symbol}
                    </span>
                    <span className="text-sm text-[var(--color-text-secondary)]">{token.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-[var(--color-text)]">{token.price}</span>
                    <PriceChange change={token.change24h} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="glass rounded-xl p-5">
            <h3 className="font-bold text-[var(--color-text)] mb-4 flex items-center gap-2">
              <span className="text-red-400">▼</span> Lagging (24h)
            </h3>
            <div className="space-y-3">
              {topLosers.map((token) => (
                <Link href={`/prices/${token.slug}`}
                  key={token.slug}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[var(--color-text-secondary)] w-5">{token.rank}</span>
                    <span className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors w-14">
                      {token.symbol}
                    </span>
                    <span className="text-sm text-[var(--color-text-secondary)]">{token.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-[var(--color-text)]">{token.price}</span>
                    <PriceChange change={token.change24h} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary)] text-[var(--color-text)] cursor-default">
              All ({tokens.length})
            </span>
            {TOKEN_CATEGORIES.map((cat) => {
              const count = tokens.filter((t) => t.category === cat.slug).length;
              return (
                <span
                  key={cat.slug}
                  className="px-4 py-1.5 rounded-full text-sm font-medium glass text-[var(--color-text-secondary)] cursor-default"
                >
                  {cat.icon} {cat.label} ({count})
                </span>
              );
            })}
          </div>
        </section>

        {/* Full Token Table */}
        <section className="mb-12">
          <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--color-bg-card)] border-b border-[var(--color-border)]">
                  <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold w-10">#</th>
                  <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Name</th>
                  <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Category</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Price</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">24h</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">7d</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden lg:table-cell">Mkt Cap</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden lg:table-cell">Volume 24h</th>
                  <th className="px-4 py-3 hidden md:table-cell" />
                </tr>
              </thead>
              <tbody>
                {tokens.map((token) => (
                  <tr key={token.slug} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-card)] transition-colors">
                    <td className="px-4 py-3 text-[var(--color-text-secondary)] font-bold">{token.rank}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                          style={{ backgroundColor: CATEGORY_COLORS[token.category] + "25", color: CATEGORY_COLORS[token.category] }}
                        >
                          {token.symbol.slice(0, 2)}
                        </div>
                        <div>
                          <Link href={`/prices/${token.slug}`}
                            className="font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors block leading-tight"
                          >
                            {token.name}
                          </Link>
                          <span className="text-xs text-[var(--color-text-secondary)]">{token.symbol}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center hidden md:table-cell">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: CATEGORY_COLORS[token.category] + "20", color: CATEGORY_COLORS[token.category] }}
                      >
                        {CATEGORY_LABELS[token.category]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-[var(--color-text)]">{token.price}</td>
                    <td className="px-4 py-3 text-right"><PriceChange change={token.change24h} /></td>
                    <td className="px-4 py-3 text-right hidden md:table-cell"><PriceChange change={token.change7d} /></td>
                    <td className="px-4 py-3 text-right hidden lg:table-cell text-[var(--color-text-secondary)]">{token.marketCap}</td>
                    <td className="px-4 py-3 text-right hidden lg:table-cell text-[var(--color-text-secondary)]">{token.volume24h}</td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <Link href={`/prices/${token.slug}`} className="text-xs text-[var(--color-primary)] hover:underline whitespace-nowrap">
                        Details →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-2">
            Prices are indicative and updated periodically. Not real-time data.{" "}
            <Link href="/investing/tools/crypto-converter" className="text-[var(--color-primary)] hover:underline">
              Use our converter for live prices →
            </Link>
          </p>
        </section>

        {/* Related Guides */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Investment Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", tag: "Investing" },
              { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", tag: "Beginners" },
              { title: "DeFi Yield Aggregators", href: "/defi-lending/best/yield-aggregators", tag: "DeFi" },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="glass rounded-xl p-5 card-hover block">
                <span className="glass-pill inline-block text-[var(--color-primary)] text-xs font-medium px-3 py-1 mb-2 rounded-full">
                  {guide.tag}
                </span>
                <h3 className="font-semibold text-[var(--color-text)] text-sm">{guide.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <div className="p-4 rounded-xl border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-text)]">Disclaimer:</strong> Prices are indicative and for informational purposes only.
          Cryptocurrency prices are highly volatile. Always check live sources before trading. This is not investment advice.
        </div>
            <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Best Cryptos to Buy", "description": "Live cryptocurrency prices and market data. Bitcoin, Ethereum, Solana, and 5,000+ altcoins. Real-time charts, technical analysis, and tracking.", "url": "https://degen0x.com/prices", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
