"use client";

import { useState, useEffect, useRef } from "react";

interface Notification {
  id: string;
  type: "price" | "news" | "achievement" | "system";
  title: string;
  message: string;
  timestamp: number;
  read: boolean;
  actionUrl?: string;
}

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    type: "system",
    title: "New: Prediction Markets Guide",
    message: "Learn how to trade on real-world event outcomes with our new comprehensive guide.",
    timestamp: Date.now() - 1000 * 60 * 60 * 2,
    read: false,
    actionUrl: "/learn/prediction-markets-guide",
  },
  {
    id: "n2",
    type: "system",
    title: "Portfolio Rebalancer launched",
    message: "Detect portfolio drift and generate trade plans automatically.",
    timestamp: Date.now() - 1000 * 60 * 60 * 12,
    read: false,
    actionUrl: "/tools/portfolio-rebalancer",
  },
  {
    id: "n3",
    type: "news",
    title: "Exchange reviews updated",
    message: "Our 2026 exchange rankings have been refreshed with the latest fee and security data.",
    timestamp: Date.now() - 1000 * 60 * 60 * 24,
    read: true,
    actionUrl: "/exchanges/best",
  },
  {
    id: "n4",
    type: "system",
    title: "92+ tools, all free",
    message: "From DCA calculators to funding rate trackers. No signup required.",
    timestamp: Date.now() - 1000 * 60 * 60 * 48,
    read: true,
    actionUrl: "/tools",
  },
];

const TYPE_ICONS: Record<string, string> = {
  price: "📈",
  news: "📰",
  achievement: "🏆",
  system: "⚙️",
};

const TYPE_COLORS: Record<string, string> = {
  price: "bg-green-500/15 border-green-500/30",
  news: "bg-blue-500/15 border-blue-500/30",
  achievement: "bg-yellow-500/15 border-yellow-500/30",
  system: "bg-purple-500/15 border-purple-500/30",
};

function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function NotificationCenter() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
  const [filter, setFilter] = useState<string>("all");
  const panelRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filteredNotifs = filter === "all" ? notifications : notifications.filter((n) => n.type === filter);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const clearAll = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="relative" ref={panelRef}>
      {/* Bell Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--color-primary)] transition-colors"
        aria-label="Notifications"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text)]">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute right-0 top-12 w-96 max-h-[520px] overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-dropdown-bg)] backdrop-blur-2xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--glass-border)]">
            <h3 className="text-sm font-bold text-[var(--color-text)]">Notifications</h3>
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <button onClick={markAllRead} className="text-xs text-[var(--color-primary)] hover:underline">
                  Mark all read
                </button>
              )}
              {notifications.length > 0 && (
                <button onClick={clearAll} className="text-xs text-[var(--color-text-secondary)] hover:text-red-400">
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-1 px-3 py-2 border-b border-[var(--glass-border)]">
            {["all", "price", "news", "achievement", "system"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${
                  filter === f
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--glass-bg)]"
                }`}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Notification List */}
          <div className="flex-1 overflow-y-auto">
            {filteredNotifs.length === 0 ? (
              <div className="p-8 text-center text-sm text-[var(--color-text-secondary)]">
                No notifications
              </div>
            ) : (
              filteredNotifs.map((n) => (
                <a
                  key={n.id}
                  href={n.actionUrl || "#"}
                  onClick={() => markRead(n.id)}
                  className={`flex gap-3 px-4 py-3 border-b border-[var(--glass-border)] hover:bg-[var(--glass-bg)] transition-colors ${
                    !n.read ? "bg-[var(--color-primary)]/5" : ""
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm border ${TYPE_COLORS[n.type]} flex-shrink-0`}>
                    {TYPE_ICONS[n.type]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${!n.read ? "text-[var(--color-text)]" : "text-[var(--color-text-secondary)]"}`}>
                        {n.title}
                      </span>
                      {!n.read && <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] flex-shrink-0" />}
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 line-clamp-2">{n.message}</p>
                    <span className="text-xs text-[var(--color-text-secondary)] mt-1 block opacity-60">{timeAgo(n.timestamp)}</span>
                  </div>
                </a>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 border-t border-[var(--glass-border)] text-center">
            <a href="/dashboard" className="text-xs text-[var(--color-primary)] hover:underline font-medium">
              View all in Dashboard
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
