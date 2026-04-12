import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: 'DYOR Crypto: How to Research Any Token Before Buying (2026)',
  description: 'Complete guide to DYOR (Do Your Own Research) for crypto tokens. Learn the 10-step framework, red flags, essential tools, and how to evaluate tokenomics and on-chain data like a pro.',
  keywords: ['DYOR crypto', 'how to research crypto tokens', 'token due diligence', 'cryptocurrency research', 'token analysis', 'crypto scams', 'tokenomics analysis', 'on-chain analysis', 'crypto education'],
  openGraph: {
    type: 'article',
    title: 'DYOR Crypto: How to Research Any Token Before Buying (2026)',
    description: 'Complete guide to DYOR (Do Your Own Research) for crypto tokens. Learn the 10-step framework, red flags, essential tools, and how to evaluate tokenomics and on-chain data like a pro.',
    publishedTime: '2026-03-28T00:00:00Z',
    url: `${SITE_URL}/learn/dyor-token-research-guide-2026`,
    images: [
      {
        url: `${SITE_URL}/og-dyor-token-research.svg`,
        width: 1200,
        height: 630,
        alt: 'DYOR Crypto Token Research Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DYOR Crypto: How to Research Any Token Before Buying (2026)',
    description: 'Complete guide to DYOR (Do Your Own Research) for crypto tokens. Learn the 10-step framework, red flags, essential tools, and tokenomics analysis.',
    images: [`${SITE_URL}/og-dyor-token-research.svg`],
  },
};

const articleSchema = generateArticleSchema({
  title: 'DYOR Crypto: How to Research Any Token Before Buying (2026)',
  description: 'Complete guide to DYOR (Do Your Own Research) for crypto tokens. Learn the 10-step framework, red flags, essential tools, and how to evaluate tokenomics and on-chain data like a pro.',
  url: `${SITE_URL}/learn/dyor-token-research-guide-2026`,
  datePublished: '2026-03-28T00:00:00Z',
  dateModified: '2026-03-28T00:00:00Z',
  author: 'degen0x',
  image: `${SITE_URL}/og-dyor-token-research.svg`,
});

const faqSchema = generateFAQSchema([
  {
    question: 'What does DYOR mean in crypto?',
    answer: 'DYOR stands for "Do Your Own Research." It\'s a fundamental principle in cryptocurrency investing that emphasizes conducting personal due diligence before investing in any token. This includes analyzing whitepapers, checking team credentials, evaluating tokenomics, and reviewing on-chain data rather than relying solely on influencer recommendations or hype.',
  },
  {
    question: 'How long does DYOR on a token typically take?',
    answer: 'A thorough DYOR analysis typically takes 2-4 hours for a serious investor, depending on the project\'s complexity. Initial screening can be done in 30 minutes, but comprehensive due diligence covering whitepaper, team, tokenomics, smart contracts, and on-chain metrics requires more time. Larger institutional investors may spend days or weeks on a single project.',
  },
  {
    question: 'What are the biggest red flags in token research?',
    answer: 'Major red flags include: anonymous teams with no verifiable history, unrealistic APY promises (1000%+), claims of locked liquidity without proof, aggressive marketing with no product, copy-pasted whitepapers, team token distribution exceeding 30%, no GitHub activity, and contracts that haven\'t been audited by reputable firms.',
  },
  {
    question: 'Can I really catch scams through DYOR?',
    answer: 'Yes, DYOR significantly increases your ability to identify scams before losing money. Many rug pulls and exit scams have visible red flags if you know where to look: unaudited contracts with admin functions, whale concentration in early holders, liquidity that can be removed immediately, or teams with history of failed projects. However, no research is 100% foolproof against sophisticated scams.',
  },
  {
    question: 'What\'s the difference between FDV and market cap?',
    answer: 'Market cap (price × circulating supply) reflects current token value. FDV (Fully Diluted Valuation) = price × total supply including vesting tokens. FDV is important because it shows what valuation would be if all tokens were in circulation. A low market cap with extremely high FDV suggests significant dilution risk when vesting schedules unlock.',
  },
  {
    question: 'Should I check smart contracts even if they\'re audited?',
    answer: 'Yes. Even audited contracts can have issues, and audits are point-in-time reviews. Check: admin functions that give devs excessive power, emergency withdrawal mechanisms, whether the audit is from a reputable firm like Certik or Trail of Bits, and whether any issues noted in the audit have been addressed. Always verify the audit is for the exact contract version currently deployed.',
  },
]);

const schema = combineSchemas(articleSchema, faqSchema);

export default function DYORTokenResearchGuidePage() {
  return (
    <>
      <StructuredData data={schema} />
      <article className="min-h-screen" style={{ backgroundColor: '#0d1117', color: '#e6edf3' }}>
        {/* Breadcrumb */}
        <div style={{ borderBottom: '1px solid #30363d', padding: '20px 0' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 20px' }}>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Learn', href: '/learn' },
                { label: 'DYOR Token Research Guide', href: '/learn/dyor-token-research-guide-2026' },
              ]}
            />
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '40px 20px' }}>
          {/* Badges */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
                backgroundColor: '#312e81',
                color: '#a78bfa',
              }}
            >
              Education
            </span>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
                backgroundColor: '#15803d',
                color: '#22c55e',
              }}
            >
              Beginner
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            DYOR: How to Research Any Crypto Token Before Buying in 2026
          </h1>

          {/* Meta Info */}
          <div style={{ marginBottom: '32px', color: '#8b949e', fontSize: '14px' }}>
            <p>Updated March 2026 · 12 min read</p>
          </div>

          {/* Hook Paragraph */}
          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '32px', color: '#e6edf3' }}>
            The crypto market in 2026 has evolved significantly, but one principle remains unchanged: DYOR—Do Your Own Research. Every week, countless tokens launch with promises of revolutionary technology and life-changing returns. Most fail. Many are outright scams. The difference between making informed decisions and losing your capital often comes down to one thing: how thoroughly you've researched the token before buying.
          </p>

          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '40px', color: '#e6edf3' }}>
            This guide walks you through a comprehensive 10-step DYOR framework used by professional traders, VCs, and serious investors. You'll learn how to analyze whitepapers, evaluate tokenomics, read on-chain data, spot red flags, and avoid some of the most common crypto scams. By the end, you'll have a repeatable system for assessing any token before risking your capital.
          </p>

          {/* Table of Contents */}
          <nav
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '40px',
            }}
          >
            <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#e6edf3' }}>
              Table of Contents
            </h2>
            <ol style={{ margin: 0, paddingLeft: '20px', color: '#58a6ff' }}>
              <li style={{ marginBottom: '10px' }}>
                <a href="#what-is-dyor" style={{ color: '#58a6ff', textDecoration: 'none' }}>
                  What Is DYOR and Why It Matters
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#10-step-framework" style={{ color: '#58a6ff', textDecoration: 'none' }}>
                  The 10-Step DYOR Framework
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#red-flags" style={{ color: '#58a6ff', textDecoration: 'none' }}>
                  Red Flags That Signal a Scam
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#essential-tools" style={{ color: '#58a6ff', textDecoration: 'none' }}>
                  Essential DYOR Tools in 2026
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#tokenomics-analysis" style={{ color: '#58a6ff', textDecoration: 'none' }}>
                  Evaluating Tokenomics Like a Pro
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#onchain-data" style={{ color: '#58a6ff', textDecoration: 'none' }}>
                  Reading On-Chain Data
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#case-studies" style={{ color: '#58a6ff', textDecoration: 'none' }}>
                  Case Studies: Good vs Bad Research
                </a>
              </li>
              <li>
                <a href="#dyor-checklist" style={{ color: '#58a6ff', textDecoration: 'none' }}>
                  DYOR Checklist Template
                </a>
              </li>
            </ol>
          </nav>

          {/* Section 1: What Is DYOR */}
          <section style={{ marginBottom: '40px' }} id="what-is-dyor">
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>
              What Is DYOR and Why It Matters
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              DYOR—Do Your Own Research—is more than a crypto slang term. It's a mindset. It reflects the core principle of decentralized finance: personal responsibility. In traditional investing, you might rely on financial advisors, credit rating agencies, or regulatory oversight. In crypto, you are the gatekeeper of your own capital.
            </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              The statistics are sobering. According to 2026 on-chain analytics, approximately 89% of new tokens launched never gain meaningful liquidity, and of those that do, a significant percentage are rug pulls or experience complete failure within 6 months. Projects with large marketing budgets and celebrity endorsements are not immune—several high-profile scams in 2025-2026 had millions in marketing spend.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              DYOR protects you by shifting power back to you. Instead of trusting a single person's recommendation (which may be biased), you analyze multiple data points: the whitepaper, the team's track record, the smart contract code, holder distribution, and community activity. This multi-factor approach catches red flags that casual investors miss.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              The irony is that DYOR doesn't require you to be a developer or financial expert. It requires patience, skepticism, and access to the right tools. This guide provides exactly that.
            </p>
          </section>

          {/* Section 2: 10-Step Framework */}
          <section style={{ marginBottom: '40px' }} id="10-step-framework">
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>
              The 10-Step DYOR Framework
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              Professional investors follow a systematic approach to token research. Here's the exact framework used by experienced traders and VC analysts:
            </p>

            <div
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
              }}
            >
              <ol style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3' }}>
                <li style={{ marginBottom: '14px', fontSize: '15px', lineHeight: 1.8 }}>
                  <strong>Check the whitepaper & documentation</strong> — Download the whitepaper and read it thoroughly. Look for: clear problem statement, specific technical solution, realistic roadmap with dates, transparent team section, and financial model. Red flag: marketing-heavy document with vague technical details or copy-pasted content from other projects.
                </li>
                <li style={{ marginBottom: '14px', fontSize: '15px', lineHeight: 1.8 }}>
                  <strong>Verify the team (LinkedIn, GitHub, past projects)</strong> — Check LinkedIn profiles for team members. Verify employment history and consistency across their profiles. Search GitHub repositories under their names. Look for code contributions to previous projects. Anonymous teams or fake profiles are major red flags. Ideally, find multiple team members with verifiable 5+ year histories in tech.
                </li>
                <li style={{ marginBottom: '14px', fontSize: '15px', lineHeight: 1.8 }}>
                  <strong>Analyze tokenomics (supply, distribution, vesting)</strong> — Understand total supply, circulating supply, max supply. Check token distribution: what % goes to team, investors, treasury, incentives? Examine vesting schedules—when do founder tokens unlock? High team allocation ({'>'}30%) with no vesting is dangerous. Calculate FDV vs market cap.
                </li>
                <li style={{ marginBottom: '14px', fontSize: '15px', lineHeight: 1.8 }}>
                  <strong>Review funding & investors</strong> — Who funded the project? Are the investors reputable VCs like Polychain, Paradigm, or Sequoia? Do they have follow-up participation rights? Check investor terms. Be skeptical of tokens with no institutional backing or only anonymous investor backing.
                </li>
                <li style={{ marginBottom: '14px', fontSize: '15px', lineHeight: 1.8 }}>
                  <strong>Audit smart contracts (Certik, Trail of Bits, etc.)</strong> — Has the contract been professionally audited? By which firm? Download the audit report and read it. Look for "high severity" issues. Were they fixed? Be wary of contracts that are unaudited or have only self-audits. Check if the deployed contract matches the audited code.
                </li>
                <li style={{ marginBottom: '14px', fontSize: '15px', lineHeight: 1.8 }}>
                  <strong>Check on-chain data (holders, whale concentration, txn volume)</strong> — Use Etherscan, Solscan, or chain-specific explorers. What's the distribution of holders? If the top 10 holders own {'>'}50% of tokens, liquidity is concentrated and vulnerable to dumps. Check trading volume and consistency. New tokens with volume spikes followed by death are suspicious.
                </li>
                <li style={{ marginBottom: '14px', fontSize: '15px', lineHeight: 1.8 }}>
                  <strong>Evaluate community (Discord, X/Twitter quality, not just size)</strong> — Join the Discord. Are discussions technical or purely hype-driven? Do mods respond to legitimate questions? Check Twitter followers for bot accounts (use tools like bot detector). Real communities have organic, sustained engagement. Large follower counts with zero engagement are purchased followers.
                </li>
                <li style={{ marginBottom: '14px', fontSize: '15px', lineHeight: 1.8 }}>
                  <strong>Compare competitors</strong> — Does similar technology exist? How is this project differentiated? Is the team trying to solve a problem that's already solved by established protocols (Uniswap, Aave, Curve)? Can they realistically compete? Honest teams acknowledge competitors; deceptive ones claim to be "the only solution."
                </li>
                <li style={{ marginBottom: '14px', fontSize: '15px', lineHeight: 1.8 }}>
                  <strong>Assess regulatory risk</strong> — In 2026, regulatory clarity has improved but risk remains. Is the token structured as a security? Could regulatory action affect its operation? Does the team have legal counsel? Are they building in jurisdictions with favorable frameworks (Liechtenstein, Singapore, Switzerland)?
                </li>
                <li style={{ fontSize: '15px', lineHeight: 1.8 }}>
                  <strong>Test the product yourself</strong> — Don't invest in tokens for products you haven't used. Deploy small amounts, interact with the smart contracts, test the UI. Is the product actually functional or vaporware? Are there bugs or poor UX? Real products have thoughtful design; scams often have broken functionality.
                </li>
              </ol>
            </div>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              This framework takes time, but it works. Investors who follow all 10 steps catch 95%+ of obvious scams before losing capital.
            </p>
          </section>

          {/* Section 3: Red Flags */}
          <section style={{ marginBottom: '40px' }} id="red-flags">
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>
              Red Flags That Signal a Scam
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              Not every failed project is a scam, but scams share common patterns. If you notice these red flags, walk away:
            </p>

            <div
              style={{
                backgroundColor: '#161b22',
                border: '3px solid #f85149',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
                borderLeft: '6px solid #f85149',
              }}
            >
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3' }}>
                <li style={{ marginBottom: '12px', fontSize: '15px' }}>
                  <strong>Anonymous team with no verifiable history</strong> — Anonymity is sometimes justified, but verify it. Real anonymous teams publish verifiable work (GitHub code, documentation). Teams that hide behind vague profiles and refuse verification are hiding something.
                </li>
                <li style={{ marginBottom: '12px', fontSize: '15px' }}>
                  <strong>Unrealistic APY promises (1000%+ yield)</strong> — If returns sound impossible, they are. Sustainable yield is constrained by protocol economics. 100%+ APY often comes from newly printed tokens with no backing. When those tokens flood the market, the APY collapses and early users dump on latecomers.
                </li>
                <li style={{ marginBottom: '12px', fontSize: '15px' }}>
                  <strong>Locked liquidity claims without proof</strong> — "Liquidity is locked forever" is meaningless without on-chain proof. Verify on platforms like Uniswap Analytics or Dune. Check the actual LP tokens are locked in a time-lock contract. Many projects provide fake lock screenshots.
                </li>
                <li style={{ marginBottom: '12px', fontSize: '15px' }}>
                  <strong>Aggressive marketing with no product</strong> — If the token has more Instagram ads than actual functionality, it's a red flag. Real products focus on building first, marketing second.
                </li>
                <li style={{ marginBottom: '12px', fontSize: '15px' }}>
                  <strong>Copy-pasted whitepaper</strong> — Use plagiarism checkers like Copyscape on whitepaper text. Many scams copy established projects (Uniswap, Curve) and swap in their own token name. Legitimate projects have original whitepapers with specific mechanics.
                </li>
                <li style={{ marginBottom: '12px', fontSize: '15px' }}>
                  <strong>Token distribution {'>'}30% to team</strong> — Teams with large allocations have incentive to dump on you. Legitimate projects cap team allocation at 10-20% with multi-year vesting. Check vesting schedules carefully—short vesting means fast dumps.
                </li>
                <li style={{ marginBottom: '12px', fontSize: '15px' }}>
                  <strong>No GitHub repository or inactive code</strong> — If the team claims to be building but has zero GitHub activity, they're not actually developing. Check commit history and code quality.
                </li>
                <li style={{ marginBottom: '12px', fontSize: '15px' }}>
                  <strong>Smart contract admin functions without timelock</strong> — If the contract has `onlyOwner` functions that can pause trading, mint tokens, or drain liquidity without a timelock, the team can scam you instantly.
                </li>
                <li style={{ marginBottom: '12px', fontSize: '15px' }}>
                  <strong>Extreme price action with no volume</strong> — Tokens that 10x in price with minimal trading volume are often manipulated (using bots to fake volume). Real price moves require real volume.
                </li>
                <li style={{ fontSize: '15px' }}>
                  <strong>Team members who have exit scammed before</strong> — Search team member names + "exit scam" or "rug pull." The crypto community has long memory. Developers who left projects that failed or revealed dishonesty are more likely to do it again.
                </li>
              </ul>
            </div>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              The more red flags present, the higher the scam probability. Even one major red flag warrants further investigation before investing.
            </p>
          </section>

          {/* Section 4: Essential Tools */}
          <section style={{ marginBottom: '40px' }} id="essential-tools">
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>
              Essential DYOR Tools in 2026
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              You don't need fancy Bloomberg terminals for token research. These free and affordable tools give you professional-grade data:
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              Market Data & Fundamentals
            </h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: '#e6edf3' }}>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>CoinGecko & CoinMarketCap</strong> — Check circulating supply, total supply, max supply, fully diluted valuation, historical price data, and exchange listings. Look at supply graphs to understand token release schedules.
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Token Explainer Sites</strong> — Websites like CoinMarketCap and CoinGecko often have team info, whitepaper links, and community links all in one place. Always verify information from primary sources though.
              </li>
            </ul>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              On-Chain Analysis
            </h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: '#e6edf3' }}>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Etherscan (Ethereum), Solscan (Solana), etc.</strong> — These block explorers show every transaction. Check: holder distribution, token supply, contract functions, and transaction history. Essential for any token launch verification.
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>DefiLlama</strong> — See total value locked (TVL) for any DeFi protocol. Compare with market cap (FDV). High FDV with low TVL suggests valuations are disconnected from actual usage.
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Dune Analytics</strong> — Create custom on-chain queries to analyze token holder behavior, daily active users, transaction patterns, and protocol metrics. Requires SQL knowledge but gives deep insights.
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Bubblemaps</strong> — Visualize token holder distribution. Shows immediately if token is concentrated in few whales (dangerous) or distributed across many addresses (healthier).
              </li>
            </ul>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              Contract Security
            </h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: '#e6edf3' }}>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Token Sniffer</strong> — Automated contract scanner that flags suspicious functions (mint, burn, honeypot indicators). Free and quick screening tool.
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Go Plus Security API</strong> — Scans smart contracts for red flags like unrestricted owner functions, unusual transfer logic, and backdoors.
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>OpenZeppelin Contracts</strong> — Reference for secure contract patterns. If a token's contract is significantly different from OpenZeppelin patterns, understand why.
              </li>
            </ul>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              Community & Sentiment
            </h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: '#e6edf3' }}>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Twitter Advanced Search</strong> — Search token name + "scam" or "rug pull" to see if community members have raised concerns.
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Discord Analytics</strong> — Check server activity, member growth trends, and message frequency. Healthy communities have consistent engagement, not bot-filled ghost towns.
              </li>
            </ul>
          </section>

          {/* Section 5: Tokenomics Analysis */}
          <section style={{ marginBottom: '40px' }} id="tokenomics-analysis">
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>
              Evaluating Tokenomics Like a Pro
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              Tokenomics—the economic design of a token—determines whether a project is sustainable or destined to fail. Here's what to analyze:
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              Supply Mechanics
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              <strong>Total Supply vs Circulating Supply:</strong> If circulating is 10% of total, 90% will eventually enter circulation. When? That depends on vesting schedules. Calculate the time horizon when all tokens are circulating—that's when maximum dilution happens and token pressure is highest.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              <strong>Inflation Schedule:</strong> Does the token emit new coins to validators/stakers? At what rate? Uniswap has NO inflation after initial distribution (deflationary due to fees burned). Other tokens inflate 1-5% annually (sustainable if revenue grows). Anything {'>'}10% annual inflation is aggressive.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              <strong>Token Burns:</strong> Do protocol fees burn tokens? Is there a buyback mechanism? Burns reduce supply and create scarcity. Ethereum's EIP-1559 burns transaction fees—this creates deflationary pressure that benefits token holders.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              Valuation Metrics
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              <strong>Market Cap vs FDV:</strong> Market cap = price × circulating supply. FDV (Fully Diluted Valuation) = price × total supply. Example: Token with circulating supply of 10M and total supply of 100M at $1 price. Market cap = $10M, FDV = $100M. The gap represents future dilution risk.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              A healthy ratio is FDV/Market Cap of 2-3x. Anything {'>'}5x means massive dilution incoming. When vesting cliffs arrive, token price often crashes as sellers enter the market simultaneously.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              <strong>Price per Token vs Utility:</strong> Don't be fooled by low prices. A token at $0.01 isn't necessarily cheaper than one at $100. Compare market caps and what utility they provide. Uniswap at $150 (high price) has legitimate utility; a meme coin at $0.000001 has none.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              Vesting Schedules
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              This is critical and often overlooked. Check: When do team tokens unlock? How much unlocks per month? Multi-year vesting (3-4 years) is healthy because it aligns team incentives with long-term success. Tokens that vest over 6 months have high sell pressure when cliffs hit. If a token's price pumps right before a major vesting cliff, be prepared for a dump.
            </p>
          </section>

          {/* Section 6: On-Chain Data */}
          <section style={{ marginBottom: '40px' }} id="onchain-data">
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>
              Reading On-Chain Data
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              On-chain data tells you what's actually happening with a token, not what the marketing says. Here's what to look for:
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              Holder Distribution
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              Use Etherscan or Bubblemaps. Look at the top 10, 50, 100 holders. What percentage of supply do they control? Healthy tokens have distributed ownership: top 10 holding {'<'}30%, top 100 holding {'<'}50%. If top 10 wallets own 80% of the token, it's extremely vulnerable to coordinated dumps.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              Watch for: Large holder wallets that are labeled as exchanges, team wallets, or liquidity pools. Determine which wallets are whales (individuals). If a single person/address holds 20%+ of the token, they can move the market unilaterally.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              DEX Liquidity Depth
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              Even a token with high price can be dangerous if liquidity is shallow. Check the DEX pool (usually Uniswap). What's the depth of the order book? If selling $100k worth of a token causes a 50% price crash, liquidity is too thin and the token is a rug-pull target.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              Healthy tokens have: Liquidity increasing over time (not decreasing), multiple pools across different DEXs, LP incentives that attract new liquidity providers.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              Trading Volume & Trends
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              Track 24h, 7d, 30d volume. Is volume growing or declining? Declining volume + rising price often precedes crashes. Check if volume spikes coincide with pumps. If a token pumps 200% with almost no volume, it's likely manipulation (bots trading with themselves) or a prelude to a dump.
            </p>
          </section>

          {/* Section 7: Case Studies */}
          <section style={{ marginBottom: '40px' }} id="case-studies">
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>
              Case Studies: Good vs Bad Research
            </h2>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              Good Research Example: Lido Finance (LDO)
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              If you had researched Lido in its early stages, green flags would have been obvious:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#e6edf3' }}>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Strong team:</strong> Founded by experienced DeFi researchers from Aave and other protocols with public profiles and GitHub contributions
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Clear use case:</strong> Solves a real problem (ETH 2.0 staking accessibility) with superior capital efficiency
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Institutional backing:</strong> Multiple reputable VCs participated in funding rounds
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Audited smart contracts:</strong> Multiple professional audits from Certik, Trail of Bits
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Transparent governance:</strong> DAO votes on protocol changes with clear processes
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Growing TVL:</strong> Consistently increased locked value as the protocol gained adoption
              </li>
            </ul>

            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: '#e6edf3' }}>
              Bad Research Example: Luna/UST Collapse (2022)
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px', color: '#e6edf3' }}>
              Luna was valued at $40B+ before collapsing to near-zero in weeks in May 2022. Red flags that were visible before collapse:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#e6edf3' }}>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Unrealistic mechanics:</strong> UST stablecoin relied on Luna arbitrage loops, not real collateral. Unsustainable at scale.
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Extreme FDV/Market Cap gap:</strong> Massive dilution scheduled. FDV exceeded realistic valuation.
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Whale concentration:</strong> Founder Luna Foundation Guard held massive positions with ability to influence ecosystem
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Aggressive marketing over fundamentals:</strong> Project was better known for celebrity endorsements (celebrities shilling on Twitter) than technical innovation
              </li>
              <li style={{ marginBottom: '10px', fontSize: '15px' }}>
                <strong>Regulatory red flags:</strong> UST structure created regulatory ambiguity that later became a flashpoint
              </li>
            </ul>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: '#e6edf3' }}>
              Investors who ran the DYOR framework on Luna would have caught these issues and either avoided the project or limited exposure. This is why process matters more than picking winners.
            </p>
          </section>

          {/* Section 8: DYOR Checklist */}
          <section style={{ marginBottom: '40px' }} id="dyor-checklist">
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>
              DYOR Checklist Template
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px', color: '#e6edf3' }}>
              Use this checklist for every token you research. Score each section and create a final decision score.
            </p>

            <div
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '14px', color: '#e6edf3' }}>
                Whitepaper & Documentation
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3', fontSize: '14px' }}>
                <li>☐ Whitepaper exists and is well-written</li>
                <li>☐ Clear problem statement and solution</li>
                <li>☐ Technical specifications are detailed</li>
                <li>☐ No plagiarized content detected</li>
                <li>☐ Realistic roadmap with dates</li>
              </ul>

              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '14px', marginTop: '20px', color: '#e6edf3' }}>
                Team & Leadership
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3', fontSize: '14px' }}>
                <li>☐ Team publicly identified with verifiable profiles</li>
                <li>☐ Relevant experience in relevant fields</li>
                <li>☐ GitHub contributions verified</li>
                <li>☐ No history of exit scams or failures</li>
                <li>☐ Key person risk mitigated (multiple leaders)</li>
              </ul>

              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '14px', marginTop: '20px', color: '#e6edf3' }}>
                Tokenomics
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3', fontSize: '14px' }}>
                <li>☐ Clear supply schedule (max supply defined)</li>
                <li>☐ Team allocation ≤30% with multi-year vesting</li>
                <li>☐ FDV/Market Cap ratio reasonable ({'<'}5x)</li>
                <li>☐ Vesting schedules clearly defined</li>
                <li>☐ Inflation rate sustainable</li>
              </ul>

              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '14px', marginTop: '20px', color: '#e6edf3' }}>
                Smart Contract & Security
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3', fontSize: '14px' }}>
                <li>☐ Smart contract professionally audited</li>
                <li>☐ Audit from reputable firm (Certik, Trail of Bits)</li>
                <li>☐ No unresolved "high severity" issues</li>
                <li>☐ Admin functions have timelock protection</li>
                <li>☐ Deployed contract matches audited code</li>
              </ul>

              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '14px', marginTop: '20px', color: '#e6edf3' }}>
                On-Chain Metrics
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3', fontSize: '14px' }}>
                <li>☐ Holder distribution not concentrated (top 10 {'<'}30%)</li>
                <li>☐ Liquidity pool shows reasonable depth</li>
                <li>☐ Trading volume consistent and organic</li>
                <li>☐ No suspicious whale movements before launch</li>
                <li>☐ Growth metrics trending positively</li>
              </ul>

              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '14px', marginTop: '20px', color: '#e6edf3' }}>
                Community & Communication
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3', fontSize: '14px' }}>
                <li>☐ Active Discord with genuine discussions</li>
                <li>☐ Twitter followers appear organic (low bot rate)</li>
                <li>☐ Team responds to legitimate questions</li>
                <li>☐ No censorship of critical voices</li>
                <li>☐ Regular updates and transparency</li>
              </ul>

              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '14px', marginTop: '20px', color: '#e6edf3' }}>
                Institutional & Regulatory
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3', fontSize: '14px' }}>
                <li>☐ Reputable VC backing or institutional support</li>
                <li>☐ Legal counsel engaged</li>
                <li>☐ Regulatory framework addressed</li>
                <li>☐ No pending legal issues</li>
                <li>☐ Securities compliance considered</li>
              </ul>

              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '14px', marginTop: '20px', color: '#e6edf3' }}>
                Product & Competition
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#e6edf3', fontSize: '14px' }}>
                <li>☐ Product is functional, not vaporware</li>
                <li>☐ Clear competitive differentiation</li>
                <li>☐ Realistic market opportunity assessment</li>
                <li>☐ Actively developed with recent commits</li>
                <li>☐ User adoption shows organic growth</li>
              </ul>

              <p style={{ fontSize: '14px', color: '#8b949e', marginTop: '20px', marginBottom: 0 }}>
                <strong>Scoring:</strong> 60+ checkmarks = strong invest signal | 40-59 = proceed cautiously | &lt;40 = avoid or heavy research
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', color: '#e6edf3' }}>
              Frequently Asked Questions
            </h2>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#e6edf3' }}>
                What does DYOR mean in crypto?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#e6edf3' }}>
                DYOR stands for "Do Your Own Research." It's a fundamental principle emphasizing personal due diligence before investing in any token. This includes analyzing whitepapers, checking team credentials, evaluating tokenomics, and reviewing on-chain data rather than relying on influencer recommendations or hype.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#e6edf3' }}>
                How long does DYOR on a token typically take?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#e6edf3' }}>
                A thorough DYOR analysis typically takes 2-4 hours for serious investors. Initial screening can be done in 30 minutes, but comprehensive due diligence covering whitepaper, team, tokenomics, smart contracts, and on-chain metrics requires more time. Institutional investors may spend days on a single project.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#e6edf3' }}>
                What are the biggest red flags in token research?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#e6edf3' }}>
                Major red flags include: anonymous teams with no verifiable history, unrealistic APY promises (1000%+), claims of locked liquidity without proof, aggressive marketing with no product, copy-pasted whitepapers, team token distribution exceeding 30%, no GitHub activity, and unaudited smart contracts with unchecked admin functions.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#e6edf3' }}>
                Can I really catch scams through DYOR?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#e6edf3' }}>
                Yes, DYOR significantly increases your ability to identify scams before losing money. Many rug pulls and exit scams have visible red flags: unaudited contracts with admin functions, whale concentration in early holders, removable liquidity, or teams with history of failed projects. However, no research is 100% foolproof against sophisticated scams.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#e6edf3' }}>
                What's the difference between FDV and market cap?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#e6edf3' }}>
                Market cap (price × circulating supply) reflects current token value. FDV (Fully Diluted Valuation) = price × total supply including vesting tokens. FDV is important because it shows what valuation would be if all tokens were in circulation. A low market cap with extremely high FDV suggests significant dilution risk when vesting schedules unlock.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#e6edf3' }}>
                Should I check smart contracts even if they're audited?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#e6edf3' }}>
                Yes. Even audited contracts can have issues—audits are point-in-time reviews. Check: admin functions that give devs excessive power, emergency withdrawal mechanisms, whether the audit is from a reputable firm like Certik or Trail of Bits, and whether any issues noted in the audit have been addressed. Always verify the audit is for the exact contract version currently deployed.
              </p>
            </div>
          </section>

          {/* Related Articles */}
          <section style={{ marginBottom: '40px', paddingTop: '40px', borderTop: '1px solid #30363d' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: '#e6edf3' }}>
              Related Articles
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <Link href="/learn/common-crypto-scams"
                style={{
                  padding: '16px',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#58a6ff',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#58a6ff';
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#30363d';
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: '#e6edf3' }}>
                  Common Crypto Scams
                </h3>
                <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                  Identify and avoid the most common crypto scams
                </p>
              </Link>

              <Link href="/learn/common-crypto-scams"
                style={{
                  padding: '16px',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#58a6ff',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#58a6ff';
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#30363d';
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: '#e6edf3' }}>
                  How to Read a Crypto Whitepaper
                </h3>
                <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                  Master the skill of reading and analyzing whitepapers
                </p>
              </Link>

              <Link href="/learn/common-crypto-scams"
                style={{
                  padding: '16px',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#58a6ff',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#58a6ff';
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#30363d';
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: '#e6edf3' }}>
                  Tokenomics & Protocol Revenue Guide
                </h3>
                <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                  Deep dive into token economics and sustainability
                </p>
              </Link>

              <Link href="/learn/common-crypto-scams"
                style={{
                  padding: '16px',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#58a6ff',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#58a6ff';
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#30363d';
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: '#e6edf3' }}>
                  On-Chain Analytics Guide 2026
                </h3>
                <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                  Learn to read and interpret on-chain metrics
                </p>
              </Link>

              <Link href="/learn/common-crypto-scams"
                style={{
                  padding: '16px',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#58a6ff',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#58a6ff';
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#30363d';
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: '#e6edf3' }}>
                  Token Screener Tool
                </h3>
                <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                  Screen tokens using multiple criteria
                </p>
              </Link>

              <Link href="/learn/common-crypto-scams"
                style={{
                  padding: '16px',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#58a6ff',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#58a6ff';
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#30363d';
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: '#e6edf3' }}>
                  Crypto Security Masterclass 2026
                </h3>
                <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                  Protect yourself and your portfolio from threats
                </p>
              </Link>
            </div>
          </section>

          {/* Disclaimer */}
          <section style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #30363d' }}>
            <p
              style={{
                fontSize: '13px',
                color: '#8b949e',
                lineHeight: 1.8,
                fontStyle: 'italic',
              }}
            >
              <strong>Disclaimer:</strong> This guide is for educational purposes only and should not be construed as financial or investment advice. Cryptocurrency investing carries significant risk, including loss of capital. Past performance does not guarantee future results. DYOR framework helps identify risks, but no research method is 100% foolproof. Always conduct your own due diligence and consult with qualified financial advisors before making investment decisions. degen0x is not responsible for investment losses resulting from token evaluation or market movements.
            </p>
          </section>
        </div>

        {/* Back to Top Button */}
        <BackToTop />
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
    </>
  );
}
