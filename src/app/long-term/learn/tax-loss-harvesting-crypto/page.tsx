import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Tax-Loss Harvesting for Crypto: How to Offset Gains (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to crypto tax-loss harvesting. Learn how to strategically realize losses to offset capital gains, reduce your tax bill, and improve after-tax returns.",
  keywords: ["crypto tax loss harvesting", "tax loss harvesting Bitcoin", "crypto capital loss", "offset crypto gains", "wash sale crypto"],
};

export default function TaxLossHarvestingCryptoPage() {
  return (
    <LearnPageLayout
      title="Tax-Loss Harvesting for Crypto: How to Offset Gains"
      categoryName="Long-Term Strategies"
      categorySlug="long-term"
      readTime="10 min read"
      intro="Tax-loss harvesting is one of the most powerful tax optimization strategies available to crypto investors. By strategically selling losing positions to realize capital losses, you can offset capital gains from profitable trades, reducing your overall tax liability. In the US, crypto currently has a significant advantage over stocks for this strategy: cryptocurrency is not subject to the wash sale rule, meaning you can sell at a loss and immediately repurchase the same asset."
      toc={[
        { id: "how-it-works", title: "How Tax-Loss Harvesting Works", level: 2 },
        { id: "wash-sale", title: "The Crypto Wash Sale Advantage", level: 2 },
        { id: "strategy", title: "Step-by-Step Harvesting Strategy", level: 2 },
        { id: "limitations", title: "Limitations & Pitfalls", level: 2 },
        { id: "year-round", title: "Year-Round vs Year-End Harvesting", level: 2 },
        { id: "tools", title: "Tax-Loss Harvesting Tools", level: 2 },
      ]}
      faqs={[
        { question: "What is tax-loss harvesting?", answer: "Tax-loss harvesting involves selling investments at a loss to generate capital losses that offset capital gains. In crypto, this means selling a token that has declined below your purchase price, realizing the loss for tax purposes, and potentially repurchasing the same or similar asset." },
        { question: "Is the wash sale rule applicable to crypto?", answer: "As of current IRS guidance, the wash sale rule (which prevents claiming a loss if you repurchase within 30 days) does not apply to cryptocurrency. However, proposed legislation could extend wash sale rules to crypto in the future. Check current regulations before executing this strategy." },
        { question: "How much can I offset with crypto losses?", answer: "Capital losses can offset capital gains dollar for dollar with no limit. If your losses exceed your gains, you can deduct up to $3,000 in net capital losses against ordinary income per year in the US. Remaining losses carry forward to future years indefinitely." },
        { question: "Does tax-loss harvesting work with staking rewards?", answer: "Staking rewards are taxed as ordinary income, not capital gains. Capital losses from tax-loss harvesting can offset capital gains but cannot directly offset ordinary income beyond the $3,000 annual deduction limit. However, any capital gains from selling staked tokens can be offset." },
      ]}
      relatedArticles={[
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
        { title: "Portfolio Rebalancing", href: "/long-term/learn/portfolio-rebalancing", category: "Long-Term" },
      ]}
    >
      <h2 id="how-it-works">How Tax-Loss Harvesting Works</h2>
      <p>
        The concept is straightforward: if you hold a crypto position that has declined in value, you sell it to realize a capital loss. This loss can then offset capital gains from other profitable trades, reducing your net taxable gains. For example, if you realized $10,000 in gains from selling Bitcoin and $4,000 in losses from selling a declining altcoin, you would only owe taxes on the net $6,000 gain. If your losses exceed your gains, you can deduct up to $3,000 against ordinary income (salary, etc.) per year in the US, with any remaining losses carrying forward indefinitely. Over time, this strategy can save thousands in taxes.
      </p>

      <h2 id="wash-sale">The Crypto Wash Sale Advantage</h2>
      <p>
        The wash sale rule in the US prevents investors from claiming a loss on stocks if they repurchase the same or substantially identical security within 30 days. As of current IRS guidance and tax law, this rule does not apply to cryptocurrency because crypto is classified as property, not a security. This means you can sell Bitcoin at a loss, immediately repurchase Bitcoin, and still claim the tax loss. This is a significant advantage that allows crypto investors to harvest losses without sacrificing their portfolio positioning. However, proposed legislation including the Build Back Better Act has sought to extend wash sale rules to crypto. Monitor legislative developments closely.
      </p>

      <h2 id="strategy">Step-by-Step Harvesting Strategy</h2>
      <p>
        First, review your portfolio for positions currently below your cost basis. Second, calculate the unrealized loss for each position. Third, assess whether harvesting each loss makes sense after considering transaction fees and your broader tax situation. Fourth, execute the sale to realize the loss. Fifth, if you want to maintain exposure (and wash sale rules do not apply to crypto), immediately repurchase the same asset. The repurchased position has a new, lower cost basis. Sixth, document all transactions for your tax return. Consider targeting your largest unrealized losses first for maximum impact. Prioritize harvesting short-term losses, which offset short-term gains taxed at higher rates.
      </p>

      <h2 id="limitations">Limitations &amp; Pitfalls</h2>
      <p>
        Tax-loss harvesting has limitations. Transaction fees (exchange fees and gas costs) reduce the net benefit. If you harvest too aggressively, you reduce your cost basis, which means higher taxable gains in the future when you eventually sell. You are deferring taxes, not eliminating them permanently (unless you donate the appreciated assets to charity or pass them through an estate). If the wash sale rule is eventually extended to crypto, retroactive application could create complications for past harvesting activities. Always consider the total tax picture rather than optimizing for a single year.
      </p>

      <h2 id="year-round">Year-Round vs Year-End Harvesting</h2>
      <p>
        Many investors only think about tax-loss harvesting in December, but year-round harvesting is more effective. Crypto&apos;s extreme volatility creates harvesting opportunities throughout the year. A token might be down 40% in March, recover by July, and be flat by December. By harvesting the March loss, you capture value that may not be available later. Year-round harvesting also avoids the December rush when many investors sell simultaneously, potentially impacting prices. Set up a monthly or quarterly review to identify harvesting opportunities. Some crypto tax tools can alert you automatically when significant harvesting opportunities arise in your portfolio.
      </p>

      <h2 id="tools">Tax-Loss Harvesting Tools</h2>
      <p>
        Koinly, CoinTracker, and CryptoTaxCalculator all offer tax-loss harvesting identification features that scan your portfolio for positions with unrealized losses. Some show the potential tax savings from harvesting each position. Coinledger provides a dedicated tax-loss harvesting dashboard. These tools calculate your cost basis across all purchases using your selected method (FIFO, LIFO, etc.) and identify positions that are below their cost basis. For active investors with hundreds of positions across multiple exchanges and wallets, automated tools are essential for identifying all harvesting opportunities. The annual subscription cost for these tools is typically far less than the tax savings from effective harvesting.
      </p>
    </LearnPageLayout>
  );
}
