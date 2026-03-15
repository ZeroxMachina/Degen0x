'use client';
import Breadcrumb from "@/components/Breadcrumb";

const S = {
  bg: "var(--color-bg, #0d1117)", border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)", text2: "var(--color-text-secondary, #8b949e)",
  primary: "#9FE3A4", blue: "#58a6ff", green: "#3fb950", orange: "#f0883e",
  yellow: "#d29922", red: "#f85149", purple: "#bc8cff",
};

const breadcrumbs = [
  { label: "Home", href: "/" }, { label: "Learn", href: "/learn" },
  { label: "Pump.fun & Memecoins", href: "/learn/pump-fun-memecoins" },
];

export default function PumpFunMemecoinPage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>🚀 Pump.fun</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.orange}20`, color: S.orange, border: `1px solid ${S.orange}40` }}>Memecoins</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 14, 2026 · 20 min read</span>
          </div>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Pump.fun & Memecoins Guide 2026: How Token Launches Work and Survival Strategy
          </h1>
          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75 }}>
            Pump.fun revolutionized token creation on Solana, enabling anyone to launch a memecoin in 30 seconds with $2. In 2025-2026, Pump.fun processed over $10 billion in trading volume and spawned thousands of tokens daily. This guide explains the bonding curve mechanics, how launches work, survival rates, and the strategies real traders use.
          </p>
        </header>

        <div style={{ background: "rgba(248,81,73,0.08)", border: "1px solid rgba(248,81,73,0.25)", borderRadius: 14, padding: 18, marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ fontSize: 20 }}>⚠️</span>
            <div>
              <div style={{ fontWeight: 700, color: S.red, marginBottom: 4 }}>High Risk Warning</div>
              <div style={{ fontSize: 13, color: S.text2 }}>The vast majority of memecoins lose 95-100% of their value. Pump.fun is highly speculative. Only risk capital you can afford to lose entirely. This guide is educational, not financial advice.</div>
            </div>
          </div>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>How Pump.fun Works</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Pump.fun uses an automated market maker with a bonding curve instead of a traditional liquidity pool. Tokens are created with a fixed supply of 1 billion, and the price increases algorithmically as more SOL is deposited. No pre-sale, no team allocation, no VC — every token starts at the same price and curves upward with buys.
          </p>
          <div style={{ background: `${S.primary}08`, border: `1px solid ${S.primary}25`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontWeight: 800, color: S.primary, marginBottom: 14 }}>Bonding Curve Mechanics</div>
            {[
              { phase: "Launch", detail: "Creator pays ~$2 (0.02 SOL) to mint 1B tokens. Initial market cap ~$3,000." },
              { phase: "Curve Phase", detail: "Buys increase price on the curve. $69K raised → token 'graduates' to Raydium." },
              { phase: "Graduation", detail: "At $69K, 200M tokens + SOL pooled on Raydium v4 as real liquidity." },
              { phase: "Post-Graduation", detail: "Token trades on Raydium like any DEX pair. Curve program LP burned." },
            ].map((p) => (
              <div key={p.phase} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                <span style={{ color: S.primary, fontWeight: 700, minWidth: 110, fontSize: 13 }}>{p.phase}</span>
                <span style={{ color: S.text2, fontSize: 13 }}>{p.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Brutal Stats: Survival Rates</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
            {[
              { label: "Graduate to Raydium", value: "~2%", color: S.yellow },
              { label: "Reach $100K MCap", value: "~0.5%", color: S.orange },
              { label: "Reach $1M MCap", value: "~0.05%", color: S.red },
              { label: "Long-term Survivors", value: "<0.01%", color: S.red },
            ].map((s) => (
              <div key={s.label} style={{ background: `${s.color}10`, border: `1px solid ${s.color}30`, borderRadius: 12, padding: 14, textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 11, color: S.text2, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p style={{ color: S.text2, fontSize: 13, marginTop: 12, lineHeight: 1.7 }}>
            Of the ~50,000+ tokens launched on Pump.fun per day, only ~2% graduate the bonding curve. The vast majority rugpull, go to zero, or die in obscurity within hours of launch. Volume statistics are heavily inflated by wash trading and bots.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>What Makes a Token Pump</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { factor: "Viral Narrative", desc: "Connection to trending news, memes, politicians, AI, or culture. The meta changes weekly.", color: S.blue },
              { factor: "KOL Promotion", desc: "Crypto Twitter/YouTube influencers with 50K+ followers shilling early has 10-50x multiplier effect.", color: S.purple },
              { factor: "Telegram Community", desc: "Active, organic-looking Telegram with 1K+ members before graduation = strong signal.", color: S.green },
              { factor: "Dev Wallet Behavior", desc: "If dev bought <10% of supply and hasn't sold = cleaner chart. Check on-chain.", color: S.orange },
              { factor: "No Bundler", desc: "Check if launch was 'bundled' (dev bought big % with multiple wallets simultaneously).", color: S.yellow },
              { factor: "CEX Speculation", desc: "Rumors or confirmed listing on Bybit, OKX, or Binance = 2-20x catalyst.", color: S.primary },
            ].map((f) => (
              <div key={f.factor} style={{ background: `${f.color}08`, border: `1px solid ${f.color}25`, borderRadius: 10, padding: 14 }}>
                <div style={{ fontWeight: 700, color: f.color, fontSize: 13, marginBottom: 4 }}>{f.factor}</div>
                <div style={{ fontSize: 12, color: S.text2 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Tools for Memecoin Traders</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {[
              { tool: "Photon / Bullx", use: "Fastest buy/sell execution on Solana memecoin launches" },
              { tool: "GMGN.ai", use: "Smart money tracking, copy trading, wallet analytics" },
              { tool: "Dexscreener", use: "Real-time charts, holder counts, transaction history" },
              { tool: "Birdeye", use: "Token analytics, whale tracking, portfolio tracking" },
              { tool: "rug.check", use: "Mint authority, freeze authority, LP lock status" },
              { tool: "Cielo Finance", use: "Copy trading — follow wallets of successful degens" },
            ].map((t) => (
              <div key={t.tool} style={{ display: "flex", gap: 12, padding: "10px 14px", background: `${S.green}05`, border: `1px solid ${S.green}20`, borderRadius: 8 }}>
                <span style={{ color: S.green, fontWeight: 700, minWidth: 130, fontSize: 13 }}>{t.tool}</span>
                <span style={{ color: S.text2, fontSize: 13 }}>{t.use}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}25`, borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>🚀 Key Takeaways</h2>
          {[
            "Pump.fun uses a bonding curve: price increases as SOL is deposited. No presale, no team allocation.",
            "Only ~2% of tokens 'graduate' (reach $69K liquidity); the other 98% go to zero quickly.",
            "Winning factors: viral narrative, KOL promotion, clean dev wallet, active organic community.",
            "Essential tools: Photon/Bullx (execution), GMGN (copy trading), Dexscreener (charts), rug.check (safety).",
            "Never invest more than you can afford to lose to zero — memecoin trading is highly speculative.",
          ].map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ color: S.primary, fontWeight: 800, marginTop: 2 }}>✦</span>
              <span style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{pt}</span>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
