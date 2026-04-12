import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Web3 Business Tools of ${CURRENT_YEAR} - Complete Rankings | ${SITE_NAME}`,
  description: `Compare the best Web3 business tools of ${CURRENT_YEAR}. DAO treasury platforms, crypto banking, payroll, accounting, governance tools, grants programs, and more ranked by our expert team.`,
};

const categories = [
  {
    title: "Best DAO Treasury Tools",
    href: "/web3-business/best/treasury-tools",
    description: "Multi-signature wallets, treasury dashboards, and on-chain fund management platforms for DAOs and crypto-native organizations. Control spending, track balances across chains, and manage contributor payments.",
    topPicks: ["Gnosis Safe (Safe)", "Parcel", "Utopia Labs"],
  },
  {
    title: "Best Web3 Grants Programs",
    href: "/web3-business/best/grants",
    description: "Non-dilutive funding from blockchain ecosystems, protocol foundations, and Web3-focused grant programs. Build on top of major protocols and get funded for open-source contributions.",
    topPicks: ["Ethereum Foundation Grants", "Gitcoin Grants", "Optimism RetroPGF"],
  },
  {
    title: "Best Crypto-Friendly Banks",
    href: "/web3-business/best/business-banking",
    description: "Business banking partners that welcome crypto companies. Fiat on/off ramps, stablecoin integration, wire transfers, and treasury services without the risk of account closure.",
    topPicks: ["Mercury", "Relay", "Brex"],
  },
  {
    title: "Best Crypto Corporate Cards",
    href: "/web3-business/best/corporate-cards",
    description: "Corporate expense cards that let you spend directly from crypto and stablecoin balances. Set team spending limits, earn rewards, and streamline expense reporting for Web3 teams.",
    topPicks: ["Rain", "Brex", "Ramp"],
  },
  {
    title: "Best Crypto Accounting Software",
    href: "/web3-business/best/accounting",
    description: "Track on-chain transactions, reconcile DeFi activity, generate tax reports, and stay audit-ready. Purpose-built for the complexity of multi-chain business operations.",
    topPicks: ["Bitwave", "Cryptio", "Tres Finance"],
  },
  {
    title: "Best Crypto Payroll Platforms",
    href: "/web3-business/best/payroll",
    description: "Pay employees, contractors, and DAO contributors in crypto or stablecoins. Handle tax withholding, global compliance, and multi-currency disbursements from a single platform.",
    topPicks: ["Deel", "Request Finance", "Franklin"],
  },
  {
    title: "Best Crypto Payment Processors",
    href: "/web3-business/best/payment-processing",
    description: "Accept cryptocurrency payments for your business. Integrations for e-commerce, invoicing, point-of-sale, and subscription billing with automatic fiat conversion options.",
    topPicks: ["BitPay", "Coinbase Commerce", "BTCPay Server"],
  },
  {
    title: "Best DAO Governance Tools",
    href: "/web3-business/best/dao-tools",
    description: "On-chain and off-chain voting, proposal management, delegation systems, and governance frameworks. Build transparent, community-driven decision-making processes.",
    topPicks: ["Snapshot", "Tally", "Aragon"],
  },
  {
    title: "Best Token Launchpads",
    href: "/web3-business/best/launchpads",
    description: "Launch your token with trusted infrastructure. Fair launch mechanics, liquidity bootstrapping, vesting schedules, and community allocation tools.",
    topPicks: ["Fjord Foundry", "DAOMaker", "Tokensoft"],
  },
  {
    title: "Best Web3 Law Firms",
    href: "/web3-business/best/legal",
    description: "Legal counsel specializing in cryptocurrency regulation, token launches, DAO structuring, SEC compliance, and cross-border Web3 operations.",
    topPicks: ["Anderson Kill", "Debevoise & Plimpton", "Fenwick & West"],
  },
];

const faqs = [
  {
    question: "What tools does a Web3 business need?",
    answer: "At minimum, most Web3 businesses need a multi-sig wallet for treasury management, crypto-friendly banking for fiat operations, accounting software that can track on-chain transactions, and legal counsel familiar with crypto regulations. Depending on your structure, you may also need governance tooling, payroll platforms, and payment processing infrastructure.",
  },
  {
    question: "How do we rank Web3 business tools?",
    answer: "We evaluate each tool across functionality, security, blockchain compatibility, pricing, ease of use, customer support, and real-world reliability. Our team tests each platform hands-on, consults with active Web3 operators, and regularly updates rankings as products evolve. We weight security and reliability most heavily since these tools handle real funds and sensitive operations.",
  },
  {
    question: "Are these tools suitable for traditional businesses entering Web3?",
    answer: "Yes. Many of the tools we recommend serve as bridges between traditional business operations and Web3. Crypto-friendly banks, accounting software with on-chain tracking, and payment processors with fiat conversion are specifically designed to help traditional businesses integrate crypto without overhauling their existing workflows.",
  },
  {
    question: "How much do Web3 business tools cost?",
    answer: "Costs range widely. Open-source tools like Gnosis Safe and BTCPay Server are free to use (you only pay gas fees). SaaS platforms like Bitwave and Deel charge monthly subscriptions typically ranging from $50 to $500 per month depending on usage. Enterprise-grade solutions with custom integrations can cost significantly more. Many tools offer free tiers for small teams.",
  },
];

export default function BestWeb3BusinessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Web3 Business Tools of ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: SITE_NAME },
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
            { label: "Best Tools", href: "/web3-business/best" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Web3 Business Tools of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Running a Web3 business requires specialized tooling that traditional SaaS products
            simply were not designed to handle. Multi-chain treasury management, on-chain accounting,
            global crypto payroll, and decentralized governance each demand purpose-built solutions.
            We have tested and categorized the top platforms across every critical business function
            to help you build your operational stack with confidence.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            Whether you are launching a DAO, building a DeFi protocol, or running a traditional
            company that integrates cryptocurrency, the tools below represent the best options
            available today. Each category page includes detailed rankings, feature comparisons,
            and our hands-on assessment of every platform.
          </p>
        </div>

        {/* Category Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">All Categories</h2>
          <div className="space-y-6">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 card-hover block"
              >
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{category.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.topPicks.map((pick) => (
                    <span
                      key={pick}
                      className="inline-flex items-center rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]"
                    >
                      {pick}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Evaluation Methodology</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            We assess each Web3 business tool across six core dimensions, weighted by importance
            for day-to-day business operations:
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0808', border: '1px solid #5c1818', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🏗️</span>
            <strong style={{ color: '#ef4444', fontSize: 15 }}>Builder Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We've been building in crypto since before 'Web3' was a term. These guides reflect hard-earned lessons from shipping products in this space.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Security & Reliability (30%)", desc: "Smart contract audits, uptime history, key management, insurance coverage, and incident response track record." },
              { title: "Functionality (25%)", desc: "Feature completeness, multi-chain support, integration capabilities, and how well the tool solves its core use case." },
              { title: "Ease of Use (15%)", desc: "Onboarding experience, interface design, documentation quality, and learning curve for non-technical team members." },
              { title: "Pricing (15%)", desc: "Transparent pricing, value relative to competitors, free tier availability, and total cost of ownership including gas fees." },
              { title: "Support & Community (10%)", desc: "Customer support quality, response times, community resources, and availability of implementation assistance." },
              { title: "Track Record (5%)", desc: "Team credibility, funding status, notable clients, years in operation, and ecosystem reputation." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
