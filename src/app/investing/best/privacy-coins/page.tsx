import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Privacy Coins (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Top privacy-focused cryptocurrencies in ${CURRENT_YEAR}. Compare Monero, Zcash, and other privacy coins for transaction privacy and fungibility.`,
};

const products = [
  { name: "Monero (XMR)", slug: "monero", rating: 4.6, description: "The gold standard of privacy coins with mandatory privacy for all transactions. Ring signatures, stealth addresses, and RingCT make transactions untraceable by default.", pros: ["Privacy by default on all transactions", "Proven technology with years of use", "Active development community", "CPU mineable for decentralization"], cons: ["Delisted from some major exchanges", "Regulatory pressure increasing", "Not usable in most DeFi"], bestFor: "Maximum transaction privacy", affiliateUrl: "#", category: "investing" },
  { name: "Zcash (ZEC)", slug: "zcash", rating: 4.2, description: "Zero-knowledge proof based privacy coin offering optional shielded transactions. zk-SNARKs technology provides cryptographic privacy guarantees with transparent option.", pros: ["Cutting-edge zk-SNARK technology", "Optional transparency for compliance", "Institutional backing from ECC"], cons: ["Optional privacy reduces effectiveness", "Trusted setup ceremony concerns", "Lower adoption than Monero"], bestFor: "Optional privacy with compliance flexibility", affiliateUrl: "#", category: "investing" },
  { name: "Secret Network (SCRT)", slug: "secret", rating: 4.0, description: "Privacy-focused smart contract platform in the Cosmos ecosystem. Secret contracts enable private DeFi, NFTs, and applications with encrypted state.", pros: ["Private smart contracts unique feature", "Cosmos IBC interoperability", "DeFi with transaction privacy"], cons: ["Small ecosystem compared to competitors", "TEE-based privacy model trade-offs", "Limited developer adoption"], bestFor: "Private smart contract platform exposure", affiliateUrl: "#", category: "investing" },
  { name: "Dero (DERO)", slug: "dero", rating: 3.9, description: "Privacy-focused smart contract platform combining CryptoNote privacy with smart contract functionality. Aims to bring Monero-level privacy to programmable contracts.", pros: ["Private smart contracts", "CryptoNote-based privacy", "Growing developer community"], cons: ["Very small market cap", "Limited exchange availability", "Early-stage ecosystem"], bestFor: "Speculative privacy smart contract exposure", affiliateUrl: "#", category: "investing" },
  { name: "Firo (FIRO)", slug: "firo", rating: 3.8, description: "Privacy coin using the Lelantus Spark protocol for high-anonymity transactions. Formerly Zcoin, rebranded with upgraded privacy technology.", pros: ["Advanced Lelantus Spark privacy", "Active research and development", "Transparent supply auditing"], cons: ["Smaller market cap and liquidity", "Less recognition than Monero/Zcash", "Limited exchange support"], bestFor: "Advanced privacy technology with research focus", affiliateUrl: "#", category: "investing" },
];

const faqs = [
  { question: "Are privacy coins legal?", answer: "Privacy coins are legal to own in most countries, but some exchanges have delisted them due to regulatory pressure. Japan and South Korea have restricted privacy coin trading on local exchanges. Regulatory risk is the primary concern for privacy coin investors — increased restrictions could limit trading access and liquidity." },
  { question: "Why would someone need a privacy coin?", answer: "Financial privacy is a legitimate need. Transparent blockchains expose your entire transaction history and balance to anyone who knows your address. Privacy coins protect against surveillance, competitive intelligence (businesses), and personal security (hiding wealth from potential attackers). Privacy is a fundamental right, not inherently suspicious." },
  { question: "Will privacy coins be banned?", answer: "Complete bans are unlikely in democratic countries, but increased regulation and exchange delisting pressure is the more probable outcome. Privacy coins may need to develop compliance tools (like Zcash's optional transparency) to maintain exchange access while preserving privacy features." },
];

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Best Privacy Coins" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Privacy Coins ({CURRENT_YEAR})</h1>
        <p className="text-gray-600">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
        <p className="mt-4 text-lg">Privacy coins provide confidential transactions that protect financial privacy on blockchain. We evaluated coins on privacy strength, technology, liquidity, and regulatory positioning.</p>
      </header>
      <div className="space-y-6 mb-12">
        {products.map((product, i) => (<ProductCard key={product.slug} product={product} rank={i + 1} categorySlug="investing" />))}
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li><Link href="/investing/learn/crypto-regulation-guide" className="text-blue-600 hover:underline">Crypto Regulation Guide</Link></li>
          <li><Link href="/investing/learn/crypto-investment-risks" className="text-blue-600 hover:underline">Crypto Investment Risks</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
    </main>
  );
}
