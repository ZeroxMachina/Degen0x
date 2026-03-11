import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Market Making in Crypto (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn how crypto market making works. Understand bid-ask spreads, inventory management, and how market makers provide liquidity for profit.",
};

export default function MarketMakingPage() {
  return (
    <LearnPageLayout
      title="Market Making in Crypto"
      categoryName="Trading"
      categorySlug="trading"
      readTime="9 min read"
      intro="Market making is the practice of providing liquidity by simultaneously placing buy and sell orders, profiting from the bid-ask spread. In crypto markets, market makers play a critical role in ensuring efficient price discovery and tight spreads. This guide explains how market making works, the strategies involved, and the risks that market makers must manage."
      toc={[
        { id: "how-market-making-works", title: "How Market Making Works", level: 2 },
        { id: "strategies", title: "Market Making Strategies", level: 2 },
        { id: "inventory-management", title: "Inventory Management", level: 2 },
        { id: "risks-rewards", title: "Risks and Rewards", level: 2 },
      ]}
      faqs={[
        { question: "Can individuals be market makers in crypto?", answer: "Yes, individual traders can act as market makers on centralized and decentralized exchanges. However, professional market making requires significant capital, sophisticated software, and deep understanding of microstructure. Providing liquidity on DEX AMMs is a simpler way for individuals to participate in market making." },
        { question: "How do market makers make money?", answer: "Market makers profit from the bid-ask spread by buying at the bid price and selling at the ask price. If a market maker buys at $99.50 and sells at $100.50, they earn $1.00 per unit traded. They also may earn exchange rebates for providing liquidity as maker orders." },
      ]}
      relatedArticles={[
        { title: "Grid Bot Trading Strategy", href: "/trading/learn/grid-bot-strategy", category: "Trading" },
        { title: "Order Flow Analysis in Crypto", href: "/trading/learn/order-flow-analysis", category: "Trading" },
        { title: "Algorithmic Crypto Trading Guide", href: "/trading/learn/algorithmic-trading", category: "Trading" },
        { title: "High-Frequency Trading in Crypto", href: "/trading/learn/high-frequency-trading", category: "Trading" },
      ]}
    >
      <section id="how-market-making-works">
        <h2>How Market Making Works</h2>
        <p>
          A market maker continuously posts limit orders on both sides of the order book: a bid (buy order) below the current price and an ask (sell order) above it. When both orders fill, the market maker earns the spread between them. The goal is to fill as many round-trip trades as possible while minimizing inventory risk.
        </p>
        <p>
          In crypto, market making occurs on both centralized exchanges (CEXs) through order book trading and on decentralized exchanges (DEXs) through automated market makers (AMMs). CEX market making offers more control over pricing, while DEX liquidity provision is simpler but exposes providers to impermanent loss.
        </p>
        <p>
          Market makers are compensated for the risk they take by providing liquidity. The spread they earn is their premium for absorbing temporary imbalances between buyers and sellers. In liquid markets, spreads are tight; in illiquid or volatile markets, spreads widen to compensate for increased risk.
        </p>
      </section>

      <section id="strategies">
        <h2>Market Making Strategies</h2>
        <p>
          Symmetric market making places orders equidistant from the mid-price on both sides. This is the simplest approach and works well in stable, ranging markets. The spread width is set based on volatility: wider during volatile periods and narrower during calm periods.
        </p>
        <p>
          Asymmetric or skewed market making adjusts bid and ask prices based on market direction or inventory position. If the market is trending up, the ask can be placed further from mid-price and the bid closer, reducing the risk of accumulating inventory that will lose value.
        </p>
        <p>
          Multi-level market making places orders at multiple price levels on each side, creating a grid of liquidity. This captures more volume and provides deeper liquidity but requires more capital and sophisticated inventory management systems.
        </p>
      </section>

      <section id="inventory-management">
        <h2>Inventory Management</h2>
        <p>
          Inventory risk is the primary challenge for market makers. If the market moves sharply in one direction, the market maker accumulates inventory on the wrong side. A sudden drop means the market maker is stuck holding purchased inventory at higher prices while the market falls away.
        </p>
        <p>
          Hedging through correlated assets, futures, or options helps offset inventory risk. If a market maker is long BTC from their making activity, they can short BTC perpetual futures to neutralize the directional exposure while continuing to capture the spread.
        </p>
        <p>
          Dynamic spread adjustment based on inventory levels is essential. When inventory skews in one direction, widen the spread on that side and narrow it on the opposite side to encourage trades that rebalance the inventory. Automated systems must continuously adjust based on real-time position and market conditions.
        </p>
      </section>

      <section id="risks-rewards">
        <h2>Risks and Rewards</h2>
        <p>
          Adverse selection is a major risk: informed traders who know the price is about to move will pick off stale quotes before the market maker can update them. This results in the market maker consistently buying just before drops and selling just before rallies.
        </p>
        <p>
          Technology risk includes exchange outages, API failures, and bot malfunctions that prevent the market maker from updating or canceling orders during fast market moves. Robust error handling, kill switches, and redundant systems are critical infrastructure.
        </p>
        <p>
          When executed well, market making can generate consistent returns with relatively low drawdowns compared to directional trading. The strategy profits from activity and volatility rather than direction, making it attractive in the inherently volatile crypto market. However, it requires significant technical infrastructure and capital to be profitable.
        </p>
      </section>
    </LearnPageLayout>
  );
}
