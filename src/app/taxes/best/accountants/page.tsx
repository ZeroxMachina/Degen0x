import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto CPAs & Tax Accountants (2026) | degen0x`,
  description: `Find the best crypto-specialized CPAs and tax accountants for ${CURRENT_YEAR}. Expert accountants who understand DeFi, NFTs, staking, and complex crypto tax situations.`,
  alternates: { canonical: "/taxes/best/accountants" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const cpas = [
  {
    name: "TokenTax CPA Services",
    specialty: "Full-service crypto tax filing",
    description: "TokenTax combines tax software with access to CPAs who specialize in cryptocurrency. They handle everything from simple trades to complex DeFi positions,",
    services: ["Tax return preparation", "DeFi tax analysis", "Audit defense", "Tax planning consultation"],
    priceRange: "$500 - $5,000+",
    bestFor: "Active traders needing full-service filing",
    url: "https://degen0x.com/go/tokentax",
  },
  {
    name: "Gordon Law Group",
    specialty: "Crypto tax law and compliance",
    description: "A full-service tax law firm with deep expertise in cryptocurrency taxation, offering tax return preparation, IRS audit representation, and strategic tax planning for crypto investors and businesses.",
    services: ["Tax law consultation", "IRS audit representation", "Tax return preparation", "Entity structuring"],
    priceRange: "$1,000 - $10,000+",
    bestFor: "High-net-worth investors and businesses",
    url: "https://degen0x.com/go/gordon-law",
  },
  {
    name: "Crypto Tax Girl (Laura Shin)",
    specialty: "Individual crypto tax preparation",
    description: "A well-known crypto-focused CPA practice specializing in individual tax returns for cryptocurrency investors. Known for accessible pricing and deep understanding of DeFi and staking taxation.",
    services: ["Individual tax returns", "DeFi tax consulting", "Staking income reporting", "Tax planning"],
    priceRange: "$300 - $3,000",
    bestFor: "Individual investors seeking affordable CPA help",
    url: "https://degen0x.com/go/crypto-tax-girl",
  },
  {
    name: "Coinledger CPA Network",
    specialty: "CPA referral network",
    description: "Coinledger maintains a vetted network of crypto-savvy CPAs across the United States. They match you with a qualified accountant based on your location, portfolio complexity, and budget.",
    services: ["CPA matching service", "Tax return preparation", "Planning consultation", "State-specific guidance"],
    priceRange: "Varies by CPA",
    bestFor: "Finding a local crypto-savvy CPA",
    url: "https://degen0x.com/go/coinledger",
  },
];

const faqs = [
  {
    question: "When should I hire a crypto CPA?",
    answer: "Consider hiring a crypto CPA if you have complex DeFi activity, multiple income sources from crypto (mining, staking, airdrops), transactions across many chains, or if you are facing an IRS audit. Also hire a CPA if your total crypto portfolio value exceeds $100,000 or you have more than 1,000 transactions per year.",
  },
  {
    question: "How much does a crypto CPA cost?",
    answer: "Crypto CPA fees typically range from $300 for simple individual returns to $5,000+ for complex portfolios with DeFi, multiple entities, or audit defense. Most individual crypto tax returns fall in the $500 to $2,000 range depending on complexity.",
  },
  {
    question: "What should I look for in a crypto tax accountant?",
    answer: "Look for a CPA or EA (Enrolled Agent) with specific cryptocurrency experience, familiarity with DeFi protocols, understanding of IRS crypto guidance, and experience with crypto tax software like Koinly or CoinTracker. Ask about their experience with your specific situation (DeFi, NFTs, mining, etc.).",
  },
  {
    question: "Can I use tax software and a CPA together?",
    answer: "Yes, and this is often the best approach. Use crypto tax software to import and categorize your transactions, then have a CPA review the output and file your return. This reduces CPA costs while ensuring professional oversight.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/taxes/best' },
    { '@type': 'ListItem', position: 4, name: 'Accountants', },
  ],
};

export default function BestAccountantsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Taxes", href: "/taxes" },
          { label: "Best Solutions", href: "/taxes/best" },
          { label: "Crypto CPAs", href: "/taxes/best/accountants" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto CPAs & Tax Accountants ({CURRENT_YEAR})
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          When crypto tax software is not enough, you need a professional. We have vetted the top
          CPAs and accountants who specialize in cryptocurrency taxation and understand the
          complexities of DeFi, NFTs, staking, and cross-chain transactions.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </div>

      <AffiliateDisclosure />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Crypto Tax Professionals</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d14', border: '1px solid #4c1d2a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📋</span>
            <strong style={{ color: '#fb7185', fontSize: 15 }}>Tax Reality Check</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Crypto tax compliance is a mess, but ignoring it is worse. We focus on practical approaches that balance accuracy with the reality that most exchanges have incomplete records.
          </p>
        </div>
        <div className="grid gap-6">
          {cpas.map((cpa, index) => (
            <div key={cpa.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">{cpa.name}</h3>
                    <p className="text-sm text-[var(--color-primary)]">{cpa.specialty}</p>
                  </div>
                </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="taxes"
        />

                <a
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="affiliate-cta px-4 py-2 rounded-lg text-white text-sm font-medium whitespace-nowrap"
                >
                  Learn More
                </a>
              </div>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{cpa.description}</p>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-[var(--color-text)] mb-1">Services</h4>
                  <ul className="space-y-1">
                    {cpa.services.map((s) => (
                      <li key={s} className="text-xs text-[var(--color-text-secondary)]">&#8226; {s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[var(--color-text)] mb-1">Price Range</h4>
                  <p className="text-xs text-[var(--color-text-secondary)]">{cpa.priceRange}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[var(--color-text)] mb-1">Best For</h4>
                  <p className="text-xs text-[var(--color-text-secondary)]">{cpa.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Software + CPA: The Best Approach</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            For most crypto investors, the optimal approach combines tax software with professional
            CPA review. Use software like Koinly or CryptoTaxCalculator to import and categorize
            your transactions, then have a crypto-savvy CPA review the output and file your return.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/taxes/best/software"
              className="text-sm text-[var(--color-primary)] hover:underline"
            >
              Compare Tax Software &#8594;
            </Link>
            <Link href={cpa.url}
            >
              How to File Crypto Taxes &#8594;
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Taxes/best/accountants", "description": "TokenTax combines tax software with access to CPAs who specialize in cryptocurrency. They handle everything from simple trades to complex DeFi positions,", "url": "https://degen0x.com/taxes/best/accountants", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/taxes/best/defi-tax-tools" style={{ color: "#fb923c", marginRight: "1rem" }}>Defi Tax Tools</a>
        </nav>
    </main>
  );
}
