import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Loan Strategies (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn proven crypto loan strategies. From tax-efficient borrowing to leveraged positions and yield strategies, maximize the value of your crypto collateral.",
  keywords: ["crypto loan strategies", "crypto borrowing strategy", "leverage crypto", "tax efficient borrowing"],
};

export default function CryptoLoanStrategiesPage() {
  return (
    <LearnPageLayout
      title="Crypto Loan Strategies"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="10 min"
      intro="Crypto loans are not just a way to access cash. Strategic borrowers use them for tax optimization, leveraged investing, yield generation, and portfolio management. Understanding these strategies and their risk profiles helps you extract maximum value from your crypto holdings while managing downside risk appropriately."
      toc={[
        { id: "tax-efficient", title: "Tax-Efficient Borrowing", level: 2 },
        { id: "leveraged-investing", title: "Leveraged Investing", level: 2 },
        { id: "yield-strategies", title: "Yield Strategies", level: 2 },
        { id: "risk-management", title: "Strategy Risk Management", level: 2 },
      ]}
      faqs={[
        { question: "Is it better to borrow or sell crypto?", answer: "Borrowing is generally better when you have large unrealized gains (avoiding capital gains tax), believe the asset will appreciate further, or need temporary liquidity. Selling is better when you have losses to harvest, need to reduce crypto exposure, or cannot manage the risk of a leveraged position." },
        { question: "What is the safest crypto loan strategy?", answer: "The safest strategy is conservative borrowing at low LTV (below 30%) against major assets like Bitcoin or Ethereum for a specific, time-limited purpose. This provides a large safety buffer against price drops and a clear repayment plan." },
      ]}
      relatedArticles={[
        { title: "How Crypto Loans Work", href: "/crypto-loans/learn/how-crypto-loans-work", category: "Crypto Loans" },
        { title: "Crypto Loans vs Selling", href: "/crypto-loans/learn/crypto-loans-vs-selling", category: "Crypto Loans" },
        { title: "Loan-to-Value Strategies", href: "/crypto-loans/learn/loan-to-value-strategies", category: "Crypto Loans" },
      ]}
    >
      <section id="tax-efficient">
        <h2>Tax-Efficient Borrowing</h2>
        <p>One of the most compelling use cases for crypto loans is tax deferral. If you hold crypto with significant unrealized gains, selling triggers capital gains taxes that can consume 15-37% of your profit depending on jurisdiction and holding period. Borrowing against your crypto is not a taxable event in most jurisdictions, allowing you to access liquidity while deferring the tax liability indefinitely. This strategy is particularly valuable for long-term holders with large cost basis differences. The interest cost on the loan is the price you pay for tax deferral, and for large positions the tax savings can far exceed the borrowing cost. Some jurisdictions may allow interest deductions that further reduce the net cost. Consult a tax professional to confirm the treatment in your specific jurisdiction before implementing this strategy.</p>
      </section>
      <section id="leveraged-investing">
        <h2>Leveraged Investing</h2>
        <p>Crypto loans enable leveraged investment strategies where you borrow against your holdings to acquire more assets. The simplest form is recursive borrowing: deposit ETH, borrow stablecoins, buy more ETH, deposit the new ETH, and repeat. This amplifies your exposure to ETH price movements. At 2x leverage, a 50% ETH price increase becomes roughly a 100% gain on your initial capital. However, the same leverage amplifies losses, and a 50% price drop could trigger complete liquidation. More sophisticated leverage strategies involve borrowing to invest in different assets or yield opportunities. The key principle is that leverage is only appropriate when you have high conviction in the direction of price movement and can absorb potential losses. Never leverage beyond what you can afford to lose entirely.</p>
      </section>
      <section id="yield-strategies">
        <h2>Yield Strategies</h2>
        <p>Borrowing can generate net positive yield when the return on borrowed funds exceeds the borrowing cost. Deposit ETH earning staking yield (3-4%), borrow stablecoins at variable rates (2-5%), and invest the stablecoins in higher-yield opportunities. If your total strategy return exceeds the borrow rate, you generate yield on capital you did not have. This carry trade approach works best when a spread exists between borrowing costs and available yields. Liquid staking derivatives create natural opportunities: deposit stETH as collateral, borrow ETH at a lower rate than the staking yield, and your collateral earns more than your debt costs. Monitor the spread continuously since borrowing rates can spike during volatile markets, potentially making the strategy unprofitable temporarily.</p>
      </section>
      <section id="risk-management">
        <h2>Strategy Risk Management</h2>
        <p>Every crypto loan strategy requires clear risk management rules defined before entering the position. Set maximum LTV thresholds and stick to them. Define exit triggers for when market conditions change. Calculate the price level at which your position would be liquidated and ensure it represents an acceptable worst case. Size your positions so that a total loss would not impair your financial health. Use stop-loss mechanisms or automated position management tools for leveraged strategies. Diversify across multiple protocols to reduce smart contract concentration risk. Regularly review your positions and adjust for changing market conditions. The most common mistake in crypto borrowing is over-leveraging during euphoric markets, leading to devastating losses during corrections. Discipline in risk management separates successful borrowers from those who suffer avoidable losses.</p>
      </section>
    </LearnPageLayout>
  );
}
