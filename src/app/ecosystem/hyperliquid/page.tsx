'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff"};
const C="#00e5ff";
export default function HyperliquidGuidePage(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{borderBottom:`1px solid ${S.border}`,padding:"16px 24px",display:"flex",gap:8,fontSize:13,color:S.text2}}><Link href="/" style={{color:S.text2,textDecoration:"none"}}>Home</Link><span>/</span><Link href="/ecosystem" style={{color:S.text2,textDecoration:"none"}}>Ecosystem</Link><span>/</span><span style={{color:S.text}}>Hyperliquid</span></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>⚡</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Perps DEX</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>L1 Blockchain</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.green}20`,color:S.green}}>Order Book</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>Hyperliquid: The Fastest On-chain Perps Exchange Guide 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>CEX-speed order book on its own L1 · +150 XP · 12 min read · Updated March 2026</p>
</div>
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:12,marginBottom:40}}>
{[["Daily Volume","$3–8B",C],["Perp Markets","150+",S.blue],["Max Leverage","50×",S.orange],["Token","$HYPE",S.purple],["Block Time","<1s",S.green],["Rating","⭐ 4.9",S.yellow]].map(([l,v,c])=>(
<div key={String(l)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:18,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is Hyperliquid?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>Hyperliquid is a fully on-chain perpetual futures exchange that operates on its own custom L1 blockchain — <strong style={{color:S.text}}>HyperBFT</strong>. Unlike other DEXes, Hyperliquid uses a fully on-chain central limit order book (CLOB) with sub-second block times, giving it CEX-comparable speed and UX while remaining non-custodial.</p>
<p style={{color:S.text2,lineHeight:1.8}}>In 2026, Hyperliquid is the #1 perpetuals DEX by volume, surpassing GMX and dYdX. Its <strong style={{color:S.text}}>HyperEVM</strong> layer allows developers to build DeFi apps that can natively interact with Hyperliquid's order book and liquidity.</p>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>Why Hyperliquid is Different</h2>
{[
["On-chain Order Book","Traditional DEXes use AMMs. Hyperliquid runs a full CLOB on-chain with market orders, limit orders, stop-losses, and TWAPs — all executed without a centralized matching engine."],
["HyperBFT Consensus","A custom BFT consensus mechanism achieving <1s finality. Validators are permissioned (for now) but the network plans progressive decentralization."],
["Vault System (HLP)","The Hyperliquidity Provider (HLP) vault runs market-making strategies. Users can deposit USDC and share in market-making profits. It acts as a DEX LP but for an order book."],
["$HYPE Token","Governance and fee token. 31% of supply was airdropped to early users in Nov 2024 — one of crypto's largest airdrop events. Protocol fees buy back and burn $HYPE."],
].map(([t,d])=>(
<div key={String(t)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{t}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>How to Use Hyperliquid</h2>
{[["1. Bridge USDC","Go to app.hyperliquid.xyz. Bridge USDC from Arbitrum or native Ethereum to Hyperliquid using their native bridge — no third-party bridge required."],["2. Connect Wallet","Connect MetaMask or any EVM-compatible wallet. Hyperliquid uses API keys for trading (optional) or direct wallet signing."],["3. Trade","Select a market from 150+ perpetuals. Set order type (Market/Limit/TWAP), leverage, and position size. Fills are near-instant."],["4. Set SL/TP","Use the position management panel to set stop-loss and take-profit at any time. All orders are fully on-chain."],["5. Earn via HLP","Deposit USDC into the HLP vault to passively earn from market-making activity instead of directional trading."]].map(([s,d])=>(
<div key={String(s)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{s}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>

<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Trade on Hyperliquid</div><div style={{color:S.text2,fontSize:13}}>Complete the Hyperliquid quiz and earn +150 XP</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://app.hyperliquid.xyz" target="_blank" rel="noopener noreferrer" style={{padding:"10px 20px",background:C,color:"#000",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open Hyperliquid ↗</a>
<Link href="/quiz" style={{padding:"10px 20px",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +150 XP</Link>
</div>
</div>

        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:HYPEUSDT" height={420} />
        </section>

      </article>
</main>);}
