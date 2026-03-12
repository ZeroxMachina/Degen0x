import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Payroll Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "How to pay employees and contractors in cryptocurrency. Payroll platforms, tax withholding, compliance requirements, and implementation guide.",
  keywords: ["crypto payroll", "pay employees bitcoin", "crypto salary"],
};

export default function CryptoPayrollGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Payroll Guide"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="10 min"
      intro="Crypto payroll is growing as more employees request salary payments in Bitcoin and other digital assets, and as companies with global teams seek efficient ways to pay international contractors. This guide covers the platforms, regulations, and best practices for implementing crypto payroll."
      toc={[
        { id: "platforms", title: "platforms", level: 2 },
        { id: "crypto-payroll-platforms", title: "Crypto Payroll Platforms", level: 2 },
        { id: "employee-options", title: "employee-options", level: 2 },
        { id: "employee-payment-options", title: "Employee Payment Options", level: 2 },
        { id: "contractor-payments", title: "contractor-payments", level: 2 },
        { id: "international-contractor-payments", title: "International Contractor Payments", level: 2 },
        { id: "compliance", title: "compliance", level: 2 },
        { id: "tax-and-compliance", title: "Tax and Compliance", level: 2 }
      ]}
      faqs={[
        { question: "Can employers pay salaries in Bitcoin?", answer: "Yes, though regulations vary by jurisdiction. Most US states allow partial crypto salary payments with employee consent. Some states have specific requirements about minimum wage being paid in fiat." },
        { question: "How are crypto wages taxed?", answer: "Crypto wages are taxed as ordinary income based on the fair market value at the time of receipt, just like fiat wages. Employers must still withhold income taxes and report wages normally." },
        { question: "What is the best platform for crypto payroll?", answer: "Bitwage is popular for employees wanting partial Bitcoin paychecks. For international contractors, Request Network and Superfluid offer efficient crypto payment solutions with invoicing capabilities." },
      ]}
      relatedArticles={[
        { title: "Best Crypto Payroll Solutions", href: "/web3-business/best/crypto-payroll", category: "Web3 Business" },
        { title: "Crypto Freelancer Payments", href: "/spending/learn/crypto-freelancer-payments", category: "Spending" },
        { title: "Crypto Accounting Guide", href: "/web3-business/learn/crypto-accounting-guide", category: "Web3 Business" },
      ]}
    >
      <section id="platforms">
        <h2>Crypto Payroll Platforms</h2>
        <p>Bitwage enables employees to receive a portion of their paycheck in Bitcoin, Ethereum, or stablecoins without requiring employer involvement in the crypto conversion. The employee signs up, provides their Bitwage routing number to their employer's existing payroll system, and Bitwage converts a specified percentage of each paycheck to crypto. This approach works with any employer since the employer simply sends a regular ACH payment.</p>
        <p>For companies that want to offer crypto payroll natively, platforms like Request Network, Franklin Payroll, and Deel provide crypto payment capabilities within broader payroll and HR solutions. These platforms handle the conversion, distribution, and tax reporting aspects of crypto salary payments. Superfluid enables real-time salary streaming where employees receive crypto continuously rather than in biweekly or monthly lump sums.</p>
      </section>

      <section id="employee-options">
        <h2>Employee Payment Options</h2>
        <p>Employees typically have several options for receiving crypto compensation. Full crypto salary converts the entire paycheck to cryptocurrency. Partial conversion splits the paycheck between fiat and crypto at a chosen percentage. Bonus-only crypto pays regular salary in fiat with performance bonuses in crypto. Each approach has different tax implications and risk profiles that employees should consider based on their financial situation.</p>
        <p>The partial conversion approach is most popular, allowing employees to accumulate crypto while maintaining fiat income for expenses. Common split ratios range from 10-30% in crypto, though some crypto-native employees opt for 100% crypto salary. When choosing a crypto salary option, employees should consider their existing crypto exposure, monthly fiat obligations, and risk tolerance for income volatility if receiving non-stablecoin payments.</p>
      </section>

      <section id="contractor-payments">
        <h2>International Contractor Payments</h2>
        <p>Crypto payroll shines brightest for international contractor payments. Traditional cross-border payroll involves wire transfer fees, currency conversion costs, correspondent banking delays, and compliance complexity. Stablecoin payments to international contractors settle in minutes with negligible fees, regardless of the contractor's country. This efficiency has made crypto the preferred payment method for many distributed Web3 teams.</p>
        <p>Platforms like Deel, Remote, and Papaya Global are integrating crypto payment options alongside traditional payroll for international teams. These platforms handle compliance, tax documentation, and payment processing across jurisdictions. For smaller teams, direct stablecoin transfers via wallet-to-wallet payments with invoicing through Request Network or similar tools provide a simpler, lower-cost alternative to full payroll platforms.</p>
      </section>

      <section id="compliance">
        <h2>Tax and Compliance</h2>
        <p>Employers paying crypto wages must still comply with all standard payroll requirements including income tax withholding, Social Security and Medicare contributions, and W-2 reporting. The crypto portion of wages is valued at the fair market value at the time of payment. Employers typically withhold taxes in fiat and distribute the remaining amount in crypto. State regulations vary, with some requiring that minimum wage be paid in legal tender.</p>
        <p>Contractors receiving crypto payments are responsible for their own tax reporting. US-based contractors report crypto income on Schedule C, and the fair market value at receipt determines the income amount. International contractors follow their local tax laws regarding crypto income. Both employees and contractors should track the cost basis of crypto received as income, as subsequent appreciation or depreciation affects future capital gains calculations when the crypto is eventually sold or spent.</p>
      </section>
    </LearnPageLayout>
  );
}
