import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Paper Wallets: Are They Still Relevant? (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what paper wallets are, how they work, their security risks, and why hardware wallets have largely replaced them for cold storage in modern crypto.",
};

export default function PaperWalletGuidePage() {
  return (
    <LearnPageLayout title="Paper Wallets: Are They Still Relevant?" categoryName="Crypto Wallets" categorySlug="wallets" readTime="6 min read"
      intro="Paper wallets were one of the earliest methods of cold storage, involving printing your public and private keys (often as QR codes) on a physical piece of paper. While they provided a simple way to store crypto offline, paper wallets carry significant usability and security risks that have made them largely obsolete. Hardware wallets now offer superior security with far better usability. This guide explains how paper wallets work, their risks, and why most users should avoid them today."
      toc={[
        { id: "what-are-paper-wallets", title: "what-are-paper-wallets", level: 2 },
        { id: "what-are-paper-wallets", title: "What Are Paper Wallets", level: 2 },
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-paper-wallets-work", title: "How Paper Wallets Work", level: 2 },
        { id: "risks-and-problems", title: "risks-and-problems", level: 2 },
        { id: "risks-and-problems", title: "Risks and Problems", level: 2 },
        { id: "modern-alternatives", title: "modern-alternatives", level: 2 },
        { id: "modern-alternatives", title: "Modern Alternatives", level: 2 }
      ]}
      faqs={[{ question: "Should I use a paper wallet for long-term storage?", answer: "No. Hardware wallets have completely replaced paper wallets for cold storage. A Ledger or Trezor device costs under $80 and provides vastly superior security and usability. Paper wallets have too many risks: physical degradation, insecure generation if done on a compromised computer, and the danger of exposing your private key when spending. Use a hardware wallet instead." },
        { question: "Are paper wallets completely insecure?", answer: "Paper wallets are not inherently insecure if generated correctly on an air-gapped computer and stored properly. The problem is that doing everything correctly is difficult and error-prone. Most paper wallet generators run in web browsers that could be compromised. Printers can retain data. The paper itself degrades. And spending from a paper wallet often exposes the full balance to theft. These practical risks make them inferior to hardware wallets." },
        { question: "What about metal seed phrase backups?", answer: "Metal seed phrase backups (like Cryptosteel or Billfodl) are different from paper wallets. They store the recovery words for a hardware or software wallet, not raw private keys. Metal backups protect against fire and water damage and are an excellent supplement to hardware wallets. They are a recommended security practice, not an alternative wallet type." }]}
      relatedArticles={[{ title: "Hardware Wallet Setup", href: "/wallets/learn/hardware-wallet-setup", category: "Wallets" }, { title: "Wallet Types Explained", href: "/wallets/learn/wallet-types-explained", category: "Wallets" }, { title: "Wallet Security", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" }, { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet", category: "Wallets" }]}
    >
      <section id="what-are-paper-wallets">
        <h2>What Are Paper Wallets</h2>
        <p>A paper wallet is a physical document containing a crypto public address for receiving funds and the corresponding private key for spending them. Typically generated using a website or offline tool, the keys are printed as both text strings and QR codes. The concept is simple: by keeping your private key on paper and never exposing it to an internet-connected device, your funds are theoretically immune to online attacks like hacking and malware.</p>
        <p>Paper wallets were popular in Bitcoin&apos;s early years when hardware wallets did not exist. They provided a way to gift crypto, store it long-term, and keep keys away from computers. However, the crypto ecosystem has evolved significantly, and the practical challenges of paper wallets have become increasingly apparent compared to modern alternatives. Most security experts now advise against using paper wallets.</p>
      </section>

      <section id="how-they-work">
        <h2>How Paper Wallets Work</h2>
        <p>To create a paper wallet, you use a key generation tool that creates a public-private key pair using cryptographic randomness. The safest approach involves downloading an open-source generator, running it on an air-gapped computer (one that has never connected to the internet), and printing the result on a printer that is not network-connected. The printed document is then stored securely, and the computer used for generation is wiped.</p>
        <p>To receive crypto, you share or scan the public address QR code. To spend, you must import the private key into a software wallet, which exposes it to an internet-connected device. This import process is the critical vulnerability: once your private key touches a connected device, the security guarantee of cold storage is broken. Any funds remaining at that address after a partial spend are potentially vulnerable.</p>
      </section>

      <section id="risks-and-problems">
        <h2>Risks and Problems</h2>
        <p>Paper wallets have numerous practical risks. The paper itself is vulnerable to fire, water, fading, and physical damage. If generated on a compromised computer, the private key may be captured by malware before printing. Network-connected printers can retain print data in memory. Most web-based paper wallet generators have been found to contain vulnerabilities or backdoors. The generation process requires significant technical knowledge to do securely.</p>
        <p>The spending problem is perhaps the most dangerous risk. Bitcoin uses a UTXO model where spending any amount from an address requires the private key for the entire balance. Change outputs are sent to a new address unless explicitly configured otherwise. Many users have lost funds by importing a paper wallet, spending a partial amount, and not realizing the remaining balance was sent to a change address they do not control. This complexity makes paper wallets actively dangerous for non-experts.</p>
      </section>

      <section id="modern-alternatives">
        <h2>Modern Alternatives</h2>
        <p>Hardware wallets have completely replaced paper wallets for cold storage. Starting at $79, devices like Ledger Nano S Plus and Trezor Safe 3 keep keys on secure chips, allow signing transactions without exposing private keys, and support thousands of tokens across multiple blockchains. They solve every problem that paper wallets have: they are reusable, durable, secure against malware, and do not expose keys when spending.</p>
        <p>For backup purposes, metal seed phrase plates (Cryptosteel, Billfodl, and similar products) provide fire-resistant and water-resistant storage for your hardware wallet recovery phrase. This gives you the physical durability that paper lacks without the security risks of paper wallets. If you currently have funds on a paper wallet, the recommended action is to transfer them to a hardware wallet immediately and securely destroy the paper wallet after confirming the transfer.</p>
      </section>
    </LearnPageLayout>
  );
}
