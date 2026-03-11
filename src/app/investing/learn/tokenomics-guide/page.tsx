import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Tokenomics Guide ${CURRENT_YEAR} - Understanding Crypto Token Economics`,
  description: `Learn how to evaluate tokenomics. Understand supply mechanics, token distribution, inflation, utility, and why tokenomics matter for investment decisions.`,
  alternates: { canonical: "/investing/learn/tokenomics-guide" },
};

const toc = [
  { id: "what-are-tokenomics", title: "What Are Tokenomics", level: 2 },
  { id: "supply", title: "Supply Mechanics", level: 2 },
  { id: "distribution", title: "Token Distribution", level: 2 },
  { id: "utility", title: "Token Utility", level: 2 },
  { id: "red-flags", title: "Red Flags", level: 2 },
];

const faqs = [
  { question: "Why do tokenomics matter?", answer: "Tokenomics determine the supply and demand dynamics that drive a token's price. Tokens with unlimited supply and high inflation tend to lose value over time. Tokens with capped supply, burn mechanisms, and strong demand drivers tend to appreciate. Understanding tokenomics is essential for making informed investment decisions." },
  { question: "What are good tokenomics?", answer: "Good tokenomics include a clear supply cap or deflationary mechanism, fair distribution without excessive insider allocation, genuine utility that creates demand, reasonable vesting schedules for team and investor tokens, and alignment between token holders and protocol success." },
  { question: "What is a token burn?", answer: "Token burning permanently removes tokens from circulation, reducing supply. Ethereum burns a portion of gas fees (EIP-1559), making ETH potentially deflationary during high network usage. Burns create scarcity that can support price appreciation if demand remains constant or grows." },
];

export default function TokenomicsGuidePage() {
  return (
    <LearnPageLayout
      title="Tokenomics Guide"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="10 min"
      intro="Tokenomics, the economics of a cryptocurrency token, is one of the most important factors in evaluating a crypto investment. This guide teaches you how to analyze supply dynamics, distribution, utility, and inflation to make better investment decisions."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Market Cap Explained", href: "/investing/learn/market-cap-explained", category: "Investing" },
        { title: "Fundamental Analysis", href: "/investing/learn/fundamental-analysis", category: "Investing" },
      ]}
    >
      <section id="what-are-tokenomics" className="mb-10">
        <h2>What Are Tokenomics?</h2>
        <p>
          Tokenomics refers to all the economic properties of a cryptocurrency token, including
          its supply schedule, distribution among stakeholders, utility within its ecosystem,
          inflation or deflation mechanics, and incentive structures. Good tokenomics align the
          interests of all participants (users, developers, investors, validators) and create
          sustainable demand for the token relative to its supply.
        </p>
      </section>

      <section id="supply" className="mb-10">
        <h2>Supply Mechanics</h2>
        <p>
          Bitcoin has a hard cap of 21 million tokens, creating absolute scarcity. Ethereum has
          no hard cap but burns fees, making it net deflationary during high usage. Many altcoins
          have inflation rates of 5-15% annually to fund staking rewards and ecosystem growth.
          Understand the total supply, circulating supply, emission schedule, and any burn
          mechanisms to assess long-term supply dynamics.
        </p>
      </section>

      <section id="distribution" className="mb-10">
        <h2>Token Distribution</h2>
        <p>
          How tokens are distributed matters greatly. Projects where insiders (team, VCs) hold
          more than 40-50% of supply face concentrated selling pressure when vesting unlocks
          occur. Fair launches with wide distribution (like Bitcoin) tend to have healthier
          long-term price dynamics. Check vesting schedules on Token Unlocks to anticipate
          potential sell pressure from insider allocations.
        </p>
      </section>

      <section id="utility" className="mb-10">
        <h2>Token Utility</h2>
        <p>
          The most valuable tokens have genuine utility that creates organic demand. Gas tokens
          (ETH, SOL) are needed to use the network. Governance tokens (UNI, AAVE) grant voting
          rights. Staking tokens earn rewards for securing the network. Fee-sharing tokens pass
          protocol revenue to holders. Evaluate whether the token has real demand drivers beyond
          speculation.
        </p>
      </section>

      <section id="red-flags" className="mb-10">
        <h2>Red Flags in Tokenomics</h2>
        <p>
          Watch for these warning signs: extremely high inflation without corresponding value
          creation, insider allocations exceeding 50%, short vesting periods with cliff unlocks,
          no clear utility or demand driver for the token, complex or opaque supply mechanics,
          and tokens where the team can mint unlimited new supply. These red flags do not
          automatically mean a bad investment, but they warrant extra scrutiny.
        </p>
      </section>
    </LearnPageLayout>
  );
}
