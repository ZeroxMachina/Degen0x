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
  title: `Best Token Launchpads of ${CURRENT_YEAR} - IDO & Fair Launch Platforms | ${SITE_NAME}`,
  description: `Compare the best token launchpads and IDO platforms of ${CURRENT_YEAR}. Launch your token with trusted platforms ranked by security, community reach, and success rate.`,
  alternates: { canonical: "/web3-business/best/launchpads" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const products: Product[] = [
  {
    name: "Fjord Foundry",
    slug: "fjord-foundry",
    rating: 4.8,
    description: "A leading fair launch platform that specializes in Liquidity Bootstrapping Pools (LBPs). Projects set a starting price that decays over time, allowing the",
    pros: ["Fair price discovery through LBP mechanism", "Multi-chain support across major EVM networks", "No allocation lotteries or whitelist required", "Battle-tested with hundreds of launches"],
    cons: ["LBP mechanics can confuse first-time buyers", "Requires active monitoring during launch window", "Higher gas costs on Ethereum mainnet", "Limited to EVM-compatible chains"],
    fees: "2% platform fee on funds raised",
    bestFor: "Fair price discovery token launches",
    affiliateUrl: "#",
    category: "launchpads",
    featured: true,
  },
  {
    name: "DAO Maker",
    slug: "dao-maker",
    rating: 4.7,
    description: "A prominent IDO platform with a strong track record of launching successful projects. Uses a tiered system based on DAO token holdings to allocate participation rights. Known for rigorous project vetting and post-launch support.",
    pros: ["Rigorous project vetting process", "Strong historical ROI for participants", "Tiered allocation system rewards loyal holders", "Post-launch incubation support for projects"],
    cons: ["Requires significant DAO token staking for best tiers", "Limited allocation for lower-tier participants", "Past security incident in 2021", "Participation not guaranteed even with staking"],
    fees: "Varies by project",
    bestFor: "Vetted IDO participation with tiered access",
    affiliateUrl: "#",
    category: "launchpads",
  },
  {
    name: "Pinksale",
    slug: "pinksale",
    rating: 4.4,
    description: "A decentralized launchpad that allows anyone to create and launch a token with built-in tools for presales, fair launches, and liquidity locking. Supports multiple chains including BSC, Ethereum, Polygon, and Solana. Popular for its accessibility and low barrier to entry.",
    pros: ["Permissionless launch creation for any project", "Built-in liquidity lock and vesting tools", "Multi-chain support including Solana", "Low platform fees compared to curated launchpads"],
    cons: ["No project vetting means higher scam risk", "Quality varies dramatically between launches", "Buyer-beware environment", "Less institutional credibility"],
    fees: "Flat fee per launch + small raise %",
    bestFor: "Permissionless and community token launches",
    affiliateUrl: "#",
    category: "launchpads",
  },
  {
    name: "Seedify",
    slug: "seedify",
    rating: 4.3,
    description: "A blockchain gaming-focused launchpad and incubator that helps gaming and metaverse projects launch their tokens. Offers a staking-based tier system with guaranteed allocations for higher tiers. Expanding beyond gaming into broader Web3 infrastructure.",
    pros: ["Deep specialization in blockchain gaming", "Guaranteed allocation for higher staking tiers", "Strong incubation and advisory support", "Active community of gaming enthusiasts"],
    cons: ["Heavily gaming-focused may limit diversification", "Requires SFUND token staking", "Gaming sector volatility affects portfolio", "Smaller deal flow than generalist launchpads"],
    fees: "Varies by project",
    bestFor: "Blockchain gaming and metaverse launches",
    affiliateUrl: "#",
    category: "launchpads",
  },
  {
    name: "Pump.fun",
    slug: "pump-fun",
    rating: 4.1,
    description: "A Solana-native token launch platform that simplifies memecoin and community token creation with bonding curve mechanics. Tokens automatically graduate to Raydium DEX once a market cap threshold is reached. Extremely low barrier to entry for both creators and buyers.",
    pros: ["One-click token creation on Solana", "Bonding curve ensures initial liquidity", "Automatic DEX graduation at threshold", "Extremely low cost to launch"],
    cons: ["Dominated by low-quality memecoins", "Very high failure rate for launched tokens", "No project vetting or due diligence", "Speculative environment with rug pull risk"],
    fees: "~0.02 SOL creation fee",
    bestFor: "Low-cost Solana memecoin and community launches",
    affiliateUrl: "#",
    category: "launchpads",
  },
];

const faqs: FAQ[] = [
  {
    question: "What is a token launchpad?",
    answer: "A token launchpad is a platform that facilitates the initial sale and distribution of new cryptocurrency tokens. Launchpads provide the technical infrastructure for token sales, handle smart contract deployment, manage participant allocation, and often provide liquidity locking services. They range from curated platforms that vet projects before listing to permissionless platforms where anyone can launch.",
  },
  {
    question: "What is the difference between an IDO and a fair launch?",
    answer: "An IDO (Initial DEX Offering) typically involves a curated platform allocating tokens to participants at a fixed price before trading begins on a decentralized exchange. A fair launch uses mechanisms like Liquidity Bootstrapping Pools where the price starts high and decays, letting the market find fair value. Fair launches aim to prevent insiders from buying at artificially low prices.",
  },
  {
    question: "How do I evaluate a token launch for legitimacy?",
    answer: "Check whether the team is doxxed and has a verifiable track record. Review the smart contract audit status and tokenomics for red flags like excessive team allocations or short vesting periods. Verify that liquidity is locked post-launch. Research the project fundamentals, community engagement, and whether the launch platform itself vetted the project. Avoid launches with anonymous teams, no audits, and unrealistic promises.",
  },
  {
    question: "Do I need to stake tokens to participate in launchpad sales?",
    answer: "Most curated launchpads like DAO Maker and Seedify use a tiered staking system where participants must hold and stake the platform native token to access allocations. Higher tiers require more staked tokens but offer larger or guaranteed allocations. Permissionless platforms like Pinksale and Pump.fun generally do not require staking.",
  },
  {
    question: "What risks are involved with token launches?",
    answer: "Key risks include rug pulls where the team abandons the project after raising funds, smart contract vulnerabilities, token price collapse after initial hype, insufficient liquidity making it hard to sell, and regulatory risks if the token is deemed a security. Even on reputable launchpads, most launched tokens underperform over time. Never invest more than you can afford to lose.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Web3 Business', item: 'https://degen0x.com/web3-business' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/web3-business/best' },
    { '@type': 'ListItem', position: 4, name: 'Launchpads', },
  ],
};

export default function LaunchpadsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

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
          { label: "Token Launchpads", href: "/web3-business/best/launchpads" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Token Launchpads ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Token launchpads are the primary venue for new crypto projects to distribute their
          tokens and raise initial capital. Whether you are a project looking to launch or an
          investor seeking early access, choosing the right platform matters. We evaluated
          the leading launchpads across security, project quality, launch mechanics, and
          historical performance.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">Fjord Foundry</strong> leads our rankings with its
          fair price discovery model using Liquidity Bootstrapping Pools.{" "}
          <strong className="text-[var(--color-text)]">DAO Maker</strong> remains the top curated IDO platform
          for vetted projects, while <strong className="text-[var(--color-text)]">Pinksale</strong> offers
          the most accessible permissionless launch experience for community-driven tokens.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Launchpads</h2>
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Evaluated Launchpads</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          We analyzed each platform by reviewing historical launch data, testing the launch
          creation process, evaluating smart contract security, and interviewing teams who
          used these platforms. Our scoring reflects both the project launcher and participant
          experience.
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
            { title: "Security (30%)", desc: "Smart contract audits, fund custody model, historical incidents, and liquidity locking mechanisms." },
            { title: "Track Record (25%)", desc: "Number of successful launches, average participant ROI, project survival rate post-launch." },
            { title: "Launch Mechanics (20%)", desc: "Fairness of token distribution, price discovery method, anti-bot measures, and allocation systems." },
            { title: "Accessibility (15%)", desc: "Barrier to entry for participants, staking requirements, geographic availability, and supported chains." },
            { title: "Project Support (10%)", desc: "Vetting rigor, incubation services, marketing support, and post-launch assistance for projects." },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
              <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Security (30%)", "description": "A leading fair launch platform that specializes in Liquidity Bootstrapping Pools (LBPs). Projects set a starting price that decays over time, allowing the", "url": "https://degen0x.com/web3-business/best/launchpads"}) }} />
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
