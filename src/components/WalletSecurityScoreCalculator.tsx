'use client';

import { useState, useMemo } from "react";

// ── Interfaces ──────────────────────────────────────────
interface SecurityCheck {
  id: string;
  label: string;
  description: string;
  weight: number;
  category: 'storage' | 'behavior' | 'tools' | 'recovery';
}

// ── Constants ───────────────────────────────────────────
const SECURITY_CHECKS: SecurityCheck[] = [
  // Storage (30 points)
  { id: 'hardware', label: 'Use a hardware wallet for long-term storage', description: 'Ledger, Trezor, or similar cold storage device', weight: 15, category: 'storage' },
  { id: 'multiwallet', label: 'Separate wallets for different purposes', description: 'Hot wallet for DeFi, cold for savings, burner for mints', weight: 10, category: 'storage' },
  { id: 'seedoffline', label: 'Seed phrase stored offline & backed up', description: 'Metal plate or paper in secure location — never digital', weight: 5, category: 'storage' },

  // Behavior (30 points)
  { id: 'approvals', label: 'Regularly revoke unused token approvals', description: 'Use Revoke.cash or MetaMask Portfolio monthly', weight: 10, category: 'behavior' },
  { id: 'verify', label: 'Verify URLs and contract addresses before signing', description: 'Bookmark trusted dApps, check addresses on Etherscan', weight: 10, category: 'behavior' },
  { id: 'noseed', label: 'Never share seed phrase with anyone or any site', description: 'No legitimate service will ever ask for your seed phrase', weight: 5, category: 'behavior' },
  { id: 'limapproval', label: 'Set limited (not unlimited) token approvals', description: 'Only approve the exact amount needed for each transaction', weight: 5, category: 'behavior' },

  // Tools (25 points)
  { id: 'txsim', label: 'Use a wallet with transaction simulation', description: 'Rabby, Phantom, or Blowfish show what will happen before you sign', weight: 10, category: 'tools' },
  { id: 'phishing', label: 'Use a phishing detection extension', description: 'Scam Sniffer, Pocket Universe, or similar browser extension', weight: 8, category: 'tools' },
  { id: 'vpn', label: 'Use a VPN when accessing DeFi protocols', description: 'Encrypt your connection to prevent MITM attacks', weight: 7, category: 'tools' },

  // Recovery (15 points)
  { id: 'backup', label: 'Have a recovery plan if wallet is compromised', description: 'Know the emergency steps: revoke, transfer, report', weight: 8, category: 'recovery' },
  { id: 'emergency', label: 'Keep an emergency wallet pre-funded with gas', description: 'Ready to rescue assets if primary wallet is compromised', weight: 7, category: 'recovery' },
];

const MAX_SCORE = SECURITY_CHECKS.reduce((sum, c) => sum + c.weight, 0);

const CATEGORY_LABELS: Record<string, string> = {
  storage: 'Storage & Keys',
  behavior: 'Security Habits',
  tools: 'Protection Tools',
  recovery: 'Recovery Readiness',
};

const CATEGORY_ICONS: Record<string, string> = {
  storage: '🔐',
  behavior: '🛡️',
  tools: '🔧',
  recovery: '🚨',
};

function getGrade(score: number, max: number): { label: string; color: string; bg: string; message: string } {
  const pct = (score / max) * 100;
  if (pct >= 90) return { label: 'A+', color: '#22c55e', bg: '#22c55e20', message: 'Excellent! Your wallet security is top-tier. Keep it up.' };
  if (pct >= 75) return { label: 'B+', color: '#3fb950', bg: '#3fb95020', message: 'Strong security posture. A few more steps would make you nearly bulletproof.' };
  if (pct >= 60) return { label: 'C+', color: '#d29922', bg: '#d2992220', message: 'Decent baseline, but you have meaningful gaps. Address the unchecked items.' };
  if (pct >= 40) return { label: 'D', color: '#f59e0b', bg: '#f59e0b20', message: 'Below average. You are exposed to common attack vectors. Take action now.' };
  return { label: 'F', color: '#f85149', bg: '#f8514920', message: 'Critical risk! Your wallet security needs immediate attention.' };
}

// ── Component ───────────────────────────────────────────
export default function WalletSecurityScoreCalculator() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const score = useMemo(
    () => SECURITY_CHECKS.filter(c => checked.has(c.id)).reduce((s, c) => s + c.weight, 0),
    [checked]
  );

  const grade = useMemo(() => getGrade(score, MAX_SCORE), [score]);

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const categories = ['storage', 'behavior', 'tools', 'recovery'] as const;

  return (
    <div role="region" aria-label="Wallet Security Score Calculator" style={{ marginBottom: 32 }}>
      {/* Responsive styles for score sizing and touch targets */}
      <style>{`
        .wss-score-number { font-size: 56px; }
        .wss-score-card { padding: 24px; }
        .wss-category-card { padding: 20px; }
        .wss-checkbox-row { padding: 10px 0; min-height: 44px; }
        .wss-checkbox { width: 20px; height: 20px; min-width: 20px; min-height: 20px; }
        .wss-checkbox:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; border-radius: 3px; }
        @media (max-width: 480px) {
          .wss-score-number { font-size: 40px !important; }
          .wss-score-card { padding: 16px !important; }
          .wss-category-card { padding: 14px !important; }
        }
      `}</style>
      {/* Score Display */}
      <div className="wss-score-card" style={{
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: 12,
        padding: 24,
        marginBottom: 20,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 13, color: '#8b949e', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Your Wallet Security Score
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div className="wss-score-number" style={{
            fontSize: 56,
            fontWeight: 900,
            color: grade.color,
            lineHeight: 1,
          }} aria-live="polite" aria-atomic="true">
            {score}
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: grade.bg,
              color: grade.color,
              border: `1px solid ${grade.color}60`,
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
            }}>
              Grade: {grade.label}
            </div>
            <div style={{ fontSize: 13, color: '#8b949e', marginTop: 4 }}>out of {MAX_SCORE} points</div>
          </div>
        </div>
        {/* Progress bar */}
        <div style={{
          marginTop: 16,
          height: 8,
          background: '#21262d',
          borderRadius: 4,
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${(score / MAX_SCORE) * 100}%`,
            background: `linear-gradient(90deg, ${grade.color}, ${grade.color}cc)`,
            borderRadius: 4,
            transition: 'width 0.3s ease, background 0.3s ease',
          }} />
        </div>
        <p style={{ fontSize: 14, color: '#c9d1d9', marginTop: 12, lineHeight: 1.6 }}>
          {grade.message}
        </p>
      </div>

      {/* Checklist by Category */}
      {categories.map(cat => {
        const items = SECURITY_CHECKS.filter(c => c.category === cat);
        const catScore = items.filter(c => checked.has(c.id)).reduce((s, c) => s + c.weight, 0);
        const catMax = items.reduce((s, c) => s + c.weight, 0);

        return (
          <div key={cat} className="wss-category-card" style={{
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: 12,
            padding: 20,
            marginBottom: 12,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#e6edf3', margin: 0 }}>
                {CATEGORY_ICONS[cat]} {CATEGORY_LABELS[cat]}
              </h3>
              <span style={{
                fontSize: 12,
                fontWeight: 600,
                color: catScore === catMax ? '#22c55e' : '#8b949e',
                padding: '3px 8px',
                background: catScore === catMax ? '#22c55e15' : '#21262d',
                borderRadius: 6,
              }}>
                {catScore}/{catMax} pts
              </span>
            </div>

            {items.map(item => (
              <label
                key={item.id}
                className="wss-checkbox-row"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '10px 0',
                  minHeight: 44,
                  borderTop: '1px solid #21262d',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                <input
                  type="checkbox"
                  className="wss-checkbox"
                  checked={checked.has(item.id)}
                  onChange={() => toggle(item.id)}
                  aria-label={`${item.label} (+${item.weight} points)`}
                  style={{
                    marginTop: 3,
                    width: 20,
                    height: 20,
                    minWidth: 20,
                    minHeight: 20,
                    accentColor: '#6366f1',
                    flexShrink: 0,
                    cursor: 'pointer',
                  }}
                />
                <div>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: checked.has(item.id) ? '#22c55e' : '#e6edf3',
                    textDecoration: checked.has(item.id) ? 'line-through' : 'none',
                    transition: 'color 0.2s',
                  }}>
                    {item.label}
                    <span style={{
                      fontSize: 11,
                      color: '#8b949e',
                      fontWeight: 500,
                      marginLeft: 8,
                    }}>
                      +{item.weight} pts
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: '#8b949e', marginTop: 2, lineHeight: 1.5 }}>
                    {item.description}
                  </div>
                </div>
              </label>
            ))}
          </div>
        );
      })}
    </div>
  );
}
