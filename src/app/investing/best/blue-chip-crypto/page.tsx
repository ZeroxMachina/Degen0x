import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Blue-Chip Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Top blue-chip cryptocurrencies for ${CURRENT_YEAR}. The most established, reliable crypto assets with proven track records and institutional adoption.`,
};

const products = [
  { name: "Bitcoin (BTC)", slug: "bitcoin", rating: 4.9, description: "The original and largest cryptocurrency with unmatched network security, institutional adoption, and brand recognition. Bitcoin ETFs have cemented its position as a mainstream investment asset.", pros: ["Largest market cap and liquidity", "ETF access for traditional investors", "15+ year track record", "Strongest network security"], cons: ["Limited smart contract functionality", "Lower growth potential than altcoins", "Energy-intensive mining"], bestFor: "Core portfolio foundation and digital gold thesis", affiliateUrl: "#", category: "investing" },
  { name: "Ethereum (ETH)", slug: "ethereum", rating: 4.8, description: "The dominant smart contract platform powering the majority of DeFi, NFTs, and tokenized assets. Revenue-generating network with deflationary dynamics and institutional ETF access.", pros: ["Largest smart contract ecosystem", "Fee revenue with deflationary burns", "ETF availability", "Layer 2 scaling ecosystem"], cons: ["High mainnet gas fees", "Competition from Solana and others", "Complex upgrade roadmap"], bestFor: "Smart contract economy and DeFi infrastructure exposure", affiliateUrl: "#", category: "investing" },
  { name: "Solana (SOL)", slug: "solana", rating: 4.6, description: "High-performance Layer 1 blockchain with sub-second finality and minimal fees. Growing institutional interest, strong developer ecosystem, and expanding DeFi and consumer applications.", pros: ["Industry-leading speed and low fees", "Rapidly growing ecosystem", "Strong developer adoption", "Consumer-friendly UX"], cons: ["Historical network stability concerns", "More centralized than Ethereum", "Venture capital token unlock pressure"], bestFor: "High-performance blockchain with growth potential", affiliateUrl: "#", category: "investing" },
  { name: "Chainlink (LINK)", slug: "chainlink", rating: 4.5, description: "The dominant oracle network providing real-world data to smart contracts across all major blockchains. Critical DeFi infrastructure with expanding cross-chain capabilities.", pros: ["Essential oracle infrastructure", "No credible competitor at scale", "Cross-chain expansion via CCIP", "Partnerships with major institutions"], cons: ["Token value accrual still developing", "High fully diluted valuation", "Revenue growth needs acceleration"], bestFor: "Critical blockchain infrastructure investment", affiliateUrl: "#", category: "investing" },
  { name: "Uniswap (UNI)", slug: "uniswap", rating: 4.4, description: "The largest decentralized exchange by trading volume with deployments across major EVM chains. Pioneer of automated market making with strong governance and protocol revenue.", pros: ["Market-leading DEX by volume", "Multi-chain deployment", "Strong brand and user base", "Significant protocol revenue"], cons: ["Fee switch not yet activated for token holders", "Competition from aggregators", "Regulatory uncertainty for DEXs"], bestFor: "Blue-chip DeFi protocol exposure", affiliateUrl: "#", category: "investing" },
];

const faqs = [
  { question: "What makes a crypto blue-chip?", answer: "Blue-chip cryptocurrencies have large market caps (typically $10B+), proven track records across multiple market cycles, deep liquidity, institutional adoption, and established network effects. They represent the lowest risk within crypto — though still volatile by traditional standards — and the highest probability of long-term survival." },
  { question: "How much should I allocate to blue-chip crypto?", answer: "Blue-chip tokens should form the foundation of any crypto portfolio — typically 60-80% of total crypto allocation. This provides exposure to the most established projects while limiting downside risk. The remaining 20-40% can be allocated to higher-growth, higher-risk positions based on your risk tolerance." },
  { question: "Can blue-chip crypto still deliver high returns?", answer: "While percentage returns will be lower than early-stage tokens, blue-chip crypto can still deliver meaningful returns. Bitcoin's appreciation from $30K to $70K represents a 130% gain — significant by any standard. Blue-chip crypto offers a better risk-adjusted return profile than speculative altcoins for most investors." },
];

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Best Blue-Chip Crypto" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Blue-Chip Crypto ({CURRENT_YEAR})</h1>
        <p className="text-gray-600">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
        <p className="mt-4 text-lg">The most established and reliable cryptocurrencies — the blue chips of the crypto market. These assets have survived multiple market cycles, attracted institutional investment, and built the strongest network effects in the industry.</p>
      </header>
      <div className="space-y-6 mb-12">
        {products.map((product, i) => (<ProductCard key={product.slug} product={product} rank={i + 1} categorySlug="investing" />))}
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li><Link href="/investing/learn/crypto-portfolio-strategies" className="text-blue-600 hover:underline">Crypto Portfolio Strategies</Link></li>
          <li><Link href="/investing/learn/bitcoin-etf-complete-guide" className="text-blue-600 hover:underline">Bitcoin ETF Complete Guide</Link></li>
          <li><Link href="/investing/learn/ethereum-etf-guide" className="text-blue-600 hover:underline">Ethereum ETF Guide</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
    </main>
  );
}
