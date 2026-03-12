import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Jupiter vs Raydium (${CURRENT_YEAR}) | degen0x`,
  description: "Compare Jupiter vs Raydium on Solana. Aggregation, liquidity, features, and which Solana DEX is better for swapping tokens.",
};

export default function JupiterVsRaydium() {
  return (
    <LearnPageLayout
      title="Jupiter vs Raydium"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="8 min read"
      intro="Jupiter and Raydium are the two dominant DeFi platforms on Solana, but they serve different roles. Jupiter is a swap aggregator that finds the best prices across all Solana DEXs, while Raydium is a core liquidity provider with AMM pools. This comparison examines how they complement and compete with each other."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "platform-overview", title: "Platform Overview", level: 2 },
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-they-work", title: "How They Work", level: 2 },
        { id: "fees", title: "fees", level: 2 },
        { id: "fee-comparison", title: "Fee Comparison", level: 2 },
        { id: "features", title: "features", level: 2 },
        { id: "features", title: "Features", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "tokenomics", title: "Tokenomics", level: 2 },
        { id: "verdict", title: "verdict", level: 2 },
        { id: "which-should-you-choose", title: "Which Should You Choose?", level: 2 }
      ]}
      faqs={[
        { question: "Is Jupiter an exchange or aggregator?", answer: "Jupiter is primarily a swap aggregator that routes trades through multiple DEXs including Raydium to find the best price. It has also launched its own perpetuals and launchpad products." },
        { question: "Does Jupiter use Raydium?", answer: "Yes, Jupiter routes through Raydium's liquidity pools when they offer the best price. The two platforms are complementary rather than purely competitive." },
        { question: "Which gives better prices?", answer: "Jupiter typically gives better swap prices because it aggregates across all Solana DEXs and splits routes for optimal execution. Raydium only uses its own pools." },
        { question: "Which has a token?", answer: "Both have tokens. JUP is Jupiter's governance token, and RAY is Raydium's token used for staking and governance." },
      ]}
      relatedArticles={[
        { title: "Uniswap vs SushiSwap", href: "/exchanges/compare/uniswap-vs-sushiswap", category: "Exchanges" },
        { title: "Exchange Aggregators Explained", href: "/exchanges/learn/exchange-aggregators", category: "Exchanges" },
        { title: "DEX vs CEX", href: "/exchanges/learn/decentralized-vs-centralized", category: "Exchanges" },
      ]}
    >
      <section id="overview">
        <h2>Platform Overview</h2>
        <p>Jupiter has become Solana's leading DeFi platform, functioning primarily as a swap aggregator that routes trades across dozens of Solana DEXs for optimal pricing. Beyond aggregation, Jupiter has expanded into perpetual futures, a launchpad (LFG), limit orders, and DCA tools. It is often the first destination for Solana token swaps.</p>
        <p>Raydium is one of Solana's core AMM platforms, providing concentrated liquidity pools and serving as a key liquidity source for the ecosystem. Raydium launched AcceleRaytor for new token launches and integrates with the OpenBook order book for hybrid liquidity. Many new Solana tokens launch their initial liquidity on Raydium.</p>
      </section>

      <section id="how-they-work">
        <h2>How They Work</h2>
        <p>Jupiter aggregates liquidity from all Solana DEXs, splitting trades across multiple routes to minimize slippage and find the best price. When you swap on Jupiter, your trade may be routed through Raydium, Orca, and other pools simultaneously for optimal execution.</p>
        <p>Raydium operates its own liquidity pools where users provide token pairs and earn swap fees. It uses both concentrated liquidity (CLMM) and constant product AMM models. Raydium also connects to OpenBook's central limit order book for additional liquidity.</p>
      </section>

      <section id="fees">
        <h2>Fee Comparison</h2>
        <p>Jupiter charges a small platform fee on some features but the core swap aggregation is free beyond the underlying DEX fees. Limit orders and DCA have specific fee structures. Perpetuals charge standard trading fees.</p>
        <p>Raydium charges pool-specific swap fees ranging from 0.01% to 1% depending on the pool type. Concentrated liquidity pools offer lower fees for major pairs. Liquidity providers earn these fees proportional to their share of the pool.</p>
      </section>

      <section id="features">
        <h2>Features</h2>
        <p>Jupiter offers swap aggregation, limit orders, DCA, perpetual futures (up to 100x leverage), the LFG Launchpad for new tokens, and a bridge aggregator. The platform has become an all-in-one Solana DeFi hub beyond just swapping.</p>
        <p>Raydium provides AMM pools, concentrated liquidity, farming rewards, AcceleRaytor launchpad, and staking. The platform's role as a foundational liquidity layer means many new tokens create their first pools on Raydium.</p>
      </section>

      <section id="tokenomics">
        <h2>Tokenomics</h2>
        <p>JUP is Jupiter's governance token, launched via a massive airdrop to Solana users. The token is used for governance voting on protocol decisions and future airdrops. JUP staking provides access to governance and potential future fee sharing.</p>
        <p>RAY is Raydium's utility and governance token. RAY staking earns protocol fees and additional RAY rewards. The token is used for governance participation and farming boosts. RAY has been available longer and has established utility within the platform.</p>
      </section>

      <section id="verdict">
        <h2>Which Should You Choose?</h2>
        <p>Use Jupiter for token swaps on Solana to get the best prices through aggregation. It should be your default for any swap, limit order, or DCA strategy. Jupiter's perpetuals also provide leveraged trading without centralized exchange risk.</p>
        <p>Use Raydium if you want to provide liquidity and earn fees, participate in new token launches, or trade tokens immediately after they launch on Raydium pools. Both platforms are complementary, and most active Solana users will interact with both regularly.</p>
      </section>
    </LearnPageLayout>
  );
}
