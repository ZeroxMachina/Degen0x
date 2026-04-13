import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { exchangeDetailedComparisons, exchangeComparisonFeatures } from "@/data/exchanges";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Coinbase vs Binance: Detailed Comparison (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Comprehensive Coinbase vs Binance comparison. Analyze fees, security, coin selection, trading features, and find which exchange is best for your crypto trading",
  keywords: "Coinbase vs Binance, cryptocurrency exchange comparison, crypto trading platform, best exchange 2026",
  openGraph: {
    title: `Coinbase vs Binance: Detailed Comparison`,
    description: "Comprehensive comparison of the two largest crypto exchanges",
    type: "article",
  },

  alternates: { canonical: "/exchanges/compare/coinbase-vs-binance" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Exchanges', item: 'https://degen0x.com/exchanges' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/exchanges/compare' },
    { '@type': 'ListItem', position: 4, name: 'Coinbase Vs Binance', },
  ],
};

export default function CoinbaseVsBinancePage() {
  const coinbase = exchangeDetailedComparisons["coinbase"];
  const binance = exchangeDetailedComparisons["binance"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComparisonChart",
    name: "Coinbase vs Binance Comparison",
    description: "Detailed feature-by-feature comparison of Coinbase and Binance crypto exchanges",
    itemCompared: [
      {
        "@type": "Product",
        name: "Coinbase",
        url: "https://coinbase.com",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: coinbase.rating,
          bestRating: 5,
        },
      },
      {
        "@type": "Product",
        name: "Binance",
        url: "https://binance.com",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: binance.rating,
          bestRating: 5,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Crypto Exchanges", href: "/exchanges" },
            { label: "Compare", href: "/exchanges/compare" },
            { label: "Coinbase vs Binance", href: "#" },
          ]}
        />

        <AffiliateDisclosure />

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Coinbase vs Binance: Complete Comparison
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-2">
            The two largest crypto exchanges compared head-to-head
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Updated: {CURRENT_MONTH} {CURRENT_YEAR}
          </p>
        </div>

        {/* Quick Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="glass rounded-2xl p-8 border border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[var(--color-text)]">Coinbase</h2>
              <div className="text-3xl font-bold text-blue-400">{coinbase.rating}/5</div>
            </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="exchanges"
        />

            <ul className="space-y-2 text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>US-based with strong regulatory compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Beginner-friendly interface</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Publicly traded on NASDAQ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">✗</span>
                <span>Higher fees than competitors</span>
              </li>
            </ul>
            <a
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block mt-6 affiliate-cta px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300"
            >
              Visit Coinbase
            </a>
          </div>

          <div className="glass rounded-2xl p-8 border border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[var(--color-text)]">Binance</h2>
              <div className="text-3xl font-bold text-orange-400">{binance.rating}/5</div>
            </div>
            <ul className="space-y-2 text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Lowest trading fees in the industry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>600+ cryptocurrencies available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Most advanced trading features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">✗</span>
                <span>Not available to US residents</span>
              </li>
            </ul>
            <a
            >
              Visit Binance
            </a>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <ComparisonTable
            items={[coinbase, binance]}
            features={exchangeComparisonFeatures}
            title="Feature Comparison Matrix"
          />
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          {/* Fee Comparison */}
          <section className="prose-crypto">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="text-yellow-400">💰</span> Fee Comparison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Coinbase Fees</h3>
                <div className="space-y-3 text-[var(--color-text-secondary)]">
                  <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                    <span>Spot Maker</span>
                    <span className="font-semibold text-[var(--color-text)]">0.00%–0.40%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                    <span>Spot Taker</span>
                    <span className="font-semibold text-[var(--color-text)]">0.05%–0.60%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                    <span>Simple Trade</span>
                    <span className="font-semibold text-[var(--color-text)]">Up to 1.49%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Winner Badge</span>
                    <span className="text-yellow-400 font-bold">⭐ Beginner</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Binance Fees</h3>
                <div className="space-y-3 text-[var(--color-text-secondary)]">
                  <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                    <span>Spot Trading</span>
                    <span className="font-semibold text-[var(--color-text)]">0.1% (0.075% with BNB)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                    <span>Futures Maker</span>
                    <span className="font-semibold text-[var(--color-text)]">0.02%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)]">
                    <span>Futures Taker</span>
                    <span className="font-semibold text-[var(--color-text)]">0.04%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Winner Badge</span>
                    <span className="text-yellow-400 font-bold">⭐ Pro Traders</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass rounded-xl p-6 border border-[var(--color-border)] bg-opacity-50">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">Fee Analysis</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Binance wins decisively on fees. For spot trading, Binance charges a flat 0.1% regardless of volume,
                dropping to 0.075% if you hold BNB tokens. Coinbase Advanced starts at 0% maker fees but charges up to
                0.60% for takers, and the simple interface charges 1.49% with spreads.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                For a trader executing $10,000 in monthly volume: Binance costs ~$10, Coinbase Advanced costs
                $30–60, and simple Coinbase costs ~$149. Binance's fee advantage compounds with higher volume and BNB
                token holdings.
              </p>
            </div>
          </section>

          {/* Security & Regulation */}
          <section className="prose-crypto">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="text-green-400">🔒</span> Security & Regulation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Coinbase Security</h3>
                <ul className="space-y-3 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                    <span>Publicly traded (NASDAQ: COIN) with SEC oversight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                    <span>98% of funds in air-gapped cold storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                    <span>$255M FDIC insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                    <span>Never suffered a major hack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                    <span>Full US regulatory compliance</span>
                  </li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="inline-block bg-green-500 bg-opacity-20 border border-green-400 text-green-400 px-4 py-2 rounded-lg font-semibold">
                    ⭐ Winner: Regulation
                  </span>
                </div>
              </div>

              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Binance Security</h3>
                <ul className="space-y-3 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                    <span>SAFU insurance fund (500M+ USDT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                    <span>Advanced security infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                    <span>Strong track record with no major breaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold text-lg">✗</span>
                    <span>Regulatory challenges in multiple regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 font-bold text-lg">✗</span>
                    <span>Not available to US residents</span>
                  </li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="inline-block bg-blue-500 bg-opacity-20 border border-blue-400 text-blue-400 px-4 py-2 rounded-lg font-semibold">
                    ⭐ Winner: Security Tech
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Coin Selection */}
          <section className="prose-crypto">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="text-purple-400">🪙</span> Cryptocurrency Selection
            </h2>
            <div className="glass rounded-xl p-6 border border-[var(--color-border)] mb-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-2">Coinbase</h3>
                  <p className="text-2xl font-bold text-[var(--color-text)] mb-2">250+</p>
                  <p className="text-[var(--color-text-secondary)]">Focus on quality over quantity. All major assets plus Layer 2 tokens.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-orange-400 mb-2">Binance</h3>
                  <p className="text-2xl font-bold text-[var(--color-text)] mb-2">600+</p>
                  <p className="text-[var(--color-text-secondary)]">Largest selection. Early access to emerging tokens and micro-caps.</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[var(--color-text)]">Winner</span>
                  <span className="inline-block bg-orange-500 bg-opacity-20 border border-orange-400 text-orange-400 px-4 py-2 rounded-lg font-semibold">
                    ⭐ Binance: 600+ coins
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Binance dominates in cryptocurrency diversity. With 600+ coins, you'll find virtually any major or
              emerging token. Binance is the first exchange to list many new projects. Coinbase's 250+ selection
              focuses on established assets with proven market fit, making it safer for conservative investors but
              limiting altcoin exposure.
            </p>
          </section>

          {/* Trading Features */}
          <section className="prose-crypto">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="text-blue-400">📊</span> Trading Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Coinbase Features</h3>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>✓ Spot trading with limit & stop orders</li>
                  <li>✓ TradingView charting</li>
                  <li>✓ Recurring buy feature (dollar-cost averaging)</li>
                  <li>✓ Limited perpetual futures</li>
                  <li>✓ Mobile app with all features</li>
                  <li>✗ No options trading</li>
                  <li>✗ No leverage trading (US)</li>
                </ul>
              </div>

              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Binance Features</h3>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>✓ Spot, margin, futures, options</li>
                  <li>✓ Leverage up to 125x</li>
                  <li>✓ Copy trading & trading bots</li>
                  <li>✓ Launchpad for new tokens</li>
                  <li>✓ DeFi staking & pool farming</li>
                  <li>✓ Advanced charting tools</li>
                  <li>✓ Crypto P2P market</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block bg-orange-500 bg-opacity-20 border border-orange-400 text-orange-400 px-6 py-3 rounded-lg font-semibold">
                ⭐ Winner: Binance - Advanced Traders
              </span>
            </div>
          </section>

          {/* User Experience */}
          <section className="prose-crypto">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="text-green-400">👤</span> User Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Coinbase UX</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Coinbase is specifically designed for beginners. The simple interface requires no crypto knowledge to buy crypto in
                  30 seconds. Advanced users can switch to Coinbase Advanced for professional tools.
                </p>
                <p className="text-sm text-green-400 font-semibold">Best for: Beginners & casual investors</p>
              </div>

              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Binance UX</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Binance offers powerful features but has a steeper learning curve. The interface can overwhelm beginners,
                  but experienced traders appreciate the control and detailed options.
                </p>
                <p className="text-sm text-orange-400 font-semibold">Best for: Experienced traders</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block bg-blue-500 bg-opacity-20 border border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-semibold">
                ⭐ Winner: Coinbase - Beginners
              </span>
            </div>
          </section>

          {/* Verdict */}
          <section className="prose-crypto">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="text-yellow-400">🏆</span> Overall Verdict
            </h2>
            <div className="glass rounded-xl p-8 border border-[var(--color-border)] bg-gradient-to-br from-blue-900 bg-opacity-10 to-transparent">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Choose Coinbase If:</h3>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>• You're in the US and want a regulated, mainstream exchange</li>
                    <li>• You're new to cryptocurrency and want an easy-to-use platform</li>
                    <li>• You prioritize security, insurance, and peace of mind</li>
                    <li>• You want FDIC insurance coverage on USD balances</li>
                    <li>• You prefer a publicly traded company with full transparency</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-6">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Choose Binance If:</h3>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>• You're outside the US and want the lowest possible fees</li>
                    <li>• You're an experienced trader seeking advanced features</li>
                    <li>• You want access to 600+ cryptocurrencies</li>
                    <li>• You trade futures, options, or use leverage</li>
                    <li>• You want copy trading, bots, and DeFi integration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">Summary Score</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-[var(--color-text-secondary)] text-sm mb-2">Beginner Friendliness</p>
                  <div className="text-2xl font-bold text-blue-400">Coinbase 9/10</div>
                  <div className="text-2xl font-bold text-orange-400">Binance 5/10</div>
                </div>
                <div className="text-center">
                  <p className="text-[var(--color-text-secondary)] text-sm mb-2">Fee Competitiveness</p>
                  <div className="text-2xl font-bold text-blue-400">Coinbase 5/10</div>
                  <div className="text-2xl font-bold text-orange-400">Binance 10/10</div>
                </div>
                <div className="text-center">
                  <p className="text-[var(--color-text-secondary)] text-sm mb-2">Regulation</p>
                  <div className="text-2xl font-bold text-blue-400">Coinbase 10/10</div>
                  <div className="text-2xl font-bold text-orange-400">Binance 6/10</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <FAQSection
          faqs={[
            {
              question: "Can US residents use Binance?",
              answer:
                "No. US residents cannot use Binance.com. There is Binance.US, but it's a separate entity with limited features, fewer coins, and different fee structures. Coinbase is the recommended alternative for US-based traders.",
            },
            {
              question: "Which is safer for storing crypto long-term?",
              answer:
                "Coinbase is safer for long-term holdings due to its regulatory status, insurance coverage, and institutional-grade custody through Coinbase Prime. Both platforms recommend hardware wallets for significant amounts.",
            },
            {
              question: "Can I transfer crypto between Coinbase and Binance?",
              answer:
                "Yes, absolutely. Withdraw from one exchange, send to your Binance address. Always ensure you use the same blockchain network on both platforms to avoid losing funds.",
            },
            {
              question: "Which fees are better for small trades?",
              answer:
                "Binance offers better fees even for small trades (0.1% vs Coinbase's up to 0.60% taker fee). However, Coinbase's simple interface might be more convenient for first-time buyers.",
            },
            {
              question: "Does Binance have an app?",
              answer:
                "Yes, Binance has excellent mobile apps for iOS and Android with full trading capabilities, notifications, and all exchange features available on mobile.",
            },
            {
              question: "Can I stake crypto on both exchanges?",
              answer:
                "Yes, both offer staking. Coinbase stakes select assets with 2-7% APY. Binance supports 100+ assets with flexible and locked staking options. Binance generally offers better yields.",
            },
          ]}
        />

        {/* Call to Action */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            className="glass rounded-xl p-8 border border-blue-400 border-opacity-50 text-center hover:border-opacity-100 transition-all duration-300 group"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-2 group-hover:text-[var(--color-text)] transition-colors">
              Start with Coinbase
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Best for US-based beginners seeking regulatory compliance
            </p>
            <button className="affiliate-cta px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300">
              Open Coinbase Account
            </button>
          </a>

          <a
            className="glass rounded-xl p-8 border border-orange-400 border-opacity-50 text-center hover:border-opacity-100 transition-all duration-300 group"
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-2 group-hover:text-[var(--color-text)] transition-colors">
              Start with Binance
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Best for experienced traders globally seeking lowest fees
            </p>
            <button className="affiliate-cta px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300">
              Open Binance Account
            </button>
          </a>
        </div>
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
          <Link href="/exchanges" style={{
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
            All Exchanges
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
            Trading Tools
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
            Compare Exchanges
          </Link>
        </div>
      </div>
    </div>
  );
}
