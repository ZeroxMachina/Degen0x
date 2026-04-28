"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";

// ── Search Index with 40+ popular crypto site pages ────────────────────────
const SEARCH_INDEX = [
  // ── Tools ──
  {
    id: "dca-calculator",
    title: "DCA Calculator",
    description: "Calculate returns for dollar-cost averaging into crypto",
    category: "Tools",
    href: "/tools/dca-calculator",
    icon: "🧮",
    tags: ["calculator", "investing", "strategy"],
  },
  {
    id: "fee-calculator",
    title: "Fee Calculator",
    description: "Compare exchange trading fees side by side",
    category: "Tools",
    href: "/tools/fee-calculator",
    icon: "📊",
    tags: ["fees", "exchanges", "comparison"],
  },
  {
    id: "tax-calculator",
    title: "Tax Calculator",
    description: "Estimate your crypto capital gains tax",
    category: "Tools",
    href: "/tools/tax-calculator",
    icon: "📈",
    tags: ["taxes", "accounting", "calculator"],
  },
  {
    id: "portfolio-tracker",
    title: "Portfolio Tracker",
    description: "Track your crypto holdings and performance in real-time",
    category: "Tools",
    href: "/tools/portfolio-tracker",
    icon: "📱",
    tags: ["portfolio", "tracking", "performance"],
  },
  {
    id: "gas-fee-estimator",
    title: "Gas Fee Estimator",
    description: "Estimate Ethereum gas fees before transactions",
    category: "Tools",
    href: "/tools/gas-fee-estimator",
    icon: "⛽",
    tags: ["ethereum", "gas", "fees"],
  },
  {
    id: "staking-calculator",
    title: "Staking Calculator",
    description: "Calculate staking rewards for major cryptocurrencies",
    category: "Tools",
    href: "/tools/staking-calculator",
    icon: "💰",
    tags: ["staking", "rewards", "yield"],
  },

  // ── Exchanges ──
  {
    id: "best-exchanges",
    title: "Best Crypto Exchanges",
    description: "Top-rated exchanges ranked by fees, security & features",
    category: "Exchanges",
    href: "/exchanges/best",
    icon: "⇄",
    tags: ["exchanges", "comparison", "trading"],
  },
  {
    id: "coinbase-review",
    title: "Coinbase Review",
    description: "In-depth review covering fees, security and usability",
    category: "Exchanges",
    href: "/exchanges/coinbase",
    icon: "⭐",
    tags: ["coinbase", "exchange", "review"],
  },
  {
    id: "binance-review",
    title: "Binance Review",
    description: "Full review of the world's largest crypto exchange",
    category: "Exchanges",
    href: "/exchanges/binance",
    icon: "⭐",
    tags: ["binance", "exchange", "review"],
  },
  {
    id: "kraken-review",
    title: "Kraken Review",
    description: "Complete Kraken exchange review and analysis",
    category: "Exchanges",
    href: "/exchanges/kraken",
    icon: "⭐",
    tags: ["kraken", "exchange", "review"],
  },
  {
    id: "gemini-review",
    title: "Gemini Review",
    description: "Gemini exchange features, fees and security review",
    category: "Exchanges",
    href: "/exchanges/gemini",
    icon: "⭐",
    tags: ["gemini", "exchange", "review"],
  },
  {
    id: "bybit-review",
    title: "Bybit Review",
    description: "Bybit derivatives trading platform review",
    category: "Exchanges",
    href: "/exchanges/bybit",
    icon: "⭐",
    tags: ["bybit", "derivatives", "trading"],
  },

  // ── Wallets ──
  {
    id: "best-wallets",
    title: "Best Crypto Wallets",
    description: "Top-rated wallets for secure crypto storage",
    category: "Wallets",
    href: "/wallets/best",
    icon: "🔐",
    tags: ["wallets", "security", "storage"],
  },
  {
    id: "ledger-review",
    title: "Ledger Nano Review",
    description: "Hardware wallet review: security and ease of use",
    category: "Wallets",
    href: "/wallets/ledger",
    icon: "🛡️",
    tags: ["ledger", "hardware", "security"],
  },
  {
    id: "trezor-review",
    title: "Trezor Review",
    description: "Trezor hardware wallet features and security",
    category: "Wallets",
    href: "/wallets/trezor",
    icon: "🛡️",
    tags: ["trezor", "hardware", "security"],
  },
  {
    id: "metamask-review",
    title: "MetaMask Review",
    description: "MetaMask wallet setup and security guide",
    category: "Wallets",
    href: "/wallets/metamask",
    icon: "🦊",
    tags: ["metamask", "wallet", "ethereum"],
  },
  {
    id: "ledger-vs-trezor",
    title: "Ledger vs Trezor",
    description: "Compare the two best hardware wallets side by side",
    category: "Compare",
    href: "/compare/ledger-vs-trezor",
    icon: "⚖️",
    tags: ["comparison", "ledger", "trezor"],
  },

  // ── Learn ──
  {
    id: "how-to-buy-bitcoin",
    title: "How to Buy Bitcoin",
    description: "Step-by-step guide to purchasing your first Bitcoin",
    category: "Learn",
    href: "/learn/how-to-buy-bitcoin",
    icon: "📚",
    tags: ["bitcoin", "beginner", "guide"],
    readTime: "8 min",
  },
  {
    id: "what-is-defi",
    title: "What is DeFi?",
    description: "Decentralized Finance explained for beginners",
    category: "Learn",
    href: "/learn/what-is-defi",
    icon: "📚",
    tags: ["defi", "decentralized", "guide"],
    readTime: "10 min",
  },
  {
    id: "nft-guide",
    title: "NFT Beginner's Guide",
    description: "Everything you need to know about NFTs",
    category: "Learn",
    href: "/learn/nft-guide",
    icon: "🎨",
    tags: ["nft", "art", "blockchain"],
    readTime: "12 min",
  },
  {
    id: "blockchain-explained",
    title: "Blockchain Technology Explained",
    description: "How blockchain technology works under the hood",
    category: "Learn",
    href: "/learn/blockchain-explained",
    icon: "📚",
    tags: ["blockchain", "technology", "guide"],
    readTime: "15 min",
  },
  {
    id: "crypto-security-guide",
    title: "Crypto Security Best Practices",
    description: "Protect your crypto with these essential security tips",
    category: "Learn",
    href: "/learn/crypto-security",
    icon: "🔒",
    tags: ["security", "safety", "best practices"],
    readTime: "11 min",
  },
  {
    id: "smart-contracts",
    title: "Smart Contracts Explained",
    description: "Understanding smart contracts and their applications",
    category: "Learn",
    href: "/learn/smart-contracts",
    icon: "📚",
    tags: ["smart contracts", "ethereum", "guide"],
    readTime: "13 min",
  },
  {
    id: "crypto-tax-guide",
    title: "Crypto Tax Guide",
    description: "Complete guide to crypto taxes — what's taxable, how to report",
    category: "Learn",
    href: "/learn/crypto-tax-guide",
    icon: "📋",
    tags: ["taxes", "accounting", "guide"],
    readTime: "14 min",
  },

  // ── Compare ──
  {
    id: "coinbase-vs-binance",
    title: "Coinbase vs Binance",
    description: "Which is the better exchange? Full comparison",
    category: "Compare",
    href: "/compare/coinbase-vs-binance",
    icon: "⚖️",
    tags: ["comparison", "exchanges"],
  },
  {
    id: "btc-vs-eth",
    title: "Bitcoin vs Ethereum",
    description: "Bitcoin and Ethereum: key differences and similarities",
    category: "Compare",
    href: "/compare/bitcoin-vs-ethereum",
    icon: "⚖️",
    tags: ["bitcoin", "ethereum", "comparison"],
  },
  {
    id: "hot-vs-cold-wallet",
    title: "Hot Wallet vs Cold Wallet",
    description: "Compare hot and cold wallet security and convenience",
    category: "Compare",
    href: "/compare/hot-vs-cold-wallet",
    icon: "⚖️",
    tags: ["wallets", "security", "comparison"],
  },
  {
    id: "cex-vs-dex",
    title: "CEX vs DEX",
    description: "Centralized vs Decentralized exchanges explained",
    category: "Compare",
    href: "/compare/cex-vs-dex",
    icon: "⚖️",
    tags: ["exchanges", "decentralized", "comparison"],
  },

  // ── Additional Popular Pages ──
  {
    id: "bitcoin-price",
    title: "Bitcoin Price & Charts",
    description: "Real-time Bitcoin price and historical charts",
    category: "Tools",
    href: "/bitcoin/price",
    icon: "📈",
    tags: ["bitcoin", "price", "charts"],
  },
  {
    id: "ethereum-price",
    title: "Ethereum Price & Charts",
    description: "Real-time Ethereum price and performance data",
    category: "Tools",
    href: "/ethereum/price",
    icon: "📊",
    tags: ["ethereum", "price", "charts"],
  },
  {
    id: "market-news",
    title: "Crypto Market News",
    description: "Latest cryptocurrency market news and updates",
    category: "Learn",
    href: "/news",
    icon: "📰",
    tags: ["news", "market", "updates"],
  },
  {
    id: "glossary",
    title: "Crypto Glossary",
    description: "Comprehensive glossary of crypto terms and definitions",
    category: "Learn",
    href: "/glossary",
    icon: "📖",
    tags: ["glossary", "terms", "definitions"],
  },
  {
    id: "about",
    title: "About degen0x",
    description: "Our mission, editorial standards and team",
    category: "Info",
    href: "/about",
    icon: "ℹ️",
    tags: ["about", "team", "mission"],
  },
];

// ── Trending searches (shown when empty) ──
const TRENDING_SEARCHES = [
  "Bitcoin halving",
  "Best Bitcoin wallet",
  "Ethereum staking",
  "DeFi explained",
  "How to buy crypto",
  "NFT guide",
];

// ── Fuzzy matching function ──
function fuzzyMatch(query: string, text: string): boolean {
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  let qIndex = 0;
  for (let i = 0; i < t.length && qIndex < q.length; i++) {
    if (t[i] === q[qIndex]) qIndex++;
  }
  return qIndex === q.length;
}

// ── Group results by category ──
function groupResultsByCategory(items: typeof SEARCH_INDEX[]) {
  const grouped: Record<string, typeof SEARCH_INDEX> = {};
  items.forEach((item) => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  });
  return grouped;
}

// ── Main component ──
export default function EnhancedSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // ── Load recent searches from localStorage ──
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("recentSearches");
      if (stored) {
        try {
          setRecentSearches(JSON.parse(stored));
        } catch (e) {
          // Ignore parse errors
        }
      }
    }
  }, []);

  // ── Open on Cmd+K / Ctrl+K ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape" && open) {
        e.preventDefault();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  // ── Focus input when opened ──
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
      setSelectedCategory(null);
    }
  }, [open]);

  // ── Filter and search results ──
  const filteredResults = useMemo(() => {
    let items = SEARCH_INDEX;

    // Filter by category if selected
    if (selectedCategory && selectedCategory !== "All") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    // Search by query
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (item) =>
          fuzzyMatch(query, item.title) ||
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    return items.slice(0, 12); // Limit results
  }, [query, selectedCategory]);

  const groupedResults = groupResultsByCategory(filteredResults);
  const categories = ["All", "Tools", "Exchanges", "Wallets", "Learn", "Compare"];

  // ── Get all flattened results for keyboard nav ──
  const allResults = useMemo(() => {
    const flat: typeof SEARCH_INDEX = [];
    Object.values(groupedResults).forEach((items) => {
      flat.push(...items);
    });
    return flat;
  }, [groupedResults]);

  // ── Keyboard navigation ──
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((s) => Math.min(s + 1, allResults.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter" && allResults[selectedIndex]) {
        e.preventDefault();
        addRecentSearch(allResults[selectedIndex].title);
        setOpen(false);
        window.location.href = allResults[selectedIndex].href;
      } else if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    },
    [allResults, selectedIndex]
  );

  // ── Add search to recent ──
  const addRecentSearch = (title: string) => {
    const updated = [
      title,
      ...recentSearches.filter((s) => s !== title),
    ].slice(0, 8);
    setRecentSearches(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("recentSearches", JSON.stringify(updated));
    }
  };

  // ── Close on backdrop ──
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      setOpen(false);
    }
  };

  // ── Handle trending search click ──
  const handleTrendingClick = (trend: string) => {
    setQuery(trend);
    addRecentSearch(trend);
  };

  // ── Handle recent search click ──
  const handleRecentClick = (recent: string) => {
    setQuery(recent);
  };

  // ── Render highlighted result title ──
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const q = query.toLowerCase();
    const t = text.toLowerCase();
    const parts: { text: string; match: boolean }[] = [];
    let lastIndex = 0;

    for (let i = 0; i < t.length; i++) {
      if (t.substring(i, i + q.length) === q) {
        if (lastIndex < i) {
          parts.push({ text: text.substring(lastIndex, i), match: false });
        }
        parts.push({ text: text.substring(i, i + q.length), match: true });
        i += q.length - 1;
        lastIndex = i + 1;
      }
    }

    if (lastIndex < text.length) {
      parts.push({ text: text.substring(lastIndex), match: false });
    }

    return parts.length === 0 ? text : parts;
  };

  return (
    <>
      {/* ── Trigger button ── */}
      <button
        onClick={() => setOpen(true)}
        className="enhanced-search-trigger"
        aria-label="Open search"
      >
        <span className="trigger-icon">⌘</span>
        <span className="trigger-text">Search anything...</span>
        <span className="trigger-hint">Press ⌘K</span>
      </button>

      {/* ── Modal ── */}
      {open && (
        <div
          ref={overlayRef}
          className="enhanced-search-overlay"
          onClick={handleOverlayClick}
          aria-modal="true"
          role="dialog"
        >
          <div className="enhanced-search-modal">
            {/* ── Search Input ── */}
            <div className="search-input-wrapper">
              <span className="search-input-icon">🔍</span>
              <input
                ref={inputRef}
                className="search-input-field"
                type="text"
                placeholder="Search tools, exchanges, guides..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck={false}
              />
              {query && (
                <button
                  className="search-clear-btn"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              <kbd className="search-esc-hint">esc</kbd>
            </div>

            {/* ── Category Tabs ── */}
            <div className="category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-tab ${
                    selectedCategory === (cat === "All" ? null : cat) ? "active" : ""
                  }`}
                  onClick={() =>
                    setSelectedCategory(cat === "All" ? null : cat)
                  }
                >
                  {cat === "All" && "🌐"}
                  {cat === "Tools" && "🧮"}
                  {cat === "Exchanges" && "⇄"}
                  {cat === "Wallets" && "🔐"}
                  {cat === "Learn" && "📚"}
                  {cat === "Compare" && "⚖️"}
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            {/* ── Results Section ── */}
            <div className="search-results-section">
              {query.trim() && filteredResults.length === 0 && (
                <div className="empty-state">
                  <div className="empty-icon">🔍</div>
                  <div className="empty-title">No results found</div>
                  <div className="empty-subtitle">
                    Try different keywords or browse categories above
                  </div>
                </div>
              )}

              {query.trim() && filteredResults.length > 0 && (
                <div className="grouped-results">
                  {Object.entries(groupedResults).map(([category, items]) => (
                    <div key={category} className="result-group">
                      <div className="group-header">{category}</div>
                      <div className="group-items">
                        {items.map((item, idx) => {
                          const globalIdx = allResults.findIndex(
                            (r) => r.id === item.id
                          );
                          const isSelected = globalIdx === selectedIndex;
                          return (
                            <Link
                              key={item.id}
                              href={item.href}
                              className={`result-card ${
                                isSelected ? "selected" : ""
                              }`}
                              onClick={() => {
                                addRecentSearch(item.title);
                                setOpen(false);
                              }}
                              onMouseEnter={() => setSelectedIndex(globalIdx)}
                            >
                              <div className="card-icon">{item.icon}</div>
                              <div className="card-content">
                                <div className="card-title">
                                  {typeof highlightMatch(item.title, query) ===
                                  "string"
                                    ? highlightMatch(item.title, query)
                                    : Array.isArray(
                                        highlightMatch(item.title, query)
                                      )
                                    ? (highlightMatch(
                                        item.title,
                                        query
                                      ) as Array<{
                                        text: string;
                                        match: boolean;
                                      }>).map((part, i) => (
                                        <span
                                          key={i}
                                          className={
                                            part.match ? "highlight" : ""
                                          }
                                        >
                                          {part.text}
                                        </span>
                                      ))
                                    : null}
                                </div>
                                <div className="card-description">
                                  {item.description}
                                </div>
                                {item.readTime && (
                                  <div className="card-meta">
                                    ⏱️ {item.readTime} read
                                  </div>
                                )}
                              </div>
                              <div className="card-shortcut">
                                <kbd>↵</kbd>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!query.trim() && (
                <>
                  {/* ── Recent Searches ── */}
                  {recentSearches.length > 0 && (
                    <div className="recent-section">
                      <div className="section-header">
                        <span className="header-icon">🕐</span>
                        <span>Recent</span>
                      </div>
                      <div className="search-pills">
                        {recentSearches.map((search) => (
                          <button
                            key={search}
                            className="search-pill"
                            onClick={() => handleRecentClick(search)}
                          >
                            {search}
                            <span className="pill-icon">→</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Trending Searches ── */}
                  <div className="trending-section">
                    <div className="section-header">
                      <span className="header-icon">🔥</span>
                      <span>Trending</span>
                    </div>
                    <div className="search-pills">
                      {TRENDING_SEARCHES.map((trend) => (
                        <button
                          key={trend}
                          className="search-pill"
                          onClick={() => handleTrendingClick(trend)}
                        >
                          {trend}
                          <span className="pill-icon">→</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ── Quick Links ── */}
                  <div className="quick-links-section">
                    <div className="section-header">
                      <span className="header-icon">⭐</span>
                      <span>Popular</span>
                    </div>
                    <div className="quick-grid">
                      {[
                        {
                          title: "Best Exchanges",
                          icon: "⇄",
                          href: "/exchanges/best",
                        },
                        {
                          title: "Best Wallets",
                          icon: "🔐",
                          href: "/wallets/best",
                        },
                        {
                          title: "Tax Guide",
                          icon: "📋",
                          href: "/learn/crypto-tax-guide",
                        },
                        {
                          title: "DeFi Guide",
                          icon: "💡",
                          href: "/learn/what-is-defi",
                        },
                      ].map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="quick-link"
                          onClick={() => setOpen(false)}
                        >
                          <span className="quick-icon">{link.icon}</span>
                          <span className="quick-title">{link.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* ── Footer ── */}
            <div className="search-footer">
              <div className="footer-hints">
                <span>
                  <kbd>↑</kbd>
                  <kbd>↓</kbd> navigate
                </span>
                <span>
                  <kbd>↵</kbd> select
                </span>
                <span>
                  <kbd>esc</kbd> close
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ── Trigger Button ── */
        .enhanced-search-trigger {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 8px 14px;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
          font-weight: 500;
        }
        .enhanced-search-trigger:hover {
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.08) 100%);
          border-color: rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.8);
        }
        .trigger-icon {
          font-size: 16px;
          font-family: monospace;
          opacity: 0.7;
        }
        .trigger-text {
          flex: 1;
          text-align: left;
        }
        .trigger-hint {
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 5px;
          padding: 2px 8px;
          font-size: 12px;
          color: #a5b4fc;
          font-family: monospace;
        }

        /* ── Overlay & Modal ── */
        .enhanced-search-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: clamp(40px, 10vh, 100px);
          animation: fadeIn 0.15s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(6px);
          }
        }

        .enhanced-search-modal {
          width: 100%;
          max-width: 680px;
          background: linear-gradient(135deg, #1a1f2e 0%, #1e2637 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 80px rgba(0,0,0,0.5), 0 0 1px rgba(255,255,255,0.05);
          margin: 0 16px;
          display: flex;
          flex-direction: column;
          max-height: 80vh;
          animation: slideUp 0.2s ease;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Input Wrapper ── */
        .search-input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
        }
        .search-input-icon {
          font-size: 18px;
          opacity: 0.6;
          flex-shrink: 0;
        }
        .search-input-field {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #e6edf3;
          font-size: 16px;
          font-weight: 500;
          placeholder: rgba(255,255,255,0.3);
        }
        .search-input-field::placeholder {
          color: rgba(255,255,255,0.3);
        }
        .search-clear-btn {
          background: rgba(255,255,255,0.08);
          border: none;
          border-radius: 6px;
          color: rgba(255,255,255,0.4);
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 14px;
          flex-shrink: 0;
          transition: all 0.15s;
        }
        .search-clear-btn:hover {
          background: rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.6);
        }
        .search-esc-hint {
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 5px;
          padding: 3px 8px;
          font-size: 11px;
          color: rgba(165,180,252,0.7);
          font-family: monospace;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.15s;
        }
        .search-esc-hint:hover {
          background: rgba(99,102,241,0.15);
          border-color: rgba(99,102,241,0.3);
        }

        /* ── Category Tabs ── */
        .category-tabs {
          display: flex;
          gap: 6px;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.01);
          overflow-x: auto;
          scroll-behavior: smooth;
        }
        .category-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 6px 12px;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
        }
        .category-tab:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.7);
        }
        .category-tab.active {
          background: linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(79,70,229,0.1) 100%);
          border-color: rgba(99,102,241,0.3);
          color: #c7d2fe;
        }

        /* ── Results Section ── */
        .search-results-section {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
        }

        /* ── Empty State ── */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 60px 20px;
          text-align: center;
        }
        .empty-icon {
          font-size: 48px;
          opacity: 0.3;
        }
        .empty-title {
          font-size: 16px;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
        }
        .empty-subtitle {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
        }

        /* ── Grouped Results ── */
        .grouped-results {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .result-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .group-header {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: rgba(255,255,255,0.25);
          padding: 0 8px;
        }
        .group-items {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        /* ── Result Cards ── */
        .result-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.12s ease;
        }
        .result-card:hover {
          background: rgba(99,102,241,0.12);
          border-color: rgba(99,102,241,0.2);
        }
        .result-card.selected {
          background: linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(79,70,229,0.08) 100%);
          border-color: rgba(99,102,241,0.4);
        }

        .card-icon {
          font-size: 20px;
          flex-shrink: 0;
          width: 32px;
          text-align: center;
          opacity: 0.9;
        }
        .card-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .card-title {
          font-size: 14px;
          font-weight: 600;
          color: #e6edf3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .card-title .highlight {
          background: rgba(165,180,252,0.3);
          color: #c7d2fe;
          font-weight: 700;
          border-radius: 2px;
          padding: 0 2px;
        }
        .card-description {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .card-meta {
          font-size: 11px;
          color: rgba(99,102,241,0.6);
          margin-top: 1px;
        }
        .card-shortcut {
          flex-shrink: 0;
          font-size: 10px;
          color: rgba(255,255,255,0.2);
        }
        .card-shortcut kbd {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          padding: 2px 6px;
          font-family: monospace;
          color: rgba(255,255,255,0.3);
        }

        /* ── Recent & Trending ── */
        .recent-section,
        .trending-section,
        .quick-links-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 16px 0;
        }
        .section-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: rgba(255,255,255,0.35);
          padding: 0 8px;
        }
        .header-icon {
          font-size: 16px;
        }

        .search-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 0 8px;
        }
        .search-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 8px;
          padding: 6px 10px;
          color: rgba(165,180,252,0.8);
          font-size: 13px;
          cursor: pointer;
          transition: all 0.12s ease;
          white-space: nowrap;
        }
        .search-pill:hover {
          background: rgba(99,102,241,0.15);
          border-color: rgba(99,102,241,0.3);
          color: #c7d2fe;
        }
        .pill-icon {
          opacity: 0.5;
          font-size: 12px;
        }

        /* ── Quick Links ── */
        .quick-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          padding: 0 8px;
        }
        .quick-link {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 10px 12px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.12s ease;
        }
        .quick-link:hover {
          background: rgba(99,102,241,0.12);
          border-color: rgba(99,102,241,0.2);
          color: #c7d2fe;
        }
        .quick-icon {
          font-size: 18px;
          flex-shrink: 0;
        }
        .quick-title {
          flex: 1;
        }

        /* ── Footer ── */
        .search-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.01);
          font-size: 11px;
          color: rgba(255,255,255,0.3);
        }
        .footer-hints {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .footer-hints span {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .footer-hints kbd {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 3px;
          padding: 1px 5px;
          font-family: monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.25);
        }

        /* ── Scrollbar Styling ── */
        .search-results-section::-webkit-scrollbar {
          width: 6px;
        }
        .search-results-section::-webkit-scrollbar-track {
          background: transparent;
        }
        .search-results-section::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
        }
        .search-results-section::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.15);
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .enhanced-search-modal {
            max-width: calc(100% - 32px);
          }
          .quick-grid {
            grid-template-columns: 1fr;
          }
          .category-tabs {
            gap: 4px;
            padding: 10px 12px;
          }
          .category-tab {
            padding: 5px 10px;
            font-size: 12px;
          }
          .search-footer {
            font-size: 10px;
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
}
