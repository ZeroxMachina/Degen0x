import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { stakingPlatforms } from "@/data/staking";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Ethereum Staking Platforms of ${CURRENT_YEAR} (Compared)`,
  description: `Compare the best Ethereum staking platforms in ${CURRENT_YEAR}. Liquid staking with Lido, Rocket Pool, StakeWise, and centralized options from Coinbase and Kraken.`,
};

const faqs = [
  {
    question: "How much ETH do I need to stake?",
    answer: "With liquid staking protocols like Lido or Rocket Pool, there is no minimum requirement. You can stake as little as 0.01 ETH. Solo staking requires 32 ETH to run your own validator. Centralized platforms like Coinbase also have no minimum for staking ETH.",
  },
  {
    question: "What APY can I expect from ETH staking?",
    answer: "Ethereum staking APY typically ranges from 3% to 4% depending on network conditions and the platform used. This rate fluctuates based on the total amount of ETH staked network-wide and on-chain activity levels. Restaking through EigenLayer can add an additional 1-5% on top of base staking rewards.",
  },
  {
    question: "What is the difference between stETH and rETH?",
    answer: "stETH (from Lido) is a rebasing token, meaning your balance increases daily as rewards accumulate. rETH (from Rocket Pool) is a value-accruing token, meaning the amount stays the same but the price relative to ETH increases over time. Both represent staked ETH but have different DeFi implications, particularly for tax accounting.",
  },
  {
    question: "Can I unstake my ETH at any time?",
    answer: "Most liquid staking tokens (stETH, rETH, cbETH) can be swapped on decentralized exchanges at any time. Direct unstaking through the protocol involves a withdrawal queue that typically takes 1-5 days depending on network demand. Centralized platforms may have their own processing times.",
  },
];

export default function BestEthereumStakingPage() {
  const ethPlatforms = stakingPlatforms.filter(
    (p) =>
      p.description.toLowerCase().includes("ethereum") ||
      p.description.toLowerCase().includes("eth") ||
      p.slug === "lido" ||
      p.slug === "rocket-pool" ||
      p.slug === "coinbase-staking" ||
      p.slug === "kraken-staking" ||
      p.slug === "eigenlayer" ||
      p.slug === "stakewise"
  ).sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Ethereum Staking Platforms of ${CURRENT_YEAR}`,
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
            { label: "Best Ethereum Staking", href: "/investing/staking/best/ethereum" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Ethereum Staking Platforms of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Ethereum staking has become the cornerstone of the ETH ecosystem since the merge to proof-of-stake.
            Whether you want to keep your staked ETH liquid through protocols like Lido and Rocket Pool,
            earn extra yield through restaking with EigenLayer, or prefer the simplicity of centralized
            staking on Coinbase, there is an option for every type of staker.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            We have tested every major Ethereum staking platform by staking real ETH and tracking actual
            yields, fee accuracy, and unstaking times. Here are our top picks for {CURRENT_YEAR}.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
          <div className="space-y-4">
            {ethPlatforms.map((platform, index) => (
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Ethereum Staking Overview</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Since Ethereum transitioned to proof-of-stake in September 2022 (the Merge), staking has become
            the primary mechanism for securing the network. Validators stake 32 ETH to participate in
            block production and attestation, earning rewards in return. For users who do not have 32 ETH
            or do not want to manage validator infrastructure, staking pools and liquid staking protocols
            provide accessible alternatives.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            The Ethereum staking ecosystem has evolved rapidly, with liquid staking tokens (LSTs) like
            stETH, rETH, and cbETH becoming foundational DeFi building blocks. Restaking through EigenLayer
            has added another layer of yield opportunity, and the competitive landscape continues to
            innovate with new approaches like StakeWise&apos;s vault architecture.
          </p>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
