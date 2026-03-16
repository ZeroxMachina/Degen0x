import { Metadata } from "next";
import { cryptoCards } from "@/data/crypto-cards";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

const product = cryptoCards.find((c) => c.slug === "gnosis-card")!;

export const metadata: Metadata = {
  title: `Gnosis Pay Card Review (${CURRENT_YEAR}): DeFi Spending & Pros/Cons | degen0x`,
  description: "In-depth Gnosis Pay card review covering on-chain spending from Safe wallets, DeFi integration, progressive decentralization, and whether it suits DeFi-native users.",
};

export default function GnosisCardReviewPage() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview={`The Gnosis Pay Card represents a fundamentally different vision for crypto spending. Instead of depositing crypto with a centralized company that issues a card, Gnosis Pay connects a Visa card directly to your Gnosis Safe smart contract wallet. You spend from your own on-chain assets without any intermediary holding your funds, making it the most DeFi-native spending solution available.\n\nThe card works with assets on Gnosis Chain, converting them to fiat at the point of sale. Because funds remain in your smart contract wallet until the moment of spending, you maintain full self-custody. This architecture eliminates counterparty risk from centralized card issuers, a significant advantage in an industry that has seen multiple custodial platforms fail.\n\nGnosis Pay is still expanding its geographic availability and feature set. The product is best suited for DeFi-savvy users who prioritize self-custody and are comfortable with the Gnosis Safe ecosystem. For users who prefer simplicity over sovereignty, traditional crypto debit cards may offer a more polished experience.`}
      sections={[
        { id: "self-custody", title: "Self-Custody Spending", content: "Gnosis Pay's defining feature is that funds never leave your control until the moment of purchase. Your assets sit in a Gnosis Safe smart contract wallet that you own and control. When you make a card payment, the system initiates an on-chain transaction from your Safe to convert and settle the payment. This means there is no exchange or company holding your funds on your behalf. If Gnosis Pay were to cease operations, your assets remain safely in your wallet. This is a fundamental architectural difference from every other crypto card on the market." },
        { id: "gnosis-chain", title: "Gnosis Chain Integration", content: "The card operates on Gnosis Chain, an EVM-compatible sidechain that offers low transaction costs and fast confirmation times. To use the card, you need assets on Gnosis Chain, which can be bridged from Ethereum mainnet. Supported assets include xDAI (the native stablecoin), USDC, and GNO. The low transaction costs on Gnosis Chain mean spending transactions cost fractions of a cent in network fees. The chain's validator set provides security while maintaining the fast finality needed for real-time card payments." },
        { id: "visa-acceptance", title: "Visa Acceptance", content: "Despite its DeFi-native architecture, the Gnosis Pay Card is a standard Visa card accepted at millions of merchants worldwide. From the merchant's perspective, it is identical to any other Visa transaction. This bridges the gap between on-chain DeFi assets and real-world commerce. The card supports contactless payments, online purchases, and in-store chip transactions. The experience for the cardholder is similar to any debit card, with the critical difference being where the funds originate." },
        { id: "progressive-decentralization", title: "Progressive Decentralization", content: "Gnosis Pay has outlined a progressive decentralization roadmap. The current version requires some centralized components for card issuance and payment processing compliance. Over time, the plan is to decentralize more of the stack, potentially including decentralized payment processing and community governance of the protocol. The GNO token plays a role in governance of the broader Gnosis ecosystem. This vision of progressively decentralizing financial card infrastructure is unique in the crypto card space." },
      ]}
      fees={{ "Card Issuance": "Varies by region", "Annual Fee": "None", "Transaction Fee": "Gnosis Chain gas fees (fractions of a cent)", "Conversion Spread": "Competitive market rate", "Foreign Transaction": "Standard Visa rates", "ATM Withdrawal": "Varies by region" }}
      security={["Self-custody through Gnosis Safe smart contract wallet", "Multi-signature wallet support", "No intermediary custodian for funds", "Gnosis Chain validator security", "Hardware wallet compatibility through Safe", "Progressive decentralization roadmap"]}
      features={["Spend directly from Gnosis Safe wallet", "Full self-custody with no intermediary", "Visa acceptance worldwide", "Low-cost transactions on Gnosis Chain", "Smart contract wallet security", "Progressive decentralization roadmap", "GNO token governance participation"]}
      faqs={[
        { question: "Do I need to understand Gnosis Safe to use this card?", answer: "A basic familiarity with Gnosis Safe (now called Safe) smart contract wallets is helpful. You need to set up and fund a Safe wallet on Gnosis Chain. The Gnosis Pay interface guides you through the process, but it is more technical than signing up for a Coinbase or Crypto.com card." },
        { question: "Which assets can I spend?", answer: "The card supports assets on Gnosis Chain, primarily xDAI and USDC. You may need to bridge assets from Ethereum mainnet to Gnosis Chain before spending. The supported asset list may expand over time." },
        { question: "What happens if Gnosis Pay shuts down?", answer: "Your funds remain in your Gnosis Safe wallet, which you fully control. Unlike centralized platforms, there is no risk of losing access to your assets if the card issuer ceases operations. You would lose the card functionality but not the underlying funds." },
      ]}
      relatedReviews={[{ name: "Plutus Card", slug: "plutus-card" }, { name: "Nexo Card", slug: "nexo-card" }, { name: "Wirex Card", slug: "wirex-card" }]}
      relatedGuides={[{ title: "Crypto Card Security Tips", href: "/crypto-cards/learn/crypto-card-security" }, { title: "Prepaid vs Debit Crypto Cards", href: "/crypto-cards/learn/prepaid-vs-debit-crypto" }]}
    />
  );
}
