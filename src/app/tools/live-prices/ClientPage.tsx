'use client';

import React, { useState, useMemo } from 'react';
import LivePriceFeed from '@/components/LivePriceFeed';
import RelatedContent from '@/components/RelatedContent';
import AuthoritySources from '@/components/AuthoritySources';

export default function LivePricesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allCoins = [
    { symbol: 'BTC', name: 'Bitcoin' },
    { symbol: 'ETH', name: 'Ethereum' },
    { symbol: 'SOL', name: 'Solana' },
    { symbol: 'BNB', name: 'BNB' },
    { symbol: 'XRP', name: 'XRP' },
    { symbol: 'ADA', name: 'Cardano' },
    { symbol: 'AVAX', name: 'Avalanche' },
    { symbol: 'DOT', name: 'Polkadot' },
    { symbol: 'LINK', name: 'Chainlink' },
    { symbol: 'MATIC', name: 'Polygon' },
  ];

  const filteredCoins = useMemo(() => {
    return allCoins.filter((coin) => {
      const matchesSearch =
        coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0d1117',
        color: '#e6edf3',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Navigation Placeholder */}
      <nav
        style={{
          backgroundColor: '#161b22',
          borderBottom: '1px solid #30363d',
          padding: '16px 0',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#e6edf3',
            }}
          >
            degen0x
          </div>
          <div
            style={{
              fontSize: '14px',
              color: '#8b949e',
            }}
          >
            Live Prices
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: '#161b22',
          borderBottom: '1px solid #30363d',
          padding: '60px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontSize: '42px',
              fontWeight: '800',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #3fb950 0%, #58a6ff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Live Crypto Prices
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: '#8b949e',
              marginBottom: '8px',
              lineHeight: '1.6',
            }}
          >
            Monitor real-time cryptocurrency prices and market movements. Track major coins with live updates, 24-hour changes, and price history charts.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section
        style={{
          padding: '40px 20px',
          backgroundColor: '#0d1117',
          borderBottom: '1px solid #30363d',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#e6edf3',
            }}
          >
            Market Overview
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {/* Total Market Cap */}
            <div
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  color: '#8b949e',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Total Market Cap
              </div>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#e6edf3',
                }}
              >
                $1.84T
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#3fb950',
                  marginTop: '8px',
                }}
              >
                ▲ 3.2% (24h)
              </div>
            </div>

            {/* BTC Dominance */}
            <div
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  color: '#8b949e',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                BTC Dominance
              </div>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#e6edf3',
                }}
              >
                47.3%
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#3fb950',
                  marginTop: '8px',
                }}
              >
                ▲ 0.5% (24h)
              </div>
            </div>

            {/* 24h Volume */}
            <div
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  color: '#8b949e',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                24h Volume
              </div>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#e6edf3',
                }}
              >
                $68.4B
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#f85149',
                  marginTop: '8px',
                }}
              >
                ▼ 2.1% (24h)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section
        style={{
          padding: '40px 20px',
          backgroundColor: '#0d1117',
          borderBottom: '1px solid #30363d',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                flex: '1 1 300px',
                minWidth: '250px',
              }}
            >
              <input
                type="text"
                placeholder="Search coins (e.g., Bitcoin, BTC)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  color: '#e6edf3',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#58a6ff';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#30363d';
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                gap: '8px',
              }}
            >
              {['all', 'top10', 'favorites'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '12px 16px',
                    backgroundColor: selectedCategory === cat ? '#58a6ff' : '#161b22',
                    border: `1px solid ${selectedCategory === cat ? '#58a6ff' : '#30363d'}`,
                    borderRadius: '8px',
                    color: selectedCategory === cat ? '#0d1117' : '#e6edf3',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textTransform: 'capitalize',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== cat) {
                      e.currentTarget.style.backgroundColor = '#30363d';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== cat) {
                      e.currentTarget.style.backgroundColor = '#161b22';
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {searchQuery && (
            <div
              style={{
                marginTop: '12px',
                fontSize: '12px',
                color: '#8b949e',
              }}
            >
              Found {filteredCoins.length} coin{filteredCoins.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </div>
          )}
        </div>
      </section>

      {/* Live Price Feed */}
      <section
        style={{
          padding: '40px 20px',
          backgroundColor: '#0d1117',
          borderBottom: '1px solid #30363d',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#e6edf3',
            }}
          >
            Price Ticker
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
              fontSize: '12px',
              color: '#8b949e',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#3fb950',
                borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }}
            />
            <style>{`
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
              }
            `}</style>
            Live updates every 3 seconds
          </div>

          <LivePriceFeed />
        </div>
      </section>

      {/* Info Section */}
      <section
        style={{
          padding: '40px 20px',
          backgroundColor: '#161b22',
          borderBottom: '1px solid #30363d',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#e6edf3',
            }}
          >
            About Real-Time Price Feeds
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#e6edf3',
                }}
              >
                WebSocket Technology
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#8b949e',
                  lineHeight: '1.6',
                }}
              >
                Real-time price feeds use WebSocket connections to receive instant price updates from multiple exchanges, ensuring you always have the most current market data without constant HTTP polling.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#e6edf3',
                }}
              >
                Market Volatility
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#8b949e',
                  lineHeight: '1.6',
                }}
              >
                Cryptocurrency markets are highly volatile. The animated price changes and 24h percentage movements help you quickly identify market trends and make informed trading decisions.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#e6edf3',
                }}
              >
                Price History Charts
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#8b949e',
                  lineHeight: '1.6',
                }}
              >
                Mini sparkline charts show recent price movement, giving you a quick visual indication of whether a coin is trending up (green) or down (red) in the last few minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          padding: '40px 20px',
          backgroundColor: '#0d1117',
          borderBottom: '1px solid #30363d',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#e6edf3',
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: 'grid',
              gap: '16px',
            }}
          >
            {[
              {
                question: 'How often are prices updated?',
                answer: 'Prices are updated in real-time through WebSocket connections. This ticker simulates updates every 2-3 seconds with realistic price fluctuations.',
              },
              {
                question: 'What does the 24h change percentage mean?',
                answer: 'The 24h change shows the percentage increase or decrease of a coin\'s price over the last 24 hours. Green indicates gains, red indicates losses.',
              },
              {
                question: 'Can I use this data for trading?',
                answer: 'This ticker provides market overview data. For actual trading, always use verified price feeds from licensed exchanges.',
              },
              {
                question: 'What do the colored bars represent?',
                answer: 'The mini sparkline bars show recent price movements. Green bars indicate upward movement, red indicates downward movement, with height representing price volatility.',
              },
              {
                question: 'Why do some coins update more frequently?',
                answer: 'Different coins have different volatility levels. Bitcoin and Ethereum tend to be more stable, while smaller altcoins may show larger fluctuations.',
              },
              {
                question: 'How can I filter the coins?',
                answer: 'Use the search bar to filter by coin name or symbol. Filter buttons let you view all coins, top 10, or your favorites.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                style={{
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  padding: '16px',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#e6edf3',
                    outline: 'none',
                    userSelect: 'none',
                  }}
                >
                  {faq.question}
                </summary>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#8b949e',
                    marginTop: '12px',
                    lineHeight: '1.6',
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        style={{
          padding: '60px 20px',
          backgroundColor: 'linear-gradient(135deg, rgba(63, 185, 80, 0.1) 0%, rgba(88, 166, 255, 0.1) 100%)',
          backgroundImage: 'linear-gradient(135deg, rgba(63, 185, 80, 0.1) 0%, rgba(88, 166, 255, 0.1) 100%)',
          borderTop: '1px solid #30363d',
          borderBottom: '1px solid #30363d',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#e6edf3',
            }}
          >
            Stay Updated on Crypto Markets
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#8b949e',
              marginBottom: '24px',
              lineHeight: '1.6',
            }}
          >
            Get daily crypto market insights, price alerts, and trading tips delivered to your inbox.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '12px',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '12px 16px',
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                color: '#e6edf3',
                fontSize: '14px',
              }}
            />
            <button
              style={{
                padding: '12px 24px',
                backgroundColor: '#3fb950',
                border: 'none',
                borderRadius: '8px',
                color: '#0d1117',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2ea043';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3fb950';
              }}
            >
              Subscribe
            </button>
          </div>
          <p
            style={{
              fontSize: '12px',
              color: '#8b949e',
            }}
          >
            No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '32px 20px',
          backgroundColor: '#161b22',
          borderTop: '1px solid #30363d',
          textAlign: 'center',
          fontSize: '12px',
          color: '#8b949e',
        }}
      >
        <p>degen0x © 2024. All rights reserved. Market data for informational purposes only.</p>
      </footer>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Live Prices",
              "url": "https://degen0x.com/tools/live-prices",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <AuthoritySources url="/tools/live-prices" />
      <RelatedContent category="tools" currentSlug="/tools/live-prices" />
      </div>
  );
}
