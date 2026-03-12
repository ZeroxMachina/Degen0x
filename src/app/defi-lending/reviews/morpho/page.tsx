import { Metadata } from "next";
import { DEFI_LENDING_PRODUCTS } from "@/data/defi-lending";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

const product = DEFI_LENDING_PRODUCTS.find((p) => p.slug === "morpho")!;

export const metadata: Metadata = {
  title: `Morpho Review (${CURRENT_YEAR}): P2P Rate Optimization | degen0x`,
  description: "In-depth Morpho review covering P2P matching, Morpho Blue permissionless markets, rate improvements, security model, and token economics.",
};

export default function MorphoReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="Morpho is a peer-to-peer rate optimization protocol that sits on top of existing lending platforms like Aave and Compound to improve rates for both lenders and borrowers. When a Morpho user deposits or borrows, the protocol matches them with a counterpart for a better rate. Matched positions earn more (lenders) or pay less (borrowers) than base pool rates. Unmatched positions fall back to the underlying protocol, ensuring rates are always at least as good as direct usage. With over $2 billion in TVL and the launch of Morpho Blue for permissionless lending markets, Morpho has established itself as a key DeFi lending primitive."
      sections={[
        { id: "how-it-works", title: "How P2P Matching Works", content: "Morpho operates by intercepting supply and borrow transactions that would normally go directly to Aave or Compound. When a lender deposits, Morpho checks if there is an unmatched borrower who can be paired at a rate between the pool supply and borrow rates. If matched, both parties get a better deal. The spread that would normally go to the pool protocol is instead shared between the matched pair. If no match is available, the funds are deposited into the underlying protocol at the standard pool rate, so users never earn less than they would by using Aave or Compound directly." },
        { id: "morpho-blue", title: "Morpho Blue", content: "Morpho Blue represents a significant evolution, offering permissionless lending market creation. Anyone can create a lending market with any collateral and loan asset pair, any oracle, and any risk parameters. This opens up lending to long-tail assets and specialized markets that Aave and Compound governance may be too conservative to support. Morpho Blue uses an immutable, minimal smart contract design that is easier to audit and reason about. Risk is managed through MetaMorpho vaults that curate which markets to allocate capital to, providing a managed experience for passive lenders." },
        { id: "security", title: "Security Model", content: "Morpho's security model is unique. The Optimizer version inherits security from whatever underlying protocol it integrates with. Funds not P2P matched sit in Aave or Compound pools, benefiting from those protocols' battle-tested contracts. The Morpho matching layer is a relatively simple additional contract that has been extensively audited. Morpho Blue takes a different approach with immutable, minimal contracts designed to be secure through simplicity and have undergone formal verification of core logic." },
        { id: "rate-improvement", title: "Rate Improvement Analysis", content: "Actual rate improvements depend on matching efficiency. High-demand markets like USDC and ETH see strong matching rates with improvements of 0.5-2% APY for lenders. Borrowers similarly save on interest costs. The improvement is most significant in markets with balanced supply and demand, where P2P matching efficiency is highest. Lower-liquidity markets may see less improvement due to fewer matching opportunities. Overall, Morpho provides a strict improvement over direct pool usage at no downside risk." },
        { id: "token", title: "MORPHO Token & Governance", content: "The MORPHO token governs the Morpho protocol. Token holders vote on protocol parameters, incentive distribution, and strategic decisions. MORPHO rewards are distributed to users of both Optimizer and Morpho Blue products as additional yield. The token is transferable and tradeable. Morpho's governance structure is designed to be minimal, reflecting the protocol's philosophy of simplicity and immutability where possible, with governance only for parameters that genuinely need human judgment." },
      ]}
      fees={{ "Supply Rate": "Better than or equal to underlying pool", "Borrow Rate": "Better than or equal to underlying pool", "Matching Fee": "None (improvement shared P2P)", "Morpho Blue": "No protocol fee on base layer", "Gas Costs": "Slightly higher than direct Aave/Compound" }}
      security={["Inherits security of Aave/Compound (Optimizer)", "Multiple audits of matching contracts", "Immutable minimal design for Morpho Blue", "Formal verification of core logic", "Bug bounty program", "Over $2B TVL without major exploits"]}
      features={["Automatic P2P rate matching on Aave and Compound", "Morpho Blue permissionless lending markets", "MetaMorpho vaults for curated market allocation", "MORPHO governance token and rewards", "No rate downside versus direct pool usage", "Multi-asset support across major DeFi tokens"]}
      faqs={[
        { question: "Can I lose money by using Morpho instead of Aave directly?", answer: "No. Morpho ensures you always earn at least the base pool rate. When matched P2P, you earn more. When not matched, you earn the same as the underlying protocol. The only additional cost is slightly higher gas for the matching transaction." },
        { question: "What is the difference between Morpho Optimizer and Morpho Blue?", answer: "Morpho Optimizer sits on top of existing protocols and improves rates through P2P matching. Morpho Blue is a new independent lending primitive that allows permissionless market creation with any asset pairs. They serve different purposes and can be used independently." },
        { question: "Is Morpho audited?", answer: "Yes, extensively. Both Morpho Optimizer and Morpho Blue have undergone multiple audits from top security firms. Morpho Blue contracts are immutable and minimal, reducing the attack surface, and have been formally verified." },
      ]}
      relatedReviews={[{ name: "Aave", slug: "/defi-lending/reviews/aave" }, { name: "Compound", slug: "/defi-lending/reviews/compound" }]}
      relatedGuides={[{ title: "APY vs APR", href: "/defi-lending/learn/apy-vs-apr" }, { title: "How to Earn Yield", href: "/defi-lending/learn/how-to-earn-yield" }]}
    />
  );
}
