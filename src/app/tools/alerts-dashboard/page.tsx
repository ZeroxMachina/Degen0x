"use client";

import { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";

// ─── Types ────────────────────────────────────────────────────────────────────
type AlertCategory = "Price" | "Whale" | "Volume" | "Sentiment" | "DeFi";
type AlertState = "active" | "triggered" | "snoozed";

interface Alert {
  id: string;
  type: AlertCategory;
  title: string;
  description: string;
  condition: string;
  targetValue: string;
  coin?: string;
  createdAt: number;
  state: AlertState;
  lastTriggered?: number;
  notificationSent: boolean;
}

// ─── Constants ─────────────────────────────────────────────────────────────
const TOKENS = ["BTC", "ETH", "SOL", "BNB", "AVAX", "OP", "ARB"];
const ALERT_CATEGORIES: AlertCategory[] = ["Price", "Whale", "Volume", "Sentiment", "DeFi"];

// ─── Utils ────────────────────────────────────────────────────────────────
function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

const LS_KEY = "cd_alerts_dashboard_v1";

function loadAlerts(): Alert[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : generateDefaultAlerts();
  } catch {
    return generateDefaultAlerts();
  }
}

function saveAlerts(alerts: Alert[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(alerts));
  } catch {}
}

function generateDefaultAlerts(): Alert[] {
  return [
    {
      id: genId(),
      type: "Price",
      title: "Bitcoin Above $85,000",
      description: "Alert when BTC price exceeds $85,000",
      condition: "above",
      targetValue: "$85,000",
      coin: "BTC",
      createdAt: Date.now() - 86400000,
      state: "active",
      notificationSent: false,
    },
    {
      id: genId(),
      type: "Whale",
      title: "Whale ETH Transfer",
      description: "Large ETH transaction detected (>500 ETH)",
      condition: "whale_transfer",
      targetValue: ">500 ETH",
      coin: "ETH",
      createdAt: Date.now() - 172800000,
      state: "active",
      notificationSent: false,
    },
    {
      id: genId(),
      type: "Volume",
      title: "SOL Volume Spike",
      description: "Alert when SOL trading volume increases 50%+ in 1h",
      condition: "volume_spike",
      targetValue: "+50%",
      coin: "SOL",
      createdAt: Date.now() - 259200000,
      state: "triggered",
      lastTriggered: Date.now() - 3600000,
      notificationSent: true,
    },
    {
      id: genId(),
      type: "Sentiment",
      title: "Fear & Greed Below 30",
      description: "Alert when Fear & Greed Index drops below 30 (Extreme Fear)",
      condition: "fear_greed_below",
      targetValue: "<30",
      createdAt: Date.now() - 432000000,
      state: "snoozed",
      notificationSent: false,
    },
    {
      id: genId(),
      type: "DeFi",
      title: "Aave TVL Increase",
      description: "Alert when Aave TVL increases by $500M+",
      condition: "tvl_increase",
      targetValue: "+$500M",
      createdAt: Date.now() - 604800000,
      state: "active",
      notificationSent: false,
    },
  ];
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AlertsDashboardPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [mounted, setMounted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | AlertState>("all");
  const [selectedCategory, setSelectedCategory] = useState<AlertCategory | "all">("all");
  const [showNewAlertForm, setShowNewAlertForm] = useState(false);
  const [updateCounter, setUpdateCounter] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    category: "Price" as AlertCategory,
    title: "",
    description: "",
    condition: "above",
    targetValue: "",
    coin: "BTC",
  });

  // ── Load & persist ──
  useEffect(() => {
    setMounted(true);
    setAlerts(loadAlerts());
  }, []);

  useEffect(() => {
    if (mounted) saveAlerts(alerts);
  }, [alerts, mounted]);

  // ── Simulate real-time updates ──
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdateCounter(c => c + 1);
      // Simulate random alert triggering
      const randomChance = Math.random();
      if (randomChance > 0.85 && alerts.some(a => a.state === "active")) {
        const activeAlerts = alerts.filter(a => a.state === "active");
        if (activeAlerts.length > 0) {
          const randomAlert = activeAlerts[Math.floor(Math.random() * activeAlerts.length)];
          if (soundEnabled) playAlertSound();
          triggerAlert(randomAlert.id);
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [alerts, soundEnabled]);

  // ── Play alert sound ──
  const playAlertSound = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.frequency.value = 800;
      oscillator.type = "sine";
      gain.gain.setValueAtTime(0.3, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch {}
  }, []);

  // ── Request notification permission ──
  const requestNotificationPermission = () => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          setNotificationsEnabled(true);
          new Notification("Alerts Dashboard", {
            body: "Notifications enabled! You'll receive alerts here.",
            icon: "/favicon.ico",
          });
        }
      });
    } else if ("Notification" in window && Notification.permission === "granted") {
      setNotificationsEnabled(true);
    }
  };

  // ── Trigger alert ──
  const triggerAlert = (id: string) => {
    setAlerts(prev =>
      prev.map(a => {
        if (a.id === id && a.state === "active") {
          if (notificationsEnabled) {
            new Notification(`Alert Triggered: ${a.title}`, {
              body: a.description,
              icon: "/favicon.ico",
            });
          }
          return { ...a, state: "triggered", lastTriggered: Date.now(), notificationSent: true };
        }
        return a;
      })
    );
  };

  // ── Add new alert ──
  const handleAddAlert = () => {
    if (!formData.title.trim() || !formData.targetValue.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newAlert: Alert = {
      id: genId(),
      type: formData.category,
      title: formData.title,
      description: formData.description,
      condition: formData.condition,
      targetValue: formData.targetValue,
      coin: ["Price", "Whale", "Volume"].includes(formData.category) ? formData.coin : undefined,
      createdAt: Date.now(),
      state: "active",
      notificationSent: false,
    };

    setAlerts(prev => [newAlert, ...prev]);
    setFormData({
      category: "Price",
      title: "",
      description: "",
      condition: "above",
      targetValue: "",
      coin: "BTC",
    });
    setShowNewAlertForm(false);
  };

  // ── Snooze alert ──
  const snoozeAlert = (id: string) => {
    setAlerts(prev =>
      prev.map(a => (a.id === id ? { ...a, state: "snoozed" } : a))
    );
  };

  // ── Resume alert ──
  const resumeAlert = (id: string) => {
    setAlerts(prev =>
      prev.map(a => (a.id === id ? { ...a, state: "active", notificationSent: false } : a))
    );
  };

  // ── Delete alert ──
  const deleteAlert = (id: string) => {
    setAlerts(prev => prev.filter(a => a.id !== id));
  };

  // ── Filter alerts ──
  const filteredAlerts = alerts.filter(a => {
    if (activeFilter !== "all" && a.state !== activeFilter) return false;
    if (selectedCategory !== "all" && a.type !== selectedCategory) return false;
    return true;
  });

  // ── Stats ──
  const stats = {
    total: alerts.length,
    active: alerts.filter(a => a.state === "active").length,
    triggered: alerts.filter(a => a.state === "triggered").length,
    snoozed: alerts.filter(a => a.state === "snoozed").length,
    triggeredToday: alerts.filter(
      a => a.lastTriggered && Date.now() - a.lastTriggered < 86400000
    ).length,
  };

  const categoryStats = ALERT_CATEGORIES.map(cat => ({
    category: cat,
    count: alerts.filter(a => a.type === cat).length,
  }));

  if (!mounted) return <div style={{ minHeight: "100vh", background: "#0d1117" }} />;

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg, #0d1117)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Alerts Dashboard" },
          ]}
        />

        {/* ── Header ── */}
        <div style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              padding: "3px 12px",
              background: "#6366f120",
              border: "1px solid #6366f140",
              borderRadius: 20,
              fontSize: 12,
              color: "#818cf8",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            🚨 Comprehensive Alerts
          </div>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#e6edf3",
              marginBottom: "0.5rem",
            }}
          >
            Crypto Alerts Dashboard
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#8b949e", maxWidth: 600 }}>
            Monitor price movements, whale transactions, volume spikes, sentiment shifts, and DeFi changes all in one place.
          </p>
        </div>

        {/* ── Control Bar ── */}
        <div
          style={{
            background: "rgba(22,27,34,0.9)",
            border: "1px solid rgba(48,54,61,0.6)",
            borderRadius: 12,
            padding: "1rem 1.5rem",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setShowNewAlertForm(!showNewAlertForm)}
              style={{
                padding: "0.65rem 1.2rem",
                borderRadius: 8,
                border: "none",
                background: "linear-gradient(135deg, #818cf8, #6366f1)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ＋ New Alert
            </button>
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={e => setSoundEnabled(e.target.checked)}
                style={{ cursor: "pointer" }}
              />
              <span style={{ color: "#8b949e", fontSize: 14 }}>🔊 Sound</span>
            </label>
          </div>
          <button
            onClick={requestNotificationPermission}
            style={{
              padding: "0.65rem 1.2rem",
              borderRadius: 8,
              border: "1px solid rgba(99,102,241,0.4)",
              background: notificationsEnabled ? "rgba(99,102,241,0.1)" : "transparent",
              color: notificationsEnabled ? "#818cf8" : "#8b949e",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            {"Notification" in window ? (notificationsEnabled ? "🔔 Enabled" : "🔔 Enable") : "🚫 Unsupported"}
          </button>
        </div>

        {/* ── New Alert Form ── */}
        {showNewAlertForm && (
          <div
            style={{
              background: "rgba(22,27,34,0.95)",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: 14,
              padding: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 15 }}>
              <div>
                <label style={labelStyle}>Alert Category</label>
                <select
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value as AlertCategory })}
                  style={selectStyle}
                >
                  {ALERT_CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {["Price", "Whale", "Volume"].includes(formData.category) && (
                <div>
                  <label style={labelStyle}>Cryptocurrency</label>
                  <select
                    value={formData.coin}
                    onChange={e => setFormData({ ...formData, coin: e.target.value })}
                    style={selectStyle}
                  >
                    {TOKENS.map(token => (
                      <option key={token} value={token}>
                        {token}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label style={labelStyle}>Condition Type</label>
                <select
                  value={formData.condition}
                  onChange={e => setFormData({ ...formData, condition: e.target.value })}
                  style={selectStyle}
                >
                  <option value="above">Above Target</option>
                  <option value="below">Below Target</option>
                  <option value="increase">Percentage Increase</option>
                  <option value="decrease">Percentage Decrease</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: 15 }}>
              <label style={labelStyle}>Alert Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Bitcoin Above $90,000"
                style={inputStyle}
              />
            </div>

            <div style={{ marginTop: 12 }}>
              <label style={labelStyle}>Target Value</label>
              <input
                type="text"
                value={formData.targetValue}
                onChange={e => setFormData({ ...formData, targetValue: e.target.value })}
                placeholder="e.g., $90,000 or 5% or >1M ETH"
                style={inputStyle}
              />
            </div>

            <div style={{ marginTop: 12 }}>
              <label style={labelStyle}>Description</label>
              <textarea
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe what this alert monitors..."
                style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
              />
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
              <button
                onClick={handleAddAlert}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: 8,
                  border: "none",
                  background: "#818cf8",
                  color: "#0d1117",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Create Alert
              </button>
              <button
                onClick={() => setShowNewAlertForm(false)}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: 8,
                  border: "1px solid rgba(48,54,61,0.6)",
                  background: "transparent",
                  color: "#8b949e",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* ── Stats Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: "2rem" }}>
          {[
            { label: "Total Alerts", value: stats.total, color: "#818cf8" },
            { label: "Active", value: stats.active, color: "#3fb950" },
            { label: "Triggered Today", value: stats.triggeredToday, color: "#F0B90B" },
            { label: "Snoozed", value: stats.snoozed, color: "#f85149" },
          ].map(stat => (
            <div
              key={stat.label}
              style={{
                background: "rgba(22,27,34,0.9)",
                border: `1px solid ${stat.color}30`,
                borderRadius: 12,
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 900, color: stat.color, marginBottom: 6 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 12, color: "#8b949e", fontWeight: 600 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── Category Stats ── */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: "#e6edf3", marginBottom: 12 }}>Alerts by Category</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10 }}>
            {categoryStats.map(stat => (
              <button
                key={stat.category}
                onClick={() => setSelectedCategory(selectedCategory === stat.category ? "all" : stat.category)}
                style={{
                  padding: "0.85rem",
                  borderRadius: 10,
                  border: `2px solid ${selectedCategory === stat.category ? "#818cf8" : "rgba(48,54,61,0.5)"}`,
                  background: selectedCategory === stat.category ? "rgba(99,102,241,0.1)" : "rgba(22,27,34,0.9)",
                  color: "#e6edf3",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ fontSize: 18 }}>
                  {stat.category === "Price" ? "💰" : stat.category === "Whale" ? "🐋" : stat.category === "Volume" ? "📊" : stat.category === "Sentiment" ? "😨" : "🏦"}
                </span>
                <span>{stat.category}</span>
                <span style={{ fontSize: 12, color: "#8b949e" }}>{stat.count} alerts</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div style={{ display: "flex", gap: 8, marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {(["all", "active", "triggered", "snoozed"] as const).map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: 8,
                border: `2px solid ${activeFilter === filter ? "#818cf8" : "rgba(48,54,61,0.5)"}`,
                background: activeFilter === filter ? "rgba(99,102,241,0.1)" : "transparent",
                color: activeFilter === filter ? "#818cf8" : "#8b949e",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {filter === "all" ? "All Alerts" : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* ── Alerts List ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {filteredAlerts.length === 0 ? (
            <div
              style={{
                padding: "3rem 2rem",
                textAlign: "center",
                background: "rgba(22,27,34,0.7)",
                border: "1px solid rgba(48,54,61,0.4)",
                borderRadius: 14,
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>🎯</div>
              <p style={{ color: "#8b949e", fontSize: 14 }}>
                {selectedCategory !== "all"
                  ? `No ${selectedCategory} alerts yet.`
                  : activeFilter === "active"
                    ? "No active alerts. Create one above!"
                    : `No ${activeFilter} alerts.`}
              </p>
            </div>
          ) : (
            filteredAlerts.map(alert => {
              const stateColor =
                alert.state === "triggered"
                  ? "#F0B90B"
                  : alert.state === "snoozed"
                    ? "#f85149"
                    : "#3fb950";
              const stateIcon =
                alert.state === "triggered"
                  ? "🎯"
                  : alert.state === "snoozed"
                    ? "⏸"
                    : "✅";
              const typeIcon =
                alert.type === "Price"
                  ? "💰"
                  : alert.type === "Whale"
                    ? "🐋"
                    : alert.type === "Volume"
                      ? "📊"
                      : alert.type === "Sentiment"
                        ? "😨"
                        : "🏦";

              return (
                <div
                  key={alert.id}
                  style={{
                    background: "rgba(22,27,34,0.9)",
                    border: `1px solid ${stateColor}30`,
                    borderRadius: 12,
                    padding: "1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 15,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: 20 }}>{typeIcon}</span>
                      <div>
                        <h3 style={{ fontSize: 15, fontWeight: 800, color: "#e6edf3", margin: 0 }}>
                          {alert.title}
                        </h3>
                        <p style={{ fontSize: 12, color: "#8b949e", margin: "4px 0 0 0" }}>
                          {alert.description}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: 12,
                        flexWrap: "wrap",
                        fontSize: 12,
                        color: "#8b949e",
                        marginTop: 8,
                      }}
                    >
                      <span>
                        <strong>Category:</strong> {alert.type}
                      </span>
                      {alert.coin && (
                        <span>
                          <strong>Token:</strong> {alert.coin}
                        </span>
                      )}
                      <span>
                        <strong>Target:</strong> {alert.targetValue}
                      </span>
                      <span>
                        <strong>Created:</strong> {new Date(alert.createdAt).toLocaleDateString()}
                      </span>
                      {alert.lastTriggered && (
                        <span>
                          <strong>Triggered:</strong> {new Date(alert.lastTriggered).toLocaleTimeString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "0.5rem 0.85rem",
                        background: `${stateColor}15`,
                        border: `1px solid ${stateColor}40`,
                        borderRadius: 8,
                      }}
                    >
                      <span style={{ fontSize: 14 }}>{stateIcon}</span>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: stateColor,
                          textTransform: "capitalize",
                        }}
                      >
                        {alert.state}
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: 6 }}>
                      {alert.state === "snoozed" && (
                        <button
                          onClick={() => resumeAlert(alert.id)}
                          title="Resume"
                          style={actionBtnStyle}
                        >
                          ▶
                        </button>
                      )}
                      {(alert.state === "active" || alert.state === "triggered") && (
                        <button
                          onClick={() => snoozeAlert(alert.id)}
                          title="Snooze"
                          style={actionBtnStyle}
                        >
                          ⏸
                        </button>
                      )}
                      <button
                        onClick={() => deleteAlert(alert.id)}
                        title="Delete"
                        style={{ ...actionBtnStyle, color: "#f85149" }}
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* ── Info Section ── */}
        <div style={{ marginTop: "3.5rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#e6edf3", marginBottom: "1.25rem" }}>
            Alert Types & Features
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
            }}
          >
            {[
              {
                icon: "💰",
                title: "Price Alerts",
                body: "Monitor price levels: above/below targets or % changes in any timeframe",
              },
              {
                icon: "🐋",
                title: "Whale Alerts",
                body: "Track large transactions for BTC, ETH, SOL, and other major tokens",
              },
              {
                icon: "📊",
                title: "Volume Spikes",
                body: "Get notified when trading volume surges (e.g., 50%+ in 1 hour)",
              },
              {
                icon: "😨",
                title: "Sentiment Tracking",
                body: "Monitor Fear & Greed Index changes and market sentiment shifts",
              },
              {
                icon: "🏦",
                title: "DeFi TVL Changes",
                body: "Track Total Value Locked changes across major DeFi protocols",
              },
              {
                icon: "🔔",
                title: "Multi-Channel Alerts",
                body: "Receive notifications via browser toast, sound, and system notifications",
              },
            ].map(box => (
              <div
                key={box.title}
                style={{
                  padding: "1.25rem",
                  background: "rgba(22,27,34,0.8)",
                  border: "1px solid rgba(48,54,61,0.5)",
                  borderRadius: 12,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{box.icon}</div>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#e6edf3",
                    marginBottom: 6,
                  }}
                >
                  {box.title}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    color: "#8b949e",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {box.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        select option { background: #0d1117; color: #e6edf3; }
        textarea {
          font-family: inherit;
        }
      `}</style>
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 700,
  color: "#8b949e",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  marginBottom: 6,
};

const selectStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.6rem 0.75rem",
  background: "rgba(30,30,46,0.8)",
  border: "1px solid rgba(48,54,61,0.7)",
  borderRadius: 8,
  color: "#e6edf3",
  fontSize: 13,
  fontFamily: "inherit",
  cursor: "pointer",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.65rem 0.75rem",
  boxSizing: "border-box",
  background: "rgba(30,30,46,0.8)",
  border: "1px solid rgba(48,54,61,0.7)",
  borderRadius: 8,
  color: "#e6edf3",
  fontSize: 14,
  fontFamily: "inherit",
};

const actionBtnStyle: React.CSSProperties = {
  padding: "0.5rem 0.75rem",
  borderRadius: 6,
  border: "1px solid rgba(48,54,61,0.5)",
  background: "rgba(48,54,61,0.3)",
  cursor: "pointer",
  fontSize: 14,
  color: "#818cf8",
};
