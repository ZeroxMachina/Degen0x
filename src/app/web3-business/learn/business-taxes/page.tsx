import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Web3 Business Taxes (${CURRENT_YEAR}) - Crypto Company Tax Guide | CryptoDegen`,
  description: `Navigate crypto business taxes. Entity taxation, token treasury accounting, payroll obligations, multi-jurisdiction compliance, and deductions for Web3 companies.`,
};

export default function BusinessTaxesPage() {
  return (
    <LearnPageLayout
      title="Web3 Business Taxes Guide"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="10 min"
      intro="Taxation for Web3 businesses involves unique complexities that traditional tax advisors may not fully understand. From treasury token holdings and contributor payments to multi-jurisdiction obligations and token sale proceeds, this guide covers the key tax considerations that every crypto business operator needs to understand."
      toc={[
        { id: "entity-taxation", title: "Entity Taxation Basics", level: 2 },
        { id: "treasury-accounting", title: "Treasury and Token Accounting", level: 2 },
        { id: "payroll-taxes", title: "Payroll and Contractor Obligations", level: 2 },
        { id: "deductions", title: "Common Deductions for Web3 Companies", level: 2 },
        { id: "multi-jurisdiction", title: "Multi-Jurisdiction Considerations", level: 2 },
      ]}
      faqs={[
        { question: "Are token sales taxable for the issuing company?", answer: "Generally yes. In the US, proceeds from token sales are typically treated as income to the issuing entity. The tax treatment depends on how the token is classified (utility token, governance token, or security) and the entity structure. Some structures, like non-profit foundations in favorable jurisdictions, may reduce or defer the tax obligation. Consult a crypto-specialized tax attorney for your specific situation." },
        { question: "How are DAO treasuries taxed?", answer: "DAO treasury taxation is complex and evolving. If the DAO lacks a legal entity, members may be treated as participants in a general partnership with pass-through taxation. DAOs registered as LLCs can elect partnership or corporate taxation. Token holdings in a DAO treasury may trigger taxable events when sold, swapped, or used for yield farming, even if governed by smart contracts rather than individuals." },
        { question: "Do I need to issue 1099s to crypto contributors?", answer: "If your US-based entity pays US-based contractors more than $600 in a tax year (whether in crypto or fiat), you are generally required to issue a 1099-NEC. For crypto payments, the fair market value at the time of payment determines the reportable amount. International contractors are typically issued W-8BEN forms. Payroll services like Deel and Remote handle these compliance requirements automatically." },
      ]}
      relatedArticles={[
        { title: "Crypto Payroll Guide", href: "/web3-business/learn/crypto-payroll", category: "Web3 Business" },
        { title: "Best Crypto Accounting Tools", href: "/web3-business/best/accounting", category: "Web3 Business" },
        { title: "Regulatory Compliance", href: "/web3-business/learn/regulatory-compliance", category: "Web3 Business" },
      ]}
    >
      <h2 id="entity-taxation">Entity Taxation Basics</h2>
      <p>Your entity structure directly determines your tax obligations. A US C-Corporation is subject to corporate income tax (currently 21% federal) on net profits, with shareholders paying additional tax on dividends. An LLC can elect pass-through taxation where profits and losses flow to individual member tax returns, avoiding double taxation. Non-profit foundations used by many token projects may be exempt from income tax in certain jurisdictions but must comply with strict rules about distributions and purpose. Offshore structures in jurisdictions like the Cayman Islands or BVI may offer favorable tax treatment for non-US source income, but US persons and US-source income still trigger US tax obligations. The IRS has increased enforcement of offshore crypto entity reporting, and any US person with authority over foreign accounts holding more than $10,000 must file an FBAR. Work with a tax attorney who understands both Web3 entity structures and international tax law.</p>

      <h2 id="treasury-accounting">Treasury and Token Accounting</h2>
      <p>Accounting for a crypto treasury requires tracking the fair market value of token holdings, recognizing gains and losses on dispositions, and properly categorizing transaction types. Under current US GAAP and FASB rules, crypto assets are classified as indefinite-lived intangible assets, meaning impairment losses must be recognized when the price drops below cost basis but unrealized gains are not recorded until sold. This can create misleading financial statements during volatile markets. For tax purposes, every token swap, sale, liquidity provision, and yield farming harvest is a potentially taxable event. Use crypto accounting software like Bitwave, Cryptio, or Tres Finance to track cost basis across wallets, categorize transactions, and generate tax-ready reports. Reconcile on-chain transactions with off-chain records monthly rather than waiting until year-end when the complexity becomes unmanageable.</p>

      <h2 id="payroll-taxes">Payroll and Contractor Obligations</h2>
      <p>Paying contributors in crypto creates specific tax obligations for both the employer and recipient. When paying employees in cryptocurrency, the fair market value at the time of payment is treated as wages subject to income tax withholding, Social Security, and Medicare taxes. The employer must withhold and remit these taxes in fiat, even if the underlying compensation is paid in crypto. For independent contractors paid in crypto, the fair market value constitutes self-employment income reported on 1099-NEC forms. Token grants and vesting schedules add additional complexity. Tokens received through vesting are typically taxable as ordinary income at the fair market value on the vesting date. If subject to a substantial risk of forfeiture, an 83(b) election within 30 days of grant can shift taxation to the grant date, potentially at a lower value. Use payroll providers like Deel, Remote, or Franklin that handle crypto compensation compliance across jurisdictions.</p>

      <h2 id="deductions">Common Deductions for Web3 Companies</h2>
      <p>Web3 businesses can deduct ordinary and necessary business expenses just like traditional companies. Common deductions include smart contract audit costs, blockchain infrastructure expenses (RPC providers, node hosting, gas fees for business transactions), legal and accounting fees (often the largest expense for early-stage crypto companies), marketing and community building costs, software subscriptions and developer tools, remote team coworking and offsite expenses, and conference attendance and travel. Gas fees paid for business-purpose transactions are deductible as operational expenses. Token incentives distributed to users (liquidity mining rewards, airdrops for marketing) may be deductible as marketing expenses, though the tax treatment is still evolving. Keep detailed records of all business expenses with receipts, as the IRS is increasing scrutiny of crypto business deductions. Classify expenses correctly and maintain separation between personal and business crypto wallets.</p>

      <h2 id="multi-jurisdiction">Multi-Jurisdiction Considerations</h2>
      <p>Most Web3 businesses operate across multiple jurisdictions with remote teams, global users, and entities in different countries. This creates complex tax obligations including transfer pricing rules that govern how revenue and expenses are allocated between related entities in different jurisdictions, permanent establishment risks where having employees or significant operations in a country can trigger local corporate tax obligations, VAT and GST obligations in countries that classify crypto services as taxable supplies, and withholding tax requirements on payments to foreign contractors or entities. Double tax treaties between countries can reduce the overall tax burden, but navigating these requires specialized international tax advice. Establish a tax compliance framework early that identifies your obligations in each jurisdiction where you have team members, entities, or significant user activity. The cost of proactive compliance is far less than the penalties and remediation costs of being found non-compliant.</p>
    </LearnPageLayout>
  );
}
