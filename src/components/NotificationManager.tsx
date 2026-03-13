"use client";

import { useState, useCallback } from "react";

/* ─── Types ────────────────────────────────────────────────── */
interface NotificationRule {
  id: string;
  name: string;
  type: "price" | "whale" | "defi" | "signal" | "portfolio" | "gas" | "social";
  description: string;
  enabled: boolean;
  channels: ("push" | "email" | "telegram")[];
  condition: string;
  lastTriggered?: string;
  triggerCount: number;
}

interface NotificationItem {
  id: string;
  type: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  priority: "low" | "medium" | "high" | "urgent";
  icon: string;
}

/* ─── Mock Data ────────────────────────────────────────────── */
const NOTIFICATION_RULES: NotificationRule[] = [
  { id: "r1", name: "BTC Price Alert", type: "price", description: "BTC crosses $100,000", enabled: true, channels: ["push", "email"], condition: "BTC > $100,000", lastTriggered: "2h ago", triggerCount: 3 },
  { id: "r2", name: "ETH Drop Alert", type: "price", description: "ETH drops more than 5% in 1h", enabled: true, channels: ["push", "telegram"], condition: "ETH -5% in 1h", lastTriggered: "1d ago", triggerCount: 7 },
  { id: "r3", name: "Whale Movement", type: "whale", description: "Any transfer > $1M on ETH or SOL", enabled: true, channels: ["push"], condition: "Transfer > $1M", lastTriggered: "18m ago", triggerCount: 42 },
  { id: "r4", name: "DeFi Yield Spike", type: "defi", description: "Any pool APY jumps above 50%", enabled: false, channels: ["email"], condition: "APY > 50%", triggerCount: 12 },
  { id: "r5", name: "Trading Signal", type: "signal", description: "High-confidence AI signal (>80%)", enabled: true, channels: ["push", "email", "telegram"], condition: "Confidence > 80%", lastTriggered: "4h ago", triggerCount: 15 },
  { id: "r6", name: "Portfolio Change", type: "portfolio", description: "Portfolio value changes >10% in 24h", enabled: true, channels: ["push"], condition: "|Change| > 10%", triggerCount: 2 },
  { id: "r7", name: "Gas Price Low", type: "gas", description: "ETH gas drops below 10 gwei", enabled: true, channels: ["push", "telegram"], condition: "Gas < 10 gwei", lastTriggered: "6h ago", triggerCount: 8 },
  { id: "r8", name: "Copy Trade Alert", type: "social", description: "Followed trader executes a trade", enabled: true, channels: ["push"], condition: "Followed trader trade", lastTriggered: "42m ago", triggerCount: 23 },
];

const RECENT_NOTIFICATIONS: NotificationItem[] = [
  { id: "n1", type: "whale", title: "Whale Alert", message: "3,500 ETH ($13.4M) transferred from unknown to Binance", time: "18m ago", read: false, priority: "high", icon: "🐋" },
  { id: "n2", type: "social", title: "Copy Trade", message: "DegenKing.eth bought 2,400 JUP at $1.41", time: "42m ago", read: false, priority: "medium", icon: "📋" },
  { id: "n3", type: "signal", title: "Trading Signal", message: "LONG ETH — 85% confidence — Target: $4,200", time: "4h ago", read: true, priority: "high", icon: "📡" },
  { id: "n4", type: "gas", title: "Low Gas", message: "ETH gas at 8 gwei — good time for transactions", time: "6h ago", read: true, priority: "low", icon: "⛽" },
  { id: "n5", type: "price", title: "Price Alert", message: "BTC crossed $100,000 — up 2.3% in 1h", time: "2h ago", read: true, priority: "urgent", icon: "🚨" },
  { id: "n6", type: "defi", title: "Yield Alert", message: "Aave USDC supply APY jumped to 12.4%", time: "8h ago", read: true, priority: "medium", icon: "🌾" },
  { id: "n7", type: "whale", title: "Whale Alert", message: "50,000 SOL unstaked from Marinade Finance", time: "12h ago", read: true, priority: "medium", icon: "🐋" },
  { id: "n8", type: "portfolio", title: "Portfolio", message: "Your portfolio is up 4.2% today ($4,512)", time: "1d ago", read: true, priority: "low", icon: "📊" },
];

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  price: { bg: "#f8514920", text: "#f85149" },
  whale: { bg: "#58a6ff20", text: "#58a6ff" },
  defi: { bg: "#3fb95020", text: "#3fb950" },
  signal: { bg: "#bc8cff20", text: "#bc8cff" },
  portfolio: { bg: "#d2992220", text: "#d29922" },
  gas: { bg: "#f0883e20", text: "#f0883e" },
  social: { bg: "#f472b620", text: "#f472b6" },
};

const PRIORITY_COLORS: Record<string, string> = {
  low: "#8b949e", medium: "#d29922", high: "#f0883e", urgent: "#f85149",
};

type TabKey = "inbox" | "rules" | "settings";

/* ================================================================= */
export default function NotificationManager() {
  const [tab, setTab] = useState<TabKey>("inbox");
  const [rules, setRules] = useState(NOTIFICATION_RULES);
  const [notifications, setNotifications] = useState(RECENT_NOTIFICATIONS);
  const [filterType, setFilterType] = useState("all");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const toggleRule = useCallback((id: string) => {
    setRules((prev) => prev.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const s = {
    page: { background: "#0d1117", minHeight: "100vh", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" } as React.CSSProperties,
    container: { maxWidth: 900, margin: "0 auto", padding: "24px 16px" } as React.CSSProperties,
    card: { background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 } as React.CSSProperties,
    tabBar: { display: "flex", gap: 4, marginBottom: 24, background: "#161b22", borderRadius: 10, padding: 4, border: "1px solid #30363d" } as React.CSSProperties,
    tabBtn: (active: boolean) => ({
      padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
      background: active ? "#6366f1" : "transparent", color: active ? "#fff" : "#8b949e",
    }) as React.CSSProperties,
    toggle: (on: boolean) => ({
      width: 40, height: 22, borderRadius: 11, border: "none", cursor: "pointer",
      background: on ? "#3fb950" : "#30363d", position: "relative" as const, transition: "background 0.2s",
    }) as React.CSSProperties,
    toggleDot: (on: boolean) => ({
      width: 16, height: 16, borderRadius: "50%", background: "#fff",
      position: "absolute" as const, top: 3, left: on ? 21 : 3, transition: "left 0.2s",
    }) as React.CSSProperties,
  };

  const filteredNotifications = filterType === "all" ? notifications : notifications.filter((n) => n.type === filterType);

  /* ─── Inbox Tab ──────────────────────────────────────────── */
  const renderInbox = () => (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["all", "price", "whale", "defi", "signal", "gas", "social", "portfolio"].map((t) => (
            <button key={t} onClick={() => setFilterType(t)} style={{
              padding: "4px 10px", borderRadius: 6, border: `1px solid ${filterType === t ? "#6366f180" : "#30363d"}`,
              background: filterType === t ? "#6366f120" : "transparent", color: filterType === t ? "#818cf8" : "#8b949e",
              fontSize: 11, fontWeight: 600, cursor: "pointer", textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllRead} style={{ padding: "6px 12px", borderRadius: 6, border: "1px solid #30363d", background: "transparent", color: "#8b949e", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>
            Mark all read ({unreadCount})
          </button>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {filteredNotifications.map((n) => (
          <div key={n.id} style={{
            ...s.card, padding: 14, display: "flex", alignItems: "center", gap: 14,
            borderLeft: `3px solid ${PRIORITY_COLORS[n.priority]}`,
            opacity: n.read ? 0.7 : 1,
            background: n.read ? "#161b22" : "#1c2330",
          }}>
            <span style={{ fontSize: 24 }}>{n.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>{n.title}</span>
                <span style={{
                  fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 3, textTransform: "uppercase",
                  background: TYPE_COLORS[n.type]?.bg, color: TYPE_COLORS[n.type]?.text,
                }}>{n.type}</span>
                {!n.read && <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#6366f1" }} />}
              </div>
              <div style={{ fontSize: 13, color: "#e6edf3", marginTop: 2 }}>{n.message}</div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: 11, color: "#8b949e" }}>{n.time}</div>
              <div style={{ fontSize: 9, color: PRIORITY_COLORS[n.priority], fontWeight: 700, textTransform: "uppercase", marginTop: 2 }}>{n.priority}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ─── Rules Tab ──────────────────────────────────────────── */
  const renderRules = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {rules.map((rule) => (
        <div key={rule.id} style={{ ...s.card, padding: 16, display: "flex", alignItems: "center", gap: 16, opacity: rule.enabled ? 1 : 0.5 }}>
          <button onClick={() => toggleRule(rule.id)} style={s.toggle(rule.enabled)}>
            <div style={s.toggleDot(rule.enabled)} />
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700 }}>{rule.name}</span>
              <span style={{
                fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 3, textTransform: "uppercase",
                background: TYPE_COLORS[rule.type]?.bg, color: TYPE_COLORS[rule.type]?.text,
              }}>{rule.type}</span>
            </div>
            <div style={{ fontSize: 12, color: "#8b949e", marginTop: 2 }}>{rule.description}</div>
            <div style={{ display: "flex", gap: 12, marginTop: 6, fontSize: 11, color: "#8b949e" }}>
              <span>Condition: <strong style={{ color: "#e6edf3" }}>{rule.condition}</strong></span>
              <span>Triggered: <strong style={{ color: "#e6edf3" }}>{rule.triggerCount}x</strong></span>
              {rule.lastTriggered && <span>Last: {rule.lastTriggered}</span>}
            </div>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {rule.channels.map((ch) => (
              <span key={ch} style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: "#1c2330", border: "1px solid #30363d", color: "#8b949e" }}>
                {ch === "push" ? "🔔" : ch === "email" ? "📧" : "✈️"} {ch}
              </span>
            ))}
          </div>
        </div>
      ))}
      <button style={{
        padding: "12px 20px", borderRadius: 10, border: "1px dashed #30363d", background: "transparent",
        color: "#8b949e", fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 8,
      }}>
        + Create New Alert Rule
      </button>
    </div>
  );

  /* ─── Settings Tab ──────────────────────────────────────── */
  const renderSettings = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {[
        { title: "Push Notifications", desc: "Browser push notifications for real-time alerts", icon: "🔔", connected: true },
        { title: "Email Notifications", desc: "Receive alerts at your registered email address", icon: "📧", connected: true },
        { title: "Telegram Bot", desc: "Connect @degen0x_bot for instant Telegram alerts", icon: "✈️", connected: false },
        { title: "Discord Webhook", desc: "Post alerts to your Discord server channel", icon: "💬", connected: false },
      ].map((channel) => (
        <div key={channel.title} style={{ ...s.card, display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 28 }}>{channel.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{channel.title}</div>
            <div style={{ fontSize: 12, color: "#8b949e" }}>{channel.desc}</div>
          </div>
          <div style={{
            padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600,
            background: channel.connected ? "#3fb95020" : "#6366f120",
            color: channel.connected ? "#3fb950" : "#818cf8",
            border: `1px solid ${channel.connected ? "#3fb95040" : "#6366f140"}`,
          }}>
            {channel.connected ? "✓ Connected" : "Connect"}
          </div>
        </div>
      ))}

      <div style={s.card}>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>⏰ Quiet Hours</div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>From</div>
            <div style={{ padding: "8px 14px", background: "#1c2330", border: "1px solid #30363d", borderRadius: 8, fontSize: 14, fontFamily: "monospace" }}>22:00</div>
          </div>
          <span style={{ color: "#8b949e", marginTop: 16 }}>→</span>
          <div>
            <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>To</div>
            <div style={{ padding: "8px 14px", background: "#1c2330", border: "1px solid #30363d", borderRadius: 8, fontSize: 14, fontFamily: "monospace" }}>08:00</div>
          </div>
          <div style={{ fontSize: 12, color: "#8b949e", marginTop: 16, marginLeft: 8 }}>Urgent alerts still delivered</div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={s.page}>
      <div style={s.container}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, background: "linear-gradient(135deg, #6366f1, #f85149)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Notifications
            </h1>
            {unreadCount > 0 && (
              <span style={{ background: "#f85149", color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>{unreadCount} new</span>
            )}
          </div>
          <p style={{ fontSize: 14, color: "#8b949e", marginTop: 4 }}>Real-time alerts for prices, whales, DeFi yields, trading signals, and more</p>
        </div>

        <div style={s.tabBar}>
          {([
            ["inbox", `📥 Inbox${unreadCount ? ` (${unreadCount})` : ""}`],
            ["rules", "⚙️ Alert Rules"],
            ["settings", "🔧 Channels"],
          ] as [TabKey, string][]).map(([key, label]) => (
            <button key={key} style={s.tabBtn(tab === key)} onClick={() => setTab(key)}>{label}</button>
          ))}
        </div>

        {tab === "inbox" && renderInbox()}
        {tab === "rules" && renderRules()}
        {tab === "settings" && renderSettings()}
      </div>
    </div>
  );
}
