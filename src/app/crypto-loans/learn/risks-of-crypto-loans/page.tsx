import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Risks of Crypto Loans (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand the key risks of crypto-backed loans. From liquidation and counterparty risk to regulatory and smart contract dangers, learn how to protect yourself.",
  keywords: ["crypto loan risks", "risks of borrowing crypto", "crypto lending risks", "loan liquidation risk"],
};

export default function RisksOfCryptoLoansPage() {
  return (
    <LearnPageLayout
      title="Risks of Crypto Loans"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="10 min"
      intro="Crypto loans offer unique benefits but also carry risks that differ from traditional borrowing. From the volatility-driven risk of liquidation to platform-specific counterparty dangers, understanding these risks thoroughly is essential before using your crypto as collateral. This guide covers every major risk category and practical mitigation strategies."
      toc={[
        { id: "liquidation-risk", title: "liquidation-risk", level: 2 },
        { id: "liquidation-risk", title: "Liquidation Risk", level: 2 },
        { id: "counterparty-risk", title: "counterparty-risk", level: 2 },
        { id: "counterparty-risk", title: "Counterparty Risk", level: 2 },
        { id: "smart-contract-risk", title: "smart-contract-risk", level: 2 },
        { id: "smart-contract-risk", title: "Smart Contract Risk", level: 2 },
        { id: "market-risk", title: "market-risk", level: 2 },
        { id: "market-and-regulatory-risk", title: "Market and Regulatory Risk", level: 2 },
        { id: "mitigation", title: "mitigation", level: 2 },
        { id: "risk-mitigation-strategies", title: "Risk Mitigation Strategies", level: 2 }
      ]}
      faqs={[
        { question: "Can I lose all my collateral?", answer: "Yes, in extreme cases. If a sharp price drop triggers liquidation, you may lose most or all of your collateral depending on the liquidation penalty and how quickly prices moved. On CeFi platforms, insolvency can also lead to total loss as seen with Celsius." },
        { question: "Is DeFi lending safer than CeFi?", answer: "DeFi eliminates counterparty insolvency risk but introduces smart contract risk. CeFi provides customer support but requires trusting the platform with your assets. Neither is categorically safer; they have different risk profiles that should be evaluated based on your priorities." },
      ]}
      relatedArticles={[
        { title: "Liquidation Risk", href: "/crypto-loans/learn/liquidation-risk", category: "Crypto Loans" },
        { title: "Loan Risks Guide", href: "/crypto-loans/learn/loan-risks-guide", category: "Crypto Loans" },
      ]}
    >
      <section id="liquidation-risk">
        <h2>Liquidation Risk</h2>
        <p>Liquidation is the most common and direct risk of crypto loans. When your collateral value drops below the required threshold, all or part of your collateral is sold to repay the debt. Liquidation penalties typically add 5-15% on top of the loss, making the total cost significantly higher than the price decline alone. During rapid market crashes, liquidation can occur before you have time to react, especially in DeFi where it is automated and instant. Flash crashes, oracle delays, and network congestion can compound the problem by causing liquidation at prices worse than the actual market. To mitigate this risk, maintain a conservative LTV well below the maximum, set up price alerts, and use automated position management tools when available.</p>
      </section>
      <section id="counterparty-risk">
        <h2>Counterparty Risk</h2>
        <p>CeFi lending platforms hold your collateral in custody, creating counterparty risk. If the platform becomes insolvent, mismanages funds, or experiences a security breach, your collateral may be lost. The collapses of Celsius, BlockFi, and Voyager demonstrated that this risk is not theoretical. Billions in user funds were locked in bankruptcy proceedings with partial or no recovery. Even platforms that appear healthy today could face issues from undisclosed trading losses, regulatory actions, or mismatched lending activities. Mitigate counterparty risk by using platforms with proof of reserves, regulatory oversight, and insurance coverage. Diversify across multiple platforms and consider DeFi alternatives where smart contracts replace counterparty trust.</p>
      </section>
      <section id="smart-contract-risk">
        <h2>Smart Contract Risk</h2>
        <p>DeFi lending protocols operate through smart contracts that can contain vulnerabilities despite auditing. Exploits have resulted in hundreds of millions of dollars in losses across the DeFi ecosystem. Even well-audited protocols are not immune, as new attack vectors emerge and complex interactions between protocols can create unexpected vulnerabilities. Oracle manipulation is a particularly dangerous attack vector for lending protocols, where manipulated price feeds can cause improper liquidations or allow borrowers to drain pools. Mitigate smart contract risk by using established protocols with long track records, multiple independent audits, and active bug bounty programs. Consider DeFi insurance from providers like Nexus Mutual for larger positions.</p>
      </section>
      <section id="market-risk">
        <h2>Market and Regulatory Risk</h2>
        <p>Crypto market volatility creates inherent risk for any collateral-based position. Correlations between crypto assets tend to increase during market stress, meaning diversified collateral baskets may not provide as much protection during the worst conditions. Interest rate risk applies when variable rates spike during high-demand periods, increasing your borrowing costs unexpectedly. Regulatory risk is evolving as governments worldwide develop crypto lending frameworks. New regulations could affect platform operations, require additional KYC, impose lending restrictions, or change the tax treatment of crypto loans. Stablecoin risk affects borrowers who borrow stablecoins, as depeg events can increase the effective cost of repayment.</p>
      </section>
      <section id="mitigation">
        <h2>Risk Mitigation Strategies</h2>
        <p>Comprehensive risk management combines multiple strategies. Never borrow the maximum allowed, maintaining at least 20-30% buffer below the liquidation threshold. Diversify across platforms and protocols to limit exposure to any single point of failure. Use monitoring tools and price alerts to stay informed about your position health. Keep reserve capital available to add collateral during downturns. Choose collateral assets based on their volatility and your ability to monitor positions. For large positions, purchase DeFi insurance against smart contract risk. Regularly review and stress-test your positions against historical worst-case scenarios. Have a clear exit plan for every position before entering it. The cost of these precautions is small compared to the potential losses from unmanaged risk.</p>
      </section>
    </LearnPageLayout>
  );
}
