'use client';

import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { useState } from "react";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Passkey Wallets & Embedded Wallets Guide 2026", href: "/learn/passkey-embedded-wallets-guide-2026" },
];

export default function PasskeyEmbeddedWalletsPage() {
  const [activeTab, setActiveTab] = useState<"what-are" | "providers" | "how-to-start">("what-are");

  const S = {
    bg: "var(--color-bg, #0d1117)",
    surface: "var(--color-surface, #161b22)",
    surface2: "#1c2330",
    border: "var(--glass-border, #30363d)",
    text: "var(--color-text, #e6edf3)",
    text2: "var(--color-text-secondary, #8b949e)",
    primary: "var(--color-primary, #627EEA)",
    green: "#3fb950",
    red: "#f85149",
    orange: "#f0883e",
    yellow: "#d29922",
    blue: "#58a6ff",
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

        {/* Header */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>🔑 Wallets</span>
            <span style={{ fontSize: 13, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>🛡️ Security</span>
            <span style={{ fontSize: 13, color: S.text2 }}>Updated March 25, 2026 · 14 min read</span>
          </div>

          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Passkey Wallets & Embedded Wallets Guide 2026: No Seed Phrases Required
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            Passkey wallets represent a fundamental shift in how users interact with crypto. By replacing seed phrases with biometric authentication and WebAuthn, they deliver Web2-like user experiences while maintaining Web3 ownership. As of March 2026, 1M+ users have adopted Coinbase Smart Wallet, 75M+ wallets use Privy, and 30+ embedded wallet providers compete in this rapidly commoditizing market. This guide covers how passkeys work, the top providers, and how to get started.
          </p>

          {/* Quick Stats Box */}
          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 14, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: S.primary, marginBottom: 16 }}>🔐 Passkey Wallets Market 2026</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.primary, marginBottom: 4 }}>1M+</div>
                <div style={{ fontSize: 13, color: S.text2 }}>Coinbase Smart Wallet Users</div>
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.green, marginBottom: 4 }}>75M+</div>
                <div style={{ fontSize: 13, color: S.text2 }}>Privy Wallets Created</div>
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.blue, marginBottom: 4 }}>30+</div>
                <div style={{ fontSize: 13, color: S.text2 }}>Embedded Wallet Providers</div>
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.orange, marginBottom: 4 }}>5.2B</div>
                <div style={{ fontSize: 13, color: S.text2 }}>Projected Digital Wallet Users</div>
              </div>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div role="tablist" aria-label="Passkey wallets guide sections" style={{ display: "flex", gap: 8, marginBottom: 32, borderBottom: `1px solid ${S.border}`, paddingBottom: 0, flexWrap: "wrap" }}>
          {[
            { id: "what-are", label: "📖 What Are Passkey Wallets?" },
            { id: "providers", label: "⚙️ Top Providers Compared" },
            { id: "how-to-start", label: "💻 How to Get Started" },
          ].map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              style={{
                padding: "14px 20px",
                background: activeTab === tab.id ? S.surface : "transparent",
                border: `1px solid ${activeTab === tab.id ? S.primary : "transparent"}`,
                borderBottom: activeTab === tab.id ? `3px solid ${S.primary}` : `1px solid ${S.border}`,
                color: activeTab === tab.id ? S.primary : S.text2,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: "8px 8px 0 0",
                transition: "all 0.2s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: What Are Passkey Wallets? */}
        {activeTab === "what-are" && (
          <div role="tabpanel" style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>Understanding Passkey Wallets</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
                Passkey wallets eliminate seed phrases by using WebAuthn/FIDO2 biometric authentication and device-bound keys. Instead of writing down a 12-word seed phrase, you authenticate with your fingerprint, face, or security key. This represents a fundamental UX shift: crypto becomes as easy as using your phone.
              </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Traditional vs. Modern Wallet Types</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
                {[
                  {
                    title: "Seed Phrase Wallets",
                    icon: "🔑",
                    features: [
                      "12/24 word recovery codes",
                      "High UX friction for users",
                      "Risk of phrase loss or theft",
                      "Non-custodial ownership",
                      "Examples: MetaMask, Phantom",
                      "Market: mature & standard"
                    ]
                  },
                  {
                    title: "MPC Wallets",
                    icon: "🔐",
                    features: [
                      "Multi-party computation key sharding",
                      "No single seed phrase",
                      "Provider control possible",
                      "Social recovery options",
                      "Examples: Turnkey, Para",
                      "Best for: developer control"
                    ]
                  },
                  {
                    title: "Passkey Wallets",
                    icon: "👆",
                    features: [
                      "WebAuthn/FIDO2 biometrics",
                      "Fingerprint, face, or security key",
                      "Device-bound keys",
                      "No seed phrases ever",
                      "Examples: Coinbase Smart Wallet",
                      "Best for: Web2-like UX"
                    ]
                  },
                  {
                    title: "Embedded Wallets",
                    icon: "🎯",
                    features: [
                      "SDK integrated into apps",
                      "Custodial or non-custodial",
                      "MPC + passkeys often combined",
                      "Used for: gaming, social apps",
                      "Examples: Privy, Dynamic, Web3Auth",
                      "Market: fastest growing"
                    ]
                  }
                ].map(w => (
                  <div key={w.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{w.icon}</div>
                    <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 14 }}>{w.title}</h4>
                    <ul style={{ paddingLeft: 16, color: S.text2, fontSize: 14, lineHeight: 1.8, listStyle: "none" }}>
                      {w.features.map(f => (
                        <li key={f} style={{ marginBottom: 8 }}>✓ {f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>How Passkeys Work: WebAuthn & FIDO2</h3>
              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
                Passkeys use the WebAuthn API (W3C standard) and FIDO2 protocol for cryptographic authentication:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "Registration",
                    desc: "When you create a passkey wallet, your device generates a cryptographic key pair. The private key stays on your device; the public key is registered with the wallet provider.",
                    color: S.primary
                  },
                  {
                    title: "Biometric Lock",
                    desc: "Every transaction requires fingerprint, face ID, or PIN verification. This is hardware-backed security on modern phones and laptops.",
                    color: S.blue
                  },
                  {
                    title: "Device-Bound Keys",
                    desc: "Private keys never leave your device. They're encrypted and stored in the Secure Enclave (iOS), Strongbox (Android), or TPM (Windows).",
                    color: S.green
                  },
                  {
                    title: "Challenge-Response Auth",
                    desc: "To sign a transaction, the wallet sends a cryptographic challenge. Your device signs it with your private key — no seed phrase needed.",
                    color: S.orange
                  },
                  {
                    title: "Cross-Device Sync",
                    desc: "Modern devices sync passkeys via iCloud Keychain, Google Password Manager, or Windows Hello. Recover access on a new phone with the same biometric.",
                    color: S.yellow
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 14 }}>
                    <span style={{ fontSize: 20, flexShrink: 0, color: item.color }}>→</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4, color: item.color }}>{item.title}</h4>
                      <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Why Passkey Wallets Matter</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    title: "🎯 End of Seed Phrases",
                    desc: "No 12 words to remember or write down. Users can't lose their seed phrase because it doesn't exist."
                  },
                  {
                    title: "📱 Mobile-First UX",
                    desc: "Fingerprint auth works like Apple Pay. Crypto feels as natural as unlocking your phone."
                  },
                  {
                    title: "🔒 Hardware-Backed Security",
                    desc: "Keys are protected by device security processors (Secure Enclave, Strongbox). More secure than hot wallets."
                  },
                  {
                    title: "🌍 Account Abstraction Ready",
                    desc: "Works natively with ERC-4337 smart account wallets. Enables gas sponsorship and social recovery."
                  },
                  {
                    title: "👥 Social Recovery",
                    desc: "Recover wallet if device is lost using trusted contacts. No seed phrase backup needed."
                  },
                  {
                    title: "🚀 Mass Adoption Catalyst",
                    desc: "Passkeys are the missing link for mainstream adoption. They bridge Web2 familiarity with Web3 ownership."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Embedded Wallets: The Infrastructure Layer</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
                  Embedded wallets are wallet infrastructure built into apps. Instead of users downloading MetaMask, the app includes wallet functionality natively. This is how games, social apps, and enterprise platforms integrate crypto.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { aspect: "Custody Model", explanation: "Can be custodial (provider holds keys), non-custodial (user controls keys), or hybrid (MPC shared control)." },
                    { aspect: "Key Technology", explanation: "Often combines MPC (multi-party computation) for key sharding, passkeys for auth, and TEEs (trusted execution environments) for security." },
                    { aspect: "Social Recovery", explanation: "Users can recover wallets through trusted contacts, Google/Apple accounts, or email — without seed phrases." },
                    { aspect: "Developer DX", explanation: "SDKs for React, Flutter, Unity. Developers integrate wallets in minutes, not weeks." },
                    { aspect: "Use Cases", explanation: "Gaming (seamless in-game payments), social apps (DMs with crypto), enterprise (employee crypto payroll), marketplaces (NFT purchases)." },
                  ].map((item, i) => (
                    <div key={i} style={{ paddingBottom: i < 4 ? 16 : 0, borderBottom: i < 4 ? `1px solid ${S.border}` : 'none' }}>
                      <div style={{ fontWeight: 800, fontSize: 14, color: S.primary, marginBottom: 6 }}>{item.aspect}</div>
                      <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.6 }}>{item.explanation}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>The Technology Stack</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    title: "🔐 Multi-Party Computation (MPC)",
                    desc: "Private keys are split into shares across multiple parties (user device, provider, backup). No single point of failure."
                  },
                  {
                    title: "👆 WebAuthn (FIDO2)",
                    desc: "W3C standard for cryptographic authentication. Works across all major browsers and devices (iOS, Android, Windows, Mac)."
                  },
                  {
                    title: "🛡️ Trusted Execution Environments (TEEs)",
                    desc: "Secure processors (Intel SGX, ARM TrustZone) that protect key operations from OS-level threats."
                  },
                  {
                    title: "🔗 Account Abstraction (ERC-4337)",
                    desc: "Smart account wallets instead of EOAs. Enables gas sponsorship, batched operations, and programmable recovery."
                  },
                  {
                    title: "💬 Social Recovery",
                    desc: "Guardian-based recovery lets users regain access via trusted contacts, no seed phrase needed."
                  },
                  {
                    title: "🌐 Interoperability",
                    desc: "Passkey standards are open. Wallets can migrate between providers without lock-in."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Tab 2: Top Providers Compared */}
        {activeTab === "providers" && (
          <div role="tabpanel" style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>Top Passkey & Embedded Wallet Providers</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
                As of March 2026, the embedded wallet market has 30+ providers. Here are the top 6 leaders dominating adoption:
              </p>

              <div style={{ overflowX: "auto", borderRadius: 12, border: `1px solid ${S.border}`, marginBottom: 32 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 1400 }}>
                  <thead>
                    <tr style={{ background: S.surface, borderBottom: `1px solid ${S.border}` }}>
                      {[
                        "Provider",
                        "Users/Wallets",
                        "Key Tech",
                        "Custody",
                        "Mainnet Launch",
                        "Developer Focus",
                        "Best For"
                      ].map(h => (
                        <th
                          key={h}
                          style={{
                            padding: "12px 14px",
                            textAlign: "left",
                            color: S.text2,
                            fontWeight: 700,
                            whiteSpace: "nowrap"
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Coinbase Smart Wallet", "1M+ users", "Passkeys + ERC-4337", "Non-custodial", "2024", "Consumer focus", "✓ Retail users"],
                      ["Privy", "75M+ wallets", "Embedded + MPC", "Custodial/hybrid", "2023", "React-first SDKs", "✓ Web3 apps"],
                      ["Dynamic", "Acquired 2025", "UI-centric wallets", "Flexible", "2024", "Polished UX", "✓ Enterprise"],
                      ["Web3Auth", "MetaMask Embedded", "Social + OAuth", "Non-custodial", "2023", "Social login", "✓ Onboarding"],
                      ["Turnkey", "Enterprise focus", "Policy control + MPC", "Flexible", "2024", "Custom policies", "✓ Institutional"],
                      ["Para", "Portability-focused", "Portable wallets", "User-owned", "2024", "Interop focus", "✓ Sovereignty"],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom: `1px solid ${S.border}`,
                          background: i % 2 === 0 ? S.surface : "transparent"
                        }}
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            style={{
                              padding: "12px 14px",
                              fontWeight: j === 0 ? 700 : 400,
                              color: j === 0 ? S.primary : S.text2,
                              whiteSpace: "nowrap"
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Deep Dive: Each Provider</h3>

              {[
                {
                  name: "Coinbase Smart Wallet",
                  icon: "₿",
                  details: [
                    "Users: 1M+ across Coinbase Exchange + wallet",
                    "Single Day Record: 270K accounts created in August 2025",
                    "Tech: Native passkeys + ERC-4337 smart accounts",
                    "Custody: Non-custodial — users own private keys",
                    "Network: Ethereum, Base, Polygon, Arbitrum, Optimism, Solana",
                    "Key Feature: Integrated with Coinbase Exchange ecosystem",
                    "Fee Model: Free (sponsored by Coinbase)",
                    "Best For: Retail traders, Coinbase users, cross-chain interactions"
                  ]
                },
                {
                  name: "Privy",
                  icon: "🔐",
                  details: [
                    "Wallets: 75M+ created since 2023",
                    "Acquired: By Stripe (June 2025) — major validation",
                    "Focus: React-first developer SDKs",
                    "Custody: Custodial (Privy holds keys) + hybrid MPC option",
                    "Key Feature: Easiest onboarding — email/phone authentication",
                    "Developer DX: Highest-rated SDK in community polling",
                    "Integrations: 1000+ developer teams using Privy",
                    "Best For: Consumer apps, social platforms, games, marketplaces"
                  ]
                },
                {
                  name: "Dynamic",
                  icon: "🎨",
                  details: [
                    "Status: Acquired by Fireblocks (2025)",
                    "Strength: Polished, enterprise-grade wallet UI",
                    "Market Position: Focus on institutional adoption",
                    "Tech Stack: Wallet abstraction + multiple custody options",
                    "Developer Tools: High-end UI components out-of-the-box",
                    "Integration Ease: Minimal code — mostly configuration",
                    "Pricing: Enterprise SaaS model (not free tier)",
                    "Best For: Enterprise platforms, large-scale web3 apps"
                  ]
                },
                {
                  name: "Web3Auth (MetaMask Embedded)",
                  icon: "🦊",
                  details: [
                    "Status: Acquired by MetaMask (now MetaMask Embedded)",
                    "Strength: Social login (Google, Discord, Twitter, Apple, GitHub)",
                    "Non-Custodial: Keys encrypted and stored client-side",
                    "OAuth Integration: 10+ OAuth providers supported",
                    "Token Gating: Built-in token-gate access controls",
                    "Global Users: Used across 500+ web3 apps",
                    "Pricing: Freemium (generous free tier)",
                    "Best For: Apps with existing Web2 user base, social integrations"
                  ]
                },
                {
                  name: "Turnkey",
                  icon: "🛠️",
                  details: [
                    "Market Position: Enterprise developer control focused",
                    "Tech: MPC key sharding with advanced policy controls",
                    "Flexibility: Highly customizable for institutional needs",
                    "Feature: Policy-based controls — define rules for key operations",
                    "Use Cases: Corporate treasuries, exchanges, institutional platforms",
                    "Developer Model: APIs for deep wallet customization",
                    "Pricing: Enterprise/consumption-based pricing",
                    "Best For: Institutional teams needing custom governance"
                  ]
                },
                {
                  name: "Para",
                  icon: "🌐",
                  details: [
                    "Focus: Wallet portability and interoperability",
                    "Model: User-owned wallets with multiple backend options",
                    "Tech: Open standards-based approach",
                    "Benefit: Reduce provider lock-in with portable keys",
                    "Positioning: Early focus on sovereignty and decentralization",
                    "Integration: Works with multiple backends and providers",
                    "Maturity: Newer entrant, gaining institutional traction",
                    "Best For: Users prioritizing sovereignty and portability"
                  ]
                },
              ].map((proto, i) => (
                <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: S.primary }}>
                    {proto.icon} {proto.name}
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
                    {proto.details.map((detail, j) => (
                      <div key={j} style={{ fontSize: 14, color: S.text2, lineHeight: 1.6 }}>
                        • {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Which Provider Should You Choose?</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    title: "🏆 Best Overall Experience",
                    pick: "Coinbase Smart Wallet",
                    reason: "Largest user base, passkey-native, non-custodial. Best for retail users."
                  },
                  {
                    title: "🚀 Best for Developers",
                    pick: "Privy",
                    reason: "75M wallets, easiest SDK, Stripe backing. Best for integrating into apps."
                  },
                  {
                    title: "💼 Best for Enterprise",
                    pick: "Dynamic or Turnkey",
                    reason: "Enterprise UX (Dynamic) or custom policies (Turnkey). Professional-grade."
                  },
                  {
                    title: "🔗 Best for Web2 Integration",
                    pick: "Web3Auth (MetaMask Embedded)",
                    reason: "Social login, OAuth providers, lowest friction for Web2 users."
                  },
                  {
                    title: "🛡️ Best for Sovereignty",
                    pick: "Para",
                    reason: "Portable, open standards, minimal lock-in. For user-owned wallets."
                  },
                  {
                    title: "⚙️ Best for Custom Governance",
                    pick: "Turnkey",
                    reason: "Policy controls, MPC flexibility, institutional-grade security."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8, color: S.primary }}>{item.title}</h4>
                    <div style={{ fontSize: 14, fontWeight: 700, color: S.text, marginBottom: 6 }}>{item.pick}</div>
                    <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.reason}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Market Dynamics: Why Embedded Wallets Are Commoditizing</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "🏪 Feature Convergence",
                    desc: "All major providers now offer: passkeys, social recovery, ERC-4337, cross-chain. Differentiation moves to developer experience & pricing."
                  },
                  {
                    title: "📊 Volume Competition",
                    desc: "Privy (75M), Coinbase (1M), Web3Auth (500+ apps). Market leaders compete on scale, not features. Price wars likely in 2026."
                  },
                  {
                    title: "🔧 Developer Tools Arms Race",
                    desc: "Privy's React SDK set the standard. All competitors now releasing equally good tools. Winners = best docs + support."
                  },
                  {
                    title: "🤝 Strategic Acquisitions",
                    desc: "Stripe acquired Privy, Fireblocks acquired Dynamic, MetaMask acquired Web3Auth. Big platforms want embedded wallets in-house."
                  },
                  {
                    title: "💸 Margin Compression",
                    desc: "Early players charged 5-10% fees. New entrants offer free tiers. Economics shifting toward infrastructure play, not revenue."
                  },
                  {
                    title: "🌍 Account Abstraction Standardization",
                    desc: "EIP-7702 and ERC-4337 becoming standard. Anyone can build embedded wallets now. Barriers to entry collapsing."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>→</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Tab 3: How to Get Started */}
        {activeTab === "how-to-start" && (
          <div role="tabpanel" style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>How to Get Started with Passkey Wallets</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
                Setting up a passkey wallet is simpler than traditional seed-phrase wallets. Here's a step-by-step guide:
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Step-by-Step: Coinbase Smart Wallet</h3>

              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Visit wallet.coinbase.com or the Coinbase app",
                    "Click 'Create a new wallet' or 'Get started'",
                    "Choose to create a passkey wallet (not seed phrase)",
                    "Verify your identity with email or phone (KYC)",
                    "Set up biometric authentication (fingerprint, face ID, or PIN)",
                    "Choose your authentication device (phone, laptop, or security key)",
                    "Confirm the device setup — your passkey is now active",
                    "Your wallet is created. You now have a public address to receive crypto",
                    "Test by depositing a small amount (e.g., 0.01 ETH)",
                    "Verify transactions are signed with your biometric"
                  ].map((step, j) => (
                    <div key={j} style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, paddingLeft: 20, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, fontWeight: 700, color: S.primary }}>
                        {j + 1}.
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Step-by-Step: Privy for App Developers</h3>

              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
                <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, marginBottom: 16 }}>
                  If you're building an app:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Go to privy.io/developers and sign up for a developer account",
                    "Create a new project and get your API key + client ID",
                    "Install Privy SDK: npm install @privy-io/react-auth",
                    "Wrap your app with PrivyProvider component",
                    "Add the login button using usePrivy() hook",
                    "Test the login flow — users can authenticate via email/phone",
                    "Wallets are created automatically for authenticated users",
                    "Access wallet data via usePrivy's wallet methods",
                    "Deploy your app — Privy handles wallet infrastructure",
                    "Monitor user analytics in Privy dashboard"
                  ].map((step, j) => (
                    <div key={j} style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, paddingLeft: 20, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, fontWeight: 700, color: S.primary }}>
                        {j + 1}.
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Use Cases: Where Passkey Wallets Shine</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    title: "🎮 Gaming & Metaverse",
                    desc: "In-game item purchases, NFT trading, cross-game inventory. Passkeys make in-game crypto feel natural."
                  },
                  {
                    title: "💬 Social Apps & DMs",
                    desc: "Encrypted payments in messaging apps. Send crypto as easily as emojis. No seed phrases needed."
                  },
                  {
                    title: "🏪 Marketplaces & Commerce",
                    desc: "One-click NFT purchases, creator tipping, digital goods. Embedded wallets handle payments invisibly."
                  },
                  {
                    title: "💼 Enterprise & Payroll",
                    desc: "Employee crypto payroll, benefits distribution. Employers send stables to worker wallets via passkeys."
                  },
                  {
                    title: "🎁 Airdrops & Rewards",
                    desc: "Apps gift tokens to users. No wallet setup needed — embedded wallets created automatically."
                  },
                  {
                    title: "🤖 AI Agents & Autonomous Payments",
                    desc: "Agents that autonomously manage crypto. Passkeys enable smart, controlled agent actions."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8, color: S.primary }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Risk Management & Security Best Practices</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "⚠️ Device Loss Risk",
                    desc: "If your phone is lost, your passkey is inaccessible. Ensure backup passkeys are registered (e.g., laptop or security key)."
                  },
                  {
                    title: "✓ Enable Social Recovery",
                    desc: "Set up guardian recovery with trusted contacts. If you lose all devices, guardians can help recover your wallet."
                  },
                  {
                    title: "⚠️ Provider Lock-In Risk",
                    desc: "Some embedded wallets are custodial — the provider controls keys. Verify non-custodial options (Coinbase, Web3Auth)."
                  },
                  {
                    title: "✓ Monitor Passkey Sync",
                    desc: "Passkeys auto-sync to iCloud/Google. Ensure account security is strong — attackers who access cloud accounts can steal passkeys."
                  },
                  {
                    title: "⚠️ Phishing Still Works",
                    desc: "Malicious sites can't steal passkeys, but can trick you into signing bad transactions. Verify URLs and transaction details carefully."
                  },
                  {
                    title: "✓ Use Security Keys for Large Amounts",
                    desc: "Hardware security keys (YubiKey, Titan) add extra layer. For $100K+, use a security key + passkey backup."
                  },
                  {
                    title: "⚠️ Regulatory Uncertainty",
                    desc: "Embedded wallets may face changing regulations. Choose providers with clear compliance frameworks (Coinbase, Privy/Stripe)."
                  },
                  {
                    title: "✓ Test Recovery Before You Need It",
                    desc: "Actually run through social recovery on a test account. Don't wait until you're locked out to learn the process."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>→</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>What's Next: The Future of Passkey Wallets</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    title: "🔗 EIP-7702 Native Integration",
                    desc: "Smart wallets will leverage delegated execution natively. Passkeys become the primary auth layer for Ethereum."
                  },
                  {
                    title: "🤝 Account Abstraction Convergence",
                    desc: "ERC-4337 becomes standard. All wallets will be smart accounts with bundled operations and gas sponsorship."
                  },
                  {
                    title: "🌍 Cross-Chain Portability",
                    desc: "Passkey wallets will work seamlessly across chains. Move capital between Ethereum, Solana, Cosmos without friction."
                  },
                  {
                    title: "🤖 AI Agent Wallets",
                    desc: "Wallets that are not just user-controlled but also agent-controlled. Passkeys enable safe agent delegations."
                  },
                  {
                    title: "💼 Enterprise Adoption at Scale",
                    desc: "Major enterprises (banks, retailers, social media) will launch embedded wallet platforms in 2026-2027."
                  },
                  {
                    title: "🏦 Custody Layer Consolidation",
                    desc: "30+ embedded wallet providers will consolidate to 5-10 leaders. Market moves toward infrastructure commoditization."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8, color: S.primary }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Common Mistakes to Avoid</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "❌ Assuming Passkeys Are Unhackable",
                    desc: "Passkeys are more secure than seed phrases, but not invulnerable. Device malware can still intercept transactions."
                  },
                  {
                    title: "❌ Not Setting Up Recovery",
                    desc: "Passkeys seem safe until you lose your device. Set up social recovery, backup passkeys, or security keys NOW."
                  },
                  {
                    title: "❌ Using a Single Device",
                    desc: "If your only device dies, you're locked out. Register passkeys on multiple devices (phone + laptop + security key)."
                  },
                  {
                    title: "❌ Trusting Custodial Wallets for Large Amounts",
                    desc: "Custodial embedded wallets (some instances of Privy) are convenient but add counterparty risk. Use non-custodial for large holdings."
                  },
                  {
                    title: "❌ Ignoring Signing Requests",
                    desc: "Biometric auth doesn't mean the transaction is safe. Always review what you're signing before confirming."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 16, flexShrink: 0, color: S.red }}>→</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Resources & Tools</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <ul style={{ paddingLeft: 16, color: S.text, fontSize: 14, lineHeight: 2, listStyle: "none" }}>
                  <li>🔐 <a href="https://webauthn.io" style={{ color: S.primary, textDecoration: "none" }}>WebAuthn.io Demo</a> — Test WebAuthn in your browser</li>
                  <li>💼 <a href="https://privy.io/developers" style={{ color: S.primary, textDecoration: "none" }}>Privy Developer Docs</a> — Full embedded wallet SDK guide</li>
                  <li>🏦 <a href="https://wallet.coinbase.com" style={{ color: S.primary, textDecoration: "none" }}>Coinbase Smart Wallet</a> — Official passkey wallet</li>
                  <li>🦊 <a href="https://web3auth.io" style={{ color: S.primary, textDecoration: "none" }}>Web3Auth (MetaMask Embedded)</a> — Social login wallet infrastructure</li>
                  <li>📚 <a href="https://eips.ethereum.org/EIPS/eip-4337" style={{ color: S.primary, textDecoration: "none" }}>ERC-4337 Specification</a> — Account abstraction standard</li>
                  <li>🔗 <a href="https://www.w3.org/TR/webauthn-2/" style={{ color: S.primary, textDecoration: "none" }}>WebAuthn W3C Standard</a> — Official FIDO2/WebAuthn spec</li>
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* CTA Section */}
        <div style={{ background: `linear-gradient(135deg, ${S.primary}10, ${S.blue}10)`, border: `1px solid ${S.primary}30`, borderRadius: 16, padding: 32, textAlign: "center", marginTop: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Ready to Embrace the Future of Wallets?</h2>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
            Passkey wallets represent the future of crypto UX. Start with Coinbase Smart Wallet for retail, or integrate Privy into your app for embedded wallet support.
          </p>
          <a
            href="https://wallet.coinbase.com"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: 10,
              background: S.primary,
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              marginRight: 12,
            }}
          >
            Create a Passkey Wallet
          </a>
          <a
            href="https://privy.io/developers"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: 10,
              background: `${S.primary}20`,
              color: S.primary,
              border: `1px solid ${S.primary}`,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Integrate Embedded Wallets
          </a>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: 32, padding: 16, background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, fontSize: 13, color: S.text2, lineHeight: 1.6 }}>
          <strong style={{ color: S.red }}>Disclaimer:</strong> This content is for educational purposes only. Passkey wallets are more secure than seed phrases but carry risks including device loss, provider lock-in, smart contract vulnerabilities, and regulatory changes. Always test with small amounts first, use multiple backup devices, and never commit more capital than you can afford to lose. Consult security experts before storing large amounts in any wallet. Past performance and security audits do not guarantee future safety.
        </div>
      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/compare/aave-vs-maker-vs-compound" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Aave Vs Maker Vs Compound</a></li>
            <li><a href="/compare/polygon-vs-arbitrum-vs-optimism" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Polygon Vs Arbitrum Vs Optimism</a></li>
            <li><a href="/courses/crypto-tax-accounting-course" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Tax Accounting Course</a></li>
            <li><a href="/investing/best-crypto-savings-accounts-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Crypto Savings Accounts 2026</a></li>
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

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
