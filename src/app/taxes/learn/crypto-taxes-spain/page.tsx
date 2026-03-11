import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Spain (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Complete guide to cryptocurrency taxes in Spain. Learn about capital gains rates, Modelo 721 reporting, and wealth tax obligations for crypto investors.",
};

export default function CryptoTaxesSpainPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Spain"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="9 min read"
      intro="Spain has implemented comprehensive crypto tax regulations with progressive capital gains rates and strict reporting requirements. The Agencia Tributaria (Spanish Tax Agency) requires crypto investors to report gains, declare holdings on foreign platforms, and in some regions, pay wealth tax on crypto assets. Spain introduced Modelo 721 specifically for declaring crypto held on foreign platforms, demonstrating the government's focus on crypto tax compliance."
      toc={[
        { id: "capital-gains", title: "Capital Gains Tax Rates", level: 2 },
        { id: "taxable-events", title: "Taxable Events", level: 2 },
        { id: "modelo-721", title: "Modelo 721 Reporting", level: 2 },
        { id: "wealth-tax", title: "Wealth Tax on Crypto", level: 2 },
        { id: "defi-taxes", title: "DeFi and Staking Taxes", level: 2 },
        { id: "compliance-tips", title: "Compliance Tips", level: 2 },
      ]}
      faqs={[
        { question: "What is the crypto capital gains rate in Spain?", answer: "Spain applies progressive capital gains rates: 19% on the first 6,000 euros of gains, 21% on gains between 6,000 and 50,000 euros, 23% on gains between 50,000 and 200,000 euros, 27% on gains between 200,000 and 300,000 euros, and 28% on gains exceeding 300,000 euros." },
        { question: "Is crypto-to-crypto trading taxable in Spain?", answer: "Yes. Unlike France, Spain treats crypto-to-crypto swaps as taxable events. Each swap triggers a capital gain or loss calculation based on the euro value of the assets at the time of the trade." },
        { question: "What is Modelo 721?", answer: "Modelo 721 is a mandatory declaration form for Spanish tax residents who hold more than 50,000 euros in cryptocurrency on platforms located outside of Spain. It must be filed annually and includes details about each crypto asset, its value, and the platform where it is held." },
        { question: "Do I owe wealth tax on crypto in Spain?", answer: "It depends on your region. Spain has a national wealth tax that applies to net assets above 700,000 euros (with some regional variations). Some regions like Madrid historically offered exemptions, but the national solidarity tax applies to high-net-worth individuals regardless of region." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in France", href: "/taxes/learn/crypto-taxes-france", category: "Taxes" },
        { title: "Crypto Taxes in Italy", href: "/taxes/learn/crypto-taxes-italy", category: "Taxes" },
        { title: "Crypto Taxes in Poland", href: "/taxes/learn/crypto-taxes-poland", category: "Taxes" },
      ]}
    >
      <h2 id="capital-gains">Capital Gains Tax Rates</h2>
      <p>
        Spain taxes cryptocurrency gains as savings income (rendimientos del ahorro) under a progressive rate structure. The first 6,000 euros of annual gains are taxed at 19%, gains between 6,000 and 50,000 euros at 21%, gains between 50,000 and 200,000 euros at 23%, gains between 200,000 and 300,000 euros at 27%, and gains exceeding 300,000 euros at 28%. These rates apply to net capital gains after offsetting losses. Losses can be offset against gains in the same tax year, and unused losses can be carried forward for four years. The FIFO (first-in, first-out) method is used for calculating the cost basis of disposed assets. All gains must be reported on the annual income tax return (Declaracion de la Renta) typically filed between April and June.
      </p>

      <h2 id="taxable-events">Taxable Events</h2>
      <p>
        Spain treats a wide range of crypto activities as taxable events. Selling crypto for euros or any fiat currency triggers capital gains. Trading one cryptocurrency for another is also a taxable disposal, with the gain calculated based on the euro value at the time of the trade. Using crypto to pay for goods or services is a taxable disposal. Receiving crypto as payment for work or services is taxed as employment or professional income. Airdrops are considered income at the market value when received. Mining income is treated as economic activity (actividad economica) subject to income tax and potentially VAT. Staking rewards are income when received. Gift of crypto assets may trigger gift tax for the recipient, and inheritance of crypto triggers inheritance tax, both with rates varying significantly by autonomous community.
      </p>

      <h2 id="modelo-721">Modelo 721 Reporting</h2>
      <p>
        Introduced for the 2024 tax year onwards, Modelo 721 requires Spanish tax residents to declare cryptocurrency held on foreign platforms when the total value exceeds 50,000 euros as of December 31st. This is similar to Modelo 720 used for other foreign assets. You must report each type of cryptocurrency, the number of units held, the value in euros, and the name and country of the platform. The initial declaration covers all holdings above the threshold. Subsequent years only require filing if the value has increased by more than 20,000 euros from the last filed declaration. Penalties for failing to file Modelo 721 can include fines of 5,000 euros per data item not reported. It is critical to maintain accurate records of all crypto holdings across every platform.
      </p>

      <h2 id="wealth-tax">Wealth Tax on Crypto</h2>
      <p>
        Spain imposes a wealth tax (Impuesto sobre el Patrimonio) on net assets exceeding certain thresholds. The national threshold is 700,000 euros with an additional 300,000-euro exemption for the primary residence. Crypto holdings count toward your total net wealth. Rates range from 0.2% to 3.5% depending on total net worth and autonomous community. Some regions have historically reduced or eliminated the wealth tax, but the Impuesto Temporal de Solidaridad de las Grandes Fortunas (solidarity tax) introduced nationally applies to net assets above 3 million euros regardless of regional exemptions. Crypto assets are valued at their market price on December 31st for wealth tax purposes. High-net-worth crypto holders should plan for both capital gains tax on disposals and annual wealth tax on holdings.
      </p>

      <h2 id="defi-taxes">DeFi and Staking Taxes</h2>
      <p>
        DeFi activities create multiple tax obligations in Spain. Providing liquidity to a pool is treated as a swap of your tokens for LP tokens, triggering a taxable event. Yield farming rewards are income when claimed or received. Staking rewards are taxable as savings income when they enter your wallet. Lending crypto through DeFi protocols and earning interest creates taxable income. Each token swap within a DeFi transaction chain is a separate taxable event. The complexity of DeFi tax tracking in Spain is significant because every token exchange must be valued in euros at the exact time of transaction. NFT sales are capital gains calculated the same way as other crypto disposals. NFT creators must report sales as economic activity income.
      </p>

      <h2 id="compliance-tips">Compliance Tips</h2>
      <p>
        The Agencia Tributaria has been increasingly aggressive in enforcing crypto tax compliance, sending warning letters to thousands of taxpayers and requesting data from exchanges operating in Spain. To stay compliant, use crypto tax software that supports Spanish tax rules and FIFO calculation. Popular options include CoinTracker, Koinly, and TaxDown (a Spanish platform). Keep records of all transactions including dates, amounts, euro values, and platform used. File Modelo 721 if you hold more than 50,000 euros on foreign platforms. Consider working with a Spanish tax advisor (asesor fiscal) experienced in cryptocurrency. Report all income including airdrops, staking rewards, and mining proceeds. The penalties for non-compliance can be severe, including fines, interest, and potential criminal prosecution for significant tax evasion.
      </p>
    </LearnPageLayout>
  );
}
