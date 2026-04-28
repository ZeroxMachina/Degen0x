'use client';

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import {
  Search,
  Shield,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Loader2,
  ChevronDown,
} from 'lucide-react';

// ── Interfaces ──────────────────────────────────────────
interface SecurityCheck {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  description: string;
  detail?: string;
}

interface TokenInfo {
  name: string;
  symbol: string;
  totalSupply: string;
  deployerAge: string;
  holders: number;
  top10HoldersPercent: number;
}

interface ScanResult {
  riskScore: number;
  riskLevel: 'Safe' | 'Caution' | 'Danger';
  checks: SecurityCheck[];
  tokenInfo: TokenInfo;
  timestamp: number;
}

interface ScanState {
  address: string;
  chain: string;
  loading: boolean;
  result: ScanResult | null;
  error: string | null;
}

// ── Constants ───────────────────────────────────────────
const CHAINS = ['Ethereum', 'BSC', 'Arbitrum', 'Base', 'Polygon', 'Solana'];

const SECURITY_CHECKS_TEMPLATE = [
  { name: 'Contract Verified', key: 'verified' },
  { name: 'No Honeypot Functions', key: 'noHoneypot' },
  { name: 'Liquidity Locked', key: 'liquidityLocked' },
  { name: 'No Hidden Mint Function', key: 'noMint' },
  { name: 'Owner Renounced or Multi-sig', key: 'ownerSafe' },
  { name: 'No Blacklist Function', key: 'noBlacklist' },
  { name: 'Tax Rate Normal', key: 'taxNormal' },
  { name: 'Holder Distribution', key: 'distribution' },
];

// ── Helper Functions ────────────────────────────────────
/**
 * Simple hash function to generate deterministic results
 * based on the token address
 */
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Generate deterministic mock security checks based on address
 */
function generateSecurityChecks(address: string): SecurityCheck[] {
  const hash = simpleHash(address);
  const checkValues = {
    verified: (hash % 100 < 75),
    noHoneypot: (hash % 100 < 85),
    liquidityLocked: (hash % 100 < 70),
    noMint: (hash % 100 < 80),
    ownerSafe: (hash % 100 < 60),
    noBlacklist: (hash % 100 < 90),
    taxNormal: (hash % 100 < 65),
    distribution: (hash % 100 < 72),
  };

  return [
    {
      name: 'Contract Verified',
      status: checkValues.verified ? 'pass' : 'fail',
      description: 'Source code is public and verified on block explorer',
      detail: checkValues.verified
        ? 'Contract source code is publicly verified'
        : 'Contract source code is not verified',
    },
    {
      name: 'No Honeypot Functions',
      status: checkValues.noHoneypot ? 'pass' : 'fail',
      description: 'Token can be sold without restrictions',
      detail: checkValues.noHoneypot
        ? 'No honeypot functions detected'
        : 'Potential transfer restrictions detected',
    },
    {
      name: 'Liquidity Locked',
      status: checkValues.liquidityLocked ? 'pass' : 'warning',
      description: 'LP tokens are locked to prevent rug pulls',
      detail: checkValues.liquidityLocked
        ? 'Liquidity locked for ~1.5 years'
        : 'Liquidity not locked or time-bound',
    },
    {
      name: 'No Hidden Mint Function',
      status: checkValues.noMint ? 'pass' : 'fail',
      description: 'Owner cannot create unlimited new tokens',
      detail: checkValues.noMint
        ? 'No active mint function detected'
        : 'Mint function is active',
    },
    {
      name: 'Owner Renounced or Multi-sig',
      status: checkValues.ownerSafe ? 'pass' : 'warning',
      description: 'Owner cannot perform arbitrary actions',
      detail: checkValues.ownerSafe
        ? 'Ownership renounced or using multi-signature'
        : 'Single owner with full control',
    },
    {
      name: 'No Blacklist Function',
      status: checkValues.noBlacklist ? 'pass' : 'fail',
      description: 'Users cannot be arbitrarily blocked from trading',
      detail: checkValues.noBlacklist
        ? 'No blacklist function detected'
        : 'Blacklist function found',
    },
    {
      name: 'Tax Rate Normal',
      status: checkValues.taxNormal ? 'pass' : 'warning',
      description: 'Transaction taxes are below 10%',
      detail: checkValues.taxNormal
        ? 'Buy/sell tax: 0-8%'
        : 'Buy/sell tax: 8-15%',
    },
    {
      name: 'Holder Distribution',
      status: checkValues.distribution ? 'pass' : 'warning',
      description: 'Top 10 holders own less than 40% of supply',
      detail: checkValues.distribution
        ? 'Top 10 holders: ~35% of supply'
        : 'Top 10 holders: ~52% of supply',
    },
  ];
}

/**
 * Generate deterministic mock token info
 */
function generateTokenInfo(address: string): TokenInfo {
  const hash = simpleHash(address);
  const names = ['Protocol Token', 'Yield Token', 'Governance Token', 'Utility Token', 'Staking Token'];
  const symbols = ['PT', 'YLD', 'GOV', 'UTIL', 'STK'];

  const nameIdx = hash % names.length;
  const deploymentDays = 30 + (hash % 900);

  return {
    name: names[nameIdx],
    symbol: symbols[nameIdx],
    totalSupply: `${(1000000 + (hash % 100000000)).toLocaleString()} tokens`,
    deployerAge: `${deploymentDays} days ago`,
    holders: 500 + (hash % 5000),
    top10HoldersPercent: 25 + (hash % 40),
  };
}

/**
 * Calculate overall risk score based on checks
 */
function calculateRiskScore(checks: SecurityCheck[]): number {
  const passCount = checks.filter(c => c.status === 'pass').length;
  const warningCount = checks.filter(c => c.status === 'warning').length;
  const failCount = checks.filter(c => c.status === 'fail').length;

  // Score: 100 for all pass, decreases with warnings and fails
  const score = 100 - (warningCount * 10) - (failCount * 20);
  return Math.max(0, Math.min(100, score));
}

/**
 * Determine risk level from score
 */
function getRiskLevel(score: number): 'Safe' | 'Caution' | 'Danger' {
  if (score >= 70) return 'Safe';
  if (score >= 40) return 'Caution';
  return 'Danger';
}

/**
 * Get color for risk level
 */
function getRiskColor(level: 'Safe' | 'Caution' | 'Danger'): string {
  switch (level) {
    case 'Safe': return '#22c55e';
    case 'Caution': return '#f59e0b';
    case 'Danger': return '#ef4444';
  }
}

/**
 * Get icon for risk level
 */
function getRiskIcon(level: 'Safe' | 'Caution' | 'Danger') {
  switch (level) {
    case 'Safe': return <ShieldCheck size={24} />;
    case 'Caution': return <AlertTriangle size={24} />;
    case 'Danger': return <ShieldAlert size={24} />;
  }
}

/**
 * Get icon for security check status
 */
function getCheckIcon(status: 'pass' | 'fail' | 'warning') {
  switch (status) {
    case 'pass': return <CheckCircle size={18} />;
    case 'warning': return <AlertTriangle size={18} />;
    case 'fail': return <XCircle size={18} />;
  }
}

/**
 * Get color for security check status
 */
function getCheckColor(status: 'pass' | 'fail' | 'warning'): string {
  switch (status) {
    case 'pass': return '#22c55e';
    case 'warning': return '#f59e0b';
    case 'fail': return '#ef4444';
  }
}

// ── Component ───────────────────────────────────────────
export default function TokenSecurityScanner() {
  const [state, setState] = useState<ScanState>({
    address: '',
    chain: 'Ethereum',
    loading: false,
    result: null,
    error: null,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Close dropdown when clicking outside
   */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dropdownOpen]);

  /**
   * Validate address format based on selected chain
   */
  const isValidAddress = useCallback((addr: string): boolean => {
    if (state.chain === 'Solana') {
      // Solana addresses are base58 encoded, 32-44 characters
      return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(addr);
    }
    // EVM-compatible chains (Ethereum, BSC, Arbitrum, Base, Polygon)
    return /^0x[a-fA-F0-9]{40}$/.test(addr);
  }, [state.chain]);

  /**
   * Simulate token scan with 1.5s delay
   */
  const handleScan = useCallback(async () => {
    // Validate input
    if (!state.address.trim()) {
      setState(s => ({ ...s, error: 'Please enter a token contract address' }));
      return;
    }

    if (!isValidAddress(state.address)) {
      const hint = state.chain === 'Solana'
        ? 'Invalid Solana address. Use a base58-encoded address (32-44 characters).'
        : 'Invalid address format. Use: 0x followed by 40 hex characters.';
      setState(s => ({ ...s, error: hint }));
      return;
    }

    // Clear previous error and start loading
    setState(s => ({ ...s, loading: true, error: null, result: null }));

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate mock results
    const checks = generateSecurityChecks(state.address);
    const riskScore = calculateRiskScore(checks);
    const riskLevel = getRiskLevel(riskScore);
    const tokenInfo = generateTokenInfo(state.address);

    const result: ScanResult = {
      riskScore,
      riskLevel,
      checks,
      tokenInfo,
      timestamp: Date.now(),
    };

    setState(s => ({ ...s, loading: false, result }));
  }, [state.address, isValidAddress]);

  /**
   * Handle address input change
   */
  const handleAddressChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(s => ({ ...s, address: value.trim(), error: null }));
  }, []);

  /**
   * Handle chain selection
   */
  const handleChainSelect = useCallback((chain: string) => {
    setState(s => ({ ...s, chain }));
    setDropdownOpen(false);
  }, []);

  /**
   * Handle Enter key to scan
   */
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !state.loading) {
      handleScan();
    }
  }, [state.loading, handleScan]);

  // Compute pass/warning/fail counts for result display
  const checkCounts = useMemo(() => {
    if (!state.result) return { pass: 0, warning: 0, fail: 0 };
    return {
      pass: state.result.checks.filter(c => c.status === 'pass').length,
      warning: state.result.checks.filter(c => c.status === 'warning').length,
      fail: state.result.checks.filter(c => c.status === 'fail').length,
    };
  }, [state.result]);

  return (
    <div style={{ padding: '0 12px' }}>
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .token-scanner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .scanner-input-section {
          background: var(--glass-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .scanner-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .scanner-header h2 {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-text);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .input-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 12px;
          margin-bottom: 16px;
        }

        .address-input-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .address-input {
          width: 100%;
          padding: 12px 16px 12px 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          color: var(--color-text);
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 13px;
          transition: all 0.2s;
        }

        .address-input::placeholder {
          color: var(--color-text-secondary);
        }

        .address-input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .address-input:focus-visible {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          color: var(--color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .chain-selector-wrapper {
          position: relative;
        }

        .chain-selector {
          position: relative;
          width: 140px;
        }

        .chain-button {
          width: 100%;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          color: var(--color-text);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s;
        }

        .chain-button:hover {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.05);
        }

        .chain-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 4px;
          background: var(--glass-bg);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 4px;
          min-width: 140px;
          z-index: 10;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .chain-option {
          padding: 10px 12px;
          color: var(--color-text);
          font-size: 13px;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .chain-option:hover,
        .chain-option:focus-visible {
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
          outline: none;
        }

        .chain-option:focus-visible {
          box-shadow: inset 0 0 0 2px #6366f1;
        }

        .chain-option.active {
          background: rgba(99, 102, 241, 0.2);
          color: #6366f1;
          font-weight: 600;
        }

        .button-scan {
          width: 100%;
          padding: 14px 24px;
          min-height: 48px;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .button-scan:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
        }

        .button-scan:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        .error-message {
          padding: 12px 14px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          color: #ef4444;
          font-size: 13px;
          margin-top: 12px;
        }

        .loading-state {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 40px;
          color: var(--color-text-secondary);
        }

        .result-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          animation: fadeIn 0.4s ease-out;
        }

        .risk-score-card {
          background: var(--glass-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .risk-score-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .risk-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: 800;
          color: white;
          flex-shrink: 0;
        }

        .risk-info {
          text-align: left;
          flex: 1;
        }

        .risk-level-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .risk-description {
          font-size: 13px;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .check-summary {
          display: flex;
          gap: 16px;
          justify-content: center;
          padding-top: 20px;
          border-top: 1px solid var(--color-border);
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .summary-count {
          font-weight: 700;
          color: var(--color-text);
        }

        .checks-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .checks-card {
          background: var(--glass-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
        }

        .checks-card h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--color-text);
          margin: 0 0 16px 0;
        }

        .check-item {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          margin-bottom: 8px;
          transition: all 0.2s;
          animation: slideIn 0.3s ease-out;
        }

        .check-item:last-child {
          margin-bottom: 0;
        }

        .check-item:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .check-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .check-content {
          flex: 1;
        }

        .check-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 4px;
        }

        .check-detail {
          font-size: 12px;
          color: var(--color-text-secondary);
          line-height: 1.4;
        }

        .token-info-card {
          background: var(--glass-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
        }

        .token-info-card h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--color-text);
          margin: 0 0 16px 0;
        }

        .token-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .token-info-item {
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          border: 1px solid transparent;
          transition: all 0.2s;
        }

        .token-info-item:hover {
          border-color: var(--color-border);
          background: rgba(255, 255, 255, 0.04);
        }

        .token-info-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
        }

        .token-info-value {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text);
          word-break: break-all;
        }

        .chain-option {
          background: none;
          width: 100%;
          text-align: left;
        }

        @media (prefers-reduced-motion: reduce) {
          .check-item,
          .result-grid,
          .spinner {
            animation: none !important;
          }
          .button-scan:hover:not(:disabled) {
            transform: none !important;
          }
        }

        @media (max-width: 640px) {
          .input-grid {
            grid-template-columns: 1fr;
          }

          .chain-selector {
            width: 100%;
          }

          .risk-score-display {
            flex-direction: column;
            text-align: center;
          }

          .risk-info {
            text-align: center;
          }

          .check-summary {
            flex-direction: column;
            gap: 8px;
          }

          .token-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="token-scanner-container">
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--color-text)', margin: '0 0 8px 0' }}>
            Scan a Token
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: 0 }}>
            Analyze token contracts for security risks and vulnerabilities
          </p>
        </div>

        {/* Input Section */}
        <div className="scanner-input-section">
          <div className="scanner-header">
            <Shield size={20} style={{ color: '#6366f1' }} />
            <h2>Scan Token Contract</h2>
          </div>

          <div className="input-grid">
            <div className="address-input-group">
              <div className="search-icon">
                <Search size={16} />
              </div>
              <input
                className="address-input"
                type="text"
                placeholder={state.chain === 'Solana' ? 'Enter Solana token address...' : '0x... Enter token contract address'}
                value={state.address}
                onChange={handleAddressChange}
                onKeyDown={handleKeyDown}
                disabled={state.loading}
                aria-label="Token contract address"
                autoComplete="off"
                spellCheck={false}
              />
            </div>

            <div className="chain-selector-wrapper" ref={dropdownRef}>
              <div className="chain-selector">
                <button
                  className="chain-button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  disabled={state.loading}
                  aria-label="Select blockchain"
                  aria-expanded={dropdownOpen}
                >
                  {state.chain}
                  <ChevronDown size={14} />
                </button>
                {dropdownOpen && (
                  <div className="chain-dropdown" role="listbox" aria-label="Select blockchain">
                    {CHAINS.map((chain) => (
                      <button
                        key={chain}
                        className={`chain-option ${chain === state.chain ? 'active' : ''}`}
                        onClick={() => handleChainSelect(chain)}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            setDropdownOpen(false);
                          }
                        }}
                        role="option"
                        aria-selected={chain === state.chain}
                        type="button"
                      >
                        {chain}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            className="button-scan"
            onClick={handleScan}
            disabled={state.loading}
          >
            {state.loading ? (
              <>
                <Loader2 size={16} className="spinner" />
                Scanning...
              </>
            ) : (
              <>
                <Search size={16} />
                Scan Token
              </>
            )}
          </button>

          {state.error && (
            <div className="error-message">
              {state.error}
            </div>
          )}
        </div>

        {/* Loading State */}
        {state.loading && (
          <div className="loading-state">
            <Loader2 size={24} className="spinner" />
            <span>Analyzing token contract...</span>
          </div>
        )}

        {/* Results */}
        {!state.loading && state.result && (
          <div className="result-grid">
            {/* Risk Score Card */}
            <div className="risk-score-card">
              <div className="risk-score-display">
                <div
                  className="risk-circle"
                  style={{
                    background: `linear-gradient(135deg, ${getRiskColor(state.result.riskLevel)} 0%, ${getRiskColor(state.result.riskLevel)}dd 100%)`,
                  }}
                >
                  {state.result.riskScore}
                </div>
                <div className="risk-info">
                  <div
                    className="risk-level-badge"
                    style={{
                      background: `${getRiskColor(state.result.riskLevel)}20`,
                      color: getRiskColor(state.result.riskLevel),
                      border: `1px solid ${getRiskColor(state.result.riskLevel)}40`,
                    }}
                  >
                    {getRiskIcon(state.result.riskLevel)}
                    {state.result.riskLevel} Risk
                  </div>
                  <div className="risk-description">
                    {state.result.riskLevel === 'Safe' &&
                      'This token appears to have strong security measures in place. Low probability of exploit.'}
                    {state.result.riskLevel === 'Caution' &&
                      'This token has some security concerns. Review the checks below carefully before trading.'}
                    {state.result.riskLevel === 'Danger' &&
                      'This token has significant security risks. Proceed with extreme caution or avoid entirely.'}
                  </div>
                </div>
              </div>

              <div className="check-summary">
                <div className="summary-item">
                  <CheckCircle size={14} style={{ color: '#22c55e' }} />
                  <span><span className="summary-count">{checkCounts.pass}</span> Passed</span>
                </div>
                <div className="summary-item">
                  <AlertTriangle size={14} style={{ color: '#f59e0b' }} />
                  <span><span className="summary-count">{checkCounts.warning}</span> Warning</span>
                </div>
                <div className="summary-item">
                  <XCircle size={14} style={{ color: '#ef4444' }} />
                  <span><span className="summary-count">{checkCounts.fail}</span> Failed</span>
                </div>
              </div>
            </div>

            {/* Security Checks */}
            <div className="checks-card">
              <h3>Security Checks</h3>
              <div className="checks-grid">
                {state.result.checks.map((check, idx) => (
                  <div key={idx} className="check-item">
                    <div className="check-icon" style={{ color: getCheckColor(check.status) }}>
                      {getCheckIcon(check.status)}
                    </div>
                    <div className="check-content">
                      <div className="check-name">{check.name}</div>
                      <div className="check-detail">
                        {check.detail || check.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Token Info */}
            <div className="token-info-card">
              <h3>Token Information</h3>
              <div className="token-info-grid">
                <div className="token-info-item">
                  <div className="token-info-label">Name</div>
                  <div className="token-info-value">{state.result.tokenInfo.name}</div>
                </div>
                <div className="token-info-item">
                  <div className="token-info-label">Symbol</div>
                  <div className="token-info-value">{state.result.tokenInfo.symbol}</div>
                </div>
                <div className="token-info-item">
                  <div className="token-info-label">Total Supply</div>
                  <div className="token-info-value">{state.result.tokenInfo.totalSupply}</div>
                </div>
                <div className="token-info-item">
                  <div className="token-info-label">Deployed</div>
                  <div className="token-info-value">{state.result.tokenInfo.deployerAge}</div>
                </div>
                <div className="token-info-item">
                  <div className="token-info-label">Holders</div>
                  <div className="token-info-value">{state.result.tokenInfo.holders.toLocaleString()}</div>
                </div>
                <div className="token-info-item">
                  <div className="token-info-label">Top 10 Holders</div>
                  <div className="token-info-value">{state.result.tokenInfo.top10HoldersPercent}%</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!state.loading && !state.result && !state.error && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-text-secondary)' }}>
            <Shield size={48} style={{ marginBottom: 16, opacity: 0.5 }} />
            <p style={{ fontSize: 14, margin: 0 }}>
              Enter a token contract address and select a chain to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
