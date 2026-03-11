import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Maverick Protocol (MAV)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Maverick Protocol (MAV), the DEX with directional liquidity management. Discover MAV tokenomics, innovative AMM features, and how to buy.",
};

export default function MaverickPage() {
  return (
    <LearnPageLayout
      title="What Is Maverick Protocol (MAV)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Maverick Protocol (MAV) is a decentralized exchange that introduced directional liquidity management, allowing LPs to automatically concentrate their liquidity based on expected price movements. Deployed on Ethereum and zkSync Era, Maverick's innovative AMM design aims to solve the capital inefficiency and impermanent loss challenges that plague traditional liquidity providers."
      toc={[
        { id: "what-is", title: "What Is Maverick Protocol?", level: 2 },
        { id: "how-it-works", title: "How Does Maverick Protocol Work?", level: 2 },
        { id: "tokenomics", title: "MAV Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy MAV", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Maverick Protocol?",
          answer:
            "Maverick Protocol is a DEX on Ethereum and zkSync with a novel AMM that supports directional liquidity management. LPs can set their liquidity to automatically follow price movements, improving efficiency and reducing impermanent loss.",
        },
        {
          question: "Where can I buy MAV?",
          answer:
            "MAV is available on Binance, Coinbase, and other exchanges. It can also be purchased on the Maverick platform itself.",
        },
        {
          question: "Is Maverick Protocol a good investment?",
          answer:
            "MAV has innovative AMM technology backed by notable investors. Its success depends on attracting LP capital and trading volume away from established competitors like Uniswap.",
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
        <h2>What Is Maverick Protocol?</h2>
        <p>
          Maverick Protocol is a next-generation decentralized exchange that rethinks how automated market makers handle liquidity. The protocol's key innovation is its directional liquidity management system, which allows liquidity providers to set their positions to automatically shift in response to price movements. This means LPs can express a directional view (bullish, bearish, or neutral) and have their liquidity adjust accordingly without manual intervention.
        </p>
        <p>
          Launched with support from prominent investors including Pantera Capital and Coinbase Ventures, Maverick has deployed on Ethereum mainnet and zkSync Era. The protocol's Boosted Positions feature allows protocols to incentivize specific liquidity ranges, creating efficient incentive distribution for projects seeking deep liquidity for their tokens.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Maverick Protocol Work?</h2>
        <p>
          Maverick's AMM uses a bin-based liquidity system where LPs place capital in specific price bins, similar to Trader Joe's Liquidity Book. The unique feature is movement modes that automatically reposition liquidity based on price changes. Mode Right follows price increases, Mode Left follows price decreases, Mode Both follows movement in either direction, and Static mode stays fixed. This automation reduces the need for active management while keeping liquidity concentrated near the current price.
        </p>
        <p>
          Boosted Positions allow any protocol or incentivizer to create targeted liquidity incentives for specific price ranges, ensuring that rewards go to LPs who provide the most useful liquidity. The veMAV governance system allows token holders to lock MAV for voting power and protocol fee sharing.
        </p>
      </section>

      <section id="tokenomics">
        <h2>MAV Tokenomics</h2>
        <p>
          MAV has a total supply of 2 billion tokens. The distribution includes allocations for community incentives, team and investors, foundation reserves, and ecosystem development. The veMAV model allows holders to lock tokens for governance power and revenue sharing, following the vote-escrow pattern proven by Curve and Balancer. Protocol revenue from trading fees is shared with veMAV holders and the protocol treasury.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          MAV is used for veMAV governance, protocol fee revenue sharing, and incentivizing Boosted Positions. The Maverick platform enables directional liquidity provision, token swaps, and protocol-incentivized liquidity. The protocol serves sophisticated LPs seeking to optimize returns through directional strategies, protocols seeking efficient liquidity incentivization, and traders looking for low-slippage swaps on Ethereum and zkSync.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy MAV</h2>
        <p>
          MAV is available on Binance, Coinbase, and other centralized exchanges. It can also be purchased on the Maverick platform on Ethereum or zkSync. After buying, holders can lock MAV as veMAV for governance participation and fee revenue. Store in MetaMask or any Ethereum-compatible wallet.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          Maverick faces the challenge of attracting liquidity and volume away from deeply entrenched competitors like Uniswap. The directional liquidity modes, while innovative, introduce complexity that may deter less sophisticated LPs. The protocol's presence on zkSync links its growth to that chain's ecosystem development. Novel AMM mechanics may contain undiscovered vulnerabilities despite auditing. The need to build network effects in a highly competitive DEX landscape is a significant long-term challenge.
        </p>
      </section>
    </LearnPageLayout>
  );
}
