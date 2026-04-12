import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Corporate Cards of ${CURRENT_YEAR} - Spend Stablecoins & Crypto | ${SITE_NAME}`,
  description: `Compare the best crypto corporate cards of ${CURRENT_YEAR}. Spend directly from stablecoin and crypto balances, set team spending limits, and streamline expense management for Web3 teams.`,
  alternates: { canonical: "/web3-business/best/corporate-cards" }};

const products: Product[] = [
  {
    name: "Rain",
    slug: "rain",
    rating: 4.7,
    description: "Corporate card platform designed specifically for Web3 companies. Spend directly from USDC and stablecoin balances, set granular team spending controls, and",
    pros: ["Purpose-built for crypto-native companies", "Direct stablecoin spending", "Multi-sig wallet integration", "Granular team spending controls"],
    cons: ["Limited to US-based entities currently", "Requires minimum balance for onboarding", "Rewards program less generous than competitors", "Newer company with shorter track record"],
    fees: "No annual fee; 2.5% FX fee",
    bestFor: "Crypto-native companies spending from stablecoin treasuries",
    affiliateUrl: "#",
    category: "corporate-cards",
    featured: true,
  },
  {
    name: "Brex",
    slug: "brex-card",
    rating: 4.6,
    description: "Full-featured corporate card and spend management platform used by many prominent crypto startups. Offers high credit limits, robust expense management, and rewards tailored to startup spending patterns. Strong crypto industry track record.",
    pros: ["High credit limits for funded startups", "Comprehensive expense management", "Strong rewards on common startup categories", "Proven with major crypto companies"],
    cons: ["Requires $100K+ connected funding", "Not designed for direct crypto spending", "Premium tier pricing for full features", "Can be complex for small teams"],
    fees: "Essentials free; Premium $12/user/mo",
    bestFor: "VC-funded Web3 startups",
    affiliateUrl: "#",
    category: "corporate-cards",
  },
  {
    name: "Ramp",
    slug: "ramp",
    rating: 4.5,
    description: "Corporate card and finance automation platform that helps companies control spending and save time on expense management. Offers physical and virtual cards with real-time controls, automated receipt matching, and bill pay.",
    pros: ["Excellent expense automation features", "Real-time spending controls and alerts", "Strong accounting software integrations", "Free for qualifying companies"],
    cons: ["Not specifically crypto-focused", "No direct stablecoin spending", "Qualification requirements for approval", "Limited crypto-native features"],
    fees: "Free for qualifying companies",
    bestFor: "Web3 companies wanting best-in-class expense automation",
    affiliateUrl: "#",
    category: "corporate-cards",
  },
  {
    name: "Bitpay Card",
    slug: "bitpay-card",
    rating: 4.2,
    description: "Prepaid card that lets businesses spend their crypto holdings anywhere Mastercard is accepted. Load the card with Bitcoin, Ethereum, or other supported cryptocurrencies and spend at the current exchange rate with no conversion fees.",
    pros: ["Wide cryptocurrency support for loading", "No conversion fees at point of sale", "Mastercard acceptance worldwide", "Instant card loading from crypto wallet"],
    cons: ["Prepaid card, not true corporate card", "Limited expense management features", "No team spending controls", "Less suited for large team deployments"],
    fees: "No monthly fee; $5 ATM withdrawal",
    bestFor: "Small teams spending crypto directly",
    affiliateUrl: "#",
    category: "corporate-cards",
  },
  {
    name: "Baanx",
    slug: "baanx",
    rating: 4.1,
    description: "White-label and direct-to-consumer crypto card platform offering Visa corporate cards that can be funded with stablecoins and crypto. Provides multi-currency support and real-time conversion at competitive rates.",
    pros: ["Multi-currency crypto and fiat support", "Visa acceptance globally", "Real-time crypto-to-fiat conversion", "Available in multiple regions"],
    cons: ["Newer platform with evolving features", "Limited corporate expense management tools", "Smaller company compared to Brex or Ramp", "Customer support still scaling"],
    fees: "Monthly fee varies by plan",
    bestFor: "International Web3 teams needing multi-currency cards",
    affiliateUrl: "#",
    category: "corporate-cards",
  },
];

const faqs: FAQ[] = [
  {
    question: "How do crypto corporate cards work?",
    answer: "Crypto corporate cards allow businesses to spend from cryptocurrency or stablecoin balances at regular merchants. When you make a purchase, the card provider converts your crypto to fiat currency in real time at the point of sale. Some cards (like Rain) let you fund directly from USDC, while others (like Brex) operate as traditional corporate cards that are crypto-company friendly.",
  },
  {
    question: "Can a DAO use corporate cards?",
    answer: "Yes, but the DAO typically needs a legal entity to apply. Cards like Rain integrate with multi-sig wallets, allowing DAO treasuries to fund corporate cards with proper approval workflows. Team members receive individual cards with spending limits set by the multi-sig signers or designated administrators.",
  },
  {
    question: "Are there tax implications when spending crypto via a corporate card?",
    answer: "Yes. When you convert cryptocurrency to fiat for spending, it may trigger a taxable event based on the difference between your cost basis and the value at the time of conversion. Using stablecoins like USDC reduces this issue since the value remains relatively constant. Consult a crypto-focused CPA for your specific situation.",
  },
  {
    question: "What spending controls are available?",
    answer: "Modern crypto corporate cards offer granular controls including per-card spending limits, merchant category restrictions, single-transaction maximums, monthly budgets per team member, and approval workflows for large purchases. Some platforms also offer virtual cards for specific vendors or subscriptions, making it easy to revoke access when needed.",
  },
];

export default function CorporateCardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="web3-business"
      />      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Web3 Business", href: "/web3-business" },
          { label: "Best Tools", href: "/web3-business/best" },
          { label: "Corporate Cards", href: "/web3-business/best/corporate-cards" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Corporate Cards ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Web3 teams need corporate cards that bridge the gap between on-chain treasuries and real-world
          spending. Whether you are paying for SaaS subscriptions, travel, or office supplies, the right
          corporate card lets you spend from crypto and stablecoin balances while maintaining proper
          expense tracking and team controls.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">Rain</strong> leads our rankings as the most crypto-native
          corporate card solution, with direct stablecoin spending and multi-sig integration.{" "}
          <strong className="text-[var(--color-text)]">Brex</strong> is ideal for funded startups wanting a full
          financial stack, while <strong className="text-[var(--color-text)]">Ramp</strong> offers the best expense
          automation features for teams prioritizing operational efficiency.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Choosing the Right Card for Your Team</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The best corporate card depends on your team structure, funding source, and operational needs:
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
            { title: "Crypto-Native Teams", desc: "If your treasury is primarily in stablecoins, Rain offers the most seamless experience with direct USDC funding and multi-sig integration." },
            { title: "VC-Funded Startups", desc: "Brex provides the highest credit limits and most comprehensive financial platform for companies with significant funding." },
            { title: "Cost-Conscious Teams", desc: "Ramp offers free corporate cards with excellent expense automation, ideal for teams wanting to minimize overhead." },
            { title: "International Teams", desc: "Baanx provides multi-currency support across regions, useful for globally distributed Web3 teams." },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
              <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto-Native Teams", "description": "Corporate card platform designed specifically for Web3 companies. Spend directly from USDC and stablecoin balances, set granular team spending controls, and", "url": "https://degen0x.com/web3-business/best/corporate-cards"}) }} />
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
    </div>
  );
}
