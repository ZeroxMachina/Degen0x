'use client';

/**
 * Session Auth Provider
 * React context for session-based wallet authentication with auto-refresh
 * Sprint 24 — Auth Agent
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import {
  AuthSession,
  createSession,
  clearSession,
  getStoredSession,
  getSessionStatus,
  refreshSession,
  ensureActiveSession,
  formatExpiry,
  generateSignInMessage,
} from '@/lib/session-auth';
import { truncateAddress } from '@/lib/wallet-auth';

// ── Types ──────────────────────────────────────────────────────────────────

interface SessionAuthContextType {
  session: AuthSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  sessionExpiry: string;
  signIn: (walletAddress: string, chain: 'ethereum' | 'solana') => void;
  signOut: () => void;
  refreshAuth: () => boolean;
  getSignMessage: (address: string, chain: 'ethereum' | 'solana') => string;
}

// ── Context ──────────────────────────────────────────────────────────────

const SessionAuthContext = createContext<SessionAuthContextType>({
  session: null,
  isAuthenticated: false,
  isLoading: true,
  sessionExpiry: '',
  signIn: () => {},
  signOut: () => {},
  refreshAuth: () => false,
  getSignMessage: () => '',
});

export const useSessionAuth = () => useContext(SessionAuthContext);

// ── Provider Component ──────────────────────────────────────────────────

export default function SessionAuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionExpiry, setSessionExpiry] = useState('');
  const refreshTimerRef = useRef<NodeJS.Timeout | null>(null);
  const expiryTimerRef = useRef<NodeJS.Timeout | null>(null);

  // ── Auto-Refresh Logic ──────────────────────────────────────────────
  const scheduleRefresh = useCallback((sess: AuthSession) => {
    if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);

    const timeUntilExpiry = sess.expiresAt - Date.now();
    // Refresh 2 minutes before access token expires
    const refreshIn = Math.max(timeUntilExpiry - 2 * 60 * 1000, 5000);

    refreshTimerRef.current = setTimeout(() => {
      const result = refreshSession(sess);
      if (result.success && result.session) {
        setSession(result.session);
        scheduleRefresh(result.session);
      } else {
        setSession(null);
      }
    }, refreshIn);
  }, []);

  // ── Expiry Display Timer ──────────────────────────────────────────────
  useEffect(() => {
    if (!session) {
      setSessionExpiry('');
      return;
    }

    const updateExpiry = () => {
      setSessionExpiry(formatExpiry(session.expiresAt));
    };

    updateExpiry();
    expiryTimerRef.current = setInterval(updateExpiry, 30000);

    return () => {
      if (expiryTimerRef.current) clearInterval(expiryTimerRef.current);
    };
  }, [session]);

  // ── Initialize from stored session ──────────────────────────────────
  useEffect(() => {
    const stored = ensureActiveSession();
    if (stored) {
      setSession(stored);
      scheduleRefresh(stored);
    }
    setIsLoading(false);

    return () => {
      if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
      if (expiryTimerRef.current) clearInterval(expiryTimerRef.current);
    };
  }, [scheduleRefresh]);

  // ── Actions ──────────────────────────────────────────────────────────
  const signIn = useCallback((walletAddress: string, chain: 'ethereum' | 'solana') => {
    const newSession = createSession(walletAddress, chain);
    setSession(newSession);
    scheduleRefresh(newSession);
  }, [scheduleRefresh]);

  const signOut = useCallback(() => {
    clearSession();
    setSession(null);
    if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
  }, []);

  const refreshAuth = useCallback((): boolean => {
    if (!session) return false;
    const result = refreshSession(session);
    if (result.success && result.session) {
      setSession(result.session);
      scheduleRefresh(result.session);
      return true;
    }
    signOut();
    return false;
  }, [session, scheduleRefresh, signOut]);

  const getSignMessage = useCallback((address: string, chain: 'ethereum' | 'solana') => {
    return generateSignInMessage(address, chain);
  }, []);

  // ── Context Value ──────────────────────────────────────────────────
  const value: SessionAuthContextType = {
    session,
    isAuthenticated: !!session && !isLoading,
    isLoading,
    sessionExpiry,
    signIn,
    signOut,
    refreshAuth,
    getSignMessage,
  };

  return (
    <SessionAuthContext.Provider value={value}>
      {children}
    </SessionAuthContext.Provider>
  );
}

// ── Session Status Badge Component ──────────────────────────────────────

export function SessionStatusBadge() {
  const { session, isAuthenticated, sessionExpiry, signOut } = useSessionAuth();

  if (!isAuthenticated || !session) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#161b22] border border-[#30363d] rounded-lg">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-xs font-mono text-gray-300">
        {truncateAddress(session.walletAddress)}
      </span>
      <span className="text-[10px] text-gray-500">|</span>
      <span className="text-[10px] text-gray-500">{sessionExpiry}</span>
      <button
        onClick={signOut}
        className="text-[10px] text-red-400 hover:text-red-300 font-semibold ml-1"
      >
        Disconnect
      </button>
    </div>
  );
}
