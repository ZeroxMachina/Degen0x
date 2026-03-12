import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Loan Aggregators: Finding Best Rates (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn how crypto loan aggregators help you find the best lending and borrowing rates. Compare aggregator platforms and understand how they optimize your DeFi lending.",
};

export default function LoanAggregatorsPage() {
  return (
    <LearnPageLayout
      title="Crypto Loan Aggregators: Finding Best Rates"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min read"
      intro="Crypto loan aggregators scan multiple lending protocols and platforms to find the best rates for borrowers and lenders. Rather than manually comparing rates across Aave, Compound, MakerDAO, and other protocols, aggregators automate the process, sometimes even splitting positions across multiple platforms for optimal returns. As the number of lending protocols grows across multiple chains, aggregators play an increasingly important role in helping users maximize capital efficiency."
      toc={[
        { id: "what-are-aggregators", title: "what-are-aggregators", level: 2 },
        { id: "what-are-loan-aggregators", title: "What Are Loan Aggregators", level: 2 },
        { id: "top-aggregators", title: "top-aggregators", level: 2 },
        { id: "top-loan-aggregators", title: "Top Loan Aggregators", level: 2 },
        { id: "how-they-optimize", title: "how-they-optimize", level: 2 },
        { id: "how-they-optimize-rates", title: "How They Optimize Rates", level: 2 },
        { id: "risks-tradeoffs", title: "risks-tradeoffs", level: 2 },
        { id: "risks-and-trade-offs", title: "Risks and Trade-offs", level: 2 }
      ]}
      faqs={[
        { question: "What is a crypto loan aggregator?", answer: "A crypto loan aggregator is a platform or protocol that compares lending and borrowing rates across multiple DeFi protocols and helps users find the best available rates. Some aggregators simply display comparisons, while others actively route funds to optimize returns or minimize borrowing costs." },
        { question: "How do aggregators find better rates?", answer: "Aggregators monitor rates across dozens of protocols in real-time. They can optimize by routing to the single best protocol, splitting deposits across multiple protocols, or using sophisticated strategies like rate arbitrage. Some also factor in gas costs, rewards tokens, and risk parameters." },
        { question: "Do aggregators charge extra fees?", answer: "Some aggregators charge a performance fee on extra yield generated (Yearn charges 20% of yield), while others are free or charge minimal fees. The net return after fees should still be better than what you would achieve manually, otherwise there is no benefit to using the aggregator." },
        { question: "Are aggregators safe to use?", answer: "Aggregators introduce an additional smart contract layer that could have vulnerabilities. You are exposed to the aggregator's smart contract risk in addition to the underlying protocol risks. Use only well-audited aggregators with significant track records. The multi-protocol exposure also means you are subject to risks from every protocol the aggregator uses." },
      ]}
      relatedArticles={[
        { title: "Stablecoin Lending", href: "/crypto-loans/learn/stablecoin-lending", category: "Crypto Loans" },
        { title: "DeFi Lending Strategies", href: "/defi-lending/learn/defi-lending-strategies", category: "DeFi Lending" },
        { title: "DeFi vs CeFi Lending", href: "/crypto-loans/learn/defi-vs-cefi-lending", category: "Crypto Loans" },
      ]}
    >
      <h2 id="what-are-aggregators">What Are Loan Aggregators</h2>
      <p>
        Loan aggregators sit on top of multiple lending protocols and provide a unified interface for users to access the best available rates. They solve a real problem: with dozens of lending protocols across multiple chains, each with different rates, terms, and risk profiles, manually finding the optimal strategy is time-consuming and complex. Aggregators handle this comparison automatically. Some aggregators are purely informational, displaying rates side-by-side for users to choose. Others are active, automatically routing funds to the best protocols and rebalancing as rates change. The most sophisticated aggregators use complex strategies involving multiple protocols, leverage, and token incentives to maximize returns beyond what any single protocol can offer.
      </p>

      <h2 id="top-aggregators">Top Loan Aggregators</h2>
      <p>
        Yearn Finance is the most established yield aggregator, with vaults that automatically deploy stablecoins and other assets across lending protocols and yield strategies. Yearn&apos;s strategies are developed by experienced DeFi strategists and audited before deployment. Morpho is a peer-to-peer optimization layer that sits on top of Aave and Compound, matching lenders and borrowers directly to offer improved rates for both sides. When a direct match is not available, funds fall back to the underlying pool. 1inch and Paraswap, primarily DEX aggregators, also offer lending rate comparisons. DeFi Saver provides automation tools that can manage positions across protocols. DefiLlama provides comprehensive yield data across all chains and protocols, serving as an informational aggregator. For cross-chain comparison, tools like DeFi Rate and LoanScan aggregate rates across platforms including both DeFi and CeFi options.
      </p>

      <h2 id="how-they-optimize">How They Optimize Rates</h2>
      <p>
        Aggregators use several techniques to optimize rates. Rate routing directs funds to the single protocol offering the best rate for a given asset at that moment. Split routing divides funds across multiple protocols to balance rates: depositing a large amount in one pool pushes rates down, so splitting across pools maintains higher average rates. Yield farming optimization factors in governance token rewards that boost effective APY beyond the base lending rate. Leveraged strategies borrow against deposits to create recursive positions that amplify yield (deposit USDC, borrow USDC at a lower rate, redeposit, repeat). Auto-compounding reinvests earned interest and rewards to maximize compounding returns. Gas optimization batches transactions and times them for lower gas periods. Some aggregators also consider risk-adjusted returns, weighting higher-risk protocols lower even if they offer higher nominal rates.
      </p>

      <h2 id="risks-tradeoffs">Risks and Trade-offs</h2>
      <p>
        Using an aggregator introduces additional smart contract risk. Your funds interact with the aggregator&apos;s contracts in addition to the underlying lending protocols. A bug in the aggregator could result in fund loss even if the underlying protocols are secure. Aggregators that use complex strategies (recursive lending, multi-protocol farming) multiply the potential failure points. Performance fees reduce your net return, though they are typically only charged on the incremental yield above what you could earn passively. Some aggregator strategies may have withdrawal delays or limitations during high-demand periods. Lock-up periods in certain vaults prevent immediate withdrawals. The auto-rebalancing nature of aggregators means your funds may be in different protocols than expected, each with its own risk profile. When evaluating aggregators, consider their audit history, total value locked, time in production, and the transparency of their strategies.
      </p>
    </LearnPageLayout>
  );
}
