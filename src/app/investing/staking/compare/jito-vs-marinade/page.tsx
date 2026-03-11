import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { stakingDetailedComparisons, stakingComparisonFeatures } from "@/data/staking";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Jito vs Marinade: Which Is Better? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Detailed comparison of Jito vs Marinade for Solana staking. Compare MEV yields, decentralization, liquid staking tokens, and fees to choose the right SOL staking protocol.",
};

export default function JitoVsMariadePage() {
  const jito = stakingDetailedComparisons["jito"];
  const marinade = stakingDetailedComparisons["marinade"];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Staking", href: "/investing/staking" },
          { label: "Compare", href: "/investing/staking" },
          { label: "Jito vs Marinade", href: "#" },
        ]}
      />

      <AffiliateDisclosure />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Jito vs Marinade: Which Solana Staking Protocol Is Better in {CURRENT_YEAR}?
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">
        Updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Jito and Marinade are the two dominant liquid staking protocols on Solana, but they take
        distinctly different approaches. Jito maximizes staker returns through MEV reward sharing,
        while Marinade prioritizes Solana network health through broad validator distribution. This
        comparison breaks down the key differences to help you choose.
      </p>

      <ComparisonTable
        items={[jito, marinade]}
        features={stakingComparisonFeatures}
        title="Jito vs Marinade: Head-to-Head"
      />

      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Yield Comparison</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Jito consistently delivers higher yields than Marinade, primarily due to its MEV reward
          sharing mechanism. JitoSOL typically yields 7-8% APY compared to mSOL&apos;s 6-7.5% APY.
          The 0.5-1.5% premium comes from block auction proceeds that Jito&apos;s validator client
          captures and distributes to stakers.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          However, Marinade&apos;s native staking option charges 0% protocol fee, which can make its
          effective yield competitive for users who do not need a liquid token. For those who want
          both maximum yield and liquidity, Jito remains the clear leader.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Decentralization</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Marinade significantly outperforms Jito on decentralization metrics. Marinade distributes
          stake across 400+ validators using an algorithmic scoring system that actively promotes
          smaller, high-performing validators. Jito operates a curated validator set that, while
          competent, is more concentrated.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          For users who believe Solana&apos;s long-term health depends on broad validator distribution,
          Marinade is the clear choice. Every SOL staked through Marinade actively works to prevent
          stake concentration, which strengthens the network against censorship and downtime risks.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Fee Structure</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Jito charges 4% of staking rewards, making it the lower-fee liquid staking option. Marinade
          charges 6% for liquid staking (mSOL) but offers native staking at 0%. For users who want
          a liquid token, Jito is cheaper. For users who want absolute maximum yield without
          liquidity needs, Marinade native staking is unbeatable at zero cost.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-white">Choose Jito if</strong> maximizing yield is your primary
            goal. JitoSOL&apos;s MEV-enhanced returns are the highest available for Solana staking, and
            its 4% fee is competitive. Jito is the best choice for yield-focused stakers who want
            DeFi composability.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-white">Choose Marinade if</strong> you value Solana network
            decentralization and want flexible staking options. Marinade&apos;s native staking at 0%
            fee is ideal for long-term holders, while mSOL provides liquid staking for those who
            need DeFi access.
          </p>
        </div>
      </div>

      <FAQSection
        faqs={[
          {
            question: "Can I use both Jito and Marinade?",
            answer:
              "Yes, many Solana stakers split their SOL between both protocols. You might use Jito for the portion you want to maximize yield on and Marinade native staking for long-term holdings. Both JitoSOL and mSOL can be held simultaneously.",
          },
          {
            question: "Which is more liquid, JitoSOL or mSOL?",
            answer:
              "JitoSOL currently has deeper liquidity on Solana DEXs, making it easier to swap large amounts without significant price impact. mSOL liquidity is solid but slightly shallower. For most users, both tokens offer adequate liquidity for typical trade sizes.",
          },
          {
            question: "Is MEV sharing ethical?",
            answer:
              "This is a debated topic. Jito argues that MEV extraction happens regardless, and sharing proceeds with stakers is better than letting them be captured solely by searchers. Critics argue that some forms of MEV (like sandwich attacks) harm regular users. Jito has taken steps to minimize harmful MEV practices.",
          },
        ]}
      />
    </div>
  );
}
