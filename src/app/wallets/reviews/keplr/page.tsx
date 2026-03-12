import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Keplr Wallet Review (${CURRENT_YEAR}) | degen0x`,
  description: "Keplr wallet review covering Cosmos ecosystem support, IBC transfers, staking, governance, and inter-chain account management.",
};

export default function KeplrReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "Keplr",
        slug: "keplr",
        rating: 4.2,
        description: "Keplr is the leading wallet for the Cosmos ecosystem, supporting IBC-connected chains, staking, governance, and cross-chain transfers. Available as a browser extension and mobile app with Ledger support.",
        pros: [
          "Definitive wallet for the Cosmos ecosystem",
          "Native IBC transfer support across Cosmos chains",
          "Built-in staking and governance for all supported chains",
          "Automatic chain addition when visiting new dApps",
          "Ledger hardware wallet integration"
        ],
        cons: [
          "Primarily Cosmos-focused — limited non-Cosmos support",
          "Can become cluttered with many chains added",
          "Staking interface could show more validator details",
          "Mobile app less feature-rich than extension"
        ],
        fees: "Free; standard network fees",
        bestFor: "Cosmos ecosystem users who need IBC transfers, staking, and governance",
        affiliateUrl: "#",
        category: "Crypto Wallets",
      }}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview="Keplr is the gateway to the Cosmos ecosystem, supporting the Inter-Blockchain Communication (IBC) protocol that connects dozens of sovereign blockchains. As the most widely used Cosmos wallet, Keplr allows users to manage assets across Cosmos Hub, Osmosis, Juno, Secret Network, Akash, and many more IBC-connected chains. The wallet provides native staking with validator selection, governance proposal voting, and seamless IBC transfers between chains. Keplr automatically adds new chains when you visit their dApps, making exploration effortless. Available as a browser extension and mobile app, it is essential for anyone participating in the Cosmos ecosystem."
      sections={[
        { id: "cosmos-support", title: "Cosmos Ecosystem Support", content: "Keplr supports virtually every chain in the Cosmos ecosystem — from major chains like Cosmos Hub, Osmosis, and Juno to newer projects. The wallet automatically detects and adds chains when you visit their dApps for the first time. Each chain has its own account view with balance, staking status, governance activity, and transaction history. This automatic chain discovery makes it easy to explore new Cosmos projects." },
        { id: "ibc-transfers", title: "IBC Transfers", content: "IBC (Inter-Blockchain Communication) enables trustless transfers between Cosmos chains. Keplr makes IBC transfers straightforward — select the source chain, destination chain, token, and amount. The transfer typically completes in seconds. Keplr tracks IBC packet status and shows pending transfers. This native IBC support is essential for participating in cross-chain DeFi on platforms like Osmosis." },
        { id: "staking", title: "Staking & Governance", content: "Keplr provides native staking for all supported proof-of-stake chains. You can browse validators, view their commission rates, uptime, and voting power, then delegate with a few clicks. Governance proposals are displayed within the wallet, allowing you to vote on protocol upgrades and parameter changes. Staking rewards can be claimed and re-delegated directly from the wallet." },
        { id: "dapp-integration", title: "dApp Integration", content: "Keplr is the standard wallet for Cosmos dApps, similar to MetaMask's role for Ethereum. Major Cosmos DEXs (Osmosis, Astroport), lending protocols, and NFT platforms all support Keplr as their primary wallet connection. The extension injects into web pages and handles chain switching, transaction signing, and account management automatically." },
        { id: "security", title: "Security & Setup", content: "Keplr is non-custodial with locally encrypted key storage. It supports BIP39 seed phrases for backup and recovery. Ledger hardware wallet integration adds offline key security. The wallet can derive accounts for all Cosmos chains from a single seed phrase. Password protection and auto-lock features secure the extension. Keplr has been audited by security firms and maintains active bug bounty programs." }
      ]}
      fees={{ "Wallet": "Free", "Staking": "No wallet fee (validator commission applies)", "IBC Transfers": "Standard gas fees per chain", "Governance Voting": "Minimal gas fees" }}
      security={["Non-custodial with local key encryption", "BIP39 seed phrase backup", "Ledger hardware wallet support", "Password protection with auto-lock", "Third-party security audits", "Active bug bounty program"]}
      features={["Support for 50+ Cosmos chains", "Native IBC transfer interface", "Staking with validator selection", "Governance proposal voting", "Automatic chain discovery", "Ledger hardware wallet support", "Mobile app for iOS and Android", "WalletConnect compatibility"]}
      faqs={[
        { question: "Do I need Keplr for Cosmos?", answer: "While there are alternatives like Leap Wallet, Keplr is the most widely supported wallet in the Cosmos ecosystem. The vast majority of Cosmos dApps support Keplr as their primary wallet connection. For the best compatibility and experience, Keplr is the recommended choice." },
        { question: "Can Keplr be used for non-Cosmos chains?", answer: "Keplr has expanded to support some EVM chains, but its strength is the Cosmos ecosystem. For Ethereum or Solana, you would be better served by MetaMask or Phantom respectively. Keplr is best used as your dedicated Cosmos wallet." },
        { question: "How do IBC transfers work?", answer: "IBC transfers move tokens between Cosmos chains through relay channels. Select your source chain, destination chain, and amount in Keplr, then approve the transaction. Relayers facilitate the cross-chain communication. Transfers typically complete in under a minute." },
        { question: "Is staking through Keplr safe?", answer: "Staking through Keplr is safe — your tokens remain in your control and are delegated to validators on-chain. The wallet simply provides the interface. However, staked tokens are subject to slashing risk if a validator misbehaves, and unstaking periods vary by chain (typically 14-21 days)." }
      ]}
      relatedReviews={[
        { name: "Leap Wallet", slug: "/wallets/reviews/leap" },
        { name: "XDEFI", slug: "/wallets/reviews/xdefi" },
        { name: "Exodus", slug: "/wallets/reviews/exodus" }
      ]}
      relatedGuides={[
        { title: "Best Cosmos Wallets", href: "/wallets/best/cosmos" },
        { title: "Keplr vs Leap", href: "/wallets/compare/keplr-vs-leap" }
      ]}
    />
  );
}
