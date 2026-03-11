import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { stakingPlatforms } from "@/data/staking";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Liquid Staking Protocols of ${CURRENT_YEAR} (Compared)`,
  description: `Compare the best liquid staking protocols in ${CURRENT_YEAR}. Lido, Rocket Pool, Jito, Marinade, and StakeWise reviewed for yields, security, and DeFi composability.`,
};

const faqs = [
  {
    question: "What is liquid staking?",
    answer: "Liquid staking allows you to stake your cryptocurrency and receive a liquid derivative token in return. This token represents your staked position and can be freely traded, used as collateral in DeFi, or provided as liquidity. You earn staking rewards while maintaining access to your capital.",
  },
  {
    question: "What are the risks of liquid staking?",
    answer: "Liquid staking introduces smart contract risk (the protocol could be exploited), de-peg risk (the liquid staking token could trade below the value of the underlying asset), and governance risk (protocol changes could affect your position). These risks exist on top of the standard staking risks like slashing.",
  },
  {
    question: "Which liquid staking token has the most DeFi integrations?",
    answer: "Lido's stETH has by far the most DeFi integrations, accepted as collateral on Aave, Compound, MakerDAO, and dozens of other protocols. On Solana, JitoSOL leads in DeFi integrations across the Solana ecosystem.",
  },
  {
    question: "Can I use liquid staking tokens as collateral for loans?",
    answer: "Yes, most major lending protocols accept liquid staking tokens as collateral. For example, you can deposit stETH on Aave to borrow stablecoins. This strategy is called leveraged staking and can amplify returns, but also increases risk significantly.",
  },
];

export default function BestLiquidStakingPage() {
  const liquidPlatforms = stakingPlatforms.filter(
    (p) =>
      p.slug === "lido" ||
      p.slug === "rocket-pool" ||
      p.slug === "jito" ||
      p.slug === "marinade" ||
      p.slug === "stakewise" ||
      p.slug === "coinbase-staking"
  ).sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Liquid Staking Protocols of ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "CryptoDegen" },
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
            { label: "Best Liquid Staking", href: "/investing/staking/best/liquid-staking" },
          ]}
        />

        <h1 className="text-4xl font-bold text-white mb-4">
          Best Liquid Staking Protocols of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Liquid staking has revolutionized how people participate in proof-of-stake networks. Instead of
            locking your assets and losing access to them, liquid staking protocols issue derivative tokens
            that represent your staked position. These tokens can be used throughout DeFi while your
            underlying stake continues to earn rewards.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-white">Lido</strong> dominates Ethereum liquid staking with stETH
            and its unparalleled DeFi integration. <strong className="text-white">Jito</strong> leads
            Solana liquid staking with MEV-enhanced yields. <strong className="text-white">Rocket Pool</strong>
            {" "}offers the most decentralized Ethereum staking with permissionless node operation.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Our Rankings</h2>
          <div className="space-y-4">
            {liquidPlatforms.map((platform, index) => (
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
          <h2 className="text-2xl font-bold text-white mb-4">How Liquid Staking Works</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            When you deposit your crypto into a liquid staking protocol, the protocol stakes it with
            validators on your behalf and mints a derivative token that represents your staked position.
            This token accrues value over time as staking rewards are earned.
          </p>
          <p className="text-[var(--color-text-secondary)] mb-4">
            There are two main token models: rebasing tokens (like stETH) where your token balance
            increases daily, and value-accruing tokens (like rETH, JitoSOL, mSOL) where the token
            price appreciates relative to the underlying asset. Both achieve the same result of
            delivering staking rewards, but have different implications for DeFi usage and tax reporting.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            The total value locked in liquid staking protocols exceeded $40 billion in {CURRENT_YEAR},
            making it one of the largest sectors in DeFi. This growth reflects the strong demand for
            staking yields combined with capital efficiency.
          </p>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
