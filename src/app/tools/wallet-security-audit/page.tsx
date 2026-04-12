'use client';

import { useState, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

/* ────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────── */
interface AuditCheck {
  id: string;
  category: string;
  question: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  weight: number;
}

interface AuditResult {
  score: number;
  grade: string;
  gradeColor: string;
  passed: number;
  failed: number;
  recommendations: string[];
}

/* ────────────────────────────────────────────────────────────
   Audit Checklist
──────────────────────────────────────────────────────────── */
const AUDIT_CHECKS: AuditCheck[] = [
  // Seed Phrase Security
  { id: 'seed-offline', category: 'Seed Phrase', question: 'Is your seed phrase stored offline (never digital)?', description: 'Seed phrases should never be stored in screenshots, notes apps, cloud storage, or email.', severity: 'critical', weight: 15 },
  { id: 'seed-backup', category: 'Seed Phrase', question: 'Do you have multiple backup copies in separate locations?', description: 'A single copy creates a single point of failure. Store copies in at least 2 separate locations.', severity: 'critical', weight: 12 },
  { id: 'seed-metal', category: 'Seed Phrase', question: 'Is at least one backup on metal (fireproof)?', description: 'Paper backups can be destroyed by fire or water. Metal backups survive extreme conditions.', severity: 'medium', weight: 5 },
  // Hardware Wallet
  { id: 'hw-wallet', category: 'Hardware Wallet', question: 'Do you use a hardware wallet for significant holdings?', description: 'Hardware wallets keep private keys offline, protecting against malware and phishing.', severity: 'critical', weight: 15 },
  { id: 'hw-firmware', category: 'Hardware Wallet', question: 'Is your hardware wallet firmware up to date?', description: 'Firmware updates patch security vulnerabilities and add new features.', severity: 'high', weight: 8 },
  { id: 'hw-official', category: 'Hardware Wallet', question: 'Did you purchase from the official manufacturer?', description: 'Buying from third parties risks pre-compromised devices with modified firmware.', severity: 'critical', weight: 10 },
  // Transaction Habits
  { id: 'tx-verify', category: 'Transaction Habits', question: 'Do you verify addresses on your hardware wallet screen before signing?', description: 'Clipboard malware can swap addresses. Always verify the full address on your hardware device.', severity: 'critical', weight: 10 },
  { id: 'tx-test', category: 'Transaction Habits', question: 'Do you send test transactions before large transfers?', description: 'Sending a small amount first ensures the address is correct and you understand fees.', severity: 'high', weight: 6 },
  { id: 'tx-revoke', category: 'Transaction Habits', question: 'Do you regularly revoke unused token approvals?', description: 'Unlimited approvals to DeFi contracts create risk. Use revoke.cash or similar tools.', severity: 'high', weight: 7 },
  // Account Security
  { id: 'email-2fa', category: 'Account Security', question: 'Is your exchange email using a hardware security key or authenticator?', description: 'Email compromise leads to exchange account takeover. Use hardware 2FA, not SMS.', severity: 'critical', weight: 10 },
  { id: 'unique-email', category: 'Account Security', question: 'Do you use a unique email for crypto accounts?', description: 'A dedicated email reduces the attack surface from data breaches on other services.', severity: 'medium', weight: 4 },
  { id: 'password-manager', category: 'Account Security', question: 'Do you use a password manager with unique passwords?', description: 'Reused passwords from data breaches are a top attack vector for exchange accounts.', severity: 'high', weight: 7 },
  // Network Security
  { id: 'no-public-wifi', category: 'Network & Device', question: 'Do you avoid signing transactions on public WiFi?', description: 'Public networks can be monitored. Use VPN or mobile data for sensitive crypto transactions.', severity: 'high', weight: 5 },
  { id: 'vpn', category: 'Network & Device', question: 'Do you use a VPN for crypto activities?', description: 'A VPN adds a layer of privacy and security against network-level attacks.', severity: 'low', weight: 3 },
  { id: 'separate-browser', category: 'Network & Device', question: 'Do you use a separate browser profile for DeFi?', description: 'Malicious browser extensions can read and modify transaction data. Isolate DeFi browsing.', severity: 'medium', weight: 5 },
  // Phishing Awareness
  { id: 'bookmark-sites', category: 'Phishing Awareness', question: 'Do you access DeFi sites via bookmarks (not Google search)?', description: 'Phishing ads on search engines mimic real DeFi sites. Always use bookmarked URLs.', severity: 'high', weight: 8 },
  { id: 'no-dm-links', category: 'Phishing Awareness', question: 'Do you never click links from DMs or unsolicited messages?', description: 'Crypto scams overwhelmingly start with links in DMs on Discord, Telegram, or Twitter.', severity: 'high', weight: 7 },
];

const CATEGORIES = [...new Set(AUDIT_CHECKS.map(c => c.category))];

const SEVERITY_COLORS: Record<string, string> = {
  critical: 'text-red-400',
  high: 'text-orange-400',
  medium: 'text-yellow-400',
  low: 'text-blue-400',
};

/* ────────────────────────────────────────────────────────────
   Component
──────────────────────────────────────────────────────────── */
export default function WalletSecurityAudit() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const toggleAnswer = useCallback((id: string) => {
    setAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const calculateResults = useCallback((): AuditResult => {
    const maxScore = AUDIT_CHECKS.reduce((s, c) => s + c.weight, 0);
    const earned = AUDIT_CHECKS.reduce((s, c) => s + (answers[c.id] ? c.weight : 0), 0);
    const score = Math.round((earned / maxScore) * 100);
    const passed = Object.values(answers).filter(Boolean).length;
    const failed = AUDIT_CHECKS.length - passed;

    let grade: string, gradeColor: string;
    if (score >= 90) { grade = 'A+'; gradeColor = 'text-green-400'; }
    else if (score >= 80) { grade = 'A'; gradeColor = 'text-green-400'; }
    else if (score >= 70) { grade = 'B'; gradeColor = 'text-yellow-400'; }
    else if (score >= 60) { grade = 'C'; gradeColor = 'text-orange-400'; }
    else if (score >= 40) { grade = 'D'; gradeColor = 'text-red-400'; }
    else { grade = 'F'; gradeColor = 'text-red-500'; };

    const recommendations = AUDIT_CHECKS
      .filter(c => !answers[c.id])
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 5)
      .map(c => `[${c.severity.toUpperCase()}] ${c.question.replace('Do you ', 'Start to ').replace('Is your ', 'Ensure your ').replace('?', '.')}`);

    return { score, grade, gradeColor, passed, failed, recommendations };
  }, [answers]);

  const results = calculateResults();
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools' },
        { label: 'Wallet Security Audit' },
      ]} />

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">
          Wallet Security Audit
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          How secure are your crypto holdings? Run through this interactive security checklist
          to identify vulnerabilities and get a personalized security score with actionable recommendations.
        </p>
      </div>

      {/* Progress & Live Score */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass p-4 text-center">
          <div className={`text-3xl font-bold ${results.gradeColor}`}>{results.grade}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Security Grade</div>
        </div>
        <div className="glass p-4 text-center">
          <div className="text-3xl font-bold text-[var(--color-primary)]">{results.score}%</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Security Score</div>
        </div>
        <div className="glass p-4 text-center">
          <div className="text-3xl font-bold text-green-400">{results.passed}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Checks Passed</div>
        </div>
        <div className="glass p-4 text-center">
          <div className="text-3xl font-bold text-red-400">{results.failed}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Needs Attention</div>
        </div>
      </div>

      {/* Score Bar */}
      <div className="glass p-4 mb-8">
        <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mb-2">
          <span>Security Score</span>
          <span>{results.score}%</span>
        </div>
        <div className="h-3 bg-[var(--glass-bg)] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              results.score >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-400' :
              results.score >= 60 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
              'bg-gradient-to-r from-red-500 to-orange-400'
            }`}
            style={{ width: `${results.score}%` }}
          />
        </div>
      </div>

      {/* Checklist */}
      {CATEGORIES.map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-3 flex items-center gap-2">
            <span>{
              category === 'Seed Phrase' ? '🔑' :
              category === 'Hardware Wallet' ? '🔒' :
              category === 'Transaction Habits' ? '📝' :
              category === 'Account Security' ? '🛡️' :
              category === 'Network & Device' ? '🌐' :
              '🎣'
            }</span>
            {category}
          </h2>
          <div className="space-y-2">
            {AUDIT_CHECKS.filter(c => c.category === category).map(check => (
              <div
                key={check.id}
                className={`glass p-4 cursor-pointer transition-all hover:border-[var(--color-primary)] ${
                  answers[check.id] ? 'border-green-500/30 bg-green-500/5' : ''
                }`}
                onClick={() => toggleAnswer(check.id)}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                    answers[check.id] ? 'bg-green-500 border-green-500' : 'border-[var(--glass-border)]'
                  }`}>
                    {answers[check.id] && <span className="text-white text-xs">✓</span>}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium text-[var(--color-text)]">{check.question}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full uppercase font-bold ${SEVERITY_COLORS[check.severity]} bg-current/10`}>
                        {check.severity}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">{check.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Recommendations */}
      {answeredCount > 0 && results.recommendations.length > 0 && (
        <div className="glass p-6 mb-8 border-orange-500/30">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-3">Top Recommendations</h2>
          <div className="space-y-2">
            {results.recommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-orange-400 font-bold mt-0.5">{i + 1}.</span>
                <span className="text-[var(--color-text-secondary)]">{rec}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SEO Content */}
      <section className="mt-12 glass p-8">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Why Wallet Security Matters</h2>
        <div className="text-sm text-[var(--color-text-secondary)] space-y-3 leading-relaxed">
          <p>
            Cryptocurrency theft exceeded $3.8 billion in 2025, with phishing attacks and compromised
            seed phrases being the leading causes of loss. Unlike traditional banking, crypto transactions
            are irreversible — once your funds are stolen, recovery is nearly impossible.
          </p>
          <p>
            This interactive audit walks you through the most critical security practices that protect
            your digital assets. From seed phrase management to hardware wallet hygiene, each check is
            weighted by its impact on your overall security posture.
          </p>
          <p>
            Run this audit periodically (we recommend monthly) and share it with friends who are new
            to crypto. A few minutes of prevention can save a lifetime of holdings.
          </p>
        </div>
      </section>
    </div>
  );
}
