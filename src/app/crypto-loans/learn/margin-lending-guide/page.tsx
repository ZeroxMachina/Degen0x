import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Margin Lending Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn how crypto margin lending works. Understand leverage, margin calls, liquidation risks, and strategies for lending your crypto to margin traders.",
};

export default function MarginLendingGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Margin Lending Explained"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min read"
      intro="Margin lending in crypto allows traders to borrow funds for leveraged trading while providing lenders with a relatively safe way to earn interest. As a margin lender, you provide capital to traders who use it for leveraged positions, earning interest on your funds. As a margin borrower, you use borrowed funds to amplify your trading positions. This guide explains both sides of margin lending, the platforms involved, and the risks to understand."
      toc={[
        { id: "how-it-works", title: "How Margin Lending Works", level: 2 },
        { id: "lending-side", title: "Earning from Margin Lending", level: 2 },
        { id: "borrowing-side", title: "Borrowing for Leverage", level: 2 },
        { id: "risks", title: "Risks on Both Sides", level: 2 },
      ]}
      faqs={[
        { question: "What is crypto margin lending?", answer: "Margin lending is providing funds to traders who use them for leveraged positions. Lenders earn interest, and borrowers access leverage. The exchange typically guarantees the loan through automatic liquidation of the borrower's position if their losses approach the borrowed amount." },
        { question: "How much can I earn from margin lending?", answer: "Margin lending rates vary based on demand for leverage. During volatile markets with high trading activity, rates can spike to 20-50%+ APR for short periods. Average rates during normal conditions range from 5-15% APR. Rates for Bitcoin and stablecoins tend to be the most consistent." },
        { question: "Is margin lending safe?", answer: "Margin lending is relatively safe because the exchange auto-liquidates borrowers before they can lose your funds. Your main risk is exchange insolvency or a black swan event where liquidation fails (prices gap through liquidation levels). Using reputable exchanges with robust liquidation engines reduces this risk." },
        { question: "What leverage do margin traders use?", answer: "Crypto margin trading typically offers 2x to 100x leverage depending on the exchange and asset. Most responsible traders use 2-5x leverage. Higher leverage means higher returns but also means smaller price movements can trigger liquidation. Exchange-specific limits vary by jurisdiction." },
      ]}
      relatedArticles={[
        { title: "Stablecoin Lending", href: "/crypto-loans/learn/stablecoin-lending", category: "Crypto Loans" },
        { title: "Liquidation Prevention", href: "/crypto-loans/learn/liquidation-prevention", category: "Crypto Loans" },
        { title: "LTV Ratio Guide", href: "/crypto-loans/learn/ltv-ratio-guide", category: "Crypto Loans" },
      ]}
    >
      <h2 id="how-it-works">How Margin Lending Works</h2>
      <p>
        Margin lending connects two parties through an exchange or platform. Lenders deposit funds (crypto or stablecoins) into a lending pool or offer them directly on a marketplace. Traders borrow these funds to open leveraged positions. For example, a trader with $10,000 of their own capital borrowing $20,000 from margin lenders can open a $30,000 position, achieving 3x leverage. The exchange manages the entire process: matching lenders with borrowers, calculating interest, monitoring positions, and executing liquidations when necessary. Interest accrues continuously or daily, depending on the platform. The exchange&apos;s liquidation engine automatically closes the trader&apos;s position if their losses approach a threshold, ensuring the borrowed funds are returned to the lender. This automatic liquidation is what makes margin lending relatively safe for lenders.
      </p>

      <h2 id="lending-side">Earning from Margin Lending</h2>
      <p>
        As a margin lender, you earn interest from traders who borrow your funds. Rates are determined by supply and demand. When many traders want leverage (during volatile or bullish periods), rates increase. When trading activity is low, rates decrease. Some platforms offer automated lending that automatically re-lends your funds at the best available rate when a loan is repaid. Funding rates on perpetual futures markets are a related mechanism where long and short position holders pay each other based on market conditions. Platforms that support margin lending include centralized exchanges with margin trading features and DeFi perpetual DEXs. The effective yield depends on the utilization rate (how much of your capital is actually lent out at any given time) and the average interest rate achieved. Consistent yields require active management or automated lending strategies.
      </p>

      <h2 id="borrowing-side">Borrowing for Leverage</h2>
      <p>
        Margin borrowing amplifies both gains and losses. If you borrow to achieve 3x long leverage on Bitcoin and BTC rises 10%, you gain approximately 30% (minus interest). If BTC drops 10%, you lose approximately 30%. At higher leverage, smaller movements have larger impacts. Most exchanges require initial margin (your own capital as a percentage of the position) and maintenance margin (the minimum equity you must maintain). When your equity drops below the maintenance margin, you receive a margin call or are automatically liquidated. Cross-margin uses your entire account balance as collateral, while isolated margin limits the collateral to a specific amount you designate. Isolated margin limits your maximum loss to the isolated amount, while cross-margin can consume your entire balance. Understanding funding rates for perpetual contracts is also essential, as these periodic payments between longs and shorts affect your holding cost.
      </p>

      <h2 id="risks">Risks on Both Sides</h2>
      <p>
        For lenders, the primary risk is exchange failure or insolvency where your deposited funds are lost. Using well-capitalized, regulated exchanges reduces this risk. Extreme market events (flash crashes or gaps) can potentially cause losses that exceed borrower collateral, though this is rare on liquid assets. Auto-deleveraging mechanisms on some exchanges can close profitable positions, indirectly affecting lending pool dynamics. For borrowers, the risks are more immediate: leveraged losses can quickly liquidate your position, and in extreme volatility, slippage during liquidation can result in losses exceeding your initial margin. Funding rates for perpetual futures can accumulate significantly during extended holding periods. High leverage is particularly dangerous in crypto&apos;s 24/7 markets where significant price movements can occur at any time. Risk management through position sizing, stop losses, and conservative leverage is essential for margin traders.
      </p>
    </LearnPageLayout>
  );
}
