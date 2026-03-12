import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `BitBox02 Review (${CURRENT_YEAR}) | degen0x`,
  description: "BitBox02 hardware wallet review covering Swiss security, open-source firmware, minimalist design, and Bitcoin-only edition features.",
};

export default function BitBoxReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "BitBox02",
        slug: "bitbox",
        rating: 4.1,
        description: "BitBox02 is a Swiss-made hardware wallet from Shift Crypto featuring open-source firmware, a secure element chip, USB-C connectivity, and a unique touch-slider interface. Available in Multi edition and Bitcoin-only edition.",
        pros: [
          "Fully open-source firmware with reproducible builds",
          "Secure element chip combined with open-source design",
          "Minimalist, discreet design smaller than a USB stick",
          "Dedicated Bitcoin-only edition with reduced attack surface",
          "Excellent companion app (BitBoxApp)"
        ],
        cons: [
          "Limited coin support compared to Ledger",
          "No Bluetooth — USB-C only",
          "Smaller community and ecosystem",
          "Touch slider interface takes some getting used to"
        ],
        fees: "$149 (Multi), $129 (Bitcoin-only)",
        bestFor: "Privacy-conscious users who want open-source security with a secure element",
        affiliateUrl: "#",
        category: "Crypto Wallets",
      }}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview="BitBox02 by Swiss company Shift Crypto is one of the few hardware wallets that combines a secure element chip with fully open-source firmware. This addresses a common criticism of hardware wallets: Ledger uses a secure element but has closed-source firmware, while Trezor is open source but lacks a secure element. BitBox02 provides both. The device comes in two editions: Multi (supporting Bitcoin, Ethereum, Litecoin, and Cardano) and Bitcoin-only (which literally cannot run altcoin firmware). The companion BitBoxApp provides a clean interface for managing your assets, connecting to your own node, and purchasing crypto."
      sections={[
        { id: "security-model", title: "Security Model", content: "BitBox02's dual-chip architecture uses both a secure element (ATECC608B) for key storage and a general-purpose microcontroller for wallet logic. The firmware for both chips is open source and supports reproducible builds, meaning anyone can verify that the distributed firmware matches the published source code. This combination provides the physical security benefits of a secure element with the transparency guarantees of open-source software — a balance that is unique in the hardware wallet space." },
        { id: "bitcoin-only", title: "Bitcoin-Only Edition", content: "The Bitcoin-only edition is firmware-restricted to support only Bitcoin. It physically cannot be updated to run multi-coin firmware, meaning the codebase is simpler with a smaller attack surface. For Bitcoin maximalists, this provides peace of mind that no altcoin-related code could potentially introduce vulnerabilities. The Bitcoin-only edition is typically priced lower than the Multi edition." },
        { id: "companion-app", title: "BitBoxApp", content: "The BitBoxApp is available for Windows, macOS, Linux, and Android. It provides a clean, well-designed interface for managing your hardware wallet. Features include account management, transaction history, coin control, and direct crypto purchasing through integrated partners. The app supports connecting to your own Bitcoin full node via Electrum server for enhanced privacy. Tor proxy support is also available." },
        { id: "design", title: "Design & Interface", content: "BitBox02 is remarkably compact — roughly the size of a USB stick. It plugs directly into a USB-C port (adapter included for USB-A). The device features invisible touch sensors along the edges for navigation: slide to select, tap to confirm, and hold to go back. A small OLED screen displays transaction details for verification. The minimalist design is discreet and portable, though the touch-slider interface has a learning curve." },
        { id: "backup-recovery", title: "Backup & Recovery", content: "BitBox02 supports two backup methods: the included microSD card for encrypted backup and a standard BIP39 seed phrase. The microSD backup is the simplest method — insert the card during setup, and the wallet is automatically backed up. For recovery, insert the microSD card into a new BitBox02 and restore instantly. The optional seed phrase backup provides compatibility with other BIP39 wallets if needed." }
      ]}
      fees={{
        "BitBox02 Multi": "$149",
        "BitBox02 Bitcoin-only": "$129",
        "BitBoxApp": "Free",
        "Firmware Updates": "Free",
        "Network Fees": "Standard blockchain fees"
      }}
      security={[
        "Secure element chip (ATECC608B) for key storage",
        "Fully open-source firmware with reproducible builds",
        "Bitcoin-only edition with reduced attack surface",
        "Encrypted microSD card backup",
        "Anti-tampering device attestation",
        "Touch confirmation for transaction signing",
        "Connect to your own full node for privacy"
      ]}
      features={[
        "Dual-chip architecture: secure element + microcontroller",
        "Bitcoin-only and Multi editions",
        "USB-C direct connection",
        "Invisible touch slider interface",
        "MicroSD card backup and recovery",
        "BitBoxApp for desktop and Android",
        "Own node connectivity via Electrum server",
        "Tor proxy support"
      ]}
      faqs={[
        { question: "Should I get the Multi or Bitcoin-only edition?", answer: "If you only hold Bitcoin, the Bitcoin-only edition provides a smaller attack surface and is cheaper. If you hold Ethereum, Litecoin, or Cardano alongside Bitcoin, the Multi edition supports all of these. You cannot switch between editions — the firmware is locked at manufacturing." },
        { question: "How does BitBox02 compare to Ledger?", answer: "BitBox02 offers fully open-source firmware while Ledger's is closed source. Ledger supports far more cryptocurrencies. BitBox02 is more compact and plugs directly into USB-C. Both use secure elements. For privacy and transparency, BitBox02 wins. For ecosystem breadth, Ledger wins." },
        { question: "What if I lose my microSD card backup?", answer: "If you also wrote down your BIP39 seed phrase, you can recover your wallet using any BIP39-compatible wallet. If you only used the microSD backup, you should make a copy of the card and store it in a separate secure location. The backup is encrypted and requires a BitBox02 device for restoration." },
        { question: "Does BitBox02 work with third-party wallets?", answer: "Yes. BitBox02 is compatible with Sparrow Wallet, Electrum, and other wallets that support standard hardware wallet protocols. The BitBoxApp is the primary companion but not the only option." }
      ]}
      relatedReviews={[
        { name: "Coldcard", slug: "/wallets/reviews/coldcard" },
        { name: "Blockstream Jade", slug: "/wallets/reviews/jade" },
        { name: "Foundation Passport", slug: "/wallets/reviews/foundation" }
      ]}
      relatedGuides={[
        { title: "Best Hardware Wallets", href: "/wallets/best/hardware" },
        { title: "Trezor vs BitBox", href: "/wallets/compare/trezor-vs-bitbox" },
        { title: "Best Bitcoin Wallets", href: "/wallets/best/bitcoin" }
      ]}
    />
  );
}
