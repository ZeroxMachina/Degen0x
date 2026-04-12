import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { Product } from "@/lib/types";
import { CURRENT_YEAR } from "@/lib/constants";

const product: Product = {
  name: "Risk Harbor",
  slug: "risk-harbor",
  rating: 3.6,
  description: "Risk Harbor is an algorithmic DeFi insurance protocol that uses automated, trustless claim assessment for stablecoin depegging and yield-bearing asset",
  pros: ["Automated trustless claim payouts", "No subjective human claim assessment", "Instant claim settlement when triggered", "Stablecoin depeg specialization", "No KYC requirement"],
  cons: ["Very limited coverage types", "Small capital pool", "Only covers specific depeg scenarios", "Limited protocol adoption", "Cannot handle nuanced exploit claims"],
  fees: "2-7% annually",
  bestFor: "Users seeking automated stablecoin depeg protection",
  affiliateUrl: "#",
  category: "insurance",
};

export const metadata: Metadata = {
  title: `Risk Harbor Review (${CURRENT_YEAR}) | degen0x`,
  description: "In-depth Risk Harbor review covering algorithmic insurance, automated claims, stablecoin depeg coverage, and how it compares to discretionary insurance protocols.",
  alternates: { canonical: "/insurance/reviews/risk-harbor" }};

export default function RiskHarborReviewPage() {
  return (
    <ReviewPage
      product={product}
      categoryName="Insurance"
      categorySlug="insurance"
      overview="Risk Harbor represents a fundamentally different approach to DeFi insurance through algorithmic, trustless claim assessment. Instead of relying on community votes or advisory boards to decide whether a claim is valid, Risk Harbor uses smart contract-based triggers that automatically execute payouts when predefined conditions are met. The protocol specializes in protecting against stablecoin depegging and yield-bearing asset failures, offering instant settlement without human judgment. While this approach provides speed and objectivity, it is limited to scenarios that can be defined in quantitative terms, making it unsuitable for complex exploit claims that require nuanced assessment."
      sections={[
        { id: "algorithmic-claims", title: "Algorithmic Claim Assessment", content: "Risk Harbor's defining feature is its removal of human judgment from the claims process. When you purchase coverage, the conditions for payout are defined in the smart contract at the time of purchase. If a covered stablecoin trades below a specified threshold, or if a yield-bearing token loses value beyond a defined boundary, the smart contract automatically processes the claim and transfers the payout. There is no voting, no waiting period for assessment, and no risk of subjective denial. The entire process is trustless and transparent, executing exactly as coded." },
        { id: "depeg-coverage", title: "Stablecoin Depeg Coverage", content: "Risk Harbor specializes in stablecoin depeg protection. Cover buyers deposit their stablecoins and receive protection against the stablecoin trading below a specified price (typically $0.95 or $0.90). If the depeg condition is met, the cover buyer can swap their depegged tokens for the payout token at the pre-agreed rate, effectively eliminating their loss. This is particularly valuable for users holding large stablecoin positions in lending protocols or liquidity pools where a depeg could result in significant losses. Coverage has been available for assets like UST (before its collapse), USDC, and other stablecoins." },
        { id: "underwriting", title: "Underwriting Model", content: "Risk Harbor underwriters deposit capital to back coverage policies. In exchange, they earn premiums from cover buyers. If no depeg event occurs, underwriters keep the premiums as profit plus get their capital back. If a depeg occurs, underwriters receive the depegged tokens while cover buyers receive the payout. This creates a binary outcome where underwriters are effectively betting that the stablecoin maintains its peg. The model attracts underwriters who have conviction in stablecoin stability and want to earn yield on that conviction." },
        { id: "limitations", title: "Coverage Limitations", content: "Risk Harbor's algorithmic approach has inherent limitations. It can only cover risks that are quantifiable and measurable on-chain, like price depegging. Complex DeFi exploits involving smart contract bugs, oracle manipulation, or governance attacks cannot be reduced to simple price thresholds and therefore cannot be covered. The protocol also cannot cover situations where losses occur but the measured metric (like a stablecoin price) recovers before the trigger condition is met. Users needing comprehensive DeFi exploit coverage should supplement Risk Harbor with discretionary insurance from protocols like Nexus Mutual." },
        { id: "technology", title: "Technical Architecture", content: "Risk Harbor is built on a series of smart contracts that define coverage terms, hold collateral from both cover buyers and underwriters, monitor trigger conditions through oracle feeds, and execute settlements automatically. The contracts are designed to be minimal and auditable, reducing smart contract risk in the insurance protocol itself. The oracle integration is critical since incorrect price feeds could trigger false payouts or miss legitimate depeg events. Risk Harbor uses established oracle solutions and defines specific conditions including duration thresholds to prevent flash manipulation." },
      ]}
      fees={{ "Cover Premium": "2-7% annually (varies by asset)", "Claim Settlement": "Automated; no fee", "Underwriting": "No fee; earn premiums", "Withdrawal": "Standard gas fees", "Protocol Fee": "Percentage of premiums" }}
      security={["Smart contracts audited by security firms", "Automated trustless execution", "Oracle-dependent trigger verification", "Duration thresholds prevent flash manipulation", "Minimal contract design for auditability", "No admin keys for claim processing"]}
      features={["Automated algorithmic claim assessment", "Instant trustless settlement", "Stablecoin depeg specialization", "Binary underwriting model", "No KYC requirement", "On-chain verifiable coverage terms"]}
      faqs={[
        { question: "How fast are Risk Harbor claim payouts?", answer: "Risk Harbor claims are settled instantly when the trigger condition is met. There is no waiting period for human assessment. As soon as the oracle confirms the depeg threshold has been reached for the required duration, the smart contract executes the payout." },
        { question: "Can Risk Harbor cover smart contract exploits?", answer: "No. Risk Harbor's algorithmic model can only cover risks with quantifiable on-chain triggers, like price depegging. Smart contract exploits require nuanced human assessment and are better covered by discretionary protocols like Nexus Mutual." },
        { question: "What happens if the stablecoin briefly depegs and recovers?", answer: "Risk Harbor typically requires the depeg condition to persist for a minimum duration to prevent triggers from flash crashes or brief volatility. The specific duration threshold is defined in each coverage contract and should be reviewed before purchasing." },
      ]}
      relatedReviews={[{ name: "Nexus Mutual", slug: "/insurance/reviews/nexus-mutual" }, { name: "InsurAce", slug: "/insurance/reviews/insurace" }]}
      relatedGuides={[{ title: "Insurance Protocols Compared", href: "/insurance/learn/insurance-protocols-compared" }, { title: "Complete Crypto Insurance Guide", href: "/insurance/learn/crypto-insurance-guide" }]}
    />
  );
}
