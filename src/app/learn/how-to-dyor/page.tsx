import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to DYOR (Do Your Own Research) in Crypto (${CURRENT_YEAR})`,
  description:
    "Master the art of doing your own research before investing in crypto. Learn how to evaluate projects, read whitepapers, analyze tokenomics, and use on-chain data.",
};

export default function HowToDYORPage() {
  return (
    <LearnPageLayout
      title="How to DYOR (Do Your Own Research)"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="14 min"
      intro="DYOR — Do Your Own Research — is more than just a popular crypto slogan. It is the single most important skill for anyone participating in the cryptocurrency market. With thousands of projects, constant hype cycles, and sophisticated scams, the ability to independently evaluate a crypto project's fundamentals, team, technology, and tokenomics is what separates informed investors from those who lose money following the crowd. This guide provides a structured framework for researching crypto projects effectively."
      toc={[
        { id: "why-dyor", title: "why-dyor", level: 2 },
        { id: "why-dyor-matters", title: "Why DYOR Matters", level: 2 },
        { id: "evaluating-team", title: "evaluating-team", level: 2 },
        { id: "evaluating-the-team", title: "Evaluating the Team", level: 2 },
        { id: "technology-product", title: "technology-product", level: 2 },
        { id: "analyzing-technology-and-product", title: "Analyzing Technology and Product", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "understanding-tokenomics", title: "Understanding Tokenomics", level: 2 },
        { id: "on-chain-analysis", title: "on-chain-analysis", level: 2 },
        { id: "on-chain-analysis-and-tools", title: "On-Chain Analysis and Tools", level: 2 },
        { id: "community-sentiment", title: "community-sentiment", level: 2 },
        { id: "community-and-market-sentiment", title: "Community and Market Sentiment", level: 2 }
      ]}
      faqs={[
        {
          question: "How long should I research a project before investing?",
          answer:
            "There is no fixed timeframe, but you should invest enough time to understand what the project does, who is building it, how the token economics work, and what the major risks are. For a major investment, this could mean days or weeks of research. A good rule of thumb: if you cannot explain to a friend what the project does and why it has value, you have not researched enough.",
        },
        {
          question: "What are the most important things to check?",
          answer:
            "Start with the team (are they public and credible?), then review the product (does it solve a real problem?), tokenomics (is the supply schedule and distribution fair?), and smart contract security (has the code been audited?). Also check for red flags like unrealistic promises, anonymous teams with no track record, heavily concentrated token ownership, and locked withdrawal functions.",
        },
        {
          question: "Can I trust crypto influencers for research?",
          answer:
            "Treat influencer content as a starting point, not a conclusion. Many influencers are paid to promote projects without disclosing the sponsorship. Others have genuine expertise but may have their own investment biases. Use influencer content to discover projects, but always verify their claims independently. Never invest based solely on someone else's recommendation.",
        },
        {
          question: "What is a whitepaper and should I read it?",
          answer:
            "A whitepaper is a detailed technical document that describes a project's technology, problem statement, solution, tokenomics, and roadmap. Reading the whitepaper (or at least the summary) is one of the most important DYOR steps. It reveals the quality of the team's thinking and the viability of their approach. If a project does not have a whitepaper or detailed documentation, that is a red flag.",
        },
      ]}
      relatedArticles={[
        { title: "How to Spot Crypto Scams", href: "/learn/crypto-scams", category: "Learn Crypto" },
        { title: "What Is Cryptocurrency?", href: "/learn/what-is-cryptocurrency", category: "Learn Crypto" },
        { title: "Crypto vs Stocks", href: "/learn/crypto-vs-stocks", category: "Learn Crypto" },
        { title: "Crypto Glossary", href: "/learn/crypto-glossary", category: "Learn Crypto" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
      ]}
    >
      <h2 id="why-dyor">Why DYOR Matters</h2>
      <p>
        The crypto market operates very differently from traditional financial markets. There are no securities regulators vetting token listings, no mandatory disclosures, and minimal consumer protection. Anyone can create a token in minutes and list it on a decentralized exchange. This freedom enables innovation but also creates an environment where misinformation, manipulation, and fraud are commonplace.
      </p>
      <p>
        Social media amplifies the problem. Hype cycles can drive token prices up dramatically, drawing in investors who buy based on trending hashtags rather than fundamentals. When the hype fades, prices often collapse, leaving late buyers with significant losses. Paid promotions, anonymous influencer endorsements, and coordinated pump-and-dump schemes are common.
      </p>
      <p>
        DYOR is your defense against these dynamics. By developing a systematic approach to evaluating projects, you can distinguish genuine innovation from empty hype, identify red flags before they become costly lessons, and make investment decisions based on evidence rather than emotion. The time you invest in research today can save you from substantial losses tomorrow.
      </p>

      <h2 id="evaluating-team">Evaluating the Team</h2>
      <p>
        The team behind a project is one of the strongest indicators of its potential success or failure. Look for team members with verifiable identities, relevant experience, and a track record of delivering on previous projects. LinkedIn profiles, GitHub activity, prior companies founded, academic credentials, and conference appearances all help establish credibility.
      </p>
      <p>
        Be cautious of fully anonymous teams. While pseudonymity has a place in crypto (Bitcoin&apos;s creator is anonymous), an anonymous team building a project that asks for your money creates a significant trust gap. If the team is anonymous, look for compensating factors like established reputation under their pseudonym, transparent governance, and time-locked or community-controlled treasury management.
      </p>
      <p>
        Check whether the team has appropriate advisors and backers. Reputable venture capital firms and angel investors perform their own due diligence before investing, so backing from established crypto VCs can be a positive signal (though not a guarantee). Review the team&apos;s communication patterns — do they provide regular, substantive updates? Do they engage transparently with community concerns, or do they dismiss criticism and ban questioners?
      </p>

      <h2 id="technology-product">Analyzing Technology and Product</h2>
      <p>
        Start by understanding the problem the project claims to solve. Is it a real problem that affects real users, or is it a solution in search of a problem? Does the project need a blockchain and a token, or could the same functionality be achieved with traditional technology? Many failed projects were technically sound but addressed problems that nobody actually had.
      </p>
      <p>
        Review the project&apos;s GitHub repository (if open-source) to assess development activity. Look for consistent commits over time (not just a burst of activity before a token launch), multiple contributors, code documentation, and test coverage. Tools like GitHub activity trackers and Electric Capital&apos;s Developer Report can help you assess whether a project has genuine developer engagement.
      </p>
      <p>
        Check whether the product is live and usable or still in development. A working product with active users is far more credible than a project that exists only as a whitepaper and promises. If the product is live, try using it yourself. Evaluate the user experience, the quality of documentation, and whether the product delivers on its promises. Also check for security audits — has the smart contract code been audited by reputable firms like Trail of Bits, OpenZeppelin, or Certik?
      </p>

      <h2 id="tokenomics">Understanding Tokenomics</h2>
      <p>
        Tokenomics (token economics) describes how a token is created, distributed, and used within its ecosystem. Key factors to analyze include total supply (how many tokens will ever exist), circulating supply (how many are currently in the market), inflation schedule (how fast new tokens are minted), and distribution (who holds the tokens and in what proportions).
      </p>
      <p>
        Token distribution is critical. If a large percentage of the supply is allocated to the team, early investors, or a single wallet, this concentration creates dump risk — those holders can crash the price by selling. Look for vesting schedules that lock team and investor tokens for extended periods (typically 1-4 years with gradual unlocks). Projects where insiders can sell all their tokens at launch are high risk.
      </p>
      <p>
        Consider the token&apos;s utility and value accrual. Does the token serve a genuine function within the ecosystem (governance, staking, fee payment), or is it primarily a speculative asset? How does the protocol generate revenue, and does that revenue flow back to token holders? Tokens with clear utility and value accrual mechanisms tend to have more sustainable long-term value than tokens whose price depends entirely on speculative demand.
      </p>

      <h2 id="on-chain-analysis">On-Chain Analysis and Tools</h2>
      <p>
        One of crypto&apos;s unique advantages is that blockchain data is publicly available. On-chain analysis tools let you verify claims about a project&apos;s activity, usage, and health rather than relying on self-reported metrics. DeFiLlama tracks Total Value Locked across DeFi protocols. Dune Analytics provides customizable dashboards for protocol-specific data. Block explorers like Etherscan let you examine smart contracts, token holders, and transaction history.
      </p>
      <p>
        Key on-chain metrics to monitor include daily active addresses (how many unique wallets are using the protocol), transaction volume (the value being processed), TVL trends (is the protocol growing or shrinking), smart contract interactions (are real users interacting, or is activity concentrated among a few wallets), and token holder distribution (is ownership becoming more or less concentrated over time).
      </p>
      <p>
        For token-specific analysis, check the top holders on a block explorer. If the top 10 wallets control a disproportionate share of supply (excluding known exchange and contract addresses), the token is concentrated and vulnerable to large sell-offs. Look at the token&apos;s liquidity on exchanges — low liquidity means that even moderate selling pressure can cause large price drops.
      </p>

      <h2 id="community-sentiment">Community and Market Sentiment</h2>
      <p>
        A healthy community is often a sign of a healthy project, but it requires discernment to evaluate. Look for communities where members discuss technical developments, ask substantive questions, and express both positive and critical views. Communities where dissent is censored, discussion is limited to price speculation, and engagement seems inorganic (bot-like repetitive messages) are warning signs.
      </p>
      <p>
        Follow the project on Discord, Telegram, Twitter (X), and governance forums. Pay attention to how the team interacts with the community. Responsive, transparent teams that address concerns directly inspire more confidence than teams that communicate only through marketing announcements. Governance forum activity (proposals, discussions, votes) indicates genuine decentralization and community involvement.
      </p>
      <p>
        Be aware of sentiment manipulation. Coordinated campaigns can artificially inflate social media engagement through paid followers, bot activity, and astroturfing. Check for organic engagement: are community members genuine individuals with diverse profiles and post histories, or do they appear to be new accounts created for the sole purpose of promoting the project? Tools like Lunar Crush and Santiment track social sentiment metrics that can help you identify unusual patterns.
      </p>
    </LearnPageLayout>
  );
}
