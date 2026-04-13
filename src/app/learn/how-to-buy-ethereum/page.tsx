import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "How to Buy Ethereum (ETH) in 2026: Step-by-Step Guide",
  description: "Learn how to buy Ethereum step by step. Compare the best exchanges, set up a wallet, and stay safe. Updated for 2026 — beginner-friendly guide.",
  keywords: "how to buy ethereum, buy ETH, ethereum exchange, buy ETH 2026, where to buy ethereum",
  openGraph: {
    title: "How to Buy Ethereum (ETH) in 2026: Step-by-Step Guide",
    description: "Everything you need to buy ETH safely. Exchange comparison, wallet setup, fees, and expert tips.",
    type: "article",
    publishedTime: "2026-03-10T00:00:00Z",
  },

  alternates: { canonical: "/learn/how-to-buy-ethereum" },
  twitter: { card: "summary_large_image" }};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "How to Buy Ethereum", href: "/learn/how-to-buy-ethereum" },
];

const EXCHANGES = [
  { name: "Coinbase", fee: "0.5–1.5%", min: "$2", pros: "Most beginner-friendly, US-regulated, insured", cons: "Higher fees than competitors", rating: 9.2, badge: "Best for Beginners" },
  { name: "Kraken", fee: "0.16–0.26%", min: "$1", pros: "Low fees, strong security record, advanced trading", cons: "Less intuitive UI", rating: 9.0, badge: "Best for Low Fees" },
  { name: "Binance", fee: "0.10%", min: "$10", pros: "Lowest trading fees, huge selection", cons: "Regulatory issues in US, complex UI", rating: 8.5, badge: "Lowest Fees" },
  { name: "Gemini", fee: "0.5%", min: "$1", pros: "US-regulated, SOC 2 certified, NYDFS licensed", cons: "Higher fees, smaller selection", rating: 8.8, badge: "Best Security" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'How To Buy Ethereum', },
  ],
};

export default function HowToBuyEthereumPage() {
  const S = {
    bg: "#0d1117",
    surface: "#161b22",
    surface2: "#1c2330",
    border: "#30363d",
    text: "#e6edf3",
    text2: "#8b949e",
    green: "#3fb950",
    blue: "#58a6ff",
    purple: "#627EEA",
    red: "#f85149",
    orange: "#f0883e",
    yellow: "#d29922",
  };

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
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
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: "#627EEA20", color: S.purple, border: "1px solid #627EEA40" }}>📚 Learn</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: "#22c55e20", color: S.green, border: "1px solid #22c55e40" }}>Beginner Guide</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 10, 2026 · 8 min read</span>
          </div>

          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            How to Buy Ethereum (ETH) in 2026: Complete Beginner&apos;s Guide
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            Ethereum is the world&apos;s second-largest cryptocurrency and the backbone of DeFi, NFTs, and Web3. Whether you want to hold ETH as an investment or use it in decentralized applications, this guide walks you through every step — from choosing an exchange to securing your coins.
          </p>

          {/* Quick Answer Box */}
          <div style={{ background: "#627EEA10", border: "1px solid #627EEA30", borderRadius: 14, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: S.purple, marginBottom: 16 }}>⚡ How to Buy ETH in 5 Steps</h2>
            <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14 }}>
              <li><strong>Choose an exchange</strong> — Coinbase (beginner), Kraken (low fees), or Binance</li>
              <li><strong>Create and verify your account</strong> — Takes 5–15 minutes with ID verification</li>
              <li><strong>Deposit funds</strong> — Bank transfer (cheapest) or debit card (instant)</li>
              <li><strong>Place your order</strong> — Search ETH, enter your amount, review fees</li>
              <li><strong>Optionally, withdraw to a wallet</strong> — MetaMask, Ledger, or Trezor for self-custody</li>
            </ol>
            <p style={{ fontSize: 13, color: S.text2, marginTop: 16, marginBottom: 0 }}>Current ETH price (approx.): <strong style={{ color: S.purple }}>$3,680</strong> · You can buy fractions — start with as little as $10.</p>
          </div>

          {/* Table of Contents */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: S.text, marginBottom: 12 }}>📋 Table of Contents</div>
            {[
              ["#what-is-ethereum", "What is Ethereum?"],
              ["#where-to-buy", "Where to Buy ETH — Best Exchanges"],
              ["#step-by-step", "Step-by-Step: How to Buy Ethereum"],
              ["#payment-methods", "Payment Methods Compared"],
              ["#wallet", "How to Store ETH Safely"],
              ["#fees", "Understanding Ethereum Fees"],
              ["#mistakes", "Common Mistakes to Avoid"],
              ["#faq", "Frequently Asked Questions"],
            ].map(([href, label]) => (
              <div key={href as string}>
                <a href={href as string} style={{ display: "block", color: S.blue, fontSize: 13, textDecoration: "none", padding: "4px 0", lineHeight: 1.6 }}>→ {label as string}</a>
              </div>
            ))}
          </div>
        </header>

        {/* What is Ethereum */}
        <section id="what-is-ethereum" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>What is Ethereum?</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Ethereum is a decentralized blockchain platform launched in 2015 by Vitalik Buterin. Unlike Bitcoin — which is primarily a store of value — Ethereum is a programmable blockchain that allows developers to build <strong style={{ color: S.text }}>decentralized applications (dApps)</strong>.
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
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            ETH (Ether) is the native currency of the Ethereum network. You need ETH to pay for transaction fees (called &quot;gas&quot;) and to interact with smart contracts. Since Ethereum&apos;s &quot;Merge&quot; upgrade in 2022, ETH is also used in <strong style={{ color: S.text }}>staking</strong> to secure the network, earning holders roughly 3–4% annually.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 24 }}>
            {[
              { icon: "🏦", title: "Market Cap", val: "~$440B", sub: "#2 by market cap" },
              { icon: "📅", title: "Founded", val: "2015", sub: "by Vitalik Buterin" },
              { icon: "⚡", title: "Use Cases", val: "DeFi, NFTs, Web3", sub: "Smart contracts platform" },
            ].map(c => (
              <div key={c.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: 11, color: S.text2, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.title}</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: S.text }}>{c.val}</div>
                <div style={{ fontSize: 11, color: S.text2, marginTop: 2 }}>{c.sub}</div>
              </div>        ))}


        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="learn"
        />


          </div>
        </section>

        {/* Where to Buy */}
        <section id="where-to-buy" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8 }}>Where to Buy ETH — Best Exchanges (2026)</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
            The easiest way to buy Ethereum is through a centralized exchange (CEX). These platforms let you buy ETH with a bank transfer, debit card, or wire. Here are the top options:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {EXCHANGES.map((ex, i) => (
              <div key={ex.name} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ background: "#6366f120", color: S.purple, border: "1px solid #6366f130", borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>#{i + 1}</span>
                    <h3 style={{ fontSize: 17, fontWeight: 800, margin: 0 }}>{ex.name}</h3>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10, background: "#22c55e20", color: S.green, border: "1px solid #22c55e30" }}>{ex.badge}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, fontSize: 13, marginBottom: 10 }}>
                    <div><span style={{ color: S.text2 }}>Trading Fee: </span><strong>{ex.fee}</strong></div>
                    <div><span style={{ color: S.text2 }}>Min Purchase: </span><strong>{ex.min}</strong></div>
                  </div>
                  <div style={{ fontSize: 13, color: S.text2, marginBottom: 4 }}><strong style={{ color: S.green }}>✓ Pros:</strong> {ex.pros}</div>
                  <div style={{ fontSize: 13, color: S.text2 }}><strong style={{ color: S.red }}>✗ Cons:</strong> {ex.cons}</div>
                </div>
                <div style={{ textAlign: "right", minWidth: 80 }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: S.green }}>{ex.rating}</div>
                  <div style={{ fontSize: 10, color: S.text2 }}>/ 10</div>
                  <a href={`/go/${ex.name.toLowerCase()}`} style={{ display: "inline-block", marginTop: 10, padding: "8px 16px", borderRadius: 8, fontSize: 12, fontWeight: 700, background: "#627EEA20", border: "1px solid #627EEA40", color: S.purple, textDecoration: "none" }}>
                    Visit →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step by Step */}
        <section id="step-by-step" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8 }}>Step-by-Step: How to Buy Ethereum</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
            We&apos;ll use <strong style={{ color: S.text }}>Coinbase</strong> as the example — it&apos;s the easiest platform for beginners. The steps are nearly identical on Kraken or Gemini.
          </p>
          {[
            {
              step: 1, icon: "🔐",
              title: "Create Your Account",
              body: "Go to Coinbase.com and click \"Get started.\" Enter your name, email, and create a strong password. Coinbase will send a verification email — click the link to confirm. The whole process takes about 2 minutes.",
            },
            {
              step: 2, icon: "🪪",
              title: "Verify Your Identity (KYC)",
              body: "Due to US financial regulations, exchanges must verify your identity. Upload a government-issued ID (passport, driver's license) and take a selfie. This usually takes 5–15 minutes. Some exchanges like Coinbase may verify instantly.",
            },
            {
              step: 3, icon: "🏦",
              title: "Add a Payment Method",
              body: "Go to \"Payment Methods\" and add your bank account (ACH transfer — free but takes 3–5 days) or a debit card (instant but typically 1.5% fee). For your first purchase, a debit card is simplest. Bank transfer is cheapest for larger amounts.",
            },
            {
              step: 4, icon: "🔍",
              title: "Search for Ethereum",
              body: "Click \"Buy / Sell\" at the top. Search for \"Ethereum\" or \"ETH.\" You'll see the current price. You can buy any dollar amount — there's no need to buy a whole ETH. Enter $50 to start, for example.",
            },
            {
              step: 5, icon: "✅",
              title: "Review and Confirm",
              body: "Before confirming, check the fee breakdown. Coinbase will show you the transaction fee clearly. Click \"Buy Now\" and your ETH will appear in your Coinbase account instantly (if you used a debit card) or after 3–5 business days (ACH).",
            },
          ].map(s => (
            <div key={s.step} style={{ display: "flex", gap: 20, marginBottom: 24, paddingBottom: 24, borderBottom: `1px solid ${S.border}30` }}>
              <div style={{ minWidth: 48, height: 48, borderRadius: "50%", background: "#627EEA20", border: "1px solid #627EEA40", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, color: S.purple, flexShrink: 0 }}>
                {s.step}
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8 }}>{s.icon} {s.title}</h3>
                <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.8, margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Payment Methods */}
        <section id="payment-methods" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>Payment Methods Compared</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: S.surface2 }}>
                  {["Method", "Speed", "Fee", "Best For"].map(h => (
                    <th key={h} style={{ padding: "12px 16px", color: S.text2, fontWeight: 700, textAlign: "left" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bank Transfer (ACH)", "3–5 days", "Free", "Large purchases"],
                  ["Debit Card", "Instant", "1.5–4%", "Small, quick buys"],
                  ["Wire Transfer", "1–2 days", "$10–$25 flat", "Very large amounts"],
                  ["PayPal / Google Pay", "Instant", "2–3%", "Convenience only"],
                  ["Crypto Transfer", "Minutes", "Network fee only", "Existing crypto holders"],
                ].map(([method, speed, fee, best], i) => (
                  <tr key={method as string} style={{ borderTop: `1px solid ${S.border}30`, background: i % 2 === 0 ? "transparent" : `${S.surface2}50` }}>
                    <td style={{ padding: "12px 16px", fontWeight: 700 }}>{method}</td>
                    <td style={{ padding: "12px 16px", color: S.text2 }}>{speed}</td>
                    <td style={{ padding: "12px 16px", color: fee === "Free" ? S.green : S.text2 }}>{fee}</td>
                    <td style={{ padding: "12px 16px", color: S.text2 }}>{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: S.text2, marginTop: 14, lineHeight: 1.7 }}>
            <strong style={{ color: S.text }}>Pro tip:</strong> If you&apos;re buying more than $500 of ETH, use a bank transfer (ACH) to avoid paying debit card fees. Fees can add up — 3% of $1,000 is $30, which would offset multiple weeks of ETH staking rewards.
          </p>
        </section>

        {/* Storing ETH */}
        <section id="wallet" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8 }}>How to Store Ethereum Safely</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
            If you&apos;re buying ETH as a long-term investment or planning to use it in DeFi, consider moving it off the exchange into a personal wallet. The crypto saying is true: <strong style={{ color: S.text }}>&quot;Not your keys, not your coins.&quot;</strong>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              {
                icon: "🦊", title: "MetaMask (Software Wallet)", type: "Hot Wallet",
                desc: "Free browser extension + mobile app. Best for actively using DeFi apps and NFT platforms. Keep only what you use actively — software wallets are vulnerable if your device is compromised.",
                color: "#f6851b", badge: "Best for DeFi",
              },
              {
                icon: "🔐", title: "Ledger Nano X (Hardware)", type: "Cold Wallet",
                desc: "Physical device that stores your private keys offline. Immune to remote attacks. Required if you're holding more than $1,000 in crypto long-term. ~$149 upfront cost.",
                color: S.purple, badge: "Best for Security",
              },
              {
                icon: "🏦", title: "Leave on Exchange", type: "Custodial",
                desc: "Fine for beginners and small amounts. Coinbase and Gemini are FDIC-insured for USD — not for crypto. Risk: exchange hacks or insolvency (rare but possible).",
                color: S.blue, badge: "Easiest",
              },
              {
                icon: "📱", title: "Coinbase Wallet (App)", type: "Self-Custody",
                desc: "Separate from the Coinbase exchange app. Gives you full self-custody while keeping a user-friendly interface. Good middle ground for beginners wanting to explore DeFi.",
                color: "#1652f0", badge: "Beginner Self-Custody",
              },
            ].map(w => (
              <div key={w.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 28 }}>{w.icon}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 14 }}>{w.title}</div>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10, background: w.color + "20", color: w.color, border: `1px solid ${w.color}30` }}>{w.badge}</span>
                  </div>
                </div>
                <div style={{ fontSize: 11, color: S.text2, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>{w.type}</div>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fees */}
        <section id="fees" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8 }}>Understanding Ethereum Fees</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            There are two types of fees to understand when buying and using ETH:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 10 }}>💸 Exchange Trading Fees</h3>
              <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7 }}>
                These are fees charged by the exchange to execute your purchase. Coinbase charges <strong style={{ color: S.text }}>0.5–1.5%</strong> on simple buys. Kraken&apos;s Pro charges as low as <strong style={{ color: S.text }}>0.16%</strong>. These fees come out of your purchase amount.
              </p>
            </div>
            <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 10 }}>⛽ Ethereum Gas Fees</h3>
              <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7 }}>
                When you send ETH from an exchange to your wallet, or use it in a DeFi app, you pay &quot;gas&quot; — a fee to the Ethereum network. In 2026, gas typically costs <strong style={{ color: S.text }}>$0.50–$5</strong> per transaction (much cheaper since EIP-1559 and L2 adoption).
              </p>
            </div>
          </div>
        </section>

        {/* Mistakes */}
        <section id="mistakes" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8 }}>Common Mistakes to Avoid</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: "🎯", title: "Sending to the wrong address", body: "Crypto transactions are irreversible. Always copy-paste wallet addresses and double-check the first and last 4 characters before sending." },
              { icon: "🔑", title: "Losing your seed phrase", body: "If you use a self-custody wallet, write your 12/24-word seed phrase on paper and store it somewhere safe — not on your phone or computer. Losing it = losing your funds forever." },
              { icon: "📊", title: "Buying all at once (FOMO)", body: "ETH is volatile. Consider dollar-cost averaging (DCA) — buying a fixed amount weekly or monthly — rather than investing everything at a market peak. Use our DCA Calculator." },
              { icon: "💰", title: "Ignoring taxes", body: "Selling or trading ETH is a taxable event in the US. Keep records of your purchase price and sale price. Use a tax tool like Koinly or our Crypto Tax Calculator." },
              { icon: "🎣", title: "Falling for phishing", body: "Always type exchange URLs directly. Never click links in emails or Discord messages claiming to be from Coinbase or MetaMask. These are almost always phishing scams." },
            ].map(m => (
              <div key={m.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, display: "flex", gap: 14 }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{m.icon}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{m.title}</h3>
                  <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                q: "How much does it cost to buy 1 ETH?",
                a: "At current prices (~$3,680 in March 2026), one ETH costs approximately $3,680. But you don't need to buy a whole ETH — you can buy as little as $10 worth. Most exchanges allow purchases down to 0.000001 ETH.",
              },
              {
                q: "Is Ethereum a good investment in 2026?",
                a: "We can't provide investment advice. Ethereum is the largest smart contract platform with ongoing adoption in DeFi, NFTs, and enterprise. It also offers staking rewards of ~3.8% APY. Like all crypto, it's highly volatile — only invest what you can afford to lose. Always DYOR.",
              },
              {
                q: "Can I buy ETH without KYC (identity verification)?",
                a: "Most reputable exchanges require KYC to comply with financial regulations. You can buy ETH without KYC on DEXes (like Uniswap) using existing crypto, but you'll need crypto first. For fiat purchases, some P2P platforms have lighter requirements.",
              },
              {
                q: "What's the difference between ETH and ERC-20 tokens?",
                a: "ETH is the native currency of Ethereum used to pay gas fees. ERC-20 tokens (USDC, LINK, UNI, etc.) are tokens built on top of Ethereum. You need ETH to transact — even when moving ERC-20 tokens — because gas is always paid in ETH.",
              },
              {
                q: "How long does it take to buy Ethereum?",
                a: "Account creation and KYC: 5–20 minutes. With a debit card: ETH appears in your account instantly. With a bank transfer (ACH): 1–5 business days depending on the exchange. First-time bank verification can add 1–2 extra days.",
              },
            ].map(faq => (
              <div key={faq.question} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: S.purple, marginBottom: 10 }}>Q: {faq.question}</h3>
                <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.75, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #627EEA15, #627EEA05)", border: "1px solid #627EEA30", borderRadius: 14, padding: 28, textAlign: "center" }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 12 }}>Ready to Buy Ethereum?</h2>
          <p style={{ fontSize: 14, color: S.text2, marginBottom: 20, lineHeight: 1.7 }}>
            Use our tools to track your portfolio, calculate taxes, and find the best DeFi yields for your ETH.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/tools/portfolio-tracker" style={{ padding: "10px 22px", borderRadius: 10, background: "#627EEA20", border: "1px solid #627EEA40", color: S.purple, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              📊 Portfolio Tracker
            </Link>
            <Link href="/tools/tax-calculator" style={{ padding: "10px 22px", borderRadius: 10, background: "#3fb95020", border: "1px solid #3fb95040", color: S.green, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              🧮 Tax Calculator
            </Link>
            <Link href="/tools/defi-yields" style={{ padding: "10px 22px", borderRadius: 10, background: "#f0883e20", border: "1px solid #f0883e40", color: S.orange, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              🌾 DeFi Yields
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ background: "#d2992215", border: "1px solid #d2992240", borderRadius: 10, padding: 14, marginTop: 32, fontSize: 12, color: S.yellow, lineHeight: 1.7 }}>
          ⚠️ <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice. Cryptocurrency investments are highly volatile and risky. You could lose all invested capital. Always consult a financial advisor before investing. degen0x may earn a commission from affiliate links above.
        </div>
      
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
              "headline": "How To Buy Ethereum",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/how-to-buy-ethereum"
            })
          }}
        />
      </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "How to Buy Ethereum (ETH) in 2026: Step-by-Step Guide", "description": "Learn how to buy Ethereum step by step. Compare the best exchanges, set up a wallet, and stay safe. Updated for 2026 \u2014 beginner-friendly guide.", "url": "https://degen0x.com/learn/how-to-buy-ethereum", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</main>
  );
}
