import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Crypto Airdrop? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what a crypto airdrop is, how airdrops work, the different types, and how to qualify for them. A complete guide to free token distributions.",
};

export default function AirdropPage() {
  return (
    <LearnPageLayout
      title="What Is a Crypto Airdrop?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A crypto airdrop is a distribution of free tokens or coins sent directly to wallet addresses. Projects use airdrops to reward early adopters, incentivize usage, distribute governance tokens, or generate awareness. While some airdrops have been worth thousands of dollars, they also carry risks including scams and tax implications."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-an-airdrop", title: "What Is an Airdrop?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-airdrops-work", title: "How Airdrops Work", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-airdrops", title: "Types of Airdrops", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-airdrops-matter", title: "Why Airdrops Matter", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "Are crypto airdrops free money?",
          answer:
            "Airdrops distribute tokens at no direct cost, but they are not risk-free. You may need to meet eligibility criteria, the tokens may have little value, and in many jurisdictions airdropped tokens are taxable income at the time of receipt. Always research the project before interacting with airdrop claims.",
        },
        {
          question: "How do I qualify for airdrops?",
          answer:
            "Most airdrops reward users who have interacted with a protocol before the snapshot date. This can include making swaps on a DEX, providing liquidity, bridging assets, or holding specific tokens. Using protocols on testnets can also qualify you for future airdrops.",
        },
        {
          question: "Can airdrops be scams?",
          answer:
            "Yes. Scam airdrops may ask you to connect your wallet to a malicious site, approve dangerous token permissions, or send crypto to claim tokens. Legitimate airdrops never require you to send money or approve unlimited token spending. Always verify through official project channels.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Governance Token?", href: "/learn/glossary/governance-token", category: "Glossary" },
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is a dApp?", href: "/learn/glossary/dapp", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is an Airdrop?</h2>
      <p>
        An airdrop is a method of distributing cryptocurrency tokens to a large number of wallet addresses, typically for free. The term comes from the idea of dropping supplies from the air. In crypto, projects &quot;drop&quot; tokens into wallets as a way to bootstrap their community, reward early users, or decentralize token ownership.
      </p>
      <p>
        Some of the most notable airdrops include Uniswap (UNI), which gave 400 tokens to every wallet that had used the protocol, and Arbitrum (ARB), which rewarded early users of its Layer 2 network. These airdrops were worth significant sums, turning routine protocol usage into substantial windfall gains.
      </p>

      <h2 id="how-it-works">How Airdrops Work</h2>
      <p>
        The typical airdrop process starts with a project taking a snapshot of blockchain activity at a specific block number. The snapshot records which wallets meet the eligibility criteria. After the snapshot, the project announces the airdrop and provides a claims page where eligible users can connect their wallet and claim tokens.
      </p>
      <p>
        Some airdrops are distributed automatically to qualifying wallets without any claim process. Others require users to complete specific actions such as following social media accounts, joining Discord servers, or providing liquidity. The allocation size usually depends on how much you interacted with the protocol.
      </p>

      <h2 id="types">Types of Airdrops</h2>
      <p>
        Retroactive airdrops reward past users of a protocol and are the most valuable type. Holder airdrops go to wallets holding a specific token. Community airdrops target members of a project&apos;s social channels. Incentivized airdrops require completing tasks like trading or providing liquidity. Testnet airdrops reward users who test early protocol versions.
      </p>
      <p>
        There are also hard-fork airdrops, where holders of an existing cryptocurrency receive new tokens when the chain splits. Bitcoin Cash (BCH) was airdropped to all Bitcoin holders during the 2017 hard fork.
      </p>

      <h2 id="why-it-matters">Why Airdrops Matter</h2>
      <p>
        Airdrops serve several important functions in the crypto ecosystem. They help decentralize token ownership by distributing tokens widely rather than concentrating them among founders and investors. They reward the earliest users who took risks using unproven protocols. They also create engaged communities of token holders who have a stake in the project&apos;s governance and success.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Not all airdrops are legitimate. Scammers create fake airdrop campaigns to trick users into connecting wallets to malicious smart contracts, which can drain funds. Never interact with unsolicited tokens that appear in your wallet, and always verify claims through official project channels. Additionally, airdropped tokens may be taxable income in many jurisdictions, so keep records for tax purposes.
      </p>
    </LearnPageLayout>
  );
}
