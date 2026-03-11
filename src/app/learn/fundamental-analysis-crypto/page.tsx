import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Fundamental Analysis for Crypto (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn how to evaluate cryptocurrency projects through fundamental analysis: tokenomics, team assessment, technology evaluation, market fit, and on-chain metrics that reveal a project's true health.",
};

export default function FundamentalAnalysisCryptoPage() {
  return (
    <LearnPageLayout
      title="Fundamental Analysis for Crypto"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="Fundamental analysis in crypto involves evaluating a project's intrinsic value by examining its technology, team, tokenomics, market fit, competitive positioning, and on-chain activity. Unlike traditional stock analysis, which relies on revenue, earnings, and cash flows, crypto fundamental analysis must assess open-source protocols, token economic models, community strength, and technical innovation. Mastering these techniques helps you distinguish genuinely valuable projects from hype-driven speculation."
      toc={[
        { id: "team-technology", title: "Evaluating the Team and Technology", level: 2 },
        { id: "tokenomics", title: "Analyzing Tokenomics", level: 2 },
        { id: "on-chain-metrics", title: "Key On-Chain Metrics", level: 2 },
        { id: "market-competitive", title: "Market Fit and Competitive Analysis", level: 2 },
        { id: "red-flags", title: "Red Flags to Watch For", level: 2 },
      ]}
      faqs={[
        {
          question: "How is crypto fundamental analysis different from stock analysis?",
          answer:
            "Traditional stock analysis relies on financial statements, revenue, and earnings. Most crypto projects do not generate traditional revenue in the same way. Instead, you evaluate token supply dynamics, protocol usage metrics, developer activity, governance participation, and network effects. On-chain data provides transparency that traditional companies do not offer, allowing for more granular analysis.",
        },
        {
          question: "What are the most important metrics to look at?",
          answer:
            "Key metrics include active users and addresses, transaction volume, total value locked (for DeFi), developer activity on GitHub, token distribution and vesting schedules, revenue and fee generation, and competitive market share. No single metric tells the whole story — combine multiple data points to form a comprehensive view of the project's health and trajectory.",
        },
        {
          question: "Where can I find data for crypto fundamental analysis?",
          answer:
            "Useful resources include DeFiLlama (TVL and protocol data), Token Terminal (revenue and financial metrics), Dune Analytics (customizable on-chain queries), CoinGecko/CoinMarketCap (market data), GitHub (developer activity), and governance forums (community engagement). Block explorers like Etherscan provide raw transaction data for deeper analysis.",
        },
      ]}
      relatedArticles={[
        { title: "Tokenomics Explained", href: "/learn/tokenomics-explained", category: "Learn" },
        { title: "Technical Analysis for Crypto", href: "/learn/technical-analysis-crypto", category: "Learn" },
        { title: "Crypto Market Indicators", href: "/learn/crypto-market-indicators", category: "Learn" },
        { title: "Crypto Portfolio Management", href: "/learn/crypto-portfolio-management", category: "Learn" },
      ]}
    >
      <section id="team-technology">
        <h2>Evaluating the Team and Technology</h2>
        <p>
          The team behind a crypto project is one of the strongest indicators of its potential success. Research the founders' and core contributors' backgrounds: have they built successful projects before? Do they have relevant technical expertise? Are they publicly identified or anonymous? While anonymity is not automatically a red flag in crypto, it does increase risk. Check LinkedIn profiles, GitHub contributions, previous project involvement, and conference appearances to verify credentials.
        </p>
        <p>
          Technology assessment involves understanding the project's technical architecture, its innovation relative to competitors, and the quality of its codebase. Active GitHub repositories with regular commits from multiple contributors indicate ongoing development. Review the project's technical documentation, whitepaper, and architecture decisions. Is the technology genuinely novel, or is it a fork of an existing project with minimal modifications? Does the project solve a real problem, or is it technology in search of a use case? Third-party technical reviews and audit reports provide additional validation.
        </p>
      </section>

      <section id="tokenomics">
        <h2>Analyzing Tokenomics</h2>
        <p>
          Tokenomics encompasses the economic design of a token: its supply schedule, distribution, utility, and value capture mechanisms. Start with supply analysis: what is the maximum supply? How much is currently in circulation? What is the inflation rate? When do significant token unlocks occur (vesting cliffs for team and investor allocations)? A token with 10% of supply circulating and 90% unlocking over the next year faces massive selling pressure regardless of project quality.
        </p>
        <p>
          Token utility determines whether there is genuine demand for holding the token beyond speculation. Does the token capture a share of protocol revenue (like buybacks or staking yields from real fees)? Is it required for governance participation? Does it serve as collateral or payment within the ecosystem? Tokens with strong utility and value accrual mechanisms have more sustainable demand than those that exist purely for speculative trading. Compare the fully diluted valuation (FDV) against current revenue and user metrics to assess whether the token is reasonably valued.
        </p>
      </section>

      <section id="on-chain-metrics">
        <h2>Key On-Chain Metrics</h2>
        <p>
          On-chain data provides transparent, real-time insights into a project's actual usage and adoption. Daily active addresses measure how many unique wallets interact with the protocol. Transaction count and volume show the level of economic activity. For DeFi protocols, Total Value Locked (TVL) indicates user trust and capital commitment, while protocol revenue (fees paid by users) measures genuine demand for the service.
        </p>
        <p>
          Developer activity metrics from GitHub — including commit frequency, contributor count, and code review activity — indicate the project's development momentum. Token holder distribution reveals whether ownership is concentrated among a few whales or distributed broadly across many holders. Staking ratios show long-term holder conviction. Growth trends in these metrics matter more than absolute values: a protocol growing its active users and revenue month-over-month is more attractive than one with larger absolute numbers but declining engagement.
        </p>
      </section>

      <section id="market-competitive">
        <h2>Market Fit and Competitive Analysis</h2>
        <p>
          Evaluate the total addressable market for the problem the project is solving and its competitive position within that market. Is the DeFi lending protocol competing against ten other similar protocols, or does it have a unique approach that differentiates it? Market share trends are important: a protocol gaining share in a growing market is the strongest signal, while one losing share even as the market grows suggests competitive weakness.
        </p>
        <p>
          Consider network effects and switching costs. Protocols with strong network effects (like DEXs where liquidity attracts traders who attract more liquidity) build defensible moats. Composability with other DeFi protocols creates integration dependencies that increase switching costs. Ecosystem partnerships, exchange listings, and institutional adoption provide additional validation. Compare the project's valuation multiples (FDV/Revenue, FDV/TVL) against comparable projects to assess relative value.
        </p>
      </section>

      <section id="red-flags">
        <h2>Red Flags to Watch For</h2>
        <p>
          Be wary of projects that focus more on marketing and price promotion than on product development and user acquisition. Frequent token rebrands, changing roadmaps, and missed deadlines suggest poor execution. Extreme token concentration where insiders hold the majority of supply without meaningful vesting creates misaligned incentives. Anonymous teams combined with large fundraises and aggressive token unlocks are among the highest-risk profiles.
        </p>
        <p>
          Watch for metrics that do not add up: TVL that comes primarily from token incentives (mercenary capital that will leave when incentives end), user counts inflated by airdrop farming (bots creating activity for potential token rewards), and revenue figures that include unsustainable token emissions rather than genuine fee income. The best fundamental analysis triangulates multiple data sources and applies critical thinking to distinguish genuine traction from manufactured metrics.
        </p>
      </section>
    </LearnPageLayout>
  );
}
