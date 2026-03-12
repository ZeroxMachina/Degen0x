"use client";

import { useState, useCallback } from "react";
import { Metadata } from "next";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────
interface PortfolioItem {
  id: string;
  symbol: string;
  name: string;
  amount: number;
  price: number;
  change24h: number;
}

interface WatchlistItem {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  change7d: number;
  marketCap: number;
}

interface PriceAlert {
  id: string;
  symbol: string;
  targetPrice: number;
  direction: "above" | "below";
  currentPrice: number;
  triggered: boolean;
}

interface Transaction {
  id: string;
  symbol: string;
  type: "buy" | "sell";
  amount: number;
  price: number;
  date: string;
}

// ─── Mock Data ───────────────────────────────────────────────────────────
const MOCK_PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    amount: 0.5432,
    price: 87420,
    change24h: 3.24,
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    amount: 5.2,
    price: 3891,
    change24h: 1.87,
  },
  {
    id: "sol",
    symbol: "SOL",
    name: "Solana",
    amount: 25.0,
    price: 184,
    change24h: -2.15,
  },
  {
    id: "bnb",
    symbol: "BNB",
    name: "BNB",
    amount: 10.5,
    price: 612,
    change24h: 2.43,
  },
];

const MOCK_WATCHLIST_DATA: WatchlistItem[] = [
  {
    id: "xrp",
    symbol: "XRP",
    name: "Ripple",
    price: 2.62,
    change24h: 5.2,
    change7d: 12.5,
    marketCap: 140000000000,
  },
  {
    id: "ada",
    symbol: "ADA",
    name: "Cardano",
    price: 0.95,
    change24h: -1.3,
    change7d: 3.2,
    marketCap: 35000000000,
  },
  {
    id: "link",
    symbol: "LINK",
    name: "Chainlink",
    price: 18.4,
    change24h: 4.8,
    change7d: 8.9,
    marketCap: 9000000000,
  },
  {
    id: "uni",
    symbol: "UNI",
    name: "Uniswap",
    price: 11.8,
    change24h: 2.1,
    change7d: 5.6,
    marketCap: 8000000000,
  },
  {
    id: "avax",
    symbol: "AVAX",
    name: "Avalanche",
    price: 38.4,
    change24h: -3.2,
    change7d: 2.1,
    marketCap: 15000000000,
  },
];

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "tx-001",
    symbol: "BTC",
    type: "buy",
    amount: 0.2345,
    price: 85000,
    date: "2024-03-10T14:32:00Z",
  },
  {
    id: "tx-002",
    symbol: "ETH",
    type: "buy",
    amount: 2.5,
    price: 3800,
    date: "2024-03-09T09:15:00Z",
  },
  {
    id: "tx-003",
    symbol: "SOL",
    type: "sell",
    amount: 10.0,
    price: 190,
    date: "2024-03-08T16:45:00Z",
  },
  {
    id: "tx-004",
    symbol: "BNB",
    type: "buy",
    amount: 5.0,
    price: 600,
    date: "2024-03-07T11:20:00Z",
  },
  {
    id: "tx-005",
    symbol: "ETH",
    type: "buy",
    amount: 2.7,
    price: 3850,
    date: "2024-03-06T13:40:00Z",
  },
];

// ─── Utility Functions ───────────────────────────────────────────────────
function formatNumber(num: number): string {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2) + "B";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(2) + "K";
  }
  return num.toFixed(2);
}

function formatCurrency(num: number, decimals: number = 2): string {
  return "$" + num.toLocaleString("en-US", { maximumFractionDigits: decimals });
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function ChangeIndicator({ change }: { change: number }) {
  const isPositive = change >= 0;
  return (
    <span
      className={`inline-flex items-center gap-0.5 px-2 py-1 rounded-lg text-sm font-medium ${
        isPositive
          ? "text-[var(--color-success)] bg-[var(--color-success)]/10"
          : "text-[var(--color-danger)] bg-[var(--color-danger)]/10"
      }`}
    >
      {isPositive ? "↑" : "↓"} {Math.abs(change).toFixed(2)}%
    </span>
  );
}

// ─── Portfolio Overview Section ───────────────────────────────────────────
function PortfolioOverview({
  items,
  onAddCoin,
}: {
  items: PortfolioItem[];
  onAddCoin: () => void;
}) {
  const totalValue = items.reduce((sum, item) => sum + item.amount * item.price, 0);
  const avgChange =
    items.reduce((sum, item) => sum + item.change24h * item.amount * item.price, 0) / totalValue || 0;

  return (
    <div className="glass p-6 rounded-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Portfolio Overview</h2>
          <p className="text-[var(--color-text-secondary)]">Your crypto holdings</p>
        </div>
        <button
          onClick={onAddCoin}
          className="glass px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--glass-bg-hover)] transition-all duration-300"
        >
          + Add Coin
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="glass-subtle p-4 rounded-xl">
          <p className="text-xs text-[var(--color-text-secondary)] mb-1">Total Value</p>
          <p className="text-xl font-bold text-[var(--color-text)]">
            {formatCurrency(totalValue)}
          </p>
        </div>
        <div className="glass-subtle p-4 rounded-xl">
          <p className="text-xs text-[var(--color-text-secondary)] mb-1">24h Change</p>
          <ChangeIndicator change={avgChange} />
        </div>
        <div className="glass-subtle p-4 rounded-xl">
          <p className="text-xs text-[var(--color-text-secondary)] mb-1">Holdings</p>
          <p className="text-xl font-bold text-[var(--color-text)]">{items.length}</p>
        </div>
        <div className="glass-subtle p-4 rounded-xl">
          <p className="text-xs text-[var(--color-text-secondary)] mb-1">Diversity</p>
          <p className="text-xl font-bold text-[var(--color-primary)]">Good</p>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const itemValue = item.amount * item.price;
          const percentage = (itemValue / totalValue) * 100;
          return (
            <div key={item.id} className="glass-subtle p-4 rounded-xl hover:bg-[var(--glass-bg)] transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] flex items-center justify-center font-bold text-[var(--color-primary)]">
                    {item.symbol.substring(0, 1)}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">{item.name}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{item.amount} {item.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[var(--color-text)]">{formatCurrency(itemValue)}</p>
                  <ChangeIndicator change={item.change24h} />
                </div>
              </div>
              <div className="w-full bg-[var(--glass-subtle-bg)] rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">{percentage.toFixed(1)}% of portfolio</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Watchlist Section ───────────────────────────────────────────────────
function Watchlist({
  items,
  onAddToWatchlist,
}: {
  items: WatchlistItem[];
  onAddToWatchlist: () => void;
}) {
  return (
    <div className="glass p-6 rounded-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Watchlist</h2>
          <p className="text-[var(--color-text-secondary)]">Track coins you're interested in</p>
        </div>
        <button
          onClick={onAddToWatchlist}
          className="glass px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--glass-bg-hover)] transition-all duration-300"
        >
          + Add Coin
        </button>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="glass-subtle p-4 rounded-xl hover:bg-[var(--glass-bg)] transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] flex items-center justify-center font-bold text-[var(--color-secondary)]">
                  {item.symbol.substring(0, 1)}
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-text)]">{item.name}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Market Cap: {formatNumber(item.marketCap)}
                  </p>
                </div>
              </div>
              <div className="text-right space-y-1">
                <p className="font-semibold text-[var(--color-text)]">{formatCurrency(item.price, 4)}</p>
                <div className="flex gap-2 justify-end">
                  <ChangeIndicator change={item.change24h} />
                  <ChangeIndicator change={item.change7d} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Price Alerts Section ────────────────────────────────────────────────
function PriceAlerts({
  alerts,
  onAddAlert,
}: {
  alerts: PriceAlert[];
  onAddAlert: () => void;
}) {
  return (
    <div className="glass p-6 rounded-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Price Alerts</h2>
          <p className="text-[var(--color-text-secondary)]">Set price targets and track alerts</p>
        </div>
        <button
          onClick={onAddAlert}
          className="glass px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--glass-bg-hover)] transition-all duration-300"
        >
          + Set Alert
        </button>
      </div>

      {alerts.length === 0 ? (
        <div className="glass-subtle p-8 rounded-xl text-center">
          <p className="text-[var(--color-text-secondary)]">No alerts set yet. Create one to get started!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`glass-subtle p-4 rounded-xl transition-all duration-300 ${
                alert.triggered ? "border border-[var(--color-success)]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      alert.triggered
                        ? "bg-[var(--color-success)] animate-pulse"
                        : "bg-[var(--color-text-secondary)]"
                    }`}
                  />
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">
                      {alert.symbol}{" "}
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        {alert.direction === "above" ? "≥" : "≤"} {formatCurrency(alert.targetPrice, 4)}
                      </span>
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      Current: {formatCurrency(alert.currentPrice, 4)}
                    </p>
                  </div>
                </div>
                {alert.triggered && (
                  <span className="px-3 py-1 rounded-lg bg-[var(--color-success)] text-white text-xs font-semibold">
                    TRIGGERED
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Market Summary Widget ───────────────────────────────────────────────
function MarketSummary() {
  return (
    <div className="glass p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Market Summary</h2>

      <div className="space-y-4">
        <div className="glass-subtle p-4 rounded-xl">
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">Global Market Cap</p>
          <p className="text-2xl font-bold text-[var(--color-text)]">
            {formatCurrency(2340000000000, 0)}
          </p>
          <p className="text-xs text-[var(--color-success)] mt-1">↑ 5.2% last 24h</p>
        </div>

        <div className="glass-subtle p-4 rounded-xl">
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">BTC Dominance</p>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-[var(--color-text)]">48.3%</p>
            <p className="text-xs text-[var(--color-success)]">↓ 0.8%</p>
          </div>
          <div className="mt-3 w-full bg-[var(--glass-subtle-bg)] rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-danger)] h-2 rounded-full"
              style={{ width: "48.3%" }}
            />
          </div>
        </div>

        <div className="glass-subtle p-4 rounded-xl">
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">Fear & Greed Index</p>
          <p className="text-2xl font-bold text-[var(--color-accent)]">62</p>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">Greed Territory</p>
          <div className="mt-3 w-full bg-[var(--glass-subtle-bg)] rounded-full h-2">
            <div
              className="bg-[var(--color-accent)] h-2 rounded-full"
              style={{ width: "62%" }}
            />
          </div>
        </div>

        <div className="glass-subtle p-4 rounded-xl">
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">24h Volume</p>
          <p className="text-2xl font-bold text-[var(--color-text)]">
            {formatCurrency(89000000000, 0)}
          </p>
          <p className="text-xs text-[var(--color-danger)] mt-1">↓ 3.1%</p>
        </div>
      </div>
    </div>
  );
}

// ─── Recent Transactions Section ────────────────────────────────────────
function RecentTransactions({
  transactions,
  onLogTransaction,
}: {
  transactions: Transaction[];
  onLogTransaction: () => void;
}) {
  return (
    <div className="glass p-6 rounded-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Recent Transactions</h2>
          <p className="text-[var(--color-text-secondary)]">Buy and sell history</p>
        </div>
        <button
          onClick={onLogTransaction}
          className="glass px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--glass-bg-hover)] transition-all duration-300"
        >
          + Log Trade
        </button>
      </div>

      <div className="space-y-2">
        {transactions.slice(0, 5).map((tx) => (
          <div
            key={tx.id}
            className="glass-subtle p-4 rounded-xl hover:bg-[var(--glass-bg)] transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                    tx.type === "buy"
                      ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
                      : "bg-[var(--color-danger)]/10 text-[var(--color-danger)]"
                  }`}
                >
                  {tx.type === "buy" ? "↓" : "↑"}
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-text)]">
                    {tx.type === "buy" ? "Buy" : "Sell"} {tx.symbol}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{formatDate(tx.date)}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[var(--color-text)]">
                  {tx.amount} {tx.symbol}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  @ {formatCurrency(tx.price, 4)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Quick Actions Bar ───────────────────────────────────────────────────
function QuickActionsBar() {
  const actions = [
    { label: "DCA Calculator", href: "#dca", icon: "📊" },
    { label: "P&L Calculator", href: "#pnl", icon: "💹" },
    { label: "Portfolio Tracker", href: "#tracker", icon: "📈" },
    { label: "Converter", href: "/converter", icon: "🔄" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {actions.map((action) => (
        <Link
          key={action.href}
          href={action.href}
          className="glass p-4 rounded-xl text-center card-hover group transition-all duration-300"
        >
          <div className="text-2xl mb-2">{action.icon}</div>
          <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
            {action.label}
          </p>
        </Link>
      ))}
    </div>
  );
}

// ─── Main Dashboard Component ────────────────────────────────────────────
export default function DashboardPage() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(MOCK_PORTFOLIO_DATA);
  const [watchlist] = useState<WatchlistItem[]>(MOCK_WATCHLIST_DATA);
  const [alerts, setAlerts] = useState<PriceAlert[]>([
    {
      id: "alert-1",
      symbol: "BTC",
      targetPrice: 90000,
      direction: "above",
      currentPrice: 87420,
      triggered: false,
    },
    {
      id: "alert-2",
      symbol: "ETH",
      targetPrice: 3500,
      direction: "below",
      currentPrice: 3891,
      triggered: false,
    },
    {
      id: "alert-3",
      symbol: "XRP",
      targetPrice: 3.0,
      direction: "above",
      currentPrice: 2.62,
      triggered: false,
    },
  ]);
  const [transactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);

  // Handlers for button clicks (demo purposes)
  const handleAddCoin = useCallback(() => {
    alert("Add Coin feature - would open modal in production");
  }, []);

  const handleAddToWatchlist = useCallback(() => {
    alert("Add to Watchlist feature - would open modal in production");
  }, []);

  const handleSetAlert = useCallback(() => {
    alert("Set Price Alert feature - would open modal in production");
  }, []);

  const handleLogTransaction = useCallback(() => {
    alert("Log Transaction feature - would open modal in production");
  }, []);

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-3">
            Crypto Dashboard
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Manage your portfolio, track prices, and stay on top of market trends
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <QuickActionsBar />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Portfolio & Watchlist */}
          <div className="lg:col-span-2 space-y-6">
            <PortfolioOverview items={portfolio} onAddCoin={handleAddCoin} />
            <Watchlist items={watchlist} onAddToWatchlist={handleAddToWatchlist} />
            <RecentTransactions transactions={transactions} onLogTransaction={handleLogTransaction} />
          </div>

          {/* Right Column - Market Summary & Alerts */}
          <div className="space-y-6">
            <MarketSummary />
            <PriceAlerts alerts={alerts} onAddAlert={handleSetAlert} />
          </div>
        </div>
      </div>
    </main>
  );
}
