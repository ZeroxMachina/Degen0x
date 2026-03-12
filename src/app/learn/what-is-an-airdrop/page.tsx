import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Crypto Airdrop? Complete Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what crypto airdrops are, how they work, the different types, and how to position yourself for future airdrop opportunities.",
};

export default function WhatIsAnAirdropPage() {
  return (
    <LearnPageLayout
      title="What Is a Crypto Airdrop?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="A crypto airdrop is a distribution of free tokens or coins to wallet addresses, typically used by blockchain projects to reward early users, incentivize adoption, or decentralize token ownership. Airdrops have become a major part of the crypto ecosystem, with some distributing tokens worth thousands of dollars to eligible participants. Understanding how airdrops work is essential for anyone looking to maximize their opportunities in crypto."
      toc={[
        { id: "what-are-airdrops", title: "what-are-airdrops", level: 2 },
        { id: "what-are-crypto-airdrops", title: "What Are Crypto Airdrops?", level: 2 },
        { id: "types-of-airdrops", title: "types-of-airdrops", level: 2 },
        { id: "types-of-airdrops", title: "Types of Airdrops", level: 2 },
        { id: "how-to-qualify", title: "how-to-qualify", level: 2 },
        { id: "how-to-qualify-for-airdrops", title: "How to Qualify for Airdrops", level: 2 },
        { id: "risks-and-scams", title: "risks-and-scams", level: 2 },
        { id: "risks-and-scams-to-avoid", title: "Risks and Scams to Avoid", level: 2 }
      ]}
      faqs={[
        {
          question: "Are crypto airdrops free money?",
          answer:
            "While airdrops distribute tokens at no direct cost, they are not truly free. Most require prior usage of a protocol, which involves gas fees and time. Some require holding specific tokens. The value of airdropped tokens also fluctuates, and many drop in price shortly after distribution as recipients sell.",
        },
        {
          question: "Do I have to pay taxes on airdrops?",
          answer:
            "In most jurisdictions, airdrops are treated as taxable income at the fair market value of the tokens when received. This means you owe income tax on the value at the time of the airdrop, even if you do not sell immediately. Consult a tax professional for guidance specific to your location.",
        },
        {
          question: "How do I know if an airdrop is a scam?",
          answer:
            "Legitimate airdrops never ask you to send funds first, provide your seed phrase, or connect your wallet to unknown websites. Always verify airdrops through official project channels. Be suspicious of unsolicited tokens appearing in your wallet, as interacting with them can trigger malicious smart contracts.",
        },
      ]}
      relatedArticles={[
        { title: "How to Farm Crypto Airdrops", href: "/learn/crypto-airdrops-guide", category: "Learn Crypto" },
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn Crypto" },
        { title: "Common Crypto Scams", href: "/learn/common-crypto-scams", category: "Learn Crypto" },
        { title: "Tokenomics Explained", href: "/learn/tokenomics-explained", category: "Learn Crypto" },
      ]}
    >
      <section id="what-are-airdrops">
        <h2>What Are Crypto Airdrops?</h2>
        <p>
          Crypto airdrops are distributions of tokens from a project directly to users&apos; wallets. Projects use airdrops for several reasons: to reward early adopters who used their protocol before a token existed, to distribute governance tokens to create a decentralized community of stakeholders, and to generate awareness and adoption for new platforms. Major airdrops like Uniswap, Arbitrum, and Jito have distributed billions of dollars in total value.
        </p>
        <p>
          The airdrop model has evolved significantly since the early days of crypto when projects simply sent tokens to random wallet addresses. Modern airdrops typically reward specific on-chain activity, such as trading on a decentralized exchange, providing liquidity, bridging assets to a new chain, or participating in governance. This retroactive approach rewards genuine users rather than passive holders.
        </p>
      </section>

      <section id="types-of-airdrops">
        <h2>Types of Airdrops</h2>
        <p>
          Retroactive airdrops reward past usage of a protocol before a token launch. These are the most valuable type and have defined the airdrop meta. Uniswap airdropped 400 UNI to every address that had used the platform, worth over $1,200 at the time. Holder airdrops distribute tokens to wallets holding a specific cryptocurrency, like how ApeCoin was airdropped to Bored Ape NFT holders.
        </p>
        <p>
          Task-based airdrops require completing specific actions such as social media follows, testnet usage, or community participation. These tend to distribute smaller amounts. Governance airdrops distribute voting tokens to create decentralized protocol governance, as seen with Optimism and Arbitrum. Some projects use a points system where on-chain activity earns points that convert to tokens at a later date.
        </p>
      </section>

      <section id="how-to-qualify">
        <h2>How to Qualify for Airdrops</h2>
        <p>
          The best strategy for qualifying for airdrops is to be a genuine user of promising protocols that have not yet launched a token. Use decentralized exchanges, bridge assets between chains, provide liquidity, and participate in governance. Consistency matters more than volume in most airdrop criteria. Regular monthly usage across multiple protocols increases your chances significantly.
        </p>
        <p>
          Stay informed about upcoming projects by following crypto news, joining project Discords, and monitoring platforms that track airdrop opportunities. Testnet participation is another way to position yourself, as many projects reward testnet users during their mainnet token launch. Always use a dedicated wallet for airdrop farming and never invest more in gas fees than you can afford to lose.
        </p>
      </section>

      <section id="risks-and-scams">
        <h2>Risks and Scams to Avoid</h2>
        <p>
          Airdrop scams are extremely common. Phishing sites impersonating legitimate projects trick users into connecting their wallets and approving malicious transactions that drain their funds. Never click on airdrop links from unsolicited messages, emails, or social media ads. Always navigate directly to a project&apos;s official website to check for airdrops.
        </p>
        <p>
          Dust attacks involve sending small amounts of unknown tokens to your wallet. Interacting with these tokens, such as trying to swap or transfer them, can trigger malicious smart contract logic. If you receive tokens you did not expect, do not interact with them. Another risk is the Sybil problem, where projects filter out airdrop farmers who use multiple wallets, potentially disqualifying addresses suspected of gaming the system.
        </p>
      </section>
    </LearnPageLayout>
  );
}
