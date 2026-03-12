import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Liquidity Mining Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how liquidity mining works in DeFi. Understand token incentives, reward distribution, emission schedules, and how to evaluate mining programs.",
  keywords: ["liquidity mining", "defi incentives", "token farming", "mining rewards"],
};

export default function LiquidityMiningExplainedPage() {
  return (
    <LearnPageLayout
      title="Liquidity Mining Explained"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="9 min"
      intro="Liquidity mining is the practice of distributing protocol tokens to users who provide liquidity or use a DeFi platform. Pioneered by Compound in 2020 with COMP distribution, it became the primary mechanism for bootstrapping DeFi protocol adoption. Understanding how liquidity mining programs work, how to evaluate them, and their long-term sustainability is crucial for any DeFi participant looking to maximize returns."
      toc={[
        { id: "what-is-liquidity-mining", title: "what-is-liquidity-mining", level: 2 },
        { id: "what-is-liquidity-mining", title: "What Is Liquidity Mining", level: 2 },
        { id: "how-rewards-work", title: "how-rewards-work", level: 2 },
        { id: "how-rewards-work", title: "How Rewards Work", level: 2 },
        { id: "evaluating-programs", title: "evaluating-programs", level: 2 },
        { id: "evaluating-mining-programs", title: "Evaluating Mining Programs", level: 2 },
        { id: "sustainability", title: "sustainability", level: 2 },
        { id: "sustainability-concerns", title: "Sustainability Concerns", level: 2 },
        { id: "points-meta", title: "points-meta", level: 2 },
        { id: "the-points-meta", title: "The Points Meta", level: 2 }
      ]}
      faqs={[
        { question: "Is liquidity mining the same as yield farming?", answer: "Liquidity mining is a subset of yield farming. Yield farming encompasses all strategies to maximize DeFi returns, including lending, LP provision, and staking. Liquidity mining specifically refers to earning protocol tokens as rewards for providing liquidity or using a platform." },
        { question: "Are liquidity mining rewards taxable?", answer: "In most jurisdictions, tokens received through liquidity mining are considered income at their fair market value when received. They may also be subject to capital gains tax when sold. Consult a tax professional familiar with crypto for guidance specific to your jurisdiction." },
      ]}
      relatedArticles={[
        { title: "Yield Farming Strategies", href: "/defi-lending/learn/yield-farming-strategies", category: "DeFi Lending" },
        { title: "DeFi Interest Rates Explained", href: "/defi-lending/learn/defi-interest-rates-explained", category: "DeFi Lending" },
      ]}
    >
      <section id="what-is-liquidity-mining">
        <h2>What Is Liquidity Mining</h2>
        <p>Liquidity mining is a token distribution mechanism where DeFi protocols reward users with governance or utility tokens for providing liquidity, lending, borrowing, or otherwise participating in the protocol. When Compound launched COMP distribution in June 2020, it sparked what became known as DeFi Summer, with total value locked in DeFi protocols surging from $1 billion to over $15 billion in months. The concept aligns incentives between protocols and users: protocols get the liquidity they need to function, while users earn additional yield beyond organic fees or interest. Liquidity mining effectively subsidizes early adoption and can bootstrap network effects that become self-sustaining once the protocol achieves sufficient scale. Most major DeFi protocols including Aave, Uniswap, Curve, and Sushiswap have used some form of liquidity mining to attract and retain users.</p>
      </section>
      <section id="how-rewards-work">
        <h2>How Rewards Work</h2>
        <p>Liquidity mining rewards are typically distributed proportionally to each user's share of the total liquidity or activity in a pool. If you provide 1% of a lending pool's total deposits, you receive approximately 1% of the mining rewards allocated to that pool. Protocols define emission schedules that specify how many tokens are distributed per block or per epoch, and how those tokens are allocated across different pools and activities. Some programs use boosting mechanisms where locking tokens increases your share of rewards, as seen with Curve's veCRV model. Rewards may be distributed continuously and claimable at any time, or accumulated and released on a schedule. The effective APY from mining rewards depends on the token's market price, the emission rate, and the total value of liquidity competing for rewards. As more capital enters a pool, individual reward shares decrease.</p>
      </section>
      <section id="evaluating-programs">
        <h2>Evaluating Mining Programs</h2>
        <p>When evaluating a liquidity mining program, consider several factors beyond the headline APY. First, examine the token's utility and demand: governance tokens with meaningful voting power and fee-sharing rights have more sustainable value than tokens with no utility. Second, analyze the emission schedule to understand how rewards will change over time, as most programs reduce emissions gradually. Third, consider the token's fully diluted valuation relative to the protocol's revenue and TVL. Fourth, look at the vesting schedule for mining rewards, as some programs distribute tokens immediately while others impose lock-up periods. Fifth, assess the protocol's fundamentals including revenue, user growth, and competitive position. Mining rewards from a fundamentally strong protocol with growing usage are more likely to hold their value than those from a protocol relying entirely on token emissions to attract mercenary capital.</p>
      </section>
      <section id="sustainability">
        <h2>Sustainability Concerns</h2>
        <p>The biggest challenge with liquidity mining is sustainability. High token emissions attract capital, but they also create selling pressure as recipients sell their rewards. If the protocol cannot generate sufficient organic demand for the token through fee revenue or governance utility, a death spiral can occur: token price drops reduce mining APY, which causes liquidity to leave, which reduces protocol usage, which further depresses the token price. This pattern has played out numerous times in DeFi. Sustainable programs balance emission rates with token demand growth, often starting with high emissions that gradually decrease as the protocol builds organic usage. The most successful models create genuine utility for the governance token, such as fee sharing through Curve's veCRV model, or combine reduced emissions with growing protocol revenue to maintain attractive total yields over time.</p>
      </section>
      <section id="points-meta">
        <h2>The Points Meta</h2>
        <p>Starting in late 2023, many protocols shifted from direct token mining to points-based systems. Instead of distributing tokens directly, protocols award points to users based on their activity, with the promise of a future token airdrop proportional to points earned. This approach has several advantages for protocols: it avoids immediate selling pressure, creates anticipation and engagement, and allows flexibility in determining final token distribution. For users, points programs introduce additional uncertainty since the conversion rate from points to tokens is unknown until the airdrop. Major protocols using points include EigenLayer, Ethena, and various Layer 2 networks. Evaluating points programs requires estimating the likely token valuation and airdrop size, making them inherently more speculative than direct mining rewards with known emission rates.</p>
      </section>
    </LearnPageLayout>
  );
}
