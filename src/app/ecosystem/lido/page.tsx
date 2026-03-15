'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4"};
const C="#00a3ff";
export default function LidoGuidePage(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{borderBottom:`1px solid ${S.border}`,padding:"16px 24px",display:"flex",gap:8,fontSize:13,color:S.text2}}><Link href="/" style={{color:S.text2,textDecoration:"none"}}>Home</Link><span>/</span><Link href="/ecosystem" style={{color:S.text2,textDecoration:"none"}}>Ecosystem</Link><span>/</span><span style={{color:S.text}}>Lido</span></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>🌊</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Liquid Staking</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>Ethereum</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>Lido Finance: Liquid ETH Staking Guide 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>The #1 liquid staking protocol · +150 XP · 11 min read · Updated March 2026</p>
</div>
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:12,marginBottom:40}}>
{[["ETH Staked","$30B+",C],["stETH Supply","~9.5M ETH",S.blue],["Staking APR","~3.8%",S.green],["Token","$LDO",S.purple],["Market Share","~31% of staked ETH",S.orange],["Rating","⭐ 4.8",S.yellow]].map(([l,v,c])=>(
<div key={String(l)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:16,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is Lido?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>Lido Finance is the largest liquid staking protocol for Ethereum. Instead of locking 32 ETH to run your own validator (the traditional staking requirement), Lido lets you stake any amount of ETH and receive <strong style={{color:S.text}}>stETH</strong> (staked ETH) — a liquid token that represents your staked ETH plus daily accruing rewards.</p>
<p style={{color:S.text2,lineHeight:1.8}}>stETH is widely used as collateral across DeFi (Aave, MakerDAO, Curve) while still earning Ethereum consensus layer rewards. This is the core value proposition: <strong style={{color:S.text}}>stake and earn + stay liquid</strong>.</p>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>stETH vs wstETH</h2>
{[["stETH (Rebasing Token)","Your stETH balance updates daily — 1 stETH always = 1 ETH of staking position, but the number of tokens in your wallet increases as rewards accrue. Best for: simple holding."],["wstETH (Wrapped, Non-rebasing)","wstETH balance stays fixed; its price vs. ETH appreciates instead. Required for DeFi protocols that can't handle rebasing tokens (Aave, Uniswap V3 concentrated LP). Best for: DeFi use."]].map(([t,d])=>(
<div key={String(t)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{t}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>How Lido Works</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>When you deposit ETH into Lido: (1) Lido distributes it across a curated set of professional node operators (currently 30+ globally). (2) These operators run Ethereum validators. (3) Consensus rewards flow back to the Lido smart contract. (4) Lido takes a 10% cut (split between node operators and the DAO treasury). (5) The remaining 90% of rewards is reflected in your stETH balance daily.</p>
<div style={{background:`${S.orange}10`,border:`1px solid ${S.orange}40`,borderRadius:10,padding:"14px 18px"}}>
<div style={{fontWeight:700,color:S.orange,marginBottom:6,fontSize:13}}>⚠️ Risks to Know</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.8}}><strong style={{color:S.text}}>Smart contract risk:</strong> Despite audits, bugs are possible.<br/><strong style={{color:S.text}}>Slashing risk:</strong> If a node operator misbehaves, validators can be slashed, reducing stETH value. Lido carries insurance via the DAO fund.<br/><strong style={{color:S.text}}>Concentration risk:</strong> ~31% of all staked ETH being in one protocol raises Ethereum centralization concerns.</div>
</div>
</section>

<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Start staking ETH with Lido</div><div style={{color:S.text2,fontSize:13}}>Complete the Lido quiz and earn +150 XP</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://stake.lido.fi" target="_blank" rel="noopener noreferrer" style={{padding:"10px 20px",background:C,color:"#fff",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open Lido ↗</a>
<Link href="/quiz" style={{padding:"10px 20px",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +150 XP</Link>
</div>
</div>

        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:LDOUSD" height={420} />
        </section>

      </article>
</main>);}
