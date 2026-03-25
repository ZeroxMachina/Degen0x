'use client';
import Breadcrumb from "@/components/Breadcrumb";
const S = { bg:"#0d1117",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4" };
const breadcrumbs = [{label:"Home",href:"/"},{label:"Learn",href:"/learn"},{label:"Cross-Chain Bridges",href:"/learn/cross-chain-bridges-guide"}];
const BRIDGES = [
  ["Across Protocol","Fast relay model — relayers front liquidity, settle with UMA optimistic oracle","ETH L2s","Fastest withdrawals (minutes), lowest fees"],
  ["Stargate (LayerZero)","Unified liquidity pools across chains via LayerZero messaging","20+ chains","Native asset bridging (no wrapped assets)"],
  ["Hop Protocol","Bonders provide liquidity, canonical tokens on destination","ETH L2s","Battle-tested, strong L2 liquidity"],
  ["Wormhole","Generic message passing + token bridge; 19 guardian validators","30+ chains","Broadest chain support, used by DeFi protocols"],
  ["Axelar","Universal interoperability layer with proof-of-stake validators","50+ chains","Cross-chain calls (not just tokens)"],
  ["Chainlink CCIP","Cross-Chain Interoperability Protocol by Chainlink","Major EVM chains","Enterprise-grade, used by banks + TradFi"],
];
export default function CrossChainBridgesGuidePage() {
  return (
    <main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh"}}>
      <div style={{borderBottom:`1px solid ${S.border}`,paddingTop:24}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 24px 24px"}}><Breadcrumb items={breadcrumbs}/></div>
      </div>
      <article style={{maxWidth:900,margin:"0 auto",padding:"48px 24px 80px"}}>
        <header style={{marginBottom:48}}>
          <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
            <span style={{fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:`${S.cyan}20`,color:S.cyan,border:`1px solid ${S.cyan}40`}}>🌉 Bridges</span>
            <span style={{fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`}}>Interoperability</span>
            <span style={{fontSize:12,color:S.text2}}>Updated March 14, 2026 · 15 min read · +125 XP</span>
          </div>
          <h1 style={{fontSize:"2.4rem",fontWeight:900,lineHeight:1.2,marginBottom:20}}>Cross-Chain Bridges Guide 2026: How They Work, Top Protocols & Security Risks</h1>
          <p style={{fontSize:17,color:S.text2,lineHeight:1.75}}>Bridges are the highways connecting blockchains — moving assets and data between Ethereum, Solana, Arbitrum, Base, and 50+ other chains. They're also the #1 target for hackers: over $2.5B lost to bridge exploits. This guide explains bridge mechanics, the safest protocols, and how to move assets without getting rekt.</p>
        </header>
        <section style={{marginBottom:40}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:S.cyan}}>How Bridges Work: 3 Models</h2>
          {[
            {model:"Lock & Mint",desc:"You lock Token A on Chain 1. The bridge mints a wrapped version (e.g. wBTC) on Chain 2. Risk: the locked pool is a honeypot — if hacked, wrapped tokens become worthless. Used by: early Ethereum ↔ BSC bridges.",color:S.yellow},
            {model:"Liquidity Pool (Native)",desc:"Liquidity providers fund pools on each chain. You deposit on Chain 1, an LP fronts native assets on Chain 2 and is reimbursed. No wrapped tokens. Used by: Hop, Stargate.",color:S.green},
            {model:"Message Passing",desc:"The bridge passes a generic message between chains, not just tokens. Smart contracts on each side execute based on the message. Enables cross-chain DeFi (not just transfers). Used by: Axelar, Wormhole, CCIP.",color:S.cyan},
          ].map(item=>(
            <div key={item.model} style={{background:"#161b22",border:`1px solid ${S.border}`,borderLeft:`3px solid ${item.color}`,borderRadius:8,padding:"14px 18px",marginBottom:12}}>
              <div style={{fontWeight:700,color:item.color,marginBottom:6}}>{item.model}</div>
              <div style={{fontSize:14,color:S.text2,lineHeight:1.7}}>{item.desc}</div>
            </div>
          ))}
        </section>
        <section style={{marginBottom:40}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:S.cyan}}>Top Bridge Protocols (2026)</h2>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
              <thead><tr style={{borderBottom:`1px solid ${S.border}`}}>{["Protocol","How it works","Chains","Best for"].map(h=><th key={h} style={{padding:"10px 12px",textAlign:"left",color:S.text2,fontWeight:600,fontSize:11}}>{h}</th>)}</tr></thead>
              <tbody>{BRIDGES.map((row,i)=><tr key={i} style={{borderBottom:`1px solid ${S.border}`}}>{row.map((cell,j)=><td key={j} style={{padding:"10px 12px",color:j===0?S.cyan:S.text2}}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </section>
        <section style={{marginBottom:40}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:S.cyan}}>Bridge Hacks: A $2.5B Graveyard</h2>
          {[
            {name:"Ronin Bridge (Mar 2022)","lost":"$625M","cause":"5 of 9 validator keys compromised by North Korean hackers (Lazarus Group). Sky Mavis had inadvertently handed Axie DAO 4 of the keys."},
            {name:"Wormhole (Feb 2022)","lost":"$320M","cause":"Signature verification bug — attacker faked guardian signatures to mint 120,000 wETH without depositing collateral."},
            {name:"Nomad (Aug 2022)","lost":"$190M","cause":"Fraudulent messages accepted due to initialisation bug. A 'copy-paste' exploit — hundreds of addresses copied the attack tx once discovered."},
            {name:"Harmony Horizon (Jun 2022)","lost":"$100M","cause":"2 of 5 multisig keys compromised. Again attributed to Lazarus Group."},
          ].map(item=>(
            <div key={item.name} style={{background:"#161b22",border:`1px solid #f8514930`,borderLeft:`3px solid #f85149`,borderRadius:8,padding:"12px 16px",marginBottom:10}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontWeight:700,color:"#f85149",fontSize:13}}>{item.name}</span><span style={{fontWeight:700,color:S.orange,fontSize:13}}>Lost: {item.lost}</span></div>
              <div style={{fontSize:13,color:S.text2}}>{item.cause}</div>
            </div>
          ))}
        </section>
        <section style={{background:`linear-gradient(135deg,${S.cyan}10,${S.blue}10)`,border:`1px solid ${S.cyan}30`,borderRadius:14,padding:"24px 28px"}}>
          <h3 style={{fontWeight:800,marginBottom:8,color:S.text}}>🌉 Key takeaway</h3>
          <p style={{color:S.text2,lineHeight:1.8,fontSize:14}}>For most users: use <strong style={{color:S.text}}>Across</strong> for fast ETH L2 transfers, <strong style={{color:S.text}}>Stargate</strong> for multi-chain native assets, and <strong style={{color:S.text}}>Axelar</strong> for non-EVM chains. Never bridge more than you can afford to lose. Prefer bridges audited by multiple firms, with a track record of 12+ months without exploits. Avoid new bridges with large TVLs and small security teams.</p>
        </section>
      </article>
    </main>
  );
}
