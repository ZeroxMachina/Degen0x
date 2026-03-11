import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Fundamental Analysis ${CURRENT_YEAR} - How to Evaluate Projects`,
  description: `Learn how to perform fundamental analysis on crypto projects. On-chain metrics, developer activity, tokenomics, and competitive analysis explained.`,
  alternates: { canonical: "/investing/learn/fundamental-analysis" },
};

const toc = [
  { id: "overview", title: "What Is Fundamental Analysis", level: 2 },
  { id: "on-chain-metrics", title: "On-Chain Metrics", level: 2 },
  { id: "developer-activity", title: "Developer Activity", level: 2 },
  { id: "competitive-analysis", title: "Competitive Analysis", level: 2 },
];

const faqs = [
  { question: "What metrics should I look at?", answer: "Key metrics include: TVL (Total Value Locked) for DeFi protocols, daily active addresses, transaction volume, developer commits on GitHub, protocol revenue, market cap to revenue ratio, token distribution, and ecosystem growth. No single metric tells the whole story; use multiple data points." },
  { question: "Where can I find on-chain data?", answer: "Dune Analytics, DefiLlama, Token Terminal, and Messari are excellent sources for on-chain and fundamental data. CoinGecko and CoinMarketCap provide basic metrics. GitHub activity can be tracked directly or through developer activity dashboards." },
  { question: "How important is the team behind a project?", answer: "Very important. Look for teams with relevant experience, public identities, track records of delivering on roadmaps, and transparent communication. Anonymous teams are higher risk. Check LinkedIn profiles, past projects, and community engagement. Strong advisory boards and investor backing add credibility." },
];

export default function FundamentalAnalysisPage() {
  return (
    <LearnPageLayout
      title="Crypto Fundamental Analysis"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="11 min"
      intro="Fundamental analysis in crypto evaluates the intrinsic value of a project based on technology, adoption, team quality, tokenomics, and competitive position. Unlike trading based on charts, fundamental analysis focuses on whether a project has real long-term value."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Technical Analysis", href: "/investing/learn/technical-analysis", category: "Investing" },
        { title: "Tokenomics Guide", href: "/investing/learn/tokenomics-guide", category: "Investing" },
      ]}
    >
      <section id="overview" className="mb-10">
        <h2>What Is Fundamental Analysis?</h2>
        <p>
          Fundamental analysis evaluates the intrinsic value of a cryptocurrency by examining
          its technology, adoption metrics, team, competitive position, and tokenomics. The goal
          is to determine whether a token is overvalued or undervalued relative to its
          fundamentals. Strong fundamentals do not guarantee short-term price appreciation, but
          they improve the probability of long-term success.
        </p>
      </section>

      <section id="on-chain-metrics" className="mb-10">
        <h2>On-Chain Metrics</h2>
        <p>
          On-chain data provides transparent, real-time insights unavailable in traditional
          finance. Key metrics include daily active addresses (user adoption), transaction
          volume (network usage), TVL for DeFi protocols (economic activity), revenue generated
          (value creation), and token holder distribution (decentralization). Track these
          metrics over time to identify trends rather than relying on snapshots.
        </p>
      </section>

      <section id="developer-activity" className="mb-10">
        <h2>Developer Activity</h2>
        <p>
          Developer activity is one of the strongest predictors of long-term success. Blockchains
          with active developer ecosystems innovate faster, fix bugs quicker, and attract more
          applications. Track GitHub commits, active contributors, new protocol deployments,
          hackathon participation, and grant program activity. Ethereum and Solana consistently
          lead in developer metrics, which correlates with their ecosystem dominance.
        </p>
      </section>

      <section id="competitive-analysis" className="mb-10">
        <h2>Competitive Analysis</h2>
        <p>
          Every crypto project competes within its sector. Compare a project against its direct
          competitors across metrics like TVL, revenue, user growth, fee competitiveness, and
          technological advantages. Understand the project's moat: what prevents competitors
          from taking its market share. Network effects, developer ecosystem size, brand
          recognition, and technology leadership are common moats in crypto.
        </p>
      </section>
    </LearnPageLayout>
  );
}
