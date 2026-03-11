import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Solend Review ${CURRENT_YEAR}: Yield, Fees & Pros/Cons`,
  description:
    "Detailed Solend review covering lending rates, isolated pools, governance, and how this OG Solana lending protocol compares to newer alternatives.",
};

export default function SolendReview() {
  return (
    <ReviewPage
      product={{
        name: "Solend",
        slug: "solend",
        rating: 4.0,
        description:
          "Solend is one of the original lending and borrowing protocols on Solana, offering both a main pool with major assets and isolated pools for long-tail tokens with varying risk profiles.",
        pros: [
          "One of the longest-running Solana lending protocols with proven track record",
          "Isolated pools allow lending for niche and emerging assets",
          "Competitive rates on major assets like SOL and USDC",
          "Low transaction costs on Solana network",
          "SLND governance token for protocol participation",
        ],
        cons: [
          "Past governance controversy over large whale position handling",
          "Lower TVL compared to newer competitors like Kamino and MarginFi",
          "Interface feels less polished than newer alternatives",
          "Limited innovation compared to rapidly evolving competitors",
          "Some isolated pools have low liquidity depth",
        ],
        bestFor: "Users seeking an established Solana lending protocol with isolated pool support",
        affiliateUrl: "#",
        category: "defi-lending",
      }}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="Solend was among the first lending protocols to launch on Solana, establishing itself during the 2021 Solana DeFi boom. The protocol offers a main lending pool for blue-chip Solana assets alongside permissionless isolated pools that anyone can create for long-tail tokens. Solend pioneered the concept of isolated lending pools on Solana, allowing communities to create lending markets for their preferred tokens without exposing the main pool to additional risk. The protocol has weathered multiple market cycles and maintained operations through challenging periods, including a controversial governance episode involving a large whale position that tested the boundaries of DeFi governance principles. Despite facing competition from newer protocols, Solend remains an active part of the Solana lending ecosystem with a dedicated user base."
      sections={[
        {
          id: "main-pool",
          title: "Main Pool & Isolated Pools",
          content:
            "Solend's architecture separates lending markets into a main pool and isolated pools. The main pool supports blue-chip Solana assets like SOL, USDC, USDT, and major liquid staking tokens with shared liquidity and tighter risk parameters. Isolated pools are independent lending markets that anyone can create for specific tokens or use cases. Each isolated pool has its own risk parameters and does not affect other pools if an asset in it fails. This design allows Solend to support a much wider range of assets than protocols limited to a single shared pool. Popular isolated pools include those focused on liquid staking tokens, meme tokens, and ecosystem-specific assets.",
        },
        {
          id: "rates-yields",
          title: "Interest Rates & Yields",
          content:
            "Solend uses algorithmic interest rate models that adjust based on pool utilization. When demand for borrowing is high, both supply and borrow rates increase. Major assets like USDC typically yield between 2-8% for suppliers, while borrow rates range from 4-15%. Rates in isolated pools can be significantly higher due to lower liquidity and higher demand, though this comes with additional risk. Solend also distributes SLND token rewards to incentivize participation in select pools, providing additional yield on top of base lending rates. The protocol's rate models are configured by governance to balance competitive yields with protocol safety.",
        },
        {
          id: "governance",
          title: "Governance & SLND Token",
          content:
            "Solend is governed by holders of the SLND token through an on-chain governance system. Token holders can propose and vote on protocol parameters, new asset listings, risk settings, and treasury management. The governance system gained notoriety during an incident where a proposal was raised to take emergency action on a large whale position that posed systemic risk to the protocol. This event sparked significant debate about the limits of DeFi governance and the balance between protocol safety and user sovereignty. Since then, Solend has implemented additional safeguards and refined its governance processes to better handle edge cases while respecting user rights.",
        },
        {
          id: "security",
          title: "Security & Risk Management",
          content:
            "Solend has undergone multiple security audits and maintains standard DeFi safety features including oracle validation, liquidation mechanisms, and supply caps. The isolated pool architecture provides natural risk containment by preventing failures in one pool from affecting others. The protocol implements borrowing limits and collateral factor adjustments to manage risk across different asset tiers. Solend's experience operating through multiple market cycles, including the FTX collapse and its aftermath on Solana, has informed its risk management approach. However, users should recognize that older protocol code may not incorporate the latest security innovations found in newer competitors.",
        },
      ]}
      fees={{
        "Supply APY": "Variable (2-8% for major assets)",
        "Borrow APR": "Variable (4-15% depending on asset)",
        "Liquidation Penalty": "5-20% depending on asset",
        "Protocol Fee": "Portion of interest spread",
        "Isolated Pool Creation": "Small SOL deposit required",
        "Gas Costs": "Minimal on Solana (~$0.01)",
      }}
      security={[
        "Multiple security audits completed",
        "Isolated pool architecture for risk containment",
        "Oracle validation with price feed checks",
        "Automated liquidation mechanisms",
        "Supply and borrow caps per pool",
        "Governance-controlled risk parameters",
        "Battle-tested through multiple market cycles",
      ]}
      features={[
        "Main pool for blue-chip Solana asset lending",
        "Permissionless isolated pools for any SPL token",
        "SLND governance token with on-chain voting",
        "Algorithmic interest rate models",
        "Liquidation engine with competitive penalties",
        "Multi-asset collateral support",
        "Real-time rate and position monitoring",
      ]}
      faqs={[
        {
          question: "Is Solend still relevant with Kamino and MarginFi?",
          answer:
            "Solend remains relevant for users who value its isolated pool architecture and longer track record. While newer protocols have attracted more TVL, Solend offers unique features like permissionless pool creation that are valuable for niche use cases.",
        },
        {
          question: "What happened with Solend's governance controversy?",
          answer:
            "In 2022, Solend governance passed a proposal to take emergency action on a large whale position that threatened protocol solvency. The incident highlighted tensions between protocol safety and user autonomy in DeFi governance and led to improved safeguards.",
        },
        {
          question: "Are Solend isolated pools safe?",
          answer:
            "Isolated pools contain risk to that specific pool, protecting the main pool and other isolated pools. However, pools with lower liquidity or more volatile assets carry higher risk of liquidation cascades and may have less reliable oracle pricing.",
        },
      ]}
      relatedReviews={[
        { name: "Kamino Finance", slug: "kamino" },
        { name: "MarginFi", slug: "marginfi" },
        { name: "Drift", slug: "drift" },
      ]}
      relatedGuides={[
        { title: "DeFi on Solana Guide", href: "/defi-lending/learn/defi-on-solana" },
        { title: "Solend vs MarginFi", href: "/defi-lending/compare/solend-vs-marginfi" },
      ]}
    />
  );
}
