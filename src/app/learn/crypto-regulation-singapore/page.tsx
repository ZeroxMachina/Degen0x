import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Singapore Crypto Regulation Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency regulation in Singapore. MAS oversight, Payment Services Act, DPT licensing, stablecoin framework, and what it means for crypto users in Singapore.",
  keywords: [
    "Singapore crypto regulation",
    "MAS cryptocurrency",
    "Payment Services Act crypto",
    "DPT license Singapore",
    "crypto laws Singapore",
    "stablecoin regulation Singapore",
  ],
};

export default function CryptoRegulationSingaporePage() {
  return (
    <LearnPageLayout
      title="Singapore Crypto Regulation: Complete Guide"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="14 min"
      intro="Singapore has positioned itself as one of the world's leading crypto and fintech hubs through a progressive yet rigorous regulatory framework. The Monetary Authority of Singapore (MAS) regulates crypto through the Payment Services Act 2019, which established a licensing regime for digital payment token (DPT) service providers. Singapore balances promoting innovation through its regulatory sandbox and forward-looking approach with strict consumer protection, AML compliance, and advertising restrictions. This guide covers the full regulatory landscape for crypto in Singapore."
      toc={[
        { id: "mas-overview", title: "mas-overview", level: 2 },
        { id: "mas-and-the-regulatory-approach", title: "MAS and the Regulatory Approach", level: 2 },
        { id: "payment-services-act", title: "payment-services-act", level: 2 },
        { id: "payment-services-act-and-dpt-licensing", title: "Payment Services Act and DPT Licensing", level: 2 },
        { id: "licensing-requirements", title: "licensing-requirements", level: 2 },
        { id: "licensing-requirements", title: "Licensing Requirements", level: 2 },
        { id: "consumer-protection", title: "consumer-protection", level: 2 },
        { id: "consumer-protection-and-advertising-rules", title: "Consumer Protection and Advertising Rules", level: 2 },
        { id: "stablecoin-framework", title: "stablecoin-framework", level: 2 },
        { id: "stablecoin-regulatory-framework", title: "Stablecoin Regulatory Framework", level: 2 },
        { id: "tax-treatment", title: "tax-treatment", level: 2 },
        { id: "tax-treatment-of-crypto", title: "Tax Treatment of Crypto", level: 2 },
        { id: "future-outlook", title: "future-outlook", level: 2 },
        { id: "future-regulatory-outlook", title: "Future Regulatory Outlook", level: 2 }
      ]}
      faqs={[
        {
          question: "Is cryptocurrency legal in Singapore?",
          answer:
            "Yes. Cryptocurrency is fully legal in Singapore. The MAS regulates crypto service providers under the Payment Services Act 2019. Individuals can freely buy, sell, hold, and trade crypto. However, crypto advertising to the public is restricted, and service providers must hold a Major Payment Institution (MPI) or Standard Payment Institution (SPI) license from MAS.",
        },
        {
          question: "What license do crypto exchanges need in Singapore?",
          answer:
            "Crypto exchanges in Singapore need a Major Payment Institution (MPI) license from MAS to provide digital payment token (DPT) services. The licensing process evaluates the firm's governance, financial resources, technology risk management, AML/CFT controls, and consumer protection measures. The MAS has been selective in granting licenses, approving only firms that meet its high standards.",
        },
        {
          question: "Can crypto companies advertise in Singapore?",
          answer:
            "MAS has imposed strict restrictions on crypto advertising. DPT service providers cannot promote their services to the general public in Singapore through public advertising (including social media, mass media, public transport, or websites accessible to Singaporeans). Marketing is limited to the provider's own website, mobile app, or social media accounts, and must include risk warnings. ATM advertising and influencer marketing are prohibited.",
        },
        {
          question: "Is crypto taxed in Singapore?",
          answer:
            "Singapore does not have a capital gains tax, so profits from crypto trading by individuals are generally not taxable. However, if crypto trading constitutes a business activity (determined by frequency, intent, and sophistication), the gains may be treated as business income and taxed at the corporate or personal income tax rate. Crypto received as payment for goods or services is treated as income.",
        },
        {
          question: "What is Singapore's stance on stablecoins?",
          answer:
            "Singapore finalized a regulatory framework for stablecoins in August 2023, making it one of the first jurisdictions to do so. Single-currency stablecoins (SCS) pegged to the Singapore dollar or any G10 currency can apply for MAS-regulated status. Requirements include maintaining a full reserve in low-risk, highly liquid assets, timely redemption at par value, and regular independent audits.",
        },
      ]}
      relatedArticles={[
        { title: "Japan Crypto Regulation", href: "/learn/crypto-regulation-japan", category: "Learn" },
        { title: "Australia Crypto Regulation", href: "/learn/crypto-regulation-australia", category: "Learn" },
        { title: "Crypto Regulation Overview", href: "/learn/crypto-regulation", category: "Learn" },
      ]}
    >
      <h2 id="mas-overview">MAS and the Regulatory Approach</h2>
      <p>
        The Monetary Authority of Singapore (MAS) serves as both the central bank and financial
        regulator of Singapore. MAS has taken a technology-neutral, activity-based approach to
        crypto regulation, focusing on regulating the activities and services rather than the
        underlying technology. MAS has emphasized that while it supports innovation in the digital
        asset space, it will not compromise on anti-money-laundering standards, consumer protection,
        and financial stability.
      </p>
      <p>
        This balanced approach has made Singapore one of the most attractive jurisdictions for crypto
        businesses globally. The MAS regulatory sandbox (known as the FinTech Regulatory Sandbox)
        allows firms to test innovative products in a controlled environment before full licensing.
        However, MAS has also been clear that it views cryptocurrency trading as highly risky for
        retail investors.
      </p>

      <h2 id="payment-services-act">Payment Services Act and DPT Licensing</h2>
      <p>
        The Payment Services Act 2019 (PSA) established the licensing framework for digital payment
        token (DPT) services in Singapore. The PSA covers a range of payment services including
        DPT services, money-changing, cross-border transfer, and e-money issuance. Crypto exchanges,
        wallet providers, and OTC trading desks fall under the DPT services category. The PSA was
        amended in 2022 to strengthen consumer protection and expand MAS&apos;s regulatory powers over
        DPT service providers.
      </p>

      <h2 id="licensing-requirements">Licensing Requirements</h2>
      <p>
        DPT service providers must obtain either a Major Payment Institution (MPI) license or
        Standard Payment Institution (SPI) license from MAS. The MPI license is required for firms
        exceeding specified transaction thresholds. Licensing requirements include minimum base
        capital (SGD 250,000 for MPI), robust AML/CFT programs, technology risk management
        frameworks, business continuity planning, and fit and proper assessments for key personnel.
        MAS has rejected many applications and revoked licenses of firms that failed to maintain
        standards.
      </p>

      <h2 id="consumer-protection">Consumer Protection and Advertising Rules</h2>
      <p>
        MAS introduced comprehensive consumer protection measures for DPT service providers in 2022.
        These include mandatory risk awareness assessments for retail customers, restrictions on
        offering incentives like deposit bonuses, prohibition of lending and staking services for
        retail customers (unless specifically approved), and requirements to segregate customer
        assets. The advertising restrictions are among the strictest globally, reflecting MAS&apos;s
        view that retail investors should approach crypto with extreme caution.
      </p>

      <h2 id="stablecoin-framework">Stablecoin Regulatory Framework</h2>
      <p>
        Singapore finalized its stablecoin regulatory framework in August 2023. Under this
        framework, issuers of single-currency stablecoins (SCS) pegged to the Singapore dollar
        or G10 currencies can apply for MAS-regulated status. Regulated SCS issuers must maintain
        reserve assets equal to or exceeding the value of outstanding tokens, invest reserves in
        high-quality liquid assets, ensure timely redemption at par value, provide regular
        disclosure to token holders, and undergo independent audits. This framework provides
        regulatory clarity that has attracted stablecoin issuers to Singapore.
      </p>

      <h2 id="tax-treatment">Tax Treatment of Crypto</h2>
      <p>
        Singapore does not impose a capital gains tax, which means profits from personal crypto
        investments are generally not taxable. This is a major advantage for individual crypto
        investors compared to most other developed countries. However, if crypto trading is
        conducted as a business (frequent trading with profit intent), gains are treated as
        business income and taxed at Singapore&apos;s income tax rates (personal: 0-22%, corporate:
        17%). Goods and Services Tax (GST) treatment depends on the nature of the transaction,
        with DPT transactions exempt from GST since January 2020.
      </p>

      <h2 id="future-outlook">Future Regulatory Outlook</h2>
      <p>
        Singapore continues to refine its crypto regulatory framework. Expected developments
        include expanded DeFi regulatory guidance, tokenized securities frameworks under the
        Securities and Futures Act, continued development of the Project Ubin CBDC initiative,
        and potential adjustments to retail trading rules. Singapore&apos;s approach of maintaining
        high standards while supporting innovation has established it as a model for other
        jurisdictions and a preferred home for crypto businesses seeking regulatory clarity
        in the Asia-Pacific region.
      </p>
    </LearnPageLayout>
  );
}
