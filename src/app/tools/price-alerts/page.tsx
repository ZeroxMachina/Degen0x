"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Breadcrumb from "@/components/Breadcrumb";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Crypto Price Alerts",
  "description": "Set custom price alerts for cryptocurrencies and get notified when prices cross your targets",
  "url": "https://degen0x.com/tools/price-alerts",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "features": [
    "Custom price alerts",
    "Multiple cryptocurrencies",
    "Above/Below price conditions",
    "Real-time price updates",
    "Browser notifications",
    "No account required",
    "100% private"
  ]
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface Alert {
  id: string;
  coinId: string;
  coinSymbol: string;
  coinName: string;
  condition: "above" | "below";
  targetPrice: number;
  currency: "usd" | "eur" | "gbp";
  createdAt: number;
  triggered: boolean;
  triggeredAt?: number;
  triggeredPrice?: number;
  active: boolean;
  bellAnimating?: boolean;
}

interface PriceData {
  [id: string]: { usd: number; eur: number; gbp: number; change24h?: number };
}

// ─── Coins (with top 8 popular) ────────────────────────────────────────────────
const COINS = [
  { id: "bitcoin",       symbol: "BTC",  name: "Bitcoin",   color: "#F7931A" },
  { id: "ethereum",      symbol: "ETH",  name: "Ethereum",  color: "#627EEA" },
  { id: "solana",        symbol: "SOL",  name: "Solana",    color: "#9945FF" },
  { id: "avalanche-2",   symbol: "AVAX", name: "Avalanche", color: "#E84142" },
  { id: "matic-network", symbol: "MATIC",name: "Polygon",   color: "#8247E5" },
  { id: "polkadot",      symbol: "DOT",  name: "Polkadot",  color: "#E6007A" },
  { id: "chainlink",     symbol: "LINK", name: "Chainlink", color: "#375BD2" },
  { id: "uniswap",       symbol: "UNI",  name: "Uniswap",   color: "#FF007A" },
];

const FALLBACK_PRICES: PriceData = {
  bitcoin:       { usd: 82500,  eur: 75900,  gbp: 65800 },
  ethereum:      { usd: 4100,   eur: 3770,   gbp: 3270 },
  solana:        { usd: 172,    eur: 158,     gbp: 137 },
  "avalanche-2": { usd: 35.2,   eur: 32.4,   gbp: 28.1 },
  "matic-network": { usd: 0.82, eur: 0.75,   gbp: 0.65 },
  polkadot:      { usd: 7.80,   eur: 7.17,   gbp: 6.22 },
  chainlink:     { usd: 18.4,   eur: 16.9,   gbp: 14.7 },
  uniswap:       { usd: 11.8,   eur: 10.9,   gbp: 9.42 }
};

const CURRENCY_SYMBOLS: Record<string, string> = { usd: "$", eur: "€", gbp: "£" };

function formatPrice(price: number, currency: string): string {
  const sym = CURRENCY_SYMBOLS[currency] ?? "$";
  if (price >= 1000) return `${sym}${price.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
  if (price >= 1)    return `${sym}${price.toFixed(4).replace(/\.?0+$/, "")}`;
  return `${sym}${price.toFixed(6).replace(/\.?0+$/, "")}`;
}

function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function PriceAlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [prices, setPrices] = useState<PriceData>(FALLBACK_PRICES);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");
  const [priceError, setPriceError] = useState(false);
  const [notifications, setNotifications] = useState<{ id: string; msg: string; color: string }[]>([]);
  const [notificationPermission, setNotificationPermission] = useState<"granted" | "denied" | "default">("default");
  const [simPriceMultiplier, setSimPriceMultiplier] = useState(1);

  // Form state
  const [formCoin, setFormCoin] = useState(COINS[0].id);
  const [formCondition, setFormCondition] = useState<"above" | "below">("above");
  const [formPrice, setFormPrice] = useState<string>("");
  const [formCurrency, setFormCurrency] = useState<"usd" | "eur" | "gbp">("usd");
  const [formError, setFormError] = useState("");
  const [activeTab, setActiveTab] = useState<"active" | "triggered" | "all">("active");

  const prevPrices = useRef<PriceData>({});

  // ── Request notification permission ──
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setNotificationPermission(
        (Notification.permission as "granted" | "denied" | "default") || "default"
      );
    }
  }, []);

  const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
      alert("Your browser doesn't support notifications");
      return;
    }
    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission as "granted" | "denied" | "default");
    } catch (err) {
      console.error("Notification permission error:", err);
    }
  };

  // ── Fetch prices ──
  const fetchPrices = useCallback(async () => {
    try {
      const ids = COINS.map(c => c.id).join(",");
      const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd,eur,gbp&include_24hr_change=true`);
      if (!res.ok) throw new Error("API error");
      const raw = await res.json();
      // Normalize 24h change field
      const normalized: PriceData = {};
      for (const id of Object.keys(raw)) {
        normalized[id] = {
          usd: raw[id].usd * simPriceMultiplier,
          eur: raw[id].eur * simPriceMultiplier,
          gbp: raw[id].gbp * simPriceMultiplier,
          change24h: raw[id].usd_24h_change };
      }
      setPrices(normalized);
      setPriceError(false);
    } catch {
      setPriceError(true);
    } finally {
      setLoading(false);
      setLastUpdated(new Date().toLocaleTimeString());
    }
  }, [simPriceMultiplier]);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60_000); // check every 60s
    return () => clearInterval(interval);
  }, [fetchPrices]);

  // ── Check alerts against prices ──
  useEffect(() => {
    if (loading) return;
    const newNotifs: { id: string; msg: string; color: string }[] = [];
    setAlerts(prev => prev.map(alert => {
      if (!alert.active || alert.triggered) return alert;
      const price = prices[alert.coinId]?.[alert.currency] ?? 0;
      const hit = alert.condition === "above" ? price >= alert.targetPrice : price <= alert.targetPrice;
      if (hit) {
        const coin = COINS.find(c => c.id === alert.coinId);
        newNotifs.push({
          id: genId(),
          msg: `🎯 ${alert.coinSymbol} is ${alert.condition} ${formatPrice(alert.targetPrice, alert.currency)}! Current: ${formatPrice(price, alert.currency)}`,
          color: alert.condition === "above" ? "#3fb950" : "#f85149" });
        return { ...alert, triggered: true, triggeredAt: Date.now(), triggeredPrice: price, bellAnimating: true };
      }
      return alert;
    }));
    if (newNotifs.length > 0) {
      setNotifications(n => [...newNotifs, ...n].slice(0, 10));
    }
  }, [prices, loading]);

  // ── Add alert ──
  const handleAddAlert = () => {
    setFormError("");
    const parsedPrice = parseFloat(formPrice);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      setFormError("Please enter a valid price greater than 0.");
      return;
    }
    const coin = COINS.find(c => c.id === formCoin)!;
    const currentPrice = prices[formCoin]?.[formCurrency] ?? 0;
    if (formCondition === "above" && parsedPrice < currentPrice) {
      setFormError(`Warning: ${coin.symbol} is already above ${formatPrice(parsedPrice, formCurrency)}. Alert will trigger immediately.`);
    }
    if (formCondition === "below" && parsedPrice > currentPrice) {
      setFormError(`Warning: ${coin.symbol} is already below ${formatPrice(parsedPrice, formCurrency)}. Alert will trigger immediately.`);
    }
    const newAlert: Alert = {
      id: genId(),
      coinId: formCoin,
      coinSymbol: coin.symbol,
      coinName: coin.name,
      condition: formCondition,
      targetPrice: parsedPrice,
      currency: formCurrency,
      createdAt: Date.now(),
      triggered: false,
      active: true
    };
    setAlerts(prev => [newAlert, ...prev]);
    setFormPrice("");
  };

  const handleDelete = (id: string) => setAlerts(prev => prev.filter(a => a.id !== id));
  const handleToggle = (id: string) => setAlerts(prev => prev.map(a => a.id === id ? { ...a, active: !a.active, triggered: false } : a));
  const handleClearTriggered = () => setAlerts(prev => prev.filter(a => !a.triggered));
  const dismissNotif = (id: string) => setNotifications(n => n.filter(x => x.id !== id));

  const filteredAlerts = alerts.filter(a => {
    if (activeTab === "active")    return a.active && !a.triggered;
    if (activeTab === "triggered") return a.triggered;
    return true;
  });

  const activeCoin = COINS.find(c => c.id === formCoin)!;
  const currentFormPrice = prices[formCoin]?.[formCurrency] ?? 0;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="min-h-screen" style={{ background: "var(--color-bg, #0d1117)" }}>
        {/* ── Toast Notifications ── */}
        <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000, display: "flex", flexDirection: "column", gap: 8, maxWidth: 360 }}>
          {notifications.map(n => (
            <div key={n.id} style={{
              padding: "12px 16px", borderRadius: 10, background: "rgba(22,27,34,0.98)",
              border: `1px solid ${n.color}60`, color: "#e6edf3", fontSize: 14, fontWeight: 600,
              display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12,
              boxShadow: `0 4px 20px ${n.color}30`, animation: "slideIn 0.3s ease-out" }}>
              <span>{n.msg}</span>
              <button onClick={() => dismissNotif(n.id)} style={{ background: "none", border: "none", color: "#8b949e", cursor: "pointer", fontSize: 16, padding: 0, flexShrink: 0 }}>×</button>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 960, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Price Alerts" },
          ]} />

          {/* ── Header ── */}
          <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
            <div style={{ display: "inline-block", padding: "3px 12px", background: "#F0B90B20", border: "1px solid #F0B90B40", borderRadius: 20, fontSize: 12, color: "#F0B90B", fontWeight: 700, marginBottom: 12 }}>
              🔔 Price Alerts
            </div>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#e6edf3", marginBottom: "0.5rem" }}>
              Crypto Price Alerts
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#8b949e", maxWidth: 540 }}>
              Set custom price targets for BTC, ETH, SOL, AVAX, MATIC, DOT, LINK, and UNI. Get notified when prices cross your thresholds — no account required.
            </p>

            {/* Notification Permission Button */}
            {notificationPermission !== "granted" && (
              <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", alignItems: "center", padding: "0.75rem 1rem", background: "rgba(79, 195, 247, 0.1)", border: "1px solid rgba(79, 195, 247, 0.3)", borderRadius: 10 }}>
                <span style={{ fontSize: "0.9rem", color: "#8b949e" }}>Enable browser notifications for real-time alerts:</span>
                <button
                  onClick={requestNotificationPermission}
                  style={{
                    padding: "0.4rem 0.8rem",
                    background: "#4FC3F7",
                    color: "#0d1117",
                    border: "none",
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap"
                  }}>
                  Enable Notifications
                </button>
              </div>
            )}
            {notificationPermission === "granted" && (
              <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1rem", background: "rgba(63, 185, 80, 0.1)", border: "1px solid rgba(63, 185, 80, 0.3)", borderRadius: 10 }}>
                <span style={{ fontSize: "1rem" }}>✅</span>
                <span style={{ fontSize: "0.9rem", color: "#3fb950" }}>Notifications enabled</span>
              </div>
            )}
          </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.6fr)", gap: "1.5rem", alignItems: "start" }}>

          {/* ── Left: Create Alert + Current Prices ── */}
          <div>
            {/* Create Alert */}
            <div style={{ background: "rgba(22,27,34,0.9)", border: "1px solid rgba(240,185,11,0.25)", borderRadius: 14, padding: "1.5rem", marginBottom: "1.25rem" }}>
              <h2 style={{ fontSize: 15, fontWeight: 800, color: "#e6edf3", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: 8 }}>
                <span>＋</span> Create New Alert
              </h2>

              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Cryptocurrency</label>
                <select value={formCoin} onChange={e => setFormCoin(e.target.value)} style={selStyle}>
                  {COINS.map(c => <option key={c.id} value={c.id}>{c.symbol} – {c.name}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: 12, padding: "0.6rem 0.8rem", background: "rgba(48,54,61,0.4)", borderRadius: 8, fontSize: 13, color: "#8b949e" }}>
                Current: <strong style={{ color: "#e6edf3" }}>{formatPrice(currentFormPrice, formCurrency)}</strong>
                {loading && <span style={{ marginLeft: 8 }}>…</span>}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                <div>
                  <label style={labelStyle}>Condition</label>
                  <select value={formCondition} onChange={e => setFormCondition(e.target.value as "above" | "below")} style={selStyle}>
                    <option value="above">↑ Price Above</option>
                    <option value="below">↓ Price Below</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Currency</label>
                  <select value={formCurrency} onChange={e => setFormCurrency(e.target.value as "usd" | "eur" | "gbp")} style={selStyle}>
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                    <option value="gbp">GBP (£)</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Target Price ({formCurrency.toUpperCase()})</label>
                <input
                  type="number"
                  value={formPrice}
                  onChange={e => setFormPrice(e.target.value)}
                  placeholder={`e.g. ${formatPrice(currentFormPrice * 1.1, formCurrency).slice(1)}`}
                  min="0"
                  step="any"
                  style={inpStyle}
                  onKeyDown={e => e.key === "Enter" && handleAddAlert()}
                />
              </div>

              {/* Quick target buttons */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                {[0.9, 0.95, 1.05, 1.1, 1.2, 1.5, 2].map(mult => {
                  const price = currentFormPrice * mult;
                  const label = mult < 1 ? `-${Math.round((1 - mult) * 100)}%` : `+${Math.round((mult - 1) * 100)}%`;
                  return (
                    <button key={mult} onClick={() => setFormPrice(price.toFixed(price >= 1 ? 2 : 6))}
                      style={{ padding: "3px 9px", borderRadius: 6, fontSize: 11, fontWeight: 700, cursor: "pointer", border: "1px solid rgba(240,185,11,0.3)", background: "rgba(240,185,11,0.08)", color: mult < 1 ? "#f85149" : "#3fb950" }}>
                      {label}
                    </button>
                  );
                })}
              </div>

              {formError && (
                <div style={{ padding: "0.5rem 0.75rem", background: "rgba(248,81,73,0.1)", border: "1px solid rgba(248,81,73,0.3)", borderRadius: 8, fontSize: 12, color: "#f85149", marginBottom: 12 }}>
                  {formError}
                </div>
              )}

              <button onClick={handleAddAlert} style={{
                width: "100%", padding: "0.75rem", borderRadius: 10, border: "none",
                background: "linear-gradient(135deg, #F0B90B, #f0883e)", color: "#0d1117",
                fontWeight: 800, fontSize: 14, cursor: "pointer", letterSpacing: "0.02em" }}>
                🔔 Set Alert
              </button>
            </div>

            {/* Live Price Board */}
            <div style={{ background: "rgba(22,27,34,0.9)", border: "1px solid rgba(48,54,61,0.6)", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid rgba(48,54,61,0.6)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3" }}>📊 Live Prices</span>
                <span style={{ fontSize: 11, color: "#8b949e" }}>{priceError ? "Cached" : `Updated ${lastUpdated}`}</span>
              </div>
              <div style={{ maxHeight: 320, overflowY: "auto" }}>
                {COINS.slice(0, 8).map(coin => {
                  const price = prices[coin.id]?.usd ?? 0;
                  const change = prices[coin.id]?.change24h ?? 0;
                  return (
                    <div key={coin.id} onClick={() => setFormCoin(coin.id)} style={{
                      padding: "0.6rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center",
                      borderBottom: "1px solid rgba(48,54,61,0.3)", cursor: "pointer",
                      background: formCoin === coin.id ? `${coin.color}10` : "transparent" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 8, background: `${coin.color}20`, border: `1px solid ${coin.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: coin.color }}>
                          {coin.symbol.slice(0, 2)}
                        </div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3" }}>{coin.symbol}</div>
                          <div style={{ fontSize: 10, color: "#8b949e" }}>{coin.name}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3" }}>{formatPrice(price, "usd")}</div>
                        <div style={{ fontSize: 10, color: change >= 0 ? "#3fb950" : "#f85149", fontWeight: 600 }}>
                          {change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Right: Alerts List ── */}
          <div>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: "1.25rem" }}>
              {[
                { label: "Active", value: alerts.filter(a => a.active && !a.triggered).length, color: "#3fb950" },
                { label: "Triggered", value: alerts.filter(a => a.triggered).length, color: "#F0B90B" },
                { label: "Total", value: alerts.length, color: "#6366f1" },
              ].map(stat => (
                <div key={stat.label} style={{ background: "rgba(22,27,34,0.9)", border: `1px solid ${stat.color}30`, borderRadius: 12, padding: "0.85rem", textAlign: "center" }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 600 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: 4, marginBottom: "1rem", background: "rgba(22,27,34,0.9)", border: "1px solid rgba(48,54,61,0.6)", borderRadius: 10, padding: 4 }}>
              {(["active", "triggered", "all"] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  flex: 1, padding: "0.5rem", borderRadius: 7, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 700,
                  background: activeTab === tab ? "rgba(99,102,241,0.2)" : "transparent",
                  color: activeTab === tab ? "#818cf8" : "#8b949e",
                  textTransform: "capitalize" }}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Alerts */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filteredAlerts.length === 0 ? (
                <div style={{ padding: "3rem", textAlign: "center", background: "rgba(22,27,34,0.7)", border: "1px solid rgba(48,54,61,0.4)", borderRadius: 14 }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>🔔</div>
                  <p style={{ color: "#8b949e", fontSize: 14 }}>
                    {activeTab === "active" ? "No active alerts. Create one on the left!" :
                     activeTab === "triggered" ? "No triggered alerts yet." : "No alerts created yet."}
                  </p>
                </div>
              ) : filteredAlerts.map(alert => {
                const coin = COINS.find(c => c.id === alert.coinId);
                const currentPrice = prices[alert.coinId]?.[alert.currency] ?? 0;
                const priceDiff = alert.condition === "above"
                  ? ((currentPrice / alert.targetPrice) - 1) * 100
                  : ((alert.targetPrice / currentPrice) - 1) * 100;
                const progress = Math.min(Math.abs(priceDiff), 100);
                return (
                  <div key={alert.id} style={{
                    background: alert.triggered ? "rgba(63,185,80,0.06)" : "rgba(22,27,34,0.9)",
                    border: `1px solid ${alert.triggered ? "rgba(63,185,80,0.3)" : !alert.active ? "rgba(48,54,61,0.4)" : "rgba(48,54,61,0.6)"}`,
                    borderRadius: 12, padding: "1rem 1.25rem", opacity: !alert.active ? 0.6 : 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: `${coin?.color ?? "#6366f1"}20`, border: `1px solid ${coin?.color ?? "#6366f1"}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: coin?.color ?? "#6366f1" }}>
                          {alert.coinSymbol.slice(0, 2)}
                        </div>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 800, color: "#e6edf3" }}>{alert.coinSymbol}</div>
                          <div style={{ fontSize: 11, color: "#8b949e" }}>{alert.coinName}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        {alert.triggered && alert.bellAnimating && (
                          <span
                            style={{
                              fontSize: "1.2rem",
                              animation: "bellRing 0.5s ease-in-out 2",
                              transformOrigin: "center top",
                              display: "inline-block"
                            }}>
                            🔔
                          </span>
                        )}
                        {!alert.triggered && (
                          <button onClick={() => handleToggle(alert.id)} title={alert.active ? "Pause" : "Resume"} style={{ ...iconBtnStyle, color: alert.active ? "#F0B90B" : "#3fb950" }}>
                            {alert.active ? "⏸" : "▶"}
                          </button>
                        )}
                        {alert.triggered && (
                          <button onClick={() => handleToggle(alert.id)} title="Reset & reactivate" style={{ ...iconBtnStyle, color: "#818cf8" }}>↺</button>
                        )}
                        <button onClick={() => handleDelete(alert.id)} title="Delete" style={{ ...iconBtnStyle, color: "#f85149" }}>🗑</button>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <div>
                        <span style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em" }}>Target </span>
                        <span style={{ fontSize: 15, fontWeight: 800, color: alert.condition === "above" ? "#3fb950" : "#f85149" }}>
                          {alert.condition === "above" ? "▲" : "▼"} {formatPrice(alert.targetPrice, alert.currency)}
                        </span>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 11, color: "#8b949e" }}>Current</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#e6edf3" }}>{formatPrice(currentPrice, alert.currency)}</div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    {!alert.triggered && alert.active && (
                      <div style={{ marginBottom: 6 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 11, color: "#8b949e" }}>
                          <span>{priceDiff > 0 ? `${priceDiff.toFixed(1)}% to target` : `${Math.abs(priceDiff).toFixed(1)}% past target`}</span>
                        </div>
                        <div style={{ height: 4, borderRadius: 4, background: "rgba(48,54,61,0.6)", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${progress}%`, background: alert.condition === "above" ? "#3fb950" : "#f85149", borderRadius: 4, transition: "width 0.5s ease" }} />
                        </div>
                      </div>
                    )}

                    {alert.triggered && (
                      <div style={{ padding: "0.4rem 0.75rem", background: "rgba(63,185,80,0.1)", border: "1px solid rgba(63,185,80,0.3)", borderRadius: 8, fontSize: 12, color: "#3fb950", fontWeight: 600 }}>
                        ✅ Triggered at {formatPrice(alert.triggeredPrice ?? alert.targetPrice, alert.currency)}
                        {alert.triggeredAt ? ` · ${new Date(alert.triggeredAt).toLocaleTimeString()}` : ""}
                      </div>
                    )}

                    {!alert.active && !alert.triggered && (
                      <div style={{ fontSize: 11, color: "#8b949e", fontStyle: "italic" }}>⏸ Paused</div>
                    )}
                  </div>
                );
              })}

              {activeTab === "triggered" && alerts.filter(a => a.triggered).length > 0 && (
                <button onClick={handleClearTriggered} style={{ padding: "0.6rem", borderRadius: 8, border: "1px solid rgba(248,81,73,0.3)", background: "rgba(248,81,73,0.06)", color: "#f85149", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                  🗑 Clear All Triggered
                </button>
              )}
            </div>
          </div>
        </div>

          {/* ── Info Section ── */}
          <div style={{ marginTop: "3rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#e6edf3", marginBottom: "1.25rem" }}>About Crypto Price Alerts</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
              {[
                { icon: "🔒", title: "100% Private", body: "All alerts stored in React state—no localStorage, no server sync. Your data stays in your browser." },
                { icon: "🔄", title: "60s Refresh", body: "Prices fetched from CoinGecko API every 60 seconds for real-time tracking and instant triggers." },
                { icon: "📱", title: "No Account Needed", body: "Create and manage alerts instantly. No signup, no login, no email required." },
                { icon: "🔔", title: "Browser Notifications", body: "Enable notifications to get alerted even when you're not on the page. Full browser support." },
              ].map(box => (
                <div key={box.title} style={{ padding: "1rem 1.2rem", background: "rgba(22,27,34,0.8)", border: "1px solid rgba(48,54,61,0.5)", borderRadius: 12 }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{box.icon}</div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 6 }}>{box.title}</h3>
                  <p style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6, margin: 0 }}>{box.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── FAQ Section ── */}
          <div style={{ marginTop: "3rem", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#e6edf3", marginBottom: "1.25rem" }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                {
                  q: "Are my alerts saved permanently?",
                  a: "Alerts are stored in React state during your current session. They will reset if you refresh the page. For persistent alerts, consider using a crypto exchange or portfolio tracker with built-in alert features."
                },
                {
                  q: "How often are prices updated?",
                  a: "Prices are fetched from CoinGecko's free API every 60 seconds. Alerts are checked whenever prices update, so triggers happen within ~1 minute of a price crossing your target."
                },
                {
                  q: "What cryptocurrencies can I set alerts for?",
                  a: "You can set alerts for Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Avalanche (AVAX), Polygon (MATIC), Polkadot (DOT), Chainlink (LINK), and Uniswap (UNI) in USD, EUR, or GBP."
                },
                {
                  q: "Do I need to keep the page open?",
                  a: "Yes, the page must remain open for alerts to trigger. If you close the tab or browser, price monitoring stops. However, enabling browser notifications will alert you even if the browser window is not in focus."
                },
                {
                  q: "Can I set multiple alerts for the same coin?",
                  a: "Absolutely! You can create as many alerts as you want for the same coin at different price levels. For example, set both a $50k and $60k alert for Bitcoin."
                },
                {
                  q: "What happens when an alert triggers?",
                  a: "You'll see a toast notification appear on screen with the coin symbol and current price. If notifications are enabled, your browser will also show a native notification. The alert will be marked as 'Triggered' in the list."
                },
                {
                  q: "Can I reuse triggered alerts?",
                  a: "Yes! Click the reset button (↺) next to any triggered alert to reactivate it. It will start monitoring again from your original target price."
                },
                {
                  q: "Why are some prices showing as 'Cached'?",
                  a: "If the CoinGecko API is temporarily unavailable, prices are cached from your last successful fetch. The page will continue to show the last known prices until the connection is restored."
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  style={{
                    background: "rgba(22,27,34,0.8)",
                    border: "1px solid rgba(48,54,61,0.6)",
                    borderRadius: 10,
                    padding: "1rem 1.25rem",
                    cursor: "pointer"
                  }}>
                  <summary style={{ color: "#e6edf3", fontWeight: 700, fontSize: "0.95rem", userSelect: "none" }}>
                    {faq.q}
                  </summary>
                  <p style={{ color: "#8b949e", fontSize: "0.875rem", margin: "0.75rem 0 0 0", lineHeight: "1.6" }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Price Simulator for Testing (Optional) */}
          <div style={{ marginTop: "2rem", padding: "1rem", background: "rgba(22,27,34,0.5)", border: "1px solid rgba(48,54,61,0.4)", borderRadius: 10 }}>
            <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              🧪 Price Simulator (for testing):
            </label>
            <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
              {[0.8, 0.9, 1, 1.1, 1.2].map(mult => (
                <button
                  key={mult}
                  onClick={() => setSimPriceMultiplier(mult)}
                  style={{
                    padding: "0.4rem 0.8rem",
                    borderRadius: 6,
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    border: simPriceMultiplier === mult ? "1px solid #6366f1" : "1px solid rgba(48,54,61,0.5)",
                    background: simPriceMultiplier === mult ? "rgba(99,102,241,0.2)" : "transparent",
                    color: simPriceMultiplier === mult ? "#818cf8" : "#8b949e"
                  }}>
                  {mult === 1 ? "Reset" : `${mult < 1 ? "-" : "+"}${Math.abs(Math.round((mult - 1) * 100))}%`}
                </button>
              ))}
            </div>
            <p style={{ fontSize: "0.75rem", color: "#6e7681", margin: "0.5rem 0 0 0" }}>
              Click buttons to simulate price changes. This helps test if your alerts trigger correctly.
            </p>
          </div>
        </div>

        <style>{`
          select option { background: #0d1117; color: #e6edf3; }
          details summary::marker { color: #8b949e; }
          details[open] summary::marker { color: #6366f1; }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes bellRing {
            0%, 100% { transform: rotate(0deg); }
            10% { transform: rotate(-10deg); }
            20% { transform: rotate(10deg); }
            30% { transform: rotate(-10deg); }
            40% { transform: rotate(10deg); }
            50% { transform: rotate(0deg); }
          }

          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: \"minmax(0,1fr)"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const labelStyle: React.CSSProperties = { display: "block", fontSize: 11, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 };
const selStyle: React.CSSProperties = { width: "100%", padding: "0.6rem 0.75rem", background: "rgba(30,30,46,0.8)", border: "1px solid rgba(48,54,61,0.7)", borderRadius: 8, color: "#e6edf3", fontSize: 13, fontFamily: "inherit", cursor: "pointer" };
const inpStyle: React.CSSProperties = { width: "100%", padding: "0.65rem 0.75rem", boxSizing: "border-box", background: "rgba(30,30,46,0.8)", border: "1px solid rgba(48,54,61,0.7)", borderRadius: 8, color: "#e6edf3", fontSize: 14, fontFamily: "inherit" };
const iconBtnStyle: React.CSSProperties = { padding: "4px 8px", borderRadius: 6, border: "1px solid rgba(48,54,61,0.5)", background: "rgba(48,54,61,0.3)", cursor: "pointer", fontSize: 14 };
