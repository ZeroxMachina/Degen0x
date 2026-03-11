import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Bull Market Strategies (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Strategies for maximizing gains during crypto bull markets. Learn profit-taking, portfolio rotation, and risk management to keep your gains.`,
};

export default function CryptoBullMarketStrategiesPage() {
  return (
    <LearnPageLayout
      title="Crypto Bull Market Strategies"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="11 min"
      intro="Bull markets are when fortunes are made in crypto, but they are also when most investors give back their gains by holding too long or taking excessive risk. Having a clear strategy before euphoria takes hold is essential. This guide covers how to maximize returns while protecting profits during crypto bull runs."
      toc={[
        { id: "identifying-bull-markets", title: "Identifying Bull Market Phases", level: 2 },
        { id: "profit-taking", title: "Profit-Taking Strategies", level: 2 },
        { id: "portfolio-rotation", title: "Portfolio Rotation", level: 2 },
        { id: "avoiding-mistakes", title: "Common Bull Market Mistakes", level: 2 },
      ]}
      faqs={[
        { question: "When should I take profits in a bull market?", answer: "The best approach is systematic profit-taking at predetermined levels rather than trying to time the exact top. Consider taking 10-20% profits at each 2x of your entry price, or use a trailing approach where you sell portions as assets reach new all-time highs. Having a plan before the euphoria sets in is critical." },
        { question: "Should I move into altcoins during a bull market?", answer: "Historically, altcoins outperform Bitcoin during the later stages of bull markets in a phase called altcoin season. However, this comes with significantly higher risk. A reasonable approach is to increase altcoin allocation gradually as the bull market matures while maintaining a strong BTC and ETH core position." },
      ]}
      relatedArticles={[
        { title: "Crypto Bear Market Strategies", href: "/investing/learn/crypto-bear-market-strategies", category: "Investing" },
        { title: "Portfolio Allocation Guide", href: "/investing/learn/portfolio-allocation", category: "Investing" },
        { title: "Technical Analysis Guide", href: "/investing/learn/technical-analysis", category: "Investing" },
      ]}
    >
      <h2 id="identifying-bull-markets">Identifying Bull Market Phases</h2>
      <p>
        Crypto bull markets typically progress through distinct phases: accumulation (smart money
        buys at low prices), early bull (prices rise with skepticism), mid bull (mainstream attention
        grows), and euphoria (retail FOMO drives parabolic moves). Each phase requires different
        strategies. The accumulation and early phases favor buying, while the mid and euphoria
        phases should focus on systematic profit-taking.
      </p>

      <h2 id="profit-taking">Profit-Taking Strategies</h2>
      <p>
        Set profit-taking targets before the bull market begins. A common approach is to sell
        10-20% of a position at each 2x milestone (2x, 4x, 8x your entry). Another method is
        time-based selling, where you gradually reduce positions over the expected duration of
        the bull cycle. Consider converting profits to stablecoins or fiat rather than rotating
        into other volatile assets. The goal is to ensure you keep a meaningful portion of gains
        regardless of when the cycle ends.
      </p>

      <h2 id="portfolio-rotation">Portfolio Rotation</h2>
      <p>
        Bull market rotation typically flows from BTC to large-cap altcoins to mid-caps to
        small-caps and finally to meme coins. Understanding this flow helps with timing. Early
        in the cycle, concentrate on BTC and ETH. As the cycle matures, selectively rotate a
        portion into high-conviction altcoins with strong narratives. Never rotate your entire
        portfolio into small-caps or meme coins, as the timing of cycle tops is unpredictable.
      </p>

      <h2 id="avoiding-mistakes">Common Bull Market Mistakes</h2>
      <p>
        The biggest mistake is never taking profits, expecting prices to rise forever. Other
        common errors include over-leveraging during euphoria, buying assets solely because they
        are going up (chasing pumps), ignoring fundamentals in favor of hype, and concentrating
        too heavily in a single asset. Using leverage in a bull market feels like a guaranteed
        win until a sharp correction liquidates your position. Stick to spot positions and
        systematic profit-taking.
      </p>
    </LearnPageLayout>
  );
}
