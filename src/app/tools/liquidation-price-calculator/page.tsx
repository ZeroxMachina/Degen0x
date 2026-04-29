"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ── Focus-ring + mobile-grid styles (not expressible in inline style objects) ── */
const POLISH_CSS = `
  .lpc-input:focus-visible, .lpc-btn:focus-visible, .lpc-link:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .lpc-btn:hover { filter: brightness(1.15); }
  .lpc-link:hover { border-color: var(--color-primary) !important; }
  @media (max-width: 768px) {
    .lpc-grid-2col { grid-template-columns: 1fr !important; }
  }
`;

// ── Types ───────────────────────────────────────────────────────────────────
type Side = "long" | "short";

interface LiqResult {
  liqPrice: number;
  distancePct: number; // signed: positive = price must rise, negative = price must fall
  initialMarginUsd: number;
  maintenanceMarginUsd: number;
  effectiveLeverage: number;
  positionQty: number;
}

// ── Math ────────────────────────────────────────────────────────────────────
//
// Standard isolated-margin liquidation price for a linear (USDT-margined) perp,
// excluding fees and funding adjustments — the formula CEXes such as Binance,
// Bybit, OKX publish in their help docs:
//
//   LiqPrice_long  = EntryPrice × (1 − 1/Leverage + MMR)
//   LiqPrice_short = EntryPrice × (1 + 1/Leverage − MMR)
//
// Where MMR is the maintenance margin rate (e.g., 0.005 for 0.5%).
//
// Sources:
//  - https://www.binance.com/en/support/faq/360033162192 (Liquidation Price)
//  - https://learn.bybit.com/glossary/definition-liquidation-price/
//
function calcLiquidation(
  side: Side,
  entry: number,
  leverage: number,
  mmrPct: number,
  notionalUsd: number,
): LiqResult {
  const safeEntry = entry > 0 ? entry : 0;
  const safeLev = leverage > 0 ? leverage : 1;
  const mmr = (mmrPct || 0) / 100;
  const oneOverL = 1 / safeLev;

  const factor = side === "long" ? 1 - oneOverL + mmr : 1 + oneOverL - mmr;
  const liqPrice = Math.max(0, safeEntry * factor);

  const distancePct = safeEntry > 0 ? ((liqPrice - safeEntry) / safeEntry) * 100 : 0;
  const initialMarginUsd = notionalUsd / safeLev;
  const maintenanceMarginUsd = notionalUsd * mmr;
  const positionQty = safeEntry > 0 ? notionalUsd / safeEntry : 0;

  return {
    liqPrice,
    distancePct,
    initialMarginUsd,
    maintenanceMarginUsd,
    effectiveLeverage: safeLev,
    positionQty,
  };
}

// ── Format helpers ──────────────────────────────────────────────────────────
function fmtUsd(num: number, opts: { min?: number; max?: number } = {}): string {
  if (!Number.isFinite(num)) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: opts.min ?? 2,
    maximumFractionDigits: opts.max ?? 2,
  }).format(num);
}

function fmtPrice(num: number): string {
  if (!Number.isFinite(num)) return "—";
  if (num === 0) return "$0.00";
  if (num < 0.01) return `$${num.toFixed(8)}`;
  if (num < 1) return `$${num.toFixed(4)}`;
  return `$${num.toFixed(2)}`;
}

function fmtPct(num: number): string {
  if (!Number.isFinite(num)) return "—";
  const sign = num > 0 ? "+" : "";
  return `${sign}${num.toFixed(2)}%`;
}

// ── Page-level constants ────────────────────────────────────────────────────
const PRESET_LEVERAGES = [2, 3, 5, 10, 20, 25, 50, 100];

const FAQS = [
  {
    q: "How is the liquidation price calculated?",
    a: "For an isolated-margin linear perpetual, liquidation price = entry × (1 − 1/leverage + MMR) for longs and entry × (1 + 1/leverage − MMR) for shorts, where MMR is the maintenance margin rate. This is the formula published by Binance, Bybit, and OKX in their official help docs and excludes fees, funding, and unrealized PnL adjustments.",
  },
  {
    q: "Why does my exchange show a slightly different liquidation price?",
    a: "Real exchanges include trading fees, accrued funding, and (for cross-margin) the wallet balance into the calculation. They also use tier-based MMR that climbs as your position size grows. This calculator uses the textbook isolated-margin formula at the MMR you select — treat the result as a clean upper-bound estimate, not the live exchange engine value.",
  },
  {
    q: "What maintenance margin rate (MMR) should I use?",
    a: "Most major venues use 0.4–0.5% MMR for the smallest size tier on BTC and ETH perps. Tier MMR rises with notional — at $5M+ exposure on BTC it can climb to 1–2.5%. If you don't know your tier, 0.5% is a safe default for retail-sized positions on BTC/ETH.",
  },
  {
    q: "Does higher leverage always mean a closer liquidation price?",
    a: "Yes. Liquidation distance scales as ~ (1/leverage − MMR). At 10× with 0.5% MMR a long liquidates ~9.5% below entry; at 50× the same long liquidates ~1.5% below entry. Doubling leverage roughly halves your liquidation buffer — a key reason high-leverage positions get wiped out by routine intraday wicks.",
  },
  {
    q: "How does cross margin change the liquidation price?",
    a: "Cross margin pools your entire wallet balance against the position, so the effective liquidation price is much further away than the isolated-margin number — but a single bad position can drain the whole wallet. This calculator models the isolated case, which is the conservative way to size risk.",
  },
  {
    q: "Should I add fees and funding to the formula?",
    a: "For a quick sanity check, no — the basic formula is fine. For a position you intend to hold for days or weeks, subtract expected funding payments from your effective margin: each funding interval shifts the liquidation price slightly closer. Fees on entry and forced liquidation also widen the gap by 0.05–0.10% per side at most major venues.",
  },
];

// ── Page Component ──────────────────────────────────────────────────────────
export default function LiquidationPriceCalculatorPage() {
  const [side, setSide] = useState<Side>("long");
  const [entryPrice, setEntryPrice] = useState<number>(67450);
  const [leverage, setLeverage] = useState<number>(10);
  const [mmrPct, setMmrPct] = useState<number>(0.5);
  const [notionalUsd, setNotionalUsd] = useState<number>(10000);

  const result = useMemo(
    () => calcLiquidation(side, entryPrice, leverage, mmrPct, notionalUsd),
    [side, entryPrice, leverage, mmrPct, notionalUsd],
  );

  // Sensitivity table — same inputs except leverage varies
  const sensitivity = useMemo(
    () =>
      PRESET_LEVERAGES.map((lev) => ({
        leverage: lev,
        ...calcLiquidation(side, entryPrice, lev, mmrPct, notionalUsd),
      })),
    [side, entryPrice, mmrPct, notionalUsd],
  );

  // ── JSON-LD ─────────────────────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://degen0x.com/" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://degen0x.com/tools" },
      { "@type": "ListItem", position: 3, name: "Liquidation Price Calculator" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Liquidation Price Calculator",
    url: "https://degen0x.com/tools/liquidation-price-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description:
      "Calculate the liquidation price for crypto perpetual long and short positions at any leverage and maintenance margin rate.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  // ── Render ──────────────────────────────────────────────────────────────
  const distanceColor = result.distancePct < 0 ? "var(--color-danger)" : "var(--color-success)";
  const sideColor = side === "long" ? "var(--color-success)" : "var(--color-danger)";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      <style dangerouslySetInnerHTML={{ __html: POLISH_CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-danger) 0%, var(--color-accent) 50%, var(--color-accent) 100%)",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.6rem", fontWeight: 700, marginBottom: 16 }}>
            Liquidation Price Calculator
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.95, maxWidth: 760, margin: "0 auto" }}>
            Estimate the liquidation price for any crypto perpetual or margin position. Long or
            short, isolated margin, any leverage. No fees, no funding — clean textbook math.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Liquidation Price Calculator" },
          ]}
        />

        {/* Calculator Card */}
        <div
          className="lpc-grid-2col"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 24,
            marginTop: 24,
            marginBottom: 40,
          }}
        >
          {/* Inputs */}
          <div
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              padding: 28,
            }}
          >
            <h2 style={{ fontSize: "1.3rem", marginBottom: 20, color: "var(--color-primary)" }}>Position Inputs</h2>

            {/* Side toggle */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", marginBottom: 8, color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Side
              </label>
              <div style={{ display: "flex", gap: 8 }}>
                {(["long", "short"] as const).map((s) => (
                  <button
                    key={s}
                    className="lpc-btn"
                    onClick={() => setSide(s)}
                    style={{
                      flex: 1,
                      padding: "10px 16px",
                      borderRadius: 6,
                      border: "1px solid var(--color-border)",
                      backgroundColor: side === s ? (s === "long" ? "var(--color-success)" : "var(--color-danger)") : "var(--color-bg)",
                      color: side === s ? "#fff" : "var(--color-text)",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      transition: "filter 0.15s ease",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Entry price */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", marginBottom: 8, color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Entry Price (USD)
              </label>
              <input
                type="number"
                step="0.01"
                value={entryPrice}
                onChange={(e) => setEntryPrice(Number(e.target.value))}
                className="lpc-input"
                style={inputStyle}
              />
            </div>

            {/* Notional */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", marginBottom: 8, color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Position Size / Notional (USD)
              </label>
              <input
                type="number"
                step="100"
                value={notionalUsd}
                onChange={(e) => setNotionalUsd(Number(e.target.value))}
                className="lpc-input"
                style={inputStyle}
              />
              <p style={{ marginTop: 6, color: "var(--color-text-secondary)", fontSize: "0.8rem" }}>
                Total contract value = leverage × margin you put up.
              </p>
            </div>

            {/* Leverage */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", marginBottom: 8, color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Leverage: <strong style={{ color: "var(--color-text)" }}>{leverage}×</strong>
              </label>
              <input
                type="range"
                min={1}
                max={125}
                step={1}
                value={leverage}
                onChange={(e) => setLeverage(Number(e.target.value))}
                style={{ width: "100%" }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                {PRESET_LEVERAGES.map((l) => (
                  <button
                    key={l}
                    className="lpc-btn"
                    onClick={() => setLeverage(l)}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 4,
                      border: "1px solid var(--color-border)",
                      backgroundColor: leverage === l ? "var(--color-primary-dark)" : "var(--color-bg)",
                      color: "var(--color-text)",
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      transition: "filter 0.15s ease",
                    }}
                  >
                    {l}×
                  </button>
                ))}
              </div>
            </div>

            {/* MMR */}
            <div style={{ marginBottom: 4 }}>
              <label style={{ display: "block", marginBottom: 8, color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Maintenance Margin Rate (%)
              </label>
              <input
                type="number"
                step="0.05"
                min={0}
                max={20}
                value={mmrPct}
                onChange={(e) => setMmrPct(Number(e.target.value))}
                className="lpc-input"
                style={inputStyle}
              />
              <p style={{ marginTop: 6, color: "var(--color-text-secondary)", fontSize: "0.8rem" }}>
                Default 0.5% matches BTC/ETH first-tier MMR on Binance, Bybit, OKX.
              </p>
            </div>
          </div>

          {/* Results */}
          <div
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              padding: 28,
            }}
          >
            <h2 style={{ fontSize: "1.3rem", marginBottom: 20, color: "var(--color-primary)" }}>Results</h2>

            <div
              style={{
                backgroundColor: "var(--color-bg)",
                border: `2px solid ${sideColor}`,
                borderRadius: 8,
                padding: 24,
                marginBottom: 16,
              }}
            >
              <div style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem", marginBottom: 6 }}>
                Liquidation Price ({side.toUpperCase()})
              </div>
              <div style={{ fontSize: "2.4rem", fontWeight: 700, color: sideColor, lineHeight: 1.1 }}>
                {fmtPrice(result.liqPrice)}
              </div>
              <div style={{ color: distanceColor, marginTop: 8, fontSize: "1rem", fontWeight: 600 }}>
                {fmtPct(result.distancePct)} from entry
              </div>
            </div>

            <ResultRow label="Position Quantity" value={`${result.positionQty.toFixed(6)} units`} />
            <ResultRow label="Notional Value" value={fmtUsd(notionalUsd)} />
            <ResultRow label="Initial Margin" value={fmtUsd(result.initialMarginUsd)} />
            <ResultRow label="Maintenance Margin" value={fmtUsd(result.maintenanceMarginUsd)} />
            <ResultRow label="Effective Leverage" value={`${result.effectiveLeverage}×`} />

            <div
              style={{
                marginTop: 20,
                padding: 14,
                backgroundColor: "var(--color-bg)",
                border: "1px dashed var(--color-border)",
                borderRadius: 6,
                color: "var(--color-text-secondary)",
                fontSize: "0.85rem",
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "var(--color-text)" }}>Note:</strong> Result excludes trading fees,
              funding payments, and tiered MMR. Real-world liquidation may trigger 0.05–0.30%
              earlier on most venues.
            </div>
          </div>
        </div>

        {/* Sensitivity Table */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 28,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.4rem", marginBottom: 16, color: "var(--color-primary)" }}>
            Liquidation by Leverage — Sensitivity Table
          </h2>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: 16, fontSize: "0.95rem" }}>
            Same entry ({fmtPrice(entryPrice)}), same MMR ({mmrPct}%), {side.toUpperCase()} side —
            varied across common leverage tiers.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)", color: "var(--color-text-secondary)" }}>
                  <th style={th}>Leverage</th>
                  <th style={th}>Liquidation Price</th>
                  <th style={th}>Distance</th>
                  <th style={th}>Initial Margin</th>
                </tr>
              </thead>
              <tbody>
                {sensitivity.map((row) => (
                  <tr key={row.leverage} style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <td style={td}>
                      <strong>{row.leverage}×</strong>
                    </td>
                    <td style={td}>{fmtPrice(row.liqPrice)}</td>
                    <td style={{ ...td, color: row.distancePct < 0 ? "var(--color-danger)" : "var(--color-success)" }}>
                      {fmtPct(row.distancePct)}
                    </td>
                    <td style={td}>{fmtUsd(row.initialMarginUsd)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Formula explainer */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 32,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.6rem", marginBottom: 16, color: "var(--color-primary)" }}>
            How the Liquidation Price Is Calculated
          </h2>
          <p style={{ lineHeight: 1.8, color: "var(--color-text)", marginBottom: 14 }}>
            For a linear (USDT-margined) perpetual on isolated margin, the liquidation price is the
            mark price at which your remaining equity equals the maintenance margin requirement.
            The simplified textbook formula — used by Binance, Bybit, and OKX in their public help
            docs — is:
          </p>
          <div
            style={{
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              padding: 22,
              borderRadius: 6,
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
              fontSize: "1rem",
              lineHeight: 1.9,
              marginBottom: 16,
            }}
          >
            <div style={{ color: "var(--color-success)" }}>
              LiqPrice<sub>long</sub> = Entry × (1 − 1/Leverage + MMR)
            </div>
            <div style={{ color: "var(--color-danger)" }}>
              LiqPrice<sub>short</sub> = Entry × (1 + 1/Leverage − MMR)
            </div>
          </div>
          <p style={{ lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
            <strong style={{ color: "var(--color-text)" }}>Reading the formula:</strong> liquidation distance
            scales as roughly <code>1/Leverage − MMR</code>. At 10× leverage with 0.5% MMR, a long
            liquidates ~9.5% below entry. At 50× the same long liquidates ~1.5% below entry.
            Doubling leverage roughly halves your liquidation buffer.
          </p>
        </div>

        {/* Worked example */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 32,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.6rem", marginBottom: 16, color: "var(--color-primary)" }}>Worked Example</h2>
          <p style={{ color: "var(--color-text)", lineHeight: 1.8, marginBottom: 12 }}>
            Open a 10× long on BTC at <strong>$67,450</strong>, $10,000 notional, 0.5% MMR:
          </p>
          <ul style={{ color: "var(--color-text-secondary)", lineHeight: 2, paddingLeft: 22 }}>
            <li>
              Initial margin = $10,000 / 10 = <strong style={{ color: "var(--color-text)" }}>$1,000</strong>
            </li>
            <li>
              Maintenance margin = $10,000 × 0.005 = <strong style={{ color: "var(--color-text)" }}>$50</strong>
            </li>
            <li>
              LiqPrice = $67,450 × (1 − 0.10 + 0.005) ={" "}
              <strong style={{ color: "var(--color-danger)" }}>$61,103.62</strong>
            </li>
            <li>
              Distance from entry = <strong style={{ color: "var(--color-danger)" }}>−9.41%</strong>
            </li>
          </ul>
          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, marginTop: 12 }}>
            BTC needs to drop just under 9.5% before this position is force-closed. Add fees and
            funding and the real liquidation will trigger a few basis points earlier.
          </p>
        </div>

        {/* Risk callout */}
        <div
          style={{
            backgroundColor: "color-mix(in srgb, var(--color-danger) 8%, transparent)",
            border: "1px solid var(--color-danger)",
            borderRadius: 8,
            padding: 24,
            marginBottom: 40,
          }}
        >
          <h3 style={{ fontSize: "1.2rem", marginBottom: 10, color: "var(--color-danger)" }}>
            Risk warning
          </h3>
          <p style={{ color: "var(--color-text)", lineHeight: 1.8 }}>
            Leveraged perpetual trading can result in the total loss of deposited margin within
            minutes. Liquidation engines use the mark price (not your exchange's last trade), and
            mark prices can wick on thin liquidity. Size positions so that a 2× to 3× safety
            buffer beyond the calculated liquidation price is comfortably affordable.
          </p>
        </div>

        {/* Related tools */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 28,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.4rem", marginBottom: 16, color: "var(--color-primary)" }}>Related tools</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <RelatedLink href="/tools/liquidation-heatmap" label="Liquidation Heatmap" desc="Cluster map of pending liquidations" />
            <RelatedLink href="/tools/perp-funding" label="Perp Funding Rates" desc="Funding rates across major venues" />
            <RelatedLink href="/tools/funding-rate-tracker" label="Funding Rate Tracker" desc="Cross-exchange funding rate panel" />
            <RelatedLink href="/tools/options-calculator" label="Options Calculator" desc="Greeks, IV and payoff diagrams" />
            <RelatedLink href="/tools/pnl-calculator" label="PnL Calculator" desc="Entry/exit P&L for spot and perp" />
            <RelatedLink href="/tools/crypto-liquidation-tracker" label="Liquidation Tracker" desc="Live liquidation feed across CEX" />
          </div>
        </div>

        {/* FAQ */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            padding: 28,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: "1.6rem", marginBottom: 16, color: "var(--color-primary)" }}>
            Frequently asked questions
          </h2>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                paddingTop: 18,
                paddingBottom: 18,
                borderBottom: i < FAQS.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <h3 style={{ fontSize: "1.05rem", marginBottom: 8, color: "var(--color-text)" }}>{faq.q}</h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.8 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ── Small Components ────────────────────────────────────────────────────────
function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid var(--color-border)",
        color: "var(--color-text)",
      }}
    >
      <span style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>{label}</span>
      <span style={{ fontWeight: 600 }}>{value}</span>
    </div>
  );
}

function RelatedLink({ href, label, desc }: { href: string; label: string; desc: string }) {
  return (
    <Link
      href={href}
      className="lpc-link"
      style={{
        display: "block",
        padding: 14,
        backgroundColor: "var(--color-bg)",
        border: "1px solid var(--color-border)",
        borderRadius: 6,
        textDecoration: "none",
        color: "var(--color-text)",
        transition: "border-color 0.15s ease",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 4, color: "var(--color-primary)" }}>{label}</div>
      <div style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem" }}>{desc}</div>
    </Link>
  );
}

// ── Inline Styles ───────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid var(--color-border)",
  backgroundColor: "var(--color-bg)",
  color: "var(--color-text)",
  fontSize: "0.95rem",
};

const th: React.CSSProperties = {
  padding: "12px 10px",
  textAlign: "left",
  fontWeight: 600,
  fontSize: "0.85rem",
  textTransform: "uppercase",
  letterSpacing: 0.5,
};

const td: React.CSSProperties = {
  padding: "12px 10px",
  fontSize: "0.95rem",
};
