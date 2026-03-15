'use client';
import { useState } from "react";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#6366f1", green: "#3fb950",
  blue: "#58a6ff", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
  cyan: "#06b6d4",
};

export interface DripEmail {
  day: number;
  subject: string;
  preview: string;
  body: string;
  xp: number;
  cta: string;
  ctaUrl: string;
  tag: string;
  tagColor: string;
}

export const DRIP_SEQUENCE: DripEmail[] = [
  {
    day: 0,
    subject: "🎉 Welcome to degen0x — Your Crypto Journey Starts Now",
    preview: "You just unlocked +50 XP. Here's what to do first.",
    tag: "Welcome",
    tagColor: S.green,
    xp: 50,
    cta: "Claim Your XP →",
    ctaUrl: "/dashboard",
    body: `Hey {{name}},

Welcome to **degen0x** — the platform designed to onboard the next billion users to crypto.

You've just joined 200,000+ degens on the path to on-chain mastery.

**Your first 3 moves:**
1. ✅ Complete your profile (earn +25 XP)
2. 📚 Start "Crypto 101" — the beginner course (earn +100 XP)
3. 🔗 Connect your wallet (earn +50 XP + unlock DeFi features)

**What is XP?**
XP (Experience Points) tracks your learning progress. Hit Level 5 and unlock Pro features. Hit Level 10 and get your on-chain degen0x NFT badge — free.

Tap below to claim your welcome bonus and start your first lesson.`,
  },
  {
    day: 1,
    subject: "📖 Day 1: What actually IS crypto? (5-min lesson inside)",
    preview: "Bitcoin, blockchains, wallets — let's make it click. +75 XP waiting.",
    tag: "Education",
    tagColor: S.blue,
    xp: 75,
    cta: "Start Day 1 Lesson →",
    ctaUrl: "/courses",
    body: `Hey {{name}},

Day 1! Let's start with the foundation.

**Today's lesson:** What is a blockchain?

Most people think crypto is just "magic internet money." It's actually a breakthrough in *trust infrastructure* — a way for strangers to transact without needing a bank or intermediary.

**The 60-second explanation:**
- A **blockchain** is a database that thousands of computers maintain simultaneously
- Once data is written, no single party can change it
- **Bitcoin** was the first application: a currency that doesn't require a bank
- **Ethereum** expanded this to programmable money — smart contracts

**Quick quiz (earn 25 XP):**
What makes a blockchain different from a regular database?
👉 Open your degen0x app to answer and claim your XP.

Tomorrow: We'll cover wallets — your key to the entire crypto universe.`,
  },
  {
    day: 2,
    subject: "🔐 Day 2: Your wallet is your passport to Web3",
    preview: "MetaMask, Phantom, hardware wallets — which one is right for you?",
    tag: "Wallets",
    tagColor: S.purple,
    xp: 100,
    cta: "Learn Wallets + Earn XP →",
    ctaUrl: "/courses",
    body: `Hey {{name}},

Day 2 — the most important skill in crypto: **setting up a wallet safely**.

Your wallet is not held by any company. You own it. That's the whole point.

**The 3 types of wallets:**

🌐 **Hot Wallets (browser/mobile)**
- MetaMask (Ethereum), Phantom (Solana), Coinbase Wallet
- Always connected to internet — convenient but higher risk
- Best for: daily use, DeFi, small amounts

🔒 **Hardware Wallets**
- Ledger, Trezor
- Private keys never touch the internet
- Best for: long-term storage, large amounts

📄 **Seed Phrases: The #1 Rule**
Your 12 or 24-word seed phrase = your wallet. Anyone who has it, owns your funds.
✅ Write it on paper
✅ Store in 2 physical locations
❌ Never type it online
❌ Never screenshot it
❌ Never share with ANYONE — not even "support"

**Today's XP challenge:** Set up your first wallet and connect it to degen0x for +100 XP.`,
  },
  {
    day: 3,
    subject: "💸 Day 3: Your first on-chain transaction (step-by-step)",
    preview: "Gas fees, confirmations, block explorers — decoded. Quiz inside: +80 XP.",
    tag: "Transactions",
    tagColor: S.cyan,
    xp: 80,
    cta: "Complete Day 3 →",
    ctaUrl: "/courses",
    body: `Hey {{name}},

Day 3! Today you'll understand exactly what happens when you send crypto.

**What is a transaction?**
Every action on a blockchain — sending tokens, swapping on a DEX, minting an NFT — is a *transaction* that gets permanently recorded.

**Anatomy of a transaction:**
- **From:** Your wallet address (0x...)
- **To:** Recipient address or smart contract
- **Value:** Amount of ETH/SOL/tokens sent
- **Gas:** Fee paid to network validators to process your tx
- **Nonce:** Sequence number (prevents replay attacks)

**Gas fees explained:**
Gas is the cost of computation on Ethereum. It fluctuates based on network demand.
- Peak hours (US daytime): $5–$50 per transaction
- Off-peak: $0.50–$2 per transaction
- L2 chains (Base, Arbitrum, Optimism): $0.001–$0.10 per transaction ← This is why L2s matter

**Track any transaction:**
Use Etherscan (Ethereum) or Solscan (Solana) to verify any transaction. Every tx has a unique hash — a receipt for the blockchain age.

**Today's challenge:** Look up your wallet on Etherscan and understand what you see → +80 XP`,
  },
  {
    day: 4,
    subject: "🌊 Day 4: DeFi — earn 10× more than your bank (seriously)",
    preview: "Lending, liquidity pools, yield farming. The numbers are real.",
    tag: "DeFi",
    tagColor: S.orange,
    xp: 120,
    cta: "Explore DeFi Guides →",
    ctaUrl: "/ecosystem",
    body: `Hey {{name}},

Day 4 — the part that makes traditional finance people nervous: **DeFi**.

Decentralized Finance is a set of open financial protocols running on blockchains. No banks. No brokers. Just smart contracts and math.

**What DeFi lets you do:**
- 💰 **Lend** your USDC and earn 5–15% APY (vs. 0.5% at banks)
- 🔄 **Swap** any token for any other token, 24/7, globally
- 🏊 **Provide liquidity** and earn a cut of every trade in a pool
- 🌾 **Yield farm** — stack multiple yields simultaneously

**Real numbers (March 2026):**
- sUSDe (Ethena): ~18% APY on stablecoins
- SOL staking via Jito: ~8% APY
- Aave USDC supply: ~6% APY

**The catch?**
Smart contracts can have bugs. Protocols can get exploited. Never invest more than you can afford to lose in DeFi, especially newer protocols.

**Today:** Explore the degen0x Ecosystem Store — 49 dApp guides with risk ratings, APY data, and step-by-step tutorials.`,
  },
  {
    day: 5,
    subject: "🏆 Day 5: You're 62% of the way to Level 2 — here's your leaderboard rank",
    preview: "You've earned {{xp_total}} XP. See how you rank vs. other degens.",
    tag: "Gamification",
    tagColor: S.yellow,
    xp: 50,
    cta: "View Your Rank →",
    ctaUrl: "/leaderboard",
    body: `Hey {{name}},

Halfway through your first week — and you're crushing it.

**Your stats so far:**
- XP earned: {{xp_total}}
- Streak: {{streak}} days 🔥
- Global rank: #{{rank}} / 200,000+
- Badges unlocked: {{badges}}

**Today's bonus challenge:**
Complete the "DeFi Safety" mini-quiz and earn +50 XP.

Questions cover:
- How to identify rug pulls
- Smart contract audit red flags
- When to use hardware wallets
- The rule of "not your keys, not your coins"

**Why this matters:**
The #1 reason people lose money in crypto isn't market volatility — it's scams and self-custody mistakes. Today's lesson could save you thousands.

See you on the leaderboard 👀`,
  },
  {
    day: 6,
    subject: "🚀 Day 6: Your weekly crypto mission + what's new on degen0x",
    preview: "49 dApp guides live. Course Chapter 2 unlocked. New missions available.",
    tag: "Weekly Mission",
    tagColor: S.accent,
    xp: 150,
    cta: "Start Weekly Mission →",
    ctaUrl: "/daily-challenge",
    body: `Hey {{name}},

Day 6 — your weekly wrap-up and mission briefing.

**What's new this week on degen0x:**
- ✅ 10 new dApp guides added (Jupiter, Ethena, Ondo, Raydium, Jito, Drift, Velodrome, Aerodrome, Kamino, Usual)
- 📊 Live price charts now on all 49 dApp guide pages
- 🏆 Weekly leaderboard reset — compete for top 10 to win XP multipliers

**Your weekly mission (earn 150 XP):**
Choose one:
1. 🔄 Make your first swap on a DEX (use the Jupiter or Uniswap guide)
2. 💰 Deposit $10 in a lending protocol (Aave or Kamino guide)
3. 📚 Complete 3 course chapters in one session

**The big picture:**
You've gone from zero to understanding blockchains, wallets, transactions, and DeFi — in 6 days. That puts you ahead of 95% of people who claim to "understand crypto."

The next step: going *on-chain*. Using real protocols with real money (even small amounts) cements the learning in a way no course can.

We're here for every step. See you tomorrow.

— The degen0x team`,
  },
];

interface EmailDripSequenceProps {
  userName?: string;
  currentDay?: number;
}

export default function EmailDripSequence({ userName = "Degen", currentDay = 0 }: EmailDripSequenceProps) {
  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");
  const email = DRIP_SEQUENCE[selectedDay];

  const bodyWithVars = email.body
    .replace(/\{\{name\}\}/g, userName)
    .replace(/\{\{xp_total\}\}/g, "425")
    .replace(/\{\{streak\}\}/g, "6")
    .replace(/\{\{rank\}\}/g, "3,847")
    .replace(/\{\{badges\}\}/g, "3");

  return (
    <div style={{ background: S.bg, color: S.text, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: "24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, margin: "0 0 4px" }}>📧 7-Day Email Onboarding Drip</h2>
        <p style={{ color: S.text2, fontSize: 13, margin: 0 }}>Automated sequence to convert signups into active users</p>
      </div>

      {/* Day Selector */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {DRIP_SEQUENCE.map((e) => (
          <button
            key={e.day}
            onClick={() => setSelectedDay(e.day)}
            style={{
              padding: "6px 14px", borderRadius: 8, border: `1px solid ${selectedDay === e.day ? e.tagColor : S.border}`,
              background: selectedDay === e.day ? `${e.tagColor}20` : S.surface,
              color: selectedDay === e.day ? e.tagColor : S.text2,
              cursor: "pointer", fontSize: 12, fontWeight: 600,
            }}
          >
            Day {e.day} · {e.tag}
          </button>
        ))}
      </div>

      {/* Email Preview Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", background: `${email.tagColor}20`, color: email.tagColor, border: `1px solid ${email.tagColor}40`, borderRadius: 6 }}>{email.tag}</span>
          <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", background: "#3fb95020", color: S.green, border: "1px solid #3fb95040", borderRadius: 6 }}>+{email.xp} XP</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {(["desktop", "mobile"] as const).map((m) => (
            <button key={m} onClick={() => setPreviewMode(m)} style={{ padding: "5px 12px", borderRadius: 6, border: `1px solid ${previewMode === m ? S.accent : S.border}`, background: previewMode === m ? `${S.accent}20` : S.surface, color: previewMode === m ? S.accent : S.text2, cursor: "pointer", fontSize: 11, fontWeight: 600 }}>
              {m === "desktop" ? "🖥 Desktop" : "📱 Mobile"}
            </button>
          ))}
        </div>
      </div>

      {/* Email Preview */}
      <div style={{ maxWidth: previewMode === "mobile" ? 375 : "100%", margin: "0 auto" }}>
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, overflow: "hidden" }}>
          {/* Email Header */}
          <div style={{ background: `linear-gradient(135deg, ${S.accent}20, ${email.tagColor}15)`, borderBottom: `1px solid ${S.border}`, padding: "16px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: S.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: S.text }}>degen0x</div>
                <div style={{ fontSize: 10, color: S.text2 }}>no-reply@degen0x.com</div>
              </div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: S.text, marginBottom: 4 }}>{email.subject}</div>
            <div style={{ fontSize: 11, color: S.text2 }}>{email.preview}</div>
          </div>

          {/* Email Body */}
          <div style={{ padding: "20px", fontSize: 13, lineHeight: 1.8, color: S.text2 }}>
            {bodyWithVars.split('\n').map((line, i) => {
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i} style={{ fontWeight: 700, color: S.text, margin: "12px 0 4px" }}>{line.replace(/\*\*/g, '')}</p>;
              }
              if (line.startsWith('- ') || line.startsWith('✅ ') || line.startsWith('❌ ') || line.startsWith('👉 ') || line.startsWith('💰 ') || line.startsWith('🔄 ') || line.startsWith('🌾 ') || line.startsWith('🔒 ') || line.startsWith('🌐 ') || line.startsWith('📄 ') || line.startsWith('📚 ')) {
                const processed = line.replace(/\*\*([^*]+)\*\*/g, '$1');
                return <div key={i} style={{ padding: "3px 0", color: S.text2 }}>{processed}</div>;
              }
              if (line.match(/^\d+\. /)) {
                return <div key={i} style={{ padding: "2px 0", paddingLeft: 4 }}>{line}</div>;
              }
              if (line === '') return <div key={i} style={{ height: 8 }} />;
              const processed = line.replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#e6edf3">$1</strong>');
              return <p key={i} style={{ margin: "4px 0" }} dangerouslySetInnerHTML={{ __html: processed }} />;
            })}

            {/* CTA Button */}
            <div style={{ marginTop: 24, textAlign: "center" }}>
              <a href={email.ctaUrl} style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "12px 32px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
                {email.cta}
              </a>
            </div>

            {/* Footer */}
            <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${S.border}`, fontSize: 11, color: S.text2, textAlign: "center" }}>
              <p style={{ margin: "0 0 4px" }}>You're receiving this because you signed up at degen0x.com</p>
              <p style={{ margin: 0 }}>
                <a href="/unsubscribe" style={{ color: S.text2 }}>Unsubscribe</a> · <a href="/preferences" style={{ color: S.text2 }}>Email Preferences</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sequence Stats */}
      <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
        {[
          ["Total Emails", "7", S.accent],
          ["Total XP Available", `${DRIP_SEQUENCE.reduce((a, e) => a + e.xp, 0)}`, S.green],
          ["Sequence Duration", "7 days", S.blue],
          ["Avg Send Time", "9:00 AM", S.orange],
        ].map(([label, value, color]) => (
          <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, padding: "12px 14px" }}>
            <div style={{ fontSize: 10, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: String(color), marginTop: 3 }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
