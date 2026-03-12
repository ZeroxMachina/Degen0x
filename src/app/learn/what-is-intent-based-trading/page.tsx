import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Intent-Based Trading: The Future of DEX Swaps in ${CURRENT_YEAR}`,
  description:
    "Learn how intent-based trading works on Across Protocol, UniswapX, and CoW Swap. Understand solvers, MEV protection, and why intents are superior to traditional DEX swaps.",
  keywords: [
    "intent-based trading",
    "UniswapX",
    "CoW Swap",
    "Across Protocol",
    "solvers",
    "MEV protection",
    "DEX swaps",
  ],
};

export default function IntentBasedTradingPage() {
  return (
    <LearnPageLayout
      title="Intent-Based Trading: The Future of DEX Swaps"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="12 min"
      intro="Intent-based trading represents a paradigm shift in how cryptocurrency swaps execute on decentralized exchanges. Rather than submitting explicit transactions that publicly broadcast your swap details to the mempool—allowing frontrunners and MEV extractors to sandwich your trade—intent-based trading lets you express your desired outcome and delegate execution to solvers who compete to fulfill your intent at the best price. Protocols like Across, UniswapX, and CoW Swap are pioneering this approach, fundamentally improving user experience, reducing MEV losses, and enabling more efficient price discovery. This guide explains intent-based trading mechanics, compares major protocols, and explores why this architecture represents the future of decentralized trading."
      toc={[
        { id: "what-is-intent-based-trading", title: "what-is-intent-based-trading", level: 2 },
        { id: "what-is-intent-based-trading", title: "What Is Intent-Based Trading?", level: 2 },
        { id: "how-intents-work", title: "how-intents-work", level: 2 },
        { id: "how-intents-work-solvers-and-sequencing", title: "How Intents Work: Solvers and Sequencing", level: 2 },
        { id: "mev-protection-benefits", title: "mev-protection-benefits", level: 2 },
        { id: "mev-protection-and-user-benefits", title: "MEV Protection and User Benefits", level: 2 },
        { id: "across-protocol", title: "across-protocol", level: 2 },
        { id: "across-protocol-cross-chain-intents", title: "Across Protocol: Cross-Chain Intents", level: 2 },
        { id: "uniswapx-explained", title: "uniswapx-explained", level: 2 },
        { id: "uniswapx-intent-auctions-at-scale", title: "UniswapX: Intent Auctions at Scale", level: 2 },
        { id: "cow-swap-vision", title: "cow-swap-vision", level: 2 },
        { id: "cow-swap-coincidence-of-wants", title: "CoW Swap: Coincidence of Wants", level: 2 },
        { id: "intent-comparison", title: "intent-comparison", level: 2 },
        { id: "comparing-intent-protocols", title: "Comparing Intent Protocols", level: 2 },
        { id: "future-of-intents", title: "future-of-intents", level: 2 },
        { id: "the-future-of-intent-based-trading", title: "The Future of Intent-Based Trading", level: 2 }
      ]}
      faqs={[
        {
          question: "How are intents different from regular transactions?",
          answer:
            "Regular transactions specify exact execution paths: swap Token A for Token B via DEX X. The transaction broadcasts to the mempool, miners/validators can see it, and frontrunners can exploit it. Intents instead express desired outcomes: 'I want Token B in exchange for Token A.' Solvers compete to fulfill this intent, determining optimal execution. Intents keep your intent private until a solver commits to fulfilling it, protecting against MEV.",
        },
        {
          question: "Who are solvers and what do they do?",
          answer:
            "Solvers are entities (protocols, market makers, bots) that commit to fulfilling user intents. When you submit an intent, multiple solvers propose how they'll fulfill it—offering execution prices and strategies. Your intent is fulfilled by the solver offering the best terms. Solvers profit from the spread between their fulfillment cost and what they charge you, aligning incentives: better intent execution benefits both users and solvers.",
        },
        {
          question: "How do intents protect against MEV?",
          answer:
            "Traditional transactions broadcast intent publicly, allowing frontrunners to see your swap and insert their own transactions before yours, degrading your execution price (sandwich attacks). Intents hide your swap details until a solver commits to fulfilling your exact intent. Since the solver already committed to your price and execution, they can't exploit you further—MEV is eliminated or captured by solvers, who compete to offer the best prices.",
        },
        {
          question: "Can solvers be trusted with my intents?",
          answer:
            "Intent protocols are designed so solvers can't exploit intents they've committed to fulfill. Cryptographic signatures and on-chain settlement ensure fulfillment according to committed terms. However, like any financial system, trust assumes solver solvency and protocol security. Multiple solvers competing reduces single-point-of-failure risk. Across, UniswapX, and CoW Swap use different mechanisms, but all emphasize solver accountability and competition.",
        },
        {
          question: "Can intent-based trading work across multiple chains?",
          answer:
            "Yes! Across Protocol specializes in cross-chain intents, letting users express intent to swap on one chain and receive tokens on another. A user can intent 'swap USDC on Ethereum for USDT on Arbitrum,' and solvers fulfill by bridging liquidity. This enables seamless cross-chain trading without users manually navigating bridges. Across's approach reduces friction and costs compared to traditional bridge usage.",
        },
        {
          question: "Will intent-based trading replace traditional DEX swaps?",
          answer:
            "Intent-based protocols are rapidly becoming dominant for DEX trading due to MEV protection and superior execution. However, complete replacement isn't certain. Some users and applications may continue using traditional DEX swaps for simplicity or specific use cases. More likely: intent-based protocols capture majority market share for retail and institutional trading while traditional DEXs serve niche applications, creating a diverse ecosystem.",
        },
      ]}
      relatedArticles={[
        { title: "What Is MEV and How Does It Work?", href: "/learn/mev-explained", category: "Learn Crypto" },
        { title: "How DEXs Work: AMM Explained", href: "/learn/amm-explained", category: "Learn Crypto" },
        { title: "Best DEXs to Trade On", href: "/dexs/best", category: "DEXs" },
        { title: "Ethereum Layer 2 Solutions", href: "/learn/ethereum-l2s", category: "Learn Crypto" },
      ]}
    >
      <h2 id="what-is-intent-based-trading">What Is Intent-Based Trading?</h2>
      <p>
        Intent-based trading separates intent expression from execution. Rather than submitting a transaction specifying exact execution parameters, you express intent: 'I'll trade 10 USDC for at least 0.005 ETH.' Solvers compete to fulfill your intent, with the best solver executing at the best price. This architecture inverts traditional DEX design: instead of users navigating protocols directly, protocols and solvers handle execution complexity.
      </p>
      <p>
        The motivation for intent-based trading stems from MEV (Maximal Extractable Value). When you broadcast a swap transaction publicly, frontrunners observe it in the mempool and profit by inserting their transactions before and after yours—sandwich attacks that degrade your execution price. This extraction isn't malicious per se; it's a natural consequence of transparent mempools. Intent-based trading addresses this by hiding your swap details until a solver commits to specific execution terms.
      </p>

      <h2 id="how-intents-work">How Intents Work: Solvers and Sequencing</h2>
      <p>
        The intent-based trading process unfolds in stages. First, you express your intent: the asset you're selling, the asset you want, acceptable price limits, and any other requirements. You sign this intent with your private key, proving authorization without broadcasting to the blockchain immediately.
      </p>
      <p>
        Second, your intent is shared with solvers—entities competing to fulfill it. Multiple solvers see your intent and propose execution strategies. Solver A offers 0.0051 ETH for your 10 USDC. Solver B offers 0.00505 ETH. Solver A offers the best terms, so they secure the right to fulfill your intent. Critically, solvers must commit to their offered terms—they can't change the price after winning.
      </p>
      <p>
        Third, the winning solver executes your intent on-chain. They route your swap through liquidity sources (DEXs, market makers, private inventory), acquiring the output tokens and delivering them to your wallet. The solver profits from the spread between what they charge you and their actual fulfillment costs. This aligns incentives: solvers earn more by offering better prices, encouraging competition for your order flow.
      </p>

      <h2 id="mev-protection-benefits">MEV Protection and User Benefits</h2>
      <p>
        Intent-based trading eliminates traditional MEV attacks. Since your swap details remain hidden in the solver selection process, frontrunners can't see your transaction to sandwich. By the time execution occurs on-chain, it's already settled—no opportunity for before/after exploitation. This protection alone makes intent-based trading superior for retail users.
      </p>
      <p>
        Reduced slippage is another benefit. Traditional DEX swaps suffer slippage (difference between quoted price and actual execution) due to price movement during confirmation and MEV exploitation. Intent-based trading reduces both: solvers quote prices knowing MEV risk is controlled, enabling tighter pricing. Users benefit from better execution across the board.
      </p>

      <h2 id="across-protocol">Across Protocol: Cross-Chain Intents</h2>
      <p>
        Across Protocol extends intent-based trading to cross-chain scenarios. Rather than separate chains with separate trading, Across lets users express intent to swap on one chain and receive on another. Solvers fulfill these cross-chain intents by aggregating liquidity across chains and bridging tokens efficiently. This eliminates manual bridge navigation—one intent execution handles everything.
      </p>

      <h2 id="uniswapx-explained">UniswapX: Intent Auctions at Scale</h2>
      <p>
        UniswapX, Uniswap's intent-based protocol, auctions user intents to solvers. When you submit a swap to UniswapX, it's broadcast to a solver network who submit sealed bids to execute your intent. The best bidder wins and executes your swap. UniswapX has become a major liquidity source due to Uniswap's brand and integration depth.
      </p>

      <h2 id="cow-swap-vision">CoW Swap: Coincidence of Wants</h2>
      <p>
        CoW (Coincidence of Wants) Swap pioneered batching intents. Rather than settling each swap independently, CoW Swap batches multiple users' intents and matches them directly when possible. If User A wants ETH for USDC and User B wants USDC for ETH, CoW Swap pairs them directly without external liquidity. This is far more efficient and cheaper. When direct matching isn't possible, CoW Swap routes to external solvers.
      </p>

      <h2 id="intent-comparison">Comparing Intent Protocols</h2>
      <p>
        Across, UniswapX, and CoW Swap share the intent-based architecture but differ in execution details. Across emphasizes cross-chain intents. UniswapX leverages Uniswap's liquidity and brand. CoW Swap prioritizes batching and matching for maximum efficiency. Each brings unique advantages; the ecosystem benefits from diverse approaches.
      </p>

      <h2 id="future-of-intents">The Future of Intent-Based Trading</h2>
      <p>
        Intent-based trading is rapidly becoming the dominant DEX trading architecture. The MEV protection and execution quality advantages are too significant to ignore. As more solvers enter the market and competition intensifies, execution quality improves and fees compress. Over 2026-2027, expect intent-based trading to capture majority trading volume, with traditional DEX swaps relegated to specific use cases or legacy systems.
      </p>
      <p>
        Future innovations will extend intents to additional domains: lending intents (express borrowing desire, let solvers compete), NFT trading intents, and sophisticated DeFi composition intents. The intent-based paradigm is shifting how users interact with decentralized protocols, reducing complexity and improving outcomes.
      </p>
    </LearnPageLayout>
  );
}
