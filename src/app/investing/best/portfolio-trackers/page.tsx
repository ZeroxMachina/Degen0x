import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Crypto Portfolio Trackers (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `The best crypto portfolio trackers in ${CURRENT_YEAR}. Compare CoinGecko, Delta, CoinStats, and more for tracking your crypto investments across wallets and exchanges.`,
};

const products = [
  { name: "CoinGecko", slug: "coingecko", rating: 4.7, description: "The most comprehensive crypto data platform with portfolio tracking across unlimited wallets, price alerts, and detailed token analytics. Free tier covers most users' needs.", pros: ["Free comprehensive portfolio tracking", "Deepest token coverage", "Price alerts and watchlists"], cons: ["Manual entry required for DeFi positions", "No direct exchange API sync on free plan"], bestFor: "Comprehensive crypto data and portfolio tracking", affiliateUrl: "#", category: "investing" },
  { name: "CoinStats", slug: "coinstats", rating: 4.6, description: "All-in-one portfolio tracker with direct wallet and exchange connections. Auto-syncs balances from 300+ exchanges and wallets with DeFi position tracking.", pros: ["Auto-sync from exchanges and wallets", "DeFi position tracking", "Built-in swap and buy features"], cons: ["Premium features require paid plan", "Occasional sync delays"], bestFor: "Automated multi-exchange portfolio tracking", affiliateUrl: "#", category: "investing" },
  { name: "Delta", slug: "delta", rating: 4.5, description: "Clean, mobile-first portfolio tracker acquired by eToro. Supports stocks and crypto in a single view with detailed analytics and performance charts.", pros: ["Beautiful mobile interface", "Combined stock and crypto tracking", "Detailed performance analytics"], cons: ["Limited DeFi tracking", "Some features locked behind PRO subscription"], bestFor: "Mobile portfolio tracking with stocks and crypto", affiliateUrl: "#", category: "investing" },
  { name: "DeBank", slug: "debank", rating: 4.6, description: "The leading DeFi portfolio tracker that automatically detects positions across hundreds of protocols on 20+ chains. Essential for active DeFi users.", pros: ["Best DeFi position detection", "Multi-chain coverage", "Protocol-level position breakdown"], cons: ["Read-only dashboard, not a wallet", "No exchange tracking"], bestFor: "DeFi portfolio tracking across multiple chains", affiliateUrl: "#", category: "investing" },
  { name: "Zapper", slug: "zapper", rating: 4.4, description: "Web3 portfolio tracker and DeFi dashboard with NFT tracking, transaction history, and protocol exploration features across EVM chains.", pros: ["Comprehensive NFT tracking", "Transaction history with labels", "Bridge and swap integration"], cons: ["Limited to EVM chains", "Can be slow loading large portfolios"], bestFor: "EVM DeFi and NFT portfolio tracking", affiliateUrl: "#", category: "investing" },
];

const faqs = [
  { question: "Are crypto portfolio trackers safe to connect to my wallet?", answer: "Read-only wallet connections (via public address) are safe — they only view your balance without access to your funds. API connections to exchanges should use read-only API keys with trading permissions disabled. Never share private keys or seed phrases with any portfolio tracker." },
  { question: "Do I need a paid portfolio tracker?", answer: "Free tiers of CoinGecko and CoinStats cover basic tracking needs. Paid plans typically add features like unlimited exchange connections, advanced analytics, tax reporting, and priority support. If you have portfolios across many exchanges and DeFi protocols, paid plans offer significant convenience." },
  { question: "Can portfolio trackers help with taxes?", answer: "Some portfolio trackers integrate with or export to crypto tax software. CoinStats offers built-in tax reporting. For comprehensive tax calculation, dedicated tools like Koinly, CoinTracker, or TaxBit provide more complete coverage with proper cost basis and gain/loss calculations." },
];

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Best Portfolio Trackers" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Best Crypto Portfolio Trackers ({CURRENT_YEAR})</h1>
        <p className="text-gray-600">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
        <p className="mt-4 text-lg">Track all your crypto investments in one place. We evaluated portfolio trackers on exchange and wallet integration, DeFi support, analytics quality, and pricing to identify the best options for every type of investor.</p>
      </header>
      <div className="space-y-6 mb-12">
        {products.map((product, i) => (<ProductCard key={product.slug} product={product} rank={i + 1} categorySlug="investing" />))}
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li><Link href="/investing/learn/crypto-portfolio-strategies" className="text-blue-600 hover:underline">Crypto Portfolio Strategies</Link></li>
          <li><Link href="/investing/learn/rebalancing-crypto-portfolio" className="text-blue-600 hover:underline">Rebalancing Your Crypto Portfolio</Link></li>
          <li><Link href="/investing/learn/tax-efficient-crypto-investing" className="text-blue-600 hover:underline">Tax-Efficient Crypto Investing</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
    </main>
  );
}
