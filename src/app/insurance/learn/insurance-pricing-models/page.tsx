import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Insurance Pricing Models (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understanding how DeFi insurance premiums are calculated helps evaluate whether coverage is fairly priced...",
};

export default function InsurancePricingModelsPage() {
  return (
    <LearnPageLayout
      title="Crypto Insurance Pricing Models"
      categoryName="Crypto Insurance"
      categorySlug="insurance"
      readTime="10 min"
      intro="Understanding how DeFi insurance premiums are calculated helps evaluate whether coverage is fairly priced and compare offerings across providers. Pricing models incorporate risk assessment, capital costs, and market dynamics."
      toc={[
        { id: "section-1", title: "Pricing Fundamentals", level: 2 },
        { id: "section-2", title: "Risk Assessment Factors", level: 2 },
        { id: "section-3", title: "Market-Based Pricing", level: 2 },
        { id: "section-4", title: "Evaluating Premium Value", level: 2 },
      ]}
      faqs={[
        { question: "How are DeFi insurance premiums calculated?", answer: "Premiums are based on risk assessment of the covered protocol, coverage amount, duration, capital costs for underwriters, and market supply and demand dynamics. Higher-risk protocols and larger coverage amounts result in higher premiums." },
        { question: "Why do premiums vary between providers?", answer: "Different providers use different risk models, have different capital costs, and serve different markets. Competition, capacity constraints, and protocol-specific risk assessments all contribute to premium variation across providers." },
      ]}
      relatedArticles={[
        { title: "Crypto Insurance Complete Guide", href: "/insurance/learn/crypto-insurance-complete-guide", category: "Crypto Insurance" },
        { title: "Risk Assessment in DeFi", href: "/insurance/learn/risk-assessment-defi", category: "Crypto Insurance" },
        { title: "InsurAce Review", href: "/insurance/reviews/insurace", category: "Crypto Insurance" },
      ]}
    >
      <section id="section-1">
        <h2>Pricing Fundamentals</h2>
        <p>DeFi insurance pricing must balance affordability for coverage buyers with adequate compensation for capital providers who bear the claims risk. Premium rates are expressed as annual percentages of coverage amount, typically ranging from 2% to 15% depending on the risk profile of the covered protocol. The pricing must generate sufficient income to attract underwriting capital while remaining competitive enough to attract coverage buyers.</p>
        <p>The basic pricing formula considers the expected loss rate for the covered protocol, the cost of capital for underwriters, operating expenses of the insurance protocol, and a margin for uncertainty. Unlike traditional insurance with decades of actuarial data, DeFi insurance pricing operates with limited historical data and rapidly evolving risk profiles, making accurate pricing one of the most challenging aspects of crypto insurance.</p>
      </section>

      <section id="section-2">
        <h2>Risk Assessment Factors</h2>
        <p>Protocol risk assessment drives the primary component of insurance pricing. Key factors include smart contract audit history and findings, total value locked as a proxy for attack incentive, code complexity and composability exposure, team reputation and track record, governance mechanism strength, and time since deployment. Protocols with multiple clean audits, long operating histories, and large active user bases typically receive lower risk ratings and premium rates.</p>
        <p>Dynamic risk factors include recent protocol upgrades that may introduce new vulnerabilities, changes in TVL that alter attack incentives, ecosystem events that may affect protocol stability, and market conditions that influence exploitation likelihood. Sophisticated pricing models adjust premiums based on these changing conditions, while simpler models use periodic reassessment of fixed risk tiers.</p>
      </section>

      <section id="section-3">
        <h2>Market-Based Pricing</h2>
        <p>Supply and demand dynamics significantly influence insurance premiums. When underwriting capital is abundant relative to coverage demand, competition drives premiums lower. When coverage demand exceeds available capital, premiums rise. Major security incidents typically trigger increased demand for coverage, which can spike premiums temporarily until additional underwriting capital enters the market to meet the new demand.</p>
        <p>Some insurance protocols use bonding curve mechanisms where premium rates automatically adjust based on utilization of the underwriting pool. As coverage capacity fills, premiums increase to attract more capital and discourage excessive concentration. These automated pricing mechanisms provide responsive market-based pricing without requiring manual adjustment, though they may produce less nuanced risk differentiation than manual assessment models.</p>
      </section>

      <section id="section-4">
        <h2>Evaluating Premium Value</h2>
        <p>Evaluate insurance premiums relative to your actual risk exposure and the potential loss amount. A 5% annual premium on a position exposed to a 10% probability of total loss represents good value. Compare premium costs across multiple providers for the same coverage, but also factor in claims reliability and provider financial strength when assessing overall value beyond pure price comparison.</p>
        <p>Consider the opportunity cost of premiums versus self-insurance through diversification. For smaller positions, the premium cost may exceed the expected loss, making self-insurance through position sizing and diversification more economical. For larger concentrated positions, insurance premiums represent a small cost relative to potential losses, making coverage increasingly valuable as position sizes grow.</p>
      </section>
    </LearnPageLayout>
  );
}
