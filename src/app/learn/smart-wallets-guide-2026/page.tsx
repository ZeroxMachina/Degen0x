import type { Metadata } from "next";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Smart Wallets Guide 2026: Account Abstraction, Passkeys & Gasless UX Explained | degen0x",
  description:
    "Learn how smart wallets work in 2026. Understand account abstraction (ERC-4337), passkey authentication, gas sponsorship, session keys, and how wallets like Coinbase Smart Wallet, Safe, and Argent are reshaping crypto UX.",
  keywords: [
    "smart wallets 2026",
    "account abstraction wallet",
    "ERC-4337 guide",
    "passkey crypto wallet",
    "gasless wallet",
    "session keys wallet",
    "coinbase smart wallet",
    "safe smart account",
    "argent wallet guide",
  ],
  openGraph: {
    title: "Smart Wallets Guide 2026: Account Abstraction & Passkey Wallets Explained",
    description:
      "How smart wallets use account abstraction, passkeys, and gas sponsorship to make crypto as easy as logging into an app. Coinbase Smart Wallet, Safe, and Argent compared.",
    url: "https://degen0x.com/learn/smart-wallets-guide-2026",
    type: "article",
    publishedTime: "2026-03-16T00:00:00Z",
    modifiedTime: "2026-03-16T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: "https://degen0x.com/og-smart-wallets-guide-2026.png",
        width: 1200,
        height: 630,
        alt: "Smart Wallets Guide 2026 — Account abstraction, passkeys, and gasless UX explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Wallets Guide 2026",
    description:
      "Account abstraction wallets explained: passkey login, gas sponsorship, session keys, and social recovery. Coinbase Smart Wallet vs Safe vs Argent.",
    images: ["https://degen0x.com/og-smart-wallets-guide-2026.png"],
  },
};

// ─── Structured Data ───────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Smart Wallets Guide 2026: Account Abstraction, Passkeys & Gasless UX",
  description:
    "A complete guide to smart wallets in 2026: how account abstraction (ERC-4337) works, passkey authentication, gas sponsorship, session keys, and a comparison of Coinbase Smart Wallet, Safe, and Argent.",
  url: "https://degen0x.com/learn/smart-wallets-guide-2026",
  datePublished: "2026-03-16T00:00:00Z",
  dateModified: "2026-03-16T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-smart-wallets-guide-2026.png",
  wordCount: 2600,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is a smart wallet?",
    answer:
      "A smart wallet is a crypto wallet backed by a smart contract account instead of an externally owned account (EOA). This enables features impossible with traditional wallets: gasless transactions, passkey login, social recovery, session keys, and batched operations — all without seed phrases.",
  },
  {
    question: "How does account abstraction (ERC-4337) work?",
    answer:
      "ERC-4337 introduces a new transaction flow where UserOperations are sent to a separate mempool, bundled by Bundlers, and executed through an EntryPoint contract. This separates the signer from the account, enabling smart contract wallets with custom validation logic, gas sponsorship via Paymasters, and flexible authentication methods.",
  },
  {
    question: "Can I use passkeys instead of seed phrases?",
    answer:
      "Yes. Smart wallets like Coinbase Smart Wallet and Safe use passkeys (WebAuthn) for authentication — you sign transactions with Face ID, Touch ID, or a hardware security key. No seed phrase needed. The passkey is stored in your device's secure enclave, making it both easier to use and harder to phish.",
  },
  {
    question: "What are session keys?",
    answer:
      "Session keys are temporary, scoped permissions that let dApps execute transactions on your behalf without prompting for approval each time. For example, you can grant a game 1 hour of session key access to move in-game tokens, without giving it full wallet control. The session expires automatically.",
  },
  {
    question: "Which smart wallet is best in 2026?",
    answer:
      "Coinbase Smart Wallet is best for mainstream users with its passkey-first design and free gas on Base. Safe is best for teams and DAOs with its multi-sig and modular architecture. Argent excels on StarkNet with native account abstraction. The best choice depends on your chain preference and use case.",
  },
  {
    question: "Are smart wallets secure?",
    answer:
      "Smart wallets can be more secure than traditional EOA wallets because they support social recovery, spending limits, and multi-factor authentication. However, they introduce smart contract risk — bugs in the wallet contract could be exploited. Major smart wallet contracts (Safe, Coinbase) have been extensively audited.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

// ─── Wallet Data ────────────────────────────────────────────────────────────────
const wallets = [
  {
    name: "Coinbase Smart Wallet",
    subtitle: "by Coinbase",
    chains: "Base, Ethereum, Arbitrum, Optimism, Polygon",
    auth: "Passkeys (Face ID / Touch ID)",
    bestFor: "Mainstream users & onboarding",
    users: "10M+ created",
    color: "#3b82f6",
    description:
      "The most widely adopted smart wallet. Uses passkeys by default — no seed phrase, no extension to install. Gas is sponsored on Base, making it completely free for new users. Deep integration with Coinbase ecosystem and one-click onboarding from the Coinbase app.",
  },
  {
    name: "Safe (Smart Account)",
    subtitle: "formerly Gnosis Safe",
    chains: "14+ EVM networks",
    auth: "Multi-sig + Modules",
    bestFor: "Teams, DAOs & treasury management",
    users: "$100B+ in assets secured",
    color: "#22c55e",
    description:
      "The gold standard for multi-signature smart accounts. Safe's modular architecture lets you add plugins for session keys, spending policies, recovery, and more. Used by most major DAOs and crypto treasuries. Now supports passkey signers and ERC-4337 natively.",
  },
  {
    name: "Argent",
    subtitle: "StarkNet native",
    chains: "StarkNet, Ethereum",
    auth: "Email + Guardian recovery",
    bestFor: "StarkNet users & mobile-first UX",
    users: "2M+ accounts",
    color: "#f472b6",
    description:
      "Pioneered smart wallet UX before ERC-4337 existed. On StarkNet, every account is natively a smart account — no workaround needed. Features guardian-based social recovery, daily spending limits, and a polished mobile experience that rivals traditional fintech apps.",
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────
export default function SmartWalletsGuide2026Page() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style>{`
        .smart-wallets-article a:focus-visible {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
          border-radius: 4px;
        }
        .smart-wallets-article button:focus-visible {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
          border-radius: 4px;
        }
      `}</style>
      <StructuredData data={combinedSchema} />

      <article className="smart-wallets-article" style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "#8b949e", marginBottom: 24 }}>
          <a href="/" style={{ color: "#58a6ff", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 8px" }}>/</span>
          <a href="/learn" style={{ color: "#58a6ff", textDecoration: "none" }}>Learn</a>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Smart Wallets Guide 2026</span>
        </nav>

        {/* ── Header ── */}
        <header style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600,
              background: "#6366f120", color: "#818cf8", border: "1px solid #6366f140",
            }}>
              Wallets
            </span>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600,
              background: "#0369a120", color: "#38bdf8", border: "1px solid #0369a140",
            }}>
              Beginner-Friendly
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 14,
            color: "#e6edf3",
          }}>
            Smart Wallets in 2026: <span style={{
              background: "linear-gradient(135deg, #60a5fa, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>No Seed Phrases, No Gas Fees, No Friction</span>
          </h1>
          <p style={{ color: "#c9d1d9", fontSize: 17, lineHeight: 1.7, marginBottom: 10 }}>
            The era of 12-word seed phrases and confusing gas popups is ending. Smart wallets —
            powered by account abstraction (ERC-4337) — let you log in with Face ID, skip gas fees
            entirely, and recover your wallet through trusted contacts instead of a paper backup.
            Coinbase Smart Wallet alone has created over 10 million accounts. This guide explains
            the technology, compares the top smart wallets, and shows you how to get started.
          </p>
          <div style={{ fontSize: 13, color: "#8b949e" }}>Updated March 2026 · 11 min read</div>
        </header>

        {/* ── Table of Contents ── */}
        <nav aria-label="Table of Contents" style={{
          background: "#161b22", border: "1px solid #30363d", borderRadius: 12,
          padding: 20, marginBottom: 40,
        }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: "#58a6ff" }}>
            Table of Contents
          </h2>
          <ol style={{ paddingLeft: 20, color: "#8b949e", fontSize: 14, lineHeight: 2.1, margin: 0 }}>
            <li><a href="#what-are-smart-wallets" style={{ color: "#58a6ff", textDecoration: "none" }}>What Are Smart Wallets?</a></li>
            <li><a href="#eoa-vs-smart" style={{ color: "#58a6ff", textDecoration: "none" }}>EOA vs. Smart Account: What Changed</a></li>
            <li><a href="#erc-4337" style={{ color: "#58a6ff", textDecoration: "none" }}>How ERC-4337 Account Abstraction Works</a></li>
            <li><a href="#killer-features" style={{ color: "#58a6ff", textDecoration: "none" }}>5 Killer Features of Smart Wallets</a></li>
            <li><a href="#wallets" style={{ color: "#58a6ff", textDecoration: "none" }}>Top Smart Wallets in 2026</a></li>
            <li><a href="#how-to-start" style={{ color: "#58a6ff", textDecoration: "none" }}>How to Create a Smart Wallet (Step-by-Step)</a></li>
            <li><a href="#risks" style={{ color: "#58a6ff", textDecoration: "none" }}>Risks &amp; Limitations</a></li>
            <li><a href="#faq" style={{ color: "#58a6ff", textDecoration: "none" }}>FAQ</a></li>
          </ol>
        </nav>

        {/* ── Section 1: What Are Smart Wallets ── */}
        <section id="what-are-smart-wallets" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            1. What Are Smart Wallets?
          </h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            A <strong style={{ color: "#e6edf3" }}>smart wallet</strong> is a crypto wallet where
            your account is a smart contract, not just a private key. Traditional wallets (MetaMask,
            Phantom) use Externally Owned Accounts (EOAs) — a single private key controls everything.
            Smart wallets replace that with programmable logic: who can sign, how gas is paid, what
            happens if you lose access, and what limits apply.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals.
          </p>
        </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginBottom: 20 }}>
            <div style={{ background: "#161b22", border: "1px solid #f8514930", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f85149", marginBottom: 8 }}>Traditional Wallet (EOA)</h3>
              <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                One private key = one account. Lose the seed phrase, lose everything. Every transaction
                needs ETH for gas. No recovery, no spending limits, no batching. The UX that has kept
                crypto inaccessible to mainstream users for a decade.
              </p>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #22c55e30", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#22c55e", marginBottom: 8 }}>Smart Wallet</h3>
              <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                A smart contract is your account. Log in with passkeys (Face ID). Gas can be
                sponsored — you pay nothing. Social recovery through trusted guardians. Session keys
                for dApps. Batch multiple actions in one click. The wallet disappears into the
                background.
              </p>
            </div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-16"
          updatedDate="2026-03-16"
          readingTime={3}
          section="learn"
        />

          <div style={{ background: "#161b2280", border: "1px solid #6366f140", borderRadius: 12, padding: 16 }}>
            <p style={{ color: "#818cf8", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              💡 <strong>Key insight:</strong> Smart wallets don&apos;t change what you can do on-chain —
              they change <em>how easily you can do it</em>. The goal is making crypto feel like any
              other app: sign in with biometrics, never think about gas, recover if you lose your phone.
            </p>
          </div>
        </section>

        {/* ── Section 2: EOA vs Smart Account ── */}
        <section id="eoa-vs-smart" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            2. EOA vs. Smart Account: What Changed
          </h2>
          <div role="region" aria-label="EOA vs Smart Account comparison" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" as const, marginBottom: 20 }}>
            <table style={{
              width: "100%", minWidth: 480, borderCollapse: "collapse", fontSize: 14,
              background: "#161b22", borderRadius: 12, overflow: "hidden",
            }}>
              <thead>
                <tr style={{ background: "#21262d" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600 }}>Feature</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600 }}>EOA Wallet</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600 }}>Smart Wallet</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Authentication", eoa: "Private key / seed phrase", smart: "Passkeys, biometrics, social login" },
                  { feature: "Gas payment", eoa: "User pays in ETH", smart: "Sponsored (Paymaster) or any token" },
                  { feature: "Recovery", eoa: "Seed phrase only", smart: "Social recovery, guardians, email" },
                  { feature: "Transaction batching", eoa: "One action per tx", smart: "Multiple actions in one tx" },
                  { feature: "Spending limits", eoa: "Not possible", smart: "Configurable per-session or daily" },
                  { feature: "Multi-sig", eoa: "Requires separate contract", smart: "Built-in (e.g., Safe)" },
                  { feature: "Upgradability", eoa: "Impossible", smart: "Modular plugin architecture" },
                ].map((row, i) => (
                  <tr key={row.feature} style={{ borderTop: "1px solid #30363d", background: i % 2 === 0 ? "transparent" : "#0d111780" }}>
                    <td style={{ padding: "10px 16px", color: "#58a6ff", fontWeight: 600 }}>{row.feature}</td>
                    <td style={{ padding: "10px 16px", color: "#f85149" }}>{row.eoa}</td>
                    <td style={{ padding: "10px 16px", color: "#22c55e" }}>{row.smart}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 3: ERC-4337 ── */}
        <section id="erc-4337" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            3. How ERC-4337 Account Abstraction Works
          </h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: "#e6edf3" }}>ERC-4337</strong> is the standard that makes smart
            wallets possible on Ethereum without changing the protocol itself. It introduces a parallel
            transaction pipeline with four key actors:
          </p>
          {[
            {
              step: "1",
              title: "UserOperation",
              body: "Instead of a regular transaction, you create a UserOperation (UserOp) — a data structure describing what you want to do. It's signed by your passkey or private key and sent to a separate UserOp mempool.",
              color: "#3b82f6",
            },
            {
              step: "2",
              title: "Bundler",
              body: "Bundlers collect multiple UserOps and package them into a single on-chain transaction. This is how gas abstraction works — the bundler pays gas and gets reimbursed by the smart account or Paymaster.",
              color: "#22c55e",
            },
            {
              step: "3",
              title: "EntryPoint Contract",
              body: "A singleton contract on every EVM chain that validates and executes UserOps. It calls your smart account's validation function to verify the signature, then executes the requested operations.",
              color: "#f472b6",
            },
            {
              step: "4",
              title: "Paymaster (Gas Sponsor)",
              body: "An optional contract that sponsors gas costs. The dApp or wallet provider pays for your transaction — you pay nothing. Paymasters can set rules: sponsor only certain actions, cap daily gas, or accept ERC-20 tokens as payment.",
              color: "#f97316",
            },
          ].map((item) => (
            <div key={item.step} style={{
              background: "#161b22", border: `1px solid ${item.color}30`,
              borderRadius: 12, padding: 16, marginBottom: 12,
              display: "flex", gap: 16, alignItems: "flex-start",
            }}>
              <div style={{
                minWidth: 36, height: 36, borderRadius: "50%",
                background: `${item.color}20`, border: `1px solid ${item.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 800, color: item.color,
              }}>
                {item.step}
              </div>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: item.color, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}
          <div style={{ background: "#161b2280", border: "1px solid #a855f740", borderRadius: 12, padding: 16, marginTop: 16 }}>
            <p style={{ color: "#c084fc", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              🔑 <strong>Native AA chains:</strong> Some chains like StarkNet, zkSync Era, and
              Abstract have account abstraction built into the protocol — every account is already a
              smart account. On these chains, ERC-4337 isn&apos;t needed because the feature is native.
            </p>
          </div>
        </section>

        {/* ── Section 4: Killer Features ── */}
        <section id="killer-features" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            4. 5 Killer Features of Smart Wallets
          </h2>
          {[
            {
              title: "Passkey Authentication",
              body: "Replace seed phrases with biometric login. Your private key is generated and stored in your device's secure enclave (TPM/Secure Element). Sign transactions with Face ID, Touch ID, or a YubiKey. No phishing risk — passkeys are domain-bound and can't be entered on fake sites.",
              color: "#3b82f6",
              icon: "🔐",
            },
            {
              title: "Gas Sponsorship",
              body: "Paymasters let dApps pay your gas fees. Coinbase sponsors all gas on Base. Many DeFi protocols sponsor gas for first-time users. You can also pay gas in stablecoins (USDC) instead of ETH — the Paymaster swaps it behind the scenes.",
              color: "#22c55e",
              icon: "⛽",
            },
            {
              title: "Social Recovery",
              body: "Designate trusted guardians (friends, family, or a hardware wallet) who can help you recover your account if you lose your device. Argent pioneered this: 3 of 5 guardians can rotate your signing key. No single point of failure.",
              color: "#f472b6",
              icon: "🛡️",
            },
            {
              title: "Session Keys",
              body: "Grant dApps temporary, scoped permissions. A game can move your in-game tokens for 1 hour. A DeFi protocol can auto-compound your yield daily. The session expires automatically — no permanent approvals sitting in your wallet.",
              color: "#f97316",
              icon: "⏱️",
            },
            {
              title: "Transaction Batching",
              body: "Approve a token + swap it + stake the result — all in one transaction. Smart wallets can bundle multiple operations into a single on-chain call. Fewer confirmations, lower total gas, and a smoother experience.",
              color: "#a855f7",
              icon: "📦",
            },
          ].map((feat) => (
            <div key={feat.title} style={{
              background: "#161b22", border: `1px solid ${feat.color}30`,
              borderRadius: 12, padding: 18, marginBottom: 12,
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: feat.color, marginBottom: 8 }}>
                {feat.icon} {feat.title}
              </h3>
              <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{feat.body}</p>
            </div>
          ))}
        </section>

        {/* ── Section 5: Top Smart Wallets ── */}
        <section id="wallets" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            5. Top Smart Wallets in 2026
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
            {wallets.map((w) => (
              <div key={w.name} style={{
                background: "#161b22", border: `1px solid ${w.color}30`,
                borderRadius: 12, padding: 20,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: w.color, marginBottom: 2 }}>{w.name}</h3>
                    <span style={{ fontSize: 11, color: "#8b949e" }}>{w.subtitle}</span>
                  </div>
                  <span style={{
                    padding: "2px 8px", borderRadius: 6, fontSize: 11, fontWeight: 600,
                    background: `${w.color}20`, color: w.color, border: `1px solid ${w.color}40`,
                  }}>
                    {w.auth}
                  </span>
                </div>
                <p style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
                  {w.description}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontSize: 11, color: "#8b949e" }}>
                  <span>🔗 {w.chains}</span>
                  <span>👥 {w.users}</span>
                  <span>✅ Best for: {w.bestFor}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div role="region" aria-label="Smart wallet comparison table" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" as const }}>
            <table style={{
              width: "100%", minWidth: 620, borderCollapse: "collapse", fontSize: 13,
              background: "#161b22", borderRadius: 12, overflow: "hidden",
            }}>
              <thead>
                <tr style={{ background: "#21262d" }}>
                  {["Wallet", "Auth Method", "Chains", "Gas Sponsorship", "Recovery", "Best For"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#8b949e", fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Coinbase Smart Wallet", auth: "Passkeys", chains: "Base, ETH, L2s", gas: "Free on Base", recovery: "Coinbase backup", best: "Mainstream users" },
                  { name: "Safe", auth: "Multi-sig + Modules", chains: "14+ EVM", gas: "Via relay", recovery: "Guardian modules", best: "Teams & DAOs" },
                  { name: "Argent", auth: "Email + Guardians", chains: "StarkNet, ETH", gas: "Sponsored on StarkNet", recovery: "Social recovery", best: "StarkNet & mobile" },
                ].map((row, i) => (
                  <tr key={row.name} style={{ borderTop: "1px solid #30363d", background: i % 2 === 0 ? "transparent" : "#0d111780" }}>
                    <td style={{ padding: "10px 14px", color: "#58a6ff", fontWeight: 600 }}>{row.name}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.auth}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.chains}</td>
                    <td style={{ padding: "10px 14px", color: "#22c55e", fontWeight: 600 }}>{row.gas}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.recovery}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 6: How to Start ── */}
        <section id="how-to-start" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            6. How to Create a Smart Wallet (Step-by-Step)
          </h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Creating a smart wallet is deliberately simpler than setting up a traditional wallet.
            Here&apos;s the Coinbase Smart Wallet flow as an example:
          </p>
          {[
            { step: "Visit a supported dApp", detail: "Go to any app that supports Coinbase Smart Wallet (most Base ecosystem dApps do). Click 'Connect Wallet' and select Coinbase Smart Wallet." },
            { step: "Create with passkey", detail: "You'll be prompted to create a passkey using Face ID, Touch ID, or your device's biometric. This generates a cryptographic key pair stored in your device's secure enclave. No seed phrase is shown or needed." },
            { step: "Your wallet is ready", detail: "That's it. Your smart contract account is deployed on-chain. You have an address, can receive tokens, and interact with dApps. Gas on Base is sponsored — you don't need ETH to start." },
            { step: "Add a backup (recommended)", detail: "Connect a Coinbase account or add a second passkey on another device as a backup. This ensures you can recover access if you lose your primary device." },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#161b22", border: "1px solid #30363d",
              borderRadius: 12, padding: 16, marginBottom: 10,
              display: "flex", gap: 14, alignItems: "flex-start",
            }}>
              <div style={{
                minWidth: 28, height: 28, borderRadius: "50%",
                background: "#6366f120", border: "1px solid #6366f140",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, color: "#818cf8",
              }}>
                {i + 1}
              </div>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 4 }}>{item.step}</h3>
                <p style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ── Section 7: Risks ── */}
        <section id="risks" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            7. Risks &amp; Limitations
          </h2>
          {[
            { title: "Smart Contract Risk", body: "Your wallet is a smart contract — bugs could lead to fund loss. Major wallets like Safe have been battle-tested for years, but newer implementations carry higher risk. Always check audit status." },
            { title: "Vendor Lock-in", body: "Some smart wallets are tightly coupled to a specific provider (Coinbase, Argent). If the provider shuts down, recovery depends on their infrastructure. Self-custodial options like Safe mitigate this." },
            { title: "Cross-chain Fragmentation", body: "Your smart wallet address may differ across chains, or not be deployable on all chains. ERC-4337 support varies. Always verify your wallet supports the chain you want to use." },
            { title: "Higher Gas (Sometimes)", body: "Smart contract wallet transactions can cost more gas than EOA transactions because the contract logic needs to execute. Gas sponsorship usually masks this, but it's worth knowing." },
            { title: "Passkey Recovery Edge Cases", body: "If you only have one passkey and lose that device, recovery depends on cloud backup (Apple/Google) or guardian setup. Users should set up backup authentication early." },
          ].map((risk) => (
            <div key={risk.title} style={{
              background: "#161b22", border: "1px solid #f8514920",
              borderRadius: 12, padding: 16, marginBottom: 10,
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f85149", marginBottom: 6 }}>⚠️ {risk.title}</h3>
              <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{risk.body}</p>
            </div>
          ))}
          <div style={{ background: "#161b2280", border: "1px solid #d2992240", borderRadius: 12, padding: 16, marginTop: 16 }}>
            <p style={{ color: "#d29922", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              ⚠️ This guide is for informational purposes only. It is not financial advice.
              Always do your own research before using any wallet or DeFi protocol.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: "#e6edf3" }}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q: "What is a smart wallet?",
              a: "A smart wallet uses a smart contract as your account instead of a simple private key. This enables features like passkey login, gasless transactions, social recovery, session keys, and transaction batching — none of which are possible with traditional EOA wallets.",
            },
            {
              q: "Do I still need a seed phrase?",
              a: "No. Smart wallets like Coinbase Smart Wallet use passkeys (biometric authentication) instead of seed phrases. Your cryptographic keys are stored in your device's secure enclave and backed up via iCloud Keychain or Google Password Manager.",
            },
            {
              q: "Are smart wallets free to use?",
              a: "Creating a smart wallet is typically free. Gas costs depend on the provider — Coinbase sponsors all gas on Base, making it completely free. On other chains, you may pay gas or use a Paymaster that accepts stablecoins.",
            },
            {
              q: "Can I use a smart wallet with any dApp?",
              a: "Most modern dApps support smart wallets through ERC-4337 or WalletConnect. However, some older dApps that only support EOA wallets may not work. Compatibility is improving rapidly as the ecosystem standardizes on account abstraction.",
            },
            {
              q: "What happens if Coinbase/Argent shuts down?",
              a: "Your smart contract account exists on-chain independently of the provider. With Safe, you have full self-custody. With Coinbase Smart Wallet, your passkey still works, but you'd need alternative infrastructure to submit transactions. Setting up guardian recovery provides additional protection.",
            },
            {
              q: "Is a hardware wallet still safer?",
              a: "Hardware wallets and smart wallets serve different purposes. A hardware wallet (Ledger, Trezor) is excellent as a signer or guardian for a smart wallet. The ideal setup: a smart wallet for daily use with a hardware wallet as a recovery guardian.",
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#161b22", border: "1px solid #30363d",
              borderRadius: 12, padding: 20, marginBottom: 12,
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>
                {item.q}
              </h3>
              <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                {item.a}
              </p>
            </div>
          ))}
        </section>

        {/* ── Related Articles ── */}
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            Related Articles
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {[
              { href: "/learn/account-abstraction", label: "Account Abstraction Deep Dive" },
              { href: "/wallets", label: "Best Crypto Wallets 2026" },
              { href: "/learn/crypto-security-masterclass-2026", label: "Crypto Security Masterclass" },
              { href: "/learn/chain-abstraction-guide-2026", label: "Chain Abstraction Guide" },
              { href: "/tools/wallet-analyzer", label: "Wallet Analyzer Tool" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{
                display: "block", padding: "14px 16px",
                background: "#161b22", border: "1px solid #30363d",
                borderRadius: 10, color: "#58a6ff", fontSize: 14,
                textDecoration: "none", fontWeight: 500,
              }}>
                {link.label} →
              </a>
            ))}
          </div>
        </section>

      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/investing/crypto-narrative-trading-guide" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Narrative Trading Guide</a></li>
            <li><a href="/investing/crypto-with-most-staking-rewards" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto With Most Staking Rewards</a></li>
            <li><a href="/tools/bitcoin-rainbow-chart" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Bitcoin Rainbow Chart</a></li>
            <li><a href="/tools/crypto-heatmap-live" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Heatmap Live</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>

      <BackToTop />
      <RelatedContent category="learn" currentSlug="/learn/smart-wallets-guide-2026" />
    </div>
  );
}
