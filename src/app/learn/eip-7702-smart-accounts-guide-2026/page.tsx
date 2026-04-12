'use client';

import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { useState } from "react";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "EIP-7702 & Smart Accounts Guide", href: "/learn/eip-7702-smart-accounts-guide-2026" },
];

export default function EIP7702SmartAccountsPage() {
  const [activeTab, setActiveTab] = useState<"what-is-eip7702" | "how-it-works" | "wallets-tools">("what-is-eip7702");

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
            <span style={{ fontSize: 13, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>🔧 Ethereum</span>
            <span style={{ fontSize: 13, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>🔐 Account Abstraction</span>
            <span style={{ fontSize: 13, color: S.text2 }}>March 25, 2026 · 12 min read</span>
          </div>

          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            EIP-7702 & Smart Accounts Guide 2026: Gasless Transactions & Account Abstraction
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            EIP-7702 shipped with the Pectra upgrade in May 2025 and revolutionized how Ethereum EOAs (Externally Owned Accounts) interact with smart contract logic. Instead of migrating to smart wallets, EOAs can now temporarily execute smart contract code through delegation, enabling gasless transactions, batch operations, and advanced security features. This guide covers how EIP-7702 works, why it matters, which wallets support it, and how it compares to alternatives like ERC-4337.
          </p>

          {/* Quick Stats Box */}
          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 14, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: S.primary, marginBottom: 16 }}>📊 EIP-7702 Adoption 2025-2026</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.primary, marginBottom: 4 }}>11,000+</div>
                <div style={{ fontSize: 13, color: S.text2 }}>First-Week Authorizations</div>
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.green, marginBottom: 4 }}>40M+</div>
                <div style={{ fontSize: 13, color: S.text2 }}>Smart Accounts Deployed</div>
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.blue, marginBottom: 4 }}>5+</div>
                <div style={{ fontSize: 13, color: S.text2 }}>Major Wallets Supporting</div>
              </div>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div role="tablist" aria-label="EIP-7702 guide sections" style={{ display: "flex", gap: 8, marginBottom: 32, borderBottom: `1px solid ${S.border}`, paddingBottom: 0, flexWrap: "wrap" }}>
          {[
            { id: "what-is-eip7702", label: "📖 What is EIP-7702?" },
            { id: "how-it-works", label: "⚙️ How It Works" },
            { id: "wallets-tools", label: "🛠️ Wallets & Tools" },
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

        {/* Tab 1: What is EIP-7702? */}
        {activeTab === "what-is-eip7702" && (
          <div role="tabpanel" style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>Understanding EIP-7702</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
                EIP-7702 introduces a new transaction type (0x04) that allows Externally Owned Accounts (EOAs) to temporarily delegate their execution to smart contracts. This is a paradigm shift for Ethereum account security and UX. Unlike ERC-4337 which requires full account abstraction and a parallel bundler network, EIP-7702 is a lightweight upgrade that adds smart contract capabilities directly to EOAs at the protocol level.
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

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>The Problem EIP-7702 Solves</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 24 }}>
                {[
                  {
                    title: "🔐 Seed Phrase Security",
                    desc: "EOAs are protected only by a single private key. Compromise the seed phrase, lose everything. EIP-7702 enables advanced security through delegation."
                  },
                  {
                    title: "⛽ Gas Costs",
                    desc: "Every transaction requires ETH for gas. Paymasters can now sponsor transactions for users, enabling gasless UX for applications."
                  },
                  {
                    title: "🔄 Transaction Complexity",
                    desc: "Performing multiple transactions (approvals, swaps) requires multiple confirmations. Session keys enable batch transactions with one signature."
                  },
                  {
                    title: "🚀 Web2 UX",
                    desc: "Passkey authentication and biometric login require smart contract logic. EIP-7702 brings Web2 UX to crypto wallets."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                    <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, color: S.primary }}>{item.title}</h4>
                    <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Why EIP-7702 Over ERC-4337?</h3>
              <div style={{ overflowX: "auto", borderRadius: 12, border: `1px solid ${S.border}`, marginBottom: 32 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 1200 }}>
                  <thead>
                    <tr style={{ background: S.surface, borderBottom: `1px solid ${S.border}` }}>
                      {[
                        "Feature",
                        "Traditional EOA",
                        "ERC-4337",
                        "EIP-7702"
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
                      ["Account Type", "Private key only", "Smart contract wallet", "EOA with delegation"],
                      ["Migration Required", "❌ No", "✓ Yes (to new address)", "❌ No (same address)"],
                      ["Paymaster Support", "❌ No", "✓ Yes", "✓ Yes"],
                      ["Session Keys", "❌ No", "✓ Yes (in logic)", "✓ Yes (via delegation)"],
                      ["Passkey Auth", "❌ No", "✓ Yes", "✓ Yes"],
                      ["Batch Transactions", "❌ No", "✓ Yes", "✓ Yes"],
                      ["Seed Phrase Needed", "✓ Yes", "❌ No (custody)", "❌ No (optional)"],
                      ["Protocol Level", "✓ Native", "❌ Application", "✓ Native"],
                      ["Gas Efficiency", "✓ Lowest", "❌ Higher", "✓ Lower than 4337"],
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

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Key Benefits of EIP-7702</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "🎯 No Account Migration",
                    desc: "Your existing EOA address stays the same. Opt-in smart account features without creating a new wallet. Your NFTs, tokens, and history stay with you."
                  },
                  {
                    title: "⛽ Gasless Transactions",
                    desc: "Paymasters can sponsor gas for users. Circle launched a paymaster for gasless USDC transactions. Imagine never paying gas again for stablecoin transfers."
                  },
                  {
                    title: "🔐 Advanced Security",
                    desc: "Enable passkey authentication, hardware wallets, 2FA, and social recovery without migrating to a new smart wallet contract."
                  },
                  {
                    title: "🔄 Batch Transactions",
                    desc: "Execute multiple transactions (approve token, swap, stake) in a single bundle. Reduces confirmation prompts and gas costs."
                  },
                  {
                    title: "🛡️ Session Keys",
                    desc: "Create temporary keys with spending limits and time restrictions. Enable child wallets and delegated control without custody transfer."
                  },
                  {
                    title: "📱 Web2 UX",
                    desc: "Biometric login, passkeys, and email recovery are now native. Brings mainstream consumer UX to crypto wallets."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 14 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>→</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4, color: S.primary }}>{item.title}</h4>
                      <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>The Road to Full Account Abstraction: Hegotá Upgrade</h3>
              <div style={{ background: `${S.blue}10`, border: `1px solid ${S.blue}30`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
                <p style={{ fontSize: 14, color: S.text, lineHeight: 1.8, margin: 0 }}>
                  <strong style={{ color: S.blue }}>Hegotá Upgrade (H2 2026):</strong> Ethereum's roadmap includes EIP-7701, which will bring native full L1 account abstraction. This means EntryPoint contracts will be protocol-level, eliminating the need for separate bundler networks. EIP-7702 is a stepping stone toward native account abstraction, providing interim solutions while the protocol matures. Think of EIP-7702 as the beta of true account abstraction at the protocol level.
                </p>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Real-World Impact: 11,000+ Authorizations in First Week</h3>
              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
                When EIP-7702 shipped on mainnet in May 2025, the adoption was immediate. Within the first week, 11,000+ authorization transactions were created, signaling strong developer and user interest. This early adoption shows:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    stat: "11,000+",
                    label: "First-Week Authorizations",
                    context: "Unprecedented adoption for a new transaction type"
                  },
                  {
                    stat: "40M+",
                    label: "Total Smart Accounts Deployed",
                    context: "10x growth from 2023, showing account abstraction mainstream adoption"
                  },
                  {
                    stat: "5+ Major Wallets",
                    label: "Supporting EIP-7702",
                    context: "MetaMask, Coinbase Wallet, Trust Wallet, OKX, and more"
                  },
                  {
                    stat: "Circle Paymaster",
                    label: "Launched for Gasless USDC",
                    context: "First major paymaster proving gasless transactions real"
                  },
                ].map(item => (
                  <div key={item.label} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 24, fontWeight: 900, color: S.primary, marginBottom: 4 }}>{item.stat}</h4>
                    <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>{item.label}</div>
                    <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.context}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Tab 2: How It Works */}
        {activeTab === "how-it-works" && (
          <div role="tabpanel" style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>How EIP-7702 Works: The Technical Breakdown</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
                EIP-7702 introduces a new transaction type (0x04) that enables temporary delegation of execution to a smart contract. Understanding the mechanics helps you maximize the benefits and avoid pitfalls.
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>The Three Core Components</h3>

              {[
                {
                  component: "1. Authorization Tuples",
                  icon: "🔓",
                  explanation: "You sign authorization tuples that delegate execution to a smart contract address. These are like granting temporary power of attorney to a contract. Format: (address, nonce, signature)."
                },
                {
                  component: "2. Type 0x04 Transactions",
                  icon: "📤",
                  explanation: "Special transactions that carry authorization tuples. Instead of your EOA directly executing, the designated smart contract executes on your behalf with your permissions."
                },
                {
                  component: "3. Execution Delegation",
                  icon: "⚡",
                  explanation: "The smart contract receives your execution context and can call other contracts, move assets, and perform complex operations as if it were you—but only within the signed authorization."
                },
              ].map((item, i) => (
                <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, color: S.primary }}>
                    {item.icon} {item.component}
                  </h4>
                  <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, margin: 0 }}>{item.explanation}</p>
                </div>
              ))}

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Transaction Flow: Step by Step</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { step: 1, title: "Sign Authorization", desc: "You sign a message authorizing a smart contract to execute on your behalf. Includes: contract address, nonce, and expiration." },
                    { step: 2, title: "Create 0x04 Transaction", desc: "Build a Type 0x04 transaction that includes the authorization and your target contract calls. Gas is paid upfront or by a paymaster." },
                    { step: 3, title: "Broadcast to Network", desc: "Send the transaction to Ethereum mempool. Validators and builders see it like any other transaction." },
                    { step: 4, title: "Contract Execution", desc: "Validator executes the smart contract with your delegated permissions. All operations happen within the contract's logic." },
                    { step: 5, title: "Storage Update", desc: "Contract nonce increments to prevent replay attacks. Your authorization is now consumed and cannot be reused." },
                    { step: 6, title: "Confirmation", desc: "Transaction is included in a block. All state changes (transfers, approvals, etc.) are finalized." },
                  ].map((item, i) => (
                    <div key={i} style={{ paddingBottom: i < 5 ? 16 : 0, borderBottom: i < 5 ? `1px solid ${S.border}` : 'none' }}>
                      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ fontWeight: 900, fontSize: 16, color: S.primary, minWidth: 30 }}>{item.step}.</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 800, fontSize: 14, color: S.text, marginBottom: 4 }}>{item.title}</div>
                          <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.6 }}>{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>How Paymasters Enable Gasless Transactions</h3>
              <div style={{ background: `${S.green}10`, border: `1px solid ${S.green}30`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
                <p style={{ fontSize: 14, color: S.text, lineHeight: 1.8, marginBottom: 12 }}>
                  <strong style={{ color: S.green }}>Paymasters</strong> are smart contracts that sponsor gas on behalf of users. Here's how:
                </p>
                <ol style={{ paddingLeft: 20, color: S.text2, fontSize: 14, lineHeight: 1.8 }}>
                  <li style={{ marginBottom: 8 }}>User creates a Type 0x04 transaction (e.g., transfer USDC with 0 ETH gas)</li>
                  <li style={{ marginBottom: 8 }}>Paymaster contract checks user's eligibility (e.g., holds USDC, is whitelisted)</li>
                  <li style={{ marginBottom: 8 }}>Paymaster pays gas in ETH on user's behalf</li>
                  <li style={{ marginBottom: 8 }}>User's transaction executes normally; they only pay in USDC or not at all</li>
                  <li>Result: Gasless transactions for applications integrated with paymasters</li>
                </ol>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Session Keys: Enabling Spending Limits & Automation</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
                <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
                  Session keys allow you to create child keys with limited permissions and time windows. Perfect for:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
                  {[
                    { title: "👶 Child Wallets", desc: "Give your kid a session key with $50/month spending limit" },
                    { title: "🤖 Bot Trading", desc: "Create automation keys for DeFi bots that can only swap, not withdraw" },
                    { title: "🛒 App Integration", desc: "Apps get limited access to approve specific tokens or amounts" },
                    { title: "⏰ Time-Locked Access", desc: "Keys expire automatically after 24 hours, weekly, or monthly" },
                    { title: "💼 Delegation", desc: "Delegate to employees/managers with audit trails" },
                    { title: "🔄 Auto-Execution", desc: "Recurring transactions like DCA buys or payments" },
                  ].map((item, i) => (
                    <div key={i} style={{ fontSize: 13, color: S.text2, lineHeight: 1.6 }}>
                      <strong style={{ color: S.primary }}>{item.title}</strong>
                      <p style={{ margin: "4px 0 0 0" }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Security Considerations: Delegation Risks</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "⚠️ Malicious Contract Delegation",
                    desc: "If you delegate to a malicious smart contract, it can drain your account within the scope of your authorization. Always audit contract code before signing authorizations. Use multi-sig contracts to reduce risk.",
                    color: S.red
                  },
                  {
                    title: "⚠️ Phishing Attacks",
                    desc: "Attackers can pose as legitimate projects and trick you into signing authorizations. Verify contract addresses and domain URLs. Multi-factor approval reduces attack surface.",
                    color: S.red
                  },
                  {
                    title: "✓ Replay Attack Protection",
                    desc: "Nonces prevent the same authorization from being replayed. Once consumed, an authorization cannot be reused. Epoch-based revocation allows you to invalidate all old authorizations.",
                    color: S.green
                  },
                  {
                    title: "✓ Fine-Grained Control",
                    desc: "You control the scope of each delegation. Set spending limits, function whitelists, and time windows. Revoke delegations at any time by incrementing your nonce.",
                    color: S.green
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 16, flexShrink: 0, color: item.color }}>→</span>
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

        {/* Tab 3: Wallets & Tools */}
        {activeTab === "wallets-tools" && (
          <div role="tabpanel" style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>EIP-7702 Wallets, Tools & Getting Started</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
                As of March 2026, major wallets have integrated EIP-7702 support. Here's how to get started and which tools enable smart account features:
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Major Wallets Supporting EIP-7702</h3>

              {[
                {
                  name: "MetaMask",
                  icon: "🦊",
                  features: [
                    "Native EIP-7702 support in v13.0+",
                    "Built-in smart account options",
                    "Passkey authentication (beta)",
                    "Session key management",
                    "Compatible with third-party paymasters",
                  ],
                  status: "✓ Fully Supported"
                },
                {
                  name: "Coinbase Wallet",
                  icon: "📦",
                  features: [
                    "EIP-7702 delegations native",
                    "Passkeys and biometric login",
                    "Gasless transaction support",
                    "Multi-sig social recovery",
                    "In-app DApp browser with 0x04 support",
                  ],
                  status: "✓ Fully Supported"
                },
                {
                  name: "Trust Wallet",
                  icon: "🛡️",
                  features: [
                    "EIP-7702 authorization UI",
                    "Session key creation",
                    "Spending limit controls",
                    "Multi-chain support",
                    "Mobile-first account abstraction",
                  ],
                  status: "✓ Fully Supported"
                },
                {
                  name: "OKX Wallet",
                  icon: "⭐",
                  features: [
                    "EIP-7702 transaction type support",
                    "Advanced delegation interface",
                    "Batch transaction bundling",
                    "Multi-token gas payment",
                    "Enterprise smart account features",
                  ],
                  status: "✓ Fully Supported"
                },
              ].map((wallet, i) => (
                <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <h4 style={{ fontSize: 16, fontWeight: 800, color: S.primary }}>
                      {wallet.icon} {wallet.name}
                    </h4>
                    <span style={{ fontSize: 12, fontWeight: 700, padding: "4px 8px", borderRadius: 6, background: `${S.green}20`, color: S.green }}>
                      {wallet.status}
                    </span>
                  </div>
                  <ul style={{ paddingLeft: 16, color: S.text2, fontSize: 14, lineHeight: 1.8, listStyle: "none" }}>
                    {wallet.features.map(f => (
                      <li key={f} style={{ marginBottom: 8 }}>✓ {f}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Step-by-Step: Enable Smart Account Features in MetaMask</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { step: 1, title: "Update MetaMask", desc: "Ensure you're running v13.0 or later. Check Settings > About for latest version." },
                    { step: 2, title: "Open Account Settings", desc: "Go to Settings > Advanced > Smart Account (or Account Abstraction)." },
                    { step: 3, title: "Enable Smart Account Mode", desc: "Toggle on 'Enable EIP-7702 Smart Account Mode'. MetaMask will display your delegation options." },
                    { step: 4, title: "Choose Smart Contract Delegate", desc: "Select a trusted implementation (e.g., MetaMask's official contract, Alchemy's Account Kit, or Biconomy's SmartAccount)." },
                    { step: 5, title: "Sign Authorization", desc: "MetaMask will prompt you to sign an authorization tuple. This delegates execution to the smart contract." },
                    { step: 6, title: "Enable Features", desc: "Once authorized, you can now enable passkeys, session keys, batch transactions, and gasless payments." },
                    { step: 7, title: "Start Using", desc: "Use your EOA as before, but now with smart account superpowers. All existing addresses, NFTs, and tokens are preserved." },
                  ].map((item, i) => (
                    <div key={i} style={{ paddingBottom: i < 6 ? 16 : 0, borderBottom: i < 6 ? `1px solid ${S.border}` : 'none' }}>
                      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ fontWeight: 900, fontSize: 16, color: S.primary, minWidth: 32, flexShrink: 0 }}>{item.step}.</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 800, fontSize: 14, color: S.text, marginBottom: 4 }}>{item.title}</div>
                          <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.6 }}>{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Paymasters & Gasless Services</h3>
              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
                Paymasters enable gasless transactions by sponsoring gas in ETH. Here are major paymasters supporting EIP-7702:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    name: "Circle Paymaster",
                    sponsor: "Circle (USDC)",
                    feature: "Gasless USDC transfers",
                    coverage: "Ethereum, Polygon, Arbitrum, Optimism",
                    use: "Send USDC with zero ETH for gas"
                  },
                  {
                    name: "Alchemy Gas Manager",
                    sponsor: "Alchemy",
                    feature: "Custom paymaster API",
                    coverage: "All EVM chains",
                    use: "Build custom gasless experiences"
                  },
                  {
                    name: "Biconomy Paymaster",
                    sponsor: "Biconomy",
                    feature: "Multi-token gas payment",
                    coverage: "Ethereum, L2s, L3s",
                    use: "Pay gas in any token or fiat"
                  },
                  {
                    name: "pimlico",
                    sponsor: "pimlico",
                    feature: "Permissionless paymaster network",
                    coverage: "All EVM chains",
                    use: "Permissionless gasless infrastructure"
                  },
                ].map(item => (
                  <div key={item.name} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 10, color: S.primary }}>{item.name}</h4>
                    <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.7 }}>
                      <div style={{ marginBottom: 8 }}><strong style={{ color: S.text }}>Provider:</strong> {item.sponsor}</div>
                      <div style={{ marginBottom: 8 }}><strong style={{ color: S.text }}>Feature:</strong> {item.feature}</div>
                      <div style={{ marginBottom: 8 }}><strong style={{ color: S.text }}>Coverage:</strong> {item.coverage}</div>
                      <div><strong style={{ color: S.text }}>Use Case:</strong> {item.use}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Best Practices & Risks to Avoid</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "✓ Audit Contracts Before Delegating",
                    desc: "Before signing an authorization to any smart contract, verify its code and audit history. Check OpenZeppelin Contracts or similar audited implementations."
                  },
                  {
                    title: "⚠️ Don't Delegate to Unknown Contracts",
                    desc: "Never sign authorization for contracts from unverified sources. Phishers pose as legitimate projects. Always verify domain and contract address."
                  },
                  {
                    title: "✓ Use Multi-Sig for Large Amounts",
                    desc: "For significant holdings, require multiple signatures before delegating. MetaMask and Coinbase support multi-sig smart accounts."
                  },
                  {
                    title: "⚠️ Monitor Active Delegations",
                    desc: "Keep a list of active authorizations. Know which contracts have permissions to your account. Revoke unused delegations regularly."
                  },
                  {
                    title: "✓ Enable Passkeys for Enhanced Security",
                    desc: "Use passkey authentication (WebAuthn) instead of seed phrases. Biometric login is more secure and user-friendly than memorizing private keys."
                  },
                  {
                    title: "⚠️ Beware Session Key Expiration",
                    desc: "Session keys have time limits. Ensure keys don't expire during critical operations (e.g., trading). Test session keys in low-risk scenarios first."
                  },
                  {
                    title: "✓ Test Small Amounts First",
                    desc: "When enabling new features (paymasters, passkeys), test with small amounts. Verify everything works before moving significant funds."
                  },
                  {
                    title: "⚠️ Verify Paymaster Legitimacy",
                    desc: "Not all paymasters are trustworthy. Use paymasters from established providers (Circle, Alchemy, Biconomy). Check their security audits."
                  },
                ].map((item, i) => (
                  <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>{item.title.startsWith("✓") ? "→" : "→"}</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Comparison: When to Use EIP-7702 vs Alternatives</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  {
                    title: "🎯 Use EIP-7702 If",
                    features: [
                      "You want to keep your existing EOA address",
                      "You prefer protocol-level implementation",
                      "You want optional smart account features",
                      "You need low gas costs compared to ERC-4337",
                      "You trust the smart contract delegate"
                    ],
                    color: S.primary
                  },
                  {
                    title: "🏛️ Use ERC-4337 If",
                    features: [
                      "You need full smart contract wallet",
                      "You want ultimate customization",
                      "You're building on L2 with bundlers",
                      "You need social recovery recovery",
                      "You want fully decentralized operation"
                    ],
                    color: S.green
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, color: item.color }}>{item.title}</h4>
                    <ul style={{ paddingLeft: 16, color: S.text2, fontSize: 13, lineHeight: 1.8, listStyle: "none" }}>
                      {item.features.map(f => (
                        <li key={f} style={{ marginBottom: 6 }}>✓ {f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* CTA Section */}
        <div style={{ background: `linear-gradient(135deg, ${S.primary}10, ${S.blue}10)`, border: `1px solid ${S.primary}30`, borderRadius: 16, padding: 32, textAlign: "center", marginTop: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Ready to Enable Smart Account Features?</h2>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
            Update your wallet today and unlock gasless transactions, session keys, passkey authentication, and advanced security. EIP-7702 is live on mainnet now.
          </p>
          <a
            href="/learn/account-abstraction-explained"
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
            Learn More About Account Abstraction
          </a>
          <a
            href="/learn/ethereum-pectra-upgrade-guide"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: 10,
              background: "transparent",
              color: S.primary,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              border: `2px solid ${S.primary}`,
            }}
          >
            Explore Pectra Upgrade
          </a>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: 32, padding: 16, background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, fontSize: 13, color: S.text2, lineHeight: 1.6 }}>
          <strong style={{ color: S.red }}>Disclaimer:</strong> This content is for educational purposes only. EIP-7702 and smart account technology involve smart contract risks, delegation risks, and potential security vulnerabilities. Always audit contracts before delegating, test with small amounts first, and never invest more than you can afford to lose. Understand the risks of delegating execution to smart contracts. Consult security experts and conduct thorough research before using smart account features with significant assets.
        </div>
      
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
