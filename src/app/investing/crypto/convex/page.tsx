import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Convex Finance (CVX)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Convex Finance (CVX), the protocol that maximizes Curve Finance yields without locking CRV. Discover CVX tokenomics and how to buy.",
};

export default function ConvexPage() {
  return (
    <LearnPageLayout
      title="What Is Convex Finance (CVX)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Convex Finance (CVX) is a DeFi protocol built on top of Curve Finance that allows Curve liquidity providers and CRV holders to earn enhanced yields without directly locking their CRV tokens. Convex has become the largest holder of veCRV, giving it significant influence over Curve's gauge emissions and positioning it as a central player in the Curve Wars."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-convex-finance", title: "What Is Convex Finance?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-convex-finance-work", title: "How Does Convex Finance Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "cvx-tokenomics", title: "CVX Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-cvx", title: "How to Buy CVX", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Convex Finance?",
          answer:
            "Convex Finance is a DeFi platform that optimizes Curve Finance yields. CRV holders can deposit their tokens into Convex to earn boosted rewards without the four-year lock, and Curve LP providers can earn enhanced yields through Convex's accumulated veCRV voting power.",
        },
        {
          question: "Where can I buy CVX?",
          answer:
            "CVX is available on Binance, Coinbase, KuCoin, and other exchanges. It can also be swapped on Uniswap and SushiSwap.",
        },
        {
          question: "Is Convex Finance a good investment?",
          answer:
            "CVX offers leveraged exposure to Curve Finance governance power. Its value is tightly coupled to CRV and the health of the Curve ecosystem. Strong protocol mechanics but dependency on a single platform is a notable risk.",
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
        <h2>What Is Convex Finance?</h2>
        <p>
          Convex Finance launched in May 2021 to solve a fundamental tension in the Curve Finance ecosystem: CRV holders had to lock their tokens for up to four years to maximize yields and governance power. Convex created a liquid alternative by aggregating CRV deposits, locking them collectively as veCRV, and distributing boosted rewards back to depositors without requiring individual long-term locks.
        </p>
        <p>
          The protocol quickly accumulated the largest share of veCRV in existence, making it the most influential voter in Curve governance. This position allows Convex to boost rewards for all Curve liquidity providers who deposit through its platform. The CVX token represents a claim on Convex's accumulated governance power within the Curve ecosystem.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Convex Finance Work?</h2>
        <p>
          Convex operates two primary services. First, CRV holders can deposit their CRV into Convex, receiving cvxCRV in return. This cvxCRV earns enhanced CRV rewards, Curve trading fees, and CVX incentives without requiring a four-year lock. Second, Curve LP token holders can stake their LP positions through Convex to receive boosted CRV emissions as if they held a maximum veCRV boost, plus additional CVX rewards.
        </p>
        <p>
          CVX holders who lock their tokens as vlCVX (vote-locked CVX) gain the ability to vote on how Convex's accumulated veCRV power directs Curve gauge emissions. This creates a market for governance influence where protocols can incentivize vlCVX holders to vote for their preferred Curve pools, a dynamic central to the Curve Wars ecosystem.
        </p>
      </section>

      <section id="tokenomics">
        <h2>CVX Tokenomics</h2>
        <p>
          CVX has a maximum supply of 100 million tokens, distributed through platform usage incentives. CVX emissions are tied to CRV deposits into the platform, with a decreasing emission rate over time. The vlCVX locking mechanism removes tokens from liquid circulation for 16-week periods. Platform revenue from CRV and fee sharing is distributed to cvxCRV stakers and vlCVX holders. The protocol's value accrual model is directly tied to the CRV it accumulates and the governance power that represents.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          CVX is used for directing Curve gauge emissions through vlCVX voting, earning protocol revenue, and gaining leveraged exposure to Curve governance. The Convex platform serves Curve LP providers seeking boosted yields, CRV holders wanting rewards without long locks, and DeFi protocols seeking to direct Curve emissions toward their pools. Platforms like Votium facilitate bribe markets where protocols pay vlCVX holders to vote for specific gauges, creating additional yield for CVX lockers.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy CVX</h2>
        <p>
          CVX is available on Binance, Coinbase, KuCoin, and other centralized exchanges. It can be purchased on Uniswap and SushiSwap on Ethereum. After buying, consider locking CVX as vlCVX to participate in gauge voting and earn bribe income, or hold for long-term exposure to Curve ecosystem growth. Store in MetaMask, Ledger, or any Ethereum-compatible wallet.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          Convex's value is entirely dependent on Curve Finance. Any decline in Curve's relevance, security incident, or protocol change directly impacts CVX. Smart contract risk exists across both Convex and Curve layers. The cvxCRV peg to CRV can deviate, creating paper losses for depositors. Declining DeFi yields reduce the attractiveness of boosted farming strategies. Competition from other veCRV aggregators, though limited, is a factor. Regulatory scrutiny of DeFi governance tokens and yield products could impact the protocol's operations.
        </p>
      </section>
    </LearnPageLayout>
  );
}
