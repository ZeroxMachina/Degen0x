'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
const S={bg:"#0d1117",surface:"#161b22",surface2:"#1c2330",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4"};
const C="#00a3ff";
export default function LiFiGuidePage(){return(<main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{borderBottom:`1px solid ${S.border}`,padding:"16px 24px",display:"flex",gap:8,fontSize:13,color:S.text2}}><Link href="/" style={{color:S.text2,textDecoration:"none"}}>Home</Link><span>/</span><Link href="/ecosystem" style={{color:S.text2,textDecoration:"none"}}>Ecosystem</Link><span>/</span><span style={{color:S.text}}>Li.Fi</span></div>
<article style={{maxWidth:860,margin:"0 auto",padding:"48px 24px 80px"}}>
<div style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
<div style={{width:64,height:64,background:`${C}20`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,border:`1px solid ${C}40`}}>🌉</div>
<div>
<div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${C}20`,color:C,border:`1px solid ${C}40`}}>Bridge & Aggregator</span>
<span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${S.blue}20`,color:S.blue}}>Multi-Chain</span>
</div>
<h1 style={{fontSize:"2rem",fontWeight:900,lineHeight:1.2,margin:0}}>Li.Fi: Cross-Chain Swap Aggregation Guide 2026</h1>
<p style={{margin:"8px 0 0",color:S.text2,fontSize:14}}>The best cross-chain routes, instantly · +150 XP · 9 min read · Updated March 2026</p>
</div>
</div>

<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:12,marginBottom:40}}>
{[["Protocol Type","Bridge Aggregator",C],["Supported Chains","30+ networks",S.blue],["Integrated Bridges","20+ protocols",S.green],["Token","$LIFI",S.purple],["Route Optimization","Real-time best paths",S.yellow],["Gasless Routes","Available via partners",S.green]].map(([l,v,c])=>(
<div key={String(l)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px"}}>
<div style={{fontSize:11,color:S.text2,textTransform:"uppercase"}}>{l}</div>
<div style={{fontSize:16,fontWeight:800,color:String(c),marginTop:4}}>{v}</div>
</div>
))}
</div>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>What is Li.Fi?</h2>
<p style={{color:S.text2,lineHeight:1.8,marginBottom:14}}>Li.Fi is a <strong style={{color:S.text}}>cross-chain bridge and DEX aggregator</strong> that finds the optimal route to swap and bridge tokens across 30+ blockchain networks in a single transaction. Instead of manually choosing bridges (Across, Stargate, Connext, etc.), Li.Fi's smart routing algorithm automatically selects the fastest and cheapest path.</p>
<p style={{color:S.text2,lineHeight:1.8}}>No wrapped assets, no fragmented liquidity—just one wallet connection to the entire multichain ecosystem.</p>
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:C}}>Key Features</h2>
{[["Multi-Chain Support","Swap across Ethereum, Polygon, Arbitrum, Optimism, Base, Solana, Avalanche, and 20+ more."],["20+ Bridge Integration","Stargate, Across, Connext, Hyphen, Axelar, and more integrated for route optimization."],["Smart Routing","Algorithmic path selection for lowest gas, fastest speed, or best rates."],["Gasless Bridging","Some routes offer sponsored gas for specific chains (like Across on select pairs)."],["Widget & SDK","Embed Li.Fi directly in your dApp or use the API for custom integrations."],["Jumper.Exchange","Web UI for individual traders seeking the best cross-chain swap routes."]].map(([t,d])=>(
<div key={String(t)} style={{background:S.surface,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 16px",marginBottom:10}}>
<div style={{fontWeight:700,color:C,fontSize:13,marginBottom:4}}>{t}</div>
<div style={{color:S.text2,fontSize:13,lineHeight:1.6}}>{d}</div>
</div>
))}
</section>

<section style={{marginBottom:36}}>
<h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:C}}>How to Use Li.Fi (via Jumper)</h2>
<div style={{display:"flex",flexDirection:"column",gap:14}}>
{[{step:"1. Open Jumper.Exchange",desc:"Go to jumper.exchange in your browser. No signup required."},{step:"2. Connect Wallet",desc:"Click 'Connect Wallet' and authorize with MetaMask, WalletConnect, or other providers."},{step:"3. Select Source Chain & Token",desc:"Choose your starting chain (Ethereum, Polygon, etc.) and the token to swap (USDC, ETH, etc.)."},{step:"4. Select Destination Chain & Token",desc:"Pick the target chain and token you want to receive."},{step:"5. Review Routes & Swap",desc:"Li.Fi shows multiple route options (speed, cost, reliability). Select your preferred route and confirm."}].map(({step,desc})=>(
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
<div style={{color:S.text2,fontSize:13,lineHeight:1.8}}><strong style={{color:S.text}}>Smart contract risk:</strong> Li.Fi aggregates third-party bridges; bugs in any integrated bridge affect users.<br/><strong style={{color:S.text}}>Bridge liquidity risk:</strong> Routes depend on liquidity in destination bridge pools. Slippage can occur in low-liquidity routes.<br/><strong style={{color:S.text}}>Bridge delays:</strong> Some routes (e.g., Across, Connext) have message finality delays; tokens arrive after several minutes/hours.</div>
</div>
</section>

<div style={{background:`linear-gradient(135deg,${C}15,${S.purple}10)`,border:`1px solid ${C}30`,borderRadius:14,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
<div><div style={{fontWeight:800,fontSize:16,marginBottom:4}}>Swap across chains with Li.Fi</div><div style={{color:S.text2,fontSize:13}}>Optimal routing for cross-chain swaps</div></div>
<div style={{display:"flex",gap:10}}>
<a href="https://jumper.exchange" target="_blank" rel="noopener noreferrer" style={{padding:"10px 20px",background:C,color:"#fff",borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Open Jumper ↗</a>
<Link href="/quiz" style={{padding:"10px 20px",background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`,borderRadius:8,fontWeight:700,fontSize:13,textDecoration:"none"}}>Take Quiz +150 XP</Link>
</div>
</div>

<section style={{marginBottom:40}}>
<h2 style={{fontSize:"1.4rem",fontWeight:800,marginBottom:16}}>Live LIFI Price Chart</h2>
<TradingViewChart symbol="BINANCE:LIFIUSDT" height={420}/>
</section>

</article>
</main>);}
