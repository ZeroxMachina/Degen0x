import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = { title: `Best No-KYC Crypto Loans ${CURRENT_YEAR} - Borrow Without ID`, description: `Find the best no-KYC crypto loan platforms in ${CURRENT_YEAR}. Borrow against your crypto without identity verification through DeFi protocols.` };

const products: Product[] = [
  { name: "Aave", slug: "aave-loans", rating: 4.8, description: "Aave is fully permissionless with no KYC, no account creation, and no identity verification of any kind. Simply connect your wallet, deposit collateral, and borrow. Available on 10+ chains.", pros: ["Completely permissionless", "No account needed", "10+ chain availability", "Deepest DeFi liquidity"], cons: ["Requires DeFi knowledge", "Variable interest rates", "Self-custody responsibility"], fees: "Variable borrow rates", bestFor: "Privacy-conscious DeFi borrowers", affiliateUrl: "https://cryptodegen.com/go/aave", category: "crypto-loans", featured: true },
  { name: "Compound", slug: "compound-loans", rating: 4.5, description: "Compound offers no-KYC borrowing through its decentralized protocol. The V3 isolated market model provides clean risk separation, and the familiar interface makes it accessible even for relatively new DeFi users.", pros: ["No KYC or registration", "Simple borrowing UX", "Isolated risk markets", "COMP incentives"], cons: ["Fewer chains than Aave", "Limited asset selection", "Variable rates only"], fees: "Variable borrow rates", bestFor: "Simple no-KYC borrowing", affiliateUrl: "https://cryptodegen.com/go/compound", category: "crypto-loans" },
  { name: "MakerDAO", slug: "makerdao", rating: 4.6, description: "MakerDAO Vaults require no identity verification. Anyone can open a Vault, deposit collateral, and mint DAI stablecoins. The protocol has operated since 2017 without requiring user identification.", pros: ["No KYC since 2017", "Borrow DAI stablecoin", "Multiple collateral options", "Governance-set rates"], cons: ["DAI only", "Complex Vault management", "Higher collateralization needed"], fees: "Stability fee", bestFor: "Private DAI borrowing", affiliateUrl: "https://cryptodegen.com/go/makerdao", category: "crypto-loans" },
];

const faqs: FAQ[] = [
  { question: "Are no-KYC crypto loans legal?", answer: "Using permissionless DeFi protocols is generally legal in most jurisdictions. These protocols are smart contracts on public blockchains that anyone can interact with. However, regulatory landscapes vary, and users should understand the legal framework in their jurisdiction." },
  { question: "Are no-KYC loans less secure?", answer: "No-KYC DeFi loans can actually be more secure than CeFi alternatives because there is no centralized entity holding your funds or personal data. The main risks are smart contract vulnerabilities and self-custody responsibility rather than platform insolvency or data breaches." },
  { question: "Can I borrow fiat without KYC?", answer: "DeFi protocols only lend crypto assets (including stablecoins like USDC and DAI). To convert to fiat, you would need to use an exchange or service that may require KYC. However, stablecoins can be used directly for many of the same purposes as fiat." },
];

export default function NoKycPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Best", href: "/crypto-loans/best" }, { label: "No KYC", href: "/crypto-loans/best/no-kyc" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-white mb-4">Best No-KYC Crypto Loans ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">DeFi lending protocols offer crypto-backed loans without any identity verification, credit checks, or personal information. These permissionless platforms operate entirely through smart contracts, ensuring your privacy while providing instant access to liquidity. All you need is a Web3 wallet and sufficient collateral.</p>
      </div>
      <div className="space-y-4 mb-12">{products.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
      <FAQSection faqs={faqs} />
    </div>
  );
}
