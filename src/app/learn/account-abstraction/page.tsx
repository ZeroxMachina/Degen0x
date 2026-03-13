'use client';

import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Account Abstraction Guide 2026 | degen0x",
  description: "Master ERC-4337 Account Abstraction in 2026. Learn how Smart Contract Wallets work, compare top AA implementations (Safe, Biconomy, ZeroDev), and implement gas sponsorship, social recovery, and session keys.",
  keywords: "account abstraction, ERC-4337, smart contract wallet, Safe, Biconomy, ZeroDev, gas sponsorship, social recovery, session keys, bundlers, paymasters",
  openGraph: {
    title: "Account Abstraction Guide 2026 | degen0x",
    description: "Complete guide to ERC-4337 Account Abstraction: wallets, implementations, and developer integration.",
    type: "article",
    publishedTime: "2026-03-13T00:00:00Z",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Account Abstraction", href: "/learn/account-abstraction" },
];

export default function AccountAbstractionPage() {
  const [activeTab, setActiveTab] = useState<"what-is-aa" | "compare" | "implementation">("what-is-aa");

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
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>🔐 Smart Wallets</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.orange}20`, color: S.orange, border: `1px solid ${S.orange}40` }}>ERC-4337</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 13, 2026 · 22 min read</span>
          </div>

          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Account Abstraction Guide 2026: Smart Wallets & ERC-4337
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            Account Abstraction (ERC-4337) is revolutionizing how users interact with blockchain. In 2026, Smart Contract Wallets powered by Account Abstraction enable gas sponsorship, social recovery, batch transactions, and session keys — removing barriers to crypto adoption. This guide covers the architecture, top implementations, and how to integrate AA into your dApp.
          </p>

          {/* Quick Stats Box */}
          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 14, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: S.primary, marginBottom: 16 }}>⚡ Account Abstraction in 2026</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.primary, marginBottom: 4 }}>1.2M+</div>
                <div style={{ fontSize: 12, color: S.text2 }}>AA Wallets Active</div>
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.green, marginBottom: 4 }}>$800M+</div>
                <div style={{ fontSize: 12, color: S.text2 }}>TVL in Smart Wallets</div>
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: S.blue, marginBottom: 4 }}>15+ Chains</div>
                <div style={{ fontSize: 12, color: S.text2 }}>ERC-4337 Support</div>
              </div>
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, borderBottom: `1px solid ${S.border}`, paddingBottom: 0 }}>
          {[
            { id: "what-is-aa", label: "📖 What is Account Abstraction?" },
            { id: "compare", label: "⚙️ Top AA Wallets Compared" },
            { id: "implementation", label: "💻 Implementation Guide" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              style={{
                padding: "12px 20px",
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

        {/* Tab 1: What is Account Abstraction? */}
        {activeTab === "what-is-aa" && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>Understanding Account Abstraction</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
                Today, Ethereum uses <strong>Externally Owned Accounts (EOAs)</strong> — wallets controlled by private keys. Account Abstraction enables <strong>Smart Contract Wallets</strong> — accounts controlled by code, not just keys. This unlocks powerful features: gas sponsorship, social recovery, session keys, and batch transactions.
              </p>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>EOA vs Smart Contract Wallets</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[
                  {
                    title: "EOA (Traditional)",
                    icon: "🔑",
                    features: [
                      "Private key only",
                      "Must have ETH for gas",
                      "Limited recovery options",
                      "No custom logic",
                      "Single signature per tx",
                    ]
                  },
                  {
                    title: "Smart Contract Wallet (AA)",
                    icon: "🤖",
                    features: [
                      "Multi-signature, threshold logic",
                      "Sponsored gas (paymasters)",
                      "Social recovery via guardians",
                      "Custom validation & execution",
                      "Batch transactions",
                    ]
                  }
                ].map(w => (
                  <div key={w.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{w.icon}</div>
                    <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 14 }}>{w.title}</h4>
                    <ul style={{ paddingLeft: 16, color: S.text2, fontSize: 13, lineHeight: 1.8, listStyle: "none" }}>
                      {w.features.map(f => (
                        <li key={f} style={{ marginBottom: 8 }}>✓ {f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>How ERC-4337 Works</h3>
              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
                ERC-4337 introduces a new transaction flow using UserOperations (UserOps) instead of regular transactions:
              </p>

              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 24, fontFamily: "monospace", fontSize: 13 }}>
                <div style={{ color: S.text2, lineHeight: 1.8 }}>
                  <div style={{ color: S.primary, marginBottom: 8 }}>// UserOperation Flow</div>
                  <div>1. User creates UserOp (not signed tx)</div>
                  <div>2. Bundler collects multiple UserOps</div>
                  <div>3. Bundler calls EntryPoint contract</div>
                  <div>4. EntryPoint validates via wallet</div>
                  <div>5. Paymaster pays gas (optional)</div>
                  <div>6. EntryPoint executes UserOp</div>
                </div>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Key ERC-4337 Components</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "UserOp (User Operation)",
                    desc: "A pseudo-transaction containing sender, callData, gas limits, and signature. Multiple UserOps are batched by bundlers.",
                    color: S.primary
                  },
                  {
                    title: "Bundler",
                    desc: "A service that collects UserOps from the mempool and calls the EntryPoint. Earns fees from bundling transactions.",
                    color: S.blue
                  },
                  {
                    title: "EntryPoint Contract",
                    desc: "The core ERC-4337 contract that validates and executes UserOps. Acts as the transaction router for all AA wallets.",
                    color: S.green
                  },
                  {
                    title: "Paymaster",
                    desc: "Pays gas fees on behalf of users. Can sponsor gas for specific users, tokens, or applications (e.g., pay gas in USDC).",
                    color: S.orange
                  },
                  {
                    title: "Account Contract",
                    desc: "Your smart contract wallet. Implements custom validation and execution logic. Must follow the IAccount interface.",
                    color: S.yellow
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 14 }}>
                    <span style={{ fontSize: 20, flexShrink: 0, color: item.color }}>→</span>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4, color: item.color }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Timeline of Account Abstraction Adoption</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { year: "2023 Q2", event: "ERC-4337 goes live on Ethereum mainnet. First bundlers and paymasters launch.", color: S.green },
                    { year: "2023 Q4", event: "Safe (Gnosis Safe) integrates AA. Biconomy launches SDK v2 with gas sponsorship.", color: S.blue },
                    { year: "2024 Q2", event: "Account Abstraction hits 500K+ wallets. Arbitrum becomes leading AA chain by TVL.", color: S.primary },
                    { year: "2024 Q4", event: "ERC-4337 deploys on 10+ chains (Polygon, Optimism, Base, Blast, Arbitrum, etc.)", color: S.orange },
                    { year: "2026 Q1", event: "1.2M+ AA wallets. Institutional adoption grows. Session keys enable gaming on-chain.", color: S.yellow },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 16 }}>
                      <div style={{ fontWeight: 800, fontSize: 13, color: item.color, minWidth: 100 }}>{item.year}</div>
                      <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.6 }}>{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16, marginTop: 32 }}>Key Benefits of Account Abstraction</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  {
                    title: "💰 Gas Sponsorship",
                    desc: "Paymasters can pay gas on behalf of users. Users can pay gas in stablecoins (USDC) instead of ETH. Perfect for onboarding."
                  },
                  {
                    title: "🔐 Social Recovery",
                    desc: "Set up 3+ guardians who can collectively recover your wallet if you lose your key. No seed phrase = no risk of seed phrase theft."
                  },
                  {
                    title: "🎮 Session Keys",
                    desc: "Generate temporary keys with limited scope (e.g., trade up to $1000 on dYdX for 24 hours). Play games without signing every tx."
                  },
                  {
                    title: "📦 Batch Transactions",
                    desc: "Execute multiple transactions in one UserOp. Swap on Uniswap, deposit into Aave, and claim rewards — all in one tx."
                  },
                  {
                    title: "🔑 Multi-Signature Without Complexity",
                    desc: "Custom validation logic. Require 2-of-3 signatures. Require specific signers for high-value txs. Threshold based on time."
                  },
                  {
                    title: "✨ Better UX",
                    desc: "No need to hold native gas token. Gasless experience. Programmable wallet = custom UX per application."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Tab 2: Top AA Wallets & SDKs Compared */}
        {activeTab === "compare" && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>Top Account Abstraction Implementations</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
                Dozens of AA wallet solutions exist in 2026. Here's a detailed comparison of the top 8+ implementations across key features:
              </p>

              <div style={{ overflowX: "auto", borderRadius: 12, border: `1px solid ${S.border}`, marginBottom: 32 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 1200 }}>
                  <thead>
                    <tr style={{ background: S.surface, borderBottom: `1px solid ${S.border}` }}>
                      {[
                        "Wallet",
                        "Chains",
                        "Gas Sponsorship",
                        "Social Recovery",
                        "Session Keys",
                        "Bundler",
                        "Paymaster",
                        "Pricing",
                        "DX Rating"
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
                      ["Safe", "15+ chains", "✓ Yes", "✓ Yes", "✓ Yes", "Multiple", "Multiple", "Free/OSS", "⭐⭐⭐⭐⭐"],
                      ["Biconomy", "10+ chains", "✓ Yes", "✓ Yes", "✓ Yes", "Own", "Own", "$0-500/mo", "⭐⭐⭐⭐⭐"],
                      ["ZeroDev", "8+ chains", "✓ Yes", "✓ Yes", "✓ Yes", "Own", "Own", "Free/paid", "⭐⭐⭐⭐⭐"],
                      ["Alchemy Account Kit", "6 chains", "✓ Yes", "✓ Yes", "✓ Yes", "Own", "Own", "Pay per op", "⭐⭐⭐⭐⭐"],
                      ["Pimlico", "5 chains", "✓ Yes", "✗ No", "✓ Yes", "Own", "Own", "Pay per op", "⭐⭐⭐⭐"],
                      ["Stackup", "4 chains", "✓ Yes", "✗ No", "✓ Yes", "Own", "Own", "Free/paid", "⭐⭐⭐⭐"],
                      ["Thirdweb", "8+ chains", "✓ Yes", "✓ Yes", "✓ Yes", "Own", "Own", "Free", "⭐⭐⭐⭐⭐"],
                      ["Coinbase Smart Wallet", "3 chains", "✓ Yes", "✓ Yes", "✓ Yes", "Flashbots", "Own", "Free", "⭐⭐⭐⭐"],
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

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Top Picks by Use Case</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  {
                    title: "🏢 Enterprise & Multi-Sig",
                    pick: "Safe",
                    reason: "Battle-tested. 300K+ deployments. Supports complex multi-sig logic. Free and open-source."
                  },
                  {
                    title: "🚀 Fastest Integration",
                    pick: "Alchemy Account Kit",
                    reason: "One-line setup. Production-ready SDKs in TypeScript. Free tier for development."
                  },
                  {
                    title: "💰 Gas Sponsorship Focus",
                    pick: "Biconomy",
                    reason: "Best-in-class paymaster infrastructure. Flexible pricing. Trusted by 100+ dApps."
                  },
                  {
                    title: "🎮 Gaming & Session Keys",
                    pick: "ZeroDev",
                    reason: "Optimized for session keys. Kernel contracts battle-tested. Great for gaming."
                  },
                  {
                    title: "📱 Consumer Wallets",
                    pick: "Coinbase Smart Wallet",
                    reason: "Native iOS/Android integration. Frictionless onboarding. Backed by Coinbase."
                  },
                  {
                    title: "🎯 Web3 Builders",
                    pick: "Thirdweb",
                    reason: "All-in-one platform. Smart contract development + AA. Free forever tier."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8, color: S.primary }}>{item.title}</h4>
                    <div style={{ fontSize: 13, fontWeight: 700, color: S.text, marginBottom: 6 }}>{item.pick}</div>
                    <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.reason}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Tab 3: Implementation Guide */}
        {activeTab === "implementation" && (
          <div style={{ animation: "fadeIn 0.3s ease" }}>
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 20 }}>Account Abstraction Implementation Guide</h2>

              <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
                This guide shows how to integrate Account Abstraction into your dApp. We'll use Alchemy Account Kit and Biconomy for examples, as they're the most popular SDKs for 2026.
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Step 1: Install AA SDK</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20, fontFamily: "monospace", fontSize: 12, color: S.text2, overflowX: "auto" }}>
                <div style={{ color: S.primary, marginBottom: 6 }}>// Using Alchemy Account Kit</div>
                <div>npm install @alchemy/aa-core @alchemy/aa-alchemy</div>
                <div style={{ marginTop: 16, color: S.primary }}>// Using Biconomy SDK</div>
                <div>npm install @biconomy/account @biconomy/bundler</div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Step 2: Set Up Smart Wallet Provider</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20, fontFamily: "monospace", fontSize: 11, color: S.text2, overflowX: "auto", lineHeight: 1.6 }}>
                <div style={{ color: S.primary, marginBottom: 8 }}>// Alchemy Account Kit Setup</div>
                <div style={{ color: S.text }}>{`import { createModularAccountAlchemyClient } from '@alchemy/aa-alchemy';
import { sepolia } from '@alchemy/chains';

const client = await createModularAccountAlchemyClient({
  chain: sepolia,
  transport: http('RPC_URL'),
  policyId: 'YOUR_POLICY_ID',
});`}</div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Step 3: Create UserOperation</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20, fontFamily: "monospace", fontSize: 11, color: S.text2, overflowX: "auto", lineHeight: 1.6 }}>
                <div style={{ color: S.primary, marginBottom: 8 }}>// Send a transaction via AA</div>
                <div style={{ color: S.text }}>{`const tx = await client.sendUserOperation({
  target: '0xTokenAddress',
  data: encodeAbi('transfer', [to, amount]),
  value: 0n,
});

const receipt = await client.waitForUserOperationTransaction(tx);`}</div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Step 4: Enable Gas Sponsorship</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20, fontFamily: "monospace", fontSize: 11, color: S.text2, overflowX: "auto", lineHeight: 1.6 }}>
                <div style={{ color: S.primary, marginBottom: 8 }}>// Biconomy Gas Sponsorship Setup</div>
                <div style={{ color: S.text }}>{`const biconomySmartAccountConfig = {
  signer: ethersProvider,
  chainId: ChainId.POLYGON_MAINNET,
  bundlerUrl: BUNDLER_URL,
  paymaster: paymasterInstance,
};

const biconomySmartAccount =
  new BiconomySmartAccount(biconomySmartAccountConfig);`}</div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Step 5: Configure Social Recovery</h3>
              <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, marginBottom: 12 }}>
                Add guardians who can recover your wallet if you lose access:
              </p>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20, fontFamily: "monospace", fontSize: 11, color: S.text2, overflowX: "auto", lineHeight: 1.6 }}>
                <div style={{ color: S.primary, marginBottom: 8 }}>// Add recovery guardians (e.g., Safe social recovery)</div>
                <div style={{ color: S.text }}>{`const guardians = [
  '0xGuardian1Address',  // Friend 1
  '0xGuardian2Address',  // Friend 2
  '0xGuardian3Address',  // Family member
];

// 2-of-3 recovery threshold
await smartWallet.addRecoveryModule({
  guardians,
  threshold: 2,
});`}</div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Step 6: Implement Session Keys</h3>
              <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, marginBottom: 12 }}>
                Create temporary keys with limited permissions for gaming or trading:
              </p>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20, fontFamily: "monospace", fontSize: 11, color: S.text2, overflowX: "auto", lineHeight: 1.6 }}>
                <div style={{ color: S.primary, marginBottom: 8 }}>// Create a session key for gaming</div>
                <div style={{ color: S.text }}>{`const sessionKey = await wallet.createSessionKey({
  permissions: {
    target: GAME_CONTRACT_ADDRESS,
    allowedFunctions: ['attack', 'move', 'heal'],
    valueLimit: parseEther('0'), // No ETH transfers
    duration: 24 * 60 * 60, // 24 hours
  },
});

// Pass sessionKey to game frontend
localStorage.setItem('gameSessionKey', sessionKey);`}</div>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Common Pitfalls & Best Practices</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    title: "⚠️ Insufficient Paymaster Balance",
                    desc: "If your paymaster runs out of funds, sponsored txs fail. Monitor paymaster balance and top up regularly."
                  },
                  {
                    title: "✓ Use Policy IDs for Security",
                    desc: "Set up policy IDs on bundlers/paymasters to restrict which operations are sponsored. Prevents abuse."
                  },
                  {
                    title: "⚠️ Front-Running UserOps",
                    desc: "UserOps in the mempool can be front-run. Use private mempools (Flashbots) for sensitive operations."
                  },
                  {
                    title: "✓ Batch Related Transactions",
                    desc: "Use batch transactions to save gas. One UserOp instead of 5 separate txs = ~30% gas savings."
                  },
                  {
                    title: "⚠️ EntryPoint Upgrades",
                    desc: "ERC-4337 may receive upgrades. Monitor EntryPoint version and plan upgrades accordingly."
                  },
                  {
                    title: "✓ Test on Testnets First",
                    desc: "Deploy to Sepolia or Polygon Mumbai before mainnet. Test gas sponsor logic, recovery flow, and session keys."
                  },
                ].map(item => (
                  <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>→</span>
                    <div>
                      <h4 style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: 12, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, marginTop: 28 }}>Resources & Links</h3>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <ul style={{ paddingLeft: 16, color: S.text, fontSize: 13, lineHeight: 2, listStyle: "none" }}>
                  <li>📚 <a href="#" style={{ color: S.primary, textDecoration: "none" }}>EIP-4337 Specification</a> — Official Ethereum standard</li>
                  <li>🛠️ <a href="#" style={{ color: S.primary, textDecoration: "none" }}>Alchemy AA Docs</a> — Full SDK reference and tutorials</li>
                  <li>🔗 <a href="#" style={{ color: S.primary, textDecoration: "none" }}>Biconomy SDK</a> — Gas sponsorship documentation</li>
                  <li>🎮 <a href="#" style={{ color: S.primary, textDecoration: "none" }}>ZeroDev Kernel</a> — Session keys and modular wallet</li>
                  <li>💎 <a href="#" style={{ color: S.primary, textDecoration: "none" }}>Safe Contracts</a> — Open-source multi-sig wallet</li>
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* CTA Section */}
        <div style={{ background: `linear-gradient(135deg, ${S.primary}10, ${S.blue}10)`, border: `1px solid ${S.primary}30`, borderRadius: 16, padding: 32, textAlign: "center", marginTop: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Ready to Build with Account Abstraction?</h2>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
            Start integrating AA into your dApp today. Use Alchemy, Biconomy, or Safe to enable gas sponsorship, social recovery, and session keys.
          </p>
          <a
            href="/tools"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: 10,
              background: S.primary,
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Explore AA Tools & Dashboards
          </a>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: 32, padding: 16, background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, fontSize: 12, color: S.text2, lineHeight: 1.6 }}>
          <strong style={{ color: S.red }}>Disclaimer:</strong> This content is for educational purposes only. Always audit smart contract wallets and paymasters before using with real funds. Account Abstraction is still evolving; stay updated on protocol changes.
        </div>
      </article>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
