'use client';
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TradingViewChart from "@/components/TradingViewChart";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4"};
const C="#6366f1";
export default function EigenLayerClient(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{padding:"16px 24px"}}><Breadcrumb items={[{label:"Home",href:"/"},{label:"Ecosystem",href:"/ecosystem"},{label:"EigenLayer"}]} /></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div role="img" aria-label="EigenLayer restaking protocol icon" style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>🔗</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Restaking</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>Ethereum</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.green}20`,color:S.green}}>AVS</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>EigenLayer: Restaking & AVS Guide 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>The restaking protocol powering Ethereum's cryptoeconomic security layer · +200 XP · 16 min read</p>
</div>
</div>

<div role="list" aria-label="EigenLayer key statistics" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:12,marginBottom:40}}>
{[["ETH Restaked","$15B+",C],["Active AVSs","30+",S.blue],["Token","$EIGEN",S.purple],["Restakers","~200K",S.green],["Operators","~500",S.orange],["Rating","⭐ 4.6",S.yellow]].map(([l,v,c])=>(
<div key={String(l)} role="listitem" aria-label={`${l}: ${v}`} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:16,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>
<p style={{fontSize:11,color:S.text2,marginBottom:32,marginTop:8}}>📊 Stats as of March 2026 · <a href="https://defillama.com/protocol/eigenlayer" target="_blank" rel="noopener noreferrer" style={{color:C,textDecoration:"none"}}>Live data via DefiLlama ↗</a></p>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is EigenLayer?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>EigenLayer is a restaking protocol on Ethereum that allows ETH stakers and liquid staking token (LST) holders to re-use their staked ETH to secure additional protocols called <strong style={{color:S.text}}>Actively Validated Services (AVSs)</strong>. Essentially, you opt-in to additional slashing conditions in exchange for additional yield from the AVSs you secure.</p>
<p style={{color:S.text2,lineHeight:1.8}}>Think of it as renting out your Ethereum economic security to power new decentralized services — data availability layers, oracle networks, bridges, co-processors — without needing to deploy fresh capital or launch new validator sets.</p>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>Key Concepts</h2>
{[
["Restaking","Depositing ETH (native) or LSTs (stETH, rETH, cbETH, etc.) into EigenLayer smart contracts, opting into additional slashing conditions to earn AVS rewards on top of base Ethereum staking APR."],
["AVS (Actively Validated Service)","Any middleware or off-chain service that needs cryptoeconomic security. Examples: EigenDA (data availability), AltLayer (rollup infra), Lagrange (ZK coprocessor), eOracle (oracle network)."],
["Operators","Entities (node operators) who run AVS software. Restakers can delegate their stake to operators. Operators can be slashed if they act maliciously on an AVS."],
["EIGEN Token","The protocol's intersubjective staking token. Used for staking to secure AVSs where faults are observed off-chain (social consensus). EIGEN holders can also veto slashing proposals."],
].map(([t,d])=>(
<div key={String(t)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{t}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>Notable AVSs on EigenLayer</h2>
<div style={{overflowX:"auto"}}>
<table aria-label="Notable Actively Validated Services on EigenLayer" style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
<thead><tr style={{borderBottom:`1px solid ${S.border}`}}>
{["AVS","Category","What it Does"].map(h=><th key={h} scope="col" style={{padding:"10px 12px",textAlign:"left",color:S.text2,fontWeight:600,fontSize:11}}>{h}</th>)}
</tr></thead>
<tbody>
{[["EigenDA","Data Availability","High-throughput DA layer for rollups. Cheaper than Ethereum DA. Used by Mantle, Base, others."],["AltLayer","Rollup Infra","Decentralized rollup-as-a-service infra. EigenLayer restakers secure rollup finality."],["Lagrange","ZK Coprocessor","Enables smart contracts to read historical on-chain data with ZK proofs."],["Witness Chain","Proof of Location","Decentralized geolocation verification using restakers as verifiers."],["eOracle","Oracle","Modular oracle built on Ethereum + EigenLayer. AVS restakers validate price feeds."]].map((row,i)=>(
<tr key={i} style={{borderBottom:`1px solid ${S.border}`}}>
{row.map((cell,j)=><td key={j} style={{padding:"10px 12px",color:j===0?C:S.text2,fontWeight:j===0?700:400}}>{cell}</td>)}
</tr>
))}
</tbody>
</table>
</div>
</section>

<div style={{background:`${S.orange}10`,border:`1px solid ${S.orange}40`,borderRadius:10,padding:"14px 18px",marginBottom:36}}>
<div style={{fontWeight:700,color:S.orange,marginBottom:6,fontSize:13}}>⚠️ Restaking Risks</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.8}}><strong style={{color:S.text}}>Slashing amplification:</strong> Opting into multiple AVSs stacks slashing conditions. If an operator misbehaves on any AVS, your stake can be slashed.<br/><strong style={{color:S.text}}>Operator risk:</strong> You delegate to operators — vet them carefully. Established node operators with track records are safer.<br/><strong style={{color:S.text}}>Concentration risk:</strong> A large portion of Ethereum security being controlled by a single middleware layer creates systemic concerns.</div>
</div>

<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Explore EigenLayer restaking</div><div style={{color:S.text2,fontSize:13}}>Complete the EigenLayer quiz and earn +200 XP</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://app.eigenlayer.xyz" target="_blank" rel="noopener noreferrer" aria-label="Open EigenLayer restaking app (opens in new tab)" style={{padding:"12px 20px",minHeight:44,display:"inline-flex",alignItems:"center",background:C,color:"#fff",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open EigenLayer ↗</a>
<Link href="/quiz" aria-label="Take the EigenLayer quiz and earn 200 XP" style={{padding:"12px 20px",minHeight:44,display:"inline-flex",alignItems:"center",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +200 XP</Link>
</div>
</div>

        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:EIGENUSDT" height={420} />
        </section>

      </article>
</main>);}
