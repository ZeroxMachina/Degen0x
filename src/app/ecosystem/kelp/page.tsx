'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4"};
const C="#00a3ff";
export default function KelpGuidePage(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{borderBottom:`1px solid ${S.border}`,padding:"16px 24px",display:"flex",gap:8,fontSize:13,color:S.text2}}><Link href="/" style={{color:S.text2,textDecoration:"none"}}>Home</Link><span>/</span><Link href="/ecosystem" style={{color:S.text2,textDecoration:"none"}}>Ecosystem</Link><span>/</span><span style={{color:S.text}}>Kelp DAO</span></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>🐚</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Liquid Restaking</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>EigenLayer</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>Kelp DAO: Multi-LST Restaking Guide 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>Liquid restaking for LST holders · +150 XP · 9 min read · Updated March 2026</p>
</div>
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:12,marginBottom:40}}>
{[["TVL","$1.4B",C],["rsETH Supply","~0.65M ETH",S.blue],["Staking APR","~3%",S.green],["Restaking APR","~1.5-3%",S.green],["Token","$KEP",S.purple],["LST Support","stETH, ETHx, sfrxETH",S.yellow]].map(([l,v,c])=>(
<div key={String(l)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:16,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is Kelp DAO?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>Kelp DAO is a <strong style={{color:S.text}}>decentralized autonomous organization</strong> offering liquid restaking via <strong style={{color:S.text}}>rsETH</strong>. Deposit any supported liquid staking token (stETH, ETHx, sfrxETH, etc.) and receive rsETH—earning EigenLayer restaking rewards while staying liquid.</p>
<p style={{color:S.text2,lineHeight:1.8}}>Kelp's multi-LST approach lets users consolidate different staking positions into a single restaking token.</p>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>Key Features</h2>
{[["Multi-LST Support","Deposit stETH, ETHx (Stader), sfrxETH, or other supported liquid staking tokens."],["rsETH Liquid Token","Tradeable, lendable, and LP-able. accrues restaking rewards daily."],["Kelp Miles","Earn additional loyalty points for early supporters, redeemable for rewards."],["DAO Governance","KEP token holders vote on LST support, fee structures, and treasury allocation."],["L2 Deployments","Available on Arbitrum and Base for lower-cost restaking entry."],["EigenLayer Optimized","Kelp selects operators aligned with protocol interests to maximize rewards."]].map(([t,d])=>(
<div key={String(t)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{t}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>How to Use Kelp DAO</h2>
<div style={{display:"flex",flexDirection:"column",gap:14}}>
{[{step:"1. Visit Kelp",desc:"Go to kelp.restaking.com and connect your Ethereum or L2 wallet."},{step:"2. Select LST",desc:"Choose which LST to deposit (stETH, ETHx, sfrxETH). Approve token spending if needed."},{step:"3. Deposit & Get rsETH",desc:"Enter amount and confirm. Receive rsETH equivalent 1:1 to your LST value."},{step:"4. Earn Restaking Rewards",desc:"rsETH accrues restaking APR daily. Monitor Kelp Miles in the dashboard. Unstake anytime."}].map(({step,desc})=>(
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
<div style={{color:S.text2,fontSize:13,lineHeight:1.8}}><strong style={{color:S.text}}>Smart contract risk:</strong> Kelp is audited but code bugs remain a possibility.<br/><strong style={{color:S.text}}>LST liquidation risk:</strong> If your deposited LST loses peg (e.g., stETH depeg), rsETH value is affected.<br/><strong style={{color:S.text}}>EigenLayer operator risk:</strong> Selected operators slashing reduces restaking rewards.</div>
</div>
</section>

<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Earn with Kelp DAO restaking</div><div style={{color:S.text2,fontSize:13}}>Multi-LST liquid restaking on EigenLayer</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://kelp.restaking.com" target="_blank" rel="noopener noreferrer" style={{padding:"10px 20px",background:C,color:"#fff",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open Kelp ↗</a>
<Link href="/quiz" style={{padding:"10px 20px",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +150 XP</Link>
</div>
</div>

<section style={{marginBottom:40}}>
<h2 style={{fontSize:"1.4rem",fontWeight:800,marginBottom:16}}>Live RSETH Price Chart</h2>
<TradingViewChart symbol="COINBASE:RSETHUSDT" height={420}/>
</section>

</article>
</main>);}
