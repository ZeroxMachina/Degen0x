import type { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import NewsFeed from "@/components/NewsFeed";
import { newsArticles, getFeaturedArticles, getLatestArticles, NEWS_CATEGORIES } from "@/data/news";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto News — Latest Crypto & Web3 News | degen0x`,
  description: `Stay up to date with the latest crypto news, DeFi updates, exchange announcements, regulatory changes, and market analysis. Curated by the ${SITE_NAME} editorial team.`,
  keywords: "crypto news, bitcoin news, ethereum news, DeFi news, blockchain updates, web3 news, regulatory updates, market analysis",
  alternates: { canonical: "/news" },
  openGraph: {
    title: `Crypto News — Latest Crypto & Web3 News | degen0x`,
    description: "Crypto news and market updates from degen0x. Protocol launches, regulation news, DeFi announcements, and daily briefings on Bitcoin, Ethereum, Web3.",
    url: "https://degen0x.com/news",
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `Crypto News — Latest Crypto & Web3 News | degen0x`,
    description: "Expert analysis, breaking news, and in-depth coverage of Bitcoin, Ethereum, DeFi, and the broader Web3 ecosystem.",
  },
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  market: "#22c55e",
  defi: "#8b5cf6",
  exchanges: "#6366f1",
  regulation: "#ef4444",
  nfts: "#d946ef",
  technology: "#06b6d4",
  wallets: "#f59e0b",
};

const CATEGORY_LABELS: Record<string, string> = {
  market: "Market",
  defi: "DeFi",
  exchanges: "Exchanges",
  regulation: "Regulation",
  nfts: "NFTs",
  technology: "Technology",
  wallets: "Security",
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'News', },
  ],
};

export default function NewsPage() {
  const featured = getFeaturedArticles();
  const latest = getLatestArticles(10);
  const mainFeatured = featured[0];
  const secondaryFeatured = featured.slice(1, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Crypto News`,
    description: `Latest crypto news, DeFi updates, and market analysis from ${SITE_NAME}`,
    url: "https://degen0x.com/news",
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Crypto News", href: "/news" },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">Crypto News</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Expert analysis, breaking news, and in-depth coverage of Bitcoin, Ethereum, DeFi,
            exchanges, regulation, and the broader Web3 ecosystem. Updated daily.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Link href="/news"
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary)] text-[var(--color-text)]"
          >
            All
          </Link>
          {NEWS_CATEGORIES.map((cat) => (
            <Link href={`/news/category/${cat.slug}`}
              key={cat.slug}
              className="px-4 py-1.5 rounded-full text-sm font-medium glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              {cat.icon} {cat.label}
            </Link>
          ))}
        </div>

        {/* Hero Feature */}
        {mainFeatured && (
          <section className="mb-10">
            <Link href="/news"
              className="block rounded-2xl overflow-hidden glass card-hover group"
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-text)]"
                    style={{ backgroundColor: CATEGORY_COLORS[mainFeatured.category] }}
                  >
                    {CATEGORY_LABELS[mainFeatured.category]}
                  </span>
                  <span className="text-xs text-[var(--color-text-secondary)] glass-pill px-3 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                  {mainFeatured.title}
                </h2>
                <p className="text-[var(--color-text-secondary)] text-lg mb-6 max-w-3xl leading-relaxed">
                  {mainFeatured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)]">
                  <span className="font-medium text-[var(--color-text)]">{mainFeatured.author}</span>
                  <span>•</span>
                  <span>{formatDate(mainFeatured.publishedAt)}</span>
                  <span>•</span>
                  <span>{mainFeatured.readTime} min read</span>
                  <span className="ml-auto text-[var(--color-primary)] font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Secondary Featured */}
        {secondaryFeatured.length > 0 && (
          <section className="grid md:grid-cols-2 gap-6 mb-12">
            {secondaryFeatured.map((article) => (
              <Link href={`/news/${article.slug}`}
                key={article.slug}
                className="block rounded-xl glass p-6 card-hover group"
              >
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-text)] mb-3"
                  style={{ backgroundColor: CATEGORY_COLORS[article.category] }}
                >
                  {CATEGORY_LABELS[article.category]}
                </span>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--color-text-secondary)]">
                  <span className="font-medium">{article.author}</span>
                  <span>•</span>
                  <span>{formatDate(article.publishedAt)}</span>
                  <span>•</span>
                  <span>{article.readTime} min</span>
                </div>
              </Link>
            ))}
          </section>
        )}

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-[var(--color-primary)] inline-block" />
              All News
            </h2>
            <NewsFeed />
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Browse by Topic */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Browse by Topic</h3>
              <div className="space-y-2">
                {NEWS_CATEGORIES.map((cat) => {
                  const count = newsArticles.filter((a) => a.category === cat.slug).length;
                  return (
                    <Link href="/news"
                      key={cat.slug}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[var(--glass-bg)] transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span>{cat.icon}</span>
                        <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                          {cat.label}
                        </span>
                      </div>
                      <span className="text-xs text-[var(--color-text-secondary)] glass-pill px-2 py-0.5 rounded-full">
                        {count}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Bitcoin", "Ethereum", "DeFi", "Solana", "ETF", "Regulation", "Aave", "NFTs", "Lightning", "Taxes", "Hardware Wallets", "Institutional"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs glass-pill px-3 py-1 rounded-full text-[var(--color-text-secondary)] cursor-default hover:text-[var(--color-primary)] transition-colors"
                    >
                      #{tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="rounded-xl p-6 border border-[var(--color-primary)] border-opacity-30"
              style={{ background: "linear-gradient(135deg, var(--glass-bg) 0%, rgba(99,102,241,0.05) 100%)" }}>
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">📬 Daily Crypto Brief</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                Get the top 5 crypto stories delivered to your inbox every morning. No spam, ever.
              </p>
              <Link href="/news"
                className="affiliate-cta block text-center py-2.5 px-4 rounded-lg text-white text-sm font-semibold"
              >
                Subscribe Free →
              </Link>
            </div>

            {/* Editorial Note */}
            <div className="rounded-xl border border-[var(--color-border)] p-5">
              <h3 className="text-sm font-bold text-[var(--color-text)] mb-2">📋 Editorial Standards</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Our news and analysis is produced independently by the {SITE_NAME} editorial team.
                We do not accept payment for coverage. Articles may contain affiliate links to products
                we review, but this never influences our editorial judgment.
              </p>
            </div>
          </aside>
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
    </>
  );
}
