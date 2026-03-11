import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is TVL? Total Value Locked Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what Total Value Locked means in DeFi, how TVL is calculated, why it matters as a metric, its limitations, and how to use TVL for protocol analysis.",
  keywords: ["TVL", "total value locked", "DeFi TVL", "DeFi metrics", "protocol analysis", "TVL explained"],
};

export default function WhatIsTvlPage() {
  return (
    <LearnPageLayout
      title="What Is TVL? Total Value Locked Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="6 min"
      intro="Total Value Locked (TVL) measures the total dollar value of cryptocurrency deposited in a DeFi protocol's smart contracts. It is the most widely cited metric for gauging the size, adoption, and trust level of DeFi protocols and blockchains. While imperfect, TVL provides a useful snapshot of how much capital users have entrusted to a particular protocol."
      toc={[
        { id: "what-is-tvl", title: "Understanding TVL", level: 2 },
        { id: "how-calculated", title: "How TVL Is Calculated", level: 2 },
        { id: "why-it-matters", title: "Why TVL Matters", level: 2 },
        { id: "limitations", title: "TVL Limitations", level: 2 },
        { id: "using-tvl", title: "Using TVL for Analysis", level: 2 },
      ]}
      faqs={[
        { question: "What is a good TVL for a DeFi protocol?", answer: "There is no universal threshold, but protocols with over $100M TVL are generally considered established. Top protocols like Aave and Lido manage billions in TVL. Context matters — a lending protocol needs more TVL than a governance tool. Always compare TVL relative to similar protocols in the same category." },
        { question: "Does higher TVL mean a protocol is safe?", answer: "Not necessarily. TVL measures capital deposited, not security. A protocol with high TVL could still have smart contract vulnerabilities, governance risks, or economic design flaws. However, high TVL often correlates with more security audits, longer track records, and more eyes reviewing the code." },
        { question: "Where can I check TVL?", answer: "DefiLlama is the most widely used TVL tracking platform, providing comprehensive data across protocols and chains. Other sources include DeFi Pulse, Token Terminal, and individual protocol dashboards. DefiLlama is generally preferred for its methodology transparency and broad coverage." },
      ]}
      relatedArticles={[
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn" },
        { title: "What Is Liquidity?", href: "/learn/what-is-liquidity", category: "Learn" },
        { title: "What Is Market Cap?", href: "/learn/what-is-market-cap", category: "Learn" },
        { title: "How to Research Crypto", href: "/learn/how-to-research-crypto", category: "Learn" },
      ]}
    >
      <section id="what-is-tvl">
        <h2>Understanding TVL</h2>
        <p>
          Total Value Locked represents the aggregate value of assets deposited in a DeFi protocol's smart contracts. When you deposit ETH into Aave for lending, provide liquidity on Uniswap, or stake tokens in a yield farm, those assets contribute to the respective protocol's TVL. Think of TVL as a measure of user confidence — the more capital people are willing to lock in a protocol's smart contracts, the more they trust it.
        </p>
        <p>
          TVL is measured at multiple levels. Protocol TVL measures the value locked in a specific application like Aave or Uniswap. Chain TVL aggregates all protocol TVLs on a particular blockchain, indicating the overall activity and adoption of that chain's DeFi ecosystem. Total DeFi TVL sums all chains and protocols, providing a macro view of the DeFi sector's size. Each level offers different insights for different analysis purposes.
        </p>
      </section>

      <section id="how-calculated">
        <h2>How TVL Is Calculated</h2>
        <p>
          TVL calculation involves identifying all smart contract addresses belonging to a protocol, summing the value of all tokens held in those contracts, and converting to a common denomination (usually USD). The calculation sounds simple but involves several nuances: which token prices to use, how to handle LP tokens and receipt tokens, whether to count staked governance tokens, and how to avoid double-counting assets that appear in multiple protocols through composability.
        </p>
        <p>
          Different tracking platforms may report different TVL figures for the same protocol due to methodological differences. DefiLlama, the industry standard, typically excludes double-counted TVL (where the same assets are counted in multiple protocols through layered deposits) and provides both raw and adjusted figures. Understanding these methodological choices is important for accurately comparing protocols and interpreting TVL trends.
        </p>
      </section>

      <section id="why-it-matters">
        <h2>Why TVL Matters</h2>
        <p>
          TVL serves as a proxy for multiple important protocol characteristics. Higher TVL generally indicates greater user trust, deeper liquidity for traders, more capital efficiency for borrowers, and stronger network effects. For lending protocols, higher TVL means more available capital to borrow. For DEXs, higher TVL (in liquidity pools) means better trade execution with less slippage. For yield aggregators, higher TVL indicates more user confidence in the strategy's performance.
        </p>
        <p>
          TVL trends over time reveal whether a protocol is growing or shrinking. Rapidly increasing TVL suggests strong product-market fit and growing adoption. Declining TVL may indicate users moving to competitors, loss of confidence after security incidents, or the end of unsustainable incentive programs. Comparing a protocol's TVL trajectory against competitors in the same category provides valuable insight into competitive dynamics and market positioning.
        </p>
      </section>

      <section id="limitations">
        <h2>TVL Limitations</h2>
        <p>
          TVL has significant limitations as a standalone metric. It can be artificially inflated through leveraged deposits (depositing, borrowing, and re-depositing), token incentive programs that attract mercenary capital that leaves when incentives end, and high token prices that inflate the dollar value without real growth in deposited quantities. During bull markets, TVL increases automatically as token prices rise, even without any new deposits.
        </p>
        <p>
          TVL also does not capture important dimensions of protocol health. A protocol might have high TVL but generate no meaningful revenue. Another might have moderate TVL but strong revenue per dollar locked, indicating superior capital efficiency. Metrics like revenue, fees generated, price-to-TVL ratio, and revenue-to-TVL ratio provide complementary insights that paint a more complete picture of protocol health and value.
        </p>
      </section>

      <section id="using-tvl">
        <h2>Using TVL for Analysis</h2>
        <p>
          For meaningful analysis, compare TVL in context. Use TVL relative to market cap (market cap / TVL ratio) to assess whether a protocol's token is overvalued or undervalued relative to its actual usage. Compare protocol TVL against competitors in the same category to assess market share. Track TVL denominated in the native asset (ETH-denominated TVL for Ethereum protocols) to filter out price effects and see real deposit growth.
        </p>
        <p>
          Combine TVL with other metrics for a comprehensive view: revenue per TVL indicates capital efficiency, user count per TVL reveals whether deposits are concentrated or distributed, TVL growth rate shows momentum, and the sustainability of TVL after incentive programs end reveals genuine product-market fit versus mercenary capital. No single metric tells the whole story — TVL is most valuable as one component of a broader analytical framework.
        </p>
      </section>
    </LearnPageLayout>
  );
}
