import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best DAO Governance Tools of ${CURRENT_YEAR} - Voting & Proposals | ${SITE_NAME}`,
  description: `Compare the best DAO governance tools of ${CURRENT_YEAR}. On-chain and off-chain voting, proposal management, delegation systems, and governance frameworks for decentralized organizations.`,
};

const products: Product[] = [
  {
    name: "Snapshot",
    slug: "snapshot",
    rating: 4.8,
    description: "The most widely used off-chain voting platform for DAOs. Enables gasless voting through signed messages, supports multiple voting strategies, and integrates with most major governance frameworks. Used by thousands of DAOs for proposal creation and community decision-making.",
    pros: ["Gasless off-chain voting", "Flexible voting strategies and customization", "Massive adoption across the ecosystem", "Open-source and free to use"],
    cons: ["Votes are off-chain and not binding on-chain", "Requires separate execution for approved proposals", "Limited built-in proposal discussion features", "Sybil resistance depends on token distribution"],
    fees: "Free",
    bestFor: "DAOs of all sizes needing gasless governance",
    affiliateUrl: "#",
    category: "dao-tools",
    featured: true,
  },
  {
    name: "Tally",
    slug: "tally",
    rating: 4.6,
    description: "On-chain governance platform that provides a user-friendly interface for creating proposals, voting, and executing governance actions directly through smart contracts. Supports Governor-based contracts and provides delegate profiles and voting analytics.",
    pros: ["True on-chain governance execution", "Beautiful delegate profiles and analytics", "Governor contract compatibility", "Transparent voting history and data"],
    cons: ["Gas costs for on-chain voting", "Limited to EVM-compatible chains", "Requires Governor-compatible contracts", "Higher barrier for small DAOs"],
    fees: "Free for basic; enterprise plans available",
    bestFor: "Established DAOs with on-chain governance",
    affiliateUrl: "#",
    category: "dao-tools",
  },
  {
    name: "Aragon",
    slug: "aragon",
    rating: 4.5,
    description: "Full-stack DAO creation and governance platform. Provides modular smart contract frameworks for building custom DAOs, along with a no-code interface for creating and managing decentralized organizations with built-in voting, treasury, and membership management.",
    pros: ["Complete DAO creation toolkit", "Modular and customizable frameworks", "No-code DAO deployment option", "Built-in treasury and membership management"],
    cons: ["Can be complex for simple governance needs", "Smart contract gas costs for operations", "Ecosystem lock-in with Aragon contracts", "Documentation can lag behind features"],
    fees: "Free to deploy; gas fees apply",
    bestFor: "Teams building new DAOs from scratch",
    affiliateUrl: "#",
    category: "dao-tools",
  },
  {
    name: "Realms (Solana)",
    slug: "realms",
    rating: 4.3,
    description: "The primary governance platform for Solana-based DAOs. Provides on-chain voting, treasury management, and council governance with low transaction costs. Integrated with the SPL Governance program used by major Solana protocols.",
    pros: ["Native Solana governance solution", "Very low transaction costs", "Integrated treasury management", "Used by major Solana protocols"],
    cons: ["Solana ecosystem only", "Fewer features than EVM alternatives", "Smaller developer ecosystem", "Interface less polished than competitors"],
    fees: "Free (minimal SOL gas fees)",
    bestFor: "Solana-native DAOs and protocols",
    affiliateUrl: "#",
    category: "dao-tools",
  },
  {
    name: "DAOhaus",
    slug: "daohaus",
    rating: 4.2,
    description: "Community-governed platform for launching and managing Moloch-style DAOs. Provides rage-quit functionality allowing members to exit with their share of the treasury, making it ideal for investment DAOs and grant committees.",
    pros: ["Rage-quit member protection mechanism", "Battle-tested Moloch DAO framework", "Strong community governance model", "Good for investment and grants DAOs"],
    cons: ["Specific to Moloch-style governance", "Less flexible than modular alternatives", "Smaller user base", "Interface feels dated compared to Snapshot"],
    fees: "Free to use; gas fees apply",
    bestFor: "Investment DAOs and grant committees",
    affiliateUrl: "#",
    category: "dao-tools",
  },
];

const faqs: FAQ[] = [
  {
    question: "What is the difference between on-chain and off-chain voting?",
    answer: "On-chain voting (Tally, Aragon) records votes directly on the blockchain as transactions, making them immutable and enabling automatic execution of approved proposals through smart contracts. Off-chain voting (Snapshot) uses signed messages that are stored off-chain, making votes gasless but requiring a separate step to execute decisions on-chain. Most DAOs use a combination: Snapshot for signaling and temperature checks, and on-chain voting for critical treasury or protocol decisions.",
  },
  {
    question: "How do I prevent governance attacks on my DAO?",
    answer: "Common defenses include time-locks on proposal execution (giving the community time to react), quorum requirements to ensure sufficient participation, vote escrow mechanisms that require locking tokens for voting power, delegation systems that distribute influence, and multi-sig safeguards that can veto malicious proposals. Regular governance audits and active monitoring of proposal activity are also important.",
  },
  {
    question: "What voting strategies are available?",
    answer: "Common strategies include token-weighted voting (one token equals one vote), quadratic voting (diminishing returns for large holders to amplify smaller voices), conviction voting (votes gain weight over time to favor long-term commitment), and holographic consensus (prediction markets to filter proposals). Snapshot supports custom strategies and combinations.",
  },
  {
    question: "Can a small team use DAO governance tools?",
    answer: "Yes. Many small teams use Snapshot for internal decision-making or Gnosis Safe with basic voting for treasury management. You do not need thousands of token holders to benefit from transparent, recorded decision-making. Aragon and DAOhaus both offer simple setups for teams of 5-20 people.",
  },
];

export default function DaoToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Web3 Business", href: "/web3-business" },
          { label: "Best Tools", href: "/web3-business/best" },
          { label: "DAO Tools", href: "/web3-business/best/dao-tools" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best DAO Governance Tools ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Governance is the backbone of any DAO. The tools your organization uses to create proposals,
          facilitate voting, and execute decisions directly shape how effectively your community can
          coordinate. We have evaluated the leading governance platforms across usability, security,
          flexibility, and adoption to help you choose the right infrastructure for your DAO.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">Snapshot</strong> dominates off-chain voting with its gasless
          approach and massive ecosystem adoption. For binding on-chain governance,{" "}
          <strong className="text-[var(--color-text)]">Tally</strong> provides the best user experience for Governor-based
          DAOs. Teams building a new DAO from the ground up should consider{" "}
          <strong className="text-[var(--color-text)]">Aragon</strong> for its comprehensive creation and management toolkit.
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Governance Stack Recommendations</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Small Teams (5-20 members)</h3>
              <p className="text-sm">Use Snapshot for proposals and voting combined with a Gnosis Safe multi-sig for treasury execution. This gives you transparent decision-making with minimal overhead.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Growing DAOs (50-500 members)</h3>
              <p className="text-sm">Combine Snapshot for temperature checks with Tally for binding on-chain votes on major decisions. Implement delegation to keep participation high as your community scales.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Large Protocol DAOs (500+ members)</h3>
              <p className="text-sm">Full governance stack with Snapshot signaling, Tally on-chain execution, time-lock contracts, delegation profiles, and governance analytics. Consider a governance council for day-to-day operations.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
