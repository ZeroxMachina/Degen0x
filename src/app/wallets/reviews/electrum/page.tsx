import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Electrum Wallet Review (${CURRENT_YEAR}) | degen0x`,
  description: "In-depth Electrum wallet review. The veteran Bitcoin-only wallet with advanced features, hardware wallet support, and Lightning Network integration.",
  alternates: { canonical: "/wallets/reviews/electrum" }};

export default function ElectrumReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "Electrum",
        slug: "electrum",
        rating: 4.1,
        description: "Electrum is a lightweight, open-source Bitcoin-only wallet that has been trusted by the community since 2011. It offers advanced features like custom fee settings, hardware wallet integration, multi-sig support, and Lightning Network capabilities.",
        pros: [
          "Fully open source with over a decade of proven security",
          "Lightweight SPV client — no full node download required",
          "Advanced features: coin control, RBF, custom fees, multi-sig",
          "Hardware wallet support (Ledger, Trezor, Coldcard, etc.)",
          "Lightning Network integration for fast, cheap transactions"
        ],
        cons: [
          "Bitcoin-only — no altcoin support",
          "Dated user interface not beginner-friendly",
          "Desktop-only — no official mobile app"
        ],
        fees: "Free; custom network fees",
        bestFor: "Experienced Bitcoin users who want advanced features and maximum control",
        affiliateUrl: "#",
        category: "Crypto Wallets",
      }}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview="Electrum has been a cornerstone of the Bitcoin ecosystem since 2011, making it one of the oldest and most trusted Bitcoin wallets. As a lightweight SPV (Simplified Payment Verification) client, it connects to remote servers instead of downloading the full Bitcoin blockchain, allowing fast setup and low resource usage. Electrum is known for its advanced feature set including custom transaction fees, replace-by-fee (RBF), coin control, multi-signature wallets, and Lightning Network support. While the interface may feel dated compared to modern wallets, its reliability and feature depth make it the wallet of choice for serious Bitcoin users."
      sections={[
        { id: "features", title: "Core Features", content: "Electrum offers a comprehensive set of Bitcoin-specific features. Custom fee settings let you precisely control transaction costs with manual sat/byte input. Replace-by-fee (RBF) allows you to speed up unconfirmed transactions. Coin control enables you to select specific UTXOs for privacy-conscious spending. Multi-signature wallet support allows shared wallets requiring multiple signatures. The wallet also supports watch-only wallets, cold storage setups, and various seed types including standard and Segwit." },
        { id: "security", title: "Security & Open Source", content: "Electrum is fully open source and has been audited by the community for over a decade. Private keys are encrypted locally using AES-256. The wallet supports hardware wallet integration with Ledger, Trezor, Coldcard, BitBox, and Keepkey. Two-factor authentication is available through the TrustedCoin plugin. Electrum uses its own seed format (not BIP39), which provides additional security through version numbering but means seeds are not directly compatible with other wallets." },
        { id: "lightning", title: "Lightning Network", content: "Electrum includes built-in Lightning Network support, allowing users to open channels, make Lightning payments, and receive funds via Lightning invoices. The implementation is trampoline-based, routing payments through trampoline nodes for simplified pathfinding. While not as full-featured as dedicated Lightning wallets, the integration provides a convenient way to make fast, low-cost Bitcoin transactions without a separate app." },
        { id: "hardware", title: "Hardware Wallet Integration", content: "Electrum has excellent hardware wallet support. It works with Ledger Nano S/X, Trezor Model One/T, Coldcard, BitBox02, and KeepKey. The integration allows you to use Electrum's advanced interface and features while keeping private keys safely on the hardware device. This combination is particularly popular among Coldcard users who prefer Electrum's coin control and PSBT support." },
        { id: "user-experience", title: "User Experience", content: "Electrum's interface is functional but visually dated. It uses a traditional desktop application layout with tabs for sending, receiving, addresses, and coins. The learning curve is steeper than modern wallets, but the payoff is access to features that most other wallets do not offer. The wallet is available for Windows, macOS, and Linux. There is no official mobile app, though third-party forks exist for Android." }
      ]}
      fees={{
        "Wallet Download": "Free",
        "Network Fees": "Fully customizable (sat/byte)",
        "Lightning Fees": "Minimal routing fees",
        "Hardware Integration": "Free",
        "Multi-sig Setup": "Free"
      }}
      security={[
        "Fully open-source codebase with 10+ years of community auditing",
        "AES-256 encryption for locally stored private keys",
        "Hardware wallet support (Ledger, Trezor, Coldcard, BitBox, KeepKey)",
        "Two-factor authentication via TrustedCoin plugin",
        "Multi-signature wallet support",
        "Cold storage and watch-only wallet capabilities",
        "Reproducible builds for verification"
      ]}
      features={[
        "Lightweight SPV client with fast setup",
        "Custom transaction fee settings (sat/byte)",
        "Replace-by-fee (RBF) for transaction acceleration",
        "Coin control for UTXO selection",
        "Multi-signature wallet creation and management",
        "Built-in Lightning Network support",
        "Hardware wallet integration",
        "Watch-only and cold storage wallets"
      ]}
      faqs={[
        { question: "Is Electrum good for beginners?", answer: "Electrum is not the best choice for beginners due to its dated interface and the complexity of its advanced features. Beginners looking for a Bitcoin wallet should consider BlueWallet or Exodus for a simpler experience. However, if you are willing to learn, Electrum provides unmatched control over your Bitcoin transactions." },
        { question: "Why does Electrum use its own seed format?", answer: "Electrum uses a custom seed format instead of BIP39 to include version information in the seed, which allows for automatic wallet type detection during recovery. This means Electrum seeds are not directly compatible with BIP39 wallets. You can still import BIP39 seeds into Electrum, but Electrum-generated seeds may not work in other wallets." },
        { question: "Can I use Electrum with a hardware wallet?", answer: "Yes, Electrum has excellent hardware wallet support including Ledger, Trezor, Coldcard, BitBox02, and KeepKey. Many advanced Bitcoin users prefer using Electrum as the interface for their hardware wallet to access features like coin control and custom fees." },
        { question: "Is Electrum safe from phishing attacks?", answer: "Electrum has been targeted by phishing attacks through fake update prompts from malicious Electrum servers. Always download Electrum only from the official website (electrum.org) and verify the GPG signature. Never accept update prompts that appear within the wallet itself — these are known attack vectors." }
      ]}
      relatedReviews={[
        { name: "Sparrow Wallet", slug: "/wallets/reviews/sparrow" },
        { name: "BlueWallet", slug: "/wallets/reviews/blue-wallet" },
        { name: "Wasabi Wallet", slug: "/wallets/reviews/wasabi" }
      ]}
      relatedGuides={[
        { title: "Best Bitcoin Wallets", href: "/wallets/best/bitcoin" },
        { title: "Electrum vs Sparrow", href: "/wallets/compare/electrum-vs-sparrow" },
        { title: "Best Privacy Wallets", href: "/wallets/best/privacy" }
      ]}
    />
  );
}
