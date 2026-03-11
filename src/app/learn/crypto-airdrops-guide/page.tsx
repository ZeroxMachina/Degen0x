import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Airdrops Guide: How to Qualify and Stay Safe in ${CURRENT_YEAR}`,
  description:
    "Complete guide to cryptocurrency airdrops. Learn how to qualify for airdrops, identify legitimate opportunities, avoid scams, and participate in recent notable airdrops. Includes safety tips and airdrop resources.",
  keywords: [
    "crypto airdrops",
    "token airdrops",
    "airdrop scams",
    "qualification requirements",
    "free crypto",
    "airdrop tracker",
    "phishing prevention",
  ],
};

export default function CryptoAirdropsGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Airdrops Guide: How to Participate Safely"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min"
      intro="Crypto airdrops distribute free tokens to blockchain users or community members. Projects use airdrops to incentivize adoption, reward early users, or distribute tokens fairly. Airdrops have distributed billions in token value: Uniswap's 2020 airdrop gave thousands of users free UNI tokens worth thousands each. However, airdrops attract scammers who create fake airdrop claims to steal funds or personal information. This guide explains how airdrops work, qualification requirements, how to identify legitimate airdrops, safety tips, recent notable airdrops, and common scam tactics."
      toc={[
        { id: "what-are-airdrops", title: "What Are Crypto Airdrops?", level: 2 },
        { id: "why-projects-airdrop", title: "Why Do Projects Use Airdrops?", level: 2 },
        { id: "airdrop-types", title: "Types of Airdrops and Qualification", level: 2 },
        { id: "finding-airdrops", title: "Finding Legitimate Airdrops", level: 2 },
        { id: "airdrop-scams", title: "Identifying Airdrop Scams", level: 2 },
        { id: "airdrop-safety", title: "Airdrop Safety Best Practices", level: 2 },
        { id: "notable-airdrops", title: "Notable Airdrops and Their Impact", level: 2 },
      ]}
      faqs={[
        {
          question: "Are airdrops really free, or is there a catch?",
          answer:
            "Legitimate airdrops are free—you don't pay to receive tokens. However, there's often an implicit cost: time investment (completing tasks, following social media), gas fees (for claiming on-chain), or opportunity cost (waiting for vesting periods). Some airdrops require holding specific tokens or completing tasks. The catch is rarely financial but usually time or computational cost. Scam airdrops are different—they steal funds or personal information. Real airdrops never ask for private keys or sensitive data.",
        },
        {
          question: "What was the Uniswap airdrop?",
          answer:
            "In September 2020, Uniswap airdropped 400 UNI tokens (~$1,500 at launch) to every address that had used the Uniswap protocol. This rewarded early users and distributed governance tokens fairly. The airdrop was massively successful: eligible users suddenly had substantial free tokens. This created significant goodwill and demonstrated the power of airdrops to incentivize adoption. Uniswap's airdrop is considered one of crypto's most successful, rewarding genuine users retroactively.",
        },
        {
          question: "How do I verify if an airdrop is legitimate?",
          answer:
            "Check official sources: visit the project's official website, Twitter, and Discord. Legitimate projects announce airdrops clearly through official channels. Be skeptical of emails or unsolicited DMs offering airdrops—these are typically scams. Verify token contracts on blockchain explorers (Etherscan for Ethereum). Check community discussions on Reddit and Twitter. If something feels rushed, requires personal data, or seems too good to be true, it likely is. Legitimate airdrops don't create artificial urgency.",
        },
        {
          question: "What common airdrop scams should I avoid?",
          answer:
            "Fake contract approvals: scammers create fake links requiring wallet approval, draining connected wallets. Private key requests: no legitimate airdrop asks for private keys or seed phrases. Phishing emails/DMs: scammers impersonate projects requesting personal information. Fake websites: clones of legitimate project sites with slight URL variations. Paid 'guarantees': scams claiming to guarantee airdrop allocation for a fee. Token presale scams: offering to 'lock in' airdrop pricing at low rates. If an airdrop requires giving access to your wallet or personal information, it's a scam.",
        },
        {
          question: "How do I claim an airdrop safely?",
          answer:
            "Verify legitimacy first through official channels. Use a hardware wallet or new wallet with minimal funds if possible. Never connect wallets to unverified websites. Always double-check URLs and verify HTTPS. For contract interactions, understand what permissions you're granting. Review contract code if possible. Start with small amounts to test legitimacy. Never share private keys or seed phrases. Wait until the airdrop is widely claimed before participating—legitimate airdrops don't expire overnight. When in doubt, ask in reputable crypto communities.",
        },
        {
          question: "What are recent notable airdrops in 2024-2025?",
          answer:
            "Recent notable airdrops include protocol governance token distributions, layer 2 airdrops, and DeFi protocol airdrops. Projects often airdrop to incentivize ecosystem participation. However, be cautious: airdrop expectations can be overhyped, and many anticipated airdrops fail to materialize. Always verify through official project sources rather than community speculation. The most valuable airdrops are those that reward genuine usage—be skeptical of airdrops with unclear qualification criteria.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Cryptocurrency?", href: "/learn/what-is-cryptocurrency", category: "Learn Crypto" },
        { title: "What Is a Wallet?", href: "/learn/what-is-a-wallet", category: "Learn Crypto" },
        { title: "DeFi Risks and Safety", href: "/learn/defi-risks-safety", category: "Learn Crypto" },
        { title: "Smart Contracts Explained", href: "/learn/smart-contracts-explained", category: "Learn Crypto" },
      ]}
    >
      <h2 id="what-are-airdrops">What Are Crypto Airdrops?</h2>
      <p>
        Crypto airdrops distribute free tokens to blockchain addresses or users. A project creates new tokens and distributes them to eligible addresses without requiring payment. Eligibility varies: some airdrops reward all users who held a specific token on a snapshot date, others reward users who completed specific tasks or participated in community activities. Airdrops are direct distributions to wallets—recipients simply receive tokens without effort beyond qualification.
      </p>
      <p>
        Airdrops represent a distribution mechanism fundamentally different from traditional securities offerings. Rather than selling tokens to investors, projects distribute tokens to users, building community and aligning incentives. Airdrops have distributed billions in value, sometimes making recipients wealthy. However, this attracts scammers who create fake airdrops to steal funds. Understanding legitimate airdrops and scam tactics is essential.</p>

      <h2 id="why-projects-airdrop">Why Do Projects Use Airdrops?</h2>
      <p>
        Projects airdrop tokens for several reasons. First, fair distribution: rather than concentrating tokens with founders or investors, airdrops distribute widely to users. Second, adoption incentives: rewarding early users creates strong community and network effects. Third, governance distribution: protocols airdrop governance tokens to users, enabling decentralized decision-making. Fourth, community building: airdrops create goodwill and media attention. Fifth, network effect: if more users have tokens, more people participate in the ecosystem, increasing value.
      </p>
      <p>
        Airdrops are powerful marketing: Uniswap's airdrop cost millions in tokens but created massive adoption and goodwill. For recipients, airdrops can be life-changing: users who held OP (Optimism) early received thousands in AIRDROP tokens. This creates powerful incentives to participate in new protocols early, hoping for future airdrops.</p>

      <h2 id="airdrop-types">Types of Airdrops and Qualification</h2>
      <p>
        Holder airdrops reward users who held specific tokens on a snapshot date. If you held 1 ETH on a specific block, you might receive 100 new tokens. Task-based airdrops require completing actions: following social media, joining Discord, completing transactions. Retroactive airdrops reward users who used a protocol before the airdrop announcement—Uniswap's was retroactive. Referral airdrops reward users for referring friends. Bounty airdrops reward specific contributions (bug reporting, content creation). Liquidity airdrops reward users who provided liquidity to a trading pair.
      </p>
      <p>
        Qualification mechanisms vary widely. Some airdrops are entirely passive (you receive tokens for holding). Others require significant effort (completing 10+ tasks). The more effort required, the fewer eligible users, but the more tokens each receives. Projects choose qualification mechanisms based on desired distribution and target audience.</p>

      <h2 id="finding-airdrops">Finding Legitimate Airdrops</h2>
      <p>
        Official sources are most reliable: project websites, official social media accounts, and Discord communities announce legitimate airdrops. Airdrop tracker websites (like Dune Analytics, Airdrops.io) aggregate upcoming airdrops but verify claims independently through official sources. When you discover an airdrop, verify through the project's official website and multiple official channels. Be skeptical of emails or DMs promoting airdrops—scammers frequently impersonate projects this way.
      </p>
      <p>
        Community discussion can identify airdrops but is unreliable for verification—community members often spread rumors about upcoming airdrops that don't materialize. Always verify through official sources. Legitimate projects invest in clear airdrop documentation, explaining qualification criteria and distribution timelines. If communication is unclear or rushed, be skeptical.</p>

      <h2 id="airdrop-scams">Identifying Airdrop Scams</h2>
      <p>
        Scammers use airdrops to steal funds or personal information. Common tactics: (1) Fake contract approvals: creating cloned websites that require wallet approvals, draining connected wallets when users interact. (2) Private key requests: any airdrop requesting private keys or seed phrases is a scam. (3) Phishing links: impersonating projects with fake URLs (airdrop-clmm.xyz instead of airdrop.com). (4) Token presale scams: claiming to offer 'locked-in' pricing for future airdrops (a guarantee of losses). (5) Investment requirements: claiming investment 'unlocks' airdrops (lies). (6) Fake accounts: scammers using official-seeming accounts on social media.
      </p>
      <p>
        Red flags: artificial urgency ("claim in 24 hours!"), requests for personal information or wallet control, investment requirements, unprofessional communication, or URLs that differ slightly from official sites. Legitimate airdrops never create artificial urgency or require investment. Trust official sources and move slowly—if you miss an airdrop, it wasn't worth compromising security.</p>

      <h2 id="airdrop-safety">Airdrop Safety Best Practices</h2>
      <p>
        Always verify legitimacy through official channels before participating. Visit official websites directly (don't click links) or contact through official social media. For contract interactions, use a reputable hardware wallet or a fresh wallet with minimal funds. Review contract permissions before approving—understand what access you're granting. Never share private keys, seed phrases, or wallet recovery information for any reason. Check blockchain explorers (Etherscan) to verify token contracts—if a contract doesn't exist or has suspicious code, it's fake.
      </p>
      <p>
        When claiming, ensure you're on an official, HTTPS-secured website. Double-check URLs character by character. If the airdrop involves connecting your wallet to a website, test with minimal funds first. Be skeptical of airdrop promises that seem too large—scammers often advertise fake massive airdrops to attract victims. Wait until an airdrop is widely claimed and discussed before participating—legitimate airdrops don't expire overnight. When in doubt, ask in reputable crypto communities like r/cryptocurrency, but verify through official sources regardless.</p>

      <h2 id="notable-airdrops">Notable Airdrops and Their Impact</h2>
      <p>
        Uniswap's 2020 airdrop is crypto's most famous: 400 UNI tokens (~$1,500 at launch) to every address that used the protocol. Recipients were shocked by free valuable tokens; the airdrop created massive goodwill and adoption. Optimism's OP airdrop distributed governance tokens to users who interacted with the layer 2. Arbitrum's ARB airdrop similarly rewarded users. More recently, Coinbase's Base layer 2 distributed airdrops to incentivize ecosystem growth.
      </p>
      <p>
        These airdrops succeeded because they rewarded genuine users for participation. Contrast with failed airdrops: projects that set qualification criteria so restrictive few qualify, or airdrops that are so hyped that scammers create fake versions. The most valuable airdrops are those that genuinely reward ecosystem participation and align project incentives with user interests. However, airdrop expectations can be overhyped—many anticipated airdrops fail to materialize or provide minimal value. Participate in airdrops opportunistically but never make decisions based on airdrop expectations.</p>
    </LearnPageLayout>
  );
}
