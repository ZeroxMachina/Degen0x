import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Arculus Review (${CURRENT_YEAR}) | degen0x`,
  description: "Arculus cold storage card review covering NFC-based security, credit card form factor, multi-chain support, and three-factor authentication.",
  alternates: { canonical: "/wallets/reviews/arculus" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Arculus', },
  ],
};

export default function ArculusReviewPage() {
  return (
    <>
      <ReviewPage
      product={{
        name: "Arculus",
        slug: "arculus",
        rating: 3.8,
        description: "Arculus is a credit card-sized cold storage wallet that connects via NFC tap to your smartphone. It features three-factor authentication, EAL6+ secure element, and supports multiple blockchains including Bitcoin, Ethereum, and Solana.",
        pros: [
          "Credit card form factor — extremely portable",
          "NFC tap-to-sign via smartphone",
          "Three-factor authentication (card + PIN + biometric)",
          "EAL6+ certified secure element",
          "No battery required — powered by NFC"
        ],
        cons: [
          "Limited feature set compared to full hardware wallets",
          "Requires smartphone with NFC for all operations",
          "Smaller supported asset list",
          "Not open source"
        ],
        fees: "$99",
        bestFor: "Users wanting ultra-portable cold storage with smartphone-based convenience",
        affiliateUrl: "#",
        category: "Crypto Wallets",
      }}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview="Arculus reimagines hardware wallet design by shrinking cold storage into a credit card form factor. The metal card contains an EAL6+ certified secure element and communicates with your smartphone via NFC. To approve transactions, you tap the card against your phone — no USB cables, no Bluetooth pairing, no charging. The companion app provides three-factor authentication combining the physical card, a PIN, and biometric verification. While it lacks the advanced features of traditional hardware wallets, Arculus excels in portability and convenience, fitting seamlessly into a regular wallet alongside credit cards."
      sections={[
        { id: "form-factor", title: "Card Form Factor", content: "Arculus is made of metal and shaped exactly like a standard credit card. It fits in any wallet, card holder, or pocket. The card has no battery, no screen, and no buttons — all interaction happens through NFC communication with your smartphone. This design makes it the most portable cold storage solution available, and it is far more discreet than traditional hardware wallets." },
        { id: "authentication", title: "Three-Factor Authentication", content: "Arculus implements three-factor authentication for every transaction: something you have (the physical card), something you know (your PIN), and something you are (biometric via your phone's Face ID or fingerprint). All three factors are required to approve a transaction, making unauthorized access extremely difficult even if someone obtains the card or compromises your phone." },
        { id: "nfc-security", title: "NFC Security", content: "The card communicates with the companion app via NFC. Each transaction requires a physical tap of the card against the phone. The NFC communication is encrypted and the secure element handles all cryptographic operations. Since NFC requires close proximity, remote attacks are not possible. The EAL6+ certification ensures the secure element meets stringent security standards." },
        { id: "supported-chains", title: "Supported Chains", content: "Arculus supports Bitcoin, Ethereum, Solana, Polygon, Avalanche, and various ERC-20 tokens. The list is smaller than Ledger or Trezor but covers the major ecosystems. The companion app provides basic portfolio management, sending, and receiving functionality." },
        { id: "user-experience", title: "User Experience", content: "Setup involves downloading the app, tapping the card to pair, setting a PIN, and backing up the recovery phrase. Daily use is simple: open the app, prepare a transaction, and tap the card to sign. The tap-to-sign experience is fast and intuitive. The main limitation is that all wallet management must happen through the smartphone app — there is no desktop interface." }
      ]}
      fees={{ "Arculus Card": "$99", "Companion App": "Free", "Network Fees": "Standard blockchain fees" }}
      security={["EAL6+ certified secure element", "Three-factor authentication (card + PIN + biometric)", "NFC-only communication (close proximity required)", "No battery, Bluetooth, or WiFi", "Encrypted NFC transactions", "Metal card construction", "BIP39 seed phrase backup"]}
      features={["Credit card form factor", "NFC tap-to-sign", "Three-factor authentication", "No charging required", "Multi-chain support", "iOS and Android companion app", "Portfolio management", "Metal construction"]}
      faqs={[
        { question: "Can Arculus replace a traditional hardware wallet?", answer: "Arculus provides cold storage security in a more portable form factor, but it lacks advanced features like coin control, multisig, and large asset support. It is best as a portable complement to a full-featured hardware wallet, or as a primary wallet for users who prioritize convenience." },
        { question: "What if I lose the Arculus card?", answer: "Your funds can be recovered using the BIP39 seed phrase on any compatible wallet or a new Arculus card. The three-factor authentication means a lost card alone cannot be used to access your funds without the PIN and biometric." },
        { question: "Does Arculus work with all phones?", answer: "Arculus requires a smartphone with NFC capability. Most modern Android phones and iPhone 7 and later support NFC. The companion app is available on both iOS and Android." },
        { question: "Is NFC secure for crypto transactions?", answer: "NFC requires physical proximity of a few centimeters, making remote interception virtually impossible. The communication is encrypted, and the secure element handles all cryptographic operations. NFC-based signing is considered secure for hardware wallet use." }
      ]}
      relatedReviews={[
        { name: "D'CENT", slug: "/wallets/reviews/dcent" },
        { name: "ELLIPAL", slug: "/wallets/reviews/ellipal" },
        { name: "KeepKey", slug: "/wallets/reviews/keepkey" }
      ]}
      relatedGuides={[
        { title: "Best Hardware Wallets", href: "/wallets/best/hardware" },
        { title: "Best Wallets for Beginners", href: "/wallets/best/beginners" }
      ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Card Form Factor", "description": "Arculus cold storage card review covering NFC-based security, credit card form factor, multi-chain support, and three-factor authentication.", "url": "https://degen0x.com/wallets/reviews/arculus", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
