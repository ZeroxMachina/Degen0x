import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Bitcoin vs Ethereum (${CURRENT_YEAR}) - Complete Comparison | ${SITE_NAME}`,
  description: `Bitcoin vs Ethereum in ${CURRENT_YEAR}. Compare investment thesis, technology, returns, staking, and which is better for your portfolio.`,
};

const items = [
  { name: "Bitcoin (BTC)", slug: "bitcoin", rating: 4.9, affiliateUrl: "#", features: { "Primary Use Case": "Digital gold / Store of value", "Consensus": "Proof-of-Work", "Max Supply": "21 million", "Smart Contracts": "Limited (Bitcoin Script)", "Staking Yield": "N/A (PoW)", "Annual Inflation": "~1.7% (post-halving)", "ETF Available": "Yes (Spot)", "Transaction Speed": "~10 min blocks", "Energy Usage": "High", "Institutional Adoption": "Highest in crypto" } },
  { name: "Ethereum (ETH)", slug: "ethereum", rating: 4.8, affiliateUrl: "#", features: { "Primary Use Case": "Smart contract platform", "Consensus": "Proof-of-Stake", "Max Supply": "No cap (deflationary dynamics)", "Smart Contracts": "Full Turing-complete", "Staking Yield": "3-5% APY", "Annual Inflation": "~0.5% (can be negative)", "ETF Available": "Yes (Spot)", "Transaction Speed": "~12 sec blocks", "Energy Usage": "Very low (99.95% less than PoW)", "Institutional Adoption": "Growing rapidly" } },
];

const faqs = [
  { question: "Should I invest in Bitcoin or Ethereum?", answer: "Most investors benefit from holding both. Bitcoin is a safer, more conservative crypto bet with store-of-value properties. Ethereum offers higher growth potential through its smart contract ecosystem but with more risk. A common split is 60-70% Bitcoin and 30-40% Ethereum within your crypto allocation." },
  { question: "Which has better long-term potential?", answer: "Bitcoin and Ethereum have different value propositions that could both succeed. Bitcoin competes with gold as a store of value in a $13 trillion market. Ethereum competes with traditional finance infrastructure in a multi-trillion-dollar market. Both have enormous potential, with Ethereum offering potentially higher percentage returns with more risk." },
  { question: "Is Ethereum more risky than Bitcoin?", answer: "Yes. Ethereum faces more competitive risk from alternative smart contract platforms like Solana, technical execution risk from its complex upgrade roadmap, and regulatory uncertainty around its staking and DeFi ecosystem. Bitcoin's simpler design and narrower use case make it relatively less risky." },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Compare", href: "/investing/compare" }, { label: "Bitcoin vs Ethereum" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Bitcoin vs Ethereum ({CURRENT_YEAR})</h1>
        <p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">Bitcoin and Ethereum are the two largest cryptocurrencies serving fundamentally different purposes. Bitcoin is digital gold — a store of value with fixed scarcity. Ethereum is programmable money — a platform for decentralized applications, DeFi, and tokenization. This comparison helps you understand the key differences for investment decisions.</p>
      <section className="mb-10">
        <ComparisonTable items={items} features={["Primary Use Case", "Consensus", "Max Supply", "Smart Contracts", "Staking Yield", "Annual Inflation", "ETF Available", "Transaction Speed", "Energy Usage", "Institutional Adoption"]} title="Bitcoin vs Ethereum" />
      </section>
      <div className="prose-crypto mb-10">
        <p>Bitcoin&apos;s investment thesis centers on digital scarcity — a fixed 21 million supply that cannot be inflated, making it an attractive hedge against fiat currency debasement. Its simplicity is a feature: fewer attack vectors, no complex smart contract risks, and the strongest Lindy effect in crypto. Bitcoin ETFs have opened a massive new demand channel from traditional investors and institutions who view BTC as digital gold in a portfolio context.</p>
        <p>Ethereum&apos;s investment thesis is broader — it captures value from the entire smart contract economy including DeFi, NFTs, tokenization, and Layer 2 scaling. ETH generates fee revenue that gets partially burned, creating deflationary pressure during high usage. Staking yields provide ongoing income unavailable from Bitcoin. Ethereum&apos;s risk-reward is higher: more upside from ecosystem growth but more competition, complexity, and execution risk. Most sophisticated crypto portfolios hold both assets in proportion to their conviction and risk tolerance.</p>
      </div>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Related Content</h2>
        <ul className="space-y-2">
          <li><Link href="/investing/learn/bitcoin-etf-complete-guide" className="text-blue-600 hover:underline">Bitcoin ETF Complete Guide</Link></li>
          <li><Link href="/investing/learn/ethereum-etf-guide" className="text-blue-600 hover:underline">Ethereum ETF Guide</Link></li>
          <li><Link href="/investing/learn/crypto-portfolio-strategies" className="text-blue-600 hover:underline">Crypto Portfolio Strategies</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
