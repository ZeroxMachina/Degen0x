"use client";

import { useState } from "react";

/* ─── Types ────────────────────────────────────────────────── */
interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  color: string;
  popular?: boolean;
  features: { name: string; included: boolean; limit?: string }[];
  cta: string;
  rateLimit: string;
  endpoints: string;
}

/* ─── Pricing Data ─────────────────────────────────────────── */
const TIERS: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring the API and personal projects",
    color: "#8b949e",
    rateLimit: "30 req/min",
    endpoints: "15 endpoints",
    cta: "Get Free Key",
    features: [
      { name: "Market prices (top 100 coins)", included: true },
      { name: "Basic price history (24h)", included: true },
      { name: "Fear & Greed Index", included: true },
      { name: "Gas tracker (ETH only)", included: true },
      { name: "Community support", included: true },
      { name: "DeFi yields", included: false },
      { name: "Whale alerts", included: false },
      { name: "Trading signals", included: false },
      { name: "NFT analytics", included: false },
      { name: "WebSocket streams", included: false },
      { name: "Custom webhooks", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For traders and builders who need real-time data",
    color: "#6366f1",
    popular: true,
    rateLimit: "300 req/min",
    endpoints: "45+ endpoints",
    cta: "Start Pro Trial",
    features: [
      { name: "Market prices (all coins)", included: true },
      { name: "Full price history (all-time)", included: true },
      { name: "Fear & Greed Index", included: true },
      { name: "Gas tracker (multi-chain)", included: true },
      { name: "Priority support (24h SLA)", included: true },
      { name: "DeFi yields (17 protocols)", included: true },
      { name: "Whale alerts (real-time)", included: true },
      { name: "Trading signals (8 AI models)", included: true },
      { name: "NFT analytics (floor prices)", included: true },
      { name: "WebSocket streams", included: true, limit: "5 streams" },
      { name: "Custom webhooks", included: true, limit: "10 webhooks" },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For platforms, funds, and high-volume applications",
    color: "#f0883e",
    rateLimit: "Unlimited",
    endpoints: "All endpoints + custom",
    cta: "Contact Sales",
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Dedicated infrastructure", included: true },
      { name: "Custom endpoints", included: true },
      { name: "On-chain execution API", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "99.99% SLA guarantee", included: true },
      { name: "Unlimited WebSocket streams", included: true },
      { name: "Unlimited webhooks", included: true },
      { name: "White-label option", included: true },
      { name: "Audit logs & compliance", included: true },
      { name: "Custom data retention", included: true },
    ],
  },
];

const USAGE_METRICS = [
  { label: "API Calls Today", value: "2.4M", change: "+12%", color: "#58a6ff" },
  { label: "Active API Keys", value: "1,847", change: "+8%", color: "#3fb950" },
  { label: "Avg Response Time", value: "42ms", change: "-5ms", color: "#bc8cff" },
  { label: "Uptime (30d)", value: "99.97%", change: "", color: "#f0883e" },
];

const CODE_EXAMPLE = `// Quick start — get BTC price
const res = await fetch(
  "https://api.degen0x.io/v1/prices/bitcoin",
  { headers: { "X-API-Key": "your_api_key" } }
);
const data = await res.json();
// → { price: 97842.50, change24h: 2.3, ... }`;

const ENDPOINTS = [
  { method: "GET", path: "/v1/prices/{coin}", desc: "Real-time price data", tier: "Free" },
  { method: "GET", path: "/v1/prices/history/{coin}", desc: "Historical OHLCV data", tier: "Free" },
  { method: "GET", path: "/v1/market/fear-greed", desc: "Fear & Greed Index", tier: "Free" },
  { method: "GET", path: "/v1/gas/{chain}", desc: "Gas fees by chain", tier: "Free" },
  { method: "GET", path: "/v1/defi/yields", desc: "DeFi protocol yields", tier: "Pro" },
  { method: "GET", path: "/v1/whales/alerts", desc: "Whale transaction feed", tier: "Pro" },
  { method: "GET", path: "/v1/signals/trading", desc: "AI trading signals", tier: "Pro" },
  { method: "GET", path: "/v1/nft/collections", desc: "NFT floor prices & rarity", tier: "Pro" },
  { method: "WS", path: "/v1/ws/prices", desc: "Real-time price stream", tier: "Pro" },
  { method: "POST", path: "/v1/webhooks", desc: "Custom alert webhooks", tier: "Pro" },
];

/* ================================================================= */
export default function APIPricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const s = {
    page: { background: "#0d1117", minHeight: "100vh", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" } as React.CSSProperties,
    container: { maxWidth: 1100, margin: "0 auto", padding: "24px 16px" } as React.CSSProperties,
    card: { background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 } as React.CSSProperties,
    header: { textAlign: "center" as const, marginBottom: 32 } as React.CSSProperties,
  };

  return (
    <div style={s.page}>
      <div style={s.container}>
        {/* Header */}
        <div style={s.header}>
          <h1 style={{ fontSize: 32, fontWeight: 800, background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            API Pricing
          </h1>
          <p style={{ fontSize: 16, color: "#8b949e", marginTop: 8, maxWidth: 600, margin: "8px auto 0" }}>
            Real-time crypto data, DeFi yields, whale alerts, and AI trading signals. One API key, all chains.
          </p>

          {/* Billing toggle */}
          <div style={{ display: "flex", justifyContent: "center", gap: 4, marginTop: 20, background: "#161b22", borderRadius: 10, padding: 4, display: "inline-flex", border: "1px solid #30363d" }}>
            {(["monthly", "annual"] as const).map((b) => (
              <button key={b} onClick={() => setBilling(b)} style={{
                padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                background: billing === b ? "#6366f1" : "transparent", color: billing === b ? "#fff" : "#8b949e",
              }}>
                {b === "monthly" ? "Monthly" : "Annual (2 months free)"}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 24 }}>
          {USAGE_METRICS.map((m) => (
            <div key={m.label} style={{ ...s.card, padding: 14 }}>
              <div style={{ fontSize: 11, color: "#8b949e", fontWeight: 600, textTransform: "uppercase" }}>{m.label}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: m.color }}>{m.value}</span>
                {m.change && <span style={{ fontSize: 11, color: "#3fb950" }}>{m.change}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, marginBottom: 32 }}>
          {TIERS.map((tier) => (
            <div key={tier.name} style={{
              ...s.card, position: "relative",
              border: tier.popular ? `2px solid ${tier.color}` : "1px solid #30363d",
              transform: tier.popular ? "scale(1.02)" : "none",
            }}>
              {tier.popular && (
                <div style={{
                  position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                  background: tier.color, color: "#fff", fontSize: 11, fontWeight: 700,
                  padding: "4px 16px", borderRadius: 20,
                }}>MOST POPULAR</div>
              )}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: tier.color }}>{tier.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 8 }}>
                  <span style={{ fontSize: 40, fontWeight: 900 }}>
                    {tier.price === "Custom" ? "Custom" : billing === "annual" && tier.price !== "$0"
                      ? `$${Math.round(parseInt(tier.price.replace("$", "")) * 10 / 12)}`
                      : tier.price}
                  </span>
                  {tier.period && <span style={{ fontSize: 14, color: "#8b949e" }}>{tier.period}</span>}
                </div>
                <p style={{ fontSize: 13, color: "#8b949e", marginTop: 8 }}>{tier.description}</p>
              </div>

              <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <div style={{ fontSize: 11, background: `${tier.color}20`, color: tier.color, padding: "4px 8px", borderRadius: 4, fontWeight: 600 }}>{tier.rateLimit}</div>
                <div style={{ fontSize: 11, background: `${tier.color}20`, color: tier.color, padding: "4px 8px", borderRadius: 4, fontWeight: 600 }}>{tier.endpoints}</div>
              </div>

              <button style={{
                width: "100%", padding: "12px 0", borderRadius: 8, border: tier.popular ? "none" : "1px solid #30363d",
                background: tier.popular ? `linear-gradient(135deg, ${tier.color}, ${tier.color}cc)` : "transparent",
                color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", marginBottom: 16,
              }}>
                {tier.cta}
              </button>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {tier.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                    <span style={{ color: f.included ? "#3fb950" : "#8b949e" }}>{f.included ? "✓" : "✗"}</span>
                    <span style={{ color: f.included ? "#e6edf3" : "#8b949e" }}>{f.name}</span>
                    {f.limit && <span style={{ fontSize: 10, color: "#8b949e", marginLeft: "auto" }}>{f.limit}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div style={{ ...s.card, marginBottom: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>🚀 Quick Start</div>
          <pre style={{
            background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, padding: 16,
            fontSize: 13, lineHeight: 1.6, overflowX: "auto", color: "#e6edf3",
          }}>
            <code>{CODE_EXAMPLE}</code>
          </pre>
        </div>

        {/* Endpoints Table */}
        <div style={s.card}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>📡 Available Endpoints</div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Method", "Endpoint", "Description", "Min Tier"].map((h) => (
                  <th key={h} style={{ textAlign: "left", fontSize: 11, color: "#8b949e", fontWeight: 600, textTransform: "uppercase", padding: "8px 12px", borderBottom: "1px solid #30363d" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ENDPOINTS.map((ep, i) => (
                <tr key={i}>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid #30363d" }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, fontFamily: "monospace",
                      background: ep.method === "WS" ? "#d2992220" : ep.method === "POST" ? "#3fb95020" : "#58a6ff20",
                      color: ep.method === "WS" ? "#d29922" : ep.method === "POST" ? "#3fb950" : "#58a6ff",
                      padding: "2px 6px", borderRadius: 4,
                    }}>{ep.method}</span>
                  </td>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid #30363d", fontFamily: "monospace", fontSize: 12, color: "#bc8cff" }}>{ep.path}</td>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid #30363d", fontSize: 13 }}>{ep.desc}</td>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid #30363d" }}>
                    <span style={{
                      fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 4,
                      background: ep.tier === "Free" ? "#8b949e20" : "#6366f120",
                      color: ep.tier === "Free" ? "#8b949e" : "#6366f1",
                    }}>{ep.tier}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <div style={{ ...s.card, marginTop: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>❓ Frequently Asked Questions</div>
          {[
            { q: "How does the free tier work?", a: "Sign up and get an API key instantly. No credit card required. 30 requests per minute with access to basic market data endpoints." },
            { q: "Can I upgrade or downgrade at any time?", a: "Yes. Changes take effect immediately. If you downgrade, you keep Pro access until the end of your billing cycle." },
            { q: "What happens if I exceed my rate limit?", a: "Requests return a 429 status code with a Retry-After header. We never charge overage fees — upgrade when you're ready." },
            { q: "Do you support WebSocket connections?", a: "Pro and Enterprise plans include real-time WebSocket streams for price feeds, whale alerts, and trading signals." },
          ].map((faq, i) => (
            <div key={i} style={{ padding: "12px 0", borderBottom: i < 3 ? "1px solid #30363d" : "none" }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{faq.q}</div>
              <div style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.5 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
