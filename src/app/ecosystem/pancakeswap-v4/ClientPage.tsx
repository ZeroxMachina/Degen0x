'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", amber: "#ffa657", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function PancakeSwapV4GuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>PancakeSwap V4</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.amber}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.amber}40` }}>🥞</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.amber}20`, color: S.amber, border: `1px solid ${S.amber}40` }}>DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Multi-Chain</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Hooks</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>PancakeSwap V4: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Advanced multi-chain DEX with Uniswap V4 integration · +160 XP · 12 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$850M", S.amber],
            ["Daily Volume", "$280M", S.blue],
            ["Token", "$CAKE", S.purple],
            ["Chains", "10+", S.green],
            ["V4 Pools", "Growing", S.orange],
            ["Rating", "⭐ 4.8", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.amber }}>What is PancakeSwap V4?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            PancakeSwap V4 is the next-generation DEX from PancakeSwap Labs, built on <strong style={{ color: S.text }}>Uniswap V4's advanced hook architecture</strong>. V4 introduces customizable liquidity pools that leverage smart contract hooks — callbacks that trigger before and after swaps — enabling developers to build custom features like dynamic fees, MEV protection, limit orders, and oracle integration directly into pools.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1005', border: '1px solid #4a2c10', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🌐</span>
            <strong style={{ color: '#fb923c', fontSize: 15 }}>Ecosystem Watch</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We maintain relationships with builders across ecosystems. Our coverage reflects boots-on-the-ground knowledge from governance forums and developer Discord channels.
          </p>
        </div>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Operating on 10+ blockchains including BNB Chain, Ethereum, Arbitrum, Base, and Avalanche, PancakeSwap V4 unifies trading across ecosystems with superior capital efficiency through concentrated liquidity and hooks-based customization.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.amber }}>Key Features</h2>
          {[
            ["Hooks Architecture", "Custom smart contract callbacks enable MEV protection, limit orders, dynamic fees, and more"],
            ["Concentrated Liquidity", "LP capital earns fees only in active ranges; maximize capital efficiency"],
            ["Multi-Chain Deployment", "Unified DEX across 10+ blockchains with seamless routing"],
            ["Singleton Design", "Single protocol contract reduces gas by ~99% compared to previous versions"],
            ["Native ETH Integration", "Direct ETH trading without WETH wrapping on supported chains"],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.amber, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.amber }}>How to Use PancakeSwap V4</h2>
          {[
            ["1. Choose Network", "Select from 10+ supported chains via your wallet (BNB Chain, Ethereum, Arbitrum, Base, etc.)"],
            ["2. Connect Wallet", "Visit pancakeswap.finance → Connect MetaMask, WalletConnect, or other EVM wallets"],
            ["3. Access V4 Pools", "Browse V4 pools with hooks (marked with 🪝) offering advanced features like MEV protection"],
            ["4. Execute Swap", "Select tokens, review hook features, set slippage, confirm swap"],
            ["5. Use Custom Hooks", "Interact with limit orders, dynamic fee pools, or custom strategies enabled by hooks"],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.amber, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.amber }}>CAKE Token & Governance</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            <strong style={{ color: S.text }}>$CAKE</strong> is PancakeSwap's governance token. Holders vote on V4 hook approvals, fee distribution, and ecosystem grants. As PancakeSwap expands with V4's composability, CAKE holders gain access to new revenue streams from hook creators and advanced trading strategies.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {[
              ["Total Supply", "~750M CAKE"],
              ["Circulating", "~350M CAKE"],
              ["Governance", "V4 hook & upgrade voting"],
              ["Fee Distribution", "Stakers earn trading fees"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 3, color: S.text }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.amber }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>Hook Smart Contract Risk:</strong> Custom hooks increase attack surface; always audit hook contracts before using unfamiliar ones.<br/><br/>
              <strong style={{ color: S.orange }}>Multi-Chain Complexity:</strong> Bridging and cross-chain routing introduce additional risks; verify bridge security.<br/><br/>
              <strong style={{ color: S.orange }}>Concentrated Liquidity Risk:</strong> IL amplifies in volatile markets; use appropriate price ranges and stop losses.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.amber}15, ${S.purple}10)`, border: `1px solid ${S.amber}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Experience PancakeSwap V4</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the PancakeSwap V4 quiz and earn +160 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://pancakeswap.finance" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.amber, color: "#000", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Open PancakeSwap ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +160 XP
            </Link>
          </div>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live CAKE Price Chart</h2>
          <TradingViewChart symbol="COINBASE:CAKEUSD" height={420} />
        </section>

        <section style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["Uniswap", "DEX V4 pioneer", "/ecosystem/uniswap"],
              ["SyncSwap", "zkSync Era's leading DEX", "/ecosystem/syncswap"],
              ["STON.fi", "TON's primary DEX", "/ecosystem/stonfi"],
            ].map(([name, desc, url]) => (
              <Link key={name} href={url} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", textDecoration: "none", cursor: "pointer" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: S.amber, marginBottom: 4 }}>{name}</div>
                <div style={{ color: S.text2, fontSize: 12 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/spending/best/rewards" style={{ color: "#fb923c", marginRight: "1rem" }}>Rewards</a>
        </nav>
    </main>
  );
}
