import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is GMX Token (GMX)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about GMX Token (GMX), the governance token of the decentralized perpetual exchange on Arbitrum and Avalanche. Discover GMX tokenomics and how to buy.",
};

export default function GmxTokenPage() {
  return (
    <LearnPageLayout
      title="What Is GMX Token (GMX)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="GMX Token (GMX) is the governance and utility token of the GMX decentralized perpetual exchange, primarily deployed on Arbitrum and Avalanche. GMX allows users to trade crypto perpetual futures with up to 100x leverage while liquidity is provided through a multi-asset pool model. GMX stakers earn a share of all platform trading fees."
      toc={[
        { id: "what-is", title: "What Is GMX Token?", level: 2 },
        { id: "how-it-works", title: "How Does GMX Work?", level: 2 },
        { id: "tokenomics", title: "GMX Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy GMX", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is GMX Token?",
          answer:
            "GMX is the governance and revenue-sharing token of the GMX decentralized perpetual exchange on Arbitrum and Avalanche. Staked GMX earns 30% of all platform fees paid in ETH or AVAX.",
        },
        {
          question: "Where can I buy GMX?",
          answer:
            "GMX is available on Binance, Coinbase, and other exchanges. It can also be purchased on Uniswap (Arbitrum) or Trader Joe (Avalanche).",
        },
        {
          question: "Is GMX a good investment?",
          answer:
            "GMX offers real yield from trading fees and has maintained strong TVL on Arbitrum. Competition from newer perpetual DEXs and the risks of leveraged trading platforms are key considerations.",
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
        <h2>What Is GMX Token?</h2>
        <p>
          GMX is a decentralized perpetual and spot exchange that became one of the most popular DeFi derivatives platforms, particularly on the Arbitrum Layer 2 network. The protocol allows traders to open long or short leveraged positions on crypto assets like BTC, ETH, and others with up to 100x leverage. Unlike order book exchanges, GMX uses a multi-asset liquidity pool model where liquidity providers deposit assets and act as the counterparty to all trades.
        </p>
        <p>
          The GMX token provides governance rights and a direct share of protocol revenue. Staked GMX earns 30% of all platform fees, paid in ETH on Arbitrum or AVAX on Avalanche, making it one of the most straightforward real-yield opportunities in DeFi. GMX V2 introduced synthetic markets and isolated pools for improved risk management and broader market coverage.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does GMX Work?</h2>
        <p>
          GMX V2 operates through GM (GMX Market) pools where liquidity providers deposit specific token pairs to enable trading markets. Traders open leveraged positions against these pools, paying borrowing fees and trading fees that are distributed to liquidity providers, GMX stakers, and the protocol treasury. The protocol uses Chainlink oracles with additional keeper-based pricing to minimize front-running and price manipulation.
        </p>
        <p>
          The liquidity provider experience is designed to be straightforward: deposit supported assets into GM pools and earn fees from trading activity. The protocol manages risk through funding rates that balance long and short open interest, position limits, and dynamic fee adjustments. Liquidations occur automatically when positions fall below maintenance margin requirements.
        </p>
      </section>

      <section id="tokenomics">
        <h2>GMX Tokenomics</h2>
        <p>
          GMX has a maximum supply of 13.25 million tokens, making it relatively scarce. The distribution includes allocations for migration from the predecessor protocol, liquidity on Uniswap, floor price fund reserves, and ecosystem development. Staked GMX earns esGMX (escrowed GMX) rewards and multiplier points in addition to ETH/AVAX fee revenue. The esGMX mechanism encourages long-term staking by requiring a one-year vesting period to convert to liquid GMX. This design reduces circulating supply and aligns staker incentives.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          GMX is used for earning real yield from platform fees, governance over protocol parameters, and as a DeFi blue-chip asset on Arbitrum. The GMX platform enables leveraged perpetual trading, spot swaps, and liquidity provision for yield. The protocol has become a core component of the Arbitrum DeFi ecosystem, with many yield strategies and aggregators building on top of GMX liquidity pools. Institutional and whale traders are attracted by the deep liquidity and oracle-based pricing.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy GMX</h2>
        <p>
          GMX is available on Binance, Coinbase, and other centralized exchanges. On-chain, it can be purchased on Uniswap on Arbitrum or Trader Joe on Avalanche. After buying, staking GMX on the platform to earn ETH/AVAX fees is the most common strategy. Bridge ETH to Arbitrum using the official bridge or a third-party service, then swap for GMX or purchase directly on a CEX and withdraw to Arbitrum. Store in MetaMask configured for Arbitrum.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          GMX carries smart contract risk and oracle dependency risk. The liquidity pool model means LPs take on counterparty risk against traders; if traders are consistently profitable, LP returns may suffer. Competition from dYdX, Hyperliquid, and other perpetual DEXs is intensifying. Regulatory scrutiny of leveraged trading platforms could impact accessibility. The esGMX vesting mechanism creates uncertainty around future token supply. Dependence on Arbitrum means any issues with the L2 network affect GMX operations.
        </p>
      </section>
    </LearnPageLayout>
  );
}
