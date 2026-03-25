import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";
import WalletSecurityScoreCalculator from "@/components/WalletSecurityScoreCalculator";

export const metadata: Metadata = {
  title: "Crypto Wallet Security Guide 2026: Scam Protection | degen0x",
  description: "Master crypto wallet security in 2026. Learn to protect against approval drainers, phishing, token exploits, fake extensions, and address poisoning. Complete guide to wallet firewalls, hardware wallets, and emergency response.",
  keywords: "crypto wallet security, wallet drainer protection, crypto phishing, token approval security, revoke crypto approvals, wallet firewall, crypto scam protection 2026, ice phishing, approval exploits",
  openGraph: {
    title: "Crypto Wallet Security Guide 2026: Protect Against Scams & Drainers",
    description: "Protect your crypto from $311M in monthly phishing losses. Learn wallet security, approval management, and DeFi safety in 2026.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    images: [{ url: "/og-crypto-wallet-security-guide-2026.svg", width: 1200, height: 630, alt: "Crypto Wallet Security Guide 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Wallet Security Guide 2026: Scam Protection | degen0x",
    description: "Protect your crypto from $311M in monthly phishing losses. Learn wallet security, approval management, and DeFi safety in 2026.",
    images: ["/og-crypto-wallet-security-guide-2026.svg"],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Crypto Wallet Security Guide 2026", href: "/learn/crypto-wallet-security-guide-2026" },
];

const faqs = [
  {
    question: "What is an approval drainer and how does it steal my tokens?",
    answer: "An approval drainer exploits token approvals. When you use a DeFi app, you approve it to spend your tokens. If the app is malicious (or compromised), it can drain unlimited tokens. You sign one transaction thinking it's harmless, and the contract gains permanent access to your funds. That's why wallet firewalls simulate transactions before signing."
  },
  {
    question: "Should I use Revoke.cash regularly?",
    answer: "Yes. Check your approvals monthly. Go to Revoke.cash, connect your wallet, and revoke any approvals you don't recognize or no longer use. This takes 5 minutes and costs $1-10 in gas per revocation. It's cheap insurance against drain contracts that may have been compromised after you approved them."
  },
  {
    question: "Is a hardware wallet enough protection for DeFi?",
    answer: "Hardware wallets protect your private keys, but they don't protect you from signing malicious transactions. If you approve a drain contract on your Ledger, it will drain your tokens. Hardware wallets are best paired with a wallet firewall (Rabby, Blowfish) that intercepts risky transactions before they reach your device."
  },
  {
    question: "What's the difference between hot and cold wallets?",
    answer: "Hot wallets (MetaMask, Phantom) are online and convenient for DeFi, but they're more vulnerable to malware and phishing. Cold wallets (Ledger, Trezor) are offline and extremely secure for long-term storage, but they're slow and inconvenient for frequent trading. Best practice: keep 95% in cold storage, 5% in a hot wallet for active trading."
  },
  {
    question: "If my wallet is drained, can I recover my funds?",
    answer: "Not usually. Blockchain transactions are irreversible. However, if you act fast (within minutes), you may be able to: 1) Front-run the attacker's withdrawal by sending funds to a safe wallet, 2) Contact exchanges to freeze the stolen tokens if they're being converted, or 3) Use blockchain analytics to report the theft. Prevention is far more effective than recovery."
  },
  {
    question: "Why do I need separate wallets for different activities?",
    answer: "Different activities carry different risks. A burner wallet for NFT mints or unverified tokens limits exposure if something goes wrong. A DeFi trading wallet holds approvals for specific protocols. A cold storage wallet holds long-term positions and rarely connects. This segmentation means if one wallet is compromised, your other assets are safe."
  }
];

export default function CryptoWalletSecurityGuidePage() {
  const S = {
    bg: "#0d1117",
    surface: "#161b22",
    surface2: "#1c2330",
    border: "#30363d",
    text: "#e6edf3",
    text2: "#8b949e",
    primary: "#6366f1",
    secondary: "#06b6d4",
    green: "#22c55e",
    red: "#f85149",
    orange: "#f0883e",
    yellow: "#d29922",
  };

  const walletComparisonData = [
    { name: "MetaMask", type: "Hot Wallet", security: "Medium", ease: "Very Easy", cost: "Free", approval_control: "Manual", recommendation: "DeFi trading & testing" },
    { name: "Phantom", type: "Hot Wallet", security: "Medium", ease: "Very Easy", cost: "Free", approval_control: "Manual", recommendation: "Solana DeFi & NFTs" },
    { name: "Ledger Nano X", type: "Cold Wallet", security: "Very High", ease: "Moderate", cost: "$149", approval_control: "Hardware signing", recommendation: "Long-term storage" },
    { name: "Trezor One", type: "Cold Wallet", security: "Very High", ease: "Moderate", cost: "$99", approval_control: "Hardware signing", recommendation: "Most affordable & secure" },
  ];

  const securityToolsData = [
    { name: "Revoke.cash", category: "Approval Manager", features: "View & revoke all token approvals", cost: "Free + gas", best_for: "Monthly approval cleanup" },
    { name: "Rabby Wallet", category: "Wallet Firewall", features: "Tx simulation, approval monitoring, phishing detection", cost: "Free", best_for: "DeFi users who want protection" },
    { name: "Blowfish", category: "Wallet Firewall", features: "Real-time risk scoring, phishing detection, approval alerts", cost: "Free", best_for: "MetaMask users wanting alerts" },
    { name: "Pocket Universe", category: "Wallet Firewall", features: "Tx preview, approval warnings, scam database", cost: "Free", best_for: "Simple one-click protection" },
    { name: "Scam Sniffer", category: "Phishing Detection", features: "Identifies malicious contracts & addresses", cost: "Free", best_for: "Chrome extension for URL verification" },
  ];

  const attackVectorsData = [
    { attack: "Approval Drainers", description: "Malicious contract drains unlimited tokens from approved accounts", risk_level: "🔴 Critical", prevention: "Revoke approvals, use wallet firewall, verify contracts" },
    { attack: "Phishing & Fake URLs", description: "Fake website redirects you to enter seed phrase or click malicious links", risk_level: "🔴 Critical", prevention: "Type URLs manually, verify with official sources, bookmark trusted sites" },
    { attack: "Fake Browser Extensions", description: "Malicious MetaMask/wallet clones steal seed phrases on installation", risk_level: "🔴 Critical", prevention: "Only download from official app stores and verified sources" },
    { attack: "Social Engineering", description: "Scammers impersonate support on Discord/Telegram asking for seed phrase", risk_level: "🔴 Critical", prevention: "Never share seed phrases, official support will never DM you" },
    { attack: "Address Poisoning", description: "Similar-looking contract address (0x123...4567 vs 0x123...5678) in transaction history", risk_level: "🟠 High", prevention: "Always verify full address on Etherscan before interacting" },
    { attack: "Fake Airdrops", description: "Free token claim that requires wallet connection & approval signature", risk_level: "🟠 High", prevention: "Don't claim unverified airdrops, use wallet firewall to block" },
    { attack: "Honeypot Tokens", description: "Token you can buy but can't sell (contract blocks sales)", risk_level: "🟠 High", prevention: "Check contract code on Etherscan, use DEX analyzers before trading" },
    { attack: "Ice Phishing (Permit Exploit)", description: "Attacker tricks you into signing a permit that approves them as spender", risk_level: "🟠 High", prevention: "Wallet firewall simulates permits, never sign unknown permits" },
  ];

  const securityChecklistData = [
    { rule: "Use a hardware wallet for 95%+ of holdings", category: "Storage" },
    { rule: "Enable 2FA on all exchanges with authenticator app (not SMS)", category: "Exchange Security" },
    { rule: "Never share your seed phrase with anyone, ever", category: "Key Management" },
    { rule: "Type URLs manually; never click links in emails or Discord", category: "Phishing Prevention" },
    { rule: "Revoke unused token approvals monthly using Revoke.cash", category: "Approval Management" },
    { rule: "Keep your hot wallet separate from cold storage", category: "Segmentation" },
    { rule: "Use a wallet firewall (Rabby, Blowfish, Pocket Universe)", category: "Transaction Safety" },
    { rule: "Verify contract addresses on Etherscan before every approval", category: "DeFi Safety" },
    { rule: "Test new dApps with tiny amounts first ($1-10)", category: "Risk Testing" },
    { rule: "Store seed phrases in metal backup (CryptoSteel, HODL) not paper", category: "Backup Security" },
  ];

  const articleSchema = generateArticleSchema({
    title: "Crypto Wallet Security Guide 2026: Scam Protection & Drainer Defense",
    description: "Master crypto wallet security. Protect against approval drainers, phishing, token exploits, and scams. Learn wallet firewalls, hardware wallets, and emergency response for 2026.",
    url: `${SITE_URL}/learn/crypto-wallet-security-guide-2026`,
    datePublished: "2026-03-24T00:00:00Z",
    dateModified: "2026-03-24T00:00:00Z",
    author: "degen0x",
    image: `${SITE_URL}/og-crypto-wallet-security-guide-2026.png`,
    wordCount: 2850,
  });

  const faqSchema = generateFAQSchema(faqs);
  const structuredData = combineSchemas(articleSchema, faqSchema);

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", scrollBehavior: "smooth" }}>
      <StructuredData data={structuredData} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Header */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.red}20`, color: S.red, border: `1px solid ${S.red}40` }}>🔐 Security</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.yellow}20`, color: S.yellow, border: `1px solid ${S.yellow}40` }}>Beginner</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 24, 2026 · 12 min read</span>
          </div>

          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20, background: `linear-gradient(135deg, ${S.primary}, ${S.secondary})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Crypto Wallet Security Guide 2026
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            In 2026, $311M in cryptocurrency is drained by phishing attacks every month. Approval drainers, fake extensions, and social engineering are more sophisticated than ever. This guide teaches you how to protect your wallet, recognize scams, and respond if something goes wrong. Whether you're trading DeFi or hodling Bitcoin, these principles apply.
          </p>

          {/* Quick Alert */}
          <div style={{ background: `${S.red}15`, border: `1px solid ${S.red}40`, borderRadius: 12, padding: 20, marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: S.red, marginBottom: 12 }}>⚡ The 2026 Wallet Security Reality</h2>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, listStyle: "none", margin: 0 }}>
              <li>✓ Approval drainers are the #1 high-impact vector</li>
              <li>✓ Modern phishing targets signatures, not passwords</li>
              <li>✓ Wallet firewalls now intercept attacks at 3 critical points</li>
              <li>✓ Hardware wallets protect keys but NOT against signing malicious txs</li>
              <li>✓ A multi-wallet strategy is now standard practice</li>
            </ul>
          </div>

          {/* Interactive Security Score Calculator */}
          <WalletSecurityScoreCalculator />

          {/* Table of Contents */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: S.text, marginBottom: 12 }}>📋 Table of Contents</div>
            {[
              ["#why-wallet-security", "Why Wallet Security Matters in 2026"],
              ["#attack-vectors", "How Crypto Wallets Get Hacked"],
              ["#token-approvals", "Understanding Token Approvals & Permissions"],
              ["#wallet-firewalls", "Wallet Firewalls & Transaction Simulation"],
              ["#security-tools", "Essential Security Tools for 2026"],
              ["#hardware-wallets", "Hardware Wallet Best Practices"],
              ["#multi-wallet", "The Multi-Wallet Strategy"],
              ["#security-checklist", "10-Rule Security Checklist"],
              ["#compromised-response", "If Your Wallet Is Compromised"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <div key={href}>
                <a href={href} style={{ display: "block", color: S.primary, fontSize: 13, textDecoration: "none", padding: "4px 0", lineHeight: 1.6 }}>→ {label}</a>
              </div>
            ))}
          </div>
        </header>

        {/* Section 1: Why Wallet Security Matters */}
        <section id="why-wallet-security" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Why Wallet Security Matters in 2026</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The crypto landscape in 2026 has fundamentally shifted. It's no longer just about keeping your seed phrase safe—modern attackers exploit approvals, permissions, and signatures to drain accounts without ever touching your private keys.
          </p>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>The scale is staggering:</strong> In January 2026 alone, phishing attacks drained $311M from crypto users. That's roughly $10M per day. The attacks are increasingly sophisticated, using deepfakes, spoofed domains, and social engineering on Discord and Telegram communities.
          </p>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            But here's the good news: with proper tools and practices, you can reduce your risk to near zero. Hardware wallets, wallet firewalls, and regular approval audits have made sophisticated security accessible to everyone.
          </p>

          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: S.primary, marginBottom: 12 }}>Key Insight: The Threat Landscape Has Changed</h3>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>
              Old threats (weak passwords, stolen seed phrases) still exist, but new vectors dominate: approval exploits, ice phishing (permit abuse), address poisoning, and social engineering. Your wallet security strategy must account for all of these.
            </p>
          </div>
        </section>

        {/* Section 2: Attack Vectors */}
        <section id="attack-vectors" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>How Crypto Wallets Get Hacked</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Understanding the attack vectors is the first step in defending against them. Here are the most common methods attackers use in 2026:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {attackVectorsData.map((item) => (
              <div key={item.attack} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: S.text, margin: 0 }}>{item.attack}</h3>
                  <span style={{ fontSize: 11, fontWeight: 700 }}>{item.risk_level}</span>
                </div>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: "8px 0" }}><strong>How it works:</strong> {item.description}</p>
                <p style={{ fontSize: 13, color: S.green, lineHeight: 1.6, margin: 0 }}><strong>Prevention:</strong> {item.prevention}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Token Approvals */}
        <section id="token-approvals" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Understanding Token Approvals & Permissions</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Token approvals are the gateway to most wallet drains. When you use a DeFi app, you approve it to spend your tokens. Understanding how this works is critical to securing your funds.
          </p>

          <div style={{ background: `${S.red}15`, border: `1px solid ${S.red}40`, borderRadius: 12, padding: 16, marginBottom: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 8, color: S.red }}>⚠️ Critical: How Approvals Are Exploited</div>
            <p style={{ fontSize: 13, color: S.text, lineHeight: 1.7, margin: 0 }}>
              When you approve a contract to spend USDC, you're signing a transaction that says "This contract can transfer any amount of my USDC, forever." If that contract is malicious or becomes compromised, it will drain everything.
            </p>
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Infinite vs. Limited Approvals</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 24 }}>
            {[
              { type: "🔴 Infinite Approval", examples: "999,999,999 USDC", risk: "Contract can drain all tokens, forever", use: "Convenient but extremely risky" },
              { type: "🟢 Limited Approval", examples: "Exactly 100 USDC", risk: "Contract can only spend approved amount", use: "Must re-approve for larger amounts" },
            ].map((item) => (
              <div key={item.type} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 16 }}>
                <h4 style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>{item.type}</h4>
                <div style={{ fontSize: 12, color: S.text2, lineHeight: 1.8 }}>
                  <div><strong>Approval Amount:</strong> {item.examples}</div>
                  <div><strong>Risk:</strong> {item.risk}</div>
                  <div><strong>Recommendation:</strong> {item.use}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Best Practices for Approvals</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 2.2, fontSize: 14, marginBottom: 20 }}>
            <li><strong>Always approve limited amounts</strong> — If depositing 100 USDC, approve exactly 100, not unlimited</li>
            <li><strong>Verify contract addresses on Etherscan</strong> — Before approving, check the contract code matches the official dApp</li>
            <li><strong>Use time-limited approvals when possible</strong> — Some wallets support 24-hour or 30-day expiry on approvals</li>
            <li><strong>Monitor active approvals regularly</strong> — Use Revoke.cash monthly to audit and revoke unused permissions</li>
            <li><strong>Test new protocols with small amounts first</strong> — Deploy $10 before approving your full position</li>
            <li><strong>Never approve malicious contracts</strong> — Your wallet firewall will warn you if an approval looks suspicious</li>
          </ol>
        </section>

        {/* Section 4: Wallet Firewalls */}
        <section id="wallet-firewalls" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Wallet Firewalls & Transaction Simulation</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Modern wallet security has entered a new era: transaction simulation and real-time risk scoring. A wallet firewall intercepts transactions before they're signed and warns you of danger.
          </p>

          <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>The 3-Layer Defense Model</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[
              { layer: "Layer 1: Pre-Connection (Phishing Detection)", desc: "Before you connect to a website, your wallet firewall checks if the URL is a known phishing site. If it matches a scam database, you're blocked.", example: "Scam Sniffer Chrome extension blocks fake dapp links" },
              { layer: "Layer 2: Pre-Signing (Transaction Simulation)", desc: "Before you sign a transaction, the wallet firewall simulates it and shows you what will happen. If you're approving a drain contract or ice phishing permit, you see a red warning.", example: "Rabby simulates txs and shows 'You lose 1000 USDC'" },
              { layer: "Layer 3: Post-Permission (Approval Monitoring)", desc: "After you approve a contract, your wallet monitors it. If the contract suddenly tries to move your tokens, your firewall blocks it.", example: "Blowfish alerts if an approved contract tries unusual transactions" },
            ].map((item) => (
              <div key={item.layer} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 16 }}>
                <h4 style={{ fontSize: 13, fontWeight: 800, marginBottom: 8, color: S.primary }}>{item.layer}</h4>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: "0 0 8px 0" }}>{item.desc}</p>
                <p style={{ fontSize: 12, color: S.yellow, margin: 0 }}><strong>Example:</strong> {item.example}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Why Wallet Firewalls Matter More Than Hardware Wallets Alone</h3>
          <div style={{ background: `${S.secondary}10`, border: `1px solid ${S.secondary}40`, borderRadius: 12, padding: 16, marginBottom: 20 }}>
            <p style={{ fontSize: 13, color: S.text, lineHeight: 1.7, margin: 0 }}>
              A hardware wallet protects your seed phrase, but it doesn't protect you from approving a malicious contract. With a wallet firewall (Rabby, Blowfish), your Ledger can safely use DeFi because the firewall will warn you before you sign anything dangerous. This combination—hardware wallet + wallet firewall—is the gold standard in 2026.
            </p>
          </div>
        </section>

        {/* Section 5: Security Tools */}
        <section id="security-tools" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Essential Security Tools for 2026</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            These tools are the foundation of modern wallet security. Most are free and take minutes to set up.
          </p>

          <div style={{ overflowX: "auto", marginBottom: 24 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, color: S.text }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${S.border}` }}>
                  <th style={{ padding: 12, textAlign: "left", fontWeight: 800, color: S.primary }}>Tool</th>
                  <th style={{ padding: 12, textAlign: "left", fontWeight: 800, color: S.primary }}>Category</th>
                  <th style={{ padding: 12, textAlign: "left", fontWeight: 800, color: S.primary }}>Key Features</th>
                  <th style={{ padding: 12, textAlign: "left", fontWeight: 800, color: S.primary }}>Cost</th>
                </tr>
              </thead>
              <tbody>
                {securityToolsData.map((tool, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: 12, fontWeight: 600 }}>{tool.name}</td>
                    <td style={{ padding: 12, color: S.text2 }}>{tool.category}</td>
                    <td style={{ padding: 12, color: S.text2 }}>{tool.features}</td>
                    <td style={{ padding: 12, color: S.green, fontWeight: 600 }}>{tool.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Setup Recommendation</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 2.2, fontSize: 14 }}>
            <li><strong>Install Rabby Wallet</strong> (Chrome) — Replaces MetaMask with built-in phishing detection, tx simulation, and approval alerts</li>
            <li><strong>Install Scam Sniffer</strong> (Chrome) — Blocks phishing URLs before you connect your wallet</li>
            <li><strong>Bookmark Revoke.cash</strong> — Check your approvals monthly to revoke unused contracts</li>
            <li><strong>For Solana users: Install Phantom Security</strong> — Phantom's built-in tx previews catch most drain attempts</li>
            <li><strong>For Ethereum users on MetaMask: Install Blowfish</strong> (Chrome) — Adds approval warnings MetaMask lacks</li>
          </ol>
        </section>

        {/* Section 6: Hardware Wallets */}
        <section id="hardware-wallets" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Hardware Wallet Best Practices</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            A hardware wallet stores your private keys offline, making them immune to malware and phishing. But a hardware wallet is only half the equation—you must also use it correctly.
          </p>

          <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Best Hardware Wallets for 2026</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
            {[
              { icon: "🔐", name: "Ledger Nano X", price: "$149", features: "Bluetooth, 2000+ coins, most widely used", best_for: "Ethereum & multi-chain users" },
              { icon: "🛡️", name: "Trezor One", price: "$99", features: "USB-only, most audited code, transparent", best_for: "Bitcoin & security purists" },
              { icon: "⚡", name: "Ledger Stax", price: "$299", features: "Large e-ink display, premium UX, easy approval review", best_for: "High-value holders who want clarity" },
              { icon: "🌐", name: "Trezor Model T", price: "$249", features: "Touch screen, SLIP-0039 Shamir backup", best_for: "Advanced users wanting key fragmentation" },
            ].map((w) => (
              <div key={w.name} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 16 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{w.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{w.name}</div>
                <div style={{ fontSize: 12, color: S.yellow, marginBottom: 8 }}>{w.price}</div>
                <div style={{ fontSize: 12, color: S.text2, marginBottom: 12, lineHeight: 1.6 }}>{w.features}</div>
                <div style={{ fontSize: 11, color: S.green, fontStyle: "italic" }}>Best for: {w.best_for}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Hardware Wallet Setup Checklist</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 2.2, fontSize: 14, marginBottom: 20 }}>
            <li><strong>Purchase from official retailers only</strong> — Never buy from third-party sellers or eBay. Ledger.com or Trezor.io direct.</li>
            <li><strong>Verify the device is sealed</strong> — Check for tamper-evident packaging. If opened, refuse the delivery.</li>
            <li><strong>Verify authenticity</strong> — Visit Ledger/Trezor official website, enter the device serial number in their verification tool.</li>
            <li><strong>Initialize on a clean, offline device</strong> — Use a dedicated laptop that rarely connects to the internet.</li>
            <li><strong>Generate your seed phrase on the device</strong> — Let the hardware wallet generate your 12 or 24-word phrase, not a website.</li>
            <li><strong>Write down your seed phrase by hand</strong> — Use archival paper, not regular paper. Store in fireproof safe or metal backup device.</li>
            <li><strong>Verify your seed phrase</strong> — The device will ask you to re-enter words. This catches transcription errors.</li>
            <li><strong>Set a strong PIN</strong> — At least 6 digits. This protects the device if lost.</li>
            <li><strong>Test with a small amount</strong> — Send $5 of BTC/ETH to your hardware wallet and verify you can receive it.</li>
            <li><strong>Keep firmware updated</strong> — Check for firmware updates monthly on the official website.</li>
          </ol>

          <div style={{ background: `${S.yellow}15`, border: `1px solid ${S.yellow}40`, borderRadius: 12, padding: 16, marginBottom: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 8, color: S.yellow }}>⚠️ Blind Signing Risk</div>
            <p style={{ fontSize: 13, color: S.text, lineHeight: 1.7, margin: 0 }}>
              Some hardware wallets show tx details on a small screen, but most of the data is unreadable ("blind signing"). Always pair your hardware wallet with a wallet firewall (Rabby) that shows you what you're signing before the hardware wallet even sees it.
            </p>
          </div>
        </section>

        {/* Section 7: Multi-Wallet Strategy */}
        <section id="multi-wallet" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>The Multi-Wallet Strategy</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            In 2026, using a single wallet for everything is a security anti-pattern. The best approach is segmentation: different wallets for different activities, each with appropriate risk levels.
          </p>

          <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Three-Tier Wallet Architecture</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
            {[
              {
                tier: "🔒 Cold Wallet (Hardware)",
                purpose: "Long-term hodl storage",
                holds: "95% of your crypto",
                examples: "Ledger, Trezor",
                risk: "Very low",
                use_frequency: "Monthly or less",
                approval_limit: "None (rarely approves)",
              },
              {
                tier: "🟡 Hot Wallet (DeFi)",
                purpose: "Active trading & DeFi interactions",
                holds: "4-5% working capital",
                examples: "Rabby, MetaMask",
                risk: "Medium",
                use_frequency: "Daily",
                approval_limit: "Limited per dApp",
              },
              {
                tier: "🔥 Burner Wallet (Unverified)",
                purpose: "NFT mints, unverified tokens, risky interactions",
                holds: "$50-200 max",
                examples: "Fresh MetaMask instance",
                risk: "High (assume it will be drained)",
                use_frequency: "As needed",
                approval_limit: "Already assumed lost",
              },
            ].map((w) => (
              <div key={w.tier} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 16 }}>
                <h4 style={{ fontSize: 13, fontWeight: 800, marginBottom: 12, color: S.primary }}>{w.tier}</h4>
                <div style={{ fontSize: 12, color: S.text2, lineHeight: 1.8 }}>
                  <div><strong>Purpose:</strong> {w.purpose}</div>
                  <div><strong>Holds:</strong> {w.holds}</div>
                  <div><strong>Tools:</strong> {w.examples}</div>
                  <div><strong>Risk Level:</strong> {w.risk}</div>
                  <div><strong>Usage:</strong> {w.use_frequency}</div>
                  <div><strong>Approvals:</strong> {w.approval_limit}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Why This Works</h3>
          <div style={{ background: `${S.green}10`, border: `1px solid ${S.green}40`, borderRadius: 12, padding: 16 }}>
            <p style={{ fontSize: 13, color: S.text, lineHeight: 1.7, margin: 0 }}>
              <strong>Compartmentalization:</strong> If your DeFi wallet gets drained, your 95% in cold storage is untouched. If a burner wallet gets drained, you expected it. This strategy limits damage to the smallest possible surface area while keeping money productive in DeFi.
            </p>
          </div>
        </section>

        {/* Section 8: Security Checklist */}
        <section id="security-checklist" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Security Checklist: 10 Rules Every Crypto User Should Follow</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Use this checklist to audit your current security posture. Even if you follow 7 out of 10 rules, you're far ahead of most users.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {securityChecklistData.map((item, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 16, display: "flex", gap: 12 }}>
                <div style={{ fontSize: 24, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4, color: S.text }}>{item.rule}</h4>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 6px", borderRadius: 6, background: `${S.primary}20`, color: S.primary }}>{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 12, padding: 16, marginTop: 24 }}>
            <h3 style={{ fontSize: 13, fontWeight: 800, marginBottom: 8, color: S.primary }}>Scoring Your Security</h3>
            <div style={{ fontSize: 12, color: S.text2, lineHeight: 1.8 }}>
              <div><strong>10/10:</strong> You're in the top 1% of crypto security. Your funds are nearly impossible to steal.</div>
              <div><strong>7-9/10:</strong> Excellent security. You've covered the critical vectors and are well-protected.</div>
              <div><strong>5-6/10:</strong> Above average, but you have gaps. Prioritize getting a hardware wallet and wallet firewall.</div>
              <div><strong>Below 5/10:</strong> Your funds are at significant risk. Start with rule #1 (hardware wallet) immediately.</div>
            </div>
          </div>
        </section>

        {/* Section 9: If Compromised */}
        <section id="compromised-response" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>What To Do If Your Wallet Is Compromised</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            If you suspect your wallet has been hacked or drained, speed is critical. Blockchain transactions are irreversible, but there are steps you can take in the first few minutes.
          </p>

          <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Emergency Response Steps (In Order of Speed)</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[
              { step: "1. Immediately move any remaining funds", desc: "If your wallet still has crypto and isn't completely drained, move it to a new, secure wallet NOW. Speed matters—attackers may be actively monitoring." },
              { step: "2. Revoke all approvals", desc: "Go to Revoke.cash and revoke EVERY approval immediately. This stops an attacker from using old approvals to drain new deposits." },
              { step: "3. Check exchange deposit addresses", desc: "If the attacker has deposited your tokens to an exchange, contact the exchange's support immediately with proof of theft. Some exchanges can freeze accounts." },
              { step: "4. Report to authorities", desc: "File a report with the FBI IC3 (ic3.gov) and your local law enforcement. Include transaction hashes and attacker wallet addresses." },
              { step: "5. Preserve evidence", desc: "Take screenshots of all transaction hashes, attacker addresses, and the drained amounts. Store these for insurance claims or legal action." },
              { step: "6. Notify your contacts", desc: "If the attack was via social engineering (compromised Discord/Telegram), warn your friends that accounts impersonating you may contact them." },
              { step: "7. Use blockchain analytics", desc: "Services like Chainalysis or TRM Labs can track stolen tokens. Report the theft and you may recover funds if they're converted back to fiat." },
            ].map((item, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 16 }}>
                <h4 style={{ fontSize: 13, fontWeight: 800, marginBottom: 6, color: S.orange }}>{item.step}</h4>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: `${S.red}15`, border: `1px solid ${S.red}40`, borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 700, marginBottom: 8, color: S.red }}>❌ Important: Recovery Is Unlikely</div>
            <p style={{ fontSize: 13, color: S.text, lineHeight: 1.7, margin: 0 }}>
              In most cases, once crypto is stolen and moved off-chain, recovery is impossible. Blockchain transactions are irreversible. The best recovery strategy is prevention. If you've been drained, focus on securing your remaining assets and preventing future attacks.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: S.text, marginBottom: 8 }}>{faq.question}</h3>
              <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* Related Articles */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>Related Security Resources</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {[
              { title: "DeFi Safety Guide 2026", href: "/learn/defi-safety-guide-2026" },
              { title: "Smart Contract Security Audit", href: "/learn/smart-contract-security-guide" },
              { title: "Crypto Custody Guide 2026", href: "/learn/crypto-custody-guide-2026" },
              { title: "OnChain Identity & Privacy", href: "/learn/onchain-identity-guide" },
              { title: "Hardware Wallet Comparison", href: "/wallets" },
              { title: "Wallet Security Tools", href: "/tools/wallet-security-audit" },
            ].map((article, i) => (
              <Link key={i} href={article.href} style={{ display: "block", padding: 16, background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, color: S.primary, fontSize: 13, fontWeight: 700, textDecoration: "none", lineHeight: 1.6 }}>
                → {article.title}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.primary}15, ${S.primary}05)`, border: `1px solid ${S.primary}30`, borderRadius: 14, padding: 28, textAlign: "center" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>Ready to Secure Your Wallet?</h2>
          <p style={{ fontSize: 13, color: S.text2, marginBottom: 20, lineHeight: 1.7 }}>
            Start with a hardware wallet and a wallet firewall. These two tools alone reduce your risk by 95%.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/tools/wallet-security-audit" style={{ padding: "10px 22px", borderRadius: 10, background: `${S.primary}20`, border: `1px solid ${S.primary}40`, color: S.primary, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              🔍 Audit Your Wallet
            </Link>
            <Link href="/wallets" style={{ padding: "10px 22px", borderRadius: 10, background: `${S.green}20`, border: `1px solid ${S.green}40`, color: S.green, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              🛡️ Find Hardware Wallet
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ background: `${S.yellow}15`, border: `1px solid ${S.yellow}40`, borderRadius: 12, padding: 16, marginTop: 32, fontSize: 12, color: S.text2, lineHeight: 1.8 }}>
          ⚠️ <strong>Disclaimer:</strong> This guide is for educational purposes only and does not constitute financial or security advice. Cryptocurrency security threats evolve constantly. Always stay updated on the latest best practices from trusted sources like Ledger, Trezor, and the Ethereum Foundation. No security method is 100% foolproof. For significant holdings, consult a professional security expert. degen0x is not responsible for lost funds or security breaches resulting from user error or unforeseen vulnerabilities.
        </div>
      </article>

      <BackToTop />
    </main>
  );
}
