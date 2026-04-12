import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem } from "@/lib/types";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Ledger vs Keystone (${CURRENT_YEAR}): Air-Gapped vs Connected Wallet | ${SITE_NAME}`,
  description: `Ledger vs Keystone hardware wallet comparison for ${CURRENT_YEAR}. Compare air-gapped QR signing, multi-chain support, DeFi access, and security.`,
};

const items: ComparisonItem[] = [
  { name: "Ledger Nano X", slug: "ledger-nano-x", rating: 4.7, affiliateUrl: "https://degen0x.com/go/ledger", features: { "Type": "Connected hardware wallet", "Price": "$149", "Connection": "USB-C + Bluetooth", "Air-Gapped": "No", "Supported Coins": "5,500+", "Display": "128x64 OLED", "Open Source": "Partial", "DeFi Access": "Ledger Live + browser" } },
  { name: "Keystone 3 Pro", slug: "keystone-3-pro", rating: 4.5, affiliateUrl: "https://degen0x.com/go/keystone", features: { "Type": "Air-gapped hardware wallet", "Price": "$149", "Connection": "QR code only", "Air-Gapped": "Yes (100%)", "Supported Coins": "5,500+", "Display": "4-inch touchscreen", "Open Source": "Yes (fully)", "DeFi Access": "MetaMask, Rabby, OKX" } },
];

const features = ["Type", "Price", "Connection", "Air-Gapped", "Supported Coins", "Display", "Open Source", "DeFi Access"];

const faqs = [
  { question: "What is QR code signing?", answer: "QR code signing means the hardware wallet never connects to any computer or phone via USB or Bluetooth. Instead, it displays transaction data as QR codes that your phone scans, and you scan the signed transaction QR code back. This eliminates USB-based attack vectors entirely." },
  { question: "Can Keystone work with MetaMask?", answer: "Yes. Keystone integrates with MetaMask, Rabby, OKX Wallet, and other software wallets via QR code communication. You can use MetaMask for DeFi interactions while keeping your keys securely on the air-gapped Keystone device." },
  { question: "Is Keystone as secure as Ledger?", answer: "Both offer strong security through different approaches. Ledger uses a certified Secure Element with USB/Bluetooth connectivity. Keystone eliminates all wired connections via air-gapped QR signing and is fully open-source. The air-gapped design removes certain attack vectors that connected devices face." },
];

export default function LedgerVsKeystonePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Compare", href: "/wallets/compare" },
          { label: "Ledger vs Keystone", href: "/wallets/compare/ledger-vs-keystone" },
        ]}
      />
      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Ledger vs Keystone: Connected vs Air-Gapped ({CURRENT_YEAR})</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Ledger connects via USB and Bluetooth. Keystone communicates exclusively through QR
          codes. We compare these two approaches to hardware wallet security.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10">
        <ComparisonTable items={items} features={features} title="Ledger Nano X vs Keystone 3 Pro" />
      </section>

      <div className="prose-crypto">
        <h2>Air-Gapped vs Connected Security</h2>
        <p>
          The fundamental difference is connectivity. Ledger connects to your computer or phone
          via USB-C or Bluetooth, which provides convenience but exposes the device to potential
          USB-based attacks. Keystone communicates exclusively through QR codes, never connecting
          to any device physically or wirelessly.
        </p>
        <p>
          Air-gapped operation means Keystone is immune to USB firmware attacks, BadUSB exploits,
          and Bluetooth vulnerabilities. However, it requires scanning QR codes for every
          transaction, which is slightly less convenient than Ledger&apos;s plug-and-sign approach.
        </p>

        <h2>Display and User Experience</h2>
        <p>
          Keystone features a 4-inch color touchscreen that displays full transaction details
          and QR codes clearly. Ledger&apos;s small OLED screen requires scrolling through
          transaction details with two buttons. For verifying complex DeFi transactions,
          Keystone&apos;s large screen provides a better experience for reviewing what you are
          signing.
        </p>

        <h2>DeFi Compatibility</h2>
        <p>
          Both wallets provide strong DeFi access. Ledger works through Ledger Live and connects
          to browser wallets like MetaMask. Keystone also integrates with MetaMask, Rabby, and
          OKX Wallet via QR codes. The DeFi experience is comparable, though Keystone&apos;s
          transaction preview on its large screen provides better visibility into DeFi
          transaction details before signing.
        </p>

        <h2 id="verdict">Verdict</h2>
        <div className="not-prose rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 my-6">
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong className="text-[var(--color-text)]">Choose Ledger if:</strong> You value convenience,
            Bluetooth mobile management, the largest ecosystem of supported apps, and the
            most established brand in hardware wallets.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            <strong className="text-[var(--color-text)]">Choose Keystone if:</strong> You want air-gapped
            security, a large touchscreen for transaction verification, fully open-source
            firmware, and are comfortable with QR code workflows.
          </p>
        </div>
      </div>

        <AuthorAttribution
          author="CipherPunk_42"
          role="Security & QA"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="wallets"
        />


      <section className="mb-12 mt-10">
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/wallets/compare/ledger-vs-trezor" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <span className="text-xs text-[var(--color-primary)]">Compare</span>
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Ledger vs Trezor</h3>
          </Link>
          <Link href="/wallets/learn/hardware-wallet-setup-guide" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <span className="text-xs text-[var(--color-primary)]">Guide</span>
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Hardware Wallet Setup Guide</h3>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
