import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Crypto Arbitrage? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what crypto arbitrage is, how it works, the different types, and why it matters for market efficiency. A complete guide to arbitrage trading in cryptocurrency.",
};

export default function ArbitragePage() {
  return (
    <LearnPageLayout
      title="What Is Crypto Arbitrage?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Arbitrage is the practice of profiting from price differences for the same asset across different markets or exchanges. In crypto, arbitrage opportunities arise because the same token can trade at slightly different prices on different exchanges, DEXs, or chains. Arbitrageurs play a crucial role in keeping prices consistent across the ecosystem."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-arbitrage", title: "What Is Arbitrage?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-crypto-arbitrage-works", title: "How Crypto Arbitrage Works", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-arbitrage", title: "Types of Arbitrage", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "challenges", title: "challenges", level: 2 },
        { id: "challenges-and-risks", title: "Challenges and Risks", level: 2 }
      ]}
      faqs={[
        {
          question: "Is crypto arbitrage profitable?",
          answer:
            "Crypto arbitrage can be profitable, but margins are thin and competition is intense. Most profitable arbitrage is done by automated bots that can execute trades in milliseconds. Manual arbitrage opportunities have largely been eliminated by these bots, especially on major exchanges.",
        },
        {
          question: "Is crypto arbitrage legal?",
          answer:
            "Arbitrage trading is legal in most jurisdictions. It is a standard trading practice in all financial markets. However, you must comply with local regulations regarding crypto trading, and profits are generally subject to capital gains taxes.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
        { title: "What Is Slippage?", href: "/learn/glossary/slippage", category: "Glossary" },
        { title: "What Is a Flash Loan?", href: "/learn/glossary/flash-loan", category: "Glossary" },
        { title: "What Is a Centralized Exchange?", href: "/learn/glossary/centralized-exchange", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Arbitrage?</h2>
      <p>
        Arbitrage is a trading strategy that exploits price differences for identical assets across different markets. If Bitcoin is trading at $50,000 on Exchange A and $50,100 on Exchange B, an arbitrageur can buy on A and sell on B, pocketing the $100 difference minus fees. This ancient financial concept applies powerfully to fragmented crypto markets.
      </p>

      <h2 id="how-it-works">How Crypto Arbitrage Works</h2>
      <p>
        The trader identifies a price discrepancy, buys the asset on the cheaper exchange, and simultaneously sells it on the more expensive exchange. Speed is critical — price gaps can close within seconds. Most serious arbitrageurs use automated trading bots connected to multiple exchanges via APIs. The bots monitor prices continuously and execute trades the moment an opportunity appears.
      </p>
      <p>
        In DeFi, flash loans enable arbitrage without upfront capital. A trader can borrow millions of dollars, execute the arbitrage trade, repay the loan plus fees, and keep the profit — all within a single blockchain transaction. If the trade is not profitable, the entire transaction reverts, so the only cost is the failed transaction gas fee.
      </p>

      <h2 id="types">Types of Arbitrage</h2>
      <p>
        Exchange arbitrage exploits price differences between centralized exchanges. DEX arbitrage captures price differences between decentralized exchanges or between DEXs and CEXs. Cross-chain arbitrage exploits price differences for the same token on different blockchain networks. Triangular arbitrage involves three different trading pairs to extract profit from price inconsistencies.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Arbitrageurs are essential for market efficiency. By exploiting price differences, they push prices toward equilibrium across exchanges. Without arbitrage, the same token could trade at very different prices on different platforms, creating confusion and inefficiency. Arbitrage activity ensures that markets remain fair and prices stay consistent globally.
      </p>

      <h2 id="challenges">Challenges and Risks</h2>
      <p>
        Transaction fees, withdrawal times, slippage, and network congestion can all eat into or eliminate arbitrage profits. Price gaps may close before a trade completes. On-chain arbitrage faces MEV (maximal extractable value) competition from other bots and validators. Exchange withdrawal limits and account verification requirements add friction to cross-exchange strategies.
      </p>
    </LearnPageLayout>
  );
}
