'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
import BackToTop from "@/components/BackToTop";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff"};
const C="#00d395";
export default function CompoundGuidePage(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{borderBottom:`1px solid ${S.border}`,padding:"16px 24px",display:"flex",gap:8,fontSize:13,color:S.text2}}><Link href="/" style={{color:S.text2,textDecoration:"none"}}>Home</Link><span>/</span><Link href="/ecosystem" style={{color:S.text2,textDecoration:"none"}}>Ecosystem</Link><span>/</span><span style={{color:S.text}}>Compound</span></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>🏦</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Lending</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>DeFi OG</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>Compound Finance: DeFi Lending OG Guide 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>The protocol that invented algorithmic money markets · +120 XP · 10 min read</p>
</div>
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:12,marginBottom:40}}>
{[["TVL","$2.1B",C],["Markets","USDC, ETH, WBTC+",S.blue],["Token","$COMP",S.purple],["Compound III","Comet architecture",S.green],["Protocol Age","2018 — OG",S.orange],["Rating","⭐ 4.5",S.yellow]].map(([l,v,c])=>(
<div key={String(l)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:16,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is Compound?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>Compound Finance is one of the original DeFi protocols, launching in 2018. It created the first algorithmic interest rate model for crypto lending: supply assets to earn yield, borrow against collateral with rates that adjust automatically based on utilization.</p>
<p style={{color:S.text2,lineHeight:1.8}}>The latest <strong style={{color:S.text}}>Compound III (Comet)</strong> architecture shifted to single-asset borrowing markets: each market has one borrowable asset (e.g. USDC) and accepts multiple collateral types. This simplifies risk management and reduces gas costs compared to V2's multi-asset model.</p>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>Compound V2 vs V3 (Comet)</h2>
<div style={{overflowX:"auto"}}>
<table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
<thead><tr style={{borderBottom:`1px solid ${S.border}`}}>{["Feature","V2","V3 (Comet)"].map(h=><th key={h} style={{padding:"10px 12px",textAlign:"left",color:S.text2,fontWeight:600,fontSize:11}}>{h}</th>)}</tr></thead>
<tbody>
{[["Borrow","Any asset","Single base asset per market"],["Collateral","Multi-asset → multi-borrow","Multi collateral → one borrowable"],["cTokens","Yes (cETH, cUSDC...)","No — uses internal accounting"],["Gas","Higher","~40% cheaper"],["Risk","Cross-contamination possible","Isolated per market"],["COMP Rewards","Supply + Borrow","Borrowers only (base asset)"]].map((row,i)=>(
<tr key={i} style={{borderBottom:`1px solid ${S.border}`}}>{row.map((cell,j)=><td key={j} style={{padding:"10px 12px",color:j===0?S.text:S.text2,fontWeight:j===0?600:400}}>{cell}</td>)}</tr>
))}
</tbody>
</table>
</div>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>$COMP Governance</h2>
<p style={{color:S.text2,lineHeight:1.8}}>$COMP is Compound's governance token. Holders propose and vote on protocol upgrades, parameter changes, and asset listings. Compound pioneered the DeFi governance model — every protocol parameter is controlled by $COMP holders, including interest rate models, collateral factors, and reserve factors. A proposal needs 25,000 COMP to be submitted and must pass a 3-day voting window.</p>
</section>

<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Earn on Compound</div><div style={{color:S.text2,fontSize:13}}>Complete the Compound quiz and earn +120 XP</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://app.compound.finance" target="_blank" rel="noopener noreferrer" style={{padding:"10px 20px",background:C,color:"#000",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open Compound ↗</a>
<Link href="/quiz" style={{padding:"10px 20px",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +120 XP</Link>
</div>
</div>

        {/* Live Price Chart */}
        <section style={{ marginTop: 40, marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <div style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:12,padding:16,minHeight:420}}>
            <TradingViewChart symbol="COINBASE:COMPUSD" height={420} />
          </div>
        </section>

{/* FAQ */}
<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>Frequently Asked Questions</h2>
{[
["What is Compound Finance?","Compound Finance is a DeFi lending protocol launched in 2018 that created the first algorithmic interest rate model. Users supply crypto assets to earn yield, or borrow against collateral with rates that adjust automatically based on pool utilization."],
["What is the difference between Compound V2 and V3?","Compound V3 (Comet) uses single-asset borrowing markets — each market has one borrowable asset and accepts multiple collateral types. V2 allowed multi-asset borrowing but had higher gas costs and cross-contamination risk."],
["How do I earn yield on Compound?","Supply supported assets (USDC, ETH, WBTC, etc.) to a Compound market. You earn interest automatically based on the market's utilization rate. Higher utilization = higher supply APY."],
["What is $COMP used for?","$COMP is Compound's governance token. Holders propose and vote on protocol upgrades, parameter changes, and new asset listings. A proposal needs 25,000 COMP to be submitted."],
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
["/ecosystem/curve","Curve Finance","Stablecoin & LST AMM deep dive","🌀"],
["/learn/defi-lending-guide","DeFi Lending Guide","Compare top lending protocols","📚"],
["/tools/dca-calculator","DCA Calculator","Dollar-cost average into COMP","🔢"],
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
