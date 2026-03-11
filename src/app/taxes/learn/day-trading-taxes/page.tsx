import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Day Trading Crypto Taxes (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how day trading cryptocurrency is taxed. Understand short-term capital gains, wash sale rules, trader tax status, and reporting high-volume transactions.",
  keywords: ["crypto day trading taxes", "short-term capital gains crypto", "crypto trader tax", "high frequency crypto taxes"],
};

export default function DayTradingTaxesPage() {
  return (
    <LearnPageLayout
      title="Day Trading Crypto Taxes"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="9 min"
      intro="Day trading cryptocurrency generates significant tax obligations that active traders must understand to remain compliant and optimize their tax position. Most day trading profits are taxed as short-term capital gains at ordinary income tax rates, which can be substantially higher than long-term rates. This guide covers the specific tax rules, reporting requirements, and strategies relevant to high-frequency crypto traders."
      toc={[
        { id: "short-term-gains", title: "Short-Term Capital Gains", level: 2 },
        { id: "wash-sale-considerations", title: "Wash Sale Considerations", level: 2 },
        { id: "trader-tax-status", title: "Trader Tax Status", level: 2 },
        { id: "record-keeping", title: "Record Keeping for Day Traders", level: 2 },
      ]}
      faqs={[
        { question: "Are all day trading profits taxed at higher rates?", answer: "Yes, if held less than one year. Short-term capital gains are taxed at your ordinary income tax rate, which can be as high as 37% federally plus state taxes. Only assets held for more than one year qualify for the lower long-term capital gains rates of 0%, 15%, or 20%." },
        { question: "Can day traders deduct trading losses?", answer: "Yes. Capital losses offset capital gains dollar for dollar. If your losses exceed gains, you can deduct up to $3,000 of net capital losses against ordinary income per year. Excess losses carry forward to future years. Traders with mark-to-market election can deduct all losses as ordinary losses without the $3,000 limitation." },
      ]}
      relatedArticles={[
        { title: "Cost Basis Methods", href: "/taxes/learn/cost-basis-methods", category: "Taxes" },
        { title: "Tax Loss Harvesting", href: "/taxes/learn/tax-loss-harvesting", category: "Taxes" },
      ]}
    >
      <section id="short-term-gains">
        <h2>Short-Term Capital Gains</h2>
        <p>The fundamental tax challenge for day traders is that virtually all profits are short-term capital gains. Any crypto asset held for one year or less before selling is taxed at short-term rates, which are the same as your ordinary income tax rates. For high-income traders, this means federal rates up to 37% plus the 3.8% Net Investment Income Tax, plus applicable state taxes. In high-tax states like California or New York, the combined rate can exceed 50%. This stands in stark contrast to long-term capital gains rates of 0%, 15%, or 20% that buy-and-hold investors enjoy. The high tax rate means day traders need to generate significantly higher gross returns to achieve the same after-tax results as longer-term investors. Each individual trade creates a separate tax lot with its own holding period, cost basis, and gain or loss calculation. With hundreds or thousands of trades per year, the reporting burden is substantial. Accurate tracking of every trade's timestamp, amount, cost basis, and proceeds is essential. Even profitable trading strategies may be marginally profitable after accounting for the short-term tax rate, making tax efficiency an integral part of any day trading approach.</p>
      </section>
      <section id="wash-sale-considerations">
        <h2>Wash Sale Considerations</h2>
        <p>The wash sale rule prohibits claiming a loss on a security sold at a loss if you repurchase the same or substantially identical security within 30 days before or after the sale. As of current IRS guidance, the wash sale rule technically applies only to securities and does not explicitly apply to cryptocurrency, which the IRS classifies as property rather than a security. This has allowed crypto day traders to sell at a loss and immediately repurchase the same asset to harvest the tax loss while maintaining their position. However, this favorable treatment may not last. The Build Back Better Act and subsequent legislative proposals have included provisions to extend wash sale rules to cryptocurrency. Additionally, some tax professionals argue that certain crypto assets may already qualify as securities under evolving SEC interpretations. Traders should monitor legislative developments closely. Even under current rules, aggressive use of the crypto wash sale exception could attract audit attention, especially for very large loss claims with immediate repurchases. Conservative traders may choose to voluntarily observe wash sale rules for crypto. Regardless of your approach, document your reasoning and maintain detailed records of all transactions that could be affected by wash sale considerations.</p>
      </section>
      <section id="trader-tax-status">
        <h2>Trader Tax Status</h2>
        <p>Trader tax status is an IRS classification that provides significant tax advantages for qualifying active traders. To qualify, you must trade with substantial frequency, regularity, and continuity with the primary intent of capturing short-term price swings. The IRS looks at factors including the number of trades, holding periods, time devoted to trading, and whether trading is your primary income source. There is no bright-line test, but executing trades on most trading days and averaging at least four trades per day is commonly cited as a guideline. Qualifying traders can deduct trading-related business expenses on Schedule C, including software subscriptions, data feeds, home office expenses, and education. More significantly, traders who elect mark-to-market accounting under Section 475 can treat all gains and losses as ordinary, eliminating the $3,000 capital loss limitation and allowing full deduction of trading losses against other income. The mark-to-market election must be filed by the due date of the prior year's tax return for the year you want it to take effect. Crypto-specific guidance on trader tax status is limited, and the qualification criteria developed for stock and commodity traders may apply differently. Consult a tax professional experienced in both trader tax status and cryptocurrency before pursuing this election.</p>
      </section>
      <section id="record-keeping">
        <h2>Record Keeping for Day Traders</h2>
        <p>Meticulous record keeping is non-negotiable for crypto day traders. Every trade must be documented with the date and time of execution, the asset traded, the quantity, the price per unit, total proceeds or cost, any fees paid, and the exchange where the trade occurred. For tax reporting, each trade is reported as a separate line item on Form 8949. With thousands of trades, this typically requires the summary reporting method where individual trades are listed on an attached statement and only totals appear on Form 8949. Crypto tax software is essential for day traders. Tools like CryptoTaxCalculator, Koinly, and TokenTax can import trade history from exchanges via API or CSV and calculate gains and losses using your chosen cost basis method. The choice of cost basis method matters significantly for day traders. HIFO minimizes current-year gains by selling the highest-cost lots first. Specific identification provides maximum flexibility. Test different methods in your tax software to see the impact before filing. Reconcile your tax software calculations against exchange records periodically to catch any import errors or missing transactions. For traders using multiple exchanges, ensure internal transfers are not misclassified as sales. Set aside estimated quarterly tax payments based on your trading profits to avoid underpayment penalties at year end.</p>
      </section>
    </LearnPageLayout>
  );
}
