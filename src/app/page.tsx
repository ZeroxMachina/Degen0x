import Link from "next/link";
import { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";
import FearGreedWidget from "@/components/FearGreedWidget";
import NewsletterSignup from "@/components/NewsletterSignup";
import TrendingCoins from "@/components/TrendingCoins";
import MarketOverview from "@/components/MarketOverview";
import LatestNews from "@/components/LatestNews";
import WhaleAlertFeed from "@/components/WhaleAlertFeed";
import CryptoQuiz from "@/components/CryptoQuiz";
import PortfolioSimulator from "@/components/PortfolioSimulator";
import MarketPulse from "@/components/MarketPulse";
import MarketPulseHero from "@/components/MarketPulseHero";
import WebSocketPriceFeed from "@/components/WebSocketPriceFeed";
import TrendingNewsFeed from "@/components/TrendingNewsFeed";
import LazySection from "@/components/LazySection";
import TopMovers from "@/components/TopMovers";
import TokenUnlockCalendar from "@/components/TokenUnlockCalendar";
import AnimatedHero from "@/components/AnimatedHero";
import { CATEGORIES, SITE_NAME, SITE_DESCRIPTION, CURRENT_MONTH, CURRENT_YEAR } from "@/lib/constants";
import { getAllPosts, getCategoryMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: `${SITE_NAME} - Compare Crypto Exchanges, Wallets & DeFi`,
  description: SITE_DESCRIPTION,
};

const POPULAR_GUIDES = [
  { title: "Best Crypto Exchanges", href: "/exchanges/best", tag: "Most Popular" },
  { title: "Best Hardware Wallets", href: "/wallets/best/hardware", tag: "Security" },
  { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", tag: "Investing" },
  { title: "Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", tag: "Taxes" },
  { title: "Best DeFi Lending", href: "/defi-lending/best", tag: "DeFi" },
  { title: "Best Staking Platforms", href: "/investing/best/staking", tag: "Passive Income" },
  { title: "Best Crypto Debit Cards", href: "/spending/best/debit-cards", tag: "Spending" },
  { title: "Crypto for Beginners", href: "/learn/crypto-for-beginners", tag: "Education" },
];

export default function HomePage() {
  return (
    <>
      <AnimatedHero />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Your Trusted Guide</span>
              <br />
              <span className="text-[var(--color-text)]">to the Crypto World</span>
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
              Compare crypto exchanges, wallets, DeFi protocols, and more. Expert reviews, interactive tools, and comprehensive guides to help you make smarter crypto decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/exchanges/best"
                className="affiliate-cta px-8 py-3 rounded-xl text-white font-semibold text-lg"
              >
                Compare Exchanges
              </Link>
              <Link
                href="/learn/crypto-for-beginners"
                className="glass px-8 py-3 text-[var(--color-text)] font-semibold text-lg hover:bg-[var(--glass-bg)]"
              >
                Start Learning
              </Link>
            </div>
          </div>

          {/* Stats Counter */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">800+</div>
              <div className="text-sm text-[var(--color-text-secondary)]">Published Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">84+</div>
              <div className="text-sm text-[var(--color-text-secondary)]">Interactive Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
              <div className="text-sm text-[var(--color-text-secondary)]">In-Depth Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
              <div className="text-sm text-[var(--color-text-secondary)]">Free Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Pulse Hero - Live Prices */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-4 mb-8">
        <MarketPulseHero />
      </section>

      {/* WebSocket Live Price Feed — Sprint 19 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <WebSocketPriceFeed />
      </section>

      {/* Trending Coins */}
      <TrendingCoins />

      {/* Market Pulse - Real-time Market Widget */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4 text-center">
          Market Pulse
        </h2>
        <p className="text-[var(--color-text-secondary)] text-center mb-8 max-w-2xl mx-auto">
          Real-time market sentiment, top movers, and trending tokens — updated every 30 seconds.
        </p>
        <MarketPulse />
      </section>

      {/* Popular Tools */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4 text-center">
          Popular Tools
        </h2>
        <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Quick-access utilities to help you make smarter crypto decisions in seconds.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/tools/converter" className="glass p-6 card-hover">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Crypto Converter</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Convert BTC, ETH, and 10+ coins to fiat in real-time</p>
          </Link>
          <Link href="/tools/dca-calculator" className="glass p-6 card-hover">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">DCA Calculator</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Plan dollar-cost averaging investments with precision</p>
          </Link>
          <Link href="/tools/crypto-calendar" className="glass p-6 card-hover">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Crypto Calendar</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Track upcoming token launches and major events</p>
          </Link>
          <Link href="/tools/portfolio-tracker" className="glass p-6 card-hover">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Portfolio Tracker</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Monitor your holdings and track performance metrics</p>
          </Link>
          <Link href="/tools/gas-tracker" className="glass p-6 card-hover">
            <div className="text-4xl mb-3">⛽</div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Gas Tracker</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Check real-time Ethereum and blockchain transaction fees</p>
          </Link>
          <Link href="/tools/fear-greed-timeline" className="glass p-6 card-hover">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Fear & Greed Index</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Monitor market sentiment and historical trends</p>
          </Link>
          <Link href="/tools/portfolio-allocator" className="glass p-6 card-hover">
            <div className="text-4xl mb-3">🥧</div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Portfolio Allocator</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Build your ideal crypto portfolio with risk analysis</p>
          </Link>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="section-glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8 text-center">
            Popular Guides for {CURRENT_MONTH} {CURRENT_YEAR}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {POPULAR_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="glass-subtle p-4 card-hover text-center"
              >
                <span className="glass-pill inline-block text-[var(--color-primary)] text-xs font-medium px-3 py-1 mb-2">
                  {guide.tag}
                </span>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{guide.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Movers + Token Unlocks — Sprint 20 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TopMovers />
          <TokenUnlockCalendar />
        </div>
      </section>

      {/* Portfolio Simulator */}
      <PortfolioSimulator />

      {/* Market Overview */}
      <MarketOverview />

      {/* All Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4 text-center">
          Explore All Categories
        </h2>
        <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          From exchanges to taxes, wallets to DeFi, we cover every aspect of the crypto ecosystem with expert reviews and analysis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Fear & Greed + Latest News + Converter CTA Row */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <FearGreedWidget />
          <LatestNews />
          <div className="glass p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">🔄 Crypto Converter</h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4">Convert BTC, ETH, SOL and 10+ coins to USD, EUR, or GBP in real-time. Free, instant, no account needed.</p>
            </div>
            <div>
              <Link href="/investing/tools/crypto-converter" className="affiliate-cta inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm">
                Open Converter →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-12 text-center">
            Why Trust {SITE_NAME}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/10">
                <span className="text-2xl">&#9733;</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Independent Reviews</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Our editorial team independently evaluates every product using a rigorous, transparent methodology. We never let advertisers influence our ratings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/10">
                <span className="text-2xl">&#128269;</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Data-Driven Analysis</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                We analyze real fee structures, security audits, on-chain data, and user experiences to provide accurate, up-to-date comparisons.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/10">
                <span className="text-2xl">&#128640;</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Expert Team</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Our writers and analysts have deep experience in crypto trading, DeFi, blockchain development, and financial analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why degen0x? */}
      <section className="section-glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4 text-center">
            Why degen0x?
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Trusted by thousands of crypto enthusiasts and professionals to navigate the digital asset space with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass p-8 text-center card-hover">
              <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">2,275+</div>
              <p className="text-[var(--color-text-secondary)]">Comprehensive pages and reviews</p>
            </div>
            <div className="glass p-8 text-center card-hover">
              <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">40+</div>
              <p className="text-[var(--color-text-secondary)]">Interactive tools and calculators</p>
            </div>
            <div className="glass p-8 text-center card-hover">
              <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">223</div>
              <p className="text-[var(--color-text-secondary)]">Glossary terms explained</p>
            </div>
          </div>
          <div className="glass p-8 text-center max-w-3xl mx-auto">
            <p className="text-[var(--color-text)] text-lg">
              The most comprehensive platform for comparing crypto products, learning blockchain concepts, and discovering the tools you need to succeed in crypto.
            </p>
          </div>
        </div>
      </section>

      {/* Trending News Feed — Sprint 19 */}
      <LazySection minHeight="400px">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <TrendingNewsFeed />
        </section>
      </LazySection>

      {/* Whale Alert + Quick Links */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <WhaleAlertFeed />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--color-text)]">Quick Actions</h3>
            <Link href="/learn/quiz" className="glass p-4 card-hover flex items-center gap-3">
              <span className="text-2xl">🧠</span>
              <div>
                <div className="font-semibold text-sm text-[var(--color-text)]">Test Your Knowledge</div>
                <div className="text-xs text-[var(--color-text-secondary)]">Take the Crypto Quiz</div>
              </div>
            </Link>
            <Link href="/learn/glossary" className="glass p-4 card-hover flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <div>
                <div className="font-semibold text-sm text-[var(--color-text)]">Crypto Glossary</div>
                <div className="text-xs text-[var(--color-text-secondary)]">57 terms explained</div>
              </div>
            </Link>
            <Link href="/tools/staking-rewards" className="glass p-4 card-hover flex items-center gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <div className="font-semibold text-sm text-[var(--color-text)]">Staking Calculator</div>
                <div className="text-xs text-[var(--color-text-secondary)]">Calculate rewards for 8 PoS chains</div>
              </div>
            </Link>
            <Link href="/tools/advanced-charting" className="glass p-4 card-hover flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-semibold text-sm text-[var(--color-text)]">Advanced Charts</div>
                <div className="text-xs text-[var(--color-text-secondary)]">TradingView-style analysis</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-text)]">Latest from the Blog</h2>
            <p className="text-[var(--color-text-secondary)] mt-2">Fresh analysis, news, and insights from the degen0x team.</p>
          </div>
          <Link href="/blog" className="text-[var(--color-primary)] font-semibold text-sm hover:underline hidden sm:block">
            View all posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getAllPosts().slice(0, 3).map((post) => {
            const catMeta = getCategoryMeta(post.category);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="glass p-6 card-hover flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 rounded-md" style={{ backgroundColor: catMeta.color + "20", color: catMeta.color }}>
                      {catMeta.icon} {catMeta.label}
                    </span>
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      {post.readingTime ?? 3} min read
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{post.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--color-text-secondary)]">{post.author.name}</span>
                  <span className="text-[var(--color-primary)] font-semibold text-sm">Read →</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/blog" className="text-[var(--color-primary)] font-semibold text-sm hover:underline">
            View all posts →
          </Link>
        </div>
      </section>

      {/* Crypto Knowledge Quiz */}
      <CryptoQuiz />

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <NewsletterSignup variant="banner" />
      </section>

      {/* Latest from Learn */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4 text-center">
          Latest from Learn
        </h2>
        <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Stay updated with our latest educational guides and in-depth crypto insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/learn/real-world-assets-rwa-guide" className="glass p-6 card-hover flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Real World Assets (RWA) Guide</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">Discover how tokenized real-world assets are reshaping finance</p>
            </div>
            <span className="text-[var(--color-primary)] font-semibold text-sm">Read →</span>
          </Link>
          <Link href="/learn/restaking-eigenlayer-guide" className="glass p-6 card-hover flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Restaking & EigenLayer Guide</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">Learn about next-generation staking and validator economics</p>
            </div>
            <span className="text-[var(--color-primary)] font-semibold text-sm">Read →</span>
          </Link>
          <Link href="/learn/bitcoin-layer-2-guide" className="glass p-6 card-hover flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Bitcoin Layer 2 Guide</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">Explore scaling solutions and how they enhance Bitcoin</p>
            </div>
            <span className="text-[var(--color-primary)] font-semibold text-sm">Read →</span>
          </Link>
          <Link href="/learn/memecoin-trading-strategy" className="glass p-6 card-hover flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Memecoin Trading Strategy</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">Understand the risks and opportunities in memecoin markets</p>
            </div>
            <span className="text-[var(--color-primary)] font-semibold text-sm">Read →</span>
          </Link>
          <Link href="/learn/ai-depin-crypto-guide" className="glass p-6 card-hover flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">AI & DePIN Crypto Guide</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">Discover the intersection of AI and decentralized infrastructure</p>
            </div>
            <span className="text-[var(--color-primary)] font-semibold text-sm">Read →</span>
          </Link>
          <Link href="/learn/ai-crypto-agents-guide" className="glass p-6 card-hover flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">AI Crypto Agents Guide</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">Autonomous traders, yield optimizers, and the AI agent economy</p>
            </div>
            <span className="text-[var(--color-primary)] font-semibold text-sm">Read →</span>
          </Link>
          <Link href="/learn/bitcoin-etf-guide-2026" className="glass p-6 card-hover flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Bitcoin ETF Guide 2026</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">Spot BTC ETFs, performance, fees, and how to invest</p>
            </div>
            <span className="text-[var(--color-primary)] font-semibold text-sm">Read →</span>
          </Link>
        </div>
      </section>

      {/* Latest Content by Category */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8">Latest Reviews & Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: `Best Crypto Exchanges of ${CURRENT_MONTH} ${CURRENT_YEAR}`, href: "/exchanges/best", category: "Exchanges", desc: "We compared 50+ exchanges on fees, security, coin selection, and ease of use to find the best options for every type of trader." },
            { title: "Coinbase vs. Binance: Which Is Better?", href: "/exchanges/compare/coinbase-vs-binance", category: "Comparison", desc: "A detailed comparison of the two largest crypto exchanges covering fees, features, security, and supported countries." },
            { title: "Best Hardware Wallets for Cold Storage", href: "/wallets/best/hardware", category: "Wallets", desc: "Protect your crypto with the best hardware wallets. We tested Ledger, Trezor, and more for security and usability." },
            { title: "Complete Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", category: "Taxes", desc: "Everything you need to know about crypto taxes: capital gains, reporting requirements, tax-loss harvesting, and more." },
            { title: "How to Invest in Cryptocurrency", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing", desc: "A step-by-step guide to investing in crypto, from choosing your first coins to building a diversified portfolio." },
            { title: "What Is DeFi? A Complete Guide", href: "/learn/what-is-defi", category: "Learn", desc: "Decentralized Finance explained: how it works, the major protocols, risks, and opportunities in DeFi." },
          ].map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="glass p-6 card-hover"
            >
              <span className="glass-pill inline-block text-[var(--color-primary)] text-xs font-medium px-3 py-1 mb-3">
                {article.category}
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{article.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{article.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
