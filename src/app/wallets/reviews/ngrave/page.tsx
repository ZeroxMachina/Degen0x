import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NGRAVE Review (${CURRENT_YEAR}) | degen0x`,
  description: "NGRAVE ZERO hardware wallet review covering EAL7 security certification, air-gapped QR signing, biometric authentication, and premium build quality.",
  alternates: { canonical: "/wallets/reviews/ngrave" }};

export default function NgraveReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "NGRAVE",
        slug: "ngrave",
        rating: 4.0,
        description: "NGRAVE ZERO is a premium air-gapped hardware wallet with the highest security certification (EAL7) in the industry. It features biometric authentication, QR code-based signing, a large touchscreen, and supports 1,000+ assets.",
        pros: [
          "Highest security certification (EAL7) of any hardware wallet",
          "Fully air-gapped with QR code communication only",
          "Biometric fingerprint authentication",
          "Large 4-inch color touchscreen",
          "Supports 1,000+ cryptocurrencies"
        ],
        cons: [
          "Very expensive ($398 for ZERO)",
          "Relatively new company with less track record",
          "Firmware is not fully open source",
          "QR-only communication can be slower for complex transactions"
        ],
        fees: "$398",
        bestFor: "Security-conscious users willing to pay a premium for the highest-certified cold storage",
        affiliateUrl: "#",
        category: "Crypto Wallets",
      }}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview="NGRAVE positions itself as the most secure hardware wallet available, and its EAL7 security certification — the highest level achievable — supports that claim. The NGRAVE ZERO operates fully air-gapped, communicating exclusively through QR codes displayed on its 4-inch touchscreen. Unlike most hardware wallets, it has no USB port, no Bluetooth, and no WiFi, making it physically impossible to connect to any network. The device features biometric fingerprint authentication, a light sensor for true random number generation, and a premium metal build. While the price is significantly higher than competitors, NGRAVE targets users who want no compromises on security."
      sections={[
        { id: "security", title: "Security Certification", content: "NGRAVE ZERO holds an EAL7 security certification, the highest level under Common Criteria. For comparison, Ledger's secure element is certified at EAL5+. The EAL7 rating means the device's security has been formally verified and mathematically proven. The secure operating system was co-developed with the COSIC research group at KU Leuven, a world-leading cryptography institution. This level of certification is typically found in military and government applications." },
        { id: "air-gapped", title: "Air-Gapped Design", content: "The ZERO has no ports, no wireless connectivity, and no way to connect to any external device or network. All communication happens through QR codes displayed on the device's screen and scanned by the NGRAVE LIQUID companion app. This eliminates entire categories of attack vectors that exist in hardware wallets with USB, Bluetooth, or NFC connectivity. While this makes the workflow slower, it provides unmatched isolation." },
        { id: "biometric", title: "Biometric Authentication", content: "NGRAVE ZERO includes a fingerprint sensor for biometric authentication. Combined with a PIN code, this provides two-factor authentication directly on the device. The biometric data is processed and stored locally on the secure element and never leaves the device. This prevents unauthorized access even if someone obtains the physical device and learns the PIN." },
        { id: "graphene", title: "GRAPHENE Backup Solution", content: "NGRAVE offers GRAPHENE, a proprietary metal backup solution for seed phrases. It consists of two stainless steel plates: one with a cryptographic puzzle and one with the key. Both plates are needed to recover the seed, adding physical two-factor authentication to your backup. GRAPHENE is designed to withstand fire, water, corrosion, and physical impact." },
        { id: "companion-app", title: "LIQUID Companion App", content: "NGRAVE LIQUID is the companion mobile app (iOS and Android) that communicates with the ZERO via QR codes. It manages your portfolio, displays transaction history, and constructs transactions to be signed by the ZERO. The app supports multiple accounts, real-time portfolio tracking, and integration with decentralized applications. While the app is online-connected, it never has access to your private keys." }
      ]}
      fees={{
        "NGRAVE ZERO": "$398",
        "GRAPHENE Backup": "$79",
        "LIQUID App": "Free",
        "Firmware Updates": "Free",
        "Network Fees": "Standard blockchain fees"
      }}
      security={[
        "EAL7 security certification (highest available)",
        "Fully air-gapped — no ports or wireless connectivity",
        "Biometric fingerprint authentication",
        "Secure element with formally verified firmware",
        "Light sensor for true random number generation",
        "GRAPHENE metal backup system",
        "Co-developed with KU Leuven COSIC research group"
      ]}
      features={[
        "4-inch color touchscreen display",
        "QR code-only communication",
        "Fingerprint sensor for biometric auth",
        "1,000+ supported cryptocurrencies",
        "NGRAVE LIQUID companion app",
        "Metal build construction",
        "GRAPHENE stainless steel backup plates",
        "Multi-account portfolio management"
      ]}
      faqs={[
        { question: "Is NGRAVE worth the high price?", answer: "NGRAVE ZERO is the most expensive mainstream hardware wallet at $398. The price is justified if you prioritize having the highest security certification, full air-gap isolation, and biometric authentication. For most users, a Coldcard or BitBox02 provides excellent security at a lower price point." },
        { question: "What does EAL7 certification mean?", answer: "EAL7 (Evaluation Assurance Level 7) is the highest level of security certification under Common Criteria. It requires the security design to be formally verified and mathematically proven. This is significantly higher than the EAL5+ certification found in Ledger devices." },
        { question: "Can I use NGRAVE without the companion app?", answer: "The ZERO requires the NGRAVE LIQUID companion app (or a compatible third-party app) to construct transactions and broadcast them to the blockchain. The ZERO itself can only sign transactions — it cannot connect to the internet independently." },
        { question: "Is NGRAVE open source?", answer: "NGRAVE is partially open source. The firmware is not fully open source due to the security certification requirements. However, the company has published security audits and works with academic institutions for independent verification." }
      ]}
      relatedReviews={[
        { name: "Coldcard", slug: "/wallets/reviews/coldcard" },
        { name: "ELLIPAL", slug: "/wallets/reviews/ellipal" },
        { name: "Foundation Passport", slug: "/wallets/reviews/foundation" }
      ]}
      relatedGuides={[
        { title: "Best Hardware Wallets", href: "/wallets/best/hardware" },
        { title: "Best Bitcoin Wallets", href: "/wallets/best/bitcoin" }
      ]}
    />
  );
}
