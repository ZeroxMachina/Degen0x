import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { stakingPlatforms } from "@/data/staking";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Staking Platforms of ${CURRENT_YEAR} - Compare & Review`,
  description: `Compare the best crypto staking platforms of ${CURRENT_YEAR}. Expert reviews of liquid staking, restaking, and validator services. Find the best staking yields and lowest fees.`,
};

const bestOfLinks = [
  { title: "Best Staking Platforms", href: "/investing/staking/best", description: "Our top-rated staking platforms across all categories" },
  { title: "Best Ethereum Staking", href: "/investing/staking/best/ethereum", description: "Top platforms for staking ETH" },
  { title: "Best Solana Staking", href: "/investing/staking/best/solana", description: "Top platforms for staking SOL" },
  { title: "Best Liquid Staking", href: "/investing/staking/best/liquid-staking", description: "Stake and keep your assets liquid" },
  { title: "Best Restaking Platforms", href: "/investing/staking/best/restaking", description: "Earn extra yield by restaking" },
  { title: "Best Staking Validators", href: "/investing/staking/best/validators", description: "Top-performing validator services" },
  { title: "Highest Staking APY", href: "/investing/staking/best/highest-apy", description: "Maximum staking returns" },
  { title: "Best for Beginners", href: "/investing/staking/best/beginners", description: "Easy staking for newcomers" },
];

const reviewLinks = [
  { name: "Lido", slug: "lido" },
  { name: "Rocket Pool", slug: "rocket-pool" },
  { name: "Coinbase Staking", slug: "coinbase-staking" },
  { name: "Kraken Staking", slug: "kraken-staking" },
  { name: "EigenLayer", slug: "eigenlayer" },
  { name: "Jito", slug: "jito" },
  { name: "Marinade", slug: "marinade" },
  { name: "StakeWise", slug: "stakewise" },
];

const compareLinks = [
  { title: "Lido vs Rocket Pool", href: "/investing/staking/compare/lido-vs-rocket-pool" },
  { title: "Coinbase vs Lido", href: "/investing/staking/compare/coinbase-vs-lido" },
  { title: "Jito vs Marinade", href: "/investing/staking/compare/jito-vs-marinade" },
  { title: "EigenLayer vs Lido", href: "/investing/staking/compare/eigenlayer-vs-lido" },
];

const learnLinks = [
  { title: "What Is Staking?", href: "/investing/staking/learn/what-is-staking" },
  { title: "Liquid Staking Explained", href: "/investing/staking/learn/liquid-staking-explained" },
  { title: "Restaking Explained", href: "/investing/staking/learn/restaking-explained" },
  { title: "Staking Risks", href: "/investing/staking/learn/staking-risks" },
  { title: "Staking Rewards & Taxes", href: "/investing/staking/learn/staking-rewards-taxes" },
  { title: "Validator Guide", href: "/investing/staking/learn/validator-guide" },
];

const toolLinks = [
  { title: "Staking Rewards Calculator", href: "/investing/staking/calculators/staking-rewards-calculator", description: "Estimate your staking returns over time" },
  { title: "Compound Staking Calculator", href: "/investing/staking/calculators/compound-staking-calculator", description: "See how compounding boosts staking yields" },
];

const faqs = [
  {
    question: "What is crypto staking?",
    answer: "Crypto staking is the process of locking up cryptocurrency in a proof-of-stake blockchain network to help validate transactions and secure the network. In return, stakers earn rewards, typically paid in the same cryptocurrency they staked. It is similar to earning interest on a savings account, but with higher potential returns and different risks.",
  },
  {
    question: "How much can you earn from staking?",
    answer: "Staking yields vary significantly by network and platform. Ethereum staking typically yields 3-4% APY, Solana staking offers 6-8% APY, and some newer networks offer 10%+ APY. These rates fluctuate based on network activity, total amount staked, and the specific platform you use. Higher yields often come with higher risk.",
  },
  {
    question: "What is liquid staking?",
    answer: "Liquid staking allows you to stake your crypto while receiving a derivative token (like stETH or JitoSOL) that represents your staked position. This derivative token can be used in DeFi protocols for lending, borrowing, or providing liquidity, giving you access to your capital while still earning staking rewards.",
  },
  {
    question: "Is crypto staking safe?",
    answer: "Staking carries several risks including slashing (losing a portion of staked funds due to validator misbehavior), smart contract vulnerabilities (for DeFi staking protocols), market risk (the staked asset can lose value), and liquidity risk (inability to unstake quickly during market downturns). Using reputable platforms and understanding the risks can help mitigate these concerns.",
  },
  {
    question: "Do I have to pay taxes on staking rewards?",
    answer: "In most jurisdictions including the United States, staking rewards are considered taxable income at the time they are received, valued at their fair market value. When you later sell or trade the rewards, any change in value is subject to capital gains tax. Tax treatment varies by country, so consulting a tax professional is recommended.",
  },
];

export default function StakingHubPage() {
  const topPlatforms = [...stakingPlatforms].sort((a, b) => b.rating - a.rating).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best Crypto Staking Platforms of ${CURRENT_YEAR}`,
    description: `Compare the best crypto staking platforms of ${CURRENT_YEAR}. Expert reviews, yield comparisons, and risk analysis.`,
    url: "https://degen0x.com/investing/staking",
    isPartOf: { "@type": "WebSite", name: SITE_NAME },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Investing", href: "/investing" },
            { label: "Staking", href: "/investing/staking" },
          ]}
        />

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Crypto Staking Hub
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Your complete resource for crypto staking. Find expert reviews of staking platforms,
            compare liquid staking protocols, learn about restaking, and use our calculators to
            estimate your staking rewards. Last updated {CURRENT_MONTH} {CURRENT_YEAR}.
          </p>
        </div>

        {/* Top Staking Platforms */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">Top-Rated Staking Platforms</h2>
            <Link href="/investing/staking/best"
              className="text-[var(--color-primary)] hover:underline text-sm font-medium"
            >
              View all rankings &rarr;
            </Link>
          </div>
          <AffiliateDisclosure />
          <div className="space-y-4">
            {topPlatforms.map((platform, index) => (
              <ProductCard
                key={platform.slug}
                product={platform}
                rank={index + 1}
                categorySlug="investing/staking"
              />
            ))}
          </div>
        </section>

        {/* Best-Of Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Find the Best Staking Platform For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestOfLinks.map((link) => (
              <Link href="/investing/staking/best"
                key={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block"
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Platform Reviews */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Platform Reviews</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {reviewLinks.map((review) => (
              <Link href="/investing/staking/best"
                key={review.slug}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover text-center block"
              >
                <span className="text-[var(--color-text)] font-semibold">{review.name}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  Full Review
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Comparisons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Head-to-Head Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {compareLinks.map((link) => (
              <Link href="/investing/staking/best"
                key={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"
              >
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  Detailed comparison &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Staking Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {toolLinks.map((tool) => (
              <Link href="/investing/staking/best"
                key={tool.href}
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{tool.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Learn Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Learn About Staking</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learnLinks.map((link) => (
              <Link href="/investing/staking/best"
                key={link.href}
              >
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Review Staking Platforms</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Our staking platform reviews are based on rigorous hands-on testing. Each platform is evaluated
            across multiple categories including yield accuracy, fee transparency, security, decentralization,
            DeFi composability, and user experience. We stake real assets on every platform we review and
            regularly update our ratings to reflect protocol upgrades and market conditions.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Our investment research is opinionated by design — we believe conviction backed by on-chain data beats diversification into projects you don't understand.
          </p>
        </div>
          <p className="text-[var(--color-text-secondary)]">
            Our editorial team consists of experienced DeFi users and staking participants who have collectively
            staked millions of dollars across these protocols. We believe in full transparency: when you click
            an affiliate link and stake through a platform, we may receive a commission at no extra cost to you.
            This helps us keep our content free and up-to-date.
          </p>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
