import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = { title: `Best No-KYC Crypto Loans ${CURRENT_YEAR} - Borrow Without ID`, description: `Find the best no-KYC crypto loan platforms in ${CURRENT_YEAR}. Borrow against your crypto without identity verification through DeFi protocols.` ,
  alternates: { canonical: "/crypto-loans/best/no-kyc" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const products: Product[] = [
  { name: "Aave", slug: "aave-loans", rating: 4.8, description: "Aave is fully permissionless with no KYC, no account creation, and no identity verification of any kind. Simply connect your wallet, deposit collateral, and", pros: ["Completely permissionless", "No account needed", "10+ chain availability", "Deepest DeFi liquidity"], cons: ["Requires DeFi knowledge", "Variable interest rates", "Self-custody responsibility"], fees: "Variable borrow rates", bestFor: "Privacy-conscious DeFi borrowers", affiliateUrl: "https://degen0x.com/go/aave", category: "crypto-loans", featured: true },
  { name: "Compound", slug: "compound-loans", rating: 4.5, description: "Compound offers no-KYC borrowing through its decentralized protocol. The V3 isolated market model provides clean risk separation, and the familiar interface makes it accessible even for relatively new DeFi users.", pros: ["No KYC or registration", "Simple borrowing UX", "Isolated risk markets", "COMP incentives"], cons: ["Fewer chains than Aave", "Limited asset selection", "Variable rates only"], fees: "Variable borrow rates", bestFor: "Simple no-KYC borrowing", affiliateUrl: "https://degen0x.com/go/compound", category: "crypto-loans" },
  { name: "MakerDAO", slug: "makerdao", rating: 4.6, description: "MakerDAO Vaults require no identity verification. Anyone can open a Vault, deposit collateral, and mint DAI stablecoins. The protocol has operated since 2017 without requiring user identification.", pros: ["No KYC since 2017", "Borrow DAI stablecoin", "Multiple collateral options", "Governance-set rates"], cons: ["DAI only", "Complex Vault management", "Higher collateralization needed"], fees: "Stability fee", bestFor: "Private DAI borrowing", affiliateUrl: "https://degen0x.com/go/makerdao", category: "crypto-loans" },
];

const faqs: FAQ[] = [
  { question: "Are no-KYC crypto loans legal?", answer: "Using permissionless DeFi protocols is generally legal in most jurisdictions. These protocols are smart contracts on public blockchains that anyone can interact with. However, regulatory landscapes vary, and users should understand the legal framework in their jurisdiction." },
  { question: "Are no-KYC loans less secure?", answer: "No-KYC DeFi loans can actually be more secure than CeFi alternatives because there is no centralized entity holding your funds or personal data. The main risks are smart contract vulnerabilities and self-custody responsibility rather than platform insolvency or data breaches." },
  { question: "Can I borrow fiat without KYC?", answer: "DeFi protocols only lend crypto assets (including stablecoins like USDC and DAI). To convert to fiat, you would need to use an exchange or service that may require KYC. However, stablecoins can be used directly for many of the same purposes as fiat." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Loans', item: 'https://degen0x.com/crypto-loans' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/crypto-loans/best' },
    { '@type': 'ListItem', position: 4, name: 'No Kyc', },
  ],
};

export default function NoKycPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="crypto-loans"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Best", href: "/crypto-loans/best" }, { label: "No KYC", href: "/crypto-loans/best/no-kyc" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best No-KYC Crypto Loans ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">DeFi lending protocols offer crypto-backed loans without any identity verification, credit checks, or personal information. These permissionless platforms operate entirely through smart contracts, ensuring your privacy while providing instant access to liquidity. All you need is a Web3 wallet and sufficient collateral.</p>
      </div>
      <div className="space-y-4 mb-12">{products.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto Loans/best/no Kyc", "description": "Aave is fully permissionless with no KYC, no account creation, and no identity verification of any kind. Simply connect your wallet, deposit collateral, and", "url": "https://degen0x.com/crypto-loans/best/no-kyc"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
