import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `dYdX vs GMX (${CURRENT_YEAR}) | degen0x`,
  description: "Compare dYdX vs GMX decentralized perpetual exchanges. Fees, chains, liquidity, governance, and which DEX is better for perpetual futures.",
};

export default function DYDXVsGMX() {
  return (
    <LearnPageLayout
      title="dYdX vs GMX"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="8 min read"
      intro="dYdX and GMX are the leading decentralized perpetual futures platforms, each with unique approaches to on-chain derivatives trading. dYdX runs its own appchain with an order book model, while GMX uses a liquidity pool model on Arbitrum and Avalanche. This comparison helps DeFi traders choose the right decentralized derivatives platform."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "platform-overview", title: "Platform Overview", level: 2 },
        { id: "fees", title: "fees", level: 2 },
        { id: "fee-comparison", title: "Fee Comparison", level: 2 },
        { id: "architecture", title: "architecture", level: 2 },
        { id: "architecture", title: "Architecture", level: 2 },
        { id: "trading", title: "trading", level: 2 },
        { id: "trading-experience", title: "Trading Experience", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "tokenomics", title: "Tokenomics", level: 2 },
        { id: "verdict", title: "verdict", level: 2 },
        { id: "which-should-you-choose", title: "Which Should You Choose?", level: 2 }
      ]}
      faqs={[
        { question: "Do I need KYC for dYdX or GMX?", answer: "Neither platform requires KYC. Both are decentralized and can be accessed with just a crypto wallet. This is a key advantage over centralized exchanges." },
        { question: "Which has more liquidity?", answer: "dYdX generally has deeper liquidity for major pairs due to its order book model. GMX's pool model provides consistent liquidity but may have limits on position sizes." },
        { question: "Which chain are they on?", answer: "dYdX runs on its own Cosmos-based appchain. GMX operates on Arbitrum and Avalanche. Both avoid Ethereum mainnet gas fees for trades." },
        { question: "Can I earn yield on both?", answer: "GMX offers yield to liquidity providers through GLP/GM pools. dYdX distributes trading fees to stakers. Both provide opportunities to earn from the protocol's activity." },
      ]}
      relatedArticles={[
        { title: "Uniswap vs SushiSwap", href: "/exchanges/compare/uniswap-vs-sushiswap", category: "Exchanges" },
        { title: "DEX vs CEX", href: "/exchanges/learn/decentralized-vs-centralized", category: "Exchanges" },
        { title: "Funding Rates Explained", href: "/exchanges/learn/funding-rates-explained", category: "Exchanges" },
      ]}
    >
      <section id="overview">
        <h2>Platform Overview</h2>
        <p>dYdX is a decentralized perpetual futures exchange that migrated to its own Cosmos-based appchain (dYdX Chain). The platform uses an off-chain order book with on-chain settlement, providing a trading experience closer to centralized exchanges. dYdX supports leverage up to 20x on major pairs.</p>
        <p>GMX is a decentralized perpetual exchange operating on Arbitrum and Avalanche. It uses a unique multi-asset liquidity pool model where liquidity providers supply assets through GLP/GM pools and traders trade against this pool. GMX supports leverage up to 100x.</p>
      </section>

      <section id="fees">
        <h2>Fee Comparison</h2>
        <p>dYdX charges maker/taker fees starting at 0.02% maker and 0.05% taker, comparable to centralized exchanges. High-volume traders and DYDX stakers receive discounts. The appchain architecture eliminates gas fees for trading.</p>
        <p>GMX charges 0.05-0.07% for opening and closing positions, with borrow fees based on utilization. There are no maker/taker distinctions since all trades execute against the pool. Swap fees also apply when the pool needs rebalancing.</p>
      </section>

      <section id="architecture">
        <h2>Architecture</h2>
        <p>dYdX uses a fully decentralized order book running on its own blockchain with dedicated validators. This provides fast execution with sub-second latency and a familiar trading experience. The move to its own chain gives dYdX full control over the protocol's infrastructure.</p>
        <p>GMX's pool-based model means there is no order book. Traders receive guaranteed execution at oracle prices against the liquidity pool. This eliminates slippage for supported pairs but limits the number of available markets and maximum position sizes.</p>
      </section>

      <section id="trading">
        <h2>Trading Experience</h2>
        <p>dYdX offers a CEX-like trading interface with limit orders, stop-losses, take-profit, and advanced order types. The order book provides price discovery and familiar trading mechanics. The platform supports 30+ perpetual markets.</p>
        <p>GMX provides a simpler trading interface focused on opening and closing leveraged positions. Execution is guaranteed at oracle prices without slippage concerns. The trading experience is straightforward but less feature-rich than dYdX's order book approach.</p>
      </section>

      <section id="tokenomics">
        <h2>Tokenomics</h2>
        <p>DYDX is the governance token for the dYdX protocol. On the dYdX Chain, trading fees are distributed to validators and stakers. The token plays a role in governance decisions and protocol development direction.</p>
        <p>GMX tokenomics involve two main tokens: GMX for governance and fee sharing, and GLP/GM for liquidity provision. GMX stakers earn a portion of platform fees in ETH/AVAX. The model directly ties token value to protocol revenue.</p>
      </section>

      <section id="verdict">
        <h2>Which Should You Choose?</h2>
        <p>Choose dYdX if you want a CEX-like decentralized trading experience with an order book, advanced orders, and lower fees for active traders. It is better for traders who need familiar order types and tighter spreads on major pairs.</p>
        <p>Choose GMX if you prefer guaranteed execution at oracle prices, want to provide liquidity for yield, or trade on Arbitrum/Avalanche. GMX's model eliminates slippage concerns and offers higher leverage. It is also attractive for yield-seeking liquidity providers.</p>
      </section>
    </LearnPageLayout>
  );
}
