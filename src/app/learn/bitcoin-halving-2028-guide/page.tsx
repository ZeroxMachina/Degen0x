import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin Halving 2028: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn about the 2028 Bitcoin halving, mining economics, market implications, and what investors need to know about the next major Bitcoin event.",
  keywords: ["bitcoin halving", "2028 halving", "mining rewards", "bitcoin supply", "block reward", "halving cycle"],
};

export default function BitcoinHalving2028Page() {
  return (
    <LearnPageLayout
      title="Bitcoin Halving 2028: What You Need to Know"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="10 min read"
      intro="Bitcoin's next halving is scheduled for 2028, marking the fourth reduction in mining rewards since Bitcoin's inception. Halvings are programmed events that reduce the rate at which new Bitcoin enters circulation, fundamentally affecting mining economics and supply dynamics. Understanding how halvings work, their historical impact, and what 2028 might bring is essential for anyone invested in Bitcoin or the broader crypto market."
      toc={[
        { id: "what-is-halving", title: "What Is Bitcoin Halving?", level: 2 },
        { id: "halving-history", title: "Historical Halving Events", level: 2 },
        { id: "mining-economics", title: "Mining Economics and Impact", level: 2 },
        { id: "market-effects", title: "Market Effects of Halvings", level: 2 },
        { id: "2028-expectations", title: "Expectations for 2028", level: 2 },
      ]}
      faqs={[
        {
          question: "What exactly happens during a Bitcoin halving?",
          answer: "Every 210,000 Bitcoin blocks (approximately every 4 years), the block reward given to miners is cut in half. The block reward started at 50 BTC per block and has been halved to 25 BTC (2012), 12.5 BTC (2016), and 6.25 BTC (2020). By 2028, the reward will become 3.125 BTC per block. This is coded into Bitcoin's protocol and happens automatically.",
        },
        {
          question: "How does halving affect the price of Bitcoin?",
          answer: "Historically, Bitcoin's price has often surged in the months leading up to and following a halving. This is attributed to supply becoming scarcer and increased media attention. However, past performance does not guarantee future results. The 2018 post-halving period saw prices decline, showing that market conditions and broader economic factors also matter significantly.",
        },
        {
          question: "What happens to miners when the halving occurs?",
          answer: "Miners receive half the block rewards they previously earned, immediately cutting their revenue in half. Unprofitable miners may shut down if their operational costs exceed their halving rewards. However, difficulty adjusts downward after uneconomic miners exit, potentially improving profitability for remaining miners. Some miners invest in more efficient equipment in preparation.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Bitcoin Mining?", href: "/learn/what-is-bitcoin-mining", category: "Learn" },
        { title: "Bitcoin Supply and Scarcity", href: "/learn/bitcoin-supply-explained", category: "Learn" },
        { title: "How Do Blockchain Blocks Work?", href: "/learn/blockchain-blocks-explained", category: "Learn" },
        { title: "What Is Bitcoin's Monetary Policy?", href: "/learn/bitcoin-monetary-policy", category: "Learn" },
      ]}
    >
      <section id="what-is-halving">
        <h2>What Is Bitcoin Halving?</h2>
        <p>
          A Bitcoin halving is a programmed event in Bitcoin's protocol that reduces the reward miners receive for validating transactions and adding new blocks to the blockchain. Every 210,000 blocks, approximately every four years, the block reward is cut in half. This mechanism ensures that Bitcoin's supply grows at a predictable, declining rate, eventually reaching a maximum of 21 million coins.
        </p>
        <p>
          The halving is not controlled by any individual, company, or government — it is an immutable part of Bitcoin's code that cannot be changed without consensus from the network. This makes Bitcoin's supply schedule transparent and trustworthy. Miners cannot prevent the halving or negotiate different terms. The halving represents one of Bitcoin's key innovations: a deflationary monetary policy guaranteed by mathematics rather than central bank policy.
        </p>
        <p>
          Unlike fiat currencies where central banks control money supply (often increasing it), Bitcoin's supply is fixed and predetermined. Halvings reinforce Bitcoin's scarcity narrative and differentiate it from infinite-supply assets. Each halving brings Bitcoin closer to its 21 million supply cap, after which no new Bitcoin will be created and miners will be incentivized solely by transaction fees.
        </p>
      </section>

      <section id="halving-history">
        <h2>Historical Halving Events</h2>
        <p>
          The first Bitcoin halving occurred on November 28, 2012, reducing the block reward from 50 BTC to 25 BTC. Bitcoin's price in the months following the 2012 halving increased significantly, rising from around $6 in November 2012 to over $1,000 by November 2013. This sparked increased interest in halving events as potential catalysts for price appreciation.
        </p>
        <p>
          The second halving happened on July 9, 2016, reducing rewards from 25 BTC to 12.5 BTC. Bitcoin's price was approximately $650 at halving and climbed to nearly $20,000 by December 2017. The 2016 halving is often cited as a major catalyst for the 2017 bull market, though other factors like institutional interest and ICO mania also contributed.
        </p>
        <p>
          The third halving on May 11, 2020, reduced rewards from 12.5 BTC to 6.25 BTC. Bitcoin's price was around $9,000 at halving and subsequently rose to nearly $70,000 by November 2021. The 2020 halving occurred during the COVID-era monetary expansion period, with central banks injecting massive liquidity into the financial system. This context, combined with institutional adoption and El Salvador's Bitcoin legal tender adoption, drove the bull market.
        </p>
        <p>
          Each halving event has historically been followed by a bull market within 12-18 months, leading many analysts to predict similar patterns for 2028. However, correlation does not equal causation, and market conditions during each halving cycle differ substantially.
        </p>
      </section>

      <section id="mining-economics">
        <h2>Mining Economics and Impact</h2>
        <p>
          Mining Bitcoin requires significant computational power and electricity. Miners are compensated through two mechanisms: block rewards (newly created Bitcoin) and transaction fees. When the halving occurs, block rewards are cut in half, immediately reducing miner revenue. For unprofitable miners operating near the breakeven point, a halving can force shutdown.
        </p>
        <p>
          However, Bitcoin's difficulty adjustment mechanism (recalibrating every 2,016 blocks, approximately every 2 weeks) helps miners adapt. When less-efficient miners exit, the network's total hash rate decreases, and difficulty adjusts downward. This lower difficulty improves profitability for remaining miners, creating a new equilibrium. The 2020 halving saw significant miner capitulation followed by network recovery and innovation in mining efficiency.
        </p>
        <p>
          As halvings continue, block rewards will eventually become negligible. By 2040, the block reward will be less than 0.1 BTC. Eventually, transaction fees must sustain mining security. This transition from block reward-based to fee-based security is important for Bitcoin's long-term sustainability. Higher transaction volume and fees become more critical as block rewards diminish.
        </p>
        <p>
          Modern mining operations are highly optimized, using ASIC hardware specifically designed for Bitcoin mining and locating facilities in regions with cheap electricity. Large-scale operations benefit from economies of scale and can survive lower block rewards through operational efficiency. Smaller home miners become increasingly uncompetitive after each halving.
        </p>
      </section>

      <section id="market-effects">
        <h2>Market Effects of Halvings</h2>
        <p>
          The halving narrative is deeply ingrained in crypto markets. Bitcoin often experiences a "halving run" where price rises in anticipation of the event, driven by supply reduction expectations and media attention. Some argue that the halving reduces new supply, which should mechanically support prices through supply-demand dynamics. Others counter that markets are forward-looking and already price in known events.
        </p>
        <p>
          Analysis of historical halving cycles reveals that Bitcoin's price performance varies significantly. The pre-halving period (6-12 months before) has historically seen gains, suggesting market anticipation. However, the post-halving period (12-18 months after) shows the strongest returns, indicating that the full market impact takes time to materialize. This has created a "halving cycle" narrative where investors plan multi-year strategies around halving events.
        </p>
        <p>
          The halving effect is intertwined with the broader market cycle and macroeconomic conditions. The 2018 period after the 2016 halving saw prices decline despite the previous halving being bullish, showing that halving alone does not guarantee price appreciation. Institutional adoption, regulatory clarity, macro interest rates, and risk-on sentiment in equities all influence Bitcoin's price alongside the halving cycle.
        </p>
        <p>
          Some research suggests that Bitcoin's price performance in years following halvings shows a predictable pattern, with peaks occurring 12-18 months post-halving. If this pattern holds, 2029-2030 could see significant price appreciation. However, past patterns may not repeat, especially as Bitcoin matures and institutional participation increases, potentially dampening the halving-driven volatility that characterized earlier cycles.
        </p>
      </section>

      <section id="2028-expectations">
        <h2>Expectations for 2028</h2>
        <p>
          The 2028 halving (expected around April 2028) will reduce the block reward from 6.25 BTC to 3.125 BTC. This is the fourth halving in Bitcoin's history and comes at a time when Bitcoin may be more mature and integrated into traditional finance. Expectations differ significantly from earlier cycles due to changed market structure and regulatory environment.
        </p>
        <p>
          Some analysts predict strong price appreciation in the 2028-2030 period, following historical patterns. Others argue that Bitcoin's maturation and larger market cap mean smaller percentage gains are likely. The halving will reduce Bitcoin's inflation rate to approximately 0.38% annually, making it scarcer than gold (which has ~2% annual supply growth). This scarcity narrative could drive investment from wealth preservation seekers.
        </p>
        <p>
          Mining industry changes are expected before and after 2028. More efficient ASIC hardware will be developed to maintain profitability despite lower rewards. Mining pools and large operations will likely consolidate further as smaller miners are priced out. Lightning Network adoption and layer-2 scaling could increase transaction fee generation, which becomes critical as block rewards continue declining.
        </p>
        <p>
          Regulatory clarity will likely play a larger role in 2028 than in previous halving cycles. Clear frameworks around Bitcoin's regulatory status, tax treatment, and integration with traditional finance could significantly influence demand. Additionally, macroeconomic conditions in 2028 — whether central banks are tightening or easing, inflation levels, and risk appetite — will be major determinants of price action, potentially overshadowing the halving's mechanical supply reduction.
        </p>
      </section>
    </LearnPageLayout>
  );
}
