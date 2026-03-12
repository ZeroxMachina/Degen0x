import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Loans vs Selling: Which Is Better? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Should you take a crypto loan or sell? Compare the tax, financial, and strategic implications of borrowing against crypto versus liquidating your holdings.",
  keywords: ["crypto loan vs selling", "borrow or sell crypto", "crypto tax strategy", "sell bitcoin or borrow"],
};

export default function CryptoLoansVsSellingPage() {
  return (
    <LearnPageLayout
      title="Crypto Loans vs Selling: Which Is Better?"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min"
      intro="When you need liquidity, the choice between taking a crypto loan and selling your holdings has significant tax, financial, and strategic implications. Borrowing preserves your crypto exposure and avoids capital gains taxes but introduces interest costs and liquidation risk. Selling provides clean liquidity but triggers taxes and eliminates future upside. This guide provides a framework for making this critical decision."
      toc={[
        { id: "tax-comparison", title: "tax-comparison", level: 2 },
        { id: "tax-comparison", title: "Tax Comparison", level: 2 },
        { id: "financial-analysis", title: "financial-analysis", level: 2 },
        { id: "financial-analysis", title: "Financial Analysis", level: 2 },
        { id: "when-to-borrow", title: "when-to-borrow", level: 2 },
        { id: "when-borrowing-wins", title: "When Borrowing Wins", level: 2 },
        { id: "when-to-sell", title: "when-to-sell", level: 2 },
        { id: "when-selling-wins", title: "When Selling Wins", level: 2 }
      ]}
      faqs={[
        { question: "Is it always better to borrow instead of sell?", answer: "No. Borrowing is better when you have large unrealized gains and strong conviction the asset will appreciate. Selling is better when you have losses to harvest, need to reduce exposure, or cannot manage loan risk. The right choice depends on your specific tax situation, market outlook, and risk tolerance." },
        { question: "What if I need the money permanently, not temporarily?", answer: "For permanent liquidity needs, selling is usually more appropriate since a loan requires eventual repayment. However, if your crypto has large unrealized gains, you might borrow and plan to repay from future income or wait for more favorable tax conditions to eventually sell." },
      ]}
      relatedArticles={[
        { title: "Crypto Loan Strategies", href: "/crypto-loans/learn/crypto-loan-strategies", category: "Crypto Loans" },
        { title: "Crypto Loan Taxes", href: "/crypto-loans/learn/crypto-loan-taxes", category: "Crypto Loans" },
      ]}
    >
      <section id="tax-comparison">
        <h2>Tax Comparison</h2>
        <p>The tax difference between borrowing and selling can be enormous. If you bought Bitcoin at $10,000 and it is now worth $60,000, selling $60,000 worth triggers $50,000 in capital gains. At a 20% long-term capital gains rate, you owe $10,000 in taxes, receiving only $50,000 net. Borrowing against the same Bitcoin is not a taxable event in most jurisdictions, giving you access to the full borrowing amount. If you borrow $30,000 at 6% interest for one year, you pay $1,800 in interest, far less than the $10,000 tax bill from selling. The larger your unrealized gains, the more borrowing saves. For positions with minimal gains or losses, the tax advantage of borrowing diminishes or reverses, since selling at a loss creates a tax deduction.</p>
      </section>
      <section id="financial-analysis">
        <h2>Financial Analysis</h2>
        <p>Beyond taxes, compare the total financial impact. When you sell, you lose all future appreciation on the sold amount. If Bitcoin goes from $60,000 to $120,000 after you sell, you miss $60,000 in gains. When you borrow, you maintain full upside exposure minus the interest cost. However, borrowing carries downside risk that selling does not: if Bitcoin drops to $30,000, your loan may be liquidated, resulting in loss of collateral plus liquidation penalties, a worse outcome than having simply sold. The breakeven calculation depends on interest rates, your tax rate, expected price movement, and loan duration. For short-term liquidity needs with strong bull market conviction, borrowing typically wins. For long-term needs in uncertain markets, selling provides cleaner risk management.</p>
      </section>
      <section id="when-to-borrow">
        <h2>When Borrowing Wins</h2>
        <p>Borrowing is the better choice in several scenarios. When you have large unrealized gains and the tax savings exceed interest costs. When you need temporary liquidity and plan to repay within a defined timeframe. When you have strong conviction that your collateral will appreciate, making the maintained exposure valuable. When you want to maintain your portfolio allocation without selling core positions. When you can obtain a low interest rate that makes the cost of borrowing minimal. When you have the ability and discipline to monitor and manage the loan position through market volatility. When you have reserves available to add collateral if needed during downturns. The ideal borrowing scenario combines large unrealized gains, strong market conviction, conservative LTV, and a clear repayment plan.</p>
      </section>
      <section id="when-to-sell">
        <h2>When Selling Wins</h2>
        <p>Selling is the better choice when you have capital losses to harvest for tax benefits, since realizing losses reduces your tax obligation. When you need to permanently reduce your crypto exposure for portfolio rebalancing. When you cannot actively monitor a loan position or manage margin calls. When your unrealized gains are small, making the tax cost minimal. When interest rates are high, eroding the tax savings from borrowing. When market conditions are bearish and maintaining exposure through borrowing increases your risk. When you need the liquidity for an extended or indefinite period and ongoing interest payments are burdensome. When the complexity and risk of managing a crypto loan exceeds your comfort level. Sometimes the simplest solution is the best one, and selling provides clean, risk-free liquidity that does not require ongoing management.</p>
      </section>
    </LearnPageLayout>
  );
}
