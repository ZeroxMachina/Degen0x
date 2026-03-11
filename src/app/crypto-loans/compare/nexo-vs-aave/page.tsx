import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = { title: `Nexo vs Aave ${CURRENT_YEAR}: CeFi vs DeFi Lending Compared`, description: `Compare Nexo (CeFi) vs Aave (DeFi) for crypto loans in ${CURRENT_YEAR}. Analyze rates, KYC requirements, security models, and which is better for your needs.` };

const items: ComparisonItem[] = [
  { name: "Nexo", slug: "nexo", rating: 4.7, affiliateUrl: "https://cryptodegen.com/go/nexo", features: { "Type": "CeFi (Centralized)", "KYC Required": "Yes", "Interest Rates": "0-13.9% APR", "Collateral Assets": "60+", "Fiat Borrowing": "Yes (USD, EUR, GBP)", "Insurance": "$775M coverage", "Liquidation Model": "Margin call + auto-sell", "Best For": "Simple, regulated borrowing" } },
  { name: "Aave", slug: "aave-loans", rating: 4.8, affiliateUrl: "https://cryptodegen.com/go/aave", features: { "Type": "DeFi (Decentralized)", "KYC Required": "No", "Interest Rates": "Variable (2-10%)", "Collateral Assets": "100+", "Fiat Borrowing": "No (stablecoins only)", "Insurance": "Safety Module backstop", "Liquidation Model": "Automated on-chain", "Best For": "Permissionless, transparent borrowing" } },
];

const features = ["Type", "KYC Required", "Interest Rates", "Collateral Assets", "Fiat Borrowing", "Insurance", "Liquidation Model", "Best For"];

const faqs: FAQ[] = [
  { question: "Should I use Nexo or Aave?", answer: "Choose Nexo if you want a simple CeFi experience with fiat borrowing, no DeFi knowledge needed, and are comfortable with KYC. Choose Aave if you prefer permissionless access, on-chain transparency, no KYC, and are comfortable with Web3 wallet management." },
  { question: "Which is safer?", answer: "They have different risk profiles. Nexo has counterparty risk (the company manages your funds). Aave has smart contract risk (code manages your funds). Nexo offers insurance and regulatory oversight. Aave offers on-chain transparency and no single point of failure." },
  { question: "Can I use both?", answer: "Yes. Many users split between CeFi and DeFi to diversify their risk. You might use Nexo for convenience and fiat access, and Aave for larger DeFi-native positions where you want on-chain transparency." },
];

export default function NexoVsAavePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Compare", href: "/crypto-loans/compare/nexo-vs-aave" }, { label: "Nexo vs Aave", href: "/crypto-loans/compare/nexo-vs-aave" }]} />
      <h1 className="text-4xl font-bold text-white mb-4">Nexo vs Aave: CeFi vs DeFi Lending ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">Nexo and Aave represent the two fundamental approaches to crypto lending: centralized (CeFi) and decentralized (DeFi). Nexo provides a familiar, app-based experience with fiat support and customer service. Aave offers permissionless, transparent, on-chain lending with no intermediary. This comparison helps you understand the trade-offs and choose the right approach for your borrowing needs.</p>
      </div>
      <section className="mb-12"><ComparisonTable items={items} features={features} title="Nexo vs Aave Comparison" /></section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
