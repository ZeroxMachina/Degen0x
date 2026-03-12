import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `ELLIPAL Review (${CURRENT_YEAR}) | degen0x`,
  description: "ELLIPAL Titan hardware wallet review covering air-gapped QR code security, large touchscreen, multi-chain support, and anti-tamper design.",
};

export default function EllipalReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "ELLIPAL",
        slug: "ellipal",
        rating: 3.8,
        description: "ELLIPAL Titan is an air-gapped hardware wallet with a large color touchscreen that communicates exclusively through QR codes. It supports 10,000+ assets and features anti-tamper self-destruct protection.",
        pros: [
          "Fully air-gapped — QR code only, no USB/Bluetooth/WiFi",
          "Large 4-inch color touchscreen for easy navigation",
          "Anti-tamper design that erases keys if opened",
          "Supports 10,000+ coins and tokens",
          "Affordable compared to other air-gapped wallets"
        ],
        cons: [
          "Not open source — limits independent verification",
          "QR-based workflow can be slow",
          "App required for all blockchain interactions",
          "Less established reputation than Ledger or Trezor"
        ],
        fees: "$169",
        bestFor: "Users wanting an affordable air-gapped wallet with touchscreen and broad asset support",
        affiliateUrl: "#",
        category: "Crypto Wallets",
      }}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview="ELLIPAL Titan is a fully air-gapped hardware wallet that has no USB ports, no Bluetooth, and no WiFi. All communication with the companion app occurs through QR codes scanned by the device's camera or displayed on its screen. The device features a large 4-inch color touchscreen, supports over 10,000 cryptocurrencies, and includes anti-tamper protection that erases private keys if the device casing is breached. While not as well-known as Ledger or Trezor, ELLIPAL offers a compelling combination of air-gapped security, broad asset support, and an accessible price point."
      sections={[
        { id: "air-gapped", title: "Air-Gapped Security", content: "ELLIPAL Titan's metal casing is completely sealed with no ports. The device communicates with the ELLIPAL companion app exclusively through QR codes. To sign a transaction, the app generates a QR code, the Titan scans it with its camera, signs the transaction offline, and displays a signed QR code for the app to scan back. This total network isolation prevents remote attacks of any kind." },
        { id: "anti-tamper", title: "Anti-Tamper Protection", content: "The Titan features physical anti-tamper mechanisms. If someone attempts to open the device casing, the private keys are automatically erased. This protects against supply chain attacks and physical theft scenarios. The device also verifies firmware integrity on each boot to detect unauthorized modifications." },
        { id: "multi-chain", title: "Multi-Chain Support", content: "ELLIPAL supports an extensive list of blockchains and tokens, covering over 10,000 assets. This includes Bitcoin, Ethereum, Solana, Cardano, Polkadot, and virtually every major blockchain ecosystem. The companion app provides staking for supported PoS assets and integration with DeFi protocols through WalletConnect." },
        { id: "companion-app", title: "Companion App", content: "The ELLIPAL app (iOS and Android) serves as the primary interface for managing your hardware wallet. It displays your portfolio, constructs transactions, provides market data, and supports staking and DeFi access. The app never has access to your private keys — all signing happens on the Titan device. The app also supports account management for multiple wallets." },
        { id: "user-experience", title: "User Experience", content: "The large touchscreen makes ELLIPAL one of the most accessible hardware wallets to use. Navigation is smartphone-like with tap, swipe, and scroll gestures. Setting up the wallet involves generating a seed phrase on the device, writing it down, and downloading the companion app. The QR code workflow takes a few extra steps compared to USB-connected wallets but becomes routine with practice." }
      ]}
      fees={{ "ELLIPAL Titan": "$169", "ELLIPAL Titan Mini": "$99", "Companion App": "Free", "Firmware Updates": "Free", "Network Fees": "Standard blockchain fees" }}
      security={["Fully air-gapped with no ports or wireless", "Anti-tamper self-destruct mechanism", "QR code-only communication", "Firmware integrity verification on boot", "12/24-word seed phrase backup", "Metal casing with tamper-evident seals", "PIN protection on device"]}
      features={["4-inch color touchscreen", "10,000+ supported assets", "Built-in camera for QR scanning", "Staking through companion app", "WalletConnect DeFi integration", "Multi-account management", "Metal construction", "Firmware OTA via QR codes"]}
      faqs={[
        { question: "Is ELLIPAL safe to use?", answer: "ELLIPAL Titan provides strong security through its air-gapped design and anti-tamper mechanisms. The main concern is that the firmware is not open source, so the security cannot be independently verified by the community. For users who prioritize air-gapped operation and broad asset support at a reasonable price, it is a solid choice." },
        { question: "How does ELLIPAL compare to Coldcard?", answer: "Coldcard is Bitcoin-only and uses microSD for air-gapped communication, while ELLIPAL supports 10,000+ assets and uses QR codes. Coldcard has open-source firmware and a stronger reputation among Bitcoin maximalists. ELLIPAL is better for users who need multi-chain support with an air-gapped setup." },
        { question: "What happens if my ELLIPAL breaks?", answer: "You can recover your funds using the seed phrase on any BIP39-compatible wallet or a new ELLIPAL device. The seed phrase is your backup and should be stored securely. The anti-tamper feature means you cannot repair the physical device once the casing is breached." },
        { question: "Does ELLIPAL support DeFi?", answer: "Yes, through WalletConnect integration in the companion app. You can connect to decentralized applications and approve transactions on the Titan device. The experience is not as seamless as using a software wallet, but it provides hardware-level security for DeFi interactions." }
      ]}
      relatedReviews={[
        { name: "NGRAVE", slug: "/wallets/reviews/ngrave" },
        { name: "Coldcard", slug: "/wallets/reviews/coldcard" },
        { name: "Blockstream Jade", slug: "/wallets/reviews/jade" }
      ]}
      relatedGuides={[
        { title: "Best Hardware Wallets", href: "/wallets/best/hardware" },
        { title: "Best Multi-Chain Wallets", href: "/wallets/best/multi-chain" }
      ]}
    />
  );
}
