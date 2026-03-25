'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4"};
const C="#00a3ff";
export default function EtherFiGuidePage(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{borderBottom:`1px solid ${S.border}`,padding:"16px 24px",display:"flex",gap:8,fontSize:13,color:S.text2}}><Link href="/" style={{color:S.text2,textDecoration:"none"}}>Home</Link><span>/</span><Link href="/ecosystem" style={{color:S.text2,textDecoration:"none"}}>Ecosystem</Link><span>/</span><span style={{color:S.text}}>EtherFi</span></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>🔷</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Liquid Restaking</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>Ethereum</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>EtherFi: Native Liquid Restaking Guide 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>The largest native liquid restaking protocol · +150 XP · 10 min read · Updated March 2026</p>
</div>
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:12,marginBottom:40}}>
{[["TVL","$8.2B",C],["eETH Supply","~2.1M ETH",S.blue],["Staking APR","~3.5%",S.green],["Restaking APR","~2-5% variable",S.green],["Token","$ETHFI",S.purple],["Non-Custodial","✓ User Keys",S.yellow]].map(([l,v,c])=>(
<div key={String(l)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:16,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is EtherFi?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>EtherFi is the largest <strong style={{color:S.text}}>native liquid restaking protocol</strong> on Ethereum. Stake ETH, receive eETH (a liquid token), and earn ETH staking rewards PLUS additional rewards from EigenLayer restaking — simultaneously.</p>
<p style={{color:S.text2,lineHeight:1.8}}>Unlike wrapped staking tokens, EtherFi is <strong style={{color:S.text}}>non-custodial</strong>: you retain withdrawal keys and full control. Your eETH stays liquid for DeFi use while earning double rewards.</p>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>Key Features</h2>
{[["Non-Custodial Staking","You keep your withdrawal keys—complete control over your assets. No bridge risk."],["eETH Liquid Token","Use eETH as collateral in Aave, Curve, Uniswap while earning restaking rewards."],["Double Rewards","Earn both Ethereum staking rewards (~3.5%) AND EigenLayer AVS rewards (~2-5%)."],["ETHFI Governance","Governance token that controls protocol fees, validator selection, and treasury."],["Cash Card","Spend staking rewards instantly with a branded debit card (experimental feature)."],["Symbiotic Integration","Access to Symbiotic protocol rewards for additional yield opportunities."]].map(([t,d])=>(
<div key={String(t)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{t}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>How to Stake ETH on EtherFi</h2>
<div style={{display:"flex",flexDirection:"column",gap:14}}>
{[{step:"1. Connect Your Wallet",desc:"Visit stake.etherfi.com and connect MetaMask, Ledger, or your preferred Ethereum wallet."},{step:"2. Stake ETH",desc:"Choose amount to stake (min: typically 0.001 ETH). Approve the transaction."},{step:"3. Receive eETH",desc:"Instantly get eETH in your wallet (1:1 ratio initially). eETH accrues rewards daily."},{step:"4. Claim Rewards",desc:"Monitor rewards via dashboard. eETH price increases as staking rewards accrue. Withdraw anytime."}].map(({step,desc})=>(
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
<div style={{color:S.text2,fontSize:13,lineHeight:1.8}}><strong style={{color:S.text}}>Smart contract risk:</strong> Non-custodial doesn't eliminate code bugs. Audits reduce but don't eliminate risk.<br/><strong style={{color:S.text}}>Slashing risk:</strong> EigenLayer operators can be slashed for misbehavior, reducing restaking rewards.<br/><strong style={{color:S.text}}>Liquidity risk:</strong> eETH liquidity varies across DEXs; may incur slippage when exiting large positions.</div>
</div>
</section>

<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Start liquid restaking with EtherFi</div><div style={{color:S.text2,fontSize:13}}>Earn staking + AVS rewards simultaneously</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://stake.etherfi.com" target="_blank" rel="noopener noreferrer" style={{padding:"10px 20px",background:C,color:"#fff",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open EtherFi ↗</a>
<Link href="/quiz" style={{padding:"10px 20px",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +150 XP</Link>
</div>
</div>

<section style={{marginBottom:40}}>
<h2 style={{fontSize:"1.4rem",fontWeight:800,marginBottom:16}}>Live ETHFI Price Chart</h2>
<TradingViewChart symbol="BINANCE:ETHFIUSDT" height={420}/>
</section>

</article>
</main>);}
