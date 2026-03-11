import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Arbitrage Guide (${CURRENT_YEAR}): Types, Strategies & Tools`,
  description: "Learn how crypto arbitrage works. Understand spatial, triangular, and statistical arbitrage strategies, tools, risks, and profitability in the current market.",
};

const toc = [
  { id: "what-is-arbitrage", title: "What Is Crypto Arbitrage", level: 2 },
  { id: "types", title: "Types of Crypto Arbitrage", level: 2 },
  { id: "tools-setup", title: "Tools and Setup", level: 2 },
  { id: "risks", title: "Risks and Challenges", level: 2 },
  { id: "profitability", title: "Is Arbitrage Still Profitable", level: 2 },
];

const faqs = [
  { question: "How much money do you need to start crypto arbitrage?", answer: "You can start with a few thousand dollars for simple spatial arbitrage, but profits on small amounts are minimal after fees. Most successful arbitrage operations require $10,000+ in capital deployed across multiple exchanges. DeFi arbitrage can start smaller but requires gas fees." },
  { question: "Is crypto arbitrage risk-free?", answer: "No. While arbitrage is theoretically risk-free (buying and selling simultaneously at different prices), practical risks include execution delay (prices change before both trades complete), withdrawal time, exchange counterparty risk, blockchain network congestion, and smart contract bugs for DeFi arbitrage." },
  { question: "Is crypto arbitrage legal?", answer: "Yes. Arbitrage is a legal and normal market activity that improves price efficiency across markets. It is practiced in traditional finance as well. However, front-running on blockchains (MEV extraction) exists in a gray area. Always comply with your local regulations." },
];

export default function CryptoArbitrageGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Arbitrage Guide: Strategies, Tools, and Risks"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="11 min"
      intro="Crypto arbitrage involves exploiting price differences for the same asset across different markets. Because the crypto market is fragmented across hundreds of exchanges and thousands of DeFi protocols, price discrepancies exist constantly. This guide covers the main types of arbitrage, the tools needed, and the realistic challenges involved."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "API Trading Guide", href: "/exchanges/learn/api-trading-guide", category: "Exchanges" },
        { title: "Trading Pairs Explained", href: "/exchanges/learn/trading-pairs-explained", category: "Exchanges" },
        { title: "Maker vs Taker Fees", href: "/exchanges/learn/maker-vs-taker-fees", category: "Exchanges" },
      ]}
    >
      <h2 id="what-is-arbitrage">What Is Crypto Arbitrage?</h2>
      <p>
        Crypto arbitrage is the practice of buying a cryptocurrency on one market where it is
        priced lower and simultaneously selling it on another market where it is priced higher,
        profiting from the difference. In a perfectly efficient market, these price discrepancies
        would not exist, but the fragmented nature of crypto markets creates persistent
        opportunities.
      </p>
      <p>
        The profit from each individual arbitrage trade is typically small (0.1% to 2%), but
        when executed frequently and with sufficient capital, these small edges can compound
        into meaningful returns. Arbitrage also serves an important market function by bringing
        prices into alignment across different venues.
      </p>

      <h2 id="types">Types of Crypto Arbitrage</h2>
      <p>
        Spatial (or exchange) arbitrage is the simplest form: buying on one exchange where the
        price is lower and selling on another where it is higher. This requires maintaining
        funded accounts on multiple exchanges. Triangular arbitrage exploits price inefficiencies
        between three trading pairs on the same exchange (for example, BTC/USD, ETH/BTC, and
        ETH/USD).
      </p>
      <p>
        Statistical arbitrage uses quantitative models to identify assets that have temporarily
        deviated from their historical price relationship and trades the expected convergence.
        DeFi arbitrage exploits price differences between decentralized exchanges, often through
        flash loans that require no upfront capital. MEV (Maximal Extractable Value) arbitrage
        operates at the blockchain level, front-running or back-running transactions for profit.
      </p>

      <h2 id="tools-setup">Tools and Setup</h2>
      <p>
        Successful arbitrage requires funded accounts on multiple exchanges, API connections
        for fast order execution, monitoring software to detect price discrepancies in real
        time, and sufficient capital to make the small percentage gains worthwhile. For DeFi
        arbitrage, you need knowledge of smart contracts, flash loans, and blockchain
        transaction mechanics.
      </p>
      <p>
        Popular tools include CCXT for multi-exchange API access, custom Python scripts for
        price monitoring, and services like Hummingbot for automated market making and
        arbitrage. Speed is critical: institutional arbitrageurs use co-located servers near
        exchange infrastructure for minimum latency.
      </p>

      <h2 id="risks">Risks and Challenges</h2>
      <p>
        Execution risk is the biggest challenge. By the time you detect a price difference and
        execute trades on both exchanges, the gap may have closed. Withdrawal times between
        exchanges add delay and risk for spatial arbitrage. Trading fees, withdrawal fees, and
        blockchain network fees can eat into or exceed the arbitrage profit. Exchange downtime
        or API failures can leave you with one side of the trade exposed.
      </p>

      <h2 id="profitability">Is Arbitrage Still Profitable?</h2>
      <p>
        Simple spatial arbitrage between major exchanges has become less profitable as markets
        have matured and competition has increased. The easiest opportunities are captured by
        automated bots within milliseconds. However, opportunities still exist in less
        efficient corners of the market: smaller exchanges, new token listings, DeFi protocols,
        and cross-chain bridges. Success requires speed, capital, and sophisticated tooling.
      </p>
    </LearnPageLayout>
  );
}
