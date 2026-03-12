import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Loan Interest Rates Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Compare crypto loan interest rates across CeFi and DeFi platforms. Understand fixed vs variable rates, what affects rates, and how to find the best deal.",
  keywords: ["crypto loan interest rates", "crypto borrowing rates", "defi borrow rates", "crypto loan apr"],
};

export default function CryptoLoanInterestRatesPage() {
  return (
    <LearnPageLayout
      title="Crypto Loan Interest Rates Guide"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min"
      intro="Interest rates on crypto loans vary dramatically depending on the platform, collateral type, loan terms, and market conditions. CeFi platforms typically charge 2-12% APR while DeFi protocols offer variable rates driven by supply and demand. Understanding what drives these rates and how to compare them effectively can save you significant money over the life of your loan."
      toc={[
        { id: "rate-landscape", title: "rate-landscape", level: 2 },
        { id: "current-rate-landscape", title: "Current Rate Landscape", level: 2 },
        { id: "what-affects-rates", title: "what-affects-rates", level: 2 },
        { id: "what-affects-rates", title: "What Affects Rates", level: 2 },
        { id: "fixed-vs-variable", title: "fixed-vs-variable", level: 2 },
        { id: "fixed-vs-variable-rates", title: "Fixed vs Variable Rates", level: 2 },
        { id: "hidden-costs", title: "hidden-costs", level: 2 },
        { id: "hidden-costs-to-watch", title: "Hidden Costs to Watch", level: 2 },
        { id: "finding-best-rate", title: "finding-best-rate", level: 2 },
        { id: "finding-the-best-rate", title: "Finding the Best Rate", level: 2 }
      ]}
      faqs={[
        { question: "What is a good interest rate for a crypto loan?", answer: "For Bitcoin-backed loans, rates below 8% APR are competitive. DeFi variable rates for major assets typically range from 2-6%. Rates above 12% should be scrutinized carefully. Always compare the total cost including fees, not just the headline rate." },
        { question: "Why are DeFi rates often lower than CeFi?", answer: "DeFi protocols have lower operational costs with no employees, offices, or compliance departments. They also face more direct competition since rates are transparent and users can switch easily. CeFi platforms include operational margins in their rates." },
      ]}
      relatedArticles={[
        { title: "How Crypto Loans Work", href: "/crypto-loans/learn/how-crypto-loans-work", category: "Crypto Loans" },
        { title: "Interest Rates Comparison", href: "/crypto-loans/learn/interest-rates-comparison", category: "Crypto Loans" },
      ]}
    >
      <section id="rate-landscape">
        <h2>Current Rate Landscape</h2>
        <p>Crypto loan interest rates span a wide range across platforms. Major CeFi platforms like Nexo offer tiered rates from 0% to 13.9% depending on loyalty level and collateral type. DeFi protocols like Aave charge variable rates that fluctuate with market demand, typically ranging from 2% to 8% for major assets during normal conditions. MakerDAO charges stability fees on DAI vaults that are set by governance, while Liquity charges a one-time fee instead of ongoing interest. The rate environment is influenced by broader crypto market conditions: during bull markets with high leverage demand, borrowing rates rise. During quieter periods, competition drives rates lower. Stablecoin borrowing rates tend to be higher than volatile asset rates because stablecoins are in higher demand for trading and yield strategies.</p>
      </section>
      <section id="what-affects-rates">
        <h2>What Affects Rates</h2>
        <p>Several factors influence the interest rate you receive. Collateral type matters because riskier collateral commands higher rates to compensate for liquidation risk. Loan-to-value ratio affects rates on some platforms, with higher LTV positions paying more. Platform competition keeps rates in check, with transparent DeFi rates creating a benchmark. Market conditions drive borrowing demand, with rates rising during bullish sentiment when traders want leverage. On CeFi platforms, your loyalty tier or relationship can significantly impact rates. On DeFi protocols, utilization rate is the primary driver: when a lending pool has high utilization, rates spike to attract more deposits and discourage further borrowing.</p>
      </section>
      <section id="fixed-vs-variable">
        <h2>Fixed vs Variable Rates</h2>
        <p>Most crypto loans carry variable interest rates that can change at any time. CeFi platforms may adjust rates based on market conditions with notice periods. DeFi rates change every block based on algorithmic models. Fixed rate options are available but more limited. Notional Finance and Term Finance offer true fixed-rate DeFi borrowing with defined maturity dates. Some CeFi platforms offer fixed-rate loan products for specific terms. The tradeoff is familiar from traditional finance: variable rates are typically lower on average but unpredictable, while fixed rates provide certainty at a premium. For short-term borrowing, variable rates usually win. For longer-term loans where cost predictability matters, fixed rates eliminate rate risk.</p>
      </section>
      <section id="hidden-costs">
        <h2>Hidden Costs to Watch</h2>
        <p>The headline interest rate is not the only cost of a crypto loan. Origination fees are charged by some platforms as a one-time percentage of the loan amount. Liquidation penalties of 5-15% apply if your position is liquidated. Gas fees on Ethereum-based DeFi loans can add significant cost for smaller positions. Some platforms charge withdrawal fees for accessing your borrowed funds. Early repayment penalties exist on certain fixed-rate products. CeFi platforms may charge exchange fees if you need to convert between currencies. When comparing loan offers, calculate the total annual cost including all fees, not just the interest rate. A lower interest rate with high fees may cost more than a slightly higher rate with no additional charges.</p>
      </section>
      <section id="finding-best-rate">
        <h2>Finding the Best Rate</h2>
        <p>To find the best crypto loan rate, start by checking multiple platforms. DeFi rate aggregators like DeFi Llama display current borrowing rates across protocols. For CeFi, compare published rate tables from major platforms. Consider the total cost of borrowing including all fees over your expected loan duration. Factor in gas costs for DeFi loans, especially on Ethereum mainnet where a single transaction can cost $5-50. Use Layer 2 networks like Arbitrum or Base for smaller DeFi loans to minimize gas costs. Check if CeFi platforms offer promotional rates or loyalty benefits that could reduce your cost. Finally, consider refinancing options: if rates drop significantly, you may benefit from repaying an existing loan and reborrowing at the new lower rate.</p>
      </section>
    </LearnPageLayout>
  );
}
