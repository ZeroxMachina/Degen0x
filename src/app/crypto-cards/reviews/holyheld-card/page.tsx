import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Holyheld Card",
  slug: "holyheld-card",
  rating: 3.8,
  description: "Holyheld is a non-custodial crypto spending card that connects to your DeFi wallet and lets you spend directly from on-chain positions.",
  pros: ["Non-custodial design", "Spend directly from DeFi positions", "No need to off-ramp to exchange", "Multi-chain support", "Privacy-focused"],
  cons: ["Limited to European Economic Area", "Newer platform with smaller track record", "Gas fees for on-chain settlements", "Fewer supported assets than custodial alternatives"],
  bestFor: "DeFi users in Europe who want to spend directly from their non-custodial wallets without using centralized exchanges",
  affiliateUrl: "https://degen0x.com/go/holyheld",
  category: "crypto-cards",
};

export const metadata: Metadata = {
  title: `Holyheld Card Review (${CURRENT_YEAR}): Non-Custodial DeFi Spending | ${SITE_NAME}`,
  description: "In-depth Holyheld Card review covering non-custodial spending, DeFi wallet integration, fees, and how it compares to other crypto cards.",
};

export default function HolyheldCardReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview="Holyheld represents a new approach to crypto spending cards by embracing non-custodial, on-chain principles. Unlike traditional crypto cards that require depositing funds into a centralized platform, Holyheld connects directly to your existing DeFi wallet and allows you to spend from your on-chain positions. This means you maintain full custody of your funds until the moment you make a purchase. The card is targeted at DeFi-native users who value self-sovereignty and want to avoid centralized intermediaries. When you make a purchase, Holyheld initiates an on-chain transaction to convert your crypto to fiat for the merchant. This approach aligns with the decentralized ethos of crypto while providing the practical spending capability of a traditional card."
      sections={[
        { id: "non-custodial", title: "Non-Custodial Design", content: "Holyheld's non-custodial architecture is its defining feature. Your crypto assets remain in your own wallet until you spend them. There is no need to deposit funds into a Holyheld account, no custodial risk from the card issuer, and no withdrawal process to reclaim your assets. The card connects to your wallet through a smart contract approval, similar to how you approve token spending in DeFi protocols. When you make a purchase, the approved amount is converted and settled through the Holyheld protocol. This design eliminates the counterparty risk present in custodial crypto cards, where your funds are held by the card issuer and could be frozen, restricted, or lost if the company faces financial difficulties. For users who have experienced the collapse of centralized platforms like Celsius and FTX, the non-custodial approach provides meaningful peace of mind." },
        { id: "defi-integration", title: "DeFi Wallet Integration", content: "Holyheld integrates with popular DeFi wallets and supports spending from positions on multiple chains including Ethereum, Polygon, Arbitrum, and Optimism. You can spend from your regular token balances, and the platform is working on support for spending directly from DeFi yield positions like lending deposits and liquidity pool tokens. The multi-chain support means you can choose which chain to spend from based on gas costs and asset availability. Spending from Layer 2 networks like Polygon and Arbitrum significantly reduces the gas fees associated with each transaction compared to Ethereum mainnet. The wallet connection process uses standard Web3 wallet connect protocols, so it works with MetaMask, Rainbow, and other popular wallets without requiring a separate Holyheld-specific wallet." },
        { id: "spending-experience", title: "Spending Experience", content: "The Holyheld card works anywhere Visa is accepted, providing broad merchant coverage. When you make a purchase, the app shows the transaction details including the crypto amount being converted, the exchange rate, and any fees. Settlement happens on-chain, meaning each transaction involves a blockchain transaction with associated gas fees. On Ethereum mainnet, gas fees can make small purchases uneconomical, but on Layer 2 networks the fees are typically negligible. The card supports both physical and virtual card formats, with the virtual card available immediately for online purchases. The app provides real-time transaction tracking and balance management. For recurring payments and subscriptions, the card can be used like any other Visa card, though the on-chain settlement may add a brief processing delay compared to traditional cards." },
        { id: "limitations-tradeoffs", title: "Limitations and Trade-offs", content: "The non-custodial approach comes with trade-offs. On-chain gas fees are incurred with each transaction, which can be meaningful on Ethereum mainnet for small purchases. Using Layer 2 networks mitigates this but requires having your assets on those chains. The card is currently limited to the European Economic Area, restricting access for users in other regions. As a newer platform, Holyheld has a smaller track record compared to established crypto card issuers. The range of supported spending assets is more limited than custodial alternatives, as the on-chain conversion process works best with liquid tokens. Users must also manage their own wallet security, as the non-custodial design means there is no company that can help recover lost funds if private keys are compromised. Despite these trade-offs, Holyheld addresses a genuine market need for DeFi-native users who refuse to compromise on self-custody principles." },
      ]}
      fees={{ "Annual Fee": "None", "Transaction Fee": "Small protocol fee + gas", "Foreign Transaction Fee": "Included in spread", "Virtual Card": "Free", "Physical Card": "Shipping fee may apply" }}
      security={["Non-custodial (user holds keys)", "Smart contract audited", "Visa network security", "No centralized fund storage", "Standard wallet security"]}
      features={["Non-custodial spending", "Multi-chain support (Ethereum, Polygon, Arbitrum, Optimism)", "DeFi wallet integration", "Virtual and physical cards", "Real-time transaction tracking", "Web3 wallet connect"]}
      faqs={[
        { question: "Is Holyheld truly non-custodial?", answer: "Yes, Holyheld does not hold your crypto assets. Your funds remain in your own wallet until the moment of purchase, when an on-chain transaction converts the necessary amount. You maintain control of your private keys and can revoke the smart contract approval at any time." },
        { question: "What are the gas fees for using Holyheld?", answer: "Gas fees depend on the network you spend from. Ethereum mainnet transactions can cost several dollars in gas, making small purchases less economical. Layer 2 networks like Polygon and Arbitrum have gas fees of just a few cents, making them much more practical for everyday spending." },
      ]}
      relatedReviews={[
        { name: "Gnosis Card", slug: "gnosis-card" },
        { name: "Plutus Card", slug: "plutus-card" },
      ]}
      relatedGuides={[
        { title: "How Crypto Cards Work", href: "/crypto-cards/learn/how-crypto-cards-work" },
        { title: "Crypto Card Security", href: "/crypto-cards/learn/crypto-card-security" },
      ]}
    />
  );
}
