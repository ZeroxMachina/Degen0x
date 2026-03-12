import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is MEV? Maximal Extractable Value Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what MEV is, how sandwich attacks and front-running work, the MEV supply chain, how MEV affects DeFi users, and strategies to protect yourself from MEV extraction.",
  keywords: ["MEV", "maximal extractable value", "front-running", "sandwich attack", "flashbots", "MEV protection"],
};

export default function WhatIsMevPage() {
  return (
    <LearnPageLayout
      title="What Is MEV? Maximal Extractable Value Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="9 min"
      intro="Maximal Extractable Value (MEV) refers to the profit that block producers can capture by strategically ordering, including, or excluding transactions within a block. MEV is an invisible tax on DeFi users — every swap, liquidation, and arbitrage opportunity can be exploited by sophisticated actors who see pending transactions and profit from their knowledge of upcoming trades."
      toc={[
        { id: "what-is-mev", title: "what-is-mev", level: 2 },
        { id: "understanding-mev", title: "Understanding MEV", level: 2 },
        { id: "types-of-mev", title: "types-of-mev", level: 2 },
        { id: "types-of-mev", title: "Types of MEV", level: 2 },
        { id: "supply-chain", title: "supply-chain", level: 2 },
        { id: "the-mev-supply-chain", title: "The MEV Supply Chain", level: 2 },
        { id: "impact", title: "impact", level: 2 },
        { id: "impact-on-users", title: "Impact on Users", level: 2 },
        { id: "protection", title: "protection", level: 2 },
        { id: "mev-protection-strategies", title: "MEV Protection Strategies", level: 2 },
        { id: "future", title: "future", level: 2 },
        { id: "the-future-of-mev", title: "The Future of MEV", level: 2 }
      ]}
      faqs={[
        { question: "How much MEV is extracted daily?", answer: "MEV extraction on Ethereum generates millions of dollars daily, with cumulative extraction since 2020 exceeding billions of dollars. The actual amount varies with market volatility and DeFi activity levels, as more trading creates more MEV opportunities." },
        { question: "Can I avoid MEV?", answer: "You can reduce MEV exposure by using MEV-protected RPC endpoints like Flashbots Protect or MEV Blocker, setting tight slippage tolerances, breaking large trades into smaller chunks, using private transaction pools, or timing trades during low-volatility periods. However, completely eliminating MEV exposure is difficult for active DeFi users." },
        { question: "Is MEV ethical?", answer: "MEV is a subject of ongoing debate. Some forms like arbitrage improve market efficiency by correcting price discrepancies. Others like sandwich attacks extract value from regular users without providing any benefit. The community is working on protocol-level solutions to minimize harmful MEV while preserving beneficial market mechanisms." },
        { question: "Does MEV exist on all blockchains?", answer: "MEV exists on any blockchain where transaction ordering can be influenced. It is most prominent on Ethereum and EVM-compatible chains with active DeFi ecosystems. Solana has its own MEV dynamics related to its leader schedule and transaction processing model. Some chains are designing MEV-resistant architectures." },
      ]}
      relatedArticles={[
        { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn" },
        { title: "What Is Gas?", href: "/learn/what-is-gas", category: "Learn" },
        { title: "DeFi Exploit Prevention", href: "/learn/defi-exploit-prevention", category: "Learn" },
        { title: "Mempool Glossary", href: "/learn/glossary/mempool", category: "Learn" },
      ]}
    >
      <section id="what-is-mev">
        <h2>Understanding MEV</h2>
        <p>
          Maximal Extractable Value, originally called Miner Extractable Value, represents the total value that can be captured by whoever has the power to order transactions within a block. When you submit a transaction to the blockchain, it first enters a public waiting area called the mempool, where it is visible to everyone before being included in a block. Sophisticated actors monitor the mempool, identify profitable opportunities, and use their ability to influence transaction ordering to extract value.
        </p>
        <p>
          Think of it this way: if you are about to place a large buy order on a decentralized exchange, someone who sees your pending transaction could buy the token before you, driving up the price, and then sell immediately after your order executes at the higher price — profiting from the price impact of your trade. This is just one example of MEV extraction, and it happens constantly across the DeFi ecosystem, silently eroding returns for regular users.
        </p>
        <p>
          MEV exists because blockchain transaction ordering is not strictly first-come-first-served. Block proposers (formerly miners, now validators on Ethereum) have the power to arrange transactions in whatever order they choose within a block. This power to order transactions creates opportunities for profit that have spawned an entire ecosystem of searchers, builders, and validators competing to capture MEV.
        </p>
      </section>

      <section id="types-of-mev">
        <h2>Types of MEV</h2>
        <p>
          Sandwich attacks are the most common form of harmful MEV. An attacker sees your pending swap on a DEX, places a buy order before yours (front-running) to push the price up, lets your trade execute at the inflated price, and then sells immediately after (back-running) to capture the profit. The attacker profits from the price impact your trade creates, while you receive fewer tokens than you would have without the attack.
        </p>
        <p>
          Arbitrage involves exploiting price differences between decentralized exchanges. When the same token trades at different prices on Uniswap and SushiSwap, a searcher can buy low on one and sell high on the other in a single atomic transaction. While arbitrage creates value by aligning prices across markets, the competition to capture arbitrage opportunities can increase gas costs and network congestion. Liquidation MEV involves monitoring lending protocols for undercollateralized positions and racing to liquidate them to claim the liquidation bonus.
        </p>
      </section>

      <section id="supply-chain">
        <h2>The MEV Supply Chain</h2>
        <p>
          The MEV supply chain on Ethereum consists of three main actors. Searchers are bots that monitor the mempool and blockchain state to identify MEV opportunities. When they find one, they construct transaction bundles — ordered sets of transactions designed to extract the maximum value. Builders aggregate bundles from multiple searchers and construct complete blocks that maximize total MEV extraction. Proposers (validators) select the most profitable block from competing builders through a protocol called MEV-Boost.
        </p>
        <p>
          Flashbots played a pivotal role in organizing this supply chain. Before Flashbots, MEV extraction happened through Priority Gas Auctions where searchers competed by bidding up gas prices, causing negative externalities for all users. Flashbots created a separate auction mechanism that keeps MEV competition off the public mempool, reducing its impact on regular users while distributing MEV revenue more efficiently between searchers, builders, and proposers.
        </p>
      </section>

      <section id="impact">
        <h2>Impact on Users</h2>
        <p>
          MEV is an invisible cost for DeFi users. When you make a swap on Uniswap, the price you see may not be the price you get because searchers extract value between the time you submit your transaction and the time it executes. Studies have estimated that MEV costs DeFi users hundreds of millions of dollars annually in worse execution prices, failed transactions, and increased gas costs from MEV competition.
        </p>
        <p>
          The impact varies by activity. Simple swaps on major trading pairs are moderately affected. Large trades on low-liquidity pairs are heavily targeted. Lending protocol users face MEV through liquidation racing. NFT minters competing for limited supply face MEV from sophisticated bots that front-run minting transactions. Understanding MEV helps users make informed decisions about trade sizes, slippage settings, and the tools they use to interact with DeFi.
        </p>
      </section>

      <section id="protection">
        <h2>MEV Protection Strategies</h2>
        <p>
          The simplest protection is using MEV-aware RPC endpoints. Flashbots Protect sends your transactions directly to block builders, bypassing the public mempool where searchers monitor for targets. MEV Blocker by CoW Protocol offers similar protection and even shares MEV revenue back with users. Many wallets and DEX frontends now integrate these protections by default.
        </p>
        <p>
          On the application level, using DEX aggregators with MEV protection (like CoW Swap or 1inch Fusion) routes trades through batch auctions that are inherently resistant to sandwich attacks. Setting tight slippage tolerances limits the profit available to sandwich attackers, though setting them too tight risks transaction failure. Breaking large trades into smaller pieces reduces the MEV opportunity from any single trade. For the most sensitive transactions, private transaction services ensure your trade is not visible until it is included in a block.
        </p>
      </section>

      <section id="future">
        <h2>The Future of MEV</h2>
        <p>
          The Ethereum community is actively researching protocol-level solutions to the MEV problem. Proposer-Builder Separation (PBS) is being formalized as a core protocol feature, creating a structured market for block production that can be regulated and optimized. Encrypted mempools would prevent searchers from seeing transaction details until after ordering is committed, eliminating front-running and sandwich attacks at the protocol level.
        </p>
        <p>
          Application-level innovations include intent-based trading where users express what they want to accomplish rather than submitting specific transactions, allowing solvers to compete for the best execution. Batch auctions that settle all trades in a period at a single clearing price eliminate the ordering advantage that enables MEV. These approaches suggest a future where harmful MEV is largely mitigated while beneficial forms like arbitrage continue to improve market efficiency.
        </p>
      </section>
    </LearnPageLayout>
  );
}
