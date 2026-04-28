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
  title: `Foundation Passport Review (2026) | degen0x`,
  description: "Foundation Passport hardware wallet review covering open-source design, air-gapped QR signing, premium build quality, and Bitcoin-focused features.",
  alternates: { canonical: "/wallets/reviews/foundation" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Foundation', },
  ],
};

export default function FoundationReviewPage() {
  return (
    <>
      <ReviewSchema
        itemName="Foundation Passport Review (2026)"
        url="https://degen0x.com/wallets/reviews/foundation"
        rating={4.0}
        datePublished="2024-06-01"
        dateModified="2026-04-17"
      />
      <ReviewPage
      product={{
        name: "Foundation Passport",
        slug: "foundation",
        rating: 4.2,
        description: "Foundation Passport is a premium, open-source Bitcoin hardware wallet with air-gapped QR code signing, a large color display, secure element, and a beautifully crafted industrial design. Made in the USA.",
        pros: [
          "Fully open-source hardware and firmware",
          "Air-gapped QR code communication via built-in camera",
          "Premium build quality with aluminum chassis",
          "Secure element combined with open-source design",
          "Excellent companion app (Envoy)"
        ],
        cons: [
          "Bitcoin-only — no altcoin support",
          "Higher price point ($249)",
          "Battery life is moderate",
          "Smaller ecosystem than Ledger/Trezor"
        ],
        fees: "$249",
        bestFor: "Bitcoin users who want premium open-source hardware with air-gapped security",
        affiliateUrl: "#",
        category: "Crypto Wallets",
      }}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview="Foundation Passport stands out as one of the few hardware wallets that is both fully open source and equipped with a secure element. Designed and assembled in the USA, Passport features a premium aluminum chassis, large color display, built-in camera for air-gapped QR code communication, and a user-friendly companion app called Envoy. The device is Bitcoin-only, reflecting a focused approach to minimizing attack surface. Foundation has earned respect in the Bitcoin community for its commitment to transparency, with both hardware schematics and firmware source code published openly."
      sections={[
        { id: "open-source", title: "Open-Source Philosophy", content: "Foundation publishes everything: hardware schematics, firmware source code, and mechanical designs. This level of transparency is rare in the hardware wallet industry. The community can verify every aspect of the device, from the circuit board layout to the cryptographic implementation. Reproducible builds allow anyone to compile the firmware and verify it matches the distributed version." },
        { id: "air-gapped", title: "Air-Gapped Communication", content: "Passport communicates exclusively through QR codes using its built-in camera and display. No USB data, no Bluetooth, no WiFi. To sign a transaction, scan the QR code from your companion wallet with Passport's camera, verify the details on the color display, approve, and scan the signed QR code back. This air-gapped workflow eliminates digital attack vectors while maintaining usability." },
        { id: "envoy-app", title: "Envoy Companion App", content: "Envoy is Foundation's companion mobile app that provides a clean, intuitive interface for managing your Passport wallet. It handles transaction construction, address verification, firmware updates, and Bitcoin purchasing. Envoy communicates with Passport via QR codes and can also connect to your own Bitcoin node for privacy. The app itself is also open source." },
        { id: "build-quality", title: "Build Quality", content: "Passport features a CNC-machined aluminum chassis that feels distinctly premium. The large color display provides clear transaction information. Physical navigation buttons offer tactile feedback. The device is assembled in the USA with quality control standards that are apparent in the fit and finish. A rechargeable battery allows portable use, and the camera enables QR scanning without any cable connections." },
        { id: "security", title: "Security Architecture", content: "Passport combines a secure element (ATECC608B) with an open-source MCU. The secure element stores the master key and handles sensitive cryptographic operations. Anti-tamper mechanisms protect against physical attacks. The device validates firmware signatures on boot to prevent unauthorized modifications. Supply chain security is maintained through serialized devices with secure packaging." }
      ]}
      fees={{ "Passport": "$249", "Envoy App": "Free", "Firmware Updates": "Free", "Network Fees": "Standard Bitcoin fees" }}
      security={["Fully open-source hardware and firmware", "Secure element (ATECC608B)", "Air-gapped QR-only communication", "Anti-tamper protection", "Firmware signature verification on boot", "Reproducible builds", "Supply chain security with serialized packaging"]}
      features={["Air-gapped QR code signing via built-in camera", "Large color display", "Premium aluminum chassis", "Envoy companion app (open source)", "Secure element + open-source firmware", "Bitcoin-only focus", "PSBT support for multisig", "Made in the USA"]}
      faqs={[
        { question: "How does Passport compare to Coldcard?", answer: "Both are Bitcoin-only and open source with air-gapped capabilities. Coldcard uses microSD for communication while Passport uses QR codes. Passport has a more premium build quality and the Envoy app is more beginner-friendly. Coldcard offers more advanced features like trick PINs and seed XOR. Passport is pricier but offers a more polished experience." },
        { question: "Can I use Passport with Sparrow Wallet?", answer: "Yes. Passport works excellently with Sparrow Wallet via QR code communication. Many Bitcoin users pair Passport with Sparrow for its advanced coin control and transaction visualization features. This is one of the most popular wallet combinations in the Bitcoin community." },
        { question: "Is Passport beginner-friendly?", answer: "Passport is more approachable than Coldcard thanks to its clean interface, color display, and the Envoy companion app. However, understanding air-gapped QR workflows still requires some learning. For absolute beginners, a simpler wallet like Ledger might be easier to start with." },
        { question: "Does Passport support multisig?", answer: "Yes. Passport supports PSBT-based multisig and works with coordinators like Sparrow, Nunchuk, and Caravan. You can include Passport in M-of-N multisig setups with other hardware wallets." }
      ]}
      relatedReviews={[
        { name: "Coldcard", slug: "/wallets/reviews/coldcard" },
        { name: "Blockstream Jade", slug: "/wallets/reviews/jade" },
        { name: "BitBox02", slug: "/wallets/reviews/bitbox" }
      ]}
      relatedGuides={[
        { title: "Best Bitcoin Wallets", href: "/wallets/best/bitcoin" },
        { title: "Best Hardware Wallets", href: "/wallets/best/hardware" }
      ]}
    />
      <ArticleSchema
        headline="Foundation Passport Review (2026) | degen0x"
        description="Foundation Passport hardware wallet review covering open-source design, air-gapped QR signing, premium build quality, and Bitcoin-focused features."
        url="https://degen0x.com/wallets/reviews/foundation"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Reviews"
      />
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/wallets/reviews/foundation" />
        <ReadingTime />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Open-Source Philosophy", "description": "Foundation Passport hardware wallet review covering open-source design, air-gapped QR signing, premium build quality, and Bitcoin-focused features.", "url": "https://degen0x.com/wallets/reviews/foundation", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
