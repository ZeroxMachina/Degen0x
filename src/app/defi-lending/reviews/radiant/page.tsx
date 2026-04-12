import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { Product } from "@/lib/types";
import { CURRENT_YEAR } from "@/lib/constants";

const product: Product = {
  name: "Radiant Capital",
  slug: "radiant",
  rating: 3.8,
  description: "Radiant Capital is an omnichain lending protocol built on LayerZero that enables users to deposit collateral on one chain and borrow against it on another,",
  pros: ["Cross-chain lending via LayerZero", "Unified liquidity across multiple chains", "Dynamic liquidity mining with dLP locking", "Attractive yields for active participants"],
  cons: ["Suffered major exploit in October 2024", "Complex tokenomics with dLP requirements", "Higher risk profile than single-chain protocols", "RDNT emissions can dilute value"],
  fees: "Variable (supply/borrow spread)",
  bestFor: "Cross-chain DeFi users seeking unified lending",
  affiliateUrl: "#",
  category: "defi-lending",
};

export const metadata: Metadata = {
  title: `Radiant Capital Review (${CURRENT_YEAR}) | degen0x`,
  description: "In-depth Radiant Capital review covering cross-chain lending, LayerZero integration, dLP tokenomics, security concerns, and yield opportunities.",
  alternates: { canonical: "/defi-lending/reviews/radiant" }};

export default function RadiantReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="Radiant Capital aims to be the first omnichain money market where users can deposit any major asset on any supported chain and borrow against it on any other chain. Built on LayerZero's cross-chain messaging, Radiant V2 introduced dynamic liquidity provisioning (dLP) that requires borrowers to lock RDNT-ETH liquidity to qualify for emissions. The protocol launched on Arbitrum and expanded to BSC and Ethereum. While the vision of seamless cross-chain lending is compelling, Radiant suffered a significant security exploit in October 2024 that affected user trust and TVL. The team has been working on recovery and improved security measures."
      sections={[
        { id: "cross-chain", title: "Cross-Chain Lending Architecture", content: "Radiant leverages LayerZero's omnichain interoperability protocol to enable cross-chain lending. Users can deposit collateral on Arbitrum and borrow USDC on Ethereum, for example, without manually bridging assets. The protocol maintains lending pools on each supported chain and uses LayerZero messages to coordinate collateral and debt positions across chains. This creates a unified lending experience that abstracts away the complexity of multi-chain DeFi. Supported chains include Arbitrum, BSC, and Ethereum mainnet." },
        { id: "dlp-model", title: "Dynamic Liquidity Provisioning (dLP)", content: "Radiant V2 introduced the dLP model to align incentives. To qualify for RDNT emissions, borrowers and lenders must lock RDNT-paired liquidity (dLP tokens) worth at least 5% of their deposit value. This ensures that users benefiting from the protocol also provide liquidity for the RDNT token. The locked dLP tokens vest over time and generate additional yield from protocol fees. This model reduced mercenary capital that was farming and dumping RDNT tokens but added complexity for users who must manage both lending positions and LP positions." },
        { id: "security-concerns", title: "Security History", content: "Radiant Capital suffered a major exploit in October 2024 where attackers compromised multiple private keys of the multisig controlling the protocol, resulting in significant fund losses. This highlighted the risks of multisig-based governance and cross-chain protocol complexity. The team has since implemented improved security measures including hardware security modules, increased multisig thresholds, and additional monitoring systems. Users should be aware of the elevated risk profile when evaluating Radiant compared to more battle-tested single-chain protocols." },
        { id: "yields", title: "Yield Opportunities", content: "Radiant offers yields from multiple sources: base lending rates from supply-demand dynamics, RDNT token emissions for qualifying users who meet dLP requirements, and platform fee distributions to dLP lockers. The combination can produce competitive yields, especially on popular assets like USDC, ETH, and WBTC. However, a significant portion of the yield comes from RDNT emissions, which are subject to token price volatility and inflation. Net real yield (excluding emissions) is generally lower than headline numbers suggest." },
        { id: "governance", title: "RDNT Token & Governance", content: "RDNT is the native governance and utility token. Beyond governance voting, RDNT is essential for participating in dLP locking to qualify for emissions. The token has a capped supply with emissions distributed over several years. Governance proposals cover protocol parameters, chain expansion, fee structures, and treasury management. The transition to V2 tokenomics improved sustainability but also created a more complex system that requires active management from participants to maximize returns." },
      ]}
      fees={{ "Supply Rate": "Variable based on utilization", "Borrow Rate": "Variable based on utilization", "Protocol Fee": "Portion of interest goes to dLP lockers", "Flash Loan Fee": "0.05%", "Cross-Chain Fee": "LayerZero messaging fees apply" }}
      security={["LayerZero cross-chain messaging security", "Improved multisig controls post-exploit", "Multiple smart contract audits", "Hardware security modules for key management", "Real-time monitoring and alerting", "Bug bounty program"]}
      features={["Omnichain lending across Arbitrum, BSC, and Ethereum", "Cross-chain collateral and borrowing", "Dynamic liquidity provisioning (dLP) rewards", "Multi-source yield generation", "RDNT governance token", "Flash loan support"]}
      faqs={[
        { question: "Is Radiant safe to use after the exploit?", answer: "Radiant has implemented significant security improvements since the October 2024 exploit, including enhanced multisig controls and monitoring. However, the exploit demonstrated real risks. Users should consider the elevated risk profile and only deposit funds they can afford to lose." },
        { question: "Do I need to lock dLP to earn on Radiant?", answer: "You can earn base lending rates without dLP, but RDNT emissions are only available to users who lock dLP tokens worth at least 5% of their deposit value. Without dLP, yields are comparable to but generally not better than other lending protocols." },
        { question: "How does cross-chain lending work?", answer: "Radiant uses LayerZero to sync positions across chains. You deposit collateral on one chain and can borrow on another. The protocol coordinates this through cross-chain messages, so you do not need to manually bridge assets." },
      ]}
      relatedReviews={[{ name: "Aave", slug: "/defi-lending/reviews/aave" }, { name: "Spark Protocol", slug: "/defi-lending/reviews/spark" }]}
      relatedGuides={[{ title: "DeFi Risks Guide", href: "/defi-lending/learn/lending-risks-guide" }, { title: "How to Earn Yield", href: "/defi-lending/learn/how-to-earn-yield" }]}
    />
  );
}
