import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Parametric Crypto Insurance Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how parametric insurance works in crypto. Automated payouts based on predefined conditions, no claims process needed.",
};

export default function ParametricInsurancePage() {
  return (
    <LearnPageLayout title="Parametric Crypto Insurance Explained" categoryName="Crypto Insurance" categorySlug="insurance" readTime="8 min read"
      intro="Parametric insurance is a revolutionary approach to crypto protection that pays out automatically when predefined conditions are met, without requiring a traditional claims process. Instead of proving losses and waiting for assessment, parametric policies use on-chain data and oracles to trigger instant payouts when specific events occur, such as a stablecoin depeg, smart contract exploit, or oracle failure."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-parametric-insurance-works", title: "How Parametric Insurance Works", level: 2 },
        { id: "vs-traditional", title: "vs-traditional", level: 2 },
        { id: "parametric-vs-traditional-insurance", title: "Parametric vs Traditional Insurance", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "crypto-use-cases", title: "Crypto Use Cases", level: 2 },
        { id: "limitations", title: "limitations", level: 2 },
        { id: "limitations-and-considerations", title: "Limitations and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is parametric insurance?", answer: "Parametric insurance pays out automatically when a predefined trigger condition is met, regardless of actual loss amount. For example, a policy might pay if ETH drops more than 30% in 24 hours or if a stablecoin depegs below $0.95. The payout is predetermined and automatic." },
        { question: "How are payouts triggered?", answer: "Payouts are triggered by on-chain data verified through oracles. When the monitored parameter crosses the trigger threshold, the smart contract automatically executes the payout. No claims filing, no human assessment, no waiting period." },
        { question: "What is basis risk?", answer: "Basis risk is the gap between the parametric trigger and your actual loss. You might suffer a loss that doesn't trigger the payout, or the payout might not fully cover your actual loss. Parametric insurance trades precision for speed and certainty." },
      ]}
      relatedArticles={[
        { title: "Stablecoin Depeg Insurance", href: "/insurance/learn/stablecoin-depeg-insurance", category: "Insurance" },
        { title: "Smart Contract Cover", href: "/insurance/learn/smart-contract-cover", category: "Insurance" },
        { title: "Insurance Cost Analysis", href: "/insurance/learn/insurance-cost-analysis", category: "Insurance" },
      ]}
    >
      <h2 id="how-it-works">How Parametric Insurance Works</h2>
      <p>Parametric insurance operates on a simple trigger-payout mechanism encoded in smart contracts. The policy defines: a monitored parameter (such as a token price, protocol TVL, or oracle deviation), a trigger threshold (the specific value that activates the payout), and a payout amount or formula. When the monitored parameter crosses the threshold as reported by an oracle, the smart contract automatically releases the payout to the policyholder. No human intervention is needed. The entire process is transparent and verifiable on-chain. This automation eliminates the lengthy claims process that plagues traditional insurance, where policyholders must prove their loss, wait for assessment, and potentially dispute denied claims. In DeFi, where losses can occur in seconds, speed of payout is critical.</p>

      <h2 id="vs-traditional">Parametric vs Traditional Insurance</h2>
      <p>Traditional crypto insurance (like Nexus Mutual smart contract cover) requires policyholders to file a claim, provide evidence of loss, and wait for community assessment or claims committee review. This process can take weeks or months. Parametric insurance eliminates this entirely with automatic payouts. The trade-off is basis risk: parametric policies may not perfectly match your actual loss. A stablecoin depeg policy might trigger at $0.95 and pay a fixed amount, but your actual loss depends on when and how much you held. Traditional insurance aims to cover your specific loss amount (indemnity principle), while parametric insurance pays a predetermined amount regardless of individual circumstances. For many DeFi users, the speed and certainty of parametric payouts outweigh the imprecision of basis risk.</p>

      <h2 id="use-cases">Crypto Use Cases</h2>
      <p>Stablecoin depeg protection is one of the most natural parametric applications. A policy pays out if USDC, USDT, or DAI drops below a specified threshold for a defined period. Oracle failure protection triggers if a Chainlink price feed deviates from exchange prices by more than a set percentage, which could indicate an oracle attack. Gas price protection pays out if Ethereum gas exceeds a threshold, compensating for failed or expensive transactions during network congestion. Liquidation protection triggers if a specific asset price drops below a level that would liquidate your position. Slashing protection for validators pays if the validator is slashed. Each use case maps a specific measurable on-chain event to an automatic payout, creating targeted protection for specific risks.</p>

      <h2 id="limitations">Limitations and Considerations</h2>
      <p>Basis risk is the fundamental limitation: the trigger condition may not perfectly correlate with your actual loss. You might lose money without triggering the payout, or receive a payout that does not cover your full loss. Oracle dependency means the insurance is only as reliable as the oracle reporting the trigger parameter. If the oracle fails or is manipulated, the payout may not function correctly. Liquidity risk exists if the insurance pool does not have sufficient funds to cover all triggered payouts during a widespread event. Cost must be evaluated against the probability and severity of the risk. Smart contract risk applies to the insurance protocol itself. Despite these limitations, parametric insurance represents a significant improvement in DeFi risk management, providing fast, automated, and transparent protection that complements other risk mitigation strategies.</p>
    </LearnPageLayout>
  );
}
