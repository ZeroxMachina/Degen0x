"use client";

import { useState, useMemo } from "react";

// ── Interfaces ────────────────────────────────────────────────────────────────
interface LockOption {
  label: string;
  weeks: number;
  multiplier: number; // fraction of max (4 yr = 1.0)
}

interface CalcResult {
  veAero: number;
  shareOfTotal: number; // as percentage
  weeklyFees: number;
  weeklyBribes: number;
  weeklyTotal: number;
  annualTotal: number;
  annualYield: number; // as percentage of AERO notional
}

// ── Constants ─────────────────────────────────────────────────────────────────
const LOCK_OPTIONS: LockOption[] = [
  { label: "1 Month",  weeks: 4,   multiplier: 4   / 208 },
  { label: "3 Months", weeks: 13,  multiplier: 13  / 208 },
  { label: "6 Months", weeks: 26,  multiplier: 26  / 208 },
  { label: "1 Year",   weeks: 52,  multiplier: 52  / 208 },
  { label: "2 Years",  weeks: 104, multiplier: 104 / 208 },
  { label: "4 Years",  weeks: 208, multiplier: 1.0 },
];

// Protocol assumptions based on March 2026 data (DefiLlama / Aerodrome Analytics)
const AERO_USD_PRICE       = 1.45;   // approximate AERO price USD
const WEEKLY_FEES_USD      = 3_850_000; // ~$550K/day × 7
const WEEKLY_BRIBES_USD    = 1_200_000; // estimated bribe market (conservative)
const TOTAL_VEAREO_SUPPLY  = 380_000_000; // estimated circulating veAERO

// ── Helpers ───────────────────────────────────────────────────────────────────
function fmtUSD(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000)     return `$${(n / 1_000).toFixed(2)}K`;
  return `$${n.toFixed(2)}`;
}

function fmtPct(n: number, decimals = 2): string {
  return `${n.toFixed(decimals)}%`;
}

function fmtNum(n: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function AerodromeVeCalculator() {
  const [aeroAmount, setAeroAmount] = useState<string>("10000");
  const [selectedLockIdx, setSelectedLockIdx] = useState<number>(3); // default 1 year

  const result = useMemo<CalcResult | null>(() => {
    const amount = parseFloat(aeroAmount);
    if (isNaN(amount) || amount <= 0) return null;

    const lock = LOCK_OPTIONS[selectedLockIdx];
    const veAero = amount * lock.multiplier;
    const shareOfTotal = (veAero / TOTAL_VEAREO_SUPPLY) * 100;

    const weeklyFees    = (veAero / TOTAL_VEAREO_SUPPLY) * WEEKLY_FEES_USD;
    const weeklyBribes  = (veAero / TOTAL_VEAREO_SUPPLY) * WEEKLY_BRIBES_USD;
    const weeklyTotal   = weeklyFees + weeklyBribes;
    const annualTotal   = weeklyTotal * 52;
    const aeroNotional  = amount * AERO_USD_PRICE;
    const annualYield   = aeroNotional > 0 ? (annualTotal / aeroNotional) * 100 : 0;

    return { veAero, shareOfTotal, weeklyFees, weeklyBribes, weeklyTotal, annualTotal, annualYield };
  }, [aeroAmount, selectedLockIdx]);

  const selectedLock = LOCK_OPTIONS[selectedLockIdx];

  return (
    <div
      role="region"
      aria-label="veAERO Yield Estimator Calculator"
      style={{
      background: "#161b22",
      border: "1px solid #30363d",
      borderRadius: 16,
      padding: 24,
      marginTop: 32,
      marginBottom: 8,
    }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ color: "#e6edf3", fontSize: 18, fontWeight: 700, margin: 0 }}>
          ⚡ veAERO Yield Estimator
        </h3>
        <p style={{ color: "#8b949e", fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>
          Estimate your weekly fee + bribe income based on AERO lock amount and duration.
          Uses current March 2026 protocol data — actual returns will vary.
        </p>
      </div>

      {/* Inputs */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16,
        marginBottom: 24,
      }}>
        {/* AERO Amount */}
        <div>
          <label style={{ display: "block", color: "#8b949e", fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            AERO to Lock
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="number"
              min="1"
              step="100"
              value={aeroAmount}
              onChange={(e) => setAeroAmount(e.target.value)}
              aria-label="Amount of AERO tokens to lock"
              style={{
                width: "100%",
                background: "#0d1117",
                border: "1px solid #30363d",
                borderRadius: 8,
                padding: "12px 60px 12px 14px",
                color: "#e6edf3",
                fontSize: 15,
                fontWeight: 600,
                outline: "none",
                boxSizing: "border-box",
                minHeight: 44,
                transition: "border-color 0.15s",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#6366f1"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#30363d"; }}
            />
            <span style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#58a6ff",
              fontSize: 12,
              fontWeight: 700,
            }}>AERO</span>
          </div>
          {parseFloat(aeroAmount) > 0 && (
            <p style={{ color: "#6e7681", fontSize: 12, marginTop: 4 }}>
              ≈ {fmtUSD(parseFloat(aeroAmount) * AERO_USD_PRICE)} at current price
            </p>
          )}
        </div>

        {/* Lock Duration */}
        <div>
          <label style={{ display: "block", color: "#8b949e", fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Lock Duration
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
            {LOCK_OPTIONS.map((opt, idx) => (
              <button
                key={opt.label}
                onClick={() => setSelectedLockIdx(idx)}
                aria-label={`Lock for ${opt.label}`}
                aria-pressed={selectedLockIdx === idx}
                style={{
                  background: selectedLockIdx === idx ? "#1f6feb" : "#0d1117",
                  border: `1px solid ${selectedLockIdx === idx ? "#388bfd" : "#30363d"}`,
                  borderRadius: 6,
                  padding: "10px 4px",
                  minHeight: 44,
                  color: selectedLockIdx === idx ? "#e6edf3" : "#8b949e",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.15s",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {result ? (
        <>
          {/* veAERO Power */}
          <div style={{
            background: "#0d1117",
            border: "1px solid #30363d",
            borderRadius: 10,
            padding: 16,
            marginBottom: 16,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
              <div>
                <p style={{ color: "#8b949e", fontSize: 12, margin: 0, marginBottom: 4 }}>veAERO Voting Power</p>
                <p style={{ color: "#58a6ff", fontSize: 24, fontWeight: 800, margin: 0 }}>
                  {fmtNum(result.veAero)}
                </p>
                <p style={{ color: "#6e7681", fontSize: 12, margin: 0, marginTop: 2 }}>
                  = {fmtPct(result.shareOfTotal, 4)} of total protocol votes
                </p>
              </div>
              <div style={{
                background: "#1f6feb20",
                border: "1px solid #1f6feb40",
                borderRadius: 8,
                padding: "8px 14px",
                textAlign: "right",
              }}>
                <p style={{ color: "#8b949e", fontSize: 11, margin: 0 }}>Lock Multiplier</p>
                <p style={{ color: "#58a6ff", fontSize: 18, fontWeight: 700, margin: 0 }}>
                  {(selectedLock.multiplier * 100).toFixed(1)}%
                </p>
                <p style={{ color: "#6e7681", fontSize: 11, margin: 0 }}>of 4yr max</p>
              </div>
            </div>
          </div>

          {/* Income Breakdown */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 12,
            marginBottom: 16,
          }}>
            <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 10, padding: 14 }}>
              <p style={{ color: "#8b949e", fontSize: 11, margin: 0, marginBottom: 4 }}>Est. Weekly Fees</p>
              <p style={{ color: "#3fb950", fontSize: 18, fontWeight: 700, margin: 0 }}>{fmtUSD(result.weeklyFees)}</p>
            </div>
            <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 10, padding: 14 }}>
              <p style={{ color: "#8b949e", fontSize: 11, margin: 0, marginBottom: 4 }}>Est. Weekly Bribes</p>
              <p style={{ color: "#a371f7", fontSize: 18, fontWeight: 700, margin: 0 }}>{fmtUSD(result.weeklyBribes)}</p>
            </div>
            <div style={{ background: "#0d1117", border: "1px solid #3fb950", borderRadius: 10, padding: 14 }}>
              <p style={{ color: "#8b949e", fontSize: 11, margin: 0, marginBottom: 4 }}>Est. Weekly Total</p>
              <p style={{ color: "#3fb950", fontSize: 18, fontWeight: 700, margin: 0 }}>{fmtUSD(result.weeklyTotal)}</p>
            </div>
          </div>

          {/* Annual summary */}
          <div style={{
            background: "linear-gradient(135deg, #1a7f3720, #1f6feb20)",
            border: "1px solid #1a7f3740",
            borderRadius: 10,
            padding: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}>
            <div>
              <p style={{ color: "#8b949e", fontSize: 12, margin: 0, marginBottom: 2 }}>
                Estimated Annual Income ({selectedLock.label} lock)
              </p>
              <p style={{ color: "#3fb950", fontSize: 26, fontWeight: 800, margin: 0 }}>
                {fmtUSD(result.annualTotal)}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ color: "#8b949e", fontSize: 12, margin: 0, marginBottom: 2 }}>Est. Annual Yield</p>
              <p style={{ color: "#3fb950", fontSize: 26, fontWeight: 800, margin: 0 }}>
                {fmtPct(result.annualYield, 1)}
              </p>
              <p style={{ color: "#6e7681", fontSize: 11, margin: 0 }}>on AERO notional</p>
            </div>
          </div>

          {/* Lock duration comparison hint */}
          {selectedLockIdx < 5 && (
            <div style={{ marginTop: 12 }}>
              <p style={{ color: "#6e7681", fontSize: 12 }}>
                💡 Locking for{" "}
                <strong style={{ color: "#e6edf3" }}>
                  {LOCK_OPTIONS[5].label}
                </strong>{" "}
                instead would give{" "}
                <strong style={{ color: "#58a6ff" }}>
                  {fmtNum(parseFloat(aeroAmount || "0") * 1.0)} veAERO
                </strong>{" "}
                ({(1 / selectedLock.multiplier).toFixed(1)}× more voting power)
                and boost your annual yield to an estimated{" "}
                <strong style={{ color: "#3fb950" }}>
                  {fmtPct(
                    ((parseFloat(aeroAmount || "0") / TOTAL_VEAREO_SUPPLY) *
                      (WEEKLY_FEES_USD + WEEKLY_BRIBES_USD) *
                      52) /
                      (parseFloat(aeroAmount || "0") * AERO_USD_PRICE) *
                      100,
                    1
                  )}
                </strong>.
              </p>
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: "center", color: "#8b949e", padding: "24px 0" }}>
          Enter a valid AERO amount to see your estimated yield.
        </div>
      )}

      {/* Disclaimer */}
      <div style={{ marginTop: 16, padding: "10px 14px", background: "#0d1117", borderRadius: 8, borderLeft: "3px solid #f0883e" }}>
        <p style={{ color: "#8b949e", fontSize: 11, margin: 0, lineHeight: 1.6 }}>
          <strong style={{ color: "#f0883e" }}>⚠️ Estimates only.</strong> Calculations based on
          ~$3.85M weekly fee distribution and ~$1.2M bribe market as of March 2026, with ~380M
          total veAERO in circulation. AERO price assumed at $1.45. Actual yields depend on
          AERO emissions, protocol volume, bribe competition, and your vote choices. Not financial advice.
        </p>
      </div>
    </div>
  );
}
