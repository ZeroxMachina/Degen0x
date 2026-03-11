import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `MEV (Maximal Extractable Value) Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Understand MEV: what maximal extractable value is, how sandwich attacks and frontrunning work, the role of MEV searchers and builders, and how to protect yourself from MEV extraction.",
};

export default function MevExplainedPage() {
  return (
    <LearnPageLayout
      title="MEV (Maximal Extractable Value) Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Maximal Extractable Value (MEV) refers to the profit that block producers and specialized actors (searchers) can extract by including, excluding, or reordering transactions within a block. Originally called Miner Extractable Value when Ethereum used Proof of Work, MEV has become a defining feature of blockchain economics, with billions extracted annually. Understanding MEV is essential for any active DeFi user, as it directly impacts the prices you receive on trades and the costs you incur in transactions."
      toc={[
        { id: "what-is-mev", title: "What Is MEV?", level: 2 },
        { id: "types-of-mev", title: "Types of MEV Extraction", level: 2 },
        { id: "mev-supply-chain", title: "The MEV Supply Chain", level: 2 },
        { id: "impact", title: "Impact on Users", level: 2 },
        { id: "protection", title: "Protecting Yourself from MEV", level: 2 },
      ]}
      faqs={[
        {
          question: "Is MEV theft?",
          answer:
            "MEV is a gray area. Some forms, like arbitrage that aligns prices across markets, are beneficial for the ecosystem. Others, like sandwich attacks that extract value from unsuspecting traders, are considered parasitic. The distinction often lies in whether the extracted value comes from market inefficiencies or directly from users' pockets.",
        },
        {
          question: "How much MEV is extracted?",
          answer:
            "Billions of dollars in MEV have been extracted on Ethereum alone since its inception. Daily MEV extraction varies with market conditions and DeFi activity levels. During periods of high volatility and trading volume, MEV opportunities increase significantly. Tools like Flashbots' MEV-Explore track cumulative MEV extraction in real-time.",
        },
        {
          question: "Can MEV be eliminated?",
          answer:
            "Complete elimination of MEV is unlikely, as some forms are inherent to how blockchains order transactions. However, MEV can be mitigated and redistributed. Solutions include encrypted mempools, MEV-sharing mechanisms that return value to users, and protocol designs that minimize the value available for extraction. The goal is to reduce harmful MEV while preserving beneficial forms like arbitrage.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn" },
        { title: "AMMs Explained", href: "/learn/amm-explained", category: "Learn" },
        { title: "Intent-Based Trading", href: "/learn/intent-based-trading", category: "Learn" },
        { title: "What Are Gas Fees?", href: "/learn/what-are-gas-fees", category: "Learn" },
      ]}
    >
      <section id="what-is-mev">
        <h2>What Is MEV?</h2>
        <p>
          MEV exists because the order of transactions within a block matters. When you submit a transaction to swap tokens on a DEX, it enters a public mempool where it is visible to everyone before being included in a block. Sophisticated actors (called searchers) monitor the mempool for profitable opportunities: they can see your pending trade and calculate the price impact it will have, then insert their own transactions before and after yours to extract profit.
        </p>
        <p>
          The concept extends beyond trading. MEV opportunities arise whenever transaction ordering can create profit: liquidating under-collateralized loans on lending protocols, arbitraging price differences between exchanges, exploiting oracle updates that change asset prices, and more. The total addressable MEV in any given block is the maximum profit that could be extracted by optimally ordering all pending transactions, though in practice only a portion of theoretical MEV is actually captured.
        </p>
      </section>

      <section id="types-of-mev">
        <h2>Types of MEV Extraction</h2>
        <p>
          Sandwich attacks are the most well-known form of harmful MEV. A searcher spots your pending swap, places a buy order before yours (frontrunning, which raises the price), lets your trade execute at the inflated price, and then immediately sells after (backrunning, capturing the price increase). You end up receiving fewer tokens than you would have without the sandwich, and the searcher pockets the difference. This is the most directly harmful form of MEV, costing retail users significant amounts.
        </p>
        <p>
          Arbitrage involves buying tokens on one exchange where the price is lower and selling on another where the price is higher, profiting from the difference. While this extracts value, it also serves a beneficial function by keeping prices aligned across markets. Liquidation MEV occurs when searchers compete to liquidate under-collateralized positions on lending protocols, earning the liquidation bonus. Just-in-time (JIT) liquidity involves providing concentrated liquidity to a pool moments before a large trade and removing it immediately after, capturing fees without taking on sustained impermanent loss risk.
        </p>
      </section>

      <section id="mev-supply-chain">
        <h2>The MEV Supply Chain</h2>
        <p>
          The modern MEV ecosystem has evolved into a sophisticated supply chain. Searchers are the bots that identify and extract MEV opportunities from the mempool or on-chain state. They bundle their transactions and submit them to block builders, who construct optimized blocks that maximize the total MEV extracted. Builders then compete in an auction (like Flashbots' MEV-Boost) for validators to include their block, sharing the extracted value with the validator as a bid.
        </p>
        <p>
          This proposer-builder separation (PBS) architecture, pioneered by Flashbots and now integral to Ethereum, was designed to prevent validators from directly extracting MEV and to create a more competitive, transparent market. While it has reduced some negative effects, the concentration of block building among a few sophisticated builders has raised new centralization concerns. The ongoing development of encrypted mempools, MEV-sharing mechanisms, and intent-based architectures aims to further reduce harmful MEV and distribute the remaining value more equitably.
        </p>
      </section>

      <section id="impact">
        <h2>Impact on Users</h2>
        <p>
          For the average DeFi user, MEV manifests as worse execution prices on DEX trades, higher costs for loan liquidations, and occasionally failed transactions when bots outcompete regular users for time-sensitive operations. Studies have shown that a significant percentage of Ethereum DEX trades are affected by some form of MEV extraction, with the average cost per affected trade varying from a few dollars to hundreds depending on trade size and market conditions.
        </p>
        <p>
          MEV also affects the broader health of blockchain networks. The incentive to capture MEV can lead to consensus instability, as validators might be tempted to reorganize recent blocks to capture MEV opportunities. Gas price spikes during MEV competitions (gas wars) increase costs for all network users. The concentration of MEV extraction among sophisticated actors creates an uneven playing field that disadvantages retail participants and raises questions about the fairness and accessibility of decentralized systems.
        </p>
      </section>

      <section id="protection">
        <h2>Protecting Yourself from MEV</h2>
        <p>
          Private transaction pools (private mempools) allow you to submit transactions directly to block builders, bypassing the public mempool where searchers monitor for opportunities. Flashbots Protect, MEV Blocker, and similar services route your transactions through private channels, significantly reducing the risk of sandwich attacks. Many wallets and DEX aggregators now offer MEV protection as a default or optional feature.
        </p>
        <p>
          Using lower slippage tolerance on trades limits the maximum price impact a sandwich attacker can extract, though setting it too low may cause legitimate trades to fail during volatile markets. Trading on protocols that use batch auctions (like CoW Protocol) or intent-based systems aggregates orders and executes them at a uniform price, eliminating frontrunning opportunities. Trading on Layer 2 networks with centralized sequencers currently experiences less MEV, though this may change as L2 ecosystems mature. For large trades, using limit orders instead of market orders provides price certainty and avoids MEV entirely.
        </p>
      </section>
    </LearnPageLayout>
  );
}
