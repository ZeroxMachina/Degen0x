'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4"};
const C="#00a3ff";
export default function RenzoGuidePage(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{borderBottom:`1px solid ${S.border}`,padding:"16px 24px",display:"flex",gap:8,fontSize:13,color:S.text2}}><Link href="/" style={{color:S.text2,textDecoration:"none"}}>Home</Link><span>/</span><Link href="/ecosystem" style={{color:S.text2,textDecoration:"none"}}>Ecosystem</Link><span>/</span><span style={{color:S.text}}>Renzo</span></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>💎</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Liquid Restaking</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>Multi-Chain</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>Renzo: EigenLayer Abstraction Protocol Guide 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>Simplified liquid restaking · +150 XP · 10 min read · Updated March 2026</p>
</div>
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:12,marginBottom:40}}>
{[["TVL","$3.1B",C],["ezETH Supply","~1.2M ETH",S.blue],["Staking APR","~3.2%",S.green],["Restaking APR","~2-4% variable",S.green],["Token","$REZ",S.purple],["Chains","Ethereum + L2s",S.yellow]].map(([l,v,c])=>(
<div key={String(l)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:16,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is Renzo?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>Renzo is a <strong style={{color:S.text}}>liquid restaking protocol</strong> that abstracts the complexity of EigenLayer. Instead of navigating EigenLayer's operator sets and AVS selection directly, Renzo lets you deposit ETH or other liquid staking tokens (LSTs) and receive <strong style={{color:S.text}}>ezETH</strong>—a liquid token earning restaking rewards automatically.</p>
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
<p style={{color:S.text2,lineHeight:1.8}}>Renzo simplifies restaking for everyday users while optimizing operator and AVS selection behind the scenes.</p>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>Key Features</h2>
{[["Multi-Asset Support","Deposit ETH, wBETH, stETH, or other LSTs. Flexible entry points for any user."],["ezETH Liquid Token","Trade, lend, or LP with ezETH while earning restaking rewards."],["Operator Management","Renzo selects and monitors operators, reducing user complexity."],["ezPoints Rewards","Earn additional ezPoints beyond staking/restaking APR for early supporters."],["Multi-Chain Deployment","Available on Ethereum mainnet, Arbitrum, Base, and other L2s."],["Dashboard Analytics","Track rewards, operator performance, and risk metrics in real-time."]].map(([t,d])=>(
<div key={String(t)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{t}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>How to Use Renzo</h2>
<div style={{display:"flex",flexDirection:"column",gap:14}}>
{[{step:"1. Connect Wallet",desc:"Visit app.renzoprotocol.com. Connect MetaMask or another Ethereum-compatible wallet."},{step:"2. Choose Asset",desc:"Select ETH, wBETH, stETH, or another supported LST to deposit."},{step:"3. Deposit & Receive ezETH",desc:"Enter amount and confirm deposit. Receive ezETH 1:1 (initially). Auto-earned rewards accrue daily."},{step:"4. Monitor & Manage",desc:"View restaking APR, operator allocation, and ezPoints in the dashboard. Exit anytime."}].map(({step,desc})=>(
<div key={step} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"16px 18px"}}>
<div style={{fontWeight:700,color:S.green,marginBottom:6,fontSize:13}}>{step}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{desc}</div>
</div>
))}
</div>
</section>

<section style={{marginBottom:36}}>
<div style={{background:`${S.orange}10`,border:`1px solid ${S.orange}40`,borderRadius:10,padding:"14px 18px"}}>
<div style={{fontWeight:700,color:S.orange,marginBottom:6,fontSize:13}}>⚠️ Risks to Know</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.8}}><strong style={{color:S.text}}>Smart contract risk:</strong> Renzo and underlying operators are audited but bugs are possible.<br/><strong style={{color:S.text}}>Slashing risk:</strong> Operator misbehavior can reduce restaking returns. Renzo's delegation mitigates but doesn't eliminate this.<br/><strong style={{color:S.text}}>Liquidity risk:</strong> ezETH may have slippage on DEXs if large positions are exited.</div>
</div>
</section>

<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Start earning with Renzo</div><div style={{color:S.text2,fontSize:13}}>Simplified EigenLayer restaking for everyone</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://app.renzoprotocol.com" target="_blank" rel="noopener noreferrer" style={{padding:"10px 20px",background:C,color:"#fff",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open Renzo ↗</a>
<Link href="/quiz" style={{padding:"10px 20px",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +150 XP</Link>
</div>
</div>

<section style={{marginBottom:40}}>
<h2 style={{fontSize:"1.4rem",fontWeight:800,marginBottom:16}}>Live REZ Price Chart</h2>
<TradingViewChart symbol="BINANCE:REZUSDT" height={420}/>
</section>

</article>
</main>);}
