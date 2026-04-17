'use client';
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';
import LiveMiniStat from '@/components/LiveMiniStat';
import AutoTOC from '@/components/AutoTOC';
import ReadingTime from '@/components/ReadingTime';
import LastUpdated from '@/components/LastUpdated';
const S = { bg:"#0d1117",border:"#30363d",text:"#e6edf3",text2:"#8b949e",blue:"#58a6ff",green:"#3fb950",orange:"#f7931a",yellow:"#d29922",purple:"#bc8cff",cyan:"#06b6d4" };
const breadcrumbs = [{label:"Home",href:"/"},{label:"Learn",href:"/learn"},{label:"Bitcoin Ordinals Guide",href:"/learn/bitcoin-ordinals-guide"}];
export default function BitcoinOrdinalsGuidePage() {
  return (
    <main style={{backgroundColor:S.bg,color:S.text,minHeight:"100vh"}}>
      <div style={{borderBottom:`1px solid ${S.border}`,paddingTop:24}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 24px 24px"}}><Breadcrumb items={breadcrumbs}/></div>
      </div>
      <article style={{maxWidth:900,margin:"0 auto",padding:"48px 24px 80px"}}>
        <header style={{marginBottom:48}}>
          <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
            <span style={{fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:`${S.orange}20`,color:S.orange,border:`1px solid ${S.orange}40`}}>₿ Bitcoin</span>
            <span style={{fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20,background:`${S.purple}20`,color:S.purple,border:`1px solid ${S.purple}40`}}>Ordinals & Runes</span>
            <span style={{fontSize:12,color:S.text2}}>Updated March 14, 2026 · 16 min read · +130 XP</span>
          </div>
          <h1 style={{fontSize:"2.4rem",fontWeight:900,lineHeight:1.2,marginBottom:20}}>Bitcoin Ordinals & Runes Guide 2026: NFTs on Bitcoin, BRC-20 Tokens & the New Bitcoin Economy</h1>
          <LastUpdated pathKey="/learn/bitcoin-ordinals-guide" />
          <ReadingTime />
          <AutoTOC />
          <p style={{fontSize:17,color:S.text2,lineHeight:1.75}}>Since January 2023, Bitcoin has developed a vibrant NFT and token ecosystem via Ordinals — a protocol that inscribes data directly onto individual satoshis. Then came BRC-20 tokens and Runes. Bitcoin is no longer just a store of value: it's becoming a programmable asset layer. This guide explains Ordinals, Runes, BRC-20, and why it matters for the Bitcoin ecosystem.</p>
        </header>
        <section style={{marginBottom:40}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:S.orange}}>What Are Ordinals?</h2>
          <p style={{color:S.text2,lineHeight:1.8,marginBottom:16}}>Ordinals (developed by Casey Rodarmor) assign a unique serial number to each of Bitcoin's 2.1 quadrillion satoshis (1 BTC = 100M sats). Rare sats get special numbers based on the Ordinals numbering theory (e.g. the first sat of each block, the first sat of each epoch). "Inscriptions" attach arbitrary data — images, text, code — to a specific sat. That sat+inscription combo is essentially a Bitcoin-native NFT.</p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals.
          </p>
        </div>
          {[
            {title:"How inscriptions work technically",body:"Inscriptions use Bitcoin's Taproot upgrade (activated Nov 2021) to store data in the 'witness' field of a transaction. This data is cheaper to store than regular transaction data. The inscription is permanently stored on Bitcoin's blockchain — fully on-chain, immutable, censorship-resistant."},
            {title:"Sat rarity tiers",body:"Ordinals defines 6 rarity classes: Common (any regular sat), Uncommon (first sat of each block), Rare (first sat of each difficulty adjustment), Epic (first sat of each halving), Legendary (first sat of each cycle), and Mythic (the genesis sat — sat #0). Rare sats command premiums in secondary markets."},
          ].map(item=>(
            <div key={item.title} style={{background:"#161b22",border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 18px",marginBottom:12}}>
              <div style={{fontWeight:700,color:S.text,marginBottom:6}}>{item.title}</div>
              <div style={{fontSize:14,color:S.text2,lineHeight:1.7}}>{item.body}</div>
            </div>
          ))}
        </section>
        <section style={{marginBottom:40}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:S.orange}}>BRC-20 Tokens</h2>
          <p style={{color:S.text2,lineHeight:1.8,marginBottom:16}}>BRC-20 is a fungible token standard built on Ordinals (created by @domodata in March 2023). It uses JSON inscriptions to define token deploy, mint, and transfer operations. Unlike ERC-20 tokens, BRC-20 tokens don't have smart contract logic — transfers are just inscriptions that indexers track off-chain. Top BRC-20 tokens include ORDI (the first), SATS, RATS, and dozens of memecoins.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            {[
              {label:"Total BRC-20 tokens",value:"15,000+",color:S.orange},
              {label:"Peak daily inscriptions",value:"400K+/day",color:S.yellow},
              {label:"ORDI all-time high",value:"~$95",color:S.green},
              {label:"Bitcoin fees (peak 2024)",value:"$100+/tx",color:"#f85149"},
            ].map(item=>(
              <div key={item.label} style={{background:"#161b22",border:`1px solid ${S.border}`,borderRadius:10,padding:"14px"}}>
                <div style={{fontSize:11,color:S.text2,marginBottom:4}}>{item.label}</div>
                <div style={{fontWeight:700,color:item.color,fontSize:18}}>{item.value}</div>
              </div>
            ))}
          </div>
        </section>
        <section style={{marginBottom:40}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:S.orange}}>Runes Protocol (April 2024)</h2>
          <p style={{color:S.text2,lineHeight:1.8,marginBottom:16}}>Casey Rodarmor (creator of Ordinals) launched <strong style={{color:S.text}}>Runes</strong> at the April 2024 Bitcoin halving as a cleaner fungible token standard for Bitcoin. Unlike BRC-20, Runes are UTXO-native: token balances are stored in Bitcoin UTXOs (same as BTC itself), making them more efficient and reducing UTXO bloat. Runes eliminated the need for off-chain indexers that BRC-20 requires.</p>
          <div style={{background:"#161b22",border:`1px solid ${S.orange}40`,borderLeft:`3px solid ${S.orange}`,borderRadius:8,padding:"14px 18px"}}>
            <div style={{fontWeight:700,color:S.orange,marginBottom:6}}>Runes vs BRC-20</div>
            <div style={{fontSize:14,color:S.text2,lineHeight:1.7}}>Runes are more Bitcoin-native, more efficient, and designed to minimise junk UTXOs. They're likely to displace BRC-20 as the dominant Bitcoin token standard over 2025–2026. The first Rune etched was "UNCOMMON•GOODS" by Rodarmor himself at block 840,000.</div>
          </div>
        </section>
        <section style={{marginBottom:40}}>
          <h2 style={{fontSize:"1.5rem",fontWeight:800,marginBottom:12,color:S.orange}}>Bitcoin DeFi: Stacks, Merlin, BOB</h2>
          {[
            {name:"Stacks (STX)",desc:"A Bitcoin L2 with smart contracts. Uses Bitcoin for finality via 'Proof of Transfer'. Home to sBTC — a 1:1 BTC-pegged asset for DeFi use within Stacks apps."},
            {name:"Merlin Chain",desc:"EVM-compatible Bitcoin L2 using ZK-rollup technology. Enables full DeFi (DEXs, lending, perpetuals) with BTC as native gas. Fast-growing in 2024–2025."},
            {name:"BOB (Build on Bitcoin)",desc:"Hybrid Bitcoin+Ethereum L2 using OP Stack. Bridges Bitcoin and EVM, allowing BTC holders to access Ethereum DeFi without custodial bridges."},
          ].map(item=>(
            <div key={item.name} style={{background:"#161b22",border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 18px",marginBottom:12}}>
              <div style={{fontWeight:700,color:S.text,marginBottom:6}}>{item.name}</div>
              <div style={{fontSize:14,color:S.text2,lineHeight:1.7}}>{item.desc}</div>
            </div>
          ))}
        </section>
        <section style={{background:`linear-gradient(135deg,${S.orange}10,${S.yellow}10)`,border:`1px solid ${S.orange}30`,borderRadius:14,padding:"24px 28px"}}>
          <h3 style={{fontWeight:800,marginBottom:8,color:S.text}}>₿ Key takeaway</h3>
          <p style={{color:S.text2,lineHeight:1.8,fontSize:14}}>Ordinals, BRC-20, and Runes have proven that Bitcoin holders want more than just store-of-value utility. The Bitcoin ecosystem is developing its own NFT culture, token economy, and DeFi layer — without changing Bitcoin's base layer. The big opportunity: as Bitcoin's security budget faces long-term pressure from declining block subsidies, fees from Ordinals/Runes activity provide an alternative revenue source for miners — aligning ecosystem incentives.</p>
        </section>
      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/token-vesting-schedule-tracker" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Token Vesting Schedule Tracker</a></li>
            <li><a href="/compare/coinbase-vs-kraken-vs-gemini" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Coinbase Vs Kraken Vs Gemini</a></li>
            <li><a href="/courses/blockchain-developer-course-free" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Blockchain Developer Course Free</a></li>
            <li><a href="/investing/best-ai-crypto-projects-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Ai Crypto Projects 2026</a></li>
          </ul>
        </nav>

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
              "headline": "Bitcoin Ordinals Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/bitcoin-ordinals-guide"
            })
          }}
        />
      </article>
      <LiveMiniStat id="bitcoin" />
      <RelatedContent category="learn" currentSlug="/learn/bitcoin-ordinals-guide" />
    </main>
  );
}
