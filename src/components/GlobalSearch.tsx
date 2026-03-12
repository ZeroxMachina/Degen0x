"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/lib/constants";

// ── Build a flat search index from CATEGORIES ──────────────────────────────
const SEARCH_INDEX = CATEGORIES.flatMap((cat) => [
  {
    title: cat.name,
    description: cat.description,
    href: `/${cat.slug}`,
    category: cat.name,
    icon: cat.icon,
  },
  ...cat.subcategories.map((sub) => ({
    title: sub.name,
    description: sub.description,
    href: `/${cat.slug}/${sub.slug}`,
    category: cat.name,
    icon: cat.icon,
  })),
]);

// Add popular standalone pages
const EXTRA_PAGES = [
  { title: "Best Crypto Exchanges", description: "Top-rated exchanges ranked by fees, security & features", href: "/exchanges/best", category: "Exchanges", icon: "⇄" },
  { title: "Coinbase Review", description: "In-depth Coinbase review covering fees, security and usability", href: "/exchanges/reviews/coinbase", category: "Reviews", icon: "⭐" },
  { title: "Binance Review", description: "Full Binance review — the world's largest crypto exchange", href: "/exchanges/reviews/binance", category: "Reviews", icon: "⭐" },
  { title: "Ledger vs Trezor", description: "Compare the two best hardware wallets side by side", href: "/wallets/compare/ledger-vs-trezor", category: "Compare", icon: "⚖️" },
  { title: "Coinbase vs Binance", description: "Which is the better exchange? Full comparison", href: "/exchanges/compare/coinbase-vs-binance", category: "Compare", icon: "⚖️" },
  { title: "Crypto Tax Guide", description: "Complete guide to crypto taxes — what's taxable, how to report", href: "/taxes/learn/crypto-tax-guide", category: "Taxes", icon: "📋" },
  { title: "How to Buy Bitcoin", description: "Step-by-step guide to purchasing your first Bitcoin", href: "/learn/how-to-buy-bitcoin", category: "Learn", icon: "📚" },
  { title: "What is DeFi?", description: "Decentralized Finance explained for beginners", href: "/learn/what-is-defi", category: "Learn", icon: "📚" },
  { title: "DCA Calculator", description: "Calculate returns for dollar-cost averaging into crypto", href: "/exchanges/tools/dca-calculator", category: "Tools", icon: "🧮" },
  { title: "Fee Calculator", description: "Compare exchange trading fees side by side", href: "/exchanges/tools/fee-calculator", category: "Tools", icon: "🧮" },
  { title: "Tax Calculator", description: "Estimate your crypto capital gains tax", href: "/taxes/calculators/tax-calculator", category: "Tools", icon: "🧮" },
  { title: "About degen0x", description: "Our mission, editorial standards and team", href: "/about", category: "Info", icon: "ℹ️" },
];

const ALL_RESULTS = [...SEARCH_INDEX, ...EXTRA_PAGES];

function searchItems(query: string) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return ALL_RESULTS.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  ).slice(0, 8);
}

// ── Component ───────────────────────────────────────────────────────────────
export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof ALL_RESULTS>([]);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Open on Cmd+K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelected(0);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [open]);

  // Search on query change
  useEffect(() => {
    setResults(searchItems(query));
    setSelected(0);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter" && results[selected]) {
        setOpen(false);
        setQuery("");
        window.location.href = results[selected].href;
      }
    },
    [results, selected]
  );

  // Close on backdrop click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      setOpen(false);
      setQuery("");
    }
  };

  const popularLinks = [
    { label: "Best Exchanges", href: "/exchanges/best", icon: "⇄" },
    { label: "Best Wallets", href: "/wallets/best", icon: "🔐" },
    { label: "Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", icon: "📋" },
    { label: "Learn Crypto", href: "/learn", icon: "📚" },
  ];

  return (
    <>
      {/* ── Trigger button ── */}
      <button
        onClick={() => setOpen(true)}
        className="search-trigger"
        aria-label="Open search"
      >
        <span className="search-trigger-icon">🔍</span>
        <span className="search-trigger-text">Search…</span>
        <span className="search-trigger-kbd">⌘K</span>
      </button>

      {/* ── Modal ── */}
      {open && (
        <div
          ref={overlayRef}
          className="search-overlay"
          onClick={handleOverlayClick}
          aria-modal="true"
          role="dialog"
        >
          <div className="search-modal">
            {/* Input */}
            <div className="search-input-row">
              <span className="search-icon">🔍</span>
              <input
                ref={inputRef}
                className="search-input"
                type="text"
                placeholder="Search exchanges, wallets, guides…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck={false}
              />
              {query && (
                <button className="search-clear" onClick={() => setQuery("")} aria-label="Clear">✕</button>
              )}
              <kbd className="search-esc" onClick={() => setOpen(false)}>esc</kbd>
            </div>

            {/* Results */}
            <div className="search-body">
              {query && results.length === 0 && (
                <div className="search-empty">No results for &ldquo;{query}&rdquo;</div>
              )}

              {results.length > 0 && (
                <ul className="search-results" role="listbox">
                  {results.map((item, i) => (
                    <li key={item.href} role="option" aria-selected={i === selected}>
                      <Link
                        href={item.href}
                        className={`search-result-item ${i === selected ? "is-selected" : ""}`}
                        onClick={() => { setOpen(false); setQuery(""); }}
                        onMouseEnter={() => setSelected(i)}
                      >
                        <span className="result-icon">{item.icon}</span>
                        <span className="result-content">
                          <span className="result-title">{item.title}</span>
                          <span className="result-desc">{item.description}</span>
                        </span>
                        <span className="result-cat">{item.category}</span>
                        <span className="result-arrow">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {!query && (
                <div className="search-popular">
                  <div className="search-popular-label">Popular</div>
                  <div className="search-popular-grid">
                    {popularLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="search-popular-item"
                        onClick={() => { setOpen(false); setQuery(""); }}
                      >
                        <span>{l.icon}</span> {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="search-footer">
              <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
              <span><kbd>↵</kbd> select</span>
              <span><kbd>esc</kbd> close</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .search-trigger {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 6px 12px;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          cursor: pointer;
          transition: all 0.15s;
          min-width: 180px;
        }
        .search-trigger:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.7);
        }
        .search-trigger-icon { font-size: 14px; }
        .search-trigger-text { flex: 1; text-align: left; }
        .search-trigger-kbd {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 4px;
          padding: 1px 5px;
          font-size: 11px;
          font-family: monospace;
        }

        .search-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: clamp(60px, 12vh, 120px);
        }
        .search-modal {
          width: 100%;
          max-width: 600px;
          background: #1c2330;
          border: 1px solid #30363d;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.6);
          margin: 0 16px;
        }
        .search-input-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 16px;
          border-bottom: 1px solid #30363d;
        }
        .search-icon { font-size: 18px; opacity: 0.5; flex-shrink: 0; }
        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #e6edf3;
          font-size: 16px;
          placeholder: rgba(255,255,255,0.3);
        }
        .search-input::placeholder { color: rgba(255,255,255,0.3); }
        .search-clear {
          background: rgba(255,255,255,0.08);
          border: none;
          border-radius: 4px;
          color: rgba(255,255,255,0.5);
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 12px;
          flex-shrink: 0;
        }
        .search-esc {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 4px;
          padding: 2px 7px;
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          font-family: monospace;
          flex-shrink: 0;
        }
        .search-body { max-height: 380px; overflow-y: auto; }
        .search-empty { padding: 32px 16px; text-align: center; color: rgba(255,255,255,0.35); font-size: 14px; }
        .search-results { list-style: none; padding: 8px; margin: 0; display: flex; flex-direction: column; gap: 2px; }
        .search-result-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.1s;
          cursor: pointer;
        }
        .search-result-item:hover, .search-result-item.is-selected {
          background: rgba(99,102,241,0.15);
        }
        .result-icon { font-size: 20px; flex-shrink: 0; width: 28px; text-align: center; }
        .result-content { flex: 1; min-width: 0; }
        .result-title { display: block; font-size: 14px; font-weight: 600; color: #e6edf3; }
        .result-desc { display: block; font-size: 12px; color: #8b949e; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px; }
        .result-cat { font-size: 11px; color: #6366f1; background: rgba(99,102,241,0.15); border-radius: 4px; padding: 2px 7px; flex-shrink: 0; white-space: nowrap; }
        .result-arrow { color: #30363d; font-size: 14px; flex-shrink: 0; }
        .search-result-item:hover .result-arrow, .search-result-item.is-selected .result-arrow { color: #6366f1; }

        .search-popular { padding: 16px; }
        .search-popular-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #8b949e; margin-bottom: 10px; }
        .search-popular-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .search-popular-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid #30363d;
          border-radius: 8px;
          font-size: 13px;
          color: #8b949e;
          text-decoration: none;
          transition: all 0.15s;
        }
        .search-popular-item:hover {
          background: rgba(99,102,241,0.1);
          border-color: rgba(99,102,241,0.3);
          color: #e6edf3;
        }

        .search-footer {
          display: flex;
          gap: 16px;
          padding: 10px 16px;
          border-top: 1px solid #30363d;
          font-size: 11px;
          color: #30363d;
        }
        .search-footer kbd {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 3px;
          padding: 1px 5px;
          font-family: monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.25);
          margin-right: 3px;
        }
      `}</style>
    </>
  );
}
