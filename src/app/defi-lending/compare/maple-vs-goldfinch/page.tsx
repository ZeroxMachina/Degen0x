import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `Maple vs Goldfinch ${CURRENT_YEAR}: Institutional DeFi Lending Compared`,
  description: `Compare Maple Finance vs Goldfinch in ${CURRENT_YEAR}. Analyze institutional lending approaches, yields, risk profiles, and borrower types.`,
};

const items: ComparisonItem[] = [
  { name: "Maple Finance", slug: "maple", rating: 4.1, affiliateUrl: "https://degen0x.com/go/maple", features: { "TVL": "$100M+", "Focus": "Institutional credit", "Borrowers": "Crypto-native institutions", "Collateral": "Over + undercollateralized", "KYC Required": "For borrowers", "Chains": "Ethereum, Solana, Base", "Governance": "MPL token", "Unique Feature": "Pool delegates curate loans" } },
  { name: "Goldfinch", slug: "goldfinch", rating: 4.0, affiliateUrl: "https://degen0x.com/go/goldfinch", features: { "TVL": "$80M+", "Focus": "Real-world emerging market credit", "Borrowers": "Global businesses", "Collateral": "Off-chain assets", "KYC Required": "UID verification", "Chains": "Ethereum", "Governance": "GFI token", "Unique Feature": "Trust through consensus model" } },
];

const features = ["TVL", "Focus", "Borrowers", "Collateral", "KYC Required", "Chains", "Governance", "Unique Feature"];

const faqs: FAQ[] = [
  { question: "Which protocol has higher yields?", answer: "Goldfinch typically offers higher yields (8-12% APY) due to emerging market credit risk premiums. Maple yields vary by pool but generally range from 5-10%. Higher Goldfinch yields reflect higher credit and country risk from emerging market borrowers." },
  { question: "Are these protocols safe for retail investors?", answer: "Both carry meaningful credit risk that differs from traditional DeFi lending. Defaults have occurred on both platforms. Retail investors should understand they are exposed to borrower default risk, not just smart contract risk. Diversification across pools and protocols is important." },
  { question: "Do I need KYC to lend?", answer: "Goldfinch requires UID verification for all participants. Maple allows permissionless lending to some pools but may require KYC for others depending on pool delegate requirements. Check specific pool requirements before committing funds." },
];

export default function MapleVsGoldfinchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/maple-vs-goldfinch" }, { label: "Maple vs Goldfinch", href: "/defi-lending/compare/maple-vs-goldfinch" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Maple vs Goldfinch: Full Comparison ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Maple Finance and Goldfinch both facilitate undercollateralized lending but serve fundamentally different markets. Maple focuses on institutional crypto-native borrowers, while Goldfinch extends credit to real-world businesses in emerging markets. This comparison examines yields, risks, and which is more suitable for different investor profiles.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> Choose Maple for institutional credit exposure with crypto-native borrowers and more liquid positions. Choose Goldfinch for real-world asset yield diversification with emerging market exposure and potentially higher returns.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Maple vs Goldfinch Feature Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Detailed Analysis</h2>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Credit Risk Profiles</h3>
        <p className="text-[var(--color-text-secondary)]">Maple's borrowers are typically crypto trading firms, market makers, and DeFi protocols with revenue-generating businesses. Credit assessment relies on pool delegates who evaluate borrower financials. Goldfinch's borrowers are fintech lenders and businesses in emerging markets like Africa, Southeast Asia, and Latin America. Credit risk is assessed through the trust through consensus mechanism where backers stake capital to signal confidence in specific borrowers.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Default History</h3>
        <p className="text-[var(--color-text-secondary)]">Both protocols have experienced defaults. Maple faced significant defaults during the 2022 crypto credit crisis when several institutional borrowers including Orthogonal Trading defaulted on loans. Goldfinch has experienced smaller defaults from individual emerging market borrowers. Both protocols have since tightened underwriting standards and improved risk management processes. Understanding this default history is essential when evaluating expected returns versus actual realized returns.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Liquidity Considerations</h3>
        <p className="text-[var(--color-text-secondary)]">Maple pools generally offer more liquidity flexibility with periodic withdrawal windows. Goldfinch positions can be less liquid as underlying loans have fixed terms that may extend months or years. Goldfinch does have a senior pool that provides some liquidity, and secondary markets exist for some positions. Evaluate your liquidity needs carefully before committing to either platform, as early exit may not always be possible at favorable terms.</p>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
