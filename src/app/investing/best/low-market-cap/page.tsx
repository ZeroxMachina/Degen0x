import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Low Market Cap Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Top low market cap cryptocurrencies with high growth potential in ${CURRENT_YEAR}. Small-cap gems with strong fundamentals and active development.`,
};

const products = [
  { name: "Pendle (PENDLE)", slug: "pendle", rating: 4.5, description: "Yield tokenization protocol enabling trading of future yield and fixed-rate strategies. Innovative DeFi primitive with growing TVL and unique market position.", pros: ["Unique yield trading mechanism", "Growing TVL and revenue", "Strong product-market fit"], cons: ["Complex product for average users", "DeFi sector-specific risk", "Dependent on DeFi yield demand"], bestFor: "DeFi innovation with revenue fundamentals", affiliateUrl: "#", category: "investing" },
  { name: "Pyth Network (PYTH)", slug: "pyth", rating: 4.3, description: "High-frequency oracle network providing real-time price feeds across 40+ blockchains. First-party data from major market makers and exchanges.", pros: ["First-party data from institutional sources", "Multi-chain oracle coverage", "Low-latency price feeds"], cons: ["Competition from Chainlink", "Token utility development ongoing", "Governance still evolving"], bestFor: "Oracle infrastructure with institutional data", affiliateUrl: "#", category: "investing" },
  { name: "Celestia (TIA)", slug: "celestia", rating: 4.4, description: "Modular data availability layer enabling rollups to post data cheaply and efficiently. Pioneering modular blockchain architecture as infrastructure for L2 ecosystems.", pros: ["First mover in modular DA layer", "Enables cheaper rollup deployment", "Strong developer ecosystem"], cons: ["Competition from EigenDA and Avail", "Early-stage technology", "High FDV relative to usage"], bestFor: "Modular blockchain infrastructure exposure", affiliateUrl: "#", category: "investing" },
  { name: "Morpho (MORPHO)", slug: "morpho", rating: 4.2, description: "Optimized lending protocol that improves capital efficiency by matching lenders and borrowers peer-to-peer. Built on top of established lending primitives.", pros: ["Better rates than traditional lending pools", "Growing TVL and revenue", "Capital-efficient design"], cons: ["Dependent on underlying lending protocols", "Newer protocol with less track record", "Complex mechanism for average users"], bestFor: "Optimized DeFi lending exposure", affiliateUrl: "#", category: "investing" },
  { name: "Radiant Capital (RDNT)", slug: "radiant", rating: 4.0, description: "Cross-chain lending protocol aiming to unify lending markets across blockchains. LayerZero-powered omnichain interoperability for borrowing and lending.", pros: ["Cross-chain lending vision", "Active on multiple chains", "Revenue-sharing tokenomics"], cons: ["Previous exploit history", "Complex cross-chain risks", "Competition from established lenders"], bestFor: "Cross-chain DeFi lending exposure", affiliateUrl: "#", category: "investing" },
];

const faqs = [
  { question: "What is considered low market cap in crypto?", answer: "Generally, tokens with market caps under $500 million are considered small-cap, and under $100 million are micro-cap. Low market cap tokens offer higher growth potential but carry significantly more risk including lower liquidity, higher volatility, and greater chance of project failure." },
  { question: "Are low market cap cryptos risky?", answer: "Yes, significantly more than large-caps. Small-cap tokens face higher failure rates, lower liquidity making large positions difficult to exit, wider price spreads, and less analyst coverage. Limit small-cap exposure to 10-20% of your crypto portfolio and diversify across multiple positions." },
  { question: "How do I find low market cap gems?", answer: "Research projects with active development (GitHub activity), growing usage metrics (TVL, transactions, active users), reputable teams and backers, and clear competitive advantages. Use platforms like DeFi Llama for TVL data, Token Terminal for revenue metrics, and CoinGecko for market data." },
];

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Best Low Market Cap Crypto" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Low Market Cap Crypto ({CURRENT_YEAR})</h1>
        <p className="text-gray-600">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
        <p className="mt-4 text-lg">Small-cap cryptocurrencies with genuine innovation, growing adoption, and potential for outsized returns. These picks focus on projects with real products and measurable traction rather than hype-driven tokens.</p>
      </header>
      <div className="space-y-6 mb-12">
        {products.map((product, i) => (<ProductCard key={product.slug} product={product} rank={i + 1} categorySlug="investing" />))}
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li><Link href="/investing/learn/what-is-market-cap" className="text-blue-600 hover:underline">What Is Market Cap in Crypto?</Link></li>
          <li><Link href="/investing/learn/crypto-whitepaper-guide" className="text-blue-600 hover:underline">How to Read a Crypto Whitepaper</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
    </main>
  );
}
