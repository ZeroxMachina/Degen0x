'use client';
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { ArticleStructuredData, FAQStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";

const S = { bg:"#0d1117",card:"#161b22",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f0883e",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4",red:"#f85149",indigo:"#818cf8" };
const breadcrumbs = [{label:"Home",href:"/"},{label:"Learn",href:"/learn"},{label:"Cross-Chain Intents Guide",href:"/learn/cross-chain-intents-guide"}];

const PROTOCOLS = [
  ["Across Protocol","Intent-based relay with UMA optimistic oracle settlement","ETH, Arbitrum, Optimism, Base, Polygon, zkSync","~$0.04 USDC transfers; sub-minute fills","ERC-7683 co-author"],
  ["UniswapX","Dutch auction intents with off-chain filler competition","Ethereum + major L2s","MEV-protected swaps; gasless for users","ERC-7683 co-author"],
  ["deBridge","Zero-TVL architecture with decentralized validator network","20+ chains incl. Solana","$9.96B+ processed; 1.96s median fill","DLN order system"],
  ["NEAR Intents","Chain-abstraction layer assembling optimal cross-chain paths","NEAR, ETH, BTC, Solana, TON","Account aggregation; one-click UX","AI-powered routing"],
  ["Cowswap","Batch auction intents with solver competition (CoW Protocol)","Ethereum, Gnosis","MEV protection; surplus sharing with users","Coincidence of Wants"],
];

const TOC = [
  {id:"what-are-intents",label:"1. What Are Cross-Chain Intents?"},
  {id:"bridges-vs-intents",label:"2. Bridges vs. Intents: What Changed"},
  {id:"erc-7683",label:"3. ERC-7683: The Universal Standard"},
  {id:"how-intents-work",label:"4. How Intent Settlement Works"},
  {id:"top-protocols",label:"5. Top Intent Protocols (2026)"},
  {id:"risks",label:"6. Risks & Limitations"},
  {id:"future",label:"7. The Future: Chain Abstraction"},
  {id:"faq",label:"FAQ"},
];

const FAQS = [
  {question:"What are cross-chain intents in crypto?",answer:"Cross-chain intents let users specify a desired outcome (e.g. 'swap 1 ETH on Arbitrum for USDC on Base') without choosing how the transaction executes. A competitive network of solvers called 'fillers' races to fulfill the intent as fast and cheaply as possible, abstracting away bridge mechanics entirely."},
  {question:"How is ERC-7683 different from a bridge?",answer:"Traditional bridges require users to interact with specific bridge contracts, wait for finality, and often receive wrapped tokens. ERC-7683 defines a standard 'order' format that any solver can fill — users get native assets, faster execution, and lower fees because fillers compete on price."},
  {question:"Is ERC-7683 safe to use?",answer:"ERC-7683 itself is an interface standard, not a smart contract, so it has no direct attack surface. The security depends on the settlement system (e.g. Across uses UMA's optimistic oracle, UniswapX uses Dutch auctions). Intent-based systems generally reduce bridge TVL risk because fillers use their own capital rather than pooled user funds."},
  {question:"Which protocols support ERC-7683?",answer:"As of March 2026, Across Protocol and UniswapX are the primary ERC-7683 implementations. The standard is gaining adoption across the intent ecosystem as fillers can serve multiple protocols through a single integration."},
  {question:"What is a filler in cross-chain intents?",answer:"A filler (also called a solver or relayer) is a third party that fulfills user intents by fronting their own capital. When you submit an intent to swap tokens cross-chain, fillers compete to fill your order at the best price. They're later reimbursed by the protocol's settlement layer."},
  {question:"Do cross-chain intents work with non-EVM chains like Solana?",answer:"Yes. While ERC-7683 is an Ethereum standard, protocols like deBridge and NEAR Intents already support Solana, Bitcoin, and other non-EVM chains through their own intent systems. The concept of intent-based execution is chain-agnostic even if the specific standard is EVM-focused."},
];

export default function CrossChainIntentsGuidePage() {
  return (
    <main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh"}}>
      <ArticleStructuredData
        title="Cross-Chain Intents Guide 2026 — ERC-7683 & Beyond"
        description="Complete guide to cross-chain intents: how they replace bridges, the ERC-7683 standard, top protocols like Across and UniswapX, and what chain abstraction means for crypto."
        datePublished="2026-03-29T00:00:00Z"
        dateModified="2026-03-29T00:00:00Z"
        slug="learn/cross-chain-intents-guide"
      />
      <FAQStructuredData questions={FAQS} />
      <BreadcrumbStructuredData items={[{name:"Home",href:"/"},{name:"Learn",href:"/learn"},{name:"Cross-Chain Intents Guide",href:"/learn/cross-chain-intents-guide"}]} />

      <div style={{borderBottom:`1px solid ${S.border}`,paddingTop:24}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 24px 24px"}}><Breadcrumb items={breadcrumbs}/></div>
      </div>

      <article style={{maxWidth:900,margin:"0 auto",padding:"48px 24px 80px"}}>
        {/* ── Header ── */}
        <header style={{marginBottom:48}}>
          <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
            <span style={{fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:`${S.indigo}20`,color:S.indigo,border:`1px solid ${S.indigo}40`}}>🔗 Intents</span>
            <span style={{fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:`${S.cyan}20`,color:S.cyan,border:`1px solid ${S.cyan}40`}}>Interoperability</span>
            <span style={{fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`}}>Advanced</span>
            <span style={{fontSize:12,color:S.text2}}>Updated March 2026 · 14 min read · +150 XP</span>
          </div>
          <h1 style={{fontSize:"2.4rem",fontWeight:900,lineHeight:1.2,marginBottom:20,background:`linear-gradient(135deg, ${S.indigo}, ${S.cyan})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
            Cross-Chain Intents Guide 2026: ERC-7683, Fillers & the End of Traditional Bridges
          </h1>
          <p style={{fontSize:17,color:S.text2,lineHeight:1.75}}>
            Cross-chain intents let you say <em>"I want 1,000 USDC on Base"</em> and a network of competing solvers figures out the fastest, cheapest way to make it happen — no bridge UI, no wrapped tokens, no waiting for finality. Powered by the ERC-7683 standard from Uniswap Labs and Across Protocol, intents are replacing traditional bridges as the default way to move value across chains in 2026.
          </p>
        </header>

        {/* ── Table of Contents ── */}
        <nav style={{background:S.card,border:`1px solid ${S.border}`,borderRadius:12,padding:20,marginBottom:40}}>
          <h2 style={{fontSize:14,fontWeight:700,marginBottom:12,color:S.blue}}>Table of Contents</h2>
          <ol style={{paddingLeft:20,color:S.text2,fontSize:14,lineHeight:2.2,margin:0}}>
            {TOC.map(t=><li key={t.id}><a href={`#${t.id}`} style={{color:S.blue,textDecoration:"none"}}>{t.label.replace(/^\d+\.\s/,"")}</a></li>)}
          </ol>
        </nav>

        {/* ── Section 1: What Are Intents? ── */}
        <section id="what-are-intents" style={{marginBottom:48}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:14,color:S.indigo}}>1. What Are Cross-Chain Intents?</h2>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8,marginBottom:16}}>
            An <strong style={{color:S.text}}>intent</strong> is a signed message that describes a desired outcome rather than a specific execution path. Instead of telling a blockchain <em>"call this bridge contract, lock these tokens, wait for confirmation, then release on the other side,"</em> you simply declare: <em>"I have 1 ETH on Arbitrum and I want USDC on Base."</em>
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8,marginBottom:16}}>
            A network of third-party <strong style={{color:S.text}}>fillers</strong> (also called solvers or relayers) competes to execute your intent. The fastest filler fronts their own capital to give you USDC on Base immediately, then gets reimbursed through a settlement layer. You get native assets — no wrapped tokens, no multi-step UX, and typically sub-minute execution.
          </p>
          <div style={{background:S.card,border:`1px solid ${S.border}`,borderLeft:`3px solid ${S.indigo}`,borderRadius:8,padding:"14px 18px",marginBottom:16}}>
            <div style={{fontWeight:700,color:S.indigo,marginBottom:6,fontSize:14}}>💡 Key Insight</div>
            <div style={{fontSize:14,color:S.text2,lineHeight:1.7}}>
              Intents flip the execution model: instead of users navigating complex bridge UIs, professional market makers compete for the privilege of filling your order. This competition drives costs down and speeds up — similar to how order flow works in traditional finance.
            </div>
          </div>
        </section>

        {/* ── Section 2: Bridges vs. Intents ── */}
        <section id="bridges-vs-intents" style={{marginBottom:48}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:14,color:S.indigo}}>2. Bridges vs. Intents: What Changed</h2>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8,marginBottom:16}}>
            Traditional bridges dominated cross-chain transfers from 2020-2024. They worked, but came with serious trade-offs: over <strong style={{color:S.orange}}>$2.5B lost to bridge hacks</strong>, wrapped tokens that fragment liquidity, 10-30 minute wait times for optimistic rollup withdrawals, and UIs that require users to understand which bridge supports which chain.
          </p>
          <div style={{overflowX:"auto",WebkitOverflowScrolling:"touch",marginBottom:16}}>
            <table style={{width:"100%",minWidth:560,borderCollapse:"collapse",fontSize:13}}>
              <thead><tr style={{borderBottom:`1px solid ${S.border}`}}>
                {["","Traditional Bridges","Intent-Based Systems"].map(h=><th key={h} style={{padding:"10px 12px",textAlign:"left",color:S.text2,fontWeight:600,fontSize:12}}>{h}</th>)}
              </tr></thead>
              <tbody>
                {[
                  ["Execution","User specifies path (which bridge, which route)","User specifies outcome (what they want)"],
                  ["Speed","Minutes to hours (depends on finality)","Seconds to minutes (filler fronts capital)"],
                  ["Tokens","Often wrapped (wETH, wBTC)","Native assets on destination"],
                  ["TVL Risk","Large locked pools = honeypot for hackers","Zero-TVL or minimal — fillers use own capital"],
                  ["Cost","Fixed bridge fees + gas on both chains","Competitive — fillers bid against each other"],
                  ["UX","Select bridge → approve → bridge → wait → claim","Sign intent → receive tokens"],
                ].map((row,i)=><tr key={i} style={{borderBottom:`1px solid ${S.border}`}}>
                  {row.map((cell,j)=><td key={j} style={{padding:"10px 12px",color:j===0?S.text:j===1?S.orange:S.green,fontWeight:j===0?600:400,fontSize:13}}>{cell}</td>)}
                </tr>)}
              </tbody>
            </table>
          </div>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8}}>
            The shift is clear: by Q1 2026, intent-based protocols handle the majority of cross-chain volume on Ethereum L2s, with Across Protocol alone processing transfers at a median time of under 2 seconds. Learn more about bridge fundamentals in our <a href="/learn/cross-chain-bridges-guide" style={{color:S.blue,textDecoration:"none"}}>cross-chain bridges guide</a>.
          </p>
        </section>

        {/* ── Section 3: ERC-7683 ── */}
        <section id="erc-7683" style={{marginBottom:48}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:14,color:S.indigo}}>3. ERC-7683: The Universal Intents Standard</h2>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8,marginBottom:16}}>
            <strong style={{color:S.text}}>ERC-7683</strong> is an Ethereum standard proposed by Uniswap Labs and Across Protocol that defines a common interface for cross-chain trade execution. Before ERC-7683, every intent protocol had its own order format — fillers had to integrate with each one separately, fragmenting the solver network and reducing competition.
          </p>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8,marginBottom:16}}>
            The standard defines two core interfaces:
          </p>
          <div style={{display:"grid",gap:12,marginBottom:16}}>
            {[
              {name:"CrossChainOrder",desc:"A struct defining the user's intent: input token/amount, output token/amount, source chain, destination chain, and a deadline. Any protocol can implement this — the order looks the same whether it comes from UniswapX, Across, or a new protocol.",color:S.cyan},
              {name:"ISettlementContract",desc:"The on-chain contract that verifies a filler has correctly fulfilled an order and handles reimbursement. Each protocol implements its own settlement logic (optimistic oracle, Dutch auction, ZK proof) while conforming to the standard interface.",color:S.green},
            ].map(item=>(
              <div key={item.name} style={{background:S.card,border:`1px solid ${S.border}`,borderLeft:`3px solid ${item.color}`,borderRadius:8,padding:"14px 18px"}}>
                <code style={{fontWeight:700,color:item.color,fontSize:14}}>{item.name}</code>
                <div style={{fontSize:14,color:S.text2,lineHeight:1.7,marginTop:6}}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div style={{background:`linear-gradient(135deg,${S.indigo}10,${S.cyan}10)`,border:`1px solid ${S.indigo}30`,borderRadius:12,padding:"18px 22px",marginBottom:16}}>
            <div style={{fontWeight:700,color:S.text,marginBottom:6,fontSize:14}}>⚡ Why This Matters</div>
            <div style={{fontSize:14,color:S.text2,lineHeight:1.7}}>
              A unified filler network means more competition, which means lower costs for users. A filler that integrates with ERC-7683 can fill orders from any compliant protocol — one integration, access to all order flow. This is the same logic that made ERC-20 powerful: standardization creates network effects.
            </div>
          </div>
        </section>

        {/* ── Section 4: How Intents Work ── */}
        <section id="how-intents-work" style={{marginBottom:48}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:14,color:S.indigo}}>4. How Intent Settlement Works</h2>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8,marginBottom:16}}>
            The intent lifecycle has four stages. Here's what happens when you submit a cross-chain intent:
          </p>
          {[
            {step:"1",title:"User Signs Intent",desc:"You sign an off-chain message specifying: input token & amount, desired output token & amount, source chain, destination chain, and a deadline. No on-chain transaction yet — signing is free.",color:S.cyan,icon:"✍️"},
            {step:"2",title:"Fillers Compete",desc:"Your signed intent is broadcast to the filler network. Professional market makers evaluate the order: can they fill it profitably? Multiple fillers bid, and the best offer wins. In UniswapX, this happens via a Dutch auction where the price improves over time until a filler bites.",color:S.green,icon:"🏁"},
            {step:"3",title:"Execution",desc:"The winning filler sends you native tokens on the destination chain using their own capital. You receive your USDC on Base (or whatever you requested) within seconds. The filler takes on the cross-chain settlement risk, not you.",color:S.yellow,icon:"⚡"},
            {step:"4",title:"Settlement",desc:"The filler proves they fulfilled the order and gets reimbursed from the source chain. Across uses UMA's optimistic oracle (anyone can dispute within a challenge period). UniswapX uses on-chain verification of the fill. The user's locked tokens are released to the filler.",color:S.indigo,icon:"✅"},
          ].map(item=>(
            <div key={item.step} style={{display:"flex",gap:16,marginBottom:16,alignItems:"flex-start"}}>
              <div style={{minWidth:44,height:44,borderRadius:"50%",background:`${item.color}20`,border:`2px solid ${item.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{item.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,color:item.color,fontSize:15,marginBottom:4}}>{item.title}</div>
                <div style={{fontSize:14,color:S.text2,lineHeight:1.7}}>{item.desc}</div>
              </div>
            </div>
          ))}
        </section>

        {/* ── Section 5: Top Protocols ── */}
        <section id="top-protocols" style={{marginBottom:48}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:16,color:S.indigo}}>5. Top Cross-Chain Intent Protocols (2026)</h2>
          <div style={{overflowX:"auto",WebkitOverflowScrolling:"touch",marginBottom:16}}>
            <table style={{width:"100%",minWidth:700,borderCollapse:"collapse",fontSize:13}}>
              <thead><tr style={{borderBottom:`1px solid ${S.border}`}}>
                {["Protocol","Mechanism","Chains","Key Stats","Notable"].map(h=><th key={h} style={{padding:"10px 12px",textAlign:"left",color:S.text2,fontWeight:600,fontSize:11,whiteSpace:"nowrap"}}>{h}</th>)}
              </tr></thead>
              <tbody>
                {PROTOCOLS.map((row,i)=><tr key={i} style={{borderBottom:`1px solid ${S.border}`}}>
                  {row.map((cell,j)=><td key={j} style={{padding:"10px 12px",color:j===0?S.cyan:S.text2,fontWeight:j===0?600:400,fontSize:13}}>{cell}</td>)}
                </tr>)}
              </tbody>
            </table>
          </div>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8}}>
            Compare bridge fees and speeds for your specific route using our <a href="/tools/bridge-aggregator" style={{color:S.blue,textDecoration:"none"}}>bridge aggregator tool</a>, or monitor real-time bridge activity with the <a href="/tools/bridge-monitor" style={{color:S.blue,textDecoration:"none"}}>bridge monitor</a>.
          </p>
        </section>

        {/* ── Section 6: Risks ── */}
        <section id="risks" style={{marginBottom:48}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:14,color:S.indigo}}>6. Risks & Limitations</h2>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8,marginBottom:16}}>
            Intents are a major improvement over traditional bridges, but they're not without risks. Here's what to watch for:
          </p>
          {[
            {risk:"Filler Centralization",desc:"If too few fillers dominate the network, competition drops and spreads widen. Some intent protocols currently rely on a handful of professional market makers. ERC-7683 aims to solve this by creating a universal filler pool, but adoption is still early.",color:S.orange},
            {risk:"Settlement Delays",desc:"While users get fast fills, the filler's reimbursement depends on the settlement mechanism. Optimistic systems (like Across) have challenge periods. If a dispute occurs, settlement can be delayed. Users aren't affected, but this impacts filler capital efficiency.",color:S.yellow},
            {risk:"Oracle Risk",desc:"Some settlement systems rely on oracles to verify cross-chain state. Oracle manipulation or downtime could theoretically allow fraudulent fills to be reimbursed. Across mitigates this with UMA's dispute system; other protocols use different verification methods.",color:S.red},
            {risk:"Non-EVM Gaps",desc:"ERC-7683 is an EVM-native standard. Cross-chain intents involving Solana, Bitcoin, or Cosmos require protocol-specific implementations. Standardization for non-EVM intents is still an open problem.",color:S.purple},
            {risk:"Smart Contract Risk",desc:"The settlement contracts that reimburse fillers are still smart contracts, and smart contracts can have bugs. Major intent protocols have undergone multiple audits, but risk is never zero.",color:S.text2},
          ].map(item=>(
            <div key={item.risk} style={{background:S.card,border:`1px solid ${S.border}`,borderLeft:`3px solid ${item.color}`,borderRadius:8,padding:"14px 18px",marginBottom:12}}>
              <div style={{fontWeight:700,color:item.color,marginBottom:4,fontSize:14}}>⚠️ {item.risk}</div>
              <div style={{fontSize:14,color:S.text2,lineHeight:1.7}}>{item.desc}</div>
            </div>
          ))}
        </section>

        {/* ── Section 7: Future ── */}
        <section id="future" style={{marginBottom:48}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:14,color:S.indigo}}>7. The Future: From Intents to Chain Abstraction</h2>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8,marginBottom:16}}>
            Cross-chain intents are a stepping stone to <strong style={{color:S.text}}>chain abstraction</strong> — a future where users don't know or care which chain their assets are on. NEAR's chain signatures, Particle Network's Universal Accounts, and projects like Socket are building toward a world where your wallet balance is just "1,000 USDC" — not "400 on Arbitrum, 300 on Base, 300 on Optimism."
          </p>
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8,marginBottom:16}}>
            Key trends to watch in 2026 and beyond:
          </p>
          {[
            {trend:"AI-Powered Solvers",desc:"Machine learning models are being used to optimize filler strategies — predicting gas costs, routing through multiple venues, and even anticipating user demand before intents are submitted.",color:S.cyan},
            {trend:"Gasless Execution",desc:"Intent protocols can batch multiple users' orders and subsidize gas costs from the spread. UniswapX already offers gasless swaps — expect this to become the norm for all cross-chain activity.",color:S.green},
            {trend:"Intent Composability",desc:"Future standards may allow chaining intents: 'swap ETH for USDC, bridge to Base, deposit into Aave' — all expressed as a single signed message and executed atomically by a solver.",color:S.indigo},
          ].map(item=>(
            <div key={item.trend} style={{background:S.card,border:`1px solid ${S.border}`,borderLeft:`3px solid ${item.color}`,borderRadius:8,padding:"14px 18px",marginBottom:12}}>
              <div style={{fontWeight:700,color:item.color,marginBottom:4,fontSize:14}}>🔮 {item.trend}</div>
              <div style={{fontSize:14,color:S.text2,lineHeight:1.7}}>{item.desc}</div>
            </div>
          ))}
          <p style={{fontSize:15,color:"#c9d1d9",lineHeight:1.8,marginTop:16}}>
            For a deeper look at how DeFi protocols are evolving, check out our guides on <a href="/learn/defi-guide" style={{color:S.blue,textDecoration:"none"}}>DeFi fundamentals</a>, <a href="/learn/layer-2-scaling-guide" style={{color:S.blue,textDecoration:"none"}}>L2 scaling</a>, and <a href="/learn/ethereum-rollups-guide" style={{color:S.blue,textDecoration:"none"}}>Ethereum rollups</a>.
          </p>
        </section>

        {/* ── Key Takeaway Box ── */}
        <section style={{background:`linear-gradient(135deg,${S.indigo}10,${S.cyan}10)`,border:`1px solid ${S.indigo}30`,borderRadius:14,padding:"24px 28px",marginBottom:48}}>
          <h3 style={{fontWeight:800,marginBottom:8,color:S.text}}>🔗 Key Takeaway</h3>
          <p style={{color:S.text2,lineHeight:1.8,fontSize:14}}>
            Cross-chain intents represent a fundamental shift: instead of users navigating bridge UIs, they express what they want and let market makers compete to deliver it. <strong style={{color:S.text}}>ERC-7683</strong> standardizes this model across protocols, creating a unified filler network that drives down costs and speeds up execution. For most users in 2026, intent-based systems like <strong style={{color:S.text}}>Across</strong> and <strong style={{color:S.text}}>UniswapX</strong> are already the fastest and cheapest way to move value between chains.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{marginBottom:48}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:20,color:S.indigo}}>Frequently Asked Questions</h2>
          {FAQS.map((faq,i)=>(
            <div key={i} style={{background:S.card,border:`1px solid ${S.border}`,borderRadius:10,padding:"16px 20px",marginBottom:12}}>
              <h3 style={{fontSize:15,fontWeight:700,color:S.text,marginBottom:8}}>{faq.question}</h3>
              <p style={{fontSize:14,color:S.text2,lineHeight:1.7,margin:0}}>{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* ── Disclaimer ── */}
        <div style={{background:`${S.yellow}10`,border:`1px solid ${S.yellow}30`,borderRadius:10,padding:"14px 18px",fontSize:13,color:S.yellow,lineHeight:1.7}}>
          ⚠️ This guide is for informational purposes only. It is not financial advice. Cross-chain transactions carry inherent smart contract and oracle risks. Always do your own research before interacting with any protocol.
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Cross Chain Intents Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/cross-chain-intents-guide"
            })
          }}
        />
      </article>
      <BackToTop />
    </main>
  );
}
