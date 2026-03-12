import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Collateralization Ratios Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand collateralization ratios in DeFi lending. Learn about LTV, health factors, collateral types, and how to manage your borrowing position safely.",
  keywords: ["collateralization ratio", "ltv defi", "health factor", "defi collateral"],
};

export default function CollateralizationRatiosPage() {
  return (
    <LearnPageLayout
      title="Collateralization Ratios in DeFi Lending"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="9 min"
      intro="Collateralization ratios are the foundation of DeFi lending security. They determine how much you can borrow against your deposited assets and when your position becomes eligible for liquidation. Understanding LTV ratios, health factors, and collateral management is essential for anyone borrowing in DeFi to avoid costly liquidation events."
      toc={[
        { id: "what-is-collateralization", title: "what-is-collateralization", level: 2 },
        { id: "what-is-collateralization", title: "What Is Collateralization", level: 2 },
        { id: "ltv-explained", title: "ltv-explained", level: 2 },
        { id: "loan-to-value-ltv-explained", title: "Loan-to-Value (LTV) Explained", level: 2 },
        { id: "health-factor", title: "health-factor", level: 2 },
        { id: "understanding-health-factor", title: "Understanding Health Factor", level: 2 },
        { id: "managing-collateral", title: "managing-collateral", level: 2 },
        { id: "managing-your-collateral", title: "Managing Your Collateral", level: 2 },
        { id: "best-practices", title: "best-practices", level: 2 },
        { id: "best-practices", title: "Best Practices", level: 2 }
      ]}
      faqs={[
        { question: "What is a safe health factor?", answer: "A health factor above 2.0 provides a reasonable buffer against liquidation. Conservative borrowers maintain health factors of 3.0 or higher. Below 1.5, you should actively monitor and consider adding collateral or repaying debt." },
        { question: "Why does DeFi require overcollateralization?", answer: "Since DeFi protocols cannot verify borrower identity or creditworthiness, overcollateralization ensures lenders are protected. If a borrower fails to repay, their excess collateral is used to make lenders whole through the liquidation process." },
      ]}
      relatedArticles={[
        { title: "Liquidation Mechanics", href: "/defi-lending/learn/liquidation-mechanics", category: "DeFi Lending" },
        { title: "How DeFi Lending Works", href: "/defi-lending/learn/how-defi-lending-works", category: "DeFi Lending" },
      ]}
    >
      <section id="what-is-collateralization">
        <h2>What Is Collateralization</h2>
        <p>Collateralization in DeFi lending means depositing assets worth more than what you borrow. If you want to borrow $5,000 worth of stablecoins, you might need to deposit $7,500 worth of ETH. This excess collateral protects lenders from losses if you fail to repay or if your collateral value drops. The degree of overcollateralization required depends on the volatility and liquidity of the collateral asset. More volatile assets require higher overcollateralization to account for potential rapid price declines.</p>
      </section>
      <section id="ltv-explained">
        <h2>Loan-to-Value (LTV) Explained</h2>
        <p>The Loan-to-Value ratio represents the maximum percentage of your collateral value that you can borrow. For example, ETH on Aave V3 has a maximum LTV of approximately 80%, meaning $10,000 of ETH allows borrowing up to $8,000. Different assets have different LTV ratios based on their risk profile. Stablecoins like USDC may have LTVs around 77%, while more volatile tokens might have LTVs of 50-65%. Newer or less liquid assets may not be eligible as collateral at all. Protocols set these parameters through governance votes based on risk analysis.</p>
      </section>
      <section id="health-factor">
        <h2>Understanding Health Factor</h2>
        <p>The health factor is a single number that represents how safe your borrowing position is. It is calculated as the liquidation threshold value of your collateral divided by the value of your outstanding debt. A health factor above 1.0 means your position is safe. Below 1.0 triggers liquidation. For example, if your health factor is 2.0, your collateral value could drop by 50% before liquidation. Protocols like Aave display your health factor prominently in the dashboard. Monitoring this number, especially during volatile markets, is crucial for position management.</p>
      </section>
      <section id="managing-collateral">
        <h2>Managing Your Collateral</h2>
        <p>Active collateral management involves monitoring your health factor and adjusting your position as market conditions change. If your health factor drops, you have several options: add more collateral to increase the ratio, repay some of your borrowed amount to reduce debt, or swap collateral to a less volatile asset. Some protocols support multi-asset collateral, allowing you to diversify your collateral base. Efficiency mode (eMode) on Aave V3 provides higher LTV for correlated asset pairs like ETH and stETH, giving more capital efficiency when assets move together in price.</p>
      </section>
      <section id="best-practices">
        <h2>Best Practices</h2>
        <p>Never borrow the maximum amount allowed by your LTV. Maintaining a buffer of at least 20-30% below your maximum borrowing capacity provides safety margin against price volatility. Set up price alerts or use monitoring tools like DeBank or Zapper to track your health factor. Consider the correlation between your collateral and borrowed assets. If you deposit ETH and borrow USDC, a sharp ETH price drop hurts your health factor. But depositing ETH and borrowing ETH-correlated assets is safer due to price correlation. Always have a plan for what you will do if your health factor drops to concerning levels.</p>
      </section>
    </LearnPageLayout>
  );
}
