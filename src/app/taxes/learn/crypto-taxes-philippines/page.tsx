import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in the Philippines (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Complete guide to cryptocurrency taxes in the Philippines. Learn about income tax, capital gains, and BIR reporting for Filipino crypto investors.",
};

export default function CryptoTaxesPhilippinesPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in the Philippines"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="The Philippines has seen rapid crypto adoption, driven by play-to-earn gaming, remittances, and speculative trading. While specific crypto tax legislation is limited, the Bureau of Internal Revenue (BIR) treats crypto gains as taxable income under existing tax laws. The BSP (Bangko Sentral ng Pilipinas) regulates virtual currency exchanges as remittance transfer companies. Filipino crypto investors should understand how existing tax rules apply to their crypto activities."
      toc={[
        { id: "tax-treatment", title: "Tax Treatment of Crypto", level: 2 },
        { id: "income-tax-rates", title: "Income Tax Rates", level: 2 },
        { id: "play-to-earn", title: "Play-to-Earn and Gaming Taxes", level: 2 },
        { id: "bsp-regulation", title: "BSP Regulation", level: 2 },
        { id: "filing-tips", title: "Filing Tips", level: 2 },
      ]}
      faqs={[
        { question: "Are crypto gains taxable in the Philippines?", answer: "Yes. While the Philippines lacks specific crypto tax legislation, the BIR considers crypto gains as taxable income under the National Internal Revenue Code. Gains from selling or trading crypto are subject to income tax. The BIR has signaled intent to issue specific guidance on crypto taxation." },
        { question: "What tax rate applies to crypto in the Philippines?", answer: "Crypto gains are added to your total income and taxed at progressive rates ranging from 0% (for income up to 250,000 PHP) to 35% (for income exceeding 8 million PHP). The specific rate depends on your total annual income bracket." },
        { question: "Do I need to pay tax on Axie Infinity earnings?", answer: "Yes. Income from play-to-earn games like Axie Infinity is taxable income. The PHP value of tokens and NFTs when earned should be reported as income. The BIR specifically addressed play-to-earn income during the Axie Infinity boom, indicating that such earnings are subject to income tax." },
        { question: "Are crypto remittances taxable?", answer: "Receiving crypto as a remittance is generally not a taxable event, similar to receiving peso remittances. However, if you subsequently sell the crypto at a profit, the gain may be taxable. Converting crypto remittances to PHP through an exchange triggers a potential gain calculation." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Thailand", href: "/taxes/learn/crypto-taxes-thailand", category: "Taxes" },
        { title: "Crypto Taxes in Vietnam", href: "/taxes/learn/crypto-taxes-vietnam", category: "Taxes" },
        { title: "Crypto Gaming Payments", href: "/spending/learn/crypto-gaming-payments", category: "Spending" },
      ]}
    >
      <h2 id="tax-treatment">Tax Treatment of Crypto</h2>
      <p>
        The Philippines does not yet have specific crypto tax legislation, but the BIR applies general tax principles to cryptocurrency transactions. Under the National Internal Revenue Code (NIRC), all income from whatever source is taxable unless specifically exempt. The BIR has not issued a Revenue Memorandum Circular specifically for crypto but has indicated through public statements and draft guidelines that crypto gains are taxable income. Selling crypto for PHP, trading one crypto for another at a profit, and using crypto to purchase goods or services are all potentially taxable events. The gain is calculated as the difference between the fair market value at disposal and the acquisition cost. Filipino residents are taxed on worldwide income, meaning gains from trading on foreign exchanges are also taxable.
      </p>

      <h2 id="income-tax-rates">Income Tax Rates</h2>
      <p>
        Under the TRAIN Law (Tax Reform for Acceleration and Inclusion), individual income tax rates are progressive. Annual income up to 250,000 PHP is exempt from income tax. Income from 250,000 to 400,000 PHP is taxed at 15% of the excess. The rate continues to increase through brackets up to 35% for income exceeding 8 million PHP. Crypto gains are added to your total income and taxed at your marginal rate. Self-employed individuals and freelancers earning crypto may opt for the 8% flat rate on gross income exceeding 250,000 PHP if their total gross receipts do not exceed 3 million PHP. Corporate entities holding or trading crypto pay corporate income tax at the standard rate. The tax year follows the calendar year, and annual returns are due by April 15.
      </p>

      <h2 id="play-to-earn">Play-to-Earn and Gaming Taxes</h2>
      <p>
        The Philippines became the global center of play-to-earn gaming during the Axie Infinity boom, with hundreds of thousands of Filipino players earning SLP (Smooth Love Potion) and AXS tokens. The BIR took notice and indicated that play-to-earn income is taxable. Income from gaming should be valued in PHP at the time of receipt (when tokens are claimed or earned). If you sell the tokens later at a different price, the difference between the sale price and the value at receipt is an additional gain or loss. For players using scholarship programs, the income received (typically a share of earnings) is the taxable amount. The scholarship manager who takes a cut also has taxable income. The decline of play-to-earn from its peak has reduced the urgency, but the tax principles apply to all blockchain gaming income including new games and platforms.
      </p>

      <h2 id="bsp-regulation">BSP Regulation</h2>
      <p>
        The Bangko Sentral ng Pilipinas regulates Virtual Currency Exchanges (VCEs) as remittance and transfer companies under BSP Circular 944. Licensed VCEs must implement KYC procedures, AML controls, and comply with BSP reporting requirements. Major Philippine exchanges like PDAX and Coins.ph operate under BSP licenses. The SEC Philippines has also been active in regulating digital asset offerings and has flagged unlicensed crypto investment schemes. The BSP framework creates an infrastructure that could support tax enforcement, as licensed exchanges maintain records of user transactions. The BSP has been progressive in recognizing crypto as a legitimate payment and remittance mechanism while ensuring consumer protection. The regulatory framework continues to evolve with potential new legislation addressing broader crypto regulation.
      </p>

      <h2 id="filing-tips">Filing Tips</h2>
      <p>
        Filipino crypto investors should maintain detailed records of all transactions. Track the PHP value at the time of each purchase, sale, trade, and income receipt. Use crypto tax calculators that support PHP valuations. The BIR eFPS (Electronic Filing and Payment System) and eBIR Forms system can be used for filing. Report crypto income in the appropriate section of your annual Income Tax Return (BIR Form 1700 for employees or 1701 for self-employed). If you earn significant crypto income, consider whether quarterly filing is required. Keep records for at least 10 years as the BIR can audit returns within the prescriptive period. Given the evolving nature of Philippine crypto tax guidance, consulting a Philippine CPA familiar with crypto is recommended. The BIR has been working with international tax bodies on crypto information exchange, which will improve their ability to detect unreported crypto income.
      </p>
    </LearnPageLayout>
  );
}
