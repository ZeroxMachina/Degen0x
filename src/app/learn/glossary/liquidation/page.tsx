import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Liquidation? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what liquidation means in crypto, how it works in leveraged trading and DeFi lending, and how to avoid it.",
};

export default function LiquidationPage() {
  return (
    <LearnPageLayout
      title="What Is Liquidation?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Liquidation is the forced closing of a leveraged position or the seizure of collateral in a lending protocol when the value of the trader's margin or collateral falls below the required threshold. In leveraged trading, liquidation occurs when losses approach the deposited margin. In DeFi lending, liquidation happens when the value of collateral drops below the minimum required to back a loan."
      toc={[
        { id: "definition", title: "What Is Liquidation?", level: 2 },
        { id: "trading-liquidation", title: "Liquidation in Leveraged Trading", level: 2 },
        { id: "defi-liquidation", title: "Liquidation in DeFi Lending", level: 2 },
        { id: "cascading", title: "Cascading Liquidations", level: 2 },
        { id: "avoiding-liquidation", title: "How to Avoid Liquidation", level: 2 },
      ]}
      faqs={[
        {
          question: "Can I get my funds back after liquidation?",
          answer:
            "In leveraged trading, any remaining margin after the position is closed is returned, but this is often very little or nothing. In DeFi lending, your collateral is sold to repay the loan, and you keep the borrowed assets. Some protocols allow partial liquidation, preserving a portion of your position. Prevention is far better than recovery.",
        },
        {
          question: "How do DeFi liquidations work?",
          answer:
            "DeFi lending protocols like Aave and Compound allow anyone to act as a liquidator. When a borrower's health factor drops below the threshold, liquidators can repay a portion of the debt and receive the corresponding collateral at a discount. This discount incentivizes liquidators and helps keep the protocol solvent.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Leverage?", href: "/learn/glossary/leverage", category: "Glossary" },
        { title: "What Is Collateral?", href: "/learn/glossary/collateral", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is a Flash Loan?", href: "/learn/glossary/flash-loan", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Liquidation?</h2>
      <p>
        Liquidation is a risk management mechanism that protects lenders and exchanges from losses when a borrower or trader can no longer maintain their position. It occurs automatically when predefined thresholds are breached. The process involves forcibly closing the position and using the remaining collateral or margin to cover outstanding obligations. Liquidation is a fundamental aspect of both centralized and decentralized financial markets.
      </p>

      <h2 id="trading-liquidation">Liquidation in Leveraged Trading</h2>
      <p>
        When trading with leverage on exchanges, your margin acts as a deposit against potential losses. Each position has a liquidation price: the asset price at which your losses would consume your margin. If the market reaches this price, the exchange automatically closes your position. With 10x leverage, a 10% adverse move triggers liquidation. Higher leverage means your liquidation price is closer to your entry price.
      </p>

      <h2 id="defi-liquidation">Liquidation in DeFi Lending</h2>
      <p>
        DeFi lending protocols require over-collateralization. If you borrow $1,000, you might need $1,500 in collateral. If your collateral&apos;s value drops below the minimum ratio (typically 110-150%), your position becomes eligible for liquidation. Third-party liquidators, often using bots, repay part of your loan and claim your collateral at a discount, earning a profit while keeping the protocol healthy.
      </p>

      <h2 id="cascading">Cascading Liquidations</h2>
      <p>
        Liquidations can trigger a chain reaction. When a large position is liquidated, the selling pressure pushes prices lower, triggering more liquidations, causing more selling. These cascading liquidations can cause dramatic and rapid price crashes. Some of crypto&apos;s largest single-day drops have been amplified by cascading liquidations across leveraged positions on multiple platforms simultaneously.
      </p>

      <h2 id="avoiding-liquidation">How to Avoid Liquidation</h2>
      <p>
        Use lower leverage to increase the distance between your entry and liquidation prices. Set stop-loss orders above your liquidation price. Monitor your positions during volatile periods. In DeFi, maintain a healthy collateral ratio well above the minimum. Keep additional funds available to add margin or collateral if prices move against you. The best protection is conservative position sizing relative to your total portfolio.
      </p>
    </LearnPageLayout>
  );
}
