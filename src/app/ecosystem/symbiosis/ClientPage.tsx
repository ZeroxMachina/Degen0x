'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4"};
const C="#00a3ff";
export default function SymbiosisGuidePage(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{borderBottom:`1px solid ${S.border}`,padding:"16px 24px",display:"flex",gap:8,fontSize:13,color:S.text2}}><Link href="/" style={{color:S.text2,textDecoration:"none"}}>Home</Link><span>/</span><Link href="/ecosystem" style={{color:S.text2,textDecoration:"none"}}>Ecosystem</Link><span>/</span><span style={{color:S.text}}>Symbiosis</span></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>🔗</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Cross-Chain DEX</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>Multi-Chain</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>Symbiosis Finance: Atomic Cross-Chain Swaps Guide 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>One transaction, any chain, any token · +150 XP · 10 min read · Updated March 2026</p>
</div>
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:12,marginBottom:40}}>
{[["TVL","$280M",C],["Protocol Type","Cross-Chain AMM",S.blue],["Supported Networks","30+ chains",S.green],["Token","$SIS",S.purple],["Transaction Type","Atomic (single tx)",S.yellow],["Stablecoin Bridge","syAssets stable tokens",S.green]].map(([l,v,c])=>(
<div key={String(l)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:16,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is Symbiosis Finance?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>Symbiosis Finance is a <strong style={{color:S.text}}>decentralized cross-chain AMM (Automated Market Maker)</strong> enabling <strong style={{color:S.text}}>atomic swaps</strong> across 30+ blockchain networks. Swap any token from any source chain to any destination chain in a single transaction—no bridging UX, no wrapped assets, no intermediate steps.</p>
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
<p style={{color:S.text2,lineHeight:1.8}}>Symbiosis's architecture enables <strong style={{color:S.text}}>transactional finality</strong>: either the entire cross-chain swap completes or rolls back atomically.</p>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>Key Features</h2>
{[["Atomic Cross-Chain Swaps","Entire swap executes in one transaction. No two-step bridging UX, no rollback risk."],["30+ Network Support","Ethereum, Polygon, Arbitrum, Optimism, Base, Avalanche, Fantom, zkSync, and many more."],["No Wrapped Assets","Swap native tokens directly. No wETH, no wrapped USDC—just real assets."],["syAssets Bridge","Stablecoin-specific bridge for USDC, USDT, and DAI across chains with minimal slippage."],["Zapping","Convert tokens into LP positions on destination chain with single atomic transaction."],["SIS Governance","Protocol token for DAO voting on fee tiers, network expansion, and treasury."]].map(([t,d])=>(
<div key={String(t)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{t}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>How to Use Symbiosis Finance</h2>
<div style={{display:"flex",flexDirection:"column",gap:14}}>
{[{step:"1. Visit Symbiosis",desc:"Go to app.symbiosis.finance. No signup needed."},{step:"2. Connect Wallet",desc:"Click 'Connect Wallet' and authorize with MetaMask or other Web3 wallet."},{step:"3. Select Source Token & Chain",desc:"Pick the token you want to swap and the blockchain it's on."},{step:"4. Select Destination Token & Chain",desc:"Choose the target chain and the token you want to receive (can be different token)."},{step:"5. Approve & Execute Swap",desc:"Review the atomic swap quote. Approve spending and execute. Wait for finality across chains (~2-10 min depending on route)."}].map(({step,desc})=>(
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
<div style={{color:S.text2,fontSize:13,lineHeight:1.8}}><strong style={{color:S.text}}>Smart contract risk:</strong> Symbiosis contracts are audited but atomic cross-chain protocols carry elevated code complexity risks.<br/><strong style={{color:S.text}}>Liquidity risk:</strong> If liquidity is low on destination chain, slippage may be high. Always check quotes before confirming.<br/><strong style={{color:S.text}}>Network finality risk:</strong> Atomic guarantees depend on both source and destination chain validators; 51% attacks on either chain could theoretically break atomicity.</div>
</div>
</section>

<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Swap across chains atomically</div><div style={{color:S.text2,fontSize:13}}>One transaction to swap any token on any chain</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://app.symbiosis.finance" target="_blank" rel="noopener noreferrer" style={{padding:"10px 20px",background:C,color:"#fff",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open Symbiosis ↗</a>
<Link href="/quiz" style={{padding:"10px 20px",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +150 XP</Link>
</div>
</div>

<section style={{marginBottom:40}}>
<h2 style={{fontSize:"1.4rem",fontWeight:800,marginBottom:16}}>Live SIS Price Chart</h2>
<TradingViewChart symbol="BINANCE:SISUSDT" height={420}/>
</section>

</article>

        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/spending/reviews/moon-browser" style={{ color: "#fb923c", marginRight: "1rem" }}>Moon Browser</a>
        </nav>
    </main>);}
