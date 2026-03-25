'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
import BackToTop from "@/components/BackToTop";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff"};
const C="#e83e8c";
export default function CurveGuidePage(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{borderBottom:`1px solid ${S.border}`,padding:"16px 24px",display:"flex",gap:8,fontSize:13,color:S.text2}}><Link href="/" style={{color:S.text2,textDecoration:"none"}}>Home</Link><span>/</span><Link href="/ecosystem" style={{color:S.text2,textDecoration:"none"}}>Ecosystem</Link><span>/</span><span style={{color:S.text}}>Curve</span></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>🌀</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Stablecoin DEX</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>Multi-chain</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>Curve Finance: Stablecoin & LST AMM Guide 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>The deepest stablecoin liquidity in DeFi · +150 XP · 12 min read</p>
</div>
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:12,marginBottom:40}}>
{[["TVL","$1.8B",C],["Daily Volume","$200M+",S.blue],["Token","$CRV",S.purple],["Pools","500+",S.green],["crvUSD","Native Stablecoin",S.orange],["Rating","⭐ 4.6",S.yellow]].map(([l,v,c])=>(
<div key={String(l)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:16,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is Curve Finance?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>Curve Finance is a decentralized exchange optimized for swapping tokens of similar value — primarily stablecoins (USDC/USDT/DAI) and liquid staking tokens (stETH/wstETH). Its custom AMM formula, the <strong style={{color:S.text}}>StableSwap invariant</strong>, dramatically reduces slippage and impermanent loss for correlated asset pairs compared to Uniswap's x×y=k formula.</p>
<p style={{color:S.text2,lineHeight:1.8}}>Curve also launched <strong style={{color:S.text}}>crvUSD</strong>, an overcollateralized stablecoin with a novel liquidation mechanism (LLAMMA) that liquidates positions gradually rather than all-at-once, reducing liquidation shock.</p>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>The veCRV Tokenomics System</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>Curve pioneered the <strong style={{color:S.text}}>vote-escrowed (ve) tokenomics</strong> model, now copied by dozens of protocols (Balancer, Velodrome, etc.):</p>
{[
["Lock $CRV → veCRV","Lock CRV for 1 week to 4 years. Longer locks = more veCRV. veCRV holders receive 50% of all Curve trading fees (in 3CRV) and governance voting rights."],
["Gauge Voting (Emissions Control)","veCRV holders vote weekly to direct $CRV emissions to pools. Protocols bribe veCRV holders to vote for their pool = 'Curve Wars'. Convex Finance aggregates bribes."],
["Liquidity Mining Boosts","Providing liquidity + holding veCRV boosts your pool reward by up to 2.5×. Incentivizes long-term token holding and stickier liquidity."],
].map(([t,d])=>(
<div key={String(t)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{t}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>

<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Provide liquidity on Curve</div><div style={{color:S.text2,fontSize:13}}>Complete the Curve quiz and earn +150 XP</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://curve.fi" target="_blank" rel="noopener noreferrer" style={{padding:"10px 20px",background:C,color:"#fff",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open Curve ↗</a>
<Link href="/quiz" style={{padding:"10px 20px",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +150 XP</Link>
</div>
</div>

        {/* Live Price Chart */}
        <section style={{ marginTop: 40, marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <div style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:12,padding:16,minHeight:420}}>
            <TradingViewChart symbol="COINBASE:CRVUSD" height={420} />
          </div>
        </section>

{/* FAQ */}
<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>Frequently Asked Questions</h2>
{[
["What is Curve Finance?","Curve Finance is a decentralized exchange optimized for swapping tokens of similar value — stablecoins (USDC/USDT/DAI) and liquid staking tokens (stETH/wstETH). Its StableSwap invariant reduces slippage compared to standard AMMs."],
["What is veCRV?","veCRV is vote-escrowed CRV. You lock CRV tokens for 1 week to 4 years to receive veCRV, which grants governance voting power, a share of 50% of all Curve trading fees, and the ability to boost your LP rewards by up to 2.5x."],
["What are the Curve Wars?","The Curve Wars refer to protocols competing to accumulate veCRV voting power to direct CRV emissions to their pools. Convex Finance aggregates bribes and veCRV to control emission routing on behalf of depositors."],
["What is crvUSD?","crvUSD is Curve's native overcollateralized stablecoin with a novel LLAMMA liquidation mechanism that liquidates positions gradually rather than all-at-once, reducing liquidation shock for borrowers."],
].map(([q,a])=>(
<details key={String(q)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:8,cursor:"pointer"}}>
<summary style={{fontWeight:700,color:S.text,fontSize:14,listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>{q}<span style={{color:S.text2,fontSize:12,marginLeft:8}}>▾</span></summary>
<p style={{color:S.text2,fontSize:13,lineHeight:1.7,marginTop:8}}>{a}</p>
</details>
))}
</section>

{/* Related Ecosystem Guides */}
<section style={{paddingTop:32,borderTop:`1px solid ${S.border}`}}>
<h3 style={{fontSize:"1.2rem",fontWeight:800,marginBottom:16}}>Related Ecosystem Guides</h3>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:12}}>
{[
["/ecosystem/compound","Compound Finance","DeFi lending OG deep dive","🏦"],
["/learn/defi-yield-farming-guide","Yield Farming Guide","Master LP strategies","🌾"],
["/tools/dca-calculator","DCA Calculator","Dollar-cost average into CRV","🔢"],
].map(([href,title,desc,icon])=>(
<Link key={String(href)} href={String(href)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"16px",textDecoration:"none",transition:"border-color 0.2s"}}>
<div style={{fontSize:24,marginBottom:8}}>{icon}</div>
<div style={{fontWeight:700,color:S.blue,fontSize:14,marginBottom:4}}>{title}</div>
<div style={{color:S.text2,fontSize:12}}>{desc}</div>
</Link>
))}
</div>
</section>

      </article>
<BackToTop />
</main>);}
