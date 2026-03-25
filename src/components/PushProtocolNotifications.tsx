"use client";

import { useState, useEffect } from "react";

/* ─── TYPES ─────────────────────────────────────────────────────────────────── */
type NotifCategory = "price" | "course" | "article" | "streak" | "quiz" | "whale";
type NotifStatus = "idle" | "subscribing" | "subscribed" | "error";

interface NotifPreference {
  category: NotifCategory;
  label: string;
  description: string;
  icon: string;
  enabled: boolean;
  color: string;
}

interface MockNotification {
  id: string;
  category: NotifCategory;
  title: string;
  body: string;
  timestamp: number;
  read: boolean;
}

/* ─── CONSTANTS ─────────────────────────────────────────────────────────────── */
const DEGEN0X_CHANNEL = "0xdegen0x0000000000000000000000000000000000000000";
const PUSH_APP_URL = "https://app.push.org/channels?channel=" + DEGEN0X_CHANNEL;

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330",
  border: "#30363d", text: "#e6edf3", text2: "#8b949e",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e",
  yellow: "#d29922", purple: "#bc8cff", red: "#f85149", pink: "#e040fb",
};

const DEMO_NOTIFS: MockNotification[] = [
  { id: "1", category: "price",  title: "BTC Price Alert 🚀",          body: "Bitcoin crossed $95,000. Your portfolio is up 12% today.",          timestamp: Date.now() - 3600000,   read: false },
  { id: "2", category: "streak", title: "🔥 Don't break your streak!",  body: "You haven't checked in today. 14-day streak at risk!",              timestamp: Date.now() - 7200000,   read: false },
  { id: "3", category: "article",title: "New Article: EigenLayer AVSs", body: "A comprehensive guide to restaking and AVS ecosystem in 2026.",     timestamp: Date.now() - 86400000,  read: true  },
  { id: "4", category: "quiz",   title: "New Quiz Available ✅",        body: "Complete the Hyperliquid quiz and earn +150 XP.",                  timestamp: Date.now() - 172800000, read: true  },
  { id: "5", category: "whale",  title: "🐋 Whale Alert",               body: "900 BTC ($85.5M) moved from unknown wallet to Binance.",            timestamp: Date.now() - 259200000, read: true  },
];

/* ─── PREFERENCE CARD ────────────────────────────────────────────────────────── */
function PrefCard({
  pref, onToggle,
}: { pref: NotifPreference; onToggle: (category: NotifCategory) => void }) {
  return (
    <div
      onClick={() => onToggle(pref.category)}
      style={{
        background: pref.enabled ? `${pref.color}12` : S.surface2,
        border: `1px solid ${pref.enabled ? pref.color + "50" : S.border}`,
        borderRadius: 10, padding: "12px 14px", cursor: "pointer",
        display: "flex", alignItems: "center", gap: 12,
        transition: "all 0.2s",
      }}
    >
      <span style={{ fontSize: 20 }}>{pref.icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 13, color: pref.enabled ? S.text : S.text2 }}>{pref.label}</div>
        <div style={{ fontSize: 11, color: S.text2, marginTop: 2 }}>{pref.description}</div>
      </div>
      <div style={{
        width: 36, height: 20, borderRadius: 10,
        background: pref.enabled ? pref.color : S.border,
        position: "relative", flexShrink: 0, transition: "background 0.2s",
      }}>
        <div style={{
          position: "absolute", top: 2, left: pref.enabled ? 18 : 2,
          width: 16, height: 16, borderRadius: "50%",
          background: "#fff", transition: "left 0.2s",
        }} />
      </div>
    </div>
  );
}

/* ─── NOTIFICATION ITEM ──────────────────────────────────────────────────────── */
function NotifItem({ notif }: { notif: MockNotification }) {
  const icons: Record<NotifCategory, string> = {
    price: "💰", course: "📚", article: "📰", streak: "🔥", quiz: "❓", whale: "🐋",
  };
  const colors: Record<NotifCategory, string> = {
    price: S.green, course: S.blue, article: S.purple, streak: S.orange, quiz: S.yellow, whale: S.blue,
  };
  const diff = Date.now() - notif.timestamp;
  const timeAgo = diff < 3600000 ? `${Math.round(diff / 60000)}m ago`
    : diff < 86400000 ? `${Math.round(diff / 3600000)}h ago`
    : `${Math.round(diff / 86400000)}d ago`;

  return (
    <div style={{
      background: notif.read ? S.surface2 : `${colors[notif.category]}08`,
      border: `1px solid ${notif.read ? S.border : colors[notif.category] + "40"}`,
      borderRadius: 10, padding: "12px 14px", marginBottom: 8,
      display: "flex", gap: 12, alignItems: "flex-start",
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
        background: `${colors[notif.category]}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
      }}>
        {icons[notif.category]}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ fontWeight: notif.read ? 500 : 700, fontSize: 13, color: S.text }}>{notif.title}</div>
          <div style={{ fontSize: 10, color: S.text2, flexShrink: 0 }}>{timeAgo}</div>
        </div>
        <div style={{ fontSize: 12, color: S.text2, marginTop: 3, lineHeight: 1.5 }}>{notif.body}</div>
        {!notif.read && (
          <div style={{ width: 7, height: 7, background: colors[notif.category], borderRadius: "50%", marginTop: 6 }} />
        )}
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────────── */
export default function PushProtocolNotifications({ walletAddress = "" }: { walletAddress?: string }) {
  const [status, setStatus] = useState<NotifStatus>("idle");
  const [activeTab, setActiveTab] = useState<"notifications" | "settings">("notifications");
  const [notifications, setNotifications] = useState<MockNotification[]>(DEMO_NOTIFS);
  const [prefs, setPrefs] = useState<NotifPreference[]>([
    { category: "price",   label: "Price Alerts",        description: "BTC/ETH price milestones and your portfolio changes",  icon: "💰", enabled: true,  color: S.green  },
    { category: "course",  label: "Course Reminders",    description: "Continue where you left off in your active courses",   icon: "📚", enabled: true,  color: S.blue   },
    { category: "article", label: "New Articles",        description: "Fresh guides, tutorials, and market analysis",         icon: "📰", enabled: true,  color: S.purple },
    { category: "streak",  label: "Streak Reminders",    description: "Daily check-in reminder before your streak breaks",    icon: "🔥", enabled: true,  color: S.orange },
    { category: "quiz",    label: "Quiz Notifications",  description: "New quizzes available + upcoming quiz expiry alerts",  icon: "❓", enabled: false, color: S.yellow },
    { category: "whale",   label: "Whale Alerts",        description: "Large on-chain transactions affecting your watchlist", icon: "🐋", enabled: false, color: S.blue   },
  ]);

  const unread = notifications.filter((n) => !n.read).length;

  const handleSubscribe = async () => {
    if (!walletAddress) {
      alert("Connect your wallet to enable Push Protocol notifications.");
      return;
    }
    setStatus("subscribing");
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("subscribed");
  };

  const togglePref = (category: NotifCategory) => {
    setPrefs((prev) => prev.map((p) => p.category === category ? { ...p, enabled: !p.enabled } : p));
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth: 640 }}>
      {/* Header */}
      <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 16, padding: 20, marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 44, height: 44, background: `${S.pink}20`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🔔</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>Push Protocol Notifications</div>
            <div style={{ fontSize: 12, color: S.text2, marginTop: 2 }}>Wallet-native notifications, no email required</div>
          </div>
          {unread > 0 && (
            <div style={{ marginLeft: "auto", background: S.red, color: "#fff", borderRadius: 20, padding: "2px 9px", fontSize: 12, fontWeight: 700 }}>{unread}</div>
          )}
        </div>

        {status === "idle" && (
          <button
            onClick={handleSubscribe}
            style={{
              width: "100%", padding: "11px 20px",
              background: `linear-gradient(135deg, ${S.pink}, #c2185b)`,
              color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer",
              boxShadow: `0 4px 16px ${S.pink}40`,
            }}
          >
            🔔 Subscribe to degen0x Notifications
          </button>
        )}

        {status === "subscribing" && (
          <div style={{ textAlign: "center", padding: "12px", color: S.text2, fontSize: 13 }}>
            Signing subscription with your wallet...
          </div>
        )}

        {status === "subscribed" && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: `${S.green}15`, border: `1px solid ${S.green}40`, borderRadius: 10 }}>
            <span style={{ color: S.green, fontWeight: 700 }}>✅ Subscribed!</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Notifications will arrive in your Push inbox at app.push.org</span>
          </div>
        )}

        {status === "subscribed" && (
          <a
            href={PUSH_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block", marginTop: 10, textAlign: "center", padding: "8px", fontSize: 12,
              color: S.pink, textDecoration: "none",
            }}
          >
            Open Push Inbox ↗
          </a>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 0, background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
        {(["notifications", "settings"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1, padding: "10px 16px", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
              background: activeTab === tab ? S.surface2 : "transparent",
              color: activeTab === tab ? S.text : S.text2,
              borderBottom: activeTab === tab ? `2px solid ${S.pink}` : "2px solid transparent",
              transition: "all 0.2s",
            }}
          >
            {tab === "notifications" ? `🔔 Notifications ${unread > 0 ? `(${unread})` : ""}` : "⚙️ Settings"}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "notifications" && (
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Recent ({notifications.length})</div>
            {unread > 0 && (
              <button onClick={markAllRead} style={{ fontSize: 12, color: S.text2, background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                Mark all read
              </button>
            )}
          </div>
          {notifications.map((n) => <NotifItem key={n.id} notif={n} />)}
        </div>
      )}

      {activeTab === "settings" && (
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Notification Preferences</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {prefs.map((p) => <PrefCard key={p.category} pref={p} onToggle={togglePref} />)}
          </div>
          <div style={{ marginTop: 16, fontSize: 12, color: S.text2, lineHeight: 1.6 }}>
            Powered by <strong style={{ color: S.pink }}>Push Protocol</strong>. Notifications are delivered via on-chain messaging to your wallet. No email, no phone number required.
          </div>
        </div>
      )}
    </div>
  );
}
