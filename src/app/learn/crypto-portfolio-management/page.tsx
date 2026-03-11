import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Portfolio Management: Strategies for Every Risk Level | CryptoDegen`,
  description:
    "Learn allocation frameworks, rebalancing strategies, risk management, DCA approaches, and tax-loss harvesting for crypto portfolios.",
};

export default function CryptoPortfolioManagementPage() {
  return (
    <LearnPageLayout
      title="Crypto Portfolio Management: Strategies for Every Risk Level"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="13 min read"
      intro="Successful crypto investing requires more than picking winners - it requires disciplined portfolio construction, risk management, and behavioral discipline. Most retail investors fail not because they pick bad assets but because they don't manage position sizing, rebalance, or cut losses. This guide provides concrete frameworks for building crypto portfolios at different risk levels, implementing rebalancing and DCA strategies, managing risk through position sizing, harvesting taxes efficiently, and avoiding common behavioral mistakes that destroy returns."
      toc={[
        { id: "asset-allocation", title: "Asset Allocation Frameworks", level: 2 },
        { id: "position-sizing", title: "Position Sizing Rules", level: 2 },
        { id: "rebalancing", title: "Rebalancing Strategies", level: 2 },
        { id: "dca", title: "Dollar-Cost Averaging", level: 2 },
        { id: "tax-loss", title: "Tax-Loss Harvesting", level: 2 },
        { id: "risk-management", title: "Risk Management Techniques", level: 2 },
        { id: "behavioral", title: "Behavioral Discipline", level: 2 },
      ]}
      faqs={[
        {
          question: "What's the ideal portfolio allocation for crypto?",
          answer:
            "There's no universal answer - it depends on risk tolerance, time horizon, and conviction. A common framework: 40-50% Bitcoin (stability), 20-30% large-cap altcoins like Ethereum, 10-20% small-cap altcoins (higher risk/reward), 5-10% stablecoins or cash for dry powder. Conservative investors reduce altcoin allocation; aggressive investors increase it. The key is intentional allocation, not random buying.",
        },
        {
          question: "How often should I rebalance?",
          answer:
            "Monthly or quarterly rebalancing is typical for retail investors. Annual rebalancing works if you're not actively trading. The goal is trimming winners (which appreciate beyond target allocation) and adding to losers (which have fallen below target). Monthly rebalancing requires discipline to sell winners but prevents concentration risk and forces buying low.",
        },
        {
          question: "Should I use DCA if I think the market will crash?",
          answer:
            "Yes. If you believe crashes are coming, DCA is superior to lump-sum investing because you accumulate more coins at lower prices during the crash. DCA removes market timing risk entirely. The tradeoff is slower profit if prices only rise - lump-sum investing captures all gains immediately. DCA trades maximum upside for reduced downside risk.",
        },
        {
          question: "How do I handle portfolio rebalancing taxes?",
          answer:
            "Rebalancing triggers capital gains taxes every time you sell for profit. Strategies: (1) rebalance inside tax-advantaged accounts if possible, (2) use tax-loss harvesting to offset gains, (3) rebalance less frequently in taxable accounts, (4) keep enough stablecoin allocation to add on dips without selling (4) do most rebalancing in December for year-end tax planning.",
        },
        {
          question: "What position size should I use for altcoins?",
          answer:
            "Position size depends on conviction and risk. High-conviction, thoroughly researched plays: 3-5% allocation. Medium-conviction based on solid fundamentals: 1-3% allocation. Speculative/high-risk/moonshot bets: 0.5-1% allocation. Never allocate more than 5% to single altcoins; never allocate more than 1% to highly speculative plays. This ensures even total failures don't devastate portfolio.",
        },
      ]}
      relatedArticles={[
        { title: "Bitcoin ETF Investing", href: "/learn/bitcoin-etf-investing", category: "Learn Crypto" },
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn Crypto" },
        { title: "Risk Management Guide", href: "/learn/defi-risks", category: "Learn Crypto" },
        { title: "Portfolio Calculator", href: "/tools/portfolio-calculator", category: "Tools" },
      ]}
    >
      <section id="asset-allocation">
        <h2>Asset Allocation Frameworks</h2>
        <p>
          Asset allocation - deciding how much to allocate to different asset classes within crypto - is the primary driver of portfolio returns and risk. Studies show allocation explains 90%+ of portfolio volatility, not the specific assets chosen. A well-allocated portfolio with mediocre assets outperforms a poorly-allocated portfolio with great assets.
        </p>
        <p>
          <strong>Conservative Framework (40% crypto allocation of larger portfolio):</strong> 50% Bitcoin, 20% Ethereum, 15% stablecoins (for dollar-cost averaging opportunities), 15% diversified altcoins (solid fundamentals, established projects). This framework minimizes volatility through Bitcoin's dominance while capturing growth from Ethereum and selective altcoin exposure. Suitable for ages 50+, low risk tolerance, or approaching wealth goals.
        </p>
        <p>
          <strong>Moderate Framework (50-60% of portfolio):</strong> 40% Bitcoin, 25% Ethereum, 20% mid-cap altcoins (DeFi protocols, scaling solutions, utility tokens), 10% small-cap opportunities (emerging infrastructure, novel use cases), 5% stablecoins. This allocates meaningful exposure to growth areas while maintaining Bitcoin stability. Suitable for ages 35-50, moderate risk tolerance, 10+ year horizon.
        </p>
        <p>
          <strong>Aggressive Framework (70%+ of portfolio):</strong> 30% Bitcoin, 20% Ethereum, 25% growth-oriented altcoins (layer 2s, emerging DeFi, smart contract platforms), 15% high-risk, high-potential opportunities (new narratives, moonshots), 10% stablecoins and cash for opportunistic additions. This positions portfolio for growth and captures emerging trends. Suitable for younger investors, high risk tolerance, 15+ year horizon.
        </p>
        <p>
          <strong>Category Definitions:</strong> Bitcoin (largest, most established). Ethereum (second-largest, foundational smart contract platform). Large-cap altcoins (top 10-30 by market cap: Solana, XRP, Cardano). Mid-cap (top 31-100: specialized protocols, growing ecosystems). Small-cap (top 101+: early-stage projects, high risk/reward). Stablecoins (non-volatile, capital parking).
        </p>
      </section>

      <section id="position-sizing">
        <h2>Position Sizing Rules</h2>
        <p>
          Position sizing rules prevent catastrophic losses from single bad investments. Many retail investors lose fortunes by allocating 20-30% to single altcoins that eventually fail. Rigorous position sizing ensures no single position can destroy a portfolio.
        </p>
        <p>
          <strong>The Conviction-Based Framework:</strong> Allocate based on research depth and conviction level. High-conviction investments (major narratives you've deeply researched, established projects): up to 5% per position. Medium-conviction (solid fundamentals, less research): 1-3% per position. Low-conviction/speculative (moonshots, emerging trends): 0.5-1% per position. Unknown/FOMO-driven positions: 0% allocation (don't buy).
        </p>
        <p>
          <strong>Risk-Based Framework:</strong> Position size inversely correlates with risk. Bitcoin (low risk): 30-40% allocation. Ethereum (moderate risk): 15-25% allocation. Large-cap altcoins (higher risk): 5-15% per position. Small-cap (much higher risk): 1-3% per position. Micro-cap speculations (extreme risk): 0.1-1% per position if at all.
        </p>
        <p>
          <strong>Portfolio Heat Rule:</strong> "Portfolio heat" is total allocation to high-risk positions. A portfolio with 30 altcoins at 2% each has 60% heat, meaning 60% of capital is in relatively risky bets. Many experienced investors limit heat to 30-40% in altcoins, keeping 60%+ in lower-risk assets. This prevents single bear market from wiping portfolio.
        </p>
        <p>
          <strong>The Kelly Criterion (Advanced):</strong> Professional investors sometimes use the Kelly Criterion to size positions based on win/loss probability and edge. Position size = (Win% - Loss%) / Odds. If you're right 70% of the time with 2:1 odds, optimal position is (0.7 - 0.3) / 2 = 20%. For most retail investors, Kelly would suggest positions too large; using 1/4 Kelly (dividing by 4) is more conservative and realistic.
        </p>
      </section>

      <section id="rebalancing">
        <h2>Rebalancing Strategies</h2>
        <p>
          Rebalancing is the discipline of maintaining target allocations by selling winners and buying losers. A portfolio target of 40% Bitcoin / 30% Ethereum / 30% altcoins will naturally drift if Bitcoin outperforms (becoming 50%+ Bitcoin). Rebalancing trims Bitcoin back to 40%, selling profits and buying underperforming assets.
        </p>
        <p>
          <strong>Time-Based Rebalancing:</strong> Rebalance at set intervals (monthly, quarterly, annually). Simple and disciplined - automatic calendar reminders prevent emotional decisions. Trades are predetermined; you don't decide when to trade based on feelings. Works well for passive investors. Monthly rebalancing requires more activity but forces discipline to buy dips.
        </p>
        <p>
          <strong>Threshold-Based Rebalancing:</strong> Rebalance only when allocations drift beyond thresholds (target ±5%). Less active than time-based but triggered only when drift is meaningful. If Bitcoin drifts to 45% (5% above 40% target), trigger rebalancing. This balances activity with efficiency - avoids rebalancing when drift is negligible.
        </p>
        <p>
          <strong>Implementation Tactics:</strong> Use limit orders to ensure good prices when rebalancing. Batch trades (do all rebalancing trades together) rather than sequential trades to minimize transaction costs. In tax-advantaged accounts, rebalance freely; in taxable accounts, consider tax consequences of sales. Use new deposits to rebalance without selling (buying underweights with new capital).
        </p>
        <p>
          <strong>Behavioral Benefits:</strong> Rebalancing forces buying when sentiment is darkest (prices crashing, everyone panics) and selling when euphoric (prices soaring, everyone FOMO-buys). This is psychologically difficult but mathematically sound - it implements "sell high, buy low" automatically rather than relying on discipline.
        </p>
      </section>

      <section id="dca">
        <h2>Dollar-Cost Averaging (DCA)</h2>
        <p>
          Dollar-cost averaging (DCA) is investing fixed amounts at regular intervals regardless of price. Instead of deploying $10,000 lump-sum, DCA would invest $1,000 monthly for 10 months. DCA eliminates timing risk - you never pick the peak or bottom, instead averaging across prices.
        </p>
        <p>
          <strong>DCA Advantages:</strong> Removes pressure to time market perfectly. Psychologically easier - reduces FOMO investing at peaks. Accumulates more coins when prices are low (buying more coins per dollar). Forces disciplined investment even when scared. Reduces impact of volatility through averaging mechanism. Most suitable for salary income that naturally comes in regular increments.
        </p>
        <p>
          <strong>DCA Disadvantages:</strong> Slower initial returns if markets only rise (lump-sum would capture all gains immediately). Requires discipline - many investors fail to DCA when prices crash (buying discipline fails). Tax complexity if constantly buying different coins at different prices. Transaction costs accumulate (though minimal on modern exchanges).
        </p>
        <p>
          <strong>DCA Implementation:</strong> Set up automatic recurring purchases through exchange programs (many offer this). Invest paycheck percentage or fixed monthly amount regardless of prices. Increase DCA amount during bear markets if possible (contrarian buying). Combine with rebalancing - DCA into underweighted allocations rather than arbitrary selections.
        </p>
        <p>
          <strong>DCA Strategy Variations:</strong> Standard DCA (fixed amount, fixed interval). Scaled DCA (increase amounts during crashes, decrease during rallies). Targeted DCA (DCA into assets you're underweight on until allocation targets met). Momentum DCA (DCA more when price drops, less when it rises). The discipline of regular investing matters more than which variation.
        </p>
      </section>

      <section id="tax-loss">
        <h2>Tax-Loss Harvesting</h2>
        <p>
          Tax-loss harvesting means selling investments at losses to offset capital gains taxes, then immediately buying similar assets to maintain portfolio exposure. Example: You have $10,000 gain in Ethereum and $5,000 loss in Solana. Sell Solana to realize the loss, offsetting $5,000 of Ethereum gains, reducing taxes on $5,000. Immediately buy Solana or similar asset back to maintain exposure.
        </p>
        <p>
          <strong>Wash Sale Rule Complication:</strong> Traditional wash sale rules (can't repurchase within 30 days) apply to stocks but NOT to crypto as of 2024. You can sell crypto at a loss and immediately rebuy the same crypto. However, IRS guidance could change. Conservative approach: wait 31 days before repurchasing, or buy different asset (sell Solana, buy Serum or another Solana-like play) immediately. The IRS may eventually close this gap, so don't rely on it permanently.
        </p>
        <p>
          <strong>Tax-Loss Harvesting Scenarios:</strong> You hold Ethereum (up $20,000) and Bitcoin (down $8,000). Sell Bitcoin, harvest the loss, offset $8,000 of Ethereum gains (reducing tax bill by ~$2,000 at 24% rate), immediately repurchase Bitcoin to maintain allocation. Calendar year-end: review all positions, sell those down more than 10% to harvest losses, repurchase in January.
        </p>
        <p>
          <strong>Advanced Tactics:</strong> Keep capital gains log throughout the year. In October, project year-end tax situation. If you'll have large gains, actively look for losses to harvest. Some investors deliberately hold small positions in speculative assets to harvest losses when inevitable crashes occur. This is sophisticated and requires careful tracking.
        </p>
        <p>
          <strong>Spreadsheet Tracking:</strong> Maintain detailed cost basis records (purchase date, amount, cost per unit). Many exchanges provide export, but manually verify accuracy. Calculate realized gains/losses at tax time. IRS uses FIFO (first-in, first-out) by default but allows specific cost basis identification (LIFO, average cost) in some cases. Proper record-keeping prevents audit issues.
        </p>
      </section>

      <section id="risk-management">
        <h2>Risk Management Techniques</h2>
        <p>
          <strong>Stop Loss Discipline:</strong> Set predetermined stop losses for each position (typically 30-50% below entry). When triggered, exit without exception. This prevents 80% losses when you could have limited to 50%. Stop losses are psychologically difficult - you're locking in losses - but mathematically essential. A trader who cuts losses at 30% and lets winners run 100%+ dramatically outperforms someone holding all losers hoping for recovery.
        </p>
        <p>
          <strong>Volatility Buffers:</strong> For volatile altcoins, use wider stop losses (50%+) than for stable assets. Bitcoin might use 20-30% stops; small altcoins might use 50-80% stops reflecting their volatility. Size positions inversely (smaller positions in more volatile assets) to normalize portfolio impact. A 5% altcoin position with 50% stop loss impacts portfolio by 2.5%; a 20% Bitcoin position with 30% stop impacts by 6%.
        </p>
        <p>
          <strong>Diversification Across Categories:</strong> Hold different types of crypto: Layer-1 chains, Layer-2 solutions, DeFi protocols, infrastructure, store-of-value, payments. If DeFi crashes, your L1 holdings may be unaffected. Category diversification provides insurance against single narrative collapse.
        </p>
        <p>
          <strong>Correlation Monitoring:</strong> During bull markets, everything correlates (all assets rise together). During crashes, correlations break down unpredictably. Monitor which assets truly provide diversification. Bitcoin historically lowest correlation; newer projects highly correlated.
        </p>
        <p>
          <strong>Portfolio Insurance via Options (Advanced):</strong> For sophisticated investors, buying puts (options that gain value if price falls) provides portfolio insurance. Costs premium but limits downside. Not for most retail investors but available for large portfolios.
        </p>
      </section>

      <section id="behavioral">
        <h2>Behavioral Discipline</h2>
        <p>
          Most portfolio underperformance comes from behavioral mistakes, not bad assets. Investors FOMO-buy peaks and panic-sell bottoms, locking in losses and missing recoveries. Discipline and frameworks prevent this.
        </p>
        <p>
          <strong>Remove Emotion:</strong> Pre-commit to strategies before emotional markets occur. "I will DCA $500/month regardless of price" becomes mechanical when prices crash and fear overwhelms reason. Written plans force discipline. Many investors with written plans succeed; those without consistently emotional-trade and underperform.
        </p>
        <p>
          <strong>FOMO Management:</strong> Create filter for new assets. Don't buy anything mentioned less than three times by independent sources. Wait 24 hours before buying; if still interested, proceed. This prevents 3am FOMO decisions that almost always fail. Some positions might be missed, but you'll avoid 20 bigger disasters.
        </p>
        <p>
          <strong>Reduce Feedback Frequency:</strong> Checking portfolio daily increases emotional reactivity. Check monthly or quarterly. Less information leads to better decisions because you ignore noise. Warren Buffett rarely checks stock prices; he checks quarterly/annually. Crypto investors trading daily dramatically underperform annual rebalancers.
        </p>
        <p>
          <strong>Community Hygiene:</strong> Leave FOMO-driven communities (Telegram groups, Discord servers obsessing over pumps). Join communities focused on thoughtful analysis. Communities matter more than you think - surrounding yourself with panic sellers vs. thoughtful holders changes behavior.
        </p>
      </section>

      <section style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#161b22", borderLeft: "4px solid #30363d" }}>
        <h3>Disclaimer</h3>
        <p style={{ fontSize: "0.9rem", color: "#8b949e" }}>
          This is educational content, not financial or investment advice. Crypto investing is inherently risky and speculative. Past performance doesn't predict future results. You could lose your entire investment. This guide provides frameworks but doesn't guarantee returns. Consult with qualified financial and tax advisors before implementing strategies, especially regarding tax implications. Do not invest more than you can afford to lose.
        </p>
      </section>
    </LearnPageLayout>
  );
}
