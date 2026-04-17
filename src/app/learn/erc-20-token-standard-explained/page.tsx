import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: "ERC-20 Token Standard Explained 2026: Functions, Approvals",
  description: "Complete guide to ERC-20 token standard. Learn 6 required functions (transfer, approve, balanceOf), events, decimal precision. Compare ERC-20 vs ERC-721 vs",
  keywords: ['ERC-20', 'token standard', 'Ethereum', 'transfer', 'approve', 'smart contract', 'USDC', 'USDT', 'approval vulnerability', 'ERC-4626'],
  openGraph: {
    type: 'article',
    title: 'ERC-20 Token Standard Explained 2026: Functions, Approvals & Security',
    description: 'Complete guide to ERC-20. Learn transfer, approve, balanceOf functions, approval vulnerabilities, token creation process, OpenZeppelin implementation.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/erc-20-token-standard-explained',
    images: [{
      url: 'https://degen0x.com/og-erc20.svg',
      width: 1200,
      height: 630,
      alt: 'ERC-20 Token Standard',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERC-20 Token Standard Explained 2026: Functions, Approvals & Security',
    description: 'Learn ERC-20: transfer, approve, balanceOf. Compare ERC-721, ERC-1155. Understand approval vulnerabilities and token creation.',
    image: 'https://degen0x.com/og-erc20.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/erc-20-token-standard-explained',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ERC-20 Token Standard Explained 2026: Functions, Approvals & Security',
  description: 'Complete guide to ERC-20 token standard. Learn 6 required functions, approval vulnerabilities, token creation, and comparison with ERC-721/ERC-1155.',
  image: 'https://degen0x.com/og-erc20.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is ERC-20 and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ERC-20 is Ethereum token standard (interface). Defines 6 required functions so all tokens follow same rules. Benefit: Wallets, exchanges, smart contracts can work with any ERC-20 token without custom integration. Without ERC-20, each token would need custom code (Uniswap couldn\'t swap USDC without knowing USDC logic). ERC-20 enables token interoperability. 1000s of tokens (USDC, USDT, DAI, UNI, LINK) are ERC-20. Total TVL: $100B+ in ERC-20 tokens. Critical standard for Ethereum.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the 6 required ERC-20 functions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Function 1: totalSupply() -> uint256. Returns total token supply. Example: USDC has 30B total tokens. Function 2: balanceOf(address account) -> uint256. Returns token balance of account. Example: balanceOf(0x123) = 1000 USDC. Function 3: transfer(address recipient, uint256 amount) -> bool. Sender transfers tokens to recipient. Emits Transfer event. Example: transfer(0x456, 100) sends 100 tokens to address 0x456. Function 4: transferFrom(address sender, address recipient, uint256 amount) -> bool. Third party transfers tokens from sender to recipient (requires approval). Used by smart contracts (Uniswap uses transferFrom to take tokens from user). Function 5: approve(address spender, uint256 amount) -> bool. Give spender permission to transfer up to amount tokens from caller. Example: approve(Uniswap, 1000) lets Uniswap spend 1000 USDC from my wallet. Function 6: allowance(address owner, address spender) -> uint256. Returns remaining spender allowance from owner.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the approval vulnerability and how do you prevent it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Approval vulnerability: User approves Uniswap for 1000 USDC. Later, wants to revoke approval, calls approve(Uniswap, 0). But before transaction mined, Uniswap extracts remaining balance (1000 USDC). Then approval is revoked (0). Loss: 1000 USDC. Root cause: Race condition. approve() overwrites previous allowance (doesn\'t add to it).\n\nPrevention: (1) increaseAllowance(spender, amount): Add to existing allowance. (2) decreaseAllowance(spender, amount): Subtract from allowance. (3) permit(): ERC-2612 standard uses signatures instead of approvals (no race condition). (4) Infinite approval: approve(spender, type(uint256).max) once. Spender can spend unlimited (risky but avoids re-approvals). Current best practice: increaseAllowance/decreaseAllowance or permit().',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between ERC-20, ERC-721, and ERC-1155?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ERC-20: Fungible tokens. All tokens identical. 1 USDC = 1 USDC. Used for: payments, governance, DeFi. Total supply can be billions.\n\nERC-721: Non-fungible tokens (NFTs). Each token unique. #1 Bored Ape ≠ #2 Bored Ape. Used for: digital art, gaming items, collectibles. Total supply usually <10k.\n\nERC-1155: Multi-token standard. Supports both fungible + non-fungible. Single contract can issue 1000 fungible tokens + 100 NFTs. Used for: games (fungible coins + unique items), complex ecosystems. More gas-efficient than separate ERC-20/ERC-721.\n\nComparison: ERC-20 simplest, ERC-721 most popular for NFTs, ERC-1155 most flexible. For new tokens, use ERC-20 (standard). For NFTs, use ERC-721 (compatible with OpenSea). For games, use ERC-1155 (gas efficient).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you create an ERC-20 token from scratch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Steps: (1) Define token properties: name ("USD Coin"), symbol ("USDC"), decimals (6). (2) Implement 6 required functions. (3) Add Mint function (create tokens). (4) Add Burn function (destroy tokens). (5) Test thoroughly. (6) Audit by security firm. (7) Deploy to Ethereum. (8) Verify on Etherscan. Code example (OpenZeppelin): import ERC20 from "@openzeppelin/contracts/token/ERC20/ERC20.sol"; contract USDC is ERC20 { constructor() ERC20("USD Coin", "USDC") { _mint(msg.sender, 1000000 * 10**6); } }. This creates 1M USDC tokens. Key: Use OpenZeppelin library (battle-tested, don\'t reinvent). Time: 1 day to implement, 2 weeks to audit, 1 day to deploy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ERC-4626 and how does it relate to ERC-20?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ERC-4626 is standard for tokenized vaults (assets locked, yielding returns). Example: Yearn Vault deposits USDC, earns yield, issues yvUSDC (ERC-20 token representing share of vault). Benefits: (1) Standardized interface (all vaults compatible). (2) Gas efficient (single approval for deposits). (3) Composability (yvUSDC can be staked, loaned, swapped like normal ERC-20). ERC-4626 extends ERC-20 with vault-specific functions: deposit(assets) -> shares (deposit USDC, get shares). withdraw(shares) -> assets (burn shares, get USDC). Current adoption: Yearn, Aave (emerging), Curve. Expected: Most yield protocols adopt ERC-4626 by 2027 for composability.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Erc 20 Token Standard Explained', },
  ],
};

export default function ERC20TokenStandard() {
  const tableOfContents = [
    { id: 'what-erc20', title: 'What is ERC-20?' },
    { id: 'six-functions', title: 'The 6 Required Functions' },
    { id: 'token-events', title: 'Events & Decimal Precision' },
    { id: 'token-standards', title: 'Token Standards Comparison' },
    { id: 'approval-vulnerabilities', title: 'Approval Vulnerabilities' },
    { id: 'creating-token', title: 'Creating an ERC-20 Token' },
    { id: 'erc-4626', title: 'ERC-4626 Vault Standard' },
    { id: 'faq', title: 'FAQ' },
  ];

  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12,
  };

  const h3Style = {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 12,
    color: '#e6edf3',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
  };

  const linkStyle = { color: '#58a6ff', textDecoration: 'none' };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginBottom: 24,
    fontSize: 14,
  };

  const thStyle = {
    background: '#0d1117',
    border: '1px solid #30363d',
    padding: 12,
    textAlign: 'left' as const,
    fontWeight: 700,
    color: '#e6edf3',
  };

  const tdStyle = {
    border: '1px solid #30363d',
    padding: 12,
    color: '#8b949e',
  };

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>ERC-20 Token Standard</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>12 min read</span>
          <h1 style={h1Style}>ERC-20 Token Standard: Functions, Approvals &amp; Token Creation</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Master ERC-20 token standard in 2026. Learn 6 required functions (transfer, approve, balanceOf, allowance, totalSupply, transferFrom), approval vulnerabilities, ERC-4626 vault standard. Compare ERC-20 vs ERC-721 vs ERC-1155. OpenZeppelin implementation guide.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 12 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={12}
          section="learn"
        />


        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: '#58a6ff' }}>
            {tableOfContents.map(item => (
              <li key={item.id} style={{ marginBottom: 8 }}>
                <a href={`#${item.id}`} style={linkStyle}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="what-erc20">
          <h2 style={h2Style}>What is ERC-20?</h2>
          <p>ERC-20 (Ethereum Request for Comments #20) is a standard interface for fungible tokens on Ethereum. Defines 6 required functions and 2 events that all tokens must implement. This standardization allows wallets, exchanges, and smart contracts to work with any ERC-20 token identically.</p>
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

          <h3 style={h3Style}>Why ERC-20 is Critical</h3>
          <p><strong>Before ERC-20 (2014-2015)</strong>: Each token had custom interface. Uniswap had to write custom code for USDC, USDT, DAI, UNI separately. Wallets couldn&apos;t display new tokens without updates. Exchanges took weeks to list new tokens.</p>

          <p><strong>After ERC-20 (2015-present)</strong>: All tokens follow same interface. Uniswap works with any ERC-20 token instantly (no custom code needed). MetaMask displays any ERC-20 (just add contract address). Exchanges list tokens in 1 day. This is why ERC-20 is Ethereum&apos;s killer feature.</p>

          <h3 style={h3Style}>ERC-20 Popularity</h3>
          <p><strong>Total ERC-20 Tokens</strong>: 500k+ deployed on Ethereum. <strong>Major tokens</strong>: USDC (40B tokens), USDT (40B), DAI (5B), UNI (1B), LINK (1B). <strong>Total TVL</strong>: $100B+ locked in ERC-20. <strong>Daily volume</strong>: $10B+ traded. ERC-20 is the most important token standard in crypto.</p>

          <div style={infoBoxStyle}>
            <p><strong>Key Insight:</strong> ERC-20 success enables Ethereum DeFi. Without standardized interface, DEXs/lending/bridges would be impossible. ERC-20 is foundational to entire Ethereum ecosystem.</p>
          </div>
        </section>

        <section id="six-functions">
          <h2 style={h2Style}>The 6 Required ERC-20 Functions</h2>

          <h3 style={h3Style}>Function 1: totalSupply()</h3>
          <p><code>function totalSupply() public view returns (uint256)</code></p>
          <p>Returns total token supply (all tokens ever created, including burned). Example: USDC totalSupply() = 40,000,000,000 (40B tokens). Used by: Wallets (display market cap), analysis (token inflation rate).</p>

          <h3 style={h3Style}>Function 2: balanceOf(address account)</h3>
          <p><code>function balanceOf(address account) public view returns (uint256)</code></p>
          <p>Returns balance of specific account. Example: balanceOf(0x123) = 1000 USDC (account holds 1k USDC). Used by: Wallets (display balance), DeFi (collateral checks), governance (voting power).</p>

          <h3 style={h3Style}>Function 3: transfer(address recipient, uint256 amount)</h3>
          <p><code>function transfer(address recipient, uint256 amount) public returns (bool)</code></p>
          <p>Transfers tokens from caller to recipient. Emits Transfer event. Example: transfer(0x456, 100) sends 100 USDC from my wallet to 0x456. Requirements: Caller balance &gt;= amount. Used by: Direct token transfers, simple payments.</p>

          <h3 style={h3Style}>Function 4: transferFrom(address sender, address recipient, uint256 amount)</h3>
          <p><code>function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)</code></p>
          <p>Transfers tokens from sender to recipient (caller is third party). Requires prior approval. Example: Uniswap calls transferFrom(user, Uniswap, 100 USDC). User must have called approve(Uniswap, 100) first. Used by: Smart contracts (swaps, loans, yield farming).</p>

          <h3 style={h3Style}>Function 5: approve(address spender, uint256 amount)</h3>
          <p><code>function approve(address spender, uint256 amount) public returns (bool)</code></p>
          <p>Approves spender to transfer up to amount tokens on caller&apos;s behalf. Emits Approval event. Example: approve(Uniswap, 1000) allows Uniswap to spend 1000 USDC from my wallet. Requirements: Caller authorizes spender. Security: Used by DEXs, lending, yield farming (requires user approval step).</p>

          <h3 style={h3Style}>Function 6: allowance(address owner, address spender)</h3>
          <p><code>function allowance(address owner, address spender) public view returns (uint256)</code></p>
          <p>Returns remaining spender allowance from owner. Example: allowance(user, Uniswap) = 500 (Uniswap can still spend 500 USDC). Used by: Smart contracts (check remaining approval before spending).</p>

          <div style={infoBoxStyle}>
            <p><strong>Common Workflow</strong>: (1) User calls approve(Uniswap, 1000) USDC. (2) Uniswap checks allowance(user, Uniswap) = 1000. (3) Uniswap calls transferFrom(user, Uniswap, 1000) USDC. (4) Uniswap completes swap. (5) allowance reduces to 0. This 3-step process (approve + check + transfer) is standard in DeFi.</p>
          </div>
        </section>

        <section id="token-events">
          <h2 style={h2Style}>Events &amp; Decimal Precision</h2>

          <h3 style={h3Style}>Required Events</h3>
          <p><strong>Transfer Event</strong>: Emitted when tokens transferred. Logged on blockchain, indexed for searching. Example: Transfer(0x123, 0x456, 100) = "0x123 sent 100 tokens to 0x456."</p>

          <p><strong>Approval Event</strong>: Emitted when approval changed. Example: Approval(user, Spender, 1000) = "user approved spender for 1000 tokens."</p>

          <p>These events allow blockchain explorers (Etherscan) to display transaction history. Wallets listen for Transfer events to update balances.</p>

          <h3 style={h3Style}>Decimal Precision</h3>
          <p><strong>Problem</strong>: USDC has value $1. Smart contracts can&apos;t handle decimals (uint256 only). Solution: Use smallest unit (wei). USDC has 6 decimals. 1 USDC = 1,000,000 units. Example: Transfer 1000 USDC = Transfer 1000 * 10^6 = 1,000,000,000 units.</p>

          <p><strong>Decimals field</strong>: ERC-20 includes decimals (6 for USDC, 18 for most tokens). Wallets use this to display correctly. If user sends 1,000,000,000 units and decimals=6, wallet displays "1000 USDC" (divide by 10^6).</p>

          <p><strong>Common decimals</strong>: 18 (ETH, Uniswap), 8 (WBTC), 6 (USDC, USDT), 18 (most new tokens). Non-standard decimals (3, 7, 9) can cause issues with wallets/DEXs.</p>
        </section>

        <section id="token-standards">
          <h2 style={h2Style}>Token Standards Comparison</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Standard</th>
                <th style={thStyle}>Chain</th>
                <th style={thStyle}>Features</th>
                <th style={thStyle}>Use Cases</th>
                <th style={thStyle}>Notable Tokens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>ERC-20</strong></td>
                <td style={tdStyle}>Ethereum</td>
                <td style={tdStyle}>Fungible, transferable</td>
                <td style={tdStyle}>Payments, DeFi, governance</td>
                <td style={tdStyle}>USDC, USDT, UNI, LINK</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>ERC-721</strong></td>
                <td style={tdStyle}>Ethereum</td>
                <td style={tdStyle}>NFTs, unique items</td>
                <td style={tdStyle}>Art, collectibles, gaming</td>
                <td style={tdStyle}>Bored Ape, CryptoPunks</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>ERC-1155</strong></td>
                <td style={tdStyle}>Ethereum</td>
                <td style={tdStyle}>Multi-token, fungible + NFT</td>
                <td style={tdStyle}>Games, complex ecosystems</td>
                <td style={tdStyle}>Raydium, Axie Infinity</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>ERC-4626</strong></td>
                <td style={tdStyle}>Ethereum</td>
                <td style={tdStyle}>Vault tokens, yield</td>
                <td style={tdStyle}>Yield farming, vaults</td>
                <td style={tdStyle}>Yearn, Lido, Aave</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>BEP-20</strong></td>
                <td style={tdStyle}>Binance Smart Chain</td>
                <td style={tdStyle}>Same as ERC-20 (BSC version)</td>
                <td style={tdStyle}>BSC ecosystem</td>
                <td style={tdStyle}>BUSD, CAKE, LINK</td>
              </tr>
            </tbody>
          </table>

          <div style={infoBoxStyle}>
            <p><strong>Choosing a Standard:</strong> Need to transfer tokens → ERC-20. Creating unique items → ERC-721. Games/multiple assets → ERC-1155. Yield bearing tokens → ERC-4626. New projects should use ERC-20 (most compatible) unless specific use case requires NFTs or multi-tokens.</p>
          </div>
        </section>

        <section id="approval-vulnerabilities">
          <h2 style={h2Style}>Approval Vulnerabilities &amp; Security</h2>

          <h3 style={h3Style}>The Race Condition Attack</h3>
          <p><strong>Scenario</strong>: User approves Uniswap for 1000 USDC. Later, user wants to reduce approval to 100 USDC (revoke most). User calls approve(Uniswap, 100). But before transaction mined, Uniswap&apos;s bot extracts remaining 1000 USDC (uses old allowance). Then approval reduced to 100. Result: Uniswap took 1000 instead of intended 100.</p>

          <h3 style={h3Style}>Root Cause</h3>
          <p>approve() overwrites previous allowance. No atomic check-and-update. If timing is bad, old allowance can be used before new value takes effect.</p>

          <h3 style={h3Style}>Fix 1: increaseAllowance / decreaseAllowance</h3>
          <p><code>function increaseAllowance(address spender, uint256 addedValue) public returns (bool)</code></p>
          <p>Adds to existing allowance (doesn&apos;t overwrite). Safe way to increase approval. Always prefer to decrease then increase, never approve(0) directly.</p>

          <h3 style={h3Style}>Fix 2: ERC-2612 Permit</h3>
          <p>Signatures instead of approvals. No race condition. Example: User signs message "allow Uniswap to spend 100 USDC." User submits signature + transaction in one atomic step. No separate approve() needed. Benefits: (1) Single transaction (approve + swap in one tx). (2) No race condition. (3) Better UX. Adoption: Growing (Uniswap v4, OpenZeppelin supports).</p>

          <h3 style={h3Style}>Best Practices</h3>
          <ul>
            <li><strong>Never approve infinite</strong>: avoid approve(spender, type(uint256).max) unless you trust spender completely.</li>
            <li><strong>Use increaseAllowance</strong>: When increasing approval, use increaseAllowance() instead of approve().</li>
            <li><strong>Check allowance before spending</strong>: Smart contracts should verify allowance &gt;= amount before calling transferFrom().</li>
            <li><strong>Revoke immediately</strong>: When done with spender, call approve(spender, 0) to revoke.</li>
            <li><strong>Use Permit when possible</strong>: For new protocols, use ERC-2612 permit() signatures (gas efficient, safer).</li>
          </ul>
        </section>

        <section id="creating-token">
          <h2 style={h2Style}>Creating an ERC-20 Token</h2>

          <h3 style={h3Style}>Step-by-Step Process</h3>
          <p><strong>Step 1: Define Token Properties</strong></p>
          <ul>
            <li>Name: "USD Coin"</li>
            <li>Symbol: "USDC"</li>
            <li>Decimals: 6</li>
            <li>Initial supply: 1,000,000 (or 0, mint later)</li>
          </ul>

          <p><strong>Step 2: Write Smart Contract</strong></p>
          <p>Use OpenZeppelin ERC20 library (battle-tested). Implement optional functions: mint(), burn(), pause(). Add access control (who can mint?). Example code (Solidity):</p>

          <div style={{
            background: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
            fontSize: 12,
            color: '#8b949e',
            overflow: 'auto',
          }}
    >
            <pre style={{ margin: 0 }}>
{`import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDC is ERC20 {
  constructor(uint256 initialSupply) ERC20("USD Coin", "USDC") {
    _mint(msg.sender, initialSupply * 10 ** 6);
  }

  function mint(address to, uint256 amount) public {
    _mint(to, amount);
  }
}`}
            </pre>
          </div>

          <p><strong>Step 3: Test Smart Contract</strong></p>
          <ul>
            <li>Write unit tests (Hardhat, Truffle). Test mint/burn/transfer functions.</li>
            <li>Test edge cases (overflow, underflow, zero address).</li>
            <li>Verify compliance with ERC-20 spec.</li>
          </ul>

          <p><strong>Step 4: Security Audit</strong></p>
          <p>Submit to professional auditor (OpenZeppelin, Trail of Bits, Certora). Cost: $5k-$50k+. Time: 2-4 weeks. Critical for mainnet launches (even small bugs cost millions).</p>

          <p><strong>Step 5: Deploy to Ethereum</strong></p>
          <ul>
            <li>Choose testnet first (Goerli, Sepolia). Deploy, test in live environment.</li>
            <li>Deploy to mainnet. Pay gas fees (~$500-$5k depending on gas price).</li>
            <li>Verify source code on Etherscan (allows anyone to audit).</li>
          </ul>

          <p><strong>Step 6: Post-Launch Checklist</strong></p>
          <ul>
            <li>Monitor contract for bugs (price feed integration, balance checks).</li>
            <li>Set up emergency pause mechanism (in case of exploit).</li>
            <li>Community updates (roadmap, governance).</li>
          </ul>

          <div style={infoBoxStyle}>
            <p><strong>Timeline</strong>: Implementation (1-3 days) + Testing (3-7 days) + Audit (2-4 weeks) + Deployment (1 day) = ~1 month from start to mainnet. For USDC-like tokens (massive scale), add longer audit + governance phases.</p>
          </div>
        </section>

        <section id="erc-4626">
          <h2 style={h2Style}>ERC-4626 Vault Standard</h2>

          <h3 style={h3Style}>What is ERC-4626?</h3>
          <p>ERC-4626 is standard interface for tokenized vaults. A vault is smart contract that accepts deposits, invests assets, and generates yield. Vault deposits tokens into strategy (e.g., Yearn lends to Aave), earns interest, distributes to shareholders.</p>

          <p><strong>Example: Yearn USDC Vault</strong></p>
          <ul>
            <li>User deposits 1000 USDC into Yearn vault.</li>
            <li>Vault mints 950 yvUSDC (shares, accounting for fees).</li>
            <li>Vault invests USDC in Aave (earn 5% APY).</li>
            <li>After 1 year: vault earned $50 yield. Total assets: $1050.</li>
            <li>User's 950 shares now worth: 950 * ($1050 / 1000 shares) = $997.50.</li>
            <li>User earned $47.50 (net of fees).</li>
          </ul>

          <h3 style={h3Style}>ERC-4626 Functions</h3>
          <p><strong>Key functions:</strong></p>
          <ul>
            <li><strong>deposit(uint256 assets) → shares</strong>: User deposits assets, receives vault shares.</li>
            <li><strong>withdraw(uint256 shares) → assets</strong>: User burns shares, receives assets + accrued yield.</li>
            <li><strong>totalAssets()</strong>: Total vault assets (deposits + yield - losses).</li>
            <li><strong>convertToShares(uint256 assets) → shares</strong>: Asset-to-share conversion (accounting for yield/losses).</li>
            <li><strong>convertToAssets(uint256 shares) → assets</strong>: Share-to-asset conversion.</li>
          </ul>

          <h3 style={h3Style}>Advantages Over ERC-20</h3>
          <p><strong>Standardization:</strong> Before ERC-4626, each vault had custom interface. Yearn Vault ≠ Aave Vault ≠ Compound Vault. No standard way to deposit/withdraw. ERC-4626 unifies vault interface.</p>

          <p><strong>Composability:</strong> ERC-4626 vault shares are ERC-20 tokens. Can stake yvUSDC in another protocol, swap on DEX, use as collateral. Enables "vault of vaults" (deposit into multiple strategies simultaneously).</p>

          <p><strong>Gas Efficiency:</strong> Single approval for deposits. No need to approve + deposit separately.</p>

          <h3 style={h3Style}>ERC-4626 Adoption</h3>
          <ul>
            <li><strong>Yearn:</strong> Pioneered vault concept, adopting ERC-4626 for new vaults.</li>
            <li><strong>Aave:</strong> Considering ERC-4626 adoption for savings accounts.</li>
            <li><strong>Curve:</strong> Exploring for yield-bearing stablecoins.</li>
            <li><strong>Future:</strong> Expected to become standard for all yield protocols by 2027.</li>
          </ul>

          <div style={infoBoxStyle}>
            <p><strong>Key Insight:</strong> ERC-4626 is to vaults what ERC-20 is to tokens. Standardizes interface, enables composability, drives adoption. Any new DeFi protocol building yield products should implement ERC-4626.</p>
          </div>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <h3 style={h3Style}>Can I create a token with more than 18 decimals?</h3>
          <p>Technically yes, but not recommended. Most DeFi assumes 18 decimals. Wallets may display incorrectly. Exchanges may reject. Use standard decimals: 6 (USDC, USDT), 8 (WBTC), 18 (most new tokens).</p>

          <h3 style={h3Style}>Is ERC-20 scalable enough for billions of transactions?</h3>
          <p>ERC-20 itself is scalable (Ethereum L1 bottleneck, not token standard). L2 solutions (Arbitrum, Optimism) process ERC-20 transfers at 4000+ TPS. For high-frequency trading, use L2 rollups.</p>

          <h3 style={h3Style}>What's the difference between burn and transfer to 0x0?</h3>
          <p>Burn: Token is removed from circulation permanently (totalSupply decreases). Transfer to 0x0: Token exists but is inaccessible (totalSupply stays same, but no one owns tokens). Burn is better for deflation mechanics.</p>

          <h3 style={h3Style}>Can I change token decimals after launch?</h3>
          <p>No. Token decimals are immutable after deploy. Changing would break all wallets/exchanges. If you want to "upgrade" token, launch new token and migrate holders (via airdrop or swap). Very painful process.</p>

          <h3 style={h3Style}>What's the gas cost to deploy an ERC-20?</h3>
          <p>~$500-$5,000 depending on current gas prices. Expect ~150k-200k gas units. Use OpenZeppelin minimal proxy patterns to reduce costs. Testnets (Goerli, Sepolia) are free.</p>

          <h3 style={h3Style}>Why can't users directly call transferFrom without approval?</h3>
          <p>Security. If approve wasn't required, anyone could steal your tokens. Approval ensures user explicitly authorizes spending. This 2-step process (approve + transferFrom) is intentional.</p>

          <h3 style={h3Style}>Is ERC-20 secure?</h3>
          <p>Yes, when implemented correctly. OpenZeppelin ERC-20 is battle-tested. Risks: (1) Custom implementations have bugs. (2) Approval vulnerabilities (race condition). (3) Missing access control (anyone can mint). Use OpenZeppelin library, run audits.</p>

          <h3 style={h3Style}>What happens if I approve a malicious contract?</h3>
          <p>Malicious contract can steal all your tokens (up to approved amount). Always read smart contract code before approving. Check Etherscan for audit badges. For new protocols, start with small approval amount, increase if safe.</p>

          <h3 style={h3Style}>Can I make tokens deflationary (burn on transfer)?</h3>
          <p>Yes. Implement burn in transfer function (burn small % of transfer). Example: transfer(to, 100) burns 1, transfers 99. Reduces total supply over time. Used by: SafeMoon, Shiba Inu (v1). Side effect: reduces value of holders' tokens (not recommended).</p>

          <h3 style={h3Style}>What's the difference between approve and increaseAllowance?</h3>
          <p>approve(spender, 100): Sets allowance to exactly 100 (overwrites previous). increaseAllowance(spender, 100): Adds 100 to existing allowance. If allowance was 50, it becomes 150. Use increaseAllowance to avoid race conditions.</p>
        </section>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/tools/compound-interest-crypto-calculator" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Compound Interest Crypto Calculator</Link></li>
            <li><Link href="/tools/crypto-airdrop-tracker" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Airdrop Tracker</Link></li>
            <li><Link href="/tools/crypto-correlation-matrix" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Correlation Matrix</Link></li>
            <li><Link href="/tools/crypto-exchange-fee-comparison-tool" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Exchange Fee Tool</Link></li>
          </ul>
        </nav>

{/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "ERC-20 Token Standard Explained 2026: Functions, Approvals", "description": "Complete guide to ERC-20 token standard. Learn 6 required functions (transfer, approve, balanceOf), events, decimal precision. Compare ERC-20 vs ERC-721 vs", "url": "https://degen0x.com/learn/erc-20-token-standard-explained", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
      <RelatedContent category="learn" currentSlug="/learn/erc-20-token-standard-explained" />
      </article>
  );
}
