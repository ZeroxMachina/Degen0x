import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Mycelium Wallet Review (2026) | degen0x`,
  description: "Detailed Mycelium wallet review covering Bitcoin features, local trader marketplace, hardware wallet support, and privacy features.",
  alternates: { canonical: "/wallets/reviews/mycelium" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Mycelium', },
  ],
};

export default function MyceliumReviewPage() {
  return (
    <>
      <ReviewPage
      product={{
        name: "Mycelium",
        slug: "mycelium",
        rating: 3.7,
        description: "Mycelium is a veteran Bitcoin-focused mobile wallet for Android and iOS, known for its advanced privacy features, local trader marketplace, and hardware wallet integration. It has been a trusted choice for Bitcoin enthusiasts since 2013.",
        pros: [
          "Long-standing reputation in the Bitcoin community since 2013",
          "Advanced privacy features with Tor support",
          "Local trader marketplace for P2P Bitcoin trading",
          "Hardware wallet integration (Trezor, Ledger, KeepKey)",
          "Open-source codebase"
        ],
        cons: [
          "Bitcoin-only — no altcoin support on the core wallet",
          "Interface feels outdated compared to modern wallets",
          "Development pace has slowed in recent years",
          "Local trader feature has limited availability in some regions"
        ],
        fees: "Free; standard BTC network fees",
        bestFor: "Privacy-focused Bitcoin users who want P2P trading capabilities",
        affiliateUrl: "#",
        category: "Crypto Wallets",
      }}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview="Mycelium is one of the oldest and most respected Bitcoin mobile wallets, having served the community since 2013. Originally developed by a team of hardware engineers, Mycelium became known for its robust security model, advanced privacy features, and the unique Local Trader marketplace that enables peer-to-peer Bitcoin trading. The wallet supports hardware wallet integration, HD wallet architecture, and customizable transaction fees. While it lacks altcoin support and its interface has not kept pace with modern design trends, Mycelium remains a solid choice for Bitcoin purists who value privacy and self-custody."
      sections={[
        { id: "features", title: "Core Features", content: "Mycelium provides a comprehensive set of Bitcoin features including HD wallet support with multiple accounts, custom transaction fees, address labeling, and UTXO management. The wallet generates a 12-word BIP39 seed phrase for backup. Watch-only accounts allow you to monitor addresses without exposing private keys. The Local Trader marketplace enables finding nearby Bitcoin buyers and sellers for in-person trades, though availability varies by region." },
        { id: "privacy", title: "Privacy Features", content: "Privacy has always been a core focus of Mycelium. The wallet supports Tor network routing to hide your IP address from network observers. It uses a single-address mode option for enhanced privacy. The Local Trader feature enables face-to-face Bitcoin purchases without exchange KYC requirements. Address reuse warnings help users maintain good privacy practices." },
        { id: "hardware-support", title: "Hardware Wallet Support", content: "Mycelium integrates with several hardware wallets including Trezor, Ledger, and KeepKey. When connected, the hardware device stores private keys while Mycelium provides the mobile interface. This combination allows users to securely manage hardware wallet funds on the go, check balances, and initiate transactions that are then signed on the hardware device." },
        { id: "local-trader", title: "Local Trader Marketplace", content: "The Local Trader feature is a built-in peer-to-peer marketplace for buying and selling Bitcoin locally. Users can browse listings, communicate with traders, and arrange in-person meetings for cash trades. The feature includes a reputation system based on completed trades. While similar services have moved online, Local Trader remains useful in regions where privacy-preserving Bitcoin acquisition is important." },
        { id: "user-experience", title: "User Experience", content: "Mycelium's interface is functional but shows its age. The mobile app works on both Android and iOS, with the Android version generally receiving updates first. Navigation follows a tab-based layout with sections for balance, transactions, accounts, and settings. While the wallet lacks the visual polish of newer alternatives, experienced Bitcoin users appreciate the depth of features accessible through the interface." }
      ]}
      fees={{
        "Wallet Download": "Free",
        "Network Fees": "Customizable (economy, normal, priority)",
        "Local Trader": "No platform fees",
        "Hardware Integration": "Free"
      }}
      security={[
        "Open-source codebase for community verification",
        "12-word BIP39 seed phrase backup",
        "HD wallet architecture with multiple accounts",
        "Hardware wallet support (Trezor, Ledger, KeepKey)",
        "Tor network support for IP privacy",
        "PIN protection for wallet access",
        "Watch-only account support"
      ]}
      features={[
        "Bitcoin-focused mobile wallet for Android and iOS",
        "Local Trader P2P marketplace",
        "Hardware wallet integration",
        "Tor network routing for privacy",
        "HD wallet with multiple accounts",
        "Custom transaction fee settings",
        "Watch-only accounts",
        "BIP39 seed phrase backup"
      ]}
      faqs={[
        { question: "Is Mycelium still actively developed?", answer: "Mycelium continues to receive updates, though the pace of development has slowed compared to its early years. The wallet remains functional and secure, but some users have moved to more actively developed alternatives like BlueWallet or Sparrow for desktop." },
        { question: "Can I use Mycelium for altcoins?", answer: "The core Mycelium wallet is Bitcoin-only. There was a previous attempt to add Ethereum support, but the focus has returned to Bitcoin. If you need multi-chain support, consider alternatives like Exodus or Trust Wallet." },
        { question: "How does Local Trader work?", answer: "Local Trader lets you find Bitcoin buyers and sellers near your location. You can create buy or sell listings with your preferred price and payment method. Traders communicate through the app and arrange to meet in person. The system includes a reputation score based on completed trades to help assess trustworthiness." },
        { question: "Is Mycelium safe?", answer: "Mycelium has a strong security track record spanning over a decade. It is open source, supports hardware wallets, and stores private keys locally on your device. For maximum security, use it in conjunction with a hardware wallet and enable Tor routing for network privacy." }
      ]}
      relatedReviews={[
        { name: "BlueWallet", slug: "/wallets/reviews/blue-wallet" },
        { name: "Electrum", slug: "/wallets/reviews/electrum" },
        { name: "Wasabi Wallet", slug: "/wallets/reviews/wasabi" }
      ]}
      relatedGuides={[
        { title: "Best Bitcoin Wallets", href: "/wallets/best/bitcoin" },
        { title: "Best Privacy Wallets", href: "/wallets/best/privacy" }
      ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Core Features", "description": "Detailed Mycelium wallet review covering Bitcoin features, local trader marketplace, hardware wallet support, and privacy features.", "url": "https://degen0x.com/wallets/reviews/mycelium", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
