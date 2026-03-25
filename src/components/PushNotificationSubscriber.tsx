'use client';
import { useState, useEffect } from "react";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#6366f1", green: "#3fb950",
  blue: "#58a6ff", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff", red: "#f85149",
};

type PermissionState = "default" | "granted" | "denied" | "unsupported";

interface NotificationPrefs {
  priceAlerts: boolean;
  newCourses: boolean;
  dAppUpdates: boolean;
  weeklyDigest: boolean;
  xpMilestones: boolean;
  marketBreaking: boolean;
}

const DEFAULT_PREFS: NotificationPrefs = {
  priceAlerts: true,
  newCourses: true,
  dAppUpdates: false,
  weeklyDigest: true,
  xpMilestones: true,
  marketBreaking: true,
};

const NOTIFICATION_TYPES = [
  { key: "priceAlerts" as keyof NotificationPrefs, icon: "📈", label: "Price Alerts", desc: "Get notified when tracked assets hit your price targets", color: S.green },
  { key: "marketBreaking" as keyof NotificationPrefs, icon: "⚡", label: "Breaking Market News", desc: "Instant alerts for major market moves, hacks, or protocol events", color: S.orange },
  { key: "newCourses" as keyof NotificationPrefs, icon: "📚", label: "New Courses & Lessons", desc: "Be first to know when new degen0x content drops", color: S.accent },
  { key: "xpMilestones" as keyof NotificationPrefs, icon: "🏆", label: "XP & Achievement Milestones", desc: "Celebrate level-ups, badges, and leaderboard changes", color: S.yellow },
  { key: "dAppUpdates" as keyof NotificationPrefs, icon: "🔄", label: "dApp Protocol Updates", desc: "Governance votes, TVL changes, and security alerts for followed dApps", color: S.purple },
  { key: "weeklyDigest" as keyof NotificationPrefs, icon: "📰", label: "Weekly Crypto Digest", desc: "Sunday summary of top moves, new guides, and upcoming catalysts", color: S.blue },
];

export default function PushNotificationSubscriber() {
  const [permission, setPermission] = useState<PermissionState>("default");
  const [prefs, setPrefs] = useState<NotificationPrefs>(DEFAULT_PREFS);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [testSent, setTestSent] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      setPermission("unsupported");
      return;
    }
    setPermission(Notification.permission as PermissionState);
    // Check if already subscribed (stored in localStorage in real app)
    const stored = typeof localStorage !== "undefined" ? localStorage.getItem("push_subscribed") : null;
    if (stored === "true") setSubscribed(true);
  }, []);

  const requestPermission = async () => {
    if (typeof window === "undefined" || !("Notification" in window)) return;
    setLoading(true);
    try {
      const result = await Notification.requestPermission();
      setPermission(result as PermissionState);
      if (result === "granted") {
        // In production: register service worker and push subscription here
        // navigator.serviceWorker.ready.then(reg => reg.pushManager.subscribe({...}))
        setSubscribed(true);
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("push_subscribed", "true");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const sendTestNotification = () => {
    if (permission !== "granted") return;
    new Notification("degen0x Test Notification 🚀", {
      body: "Push notifications are working! You'll get real-time crypto alerts here.",
      icon: "/icons/icon-192.png",
    });
    setTestSent(true);
    setTimeout(() => setTestSent(false), 3000);
  };

  const unsubscribe = () => {
    setSubscribed(false);
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("push_subscribed");
    }
  };

  const togglePref = (key: keyof NotificationPrefs) => {
    setPrefs(p => ({ ...p, [key]: !p[key] }));
  };

  return (
    <div style={{ background: S.bg, color: S.text, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: "32px 24px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔔</div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, margin: "0 0 8px" }}>Stay Ahead of the Market</h2>
          <p style={{ color: S.text2, fontSize: 14, margin: 0 }}>Enable push notifications to get real-time crypto alerts, XP milestones, and breaking news — directly to your device.</p>
        </div>

        {/* Permission Status Card */}
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "20px 24px", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                background: permission === "granted" ? `${S.green}20` : permission === "denied" ? `${S.red}20` : `${S.accent}20`,
              }}>
                {permission === "granted" ? "✅" : permission === "denied" ? "🚫" : permission === "unsupported" ? "❌" : "🔔"}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>
                  {permission === "granted" ? "Notifications Enabled" :
                   permission === "denied" ? "Notifications Blocked" :
                   permission === "unsupported" ? "Not Supported" : "Notifications Not Set Up"}
                </div>
                <div style={{ fontSize: 12, color: S.text2, marginTop: 2 }}>
                  {permission === "granted" && subscribed ? "You're subscribed to degen0x alerts" :
                   permission === "granted" ? "Permission granted — click subscribe to start" :
                   permission === "denied" ? "Enable in your browser settings to receive alerts" :
                   permission === "unsupported" ? "Your browser doesn't support push notifications" :
                   "Click below to set up notifications"}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              {permission === "granted" && subscribed && (
                <>
                  <button onClick={sendTestNotification} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${S.border}`, background: S.surface2, color: testSent ? S.green : S.text2, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
                    {testSent ? "✅ Sent!" : "Test"}
                  </button>
                  <button onClick={unsubscribe} style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${S.red}40`, background: `${S.red}10`, color: S.red, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
                    Unsubscribe
                  </button>
                </>
              )}
              {(permission === "default" || (permission === "granted" && !subscribed)) && (
                <button
                  onClick={requestPermission}
                  disabled={loading}
                  style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: S.accent, color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 700 }}
                >
                  {loading ? "Setting up..." : permission === "granted" ? "Subscribe ✓" : "Enable Notifications"}
                </button>
              )}
              {permission === "denied" && (
                <div style={{ fontSize: 12, color: S.red, padding: "8px 12px", background: `${S.red}10`, border: `1px solid ${S.red}30`, borderRadius: 8 }}>
                  Reset in browser settings → Privacy → Notifications
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: S.text2, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Notification Types</h3>
          <div style={{ display: "grid", gap: 10 }}>
            {NOTIFICATION_TYPES.map(({ key, icon, label, desc, color }) => (
              <div key={key} style={{ background: S.surface, border: `1px solid ${prefs[key] ? color + "40" : S.border}`, borderRadius: 10, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14, opacity: permission === "denied" ? 0.5 : 1 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: S.text }}>{label}</div>
                  <div style={{ fontSize: 12, color: S.text2, marginTop: 2 }}>{desc}</div>
                </div>
                <button
                  onClick={() => togglePref(key)}
                  disabled={permission === "denied"}
                  style={{
                    width: 44, height: 24, borderRadius: 12, border: "none",
                    background: prefs[key] ? color : S.surface2,
                    cursor: permission === "denied" ? "not-allowed" : "pointer",
                    position: "relative", transition: "background 0.2s", flexShrink: 0,
                  }}
                >
                  <span style={{
                    position: "absolute", top: 3, left: prefs[key] ? 22 : 3,
                    width: 18, height: 18, borderRadius: "50%", background: "#fff",
                    transition: "left 0.2s", display: "block",
                  }} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Active Subs Count */}
        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 10, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>📊</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: S.text }}>
              {Object.values(prefs).filter(Boolean).length} notification types enabled
            </div>
            <div style={{ fontSize: 12, color: S.text2, marginTop: 2 }}>
              Join 43,200+ degens who never miss a crypto moment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
