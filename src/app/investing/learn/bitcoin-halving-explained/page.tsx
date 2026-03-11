import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin Halving Explained (${CURRENT_YEAR}) - Impact on Price | ${SITE_NAME}`,
  description: `Understand Bitcoin halving: what it is, why it matters, historical price impact, and how to position your portfolio around halving events in ${CURRENT_YEAR}.`,
  alternates: { canonical: "/investing/learn/bitcoin-halving-explained" },
};

const toc = [
  { id: "what-is-halving", title: "What Is Bitcoin Halving?", level: 2 },
  { id: "why-it-matters", title: "Why Halving Matters for Investors", level: 2 },
  { id: "historical-cycles", title: "Historical Halving Cycles", level: 2 },
  { id: "supply-economics", title: "Supply Economics and Scarcity", level: 2 },
  { id: "investment-strategy", title: "Investment Strategy Around Halvings", level: 2 },
];

const faqs = [
  { question: "When is the next Bitcoin halving?", answer: "Bitcoin halvings occur approximately every four years, or every 210,000 blocks. The most recent halving occurred in April 2024, reducing the block reward from 6.25 BTC to 3.125 BTC. The next halving is expected around 2028, when the reward will drop to 1.5625 BTC per block." },
  { question: "Does Bitcoin always go up after a halving?", answer: "Historically, Bitcoin has reached new all-time highs within 12-18 months after each halving. However, past performance does not guarantee future results. Each cycle has unique macroeconomic conditions, regulatory landscapes, and market dynamics. The halving reduces new supply, but demand is the variable that determines price direction." },
  { question: "How does halving affect Bitcoin miners?", answer: "Halving cuts miner revenue from block rewards in half overnight. Less efficient miners with higher electricity costs may become unprofitable and shut down. This can temporarily reduce network hash rate until difficulty adjusts. Surviving miners benefit from reduced competition and, historically, rising prices that compensate for the reduced block reward." },
  { question: "Will Bitcoin halving stop working as a price catalyst?", answer: "As Bitcoin matures and the block reward becomes a smaller percentage of total supply, the supply shock from halving diminishes. However, halvings still carry strong narrative power in the market. The psychological impact of a verifiable supply reduction event may continue to influence investor behavior even as the mathematical impact decreases." },
  { question: "Should I buy Bitcoin before or after the halving?", answer: "Historical data suggests that accumulating in the 6-12 months before a halving has been profitable. However, the market increasingly prices in halving events in advance. Dollar-cost averaging throughout the cycle rather than trying to time the exact bottom or pre-halving entry is generally the most reliable approach for most investors." },
];

const relatedArticles = [
  { title: "Dollar-Cost Averaging Strategy", href: "/investing/learn/dollar-cost-averaging", category: "Investing" },
  { title: "Yield vs Growth Investing", href: "/investing/learn/yield-vs-growth", category: "Investing" },
  { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
];

export default function BitcoinHalvingExplainedPage() {
  return (
    <LearnPageLayout
      title="Bitcoin Halving Explained: Supply, Cycles, and Price Impact"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="8 min"
      intro="Bitcoin halving is one of the most significant events in the crypto market. Every four years, the rate at which new Bitcoin is created gets cut in half. This programmatic supply reduction has historically preceded major bull runs. Understanding the halving mechanism and its economic implications is essential for any serious crypto investor."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-is-halving">What Is Bitcoin Halving?</h2>
      <p>
        Bitcoin halving is a pre-programmed event built into Bitcoin&apos;s code that reduces the block
        reward paid to miners by 50%. When Bitcoin launched in 2009, miners received 50 BTC per block.
        After the first halving in 2012, that dropped to 25 BTC. The 2016 halving reduced it to 12.5 BTC,
        the 2020 halving to 6.25 BTC, and the 2024 halving brought it down to 3.125 BTC. This process
        continues until all 21 million Bitcoin are mined, estimated around the year 2140.
      </p>
      <p>
        The halving occurs every 210,000 blocks, which takes approximately four years given Bitcoin&apos;s
        10-minute target block time. It is completely automatic and cannot be changed without consensus
        from the entire network. This predictable, immutable monetary policy is one of Bitcoin&apos;s most
        important properties and a key reason it is considered a store of value.
      </p>

      <h2 id="why-it-matters">Why Halving Matters for Investors</h2>
      <p>
        Halving matters because it directly reduces the rate of new Bitcoin entering circulation. Basic
        economics suggests that when supply growth decreases while demand stays the same or increases,
        price should rise. Before the 2024 halving, miners added approximately 900 new BTC per day to
        the market. After the halving, that dropped to approximately 450 BTC per day. This reduction
        in sell pressure from miners is significant.
      </p>
      <p>
        Beyond the direct supply impact, halvings serve as focal points for market attention and narrative.
        Media coverage increases, new investors enter the market, and the story of digital scarcity gains
        renewed momentum. This combination of reduced supply and increased attention has created a
        recognizable pattern across multiple halving cycles.
      </p>

      <h2 id="historical-cycles">Historical Halving Cycles</h2>
      <p>
        The 2012 halving saw Bitcoin rise from approximately $12 to over $1,100 within the following year.
        The 2016 halving preceded a rally from around $650 to nearly $20,000 by December 2017. The 2020
        halving occurred at approximately $8,700, and Bitcoin went on to reach $69,000 by November 2021.
        Each cycle has shown diminishing percentage returns but increasing absolute dollar gains.
      </p>
      <p>
        An important nuance is timing. The price peak has not occurred immediately after any halving.
        Instead, there has typically been a 12-18 month lag between the halving and the cycle peak.
        Additionally, each bull market has been followed by a significant bear market where prices
        dropped 70-85% from the peak. Understanding the full cycle pattern, not just the upside,
        is critical for managing risk and expectations.
      </p>

      <h2 id="supply-economics">Supply Economics and Scarcity</h2>
      <p>
        Bitcoin&apos;s stock-to-flow ratio, which measures existing supply relative to new production, roughly
        doubles at each halving. This increasing scarcity is a core part of the investment thesis for
        Bitcoin as a store of value comparable to gold. By 2028, over 96% of all Bitcoin will have been
        mined, making the annual inflation rate less than 1%.
      </p>
      <p>
        Critics argue that the halving is already priced in because it is perfectly predictable. However,
        markets are driven by human behavior, and the lived experience of reduced supply appears to have
        a psychological and economic impact that pure efficient market theory would not predict. The truth
        likely lies somewhere between these positions.
      </p>

      <h2 id="investment-strategy">Investment Strategy Around Halvings</h2>
      <p>
        A common strategy is to accumulate Bitcoin during the bear market that precedes a halving, hold
        through the halving event, and take partial profits during the bull market that follows. This
        cycle-aware approach has historically outperformed simple buy-and-hold, though it requires
        discipline and patience to buy during periods of maximum pessimism.
      </p>
      <p>
        For most investors, the most practical approach is consistent dollar-cost averaging regardless
        of halving timing, with awareness that post-halving periods have historically been favorable.
        Avoid the temptation to go all-in before a halving or panic sell during the bear market that
        follows each cycle peak. The halving is a useful framework for understanding Bitcoin market
        cycles, but it should not be the sole basis for investment decisions.
      </p>
    </LearnPageLayout>
  );
}
