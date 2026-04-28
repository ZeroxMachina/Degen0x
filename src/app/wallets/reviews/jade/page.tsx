import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";
import MethodologyBlock from '@/components/MethodologyBlock';

import ArticleSchema from "@/components/ArticleSchema";

import AuthoritySources from "@/components/AuthoritySources";

import ReviewSchema from "@/components/ReviewSchema";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: `Blockstream Jade Review (2026) | degen0x`,
  description: "Blockstream Jade hardware wallet review covering security model, air-gapped signing, Liquid Network support, and value proposition.",
  alternates: { canonical: "/wallets/reviews/jade" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Jade', },
  ],
};

export default function JadeReviewPage() {
  return (
    <>
      <ReviewSchema
        itemName="Blockstream Jade Review (2026)"
        url="https://degen0x.com/wallets/reviews/jade"
        rating={4.0}
        datePublished="2024-06-01"
        dateModified="2026-04-17"
      />
      <ReviewPage
      product={{
        name: "Blockstream Jade",
        slug: "jade",
        rating: 4.0,
        description: "Blockstream Jade is an affordable, open-source hardware wallet supporting Bitcoin and the Liquid Network. It features a unique virtual secure element, camera for QR-based air-gapped signing, and a color display.",
        pros: [
          "Very affordable hardware wallet option",
          "Fully open-source hardware and firmware",
          "Air-gapped QR code signing via built-in camera",
          "Supports Bitcoin and Liquid Network",
          "Color display for transaction verification"
        ],
        cons: [
          "No secure element chip — uses virtual secure element model",
          "Limited to Bitcoin and Liquid only",
          "Smaller ecosystem compared to Ledger or Trezor",
          "Battery life could be better for portable use"
        ],
        fees: "$64.99",
        bestFor: "Bitcoin enthusiasts who want an affordable, open-source hardware wallet",
        affiliateUrl: "#",
        category: "Crypto Wallets",
      }}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview="Blockstream Jade is a hardware wallet developed by Blockstream, a leading Bitcoin infrastructure company. What sets Jade apart is its commitment to being fully open source — both hardware schematics and firmware are publicly available for review. Instead of a traditional secure element chip, Jade uses a unique virtual secure element model that requires a server-side oracle for PIN verification, adding a novel security layer. The built-in camera enables fully air-gapped QR code-based transaction signing. Supporting both Bitcoin and the Liquid Network, Jade is an excellent budget-friendly option for Bitcoin-focused users who value open-source transparency."
      sections={[
        { id: "security-model", title: "Security Model — Wallets (wallets / reviews / jade)", content: "Jade's security model differs from traditional hardware wallets. Instead of storing seeds on a dedicated secure element chip, Jade uses a virtual secure element approach where the seed is encrypted and requires interaction with a Blockstream server (blind oracle) to decrypt. This means the server cannot access your keys (it never sees them), and the device cannot be used without server verification. The model provides protection against physical attacks while maintaining an open-source design, since secure element chips typically require closed-source firmware." },
        { id: "air-gapped", title: "Air-Gapped Signing", content: "The built-in camera on Jade enables fully air-gapped transaction signing using QR codes. You can use Jade with companion apps like Sparrow Wallet or Nunchuk without ever connecting via USB or Bluetooth. Scan the transaction QR code with Jade's camera, verify the details on the color display, approve the transaction, and then scan the signed transaction QR code back to your computer. This air-gapped workflow eliminates USB-based attack vectors." },
        { id: "liquid-network", title: "Liquid Network Support", content: "Jade is one of the few hardware wallets that supports Blockstream's Liquid Network, a Bitcoin sidechain designed for faster settlements and confidential transactions. Through the Blockstream Green companion app, you can manage both Bitcoin mainchain and Liquid assets on the same device. This includes L-BTC and Liquid-issued assets. For users involved in the Liquid ecosystem, Jade is the natural hardware wallet choice." },
        { id: "companion-apps", title: "Companion Apps", content: "Jade works with several companion applications. Blockstream Green is the primary companion app, offering full Bitcoin and Liquid wallet management. Sparrow Wallet provides advanced Bitcoin features with Jade's hardware security. Nunchuk supports Jade for multisig setups. The wallet communicates via USB-C or Bluetooth, with QR code air-gap available as the most secure option." },
        { id: "build-quality", title: "Build Quality & Design", content: "Jade features a compact, lightweight design with a color IPS display and built-in camera. The device has a rechargeable battery for wireless use, though battery life is moderate. The directional pad and select button provide navigation through the on-device interface. Build quality is solid for the price point, and the color display makes transaction verification clear and readable." }
      ]}
      fees={{
        "Device Price": "$64.99",
        "Firmware Updates": "Free",
        "Companion Apps": "Free",
        "Network Fees": "Standard Bitcoin/Liquid fees"
      }}
      security={[
        "Fully open-source hardware and firmware",
        "Virtual secure element with blind oracle PIN verification",
        "Air-gapped QR code transaction signing",
        "Color display for transaction verification",
        "PIN protection with anti-exfil protocol",
        "Compatible with multisig setups",
        "No closed-source secure element dependencies"
      ]}
      features={[
        "Bitcoin and Liquid Network support",
        "Built-in camera for QR-based air-gapped signing",
        "Color IPS display",
        "USB-C and Bluetooth connectivity",
        "Works with Blockstream Green, Sparrow, Nunchuk",
        "Rechargeable battery for portable use",
        "Fully open-source design",
        "Multisig compatible via PSBT"
      ]}
      faqs={[
        { question: "Is Jade safe without a secure element?", answer: "Jade uses a virtual secure element model that provides strong security through a different approach. The blind oracle server cannot access your keys but is required for PIN verification, preventing brute-force attacks on a stolen device. The open-source nature allows full security auditing, which is not possible with closed-source secure element firmware." },
        { question: "What happens if Blockstream servers go down?", answer: "Blockstream has published the oracle server code, allowing anyone to run their own instance. Additionally, Jade supports emergency recovery without the oracle using your seed phrase. The community can maintain the infrastructure independently of Blockstream." },
        { question: "Can I use Jade with wallets other than Blockstream Green?", answer: "Yes. Jade works with Sparrow Wallet, Nunchuk, and other wallets that support standard Bitcoin hardware wallet protocols. The air-gapped QR signing is particularly popular with Sparrow Wallet users." },
        { question: "How does Jade compare to Ledger or Trezor?", answer: "Jade is significantly cheaper and fully open source, which are major advantages. Ledger and Trezor have larger ecosystems and support more cryptocurrencies. For Bitcoin-focused users who value open-source transparency and affordability, Jade is an excellent choice." }
      ]}
      relatedReviews={[
        { name: "Coldcard", slug: "/wallets/reviews/coldcard" },
        { name: "Foundation Passport", slug: "/wallets/reviews/foundation" },
        { name: "BitBox02", slug: "/wallets/reviews/bitbox" }
      ]}
      relatedGuides={[
        { title: "Best Bitcoin Wallets", href: "/wallets/best/bitcoin" },
        { title: "Best Hardware Wallets", href: "/wallets/best/hardware" }
      ]}
    />
      <ArticleSchema
        headline="Blockstream Jade Review (2026) | degen0x"
        description="Blockstream Jade hardware wallet review covering security model, air-gapped signing, Liquid Network support, and value proposition."
        url="https://degen0x.com/wallets/reviews/jade"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Reviews"
      />
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/wallets/reviews/jade" />
        <ReadingTime />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Security Model", "description": "Blockstream Jade hardware wallet review covering security model, air-gapped signing, Liquid Network support, and value proposition.", "url": "https://degen0x.com/wallets/reviews/jade", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
