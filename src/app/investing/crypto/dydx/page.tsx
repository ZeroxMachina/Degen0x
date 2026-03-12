import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is dYdX (DYDX)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about dYdX (DYDX), the decentralized perpetual futures exchange built on its own blockchain. Discover DYDX tokenomics and how to buy.",
};

export default function DydxPage() {
  return (
    <LearnPageLayout
      title="What Is dYdX (DYDX)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="dYdX (DYDX) is a decentralized perpetual futures exchange that migrated to its own dedicated blockchain built on the Cosmos SDK. The platform enables traders to access leveraged trading of crypto assets without a centralized intermediary. DYDX is the governance and staking token that secures the dYdX Chain and entitles holders to protocol revenue."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-dydx", title: "What Is dYdX?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-dydx-work", title: "How Does dYdX Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "dydx-tokenomics", title: "DYDX Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-dydx", title: "How to Buy DYDX", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is dYdX?",
          answer:
            "dYdX is a decentralized perpetual futures exchange operating on its own Cosmos-based blockchain. It enables leveraged crypto trading with an order book model rather than an AMM, providing a CEX-like trading experience in a decentralized environment.",
        },
        {
          question: "Where can I buy DYDX?",
          answer:
            "DYDX is available on Binance, Coinbase, KuCoin, and other major exchanges. The native dYdX Chain token can also be staked directly on the network.",
        },
        {
          question: "Is dYdX a good investment?",
          answer:
            "DYDX offers staking yields backed by real protocol trading fees and governs a leading decentralized derivatives platform. Competition from GMX, Hyperliquid, and centralized exchanges, as well as regulatory risks, are key considerations.",
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
        <h2>What Is dYdX?</h2>
        <p>
          dYdX is a decentralized derivatives exchange that has processed hundreds of billions of dollars in cumulative trading volume. Originally built on Ethereum using StarkEx technology, dYdX migrated to its own sovereign blockchain (dYdX Chain) in late 2023 using the Cosmos SDK and CometBFT consensus. This migration gave the protocol full control over its infrastructure, including a fully on-chain order book and matching engine.
        </p>
        <p>
          The platform offers perpetual futures contracts on dozens of crypto assets with up to 20x leverage. Unlike AMM-based derivatives platforms, dYdX uses an order book model that provides a trading experience similar to centralized exchanges like Binance or Bybit, but without custodial risk. The migration to a dedicated chain also enabled full decentralization of the protocol, with all fees flowing to stakers and validators.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does dYdX Work?</h2>
        <p>
          The dYdX Chain operates as an application-specific blockchain where validators run the order book and matching engine as part of the consensus process. Traders submit orders that are matched on-chain with sub-second latency. The protocol supports market orders, limit orders, stop-loss orders, and other advanced trading features. Margin requirements and liquidation mechanisms ensure the system remains solvent during volatile market conditions.
        </p>
        <p>
          DYDX token holders can stake their tokens with validators to secure the network and earn a share of all trading fees generated on the platform. Governance proposals allow the community to adjust trading parameters, list new markets, and manage the protocol treasury. The Cosmos SDK architecture enables interoperability with other Cosmos ecosystem chains through IBC (Inter-Blockchain Communication).
        </p>
      </section>

      <section id="tokenomics">
        <h2>DYDX Tokenomics</h2>
        <p>
          DYDX has a total supply of 1 billion tokens, with distribution across community treasury, team and investors, trading rewards, and ecosystem development. On the dYdX Chain, all protocol trading fees are distributed to DYDX stakers and validators in USDC, providing real yield backed by actual revenue. This fee-sharing model creates a direct link between trading volume and staker returns. The token also serves as the staking asset for network security, requiring validators and delegators to bond DYDX.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          DYDX is used for network staking and security, governance over protocol parameters and market listings, and earning real yield from trading fees. The dYdX platform serves as a decentralized venue for perpetual futures trading, hedging crypto positions, leveraged speculation, and cross-margin portfolio management. The platform attracts both retail traders seeking decentralized alternatives to CEXs and institutional participants looking for transparent, non-custodial derivatives trading.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy DYDX</h2>
        <p>
          DYDX is available on Binance, Coinbase, KuCoin, OKX, and other major exchanges. After purchasing, users can transfer DYDX to the dYdX Chain via supported bridges and stake with validators to earn trading fee revenue. The Keplr wallet and other Cosmos-compatible wallets support the native dYdX Chain token. Consider the staking yield relative to other DeFi opportunities when evaluating your investment strategy.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          dYdX faces intense competition from other decentralized perpetual platforms like GMX, Hyperliquid, and Jupiter Perps, as well as dominant centralized exchanges. Operating on a dedicated chain introduces validator centralization risks and reduces composability with Ethereum DeFi. Regulatory scrutiny of leveraged crypto trading platforms could impact the protocol's accessibility. The migration from Ethereum to Cosmos may fragment liquidity and user base. Smart contract and protocol risk, while mitigated by extensive auditing, remain inherent to the platform.
        </p>
      </section>
    </LearnPageLayout>
  );
}
