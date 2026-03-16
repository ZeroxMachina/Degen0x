import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `Overcollateralized vs Undercollateralized DeFi Lending ${CURRENT_YEAR}`,
  description: `Compare overcollateralized and undercollateralized DeFi lending in ${CURRENT_YEAR}. Understand risk profiles, yields, use cases, and protocol examples.`,
};

const items: ComparisonItem[] = [
  { name: "Overcollateralized", slug: "defi-lending", rating: 4.6, affiliateUrl: "https://degen0x.com/go/aave", features: { "Collateral Required": "100-150%+ of loan", "Default Risk": "Near zero (auto-liquidation)", "KYC Required": "No", "Typical Yields": "3-8% stablecoins", "Access": "Permissionless", "Protocols": "Aave, Compound, Maker", "Capital Efficiency": "Low", "Best For": "Trustless, permissionless lending" } },
  { name: "Undercollateralized", slug: "defi-lending", rating: 3.9, affiliateUrl: "https://degen0x.com/go/maple", features: { "Collateral Required": "0-100% of loan", "Default Risk": "Material (credit risk)", "KYC Required": "Usually yes", "Typical Yields": "5-15%", "Access": "Often permissioned", "Protocols": "Maple, Goldfinch, TrueFi", "Capital Efficiency": "High", "Best For": "Higher yield with credit exposure" } },
];

const features = ["Collateral Required", "Default Risk", "KYC Required", "Typical Yields", "Access", "Protocols", "Capital Efficiency", "Best For"];

const faqs: FAQ[] = [
  { question: "Why does most DeFi use overcollateralization?", answer: "Overcollateralization eliminates the need for trust, identity verification, or credit assessment. Since anyone can borrow anonymously, the only way to protect lenders is requiring collateral that exceeds the loan value. This is the foundation of permissionless DeFi lending." },
  { question: "Can undercollateralized lending work in DeFi?", answer: "Yes, but it requires some form of trust or reputation. Current approaches include institutional borrower vetting by pool delegates, on-chain credit scoring, and real-world legal agreements backing on-chain loans. Pure peer-to-peer undercollateralized lending remains challenging in a pseudonymous environment." },
  { question: "Which yields are more sustainable?", answer: "Overcollateralized yields are generally more sustainable since they come from organic borrowing demand. Undercollateralized yields include a credit risk premium that may not be fully compensated if defaults exceed expectations, as seen during the 2022 credit crisis." },
];

export default function OverVsUndercollateralizedPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/overcollateralized-vs-undercollateralized" }, { label: "Over vs Undercollateralized", href: "/defi-lending/compare/overcollateralized-vs-undercollateralized" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Overcollateralized vs Undercollateralized Lending ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          DeFi lending exists on a spectrum from fully overcollateralized to completely unsecured. Overcollateralized lending is the backbone of DeFi, offering trustless, permissionless borrowing and lending. Undercollateralized lending pushes toward greater capital efficiency but introduces credit risk. This comparison examines the tradeoffs between these fundamental approaches.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> Overcollateralized lending is safer with lower yields and is suitable for most DeFi users. Undercollateralized lending offers higher yields but introduces credit risk and is better suited for experienced investors who can evaluate borrower quality.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Overcollateralized vs Undercollateralized Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Detailed Analysis</h2>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Risk Profiles</h3>
        <p className="text-[var(--color-text-secondary)]">Overcollateralized lending has near-zero credit risk because the liquidation mechanism ensures lenders are repaid even if borrowers abandon their positions. The primary risks are smart contract vulnerabilities and extreme market conditions where liquidations fail to execute properly. Undercollateralized lending introduces genuine credit risk where borrower default can result in partial or total loss of principal. This risk is managed through borrower vetting, diversification across loans, and loss reserves, but defaults are a real possibility as demonstrated by multiple protocol incidents.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Yield Comparison</h3>
        <p className="text-[var(--color-text-secondary)]">The yield differential reflects the credit risk premium. Overcollateralized stablecoin lending typically yields 3-8% APY. Undercollateralized lending offers 5-15% APY or more, with the additional yield compensating for default risk. When evaluating undercollateralized yields, subtract expected default losses to calculate risk-adjusted returns. A 12% nominal yield with 3% annual default losses delivers 9% risk-adjusted return, which may or may not be superior to 6% from overcollateralized lending depending on your risk preferences.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">The Future of DeFi Credit</h3>
        <p className="text-[var(--color-text-secondary)]">The DeFi industry is gradually developing infrastructure to support more undercollateralized lending safely. On-chain credit scoring, reputation systems, and real-world asset integration are creating middle ground between fully overcollateralized and unsecured lending. This evolution could unlock significant capital efficiency and bring DeFi lending closer to the scale of traditional credit markets while maintaining the transparency and accessibility advantages of decentralized infrastructure.</p>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
