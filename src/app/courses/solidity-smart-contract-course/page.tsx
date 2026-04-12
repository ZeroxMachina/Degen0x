import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Best Solidity Smart Contract Courses 2026: From Beginner to Senior Developer',
  description: 'Complete Solidity courses 2026: CryptoZombies, Udemy, Coursera. Learn Ethereum smart contracts, ERC20/ERC721, gas optimization, security auditing. Beginner to advanced path.',
  keywords: ['Solidity course', 'smart contracts', 'Ethereum development', 'ERC20', 'ERC721', 'security auditing', 'Hardhat'],
  openGraph: {
    type: 'article',
    title: 'Best Solidity Smart Contract Courses 2026',
    description: 'Learn Solidity: ERC standards, security, testing, deployment. Career path to senior developer.',
    publishedTime: '2026-04-11T00:00:00Z',
    modifiedTime: '2026-04-11T00:00:00Z',
    url: 'https://degen0x.com/courses/solidity-smart-contract-course',
    images: [{ url: 'https://degen0x.com/og-courses.svg', width: 1200, height: 630, alt: 'Solidity Courses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Solidity Smart Contract Courses 2026',
    description: 'Solidity: fundamentals to security auditing. Job-ready path.',
    image: 'https://degen0x.com/og-courses.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/courses/solidity-smart-contract-course',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Solidity Smart Contract Courses 2026: Complete Developer Path',
  description: 'Comprehensive Solidity education: CryptoZombies, Udemy, Coursera, security auditing, project-based learning, career path to senior developer.',
  image: 'https://degen0x.com/og-courses.svg',
  datePublished: '2026-04-11',
  dateModified: '2026-04-11',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the best Solidity courses for beginners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Top beginner: (1) CryptoZombies (free, interactive, 10 hours), (2) Udemy "Complete Solidity Course" ($20-50, 40 hours), (3) Coursera "Smart Contracts" ($30/mo, 6 weeks). All teach: syntax, ERC20, basic security. Recommended path: CryptoZombies (week 1) → Udemy (weeks 2-5) → projects (weeks 6+).',
        },
      },
      {
        '@type': 'Question',
        name: 'How long to learn Solidity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Basics (syntax, ERC20): 2-4 weeks. Intermediate (patterns, gas): 4-8 weeks. Advanced (auditing, security): 3-6 months. Path to junior developer: 6-12 months part-time. Senior level: 2-3 years experience + specialization.',
        },
      },
      {
        '@type': 'Question',
        name: 'What projects should I build to learn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Project progression: Week 1-2 ERC20 token, Week 3-4 NFT (ERC721), Week 5-8 simple DEX, Week 9-16 lending protocol. Deploy each to testnet (Sepolia). Push GitHub. By month 3, you\'re hireable for junior roles. Month 6: mid-level ready.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is security auditing important for Solidity devs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Security separates $100K+ developers from $50K developers. Learn: reentrancy, overflow/underflow, access control. Tools: Slither, Mythril. CTFs: Ethernaut (26 challenges), Damn Vulnerable DeFi (15 challenges). This skills set is highly lucrative.',
        },
      },
      {
        '@type': 'Question',
        name: 'Solidity vs Rust vs Vyper?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Solidity: Ethereum, 80% of DeFi. Rust: Solana, faster, fewer bugs. Vyper: Python-like, safer syntax. Start Solidity (highest demand). Then Rust if interested in Solana ecosystem. Vyper rarely needed. Market: Solidity developers $130-200K, Rust $140-210K.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are paid Solidity courses worth it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Paid ($20-500): structured, projects, feedback. Free (CryptoZombies + docs): sufficient for self-learners. Paid best if: lacking discipline, want mentorship. Don\'t pay >$500; diminishing returns. Sweet spot: $30-50 Udemy course.',
        },
      },
    ],
  },
};

export default function SoliditySmartContractCourse() {
  const infoBoxStyle = { background: '#161b22', border: '1px solid #30363d', borderLeft: '3px solid #38bdf8', borderLeft: '3px solid #38bdf8', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };
  const h1Style = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };
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
          <span style={{ color: '#c9d1d9' }}>Solidity</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#8b5cf6', color: '#fff' }}>Smart Contracts</span>
            <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Ethereum</span>
          </div>

          <h1 style={h1Style}>Best Solidity Smart Contract Courses 2026</h1>

          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Master Ethereum smart contract development from beginner to senior developer. Learn Solidity fundamentals, ERC standards, gas optimization, security patterns, auditing. Project-based path to junior hiring in 6-12 months.
          </p>

          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 11, 2026</span>
            <span>Reading time: 14 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-11"
          updatedDate="2026-04-11"
          readingTime={14}
          section="courses"
        />


        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: '#58a6ff' }}>
            <li style={{ marginBottom: 8 }}><a href="#beginner-courses" style={linkStyle}>Best Beginner Courses</a></li>
            <li style={{ marginBottom: 8 }}><a href="#intermediate-advanced" style={linkStyle}>Intermediate &amp; Advanced</a></li>
            <li style={{ marginBottom: 8 }}><a href="#project-based-learning" style={linkStyle}>Project-Based Learning</a></li>
            <li style={{ marginBottom: 8 }}><a href="#security-auditing" style={linkStyle}>Security &amp; Auditing</a></li>
            <li style={{ marginBottom: 8 }}><a href="#tools-frameworks" style={linkStyle}>Tools &amp; Frameworks</a></li>
            <li style={{ marginBottom: 8 }}><a href="#career-path" style={linkStyle}>Career Path &amp; Salary</a></li>
            <li style={{ marginBottom: 8 }}><a href="#faq" style={linkStyle}>FAQ</a></li>
          </ol>
        </nav>

        <section id="beginner-courses" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. Best Beginner Solidity Courses</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Start with interactive, visual courses. CryptoZombies is the gold standard for beginners: gamified, immediate feedback, visual learning. No prerequisites needed. Most effective for motivation and retention.
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

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Top Beginner Courses Ranked</strong>
            <ul style={{ color: '#c9d1d9', paddingLeft: 20, marginTop: 12, marginBottom: 0 }}>
              <li style={{ marginBottom: 12 }}><strong>CryptoZombies (Free, 10 hours):</strong> Interactive zombie game teaches Solidity. Visual, engaging, immediate feedback. Covers: variables, functions, inheritance, events. Best for: motivation, beginner-friendly. Duration: 1-2 weeks casual study.</li>
              <li style={{ marginBottom: 12 }}><strong>Udemy "Complete Solidity Course" ($20-50, 40 hours):</strong> Structured, comprehensive. Covers: syntax, ERC20, ERC721, DeFi basics. Reviews: 4.7/5 stars, 100K+ students. Good for: structured learning, hands-on projects. Duration: 4-6 weeks part-time.</li>
              <li style={{ marginBottom: 12 }}><strong>Coursera "Smart Contracts" ($30/mo, 6 weeks):</strong> University-backed, accredited. Covers: blockchain basics, Solidity, smart contract security. Good for: credentials, structured timeline. Less coding-focused than Udemy.</li>
              <li><strong>Solidity By Example (Free docs):</strong> Official examples, quick reference. Covers: basics to intermediate. Good for: learning by reading code examples. Limited hand-holding.</li>
            </ul>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Recommended path: CryptoZombies (week 1, free) → Udemy (weeks 2-5, $30) → Solidity docs (week 6+, free). Total investment: 10-15 hours, $30 cost. By end, you&apos;ll understand Solidity fundamentals and be ready for projects.
          </p>
        </section>

        <section id="intermediate-advanced" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Intermediate &amp; Advanced Solidity</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            After basics, learn advanced patterns: upgradeable contracts (proxy pattern), gas optimization, design patterns. These separate junior from mid-level developers and justify higher salaries.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Advanced Topics &amp; Timeline</strong>
            <table style={tableStyle}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={thStyle}><strong>Topic</strong></td>
                  <td style={thStyle}><strong>Difficulty</strong></td>
                  <td style={thStyle}><strong>Duration</strong></td>
                  <td style={thStyle}><strong>Salary Impact</strong></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>Proxy Patterns (Upgradeable)</td>
                  <td style={tdStyle}>Medium</td>
                  <td style={tdStyle}>4-6 hrs</td>
                  <td style={tdStyle}>+$5-10K/year</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>Gas Optimization</td>
                  <td style={tdStyle}>Medium-High</td>
                  <td style={tdStyle}>5-8 hrs</td>
                  <td style={tdStyle}>+$10-20K/year</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>Reentrancy &amp; Security Patterns</td>
                  <td style={tdStyle}>High</td>
                  <td style={tdStyle}>8-12 hrs</td>
                  <td style={tdStyle}>+$20-50K/year</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Advanced Math (AMM, Oracles)</td>
                  <td style={tdStyle}>Very High</td>
                  <td style={tdStyle}>15-25 hrs</td>
                  <td style={tdStyle}>+$50K+/year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Timeline to competence: 3-6 months of consistent study to reach mid-level. Most developers: 50% time coding, 50% debugging/learning from real code. Advanced developers read other people&apos;s contracts constantly (Uniswap, Aave, OpenZeppelin) to learn patterns.
          </p>
        </section>

        <section id="project-based-learning" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Project-Based Learning Path</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Best learning: build projects. Most hireable developers have GitHub with 5-10 quality projects. Progress from simple (ERC20) to complex (lending protocols). Each project: deploy to testnet, open-source on GitHub.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Project Progression (16-Week Path)</strong>
            <ul style={{ color: '#c9d1d9', paddingLeft: 20, marginTop: 12, marginBottom: 0 }}>
              <li style={{ marginBottom: 12 }}><strong>Weeks 1-2: ERC20 Token</strong> (100-150 lines). Create standard token with transfer, mint, burn. Deploy on Sepolia testnet. Push to GitHub. Learn: OpenZeppelin libraries, basic Solidity patterns.</li>
              <li style={{ marginBottom: 12 }}><strong>Weeks 3-4: NFT Contract (ERC721)</strong> (150-250 lines). Create NFT with metadata, minting, burning. Add IPFS URI handling. Deploy with Hardhat. Learn: ERC721 standard, metadata, IPFS integration.</li>
              <li style={{ marginBottom: 12 }}><strong>Weeks 5-8: Simple DEX</strong> (500-800 lines). Build Uniswap-like AMM: token swaps, liquidity pools, fees. Implement constant product formula (x*y=k). Challenging but rewarding. Learn: AMM mechanics, math.</li>
              <li style={{ marginBottom: 12 }}><strong>Weeks 9-16: Lending Protocol</strong> (1000+ lines). Build Aave-like system: deposit, borrow, liquidation, interest. Implement collateral management, liquidation engine. Most complex but professional-level. Learn: advanced patterns, risk management.</li>
              <li><strong>Month 5+: Original Protocol or Contribution</strong> Build your own idea or contribute to established protocol. Join DAOs, submit PRs. Build professional portfolio.</li>
            </ul>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Timeline: Complete full path in 4-6 months part-time. By week 8 (month 2, after DEX), you&apos;re hireable for junior roles at startups ($90-120K). By week 16 (month 4), mid-level ready ($120-150K).
          </p>
        </section>

        <section id="security-auditing" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Security Auditing &amp; Bug Hunting</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Security auditing is the high-paying specialization. Smart contract bugs cost millions. Learning security: reentrancy, overflow/underflow, access control, delegatecall, flash loans. Tools: Slither, Mythril.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Security Learning Path</strong>
            <ul style={{ color: '#c9d1d9', paddingLeft: 20, marginTop: 12, marginBottom: 0 }}>
              <li style={{ marginBottom: 12 }}><strong>Ethernaut CTF (Free, 20-40 hours):</strong> 26 hacking challenges on Ethereum. Learn: reentrancy, overflow, delegatecall, privacy. Engaging, hands-on. Essential for auditing.</li>
              <li style={{ marginBottom: 12 }}><strong>Damn Vulnerable DeFi (Free, 30-50 hours):</strong> 15 DeFi-specific challenges. Learn: AMM attacks, lending exploits, oracle manipulation. Higher difficulty than Ethernaut.</li>
              <li style={{ marginBottom: 12 }}><strong>ConsenSys "Smart Contract Best Practices" (Free):</strong> GitHub guide. Covers: patterns, anti-patterns, recommendations. Read: 5-8 hours. Invaluable reference.</li>
              <li><strong>Slither Documentation (Free, 5 hours):</strong> Static analysis tool. Catches bugs automatically. Learn: static analysis methodology, common vulnerabilities detection.</li>
            </ul>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Bug bounties: Immunefi, HackerOne pay $5K-100K+ per vulnerability. Auditors earn $100-150K junior, $150-300K+ senior. This is the lucrative path if you master security. Timeline: 3-6 months security study post-basics.
          </p>
        </section>

        <section id="tools-frameworks" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Essential Development Tools</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Professional Solidity development requires specific tools. Hardhat or Foundry for testing, ethers.js for front-end interaction, OpenZeppelin for audited libraries. All free or cheap. Master these early.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Industry-Standard Tools (All Free)</strong>
            <ul style={{ color: '#c9d1d9', paddingLeft: 20, marginTop: 12, marginBottom: 0 }}>
              <li style={{ marginBottom: 8 }}><strong>Hardhat:</strong> Development framework. Testing, deployment, debugging. Most popular. Learning curve: 5 hours. Use for projects.</li>
              <li style={{ marginBottom: 8 }}><strong>Foundry:</strong> Rust-based, faster testing, advanced features. Growing adoption. Learning curve: 6 hours. Preferred by auditors.</li>
              <li style={{ marginBottom: 8 }}><strong>ethers.js:</strong> JavaScript library for contract interaction. Essential for front-end. Learning curve: 4 hours. Use in every project.</li>
              <li style={{ marginBottom: 8 }}><strong>OpenZeppelin Contracts:</strong> Audited, standard contracts (ERC20, ERC721, AccessControl). Always use for production. Save time, improve security.</li>
              <li><strong>Slither + Mythril:</strong> Security tools. Catch bugs automatically. Essential for auditing. Free, GitHub-based.</li>
            </ul>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Total tool learning: 20-30 hours. Worth it. Professional developers use these daily. Free tier is sufficient for everything (enterprise features rarely needed unless $100M+ protocols).
          </p>
        </section>

        <section id="career-path" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Career Path: Solidity Developer Salaries</h2>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Solidity Developer Career Progression (2026)</strong>
            <table style={tableStyle}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={thStyle}><strong>Level</strong></td>
                  <td style={thStyle}><strong>Experience</strong></td>
                  <td style={thStyle}><strong>Salary</strong></td>
                  <td style={thStyle}><strong>Skills</strong></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>Junior</td>
                  <td style={tdStyle}>0-1 year</td>
                  <td style={tdStyle}>$90-130K</td>
                  <td style={tdStyle}>ERC20, ERC721, basic patterns</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>Mid-Level</td>
                  <td style={tdStyle}>1-2 years</td>
                  <td style={tdStyle}>$130-180K</td>
                  <td style={tdStyle}>Gas optimization, testing, design patterns</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={tdStyle}>Senior</td>
                  <td style={tdStyle}>2-5 years</td>
                  <td style={tdStyle}>$180-280K</td>
                  <td style={tdStyle}>Security, architecture, protocol design</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Security Specialist</td>
                  <td style={tdStyle}>2-5 years</td>
                  <td style={tdStyle}>$150-300K+</td>
                  <td style={tdStyle}>Auditing, vulnerability research, CTFs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Location: Fully remote (competitive). Hiring: GitHub portfolio &gt; credentials. Most companies: 5-10 quality projects worth more than degree. Timeline to hireable: 6-12 months part-time for junior role. Total earning potential: $100K-300K+ by year 3.
          </p>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24, marginTop: 40 }}>
          <h2 style={h2Style}>7. FAQ</h2>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>What are the best Solidity courses for beginners?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>Top 3: (1) CryptoZombies (free, 10 hrs, interactive), (2) Udemy "Complete Solidity" ($20-50, 40 hrs), (3) Coursera ($30/mo, 6 weeks, accredited). Path: CryptoZombies week 1, Udemy weeks 2-5, projects weeks 6+.</p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>How long to learn Solidity?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>Basics: 2-4 weeks. Intermediate: 4-8 weeks. Advanced: 3-6 months. Junior developer: 6-12 months part-time. Senior: 2-3 years + specialization.</p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>What projects should I build?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>Progression: ERC20 (weeks 1-2), NFT (weeks 3-4), DEX (weeks 5-8), Lending (weeks 9-16). Deploy testnet, GitHub. By week 8: hireable junior. Month 6: mid-level ready.</p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>Is security auditing worth learning?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>YES. Security separates $100K+ devs from $50K devs. Learn: reentrancy, overflow, access control. Tools: Slither, Mythril. CTFs: Ethernaut, Damn Vulnerable DeFi. Highly lucrative specialization.</p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>Solidity vs Rust vs Vyper?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>Solidity: Ethereum, 80% of DeFi. Rust: Solana. Vyper: Python-like, safer. Start Solidity (highest demand). Then Rust if interested in Solana. Market: Solidity $130-200K, Rust $140-210K.</p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>Are paid courses worth it?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>Paid ($20-500): structured, projects. Free (CryptoZombies + docs): sufficient for self-learners. Paid best if lacking discipline. Don&apos;t pay &gt;$500. Sweet spot: $30 Udemy course.</p>
          </div>
        </section>

        <nav style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid #30363d' }}>
          <p style={{ fontSize: 14, color: '#8b949e', marginBottom: 12 }}>Related courses:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#58a6ff' }}>
            <li style={{ marginBottom: 8 }}><Link href="/courses/defi-course-online-free" style={linkStyle}>DeFi Courses</Link></li>
            <li style={{ marginBottom: 8 }}><Link href="/courses/blockchain-developer-course-free" style={linkStyle}>Blockchain Developer</Link></li>
            <li style={{ marginBottom: 8 }}><Link href="/courses/crypto-security-certification-course" style={linkStyle}>Crypto Security Certification</Link></li>
            <li><Link href="/courses/nft-creation-course" style={linkStyle}>NFT Creation</Link></li>
          </ul>
        </nav>

        <div style={{ ...infoBoxStyle, marginTop: 40, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This is educational content. Solidity development involves real security risks. Always have code audited before production. Never deploy unaudited contracts with user funds.
        </div>
      </div>
    </article>
  );
}
