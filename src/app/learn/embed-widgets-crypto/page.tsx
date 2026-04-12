'use client';

import Breadcrumb from '@/components/Breadcrumb';

export default function EmbedWidgetsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'Embed Widgets', href: '/learn/embed-widgets-crypto' }
  ];

  const tableOfContents = [
    'Types of Crypto Widgets',
    'Embedding Price Tickers',
    'Using iframe Embeds',
    'React Component Integration',
    'Customization Options',
    'Widget Placement Best Practices',
    'Analytics Considerations',
    'Key Takeaways'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            How to Add Crypto Widgets to Your Website
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            A Developer's Guide to Integration
          </p>
          <p className="text-gray-400">
            Learn to embed real-time cryptocurrency data and interactive widgets into your web properties.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Table of Contents */}
        <div className="bg-slate-900 rounded-lg p-6 mb-12 border border-slate-800">
          <h2 className="text-xl font-bold text-orange-400 mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={index} className="text-gray-300 hover:text-orange-400 cursor-pointer transition">
                {index + 1}. {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <article className="space-y-8">

          {/* Section 1: Types of Widgets */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Types of Crypto Widgets</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cryptocurrency widgets come in various formats, each serving different purposes on your website. Understanding the widget landscape helps you choose the right solution for your needs.
            </p>

            <div className="space-y-4">
              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-pink-400 font-bold mb-2">Price Tickers</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Display real-time or delayed cryptocurrency prices with 24h change percentages. Minimal footprint, perfect for sidebars or headers.
                </p>
                <p className="text-gray-400 text-xs">Use cases: News sites, portfolio trackers, finance blogs</p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-pink-400 font-bold mb-2">Charts & Technical Analysis</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Interactive candlestick charts with multiple timeframes, indicators, and drawing tools. More resource-intensive but highly engaging.
                </p>
                <p className="text-gray-400 text-xs">Use cases: Trading platforms, analysis sites, educational content</p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-pink-400 font-bold mb-2">Converters & Calculators</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Allow users to convert between cryptocurrencies and fiat currencies in real-time. Utility-focused, improves user engagement.
                </p>
                <p className="text-gray-400 text-xs">Use cases: Crypto exchanges, finance apps, educational sites</p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-pink-400 font-bold mb-2">Market Screeners</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Searchable tables of multiple cryptocurrencies with filtering and sorting. Great for discovery and comparison.
                </p>
                <p className="text-gray-400 text-xs">Use cases: Crypto tracking sites, portfolio managers, research tools</p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-pink-400 font-bold mb-2">Transaction Widgets</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Enable direct buying, selling, or swapping of cryptocurrencies. Integrates payment processing and wallet connectivity.
                </p>
                <p className="text-gray-400 text-xs">Use cases: E-commerce checkout, crypto exchanges, payment processors</p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Section 2: Embedding Price Tickers */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Embedding Price Tickers</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Price tickers are the easiest widgets to add to any website. Most don't require authentication or complex setup.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Using CoinGecko Ticker</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  CoinGecko offers a free, embeddable price ticker without API keys. Simply add this HTML snippet:
                </p>
                <div className="bg-slate-800 p-4 rounded border border-slate-700 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-200">
{`<script src="https://widgets.coingecko.com/
coingecko-coin-ticker-widget.js"></script>
<coingecko-coin-ticker-widget
  coin-ids="bitcoin,ethereum"
  currency="usd"
  locale="en">
</coingecko-coin-ticker-widget>`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Using TradingView Lightweight Charts</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  For more control and customization, TradingView's library provides flexible ticker options:
                </p>
                <div className="bg-slate-800 p-4 rounded border border-slate-700 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-200">
{`<script src="https://unpkg.com/
lightweight-charts/dist/lightweight-charts.
standalone.production.js"></script>
<div id="chart" style="width: 100%;
  height: 400px;"></div>`}
                  </pre>
                </div>
              </div>

              <div className="bg-slate-900 border-l-4 border-orange-500 p-4 rounded">
                <p className="text-gray-300">
                  <span className="font-bold text-orange-300">Pro Tip:</span> Cache ticker data server-side to reduce API calls and improve page load performance.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Section 3: Using iframe Embeds */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Using iframe Embeds</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              iframes are the safest and most versatile way to embed widgets. They isolate widget code from your page, preventing CSS conflicts and XSS vulnerabilities.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Basic iframe Implementation</h3>
                <div className="bg-slate-800 p-4 rounded border border-slate-700 font-mono text-sm overflow-x-auto mb-3">
                  <pre className="text-gray-200">
{`<iframe
  src="https://widget.provider.com/ticker"
  width="100%"
  height="400"
  frameborder="0"
  allow="encrypted-media">
</iframe>`}
                  </pre>
                </div>
                <p className="text-gray-300 text-sm">
                  Most widget providers host their iframes on dedicated domains to prevent mixed-content errors on HTTPS sites.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Popular iframe Widget Providers</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-orange-400">•</span>
                    <span><span className="font-semibold">TradingView Charts:</span> charts.tradingview.com</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400">•</span>
                    <span><span className="font-semibold">Messari Dashboard:</span> messari.io/charts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400">•</span>
                    <span><span className="font-semibold">Compound Finance UI:</span> app.compound.finance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400">•</span>
                    <span><span className="font-semibold">Uniswap Swap Widget:</span> Official Uniswap labs embed</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Security Considerations</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Always use HTTPS URLs in iframe src attributes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Set sandbox="allow-scripts allow-same-origin" to limit iframe permissions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Verify SSL certificates of widget providers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Monitor for Content Security Policy violations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Section 4: React Integration */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">React Component Integration</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you're building with React, several libraries provide native crypto widgets and charting components.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Using TradingView React Library</h3>
                <div className="bg-slate-800 p-4 rounded border border-slate-700 font-mono text-sm overflow-x-auto mb-3">
                  <pre className="text-gray-200">
{`import { ChartingLibraryWidgetOptions }
  from '@/charting_library';

export function Chart() {
  return (
    <div id="tv_chart_container"
      style={{width: '100%', height: '500px'}} />
  );
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Using wagmi for Wallet Widgets</h3>
                <p className="text-gray-300 text-sm mb-3">
                  For wallet integration and transaction widgets:
                </p>
                <div className="bg-slate-800 p-4 rounded border border-slate-700 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-200">
{`import { useAccount } from 'wagmi'

export function WalletWidget() {
  const { address } = useAccount()

  return (
    <div>
      {address &&
        <p>Connected: {address}</p>
      }
    </div>
  )
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Popular React Libraries</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-orange-400">•</span>
                    <span><span className="font-semibold">recharts:</span> Built on React components for charting</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400">•</span>
                    <span><span className="font-semibold">visx:</span> Low-level visualization primitives</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400">•</span>
                    <span><span className="font-semibold">wagmi:</span> React hooks for Ethereum</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400">•</span>
                    <span><span className="font-semibold">ethers.js:</span> Ethereum library with React bindings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Section 5: Customization Options */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Customization Options</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most widget providers offer extensive customization to match your brand identity.
            </p>

            <div className="bg-slate-900 p-4 rounded border border-slate-700 mb-6">
              <h3 className="text-pink-400 font-bold mb-3">Common Customization Parameters</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span><span className="font-semibold">Theme:</span> Light, dark, custom color schemes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span><span className="font-semibold">Size:</span> Width, height, responsive scaling</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span><span className="font-semibold">Data:</span> Which cryptocurrencies to display</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span><span className="font-semibold">Currency:</span> Display in USD, EUR, or other fiat</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-400 font-bold">•</span>
                  <span><span className="font-semibold">Intervals:</span> Update frequency (real-time vs delayed)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-pink-400 mb-3">Custom Styling with CSS</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                For iframe widgets, you can use CSS to adjust wrapper styling:
              </p>
              <div className="bg-slate-800 p-4 rounded border border-slate-700 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-200">
{`iframe {
  border: 1px solid #374151;
  border-radius: 8px;
  filter: invert(1) hue-rotate(180deg);
}

.widget-container {
  margin: 20px 0;
  padding: 16px;
  background: #0f172a;
}`}
                </pre>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Section 6: Placement Best Practices */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Widget Placement Best Practices</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Above-the-Fold Placement</h3>
                <p className="text-gray-300 leading-relaxed">
                  Price tickers in headers or navigation bars are visible immediately, improving engagement. Keep them lightweight so they don't slow page load.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Sidebar Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Small widgets in sidebars provide context without dominating the page layout. Perfect for portfolios or static content sites.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Full-Width Charts</h3>
                <p className="text-gray-300 leading-relaxed">
                  Dedicated pages or sections for detailed charts improve visual hierarchy. Use full-width layouts for maximum readability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Lazy Loading</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Load widgets only when visible to improve page performance:
                </p>
                <div className="bg-slate-800 p-4 rounded border border-slate-700 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-200">
{`const [loaded, setLoaded] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setLoaded(true);
      }
    }
  );
  observer.observe(widgetRef.current);
}, []);`}
                  </pre>
                </div>
              </div>

              <div className="bg-slate-900 border-l-4 border-orange-500 p-4 rounded">
                <p className="text-gray-300">
                  <span className="font-bold text-orange-300">Best Practice:</span> Always test widget performance on mobile devices. Some charts may be too heavy for mobile browsers.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Section 7: Analytics */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Analytics Considerations</h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Tracking widget interactions helps optimize engagement and user experience.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Tracking Widget Events</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Use Google Analytics or similar to track widget interactions:
                </p>
                <div className="bg-slate-800 p-4 rounded border border-slate-700 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-200">
{`function trackWidgetClick(coin) {
  gtag('event', 'widget_interaction', {
    event_category: 'crypto_widget',
    event_label: coin,
    value: 1
  });
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">Metrics to Monitor</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Widget load time (impacts Core Web Vitals)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Click-through rate on widget elements</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Time spent on pages with widgets</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>API call frequency and bandwidth usage</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">API Cost Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  Many widget APIs charge per request. Implement server-side caching to batch requests and reduce costs. Consider WebSocket connections for real-time updates instead of polling.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Key Takeaways */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Key Takeaways</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-950 to-slate-900 p-4 rounded border border-orange-800">
                <p className="text-gray-200">
                  <span className="font-bold text-orange-300">1.</span> Choose widgets based on your use case: tickers for real estate, charts for trading platforms, converters for commerce.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-950 to-slate-900 p-4 rounded border border-orange-800">
                <p className="text-gray-200">
                  <span className="font-bold text-orange-300">2.</span> iframes provide security isolation and are the safest way to embed third-party widgets.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-950 to-slate-900 p-4 rounded border border-orange-800">
                <p className="text-gray-200">
                  <span className="font-bold text-orange-300">3.</span> React libraries offer native components for deeper customization and integration.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-950 to-slate-900 p-4 rounded border border-orange-800">
                <p className="text-gray-200">
                  <span className="font-bold text-orange-300">4.</span> Optimize performance with lazy loading and monitor analytics to track engagement.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          {/* Related Links */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Related Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/learn" className="block p-4 bg-slate-900 rounded border border-slate-700 hover:border-orange-500 transition">
                <h3 className="text-pink-300 font-bold mb-2">← Back to Learn</h3>
                <p className="text-sm text-gray-400">Explore more educational content</p>
              </a>
              <div className="p-4 bg-slate-900 rounded border border-slate-700">
                <h3 className="text-pink-300 font-bold mb-2">Widget Provider Docs</h3>
                <p className="text-sm text-gray-400">Check TradingView, CoinGecko, and other widget documentation</p>
              </div>
            </div>
          </div>
        
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/crypto-heatmap-live" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Heatmap Live</a></li>
            <li><a href="/tools/defi-portfolio-dashboard" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Defi Portfolio Dashboard</a></li>
            <li><a href="/tools/impermanent-loss-calculator" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Impermanent Loss Calculator</a></li>
            <li><a href="/tools/token-vesting-schedule-tracker" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Token Vesting Schedule Tracker</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
      </section>
    </div>
  );
}
