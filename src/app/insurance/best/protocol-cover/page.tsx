import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Protocol Cover Insurance ${CURRENT_YEAR} - DeFi Protocol Protection`,
  description:
    "Compare the best DeFi protocol cover insurance. Protect against governance attacks, oracle manipulation, and protocol-level failures across major DeFi platforms.",
};

const products: Product[] = [
  {
    name: "Nexus Mutual",
    slug: "nexus-mutual",
    rating: 4.8,
    description:
      "Nexus Mutual's protocol cover is their flagship product, protecting against a wide range of protocol-level failures including smart contract bugs, economic design flaws, governance attacks, and oracle failures. Covers over 100 DeFi protocols across multiple chains.",
    pros: ["Broadest protocol coverage in market", "Covers governance and oracle attacks", "Strong claim payout history"],
    cons: ["KYC membership required", "Higher premiums for riskier protocols", "Community vote for claims"],
    fees: "2-7% annually",
    bestFor: "Comprehensive DeFi protocol protection",
    affiliateUrl: "https://cryptodegen.com/go/nexus-mutual",
    category: "insurance",
    featured: true,
  },
  {
    name: "InsurAce",
    slug: "insurace",
    rating: 4.4,
    description:
      "InsurAce offers protocol cover across Ethereum, BSC, Polygon, Avalanche, and Fantom. Their bundled portfolio approach lets users cover all their DeFi positions in a single policy at a discounted rate compared to individual covers.",
    pros: ["Multi-chain protocol coverage", "Portfolio bundling saves on premiums", "No KYC requirement"],
    cons: ["Smaller coverage pool", "Less proven claim history", "Fewer covered protocols"],
    fees: "1.5-5% annually",
    bestFor: "Multi-chain DeFi portfolios",
    affiliateUrl: "https://cryptodegen.com/go/insurace",
    category: "insurance",
  },
  {
    name: "Neptune Mutual",
    slug: "neptune-mutual",
    rating: 4.2,
    description:
      "Neptune Mutual provides parametric protocol coverage where incidents are reported and resolved through community consensus. When a covered event is confirmed, all policyholders receive automatic payouts without individual claim filing.",
    pros: ["Automatic payouts for all policyholders", "No individual claim filing needed", "Transparent incident reporting"],
    cons: ["Limited protocol selection", "Parametric may not cover full loss", "Newer with less track record"],
    fees: "2-6% annually",
    bestFor: "Hassle-free parametric protocol protection",
    affiliateUrl: "https://cryptodegen.com/go/neptune-mutual",
    category: "insurance",
  },
];

const faqs: FAQ[] = [
  {
    question: "What is protocol cover insurance?",
    answer: "Protocol cover is a type of crypto insurance that protects depositors against losses caused by failures at the protocol level. This includes smart contract bugs, economic design exploits, governance attacks, oracle manipulation, and admin key compromises that result in loss of user funds deposited in a DeFi protocol.",
  },
  {
    question: "How is protocol cover different from smart contract cover?",
    answer: "Protocol cover is broader than pure smart contract cover. While smart contract cover specifically protects against code-level bugs, protocol cover extends to economic design failures, governance attacks, oracle issues, and other protocol-level risks that may not involve a direct code exploit but still result in fund losses.",
  },
  {
    question: "Which DeFi protocols can I get coverage for?",
    answer: "Major protocols like Aave, Compound, MakerDAO, Uniswap, Curve, Lido, Yearn, and Convex are widely available for coverage. The exact list varies by insurance provider. Nexus Mutual typically has the broadest selection, covering over 100 protocols.",
  },
  {
    question: "What happens if a covered protocol gets exploited?",
    answer: "If a covered protocol suffers an exploit, you file a claim with your insurance provider. With discretionary models, community assessors evaluate the claim and vote on payout. With parametric models, payouts are triggered automatically once the incident is confirmed. Payout amounts depend on your coverage amount and the specific policy terms.",
  },
];

export default function ProtocolCoverPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Insurance", href: "/insurance" },
          { label: "Best", href: "/insurance/best" },
          { label: "Protocol Cover", href: "/insurance/best/protocol-cover" },
        ]}
      />
      <AffiliateDisclosure />
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Best Protocol Cover Insurance of {CURRENT_MONTH} {CURRENT_YEAR}</h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-6">
          DeFi protocols can fail in many ways beyond simple code bugs. Protocol cover provides the broadest protection against losses from governance attacks, oracle manipulation, economic design flaws, and smart contract exploits.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Protocol cover is the most comprehensive form of DeFi insurance, extending beyond basic smart contract coverage to include a wider range of protocol-level risks. This makes it ideal for users with significant DeFi positions who want peace of mind that their deposits are protected against the full spectrum of protocol failures. The distinction matters because many major DeFi incidents have involved economic exploits or governance manipulation rather than simple code bugs.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          We evaluated protocol cover providers based on the breadth of covered events, number of supported protocols, claim resolution efficiency, capital adequacy, and overall value. Here are the top protocol cover options for {CURRENT_YEAR}.
        </p>
      </div>
      <div className="space-y-6 mb-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="insurance" />
        ))}
      </div>
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Types of Protocol Risks Covered</h2>
        <div className="grid md:grid-cols-2 gap-6 text-[var(--color-text-secondary)]">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Governance Attacks</h3>
            <p>Malicious governance proposals that alter protocol parameters to drain funds or redirect assets. Protocol cover protects against both hostile governance takeovers and compromised admin keys.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Oracle Manipulation</h3>
            <p>Price oracle manipulation can enable attackers to borrow against artificially inflated collateral or trigger unfair liquidations. Protocol cover typically includes oracle failure as a covered event.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Economic Design Flaws</h3>
            <p>Complex DeFi protocols can have economic vulnerabilities that allow sophisticated attackers to extract value through flash loans or other financial engineering without any code bug being present.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Smart Contract Bugs</h3>
            <p>The most straightforward category: code bugs that allow attackers to drain funds. Protocol cover includes all forms of smart contract exploits including reentrancy, integer overflow, and access control issues.</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
