import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How Crypto Loans Work (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to how crypto-backed loans work. Learn about collateral, LTV ratios, interest rates, and the borrowing process across CeFi and DeFi platforms.",
  keywords: ["how crypto loans work", "crypto backed loans", "crypto lending guide", "borrow against crypto"],
};

export default function HowCryptoLoansWorkPage() {
  return (
    <LearnPageLayout
      title="How Crypto Loans Work"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="11 min"
      intro="Crypto loans allow you to borrow cash or stablecoins by using your cryptocurrency as collateral, letting you access liquidity without selling your holdings. Whether through centralized platforms like Nexo or decentralized protocols like Aave, the core mechanics involve depositing collateral, receiving a loan, paying interest, and eventually repaying to reclaim your assets. This guide covers the complete process from application to repayment."
      toc={[
        { id: "basics", title: "basics", level: 2 },
        { id: "crypto-loan-basics", title: "Crypto Loan Basics", level: 2 },
        { id: "collateral-process", title: "collateral-process", level: 2 },
        { id: "the-collateral-process", title: "The Collateral Process", level: 2 },
        { id: "cefi-vs-defi", title: "cefi-vs-defi", level: 2 },
        { id: "cefi-vs-defi-loans", title: "CeFi vs DeFi Loans", level: 2 },
        { id: "repayment", title: "repayment", level: 2 },
        { id: "repayment-and-liquidation", title: "Repayment and Liquidation", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 }
      ]}
      faqs={[
        { question: "Do crypto loans affect my credit score?", answer: "No. Crypto-backed loans do not involve credit checks and are not reported to credit bureaus. Your creditworthiness is determined solely by the value of your collateral, not your credit history." },
        { question: "What happens if my crypto increases in value?", answer: "If your collateral appreciates, your loan-to-value ratio improves, giving you more safety margin. Some platforms allow you to withdraw excess collateral or borrow additional funds against the increased value." },
      ]}
      relatedArticles={[
        { title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained", category: "Crypto Loans" },
        { title: "Liquidation Risk", href: "/crypto-loans/learn/liquidation-risk", category: "Crypto Loans" },
        { title: "CeFi vs DeFi Lending", href: "/crypto-loans/learn/cefi-vs-defi-lending", category: "Crypto Loans" },
      ]}
    >
      <section id="basics">
        <h2>Crypto Loan Basics</h2>
        <p>A crypto loan works similarly to a traditional secured loan, except your cryptocurrency serves as collateral instead of a house or car. You deposit crypto assets into a lending platform, and in return receive a loan in fiat currency or stablecoins. The loan amount is a percentage of your collateral value, determined by the loan-to-value ratio. For example, with a 50% LTV and $10,000 in Bitcoin collateral, you can borrow up to $5,000. You pay interest on the borrowed amount, either continuously or on a schedule, and when you repay the loan plus interest, your collateral is returned. The key advantage is maintaining exposure to your crypto's price appreciation while accessing liquidity for expenses, investments, or other purposes.</p>
      </section>
      <section id="collateral-process">
        <h2>The Collateral Process</h2>
        <p>When you take a crypto loan, your collateral is locked in the platform's custody (CeFi) or a smart contract (DeFi) for the duration of the loan. The platform continuously monitors the value of your collateral relative to your loan amount. If the collateral value drops and your LTV ratio exceeds the platform's threshold, you receive a margin call requiring you to add more collateral or partially repay the loan. If you fail to act, the platform liquidates enough collateral to bring the LTV back to a safe level. Different platforms accept different collateral types, with Bitcoin and Ethereum being universally accepted and altcoins having more limited availability and typically requiring higher overcollateralization due to their volatility.</p>
      </section>
      <section id="cefi-vs-defi">
        <h2>CeFi vs DeFi Loans</h2>
        <p>Centralized finance platforms like Nexo, Ledn, and Unchained operate like traditional lenders. You create an account, complete KYC verification, deposit collateral, and receive your loan. These platforms offer customer support, fiat disbursement options, and familiar interfaces. Decentralized finance protocols like Aave, Compound, and MakerDAO operate through smart contracts. You connect a wallet, deposit collateral, and borrow instantly without identity verification. DeFi loans are typically more transparent and offer self-custody, while CeFi loans provide customer support and fiat integration. The choice depends on your priorities regarding convenience, privacy, custody, and trust assumptions.</p>
      </section>
      <section id="repayment">
        <h2>Repayment and Liquidation</h2>
        <p>Repayment terms vary by platform. CeFi platforms often offer structured repayment schedules with monthly payments, while DeFi protocols typically allow open-ended loans where you repay whenever you choose as long as your collateral ratio remains healthy. Interest accrues continuously in most cases. Partial repayment is usually allowed and reduces your outstanding balance and improves your LTV ratio. If you fail to maintain your collateral ratio and a margin call goes unaddressed, liquidation occurs. In CeFi, the platform sells your collateral on the market. In DeFi, liquidator bots automatically repay your debt and claim your collateral at a discount. Liquidation penalties range from 5% to 15%, making prevention a priority.</p>
      </section>
      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>To get your first crypto loan, start by deciding between CeFi and DeFi based on your comfort level and needs. For CeFi, choose a reputable platform with proof of reserves, create an account, complete KYC, and deposit collateral. For DeFi, set up a non-custodial wallet like MetaMask, acquire the collateral asset, connect to a lending protocol, and deposit. In both cases, borrow conservatively well below the maximum LTV to maintain a safety buffer against market volatility. Start with a small loan to understand the mechanics before committing significant capital. Monitor your position regularly, especially during volatile markets, and have a plan for adding collateral or repaying if your LTV approaches dangerous levels.</p>
      </section>
    </LearnPageLayout>
  );
}
