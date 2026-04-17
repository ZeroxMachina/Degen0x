'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff"};
const C="#6966ff";
export default function DydxGuidePage(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{borderBottom:`1px solid ${S.border}`,padding:"16px 24px",display:"flex",gap:8,fontSize:13,color:S.text2}}><Link href="/" style={{color:S.text2,textDecoration:"none"}}>Home</Link><span>/</span><Link href="/ecosystem" style={{color:S.text2,textDecoration:"none"}}>Ecosystem</Link><span>/</span><span style={{color:S.text}}>dYdX</span></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>🔷</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Perps DEX</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>Cosmos L1</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>dYdX: Perpetuals on a Sovereign Cosmos Chain 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>Full decentralization on dYdX Chain (Cosmos SDK) · +150 XP · 11 min read</p>
</div>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:12,marginBottom:40}}>
{[["Daily Volume","$500M–1B",C],["Markets","100+",S.blue],["Token","$DYDX",S.purple],["Chain","Cosmos SDK",S.green],["Max Leverage","20×",S.orange],["Rating","⭐ 4.6",S.yellow]].map(([l,v,c])=>(
<div key={String(l)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:16,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>
<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is dYdX?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>dYdX is a decentralized perpetual futures exchange that migrated from Ethereum to its own <strong style={{color:S.text}}>Cosmos SDK-based blockchain</strong> (dYdX Chain) in late 2023. This enables fully on-chain order matching, validator-operated order books, and near-zero gas fees while maintaining non-custodial asset control.</p>
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
<p style={{color:S.text2,lineHeight:1.8}}>dYdX V4 is fully decentralized: no central servers, all fees go to validators and $DYDX stakers, and the token secures the network via PoS.</p>
</section>
<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>Key Features</h2>
{[["Cosmos L1","dYdX Chain is built with Cosmos SDK + CometBFT consensus — fast (~500ms finality), gasless for traders, 60+ validators."],["$DYDX Staking = Fee Revenue","100% of trading fees go to $DYDX stakers in USDC. Direct yield token with real revenue."],["Off-chain Order Book, On-chain Settlement","Validators run an in-memory order book for speed. All settlement is on-chain and auditable."],["MegaVault","Deposit USDC to earn passive yield from automated market-making across all dYdX perp markets."]].map(([t,d])=>(
<div key={String(t)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{t}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>
<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Trade on dYdX Chain</div><div style={{color:S.text2,fontSize:13}}>Complete the dYdX quiz and earn +150 XP</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://dydx.exchange" target="_blank" rel="noopener noreferrer" style={{padding:"10px 20px",background:C,color:"#fff",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open dYdX ↗</a>
<Link href="/quiz" style={{padding:"10px 20px",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +150 XP</Link>
</div>
</div>

        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:DYDXUSDT" height={420} />
        </section>

      </article>
</main>);}
