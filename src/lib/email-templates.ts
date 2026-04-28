// degen0x Email Drip Sequence Templates
// Onboarding (5 emails) + Weekly Digest template
// Use with SendGrid, Resend, Loops, or any ESP

export interface EmailTemplate {
  id: string;
  subject: string;
  preheader: string;
  delayDays: number; // days after signup (0 = immediate)
  html: string;
  text: string;
}

const BASE_URL = "https://degen0x.com";
const UNSUBSCRIBE_URL = "{{unsubscribe_url}}";
const FIRST_NAME = "{{first_name}}";

// ─────────────────────────────────────────────
// SHARED STYLES
// ─────────────────────────────────────────────
const emailStyles = `
  body { margin: 0; padding: 0; background: #0d1117; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; }
  .wrapper { max-width: 600px; margin: 0 auto; background: #0d1117; }
  .header { background: #161b22; border-bottom: 1px solid #30363d; padding: 24px 32px; text-align: center; }
  .logo { font-size: 24px; font-weight: 900; background: linear-gradient(135deg, #6366f1, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .body { padding: 40px 32px; }
  h1 { color: #e6edf3; font-size: 28px; font-weight: 800; margin: 0 0 16px; line-height: 1.2; }
  h2 { color: #e6edf3; font-size: 20px; font-weight: 700; margin: 28px 0 12px; }
  p { color: #8b949e; font-size: 15px; line-height: 1.7; margin: 0 0 16px; }
  a { color: #58a6ff; text-decoration: none; }
  .cta { display: inline-block; background: linear-gradient(135deg, #6366f1, #818cf8); color: #fff !important; padding: 14px 32px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; margin: 8px 0; }
  .cta-secondary { display: inline-block; border: 1px solid #30363d; color: #e6edf3 !important; padding: 12px 24px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; margin: 8px 0; background: #161b22; }
  .card { background: #161b22; border: 1px solid #30363d; border-radius: 12px; padding: 20px 24px; margin: 16px 0; }
  .card-icon { font-size: 28px; margin-bottom: 8px; }
  .card h3 { color: #e6edf3; font-size: 16px; font-weight: 700; margin: 0 0 6px; }
  .card p { font-size: 13px; margin: 0; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .badge { display: inline-block; background: #6366f120; color: #818cf8; border: 1px solid #6366f130; border-radius: 6px; padding: 2px 10px; font-size: 12px; font-weight: 700; margin-bottom: 12px; }
  .divider { border: none; border-top: 1px solid #30363d; margin: 32px 0; }
  .stat-row { display: flex; gap: 16px; margin: 20px 0; }
  .stat { flex: 1; background: #161b22; border: 1px solid #30363d; border-radius: 10px; padding: 16px; text-align: center; }
  .stat-num { font-size: 28px; font-weight: 900; color: #6366f1; }
  .stat-label { font-size: 11px; color: #8b949e; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; }
  .footer { background: #161b22; border-top: 1px solid #30363d; padding: 24px 32px; text-align: center; }
  .footer p { font-size: 12px; color: #8b949e; margin: 4px 0; }
  .highlight { color: #e6edf3; font-weight: 700; }
  .emoji { font-style: normal; }
`;

// ─────────────────────────────────────────────
// EMAIL 1 — Welcome (Day 0, immediate)
// ─────────────────────────────────────────────
export const EMAIL_WELCOME: EmailTemplate = {
  id: "welcome",
  subject: "🎉 Welcome to degen0x — Your Crypto Journey Starts Now",
  preheader: "Here's everything you need to get started in crypto.",
  delayDays: 0,
  html: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${emailStyles}</style></head>
<body>
<div class="wrapper">
  <div class="header">
    <div class="logo">degen0x</div>
    <p style="color:#8b949e;font-size:13px;margin:6px 0 0">Your Trusted Guide to the Crypto World</p>
  </div>
  <div class="body">
    <div class="badge">WELCOME</div>
    <h1>Hey ${FIRST_NAME}, you're in! 👋</h1>
    <p>You just joined <span class="highlight">thousands of crypto degens</span> using degen0x to navigate the digital asset world smarter.</p>
    <p>Whether you're brand new to crypto or a seasoned degen, we've got the tools, reviews, and guides to help you make better decisions.</p>

    <div class="card">
      <div class="card-icon">🚀</div>
      <h3>Start Here — 3 Things to Do First</h3>
      <p>These will give you the most value in the next 10 minutes.</p>
    </div>

    <div class="card">
      <div class="card-icon">📊</div>
      <h3><a href="${BASE_URL}/exchanges/best">1. Find Your Exchange</a></h3>
      <p>We compared 50+ exchanges on fees, security, and usability. Find the best one for your country and experience level.</p>
    </div>

    <div class="card">
      <div class="card-icon">🔄</div>
      <h3><a href="${BASE_URL}/tools/converter">2. Use the Free Crypto Converter</a></h3>
      <p>Convert BTC, ETH, SOL, and 10+ coins to USD, EUR, GBP — free, instant, no account needed.</p>
    </div>

    <div class="card">
      <div class="card-icon">🧠</div>
      <h3><a href="${BASE_URL}/learn/daily-trivia">3. Play the Daily Trivia</a></h3>
      <p>Test your crypto knowledge with today's 10-question quiz. New questions every day. Build your streak!</p>
    </div>

    <br>
    <div style="text-align:center">
      <a href="${BASE_URL}" class="cta">Explore degen0x →</a>
    </div>

    <hr class="divider">

    <h2>What's Inside degen0x?</h2>
    <div class="stat-row">
      <div class="stat"><div class="stat-num">2,400+</div><div class="stat-label">Pages & Reviews</div></div>
      <div class="stat"><div class="stat-num">65+</div><div class="stat-label">Free Tools</div></div>
      <div class="stat"><div class="stat-num">223</div><div class="stat-label">Glossary Terms</div></div>
    </div>

    <p>Over the next few days, I'll send you our most powerful guides and tools. Watch for them!</p>
    <p style="color:#e6edf3;font-weight:600">— The degen0x Team</p>
  </div>
  <div class="footer">
    <p>You received this because you signed up at <a href="${BASE_URL}">degen0x.com</a></p>
    <p><a href="${UNSUBSCRIBE_URL}">Unsubscribe</a> · <a href="${BASE_URL}/privacy">Privacy Policy</a></p>
  </div>
</div>
</body></html>`,
  text: `Welcome to degen0x, ${FIRST_NAME}!

Here's what to do first:

1. Find Your Exchange: ${BASE_URL}/exchanges/best
   We compared 50+ exchanges on fees, security, and usability.

2. Use the Free Crypto Converter: ${BASE_URL}/tools/converter
   Convert BTC, ETH, SOL to USD, EUR, GBP instantly.

3. Play the Daily Trivia: ${BASE_URL}/learn/daily-trivia
   Test your knowledge with 10 daily questions.

Explore everything at ${BASE_URL}

– The degen0x Team

Unsubscribe: ${UNSUBSCRIBE_URL}`,
};

// ─────────────────────────────────────────────
// EMAIL 2 — The "Beginner Starter Pack" (Day 2)
// ─────────────────────────────────────────────
export const EMAIL_BEGINNER_PACK: EmailTemplate = {
  id: "beginner-pack",
  subject: "📚 Your Crypto Starter Pack (Everything You Need in One Email)",
  preheader: "Bitcoin wallets, exchanges, security — your complete beginner blueprint.",
  delayDays: 2,
  html: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${emailStyles}</style></head>
<body>
<div class="wrapper">
  <div class="header"><div class="logo">degen0x</div></div>
  <div class="body">
    <div class="badge">STARTER PACK</div>
    <h1>Your Crypto Blueprint 📋</h1>
    <p>Hey ${FIRST_NAME}, here are the <span class="highlight">5 things every smart crypto user sets up first</span>. Bookmark this email — it's your reference guide.</p>

    <div class="card">
      <div class="card-icon">🔐</div>
      <h3>Step 1: Get a Secure Wallet</h3>
      <p>Not your keys, not your crypto. Before you buy anything, set up a wallet. We rank the best hardware wallets (Ledger, Trezor) and software wallets (MetaMask, Phantom). <a href="${BASE_URL}/wallets/best">See rankings →</a></p>
    </div>

    <div class="card">
      <div class="card-icon">🔀</div>
      <h3>Step 2: Choose the Right Exchange</h3>
      <p>Fees make a massive difference long-term. A 0.1% difference on $10,000/year = $100 saved. We compare Coinbase, Binance, Kraken, and 47 others. <a href="${BASE_URL}/exchanges/best">Compare exchanges →</a></p>
    </div>

    <div class="card">
      <div class="card-icon">📊</div>
      <h3>Step 3: Understand Dollar-Cost Averaging</h3>
      <p>DCA is the strategy used by most successful long-term crypto investors. Instead of trying to time the market, you invest a fixed amount regularly. <a href="${BASE_URL}/tools/dca-calculator">Use the DCA Calculator →</a></p>
    </div>

    <div class="card">
      <div class="card-icon">🧾</div>
      <h3>Step 4: Know Your Tax Obligations</h3>
      <p>Most countries tax crypto gains. Knowing the rules upfront saves you from nasty surprises. <a href="${BASE_URL}/taxes/learn/crypto-tax-guide">Read the Tax Guide →</a></p>
    </div>

    <div class="card">
      <div class="card-icon">😱</div>
      <h3>Step 5: Watch Market Sentiment</h3>
      <p>The Fear & Greed Index shows when the market is panicking (buy opportunity?) or euphoric (take profits?). Check it daily. <a href="${BASE_URL}/tools/fear-greed-timeline">View Fear & Greed →</a></p>
    </div>

    <div style="text-align:center;margin-top:28px">
      <a href="${BASE_URL}/learn/crypto-for-beginners" class="cta">Complete Beginner Guide →</a>
    </div>
  </div>
  <div class="footer">
    <p>You received this because you signed up at <a href="${BASE_URL}">degen0x.com</a></p>
    <p><a href="${UNSUBSCRIBE_URL}">Unsubscribe</a> · <a href="${BASE_URL}/privacy">Privacy Policy</a></p>
  </div>
</div>
</body></html>`,
  text: `Your Crypto Blueprint, ${FIRST_NAME}

5 things every smart crypto user sets up first:

1. Get a Secure Wallet: ${BASE_URL}/wallets/best
2. Choose the Right Exchange: ${BASE_URL}/exchanges/best
3. Learn Dollar-Cost Averaging: ${BASE_URL}/tools/dca-calculator
4. Know Your Tax Obligations: ${BASE_URL}/taxes/learn/crypto-tax-guide
5. Watch Market Sentiment: ${BASE_URL}/tools/fear-greed-timeline

Full beginner guide: ${BASE_URL}/learn/crypto-for-beginners

Unsubscribe: ${UNSUBSCRIBE_URL}`,
};

// ─────────────────────────────────────────────
// EMAIL 3 — DeFi Deep Dive (Day 5)
// ─────────────────────────────────────────────
export const EMAIL_DEFI_DIVE: EmailTemplate = {
  id: "defi-dive",
  subject: "⚡ DeFi is paying 8–30% yields. Here's how to access it safely.",
  preheader: "The $50B DeFi sector explained — without the complexity.",
  delayDays: 5,
  html: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${emailStyles}</style></head>
<body>
<div class="wrapper">
  <div class="header"><div class="logo">degen0x</div></div>
  <div class="body">
    <div class="badge">DEFI UNLOCKED</div>
    <h1>The $50B DeFi Opportunity ⚡</h1>
    <p>Hey ${FIRST_NAME}, here's a fact: <span class="highlight">traditional savings accounts pay 4-5%. Some DeFi protocols pay 8–30%.</span> That's a real difference, and it's accessible to anyone with a crypto wallet.</p>
    <p>But DeFi has real risks too. Let's break it down honestly.</p>

    <div class="card">
      <div class="card-icon">💡</div>
      <h3>What Is DeFi?</h3>
      <p>Decentralized Finance runs on blockchains without banks. You can lend, borrow, and earn yield directly from your wallet — no intermediary, no KYC in most cases. <a href="${BASE_URL}/learn/what-is-defi">Full DeFi explainer →</a></p>
    </div>

    <h2>3 Ways to Earn in DeFi</h2>

    <div class="card">
      <div class="card-icon">🏦</div>
      <h3>1. Lending (Lowest Risk)</h3>
      <p>Deposit stablecoins (USDC, USDT) into Aave or Compound and earn 4–12% APY. Your capital stays stable while earning yield. <a href="${BASE_URL}/defi-lending/best">Best DeFi lending platforms →</a></p>
    </div>

    <div class="card">
      <div class="card-icon">💧</div>
      <h3>2. Liquidity Providing (Medium Risk)</h3>
      <p>Provide token pairs to DEXs like Uniswap and earn a share of trading fees. Risk: impermanent loss if prices move significantly. <a href="${BASE_URL}/tools/impermanent-loss">Calculate your IL risk →</a></p>
    </div>

    <div class="card">
      <div class="card-icon">🥩</div>
      <h3>3. Liquid Staking (Low–Medium Risk)</h3>
      <p>Stake ETH via Lido (stETH) or Rocket Pool (rETH) and earn ~4% APY + keep your ETH liquid for DeFi. Best risk/reward ratio. <a href="${BASE_URL}/tools/staking-rewards">Compare staking yields →</a></p>
    </div>

    <div class="card" style="border-color:#f85149;background:#f8514908">
      <div class="card-icon">⚠️</div>
      <h3 style="color:#f85149">DeFi Risks to Know</h3>
      <p>Smart contract bugs, protocol hacks, rug pulls, and liquidation risk. Start small, use audited protocols, and never invest more than you can afford to lose.</p>
    </div>

    <div style="text-align:center;margin-top:28px">
      <a href="${BASE_URL}/defi-lending/best" class="cta">Compare DeFi Yields →</a>
      <br>
      <a href="${BASE_URL}/tools/defi-yields" class="cta-secondary" style="margin-top:8px;display:inline-block">Live Yield Dashboard →</a>
    </div>
  </div>
  <div class="footer">
    <p>You received this because you signed up at <a href="${BASE_URL}">degen0x.com</a></p>
    <p><a href="${UNSUBSCRIBE_URL}">Unsubscribe</a> · <a href="${BASE_URL}/privacy">Privacy Policy</a></p>
  </div>
</div>
</body></html>`,
  text: `DeFi is Paying 8-30% Yields, ${FIRST_NAME}

The $50B DeFi sector explained honestly:

3 Ways to Earn in DeFi:
1. Lending (Lowest Risk): ${BASE_URL}/defi-lending/best
2. Liquidity Providing: ${BASE_URL}/tools/impermanent-loss
3. Liquid Staking: ${BASE_URL}/tools/staking-rewards

Compare DeFi Yields: ${BASE_URL}/defi-lending/best
Live Yield Dashboard: ${BASE_URL}/tools/defi-yields

Unsubscribe: ${UNSUBSCRIBE_URL}`,
};

// ─────────────────────────────────────────────
// EMAIL 4 — The Tools Email (Day 9)
// ─────────────────────────────────────────────
export const EMAIL_POWER_TOOLS: EmailTemplate = {
  id: "power-tools",
  subject: "🛠️ 7 Free Crypto Tools That Will Save You Money (Most People Don't Know These)",
  preheader: "Our best tools in one place — built for traders and investors.",
  delayDays: 9,
  html: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${emailStyles}</style></head>
<body>
<div class="wrapper">
  <div class="header"><div class="logo">degen0x</div></div>
  <div class="body">
    <div class="badge">POWER TOOLS</div>
    <h1>7 Tools That'll Make You a Better Crypto Investor 🛠️</h1>
    <p>Hey ${FIRST_NAME}, over 65 free tools live on degen0x. Here are the 7 our users keep coming back to.</p>

    ${[
      { emoji: "📊", title: "DCA Calculator", desc: "Model how regular investments compound over time. Change amounts, frequencies, and coins.", href: `${BASE_URL}/tools/dca-calculator` },
      { emoji: "⛽", title: "Gas Tracker", desc: "Know when Ethereum is cheap to transact. Check GWEI live and set alerts.", href: `${BASE_URL}/tools/gas-tracker` },
      { emoji: "📉", title: "Impermanent Loss Calculator", desc: "Before providing liquidity, see exactly how much IL you'd face at different price moves.", href: `${BASE_URL}/tools/impermanent-loss` },
      { emoji: "🧾", title: "Crypto Tax Calculator", desc: "Estimate your capital gains tax liability before you file. Works for US, UK, Australia.", href: `${BASE_URL}/tools/tax-calculator` },
      { emoji: "🏦", title: "Exchange Fee Comparator", desc: "Input your monthly trading volume and see the exact fee difference across 10 exchanges.", href: `${BASE_URL}/tools/exchange-fees` },
      { emoji: "💰", title: "Staking Rewards Calculator", desc: "Calculate APY, compound frequency, and projected earnings across 12 PoS chains.", href: `${BASE_URL}/tools/staking-rewards` },
      { emoji: "🧠", title: "Daily Trivia", desc: "10 questions, 20 seconds each. Track your streak. Share your score.", href: `${BASE_URL}/learn/daily-trivia` },
    ].map(t => `
    <div class="card">
      <div class="card-icon">${t.emoji}</div>
      <h3><a href="${t.href}">${t.title}</a></h3>
      <p>${t.desc} <a href="${t.href}">Use it free →</a></p>
    </div>`).join("")}

    <div style="text-align:center;margin-top:28px">
      <a href="${BASE_URL}/tools" class="cta">See All 65+ Tools →</a>
    </div>
  </div>
  <div class="footer">
    <p>You received this because you signed up at <a href="${BASE_URL}">degen0x.com</a></p>
    <p><a href="${UNSUBSCRIBE_URL}">Unsubscribe</a> · <a href="${BASE_URL}/privacy">Privacy Policy</a></p>
  </div>
</div>
</body></html>`,
  text: `7 Free Crypto Tools, ${FIRST_NAME}

1. DCA Calculator: ${BASE_URL}/tools/dca-calculator
2. Gas Tracker: ${BASE_URL}/tools/gas-tracker
3. Impermanent Loss Calculator: ${BASE_URL}/tools/impermanent-loss
4. Crypto Tax Calculator: ${BASE_URL}/tools/tax-calculator
5. Exchange Fee Comparator: ${BASE_URL}/tools/exchange-fees
6. Staking Rewards Calculator: ${BASE_URL}/tools/staking-rewards
7. Daily Trivia: ${BASE_URL}/learn/daily-trivia

See All 65+ Tools: ${BASE_URL}/tools

Unsubscribe: ${UNSUBSCRIBE_URL}`,
};

// ─────────────────────────────────────────────
// EMAIL 5 — The "Advanced Degen" Email (Day 14)
// ─────────────────────────────────────────────
export const EMAIL_ADVANCED_DEGEN: EmailTemplate = {
  id: "advanced-degen",
  subject: "🦍 Ready to go deeper? Advanced crypto strategies for experienced degens.",
  preheader: "MEV, restaking, L2s, on-chain analytics — the rabbit hole goes deep.",
  delayDays: 14,
  html: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${emailStyles}</style></head>
<body>
<div class="wrapper">
  <div class="header"><div class="logo">degen0x</div></div>
  <div class="body">
    <div class="badge">ADVANCED DEGEN</div>
    <h1>Going Deeper — Advanced Crypto Strategies 🦍</h1>
    <p>Hey ${FIRST_NAME}, you've been with us for 2 weeks. If you're ready to go beyond buy-and-hold, here's where the real alpha lives.</p>

    <div class="card">
      <div class="card-icon">⚡</div>
      <h3>Layer 2 Blockchains — The Speed & Fee Revolution</h3>
      <p>Arbitrum, Optimism, Base, zkSync — same Ethereum security, 10-100x cheaper fees. Where most serious DeFi action is happening now. <a href="${BASE_URL}/learn/arbitrum-ecosystem-guide">L2 Guide →</a></p>
    </div>

    <div class="card">
      <div class="card-icon">🔄</div>
      <h3>Restaking via EigenLayer</h3>
      <p>Your already-staked ETH can secure additional protocols and earn extra yield. EigenLayer crossed $10B TVL faster than any DeFi protocol ever. <a href="${BASE_URL}/learn/restaking-eigenlayer-guide">Restaking Guide →</a></p>
    </div>

    <div class="card">
      <div class="card-icon">🐳</div>
      <h3>On-Chain Analytics & Whale Tracking</h3>
      <p>Track what smart money is doing before it hits the news. Whale moves, exchange flows, realized P&L — all publicly readable on-chain. <a href="${BASE_URL}/tools/whale-tracker">Whale Tracker →</a></p>
    </div>

    <div class="card">
      <div class="card-icon">🤖</div>
      <h3>AI Trading Signals</h3>
      <p>Our AI scans social sentiment, on-chain data, and technical patterns to surface potential entries. Beta, free. <a href="${BASE_URL}/tools/ai-trading-signals">Try AI Signals →</a></p>
    </div>

    <div class="card">
      <div class="card-icon">📊</div>
      <h3>Smart Money Tracker</h3>
      <p>Track addresses of top traders, VC funds, and protocol treasuries. See their moves before they're public knowledge. <a href="${BASE_URL}/tools/smart-money-tracker">Track Smart Money →</a></p>
    </div>

    <hr class="divider">

    <h2>🎮 Your Degen Score</h2>
    <p>How degen are you, really? Take the 2-minute assessment and get your personalized DeFi strategy based on your risk profile and experience.</p>
    <div style="text-align:center">
      <a href="${BASE_URL}/tools/degen-score" class="cta">Get Your Degen Score →</a>
    </div>
  </div>
  <div class="footer">
    <p>You received this because you signed up at <a href="${BASE_URL}">degen0x.com</a></p>
    <p><a href="${UNSUBSCRIBE_URL}">Unsubscribe</a> · <a href="${BASE_URL}/privacy">Privacy Policy</a></p>
  </div>
</div>
</body></html>`,
  text: `Advanced Crypto Strategies, ${FIRST_NAME}

Going deeper after 2 weeks:

1. Layer 2 Blockchains: ${BASE_URL}/learn/arbitrum-ecosystem-guide
2. Restaking via EigenLayer: ${BASE_URL}/learn/restaking-eigenlayer-guide
3. On-Chain Analytics: ${BASE_URL}/tools/whale-tracker
4. AI Trading Signals: ${BASE_URL}/tools/ai-trading-signals
5. Smart Money Tracker: ${BASE_URL}/tools/smart-money-tracker

Get Your Degen Score: ${BASE_URL}/tools/degen-score

Unsubscribe: ${UNSUBSCRIBE_URL}`,
};

// ─────────────────────────────────────────────
// WEEKLY DIGEST Template
// ─────────────────────────────────────────────
export const EMAIL_WEEKLY_DIGEST: EmailTemplate = {
  id: "weekly-digest",
  subject: "📰 This Week in Crypto | degen0x Weekly [DATE]",
  preheader: "Market recap, DeFi yields, top tools used this week, and your trivia challenge.",
  delayDays: 7,
  html: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><style>${emailStyles}</style></head>
<body>
<div class="wrapper">
  <div class="header">
    <div class="logo">degen0x</div>
    <p style="color:#8b949e;font-size:13px;margin:6px 0 0">Weekly Market Update</p>
  </div>
  <div class="body">
    <div class="badge">WEEKLY DIGEST · {{WEEK_DATE}}</div>
    <h1>This Week in Crypto 📰</h1>
    <p>Hey ${FIRST_NAME}, here's your weekly market summary, hottest DeFi yields, and the tools that got the most action this week.</p>

    <!-- MARKET OVERVIEW — fill dynamically -->
    <h2>📊 Market Overview</h2>
    <div class="stat-row">
      <div class="stat">
        <div class="stat-num" style="color:{{BTC_CHANGE_COLOR}}">{{BTC_PRICE}}</div>
        <div class="stat-label">Bitcoin (BTC) {{BTC_CHANGE}}</div>
      </div>
      <div class="stat">
        <div class="stat-num" style="color:{{ETH_CHANGE_COLOR}}">{{ETH_PRICE}}</div>
        <div class="stat-label">Ethereum (ETH) {{ETH_CHANGE}}</div>
      </div>
      <div class="stat">
        <div class="stat-num">{{FEAR_GREED_VALUE}}</div>
        <div class="stat-label">Fear & Greed — {{FEAR_GREED_LABEL}}</div>
      </div>
    </div>

    <!-- TOP STORY — fill dynamically -->
    <h2>🔥 Top Story This Week</h2>
    <div class="card">
      <h3>{{TOP_STORY_HEADLINE}}</h3>
      <p>{{TOP_STORY_SUMMARY}} <a href="{{TOP_STORY_LINK}}">Read more →</a></p>
    </div>

    <!-- HOT DEFI YIELDS — fill dynamically -->
    <h2>💰 Hottest DeFi Yields Right Now</h2>
    <div class="card">
      <p><span class="highlight">{{YIELD_1_PROTOCOL}}</span> · {{YIELD_1_PAIR}} · <span style="color:#3fb950">{{YIELD_1_APY}} APY</span></p>
      <p><span class="highlight">{{YIELD_2_PROTOCOL}}</span> · {{YIELD_2_PAIR}} · <span style="color:#3fb950">{{YIELD_2_APY}} APY</span></p>
      <p><span class="highlight">{{YIELD_3_PROTOCOL}}</span> · {{YIELD_3_PAIR}} · <span style="color:#3fb950">{{YIELD_3_APY}} APY</span></p>
      <p style="margin-top:10px"><a href="${BASE_URL}/tools/defi-yields">See all live yields →</a></p>
    </div>

    <!-- TRIVIA CHALLENGE -->
    <h2>🧠 This Week's Trivia Challenge</h2>
    <div class="card">
      <p><span class="highlight">{{TRIVIA_QUESTION}}</span></p>
      <p>A) {{TRIVIA_A}} &nbsp; B) {{TRIVIA_B}}</p>
      <p>C) {{TRIVIA_C}} &nbsp; D) {{TRIVIA_D}}</p>
      <p style="margin-top:10px"><a href="${BASE_URL}/learn/daily-trivia">Play today's full quiz to reveal the answer →</a></p>
    </div>

    <!-- TOOL OF THE WEEK -->
    <h2>🛠️ Tool of the Week</h2>
    <div class="card">
      <div class="card-icon">{{TOW_EMOJI}}</div>
      <h3>{{TOW_NAME}}</h3>
      <p>{{TOW_DESC}} <a href="{{TOW_LINK}}">Try it free →</a></p>
    </div>

    <!-- NEW ON DEGEN0X -->
    <h2>📖 New on degen0x</h2>
    <div class="card">
      <p>📝 <a href="{{NEW_1_LINK}}">{{NEW_1_TITLE}}</a></p>
      <p>📝 <a href="{{NEW_2_LINK}}">{{NEW_2_TITLE}}</a></p>
      <p>📝 <a href="{{NEW_3_LINK}}">{{NEW_3_TITLE}}</a></p>
    </div>

    <div style="text-align:center;margin-top:28px">
      <a href="${BASE_URL}" class="cta">Go to degen0x →</a>
    </div>
  </div>
  <div class="footer">
    <p>You received this because you signed up at <a href="${BASE_URL}">degen0x.com</a></p>
    <p>Want less email? <a href="${UNSUBSCRIBE_URL}">Unsubscribe</a> · <a href="${BASE_URL}/privacy">Privacy Policy</a></p>
  </div>
</div>
</body></html>`,
  text: `degen0x Weekly Digest — {{WEEK_DATE}}

This Week in Crypto, ${FIRST_NAME}

BTC: {{BTC_PRICE}} ({{BTC_CHANGE}})
ETH: {{ETH_PRICE}} ({{ETH_CHANGE}})
Fear & Greed: {{FEAR_GREED_VALUE}} — {{FEAR_GREED_LABEL}}

Top Story: {{TOP_STORY_HEADLINE}}
{{TOP_STORY_SUMMARY}}
Read more: {{TOP_STORY_LINK}}

Hottest DeFi Yields:
- {{YIELD_1_PROTOCOL}} · {{YIELD_1_PAIR}} · {{YIELD_1_APY}} APY
- {{YIELD_2_PROTOCOL}} · {{YIELD_2_PAIR}} · {{YIELD_2_APY}} APY
- {{YIELD_3_PROTOCOL}} · {{YIELD_3_PAIR}} · {{YIELD_3_APY}} APY
See all: ${BASE_URL}/tools/defi-yields

Trivia Challenge: ${BASE_URL}/learn/daily-trivia

Visit degen0x: ${BASE_URL}

Unsubscribe: ${UNSUBSCRIBE_URL}`,
};

// Full onboarding sequence in order
export const ONBOARDING_SEQUENCE: EmailTemplate[] = [
  EMAIL_WELCOME,
  EMAIL_BEGINNER_PACK,
  EMAIL_DEFI_DIVE,
  EMAIL_POWER_TOOLS,
  EMAIL_ADVANCED_DEGEN,
];
