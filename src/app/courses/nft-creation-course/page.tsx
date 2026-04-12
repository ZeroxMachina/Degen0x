import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Best NFT Creation Courses 2026: Art, Minting, Smart Contracts, Marketing',
  description: 'Complete NFT creation guide: art design, smart contracts (ERC721), minting on Ethereum/Solana, OpenSea listing, community building, marketing strategies. Beginner to professional.',
  keywords: ['NFT course', 'NFT creation', 'NFT minting', 'smart contracts', 'ERC721', 'OpenSea', 'digital art', 'blockchain art'],
  openGraph: {
    type: 'article',
    title: 'Best NFT Creation Courses 2026',
    description: 'Learn to create and sell NFTs: art design, minting, smart contracts, marketing.',
    publishedTime: '2026-04-11T00:00:00Z',
    modifiedTime: '2026-04-11T00:00:00Z',
    url: 'https://degen0x.com/courses/nft-creation-course',
    images: [{ url: 'https://degen0x.com/og-courses.svg', width: 1200, height: 630, alt: 'NFT Creation Courses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best NFT Creation Courses 2026',
    description: 'Create NFTs: art, smart contracts, minting, OpenSea, marketing.',
    image: 'https://degen0x.com/og-courses.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/courses/nft-creation-course',
  };
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best NFT Creation Courses 2026: Complete Art-to-Launch Guide',
  description: 'Comprehensive guide to NFT creation: art design tools, smart contract development (Solidity/ERC721), minting strategies, community building, launch marketing.',
  image: 'https://degen0x.com/og-courses.svg',
  datePublished: '2026-04-11',
  dateModified: '2026-04-11',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the best free NFT creation courses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Top free courses: (1) OpenSea Creator Guide (official, 2-3 hours), (2) freeCodeCamp "NFT Creation" (YouTube, 4 hours), (3) Thirdweb Academy (templates + tutorials, 6 hours), (4) NFT School (free curriculum). Paid ($20-100): Udemy "Complete NFT Course" covers full stack (art, Solidity, marketing). Free + paid combined: 12-20 hours to launch.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I create and mint an NFT step-by-step?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Step 1 (Art, 2-6 hours): Design in Photoshop, Blender, or use AI (Midjourney, DALL-E). Step 2 (IPFS, 30 min): Upload to Pinata or nft.storage (free). Step 3 (Smart Contract, 1-4 hours): Use OpenSea no-code or write Solidity ERC721. Step 4 (Mint, 30 min-2 hours): Deploy to Ethereum/Solana, pay gas ($20-100 Ethereum, $0.05-1 Solana). Step 5 (List, 30 min): Upload metadata, list on OpenSea/Magic Eden. Total: 6-16 hours. Cost: $20-150 including gas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I create NFTs without coding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'YES. No-code tools: (1) OpenSea Studio (upload image, auto-mint), (2) Rarible (drag-drop NFT creation), (3) Thirdweb (contract templates), (4) Manifold Studio (creator tools). These handle smart contracts for you. Learning curve: 1-2 hours. Cost: gas only ($20-100 Ethereum, $0.05-1 Solana). If you want custom contracts: learn Solidity (2-4 weeks), but most creators skip this.',
        },
      },
      {
        '@type': 'Question',
        name: 'What blockchain should I mint NFTs on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ethereum: highest liquidity, $20-100 gas per mint, large collector base. Solana: cheapest ($0.05-1 per mint), growing adoption, lower trading volume. Polygon: low cost, moderate liquidity. Recommendation for beginners: Start Solana (cheap experimentation), build 50-200 NFTs, then graduate to Ethereum for access to deep liquidity. Multi-chain strategy: deploy on 2-3 chains to maximize reach.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much money can I earn from NFT sales?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reality check: 5-10% of creators earn profit. Average successful creator: $1K-50K. Top 1%: $100K-1M+. Most: $0-100. Success depends: art quality (40%), community building (40%), timing/luck (20%). If you treat it as side hustle (1-2 hours/week), expect $0-5K in first 6 months. Full-time effort with good community: $10K-100K+ annually.',
        },
      },
      {
        '@type': 'Question',
        name: 'What art tools do I need to create NFTs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Free tools: GIMP (2D), Blender (3D), Krita (painting), Aseprite (pixel art). Paid: Photoshop ($55/mo), Procreate ($13 iPad), Substance 3D ($20/mo). AI: Midjourney ($20/mo), DALL-E ($0.02/image), Stable Diffusion (free). Recommendation: start free tools (GIMP + Midjourney), learn for 2-4 weeks, upgrade if professional quality needed. Cost: $0-50/month.',
        },
      },
    ],
  },
};

export default function NFTCreationCourseExpanded() {
  const infoBoxStyle = { background: '#161b22', border: '1px solid #30363d', borderLeft: '3px solid #38bdf8', borderLeft: '3px solid #38bdf8', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };
  const h1Style = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };
  const h2Style = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#38bdf8', borderBottom: '2px solid #0c4a6e', paddingBottom: 12, };
  const linkStyle = { color: '#58a6ff', textDecoration: 'none' };
  const badgeStyle = { display: 'inline-block' as const, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16 };
  const tableStyle = { width: '100%', borderCollapse: 'collapse' as const, marginBottom: 24, fontSize: 13 };
  const thStyle = { background: '#0d1117', border: '1px solid #30363d', padding: 12, textAlign: 'left' as const, fontWeight: 700, color: '#e6edf3' };
  const tdStyle = { border: '1px solid #30363d', padding: 12, color: '#8b949e' };

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/courses" style={{ color: '#8b949e', textDecoration: 'none' }}>Courses</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>NFT Creation</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#ec4899', color: '#fff' }}>NFT</span>
            <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Creation</span>
          </div>

          <h1 style={h1Style}>NFT Creation Courses 2026</h1>

          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Complete guide to creating and launching NFTs. Learn art design, smart contracts (ERC721), minting on Ethereum/Solana, OpenSea optimization, community building, and proven marketing strategies. Beginner to professional artist path.
          </p>

          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 11, 2026</span>
            <span>Reading time: 13 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-11"
          updatedDate="2026-04-11"
          readingTime={13}
          section="courses"
        />


        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: '#58a6ff' }}>
            <li style={{ marginBottom: 8 }}><a href="#nft-fundamentals" style={linkStyle}>NFT Fundamentals</a></li>
            <li style={{ marginBottom: 8 }}><a href="#art-design" style={linkStyle}>Art Design &amp; Tools</a></li>
            <li style={{ marginBottom: 8 }}><a href="#smart-contracts" style={linkStyle}>Smart Contracts ERC721</a></li>
            <li style={{ marginBottom: 8 }}><a href="#minting-strategy" style={linkStyle}>Minting Strategy</a></li>
            <li style={{ marginBottom: 8 }}><a href="#community-marketing" style={linkStyle}>Community &amp; Marketing</a></li>
            <li style={{ marginBottom: 8 }}><a href="#top-courses" style={linkStyle}>Top NFT Courses</a></li>
            <li style={{ marginBottom: 8 }}><a href="#faq" style={linkStyle}>FAQ</a></li>
          </ol>
        </nav>

        <section id="nft-fundamentals" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. NFT Fundamentals</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            NFT = Non-Fungible Token. Unique digital asset on blockchain. Each has distinct metadata: image, properties, rarity, history. Ownership verified on-chain. Trading happens on OpenSea, Magic Eden, Blur, and other marketplaces.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#081a2d', border: '1px solid #0c4a6e', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🎓</span>
            <strong style={{ color: '#38bdf8', fontSize: 15 }}>Learning Path</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We evaluate courses by completion rates and real-world applicability, not just content volume. A focused 4-hour course often beats a sprawling 40-hour program.
          </p>
        </div>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            NFT market 2026: $4-5B annual trading volume (down from 2022 peak of $40B). Main categories: PFPs (profile pictures, 20% of market), gaming assets (35%), art (15%), collectibles (30%). Shift from speculation to utility: verified credentials, membership passes, real-world asset integration gaining traction.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>NFT Standards &amp; Blockchains</strong>
            <ul style={{ color: '#c9d1d9', paddingLeft: 20, marginTop: 12, marginBottom: 0 }}>
              <li style={{ marginBottom: 8 }}><strong>ERC721 (Ethereum):</strong> Standard for unique NFTs. One token = one asset. Most adopted. High gas fees ($20-100 per mint).</li>
              <li style={{ marginBottom: 8 }}><strong>ERC1155 (Ethereum):</strong> Multi-token standard. One contract = multiple assets. More efficient, slightly cheaper.</li>
              <li style={{ marginBottom: 8 }}><strong>SPL (Solana):</strong> Solana&apos;s NFT standard. Ultra-cheap ($0.05-1 per mint). Growing ecosystem (Magic Eden dominates).</li>
              <li><strong>Polygon, Arbitrum, Base:</strong> Ethereum Layer 2s. Lower gas, moderate liquidity. Good for experimentation.</li>
            </ul>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Recommendation: Solana for beginners (cheap, experiment freely), Ethereum for reaching serious collectors (high liquidity despite gas).
          </p>
        </section>

        <section id="art-design" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Art Design &amp; Tools</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Quality art is 40% of NFT success. No special software required—any image/video works. But higher quality increases perceived value and marketability. Start with free tools, upgrade if scaling professionally.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Art Creation Tools (Free to Paid)</strong>
            <table style={tableStyle}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={thStyle}><strong>Category</strong></td>
                  <td style={thStyle}><strong>Tools</strong></td>
                  <td style={thStyle}><strong>Cost</strong></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>2D Drawing</td>
                  <td style={tdStyle}>GIMP (free), Photoshop ($55/mo), Procreate ($13, iPad)</td>
                  <td style={tdStyle}>$0-55/mo</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>3D Modeling</td>
                  <td style={tdStyle}>Blender (free), Cinema 4D ($680/year), Maya ($235/mo)</td>
                  <td style={tdStyle}>$0-680/year</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>AI Art</td>
                  <td style={tdStyle}>Midjourney ($20/mo), DALL-E ($0.02/image), Stable (free)</td>
                  <td style={tdStyle}>$0-20/mo</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>Pixel Art</td>
                  <td style={tdStyle}>Aseprite ($20 one-time), Piskel (free)</td>
                  <td style={tdStyle}>$0-20</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Animation</td>
                  <td style={tdStyle}>Blender (free), After Effects ($55/mo)</td>
                  <td style={tdStyle}>$0-55/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Beginner path: GIMP + Midjourney (total $20/mo), learn for 2-4 weeks, then decide if upgrading. Most successful NFT artists: strong art direction (even if tools are modest), consistent style, community engagement.
          </p>
        </section>

        <section id="smart-contracts" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Smart Contracts &amp; ERC721</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Smart contracts govern NFT creation, ownership, and trading. ERC721 is the standard. You don&apos;t need to write contracts yourself—use templates. But understanding them helps optimize gas and control fees.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Minting Options Comparison</strong>
            <ul style={{ color: '#c9d1d9', paddingLeft: 20, marginTop: 12, marginBottom: 0 }}>
              <li style={{ marginBottom: 12 }}><strong>OpenSea Studio (No-Code):</strong> Upload image, set metadata, free mint. No contract writing. Best for: artists, non-technical creators. Time: 1 hour. Cost: gas only.</li>
              <li style={{ marginBottom: 12 }}><strong>Thirdweb (Templates):</strong> Pre-built ERC721 contracts. Deploy via UI. Gas: $50-200. Time: 1-2 hours. Best for: launching collections quickly.</li>
              <li style={{ marginBottom: 12 }}><strong>Hardhat + Solidity (Code):</strong> Write custom contract. Full control. Requires Solidity knowledge (2-4 weeks to learn). Gas: $100-300. Time: 4-8 hours for custom contract.</li>
              <li><strong>OpenZeppelin (Library):</strong> Audited ERC721 contracts. Safest option if coding. Most dev teams use this as base.</li>
            </ul>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Recommendation: Start OpenSea Studio (1 hour, minimal cost). If scaling: Thirdweb templates (1-2 hours, slightly more control). Solidity custom only if: maximizing gas efficiency or needing custom mechanics.
          </p>
        </section>

        <section id="minting-strategy" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Minting Strategy &amp; Blockchain Choice</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Strategic minting maximizes reach and minimizes costs. Choose blockchain based on your audience. Test on cheap chain first, graduate to premium chains once validated.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Blockchain Comparison for NFTs</strong>
            <table style={tableStyle}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={thStyle}><strong>Chain</strong></td>
                  <td style={thStyle}><strong>Gas Cost</strong></td>
                  <td style={thStyle}><strong>Liquidity</strong></td>
                  <td style={thStyle}><strong>Best For</strong></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>Ethereum</td>
                  <td style={tdStyle}>$20-100</td>
                  <td style={tdStyle}>Highest</td>
                  <td style={tdStyle}>Professional artists, high-value NFTs</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>Solana</td>
                  <td style={tdStyle}>$0.05-1</td>
                  <td style={tdStyle}>Growing</td>
                  <td style={tdStyle}>Beginners, experimentation, bulk minting</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>Polygon</td>
                  <td style={tdStyle}>$1-5</td>
                  <td style={tdStyle}>Moderate</td>
                  <td style={tdStyle}>Lower-cost scaling on Ethereum network</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Base/Arbitrum</td>
                  <td style={tdStyle}>$0.10-2</td>
                  <td style={tdStyle}>Growing</td>
                  <td style={tdStyle}>Ethereum ecosystem builders</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Launch strategy: Mint 50-100 on Solana (cost: $2.50-100, low risk). Build 2-3 months of community. If successful, launch collection on Ethereum for serious buyers. Multi-chain: list same art on 2-3 chains to maximize visibility.
          </p>
        </section>

        <section id="community-marketing" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Community Building &amp; Marketing</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Community is 40% of NFT success. Art quality + marketing effort beats quality alone. Build before launch. Most successful creators: 3-6 months of community engagement pre-launch.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Pre-Launch Marketing (3-6 Months)</strong>
            <ul style={{ color: '#c9d1d9', paddingLeft: 20, marginTop: 12, marginBottom: 0 }}>
              <li style={{ marginBottom: 8 }}><strong>Twitter/X:</strong> 1-2 posts daily. Behind-scenes art. Engage 50+ community members daily. Build to 2K-5K followers pre-launch.</li>
              <li style={{ marginBottom: 8 }}><strong>Discord:</strong> Build community server. Host events, AMAs (Ask Me Anything), reveal art teasers. Target 500-2K members pre-launch.</li>
              <li style={{ marginBottom: 8 }}><strong>Website/Landing Page:</strong> Simple site with artist bio, roadmap, how to mint. Use Webflow, Framer, or WordPress.</li>
              <li style={{ marginBottom: 8 }}><strong>Storytelling:</strong> Clear narrative. Why this collection? What&apos;s the meaning? Connection &gt; hype. Founders with authentic story win.</li>
              <li><strong>Partnerships:</strong> Cross-promote with 5-10 other creators. Host Twitter spaces, collaborate on art. Amplify reach exponentially.</li>
            </ul>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Post-launch: Discord events (weekly), Twitter engagement (daily), monthly roadmap updates. Reality: 95% of launches fail. Success requires: authentic community, consistent marketing, 6+ month commitment minimum.
          </p>
        </section>

        <section id="top-courses" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Best NFT Creation Courses</h2>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Top Courses (Free &amp; Paid)</strong>
            <ul style={{ color: '#c9d1d9', paddingLeft: 20, marginTop: 12, marginBottom: 0 }}>
              <li style={{ marginBottom: 12 }}><strong>OpenSea Creator Guide (Free):</strong> 2-3 hours. Official guide from OpenSea. Best for: learning no-code minting, marketplace mechanics. Beginner-friendly. Covers: uploading, listing, pricing.</li>
              <li style={{ marginBottom: 12 }}><strong>freeCodeCamp "NFT Creation" (YouTube, Free):</strong> 4 hours. Covers: art creation, Solidity basics, minting on testnet. Good for: hands-on learning.</li>
              <li style={{ marginBottom: 12 }}><strong>Udemy "Complete NFT Course" ($20-50):</strong> 12 hours. Covers: art, smart contracts, marketing, launches. Highly rated (4.6/5 stars, 50K+ students). Best for: comprehensive path.</li>
              <li style={{ marginBottom: 12 }}><strong>Thirdweb Academy (Free):</strong> 6 hours. Focus: contract deployment, smart contracts, collections. Best for: learning templates + development.</li>
              <li><strong>NFT School (Free):</strong> Web-based curriculum. Self-paced. Covers: blockchain basics, NFT mechanics, community. Best for: foundational understanding.</li>
            </ul>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Recommended path: Start OpenSea (2 hours, free). Follow with Udemy course (12 hours, $30). Total: 14 hours + your own project work. Most creators: 4-8 weeks part-time to launch first collection.
          </p>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24, marginTop: 40 }}>
          <h2 style={h2Style}>7. FAQ</h2>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>What are the best free NFT creation courses?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>Top free: (1) OpenSea Creator Guide (2-3 hrs), (2) freeCodeCamp NFT (YouTube, 4 hrs), (3) Thirdweb Academy (6 hrs), (4) NFT School (self-paced). Paid: Udemy ($20-50, 12 hrs). Combine free + paid: 14-20 hours total.</p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>How do I create and mint an NFT?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>Step 1 (Art): Design in Photoshop, Blender, or Midjourney (2-6 hrs). Step 2 (IPFS): Upload to Pinata/nft.storage (30 min). Step 3 (Contract): OpenSea no-code or Thirdweb (1-2 hrs). Step 4 (Mint): Pay gas ($20-100 Ethereum, $0.05-1 Solana). Step 5 (List): OpenSea listing (30 min). Total: 6-16 hours. Cost: $20-150.</p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>Can I create NFTs without coding?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>YES. OpenSea Studio, Rarible, Thirdweb: all no-code. Learning curve: 1-2 hours. Cost: gas only. Most artists use no-code. Coding (Solidity) optional for advanced mechanics.</p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>What blockchain should I use for NFTs?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>Ethereum: highest liquidity, high gas. Solana: cheapest, growing. Polygon: low cost. Start Solana (cheap), graduate to Ethereum (liquidity).</p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>How much money can I earn from NFT sales?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>Reality: 5-10% of creators profitable. Average: $500-50K. Top 1%: $100K-1M+. Success depends: art quality (40%), community (40%), luck (20%). Treat as business, not lottery.</p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>What software do I need to create NFT art?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>Free: GIMP, Blender, Krita. Paid: Photoshop ($55/mo), Procreate ($13). AI: Midjourney ($20/mo), DALL-E ($0.02/image). Cost: $0-50/month. Start free, upgrade if scaling.</p>
          </div>
        </section>

        <nav style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid #30363d' }}>
          <p style={{ fontSize: 14, color: '#8b949e', marginBottom: 12 }}>Related courses:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#58a6ff' }}>
            <li style={{ marginBottom: 8 }}><Link href="/courses/solidity-smart-contract-course" style={linkStyle}>Solidity Smart Contracts</Link></li>
            <li style={{ marginBottom: 8 }}><Link href="/courses/blockchain-developer-course-free" style={linkStyle}>Blockchain Developer</Link></li>
            <li style={{ marginBottom: 8 }}><Link href="/nfts/nft-domain-names-guide" style={linkStyle}>NFT Domain Names</Link></li>
            <li><Link href="/courses/defi-course-online-free" style={linkStyle}>DeFi Courses</Link></li>
          </ul>
        </nav>

        <div style={{ ...infoBoxStyle, marginTop: 40, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> NFT creation involves financial and reputational risk. 95% of projects fail. Never invest capital you can&apos;t afford to lose. Treat as creative hobby, not guaranteed income.
        </div>
      </div>
    </article>
  );
}
