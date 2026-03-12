import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Nexo vs Celsius (${CURRENT_YEAR}) | degen0x`,
  description: "Compare Nexo and Celsius crypto lending platforms. Understand what happened to Celsius and why Nexo remains operational. CeFi lending risk analysis.",
};

export default function NexoVsCelsiusPage() {
  return (
    <LearnPageLayout
      title="Nexo vs Celsius"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min read"
      intro="Nexo and Celsius were once the two leading CeFi crypto lending platforms. After Celsius filed for bankruptcy in July 2022, the landscape changed dramatically. This comparison examines what happened to Celsius, how Nexo survived, and what lessons CeFi borrowers should take away when evaluating centralized lending platforms."
      toc={[
        { id: "celsius-collapse", title: "celsius-collapse", level: 2 },
        { id: "what-happened-to-celsius", title: "What Happened to Celsius", level: 2 },
        { id: "nexo-survival", title: "nexo-survival", level: 2 },
        { id: "how-nexo-survived", title: "How Nexo Survived", level: 2 },
        { id: "cefi-risks", title: "cefi-risks", level: 2 },
        { id: "cefi-risk-lessons", title: "CeFi Risk Lessons", level: 2 },
        { id: "alternatives", title: "alternatives", level: 2 },
        { id: "current-alternatives", title: "Current Alternatives", level: 2 }
      ]}
      faqs={[
        { question: "Is Celsius still operating?", answer: "No. Celsius filed for bankruptcy in July 2022 and ceased all operations. Some creditors received partial distributions through the bankruptcy process. Celsius has since been restructured, but the original lending platform no longer exists." },
        { question: "Is Nexo safe to use?", answer: "Nexo has maintained operations and solvency throughout the crypto downturn. It publishes real-time attestations, maintains insurance coverage, and operates under regulatory oversight. However, all CeFi platforms carry counterparty risk. Diversify across platforms and consider self-custody for large holdings." },
      ]}
      relatedArticles={[
        { title: "Nexo Review", href: "/crypto-loans/reviews/nexo", category: "Crypto Loans" },
        { title: "CeFi vs DeFi Lending", href: "/crypto-loans/learn/cefi-vs-defi-lending", category: "Crypto Loans" },
        { title: "Loan Risks Guide", href: "/crypto-loans/learn/loan-risks-guide", category: "Crypto Loans" },
      ]}
    >
      <h2 id="celsius-collapse">What Happened to Celsius</h2>
      <p>Celsius collapsed due to risky lending practices, poor risk management, and insufficient reserves. The platform lent out customer deposits to institutional borrowers and invested in illiquid DeFi strategies. When the crypto market crashed in mid-2022, Celsius could not meet withdrawal demands and froze customer accounts before filing for bankruptcy. Users lost billions in deposited crypto assets.</p>

      <h2 id="nexo-survival">How Nexo Survived</h2>
      <p>Nexo differentiated itself through conservative risk management, maintaining overcollateralized lending practices and avoiding the risky yield strategies that sank Celsius. Nexo publishes real-time attestations by Armanino, maintains $775M in insurance, and operates under multiple regulatory licenses. The platform also maintained adequate reserves throughout the 2022 downturn and did not freeze withdrawals.</p>

      <h2 id="cefi-risks">CeFi Risk Lessons</h2>
      <p>The Celsius collapse taught the crypto industry several critical lessons. Never deposit more than you can afford to lose on any CeFi platform. Look for proof-of-reserves and regular attestations. Be wary of unsustainably high yields, which often indicate risky practices. Diversify across platforms and keep large holdings in self-custody. The promise of high yields came with hidden risks that were not disclosed to users.</p>

      <h2 id="alternatives">Current Alternatives</h2>
      <p>For users who previously used Celsius, the main alternatives are Nexo for a CeFi experience, or DeFi protocols like Aave and Compound for transparent, self-custodial lending. DeFi eliminates counterparty risk since smart contracts manage funds transparently. Many former CeFi users have migrated to DeFi, accepting the steeper learning curve in exchange for verifiable security and self-custody.</p>
    </LearnPageLayout>
  );
}
