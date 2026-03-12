import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best DAO Treasury Tools of ${CURRENT_YEAR} - Multi-Sig & Fund Management | ${SITE_NAME}`,
  description: `Compare the best DAO treasury management tools of ${CURRENT_YEAR}. Multi-signature wallets, spending controls, on-chain accounting, and fund management platforms ranked by security, features, and ease of use.`,
};

const products: Product[] = [
  {
    name: "Safe (Gnosis Safe)",
    slug: "safe",
    rating: 4.9,
    description: "The industry-standard multi-signature wallet used by the majority of DAOs and crypto organizations. Supports multiple chains, customizable signing thresholds, and a rich ecosystem of apps for treasury operations including spending limits and batch transactions.",
    pros: ["Battle-tested security with billions in TVL", "Multi-chain support across EVM networks", "Rich app ecosystem for DeFi and payments", "Fully open-source and self-custodial"],
    cons: ["Steeper learning curve for non-technical users", "Gas fees for on-chain transactions", "Limited native analytics and reporting"],
    fees: "Free (gas fees apply)",
    bestFor: "DAOs and crypto organizations of all sizes",
    affiliateUrl: "#",
    category: "treasury-tools",
    featured: true,
  },
  {
    name: "Parcel",
    slug: "parcel",
    rating: 4.7,
    description: "Full-stack treasury management platform built on top of Gnosis Safe. Automates contributor payments, provides real-time treasury dashboards, and offers mass payout functionality with built-in accounting integrations.",
    pros: ["Automated recurring payments", "Real-time treasury analytics dashboard", "Mass payout support for contributors", "Integrates directly with Gnosis Safe"],
    cons: ["Paid subscription for advanced features", "Limited to EVM chains", "Smaller ecosystem compared to Safe alone"],
    fees: "Free tier available; Pro from $299/mo",
    bestFor: "DAOs with regular contributor payments",
    affiliateUrl: "#",
    category: "treasury-tools",
  },
  {
    name: "Utopia Labs",
    slug: "utopia-labs",
    rating: 4.5,
    description: "Treasury operations platform that combines payment management, bookkeeping, and compliance in one dashboard. Purpose-built for DAOs to manage contributor compensation, track expenses by category, and generate reports for governance transparency.",
    pros: ["All-in-one treasury operations", "Contributor payment management", "Built-in bookkeeping and categorization", "Governance-friendly reporting"],
    cons: ["Relatively newer platform", "Limited chain support compared to Safe", "Some features still in development"],
    fees: "Custom pricing",
    bestFor: "Mid-size DAOs needing operational tooling",
    affiliateUrl: "#",
    category: "treasury-tools",
  },
  {
    name: "Coinshift",
    slug: "coinshift",
    rating: 4.4,
    description: "Treasury management interface that layers on top of Gnosis Safe to add portfolio tracking, payment scheduling, and cross-chain visibility. Provides a unified dashboard across all your multi-sig wallets and chains.",
    pros: ["Unified multi-chain treasury view", "Payment scheduling and automation", "Portfolio tracking with token pricing", "Clean, intuitive dashboard design"],
    cons: ["Dependent on Gnosis Safe infrastructure", "Limited standalone functionality", "Newer entrant with less track record"],
    fees: "Free tier; paid plans from $199/mo",
    bestFor: "Multi-chain DAOs needing portfolio visibility",
    affiliateUrl: "#",
    category: "treasury-tools",
  },
  {
    name: "Squads",
    slug: "squads",
    rating: 4.3,
    description: "Multi-signature wallet and treasury platform native to the Solana ecosystem. Provides smart account infrastructure for teams to manage SOL and SPL token treasuries with programmable spending rules and governance integrations.",
    pros: ["Native Solana support with low fees", "Programmable spending authorities", "Fast transaction finality", "Growing DeFi integration ecosystem"],
    cons: ["Solana-only; no EVM support", "Smaller ecosystem than Gnosis Safe", "Less battle-tested at scale"],
    fees: "Free (gas fees apply)",
    bestFor: "Solana-native DAOs and teams",
    affiliateUrl: "#",
    category: "treasury-tools",
  },
];

const faqs: FAQ[] = [
  {
    question: "What is a DAO treasury tool?",
    answer: "A DAO treasury tool is software that helps decentralized organizations manage their on-chain funds. Core features include multi-signature wallet functionality (requiring multiple approvals for transactions), payment automation for contributors, portfolio tracking across chains and tokens, spending controls, and reporting dashboards. These tools replace traditional corporate banking for crypto-native organizations.",
  },
  {
    question: "Why do DAOs need multi-signature wallets?",
    answer: "Multi-signature wallets require multiple authorized signers to approve a transaction before it executes, preventing any single person from unilaterally moving funds. This is critical for DAOs that hold community treasuries worth millions of dollars. A typical setup requires 3-of-5 or 4-of-7 signers, ensuring security even if individual keys are compromised.",
  },
  {
    question: "How do I choose between treasury management platforms?",
    answer: "Start with your blockchain ecosystem: Safe dominates EVM chains while Squads leads on Solana. Then consider your operational needs: if you primarily need a secure multi-sig, Safe alone may suffice. If you need payment automation, contributor management, and accounting, platforms like Parcel or Utopia Labs add those layers. Factor in team size, transaction volume, and budget for paid features.",
  },
  {
    question: "Can treasury tools integrate with accounting software?",
    answer: "Yes, most modern treasury tools offer integrations with crypto accounting platforms like Bitwave, Cryptio, and Tres Finance. These integrations automatically sync transaction data for bookkeeping, tax reporting, and audit preparation. Some tools like Utopia Labs include basic bookkeeping features natively.",
  },
  {
    question: "What security risks should I watch for with treasury tools?",
    answer: "Key risks include smart contract vulnerabilities in the multi-sig implementation, compromised signer keys, social engineering attacks targeting signers, and governance attacks that change signer configurations. Mitigate these by using audited contracts (Safe has undergone multiple audits), hardware wallets for signers, time-locks on configuration changes, and clear operational security policies.",
  },
];

export default function TreasuryToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Web3 Business", href: "/web3-business" },
          { label: "Best Tools", href: "/web3-business/best" },
          { label: "Treasury Tools", href: "/web3-business/best/treasury-tools" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best DAO Treasury Tools ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Managing a DAO treasury is one of the most critical responsibilities in Web3. Whether you are
          overseeing a multi-million dollar protocol treasury or a small team fund, the right tools make
          the difference between secure, transparent operations and costly mistakes. We have evaluated
          the leading treasury management platforms across security, functionality, multi-chain support,
          and ease of use to help you choose the right stack.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          Our top pick is <strong className="text-[var(--color-text)]">Safe (Gnosis Safe)</strong>, the most widely adopted
          multi-signature wallet in crypto, securing over $100 billion in assets. For teams that need more
          operational features like automated payments and treasury dashboards,{" "}
          <strong className="text-[var(--color-text)]">Parcel</strong> and <strong className="text-[var(--color-text)]">Utopia Labs</strong>{" "}
          build valuable functionality on top of Safe&apos;s battle-tested infrastructure.
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Evaluated Treasury Tools</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          We tested each platform by creating multi-sig wallets, executing test transactions, setting up
          payment flows, and evaluating the overall user experience from both a signer and administrator
          perspective. We weighted security audit history and production track record most heavily, as
          treasury tools hold real funds at risk.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Security (35%)", desc: "Smart contract audit history, total value secured, incident track record, and key management capabilities." },
            { title: "Functionality (25%)", desc: "Multi-sig configuration, payment automation, batch transactions, spending limits, and DeFi integrations." },
            { title: "Multi-Chain Support (15%)", desc: "Number of supported chains, cross-chain visibility, and bridge integrations." },
            { title: "Usability (15%)", desc: "Interface design, onboarding experience, documentation, and accessibility for non-technical team members." },
            { title: "Ecosystem (10%)", desc: "Third-party app integrations, community size, developer tooling, and accounting platform compatibility." },
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
  );
}
