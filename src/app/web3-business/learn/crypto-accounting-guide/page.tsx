import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Accounting Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Cryptocurrency accounting requires tracking complex transactions across wallets, exchanges, DeFi protocols, and blockchains...",
};

export default function CryptoAccountingGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Accounting Guide"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="10 min"
      intro="Cryptocurrency accounting requires tracking complex transactions across wallets, exchanges, DeFi protocols, and blockchains. Understanding crypto-specific challenges ensures accurate financial reporting."
      toc={[
        { id: "section-1", title: "section-1", level: 2 },
        { id: "accounting-challenges", title: "Accounting Challenges", level: 2 },
        { id: "section-2", title: "section-2", level: 2 },
        { id: "transaction-categorization", title: "Transaction Categorization", level: 2 },
        { id: "section-3", title: "section-3", level: 2 },
        { id: "tax-reporting", title: "Tax Reporting", level: 2 },
        { id: "section-4", title: "section-4", level: 2 },
        { id: "tools-and-processes", title: "Tools and Processes", level: 2 }
      ]}
      faqs={[
        { question: "How do I account for crypto transactions?", answer: "Track all transactions including buys, sells, swaps, transfers, staking rewards, and DeFi interactions. Record fair market value in fiat at the time of each transaction. Use FIFO, LIFO, or specific identification for cost basis calculation as permitted by your jurisdiction." },
        { question: "Do I need a crypto tax specialist?", answer: "For businesses with significant crypto activity, a tax professional experienced with cryptocurrency is highly recommended. Crypto tax rules are complex and evolving, and errors can result in significant penalties or missed optimization opportunities." },
      ]}
      relatedArticles={[
        { title: "Crypto Compliance Guide", href: "/web3-business/learn/crypto-compliance-guide", category: "Web3 Business" },
        { title: "Best Accounting Tools", href: "/web3-business/best/accounting-tools", category: "Web3 Business" },
        { title: "Crypto Business Guide", href: "/web3-business/learn/crypto-business-guide", category: "Web3 Business" },
      ]}
    >
      <section id="section-1">
        <h2>Accounting Challenges</h2>
        <p>Cryptocurrency accounting presents challenges that traditional accounting frameworks were not designed to handle. Transactions occur across multiple chains and protocols with varying data availability. DeFi interactions create complex transaction chains where a single user action may generate dozens of on-chain events. Cost basis tracking requires historical price data for potentially thousands of different tokens at the exact timestamp of each transaction.</p>
        <p>Accounting standards for crypto are still being developed globally. FASB, IASB, and national accounting bodies are working to establish consistent treatment for digital assets. Current guidance classifies most crypto as intangible assets, though this is evolving. Businesses must navigate uncertainty while maintaining defensible accounting positions that can withstand regulatory scrutiny and audit examination.</p>
      </section>

      <section id="section-2">
        <h2>Transaction Categorization</h2>
        <p>Proper categorization is foundational to crypto accounting. Common categories include purchases and sales, token swaps, staking rewards, mining or validator income, airdrops, DeFi yield, liquidity provision, NFT transactions, and transfers between owned wallets. Each category may have different tax treatment and accounting implications. Misclassification can lead to incorrect tax reporting and financial statements.</p>
        <p>DeFi transactions present particular categorization challenges. Providing liquidity involves depositing tokens, receiving LP tokens, earning fees, and withdrawing assets, each step potentially requiring separate accounting treatment. Yield farming may generate income classified differently than trading gains. Establishing clear categorization rules and applying them consistently across all crypto activities ensures defensible accounting practices.</p>
      </section>

      <section id="section-3">
        <h2>Tax Reporting</h2>
        <p>Crypto tax reporting requires calculating capital gains and losses on dispositions, recognizing income from staking and mining, valuing received tokens at fair market value, and reporting all activity to relevant tax authorities. Cost basis methods including FIFO, LIFO, and specific identification produce different tax outcomes. Choose methods strategically within legal bounds and apply them consistently.</p>
        <p>International businesses face additional complexity from cross-border transactions, transfer pricing between entities, and varying crypto tax treatment across jurisdictions. Withholding obligations for crypto payments to contractors and employees add another layer. Proactive tax planning with experienced crypto tax advisors helps optimize tax positions legally while maintaining full compliance with reporting obligations.</p>
      </section>

      <section id="section-4">
        <h2>Tools and Processes</h2>
        <p>Implement crypto accounting software that connects to all your wallets, exchanges, and DeFi protocols for automated transaction import. Tools like Cryptio, Bitwave, and CoinTracker provide different levels of functionality from basic tax reporting to enterprise-grade accounting integration. Choose tools that integrate with your existing accounting software for seamless financial consolidation.</p>
        <p>Establish accounting processes early rather than trying to reconstruct records retroactively. Regular reconciliation between on-chain data and accounting records catches discrepancies before they compound. Document all accounting policies and procedures for consistency and audit readiness. Invest in training for finance team members on crypto-specific accounting concepts and tools to build internal competency.</p>
      </section>
    </LearnPageLayout>
  );
}
