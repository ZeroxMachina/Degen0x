import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Impermax Review ${CURRENT_YEAR}: Leveraged LP Farming Protocol`,
  description:
    "Detailed Impermax review covering leveraged liquidity provision, lending markets, multi-chain support, and how this protocol compares to similar platforms.",
  alternates: { canonical: "/defi-lending/reviews/impermax" }};

export default function ImpermaxReview() {
  return (
    <ReviewPage
      product={{
        name: "Impermax",
        slug: "impermax",
        rating: 3.7,
        description:
          "Impermax is a decentralized leveraged yield farming protocol that enables users to leverage their LP token positions while lenders earn yield from providing the borrowed capital across Ethereum, Polygon, and Arbitrum.",
        pros: [
          "Pioneer of the leveraged LP lending model in DeFi",
          "Multi-chain presence on Ethereum, Polygon, and Arbitrum",
          "Permissionless pool creation allows any LP pair",
          "Isolated market architecture contains risk per pair",
          "Battle-tested codebase that has been forked many times",
        ],
        cons: [
          "Lower TVL and activity compared to peak periods",
          "Interface feels dated compared to newer protocols",
          "Some pools have minimal liquidity for exits",
          "Token incentives have diminished over time",
          "Ethereum mainnet gas costs can be prohibitive for smaller positions",
        ],
        bestFor: "DeFi users seeking leveraged LP exposure on Ethereum, Polygon, or Arbitrum ecosystems",
        affiliateUrl: "#",
        category: "defi-lending",
      }}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="Impermax pioneered the concept of leveraged liquidity provision in DeFi, creating isolated lending markets around DEX LP tokens. The protocol allows LP token holders to borrow additional assets to leverage their positions, while lenders earn yield by supplying individual tokens. Impermax's architecture has been widely forked, with protocols like Tarot building on its open-source codebase. Operating across Ethereum mainnet, Polygon, and Arbitrum, Impermax supports LP tokens from Uniswap, SushiSwap, and other major DEXs. While the protocol's TVL has declined from its peak, it continues to serve as foundational infrastructure for leveraged yield farming with its proven and battle-tested smart contract architecture."
      sections={[
        { id: "core-mechanism", title: "Core Lending Mechanism", content: "Impermax creates isolated lending markets for specific LP token pairs. Each market consists of two lending pools (one for each token in the LP pair) and a borrowing mechanism that accepts LP tokens as collateral. Lenders deposit individual tokens to earn interest from borrowers, while borrowers use their LP tokens to take leveraged positions. The isolated design means that risk from any single lending pair does not propagate to other pairs. Interest rates are determined by a bonding curve model based on pool utilization, automatically adjusting to balance supply and demand for borrowed assets. This architecture has proven robust across multiple market cycles." },
        { id: "leveraged-farming", title: "Leveraged LP Farming", content: "Users can leverage their LP positions by depositing LP tokens as collateral and borrowing additional tokens to mint more LP tokens. This recursive process amplifies exposure to trading fees and farming rewards. Leverage ratios of up to 5-10x are possible depending on the pair's risk parameters. Higher leverage amplifies both potential returns and risks, including impermanent loss. Liquidation occurs when the position's debt-to-collateral ratio exceeds the liquidation threshold. Users should monitor their positions during volatile markets, as rapid price changes can trigger liquidations faster than expected with leveraged exposure." },
        { id: "multi-chain", title: "Multi-Chain Support", content: "Impermax operates on Ethereum mainnet, Polygon, and Arbitrum, supporting LP tokens from major DEXs on each chain. The Polygon deployment offers the lowest gas costs, making it practical for smaller positions. Arbitrum provides a balance between Ethereum security and lower transaction costs. The Ethereum mainnet deployment supports the deepest liquidity pools but requires larger position sizes to justify gas costs. Each chain deployment is independent, with its own set of lending pairs and liquidity pools. Users should choose their chain based on their position size, preferred DEX pairs, and gas cost tolerance." },
        { id: "security", title: "Security & Track Record", content: "Impermax's smart contracts have been audited and battle-tested over multiple years of operation. The fact that its codebase has been widely forked by other protocols speaks to its technical quality and security. The isolated market architecture provides natural risk containment. However, users should be aware that leveraged positions carry inherent risks including amplified impermanent loss, liquidation risk, and oracle pricing challenges for LP tokens. Some lower-liquidity pools may present additional risks around exit slippage and accurate price discovery during volatile periods." },
      ]}
      fees={{ "Lending APY": "Variable (2-15%)", "Borrowing APR": "Variable (5-25%)", "Liquidation Bonus": "5-8%", "Protocol Fee": "10% of interest", "Gas Costs": "Varies significantly by chain" }}
      security={["Audited smart contracts with multi-year track record", "Widely forked codebase validates security quality", "Isolated lending pair architecture", "Automated liquidation mechanisms", "Oracle-based LP token valuation", "Permissionless but parametrized pool creation"]}
      features={["Leveraged LP token farming with variable leverage", "Single-asset lending for passive yield", "Permissionless lending pair creation for any LP token", "Multi-chain deployment on Ethereum, Polygon, Arbitrum", "Isolated market risk architecture", "Automated interest rate models", "Open-source and widely forked codebase"]}
      faqs={[
        { question: "How is Impermax different from Aave or Compound?", answer: "Impermax specializes in leveraged LP token farming, while Aave and Compound focus on general-purpose lending of individual tokens. Impermax creates isolated markets around LP pairs, enabling leverage specifically for liquidity provision." },
        { question: "What leverage can I use on Impermax?", answer: "Maximum leverage depends on the specific LP pair and its risk parameters. Typical maximums range from 5x to 10x. Higher leverage amplifies both returns and risk of liquidation." },
        { question: "Which chain is best for small positions?", answer: "Polygon offers the lowest gas costs, making it most practical for smaller positions. Arbitrum provides a good middle ground. Ethereum mainnet requires larger positions to be cost-effective." },
      ]}
      relatedReviews={[
        { name: "Tarot", slug: "tarot" },
        { name: "Alpaca Finance", slug: "alpaca-finance" },
        { name: "Extra Finance", slug: "extra-finance" },
      ]}
      relatedGuides={[
        { title: "Leveraged Yield Farming Guide", href: "/defi-lending/learn/leveraged-yield-farming" },
        { title: "DeFi on Polygon", href: "/defi-lending/learn/defi-on-polygon" },
      ]}
    />
  );
}
