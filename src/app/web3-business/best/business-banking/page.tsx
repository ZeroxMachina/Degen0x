import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto-Friendly Business Banks of ${CURRENT_YEAR} | ${SITE_NAME}`,
  description: `Compare the best crypto-friendly business banks of ${CURRENT_YEAR}. Banking partners that welcome Web3 companies with fiat on/off ramps, stablecoin support, and no surprise account closures.`,
};

const products: Product[] = [
  {
    name: "Mercury",
    slug: "mercury",
    rating: 4.8,
    description: "The leading banking platform for startups and tech companies, with a strong track record of serving crypto and Web3 businesses. Offers FDIC-insured accounts, treasury management, corporate cards, and seamless integrations with accounting software.",
    pros: ["Proven crypto-friendly banking partner", "Excellent API and integrations", "Up to $5M FDIC insurance through partner banks", "Modern dashboard with team management"],
    cons: ["US-based entities only", "No direct crypto custody or conversion", "Limited international wire options", "Waitlist for new applicants possible"],
    fees: "Free checking; wires $5 domestic",
    bestFor: "US-based Web3 startups and DAOs with legal entities",
    affiliateUrl: "#",
    category: "business-banking",
    featured: true,
  },
  {
    name: "Relay",
    slug: "relay",
    rating: 4.6,
    description: "No-fee business banking with multiple checking accounts, automated expense management, and profit-first banking features. Crypto-friendly policies and straightforward onboarding for Web3 companies.",
    pros: ["Completely free business banking", "Up to 20 separate checking accounts", "Automated profit allocation features", "Simple, fast onboarding process"],
    cons: ["US-only availability", "No built-in crypto conversion", "Fewer integrations than Mercury", "Limited treasury management features"],
    fees: "Free; no monthly fees or minimums",
    bestFor: "Early-stage Web3 companies watching costs",
    affiliateUrl: "#",
    category: "business-banking",
  },
  {
    name: "Brex",
    slug: "brex",
    rating: 4.5,
    description: "All-in-one financial platform combining business accounts, corporate cards, expense management, and bill pay. Known for serving high-growth startups including many prominent crypto companies. Offers integrated spend management and treasury services.",
    pros: ["Integrated banking, cards, and expense management", "Strong crypto industry presence", "Bill pay and vendor management built in", "Global wire transfer capabilities"],
    cons: ["Requires $100K+ in connected funding for Essentials", "Premium pricing for full feature set", "Complex onboarding for smaller teams", "Account approval can be selective"],
    fees: "Essentials free; Premium $12/user/mo",
    bestFor: "Funded Web3 startups needing full financial stack",
    affiliateUrl: "#",
    category: "business-banking",
  },
  {
    name: "Seba Bank",
    slug: "seba-bank",
    rating: 4.3,
    description: "Swiss-regulated bank offering both traditional banking and crypto services. Provides institutional-grade crypto custody, trading, and DeFi access alongside standard business banking. Fully licensed by FINMA.",
    pros: ["Swiss banking regulation and stability", "Integrated crypto custody and trading", "DeFi access through regulated infrastructure", "Multi-currency fiat accounts"],
    cons: ["High minimum balance requirements", "Premium pricing structure", "Limited to institutional and high-net-worth clients", "Onboarding process can be lengthy"],
    fees: "Custom pricing; contact for quotes",
    bestFor: "Institutional crypto businesses and funds",
    affiliateUrl: "#",
    category: "business-banking",
  },
  {
    name: "Multis",
    slug: "multis",
    rating: 4.2,
    description: "Business banking built specifically for crypto-native companies. Combines fiat banking with on-chain treasury management, allowing teams to manage both traditional and crypto finances from a single interface.",
    pros: ["Built for crypto-native workflows", "Combined fiat and crypto management", "Multi-sig treasury integration", "European banking infrastructure"],
    cons: ["Smaller and newer than traditional banking options", "Limited geographic availability", "Feature set still expanding", "Less brand recognition"],
    fees: "Plans from $99/mo",
    bestFor: "European crypto-native companies",
    affiliateUrl: "#",
    category: "business-banking",
  },
];

const faqs: FAQ[] = [
  {
    question: "Why do crypto businesses struggle with banking?",
    answer: "Many traditional banks view cryptocurrency businesses as high-risk due to regulatory uncertainty, anti-money laundering concerns, and the volatile nature of crypto markets. This has led to widespread account closures and refusals to service crypto companies, a phenomenon known as debanking. Crypto-friendly banks specifically accept and understand the operational needs of Web3 businesses.",
  },
  {
    question: "What should I look for in a crypto-friendly bank?",
    answer: "Key factors include a stated policy of welcoming crypto businesses, experience with on/off ramp transactions, the ability to handle large and frequent wire transfers, multi-currency support if you operate globally, and integration with your accounting and treasury tools. Most importantly, look for banks that have a track record of maintaining crypto company accounts without surprise closures.",
  },
  {
    question: "Can a DAO open a business bank account?",
    answer: "A DAO itself typically cannot open a bank account since banks require a legal entity. However, a DAO that has formed a legal wrapper such as a Wyoming DAO LLC, a Cayman foundation, or a Marshall Islands DAO LLC can open business accounts at crypto-friendly banks. The legal entity acts as the interface between the DAO and the traditional banking system.",
  },
  {
    question: "How do stablecoin on/off ramps work for businesses?",
    answer: "Stablecoin on/off ramps allow businesses to convert between fiat currency in bank accounts and stablecoins like USDC or USDT on-chain. Some banks integrate this natively, while others work with third-party providers like Circle or Bridge. The process typically involves sending a wire transfer to the ramp provider and receiving stablecoins at your wallet address, or vice versa.",
  },
];

export default function BusinessBankingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Web3 Business", href: "/web3-business" },
          { label: "Best Tools", href: "/web3-business/best" },
          { label: "Business Banking", href: "/web3-business/best/business-banking" },
        ]}
      />

      <h1 className="text-4xl font-bold text-white mb-4">
        Best Crypto-Friendly Business Banks ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Finding a bank that will not shut down your account for being a crypto company remains one
          of the biggest operational challenges in Web3. After testing dozens of banking platforms and
          speaking with operators across the industry, we have identified the banks that genuinely
          welcome Web3 businesses and provide the services you actually need.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-white">Mercury</strong> leads our rankings for US-based Web3
          startups with its modern platform, startup-friendly features, and demonstrated willingness
          to bank crypto companies. For teams needing an integrated financial stack with cards and
          expense management, <strong className="text-white">Brex</strong> offers the most comprehensive
          solution. European teams should consider <strong className="text-white">Multis</strong> for
          its crypto-native approach to business banking.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Our Rankings</h2>
        <div className="space-y-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              rank={index + 1}
              categorySlug="web3-business"
            />
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Banking Checklist for Web3 Companies</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Before applying for a business bank account, prepare the following to improve your chances
          of approval and speed up the onboarding process:
        </p>
        <ul className="space-y-2 text-[var(--color-text-secondary)]">
          <li className="flex items-start gap-2"><span className="text-[var(--color-primary)]">&#10003;</span> Legal entity formation documents (Articles of Organization, Certificate of Formation)</li>
          <li className="flex items-start gap-2"><span className="text-[var(--color-primary)]">&#10003;</span> EIN or equivalent tax identification number</li>
          <li className="flex items-start gap-2"><span className="text-[var(--color-primary)]">&#10003;</span> Clear description of your business model and revenue sources</li>
          <li className="flex items-start gap-2"><span className="text-[var(--color-primary)]">&#10003;</span> AML/KYC compliance policies for your own operations</li>
          <li className="flex items-start gap-2"><span className="text-[var(--color-primary)]">&#10003;</span> Expected monthly transaction volumes and sources of funds</li>
          <li className="flex items-start gap-2"><span className="text-[var(--color-primary)]">&#10003;</span> Identity documents for all authorized signers</li>
        </ul>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
