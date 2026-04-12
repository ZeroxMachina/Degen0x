import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import { SITE_NAME } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Cold Storage & Seed Phrase Security Guide 2026: Hardware Wallets & Self-Custody Best Practices",
  description: "Complete guide to cold storage, hardware wallets, and seed phrase security in 2026. Learn Ledger vs Trezor, backup strategies, multi-sig setups, and self-custody best practices for protecting your crypto assets.",
  keywords: "cold storage crypto, hardware wallet security, seed phrase backup, self-custody, Ledger vs Trezor, crypto security best practices, recovery phrase safety, Coldcard, Trezor, Ledger Nano X",
  openGraph: {
    title: "Cold Storage & Seed Phrase Security Guide 2026: Hardware Wallets & Self-Custody Best Practices",
    description: "The definitive guide to securing cryptocurrency with cold storage, hardware wallets, and professional-grade seed phrase management.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    url: "https://degen0x.com/learn/cold-storage-seed-phrase-security-guide-2026",
    images: [
      {
        url: "https://degen0x.com/og-cold-storage-seed-phrase-security-guide-2026.svg",
        width: 1200,
        height: 630,
        alt: "Cold Storage & Seed Phrase Security Guide 2026 - Hardware Wallets & Self-Custody",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Storage & Seed Phrase Security Guide 2026 | degen0x",
    description: "Hardware wallets, seed phrase backup strategies, multi-sig setups, and self-custody best practices for protecting your crypto.",
  },
};

const articleSchema = generateArticleSchema({
  title: "Cold Storage & Seed Phrase Security Guide 2026 — Hardware Wallets & Self-Custody",
  description: "Complete guide to cold storage, hardware wallets, and seed phrase security in 2026. Covers Ledger, Trezor, Coldcard comparisons, backup strategies, multi-sig setups, and self-custody best practices.",
  url: "https://degen0x.com/learn/cold-storage-seed-phrase-security-guide-2026",
  datePublished: "2026-03-24T00:00:00Z",
  dateModified: "2026-03-24T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-cold-storage-seed-phrase-security-guide-2026.svg",
  wordCount: 3200,
});

const faqSchema = generateFAQSchema([
  { q: "What is the safest way to store cryptocurrency?", a: "Cold storage using a hardware wallet is widely considered the safest method. Hardware wallets keep your private keys completely offline on a secure element chip, making them immune to remote hacking, phishing, and malware. Popular options include Ledger Nano X, Trezor Safe 5, and Coldcard Mk4. For maximum security, combine a hardware wallet with a metal seed phrase backup stored in a separate location." },
  { q: "What happens if I lose my hardware wallet?", a: "If you lose your hardware wallet, your crypto is NOT lost — as long as you have your seed phrase (recovery phrase). You can purchase a new hardware wallet (same brand or different) and restore your accounts using the 12 or 24 word seed phrase. This is why seed phrase backup is critical. Without it, your funds are permanently inaccessible." },
  { q: "Should I store my seed phrase digitally?", a: "No. Never store your seed phrase on any internet-connected device — no photos, no cloud storage, no password managers, no notes apps. Digital storage exposes your seed phrase to hackers, malware, and cloud breaches. Use physical backups only: write on the provided card and store securely, or engrave on a metal plate (Cryptosteel, Billfodl) for fire and water resistance." },
  { q: "What is the difference between Ledger and Trezor?", a: "Both are excellent hardware wallets with different philosophies. Ledger uses a proprietary secure element chip (CC EAL5+) with closed-source firmware but supports 5,000+ tokens and has Bluetooth. Trezor uses an open-source approach with fully auditable code, a touchscreen interface, and supports 8,000+ tokens but has no Bluetooth. Choose Ledger for mobile use and broad chain support; choose Trezor for open-source transparency." },
  { q: "What is a multi-signature wallet and do I need one?", a: "A multi-signature (multisig) wallet requires multiple private keys to authorize a transaction — for example, 2-of-3 means any 2 of 3 keys must sign. This protects against single points of failure: if one key is compromised or lost, your funds remain safe. Multisig is recommended for holdings above $50K or for shared custody (family, business). Tools like Gnosis Safe, Casa, and Unchained make setup accessible." },
  { q: "How often should I update my hardware wallet firmware?", a: "Always update firmware when prompted by the official companion app (Ledger Live, Trezor Suite). Firmware updates patch known vulnerabilities and add new features. Before updating, verify you have your seed phrase accessible in case the update requires a device reset. Only download updates through the official app — never from email links or third-party sites, as these could be phishing attacks." },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Cold Storage & Seed Phrase Security Guide 2026" },
];

export default function ColdStorageSeedPhraseSecurityGuidePage() {
  const S = {
    bg: "var(--color-bg, #0d1117)",
    surface: "var(--color-surface, #161b22)",
    surface2: "#1c2330",
    border: "var(--glass-border, #30363d)",
    text: "var(--color-text, #e6edf3)",
    text2: "var(--color-text-secondary, #8b949e)",
    primary: "var(--color-primary, #627EEA)",
    cyan: "#06b6d4",
    green: "#3fb950",
    red: "#f85149",
    orange: "#f0883e",
    yellow: "#d29922",
  };

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>
        <StructuredData data={combinedSchema} />

        {/* Header */}
        <header style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: "#06b6d420", color: S.cyan, border: "1px solid #06b6d440" }}>🔐 Security</span>
            <span style={{ fontSize: 13, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>Beginner</span>
            <span style={{ fontSize: 13, color: S.text2 }}>Updated March 2026 · 16 min read</span>
          </div>

          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20, backgroundImage: "linear-gradient(to right, #06b6d4, #6366f1)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Cold Storage & Seed Phrase Security Guide 2026
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            Hardware Wallets, Backup Strategies & Self-Custody Best Practices
          </p>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 28 }}>
            In 2026, self-custody is non-negotiable for serious crypto holders. Cold storage wallets protect your assets from exchange hacks, malware, and phishing. This comprehensive guide covers hardware wallet selection, seed phrase management, advanced multi-signature strategies, and recovery procedures — everything you need to become the sole custodian of your wealth.
          </p>

          {/* Security Warning */}
          <div role="alert" style={{ background: `${S.red}15`, border: `1px solid ${S.red}40`, borderRadius: 14, padding: 20, marginBottom: 32 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: S.red, marginBottom: 12 }}>⚠️ Critical Security Warning</div>
            <p style={{ fontSize: 14, color: S.text2, marginBottom: 8, lineHeight: 1.7 }}>
              <strong>NEVER share your seed phrase with anyone, including support staff.</strong> Legitimate companies will never ask for it. Your seed phrase is the master key to all your funds. Once compromised, your crypto is permanently lost.
            </p>
            <p style={{ fontSize: 14, color: S.text2, margin: 0, lineHeight: 1.7 }}>
              If someone claims to offer "recovery services" and asks for your seed phrase, they are scamming you. No legitimate service can recover your funds without the seed phrase.
            </p>
          </div>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: S.text, marginBottom: 12 }}>📋 Table of Contents</div>
            {[
              ["#why-cold-storage", "Why Cold Storage Matters"],
              ["#how-hardware-wallets-work", "How Hardware Wallets Work"],
              ["#top-hardware-wallets", "Top Hardware Wallets in 2026"],
              ["#setup-hardware-wallet", "Setting Up Your Hardware Wallet"],
              ["#seed-phrase-security", "Seed Phrase Security & Backup Strategies"],
              ["#advanced-security", "Advanced Security: Multi-Sig & Passphrase"],
              ["#common-mistakes", "Common Security Mistakes to Avoid"],
              ["#recovery-process", "What To Do If Your Device Is Lost or Stolen"],
              ["#faqs", "Frequently Asked Questions"],
            ].map(([href, label]) => (
              <div key={href as string}>
                <a href={href as string} style={{ display: "block", color: S.cyan, fontSize: 14, textDecoration: "none", padding: "5px 0", lineHeight: 1.6, borderRadius: 4 }}>→ {label as string}</a>
              </div>
            ))}
          </nav>
        </header>

        {/* Why Cold Storage Matters */}
        <section id="why-cold-storage" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Why Cold Storage Matters</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Cold storage means keeping your cryptocurrency in an offline device that never connects to the internet. Hot wallets (MetaMask, Coinbase Wallet, Trust Wallet) are connected to the web and convenient for trading, but they're vulnerable to hacks, malware, and phishing.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>The Case for Cold Storage: Major Exchange Hacks & Hot Wallet Losses</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[
              { exchange: "FTX (2022)", loss: "$8 billion", cause: "Exchange collapse. Customers with private keys in FTX lost everything. Those with cold storage kept their funds." },
              { exchange: "Celsius Network (2022)", loss: "$2.7 billion", cause: "Lending platform insolvency. Users who held crypto on-chain in cold storage were unaffected." },
              { exchange: "Luna Collapse (2022)", loss: "$40 billion", cause: "Protocol failure. Only users with self-custody recovered funds; exchange holders lost everything." },
              { exchange: "Ronin Bridge (2022)", loss: "$625 million", cause: "Hacker compromised private keys. Cold storage users unaffected." },
              { exchange: "Binance Phishing (ongoing)", loss: "$100+ million/year", cause: "Users with weak passwords hacked. Hardware wallet users never compromised." },
            ].map(item => (
              <div key={item.exchange} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 8, color: S.red }}>📉 {item.exchange}</div>
                <div style={{ fontSize: 13, color: S.text2, marginBottom: 8, lineHeight: 1.7 }}>
                  <strong>Loss:</strong> {item.loss}
                </div>
                <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.7 }}>
                  <strong>What happened:</strong> {item.cause}
                </div>
              </div>        ))}


        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-24"
          updatedDate="2026-04-12"
          readingTime={9}
          section="learn"
        />


          </div>

          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 10, padding: 16, marginBottom: 24 }}>
            <p style={{ fontSize: 14, color: S.text2, margin: 0, lineHeight: 1.7 }}>
              <strong>The bottom line:</strong> If you own more than $5,000 in crypto, cold storage is mandatory. Not custodial. Not with an exchange. Not with a third party. Only in cold storage under your sole control.
            </p>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Hot vs Cold: Quick Comparison</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
            {[
              {
                type: "🔥 Hot Wallet",
                examples: "MetaMask, Trust Wallet, Coinbase Wallet",
                security: "Low",
                speed: "Instant",
                use: "Trading, DeFi, active use",
                recommendation: "Hold < 5% of portfolio",
              },
              {
                type: "❄️ Cold Storage",
                examples: "Ledger, Trezor, Coldcard",
                security: "Very High",
                speed: "5–30 minutes",
                use: "Long-term holding",
                recommendation: "Hold > 95% of portfolio",
              },
            ].map(w => (
              <div key={w.type} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 12 }}>{w.type}</div>
                <ul style={{ paddingLeft: 0, color: S.text, lineHeight: 1.8, fontSize: 13, listStyle: "none", margin: 0 }}>
                  <li><strong>Examples:</strong> {w.examples}</li>
                  <li><strong>Security:</strong> {w.security}</li>
                  <li><strong>Speed:</strong> {w.speed}</li>
                  <li><strong>Best for:</strong> {w.use}</li>
                  <li style={{ color: w.type.includes("Cold") ? S.green : S.orange }}><strong>Hold here:</strong> {w.recommendation}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How Hardware Wallets Work */}
        <section id="how-hardware-wallets-work" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>How Hardware Wallets Work</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            A hardware wallet is a physical device that stores private keys in a tamper-proof secure element. It never exposes your keys to the internet, even when connected to your computer.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>The Security Model</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, marginBottom: 20 }}>
            <li><strong>Secure Element Chip:</strong> Your private keys are stored inside a CC EAL5+ or EAL6+ certified secure chip. Even if the device is physically opened, the keys cannot be extracted without destroying the chip.</li>
            <li><strong>Air-Gapped Transaction Signing:</strong> When you send a transaction, your hardware wallet signs it internally (never touching the internet). Only the signed transaction is sent to the blockchain.</li>
            <li><strong>Verification Display:</strong> Before confirming, the transaction details appear on the device's small screen. You verify the receiver address, amount, and fee. This prevents malware on your computer from changing where your funds go.</li>
            <li><strong>PIN Protection:</strong> Access the device requires a PIN code, even if it's stolen. After 3–10 wrong attempts, the device wipes itself.</li>
            <li><strong>Recovery Phrase:</strong> If your device is lost, the 12 or 24-word seed phrase allows you to restore all your funds on any compatible wallet.</li>
          </ol>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Why Secure Elements Matter</h3>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <p style={{ fontSize: 13, color: S.text2, margin: 0, lineHeight: 1.8 }}>
              <strong>CC EAL5+ (Evaluation Assurance Level):</strong> This is a certification from Common Criteria, an international security standard. EAL5+ means the chip has been independently audited and proven resistant to physical tampering, power analysis, timing attacks, and fault injection attacks. Ledger Nano X and Trezor use EAL5+ or higher chips.
            </p>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Transaction Flow Example</h3>
          <div style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, fontSize: 13, color: S.text2, lineHeight: 1.9, marginBottom: 20 }}>
            <strong>You want to send 1 BTC to an address:</strong><br/>
            1. Open Ledger Live on your computer and enter the receiver address and amount<br/>
            2. Your computer creates the transaction but cannot sign it (it doesn't have the private key)<br/>
            3. Your computer sends the unsigned transaction to your Ledger device<br/>
            4. The transaction details appear on your Ledger's screen: "Send 1.0 BTC to 1A1z7agoat...?" with a fee of 0.0002 BTC<br/>
            5. You review and press the button to approve<br/>
            6. The Ledger signs the transaction with your private key (which never leaves the device)<br/>
            7. The signed transaction is sent back to your computer<br/>
            8. Your computer broadcasts it to the Bitcoin network<br/>
            9. Malware on your computer could never change the receiver address because it was already signed by the hardware wallet
          </div>
        </section>

        {/* Top Hardware Wallets */}
        <section id="top-hardware-wallets" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Top Hardware Wallets in 2026</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Not all hardware wallets are equal. Below is a comparison of the most popular and secure options in 2026.
          </p>

          {/* Comparison Table */}
          <div style={{ overflowX: "auto", marginBottom: 24 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${S.border}` }}>
                  <th style={{ textAlign: "left", padding: 12, color: S.cyan, fontWeight: 800 }}>Wallet</th>
                  <th style={{ textAlign: "left", padding: 12, color: S.cyan, fontWeight: 800 }}>Price</th>
                  <th style={{ textAlign: "left", padding: 12, color: S.cyan, fontWeight: 800 }}>Connectivity</th>
                  <th style={{ textAlign: "left", padding: 12, color: S.cyan, fontWeight: 800 }}>Chains Supported</th>
                  <th style={{ textAlign: "left", padding: 12, color: S.cyan, fontWeight: 800 }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Ledger Nano X", price: "$149", connect: "Bluetooth, USB", chains: "2000+ (Bitcoin, Ethereum, Solana, Cosmos)", best: "Most users. Great ecosystem." },
                  { name: "Ledger Stax", price: "$299", connect: "Bluetooth, USB", chains: "2000+ (all major chains)", best: "Large screen. Easy approval review." },
                  { name: "Trezor Model T", price: "$249", connect: "USB, WebUSB", chains: "1000+ (Bitcoin, Ethereum, 1000+ altcoins)", best: "Open source. Best security transparency." },
                  { name: "Trezor Safe 5", price: "$319", connect: "USB, Bluetooth", chains: "1000+ (all major chains)", best: "Latest Trezor. Small and secure." },
                  { name: "Coldcard Mk4", price: "$199", connect: "USB, microSD", chains: "Bitcoin (maximalist device)", best: "Bitcoin-only users. Most secure." },
                  { name: "Foundation Passport", price: "$199", connect: "USB, microSD", chains: "Bitcoin, Ethereum, Dogecoin", best: "Open source Bitcoin wallet. Privacy-focused." },
                  { name: "Keystone Pro", price: "$149", connect: "USB, QR codes", chains: "Bitcoin, Ethereum, Solana, Cosmos", best: "Air-gapped via QR. No batteries." },
                ].map((w, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: 12, color: S.text, fontWeight: 700 }}>{w.name}</td>
                    <td style={{ padding: 12, color: S.text }}>{w.price}</td>
                    <td style={{ padding: 12, color: S.text2, fontSize: 13 }}>{w.connect}</td>
                    <td style={{ padding: 12, color: S.text2, fontSize: 13 }}>{w.chains}</td>
                    <td style={{ padding: 12, color: S.text2, fontSize: 13 }}>{w.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Which Should You Choose?</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { scenario: "First hardware wallet", recommendation: "Ledger Nano X", reason: "Large ecosystem, 2000+ coins, Bluetooth connectivity, great UI" },
              { scenario: "Bitcoin maximalist", recommendation: "Coldcard Mk4 or Foundation Passport", reason: "Bitcoin-only optimization, maximum security, open source" },
              { scenario: "Multi-chain user", recommendation: "Trezor Model T or Ledger Stax", reason: "1000+ altcoins, large screen, transparent code (Trezor)" },
              { scenario: "Privacy-focused", recommendation: "Foundation Passport or Keystone Pro", reason: "Open source, QR-code air-gapping, no cloud syncing" },
              { scenario: "Budget-conscious", recommendation: "Ledger Nano X ($149) or Coldcard ($199)", reason: "Best price-to-security ratio" },
            ].map(item => (
              <div key={item.scenario} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 8, color: S.cyan }}>{item.scenario}</div>
                <div style={{ fontSize: 13, color: S.text, marginBottom: 6 }}><strong>→ {item.recommendation}</strong></div>
                <div style={{ fontSize: 13, color: S.text2 }}>{item.reason}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Setup Hardware Wallet */}
        <section id="setup-hardware-wallet" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Setting Up Your Hardware Wallet</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Setup is straightforward but critical. A single mistake here can compromise your security. Follow these steps exactly.
          </p>

          <div style={{ background: `${S.red}15`, border: `1px solid ${S.red}40`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 12, color: S.red }}>⚠️ CRITICAL: Purchase from Official Retailers Only</div>
            <p style={{ fontSize: 13, color: S.text2, margin: 0, lineHeight: 1.7 }}>
              Never buy hardware wallets from eBay, Craigslist, or third-party Amazon sellers. Always buy directly from Ledger.com, Trezor.io, or authorized retailers. Pre-owned devices may have malware or be clones.
            </p>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Step-by-Step Setup</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, marginBottom: 20 }}>
            <li><strong>Unbox and Inspect:</strong> Check for physical tampering, broken seals, or missing components. If anything seems off, contact the retailer immediately.</li>
            <li><strong>Verify Authenticity:</strong> Visit the official website (Ledger.com or Trezor.io). Use their verification tool to confirm the device's serial number.</li>
            <li><strong>Use a Clean Computer:</strong> If possible, set up on a dedicated device or one that rarely connects to the internet. This minimizes malware exposure.</li>
            <li><strong>Initialize the Device:</strong> Connect via USB and follow the on-screen prompts. The device will guide you through setup.</li>
            <li><strong>Generate Seed Phrase:</strong> The device will generate a 12 or 24-word seed phrase. <strong>Write each word down on paper in order.</strong> Do NOT type it anywhere. Do NOT take a screenshot. Do NOT photograph it.</li>
            <li><strong>Double-Check Your Written Seed:</strong> After writing, go back and verify each word is spelled correctly. Typos here are unrecoverable.</li>
            <li><strong>Verify Seed Phrase on Device:</strong> The device will ask you to re-enter some words (e.g., word #3, #7, #15) to confirm you wrote it correctly. This protects against transcription errors.</li>
            <li><strong>Set a Strong PIN:</strong> Choose a 6–8 digit PIN you'll remember. After 3 wrong attempts, the device will wipe itself.</li>
            <li><strong>Back Up Your PIN:</strong> Write your PIN on a separate piece of paper and store it in a different location from your seed phrase.</li>
            <li><strong>Install Software:</strong> Download the official companion software (Ledger Live or Trezor Suite). Never use unofficial apps.</li>
            <li><strong>Update Firmware:</strong> Check for firmware updates and install them immediately. Updates patch security vulnerabilities.</li>
            <li><strong>Test with Small Amount:</strong> Send $10–$20 worth of crypto to your hardware wallet address. Verify you can receive it and then send it back out. Only after successful test do you trust it with larger amounts.</li>
          </ol>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>After Setup: Best Practices</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { practice: "Always verify addresses on the device screen", reason: "Malware on your computer could change the receiving address if you only verify on your monitor." },
              { practice: "Never type your seed phrase into any device connected to the internet", reason: "This is the #1 cause of seed phrase theft. The seed phrase is for recovery only." },
              { practice: "Store seed phrase securely (metal backup or fireproof safe)", reason: "Paper degrades. Metal lasts centuries." },
              { practice: "Keep the device itself safe but not secret", reason: "It's useless without the PIN and seed phrase. Loss is not catastrophic." },
              { practice: "Check for firmware updates monthly", reason: "New vulnerabilities are discovered regularly. Updates patch them." },
              { practice: "Never lend your hardware wallet", reason: "Even a few seconds is enough to install malware or clone the device." },
              { practice: "Test your backup before holding large amounts", reason: "Create a small test recovery to ensure your seed phrase works." },
            ].map(item => (
              <div key={item.practice} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 6, color: S.cyan }}>✓ {item.practice}</div>
                <div style={{ fontSize: 13, color: S.text2 }}>{item.reason}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Seed Phrase Security */}
        <section id="seed-phrase-security" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Seed Phrase Security & Backup Strategies</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Your 12 or 24-word seed phrase is the master key to all your funds across all compatible wallets. Lose it, and your crypto is lost forever. Compromise it, and all your money is stolen. Protecting your seed phrase is your #1 security priority.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Understanding Your Seed Phrase</h3>
          <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Your seed phrase (also called mnemonic or recovery phrase) is a human-readable version of your private key. The 12-word phrase contains 132 bits of entropy (roughly 2^132 possible combinations). The 24-word phrase contains 256 bits (2^256). This mathematical strength means:
          </p>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li><strong>Brute force is impossible:</strong> Even with all computers on Earth, trying every combination would take billions of years.</li>
            <li><strong>The order matters:</strong> "apple banana cherry" is different from "banana apple cherry." One transposed word makes the phrase useless.</li>
            <li><strong>Spelling matters:</strong> "recieve" vs "receive" — one extra 'i' creates a completely different key.</li>
            <li><strong>It's standardized (BIP39):</strong> The same seed phrase works across Ledger, Trezor, MetaMask, Trust Wallet, and hundreds of other BIP39-compatible wallets.</li>
          </ul>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Seed Phrase Storage Methods (Ranked)</h3>

          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, color: S.cyan }}>✅ TIER 1: Metal Backup (Stamped or Engraved)</div>
            <p style={{ fontSize: 13, color: S.text2, margin: 0, lineHeight: 1.8 }}>
              Use a metal backup device like CryptoSteel, Billfodl, or SeedKeeper. Stamp or engrave each word onto metal plates. <strong>Advantages:</strong> Fireproof (melting point 1000°C+), waterproof, lasts 100+ years, resistant to physical damage. <strong>Cost:</strong> $60–$150. <strong>Recommendation:</strong> Best method for long-term storage. Most serious holders use this.
            </p>
          </div>

          <div style={{ background: `${S.green}10`, border: `1px solid ${S.green}30`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, color: S.green }}>✅ TIER 2: Paper (Physically Secured)</div>
            <p style={{ fontSize: 13, color: S.text2, margin: 0, lineHeight: 1.8 }}>
              Write your seed phrase by hand on archival-quality paper (100+ year lifespan). Store in a fireproof safe, buried on your property in a waterproof container, or in a bank safe deposit box. <strong>Advantages:</strong> Low cost, simple, no single point of failure if you store multiple copies. <strong>Risk:</strong> Paper deteriorates over 50+ years. Not waterproof unless sealed.
            </p>
          </div>

          <div style={{ background: `${S.yellow}15`, border: `1px solid ${S.yellow}40`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, color: S.yellow }}>⚠️ TIER 3: Digital Storage (Risky)</div>
            <p style={{ fontSize: 13, color: S.text2, margin: 0, lineHeight: 1.8 }}>
              Storing digitally (password manager, encrypted note, USB drive, etc.) introduces attack surface. Only do this if you use military-grade encryption (AES-256), an air-gapped computer, and a unique ultra-strong password. Better option: use Shamir's Secret Sharing to split the phrase.
            </p>
          </div>

          <div style={{ background: `${S.red}15`, border: `1px solid ${S.red}40`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, color: S.red }}>✗ TIER 4: NEVER Do This</div>
            <p style={{ fontSize: 13, color: S.text2, margin: 0, lineHeight: 1.8 }}>
              Cloud storage (Google Drive, Dropbox, iCloud), email, phone notes, photos, screenshots, text documents on your computer. These are hacked constantly. If you've ever screenshotted your seed phrase, retrieve the file from your phone's trash and permanently delete it.
            </p>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Advanced: Shamir Secret Sharing (SSS)</h3>
          <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            For maximum security, split your seed phrase using Shamir Secret Sharing. This cryptographic technique divides your seed into multiple pieces (e.g., 5 pieces where 3 are needed to recover the key). You can distribute pieces to different secure locations, so stealing one piece is useless to attackers.
          </p>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20, fontSize: 13, color: S.text2, lineHeight: 1.8 }}>
            <strong>Tools supporting SLIP-0039 (Shamir):</strong> Trezor Model T/Safe 5, Ledger via third-party, Foundation Passport. <br/>
            <strong>Example:</strong> You could split your 24-word phrase into 5 shares where 3 are needed. Store one share at your home safe, one at your parents' house, one at your lawyer's office, one in a bank safe deposit box, and one in a personal safety deposit box. Even if 4 locations are compromised, you still have security.
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Split Storage Strategy (Recommended for Large Holders)</h3>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <div style={{ fontSize: 13, color: S.text, lineHeight: 1.9 }}>
              <strong>Store multiple copies of your seed phrase in different locations:</strong><br/>
              • Copy #1: Metal backup in a home safe<br/>
              • Copy #2: Paper backup in a bank safe deposit box<br/>
              • Copy #3: Buried in a waterproof container on your property<br/>
              <br/>
              <strong>Why multiple copies?</strong> If your house burns down, you still have backup copies. If your bank safe deposit box is compromised (rare), you have other copies. This is "geographic redundancy."
            </div>
          </div>
        </section>

        {/* Advanced Security */}
        <section id="advanced-security" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Advanced Security: Multi-Sig & Passphrase</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            For serious crypto holders or institutions, basic hardware wallets aren't enough. Advanced techniques like multi-signature wallets and BIP39 passphrases add additional layers of security.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Multi-Signature (Multi-Sig) Wallets</h3>
          <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            A multi-signature wallet requires multiple approvals to move funds. For example, a 2-of-3 multisig means 2 out of 3 wallet owners must approve a transaction.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 24 }}>
            {[
              { ratio: "2-of-2", use: "You + spouse. Both must approve every transaction.", pros: "Prevents accidental loss or theft." },
              { ratio: "2-of-3", use: "You + spouse + lawyer. Any 2 can approve.", pros: "Flexibility if someone is unavailable." },
              { ratio: "3-of-5", use: "You + 4 trusted parties. Any 3 must approve.", pros: "Maximum security. Even if 2 parties are compromised, you're safe." },
            ].map(m => (
              <div key={m.ratio} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 14 }}>
                <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 8, color: S.cyan }}>{m.ratio}</div>
                <div style={{ fontSize: 13, color: S.text2, marginBottom: 8, lineHeight: 1.6 }}>
                  <strong>Example:</strong> {m.use}
                </div>
                <div style={{ fontSize: 13, color: S.green }}>
                  <strong>Benefit:</strong> {m.pros}
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Popular Multi-Sig Platforms</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {[
              { name: "Gnosis Safe", chains: "Ethereum, Polygon, Arbitrum", desc: "Most popular multisig for DeFi. Governance through DAO. Free." },
              { name: "Casa", chains: "Bitcoin + Ethereum", desc: "Professional multisig with concierge recovery service. $20/month." },
              { name: "Unchained Capital", chains: "Bitcoin + Ethereum", desc: "Collaborative key storage with professional backup. Services available." },
              { name: "Specter DIY", chains: "Bitcoin", desc: "Open-source multisig for Bitcoin. Self-hosted. Free." },
            ].map(p => (
              <div key={p.name} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4, color: S.cyan }}>{p.name}</div>
                <div style={{ fontSize: 13, color: S.text2, marginBottom: 8 }}><strong>Chains:</strong> {p.chains}</div>
                <div style={{ fontSize: 13, color: S.text2 }}>{p.desc}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>BIP39 Passphrase (25th Word)</h3>
          <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            A BIP39 passphrase is an optional 25th word you create yourself. It's a second layer of security: even if someone steals your 24-word seed phrase, they cannot access your funds without the passphrase.
          </p>
          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.9 }}>
              <strong>Example:</strong> Your seed phrase is stored in your safe. Your passphrase is in your head. Even if a thief steals the seed phrase, they can't access your funds without the passphrase. <br/>
              <strong>Risk:</strong> If you forget the passphrase, your funds are lost forever. This is not recoverable. Write down a hint (e.g., "my childhood dog's name + my birth year") in a separate secure location.
            </div>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Plausible Deniability</h3>
          <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Some holders use multiple wallets: a "primary" wallet with small amounts and a "hidden" wallet with larger amounts. If coerced to reveal funds, they can reveal the primary wallet while keeping the hidden one secret. Advanced techniques use passphrases to create multiple hidden wallets from one seed phrase.
          </p>
        </section>

        {/* Common Security Mistakes */}
        <section id="common-mistakes" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Common Security Mistakes to Avoid</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Even with a hardware wallet, simple mistakes can compromise everything. Learn from others' errors.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { mistake: "Buying from unauthorized sellers", risk: "Device may be a clone or pre-loaded with malware.", fix: "Only purchase from official retailers: Ledger.com, Trezor.io, or authorized distributors." },
              { mistake: "Taking a photo or screenshot of seed phrase", risk: "The photo is uploaded to your phone's cloud backup, which hackers can access.", fix: "Write by hand on paper only. If you screenshotted, delete the file from cloud backup." },
              { mistake: "Storing seed phrase and device in the same location", risk: "Theft of one location compromises both.", fix: "Separate them. Device at home, seed phrase in a bank safe deposit box or parents' house." },
              { mistake: "Ignoring firmware updates", risk: "New vulnerabilities are discovered regularly. Out-of-date devices are exploitable.", fix: "Check for updates monthly. Trezor and Ledger notify you of critical updates." },
              { mistake: "Blind signing (approving without reading)", risk: "Malware can substitute the contract you're approving with a malicious one.", fix: "Always read the full transaction on your device screen before pressing the button." },
              { mistake: "Typing seed phrase to test if you remember it", risk: "Your computer (which has internet) now has a copy of your master key.", fix: "Don't test digitally. Test by actually recovering on a new device." },
              { mistake: "Sharing the seed phrase 'for safety'", risk: "Anyone who knows it can steal everything.", fix: "Never share. Not with family, not with advisors, not with anyone." },
              { mistake: "Using weak PIN", risk: "Attacker cracks PIN in 3–10 attempts, device wipes itself (but they could already have extracted keys).", fix: "Use 6–8 digits with no patterns (not 000000 or 123456)." },
            ].map(item => (
              <div key={item.mistake} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 8, color: S.red }}>⚠️ {item.mistake}</div>
                <div style={{ fontSize: 13, color: S.text2, marginBottom: 8 }}>
                  <strong>Risk:</strong> {item.risk}
                </div>
                <div style={{ fontSize: 13, color: S.green }}>
                  <strong>Fix:</strong> {item.fix}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recovery Process */}
        <section id="recovery-process" style={{ marginBottom: 48, scrollMarginTop: 80 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>What To Do If Your Device Is Lost or Stolen</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            A lost or stolen hardware wallet is not a catastrophe if you have your seed phrase. You can recover all your funds on a new device. Here's how.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Step-by-Step Recovery</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, marginBottom: 24 }}>
            <li><strong>Obtain a new hardware wallet:</strong> Order from the official retailer. While you wait, move to a temporary hot wallet (see step 3).</li>
            <li><strong>Don't panic:</strong> Your funds are NOT gone. As long as you have your seed phrase, you can recover everything. The PIN on the old device doesn't matter.</li>
            <li><strong>Temporary safety (optional):</strong> If you're worried about imminent theft, you can move a portion of funds to a temporary hot wallet (MetaMask on a new computer). This is only temporary, not permanent storage.</li>
            <li><strong>Initialize the new hardware wallet:</strong> Unbox the new device and follow normal setup, but select "Restore from seed phrase" instead of "Create new wallet."</li>
            <li><strong>Enter your seed phrase:</strong> The new device will ask for your seed phrase. Type each word carefully. The software will validate spelling and order.</li>
            <li><strong>Set a new PIN:</strong> Choose a different PIN than before (if you remember the old one, the old device could potentially be cloned).</li>
            <li><strong>Verify recovery:</strong> Check that all your addresses and balances match your old wallet. If they don't, you made an error entering the seed phrase.</li>
            <li><strong>Optional: Update seed phrase locations:</strong> If the old device was in a location now compromised, move your seed phrase backup to a new location (e.g., different bank, different safe).</li>
          </ol>

          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <p style={{ fontSize: 13, color: S.text2, margin: 0, lineHeight: 1.8 }}>
              <strong>Important:</strong> Before disaster strikes, test your recovery process with a small amount of crypto on a testnet or a new device. Send $1 of BTC to your hardware wallet, then recover on a new device to confirm everything works.
            </p>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>If the Device Was Stolen (Security Considerations)</h3>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, margin: 0 }}>
              <li><strong>Hardware wallets are hard to crack:</strong> The secure element is resistant to physical attacks. A thief cannot extract your private keys from the device itself (in practice).</li>
              <li><strong>But they could guess your PIN:</strong> After 3–10 wrong attempts, the device wipes itself. But if someone knows your PIN (e.g., you typed it nearby), they could drain your funds immediately.</li>
              <li><strong>Action:</strong> Move your funds to a newly recovered wallet as soon as possible. Use fresh addresses.</li>
              <li><strong>Preventative:</strong> Use a different PIN on your device than on your exchanges. Never enter your PIN where cameras or people can see it.</li>
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" style={{ marginBottom: 48, scrollMarginTop: 80 }} aria-label="Frequently Asked Questions about cold storage and seed phrase security">
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Frequently Asked Questions</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }} role="list">
            {[
              {
                q: "What if I lose my seed phrase?",
                a: "Your crypto is gone forever. There is no recovery without the seed phrase. This is why secure storage and multiple backups are critical. Always test your recovery process before trusting a device with large amounts.",
              },
              {
                q: "Is my hardware wallet vulnerable if I connect it to an infected computer?",
                a: "The keys cannot be extracted, but malware could change the transaction details shown on your screen (before you confirm). This is why you ALWAYS verify the recipient address on the device's screen, not on your monitor. Hardware wallets are designed to be vulnerable only to screen-injection attacks, which are extremely rare.",
              },
              {
                q: "Do I need different seed phrases for different cryptocurrencies?",
                a: "No. One seed phrase works across all cryptocurrencies. The same seed generates Bitcoin, Ethereum, Solana, and 1000+ other coins. This is because they all use the same BIP39 standard.",
              },
              {
                q: "Can I store my seed phrase digitally in a password manager?",
                a: "Technically possible but risky. Password managers can be hacked. If you do store digitally, use military-grade encryption (AES-256), an air-gapped computer, and a unique ultra-strong password. Even better: split it using Shamir's Secret Sharing so no single digital location has the complete phrase.",
              },
              {
                q: "What's the difference between a 12-word and 24-word seed phrase?",
                a: "A 12-word phrase has 132 bits of entropy (2^132 possible combinations). A 24-word phrase has 256 bits (2^256). Both are computationally impossible to brute force. 24-word is marginally more secure, but 12-word is secure enough. Choose based on your preferences.",
              },
              {
                q: "Can I recover my hardware wallet funds if the company goes out of business?",
                a: "Yes. Your seed phrase works on ANY BIP39-compatible wallet, not just the one you used. If Ledger disappears, you can recover on Trezor, MetaMask, Trust Wallet, or hundreds of other wallets. This is the beauty of the BIP39 standard.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 10, color: S.cyan }}>Q: {item.q}</h3>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8, margin: 0 }}>
                  <strong>A:</strong> {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div style={{ background: `linear-gradient(135deg, ${S.cyan}15, ${S.primary}15)`, border: `1px solid ${S.primary}30`, borderRadius: 14, padding: 28, textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 12 }}>Secure Your Crypto Today</h2>
          <p style={{ fontSize: 14, color: S.text2, marginBottom: 20, lineHeight: 1.7 }}>
            Explore hardware wallet options, learn more about DeFi security, and start your path to true self-custody.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/wallets" style={{ padding: "10px 22px", borderRadius: 10, background: `#06b6d420`, border: "1px solid #06b6d440", color: S.cyan, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              🔐 Find Wallets
            </Link>
            <Link href="/learn/common-crypto-scams" style={{ padding: "10px 22px", borderRadius: 10, background: `${S.primary}20`, border: `1px solid ${S.primary}40`, color: S.primary, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              📚 Learn More
            </Link>
            <Link href="/tools/wallet-analyzer" style={{ padding: "10px 22px", borderRadius: 10, background: "#3fb95020", border: "1px solid #3fb95040", color: S.green, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              🔍 Analyze Wallets
            </Link>
          </div>
        </div>

        {/* Internal Links Section */}
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 32 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: S.text, marginBottom: 12 }}>📖 Related Resources</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {[
              { label: "Compare: Ledger vs Trezor", href: "/compare/wallets/ledger-vs-trezor" },
              { label: "Wallet Comparison", href: "/wallets" },
              { label: "Common Crypto Scams", href: "/learn/common-crypto-scams" },
              { label: "Wallet Analyzer Tool", href: "/tools/wallet-analyzer" },
              { label: "MetaMask vs Phantom", href: "/compare/wallets/metamask-vs-phantom" },
              { label: "Crypto Inheritance Planning", href: "/learn/crypto-inheritance-planning" },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ padding: 12, background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, color: S.cyan, fontSize: 13, textDecoration: "none", display: "block" }}>
                → {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ background: "#d2992215", border: "1px solid #d2992240", borderRadius: 10, padding: 14, fontSize: 13, color: S.yellow, lineHeight: 1.7 }}>
          ⚠️ <strong>Disclaimer:</strong> This guide is for educational purposes only. Cryptocurrency security is constantly evolving. Always stay updated on best practices. No security method is 100% foolproof. {SITE_NAME} is not responsible for lost funds or security breaches. When in doubt, consult a professional security expert or contact the hardware wallet manufacturer's support team.
        </div>

        <BackToTop />
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Cold Storage Seed Phrase Security Guide 2026",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/cold-storage-seed-phrase-security-guide-2026"
            })
          }}
        />
      </article>
    </main>
  );
}
