import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import StakingDashboard from '@/components/StakingDashboard';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

// Metadata for SEO
export const metadata: Metadata = {
  title: `Staking Dashboard | Compare Staking Yields & APY | ${SITE_NAME}`,
  description: `Compare staking yields across major blockchains. Find the best APY for Ethereum (Lido, Rocket Pool), Solana (Marinade, Jito), Cosmos, and Polkadot. Staking calculator, risk analysis, and expert guides.`,
  alternates: {
    canonical: `${SITE_URL}/staking`,
  },
  openGraph: {
    title: `Staking Dashboard | Compare Staking Yields & APY | ${SITE_NAME}`,
    description: `Compare staking yields across major blockchains. Find the best APY for Ethereum, Solana, Cosmos, and Polkadot staking protocols.`,
    url: `${SITE_URL}/staking`,
    siteName: SITE_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Staking Dashboard | ${SITE_NAME}`,
    description: `Compare staking yields and APY across top protocols. Ethereum, Solana, Cosmos, Polkadot staking analysis.`,
  },
};

// Staking Page Component
export default function StakingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Staking Dashboard — ${SITE_NAME}`,
    description:
      'Compare staking yields across Ethereum, Solana, Cosmos, and Polkadot. Find the best APY for major staking protocols.',
    url: `${SITE_URL}/staking`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Staking', href: '/staking' },
            ]}
          />

          {/* Hero Section */}
          <div className="mb-12 pt-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Staking Dashboard</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Discover and compare staking yields across major blockchains. View real-time APY, TVL, minimum stake
              requirements, and risk assessments for Ethereum, Solana, Cosmos, and Polkadot protocols. Use our staking
              calculator to project your earnings and make informed decisions about where to stake your crypto.
            </p>
          </div>

          {/* Main Content */}
          <StakingDashboard />

          {/* Related Guides Section */}
          <section className="mt-16 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Learn More About Staking</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/learn/what-is-cryptocurrency"
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors"
              >
                <span className="inline-block text-blue-400 text-xs font-medium px-3 py-1 mb-2 rounded-full bg-blue-500/20 border border-blue-500/30">
                  Basics
                </span>
                <h3 className="font-semibold text-white text-sm">What is Cryptocurrency?</h3>
              </Link>

              <Link
                href="/learn/what-is-blockchain"
              >
                <span className="inline-block text-blue-400 text-xs font-medium px-3 py-1 mb-2 rounded-full bg-blue-500/20 border border-blue-500/30">
                  Learning
                </span>
                <h3 className="font-semibold text-white text-sm">What is Blockchain?</h3>
              </Link>

              <Link
                href="/defi-yields"
              >
                <span className="inline-block text-blue-400 text-xs font-medium px-3 py-1 mb-2 rounded-full bg-blue-500/20 border border-blue-500/30">
                  DeFi
                </span>
                <h3 className="font-semibold text-white text-sm">DeFi Yield Aggregator</h3>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Staking FAQ</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">What is the safest staking protocol?</h3>
                <p className="text-gray-300 text-sm">
                  Lido (stETH) on Ethereum is currently the largest and most battle-tested liquid staking protocol
                  with over $35B TVL. Rocket Pool (rETH) is another secure option with strong security audits and
                  decentralized validator infrastructure.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Can I unstake my tokens anytime?</h3>
                <p className="text-gray-300 text-sm">
                  It depends on the protocol. Liquid staking protocols like Lido and Rocket Pool allow you to unstake
                  instantly by trading your derivative tokens (stETH, rETH). Direct staking may have lock-up periods
                  that vary by blockchain.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">What is slashing?</h3>
                <p className="text-gray-300 text-sm">
                  Slashing is a penalty applied to validators who behave maliciously or go offline. Liquid staking
                  protocols distribute this risk across many validators, reducing the impact on individual stakers.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">How are staking rewards calculated?</h3>
                <p className="text-gray-300 text-sm">
                  Staking rewards are typically expressed as APY (Annual Percentage Yield), which includes compounding.
                  The actual rewards depend on network participation, validator commission fees, and the total amount
                  staked on the network.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Do I need to run a validator?</h3>
                <p className="text-gray-300 text-sm">
                  No. Liquid staking protocols and validator services handle the technical requirements. You simply
                  deposit your tokens and earn rewards. This is much simpler than running your own validator.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Are staking rewards taxable?</h3>
                <p className="text-gray-300 text-sm">
                  In most jurisdictions, staking rewards are considered taxable income when earned. Consult with a tax
                  professional about your specific situation, as tax treatment varies by location and the specific
                  protocol used.
                </p>
              </div>
            </div>
          </section>

          {/* Key Protocols Overview */}
          <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Major Staking Ecosystems</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Ethereum */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    Ξ
                  </div>
                  <h3 className="text-xl font-bold text-white">Ethereum</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Ethereum shifted to Proof of Stake in 2022 (The Merge). Major protocols like Lido, Rocket Pool, and
                  Frax offer staking with APY rates between 3.8% and 4.3%.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg APY:</span>
                    <span className="font-semibold text-green-400">3.9-4.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min Stake:</span>
                    <span className="font-semibold text-white">0.01 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk:</span>
                    <span className="font-semibold text-green-400">Low to Medium</span>
                  </div>
                </div>
              </div>

              {/* Solana */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                    ◎
                  </div>
                  <h3 className="text-xl font-bold text-white">Solana</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Solana is a high-performance PoS blockchain. Protocols like Marinade and Jito offer higher APY rates
                  (7-8%+) compared to Ethereum, reflecting higher network risk and activity.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg APY:</span>
                    <span className="font-semibold text-yellow-400">7.2-8.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min Stake:</span>
                    <span className="font-semibold text-white">0.01 SOL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk:</span>
                    <span className="font-semibold text-yellow-400">Low to Medium</span>
                  </div>
                </div>
              </div>

              {/* Cosmos */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                    ⚛
                  </div>
                  <h3 className="text-xl font-bold text-white">Cosmos</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Cosmos is an ecosystem of interoperable blockchains. Staking yields are generally higher (12-18%)
                  across protocols like Cosmos Hub, Osmosis, and Juno.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg APY:</span>
                    <span className="font-semibold text-orange-400">12.5-18.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min Stake:</span>
                    <span className="font-semibold text-white">Minimal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk:</span>
                    <span className="font-semibold text-yellow-400">Medium to High</span>
                  </div>
                </div>
              </div>

              {/* Polkadot */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold">
                    ●
                  </div>
                  <h3 className="text-xl font-bold text-white">Polkadot</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Polkadot is a heterogeneous multi-chain framework. Native staking and protocols like Lido offer APY
                  around 10-12%, balancing solid returns with established infrastructure.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg APY:</span>
                    <span className="font-semibold text-cyan-400">10.1-12.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min Stake:</span>
                    <span className="font-semibold text-white">0.01-1 DOT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk:</span>
                    <span className="font-semibold text-green-400">Low to Medium</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-12 mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Start Staking?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Use our staking calculator above to estimate your potential earnings, then compare protocols based on APY,
              TVL, and risk tolerance. Remember: diversification across multiple protocols and blockchains can reduce
              overall risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/defi-yields"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                Explore DeFi Yields
              </Link>
              <Link
                href="/learn/crypto-security-guide"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold transition-colors"
              >
                Security Guide
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
