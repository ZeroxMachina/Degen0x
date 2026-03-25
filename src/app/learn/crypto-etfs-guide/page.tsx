'use client';
import Breadcrumb from "@/components/Breadcrumb";
const S = { bg:"#0d1117",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4" };
const breadcrumbs = [{label:"Home",href:"/"},{label:"Learn",href:"/learn"},{label:"Crypto ETFs Guide",href:"/learn/crypto-etfs-guide"}];
const ETF_TABLE = [
  ["iShares Bitcoin Trust (IBIT)","BlackRock","BTC","0.12% (waived first year)","~$50B","Jan 2024"],
  ["Fidelity Wise Origin BTC (FBTC)","Fidelity","BTC","0.25%","~$18B","Jan 2024"],
  ["ARK 21Shares Bitcoin ETF (ARKB)","ARK/21Shares","BTC","0.21%","~$4.5B","Jan 2024"],
  ["iShares Ethereum Trust (ETHA)","BlackRock","ETH","0.12%","~$3.2B","Jul 2024"],
  ["Fidelity Ethereum Fund (FETH)","Fidelity","ETH","0.25%","~$1.8B","Jul 2024"],
  ["Bitwise Bitcoin ETF (BITB)","Bitwise","BTC","0.20%","~$3.1B","Jan 2024"],
];
export default function CryptoETFsGuidePage() {
  return (
    <main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh"}}>
      <div style={{borderBottom:`1px solid ${S.border}`,paddingTop:24}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 24px 24px"}}><Breadcrumb items={breadcrumbs}/></div>
      </div>
      <article style={{maxWidth:900,margin:"0 auto",padding:"48px 24px 80px"}}>
        <header style={{marginBottom:48}}>
          <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
            <span style={{fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:`${S.blue}20`,color:S.blue,border:`1px solid ${S.blue}40`}}>📊 ETFs</span>
            <span style={{fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:`${S.yellow}20`,color:S.yellow,border:`1px solid ${S.yellow}40`}}>TradFi × Crypto</span>
            <span style={{fontSize:12,color:S.text2}}>Updated March 14, 2026 · 14 min read · +120 XP</span>
          </div>
          <h1 style={{fontSize:"2.4rem",fontWeight:900,lineHeight:1.2,marginBottom:20}}>Crypto ETFs Guide 2026: Bitcoin ETFs, Ethereum ETFs & Institutional Access Explained</h1>
          <p style={{fontSize:17,color:S.text2,lineHeight:1.75}}>The January 2024 approval of spot Bitcoin ETFs in the US was a watershed moment for crypto — opening BTC exposure to trillions of dollars of institutional and retail capital via traditional brokerage accounts. This guide explains how spot crypto ETFs work, the key products, fee structures, and whether to use an ETF or hold crypto directly.</p>
        </header>
        <section style={{marginBottom:40}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:S.blue}}>Spot ETF vs Futures ETF: Critical Difference</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            {[
              {type:"Spot ETF",color:S.green,desc:"The fund actually buys and holds BTC/ETH. Price tracks spot price directly. Custodian (e.g. Coinbase) holds the underlying asset. Better for long-term investors."},
              {type:"Futures ETF",color:S.yellow,desc:"Holds Bitcoin futures contracts, not actual BTC. Subject to 'roll cost' — when contracts expire and are rolled to next month, decay occurs. Not ideal for long holds (BITO-style)."},
            ].map(item=>(
              <div key={item.type} style={{background:"#161b22",border:`1px solid ${item.color}40`,borderRadius:12,padding:16}}>
                <div style={{fontWeight:700,color:item.color,marginBottom:8,fontSize:15}}>{item.type}</div>
                <div style={{fontSize:13,color:S.text2,lineHeight:1.7}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>
        <section style={{marginBottom:40}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:S.blue}}>Top Spot Crypto ETFs (US, 2026)</h2>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
              <thead><tr style={{borderBottom:`1px solid ${S.border}`}}>{["Fund (Ticker)","Issuer","Asset","Fee","AUM","Launched"].map(h=><th key={h} style={{padding:"10px 12px",textAlign:"left",color:S.text2,fontWeight:600,fontSize:11}}>{h}</th>)}</tr></thead>
              <tbody>{ETF_TABLE.map((row,i)=><tr key={i} style={{borderBottom:`1px solid ${S.border}`}}>{row.map((cell,j)=><td key={j} style={{padding:"10px 12px",color:j===0?S.blue:S.text2}}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </section>
        <section style={{marginBottom:40}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:S.blue}}>ETF vs Direct Crypto: Which is Right for You?</h2>
          <div style={{display:"grid",gap:10}}>
            {[
              {scenario:"You want exposure in a traditional brokerage (IRA, 401k, Schwab)","choice":"ETF","why":"Tax-advantaged accounts + no self-custody complexity"},
              {scenario:"You want to move crypto to DeFi, earn yield, use as collateral","choice":"Direct (self-custody)","why":"ETF is just a price exposure — no on-chain utility"},
              {scenario:"You're a financial institution with compliance constraints","choice":"ETF","why":"Regulated, audited, insurance, familiar custody"},
              {scenario:"You want the lowest possible fees over 20+ years","choice":"Direct","why":"0 management fee. ETF fee compounds over decades (0.12% = $12K per $1M/year)"},
              {scenario:"You're not technical and fear losing keys","choice":"ETF","why":"No seed phrase risk, no exchange hacks (assets held by BlackRock/Fidelity custodians)"},
            ].map(item=>(
              <div key={item.scenario} style={{background:"#161b22",border:`1px solid ${S.border}`,borderRadius:8,padding:"12px 16px",display:"flex",gap:12,flexWrap:"wrap"}}>
                <div style={{flex:"1 1 300px",fontSize:13,color:S.text2}}>{item.scenario}</div>
                <div style={{flexShrink:0}}>
                  <span style={{background:`${S.green}20`,color:S.green,borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700}}>{item.choice}</span>
                  <div style={{fontSize:11,color:S.text2,marginTop:3}}>{item.why}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section style={{background:`linear-gradient(135deg,${S.blue}10,${S.yellow}10)`,border:`1px solid ${S.blue}30`,borderRadius:14,padding:"24px 28px"}}>
          <h3 style={{fontWeight:800,marginBottom:8,color:S.text}}>📊 Key takeaway</h3>
          <p style={{color:S.text2,lineHeight:1.8,fontSize:14}}>Spot Bitcoin ETFs are the most significant institutional onramp crypto has ever had — $80B+ of inflows in the first year proves the demand. For most investors who want BTC/ETH exposure without managing keys, IBIT (BlackRock) or FBTC (Fidelity) are the cleanest options. For active DeFi participants or those seeking staking yield, direct custody remains superior. Many sophisticated investors do both: ETFs for retirement accounts, direct crypto for on-chain activity.</p>
        </section>
      </article>
    </main>
  );
}
