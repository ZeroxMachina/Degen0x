import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Tax Implications of DeFi Lending (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Complete guide to DeFi lending taxes. Learn how interest income, token rewards, and lending activities are taxed in major jurisdictions.",
};

export default function DefiLendingTaxesPage() {
  return (
    <LearnPageLayout title="Tax Implications of DeFi Lending" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="8 min read"
      intro="DeFi lending creates numerous taxable events that many users overlook. Interest earned from lending, governance token rewards, liquidation events, and even depositing into certain protocols can trigger tax obligations. The complexity of tracking DeFi transactions across multiple protocols and chains makes tax compliance challenging but essential. This guide covers the key tax considerations for DeFi lending activities."
      toc={[{ id: "interest-income", title: "Interest Income Taxation", level: 2 }, { id: "token-rewards", title: "Governance Token Rewards", level: 2 }, { id: "deposit-withdrawal", title: "Deposit and Withdrawal Events", level: 2 }, { id: "tracking-tools", title: "Tax Tracking Tools", level: 2 }]}
      faqs={[
        { question: "Is DeFi lending interest taxable?", answer: "Yes, in most jurisdictions. Interest earned from DeFi lending is treated as income, taxable at your applicable income tax rate. This includes interest from protocols like Aave, Compound, and other lending platforms. The income is typically recognized as it accrues or when withdrawn." },
        { question: "Are AAVE and COMP token rewards taxable?", answer: "Yes. Governance tokens received as lending incentives are taxable income at their fair market value when received. If you later sell these tokens, any gain or loss from the received value is a capital gain or loss." },
        { question: "Do I owe tax when I deposit into a lending pool?", answer: "This is debated. Some argue that receiving aTokens or cTokens for your deposit is a taxable swap. Others argue it is a deposit receipt, not a taxable event. The conservative approach treats it as a taxable event. Consult a tax professional for your jurisdiction." },
      ]}
      relatedArticles={[
        { title: "Crypto Loan Taxes", href: "/crypto-loans/learn/crypto-loan-taxes", category: "Crypto Loans" },
        { title: "DeFi Lending Strategies", href: "/defi-lending/learn/defi-lending-strategies", category: "DeFi Lending" },
        { title: "Crypto Taxes in France", href: "/taxes/learn/crypto-taxes-france", category: "Taxes" },
      ]}
    >
      <h2 id="interest-income">Interest Income Taxation</h2>
      <p>Interest earned from DeFi lending is treated as ordinary income in most jurisdictions. In the US, it is taxed at your marginal income tax rate (up to 37% federal plus state taxes). The key question is when income is recognized. For protocols where interest-bearing tokens (aTokens, cTokens) continuously accrue value, there are two interpretations: income recognized continuously as it accrues, or income recognized when you withdraw or sell the interest-bearing tokens. The IRS has not issued definitive guidance on this specific question. The conservative approach recognizes income as it accrues, avoiding potential penalties for underreporting. In the UK, HMRC treats DeFi lending income as miscellaneous income. In the EU, treatment varies by country. Regardless of jurisdiction, track the value of interest earned at regular intervals (daily or at least monthly) in your local currency for accurate reporting.</p>

      <h2 id="token-rewards">Governance Token Rewards</h2>
      <p>Many lending protocols distribute governance tokens (AAVE, COMP, MORPHO) as additional incentives to lenders and borrowers. These rewards are taxable income at fair market value when received or claimed. The cost basis for the received tokens equals the income amount reported. If you later sell the governance tokens, the gain or loss between the sale price and the cost basis (income value) is a capital gain or loss. Timing matters: some protocols require you to claim rewards manually, while others distribute automatically. The taxable moment is generally when the tokens enter your control. Unclaimed rewards that you have the right to claim may or may not be taxable depending on interpretation. Auto-compounding strategies that reinvest rewards create additional taxable events at each compound. The value of token rewards can fluctuate significantly, creating a potential mismatch between the income recognized and the eventual value when you sell.</p>

      <h2 id="deposit-withdrawal">Deposit and Withdrawal Events</h2>
      <p>Whether depositing crypto into a lending protocol constitutes a taxable event is one of the most debated DeFi tax questions. When you deposit ETH into Aave and receive aETH, you have exchanged one token for another. Some jurisdictions and tax professionals treat this as a taxable disposal of ETH. Others argue it is a deposit into a smart contract account, similar to depositing into a bank, and is not taxable. The answer may depend on the technical nature of the specific protocol. For protocols where you receive a different token (aETH, cUSDC), the swap argument is stronger. For protocols that accept deposits without issuing separate tokens, the deposit account argument is stronger. Withdrawals may also trigger tax events if the withdrawn amount exceeds the deposited amount (the excess being income). Liquidation events are clearly taxable as forced disposals of collateral.</p>

      <h2 id="tracking-tools">Tax Tracking Tools</h2>
      <p>Given the complexity of DeFi lending taxes, automated tools are essential. Koinly supports multiple DeFi protocols and can import on-chain transactions automatically. CoinTracker integrates with major lending protocols and supports multiple countries. CryptoTaxCalculator has strong DeFi support including lending, borrowing, and yield farming categorization. Rotki is an open-source option that supports DeFi tracking. DeBank and Zapper provide portfolio views that help identify all positions across protocols. For accurate tax reporting: export transaction data from all lending protocols, use a tax calculator that understands DeFi-specific events, verify that the tool correctly categorizes deposits, withdrawals, interest, and rewards, and reconcile with on-chain records. Consider hiring a crypto-specialized tax professional for complex DeFi portfolios, as the cost is typically justified by the reduction in errors and potential penalties.</p>
    </LearnPageLayout>
  );
}
