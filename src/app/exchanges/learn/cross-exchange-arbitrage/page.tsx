import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cross-Exchange Arbitrage Strategies (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about cross-exchange crypto arbitrage. Spatial arbitrage, triangular arbitrage, risks, tools, and whether arbitrage is still profitable.",
};

export default function CrossExchangeArbitrage() {
  return (
    <LearnPageLayout
      title="Cross-Exchange Arbitrage Strategies"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="9 min read"
      intro="Cross-exchange arbitrage exploits price differences for the same asset across different trading venues. When Bitcoin trades at $60,000 on one exchange and $60,100 on another, arbitrageurs profit by buying on the cheaper exchange and selling on the more expensive one. While conceptually simple, profitable arbitrage requires speed, capital, and sophisticated execution. This guide explains the strategies, tools, and realities of crypto arbitrage."
      toc={[
        { id: "what-is-arbitrage", title: "What Is Crypto Arbitrage?", level: 2 },
        { id: "types", title: "Types of Arbitrage", level: 2 },
        { id: "execution", title: "Execution Mechanics", level: 2 },
        { id: "costs", title: "Hidden Costs and Friction", level: 2 },
        { id: "tools", title: "Arbitrage Tools and Software", level: 2 },
        { id: "risks", title: "Risks and Challenges", level: 2 },
        { id: "realistic-assessment", title: "Is Arbitrage Still Profitable?", level: 2 },
      ]}
      faqs={[
        { question: "How much capital do I need for arbitrage?", answer: "Meaningful arbitrage requires significant capital because profit margins are very thin (often 0.1-0.5% per trade). With $10,000 in capital, a 0.2% margin yields only $20 per trade. Professional arbitrageurs operate with $100,000+ to make the economics work." },
        { question: "Can I do arbitrage manually?", answer: "Manual arbitrage is extremely difficult because profitable opportunities last milliseconds to seconds. By the time you manually execute on two exchanges, the price difference has typically disappeared. Bots are essential for competitive execution." },
        { question: "Is crypto arbitrage risk-free?", answer: "No. Despite the theoretical 'risk-free' label, real-world arbitrage faces execution risk, transfer delay risk, exchange counterparty risk, and slippage risk. Each of these can turn a seemingly profitable arbitrage into a loss." },
        { question: "Do arbitrageurs help the market?", answer: "Yes. Arbitrage activity helps equalize prices across exchanges, improving market efficiency. Without arbitrageurs, price differences between exchanges would persist longer and be larger, creating worse pricing for regular traders." },
      ]}
      relatedArticles={[
        { title: "Exchange Aggregators", href: "/exchanges/learn/exchange-aggregators", category: "Exchanges" },
        { title: "Exchange API Trading", href: "/exchanges/learn/exchange-api-trading", category: "Exchanges" },
        { title: "Exchange Fees Explained", href: "/exchanges/learn/exchange-fees-explained", category: "Exchanges" },
      ]}
    >
      <section id="what-is-arbitrage">
        <h2>What Is Crypto Arbitrage?</h2>
        <p>Arbitrage is the practice of exploiting price differences for the same asset across different markets. In crypto, prices for the same token can differ between exchanges due to varying supply and demand, different user bases, regional premiums, and temporary liquidity imbalances.</p>
        <p>The classic arbitrage involves buying an asset where it is cheaper and simultaneously selling it where it is more expensive. The profit is the price difference minus all transaction costs including trading fees, withdrawal fees, and any other friction.</p>
        <p>Arbitrage plays a vital role in market efficiency. Arbitrageurs bring prices into alignment across exchanges by buying on cheap venues (pushing the price up) and selling on expensive venues (pushing the price down). This activity benefits all market participants by reducing price discrepancies.</p>
      </section>

      <section id="types">
        <h2>Types of Arbitrage</h2>
        <p>Spatial arbitrage (cross-exchange) is the most straightforward type. Buy on Exchange A where the price is lower and sell on Exchange B where the price is higher. This requires maintaining balances on multiple exchanges to execute both sides simultaneously.</p>
        <p>Triangular arbitrage exploits price discrepancies between three trading pairs on a single exchange. For example, converting USD to BTC, BTC to ETH, and ETH back to USD, profiting if the exchange rates are misaligned. This requires no cross-exchange transfers.</p>
        <p>Statistical arbitrage uses mathematical models to identify price relationships between correlated assets and trade when those relationships deviate from historical norms. DEX arbitrage specifically targets price differences between different decentralized exchange liquidity pools, often using flash loans to eliminate capital requirements.</p>
      </section>

      <section id="execution">
        <h2>Execution Mechanics</h2>
        <p>Speed is paramount. Profitable arbitrage opportunities last fractions of a second to a few seconds. By the time you notice a price difference, dozens of bots have already attempted to capture it. Execution via API connections with co-located servers provides the necessary speed.</p>
        <p>The simultaneous execution approach requires pre-funded accounts on multiple exchanges. You hold both crypto and stablecoins on each exchange so you can instantly buy on one and sell on the other without waiting for transfers. After executing, you periodically rebalance positions across exchanges.</p>
        <p>The transfer approach is slower but requires less capital. You buy on the cheap exchange, transfer the crypto, and sell on the expensive exchange. Transfer time creates risk since the price difference may disappear before the transfer completes. This method is only viable for persistent, large price gaps.</p>
      </section>

      <section id="costs">
        <h2>Hidden Costs and Friction</h2>
        <p>Trading fees on both the buy and sell side eat into arbitrage margins. With 0.1% fees on each side, you need at least 0.2% price difference just to break even. Many apparent arbitrage opportunities disappear after accounting for fees on both exchanges.</p>
        <p>Withdrawal and transfer fees add another cost layer. Transferring Bitcoin between exchanges costs network fees that reduce profits. Using cheaper networks like Tron for USDT transfers minimizes this cost but adds transfer time and conversion steps.</p>
        <p>Slippage on execution is often underestimated. The price shown when you identify an opportunity may not be the price you receive. Market orders fill at the best available price, which may differ from the quoted price, especially for larger trade sizes or during volatile conditions.</p>
      </section>

      <section id="tools">
        <h2>Arbitrage Tools and Software</h2>
        <p>Price comparison tools like CoinGecko and CoinMarketCap show price differences across exchanges in real time. While useful for identifying opportunities, they are too slow for execution. Dedicated monitoring tools provide faster, API-level price feeds.</p>
        <p>Arbitrage bots built with CCXT or exchange-specific API libraries automate the entire process: monitoring prices across exchanges, identifying opportunities that exceed the minimum profit threshold, and executing trades simultaneously. Custom bots require programming skills and ongoing maintenance.</p>
        <p>Commercial arbitrage platforms offer ready-made solutions with varying levels of sophistication. Some provide monitoring only, while others include automated execution. Evaluate these tools carefully, as many overpromise returns and understate the competitive reality of modern arbitrage.</p>
      </section>

      <section id="risks">
        <h2>Risks and Challenges</h2>
        <p>Execution risk means one side of your arbitrage may fail. You might successfully buy on Exchange A but your sell order on Exchange B fails due to a system glitch, API timeout, or sudden price movement. Now you hold a position without the hedge, exposed to market risk.</p>
        <p>Exchange counterparty risk is amplified because arbitrageurs hold funds on multiple exchanges simultaneously. If any one exchange freezes withdrawals, goes down, or becomes insolvent, your capital on that platform is at risk. Spreading capital across exchanges reduces single-point risk but increases the number of platforms you must trust.</p>
        <p>Regulatory and compliance risks arise from moving funds between exchanges frequently. Large or frequent transfers may trigger exchange compliance reviews. Some exchanges flag accounts that exhibit arbitrage-like patterns, potentially restricting access or requesting additional documentation.</p>
      </section>

      <section id="realistic-assessment">
        <h2>Is Arbitrage Still Profitable?</h2>
        <p>Simple cross-exchange arbitrage has become extremely competitive. Professional firms with co-located servers, sophisticated algorithms, and millions in capital dominate the space. For retail traders, profitable opportunities in major trading pairs are essentially nonexistent.</p>
        <p>Opportunities still exist in less competitive areas: smaller exchanges with lower liquidity, new token listings before arbitrage bots are configured, regional markets with persistent premiums, and DEX-to-CEX price differences. These niches require more specialized knowledge and carry higher risks.</p>
        <p>For most retail traders, the time and capital invested in arbitrage would produce better returns through simpler strategies like DCA or trend following. Arbitrage as a primary strategy is viable only for those with significant technical infrastructure, capital, and risk management capabilities. Understanding arbitrage is still valuable for recognizing market dynamics even if you do not actively pursue it.</p>
      </section>
    </LearnPageLayout>
  );
}
