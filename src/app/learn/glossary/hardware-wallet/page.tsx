import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Hardware Wallet? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what hardware wallets are, how they secure your crypto, and why they are the gold standard for self-custody.",
};

export default function HardwareWalletPage() {
  return (
    <LearnPageLayout
      title="What Is a Hardware Wallet?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A hardware wallet is a physical device designed to securely store cryptocurrency private keys offline. By keeping keys isolated from internet-connected devices, hardware wallets protect against malware, phishing attacks, and remote hacking. They are widely considered the most secure method for individual crypto storage and are essential for anyone holding significant amounts of digital assets."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-hardware-wallet", title: "What Is a Hardware Wallet?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-hardware-wallets-work", title: "How Hardware Wallets Work", level: 2 },
        { id: "vs-other-wallets", title: "vs-other-wallets", level: 2 },
        { id: "hardware-vs-software-wallets", title: "Hardware vs Software Wallets", level: 2 },
        { id: "best-practices", title: "best-practices", level: 2 },
        { id: "best-practices", title: "Best Practices", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-hardware-wallets-matter", title: "Why Hardware Wallets Matter", level: 2 }
      ]}
      faqs={[
        {
          question: "What happens if my hardware wallet breaks or is lost?",
          answer:
            "Your crypto is not stored on the device itself — it is on the blockchain. The hardware wallet stores the private keys needed to access it. When you first set up the device, you receive a seed phrase (usually 12 or 24 words). This seed phrase can restore your keys on a new device. Keeping this seed phrase safe is critical.",
        },
        {
          question: "Can a hardware wallet be hacked?",
          answer:
            "While no system is 100% immune, hardware wallets are extremely resistant to remote attacks because keys never leave the device. Physical attacks exist but require sophisticated equipment and physical access. The main risk is user error: losing the seed phrase, entering it on a phishing site, or buying a tampered device from an unofficial seller.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Cold Wallet?", href: "/learn/glossary/cold-wallet", category: "Glossary" },
        { title: "What Is a Hot Wallet?", href: "/learn/glossary/hot-wallet", category: "Glossary" },
        { title: "What Is a Seed Phrase?", href: "/learn/glossary/seed-phrase", category: "Glossary" },
        { title: "What Is a Private Key?", href: "/learn/glossary/private-key", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Hardware Wallet?</h2>
      <p>
        A hardware wallet is a specialized physical device, often resembling a USB drive or small calculator, that generates and stores private keys in a secure chip. The device signs transactions internally without ever exposing the private key to the connected computer or phone. Popular hardware wallets include Ledger, Trezor, and Keystone devices.
      </p>

      <h2 id="how-it-works">How Hardware Wallets Work</h2>
      <p>
        When you want to send crypto, you initiate the transaction on your computer or phone. The unsigned transaction is sent to the hardware wallet, which displays the details on its screen for verification. You physically confirm the transaction on the device, which signs it using the private key stored in its secure element. The signed transaction is then sent back to your computer for broadcast. The private key never leaves the device.
      </p>

      <h2 id="vs-other-wallets">Hardware vs Software Wallets</h2>
      <p>
        Software wallets (browser extensions, mobile apps) store private keys on internet-connected devices, making them vulnerable to malware and phishing. Hardware wallets keep keys in an air-gapped secure chip. Software wallets are more convenient for frequent transactions, while hardware wallets prioritize security for long-term storage. Many users combine both: a hardware wallet for savings and a software wallet for daily use.
      </p>

      <h2 id="best-practices">Best Practices</h2>
      <p>
        Always buy hardware wallets directly from the manufacturer to avoid tampered devices. Write down your seed phrase on physical media (paper or metal) and store it in multiple secure locations. Never enter your seed phrase on any website or computer. Keep the device firmware updated. Verify transaction details on the hardware wallet screen before confirming, as the connected computer could be compromised.
      </p>

      <h2 id="why-it-matters">Why Hardware Wallets Matter</h2>
      <p>
        The crypto mantra &quot;not your keys, not your coins&quot; emphasizes the importance of self-custody. Exchange hacks and collapses have cost users billions. Hardware wallets give individuals sovereign control over their assets with institutional-grade security. As crypto adoption grows and holdings increase in value, hardware wallets become an essential tool for responsible asset management.
      </p>
    </LearnPageLayout>
  );
}
