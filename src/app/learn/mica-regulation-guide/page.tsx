import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `MiCA Regulation Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to the EU's Markets in Crypto-Assets (MiCA) regulation covering scope, requirements for issuers and service providers, stablecoin rules, and compliance.",
  keywords: ["MiCA", "MiCA regulation", "EU crypto regulation", "Markets in Crypto-Assets", "European crypto law", "CASP"],
};

export default function MicaRegulationGuidePage() {
  return (
    <LearnPageLayout title="MiCA Regulation Guide" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="The Markets in Crypto-Assets (MiCA) regulation is the European Union's comprehensive framework for regulating cryptocurrency and digital assets. As one of the first major regulatory frameworks for crypto, MiCA sets standards for issuers, service providers, and stablecoin operators across all 27 EU member states, providing regulatory clarity that has attracted global attention."
      toc={[
        { id: "overview", title: "MiCA Overview", level: 2 },
        { id: "scope", title: "Scope & Classifications", level: 2 },
        { id: "service-providers", title: "Service Provider Requirements", level: 2 },
        { id: "stablecoins", title: "Stablecoin Rules", level: 2 },
        { id: "impact", title: "Impact on the Industry", level: 2 },
      ]}
      faqs={[
        { question: "Does MiCA apply to DeFi?", answer: "MiCA primarily targets centralized crypto-asset service providers. Truly decentralized protocols without intermediaries are generally outside MiCA's scope. However, the boundary between centralized and decentralized is often blurry, and protocols with identifiable operators or governance structures may face scrutiny under the regulation." },
        { question: "What is a CASP under MiCA?", answer: "A Crypto-Asset Service Provider (CASP) is any entity providing crypto-related services including exchange, custody, trading, portfolio management, transfer, and advisory services. CASPs must obtain authorization from their home country regulator and can then operate across the EU through passporting." },
        { question: "How does MiCA affect stablecoins?", answer: "MiCA creates two categories: Asset-Referenced Tokens (backed by multiple assets) and E-Money Tokens (pegged to a single fiat currency). Both face reserve requirements, redemption rights, and usage limitations. Significant stablecoins face additional requirements including reserve composition rules and transaction volume caps." },
      ]}
      relatedArticles={[
        { title: "Crypto Regulation Overview", href: "/learn/crypto-regulation-2026", category: "Learn" },
        { title: "Stablecoin Regulation", href: "/learn/stablecoin-regulation", category: "Learn" },
        { title: "AML/KYC in Crypto", href: "/learn/aml-kyc-crypto-guide", category: "Learn" },
        { title: "Crypto Licensing Guide", href: "/learn/crypto-licensing-guide", category: "Learn" },
      ]}
    >
      <section id="overview"><h2>MiCA Overview</h2><p>MiCA was formally adopted by the European Parliament in 2023, with provisions taking effect in phases. The regulation provides a single, harmonized framework that replaces the patchwork of national crypto regulations across EU member states. For crypto businesses, this means obtaining a single license that enables operation across the entire EU through passporting — a significant advantage over navigating 27 different national regulatory regimes.</p><p>The regulation aims to protect consumers, ensure market integrity, and support financial stability while fostering innovation. MiCA covers the issuance of crypto-assets, the provision of crypto-asset services, and specific rules for stablecoins. It deliberately excludes certain areas — including DeFi protocols operating without intermediaries, NFTs that are truly unique, and central bank digital currencies — though these exclusions have boundaries that will be tested over time.</p></section>
      <section id="scope"><h2>Scope & Classifications</h2><p>MiCA classifies crypto-assets into three categories: utility tokens (provide access to goods or services), asset-referenced tokens (maintain value by referencing multiple assets), and e-money tokens (maintain value by referencing a single fiat currency). Each category has different requirements for issuers. Tokens that qualify as financial instruments under existing EU law (MiFID II) are excluded from MiCA as they are already regulated.</p><p>The classification system determines the level of regulation: utility token issuers must publish a white paper with specified disclosures, asset-referenced token issuers face additional requirements around reserve management and governance, and e-money token issuers must be authorized as credit institutions or e-money institutions. This tiered approach aims to match regulatory burden with the risk level of different crypto-asset types.</p></section>
      <section id="service-providers"><h2>Service Provider Requirements</h2><p>Crypto-Asset Service Providers must obtain authorization from their home country's national competent authority. Authorization requires demonstrating adequate governance arrangements, sufficient capital, fit and proper management, business continuity plans, and consumer complaint procedures. Once authorized, CASPs can operate across the EU through the passporting mechanism.</p><p>Specific service categories face tailored requirements: custodians must implement segregation of client assets and have clear liability frameworks, exchanges must have transparent fee structures and order execution policies, and advisory services must meet suitability assessment requirements. All CASPs must comply with market abuse prevention rules prohibiting insider trading and market manipulation in crypto-assets.</p></section>
      <section id="stablecoins"><h2>Stablecoin Rules</h2><p>MiCA's stablecoin provisions are among its most impactful elements. Asset-referenced tokens must maintain reserves that fully cover outstanding tokens, with strict requirements on reserve composition (emphasizing low-risk, liquid assets). E-money tokens must be redeemable at par value at any time, with reserves held in credit institutions. Issuers of significant tokens face enhanced requirements including higher capital buffers and supervisory oversight by the European Banking Authority.</p><p>Transaction volume limitations for non-euro stablecoins reflect the EU's concerns about monetary sovereignty. If a non-euro stablecoin exceeds certain transaction volume thresholds within the EU, the issuer must implement measures to reduce usage. This provision has been controversial, particularly regarding its potential impact on dollar-denominated stablecoins like USDT and USDC within the European market.</p></section>
      <section id="impact"><h2>Impact on the Industry</h2><p>MiCA has attracted crypto businesses seeking regulatory clarity, with several major companies obtaining or pursuing EU licenses. The framework provides a model that other jurisdictions are studying as they develop their own regulations. For users, MiCA means stronger consumer protections, standardized disclosure requirements, and accountability mechanisms for crypto service providers operating in the EU.</p><p>Challenges remain: compliance costs may disadvantage smaller firms, some provisions (particularly stablecoin restrictions) have faced criticism for being too restrictive, and the regulation's application to evolving technologies like DeFi and NFTs will require ongoing interpretation. Nevertheless, MiCA represents a significant milestone in the maturation of crypto regulation and a blueprint for other jurisdictions seeking comprehensive frameworks.</p></section>
    </LearnPageLayout>
  );
}
