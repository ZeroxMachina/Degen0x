import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";
import MethodologyBlock from '@/components/MethodologyBlock';

export const metadata: Metadata = {
  title: `Coldcard Review (2026) | degen0x`,
  description: "Coldcard hardware wallet review covering air-gapped security, advanced Bitcoin features, seed management, and why it is the gold standard for Bitcoin cold",
  alternates: { canonical: "/wallets/reviews/coldcard" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Coldcard', },
  ],
};

export default function ColdcardReviewPage() {
  return (
    <>
      <ReviewPage
      product={{
        name: "Coldcard",
        slug: "coldcard",
        rating: 4.4,
        description: "Coldcard is a Bitcoin-only hardware wallet considered the gold standard for cold storage security. It features air-gapped operation via microSD, dual secure elements, and advanced features like seed XOR, trick PINs, and multisig support.",
        pros: [
          "Fully air-gapped operation via microSD — never needs USB connection",
          "Dual secure element chips for maximum key protection",
          "Advanced security features: trick PINs, duress wallet, seed XOR",
          "Extensive PSBT support for complex transaction workflows",
          "Open-source firmware with strong community trust"
        ],
        cons: [
          "Bitcoin-only — no altcoin support",
          "Steep learning curve for beginners",
          "Industrial design prioritizes function over aesthetics",
          "No Bluetooth or mobile companion app"
        ],
        fees: "$157.94 (Mk4)",
        bestFor: "Security-focused Bitcoin maximalists who want the most secure cold storage available",
        affiliateUrl: "#",
        category: "Crypto Wallets",
      }}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview="Coldcard, manufactured by Coinkite, is widely regarded as the most secure Bitcoin hardware wallet available. Its design philosophy is simple: minimize attack surface and maximize security. The device operates fully air-gapped through microSD card-based PSBT workflows, meaning it never needs to connect to a computer via USB. Dual secure element chips protect your private keys, while features like trick PINs, duress wallets, brick-me PINs, and seed XOR splitting provide layers of protection against physical threats. While the learning curve is steeper than consumer-friendly wallets, Coldcard is the top choice for users who prioritize security above all else."
      sections={[
        { id: "air-gapped", title: "Air-Gapped Operation", content: "Coldcard's fully air-gapped operation is its defining feature. Transactions are loaded onto the device via microSD card as PSBT files, signed on the device, and then transferred back via microSD. The device never needs to be connected to a computer, eliminating USB-based attack vectors entirely. You can use Coldcard with companion wallets like Sparrow, Electrum, or Nunchuk — prepare the transaction on your computer, save to microSD, sign on Coldcard, and broadcast." },
        { id: "security-features", title: "Advanced Security Features", content: "Coldcard offers an unmatched array of security features. Trick PINs allow you to set up multiple PIN codes that trigger different actions — one shows a decoy wallet, another wipes the device, and another reveals the real wallet. The duress wallet provides a separate wallet with a small balance for coercion scenarios. Seed XOR allows splitting your seed into multiple parts that must be combined to reconstruct the master key. The brick-me PIN permanently destroys the secure element if entered." },
        { id: "multisig", title: "Multisig & PSBT", content: "Coldcard has best-in-class PSBT support, making it ideal for multisig setups. The device can participate in M-of-N multisig configurations with other Coldcards or compatible hardware wallets. It verifies all PSBT fields and displays detailed transaction information on the built-in screen. The microSD-based workflow makes passing PSBTs between multiple signing devices straightforward, even across different physical locations." },
        { id: "seed-management", title: "Seed Management", content: "Coldcard provides sophisticated seed management options. You can generate seeds using its true random number generator, import existing BIP39 seeds, or roll physical dice for entropy. The Seed XOR feature splits your seed across multiple parts, each of which looks like a valid seed on its own. BIP85 support allows deriving child seeds for different applications from a single master seed, keeping your seed hierarchy organized and secure." },
        { id: "companion-software", title: "Companion Software", content: "Coldcard works with several desktop wallets through PSBT and microSD. Sparrow Wallet is the most popular companion, offering excellent Coldcard integration with detailed transaction visualization. Electrum provides a lighter-weight option. Nunchuk specializes in multisig coordination with Coldcard. The Coldcard itself shows transaction details on its screen for verification, but companion software provides the full wallet management interface." }
      ]}
      fees={{
        "Coldcard Mk4": "$157.94",
        "Coldcard Q": "$239.99",
        "Firmware Updates": "Free",
        "MicroSD Cards": "Not included",
        "Network Fees": "Standard Bitcoin fees"
      }}
      security={[
        "Fully air-gapped operation via microSD",
        "Dual secure element chips (ATECC608B)",
        "Trick PINs for decoy wallets and device wiping",
        "Duress wallet for coercion scenarios",
        "Seed XOR for seed splitting across multiple parts",
        "Brick-me PIN for permanent secure element destruction",
        "Open-source firmware with community auditing",
        "Supply chain verification via bag numbering"
      ]}
      features={[
        "Fully air-gapped microSD-based PSBT signing",
        "Dual secure element architecture",
        "Trick PINs and duress wallet",
        "Seed XOR splitting",
        "BIP85 child seed derivation",
        "Dice rolling for seed generation entropy",
        "NFC support on Mk4 and Q models",
        "Full QWERTY keyboard on Coldcard Q"
      ]}
      faqs={[
        { question: "Is Coldcard the most secure hardware wallet?", answer: "Coldcard is widely considered the most secure Bitcoin hardware wallet due to its fully air-gapped operation, dual secure elements, and advanced security features like trick PINs and seed XOR. Its Bitcoin-only focus means a smaller attack surface compared to multi-coin wallets." },
        { question: "Do I need to plug Coldcard into my computer?", answer: "No. Coldcard can operate completely air-gapped using microSD cards to transfer transaction data. You never need to connect it via USB, though USB connection is available if preferred for initial setup or firmware updates." },
        { question: "What is the difference between Coldcard Mk4 and Q?", answer: "The Coldcard Q features a larger color screen, full QWERTY keyboard, QR code scanner, and USB-C. The Mk4 has a smaller screen with numeric keypad and micro-USB. Both share the same security model with dual secure elements. The Q is designed for a more comfortable user experience." },
        { question: "Can I use Coldcard for multisig?", answer: "Yes, Coldcard excels at multisig. It supports M-of-N configurations with detailed PSBT handling. You can combine multiple Coldcards or mix with other hardware wallets that support PSBT. The microSD workflow makes passing partially signed transactions between devices straightforward." }
      ]}
      relatedReviews={[
        { name: "Blockstream Jade", slug: "/wallets/reviews/jade" },
        { name: "Foundation Passport", slug: "/wallets/reviews/foundation" },
        { name: "BitBox02", slug: "/wallets/reviews/bitbox" }
      ]}
      relatedGuides={[
        { title: "Best Bitcoin Wallets", href: "/wallets/best/bitcoin" },
        { title: "Ledger vs Coldcard", href: "/wallets/compare/ledger-vs-coldcard" },
        { title: "Best Hardware Wallets", href: "/wallets/best/hardware" }
      ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Air-Gapped Operation", "description": "Coldcard hardware wallet review covering air-gapped security, advanced Bitcoin features, seed management, and why it is the gold standard for Bitcoin cold", "url": "https://degen0x.com/wallets/reviews/coldcard", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/wallets/reviews/arculus" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Arculus</a>
  <a href="/wallets/reviews/argent" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Argent</a>
  <a href="/wallets/reviews/atomic" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Atomic</a>
  <a href="/wallets/reviews/backpack-wallet" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Backpack Wallet</a>
  <a href="/wallets/reviews/bc-vault" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bc Vault</a>
  <a href="/wallets/reviews/binance-web3-wallet" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Binance Web3 Wallet</a>
  <a href="/wallets/reviews/bitbox" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitbox</a>
  <a href="/wallets/reviews/bitget-wallet" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitget Wallet</a>
</nav>
      <MethodologyBlock variant="review" />
      </>
  );
}
