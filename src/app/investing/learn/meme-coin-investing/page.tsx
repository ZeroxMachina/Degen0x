import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Meme Coin Investing Guide (${CURRENT_YEAR}) - Risks & Strategies | ${SITE_NAME}`,
  description: `Complete guide to meme coin investing in ${CURRENT_YEAR}. Understand the risks, evaluate meme tokens, avoid scams, and manage position sizing for speculative crypto assets.`,
  alternates: { canonical: "/investing/learn/meme-coin-investing" },
};

const toc = [
  { id: "what-are-meme-coins", title: "What Are Meme Coins?", level: 2 },
  { id: "risk-assessment", title: "Understanding the Risks", level: 2 },
  { id: "evaluation", title: "How to Evaluate Meme Coins", level: 2 },
  { id: "avoiding-scams", title: "Avoiding Scams and Rug Pulls", level: 2 },
  { id: "position-sizing", title: "Position Sizing and Risk Management", level: 2 },
];

const faqs = [
  { question: "Are meme coins a good investment?", answer: "Meme coins are highly speculative and should not be considered investments in the traditional sense. They lack fundamentals, revenue, or utility. While early buyers of tokens like DOGE and SHIB made extraordinary returns, the vast majority of meme coins go to zero. Treat meme coins as speculation with money you can afford to lose entirely." },
  { question: "How do I spot a meme coin scam?", answer: "Red flags include anonymous teams with no verifiable track record, locked liquidity with short lock periods, concentrated token ownership (check the top holders), no audit, recently deployed contracts, and aggressive social media promotion with fake engagement. Use tools like DEXScreener, TokenSniffer, and GoPlusLabs to check contract safety before buying." },
  { question: "What percentage of my portfolio should be in meme coins?", answer: "Most financial advisors would say 0%. If you choose to speculate, limit meme coin exposure to 1-5% of your total crypto portfolio at most. Never use money you cannot afford to lose. The asymmetric return potential is real but so is the near-certain probability of most meme coins going to zero." },
  { question: "When should I sell a meme coin?", answer: "Set exit targets before buying. A common approach is to sell 50% when you double your money (recovering your initial investment), then let the remaining position ride with trailing stop-losses. Avoid the trap of holding for 100x when you are already up 10x. Greed is the primary reason meme coin traders lose money they had on paper." },
  { question: "What is the difference between DOGE and newer meme coins?", answer: "Dogecoin has an 11+ year track record, massive community, real network security through proof-of-work mining, and mainstream recognition. Newer meme coins on Solana or Base are typically simple token contracts with no network of their own, easily created, and easily abandoned. DOGE is the exception, not the template for meme coin success." },
];

const relatedArticles = [
  { title: "Crypto Sentiment Analysis", href: "/investing/learn/crypto-sentiment-analysis", category: "Investing" },
  { title: "Risk Management for Crypto", href: "/investing/learn/risk-management", category: "Investing" },
  { title: "AI Crypto Tokens", href: "/investing/learn/ai-crypto-tokens", category: "Investing" },
];

export default function MemeCoinInvestingPage() {
  return (
    <LearnPageLayout
      title="Meme Coin Investing: High Risk, High Reward Speculation"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="8 min"
      intro="Meme coins have produced some of crypto's most spectacular gains and devastating losses. From Dogecoin's rise to mainstream prominence to countless rug pulls that wiped out investors overnight, the meme coin space is a minefield of opportunity and danger. This guide covers what you need to know before risking any capital on meme tokens."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-are-meme-coins">What Are Meme Coins?</h2>
      <p>
        Meme coins are cryptocurrencies created around internet memes, cultural references, or
        humorous concepts. Unlike Bitcoin or Ethereum, which have clear technological utility,
        meme coins derive their value primarily from community enthusiasm, social media virality,
        and speculative demand. Dogecoin, created as a joke in 2013, was the original meme coin.
        The category now includes thousands of tokens across multiple blockchains.
      </p>
      <p>
        The meme coin landscape has evolved significantly. Early meme coins like DOGE and SHIB
        built genuine communities over years. The current generation of meme coins on Solana,
        Base, and other chains often launches and peaks within days or even hours. Platforms like
        Pump.fun have made it trivially easy to create new meme tokens, leading to an explosion
        of new launches and an even higher failure rate than before.
      </p>

      <h2 id="risk-assessment">Understanding the Risks</h2>
      <p>
        The primary risk of meme coins is total loss. The vast majority of meme coins will
        eventually go to zero. Unlike established crypto projects with developer teams, technology
        roadmaps, and revenue models, meme coins rely entirely on continued speculative interest.
        When attention moves to the next trending token, liquidity dries up and prices collapse.
        There is no fundamental floor to support the price.
      </p>
      <p>
        Beyond total loss, meme coins carry specific risks including rug pulls (where creators
        drain liquidity), honeypot contracts (where you can buy but cannot sell), wash trading
        (fake volume to attract real buyers), and insider trading (team members dumping on retail).
        The lack of regulation in this space means there is no recourse if you are scammed. Even
        legitimate meme coins experience extreme volatility, with 50-80% drops in a single day
        being common.
      </p>

      <h2 id="evaluation">How to Evaluate Meme Coins</h2>
      <p>
        Start with the contract. Use tools like TokenSniffer or GoPlusLabs to check for known
        scam patterns in the smart contract code. Verify that the contract is verified on the
        block explorer. Check if liquidity is locked and for how long. Look at the token distribution
        to ensure no single wallet holds a dangerous percentage of supply. A top holder with
        5-10% or more is a red flag for potential dumps.
      </p>
      <p>
        Evaluate the community authentically. Are the social media followers real or bought? Is
        there genuine engagement or just bot activity? Check the age and activity of the Telegram
        or Discord community. Look at the holder count trend on-chain. A growing number of unique
        holders suggests organic adoption, while declining holders indicates the exit has begun.
        The best meme coins have passionate, creative communities that generate content organically.
      </p>

      <h2 id="avoiding-scams">Avoiding Scams and Rug Pulls</h2>
      <p>
        Never buy a meme coin in the first few minutes of launch unless you understand the
        technical risks. Sniping bots and insiders typically extract the most value during initial
        trading. Wait for the initial volatility to settle, check the contract, verify liquidity
        is locked, and look for organic community growth before entering. Missing the first 10x
        is acceptable if it helps you avoid the next rug pull.
      </p>
      <p>
        Be extremely cautious of meme coins promoted by paid influencers or through coordinated
        social media campaigns. Many influencer-promoted tokens are pay-to-play arrangements where
        the influencer dumps their allocation on followers. If a meme coin seems to appear
        everywhere simultaneously, it is likely a coordinated launch designed to create artificial
        demand. Organic meme coins grow through genuine community enthusiasm, not marketing budgets.
      </p>

      <h2 id="position-sizing">Position Sizing and Risk Management</h2>
      <p>
        The most important rule of meme coin speculation is position sizing. Never invest more
        than you can afford to lose completely. A strict maximum of 1-5% of your total crypto
        portfolio in meme coins is a reasonable guideline. Within that allocation, spread across
        multiple positions rather than concentrating in a single token. If one meme coin position
        represents more than 1-2% of your total portfolio, it is too large.
      </p>
      <p>
        Set explicit exit rules before buying. Define your take-profit levels (for example, sell
        25% at 3x, another 25% at 5x, and let the rest ride). Set stop-losses to protect against
        catastrophic decline. Use limit orders on DEX aggregators where possible. Most importantly,
        recover your initial capital early in a winning trade. Once you have your original investment
        back, the remaining position is pure profit and psychologically easier to manage through
        volatility. Never add to a losing meme coin position.
      </p>
    </LearnPageLayout>
  );
}
