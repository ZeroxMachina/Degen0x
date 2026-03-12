import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Lending &amp; Borrowing Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Learn how crypto lending and borrowing works. Guide to DeFi lending protocols, CeFi platforms, yields, and risks of crypto lending investing.`,
};

export default function CryptoLendingInvestingPage() {
  return (
    <LearnPageLayout
      title="Crypto Lending and Borrowing Guide"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="11 min"
      intro="Crypto lending allows you to earn interest on your crypto holdings by lending them to borrowers through decentralized protocols or centralized platforms. It is one of the most straightforward ways to generate passive income from crypto. This guide covers how lending works, the best platforms, and the risks you need to understand."
      toc={[
        { id: "how-lending-works", title: "how-lending-works", level: 2 },
        { id: "how-crypto-lending-works", title: "How Crypto Lending Works", level: 2 },
        { id: "defi-vs-cefi", title: "defi-vs-cefi", level: 2 },
        { id: "defi-vs-cefi-lending", title: "DeFi vs CeFi Lending", level: 2 },
        { id: "yields-and-rates", title: "yields-and-rates", level: 2 },
        { id: "understanding-yields-and-rates", title: "Understanding Yields and Rates", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "lending-risks", title: "Lending Risks", level: 2 }
      ]}
      faqs={[
        { question: "What yields can I earn from crypto lending?", answer: "Yields vary significantly by asset and platform. Stablecoin lending typically yields 2-8% APY on established DeFi protocols. ETH and BTC lending yields are lower, usually 1-3% APY. Rates fluctuate based on borrowing demand. Be cautious of platforms offering yields that seem too high to be sustainable." },
        { question: "Is crypto lending safe?", answer: "DeFi lending on audited protocols like Aave and Compound has a strong track record, but smart contract risk always exists. CeFi lending carries counterparty risk, as demonstrated by the collapses of Celsius, Voyager, and BlockFi in 2022. Diversify across platforms and never lend more than you can afford to lose." },
      ]}
      relatedArticles={[
        { title: "DeFi vs CeFi Investing", href: "/investing/learn/defi-vs-cefi-investing", category: "Investing" },
        { title: "Best Passive Income Crypto", href: "/investing/best/passive-income", category: "Investing" },
        { title: "Staking vs Lending", href: "/investing/staking/learn/staking-vs-lending", category: "Staking" },
      ]}
    >
      <h2 id="how-lending-works">How Crypto Lending Works</h2>
      <p>
        Crypto lending connects lenders who want to earn yield with borrowers who need capital.
        Lenders deposit crypto into lending pools and earn interest. Borrowers provide collateral
        (typically 150% or more of the loan value) and pay interest to access loans. The
        over-collateralization requirement protects lenders from borrower default. Smart contracts
        automate the process in DeFi, while CeFi platforms manage it through their internal
        systems.
      </p>

      <h2 id="defi-vs-cefi">DeFi vs CeFi Lending</h2>
      <p>
        DeFi lending protocols like Aave, Compound, and Morpho operate through smart contracts
        on-chain. You maintain custody of your assets (they are in a smart contract, not a company
        treasury), rates adjust algorithmically based on supply and demand, and the process is
        transparent and permissionless. CeFi lending platforms offer simpler user experiences
        but require trusting the platform with your funds. The 2022 CeFi lending crisis destroyed
        billions in user funds and highlighted the counterparty risk of centralized lending.
      </p>

      <h2 id="yields-and-rates">Understanding Yields and Rates</h2>
      <p>
        Lending yields are driven by borrowing demand. When many traders want to borrow stablecoins
        (to long crypto with leverage), stablecoin lending rates rise. During bear markets,
        borrowing demand decreases and lending yields fall. Variable rates on protocols like Aave
        change block-by-block based on utilization. Some platforms offer fixed-rate lending for
        more predictable income. Always compare the advertised APY to historical rates to set
        realistic expectations.
      </p>

      <h2 id="risks">Lending Risks</h2>
      <p>
        Smart contract risk is the primary concern in DeFi lending. Despite audits, bugs can
        result in fund losses. Oracle manipulation can cause incorrect liquidations or enable
        exploits. In CeFi, counterparty risk means the platform could mismanage funds, become
        insolvent, or freeze withdrawals. Liquidation cascades during market crashes can
        temporarily reduce collateral ratios. Mitigate risks by using established protocols,
        diversifying across platforms, and monitoring your positions regularly.
      </p>
    </LearnPageLayout>
  );
}
