import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Yearn Finance (YFI)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Yearn Finance (YFI), the yield aggregator protocol that automates DeFi strategies. Discover YFI tokenomics, vaults, and how to buy.",
};

export default function YearnPage() {
  return (
    <LearnPageLayout
      title="What Is Yearn Finance (YFI)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Yearn Finance (YFI) is a decentralized yield aggregation protocol on Ethereum that automates yield farming strategies across DeFi. Founded by Andre Cronje in 2020, Yearn's Vaults automatically move deposited funds between lending protocols, liquidity pools, and other yield sources to maximize returns. YFI is the governance token with one of the fairest launches in DeFi history."
      toc={[
        { id: "what-is", title: "What Is Yearn Finance?", level: 2 },
        { id: "how-it-works", title: "How Does Yearn Finance Work?", level: 2 },
        { id: "tokenomics", title: "YFI Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy YFI", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Yearn Finance?",
          answer:
            "Yearn Finance is a DeFi protocol that automates yield farming strategies. Users deposit crypto into Vaults, and Yearn's strategies automatically find and switch between the best yield opportunities. YFI is the governance token with a total supply of only 36,666.",
        },
        {
          question: "Where can I buy YFI?",
          answer:
            "YFI is available on Coinbase, Binance, Kraken, and other major exchanges. It can also be purchased on Uniswap and other Ethereum DEXs.",
        },
        {
          question: "Is Yearn Finance a good investment?",
          answer:
            "YFI has an extremely low supply and governs a protocol with real revenue from management and performance fees. However, competition from other yield aggregators and the complexity of DeFi strategies pose risks.",
        },
      ]}
      relatedArticles={[
        {
          title: "Best Cryptos to Buy",
          href: "/investing/best/cryptos-to-buy",
          category: "Investing",
        },
        {
          title: "How to Invest in Crypto",
          href: "/investing/learn/how-to-invest-in-crypto",
          category: "Investing",
        },
      ]}
    >
      <section id="what-is">
        <h2>What Is Yearn Finance?</h2>
        <p>
          Yearn Finance is a yield aggregation protocol that simplifies DeFi yield farming by automatically allocating user deposits to the highest-yielding strategies available. Created by Andre Cronje in early 2020, Yearn gained fame for its fair launch: YFI tokens were distributed entirely to liquidity providers with no pre-mine, no team allocation, and no investor tokens. This approach made YFI one of the most celebrated governance tokens in DeFi.
        </p>
        <p>
          The protocol's core product, Yearn Vaults, accepts deposits of various tokens and runs automated strategies developed by experienced DeFi strategists. These strategies can involve lending on Aave or Compound, providing liquidity on Curve, farming governance tokens, and other complex multi-step yield generation techniques, all abstracted away from the end user.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Yearn Finance Work?</h2>
        <p>
          Yearn Vaults operate by pooling user deposits and deploying them across multiple yield-generating strategies simultaneously. Each Vault can run multiple strategies with different risk profiles, automatically rebalancing capital between them to optimize returns. Strategy developers submit strategies through a review process, and the best-performing ones are deployed to Vaults. Yearn charges a management fee and a performance fee on profits generated, which constitute the protocol's revenue.
        </p>
        <p>
          The protocol has expanded beyond simple yield aggregation to include yETH (a diversified basket of liquid staking derivatives), veYFI for enhanced governance mechanics, and integrations across multiple DeFi protocols. Yearn V3 introduced modular vault architecture allowing for more flexible strategy deployment.
        </p>
      </section>

      <section id="tokenomics">
        <h2>YFI Tokenomics</h2>
        <p>
          YFI has a fixed total supply of 36,666 tokens, making it one of the scarcest governance tokens in all of crypto. This extremely low supply has contributed to a high per-token price. The veYFI model allows holders to lock YFI for governance power and boosted rewards, similar to Curve's veCRV system. Protocol revenue from management and performance fees accrues to the treasury and is used for operational costs, contributor compensation, and token buybacks. The tokenomics align long-term holders with protocol success.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          YFI is used for governance over protocol parameters, strategy approvals, and treasury management. Holding YFI provides exposure to the yield aggregation sector and the protocol's fee revenue. Yearn Vaults serve individual DeFi users, DAOs managing treasuries, and other protocols seeking automated yield. The protocol is frequently used by sophisticated DeFi participants to simplify complex multi-step yield strategies that would otherwise require constant monitoring and rebalancing.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy YFI</h2>
        <p>
          YFI is available on Coinbase, Binance, Kraken, and most major exchanges. Fractional purchases are standard given the high per-token price. It can also be bought on Uniswap and other Ethereum DEXs. After purchasing, holders can lock YFI into veYFI for governance participation and enhanced rewards, or deposit into Yearn Vaults that include YFI strategies. Store in MetaMask, Ledger, or any Ethereum-compatible wallet.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          Yearn's strategies involve complex interactions with multiple DeFi protocols, multiplying smart contract risk across each integrated platform. Strategy failures or exploits can result in loss of deposited funds. The protocol has experienced hacks in the past, though affected users were partially compensated. Competition from other yield aggregators and the declining yield environment in DeFi reduce the protocol's revenue potential. Dependency on underlying DeFi protocols means Yearn inherits the risks of every platform it integrates with.
        </p>
      </section>
    </LearnPageLayout>
  );
}
