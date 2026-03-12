import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Australia Crypto Regulation Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency regulation in Australia. ASIC oversight, AUSTRAC AML requirements, licensing framework, token mapping, and what it means for Australian crypto users.",
  keywords: [
    "Australia crypto regulation",
    "ASIC cryptocurrency",
    "AUSTRAC crypto",
    "crypto laws Australia",
    "token mapping Australia",
    "digital asset regulation Australia",
  ],
};

export default function CryptoRegulationAustraliaPage() {
  return (
    <LearnPageLayout
      title="Australia Crypto Regulation: Complete Guide"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="14 min"
      intro="Australia is developing a comprehensive cryptocurrency regulatory framework, with ASIC (Australian Securities and Investments Commission) and AUSTRAC (Australian Transaction Reports and Analysis Centre) as the primary regulators. The government has undertaken a token mapping exercise to classify different types of crypto assets and determine appropriate regulatory treatment. While Australia currently regulates crypto through existing financial services laws, a dedicated digital asset framework is being developed. This guide covers the current regulatory landscape and upcoming changes."
      toc={[
        { id: "regulatory-framework", title: "regulatory-framework", level: 2 },
        { id: "australia", title: "Australia", level: 2 },
        { id: "s-role-in-crypto-regulation", title: "s Role in Crypto Regulation", level: 2 },
        { id: "austrac-aml", title: "austrac-aml", level: 2 },
        { id: "austrac-and-aml-ctf-requirements", title: "AUSTRAC and AML/CTF Requirements", level: 2 },
        { id: "token-mapping", title: "token-mapping", level: 2 },
        { id: "token-mapping-and-classification", title: "Token Mapping and Classification", level: 2 },
        { id: "exchange-licensing", title: "exchange-licensing", level: 2 },
        { id: "exchange-licensing-and-compliance", title: "Exchange Licensing and Compliance", level: 2 },
        { id: "consumer-protection", title: "consumer-protection", level: 2 },
        { id: "consumer-protection", title: "Consumer Protection", level: 2 },
        { id: "future-framework", title: "future-framework", level: 2 },
        { id: "future-regulatory-framework", title: "Future Regulatory Framework", level: 2 }
      ]}
      faqs={[
        {
          question: "Is cryptocurrency legal in Australia?",
          answer:
            "Yes. Cryptocurrency is legal to buy, sell, hold, and trade in Australia. Crypto exchanges must register with AUSTRAC for AML/CTF compliance. The ATO taxes crypto as a CGT asset. While there is no dedicated crypto licensing framework yet, crypto businesses that offer financial products must comply with existing ASIC requirements under the Corporations Act.",
        },
        {
          question: "Do Australian crypto exchanges need to be registered?",
          answer:
            "Yes. All crypto exchanges operating in Australia must register with AUSTRAC as digital currency exchange providers. This registration requires implementing AML/CTF programs, conducting customer verification, and reporting suspicious transactions. Exchanges may also need an Australian Financial Services Licence (AFSL) from ASIC if they offer products classified as financial products.",
        },
        {
          question: "What is token mapping in Australia?",
          answer:
            "Token mapping is a government initiative to classify different types of crypto assets and determine how existing financial regulations apply to each category. The Treasury released a consultation paper in 2023 proposing categories including payment tokens, stablecoins, utility tokens, and tokenized assets. This mapping exercise will inform the design of Australia's dedicated digital asset regulatory framework.",
        },
        {
          question: "How is crypto taxed in Australia?",
          answer:
            "The ATO treats cryptocurrency as a CGT asset. Selling, trading, or spending crypto triggers CGT. If held for more than 12 months, individuals receive a 50% CGT discount. Net capital gains are added to your assessable income and taxed at your marginal tax rate. Crypto received as income (mining, staking) is taxed as ordinary income. The ATO actively audits crypto through exchange data-matching programs.",
        },
        {
          question: "Can Australian investors access crypto ETFs?",
          answer:
            "Yes. Several crypto ETFs are available on the ASX (Australian Securities Exchange) and CBOE Australia, including Bitcoin and Ethereum spot ETFs. These are regulated as managed investment schemes under ASIC oversight. They provide Australian investors with regulated crypto exposure through traditional brokerage accounts, including self-managed super funds (SMSFs).",
        }
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Australia", href: "/taxes/learn/crypto-taxes-australia", category: "Taxes" },
        { title: "How to Buy Crypto in Australia", href: "/exchanges/learn/how-to-buy-crypto-australia", category: "Exchanges" },
        { title: "Crypto Regulation Overview", href: "/learn/crypto-regulation", category: "Learn" }
      ]}
    >
      <h2 id="regulatory-framework">Australia&apos;s Regulatory Framework</h2>
      <p>
        Australia regulates cryptocurrency through a combination of existing financial services laws
        and dedicated AML/CTF requirements. ASIC oversees financial products and services, AUSTRAC
        handles anti-money-laundering compliance, the ATO manages tax obligations, and the Reserve
        Bank of Australia monitors systemic risks and explores CBDC possibilities. The Treasury leads
        policy development for the digital asset sector.
      </p>
      <p>
        Unlike the EU with MiCA, Australia does not yet have a dedicated comprehensive crypto regulatory
        framework. Instead, regulators apply existing laws to crypto activities, which has created some
        uncertainty about how different types of crypto assets and services are classified. The
        government has committed to developing a purpose-built framework informed by the token
        mapping exercise.
      </p>

      <h2 id="asic-role">ASIC&apos;s Role in Crypto Regulation</h2>
      <p>
        ASIC regulates crypto assets that fall within the definition of financial products under the
        Corporations Act 2001. This includes crypto assets that function as securities, managed
        investment schemes, or derivatives. ASIC has issued Information Sheet 225 (INFO 225) providing
        guidance on when crypto assets are financial products and when businesses need an Australian
        Financial Services Licence. ASIC has also taken enforcement action against crypto businesses
        offering financial products without appropriate licensing.
      </p>

      <h2 id="austrac-aml">AUSTRAC and AML/CTF Requirements</h2>
      <p>
        Since April 2018, all digital currency exchange (DCE) providers operating in Australia must
        register with AUSTRAC. Registration requires implementing a comprehensive AML/CTF program,
        conducting customer identification and verification, monitoring transactions for suspicious
        activity, and filing reports with AUSTRAC. AUSTRAC has taken enforcement action against
        exchanges that failed to meet these requirements, including canceling registrations and
        imposing significant penalties.
      </p>

      <h2 id="token-mapping">Token Mapping and Classification</h2>
      <p>
        The Australian Treasury released a token mapping consultation paper that proposes classifying
        crypto assets based on their function rather than their underlying technology. The proposed
        categories include crypto assets that are financial products (and therefore subject to ASIC
        regulation), crypto assets used for payment, stablecoins, utility tokens, and tokenized
        real-world assets. This classification will determine which regulatory framework applies to
        each type of asset and service.
      </p>

      <h2 id="exchange-licensing">Exchange Licensing and Compliance</h2>
      <p>
        Australian crypto exchanges must at minimum register with AUSTRAC as DCE providers. Those
        offering products classified as financial products must also hold an AFSL from ASIC. Major
        Australian exchanges like Independent Reserve, CoinSpot, Swyftx, and BTC Markets are
        registered with AUSTRAC. Some, like Independent Reserve, have also obtained additional
        licenses. International exchanges like Coinbase and Kraken also operate registered
        Australian entities.
      </p>

      <h2 id="consumer-protection">Consumer Protection</h2>
      <p>
        Consumer protection for crypto users in Australia comes from multiple sources. ASIC&apos;s
        financial product regulations protect users of crypto products classified as financial
        products. The Australian Consumer Law provides general protections against misleading
        conduct and unconscionable behavior. AFCA (Australian Financial Complaints Authority)
        handles complaints against licensed financial services providers. However, gaps exist
        for crypto activities that fall outside existing regulatory categories.
      </p>

      <h2 id="future-framework">Future Regulatory Framework</h2>
      <p>
        Australia is working toward a dedicated digital asset regulatory framework that will provide
        comprehensive coverage of crypto exchanges, custody services, stablecoins, and potentially
        DeFi activities. The framework is expected to build on the token mapping exercise, introducing
        a licensing regime for crypto service providers with requirements around capital, governance,
        custody, and consumer protection. Australia aims to create a balanced framework that supports
        innovation while protecting consumers and maintaining financial stability.
      </p>
      <p>
        For Australian crypto users, the current regulatory environment means using AUSTRAC-registered
        exchanges, maintaining detailed records for ATO tax reporting, and staying informed about
        the developing licensing framework. The availability of crypto ETFs on the ASX provides
        regulated exposure through traditional brokerage accounts, including self-managed super
        funds. Australia&apos;s measured approach to crypto regulation positions it well to balance
        innovation with consumer protection as the framework matures.
      </p>
    </LearnPageLayout>
  );
}
