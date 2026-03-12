import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Pendle (PENDLE)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Pendle (PENDLE), the yield tokenization protocol for DeFi. Discover how yield trading works, tokenomics, and how to buy PENDLE.",
};

export default function PendlePage() {
  return (
    <LearnPageLayout
      title="What Is Pendle (PENDLE)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Pendle is a DeFi protocol that enables the tokenization and trading of future yield. By splitting yield-bearing tokens into their principal and yield components, Pendle allows users to trade, hedge, and speculate on future interest rates in a permissionless manner. PENDLE is the governance and utility token of the protocol."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-pendle", title: "What Is Pendle?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-pendle-works", title: "How Pendle Works", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "pendle-tokenomics", title: "Pendle Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "use-cases-ecosystem", title: "Use Cases & Ecosystem", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-pendle", title: "How to Buy PENDLE", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-considerations", title: "Risks & Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Pendle?",
          answer:
            "Pendle is a DeFi protocol that splits yield-bearing tokens into principal tokens (PT) and yield tokens (YT), enabling users to trade future yield like a financial instrument.",
        },
        {
          question: "Where can I buy PENDLE?",
          answer:
            "PENDLE is available on Binance, Bybit, KuCoin, and other exchanges. You can also acquire PENDLE by providing liquidity on the Pendle platform directly.",
        },
        {
          question: "Is PENDLE a good investment?",
          answer:
            "Pendle has pioneered yield trading in DeFi with growing adoption, but its value depends on continued DeFi yield demand. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
        { title: "Aave", href: "/investing/crypto/aave-token", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Pendle?</h2>
      <p>
        Pendle is an innovative DeFi protocol launched in 2021 that introduces yield tokenization to decentralized finance. The protocol allows users to split any yield-bearing asset into two separate tokens: a Principal Token (PT) representing the underlying asset, and a Yield Token (YT) representing the future yield stream.
      </p>
      <p>
        This separation creates a marketplace where users can trade yield independently from the principal. Buyers of YT speculate that future yields will be higher than the current implied rate, while PT buyers lock in a fixed yield, similar to buying a zero-coupon bond. This brings traditional fixed-income mechanics into DeFi.
      </p>
      <p>
        Pendle has grown significantly by supporting popular yield-bearing assets including stETH, eETH, GLP, USDe, and many other tokens from major DeFi protocols. The platform operates on Ethereum, Arbitrum, and BNB Chain.
      </p>

      <h2 id="how-it-works">How Pendle Works</h2>
      <p>
        When a user deposits a yield-bearing token (like stETH) into Pendle, it is split into a PT and YT that expire on a specific date. The PT can be redeemed for the underlying asset at maturity, while the YT accumulates yield until expiry. Pendle&apos;s custom AMM is optimized for trading these time-decaying assets.
      </p>
      <p>
        The Pendle AMM uses a concentrated liquidity model specifically designed for yield trading, accounting for the time value of yield tokens that approach zero as expiry nears. This AMM design provides capital efficiency and minimal slippage for yield trades. Fixed rate buyers simply purchase PT at a discount and hold until maturity.
      </p>

      <h2 id="tokenomics">Pendle Tokenomics</h2>
      <p>
        PENDLE has a circulating supply that increases through emissions allocated to liquidity incentives. The token emissions follow a decreasing schedule, reducing inflation over time. Token holders can lock PENDLE as vePENDLE to earn protocol fees and boost their liquidity rewards.
      </p>
      <p>
        The vePENDLE model, inspired by Curve&apos;s veTokenomics, distributes a portion of protocol fees to lockers. vePENDLE holders also vote on gauge weights that direct PENDLE emissions to specific liquidity pools, creating incentive alignment between the protocol and its most committed token holders.
      </p>

      <h2 id="use-cases">Use Cases &amp; Ecosystem</h2>
      <p>
        Pendle enables several powerful DeFi strategies: locking in fixed yields by buying PT, leveraged yield exposure through YT purchases, yield arbitrage between implied and actual rates, and enhanced liquidity provision rewards through the vePENDLE system. Points and airdrop farming through YT has become a major use case.
      </p>
      <p>
        The protocol serves as a yield infrastructure layer that integrates with the broader DeFi ecosystem. Projects use Pendle to offer fixed-rate versions of their yield products, and traders use it to express views on future yield direction. Institutional players are increasingly using Pendle for yield hedging.
      </p>

      <h2 id="how-to-buy">How to Buy PENDLE</h2>
      <p>
        To buy PENDLE, create an account on Binance, Bybit, or KuCoin. Complete verification, deposit funds, and purchase PENDLE tokens. For advanced users, lock PENDLE as vePENDLE on the Pendle platform to earn protocol fees and boost rewards from liquidity provision activities.
      </p>

      <h2 id="risks">Risks &amp; Considerations</h2>
      <p>
        Pendle&apos;s yield trading mechanisms are complex, and users risk losses if they do not fully understand PT/YT dynamics. YT tokens lose value as they approach expiry, making timing crucial. The protocol&apos;s value proposition depends on continued demand for yield trading and DeFi yields remaining attractive.
      </p>
      <p>
        Smart contract risk is heightened due to the complexity of yield tokenization contracts. Declining DeFi yields could reduce demand for Pendle&apos;s services. Token emissions for liquidity incentives create ongoing sell pressure. Regulatory changes affecting DeFi yield products could impact the protocol&apos;s growth.
      </p>
    </LearnPageLayout>
  );
}
