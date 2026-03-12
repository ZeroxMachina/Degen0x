import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Brazil (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency taxes in Brazil. Learn about capital gains tax rates, the 35,000 BRL monthly exemption, Receita Federal reporting via GCAP, and the legal framework for crypto assets.",
  keywords: ["crypto taxes Brazil", "Receita Federal crypto", "cryptocurrency tax Brazil", "bitcoin taxes Brazil"],
};

export default function CryptoTaxesBrazilPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Brazil"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="10 min read"
      intro="Brazil has established a clear regulatory framework for cryptocurrency taxation under Receita Federal (the Brazilian IRS). Crypto assets are subject to capital gains tax with progressive rates from 15 to 22.5 percent, though monthly sales under 35,000 BRL are exempt from taxation. Brazil has also introduced mandatory monthly reporting for crypto transactions, making it one of the most regulated crypto markets in Latin America."
      toc={[
        { id: "framework", title: "framework", level: 2 },
        { id: "brazil", title: "Brazil", level: 2 }
      ]}
      faqs={[
        { question: "What is the tax rate on crypto gains in Brazil?", answer: "Brazil uses progressive rates: 15% on gains up to 5 million BRL, 17.5% on gains from 5 to 10 million BRL, 20% on gains from 10 to 30 million BRL, and 22.5% on gains above 30 million BRL. These rates apply to net monthly gains above the exemption threshold." },
        { question: "Is there a tax-free threshold for crypto in Brazil?", answer: "Yes. If your total crypto sales in a calendar month are 35,000 BRL or less, any gains from those sales are exempt from capital gains tax. This threshold applies to total sales volume, not just gains." },
        { question: "Do I need to report crypto holdings to Receita Federal?", answer: "Yes. Crypto holdings worth more than 5,000 BRL must be declared in your annual income tax return under the Assets and Rights section. Additionally, monthly transactions must be reported through the GCAP program." },
        { question: "Are crypto-to-crypto trades taxable in Brazil?", answer: "Yes. Trading one cryptocurrency for another is a taxable event. You must calculate the BRL value at the time of the transaction and report any gain through the monthly GCAP filing process." }
      ]}
      relatedArticles={[
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
        { title: "Capital Gains Explained", href: "/taxes/learn/capital-gains", category: "Taxes" },
        { title: "How Crypto Is Taxed", href: "/taxes/learn/how-crypto-is-taxed", category: "Taxes" }
      ]}
    >
      <h2 id="framework">Brazil&apos;s Crypto Tax Framework</h2>
      <p>
        Brazil&apos;s Receita Federal treats cryptocurrency as a financial asset subject to capital gains tax. The regulatory framework was formalized through Normative Instruction 1888/2019, which established mandatory reporting requirements for crypto transactions. Brazil&apos;s Crypto Framework Law (Marco Legal das Criptomoedas), enacted in 2023, further solidified the regulatory landscape by designating the Central Bank as the primary regulator for crypto assets used as payment and the Securities Commission (CVM) for crypto assets classified as securities. The tax rules apply to all residents regardless of which exchange or platform they use.
      </p>

      <h2 id="capital-gains">Capital Gains Tax Rates</h2>
      <p>
        Capital gains from crypto dispositions are taxed at progressive rates. Gains up to 5 million BRL are taxed at 15 percent. Gains between 5 and 10 million BRL are taxed at 17.5 percent. Gains between 10 and 30 million BRL face a 20 percent rate, and gains exceeding 30 million BRL are taxed at 22.5 percent. These rates apply to net gains calculated on a monthly basis. The cost basis is calculated using the weighted average method across all acquisitions of the same crypto asset. Transaction fees, including exchange fees and blockchain gas costs, can be added to the cost basis to reduce the taxable gain.
      </p>

      <h2 id="exemption">The 35,000 BRL Monthly Exemption</h2>
      <p>
        A key benefit for Brazilian crypto investors is the monthly exemption: if your total crypto sales in a given calendar month are 35,000 BRL or less, any capital gains from those sales are completely tax-free. This threshold applies to total disposal proceeds, not just profits. The exemption applies on a monthly basis, so you can potentially realize tax-free gains every month as long as total monthly sales stay below the threshold. This makes it advantageous for long-term investors to plan their exit strategy by spreading sales across multiple months. The exemption applies only to crypto traded on Brazilian exchanges or through domestic transactions.
      </p>

      <h2 id="reporting">Monthly &amp; Annual Reporting</h2>
      <p>
        Brazil requires monthly reporting of crypto capital gains through the GCAP (Programa de Apuracao de Ganhos de Capital) program. Tax on gains must be paid by the last business day of the month following the sale via DARF (Documento de Arrecadacao de Receitas Federais). In the annual income tax return (DIRPF), crypto holdings exceeding 5,000 BRL per asset must be declared in the Assets and Rights section using specific codes for different crypto types. Brazilian exchanges must report all customer transactions to Receita Federal monthly. Users of foreign exchanges must self-report transactions exceeding 30,000 BRL in a month through the separate e-Financeira system.
      </p>

      <h2 id="foreign-exchanges">Foreign Exchange Rules</h2>
      <p>
        Transactions on foreign exchanges have additional reporting requirements. If your total monthly transactions on foreign platforms exceed 30,000 BRL, you must report them directly to Receita Federal. The 35,000 BRL monthly exemption has historically applied only to transactions on domestic platforms, though this area has been subject to evolving guidance. Gains from foreign exchange transactions are calculated similarly using the BRL value at the time of the transaction. Converting crypto between domestic and foreign platforms may trigger additional reporting obligations. Failure to report foreign exchange transactions can result in significant penalties.
      </p>

      <h2 id="tools">Tax Software for Brazilian Users</h2>
      <p>
        Koinly supports Brazilian tax reporting with BRL-denominated reports and integration with local exchanges like Mercado Bitcoin and Foxbit. CryptoTaxCalculator also supports Brazil with GCAP-compatible calculations. Bitso and other regional platforms provide annual transaction summaries. Brazilian-specific tools like Declare Cripto are designed specifically for Receita Federal compliance, including GCAP integration and DARF generation. Given the monthly reporting requirement and the complexity of tracking the 35,000 BRL exemption threshold, automated tax software is particularly valuable for Brazilian crypto users compared to manual record-keeping.
      </p>
    </LearnPageLayout>
  );
}
