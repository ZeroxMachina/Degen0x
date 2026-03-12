import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Tax Loss Harvesting: How to Reduce Your ${CURRENT_YEAR} Tax Bill`,
  description:
    "Learn crypto tax loss harvesting strategies for 2026. Understand how to offset capital gains, reduce your tax liability, and take advantage of crypto's unique tax benefits. Step-by-step guide with no-wash-sale rules.",
  alternates: {
    canonical: "/taxes/learn/tax-loss-harvesting",
  },
  keywords:
    "crypto tax loss harvesting, tax loss harvesting cryptocurrency, crypto tax strategy, capital gains offset, crypto taxes 2026",
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Taxes", href: "/taxes" },
  { label: "Learn", href: "/taxes/learn" },
  { label: "Tax Loss Harvesting", href: "/taxes/learn/tax-loss-harvesting" },
];

const faqs = [
  {
    question: "What is tax loss harvesting in crypto?",
    answer:
      "Tax loss harvesting is the practice of selling cryptocurrency at a loss to offset capital gains from profitable trades. The realized loss reduces your overall taxable income. If your losses exceed gains, you can deduct up to $3,000 per year against ordinary income, with remaining losses carrying forward indefinitely.",
  },
  {
    question: "Is there a wash sale rule for cryptocurrency?",
    answer:
      "Currently, the IRS wash sale rule does not apply to cryptocurrency. Unlike stocks, you can sell Bitcoin or any crypto at a loss and immediately repurchase it, realizing the tax benefit while maintaining your market position. However, proposed legislation may change this in the future, so monitor regulatory updates.",
  },
  {
    question: "How much can I save by tax loss harvesting?",
    answer:
      "Savings depend on your tax bracket and the amount of losses harvested. If you harvest $10,000 in losses and are in the 32% tax bracket, you save $3,200 in taxes. Even without offsetting gains, you can deduct up to $3,000 annually against ordinary income, with carryover losses valuable indefinitely.",
  },
  {
    question: "When should I harvest losses?",
    answer:
      "Review your portfolio quarterly or whenever significant market dips occur. Sell positions trading below your cost basis before year-end to realize losses in the current tax year. However, the wash sale exemption means you're not limited to year-end harvesting—you can harvest and repurchase strategically throughout the year.",
  },
];

const darkTheme = {
  bg: "#0d1117",
  text: "#e6edf3",
  secondary: "#8b949e",
  accent: "#6366f1",
  bgAlt: "#161b22",
  borderColor: "#30363d",
};

export default function TaxLossHarvestingPage() {
  return (
    <main
      style={{
        backgroundColor: darkTheme.bg,
        color: darkTheme.text,
      }}
      className="min-h-screen"
    >
      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <header style={{ marginBottom: "48px" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "16px",
              lineHeight: "1.1",
            }}
          >
            Crypto Tax Loss Harvesting: How to Reduce Your {CURRENT_YEAR} Tax Bill
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: darkTheme.secondary,
              marginBottom: "24px",
              lineHeight: "1.6",
            }}
          >
            Tax loss harvesting is one of the most powerful tax optimization strategies available to cryptocurrency investors. By strategically selling underperforming assets at a loss, you can offset capital gains, reduce your tax liability, and maintain your portfolio position simultaneously. Unlike traditional stock investors, crypto traders benefit from a unique regulatory advantage: the absence of wash sale rules for digital assets (in most jurisdictions as of 2026).
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "0.875rem",
              color: darkTheme.secondary,
              flexWrap: "wrap",
            }}
          >
            <span>Reading time: 8 min</span>
            <span>•</span>
            <span>Updated: March 2026</span>
          </div>
        </header>

        {/* Table of Contents */}
        <nav
          style={{
            backgroundColor: darkTheme.bgAlt,
            border: `1px solid ${darkTheme.borderColor}`,
            borderRadius: "8px",
            padding: "24px",
            marginBottom: "48px",
          }}
        >
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            On This Page
          </h2>
          <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#what-is-tlh"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                What Is Tax Loss Harvesting in Crypto?
              </a>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#how-it-works"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                How It Works
              </a>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#wash-sale-rule"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                The Wash Sale Rule and Crypto
              </a>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#step-by-step"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Step-by-Step Guide
              </a>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#short-vs-long"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Short-Term vs Long-Term Capital Gains
              </a>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#common-mistakes"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Common Mistakes to Avoid
              </a>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#tools"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Tools to Track Your Portfolio
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                FAQs
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}

        {/* Section 1 */}
        <section id="what-is-tlh" style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "24px",
            }}
          >
            What Is Tax Loss Harvesting in Crypto?
          </h2>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            Tax loss harvesting (TLH) is the deliberate strategy of selling cryptocurrency positions at a loss to generate realized losses that offset taxable capital gains. Unlike unrealized losses—which exist on paper but provide no tax benefit—realized losses are recognized by the IRS when you sell the asset. These losses directly reduce your overall tax liability.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            Here's how the mechanics work: If you purchased Bitcoin at $65,000 and it has declined to $45,000, you have an unrealized loss of $20,000. Selling at the current market price of $45,000 realizes that $20,000 loss. You can then use this loss to offset capital gains from other winning trades, reducing your total taxable gains dollar-for-dollar.
          </p>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            The beauty of tax loss harvesting is that it doesn't lock you out of Bitcoin exposure. In fact, due to crypto's unique treatment under current tax law, you can immediately repurchase Bitcoin after selling it at a loss. This means you realize the tax benefit while maintaining your market position—something stock investors cannot do due to the wash sale rule.
          </p>
        </section>

        {/* Section 2 */}
        <section id="how-it-works" style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "24px",
            }}
          >
            How Tax Loss Harvesting Works
          </h2>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            The process begins with understanding your portfolio's cost basis. Your cost basis is the original amount you paid for each cryptocurrency, including any transaction fees. When the current market value falls below your cost basis, you have an unrealized loss available for harvesting.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            When you sell the asset at a loss, that loss is recognized for tax purposes. Capital losses first offset capital gains from other sales. If you had $15,000 in short-term capital gains from selling Ethereum, and you realize a $15,000 loss from selling an altcoin, these offset completely, leaving you with zero net capital gains and zero tax liability on these transactions.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            If your losses exceed your gains, you can deduct up to $3,000 of the net loss against ordinary income in the current tax year. For example, if you have losses of $25,000 and gains of $10,000, the $15,000 excess loss allows you to deduct $3,000 against ordinary income (saving approximately $750-$1,440 depending on your tax bracket), with the remaining $12,000 carrying forward to future tax years.
          </p>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            The harvested loss is not "used up"—it's applied to your current year's tax liability or rolled forward. This creates a valuable tax asset you can deploy strategically over multiple years.
          </p>
        </section>

        {/* Section 3 */}
        <section id="wash-sale-rule" style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "24px",
            }}
          >
            The Wash Sale Rule and Cryptocurrency
          </h2>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            For stock investors, the wash sale rule is a significant limitation on tax loss harvesting. This IRS rule prevents you from claiming a capital loss if you buy substantially identical securities within 30 days before or after the sale. This 61-day window (30 days before, plus the sale date, plus 30 days after) is designed to prevent investors from harvesting losses while maintaining the same investment exposure.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            However, cryptocurrency has historically received different treatment. The IRS classifies cryptocurrency as property rather than a security. Because of this classification, the wash sale rule does not currently apply to digital assets in the United States. This is a substantial advantage for crypto investors. You can sell Bitcoin at a loss and immediately repurchase it, realizing the tax loss while maintaining your trading position.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            This unique advantage has made tax loss harvesting especially valuable for crypto portfolios. However, it's important to understand that this situation may change. Congress has proposed legislation that would extend wash sale rules to cryptocurrencies. As of early 2026, such rules are not yet law, but investors should monitor regulatory developments and consult with tax professionals for the latest guidance on their specific jurisdiction.
          </p>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            Internationally, tax treatment varies significantly. Some countries treat crypto the same as other assets and do apply wash sale equivalents, while others have different rules entirely. Always verify your local tax laws before implementing a tax loss harvesting strategy.
          </p>
        </section>

        {/* Section 4 */}
        <section id="step-by-step" style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "24px",
            }}
          >
            Step-by-Step Guide to Harvesting Losses
          </h2>
          <ol
            style={{
              listStyle: "decimal",
              paddingLeft: "24px",
              lineHeight: "1.8",
              fontSize: "1rem",
            }}
          >
            <li style={{ marginBottom: "20px" }}>
              <strong>Review your portfolio.</strong> Identify all positions where current market value is below your cost basis. Use your exchange records, blockchain history, or crypto tax software to calculate gains and losses across all holdings.
            </li>
            <li style={{ marginBottom: "20px" }}>
              <strong>Assess your tax situation.</strong> Determine your total capital gains for the year. If you have $50,000 in gains, you might target harvesting $50,000 in losses to offset them completely. Consider your income level to understand your tax bracket and how valuable each dollar of deduction is to you.
            </li>
            <li style={{ marginBottom: "20px" }}>
              <strong>Select positions to harvest.</strong> Prioritize selling the largest losses first, as these provide the most immediate tax relief. For multiple losing positions, consider factors like tax-loss carryforward from previous years, upcoming rebalancing needs, and whether you want to continue holding the asset.
            </li>
            <li style={{ marginBottom: "20px" }}>
              <strong>Execute the sale.</strong> Sell the selected positions at market price. Document the date, amount sold, sale proceeds, and any transaction fees. Obtain and save confirmation from your exchange showing the transaction details.
            </li>
            <li style={{ marginBottom: "20px" }}>
              <strong>Consider repurchasing.</strong> If you want to maintain exposure to the asset, use the sale proceeds to repurchase the same or similar cryptocurrency. Because wash sale rules don't currently apply to crypto, you can do this immediately. However, if you're concerned about future regulatory changes, you might wait a short period before repurchasing.
            </li>
            <li style={{ marginBottom: "20px" }}>
              <strong>Document everything.</strong> Keep detailed records of all transactions, including original cost basis, sale date, sale price, proceeds, and the cost basis of any repurchased positions. This documentation is essential for accurate tax reporting and potential IRS audit defense.
            </li>
            <li>
              <strong>Report on your tax return.</strong> Use IRS Form 8949 to report your sales, and Schedule D to calculate your net capital gains or losses. Work with a tax professional to ensure accurate reporting on your complete tax return.
            </li>
          </ol>
        </section>

        {/* Section 5 */}
        <section id="short-vs-long" style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "24px",
            }}
          >
            Short-Term vs Long-Term Capital Gains
          </h2>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            The holding period of your cryptocurrency determines the tax rate applied to gains. This distinction is crucial for understanding the true value of tax loss harvesting.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            <strong>Short-term capital gains</strong> apply to crypto held for one year or less. These are taxed at your ordinary income tax rate, which can be as high as 37% for high earners. An investor with a $10,000 short-term gain might pay up to $3,700 in federal tax.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            <strong>Long-term capital gains</strong> apply to crypto held for more than one year. These are taxed at preferential rates: 0%, 15%, or 20% depending on total taxable income. The same $10,000 long-term gain might be taxed at only $0-$2,000, depending on your tax bracket.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            When harvesting losses, prioritize offsetting short-term gains first, since they're taxed at higher rates. A short-term loss saves you more per dollar than a long-term loss. If you have both short-term and long-term gains, harvest losses strategically to maximize tax savings by offsetting the most highly-taxed gains.
          </p>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            Additionally, consider the holding period when deciding whether to harvest a loss. If your position is currently underwater but close to a one-year holding period, you might wait a few months to convert any gain into long-term treatment if the asset appreciates. Conversely, if a loss is significant, harvest immediately regardless of holding period.
          </p>
        </section>

        {/* Section 6 */}
        <section id="common-mistakes" style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "24px",
            }}
          >
            Common Mistakes to Avoid
          </h2>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            <strong>Forgetting about transaction fees.</strong> When calculating your cost basis and gains, include all fees paid. Buying 1 Bitcoin for $60,000 plus $100 in fees means your cost basis is $60,100. Similarly, selling proceeds must account for withdrawal or trading fees. Ignoring fees overstates your gains and understates your losses.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            <strong>Harvesting losses too late in the year.</strong> Losses must be realized (sold) by December 31 to be deductible in that tax year. Don't wait until January to harvest December losses—execute sales before year-end and obtain confirmation from your exchange.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            <strong>Mistaking crypto exchanges for stablecoins.</strong> When harvesting a loss and repurchasing, selling Bitcoin and immediately buying Bitcoin is clear. However, selling altcoin A at a loss and buying altcoin B (even within the same blockchain ecosystem) is a different transaction. Ensure you're clear about your intent: Are you maintaining exposure to the same asset, or redeploying capital?
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            <strong>Poor record-keeping.</strong> Without precise records of cost basis, transaction dates, and sale proceeds for every transaction, you cannot accurately calculate losses. The IRS expects detailed documentation. Use crypto tax software to ensure consistency across your portfolio.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            <strong>Assuming the wash sale exemption is permanent.</strong> While wash sales don't currently apply to crypto, don't assume this will never change. Always consult with a tax professional and monitor legislative updates. Relying on a tax rule that may change is risky.
          </p>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            <strong>Harvesting without a strategic plan.</strong> Randomly harvesting losses whenever an asset drops is inefficient. Instead, maintain a quarterly or semi-annual review of your entire portfolio, then execute harvesting to achieve specific objectives: offsetting expected gains, reducing taxable income, or rebalancing allocations.
          </p>
        </section>

        {/* Section 7 */}
        <section id="tools" style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "24px",
            }}
          >
            Best Tools to Track Your Portfolio for Tax Loss Harvesting
          </h2>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            Effective tax loss harvesting requires real-time visibility into your portfolio's cost basis, current value, and available losses. Specialized software automates this process and identifies harvesting opportunities you might otherwise miss.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            A portfolio tracker aggregates data from all your exchanges and wallets, calculating your cost basis using your chosen method (FIFO, LIFO, or Specific Identification), and showing unrealized gains and losses across all positions. Premium portfolio trackers include tax-specific features like automatic loss identification, tax-loss harvesting recommendations, and direct integration with tax reporting.
          </p>
          <p
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            <a
              href="/tools/portfolio-tracker"
              style={{
                color: darkTheme.accent,
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Explore our recommended portfolio tracker
            </a>
            {" "}which supports multiple exchanges, calculates cost basis automatically, and provides monthly harvesting opportunity reports. Many investors run their portfolio tracker simultaneously with their exchange interface to identify and execute harvesting opportunities in real-time.
          </p>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            When selecting a portfolio tracking tool, prioritize: accurate cost basis calculation, support for all your exchanges and wallets, tax reporting features, security (how they store your API keys), and customer support. Many accountants now provide lists of recommended tools, so consider asking yours for guidance.
          </p>
        </section>

        {/* Disclaimer Box */}
        <div
          style={{
            backgroundColor: darkTheme.bgAlt,
            border: `2px solid ${darkTheme.accent}`,
            borderRadius: "8px",
            padding: "24px",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              margin: "0",
              lineHeight: "1.7",
              fontSize: "1rem",
            }}
          >
            <strong>Important Disclaimer:</strong> This article is for educational purposes only and does not constitute financial, tax, or investment advice. Tax laws are complex and vary by jurisdiction and individual circumstances. The information about wash sale rules applies primarily to the United States as of 2026, but may not apply to your location. Before implementing any tax loss harvesting strategy, consult with a qualified tax professional, certified public accountant, or tax attorney who understands cryptocurrency taxation in your jurisdiction.
          </p>
        </div>

        {/* FAQ Section */}
        <section id="faqs" style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "32px",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: "24px" }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: darkTheme.bgAlt,
                  border: `1px solid ${darkTheme.borderColor}`,
                  borderRadius: "8px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    marginBottom: "12px",
                    color: darkTheme.accent,
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    margin: "0",
                    lineHeight: "1.7",
                    fontSize: "0.95rem",
                    color: darkTheme.secondary,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section
          style={{
            backgroundColor: darkTheme.bgAlt,
            border: `1px solid ${darkTheme.borderColor}`,
            borderRadius: "8px",
            padding: "32px",
            marginBottom: "48px",
          }}
        >
          <h2
            style={{
              fontSize: "1.375rem",
              fontWeight: "700",
              marginBottom: "24px",
            }}
          >
            Related Articles & Resources
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
              display: "grid",
              gap: "16px",
            }}
          >
            <li>
              <a
                href="/taxes"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Comprehensive Crypto Tax Guide
              </a>
            </li>
            <li>
              <a
                href="/tools/portfolio-tracker"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Portfolio Tracker Tool for Tax Optimization
              </a>
            </li>
            <li>
              <a
                href="/investing/best/staking"
                style={{
                  color: darkTheme.accent,
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Best Staking Strategies & Tax Implications
              </a>
            </li>
          </ul>
        </section>

        {/* Closing CTA */}
        <section
          style={{
            textAlign: "center",
            padding: "32px",
            backgroundColor: darkTheme.bgAlt,
            borderRadius: "8px",
            border: `1px solid ${darkTheme.borderColor}`,
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Ready to Optimize Your Crypto Taxes?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: darkTheme.secondary,
              marginBottom: "24px",
              lineHeight: "1.6",
            }}
          >
            Use our portfolio tracker to identify tax loss harvesting opportunities in your holdings and generate accurate tax reports for your accountant.
          </p>
          <a
            href="/tools/portfolio-tracker"
            style={{
              display: "inline-block",
              backgroundColor: darkTheme.accent,
              color: darkTheme.bg,
              padding: "12px 28px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "opacity 0.2s",
            }}
          >
            Start Tracking Your Portfolio
          </a>
        </section>
      </article>
    </main>
  );
}
