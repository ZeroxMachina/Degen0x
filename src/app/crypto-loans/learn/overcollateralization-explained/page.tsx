import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Overcollateralization Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Understand how overcollateralization works in crypto lending, why it's required, optimal ratios, and how it protects both borrowers and lenders.",
};

export default function OvercollateralizationExplainedPage() {
  return (
    <LearnPageLayout
      title="Overcollateralization Explained"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min read"
      intro="Overcollateralization is the foundation of crypto lending security. It requires borrowers to deposit collateral worth more than the loan amount, creating a buffer that protects lenders against price volatility. Understanding how overcollateralization works is essential for anyone borrowing or lending in crypto markets."
      toc={[
        { id: "what-is-it", title: "what-is-it", level: 2 },
        { id: "what-is-overcollateralization", title: "What Is Overcollateralization", level: 2 },
        { id: "why-required", title: "why-required", level: 2 },
        { id: "why-it-is-required", title: "Why It Is Required", level: 2 },
        { id: "ratios", title: "ratios", level: 2 },
        { id: "common-ratios-and-thresholds", title: "Common Ratios and Thresholds", level: 2 },
        { id: "managing", title: "managing", level: 2 },
        { id: "managing-your-collateral", title: "Managing Your Collateral", level: 2 }
      ]}
      faqs={[
        { question: "Why can't I borrow the full value of my collateral?", answer: "Overcollateralization protects against price volatility. If you borrowed 100% of your collateral value and prices dropped even slightly, the loan would be undercollateralized. The buffer ensures lenders can be repaid even during market downturns." },
        { question: "What happens if my collateral ratio drops too low?", answer: "If your collateral value falls below the liquidation threshold (typically 110-150% of loan value), your collateral is automatically sold to repay the loan. In DeFi this happens instantly via smart contracts. In CeFi you may receive a margin call first." },
      ]}
      relatedArticles={[
        { title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained", category: "Crypto Loans" },
        { title: "Liquidation Risk Guide", href: "/crypto-loans/learn/liquidation-risk", category: "Crypto Loans" },
        { title: "Best Low-LTV Loans", href: "/crypto-loans/best/low-ltv", category: "Crypto Loans" },
      ]}
    >
      <h2 id="what-is-it">What Is Overcollateralization</h2>
      <p>Overcollateralization means depositing collateral worth more than your loan. If you want to borrow $5,000, you might need to deposit $10,000 worth of crypto (200% collateralization ratio, or 50% LTV). The excess collateral acts as a safety margin against price fluctuations. This is fundamentally different from traditional lending where creditworthiness substitutes for excess collateral.</p>

      <h2 id="why-required">Why It Is Required</h2>
      <p>Crypto assets are highly volatile. A 30-50% price drop can happen within days or even hours. Without overcollateralization, lenders would face massive losses during downturns. The collateral buffer ensures that even after a significant price decline, enough value remains to repay the loan. This model also eliminates the need for credit checks since the collateral itself guarantees repayment.</p>

      <h2 id="ratios">Common Ratios and Thresholds</h2>
      <p>Different platforms and assets require different ratios. On Aave, ETH has a maximum LTV of 82.5% (121% collateralization), while volatile altcoins may require 150-200% collateralization. MakerDAO requires minimum 150% collateralization for ETH vaults. CeFi platforms vary: Nexo offers up to 90% LTV (111% collateralization) while others require 50% LTV (200% collateralization). Liquidation typically triggers at 5-15% above the minimum ratio.</p>

      <h2 id="managing">Managing Your Collateral</h2>
      <p>Monitor your collateral ratio regularly, especially during volatile markets. Set up price alerts at levels where your ratio approaches the liquidation threshold. Keep additional capital ready to add collateral if needed. Use DeFi tools like DeFi Saver to automate collateral management. Start with conservative ratios (200%+ collateralization) and only increase borrowing as you become comfortable managing the risk.</p>
    </LearnPageLayout>
  );
}
