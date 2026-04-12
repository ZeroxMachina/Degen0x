import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best No-KYC Crypto Exchanges in ${CURRENT_YEAR}`,
  description: `Trade crypto without identity verification. Compare the best no-KYC exchanges and DEXs in ${CURRENT_YEAR}. Privacy-focused trading options reviewed.`,
};

const noKycOptions = [
  {
    name: "Uniswap",
    type: "DEX",
    description: "The largest decentralized exchange on Ethereum. Trade ERC-20 tokens directly from your wallet with no KYC, no account creation, and no withdrawal limits. Available on Ethereum mainnet and multiple L2 networks.",
    features: ["No KYC ever", "Non-custodial", "1,000+ tokens", "Multi-chain"],
    tradeOff: "Gas fees on Ethereum can be high; impermanent loss risk for LPs",
  },
  {
    name: "dYdX",
    type: "DEX (Derivatives)",
    description: "Decentralized perpetual futures exchange built on its own Cosmos appchain. Trade crypto derivatives with up to 20x leverage without KYC requirements or identity verification.",
    features: ["No KYC for most features", "Perpetual futures", "Up to 20x leverage", "Order book trading"],
    tradeOff: "Limited to derivatives; smaller ecosystem",
  },
  {
    name: "Jupiter",
    type: "DEX Aggregator",
    description: "The leading swap aggregator on Solana. Routes trades across multiple Solana DEXs to find the best price. Ultra-low gas fees make it ideal for small to medium trades.",
    features: ["No KYC", "Best price routing", "Near-zero fees", "Limit orders"],
    tradeOff: "Limited to Solana ecosystem tokens",
  },
  {
    name: "Bisq",
    type: "P2P Exchange",
    description: "A fully decentralized peer-to-peer exchange for trading Bitcoin without any KYC. Runs on the Tor network for maximum privacy. Supports fiat payment methods through escrow-based P2P trading.",
    features: ["No KYC", "Tor-based privacy", "Fiat to BTC", "Fully decentralized"],
    tradeOff: "Slower trades; lower liquidity; desktop app only",
  },
  {
    name: "THORSwap",
    type: "Cross-chain DEX",
    description: "Enables native cross-chain swaps between different blockchains without wrapping or bridging. Trade native BTC for native ETH without KYC through the THORChain liquidity network.",
    features: ["No KYC", "Native cross-chain swaps", "Non-custodial", "No bridging needed"],
    tradeOff: "Higher fees than single-chain DEXs; newer technology",
  },
];

const faqs = [
  {
    question: "What does KYC mean in crypto?",
    answer: "KYC stands for Know Your Customer. It is a verification process where exchanges require you to submit government-issued ID, proof of address, and sometimes a selfie to verify your identity. It is required by financial regulations in most countries to prevent money laundering and fraud.",
  },
  {
    question: "Is it legal to use a no-KYC exchange?",
    answer: "Using decentralized exchanges that do not require KYC is generally legal in most jurisdictions. However, you are still responsible for reporting your trades for tax purposes. Using VPNs to bypass geographic restrictions on centralized exchanges may violate their terms of service and potentially local laws.",
  },
  {
    question: "Are no-KYC exchanges safe?",
    answer: "DEXs eliminate counterparty risk since you never deposit funds to a centralized entity. However, they carry smart contract risk, potential for rug pulls on low-liquidity tokens, and lack customer support. Centralized no-KYC exchanges carry additional risk of sudden rule changes or exit scams.",
  },
  {
    question: "Can I convert fiat to crypto without KYC?",
    answer: "Direct fiat-to-crypto conversion without KYC is limited. Options include P2P platforms like Bisq, Bitcoin ATMs (some with low limits before KYC), and receiving payment in crypto. Most direct bank-to-crypto services require identity verification.",
  },
  {
    question: "Why do some people prefer no-KYC exchanges?",
    answer: "Reasons include privacy concerns (not wanting personal data stored by exchanges vulnerable to breaches), living in jurisdictions with restricted access, philosophical alignment with crypto's cypherpunk origins, and avoiding the time and friction of verification processes.",
  },
];

export default function NoKycPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "No KYC", href: "/exchanges/best/no-kyc" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best No-KYC Crypto Exchanges ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Not everyone wants to hand over their passport and personal information to trade
          crypto. Whether it is for privacy, principle, or practicality, there are legitimate
          options for trading without identity verification. Decentralized exchanges (DEXs)
          are the primary way to trade without KYC, as they operate through smart contracts
          rather than centralized entities.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Important Considerations</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          While no-KYC trading is legitimate, be aware that you are still legally required to
          report crypto gains for tax purposes in most jurisdictions. Using no-KYC platforms
          does not exempt you from tax obligations. Additionally, no-KYC centralized exchanges
          carry higher counterparty risk since they operate in regulatory gray areas.
        </p>
      </div>

      <div className="space-y-6 mb-12">
        {noKycOptions.map((option, index) => (
          <div
            key={option.name}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-text)]">{option.name}</h3>
                <span className="text-sm text-[var(--color-primary)]">{option.type}</span>
              </div>
            </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="exchanges"
        />

            <p className="text-[var(--color-text-secondary)] mb-4">{option.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {option.features.map((feature) => (
                <span key={feature} className="inline-flex items-center rounded-full bg-[var(--color-success)]/10 px-3 py-1 text-xs font-medium text-[var(--color-success)]">
                  {feature}
                </span>
              ))}
            </div>
            <p className="text-xs text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-accent)]">Trade-off:</strong> {option.tradeOff}
            </p>
          </div>
        ))}
      </div>

      <FAQSection faqs={faqs} />
    </div>
  );
}
