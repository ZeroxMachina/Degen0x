'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { ToolStructuredData } from '@/components/StructuredData';

export default function BybitVsBinance() {
  const comparisonData = [
    { feature: 'Founded', bybit: '2018', binance: '2017' },
    { feature: 'Spot Trading Fees', bybit: '0.1% maker/taker', binance: '0.1% maker/taker' },
    { feature: 'Futures Maker Fee', bybit: '0.02%', binance: '0.02%' },
    { feature: 'Futures Taker Fee', bybit: '0.055%', binance: '0.04%' },
    { feature: 'Max Leverage', bybit: '125x', binance: '125x' },
    { feature: 'Cryptocurrencies', bybit: '600+', binance: '500+' },
    { feature: 'Copy Trading', bybit: 'Yes (built-in)', binance: 'Limited' },
    { feature: 'Mobile App', bybit: 'Excellent', binance: 'Excellent' },
    { feature: 'US Accessible', bybit: 'No', binance: 'No' },
    { feature: 'Compliance', bybit: 'MSB License (Canada)', binance: 'Multiple Licenses' },
  ];

  const bybitPros = [
    'Lowest taker fees (0.055% vs 0.04% is competitive)',
    'Integrated copy trading feature',
    'Excellent user interface for derivatives',
    'Zero major security breaches',
    'Faster order execution on futures',
    'BB token loyalty rewards program',
    'Strong mobile app performance',
    'Growing spot trading selection',
  ];

  const bybitCons = [
    'Smaller than Binance overall',
    'Fewer ecosystem features',
    'Less established launchpad program',
    'Smaller total liquidity pool',
    'Limited fiat on-ramp options',
    'Fewer institutional partnerships',
    'Newer platform overall',
  ];

  const binancePros = [
    'Largest crypto exchange globally',
    'Highest liquidity across all pairs',
    'Lowest taker fees on futures (0.04%)',
    'Binance Launchpad for token sales',
    'Most cryptocurrencies listed (500+)',
    'Binance Academy educational content',
    'BNB token with strong utility',
    'Most regulatory licenses worldwide',
  ];

  const binanceCons = [
    'Complex interface can overwhelm beginners',
    'Higher taker fees than Bybit on spot',
    'Copy trading less integrated',
    'Regulatory uncertainty in some regions',
    'UI/UX not as polished as Bybit',
    'Ongoing regulatory scrutiny',
    'Customer support can be slow',
  ];

  const securityComparison = [
    { aspect: 'Cold Storage', bybit: 'Multi-sig wallets', binance: 'Multi-sig wallets', bybitStatus: 'good', binanceStatus: 'good' },
    { aspect: 'Major Breaches', bybit: 'None (since 2018)', binance: 'One (2022, recovered)', bybitStatus: 'good', binanceStatus: 'warn' },
    { aspect: '2FA Support', bybit: 'App & SMS', binance: 'App & SMS', bybitStatus: 'good', binanceStatus: 'good' },
    { aspect: 'Insurance Fund', bybit: 'Yes', binance: 'Yes', bybitStatus: 'good', binanceStatus: 'good' },
    { aspect: 'Regulatory Compliance', bybit: 'Growing', binance: 'Multiple licenses', bybitStatus: 'warn', binanceStatus: 'good' },
    { aspect: 'Address Whitelisting', bybit: 'Yes', binance: 'Yes', bybitStatus: 'good', binanceStatus: 'good' },
  ];

  const feeComparison = [
    { type: 'Spot Maker', bybit: '0.1%', binance: '0.1%', winner: 'Tie' },
    { type: 'Spot Taker', bybit: '0.1%', binance: '0.1%', winner: 'Tie' },
    { type: 'Futures Maker', bybit: '0.02%', binance: '0.02%', winner: 'Tie' },
    { type: 'Futures Taker', bybit: '0.055%', binance: '0.04%', winner: 'Binance' },
    { type: 'Copy Trading', bybit: '2-20% of profits', binance: 'N/A', winner: 'Bybit' },
    { type: 'Margin Interest', bybit: 'Variable', binance: 'Variable', winner: 'Tie' },
  ];

  const faqItems = [
    {
      q: 'Is Bybit or Binance better for derivatives trading?',
      a: 'Both are excellent for derivatives. Binance has slightly lower taker fees (0.04% vs 0.055%), while Bybit has a better copy trading feature integrated into the platform. For pure fee-minimization, Binance wins by 0.015%. For user experience on derivatives, Bybit edges ahead.'
    },
    {
      q: 'Which exchange has better security?',
      a: 'Both employ multi-signature cold storage and insurance funds. Bybit has a perfect security record with zero breaches since 2018. Binance experienced a hack in 2022 but fully recovered all funds for users. Both are among the safest exchanges.'
    },
    {
      q: 'Can I use Bybit or Binance in the US?',
      a: 'Neither exchange officially serves US residents due to regulatory concerns. Both restrict US IP addresses, though technically they remain accessible. US traders are better served by regulated alternatives like Kraken, Coinbase Pro, or Deribit for futures.'
    },
    {
      q: 'Which has more cryptocurrencies listed?',
      a: 'Binance leads with 500+ cryptocurrencies, while Bybit offers 600+. However, Binance has higher trading volume on most pairs. For altcoin hunting, both are excellent, but KuCoin actually beats both with 800+ listings.'
    },
    {
      q: 'Should I use Bybit or Binance for copy trading?',
      a: 'Bybit has a superior integrated copy trading feature with a leaderboard of elite traders. Binance copy trading is less developed. If copy trading is important, Bybit is the clear choice.'
    },
    {
      q: 'Which exchange has better customer support?',
      a: 'Both offer 24/7 support, but response quality varies. Binance support is generally faster due to resources, while Bybit has been improving. For critical issues, both can be slow. Kraken typically has the best support quality.'
    },
    {
      q: 'What are the token benefits?',
      a: 'Bybit offers BB token with fee discounts up to 30% and daily loyalty bonuses. Binance offers BNB token with even broader utility including buying Launchpad tokens and earning Launchpad rewards. BNB has more utility overall.'
    },
    {
      q: 'Which is better for beginners?',
      a: 'Bybit has a more intuitive interface with a simpler default view. Binance is more feature-rich but can overwhelm newcomers. For learning, Binance Academy is superior. Overall, Bybit edges ahead for pure ease of use.'
    },
  ];

  const useCases = [
    {
      title: 'For Derivatives Trading',
      bybit: 'Excellent - intuitive interface, good fees, integrated copy trading',
      binance: 'Excellent - slightly lower taker fees, highest liquidity',
      winner: 'Slight edge to Binance for taker fees'
    },
    {
      title: 'For Spot Trading',
      bybit: 'Good - 600+ coins, 0.1% fees, decent liquidity',
      binance: 'Excellent - 500+ coins, 0.1% fees, highest liquidity',
      winner: 'Binance for volume and reliability'
    },
    {
      title: 'For Altcoin Discovery',
      bybit: 'Good - 600+ listings, supports emerging tokens',
      binance: 'Good - 500+ listings, Launchpad for new projects',
      winner: 'Tie - both excellent for altcoins'
    },
    {
      title: 'For Copy Trading',
      bybit: 'Excellent - built-in, well-integrated, leaderboard system',
      binance: 'Limited - minimal copy trading feature',
      winner: 'Bybit by far'
    },
    {
      title: 'For Beginners',
      bybit: 'Good - simpler default UI, copy trading help',
      binance: 'Good - larger community, more tutorials, overwhelming features',
      winner: 'Bybit for interface simplicity'
    },
  ];

  return (
    <>
      <ToolStructuredData
        title="Bybit vs Binance Crypto Exchange Comparison"
        description="Detailed comparison of Bybit and Binance exchanges for spot trading, derivatives, fees, security, and user experience."
        slug="compare/exchanges/bybit-vs-binance"
      />

      <div className="min-h-screen bg-[var(--bg,#0d1117)] text-[var(--text,#e6edf3)] px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-[1000px] mx-auto">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Compare', href: '/compare' },
            { label: 'Exchanges', href: '/compare/exchanges' },
            { label: 'Bybit vs Binance' },
          ]} />

          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-emerald-500 bg-clip-text text-transparent">
              Bybit vs Binance
            </h1>
            <p className="text-base sm:text-lg text-[var(--text2,#8b949e)]">
              Crypto Exchange Comparison: Fees, Features &amp; Trading
            </p>
          </header>

          {/* Feature Comparison Table */}
          <section className="mb-12 sm:mb-16" aria-labelledby="feature-comparison">
            <h2 id="feature-comparison" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Feature Comparison Table</h2>
            <div className="overflow-x-auto rounded-xl border border-[var(--border,#30363d)] bg-[var(--surface,#161b22)]">
              <table className="w-full text-sm border-collapse" aria-label="Bybit vs Binance feature comparison">
                <thead>
                  <tr className="border-b-2 border-[var(--border,#30363d)]">
                    <th className="p-3 sm:p-4 text-left font-bold bg-[var(--surface2,#1c2330)] text-amber-400" scope="col">Feature</th>
                    <th className="p-3 sm:p-4 text-left font-bold bg-[var(--surface2,#1c2330)] text-amber-400" scope="col">Bybit</th>
                    <th className="p-3 sm:p-4 text-left font-bold bg-[var(--surface2,#1c2330)] text-amber-400" scope="col">Binance</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={`border-b border-[var(--border,#30363d)] ${idx % 2 ? 'bg-[var(--surface2,#1c2330)]' : ''}`}>
                      <td className="p-3 sm:p-4 font-semibold">{row.feature}</td>
                      <td className="p-3 sm:p-4">{row.bybit}</td>
                      <td className="p-3 sm:p-4">{row.binance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Fee Comparison */}
          <section className="mb-12 sm:mb-16" aria-labelledby="fee-comparison">
            <h2 id="fee-comparison" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Fee Comparison Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-[var(--border,#30363d)] bg-[var(--surface,#161b22)]">
              <table className="w-full text-sm border-collapse" aria-label="Bybit vs Binance fee comparison">
                <thead>
                  <tr className="border-b-2 border-[var(--border,#30363d)]">
                    <th className="p-3 sm:p-4 text-left font-bold bg-[var(--surface2,#1c2330)] text-amber-400" scope="col">Fee Type</th>
                    <th className="p-3 sm:p-4 text-left font-bold bg-[var(--surface2,#1c2330)] text-amber-400" scope="col">Bybit</th>
                    <th className="p-3 sm:p-4 text-left font-bold bg-[var(--surface2,#1c2330)] text-amber-400" scope="col">Binance</th>
                    <th className="p-3 sm:p-4 text-left font-bold bg-[var(--surface2,#1c2330)] text-amber-400" scope="col">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {feeComparison.map((row, idx) => (
                    <tr key={idx} className={`border-b border-[var(--border,#30363d)] ${idx % 2 ? 'bg-[var(--surface2,#1c2330)]' : ''}`}>
                      <td className="p-3 sm:p-4 font-semibold">{row.type}</td>
                      <td className="p-3 sm:p-4">{row.bybit}</td>
                      <td className="p-3 sm:p-4">{row.binance}</td>
                      <td className="p-3 sm:p-4">
                        <span className={`font-semibold ${row.winner === 'Tie' ? 'text-amber-400' : 'text-emerald-500'}`}>
                          {row.winner}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Overview Cards */}
          <section className="mb-12 sm:mb-16" aria-labelledby="quick-overview">
            <h2 id="quick-overview" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Quick Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <article className="bg-[var(--surface,#161b22)] border border-[var(--border,#30363d)] rounded-xl p-5 sm:p-6 hover:border-amber-400/30 transition-colors">
                <h3 className="text-lg sm:text-xl font-bold mb-2">⚡ Bybit</h3>
                <p className="text-sm text-amber-400 font-semibold mb-3">Best for Derivatives &amp; Copy Trading</p>
                <p className="text-sm text-[var(--text2,#8b949e)] leading-relaxed mb-3">
                  Newer, agile platform with exceptional derivatives trading UI and integrated copy trading. Perfect for traders wanting user-friendly derivatives and strategy replication.
                </p>
                <p className="text-xs text-emerald-500 font-semibold">40M+ users · Founded 2018 · Singapore-based</p>
              </article>
              <article className="bg-[var(--surface,#161b22)] border border-[var(--border,#30363d)] rounded-xl p-5 sm:p-6 hover:border-amber-400/30 transition-colors">
                <h3 className="text-lg sm:text-xl font-bold mb-2">📈 Binance</h3>
                <p className="text-sm text-amber-400 font-semibold mb-3">Best Overall Exchange &amp; Largest</p>
                <p className="text-sm text-[var(--text2,#8b949e)] leading-relaxed mb-3">
                  Global leader with highest liquidity, most cryptocurrencies, lowest taker fees, and most features. Best for serious traders and altcoin hunters.
                </p>
                <p className="text-xs text-emerald-500 font-semibold">150M+ users · Founded 2017 · Multi-jurisdictional</p>
              </article>
            </div>
          </section>

          {/* Bybit Pros & Cons */}
          <section className="mb-12 sm:mb-16" aria-labelledby="bybit-pros-cons">
            <h2 id="bybit-pros-cons" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Bybit Pros &amp; Cons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-emerald-500 mb-4">Pros</h3>
                <ul className="space-y-0" role="list" aria-label="Bybit advantages">
                  {bybitPros.map((pro, idx) => (
                    <li key={idx} className="py-3 border-b border-[var(--border,#30363d)] text-sm text-[var(--text2,#8b949e)] leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-red-500 mb-4">Cons</h3>
                <ul className="space-y-0" role="list" aria-label="Bybit disadvantages">
                  {bybitCons.map((con, idx) => (
                    <li key={idx} className="py-3 border-b border-[var(--border,#30363d)] text-sm text-[var(--text2,#8b949e)] leading-relaxed flex items-start gap-2">
                      <span className="text-red-500 shrink-0 mt-0.5" aria-hidden="true">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Binance Pros & Cons */}
          <section className="mb-12 sm:mb-16" aria-labelledby="binance-pros-cons">
            <h2 id="binance-pros-cons" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Binance Pros &amp; Cons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-emerald-500 mb-4">Pros</h3>
                <ul className="space-y-0" role="list" aria-label="Binance advantages">
                  {binancePros.map((pro, idx) => (
                    <li key={idx} className="py-3 border-b border-[var(--border,#30363d)] text-sm text-[var(--text2,#8b949e)] leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-red-500 mb-4">Cons</h3>
                <ul className="space-y-0" role="list" aria-label="Binance disadvantages">
                  {binanceCons.map((con, idx) => (
                    <li key={idx} className="py-3 border-b border-[var(--border,#30363d)] text-sm text-[var(--text2,#8b949e)] leading-relaxed flex items-start gap-2">
                      <span className="text-red-500 shrink-0 mt-0.5" aria-hidden="true">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Security Comparison */}
          <section className="mb-12 sm:mb-16" aria-labelledby="security-comparison">
            <h2 id="security-comparison" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Security Comparison</h2>
            <div className="rounded-xl border border-[var(--border,#30363d)] bg-[var(--surface,#161b22)] overflow-hidden">
              {/* Header row - hidden on mobile, shown on md+ */}
              <div className="hidden md:grid grid-cols-3 gap-0 p-4 bg-[var(--surface2,#1c2330)] border-b border-[var(--border,#30363d)]">
                <span className="font-bold text-amber-400 text-sm">Aspect</span>
                <span className="font-bold text-amber-400 text-sm">Bybit</span>
                <span className="font-bold text-amber-400 text-sm">Binance</span>
              </div>
              {securityComparison.map((item, idx) => (
                <div key={idx} className={`p-4 border-b border-[var(--border,#30363d)] last:border-b-0 ${idx % 2 ? 'bg-[var(--surface2,#1c2330)]' : ''}`}>
                  {/* Mobile: stacked layout */}
                  <div className="md:hidden space-y-2">
                    <p className="font-bold text-sm">{item.aspect}</p>
                    <div className="flex justify-between text-sm text-[var(--text2,#8b949e)]">
                      <span><span className="text-amber-400 font-medium">Bybit:</span> {item.bybit}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[var(--text2,#8b949e)]">
                      <span><span className="text-amber-400 font-medium">Binance:</span> {item.binance}</span>
                    </div>
                  </div>
                  {/* Desktop: grid layout */}
                  <div className="hidden md:grid grid-cols-3 gap-0">
                    <span className="font-bold text-sm">{item.aspect}</span>
                    <span className="text-sm text-[var(--text2,#8b949e)]">
                      <span className={item.bybitStatus === 'good' ? 'text-emerald-500' : 'text-amber-400'} aria-hidden="true">
                        {item.bybitStatus === 'good' ? '✅' : '⚠️'}
                      </span>{' '}
                      {item.bybit}
                    </span>
                    <span className="text-sm text-[var(--text2,#8b949e)]">
                      <span className={item.binanceStatus === 'good' ? 'text-emerald-500' : 'text-amber-400'} aria-hidden="true">
                        {item.binanceStatus === 'good' ? '✅' : '⚠️'}
                      </span>{' '}
                      {item.binance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Case Comparison */}
          <section className="mb-12 sm:mb-16" aria-labelledby="use-cases">
            <h2 id="use-cases" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Use Case Comparison</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {useCases.map((useCase, idx) => (
                <article key={idx} className="bg-[var(--surface,#161b22)] border border-[var(--border,#30363d)] rounded-xl p-5 hover:border-amber-400/30 transition-colors">
                  <h3 className="text-base font-bold text-amber-400 mb-3">{useCase.title}</h3>
                  <div className="text-sm text-[var(--text2,#8b949e)] leading-relaxed space-y-2 mb-3">
                    <p><span className="text-sky-400 font-medium">Bybit:</span> {useCase.bybit}</p>
                    <p><span className="text-sky-400 font-medium">Binance:</span> {useCase.binance}</p>
                  </div>
                  <p className="text-sm text-emerald-500 font-semibold">Winner: {useCase.winner}</p>
                </article>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12 sm:mb-16" aria-labelledby="faq-section">
            <h2 id="faq-section" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">FAQ</h2>
            <div className="rounded-xl border border-[var(--border,#30363d)] bg-[var(--surface,#161b22)] overflow-hidden divide-y divide-[var(--border,#30363d)]">
              {faqItems.map((item, idx) => (
                <details key={idx} className="group">
                  <summary className="p-4 sm:p-6 cursor-pointer select-none text-base font-bold text-amber-400 hover:bg-[var(--surface2,#1c2330)] transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset">
                    {item.q}
                  </summary>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm text-[var(--text2,#8b949e)] leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Verdict */}
          <section className="mb-12 sm:mb-16 bg-[var(--surface,#161b22)] border-2 border-amber-400 rounded-xl p-6 sm:p-8 lg:p-10" aria-labelledby="verdict">
            <h2 id="verdict" className="text-2xl sm:text-3xl font-bold mb-6 text-amber-400">The Verdict</h2>
            <div className="space-y-4 text-sm sm:text-base text-[var(--text2,#8b949e)] leading-relaxed">
              <p>
                Bybit and Binance are the two best global crypto exchanges for serious traders. Both offer excellent features, competitive fees, and high security.
              </p>
              <p>
                <strong className="text-[var(--text,#e6edf3)]">Choose Bybit if:</strong> You want an intuitive derivatives interface, prefer integrated copy trading, like newer platforms, or want a cleaner user experience focused on derivatives trading.
              </p>
              <p>
                <strong className="text-[var(--text,#e6edf3)]">Choose Binance if:</strong> You want the largest liquidity pool, need the lowest taker fees (0.04%), want maximum cryptocurrency selection, prefer established platforms, or need Launchpad access for new token distributions.
              </p>
              <p>
                <strong className="text-[var(--text,#e6edf3)]">Best Strategy:</strong> Consider using both exchanges. Bybit for derivatives and copy trading, Binance for spot trading and access to the largest altcoin pool. Both offer complementary strengths.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
