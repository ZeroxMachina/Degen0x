import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = { title: "How to Insure Your Crypto: Step-by-Step Guide (2026)", description: "Step-by-step guide to insuring your cryptocurrency. Learn how to assess your risks, choose coverage, buy insurance, and manage your policies." };

export default function HowToInsureYourCryptoPage() {
  return (
    <LearnPageLayout title="How to Insure Your Crypto" categoryName="Insurance" categorySlug="insurance" readTime="9 min"
      intro="Protecting your cryptocurrency with insurance is becoming increasingly important as the ecosystem grows and attacks become more sophisticated. This step-by-step guide walks you through the entire process, from assessing your risk exposure to purchasing coverage and managing your policies."
      toc={[{ id: "assess-risk", title: "Assess Your Risk Exposure", level: 2 }, { id: "choose-coverage", title: "Choose Your Coverage", level: 2 }, { id: "buy-cover", title: "Buy Insurance Cover", level: 2 }, { id: "manage-policies", title: "Manage Your Policies", level: 2 }]}
      faqs={[
        { question: "How much of my portfolio should I insure?", answer: "Focus on insuring your largest positions and those in higher-risk protocols. As a guideline, if losing the position would significantly impact your finances, it is worth insuring. For small positions, the premium cost may exceed the expected benefit." },
        { question: "Can I get insurance for centralized exchange deposits?", answer: "Yes, some providers offer exchange cover that protects against exchange hacks or insolvency. However, coverage options for centralized platforms are more limited than DeFi protocol cover. Nexus Mutual and InsurAce both offer some exchange-related coverage." },
        { question: "What happens if I withdraw my funds during the cover period?", answer: "Your cover remains active until expiration regardless of your position changes. If you withdraw funds from a covered protocol, the cover continues but you would not have a valid claim since you no longer have funds at risk. Some providers allow early termination, but refunds are uncommon." },
      ]}
      relatedArticles={[{ title: "What Is Crypto Insurance?", href: "/insurance/learn/what-is-crypto-insurance", category: "Insurance" }, { title: "Best Crypto Insurance", href: "/insurance/best", category: "Insurance" }]}
    >
      <h2 id="assess-risk">Step 1: Assess Your Risk Exposure</h2>
      <p>Before buying any insurance, catalog all your crypto positions and evaluate the risk of each. List every protocol where you have deposited funds, including lending platforms, liquidity pools, yield aggregators, and staking services. For each position, note the amount deposited, the protocol's audit history, how long the protocol has been live, and the TVL (larger protocols with more TVL have been more battle-tested). Also consider centralized exchange balances and stablecoin holdings. Prioritize insuring positions where: the amount is significant relative to your portfolio, the protocol is newer or less audited, you cannot afford to lose the funds, or the protocol has had previous security incidents. This prioritization helps you allocate your insurance budget where it matters most.</p>

      <h2 id="choose-coverage">Step 2: Choose Your Coverage Type</h2>
      <p>Match your risks to the right insurance products. For DeFi lending and liquidity positions, smart contract cover or protocol cover is appropriate. For exchange deposits, look for exchange cover products. For stablecoin positions, depeg cover provides targeted protection. If you have positions across multiple protocols, consider portfolio bundling products that offer discounted rates for combining multiple covers. Compare at least two or three insurance providers for each coverage type. Key comparison factors include premium cost, covered events (read the fine print), claim assessment method (discretionary vs. parametric), provider capital pool depth, and historical claim payout record. Providers like Nexus Mutual, InsurAce, and Neptune Mutual each have different strengths.</p>

      <h2 id="buy-cover">Step 3: Buy Insurance Cover</h2>
      <p>Once you have selected a provider and coverage type, the purchase process is typically simple. Connect your wallet to the insurance protocol's interface. Select the specific protocol or risk you want to insure. Enter your desired coverage amount, which should match or slightly exceed your deposit value to account for accrued interest. Choose the coverage duration, considering that longer periods often have slightly discounted rates per day. Review the total premium cost and covered events before confirming. Pay the premium using the accepted payment tokens (usually ETH, USDC, or DAI). After purchase, verify that your cover is active in your dashboard. Save your cover details, including the cover ID, covered protocol, amount, start date, and expiration date. Some providers issue cover as NFTs that appear in your wallet.</p>

      <h2 id="manage-policies">Step 4: Manage Your Policies</h2>
      <p>Active policy management is essential for maintaining effective coverage. Set calendar reminders for policy expiration dates so you can renew before gaps in coverage occur. Monitor your covered positions to ensure coverage amounts still match your deposit values, especially if your position has grown through accrued interest or rewards. Keep transaction records of your deposits and cover purchases for claim documentation. If a covered incident occurs, file your claim promptly with evidence of your position and loss. Review your coverage periodically as you add or remove DeFi positions. Consider rotating between insurance providers at renewal time to evaluate new options and pricing changes. Stay informed about your insurance provider's financial health by monitoring their capital pool ratios and community discussions.</p>
    </LearnPageLayout>
  );
}
