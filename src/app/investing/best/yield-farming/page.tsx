import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Yield Farming Protocols (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Top yield farming platforms and protocols in ${CURRENT_YEAR}. Compare Curve, Convex, Yearn, and other DeFi yield opportunities with risk analysis.`,
  alternates: { canonical: "/investing/best/yield-farming" }};

const products = [
  { name: "Curve Finance (CRV)", slug: "curve", rating: 4.6, description: "The dominant stablecoin DEX and yield farming hub. Curve pools offer swap fees plus CRV rewards, with the ve-tokenomics model creating deep liquidity", pros: ["Deepest stablecoin liquidity", "Established ve-tokenomics model", "Foundation of DeFi yield ecosystem"], cons: ["Complex gauge voting system", "CRV emissions sustainability", "Smart contract complexity risk"], bestFor: "Stablecoin yield farming with minimal impermanent loss", affiliateUrl: "#", category: "investing" },
  { name: "Convex Finance (CVX)", slug: "convex", rating: 4.5, description: "Boost Curve yields without locking CRV yourself. Convex aggregates CRV voting power to maximize yields for depositors while distributing CVX rewards.", pros: ["Boosted Curve yields without CRV locking", "Simplified Curve farming", "Strong TVL and protocol revenue"], cons: ["Dependent on Curve ecosystem", "CVX emissions decline over time", "Smart contract dependency risk"], bestFor: "Maximized Curve yields with simplified experience", affiliateUrl: "#", category: "investing" },
  { name: "Yearn Finance (YFI)", slug: "yearn", rating: 4.4, description: "Automated yield aggregator that moves deposits between DeFi protocols for optimal returns. Battle-tested vaults with professional strategy management.", pros: ["Automated yield optimization", "Professional strategy management", "Long track record in DeFi"], cons: ["Management and performance fees", "Strategy complexity", "Lower yields than manual farming"], bestFor: "Hands-off automated yield farming", affiliateUrl: "#", category: "investing" },
  { name: "Pendle Finance (PENDLE)", slug: "pendle", rating: 4.5, description: "Yield tokenization enabling fixed-rate strategies and yield trading. Separate principal from yield to lock in returns or speculate on future yield rates.", pros: ["Fixed yield options unique in DeFi", "Growing TVL and revenue", "Innovative yield market creation"], cons: ["Complex product requires learning", "Maturity-based lockups for fixed yields", "Relatively newer protocol"], bestFor: "Fixed-rate yield and yield trading strategies", affiliateUrl: "#", category: "investing" },
  { name: "Aura Finance (AURA)", slug: "aura", rating: 4.2, description: "Yield optimization for Balancer pools, similar to what Convex does for Curve. Boost Balancer yields by aggregating veBAL voting power for depositors.", pros: ["Boosted Balancer yields", "Growing veBAL accumulation", "Diversified pool options"], cons: ["Dependent on Balancer ecosystem", "Smaller than Convex competitor", "AURA emissions sustainability"], bestFor: "Boosted Balancer pool yield farming", affiliateUrl: "#", category: "investing" },
];

const faqs = [
  { question: "Is yield farming still profitable?", answer: "Yes, but yields have normalized from the triple-digit APYs of 2020-2021. Sustainable farming yields now range from 5-20% on established protocols, which still significantly exceeds traditional savings rates. Profitability depends on gas costs, position size, and choosing sustainable yield sources over temporary incentives." },
  { question: "What is impermanent loss?", answer: "Impermanent loss occurs when the price ratio of tokens in your liquidity pool changes. The further prices diverge from your entry ratio, the more value your LP position loses compared to simply holding the tokens. It is permanent when you withdraw at a different ratio than your deposit. Stablecoin pools minimize this risk." },
  { question: "How do I get started with yield farming?", answer: "Start with stablecoin pools on Curve or lending on Aave for the lowest risk entry. Use yield aggregators like Yearn for automated strategies. Begin with small amounts on Ethereum L2s (Arbitrum, Base) where gas fees are low. Graduate to more complex strategies as you gain experience and comfort with DeFi." },
];

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="investing"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Best Yield Farming" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Yield Farming Protocols ({CURRENT_YEAR})</h1>
        <p className="text-gray-600">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
        <p className="mt-4 text-lg">Top DeFi yield farming protocols evaluated on sustainable yield generation, security track record, TVL, and ease of use. We prioritize protocols with genuine fee revenue over those relying solely on token incentives.</p>
      </header>
      <div className="space-y-6 mb-12">
        {products.map((product, i) => (<ProductCard key={product.slug} product={product} rank={i + 1} categorySlug="investing" />))}
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We are long-term Bitcoin and Ethereum believers. Our analysis of other assets applies the same rigorous framework regardless of personal conviction.
          </p>
        </div>
        <ul className="space-y-2">
          <li><Link href="/investing/learn/yield-farming-vs-staking" className="text-blue-600 hover:underline">Yield Farming vs Staking</Link></li>
          <li><Link href="/investing/learn/stablecoin-investing-guide" className="text-blue-600 hover:underline">Stablecoin Investing Guide</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Investing/best/yield Farming", "description": "The dominant stablecoin DEX and yield farming hub. Curve pools offer swap fees plus CRV rewards, with the ve-tokenomics model creating deep liquidity", "url": "https://degen0x.com/investing/best/yield-farming"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
