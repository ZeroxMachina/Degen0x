import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Triangular Arbitrage in Crypto (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn triangular arbitrage strategies for crypto trading. Exploit price inefficiencies across three trading pairs on the same exchange.",
};

export default function TriangularArbitragePage() {
  return (
    <LearnPageLayout
      title="Triangular Arbitrage in Crypto"
      categoryName="Trading"
      categorySlug="trading"
      readTime="8 min read"
      intro="Triangular arbitrage exploits pricing inefficiencies between three related trading pairs on a single exchange. By converting between three currencies in a specific sequence, traders can end up with more of the starting currency than they began with. While opportunities are typically small and short-lived, automated execution can make this a consistently profitable strategy."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-triangular-arbitrage-works", title: "How Triangular Arbitrage Works", level: 2 },
        { id: "finding-opportunities", title: "finding-opportunities", level: 2 },
        { id: "finding-opportunities", title: "Finding Opportunities", level: 2 },
        { id: "automation", title: "automation", level: 2 },
        { id: "automation-and-execution", title: "Automation and Execution", level: 2 },
        { id: "profitability", title: "profitability", level: 2 },
        { id: "profitability-and-limitations", title: "Profitability and Limitations", level: 2 }
      ]}
      faqs={[
        { question: "Can triangular arbitrage be done manually?", answer: "Technically yes, but practically it is very difficult. Opportunities typically exist for only seconds before being closed by other traders or bots. The calculation and execution of three trades must happen almost simultaneously, which is extremely challenging without automated tools." },
        { question: "Is triangular arbitrage risk-free?", answer: "In theory, triangular arbitrage is risk-free since all trades occur on the same exchange nearly simultaneously. In practice, execution risk (partial fills, slippage, API latency) can turn a profitable opportunity into a small loss. However, the risk is significantly lower than directional trading." },
      ]}
      relatedArticles={[
        { title: "Crypto Arbitrage Trading Guide", href: "/trading/learn/arbitrage-trading", category: "Trading" },
        { title: "Statistical Arbitrage Strategies", href: "/trading/learn/statistical-arbitrage", category: "Trading" },
        { title: "Algorithmic Crypto Trading Guide", href: "/trading/learn/algorithmic-trading", category: "Trading" },
        { title: "Crypto Trading Bots: Complete Guide", href: "/trading/learn/trading-bots-guide", category: "Trading" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Triangular Arbitrage Works</h2>
        <p>
          Triangular arbitrage involves three sequential trades that form a cycle. For example, starting with USDT, you buy BTC with USDT, then buy ETH with BTC, then sell ETH for USDT. If the exchange rates create a favorable imbalance, you end up with more USDT than you started with.
        </p>
        <p>
          The profit comes from inconsistencies in how the three pairs are priced relative to each other. If BTC/USDT is $60,000, ETH/BTC is 0.05, and ETH/USDT is $3,050, there is an arbitrage opportunity. Converting $60,000 to 1 BTC, then to 20 ETH, then to $61,000 yields a $1,000 profit.
        </p>
        <p>
          In reality, the discrepancies are much smaller, often fractions of a percent. But with sufficient volume and automated execution across hundreds of trade cycles per day, these small profits can accumulate into meaningful returns.
        </p>
      </section>

      <section id="finding-opportunities">
        <h2>Finding Opportunities</h2>
        <p>
          The mathematical relationship between three pairs must be checked constantly. For pairs A/B, B/C, and A/C, an arbitrage exists when the implied rate through A/B and B/C differs from the direct A/C rate by more than the total transaction cost.
        </p>
        <p>
          Exchanges with more trading pairs offer more potential triangular arbitrage combinations. The number of possible triangles grows combinatorially with the number of available pairs. Major exchanges like Binance with hundreds of pairs offer thousands of potential triangular paths.
        </p>
        <p>
          Opportunities are most common during periods of high volatility when rapid price movements cause temporary pricing misalignments. News events, large trades, and periods of thin liquidity can all create exploitable discrepancies.
        </p>
      </section>

      <section id="automation">
        <h2>Automation and Execution</h2>
        <p>
          Successful triangular arbitrage requires automated trading bots. The bot continuously monitors all relevant pair prices, calculates potential profit for every triangular path, and executes all three trades within milliseconds when an opportunity exceeds the profitability threshold.
        </p>
        <p>
          API rate limits impose constraints on how frequently prices can be polled. WebSocket connections for real-time price feeds are preferred over REST API polling for faster data delivery and lower latency.
        </p>
        <p>
          All three orders should be placed as close to simultaneously as possible using limit orders at the current best prices. Partial fills are a key risk: if one leg fills but another does not, you are left with an unhedged position that may result in a loss.
        </p>
      </section>

      <section id="profitability">
        <h2>Profitability and Limitations</h2>
        <p>
          Net profitability depends on trading fees, execution speed, and capital deployed. With maker fees of 0.1% per trade, the three-trade cycle costs 0.3% in fees, so only opportunities exceeding this threshold are profitable. VIP fee tiers and maker rebates can significantly improve economics.
        </p>
        <p>
          Competition from other arbitrage bots compresses opportunities. As more participants exploit the same inefficiencies, the discrepancies become smaller and shorter-lived. Success requires faster execution, lower fees, or more sophisticated detection algorithms than competitors.
        </p>
        <p>
          Capital requirements are moderate: you need enough to execute meaningful trade sizes that generate profits exceeding minimum order sizes and fixed costs. Most successful triangular arbitrage operations work with $10,000 to $100,000 or more deployed on a single exchange.
        </p>
      </section>
    </LearnPageLayout>
  );
}
