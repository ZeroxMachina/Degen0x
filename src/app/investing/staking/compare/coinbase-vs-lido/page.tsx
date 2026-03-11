import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { stakingDetailedComparisons, stakingComparisonFeatures } from "@/data/staking";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Coinbase Staking vs Lido: Which Is Better? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Detailed comparison of Coinbase Staking vs Lido. Compare fees, ease of use, DeFi integrations, and regulatory status to choose the right ETH staking option.",
};

export default function CoinbaseVsLidoPage() {
  const coinbase = stakingDetailedComparisons["coinbase-staking"];
  const lido = stakingDetailedComparisons["lido"];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Staking", href: "/investing/staking" },
          { label: "Compare", href: "/investing/staking" },
          { label: "Coinbase vs Lido", href: "#" },
        ]}
      />

      <AffiliateDisclosure />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Coinbase Staking vs Lido: Which Is Better in {CURRENT_YEAR}?
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">
        Updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Coinbase Staking and Lido represent two fundamentally different approaches to ETH staking:
        centralized convenience versus decentralized composability. Coinbase offers regulated, one-click
        staking with no technical knowledge required, while Lido provides the deepest DeFi integration
        and more competitive fees. This comparison helps you decide which tradeoffs matter most.
      </p>

      <ComparisonTable
        items={[coinbase, lido]}
        features={stakingComparisonFeatures}
        title="Coinbase Staking vs Lido: Head-to-Head"
      />

      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Fee Comparison</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          The fee difference between Coinbase and Lido is substantial. Coinbase takes 25% of staking
          rewards, while Lido charges only 10%. On a $50,000 ETH stake at 3.5% base APY, Coinbase
          would earn you approximately $1,312 per year while Lido would earn you approximately $1,575.
          That is a $263 annual difference, or roughly 16% more with Lido.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          Over longer time horizons, the fee difference compounds significantly. After 5 years, a
          $50,000 stake would earn approximately $1,315 more with Lido than with Coinbase. However,
          Coinbase users do not need a Web3 wallet or any DeFi knowledge, which has real value for
          those who prefer simplicity.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Ease of Use</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Coinbase wins decisively on ease of use. Staking is available directly within the Coinbase
          app with no additional setup. Users do not need to understand Web3 wallets, smart contracts,
          or gas fees. The entire experience is integrated into the familiar Coinbase interface.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          Lido requires a Web3 wallet like MetaMask, understanding of transaction approval, and
          managing gas fees. While the staking interface itself is straightforward, the prerequisite
          knowledge barrier is higher. For someone already active in DeFi, this is a non-issue; for
          a complete beginner, the learning curve is real.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Regulatory Status</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Coinbase is a publicly traded, US-regulated company that provides legal protections and
          insurance for users. Lido is a decentralized protocol governed by a DAO with no regulatory
          status in any jurisdiction. For users in regulated environments who need compliance
          documentation or tax reporting, Coinbase provides a clearer legal framework.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          However, Coinbase staking is restricted in some US states, while Lido is permissionless
          and available globally without geographic restrictions. The regulatory landscape for
          centralized staking services remains uncertain, as the Kraken SEC settlement demonstrated.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-white">Choose Coinbase if</strong> you are a beginner who values
            simplicity above all else, need regulatory compliance for your investments, or do not want
            to interact with DeFi protocols. The convenience and peace of mind justify the higher fees
            for many users.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-white">Choose Lido if</strong> you want to maximize your staking
            returns with lower fees, plan to use your liquid staking token in DeFi, or prefer
            decentralized protocols. Lido is the better choice for DeFi-native users and those
            comfortable with Web3 wallets.
          </p>
        </div>
      </div>

      <FAQSection
        faqs={[
          {
            question: "Is Coinbase or Lido safer for staking?",
            answer:
              "Both have strong safety records but different risk profiles. Coinbase offers regulatory protection, insurance, and absorbs slashing losses. Lido is decentralized with no single point of failure and has undergone multiple audits. Coinbase carries custodial risk; Lido carries smart contract risk. Neither has experienced a major staking incident.",
          },
          {
            question: "Can I switch from Coinbase staking to Lido?",
            answer:
              "Yes. You can unstake your ETH from Coinbase (or sell cbETH on a DEX), transfer ETH to a Web3 wallet like MetaMask, and then stake through Lido to receive stETH. The transition involves standard withdrawal waiting periods and gas fees.",
          },
          {
            question: "Which earns more, cbETH or stETH?",
            answer:
              "stETH (Lido) earns more than cbETH (Coinbase) because Lido charges 10% of rewards versus Coinbase's 25%. The net APY difference is approximately 0.5%, which compounds over time. Additionally, stETH has more DeFi opportunities for earning additional yield.",
          },
        ]}
      />
    </div>
  );
}
