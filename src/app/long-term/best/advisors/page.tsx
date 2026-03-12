import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Financial Advisors ${CURRENT_YEAR} - Expert Wealth Management`,
  description: `Find the best financial advisors specializing in cryptocurrency in ${CURRENT_YEAR}. Compare crypto-savvy RIAs, robo-advisors, and wealth managers for portfolio allocation, tax optimization, and retirement planning with digital assets.`,
};

const products: Product[] = [
  {
    name: "Bitwise Asset Management",
    slug: "bitwise",
    rating: 4.7,
    description:
      "Bitwise is one of the largest crypto asset managers, providing institutional-grade index funds and advisory services for investors and financial advisors. Their Bitwise 10 Crypto Index Fund tracks the top 10 cryptocurrencies by market cap, offering diversified crypto exposure through a traditional fund structure. They work directly with RIAs and wealth managers to integrate crypto into client portfolios.",
    pros: ["Institutional-grade crypto index funds", "Works with existing financial advisors", "Diversified exposure via index approach", "Deep research and market analysis team", "Regulatory compliance expertise"],
    cons: ["Higher management fees than direct buying", "Limited to fund-based crypto exposure", "Minimum investment requirements", "Not direct advisory for individuals"],
    fees: "Fund management fees vary; typically 0.85-2.5%",
    bestFor: "Institutional and advisor-mediated crypto allocation",
    affiliateUrl: "https://degen0x.com/go/bitwise",
    category: "long-term",
    featured: true,
  },
  {
    name: "Onramp Invest",
    slug: "onramp-invest",
    rating: 4.5,
    description:
      "Onramp Invest (now part of Tyrone) provides a platform that enables traditional financial advisors to offer cryptocurrency exposure to their clients. The platform integrates with existing portfolio management tools and custodial solutions, making it easy for RIAs to add crypto allocation to client accounts alongside traditional assets. It bridges the gap between traditional wealth management and crypto.",
    pros: ["Integrates with existing advisor platforms", "Multi-custodian support", "Compliance-first approach", "Tax-loss harvesting tools", "Unified portfolio reporting"],
    cons: ["Access through advisors only, not direct", "Limited to supported custodians", "Crypto selection depends on custodian", "Requires advisor relationship"],
    fees: "Platform fee varies; charged to advisor",
    bestFor: "Working with traditional advisors adding crypto",
    affiliateUrl: "https://degen0x.com/go/onramp-invest",
    category: "long-term",
  },
  {
    name: "Eaglebrook Advisors",
    slug: "eaglebrook",
    rating: 4.4,
    description:
      "Eaglebrook Advisors provides separately managed accounts (SMAs) for crypto, designed specifically for financial advisors and their high-net-worth clients. Their platform offers model portfolios, custom allocation strategies, and institutional-grade custody through Gemini. The SMA structure provides direct ownership of crypto assets while maintaining the advisor-client relationship.",
    pros: ["Separately managed accounts for direct ownership", "Custom model portfolios", "Gemini institutional custody", "Tax-lot accounting and reporting", "Designed for high-net-worth clients"],
    cons: ["Only accessible through financial advisors", "Higher minimums for SMA accounts", "Limited to advisor-approved models", "Management fees on top of advisor fees"],
    fees: "SMA management fee + advisor fee",
    bestFor: "High-net-worth clients seeking advisor-managed crypto",
    affiliateUrl: "https://degen0x.com/go/eaglebrook",
    category: "long-term",
  },
  {
    name: "Wealthfront Crypto",
    slug: "wealthfront",
    rating: 4.3,
    description:
      "Wealthfront offers crypto exposure through its automated investment platform, integrating Bitcoin, Ethereum, and select cryptocurrencies into diversified portfolios alongside traditional assets. As a robo-advisor, Wealthfront handles portfolio construction, rebalancing, and tax-loss harvesting automatically. The low minimums and automated approach make it accessible to investors at any level.",
    pros: ["Automated portfolio management", "Integrated with traditional asset allocation", "Tax-loss harvesting included", "Low $500 minimum investment", "No additional crypto fees beyond advisory fee"],
    cons: ["Limited crypto asset selection", "No self-custody option", "Cannot customize crypto picks", "Crypto allocation capped as portfolio percentage"],
    fees: "0.25% annual advisory fee",
    bestFor: "Automated crypto allocation within diversified portfolios",
    affiliateUrl: "https://degen0x.com/go/wealthfront",
    category: "long-term",
  },
  {
    name: "DAiM (Digital Asset Investment Management)",
    slug: "daim",
    rating: 4.3,
    description:
      "DAiM is an SEC-registered investment advisor focused exclusively on cryptocurrency. As one of the first RIAs dedicated to crypto, they provide personalized portfolio management, tax planning, and retirement integration for digital asset investors. Their crypto-native expertise combined with traditional fiduciary standards makes them a strong choice for investors wanting hands-on professional management of significant crypto positions.",
    pros: ["SEC-registered crypto-native RIA", "Fiduciary duty to clients", "Personalized crypto portfolio management", "Tax planning and optimization expertise", "Retirement account integration"],
    cons: ["Higher minimum investment", "Management fees on assets", "Limited to advisory clients", "Smaller firm than traditional advisors"],
    fees: "1-2% annual management fee based on AUM",
    bestFor: "Dedicated professional crypto portfolio management",
    affiliateUrl: "https://degen0x.com/go/daim",
    category: "long-term",
  },
];

const faqs: FAQ[] = [
  {
    question: "Do I need a financial advisor for crypto investing?",
    answer: "A financial advisor is not required but can be highly valuable for larger portfolios, complex tax situations, retirement planning integration, and estate planning. Advisors specializing in crypto can help optimize tax efficiency, manage risk through proper allocation, and ensure your crypto holdings are integrated with your broader financial plan. Consider an advisor if your crypto portfolio exceeds $100,000 or represents a significant portion of your net worth.",
  },
  {
    question: "What should I look for in a crypto financial advisor?",
    answer: "Look for advisors who are SEC-registered or state-registered RIAs with fiduciary duty (they must act in your best interest). Verify they have specific crypto expertise, not just traditional finance knowledge with crypto added on. Check their fee structure (fee-only advisors avoid conflicts of interest), their custody solutions, and whether they understand crypto-specific tax implications like DeFi transactions, airdrops, and staking income.",
  },
  {
    question: "How much do crypto financial advisors charge?",
    answer: "Crypto financial advisors typically charge 0.5-2% of assets under management (AUM) annually, similar to traditional wealth managers. Some offer flat-fee or hourly consultation models. Robo-advisors like Wealthfront charge lower fees (0.25%) but offer less personalized service. When comparing costs, consider the total expense including platform fees, trading costs, and custody charges in addition to the advisory fee.",
  },
  {
    question: "Can my existing financial advisor help with crypto?",
    answer: "Many traditional financial advisors are adding crypto capabilities through platforms like Onramp Invest and Eaglebrook that integrate crypto into their existing workflows. Ask your current advisor if they support crypto allocation. If they do not, you may work with a crypto-specialized advisor alongside your existing one, or consider switching to an advisor who covers both traditional and digital assets.",
  },
];

export default function AdvisorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Long-Term", href: "/long-term" }, { label: "Best", href: "/long-term/best" }, { label: "Advisors", href: "/long-term/best/advisors" }]} />
      <AffiliateDisclosure />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Crypto Financial Advisors ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          As cryptocurrency becomes a mainstream asset class, professional financial advice for digital assets
          has become increasingly important. Whether you need help with portfolio allocation, tax optimization,
          retirement integration, or estate planning for crypto holdings, the right advisor can significantly
          improve your outcomes. We evaluated crypto advisory services across expertise, fee structure,
          regulatory status, and client experience.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          Our top recommendation for most investors is <strong className="text-[var(--color-text)]">Bitwise Asset Management</strong> for
          its institutional-grade index funds and advisor integration. For hands-on personal management,
          <strong className="text-[var(--color-text)]"> DAiM</strong> offers dedicated crypto-native advisory with fiduciary
          duty. And for those wanting automated, low-cost exposure, <strong className="text-[var(--color-text)]">Wealthfront</strong> integrates
          crypto seamlessly into diversified portfolios.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="long-term" />
        ))}
      </div>

      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Types of Crypto Advisory Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[var(--color-text-secondary)]">
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Crypto-Native RIAs</h3>
            <p className="text-sm">SEC-registered advisors focused exclusively on digital assets. Offer personalized portfolio management, tax planning, and deep crypto market expertise. Best for significant crypto portfolios requiring hands-on management.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Advisor Platforms</h3>
            <p className="text-sm">Technology platforms that enable traditional financial advisors to add crypto to client portfolios. Provide custody, compliance, and reporting infrastructure. Best for investors who want their existing advisor to manage crypto alongside traditional assets.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Robo-Advisors</h3>
            <p className="text-sm">Automated platforms that include crypto in diversified model portfolios with algorithmic rebalancing and tax-loss harvesting. Lowest cost option with minimal human interaction. Best for hands-off investors who want crypto exposure within a broader portfolio.</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
