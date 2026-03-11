import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best DePIN Tokens (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Top Decentralized Physical Infrastructure Network tokens in ${CURRENT_YEAR}. Compare Helium, Render, Filecoin, and other DePIN projects.`,
};

const products = [
  { name: "Helium (HNT)", slug: "helium", rating: 4.4, description: "Decentralized wireless network with the largest DePIN deployment globally. Helium Mobile offers cellular service powered by community-operated hotspots and 5G nodes.", pros: ["Largest DePIN network by nodes", "Real wireless coverage deployment", "Mobile carrier partnerships"], cons: ["Revenue growth needs acceleration", "Hardware investment required for mining", "Competition from traditional carriers"], bestFor: "Decentralized wireless infrastructure exposure", affiliateUrl: "#", category: "investing" },
  { name: "Render Network (RNDR)", slug: "render", rating: 4.5, description: "Decentralized GPU rendering and compute network connecting GPU owners with users needing rendering power for 3D content, AI, and visual effects.", pros: ["Real demand from studios and AI", "Growing compute network", "Partnership with major platforms"], cons: ["Competition from centralized cloud", "Token utility mechanics evolving", "Revenue concentration risk"], bestFor: "Decentralized GPU compute and AI infrastructure", affiliateUrl: "#", category: "investing" },
  { name: "Filecoin (FIL)", slug: "filecoin", rating: 4.2, description: "Decentralized storage network with the largest capacity of any distributed storage protocol. Stores data across a global network of storage providers with cryptographic verification.", pros: ["Largest decentralized storage network", "Growing enterprise adoption", "Verifiable storage proofs"], cons: ["Complex tokenomics and vesting", "Competition from centralized cloud storage", "Storage utilization below capacity"], bestFor: "Decentralized data storage infrastructure", affiliateUrl: "#", category: "investing" },
  { name: "Akash Network (AKT)", slug: "akash", rating: 4.3, description: "Decentralized cloud computing marketplace offering significantly cheaper compute than AWS and other centralized providers. Growing AI workload adoption.", pros: ["50-85% cheaper than centralized cloud", "Growing AI compute demand", "Open marketplace model"], cons: ["Smaller network than centralized providers", "Reliability and uptime considerations", "Token value accrual still developing"], bestFor: "Decentralized cloud computing marketplace", affiliateUrl: "#", category: "investing" },
  { name: "Hivemapper (HONEY)", slug: "hivemapper", rating: 4.0, description: "Decentralized mapping network using dashcam-equipped contributors to build a continuously updated global street-level map competing with Google Maps.", pros: ["Unique real-world mapping use case", "Growing contributor network", "Enterprise map data customers"], cons: ["Early-stage revenue model", "Hardware requirement for contributors", "Competition with Google Maps"], bestFor: "Decentralized mapping and geospatial data", affiliateUrl: "#", category: "investing" },
];

const faqs = [
  { question: "What is DePIN?", answer: "DePIN (Decentralized Physical Infrastructure Networks) uses blockchain incentives to build real-world infrastructure. Instead of centralized companies deploying hardware, DePIN networks incentivize individuals to contribute computing power, wireless coverage, storage, or sensors by rewarding them with tokens. This creates distributed, community-owned infrastructure." },
  { question: "Why is DePIN significant?", answer: "DePIN represents one of the strongest bridges between crypto and the real economy. Unlike purely financial applications, DePIN networks create tangible physical infrastructure with measurable real-world utility. This makes DePIN tokens easier to value based on actual usage metrics and revenue rather than speculation alone." },
  { question: "How can I participate in DePIN beyond buying tokens?", answer: "You can operate DePIN hardware — run Helium hotspots, provide GPU rendering through Render, offer storage through Filecoin, or contribute mapping data through Hivemapper. Operating hardware earns token rewards and contributes to network growth. Evaluate hardware costs against expected rewards before investing." },
];

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Best DePIN Tokens" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Best DePIN Tokens ({CURRENT_YEAR})</h1>
        <p className="text-gray-600">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
        <p className="mt-4 text-lg">Decentralized Physical Infrastructure Networks are building real-world infrastructure through crypto incentives. We evaluated DePIN projects on network growth, revenue generation, real-world utility, and token value accrual.</p>
      </header>
      <div className="space-y-6 mb-12">
        {products.map((product, i) => (<ProductCard key={product.slug} product={product} rank={i + 1} categorySlug="investing" />))}
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li><Link href="/investing/learn/ai-crypto-tokens-guide" className="text-blue-600 hover:underline">AI Crypto Tokens Guide</Link></li>
          <li><Link href="/investing/learn/crypto-valuation-methods" className="text-blue-600 hover:underline">Crypto Valuation Methods</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
    </main>
  );
}
