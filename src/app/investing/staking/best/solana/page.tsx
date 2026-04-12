import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { stakingPlatforms } from "@/data/staking";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Solana Staking Platforms of ${CURRENT_YEAR} (Compared)`,
  description: `Compare the best Solana staking platforms in ${CURRENT_YEAR}. Jito, Marinade, and Coinbase compared for yields, fees, and DeFi composability.`,
};

const faqs = [
  {
    question: "What APY can I expect from staking SOL?",
    answer: "Solana staking yields typically range from 6% to 8% APY. Jito offers the highest yields (7-8%) due to MEV reward sharing. Marinade provides 6-7.5% APY, and centralized platforms like Coinbase offer slightly lower rates after their commission.",
  },
  {
    question: "What is JitoSOL vs mSOL?",
    answer: "JitoSOL is Jito's liquid staking token that includes MEV rewards in its yield, resulting in higher APY. mSOL is Marinade's liquid staking token that focuses on decentralization by distributing stake across 400+ validators. Both can be used in Solana DeFi protocols.",
  },
  {
    question: "Is Solana staking safe?",
    answer: "Solana staking carries standard proof-of-stake risks including validator downtime penalties and smart contract risks for liquid staking protocols. Solana does not have slashing for validators currently, which reduces one major risk compared to Ethereum staking. However, Solana has experienced network outages in the past.",
  },
  {
    question: "How long does it take to unstake SOL?",
    answer: "Native Solana unstaking takes approximately 2-3 days (one epoch). Liquid staking tokens like JitoSOL and mSOL can be instantly swapped on DEXs without waiting for the unstaking period, though large trades may incur slippage.",
  },
];

export default function BestSolanaStakingPage() {
  const solPlatforms = stakingPlatforms.filter(
    (p) =>
      p.description.toLowerCase().includes("solana") ||
      p.slug === "jito" ||
      p.slug === "marinade" ||
      p.slug === "coinbase-staking"
  ).sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Solana Staking Platforms of ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Investing", href: "/investing" },
            { label: "Staking", href: "/investing/staking" },
            { label: "Best Solana Staking", href: "/investing/staking/best/solana" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Solana Staking Platforms of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Solana staking offers some of the highest yields in the proof-of-stake ecosystem, with rates
            typically between 6% and 8% APY. The Solana staking landscape is dominated by two liquid staking
            protocols: Jito, which maximizes yields through MEV reward sharing, and Marinade, which
            prioritizes network decentralization by distributing stake across hundreds of validators.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            Our top pick for maximum Solana staking yield is <strong className="text-[var(--color-text)]">Jito</strong>,
            while <strong className="text-[var(--color-text)]">Marinade</strong> is the best choice for users who value
            decentralization and flexible staking options. For beginners,{" "}
            <strong className="text-[var(--color-text)]">Coinbase Staking</strong> provides the simplest SOL staking experience.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
          <div className="space-y-4">
            {solPlatforms.map((platform, index) => (
              <ProductCard
                key={platform.slug}
                product={platform}
                rank={index + 1}
                categorySlug="investing/staking"
              />
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Solana Staking Overview</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Solana uses a delegated proof-of-stake (DPoS) consensus mechanism where SOL holders can
            delegate their tokens to validators who secure the network. Unlike Ethereum, Solana does not
            currently implement slashing for validator misbehavior, which reduces the risk of losing staked
            funds. However, validators that go offline earn reduced rewards during their downtime.
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
            The Solana liquid staking ecosystem has matured significantly, with JitoSOL and mSOL becoming
            widely integrated across Solana DeFi protocols. These tokens can be used as collateral in lending
            protocols, provided as liquidity in DEX pools, or used in yield farming strategies, allowing
            stakers to earn additional returns on top of base staking rewards.
          </p>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
