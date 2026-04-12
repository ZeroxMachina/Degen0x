import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Web3 Business Tools & Guides (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Everything you need to build and manage a Web3 business in ${CURRENT_YEAR}. Compare DAO tools, crypto banking, payroll solutions, grants, and more. Expert guides on formation, compliance, and treasury management.`,
};

const bestOfLinks = [
  { title: "Best DAO Treasury Tools", href: "/web3-business/best/treasury-tools", description: "Manage multi-sig wallets and on-chain treasuries" },
  { title: "Best Web3 Grants", href: "/web3-business/best/grants", description: "Funding programs from top protocols and ecosystems" },
  { title: "Crypto-Friendly Banks", href: "/web3-business/best/business-banking", description: "Business banking that actually works with crypto" },
  { title: "Crypto Corporate Cards", href: "/web3-business/best/corporate-cards", description: "Spend crypto and stablecoins with corporate cards" },
  { title: "Crypto Accounting Software", href: "/web3-business/best/accounting", description: "Track on-chain transactions and stay audit-ready" },
  { title: "Crypto Payroll Platforms", href: "/web3-business/best/payroll", description: "Pay your team in crypto or stablecoins globally" },
  { title: "Payment Processors", href: "/web3-business/best/payment-processing", description: "Accept crypto payments for your business" },
  { title: "DAO Governance Tools", href: "/web3-business/best/dao-tools", description: "Voting, proposals, and decentralized decision-making" },
  { title: "Token Launchpads", href: "/web3-business/best/launchpads", description: "Launch your token with trusted infrastructure" },
  { title: "Web3 Law Firms", href: "/web3-business/best/legal", description: "Legal counsel specializing in crypto and DAOs" },
];

const learnLinks = [
  { title: "How to Start a Web3 Business", href: "/web3-business/learn/how-to-start-web3-business", description: "Step-by-step guide from idea to launch" },
  { title: "DAO Formation Guide", href: "/web3-business/learn/dao-formation", description: "Legal structures, tooling, and governance setup" },
  { title: "Tokenomics Design", href: "/web3-business/learn/tokenomics-design", description: "Design sustainable token economies" },
  { title: "Web3 Fundraising", href: "/web3-business/learn/fundraising", description: "Raise capital through token sales, VCs, and grants" },
  { title: "Business Crypto Taxes", href: "/web3-business/learn/business-taxes", description: "Navigate crypto tax obligations for your entity" },
  { title: "Treasury Management", href: "/web3-business/learn/treasury-management", description: "Protect and grow your on-chain treasury" },
  { title: "Accepting Crypto Payments", href: "/web3-business/learn/accepting-crypto-payments", description: "Set up crypto payment infrastructure" },
  { title: "Crypto Payroll Guide", href: "/web3-business/learn/crypto-payroll", description: "Pay employees and contributors in crypto" },
  { title: "Regulatory Compliance", href: "/web3-business/learn/regulatory-compliance", description: "Stay compliant across jurisdictions" },
];

const faqs = [
  {
    question: "What is a Web3 business?",
    answer: "A Web3 business is any company, protocol, or decentralized organization that uses blockchain technology as a core part of its operations, product, or business model. This includes DAOs, DeFi protocols, NFT platforms, crypto infrastructure providers, and traditional businesses that integrate crypto payments, tokenized incentives, or on-chain governance.",
  },
  {
    question: "Do I need a DAO to run a Web3 business?",
    answer: "No. While DAOs are one popular organizational structure in Web3, many successful crypto businesses operate as traditional LLCs, C-corps, or foundation structures. The right structure depends on your goals: DAOs suit community-governed protocols, while traditional entities work better for venture-backed startups or service companies. Some projects use hybrid models with a legal entity wrapping a DAO.",
  },
  {
    question: "What legal structure is best for a Web3 startup?",
    answer: "The most common structures are Wyoming LLCs (for US-based projects and DAOs), Cayman Islands foundations (for token projects seeking offshore flexibility), Swiss associations (for decentralized protocols), and Delaware C-corps (for VC-funded startups). Many projects use a combination, such as a Delaware C-corp for the development company and a Cayman foundation for the token. Consult a Web3-specialized attorney for your specific situation.",
  },
  {
    question: "How do Web3 businesses handle taxes?",
    answer: "Web3 businesses face unique tax challenges including token-based compensation, treasury management, DeFi protocol revenue, and cross-border contributor payments. You need to track all on-chain transactions, properly classify token distributions, handle payroll taxes for crypto compensation, and file in every relevant jurisdiction. Specialized crypto accounting software and a Web3-focused CPA are essential.",
  },
  {
    question: "How much does it cost to start a Web3 business?",
    answer: "Costs vary dramatically depending on the type of project. A simple token launch might cost $10,000 to $50,000 in legal and smart contract audit fees. A full DeFi protocol can cost $100,000 or more for development, audits, and legal structuring. DAO formation can be done for under $5,000 using existing tooling. Marketing, hiring, and ongoing compliance add to these baseline costs.",
  },
];

export default function Web3BusinessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Web3 Business Tools & Guides (${CURRENT_YEAR})`,
    description: `Everything you need to build and manage a Web3 business in ${CURRENT_YEAR}.`,
    url: "https://degen0x.com/web3-business",
    isPartOf: { "@type": "WebSite", name: SITE_NAME },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Web3 Business", href: "/web3-business" },
          ]}
        />

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Web3 Business Hub
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Your complete resource for building and managing a Web3 business. Compare
            DAO tools, crypto-friendly banking, payroll solutions, and compliance
            platforms. Plus in-depth guides on formation, fundraising, treasury management,
            and regulatory compliance. Last updated {CURRENT_MONTH} {CURRENT_YEAR}.
          </p>
        </div>

        {/* Best-Of Categories */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">Find the Best Web3 Business Tools</h2>
            <Link
              href="/web3-business/best"
              className="text-[var(--color-primary)] hover:underline text-sm font-medium"
            >
              View all rankings &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestOfLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block"
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Learn Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Learn: Build Your Web3 Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learnLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Evaluate Web3 Business Tools</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Our Web3 business reviews are based on hands-on testing and real-world usage. We evaluate
            each platform across multiple dimensions including functionality, pricing, security,
            blockchain compatibility, ease of integration, and customer support. We focus on tools
            that serve real operational needs rather than hype-driven products.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            Our editorial team includes contributors who have built and operated DAOs, launched
            tokens, managed on-chain treasuries, and navigated crypto compliance across multiple
            jurisdictions. We prioritize practical, experience-based advice over theoretical
            coverage. When you click an affiliate link, we may earn a commission at no extra cost
            to you, which helps us maintain free, up-to-date content.
          </p>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
