import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Regulation in the United States (${CURRENT_YEAR}) | degen0x`,
  description:
    "Understand the current state of crypto regulation in the US: SEC and CFTC jurisdiction, the securities vs commodities debate, stablecoin legislation, tax reporting, and what to expect from future regulation.",
};

export default function CryptoRegulationUsPage() {
  return (
    <LearnPageLayout
      title="Crypto Regulation in the United States"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="The United States has taken a complex, multi-agency approach to crypto regulation that has been both influential and controversial. With the SEC, CFTC, FinCEN, IRS, and state regulators all asserting authority over different aspects of the crypto ecosystem, navigating the US regulatory landscape requires understanding the overlapping jurisdictions and evolving interpretations of existing laws. As one of the largest crypto markets in the world, US regulatory decisions have global implications for the entire industry."
      toc={[
        { id: "regulatory-landscape", title: "regulatory-landscape", level: 2 },
        { id: "the-us-regulatory-landscape", title: "The US Regulatory Landscape", level: 2 },
        { id: "securities-debate", title: "securities-debate", level: 2 },
        { id: "the-securities-vs-commodities-debate", title: "The Securities vs Commodities Debate", level: 2 },
        { id: "stablecoin-regulation", title: "stablecoin-regulation", level: 2 },
        { id: "stablecoin-regulation", title: "Stablecoin Regulation", level: 2 },
        { id: "tax-reporting", title: "tax-reporting", level: 2 },
        { id: "tax-and-reporting-requirements", title: "Tax and Reporting Requirements", level: 2 },
        { id: "future-outlook", title: "future-outlook", level: 2 },
        { id: "future-regulatory-outlook", title: "Future Regulatory Outlook", level: 2 }
      ]}
      faqs={[
        {
          question: "Is Bitcoin considered a security in the US?",
          answer:
            "No. Both the SEC and CFTC have stated that Bitcoin is a commodity, not a security. This is because Bitcoin was created without any investment contract, was not sold by a centralized team to fund development, and has no entity responsible for its creation that investors rely on for profits. Bitcoin's regulatory classification is the clearest of any cryptocurrency in the US.",
        },
        {
          question: "Do I need to pay taxes on crypto in the US?",
          answer:
            "Yes. The IRS treats cryptocurrency as property. Selling, trading, or using crypto to purchase goods triggers a taxable event. Crypto received as income (from mining, staking, airdrops, or payment) is taxable as ordinary income. Holding crypto without selling is not a taxable event. You must report all crypto transactions on your tax return.",
        },
        {
          question: "Are crypto exchanges regulated in the US?",
          answer:
            "Centralized crypto exchanges operating in the US must register as Money Service Businesses with FinCEN and comply with state-level money transmitter licensing requirements. Some are also registered with the SEC as broker-dealers or with the CFTC as futures commission merchants. Compliance requirements include KYC/AML procedures, suspicious activity reporting, and customer fund segregation.",
        },
      ]}
      relatedArticles={[
        { title: "KYC and AML in Crypto", href: "/learn/kyc-aml-crypto", category: "Learn" },
        { title: "MiCA: EU Crypto Regulation", href: "/learn/crypto-regulation-eu", category: "Learn" },
        { title: "Legal Status of Crypto Worldwide", href: "/learn/crypto-legal-status", category: "Learn" },
        { title: "CBDCs Explained", href: "/learn/cbdc-explained", category: "Learn" },
      ]}
    >
      <section id="regulatory-landscape">
        <h2>The US Regulatory Landscape</h2>
        <p>
          The US lacks a comprehensive federal crypto regulatory framework, instead relying on existing agencies applying decades-old laws to new technology. The SEC regulates securities and has asserted that many cryptocurrencies (excluding Bitcoin and possibly Ethereum) are securities under the Howey Test. The CFTC regulates commodities and derivatives, classifying Bitcoin and Ethereum as commodities. FinCEN oversees anti-money laundering compliance for crypto businesses. The IRS treats crypto as property for tax purposes.
        </p>
        <p>
          State-level regulation adds another layer of complexity. New York's BitLicense imposes strict requirements on crypto businesses operating in the state. Wyoming has taken a crypto-friendly approach, creating legal frameworks for DAOs and digital asset custody. This patchwork of federal and state regulation creates significant compliance burdens for crypto businesses and uncertainty for users and investors about which rules apply to which activities.
        </p>
      </section>

      <section id="securities-debate">
        <h2>The Securities vs Commodities Debate</h2>
        <p>
          The central question in US crypto regulation is whether specific tokens are securities (regulated by the SEC) or commodities (regulated by the CFTC). The SEC applies the Howey Test: an asset is a security if it involves an investment of money in a common enterprise with an expectation of profits derived primarily from the efforts of others. The SEC has argued that many tokens sold through ICOs and by centralized teams meet this definition.
        </p>
        <p>
          The SEC has brought enforcement actions against numerous crypto projects and exchanges, including major cases against Ripple (XRP), Coinbase, and Binance. These cases are establishing precedent that will shape regulation for years. The crypto industry has pushed back, arguing that the SEC's approach of regulation by enforcement — bringing lawsuits rather than issuing clear rules — creates uncertainty that stifles innovation. Congressional proposals to create a clear regulatory framework that distinguishes between securities and commodities have been introduced but not yet enacted into law.
        </p>
      </section>

      <section id="stablecoin-regulation">
        <h2>Stablecoin Regulation</h2>
        <p>
          Stablecoins have attracted particular regulatory attention due to their potential systemic importance — with combined market caps exceeding $150 billion, they rival some traditional financial instruments in scale. Multiple congressional proposals have sought to establish a federal framework for stablecoin issuers, typically requiring bank-like regulation, reserve composition requirements, regular audits, and consumer protection provisions.
        </p>
        <p>
          The debate centers on whether stablecoin issuers should be required to hold bank charters or whether a new, lighter regulatory framework is appropriate. State regulators like the New York Department of Financial Services already regulate some stablecoin issuers (USDC has a New York trust company license). The passage of comprehensive stablecoin legislation is widely seen as the most likely near-term federal crypto regulatory action, as there is broader bipartisan support for stablecoin regulation than for comprehensive crypto regulation.
        </p>
      </section>

      <section id="tax-reporting">
        <h2>Tax and Reporting Requirements</h2>
        <p>
          The IRS classifies cryptocurrency as property, meaning every sale, trade, or use creates a taxable event. Short-term capital gains (assets held less than one year) are taxed at ordinary income rates, while long-term gains benefit from lower capital gains rates. Losses can offset gains and up to $3,000 of ordinary income annually, with excess losses carried forward to future years. The complexity of tracking cost basis across hundreds of transactions makes crypto tax reporting particularly challenging.
        </p>
        <p>
          Starting with the 2025 tax year, the Infrastructure Investment and Jobs Act expanded broker reporting requirements to include crypto platforms, requiring them to issue 1099 forms to users and the IRS. DeFi protocols face uncertainty about whether they qualify as brokers under these rules. The IRS has increased enforcement against crypto tax evasion, using blockchain analytics firms to identify unreported transactions. Using crypto tax software that connects to your exchanges and wallets to automatically calculate gains and losses is strongly recommended for all active crypto users.
        </p>
      </section>

      <section id="future-outlook">
        <h2>Future Regulatory Outlook</h2>
        <p>
          The regulatory environment for crypto in the US is at an inflection point. There is growing bipartisan recognition that clear regulatory frameworks are needed rather than continued regulation by enforcement. Comprehensive market structure bills that define when a token is a security versus a commodity, stablecoin legislation, and DeFi-specific guidance are all under active consideration by Congress.
        </p>
        <p>
          The appointment of crypto-knowledgeable leadership at regulatory agencies, growing institutional adoption that demands regulatory clarity, and the US desire to maintain competitiveness in financial innovation are all forces pushing toward clearer rules. However, concerns about consumer protection, anti-money-laundering, and financial stability ensure that any framework will include meaningful compliance requirements. The most likely outcome is a regulatory framework that provides clearer rules and a path to compliance while imposing requirements that smaller projects and fully decentralized protocols may struggle to meet.
        </p>
      </section>
    </LearnPageLayout>
  );
}
