'use client';

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { exchanges } from "@/data/exchanges";
import RelatedContent from '@/components/RelatedContent';

// ── Types ────────────────────────────────────────────────────────────────────
interface ExchangeSpec {
  name: string;
  slug: string;
  rating: number;
  description: string;
  pros: string[];
  cons: string[];
  fees: string;
  bestFor: string;
  affiliateUrl: string;
  featured?: boolean;
}

// ── Extended spec data for comparison ────────────────────────────────────────
const EXCHANGE_DETAILS: Record<string, {
  makerFee: string; takerFee: string; minDeposit: string; coins: string;
  leverage: string; marginTrading: boolean; futures: boolean; staking: boolean;
  nft: boolean; defi: boolean; p2p: boolean; copy: boolean;
  usRegulated: boolean; kyc: string; insurance: string;
  mobile: boolean; desktop: boolean; api: boolean;
  score_beginners: number; score_fees: number; score_security: number; score_variety: number;
  color: string; icon: string; founded: string; hq: string;
}> = {
  coinbase:   { makerFee:"0.00%", takerFee:"0.60%", minDeposit:"$2", coins:"250+", leverage:"3×", marginTrading:false, futures:false, staking:true, nft:true, defi:false, p2p:false, copy:false, usRegulated:true, kyc:"ID required", insurance:"FDIC up to $250K (fiat)", mobile:true, desktop:true, api:true, score_beginners:95, score_fees:60, score_security:92, score_variety:70, color:"#1652F0", icon:"🔵", founded:"2012", hq:"San Francisco, USA" },
  binance:    { makerFee:"0.10%", takerFee:"0.10%", minDeposit:"None", coins:"600+", leverage:"125×", marginTrading:true, futures:true, staking:true, nft:true, defi:true, p2p:true, copy:true, usRegulated:false, kyc:"Optional (limited features)", insurance:"SAFU fund ($1B)", mobile:true, desktop:true, api:true, score_beginners:60, score_fees:95, score_security:80, score_variety:99, color:"#F3BA2F", icon:"💛", founded:"2017", hq:"Cayman Islands" },
  kraken:     { makerFee:"0.16%", takerFee:"0.26%", minDeposit:"None", coins:"250+", leverage:"5×", marginTrading:true, futures:true, staking:true, nft:false, defi:false, p2p:false, copy:false, usRegulated:true, kyc:"ID required", insurance:"Proof of Reserves", mobile:true, desktop:true, api:true, score_beginners:65, score_fees:78, score_security:95, score_variety:72, color:"#5741D9", icon:"🦑", founded:"2011", hq:"San Francisco, USA" },
  bybit:      { makerFee:"0.10%", takerFee:"0.10%", minDeposit:"None", coins:"300+", leverage:"100×", marginTrading:true, futures:true, staking:true, nft:true, defi:false, p2p:true, copy:true, usRegulated:false, kyc:"Optional", insurance:"Protection Fund", mobile:true, desktop:true, api:true, score_beginners:55, score_fees:88, score_security:78, score_variety:80, color:"#F7A600", icon:"🅱️", founded:"2018", hq:"Dubai, UAE" },
  kucoin:     { makerFee:"0.10%", takerFee:"0.10%", minDeposit:"None", coins:"700+", leverage:"100×", marginTrading:true, futures:true, staking:true, nft:false, defi:true, p2p:true, copy:false, usRegulated:false, kyc:"Optional", insurance:"Limited", mobile:true, desktop:true, api:true, score_beginners:50, score_fees:85, score_security:68, score_variety:98, color:"#23AF91", icon:"🟢", founded:"2017", hq:"Seychelles" },
  gemini:     { makerFee:"0.20%", takerFee:"0.40%", minDeposit:"None", coins:"80+", leverage:"None", marginTrading:false, futures:false, staking:true, nft:true, defi:false, p2p:false, copy:false, usRegulated:true, kyc:"ID required", insurance:"FDIC + SOC 2 Type II", mobile:true, desktop:true, api:true, score_beginners:80, score_fees:55, score_security:98, score_variety:45, color:"#00DCFA", icon:"♊", founded:"2014", hq:"New York, USA" },
};

const ALL_EXCHANGES = exchanges.filter(e => EXCHANGE_DETAILS[e.slug]) as ExchangeSpec[];

// ── ScoreBar ─────────────────────────────────────────────────────────────────
function ScoreBar({ score, color }: { score: number; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ flex: 1, height: 6, background: "#1c2330", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${score}%`, background: color, borderRadius: 3, transition: "width 0.5s" }} />
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, color, width: 28 }}>{score}</span>
    </div>
  );
}

// ── Check / Cross ─────────────────────────────────────────────────────────────
function Check({ val }: { val: boolean | string }) {
  if (typeof val === "string") return <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{val}</span>;
  return val
    ? <span style={{ color: "#22c55e", fontSize: 16 }}>✓</span>
    : <span style={{ color: "#f85149", fontSize: 16 }}>✗</span>;
}

// ── Stars ─────────────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= Math.round(rating) ? "#F3BA2F" : "#30363d", fontSize: 14 }}>★</span>
      ))}
      <span style={{ marginLeft: 4, fontWeight: 700, color: "var(--color-text)", fontSize: 13 }}>{rating}</span>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ExchangeComparePage() {
  const [selected, setSelected] = useState<string[]>(["coinbase", "binance", "kraken"]);
  const [showPicker, setShowPicker] = useState(false);
  const [category, setCategory] = useState<"overview"|"fees"|"features"|"security"|"scores">("overview");

  const compared = useMemo(() =>
    ALL_EXCHANGES.filter(e => selected.includes(e.slug)),
    [selected]
  );

  const toggle = (slug: string) => {
    if (selected.includes(slug)) {
      if (selected.length > 2) setSelected(s => s.filter(x => x !== slug));
    } else {
      if (selected.length < 4) setSelected(s => [...s, slug]);
    }
  };

  const TABS = ["overview", "fees", "features", "security", "scores"] as const;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Exchanges", href: "/exchanges" }, { label: "Compare", href: "/exchanges/compare" }]} />

        {/* ── Header ── */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: "var(--color-text)", marginBottom: 6 }}>
            ⚖️ Exchange Comparison Builder
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 14 }}>
            Compare up to 4 crypto exchanges side-by-side across fees, features, security, and more. Find the best exchange for your needs.
          </p>
        </div>

        {/* ── Exchange Selector ── */}
        <div style={{ background: "var(--color-surface)", borderRadius: 14, border: "1px solid var(--color-border)", padding: 20, marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <span style={{ fontWeight: 700, color: "var(--color-text)", fontSize: 14 }}>
              Comparing {selected.length} exchanges · Select 2–4
            </span>
            <button
              onClick={() => setShowPicker(v => !v)}
              style={{ padding: "6px 14px", borderRadius: 8, border: "1px solid var(--color-border)", background: "transparent", color: "var(--color-text-secondary)", fontSize: 13, cursor: "pointer", fontWeight: 600 }}
            >
              {showPicker ? "▲ Hide" : "▼ Change Exchanges"}
            </button>
          </div>

          {showPicker && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8, paddingTop: 12, borderTop: "1px solid var(--color-border)" }}>
              {ALL_EXCHANGES.map(e => {
                const det = EXCHANGE_DETAILS[e.slug];
                const active = selected.includes(e.slug);
                return (
                  <button key={e.slug} onClick={() => toggle(e.slug)} style={{
                    padding: "10px 12px", borderRadius: 10, cursor: "pointer",
                    border: `2px solid ${active ? det.color : "var(--color-border)"}`,
                    background: active ? `${det.color}15` : "transparent",
                    color: "var(--color-text)", textAlign: "left",
                    transition: "all 0.2s",
                  }}>
                    <div style={{ fontSize: 18, marginBottom: 4 }}>{det.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{e.name}</div>
                    <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>★ {e.rating}</div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Selected chips */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {compared.map(e => {
              const det = EXCHANGE_DETAILS[e.slug];
              return (
                <div key={e.slug} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8, background: `${det.color}20`, border: `1px solid ${det.color}50`, color: "var(--color-text)", fontSize: 13, fontWeight: 600 }}>
                  <span>{det.icon}</span>
                  <span>{e.name}</span>
                  {selected.length > 2 && (
                    <button onClick={() => toggle(e.slug)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-secondary)", fontSize: 12, padding: 0, marginLeft: 2 }}>✕</button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Category Tabs ── */}
        <div style={{ display: "flex", gap: 4, marginBottom: 20, borderBottom: "1px solid var(--color-border)", paddingBottom: 0 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setCategory(t)} style={{
              padding: "8px 16px", fontWeight: 600, fontSize: 13, cursor: "pointer",
              border: "none", background: "transparent",
              color: category === t ? "#6366f1" : "var(--color-text-secondary)",
              borderBottom: category === t ? "2px solid #6366f1" : "2px solid transparent",
              marginBottom: -1, textTransform: "capitalize",
            }}>
              {{overview:"📊 Overview", fees:"💰 Fees", features:"⚡ Features", security:"🔒 Security", scores:"🏆 Scores"}[t]}
            </button>
          ))}
        </div>

        {/* ── Column Headers ── */}
        <div style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12, marginBottom: 8 }}>
          <div />
          {compared.map(e => {
            const det = EXCHANGE_DETAILS[e.slug];
            return (
              <div key={e.slug} style={{ background: "var(--color-surface)", borderRadius: 12, border: `2px solid ${det.color}40`, padding: "16px 12px", textAlign: "center", borderTop: `4px solid ${det.color}` }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{det.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: "var(--color-text)", marginBottom: 4 }}>{e.name}</div>
                <Stars rating={e.rating} />
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 4 }}>{det.hq}</div>
                <Link href={e.affiliateUrl}
                  style={{
                    display: "block", marginTop: 10, padding: "7px 12px",
                    background: `${det.color}20`, border: `1px solid ${det.color}50`,
                    borderRadius: 8, color: det.color, fontSize: 12, fontWeight: 700,
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                >
                  Visit Exchange →
                </Link>
              </div>
            );
          })}
        </div>

        {/* ── OVERVIEW ── */}
        {category === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "Best For", key: "bestFor" as const },
              { label: "Founded", key: "founded" as const },
              { label: "Headquarters", key: "hq" as const },
              { label: "Available Coins", key: "coins" as const },
              { label: "Max Leverage", key: "leverage" as const },
              { label: "Min. Deposit", key: "minDeposit" as const },
              { label: "KYC", key: "kyc" as const },
              { label: "US Regulated", key: "usRegulated" as const },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12 }}>
                <div style={{ padding: "12px 0", display: "flex", alignItems: "center", fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>{row.label}</div>
                {compared.map(e => {
                  const det = EXCHANGE_DETAILS[e.slug];
                  const val = row.key === "bestFor" ? e.bestFor : (det as any)[row.key];
                  return (
                    <div key={e.slug} style={{ background: i % 2 === 0 ? "var(--color-surface)" : "transparent", borderRadius: 8, padding: "12px 14px", fontSize: 13, color: "var(--color-text)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                      {typeof val === "boolean" ? <Check val={val} /> : val}
                    </div>
                  );
                })}
              </div>
            ))}
            {/* Description row */}
            <div style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12, marginTop: 8 }}>
              <div style={{ padding: "12px 0", fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)", display: "flex", alignItems: "flex-start", paddingTop: 14 }}>Summary</div>
              {compared.map(e => (
                <div key={e.slug} style={{ background: "var(--color-surface)", borderRadius: 8, padding: "12px 14px", fontSize: 12, color: "var(--color-text-secondary)", border: "1px solid var(--color-border)", lineHeight: 1.6 }}>
                  {e.description.slice(0, 160)}…
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FEES ── */}
        {category === "fees" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "Maker Fee", key: "makerFee" as const },
              { label: "Taker Fee", key: "takerFee" as const },
              { label: "Min. Deposit", key: "minDeposit" as const },
              { label: "Full Fee Schedule", key: "fees" as const, fromExchange: true },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12 }}>
                <div style={{ padding: "12px 0", display: "flex", alignItems: "center", fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>{row.label}</div>
                {compared.map(e => {
                  const det = EXCHANGE_DETAILS[e.slug];
                  const val = (row as any).fromExchange ? e.fees : (det as any)[row.key];
                  return (
                    <div key={e.slug} style={{ background: i % 2 === 0 ? "var(--color-surface)" : "transparent", borderRadius: 8, padding: "12px 14px", fontSize: 13, color: "var(--color-text)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontWeight: row.key !== "fees" ? 700 : 400 }}>
                      {val}
                    </div>
                  );
                })}
              </div>
            ))}
            {/* Fee score bars */}
            <div style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12, marginTop: 8 }}>
              <div style={{ padding: "12px 0", fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>Fee Score</div>
              {compared.map(e => {
                const det = EXCHANGE_DETAILS[e.slug];
                return (
                  <div key={e.slug} style={{ background: "var(--color-surface)", borderRadius: 8, padding: "12px 14px", border: "1px solid var(--color-border)" }}>
                    <ScoreBar score={det.score_fees} color={det.color} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── FEATURES ── */}
        {category === "features" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {([
              ["Margin Trading", "marginTrading"],
              ["Futures / Derivatives", "futures"],
              ["Staking", "staking"],
              ["NFT Marketplace", "nft"],
              ["DeFi Integration", "defi"],
              ["P2P Trading", "p2p"],
              ["Copy Trading", "copy"],
              ["Mobile App", "mobile"],
              ["Desktop App", "desktop"],
              ["API Access", "api"],
            ] as [string, string][]).map(([label, key], i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12 }}>
                <div style={{ padding: "12px 0", display: "flex", alignItems: "center", fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>{label}</div>
                {compared.map(e => {
                  const det = EXCHANGE_DETAILS[e.slug];
                  return (
                    <div key={e.slug} style={{ background: i % 2 === 0 ? "var(--color-surface)" : "transparent", borderRadius: 8, padding: "12px 14px", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Check val={(det as any)[key]} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {/* ── SECURITY ── */}
        {category === "security" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "US Regulated", key: "usRegulated" as const },
              { label: "KYC Requirements", key: "kyc" as const },
              { label: "Insurance / Protection", key: "insurance" as const },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12 }}>
                <div style={{ padding: "12px 0", display: "flex", alignItems: "center", fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>{row.label}</div>
                {compared.map(e => {
                  const det = EXCHANGE_DETAILS[e.slug];
                  const val = (det as any)[row.key];
                  return (
                    <div key={e.slug} style={{ background: i % 2 === 0 ? "var(--color-surface)" : "transparent", borderRadius: 8, padding: "12px 14px", fontSize: 13, color: "var(--color-text)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                      {typeof val === "boolean" ? <Check val={val} /> : val}
                    </div>
                  );
                })}
              </div>
            ))}
            {/* Security score */}
            <div style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12, marginTop: 4 }}>
              <div style={{ padding: "12px 0", fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>Security Score</div>
              {compared.map(e => {
                const det = EXCHANGE_DETAILS[e.slug];
                return (
                  <div key={e.slug} style={{ background: "var(--color-surface)", borderRadius: 8, padding: "12px 14px", border: "1px solid var(--color-border)" }}>
                    <ScoreBar score={det.score_security} color={det.color} />
                  </div>
                );
              })}
            </div>
            {/* Pros/Cons */}
            <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)", paddingTop: 8 }}>Pros</div>
              {compared.map(e => (
                <div key={e.slug} style={{ background: "var(--color-surface)", borderRadius: 8, padding: "12px 14px", border: "1px solid var(--color-border)" }}>
                  {e.pros.slice(0, 3).map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 6, fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                      <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span>{p}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)", paddingTop: 8 }}>Cons</div>
              {compared.map(e => (
                <div key={e.slug} style={{ background: "var(--color-surface)", borderRadius: 8, padding: "12px 14px", border: "1px solid var(--color-border)" }}>
                  {e.cons.slice(0, 3).map((c, i) => (
                    <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 6, fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                      <span style={{ color: "#f85149", flexShrink: 0 }}>✗</span>{c}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SCORES ── */}
        {category === "scores" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "🟢 Beginner Friendliness", key: "score_beginners" },
              { label: "💰 Fee Competitiveness", key: "score_fees" },
              { label: "🔒 Security Rating", key: "score_security" },
              { label: "🌐 Coin Variety", key: "score_variety" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12 }}>
                <div style={{ padding: "12px 0", display: "flex", alignItems: "center", fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>{row.label}</div>
                {compared.map(e => {
                  const det = EXCHANGE_DETAILS[e.slug];
                  return (
                    <div key={e.slug} style={{ background: "var(--color-surface)", borderRadius: 8, padding: "12px 14px", border: "1px solid var(--color-border)" }}>
                      <ScoreBar score={(det as any)[row.key]} color={det.color} />
                    </div>
                  );
                })}
              </div>
            ))}
            {/* Overall score */}
            <div style={{ display: "grid", gridTemplateColumns: `200px repeat(${compared.length}, 1fr)`, gap: 12, marginTop: 8 }}>
              <div style={{ padding: "12px 0", fontSize: 13, fontWeight: 800, color: "var(--color-text)" }}>🏆 Overall Score</div>
              {compared.map(e => {
                const det = EXCHANGE_DETAILS[e.slug];
                const overall = Math.round((det.score_beginners + det.score_fees + det.score_security + det.score_variety) / 4);
                return (
                  <div key={e.slug} style={{ background: `${det.color}15`, borderRadius: 10, padding: "16px 14px", border: `2px solid ${det.color}40`, textAlign: "center" }}>
                    <div style={{ fontSize: 32, fontWeight: 900, color: det.color }}>{overall}</div>
                    <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 8 }}>/ 100</div>
                    <Link href={e.affiliateUrl} style={{ display: "block", padding: "8px 0", background: det.color, color: "#fff", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                      Get Started →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Bottom CTA ── */}
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {compared.map(e => {
            const det = EXCHANGE_DETAILS[e.slug];
            const overall = Math.round((det.score_beginners + det.score_fees + det.score_security + det.score_variety) / 4);
            return (
              <div key={e.slug} style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20, borderTop: `4px solid ${det.color}` }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 24 }}>{det.icon}</span>
                  <div>
                    <div style={{ fontWeight: 800, color: "var(--color-text)" }}>{e.name}</div>
                    <Stars rating={e.rating} />
                  </div>
                  <div style={{ marginLeft: "auto", textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: det.color }}>{overall}</div>
                    <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>Score</div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 12 }}><strong>Best for:</strong> {e.bestFor}</div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 14 }}><strong>Fees:</strong> {e.fees}</div>
                <Link href={e.affiliateUrl}
                  style={{ display: "block", padding: "10px 0", background: `linear-gradient(135deg, ${det.color}, ${det.color}cc)`, color: "#fff", borderRadius: 10, textAlign: "center", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
                >
                  Open Account at {e.name}
                </Link>
              </div>
            );
          })}
        </div>

        {/* ── Disclosure ── */}
        <div style={{ marginTop: 40, padding: 16, background: "var(--color-surface)", borderRadius: 10, border: "1px solid var(--color-border)", fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          <strong>⚠️ Affiliate Disclosure:</strong> Some links on this page are affiliate links. We may earn a commission when you sign up through these links at no extra cost to you. Our editorial ratings are independent of affiliate relationships. Always do your own research before choosing an exchange.
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/exchanges/compare" />
    </div>
  );
}
