import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `CeFi vs DeFi Lending ${CURRENT_YEAR}: Complete Comparison`,
  description: `Compare centralized vs decentralized lending in ${CURRENT_YEAR}. Analyze yields, security, custody, KYC requirements, and which approach suits your needs.`,
};

const items: ComparisonItem[] = [
  { name: "DeFi Lending", slug: "defi-lending", rating: 4.5, affiliateUrl: "https://cryptodegen.com/go/aave", features: { "Custody": "Self-custody (your keys)", "KYC": "None required", "Transparency": "Fully on-chain", "Accessibility": "Global, 24/7", "Typical Yields": "3-8% stablecoins", "Counterparty Risk": "Smart contract risk", "Regulation": "Minimal", "Insurance": "DeFi insurance optional" } },
  { name: "CeFi Lending", slug: "crypto-loans", rating: 3.8, affiliateUrl: "https://cryptodegen.com/go/nexo", features: { "Custody": "Custodial (platform holds)", "KYC": "Required", "Transparency": "Limited (off-chain books)", "Accessibility": "Jurisdiction dependent", "Typical Yields": "3-6% stablecoins", "Counterparty Risk": "Platform insolvency risk", "Regulation": "Varies by jurisdiction", "Insurance": "Some platforms offer insurance" } },
];

const features = ["Custody", "KYC", "Transparency", "Accessibility", "Typical Yields", "Counterparty Risk", "Regulation", "Insurance"];

const faqs: FAQ[] = [
  { question: "Is DeFi lending safer than CeFi lending?", answer: "Neither is inherently safer. DeFi eliminates counterparty risk but introduces smart contract risk. CeFi eliminates smart contract risk but introduces platform insolvency risk. The collapses of Celsius, BlockFi, and Voyager demonstrated the real dangers of CeFi counterparty risk." },
  { question: "Can I use both CeFi and DeFi lending?", answer: "Absolutely. Many experienced crypto users diversify across both. CeFi can be convenient for fiat on/off ramps and simple earning. DeFi provides more control, transparency, and composability. Using both spreads risk across different failure modes." },
  { question: "Which offers better yields?", answer: "DeFi generally offers competitive or better yields because there is no intermediary taking a spread. CeFi platforms typically earn DeFi yields behind the scenes and pass a portion to users while keeping a margin. However, CeFi occasionally offers promotional rates that exceed DeFi." },
];

export default function CefiVsDefiLendingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/cefi-vs-defi-lending" }, { label: "CeFi vs DeFi Lending", href: "/defi-lending/compare/cefi-vs-defi-lending" }]} />
      <h1 className="text-4xl font-bold text-white mb-4">CeFi vs DeFi Lending: Full Comparison ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          The choice between centralized finance (CeFi) and decentralized finance (DeFi) lending represents a fundamental tradeoff between convenience and control. CeFi platforms offer familiar interfaces and customer support but require trust in the platform. DeFi protocols offer transparency and self-custody but require technical knowledge and self-responsibility.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-white">The short answer:</strong> DeFi lending is better for users who prioritize self-custody, transparency, and global access without KYC. CeFi lending is better for users who prefer familiar interfaces, customer support, and fiat integration. The CeFi collapses of 2022 shifted sentiment strongly toward DeFi's transparency model.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="CeFi vs DeFi Lending Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">Detailed Analysis</h2>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">Custody and Control</h3>
        <p className="text-[var(--color-text-secondary)]">The fundamental difference is custody. In DeFi, you maintain control of your assets through your own wallet and interact directly with smart contracts. In CeFi, you deposit assets into a platform that holds them in custodial wallets. The collapses of Celsius, BlockFi, and Voyager in 2022 demonstrated the catastrophic risk of custodial lending when billions in user funds became locked in bankruptcy proceedings. DeFi's self-custody model means your funds remain accessible as long as the smart contracts function correctly.</p>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">User Experience</h3>
        <p className="text-[var(--color-text-secondary)]">CeFi platforms generally offer simpler user experiences with mobile apps, customer support, and fiat bank connections. DeFi requires understanding wallet management, gas fees, and protocol interfaces. However, DeFi user experience has improved dramatically with better interfaces, account abstraction, and wallet innovations. For complete beginners, CeFi may still be more approachable, but the learning curve for DeFi has decreased significantly.</p>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">Yield Transparency</h3>
        <p className="text-[var(--color-text-secondary)]">DeFi yields are fully transparent with rates determined by on-chain utilization and visible in real-time. You can verify exactly how yields are generated by examining smart contract mechanics. CeFi yields are often opaque, and platforms may engage in risky lending or trading practices behind the scenes to generate advertised returns. Several CeFi platforms offered unsustainably high yields that ultimately contributed to their insolvency, a risk that is more difficult to assess when operations are not transparent.</p>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
