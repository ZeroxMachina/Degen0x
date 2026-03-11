import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Payroll Guide (${CURRENT_YEAR}) - Pay Your Team in Crypto | CryptoDegen`,
  description: `Learn how to set up crypto payroll for your Web3 team. Payment platforms, tax compliance, contractor vs. employee considerations, and multi-chain disbursement.`,
};

export default function CryptoPayrollPage() {
  return (
    <LearnPageLayout
      title="Crypto Payroll Guide"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="9 min"
      intro="Paying your team in cryptocurrency is a natural fit for Web3 businesses, especially those with globally distributed contributors. Crypto payroll offers faster cross-border settlement, lower transfer fees, and alignment with the industry ethos. However, it introduces specific tax, compliance, and operational challenges that require careful planning."
      toc={[
        { id: "platforms", title: "Crypto Payroll Platforms", level: 2 },
        { id: "employee-vs-contractor", title: "Employee vs. Contractor Classification", level: 2 },
        { id: "tax-compliance", title: "Tax Compliance and Withholding", level: 2 },
        { id: "best-practices", title: "Operational Best Practices", level: 2 },
      ]}
      faqs={[
        { question: "Can I pay my entire salary in crypto?", answer: "Legally, it depends on the jurisdiction. In the US, employers must pay at least the federal minimum wage in fiat currency. Above the minimum, additional compensation can be paid in crypto. Some states have stricter wage payment laws that may further limit crypto compensation. For contractors, there are typically no restrictions on crypto-only payments. Many teams offer a split where contributors choose their fiat-to-crypto ratio each pay period." },
        { question: "What happens if the crypto price drops between payday and when the employee sells?", answer: "The employee bears the market risk once they receive the crypto payment. The taxable income is based on the fair market value at the time of receipt, regardless of subsequent price movements. If the employee sells at a lower price later, they can claim a capital loss on the difference. Some payroll services offer instant conversion to stablecoins to mitigate this risk for employees who prefer stable value." },
        { question: "How do I handle payroll for a global remote team?", answer: "Use an Employer of Record (EOR) service like Deel, Remote, or Papaya Global that handles local employment compliance, payroll processing, and crypto payment options across jurisdictions. These services manage local tax withholding, benefits administration, and employment contracts while allowing you to fund payroll in crypto. For contractors, platforms like Bitwage and Franklin handle multi-currency disbursements with tax documentation." },
      ]}
      relatedArticles={[
        { title: "Best Payroll Platforms", href: "/web3-business/best/payroll", category: "Web3 Business" },
        { title: "Web3 Business Taxes", href: "/web3-business/learn/business-taxes", category: "Web3 Business" },
        { title: "Treasury Management", href: "/web3-business/learn/treasury-management", category: "Web3 Business" },
      ]}
    >
      <h2 id="platforms">Crypto Payroll Platforms</h2>
      <p>Dedicated crypto payroll platforms simplify the process of paying teams in cryptocurrency while handling tax compliance and reporting. Deel is the market leader for global teams, offering crypto payment options alongside traditional payroll in 150+ countries with full employment compliance, tax withholding, and benefits management. Bitwage specializes in crypto payroll for US companies, allowing employees and contractors to receive any percentage of their pay in Bitcoin, Ethereum, or stablecoins while the employer pays in fiat. Franklin provides treasury-to-payroll infrastructure for DAOs and crypto companies, connecting multi-sig wallets to automated payment flows with built-in tax reporting. Rise (formerly Utopia Labs) offers payroll specifically designed for DAOs, with Gnosis Safe integration and contributor management. For smaller teams, Request Network provides simple invoicing and payment streaming through Superfluid, where contributors receive continuous payment by the second rather than in periodic lump sums.</p>

      <h2 id="employee-vs-contractor">Employee vs. Contractor Classification</h2>
      <p>Properly classifying your team members as employees or independent contractors is critical and has significant tax and legal implications. In the US, the IRS uses behavioral control, financial control, and relationship type factors to determine classification. Employees are subject to payroll tax withholding, receive W-2 forms, and may be entitled to benefits. Contractors control how and when they work, receive 1099-NEC forms, and handle their own tax obligations. Misclassification can result in back taxes, penalties, and legal liability. Web3 teams often have a mix of both: core team members who work fixed schedules and use company tools are likely employees, while bounty hunters, part-time advisors, and project-based developers are typically contractors. DAO contributors create particularly ambiguous situations since they may not have a traditional employer-employee relationship. When in doubt, consult an employment attorney in each jurisdiction where you have team members.</p>

      <h2 id="tax-compliance">Tax Compliance and Withholding</h2>
      <p>Paying in crypto does not change your employer tax obligations. For US employees paid in crypto, the employer must calculate withholding based on the fair market value of the crypto at the time of payment, withhold and remit federal income tax, Social Security, and Medicare in fiat to the IRS, report the compensation on W-2 forms using the fiat value, and pay employer portions of payroll taxes. For international employees, an Employer of Record service handles local tax obligations, which vary by country. For contractors, you must issue 1099-NEC forms for US contractors receiving $600 or more in aggregate value per year and collect W-8BEN forms from international contractors. Crypto payroll platforms automate most of these obligations by calculating fair market values at payment time, generating required tax forms, and maintaining audit-ready records. However, ultimate tax compliance responsibility rests with the employer.</p>

      <h2 id="best-practices">Operational Best Practices</h2>
      <p>Establish a clear crypto compensation policy that defines which cryptocurrencies are available for payment (typically BTC, ETH, USDC, and your native token if applicable), how exchange rates are determined (specify the oracle or exchange rate source and the snapshot time), what frequency payments are made (monthly, bi-weekly, or continuous streaming), and how contributors elect and change their fiat-to-crypto payment split. Process payroll from a dedicated treasury wallet separate from operational funds to maintain clean accounting trails. Batch payments when possible to reduce gas costs on EVM chains. Consider using Layer 2 networks like Arbitrum or Base for token payments to minimize transaction fees for both the company and recipients. Document all payroll transactions with corresponding fiat values at the time of payment for tax and accounting purposes. Finally, communicate clearly with your team about the tax implications of receiving crypto compensation, as many contributors may not be aware of their personal tax obligations on crypto income.</p>
    </LearnPageLayout>
  );
}
