import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Green & Sustainable Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Top environmentally sustainable cryptocurrencies in ${CURRENT_YEAR}. Energy-efficient blockchains and carbon-focused crypto projects.`,
  alternates: { canonical: "/investing/best/green-crypto" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const products = [
  { name: "Ethereum (ETH)", slug: "ethereum", rating: 4.8, description: "Since transitioning to proof-of-stake in September 2022, Ethereum reduced its energy consumption by over 99.95%. The most impactful green transition in crypto", pros: ["99.95% energy reduction after The Merge", "Largest ecosystem on proof-of-stake", "Proven environmental commitment"], cons: ["Previously proof-of-work history", "Validator hardware still consumes some energy", "Indirect energy use from L2 infrastructure"], bestFor: "Sustainable smart contract platform investment", affiliateUrl: "#", category: "investing" },
  { name: "Algorand (ALGO)", slug: "algorand", rating: 4.3, description: "Carbon-negative blockchain that offsets more carbon than its network produces. Pure proof-of-stake with minimal energy requirements and commitment to sustainability.", pros: ["Carbon-negative operations", "Extremely low energy per transaction", "Partnership with ClimateTrade"], cons: ["Smaller ecosystem", "Lower community engagement", "Foundation token sales concerns"], bestFor: "Carbon-negative blockchain investment", affiliateUrl: "#", category: "investing" },
  { name: "Cardano (ADA)", slug: "cardano", rating: 4.2, description: "Energy-efficient proof-of-stake blockchain consuming a fraction of Bitcoin's energy. Academic approach to sustainability with research-driven development.", pros: ["Highly energy-efficient PoS consensus", "Academic sustainability research", "Growing DeFi ecosystem"], cons: ["Slower development velocity", "Smaller ecosystem than Ethereum", "Competition from other green chains"], bestFor: "Research-driven sustainable blockchain", affiliateUrl: "#", category: "investing" },
  { name: "Hedera (HBAR)", slug: "hedera", rating: 4.1, description: "Hashgraph-based network with extremely low energy consumption per transaction. Carbon-negative through purchased offsets with ESG-focused corporate governance council.", pros: ["Ultra-low energy per transaction", "Corporate governance with ESG focus", "Carbon offset commitments"], cons: ["Centralized governance model", "Lower community engagement", "Complex technology differentiation"], bestFor: "Enterprise-grade sustainable distributed ledger", affiliateUrl: "#", category: "investing" },
  { name: "Tezos (XTZ)", slug: "tezos", rating: 4.0, description: "Self-amending proof-of-stake blockchain with extremely low energy footprint. Used by major art institutions and brands for eco-friendly NFT creation.", pros: ["Very low energy consumption", "Self-amending governance", "Adopted by art and fashion brands for green NFTs"], cons: ["Declining ecosystem activity", "Competition from larger chains", "Limited DeFi growth"], bestFor: "Eco-friendly NFT and art platform", affiliateUrl: "#", category: "investing" },
];

const faqs = [
  { question: "Is Bitcoin bad for the environment?", answer: "Bitcoin's proof-of-work mining consumes significant energy — roughly equivalent to a medium-sized country. However, an increasing portion (estimated 50-60%) uses renewable energy sources. The environmental impact is debated, with advocates arguing Bitcoin incentivizes renewable energy development in remote areas." },
  { question: "Are proof-of-stake blockchains truly sustainable?", answer: "Proof-of-stake chains consume 99%+ less energy than proof-of-work. Ethereum's transition reduced its energy use from the equivalent of a small country to approximately 2,600 homes. While not zero-energy, PoS blockchains have a negligible environmental footprint compared to PoW alternatives." },
  { question: "Can I invest in crypto carbon credits?", answer: "Yes. Protocols like Toucan Protocol and KlimaDAO tokenize carbon credits on blockchain. However, the quality and legitimacy of tokenized carbon credits varies, and the carbon credit market itself faces criticism about effectiveness. Research specific projects carefully before investing." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Investing', item: 'https://degen0x.com/investing' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/investing/best' },
    { '@type': 'ListItem', position: 4, name: 'Green Crypto', },
  ],
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="investing"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Best Green Crypto" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Green &amp; Sustainable Crypto ({CURRENT_YEAR})</h1>
        <p className="text-gray-600">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
        <p className="mt-4 text-lg">Environmentally sustainable cryptocurrencies for ESG-conscious investors. These blockchains prioritize energy efficiency and environmental responsibility while delivering strong technology fundamentals.</p>
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
          <li><Link href="/investing/learn/crypto-valuation-methods" className="text-blue-600 hover:underline">Crypto Valuation Methods</Link></li>
          <li><Link href="/investing/compare/bitcoin-vs-ethereum" className="text-blue-600 hover:underline">Bitcoin vs Ethereum</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Investing/best/green Crypto", "description": "Since transitioning to proof-of-stake in September 2022, Ethereum reduced its energy consumption by over 99.95%. The most impactful green transition in crypto", "url": "https://degen0x.com/investing/best/green-crypto"}) }} />
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
    </main>
  );
}
