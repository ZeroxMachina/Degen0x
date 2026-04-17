'use client';

import Breadcrumb from '@/components/Breadcrumb';
import RelatedContent from '@/components/RelatedContent';

export default function TokenVestingPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'Token Vesting Explained', href: '/learn/token-vesting-explained' }
  ];

  const tableOfContents = [
    'What is Token Vesting?',
    'Types of Vesting Schedules',
    'Why Projects Use Vesting',
    'How Token Unlocks Affect Price',
    'Tracking Vesting Schedules',
    'Notable Unlock Events',
    'Trading Strategies Around Unlocks',
    'Key Takeaways'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Token Vesting Explained
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            How Unlock Schedules Affect Crypto Prices
          </p>
          <p className="text-gray-400">
            Master the mechanics of token release and learn to navigate market volatility around major unlock events.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Table of Contents */}
        <div className="bg-slate-900 rounded-lg p-6 mb-12 border border-slate-800">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={index} className="text-gray-300 hover:text-blue-400 cursor-pointer transition">
                {index + 1}. {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 1: What is Token Vesting */}
        <article className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">What is Token Vesting?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Token vesting is a mechanism that releases tokens to recipients over a predefined schedule rather than all at once. Think of it as a lock on tokens that gradually opens up over time. When a blockchain project launches, team members, investors, and strategic partners don't receive all their tokens immediately. Instead, they receive them according to a vesting schedule that can span months or years.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This practice serves multiple purposes: it aligns incentives (teams work longer if tokens keep unlocking), protects early investors from rug pulls, and creates a predictable release schedule for the market. Understanding vesting is crucial because these unlock events can trigger significant price movements.
            </p>
            <div className="bg-slate-900 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-300">
                <span className="font-bold text-blue-300">Key Point:</span> Major token unlocks can introduce thousands or millions of new tokens into circulation, increasing supply and potentially putting downward pressure on price.
              </p>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Section 2: Types of Vesting Schedules */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Types of Vesting Schedules</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-3">Cliff Vesting</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Cliff vesting has a waiting period during which no tokens are released. After this cliff period ends, tokens unlock all at once or begin releasing. For example, a 1-year cliff with a 1-year linear vesting means no tokens unlock for 12 months, then 50% unlock after 24 months total, with the remaining 50% releasing monthly thereafter.
                </p>
                <p className="text-gray-300 text-sm text-gray-400">Example: Team member vesting at Ethereum launch had a 1-year cliff</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-3">Linear Vesting</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Linear vesting releases tokens at a constant rate over the vesting period. If 1,000,000 tokens vest over 4 years, approximately 250,000 tokens unlock every year. This creates predictable monthly or quarterly release amounts that the market can anticipate and price in gradually.
                </p>
                <p className="text-gray-300 text-sm text-gray-400">Example: Many private investors receive linear vesting from month 1 onwards</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-3">Milestone-Based Vesting</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Tokens unlock upon achieving specific milestones like network launch, TVL targets, or governance implementation. This approach ties token release to project development and success, but can create uncertainty about timing.
                </p>
                <p className="text-gray-300 text-sm text-gray-400">Example: Developers might unlock tokens upon mainnet launch</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-3">Graded Vesting</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  A hybrid approach combining cliff and linear vesting, with tokens unlocking in stages. This might mean 25% cliff after 1 year, then 75% linear over the next 3 years, creating multiple unlock events over time.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Section 3: Why Projects Use Vesting */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Why Projects Use Vesting</h2>

            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span><span className="font-semibold text-gray-100">Prevent Rug Pulls:</span> Early investors can't immediately dump tokens, protecting buyers from immediate devaluation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span><span className="font-semibold text-gray-100">Align Incentives:</span> Team members stay committed longer when tokens continue unlocking, ensuring continued development</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span><span className="font-semibold text-gray-100">Create Stability:</span> Gradual token release prevents sudden supply shocks that could crash prices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span><span className="font-semibold text-gray-100">Community Trust:</span> Demonstrates long-term commitment and reduces perception of quick cash-grab schemes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span><span className="font-semibold text-gray-100">Regulatory Compliance:</span> Some jurisdictions require vesting to qualify for specific securities exemptions</span>
              </li>
            </ul>
          </div>

          <hr className="border-slate-700" />

          {/* Section 4: How Token Unlocks Affect Price */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">How Token Unlocks Affect Price</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Token unlocks can significantly impact price through supply and demand dynamics. When a major unlock event occurs, millions of tokens suddenly become available for sale. This increased supply can trigger several market reactions:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h4 className="text-purple-300 font-bold mb-2">Negative Scenarios</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Sellers dump tokens immediately</li>
                  <li>• Price drops as supply increases</li>
                  <li>• Panic selling cascades</li>
                  <li>• Liquidations trigger in leveraged positions</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h4 className="text-purple-300 font-bold mb-2">Positive Scenarios</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Unlocked tokens are held by believers</li>
                  <li>• Market priced in the unlock</li>
                  <li>• Institutional buyers absorb supply</li>
                  <li>• Demand exceeds new supply</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              The actual impact depends on several factors: how many tokens unlock, what percentage of total supply that represents, market sentiment, and whether the unlock was anticipated and already priced in.
            </p>
          </div>

          <hr className="border-slate-700" />

          {/* Section 5: Tracking Vesting Schedules */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Tracking Vesting Schedules</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Sophisticated investors track vesting schedules closely to anticipate major unlock events. Here's how to stay informed:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-purple-300 font-bold mb-2">Primary Resources:</h4>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• <span className="font-semibold">Project Whitepapers & Tokenomics Pages:</span> Official source for vesting details</li>
                  <li>• <span className="font-semibold">Block Explorers:</span> View locked token smart contracts on Etherscan or similar</li>
                  <li>• <span className="font-semibold">Token Unlock Trackers:</span> Websites like token.unlocks.app or Messari provide unlock calendars</li>
                  <li>• <span className="font-semibold">Community Dashboards:</span> GitHub repos and community members often create detailed tracking sheets</li>
                </ul>
              </div>

              <div>
                <h4 className="text-purple-300 font-bold mb-2">What to Look For:</h4>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Total token supply vs current circulating supply</li>
                  <li>• Percentage of tokens that unlock in the next 30, 90, 180 days</li>
                  <li>• Who receives the unlocking tokens (team, investors, treasury)</li>
                  <li>• Any secondary market implications</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Section 6: Notable Unlock Events */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Notable Unlock Events</h2>

            <div className="space-y-6">
              <div className="bg-slate-900 p-4 rounded border border-slate-800">
                <h3 className="text-purple-300 font-bold mb-2">Arbitrum (ARB) - March 2023</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Arbitrum's initial launch saw a massive unlock of 625 million ARB tokens to the DAO treasury. The market had priced in the unlock, so instead of dumping, price remained relatively stable as traders understood the tokens were for ecosystem development.
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-800">
                <h3 className="text-purple-300 font-bold mb-2">Aptos (APT) - October 2022</h3>
                <p className="text-gray-300 text-sm mb-2">
                  APT experienced significant selling pressure when investor and team vesting began. The token had been artificially restricted pre-launch, and the unlock created substantial supply, contributing to a 70% price decline in months following.
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-800">
                <h3 className="text-purple-300 font-bold mb-2">Optimism (OP) - Monthly Releases</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Optimism's predictable monthly unlock schedule of 41.76 million tokens allowed the market to price in releases gradually. The transparency around vesting helped build investor confidence.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Section 7: Trading Strategies */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Trading Strategies Around Unlocks</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-purple-300 font-bold mb-3">Anticipation Trading</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Buy before major unlock events if sentiment is positive and you believe demand will exceed supply. Sell days before the unlock to avoid the volatility spike.
                </p>
              </div>

              <div>
                <h3 className="text-purple-300 font-bold mb-3">Volatility Capture</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Use options or leverage to benefit from the expected price volatility during unlock events. IV typically increases sharply before major releases.
                </p>
              </div>

              <div>
                <h3 className="text-purple-300 font-bold mb-3">Fade the Dump</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  If an unlock causes an immediate price crash, accumulate if you believe the project is fundamentally sound. Much of the selling pressure dissipates within days.
                </p>
              </div>

              <div>
                <h3 className="text-purple-300 font-bold mb-3">Risk Management</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Always reduce position sizes before major unlocks. Even if you're bullish long-term, short-term volatility can trigger liquidations or stop losses.
                </p>
              </div>

              <div className="bg-red-950 border-l-4 border-red-500 p-4 rounded">
                <p className="text-gray-300">
                  <span className="font-bold text-red-300">Warning:</span> Historical analysis shows that unlocks affecting 5%+ of circulating supply often trigger 5-15% price corrections in the short term, regardless of fundamentals.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Key Takeaways */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Key Takeaways</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-950 to-slate-900 p-4 rounded border border-blue-800">
                <p className="text-gray-200">
                  <span className="font-bold text-blue-300">1.</span> Token vesting releases tokens gradually to prevent rug pulls and align incentives with long-term project success.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-950 to-slate-900 p-4 rounded border border-blue-800">
                <p className="text-gray-200">
                  <span className="font-bold text-blue-300">2.</span> Major unlock events introduce supply shocks that can significantly impact price in the short term.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-950 to-slate-900 p-4 rounded border border-blue-800">
                <p className="text-gray-200">
                  <span className="font-bold text-blue-300">3.</span> Track vesting schedules using token unlock trackers and block explorers to anticipate market-moving events.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-950 to-slate-900 p-4 rounded border border-blue-800">
                <p className="text-gray-200">
                  <span className="font-bold text-blue-300">4.</span> Develop unlock-aware trading strategies to protect capital during volatile release periods.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Related Links */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Related Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/learn" className="block p-4 bg-slate-900 rounded border border-slate-700 hover:border-blue-500 transition">
                <h3 className="text-purple-300 font-bold mb-2">← Back to Learn</h3>
                <p className="text-sm text-gray-400">Explore more educational content</p>
              </a>
              <div className="p-4 bg-slate-900 rounded border border-slate-700">
                <h3 className="text-purple-300 font-bold mb-2">Token Unlock Tracker</h3>
                <p className="text-sm text-gray-400">Visit token.unlocks.app to monitor upcoming events</p>
              </div>
            </div>
          </div>
        
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/compare/arbitrum-vs-optimism-comparison" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Arbitrum Vs Optimism Comparison</a></li>
            <li><a href="/compare/proof-of-work-vs-proof-of-stake" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Proof Of Work Vs Proof Of Stake</a></li>
            <li><a href="/courses/defi-course-online-free" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Defi Course Online Free</a></li>
            <li><a href="/investing/best-crypto-to-invest-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Crypto To Invest 2026</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Token Vesting Explained",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/token-vesting-explained"
            })
          }}
        />
      </article>
      </section>
      <RelatedContent category="learn" currentSlug="/learn/token-vesting-explained" />
    </div>
  );
}
