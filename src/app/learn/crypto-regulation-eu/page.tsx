import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `MiCA: EU Crypto Regulation Explained (${CURRENT_YEAR}) | degen0x`,
  description:
    "Understand the EU's Markets in Crypto-Assets (MiCA) regulation: what it covers, how it affects crypto businesses and users, stablecoin rules, licensing requirements, and its global impact.",
};

export default function CryptoRegulationEuPage() {
  return (
    <LearnPageLayout
      title="MiCA: EU Crypto Regulation Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="The Markets in Crypto-Assets (MiCA) regulation is the European Union's comprehensive framework for regulating cryptocurrency markets. Adopted in 2023 and fully effective by the end of 2024, MiCA makes the EU the first major jurisdiction to implement a broad, unified regulatory framework for digital assets. MiCA provides legal certainty for crypto businesses, consumer protection for investors, and specific rules for stablecoins, while also setting a precedent that is influencing crypto regulation globally."
      toc={[
        { id: "what-is-mica", title: "what-is-mica", level: 2 },
        { id: "what-is-mica", title: "What Is MiCA?", level: 2 },
        { id: "key-provisions", title: "key-provisions", level: 2 },
        { id: "key-provisions", title: "Key Provisions", level: 2 },
        { id: "stablecoin-rules", title: "stablecoin-rules", level: 2 },
        { id: "stablecoin-rules", title: "Stablecoin Rules", level: 2 },
        { id: "impact-industry", title: "impact-industry", level: 2 },
        { id: "impact-on-the-crypto-industry", title: "Impact on the Crypto Industry", level: 2 },
        { id: "global-influence", title: "global-influence", level: 2 },
        { id: "global-influence-and-limitations", title: "Global Influence and Limitations", level: 2 }
      ]}
      faqs={[
        {
          question: "Does MiCA apply to DeFi protocols?",
          answer:
            "MiCA primarily targets centralized crypto service providers. Truly decentralized protocols without an identifiable service provider are largely outside MiCA's scope. However, the definition of 'truly decentralized' is narrow, and many projects that claim decentralization may still have identifiable entities that fall under MiCA requirements. The EU has indicated that DeFi-specific regulation may be developed separately.",
        },
        {
          question: "Do US-based crypto companies need to comply with MiCA?",
          answer:
            "If a US company offers services to EU residents, it must comply with MiCA. This includes obtaining appropriate licenses, meeting capital requirements, and implementing consumer protection measures. Some non-EU companies may choose to block EU users rather than comply, while others view MiCA compliance as an opportunity to serve the large European market with regulatory certainty.",
        },
        {
          question: "How does MiCA classify different types of crypto assets?",
          answer:
            "MiCA creates three categories: Asset-Referenced Tokens (ARTs), which reference multiple assets or currencies; E-Money Tokens (EMTs), which reference a single fiat currency (stablecoins); and other crypto-assets that do not qualify as financial instruments under existing law. Each category has different requirements for issuance, reserves, and ongoing compliance.",
        },
      ]}
      relatedArticles={[
        { title: "Crypto Regulation in the US", href: "/learn/crypto-regulation-us", category: "Learn" },
        { title: "KYC and AML in Crypto", href: "/learn/kyc-aml-crypto", category: "Learn" },
        { title: "Legal Status of Crypto Worldwide", href: "/learn/crypto-legal-status", category: "Learn" },
        { title: "What Are Stablecoins?", href: "/learn/what-are-stablecoins", category: "Learn" },
      ]}
    >
      <section id="what-is-mica">
        <h2>What Is MiCA?</h2>
        <p>
          MiCA is a comprehensive regulatory framework that establishes uniform rules for crypto-assets across all 27 EU member states. Before MiCA, crypto regulation in Europe was fragmented, with each country implementing its own rules (or none at all), creating confusion and regulatory arbitrage. MiCA replaces this patchwork with a single set of rules, meaning a company licensed in one EU country can operate across the entire bloc under a passporting mechanism.
        </p>
        <p>
          The regulation was developed over several years following extensive industry consultation and was formally adopted in April 2023. Stablecoin provisions took effect in June 2024, with the full framework (covering all crypto-asset service providers) effective from December 2024. MiCA covers the issuance, offering, and trading of crypto-assets, as well as the activities of crypto-asset service providers (CASPs) including exchanges, custodians, and advisors. Notably, it does not cover DeFi protocols, NFTs (with some exceptions), or crypto-assets already regulated as financial instruments.
        </p>
      </section>

      <section id="key-provisions">
        <h2>Key Provisions</h2>
        <p>
          Crypto-Asset Service Providers (CASPs) must obtain authorization from their national regulator to operate in the EU. Authorization requirements include minimum capital reserves (from 50,000 to 150,000 euros depending on the service type), governance and risk management standards, and consumer protection measures. CASPs must maintain fair, transparent pricing, segregate customer assets, and provide clear information about risks to users.
        </p>
        <p>
          Token issuers must publish a whitepaper containing specified disclosures about the project, team, technology, rights associated with the token, and risks. This whitepaper must be fair, clear, and not misleading, and the issuer can be held liable for the accuracy of its contents. Market abuse rules prohibit insider trading, market manipulation, and unlawful disclosure of inside information related to crypto-assets, mirroring the rules that apply to traditional securities markets.
        </p>
      </section>

      <section id="stablecoin-rules">
        <h2>Stablecoin Rules</h2>
        <p>
          MiCA imposes particularly strict requirements on stablecoin issuers, reflecting their potential systemic importance. E-Money Tokens (EMTs) — stablecoins pegged to a single fiat currency — must be issued by an authorized credit institution or electronic money institution. Issuers must maintain reserves equal to the value of tokens in circulation, invested in safe, liquid assets. Token holders must have the right to redeem their tokens at par value at any time.
        </p>
        <p>
          For large stablecoins classified as "significant" (based on criteria including market cap, number of holders, and transaction volume), additional requirements apply including enhanced capital buffers, stress testing, and direct European Banking Authority supervision. These rules have already affected the market: Tether's USDT faced challenges meeting EMT requirements, while Circle's USDC obtained the necessary licenses to operate under MiCA. The stablecoin rules have been the most immediately impactful provisions, reshaping the European stablecoin market since taking effect.
        </p>
      </section>

      <section id="impact-industry">
        <h2>Impact on the Crypto Industry</h2>
        <p>
          MiCA provides the regulatory certainty that many crypto businesses have been requesting. Companies that obtain CASP authorization gain a clear legal framework to operate across the EU's 450 million citizens, with passporting rights that avoid the need for separate licenses in each country. This has attracted crypto businesses to the EU, with some companies establishing European headquarters to benefit from the framework.
        </p>
        <p>
          The compliance costs are significant, however, particularly for smaller companies. Capital requirements, governance standards, and ongoing reporting obligations create barriers to entry that favor larger, well-funded operations. Some smaller exchanges and DeFi-adjacent services have exited the EU market rather than bear the compliance costs. The net effect is a more professional, regulated industry with higher consumer protection but potentially less innovation from smaller players and a risk that truly decentralized services become harder to access for European users.
        </p>
      </section>

      <section id="global-influence">
        <h2>Global Influence and Limitations</h2>
        <p>
          MiCA is serving as a template for crypto regulation worldwide. Its comprehensive approach — covering asset classification, issuer requirements, service provider licensing, consumer protection, and market abuse — provides a blueprint that other jurisdictions are studying and adapting. Countries in Asia, Latin America, and Africa have referenced MiCA in developing their own frameworks. The EU's first-mover advantage in comprehensive regulation gives it significant influence over global regulatory norms.
        </p>
        <p>
          However, MiCA has notable limitations. It does not cover truly decentralized protocols (though defining what counts as truly decentralized is contentious), NFTs that are truly unique (though series of fungible NFTs may be covered), or crypto-assets that qualify as financial instruments (covered by existing MiFID II regulations). The regulation was finalized before the rapid growth of DeFi, AI-crypto, and restaking, meaning supplementary regulation for these areas will be needed. The EU has indicated that further regulation addressing DeFi, NFTs, and other emerging areas is planned for the coming years.
        </p>
      </section>
    </LearnPageLayout>
  );
}
