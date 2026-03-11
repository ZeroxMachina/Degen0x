import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Crypto Under $1 (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Top cryptocurrencies under $1 in ${CURRENT_YEAR}. Promising low-priced tokens with genuine utility, strong teams, and growth potential.`,
};

const products = [
  { name: "Dogecoin (DOGE)", slug: "dogecoin", rating: 4.3, description: "The original meme coin with the largest community and strongest brand recognition. Accepted as payment by multiple companies and backed by high-profile advocates.", pros: ["Largest meme coin community", "High liquidity and exchange availability", "Real-world payment adoption"], cons: ["Unlimited supply creates inflation", "No smart contract functionality", "Price heavily influenced by social media"], bestFor: "Community-driven crypto with mainstream recognition", affiliateUrl: "#", category: "investing" },
  { name: "Cardano (ADA)", slug: "cardano", rating: 4.2, description: "Research-driven smart contract platform with a focus on formal verification and peer-reviewed development. Growing DeFi ecosystem with strong academic foundation.", pros: ["Rigorous academic approach", "Strong staking ecosystem", "Growing DeFi adoption"], cons: ["Slower development velocity", "Smaller DeFi ecosystem than competitors", "Competition from faster chains"], bestFor: "Long-term smart contract platform investment", affiliateUrl: "#", category: "investing" },
  { name: "Stellar (XLM)", slug: "stellar", rating: 4.1, description: "Cross-border payment network designed for fast, low-cost international transfers. Partnerships with financial institutions and focus on financial inclusion.", pros: ["Fast and cheap transactions", "Financial institution partnerships", "Focus on real-world payment use case"], cons: ["Slower ecosystem growth", "Limited DeFi features", "Competition from newer networks"], bestFor: "Payment-focused blockchain exposure", affiliateUrl: "#", category: "investing" },
  { name: "VeChain (VET)", slug: "vechain", rating: 4.0, description: "Enterprise-focused blockchain specializing in supply chain management and business solutions. Real partnerships with major corporations for tracking and verification.", pros: ["Real enterprise adoption", "Supply chain use case validation", "Dual token model for gas management"], cons: ["Concentrated in supply chain niche", "Limited DeFi ecosystem", "Lower market hype"], bestFor: "Enterprise blockchain and supply chain exposure", affiliateUrl: "#", category: "investing" },
  { name: "Hedera (HBAR)", slug: "hedera", rating: 4.1, description: "Hashgraph-based distributed ledger governed by a council of major corporations including Google, IBM, and Boeing. Enterprise-grade performance with institutional governance.", pros: ["Corporate governance council", "High transaction throughput", "Enterprise use cases"], cons: ["Centralized governance model", "Lower community engagement", "Complex technology differentiation"], bestFor: "Enterprise-grade institutional blockchain", affiliateUrl: "#", category: "investing" },
];

const faqs = [
  { question: "Are cheap cryptos better investments?", answer: "Token price is meaningless without considering total supply. A $0.01 token with 100 billion supply has the same $1 billion market cap as a $1,000 token with 1 million supply. Evaluate investments by market cap, fundamentals, and growth potential — not by the price of individual tokens." },
  { question: "Can a crypto under $1 reach $100?", answer: "Mathematically, the token price multiplied by total supply determines market cap. For most sub-$1 tokens with billions in supply, reaching $100 would require a market cap larger than Bitcoin's, which is unrealistic. Understand the math of supply and market cap before setting price targets." },
  { question: "Why do investors like low-priced crypto?", answer: "Psychological bias makes people feel they are getting more value buying 10,000 tokens at $0.01 than 0.001 Bitcoin at $60,000, even though the investment amount is the same. This unit bias drives demand for low-priced tokens but is not a rational investment criterion." },
];

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Best Crypto Under $1" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Crypto Under $1 ({CURRENT_YEAR})</h1>
        <p className="text-gray-600">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
        <p className="mt-4 text-lg">Low-priced cryptocurrencies with genuine utility and growth potential. We focused on projects with real technology, active development, and sustainable value propositions rather than tokens that are cheap for the wrong reasons.</p>
      </header>
      <div className="space-y-6 mb-12">
        {products.map((product, i) => (<ProductCard key={product.slug} product={product} rank={i + 1} categorySlug="investing" />))}
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li><Link href="/investing/learn/what-is-market-cap" className="text-blue-600 hover:underline">What Is Market Cap in Crypto?</Link></li>
          <li><Link href="/investing/learn/tokenomics-explained" className="text-blue-600 hover:underline">Tokenomics Explained</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
    </main>
  );
}
