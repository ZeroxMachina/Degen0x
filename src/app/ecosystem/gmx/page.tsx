'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = { bg:"#0d1117", surface:"#161b22", surface2:"#1c2330", border:"#30363d", text:"#e6edf3", text2:"#8b949e", blue:"#58a6ff", green:"#3fb950", orange:"#f0883e", yellow:"#d29922", purple:"#bc8cff", cyan:"#06b6d4" };
const GMX_COLOR = "#06b6d4";

export default function GMXGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link><span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link><span>/</span>
        <span style={{ color: S.text }}>GMX</span>
      </div>
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${GMX_COLOR}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${GMX_COLOR}40` }}>📊</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${GMX_COLOR}20`, color: GMX_COLOR, border: `1px solid ${GMX_COLOR}40` }}>Perps DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue }}>Arbitrum</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green }}>Avalanche</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>GMX: Decentralized Perpetuals Exchange Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Trade BTC, ETH, SOL with up to 100× leverage on-chain · +150 XP · 13 min read</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["Cumul. Volume","$200B+",GMX_COLOR],["Open Interest","$800M+",S.blue],["Max Leverage","100×",S.orange],["Token","$GMX",S.purple],["GLP / GM","LP tokens",S.green],["Rating","⭐ 4.7",S.yellow]].map(([l,v,c])=>(
            <div key={String(l)} style={{ background:S.surface, border:`1px solid ${S.border}`, borderRadius:10, padding:"14px 16px" }}>
              <div style={{ fontSize:11, color:S.text2, textTransform:"uppercase" }}>{l}</div>
              <div style={{ fontSize:20, fontWeight:800, color:String(c), marginTop:4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: GMX_COLOR }}>What is GMX?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            GMX is the leading decentralized perpetual futures exchange, allowing traders to go long or short on BTC, ETH, SOL, AVAX, LINK, and other assets with up to 100× leverage — directly from their wallet, with no KYC. Unlike CEX perps, GMX uses an on-chain liquidity pool (GLP/GM) as the counterparty to trades, meaning liquidity providers earn fees from traders' losses and pay out winners.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1005', border: '1px solid #4a2c10', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🌐</span>
            <strong style={{ color: '#fb923c', fontSize: 15 }}>Ecosystem Watch</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Ecosystem strength is the best leading indicator of L1/L2 value. We track developer activity, unique addresses, and TVL growth — not just token price.
          </p>
        </div>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            <strong style={{ color: S.text }}>GMX V2</strong> introduced isolated markets (GM pools), oracle pricing from Chainlink + custom feeds, and reduced price impact, making it more capital-efficient for large trades.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: GMX_COLOR }}>GMX Tokens: $GMX, GLP & GM</h2>
          {[
            ["$GMX (Governance + Utility)", "Stake $GMX to earn 30% of protocol fees in ETH/AVAX + esGMX rewards. Voting rights on protocol upgrades via GMX DAO."],
            ["GLP (V1 Liquidity Pool Token)", "Index of assets (BTC, ETH, stablecoins). LPs earn 70% of all trading fees. Minting/redeeming has a dynamic fee based on target weights."],
            ["GM Tokens (V2 Isolated Markets)", "Each trading market has its own GM pool. More risk-isolated — a single market's losses don't affect other pools. Higher yield for volatile pairs."],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background:S.surface, border:`1px solid ${S.border}`, borderRadius:10, padding:"14px 16px", marginBottom:10 }}>
              <div style={{ fontWeight:700, color:GMX_COLOR, fontSize:13, marginBottom:4 }}>{title}</div>
              <div style={{ color:S.text2, fontSize:13, lineHeight:1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: GMX_COLOR }}>How to Trade Perps on GMX</h2>
          {[["1. Connect Wallet","Go to gmx.io → connect MetaMask or any WalletConnect wallet on Arbitrum or Avalanche."],["2. Deposit Collateral","Deposit ETH, USDC, or WBTC as collateral. Collateral stays in your wallet — no withdrawal delay."],["3. Open a Position","Select asset, choose Long/Short, set your leverage (1×–100×). GMX uses oracle prices — no spread, just a borrow fee on open positions."],["4. Set Stop-Loss / Take-Profit","GMX V2 supports native SL/TP orders on-chain. Set liquidation protection at the trade entry screen."],["5. Monitor Health","Track your liquidation price live on the positions dashboard. Add collateral at any time to stay healthy."]].map(([s,d])=>(
            <div key={String(s)} style={{ background:S.surface, border:`1px solid ${S.border}`, borderRadius:10, padding:"14px 16px", marginBottom:10 }}>
              <div style={{ fontWeight:700, color:GMX_COLOR, fontSize:13, marginBottom:4 }}>{s}</div>
              <div style={{ color:S.text2, fontSize:13, lineHeight:1.6 }}>{d}</div>
            </div>
          ))}
        </section>

        <div style={{ background:`linear-gradient(135deg,${GMX_COLOR}15,${S.purple}10)`, border:`1px solid ${GMX_COLOR}30`, borderRadius:14, padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
          <div>
            <div style={{ fontWeight:800, fontSize:16, marginBottom:4 }}>Trade perps on GMX</div>
            <div style={{ color:S.text2, fontSize:13 }}>Complete the GMX quiz and earn +150 XP</div>
          </div>
          <div style={{ display:"flex", gap:10 }}>
            <a href="https://gmx.io" target="_blank" rel="noopener noreferrer" style={{ padding:"10px 20px", background:GMX_COLOR, color:"#fff", borderRadius:8, fontWeight:700, fontSize:13, textDecoration:"none" }}>Open GMX ↗</a>
            <Link href="/quiz" style={{ padding:"10px 20px", background:`${S.purple}20`, color:S.purple, border:`1px solid ${S.purple}40`, borderRadius:8, fontWeight:700, fontSize:13, textDecoration:"none" }}>Take Quiz +150 XP</Link>
          </div>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:GMXUSDT" height={420} />
        </section>

      </article>
    </main>
  );
}
