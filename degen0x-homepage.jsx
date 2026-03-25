import { useState, useEffect, useRef } from "react";

const LEVELS = [
  { key: "newbie",       label: "I'm New",     emoji: "👋" },
  { key: "intermediate", label: "Intermediate", emoji: "📈" },
  { key: "degen",        label: "Degen",        emoji: "🔥" },
];

const HERO = {
  newbie: {
    badge: "Free · No signup · No paywall",
    h: ["Onboard the Next", "1 Billion Users", "to Web3"],
    sub: "The crypto world is powerful but intimidating. We built the guide we wish we had — free tools, honest reviews, and clear explanations.",
    cta: "Start Learning Free →", ghost: "Browse beginner guides",
    stats: [{ v: "1M+", l: "Learners" }, { v: "50+", l: "Courses" }, { v: "92+", l: "Free Tools" }],
  },
  intermediate: {
    badge: "Advanced DeFi · Layer 2 · On-chain analytics",
    h: ["Go Deeper.", "Earn More.", "Beat the Market."],
    sub: "You know Bitcoin from Ethereum. Now explore DeFi protocols, on-chain analytics, Layer 2 scaling, and tools that give you an edge.",
    cta: "Explore DeFi Courses →", ghost: "Go to Dashboard",
    stats: [{ v: "$2T+", l: "DeFi TVL tracked" }, { v: "67+", l: "dApps catalogued" }, { v: "15", l: "Chains covered" }],
  },
  degen: {
    badge: "Perps · Whale alerts · Funding rate arb",
    h: ["Full Send.", "Pure Alpha.", "Zero Fluff."],
    sub: "Funding rates, whale alerts, correlation alpha, memecoin strategies, and 92+ tools to sharpen your edge. No fluff. Just signal.",
    cta: "Open Dashboard →", ghost: "Perp Funding Rates",
    stats: [{ v: "92+", l: "Pro tools" }, { v: "24/7", l: "Live data" }, { v: "0", l: "Paywalls" }],
  },
};

const LEARN = {
  newbie: { heading: "Learn at your own pace", desc: "35+ in-depth guides. No jargon, no assumptions.", cards: [
    { title: "What is Bitcoin?",    desc: "The original cryptocurrency explained",   tag: "8 min",  color: "#22c55e" },
    { title: "What is Ethereum?",   desc: "Smart contracts and the world computer",  tag: "10 min", color: "#818cf8" },
    { title: "What is DeFi?",       desc: "Decentralized finance without the bank",  tag: "12 min", color: "#06b6d4" },
    { title: "Crypto Wallets",      desc: "Your keys, your coins, how it works",     tag: "6 min",  color: "#f59e0b" },
  ]},
  intermediate: { heading: "Go deeper", desc: "Restaking, Layer 2 scaling, RWAs, and prediction markets.", cards: [
    { title: "Restaking & EigenLayer", desc: "Next-gen staking and validator economics", tag: "15 min", color: "#818cf8" },
    { title: "Bitcoin Layer 2s",        desc: "Scaling solutions enhancing Bitcoin",      tag: "12 min", color: "#f59e0b" },
    { title: "Prediction Markets",      desc: "Trade on real-world event outcomes",        tag: "10 min", color: "#22c55e" },
    { title: "Real World Assets",       desc: "Tokenized assets reshaping finance",         tag: "14 min", color: "#06b6d4" },
  ]},
  degen: { heading: "Sharpen your edge", desc: "Memecoin alpha, AI agents, prediction markets, and the deep end.", cards: [
    { title: "Memecoin Strategy",  desc: "Risks and alpha in memecoin markets",         tag: "10 min", color: "#f85149" },
    { title: "Prediction Markets", desc: "Advanced strategies for event trading",        tag: "10 min", color: "#22c55e" },
    { title: "AI Crypto Agents",   desc: "Autonomous traders and yield optimizers",      tag: "12 min", color: "#818cf8" },
    { title: "Read Whitepapers",   desc: "7-step framework to evaluate any project",     tag: "New",    color: "#f59e0b" },
  ]},
};

const COURSES_DATA = {
  newbie: [
    { emoji:"🌱", title:"Crypto 101",       sub:"Complete Beginner's Guide",  level:"beginner",     xp:500, hours:4, color:"#22c55e", prog:0 },
    { emoji:"🔒", title:"Crypto Security",  sub:"Protect Your Assets",        level:"beginner",     xp:450, hours:3, color:"#f85149", prog:0 },
    { emoji:"🏦", title:"DeFi Masterclass", sub:"Deep Dive into DeFi",        level:"intermediate", xp:800, hours:8, color:"#818cf8", prog:0 },
  ],
  intermediate: [
    { emoji:"🏦", title:"DeFi Masterclass", sub:"Deep Dive into DeFi",  level:"intermediate", xp:800, hours:8, color:"#818cf8", prog:30 },
    { emoji:"⚡", title:"Layer 2 Deep Dive",sub:"Scaling Ethereum",     level:"intermediate", xp:700, hours:6, color:"#06b6d4", prog:0  },
    { emoji:"◎", title:"Solana Deep Dive", sub:"Solana Ecosystem",     level:"intermediate", xp:600, hours:5, color:"#14F195", prog:0  },
  ],
  degen: [
    { emoji:"⚡", title:"Layer 2 Deep Dive",  sub:"Scaling Ethereum",          level:"advanced", xp:700, hours:6, color:"#06b6d4", prog:65 },
    { emoji:"◎", title:"Solana Deep Dive",    sub:"Solana Ecosystem",          level:"advanced", xp:600, hours:5, color:"#14F195", prog:20 },
    { emoji:"🏦", title:"DeFi Masterclass",   sub:"Advanced DeFi Strategies",  level:"advanced", xp:800, hours:8, color:"#818cf8", prog:85 },
  ],
};

const DAPPS = {
  newbie: [
    { name:"MetaMask",       tagline:"World's most popular crypto wallet",    cat:"Wallet",  emoji:"🦊", color:"#E2761B", rating:4.7, metric:"30M+ users",   badge:"Beginner"     },
    { name:"Uniswap",        tagline:"Swap tokens on Ethereum and L2s",       cat:"DEX",     emoji:"🦄", color:"#FF007A", rating:4.8, metric:"TVL $4.2B",    badge:"Beginner"     },
    { name:"Lido",           tagline:"Liquid staking for ETH",                cat:"Staking", emoji:"🔵", color:"#00A3FF", rating:4.7, metric:"TVL $30B",     badge:"Beginner"     },
    { name:"Jupiter",        tagline:"Best swap aggregator on Solana",        cat:"DEX",     emoji:"🪐", color:"#14F195", rating:4.9, metric:"TVL $850M",    badge:"Beginner"     },
    { name:"OpenSea",        tagline:"The largest NFT marketplace",           cat:"NFT",     emoji:"🌊", color:"#2081E2", rating:4.3, metric:"2M+ users",    badge:"Beginner"     },
    { name:"Coinbase Wallet",tagline:"Self-custody wallet by Coinbase",       cat:"Wallet",  emoji:"💙", color:"#0052FF", rating:4.5, metric:"5M+ users",    badge:"Beginner"     },
  ],
  intermediate: [
    { name:"Aave",          tagline:"Borrow and lend with flash loans",        cat:"Lending", emoji:"👻", color:"#B6509E", rating:4.9, metric:"TVL $12.4B",  badge:"Intermediate" },
    { name:"Curve",         tagline:"Best rates for stablecoin swaps",         cat:"DEX",     emoji:"📈", color:"#3F7CF5", rating:4.6, metric:"TVL $2.8B",   badge:"Intermediate" },
    { name:"Raydium",       tagline:"Leading AMM on Solana",                   cat:"DEX",     emoji:"⚡", color:"#C200FB", rating:4.5, metric:"TVL $1.2B",   badge:"Intermediate" },
    { name:"Aerodrome",     tagline:"Central liquidity hub on Base",           cat:"DEX",     emoji:"✈️", color:"#0052FF", rating:4.6, metric:"TVL $890M",   badge:"Intermediate" },
    { name:"1inch",         tagline:"DEX aggregator across 11 chains",         cat:"DEX",     emoji:"🔮", color:"#1B314F", rating:4.5, metric:"4M+ users",   badge:"Intermediate" },
    { name:"Rocket Pool",   tagline:"Decentralized ETH staking",               cat:"Staking", emoji:"🚀", color:"#FF6600", rating:4.7, metric:"TVL $3.8B",   badge:"Intermediate" },
  ],
  degen: [
    { name:"Hyperliquid",  tagline:"Fastest on-chain perpetuals DEX",          cat:"Perps",   emoji:"💧", color:"#2563EB", rating:4.9, metric:"TVL $3.2B",   badge:"Degen"        },
    { name:"GMX",          tagline:"Perp exchange on Arbitrum & Avalanche",     cat:"Perps",   emoji:"🔵", color:"#2D42FC", rating:4.8, metric:"TVL $1.1B",   badge:"Degen"        },
    { name:"dYdX",         tagline:"Perpetuals on a dedicated L1",              cat:"Perps",   emoji:"📊", color:"#6966FF", rating:4.6, metric:"TVL $1.8B",   badge:"Degen"        },
    { name:"Morpho",       tagline:"Peer-to-peer lending optimization",         cat:"Lending", emoji:"🔵", color:"#3B82F6", rating:4.7, metric:"TVL $2.8B",   badge:"Degen"        },
    { name:"Pendle",       tagline:"Trade yield on tokenized assets",           cat:"Yield",   emoji:"🌿", color:"#00B3A4", rating:4.7, metric:"TVL $4.2B",   badge:"Degen"        },
    { name:"EigenLayer",   tagline:"Restaking protocol for Ethereum",           cat:"Infra",   emoji:"⚙️", color:"#5B48E5", rating:4.8, metric:"TVL $18B",    badge:"Degen"        },
  ],
};

const TOOLS = {
  newbie: [
    { emoji:"💱", title:"Crypto Converter",   desc:"Real-time prices, 10+ coins",     tag:"Popular", color:"#22c55e" },
    { emoji:"📊", title:"DCA Calculator",     desc:"Plan your investment strategy",   tag:"Popular", color:"#818cf8" },
    { emoji:"📈", title:"Portfolio Tracker",  desc:"Monitor your holdings",           tag:"Easy",    color:"#06b6d4" },
    { emoji:"🥩", title:"Staking Calculator", desc:"See your potential rewards",      tag:"Yield",   color:"#f59e0b" },
    { emoji:"⛽", title:"Gas Tracker",        desc:"Check transaction fees",          tag:"Live",    color:"#22c55e" },
    { emoji:"😱", title:"Fear & Greed",       desc:"Is it time to buy?",              tag:"Signal",  color:"#f85149" },
  ],
  intermediate: [
    { emoji:"📉", title:"Advanced Charts",        desc:"TradingView-style analysis",      tag:"Pro",  color:"#818cf8" },
    { emoji:"⚖️", title:"Portfolio Rebalancer",   desc:"Drift detection and trade plans", tag:"New",  color:"#f59e0b" },
    { emoji:"🔗", title:"Correlation Matrix",     desc:"Find diversification edges",      tag:"Data", color:"#22c55e" },
    { emoji:"🧾", title:"Tax Loss Harvester",     desc:"Find tax savings automatically",  tag:"New",  color:"#f59e0b" },
    { emoji:"🥩", title:"Staking Calculator",     desc:"Compare yields across protocols", tag:"Yield",color:"#818cf8" },
    { emoji:"⛽", title:"Gas Tracker",            desc:"Real-time transaction fees",      tag:"Live", color:"#22c55e" },
  ],
  degen: [
    { emoji:"🔥", title:"Perp Funding Rates",   desc:"Arbitrage opportunities live",    tag:"Alpha",  color:"#f85149" },
    { emoji:"📉", title:"Advanced Charts",       desc:"Full TA suite",                   tag:"Pro",    color:"#818cf8" },
    { emoji:"🔗", title:"Correlation Matrix",   desc:"Find diversification edges",      tag:"Data",   color:"#22c55e" },
    { emoji:"⚖️", title:"Portfolio Rebalancer", desc:"Drift alerts and trade plans",    tag:"New",    color:"#f59e0b" },
    { emoji:"😱", title:"Fear & Greed Index",   desc:"Contrarian market signal",        tag:"Signal", color:"#22c55e" },
    { emoji:"🧾", title:"Tax Loss Harvester",   desc:"Optimize your tax strategy",      tag:"New",    color:"#818cf8" },
  ],
};

const TABS = [
  { key:"learn",     label:"Learn",     emoji:"📖", accent:"#22c55e" },
  { key:"courses",   label:"Courses",   emoji:"🎓", accent:"#818cf8" },
  { key:"ecosystem", label:"Ecosystem", emoji:"🌐", accent:"#06b6d4" },
  { key:"tools",     label:"Tools",     emoji:"🔧", accent:"#f59e0b" },
];

// ── Components ──────────────────────────────────────────────────────────────

function SmallCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ display:"flex", alignItems:"center", gap:12, padding:"11px 14px", borderRadius:12,
        border: `1px solid ${hov?"#6366f1":"#2c2c2e"}`, background:"#1c1c1e",
        cursor:"pointer", transition:"border-color .15s" }}>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:13, fontWeight:700, color: hov?"#a5b4fc":"#fff", transition:"color .15s" }}>{item.title}</div>
        <div style={{ fontSize:11, color:"#8e8e93", marginTop:1 }}>{item.desc}</div>
      </div>
      <span style={{ flexShrink:0, fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:6, background:`${item.color}20`, color:item.color }}>{item.tag}</span>
    </div>
  );
}

function CourseCard({ c }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ flexShrink:0, width:192, background:"#1c1c1e", border:`1px solid ${hov?"#6366f1":"#2c2c2e"}`,
        borderRadius:18, padding:14, cursor:"pointer", transition:"all .15s", transform: hov?"translateY(-3px)":"none" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
        <div style={{ width:44, height:44, borderRadius:12, background:`${c.color}20`, border:`1px solid ${c.color}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{c.emoji}</div>
        <span style={{ fontSize:9, fontWeight:700, padding:"2px 7px", borderRadius:6, background:`${c.color}20`, color:c.color, textTransform:"capitalize" }}>{c.level}</span>
      </div>
      <div style={{ fontSize:13, fontWeight:700, color: hov?"#a5b4fc":"#fff", marginBottom:2, lineHeight:1.3, transition:"color .15s" }}>{c.title}</div>
      <div style={{ fontSize:11, color:"#8e8e93", marginBottom:8 }}>{c.sub}</div>
      <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"#636366", marginBottom:8 }}>
        <span>⚡ {c.xp} XP</span><span>~{c.hours}h</span>
      </div>
      <div style={{ height:4, background:"#2c2c2e", borderRadius:9, overflow:"hidden" }}>
        {c.prog > 0 && <div style={{ width:`${c.prog}%`, height:"100%", background:"linear-gradient(90deg,#6366f1,#06b6d4)" }} />}
      </div>
      {c.prog > 0 && <div style={{ fontSize:10, color:"#636366", marginTop:4 }}>{c.prog}% complete</div>}
    </div>
  );
}

function DAppCard({ d }) {
  const [hov, setHov] = useState(false);
  const lc = { Beginner:"#22c55e", Intermediate:"#f59e0b", Degen:"#f85149" }[d.badge];
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ background:"#111113", border:`1px solid ${hov?"#6366f1":"#1e1e21"}`, borderRadius:16, padding:14,
        display:"flex", flexDirection:"column", cursor:"pointer", transition:"all .15s", transform: hov?"translateY(-3px)":"none",
        boxShadow: hov?"0 8px 24px rgba(99,102,241,0.12)":"none" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
        <div style={{ width:44, height:44, borderRadius:12, background:`${d.color}22`, border:`1px solid ${d.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{d.emoji}</div>
        <span style={{ fontSize:9, fontWeight:800, padding:"2px 7px", borderRadius:6, background:`${lc}18`, color:lc }}>{d.badge}</span>
      </div>
      <div style={{ fontSize:13, fontWeight:700, color: hov?"#a5b4fc":"#fff", marginBottom:3, transition:"color .15s" }}>{d.name}</div>
      <div style={{ fontSize:11, color:"#8e8e93", marginBottom:8, flex:1, lineHeight:1.5, overflow:"hidden", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical" }}>{d.tagline}</div>
      <div style={{ display:"flex", alignItems:"center", gap:3, marginBottom:6 }}>
        {"★★★★★".split("").map((_,i) => <span key={i} style={{ fontSize:10, color: i < Math.round(d.rating) ? "#f59e0b":"#3c3c3e" }}>★</span>)}
        <span style={{ fontSize:10, color:"#8e8e93", marginLeft:2 }}>{d.rating}</span>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between" }}>
        <span style={{ fontSize:10, color:"#636366" }}>{d.cat}</span>
        <span style={{ fontSize:10, fontWeight:700, color:"#22c55e" }}>{d.metric}</span>
      </div>
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────────────────────

export default function DegenHomepage() {
  const [level, setLevel] = useState("newbie");
  const [activeTab, setActiveTab] = useState("learn");
  const [ecoSearch, setEcoSearch] = useState("");
  const [scrolling, setScrolling] = useState(false);

  const refs = {
    learn:     useRef(null),
    courses:   useRef(null),
    ecosystem: useRef(null),
    tools:     useRef(null),
  };

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !scrolling) setActiveTab(e.target.dataset.tab);
      });
    }, { rootMargin:"-112px 0px -40% 0px" });
    Object.entries(refs).forEach(([k, r]) => {
      if (r.current) { r.current.dataset.tab = k; obs.observe(r.current); }
    });
    return () => obs.disconnect();
  }, [scrolling]);

  const scrollTo = (tab) => {
    setActiveTab(tab);
    setScrolling(true);
    const el = refs[tab]?.current;
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 112, behavior:"smooth" });
      setTimeout(() => setScrolling(false), 800);
    }
  };

  const hero = HERO[level];
  const learn = LEARN[level];
  const coursesData = COURSES_DATA[level];
  const dapps = DAPPS[level].filter(d =>
    !ecoSearch || d.name.toLowerCase().includes(ecoSearch.toLowerCase()) || d.cat.toLowerCase().includes(ecoSearch.toLowerCase())
  );
  const tools = TOOLS[level];

  return (
    <div style={{ fontFamily:"-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif", background:"#000", color:"#fff", minHeight:"100vh" }}>

      {/* ─ MAIN NAV ─ */}
      <nav style={{ position:"sticky", top:0, zIndex:200, height:56, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 24px", background:"rgba(0,0,0,0.95)", backdropFilter:"blur(20px)", borderBottom:"1px solid #1c1c1e" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="7" fill="#09090b"/>
            <ellipse cx="16" cy="16" rx="9.5" ry="11.5" stroke="url(#g1)" strokeWidth="2.5" fill="none"/>
            <line x1="9" y1="9" x2="23" y2="23" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round"/>
            <line x1="23" y1="9" x2="9" y2="23" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#818cf8"/><stop offset="1" stopColor="#4f46e5"/></linearGradient>
              <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e0e7ff"/><stop offset="1" stopColor="#818cf8"/></linearGradient>
            </defs>
          </svg>
          <span style={{ fontSize:18, fontWeight:900, background:"linear-gradient(135deg,#6366f1,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>degen0x</span>
        </div>
        <div style={{ display:"flex", gap:22, fontSize:13, color:"#8e8e93" }}>
          {["Learn","Compare","Tools","Courses","Ecosystem"].map(l=>(
            <span key={l} style={{ cursor:"pointer", transition:"color .15s" }}
              onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="#8e8e93"}>{l}</span>
          ))}
        </div>
        <button style={{ background:"linear-gradient(135deg,#6366f1,#4f46e5)", color:"#fff", fontSize:12, fontWeight:700, padding:"7px 16px", borderRadius:20, cursor:"pointer", border:"none" }}>
          Connect Wallet
        </button>
      </nav>

      {/* ─ PLATFORM NAV ─ */}
      <div style={{ position:"sticky", top:56, zIndex:190, display:"flex", alignItems:"stretch", background:"rgba(8,8,10,0.96)", backdropFilter:"blur(20px)", borderBottom:"1px solid #1c1c1e", padding:"0 16px", overflowX:"auto" }}>
        {TABS.map(tab => (
          <button key={tab.key} onClick={()=>scrollTo(tab.key)}
            style={{ display:"flex", alignItems:"center", gap:6, padding:"0 20px", height:48, fontSize:13, fontWeight:600, whiteSpace:"nowrap", cursor:"pointer", border:"none", background:"transparent", transition:"all .15s",
              color: activeTab===tab.key ? "#fff" : "#636366",
              borderBottom: activeTab===tab.key ? `2px solid ${tab.accent}` : "2px solid transparent" }}>
            {tab.emoji} {tab.label}
            {(tab.key==="courses"||tab.key==="ecosystem") && (
              <span style={{ fontSize:9, fontWeight:800, padding:"1px 5px", borderRadius:4, background:"#6366f120", color:"#818cf8", border:"1px solid #6366f130" }}>NEW</span>
            )}
          </button>
        ))}
        <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", paddingLeft:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:5, background:"#1c1c1e", border:"1px solid #2c2c2e", borderRadius:20, padding:"4px 12px", fontSize:12, color:"#8e8e93", fontWeight:600 }}>
            {LEVELS.find(l=>l.key===level)?.emoji} <span style={{ textTransform:"capitalize" }}>{level}</span>
          </div>
        </div>
      </div>

      {/* ─ HERO ─ */}
      <section style={{ position:"relative", minHeight:"88vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"0 24px", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 90% 65% at 50% 20%, rgba(99,102,241,0.13) 0%, transparent 70%)" }}/>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", opacity:0.03, backgroundImage:"linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize:"40px 40px" }}/>

        <div style={{ position:"relative", maxWidth:860, width:"100%" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"5px 14px", borderRadius:999, border:"1px solid #2c2c2e", background:"#1c1c1e", fontSize:11, fontWeight:600, color:"#8e8e93", marginBottom:28 }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#22c55e", display:"inline-block" }} />
            {hero.badge}
          </div>

          <div style={{ marginBottom:24 }}>
            {hero.h.map((line,i) => (
              <div key={i} style={{ fontSize:"clamp(38px,6.5vw,76px)", fontWeight:900, lineHeight:1.02, letterSpacing:"-0.04em",
                ...(i===1 ? { background:"linear-gradient(135deg,#6366f1,#818cf8,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" } : { color:"#fff" }) }}>
                {line}
              </div>
            ))}
          </div>

          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:12, color:"#636366", marginBottom:10 }}>Where are you on your crypto journey?</div>
            <div style={{ display:"inline-flex", gap:4, padding:6, borderRadius:18, background:"#1c1c1e", border:"1px solid #2c2c2e" }}>
              {LEVELS.map(l=>(
                <button key={l.key} onClick={()=>setLevel(l.key)}
                  style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 18px", borderRadius:12, fontSize:13, fontWeight:600, cursor:"pointer", border:"none", transition:"all .2s",
                    background: level===l.key ? "linear-gradient(135deg,#6366f1,#4f46e5)" : "transparent",
                    color: level===l.key ? "#fff" : "#8e8e93",
                    boxShadow: level===l.key ? "0 4px 14px rgba(99,102,241,0.35)" : "none" }}>
                  {l.emoji} {l.label}
                </button>
              ))}
            </div>
          </div>

          <p style={{ fontSize:16, color:"#8e8e93", maxWidth:520, margin:"0 auto 28px", lineHeight:1.7 }}>{hero.sub}</p>

          <div style={{ display:"flex", gap:12, justifyContent:"center", marginBottom:44 }}>
            <button style={{ padding:"13px 26px", borderRadius:14, background:"linear-gradient(135deg,#6366f1,#4f46e5)", color:"#fff", fontWeight:700, fontSize:15, border:"none", cursor:"pointer", transition:"all .15s" }}
              onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 8px 24px rgba(99,102,241,0.4)"}}
              onMouseLeave={e=>{e.target.style.transform="none";e.target.style.boxShadow="none"}}>
              {hero.cta}
            </button>
            <button style={{ padding:"12px 22px", borderRadius:14, background:"#1c1c1e", color:"#8e8e93", fontWeight:500, fontSize:14, border:"1px solid #2c2c2e", cursor:"pointer", transition:"all .15s" }}
              onMouseEnter={e=>{e.target.style.borderColor="#6366f1";e.target.style.color="#fff"}}
              onMouseLeave={e=>{e.target.style.borderColor="#2c2c2e";e.target.style.color="#8e8e93"}}>
              {hero.ghost}
            </button>
          </div>

          <div style={{ display:"flex", justifyContent:"center", gap:40 }}>
            {hero.stats.map(s=>(
              <div key={s.l} style={{ textAlign:"center" }}>
                <div style={{ fontSize:28, fontWeight:900, color:"#fff" }}>{s.v}</div>
                <div style={{ fontSize:11, color:"#636366", marginTop:2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position:"absolute", bottom:20, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:4, color:"#3c3c3e", animation:"bounce 2s infinite" }}>
          <span style={{ fontSize:10, fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase" }}>scroll</span>
          <span style={{ fontSize:14 }}>↓</span>
        </div>
      </section>

      {/* ─ LEARN ─ */}
      <div ref={refs.learn} style={{ scrollMarginTop:112 }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"64px 24px", borderBottom:"1px solid #1c1c1e" }}>
          <div style={{ fontSize:11, fontWeight:800, letterSpacing:"0.12em", textTransform:"uppercase", color:"#22c55e", marginBottom:8 }}>📖 Learn</div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:20 }}>
            <div>
              <div style={{ fontSize:30, fontWeight:900, letterSpacing:"-0.03em", marginBottom:6 }}>{learn.heading}</div>
              <div style={{ color:"#8e8e93", fontSize:14, maxWidth:480 }}>{learn.desc}</div>
            </div>
            <span style={{ fontSize:13, color:"#6366f1", fontWeight:600, cursor:"pointer", whiteSpace:"nowrap" }}>Browse all guides →</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {learn.cards.map((c,i)=><SmallCard key={i} item={c}/>)}
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:16 }}>
            {["Crypto Basics","DeFi","Layer 2","Security","NFTs","Trading"].map(t=>(
              <span key={t} style={{ padding:"5px 12px", borderRadius:8, border:"1px solid #2c2c2e", background:"#1c1c1e", fontSize:11, color:"#8e8e93", cursor:"pointer" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ─ COURSES ─ */}
      <div ref={refs.courses} style={{ scrollMarginTop:112 }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"64px 24px", borderBottom:"1px solid #1c1c1e" }}>
          <div style={{ fontSize:11, fontWeight:800, letterSpacing:"0.12em", textTransform:"uppercase", color:"#818cf8", marginBottom:8 }}>🎓 Courses</div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:20 }}>
            <div>
              <div style={{ fontSize:30, fontWeight:900, letterSpacing:"-0.03em", marginBottom:6 }}>
                {level==="newbie"&&"Start from zero"}{level==="intermediate"&&"Level up your DeFi game"}{level==="degen"&&"Master the deep end"}
              </div>
              <div style={{ color:"#8e8e93", fontSize:14, maxWidth:480 }}>
                {level==="newbie"&&"Structured paths with XP, quizzes, and badges. No experience needed."}
                {level==="intermediate"&&"In-depth courses on DeFi, Layer 2, and on-chain strategies."}
                {level==="degen"&&"Advanced courses for experienced traders and protocol researchers."}
              </div>
            </div>
            <span style={{ fontSize:13, color:"#6366f1", fontWeight:600, cursor:"pointer", whiteSpace:"nowrap" }}>All courses →</span>
          </div>

          <div style={{ display:"flex", gap:14, overflowX:"auto", paddingBottom:8, scrollbarWidth:"thin", scrollbarColor:"#3c3c3e transparent" }}>
            {coursesData.map((c,i)=><CourseCard key={i} c={c}/>)}
            <div style={{ flexShrink:0, width:176, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#1c1c1e", border:"1px dashed #3c3c3e", borderRadius:18, padding:20, cursor:"pointer", gap:8, transition:"all .15s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#6366f1";e.currentTarget.style.background="#1c1c2e"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="#3c3c3e";e.currentTarget.style.background="#1c1c1e"}}>
              <span style={{ fontSize:28 }}>🎓</span>
              <span style={{ fontSize:12, fontWeight:700, color:"#8e8e93", textAlign:"center" }}>View All Courses</span>
              <span style={{ fontSize:10, color:"#636366", textAlign:"center" }}>50+ lessons · 5 tracks</span>
            </div>
          </div>

          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 18px", background:"#1c1c1e", border:"1px solid #2c2c2e", borderRadius:14, marginTop:20 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ fontSize:22 }}>⚡</span>
              <div>
                <div style={{ fontSize:13, fontWeight:700 }}>Earn XP as you learn</div>
                <div style={{ fontSize:11, color:"#636366" }}>Complete courses to unlock badges and level up</div>
              </div>
            </div>
            <span style={{ fontSize:12, fontWeight:700, color:"#6366f1", cursor:"pointer" }}>Start earning XP →</span>
          </div>
        </div>
      </div>

      {/* ─ ECOSYSTEM ─ */}
      <div ref={refs.ecosystem} style={{ scrollMarginTop:112 }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"64px 24px", borderBottom:"1px solid #1c1c1e" }}>
          <div style={{ fontSize:11, fontWeight:800, letterSpacing:"0.12em", textTransform:"uppercase", color:"#06b6d4", marginBottom:8 }}>🌐 Ecosystem</div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:16 }}>
            <div>
              <div style={{ fontSize:30, fontWeight:900, letterSpacing:"-0.03em", marginBottom:6 }}>
                {level==="newbie"&&"Start with the best apps"}{level==="intermediate"&&"Top DeFi protocols"}{level==="degen"&&"Elite-tier protocols"}
              </div>
              <div style={{ color:"#8e8e93", fontSize:14, maxWidth:480 }}>
                {level==="newbie"&&"Safest, most popular apps. Wallets, swaps, and simple DeFi — all beginner friendly."}
                {level==="intermediate"&&"Battle-tested DeFi protocols across multiple chains. Lending, liquidity, and staking."}
                {level==="degen"&&"Perpetuals, complex yield strategies, and analytics for serious traders."}
              </div>
            </div>
            <span style={{ fontSize:13, color:"#6366f1", fontWeight:600, cursor:"pointer", whiteSpace:"nowrap" }}>Full App Store →</span>
          </div>

          <div style={{ position:"relative", maxWidth:300, marginBottom:18 }}>
            <span style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", color:"#636366" }}>🔍</span>
            <input value={ecoSearch} onChange={e=>setEcoSearch(e.target.value)} placeholder="Search dApps…"
              style={{ width:"100%", background:"#1c1c1e", border:"1px solid #2c2c2e", borderRadius:12, padding:"9px 14px 9px 34px", fontSize:13, color:"#fff", outline:"none", boxSizing:"border-box" }}
              onFocus={e=>e.target.style.borderColor="#6366f1"} onBlur={e=>e.target.style.borderColor="#2c2c2e"}/>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(176px,1fr))", gap:12 }}>
            {dapps.map((d,i)=><DAppCard key={i} d={d}/>)}
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#1c1c1e", border:"1px dashed #3c3c3e", borderRadius:16, padding:16, cursor:"pointer", minHeight:176, gap:8, transition:"all .15s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#6366f1";e.currentTarget.style.background="#1c1c2e"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="#3c3c3e";e.currentTarget.style.background="#1c1c1e"}}>
              <span style={{ fontSize:24 }}>🌐</span>
              <span style={{ fontSize:12, fontWeight:700, color:"#8e8e93", textAlign:"center" }}>View All 67+</span>
              <span style={{ fontSize:10, color:"#636366", textAlign:"center" }}>15 chains · 16 categories</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─ TOOLS ─ */}
      <div ref={refs.tools} style={{ scrollMarginTop:112 }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"64px 24px", borderBottom:"1px solid #1c1c1e" }}>
          <div style={{ fontSize:11, fontWeight:800, letterSpacing:"0.12em", textTransform:"uppercase", color:"#f59e0b", marginBottom:8 }}>🔧 Tools</div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:20 }}>
            <div>
              <div style={{ fontSize:30, fontWeight:900, letterSpacing:"-0.03em", marginBottom:6 }}>
                {level==="newbie"&&"Tools that make it easy"}{level==="intermediate"&&"Analytical tools"}{level==="degen"&&"Power tools for degens"}
              </div>
              <div style={{ color:"#8e8e93", fontSize:14, maxWidth:480 }}>
                {level==="newbie"&&"Simple, free tools. No signup required."}
                {level==="intermediate"&&"Advanced calculators, charting, and portfolio analytics."}
                {level==="degen"&&"Funding rates, whale tracking, on-chain analytics, and alpha."}
              </div>
            </div>
            <span style={{ fontSize:13, color:"#6366f1", fontWeight:600, cursor:"pointer", whiteSpace:"nowrap" }}>All 92+ tools →</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {tools.map((t,i)=><SmallCard key={i} item={{ title:`${t.emoji} ${t.title}`, desc:t.desc, tag:t.tag, color:t.color }}/>)}
          </div>
        </div>
      </div>

      {/* ─ MISSION ─ */}
      <section style={{ padding:"88px 24px", textAlign:"center", background:"#050507", borderTop:"1px solid #1c1c1e" }}>
        <div style={{ maxWidth:600, margin:"0 auto" }}>
          <div style={{ fontSize:96, fontWeight:900, lineHeight:1, marginBottom:16, background:"linear-gradient(135deg,#6366f1,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>1B</div>
          <h2 style={{ fontSize:26, fontWeight:700, color:"#fff", marginBottom:14 }}>That's our goal. One billion users in Web3.</h2>
          <p style={{ color:"#8e8e93", lineHeight:1.7, fontSize:15, marginBottom:32 }}>
            Not because we think everyone should trade crypto, but because everyone deserves to understand the financial system being built around them. Education is the way in.
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
            <button style={{ padding:"13px 26px", borderRadius:14, background:"linear-gradient(135deg,#6366f1,#4f46e5)", color:"#fff", fontWeight:700, fontSize:15, border:"none", cursor:"pointer" }}>
              🎓 Start Learning Free
            </button>
            <button style={{ padding:"12px 22px", borderRadius:14, background:"#1c1c1e", color:"#8e8e93", fontWeight:500, fontSize:14, border:"1px solid #2c2c2e", cursor:"pointer" }}>
              🌐 Explore dApps
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        ::-webkit-scrollbar { height: 4px; width: 4px; }
        ::-webkit-scrollbar-track { background: #1c1c1e; }
        ::-webkit-scrollbar-thumb { background: #3c3c3e; border-radius: 9px; }
      `}</style>
    </div>
  );
}
