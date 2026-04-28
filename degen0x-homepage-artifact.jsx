import { useState, useEffect, useRef } from "react";

const LEVELS = [
  { key: "newbie",       label: "I'm New",     emoji: "👋" },
  { key: "intermediate", label: "Intermediate", emoji: "📈" },
  { key: "degen",        label: "Degen",        emoji: "🔥" },
];

const HERO = {
  newbie:       { badge:"Free · No signup · No paywall", h:["Onboard the Next","1 Billion Users","to Web3"], sub:"The crypto world is powerful but intimidating. We built the guide we wish we had — free tools, honest reviews, and clear explanations.", cta:"Start Learning Free →", ghost:"Browse beginner guides", stats:[{v:"1M+",l:"Learners"},{v:"50+",l:"Courses"},{v:"92+",l:"Free Tools"}] },
  intermediate: { badge:"Advanced DeFi · Layer 2 · On-chain analytics", h:["Go Deeper.","Earn More.","Beat the Market."], sub:"You know Bitcoin from Ethereum. Now explore DeFi protocols, on-chain analytics, Layer 2 scaling, and tools that give you an edge.", cta:"Explore DeFi Courses →", ghost:"Go to Dashboard", stats:[{v:"$2T+",l:"DeFi TVL tracked"},{v:"67+",l:"dApps catalogued"},{v:"15",l:"Chains covered"}] },
  degen:        { badge:"Perps · Whale alerts · Funding rate arb", h:["Full Send.","Pure Alpha.","Zero Fluff."], sub:"Funding rates, whale alerts, correlation alpha, memecoin strategies, and 92+ tools to sharpen your edge. No fluff. Just signal.", cta:"Open Dashboard →", ghost:"Perp Funding Rates", stats:[{v:"92+",l:"Pro tools"},{v:"24/7",l:"Live data"},{v:"0",l:"Paywalls"}] },
};

const LEARN = {
  newbie:       { h:"Learn at your own pace", desc:"35+ guides, no jargon.", cards:[{t:"What is Bitcoin?",d:"The original cryptocurrency explained",tag:"8 min",c:"#22c55e"},{t:"What is Ethereum?",d:"Smart contracts and the world computer",tag:"10 min",c:"#818cf8"},{t:"What is DeFi?",d:"Decentralized finance without the bank",tag:"12 min",c:"#06b6d4"},{t:"Crypto Wallets",d:"Your keys, your coins, how it works",tag:"6 min",c:"#f59e0b"}] },
  intermediate: { h:"Go deeper", desc:"Restaking, Layer 2, RWAs, and prediction markets.", cards:[{t:"Restaking & EigenLayer",d:"Next-gen staking and validator economics",tag:"15 min",c:"#818cf8"},{t:"Bitcoin Layer 2s",d:"Scaling solutions enhancing Bitcoin",tag:"12 min",c:"#f59e0b"},{t:"Prediction Markets",d:"Trade on real-world event outcomes",tag:"10 min",c:"#22c55e"},{t:"Real World Assets",d:"Tokenized assets reshaping finance",tag:"14 min",c:"#06b6d4"}] },
  degen:        { h:"Sharpen your edge", desc:"Memecoin alpha, AI agents, and the deep end.", cards:[{t:"Memecoin Strategy",d:"Risks and alpha in memecoin markets",tag:"10 min",c:"#f85149"},{t:"Prediction Markets",d:"Advanced strategies for event trading",tag:"10 min",c:"#22c55e"},{t:"AI Crypto Agents",d:"Autonomous traders and yield optimizers",tag:"12 min",c:"#818cf8"},{t:"Read Whitepapers",d:"7-step framework to evaluate any project",tag:"New",c:"#f59e0b"}] },
};

const COURSES_DATA = {
  newbie:       [{e:"🌱",t:"Crypto 101",s:"Complete Beginner's Guide",l:"beginner",xp:500,h:4,c:"#22c55e",p:0},{e:"🔒",t:"Crypto Security",s:"Protect Your Assets",l:"beginner",xp:450,h:3,c:"#f85149",p:0},{e:"🏦",t:"DeFi Masterclass",s:"Deep Dive into DeFi",l:"intermediate",xp:800,h:8,c:"#818cf8",p:0}],
  intermediate: [{e:"🏦",t:"DeFi Masterclass",s:"Deep Dive into DeFi",l:"intermediate",xp:800,h:8,c:"#818cf8",p:30},{e:"⚡",t:"Layer 2 Deep Dive",s:"Scaling Ethereum",l:"intermediate",xp:700,h:6,c:"#06b6d4",p:0},{e:"◎",t:"Solana Deep Dive",s:"Solana Ecosystem",l:"intermediate",xp:600,h:5,c:"#14F195",p:0}],
  degen:        [{e:"⚡",t:"Layer 2 Deep Dive",s:"Scaling Ethereum",l:"advanced",xp:700,h:6,c:"#06b6d4",p:65},{e:"◎",t:"Solana Deep Dive",s:"Solana Ecosystem",l:"advanced",xp:600,h:5,c:"#14F195",p:20},{e:"🏦",t:"DeFi Masterclass",s:"Advanced DeFi",l:"advanced",xp:800,h:8,c:"#818cf8",p:85}],
};

const DAPPS_DATA = {
  newbie:       [{n:"MetaMask",tg:"World's most popular crypto wallet",cat:"Wallet",e:"🦊",c:"#E2761B",r:4.7,m:"30M+ users",b:"Beginner"},{n:"Uniswap",tg:"Swap tokens on Ethereum and L2s",cat:"DEX",e:"🦄",c:"#FF007A",r:4.8,m:"TVL $4.2B",b:"Beginner"},{n:"Lido",tg:"Liquid staking for ETH",cat:"Staking",e:"🔵",c:"#00A3FF",r:4.7,m:"TVL $30B",b:"Beginner"},{n:"Jupiter",tg:"Best swap aggregator on Solana",cat:"DEX",e:"🪐",c:"#14F195",r:4.9,m:"TVL $850M",b:"Beginner"},{n:"OpenSea",tg:"The largest NFT marketplace",cat:"NFT",e:"🌊",c:"#2081E2",r:4.3,m:"2M+ users",b:"Beginner"},{n:"Coinbase Wallet",tg:"Self-custody wallet by Coinbase",cat:"Wallet",e:"💙",c:"#0052FF",r:4.5,m:"5M+ users",b:"Beginner"}],
  intermediate: [{n:"Aave",tg:"Borrow and lend with flash loans",cat:"Lending",e:"👻",c:"#B6509E",r:4.9,m:"TVL $12.4B",b:"Intermediate"},{n:"Curve",tg:"Best rates for stablecoin swaps",cat:"DEX",e:"📈",c:"#3F7CF5",r:4.6,m:"TVL $2.8B",b:"Intermediate"},{n:"Raydium",tg:"Leading AMM on Solana",cat:"DEX",e:"⚡",c:"#C200FB",r:4.5,m:"TVL $1.2B",b:"Intermediate"},{n:"Aerodrome",tg:"Central liquidity hub on Base",cat:"DEX",e:"✈️",c:"#0052FF",r:4.6,m:"TVL $890M",b:"Intermediate"},{n:"1inch",tg:"DEX aggregator across 11 chains",cat:"DEX",e:"🔮",c:"#1B314F",r:4.5,m:"4M+ users",b:"Intermediate"},{n:"Rocket Pool",tg:"Decentralized ETH staking",cat:"Staking",e:"🚀",c:"#FF6600",r:4.7,m:"TVL $3.8B",b:"Intermediate"}],
  degen:        [{n:"Hyperliquid",tg:"Fastest on-chain perpetuals DEX",cat:"Perps",e:"💧",c:"#2563EB",r:4.9,m:"TVL $3.2B",b:"Degen"},{n:"GMX",tg:"Perp exchange on Arbitrum",cat:"Perps",e:"🔵",c:"#2D42FC",r:4.8,m:"TVL $1.1B",b:"Degen"},{n:"dYdX",tg:"Perpetuals on a dedicated L1",cat:"Perps",e:"📊",c:"#6966FF",r:4.6,m:"TVL $1.8B",b:"Degen"},{n:"Morpho",tg:"Peer-to-peer lending optimization",cat:"Lending",e:"🔵",c:"#3B82F6",r:4.7,m:"TVL $2.8B",b:"Degen"},{n:"Pendle",tg:"Trade yield on tokenized assets",cat:"Yield",e:"🌿",c:"#00B3A4",r:4.7,m:"TVL $4.2B",b:"Degen"},{n:"EigenLayer",tg:"Restaking protocol for Ethereum",cat:"Infra",e:"⚙️",c:"#5B48E5",r:4.8,m:"TVL $18B",b:"Degen"}],
};

const TOOLS_DATA = {
  newbie:       [{e:"💱",t:"Crypto Converter",d:"Real-time prices, 10+ coins",tag:"Popular",c:"#22c55e"},{e:"📊",t:"DCA Calculator",d:"Plan your investment strategy",tag:"Popular",c:"#818cf8"},{e:"📈",t:"Portfolio Tracker",d:"Monitor your holdings",tag:"Easy",c:"#06b6d4"},{e:"🥩",t:"Staking Calculator",d:"See your potential rewards",tag:"Yield",c:"#f59e0b"},{e:"⛽",t:"Gas Tracker",d:"Check transaction fees",tag:"Live",c:"#22c55e"},{e:"😱",t:"Fear & Greed",d:"Is it time to buy?",tag:"Signal",c:"#f85149"}],
  intermediate: [{e:"📉",t:"Advanced Charts",d:"TradingView-style analysis",tag:"Pro",c:"#818cf8"},{e:"⚖️",t:"Portfolio Rebalancer",d:"Drift detection and trade plans",tag:"New",c:"#f59e0b"},{e:"🔗",t:"Correlation Matrix",d:"Find diversification edges",tag:"Data",c:"#22c55e"},{e:"🧾",t:"Tax Loss Harvester",d:"Find tax savings automatically",tag:"New",c:"#f59e0b"},{e:"🥩",t:"Staking Calculator",d:"Compare yields across protocols",tag:"Yield",c:"#818cf8"},{e:"⛽",t:"Gas Tracker",d:"Real-time transaction fees",tag:"Live",c:"#22c55e"}],
  degen:        [{e:"🔥",t:"Perp Funding Rates",d:"Arbitrage opportunities live",tag:"Alpha",c:"#f85149"},{e:"📉",t:"Advanced Charts",d:"Full TA suite",tag:"Pro",c:"#818cf8"},{e:"🔗",t:"Correlation Matrix",d:"Find diversification edges",tag:"Data",c:"#22c55e"},{e:"⚖️",t:"Portfolio Rebalancer",d:"Drift alerts and trade plans",tag:"New",c:"#f59e0b"},{e:"😱",t:"Fear & Greed Index",d:"Contrarian market signal",tag:"Signal",c:"#22c55e"},{e:"🧾",t:"Tax Loss Harvester",d:"Optimize your tax strategy",tag:"New",c:"#818cf8"}],
};

const TABS = [
  {key:"learn",emoji:"📖",label:"Learn",accent:"#22c55e"},
  {key:"courses",emoji:"🎓",label:"Courses",accent:"#818cf8"},
  {key:"ecosystem",emoji:"🌐",label:"Ecosystem",accent:"#06b6d4"},
  {key:"tools",emoji:"🔧",label:"Tools",accent:"#f59e0b"},
];

function SmCard({t,d,tag,c}){
  const [h,setH]=useState(false);
  return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 14px",borderRadius:12,border:`1px solid ${h?"#6366f1":"#2c2c2e"}`,background:"#1c1c1e",cursor:"pointer",transition:"border-color .15s"}}>
    <div style={{flex:1,minWidth:0}}><div style={{fontSize:13,fontWeight:700,color:h?"#a5b4fc":"#fff",transition:"color .15s"}}>{t}</div><div style={{fontSize:11,color:"#8e8e93",marginTop:1}}>{d}</div></div>
    <span style={{flexShrink:0,fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:6,background:`${c}20`,color:c}}>{tag}</span>
  </div>;
}

function CourseCard({e,t,s,l,xp,h,c,p}){
  const [hov,setHov]=useState(false);
  return <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{flexShrink:0,width:190,background:"#1c1c1e",border:`1px solid ${hov?"#6366f1":"#2c2c2e"}`,borderRadius:18,padding:14,cursor:"pointer",transition:"all .15s",transform:hov?"translateY(-3px)":"none"}}>
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}>
      <div style={{width:44,height:44,borderRadius:12,background:`${c}20`,border:`1px solid ${c}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>{e}</div>
      <span style={{fontSize:9,fontWeight:700,padding:"2px 7px",borderRadius:6,background:`${c}20`,color:c,textTransform:"capitalize",alignSelf:"flex-start"}}>{l}</span>
    </div>
    <div style={{fontSize:13,fontWeight:700,color:hov?"#a5b4fc":"#fff",marginBottom:2,transition:"color .15s"}}>{t}</div>
    <div style={{fontSize:11,color:"#8e8e93",marginBottom:8}}>{s}</div>
    <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#636366",marginBottom:8}}><span>⚡ {xp} XP</span><span>~{h}h</span></div>
    <div style={{height:4,background:"#2c2c2e",borderRadius:9,overflow:"hidden"}}>
      {p>0&&<div style={{width:`${p}%`,height:"100%",background:"linear-gradient(90deg,#6366f1,#06b6d4)"}}/>}
    </div>
    {p>0&&<div style={{fontSize:10,color:"#636366",marginTop:4}}>{p}% complete</div>}
  </div>;
}

function DAppCard({n,tg,cat,e,c,r,m,b}){
  const [hov,setHov]=useState(false);
  const lc={Beginner:"#22c55e",Intermediate:"#f59e0b",Degen:"#f85149"}[b];
  return <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{background:"#111113",border:`1px solid ${hov?"#6366f1":"#1e1e21"}`,borderRadius:16,padding:14,display:"flex",flexDirection:"column",cursor:"pointer",transition:"all .15s",transform:hov?"translateY(-3px)":"none",boxShadow:hov?"0 8px 24px rgba(99,102,241,0.12)":"none"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
      <div style={{width:44,height:44,borderRadius:12,background:`${c}22`,border:`1px solid ${c}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>{e}</div>
      <span style={{fontSize:9,fontWeight:800,padding:"2px 7px",borderRadius:6,background:`${lc}18`,color:lc}}>{b}</span>
    </div>
    <div style={{fontSize:13,fontWeight:700,color:hov?"#a5b4fc":"#fff",marginBottom:3,transition:"color .15s"}}>{n}</div>
    <div style={{fontSize:11,color:"#8e8e93",marginBottom:8,flex:1,lineHeight:1.5,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>{tg}</div>
    <div style={{display:"flex",alignItems:"center",gap:3,marginBottom:6}}>
      {"★★★★★".split("").map((_,i)=><span key={i} style={{fontSize:10,color:i<Math.round(r)?"#f59e0b":"#3c3c3e"}}>★</span>)}
      <span style={{fontSize:10,color:"#8e8e93",marginLeft:2}}>{r}</span>
    </div>
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <span style={{fontSize:10,color:"#636366"}}>{cat}</span>
      <span style={{fontSize:10,fontWeight:700,color:"#22c55e"}}>{m}</span>
    </div>
  </div>;
}

export default function DegenHomepage() {
  const [level, setLevel] = useState("newbie");
  const [tab, setTab] = useState("learn");
  const [ecoQ, setEcoQ] = useState("");
  const [scrolling, setScrolling] = useState(false);

  const refs = { learn:useRef(null), courses:useRef(null), ecosystem:useRef(null), tools:useRef(null) };

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting && !scrolling) setTab(e.target.dataset.tab); });
    }, { rootMargin:"-112px 0px -40% 0px" });
    Object.entries(refs).forEach(([k,r]) => { if (r.current) { r.current.dataset.tab=k; obs.observe(r.current); } });
    return () => obs.disconnect();
  }, [scrolling]);

  const scrollTo = (t) => {
    setTab(t); setScrolling(true);
    const el = refs[t]?.current;
    if (el) { window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 112, behavior:"smooth"}); setTimeout(()=>setScrolling(false),800); }
  };

  const hero = HERO[level];
  const learn = LEARN[level];
  const courses = COURSES_DATA[level];
  const dapps = DAPPS_DATA[level].filter(d => !ecoQ || d.n.toLowerCase().includes(ecoQ.toLowerCase()) || d.cat.toLowerCase().includes(ecoQ.toLowerCase()));
  const tools = TOOLS_DATA[level];

  const sec = { maxWidth:1100, margin:"0 auto", padding:"64px 24px", borderBottom:"1px solid #1c1c1e" };
  const ey = { fontSize:11, fontWeight:800, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:8 };
  const hl = { fontSize:"clamp(26px,3vw,32px)", fontWeight:900, letterSpacing:"-0.03em", marginBottom:6 };

  return (
    <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',sans-serif",background:"#000",color:"#fff",minHeight:"100vh"}}>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:200,height:56,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",background:"rgba(0,0,0,0.95)",backdropFilter:"blur(20px)",borderBottom:"1px solid #1c1c1e"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="7" fill="#09090b"/><ellipse cx="16" cy="16" rx="9.5" ry="11.5" stroke="url(#ga)" strokeWidth="2.5" fill="none"/><line x1="9" y1="9" x2="23" y2="23" stroke="url(#gb)" strokeWidth="2" strokeLinecap="round"/><line x1="23" y1="9" x2="9" y2="23" stroke="url(#gb)" strokeWidth="2" strokeLinecap="round"/><defs><linearGradient id="ga" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#818cf8"/><stop offset="1" stopColor="#4f46e5"/></linearGradient><linearGradient id="gb" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e0e7ff"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs></svg>
          <span style={{fontSize:18,fontWeight:900,background:"linear-gradient(135deg,#6366f1,#06b6d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>degen0x</span>
        </div>
        <div style={{display:"flex",gap:22,fontSize:13,color:"#8e8e93"}}>
          {["Learn","Compare","Tools","Courses","Ecosystem"].map(l=><span key={l} style={{cursor:"pointer"}} onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="#8e8e93"}>{l}</span>)}
        </div>
        <button style={{background:"linear-gradient(135deg,#6366f1,#4f46e5)",color:"#fff",fontSize:12,fontWeight:700,padding:"7px 16px",borderRadius:20,cursor:"pointer",border:"none"}}>Connect Wallet</button>
      </nav>

      {/* PLATFORM NAV */}
      <div style={{position:"sticky",top:56,zIndex:190,display:"flex",alignItems:"stretch",background:"rgba(8,8,10,0.96)",backdropFilter:"blur(20px)",borderBottom:"1px solid #1c1c1e",padding:"0 16px",overflowX:"auto"}}>
        {TABS.map(t=>(
          <button key={t.key} onClick={()=>scrollTo(t.key)} style={{display:"flex",alignItems:"center",gap:6,padding:"0 20px",height:48,fontSize:13,fontWeight:600,whiteSpace:"nowrap",cursor:"pointer",border:"none",background:"transparent",transition:"all .15s",color:tab===t.key?"#fff":"#636366",borderBottom:tab===t.key?`2px solid ${t.accent}`:"2px solid transparent"}}>
            {t.emoji} {t.label}
            {(t.key==="courses"||t.key==="ecosystem")&&<span style={{fontSize:9,fontWeight:800,padding:"1px 5px",borderRadius:4,background:"#6366f120",color:"#818cf8",border:"1px solid #6366f130"}}>NEW</span>}
          </button>
        ))}
        <div style={{marginLeft:"auto",display:"flex",alignItems:"center",paddingLeft:16}}>
          <div style={{display:"flex",alignItems:"center",gap:5,background:"#1c1c1e",border:"1px solid #2c2c2e",borderRadius:20,padding:"4px 12px",fontSize:12,color:"#8e8e93",fontWeight:600}}>
            {LEVELS.find(l=>l.key===level)?.emoji} <span style={{textTransform:"capitalize"}}>{level}</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{position:"relative",minHeight:"88vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 90% 65% at 50% 20%,rgba(99,102,241,0.13) 0%,transparent 70%)"}}/>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",opacity:0.03,backgroundImage:"linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
        <div style={{position:"relative",maxWidth:860,width:"100%"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"5px 14px",borderRadius:999,border:"1px solid #2c2c2e",background:"#1c1c1e",fontSize:11,fontWeight:600,color:"#8e8e93",marginBottom:28}}>
            <span style={{width:6,height:6,borderRadius:"50%",background:"#22c55e",display:"inline-block"}}/>
            {hero.badge}
          </div>
          <div style={{marginBottom:24}}>
            {hero.h.map((line,i)=>(
              <div key={i} style={{fontSize:"clamp(36px,6vw,72px)",fontWeight:900,lineHeight:1.02,letterSpacing:"-0.04em",...(i===1?{background:"linear-gradient(135deg,#6366f1,#818cf8,#06b6d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}:{color:"#fff"})}}>{line}</div>
            ))}
          </div>
          <div style={{marginBottom:22}}>
            <div style={{fontSize:12,color:"#636366",marginBottom:10}}>Where are you on your crypto journey?</div>
            <div style={{display:"inline-flex",gap:4,padding:6,borderRadius:18,background:"#1c1c1e",border:"1px solid #2c2c2e"}}>
              {LEVELS.map(l=>(
                <button key={l.key} onClick={()=>setLevel(l.key)} style={{display:"flex",alignItems:"center",gap:6,padding:"8px 18px",borderRadius:12,fontSize:13,fontWeight:600,cursor:"pointer",border:"none",transition:"all .2s",background:level===l.key?"linear-gradient(135deg,#6366f1,#4f46e5)":"transparent",color:level===l.key?"#fff":"#8e8e93",boxShadow:level===l.key?"0 4px 14px rgba(99,102,241,0.35)":"none"}}>
                  {l.emoji} {l.label}
                </button>
              ))}
            </div>
          </div>
          <p style={{fontSize:16,color:"#8e8e93",maxWidth:520,margin:"0 auto 28px",lineHeight:1.7}}>{hero.sub}</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",marginBottom:44}}>
            <button style={{padding:"13px 26px",borderRadius:14,background:"linear-gradient(135deg,#6366f1,#4f46e5)",color:"#fff",fontWeight:700,fontSize:15,border:"none",cursor:"pointer",transition:"all .15s"}} onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 8px 24px rgba(99,102,241,0.4)"}} onMouseLeave={e=>{e.target.style.transform="none";e.target.style.boxShadow="none"}}>{hero.cta}</button>
            <button style={{padding:"12px 22px",borderRadius:14,background:"#1c1c1e",color:"#8e8e93",fontWeight:500,fontSize:14,border:"1px solid #2c2c2e",cursor:"pointer",transition:"all .15s"}} onMouseEnter={e=>{e.target.style.borderColor="#6366f1";e.target.style.color="#fff"}} onMouseLeave={e=>{e.target.style.borderColor="#2c2c2e";e.target.style.color="#8e8e93"}}>{hero.ghost}</button>
          </div>
          <div style={{display:"flex",justifyContent:"center",gap:40}}>
            {hero.stats.map(s=><div key={s.l} style={{textAlign:"center"}}><div style={{fontSize:28,fontWeight:900,color:"#fff"}}>{s.v}</div><div style={{fontSize:11,color:"#636366",marginTop:2}}>{s.l}</div></div>)}
          </div>
        </div>
        <div style={{position:"absolute",bottom:20,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:4,color:"#3c3c3e",animation:"bounce 2s infinite"}}>
          <span style={{fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase"}}>scroll</span>
          <span>↓</span>
        </div>
      </section>

      {/* LEARN */}
      <div ref={refs.learn} style={{scrollMarginTop:112}}>
        <div style={sec}>
          <div style={{...ey,color:"#22c55e"}}>📖 Learn</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:20}}>
            <div><div style={hl}>{learn.h}</div><div style={{color:"#8e8e93",fontSize:14,maxWidth:480}}>{learn.desc}</div></div>
            <span style={{fontSize:13,color:"#6366f1",fontWeight:600,cursor:"pointer",whiteSpace:"nowrap"}}>Browse all guides →</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {learn.cards.map((c,i)=><SmCard key={i} t={c.t} d={c.d} tag={c.tag} c={c.c}/>)}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:16}}>
            {["Crypto Basics","DeFi","Layer 2","Security","NFTs","Trading"].map(t=><span key={t} style={{padding:"5px 12px",borderRadius:8,border:"1px solid #2c2c2e",background:"#1c1c1e",fontSize:11,color:"#8e8e93",cursor:"pointer"}}>{t}</span>)}
          </div>
        </div>
      </div>

      {/* COURSES */}
      <div ref={refs.courses} style={{scrollMarginTop:112}}>
        <div style={sec}>
          <div style={{...ey,color:"#818cf8"}}>🎓 Courses</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:20}}>
            <div>
              <div style={hl}>{level==="newbie"?"Start from zero":level==="intermediate"?"Level up your DeFi game":"Master the deep end"}</div>
              <div style={{color:"#8e8e93",fontSize:14,maxWidth:480}}>{level==="newbie"?"Structured paths with XP, quizzes, and badges.":level==="intermediate"?"In-depth courses on DeFi, Layer 2, and on-chain strategies.":"Advanced courses for experienced traders."}</div>
            </div>
            <span style={{fontSize:13,color:"#6366f1",fontWeight:600,cursor:"pointer",whiteSpace:"nowrap"}}>All courses →</span>
          </div>
          <div style={{display:"flex",gap:14,overflowX:"auto",paddingBottom:8,scrollbarWidth:"thin",scrollbarColor:"#3c3c3e transparent"}}>
            {courses.map((c,i)=><CourseCard key={i} {...c}/>)}
            <div style={{flexShrink:0,width:176,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#1c1c1e",border:"1px dashed #3c3c3e",borderRadius:18,padding:20,cursor:"pointer",gap:8,transition:"all .15s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="#6366f1";e.currentTarget.style.background="#1c1c2e"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="#3c3c3e";e.currentTarget.style.background="#1c1c1e"}}>
              <span style={{fontSize:28}}>🎓</span><span style={{fontSize:12,fontWeight:700,color:"#8e8e93",textAlign:"center"}}>View All Courses</span><span style={{fontSize:10,color:"#636366",textAlign:"center"}}>50+ lessons · 5 tracks</span>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",background:"#1c1c1e",border:"1px solid #2c2c2e",borderRadius:14,marginTop:20}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}><span style={{fontSize:22}}>⚡</span><div><div style={{fontSize:13,fontWeight:700}}>Earn XP as you learn</div><div style={{fontSize:11,color:"#636366"}}>Complete courses to unlock badges and level up</div></div></div>
            <span style={{fontSize:12,fontWeight:700,color:"#6366f1",cursor:"pointer"}}>Start earning XP →</span>
          </div>
        </div>
      </div>

      {/* ECOSYSTEM */}
      <div ref={refs.ecosystem} style={{scrollMarginTop:112}}>
        <div style={sec}>
          <div style={{...ey,color:"#06b6d4"}}>🌐 Ecosystem</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:16}}>
            <div>
              <div style={hl}>{level==="newbie"?"Start with the best apps":level==="intermediate"?"Top DeFi protocols":"Elite-tier protocols"}</div>
              <div style={{color:"#8e8e93",fontSize:14,maxWidth:480}}>{level==="newbie"?"The safest, most popular apps. Wallets, swaps, and simple DeFi.":level==="intermediate"?"Battle-tested protocols across chains. Lending, liquidity, and staking.":"Perpetuals, complex yield strategies, and analytics for serious traders."}</div>
            </div>
            <span style={{fontSize:13,color:"#6366f1",fontWeight:600,cursor:"pointer",whiteSpace:"nowrap"}}>Full App Store →</span>
          </div>
          <div style={{position:"relative",maxWidth:300,marginBottom:16}}>
            <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",color:"#636366"}}>🔍</span>
            <input value={ecoQ} onChange={e=>setEcoQ(e.target.value)} placeholder="Search dApps…" style={{width:"100%",background:"#1c1c1e",border:"1px solid #2c2c2e",borderRadius:12,padding:"9px 14px 9px 34px",fontSize:13,color:"#fff",outline:"none",boxSizing:"border-box"}} onFocus={e=>e.target.style.borderColor="#6366f1"} onBlur={e=>e.target.style.borderColor="#2c2c2e"}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(172px,1fr))",gap:12}}>
            {dapps.map((d,i)=><DAppCard key={i} {...d}/>)}
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#1c1c1e",border:"1px dashed #3c3c3e",borderRadius:16,padding:16,cursor:"pointer",minHeight:172,gap:8,transition:"all .15s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor="#6366f1";e.currentTarget.style.background="#1c1c2e"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="#3c3c3e";e.currentTarget.style.background="#1c1c1e"}}>
              <span style={{fontSize:24}}>🌐</span><span style={{fontSize:12,fontWeight:700,color:"#8e8e93",textAlign:"center"}}>View All 67+</span><span style={{fontSize:10,color:"#636366",textAlign:"center"}}>15 chains · 16 categories</span>
            </div>
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <div ref={refs.tools} style={{scrollMarginTop:112}}>
        <div style={sec}>
          <div style={{...ey,color:"#f59e0b"}}>🔧 Tools</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:20}}>
            <div>
              <div style={hl}>{level==="newbie"?"Tools that make it easy":level==="intermediate"?"Analytical tools":"Power tools for degens"}</div>
              <div style={{color:"#8e8e93",fontSize:14,maxWidth:480}}>{level==="newbie"?"Simple, free tools. No signup required.":level==="intermediate"?"Advanced calculators, charting, and portfolio analytics.":"Funding rates, whale tracking, on-chain analytics, and alpha."}</div>
            </div>
            <span style={{fontSize:13,color:"#6366f1",fontWeight:600,cursor:"pointer",whiteSpace:"nowrap"}}>All 92+ tools →</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {tools.map((t,i)=><SmCard key={i} t={`${t.e} ${t.t}`} d={t.d} tag={t.tag} c={t.c}/>)}
          </div>
        </div>
      </div>

      {/* MISSION */}
      <section style={{padding:"88px 24px",textAlign:"center",background:"#050507",borderTop:"1px solid #1c1c1e"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <div style={{fontSize:96,fontWeight:900,lineHeight:1,marginBottom:16,background:"linear-gradient(135deg,#6366f1,#06b6d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>1B</div>
          <h2 style={{fontSize:26,fontWeight:700,color:"#fff",marginBottom:14}}>That's our goal. One billion users in Web3.</h2>
          <p style={{color:"#8e8e93",lineHeight:1.7,fontSize:15,marginBottom:32}}>Not because we think everyone should trade crypto, but because everyone deserves to understand the financial system being built around them. Education is the way in.</p>
          <div style={{display:"flex",gap:12,justifyContent:"center"}}>
            <button style={{padding:"13px 26px",borderRadius:14,background:"linear-gradient(135deg,#6366f1,#4f46e5)",color:"#fff",fontWeight:700,fontSize:15,border:"none",cursor:"pointer"}}>🎓 Start Learning Free</button>
            <button style={{padding:"12px 22px",borderRadius:14,background:"#1c1c1e",color:"#8e8e93",fontWeight:500,fontSize:14,border:"1px solid #2c2c2e",cursor:"pointer"}}>🌐 Explore dApps</button>
          </div>
        </div>
      </section>

      <style>{`@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(6px)}}::-webkit-scrollbar{height:4px;width:4px}::-webkit-scrollbar-track{background:#1c1c1e}::-webkit-scrollbar-thumb{background:#3c3c3e;border-radius:9px}`}</style>
    </div>
  );
}
