/**
 * Session Persistence for Wallet Auth
 * JWT token management, refresh sessions, and device memory
 * Sprint 24 — Auth Agent
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface AuthSession {
  walletAddress: string;
  chain: 'ethereum' | 'solana';
  accessToken: string;
  refreshToken: string;
  expiresAt: number; // Unix timestamp in ms
  deviceId: string;
  createdAt: number;
  lastActivity: number;
}

export interface TokenPayload {
  sub: string; // wallet address
  chain: string;
  iat: number;
  exp: number;
  deviceId: string;
  nonce: string;
}

export interface RefreshResult {
  success: boolean;
  session?: AuthSession;
  error?: string;
}

// ── Constants ──────────────────────────────────────────────────────────────

const ACCESS_TOKEN_TTL = 15 * 60 * 1000; // 15 minutes
const REFRESH_TOKEN_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days
const SESSION_STORAGE_KEY = 'degen0x_session';
const DEVICE_ID_KEY = 'degen0x_device_id';
const MAX_SESSIONS_PER_WALLET = 5;

// ── Utility Functions ──────────────────────────────────────────────────────

/**
 * Generate a cryptographically random string for tokens and nonces
 */
function generateRandomString(length: number = 32): string {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, b => b.toString(16).padStart(2, '0')).join('').slice(0, length);
  }
  // Fallback for SSR
  return Array.from({ length }, () => Math.random().toString(36).charAt(2)).join('');
}

/**
 * Generate or retrieve a persistent device ID
 */
export function getDeviceId(): string {
  if (typeof window === 'undefined') return 'server';

  let deviceId = localStorage.getItem(DEVICE_ID_KEY);
  if (!deviceId) {
    deviceId = `dev_${generateRandomString(24)}`;
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }
  return deviceId;
}

/**
 * Create a simple JWT-like token (for client-side demo)
 * In production, this would be signed server-side with a private key
 */
function createToken(payload: TokenPayload): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = btoa(JSON.stringify(payload));
  const signature = btoa(generateRandomString(32));
  return `${header}.${body}.${signature}`;
}

/**
 * Decode a JWT-like token payload
 */
export function decodeToken(token: string): TokenPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    return JSON.parse(atob(parts[1]));
  } catch {
    return null;
  }
}

/**
 * Check if a token is expired
 */
export function isTokenExpired(token: string): boolean {
  const payload = decodeToken(token);
  if (!payload) return true;
  return Date.now() > payload.exp * 1000;
}

// ── Session Management ──────────────────────────────────────────────────────

/**
 * Create a new authenticated session after wallet signature verification
 */
export function createSession(walletAddress: string, chain: 'ethereum' | 'solana'): AuthSession {
  const now = Date.now();
  const deviceId = getDeviceId();
  const nonce = generateRandomString(16);

  const accessPayload: TokenPayload = {
    sub: walletAddress,
    chain,
    iat: Math.floor(now / 1000),
    exp: Math.floor((now + ACCESS_TOKEN_TTL) / 1000),
    deviceId,
    nonce,
  };

  const refreshPayload: TokenPayload = {
    sub: walletAddress,
    chain,
    iat: Math.floor(now / 1000),
    exp: Math.floor((now + REFRESH_TOKEN_TTL) / 1000),
    deviceId,
    nonce: generateRandomString(16),
  };

  const session: AuthSession = {
    walletAddress,
    chain,
    accessToken: createToken(accessPayload),
    refreshToken: createToken(refreshPayload),
    expiresAt: now + ACCESS_TOKEN_TTL,
    deviceId,
    createdAt: now,
    lastActivity: now,
  };

  persistSession(session);
  return session;
}

/**
 * Refresh an existing session with a new access token
 */
export function refreshSession(currentSession: AuthSession): RefreshResult {
  // Check if refresh token is still valid
  if (isTokenExpired(currentSession.refreshToken)) {
    clearSession();
    return { success: false, error: 'Refresh token expired. Please sign in again.' };
  }

  const now = Date.now();
  const deviceId = getDeviceId();

  // Verify device ID matches
  if (currentSession.deviceId !== deviceId) {
    return { success: false, error: 'Device mismatch. Please sign in again.' };
  }

  const newAccessPayload: TokenPayload = {
    sub: currentSession.walletAddress,
    chain: currentSession.chain,
    iat: Math.floor(now / 1000),
    exp: Math.floor((now + ACCESS_TOKEN_TTL) / 1000),
    deviceId,
    nonce: generateRandomString(16),
  };

  const updatedSession: AuthSession = {
    ...currentSession,
    accessToken: createToken(newAccessPayload),
    expiresAt: now + ACCESS_TOKEN_TTL,
    lastActivity: now,
  };

  persistSession(updatedSession);
  return { success: true, session: updatedSession };
}

/**
 * Persist session to localStorage
 */
function persistSession(session: AuthSession): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  } catch (e) {
    console.warn('Failed to persist session:', e);
  }
}

/**
 * Retrieve the current session from localStorage
 */
export function getStoredSession(): AuthSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
}

/**
 * Clear the current session
 */
export function clearSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

/**
 * Get session status: active, expired (refreshable), or none
 */
export function getSessionStatus(session: AuthSession | null): 'active' | 'expired' | 'refreshable' | 'none' {
  if (!session) return 'none';
  if (!isTokenExpired(session.accessToken)) return 'active';
  if (!isTokenExpired(session.refreshToken)) return 'refreshable';
  return 'expired';
}

// ── Auth Guard Hook Utilities ──────────────────────────────────────────────

/**
 * Auto-refresh session if access token is expired but refresh token is valid
 * Returns the active session or null
 */
export function ensureActiveSession(): AuthSession | null {
  const session = getStoredSession();
  if (!session) return null;

  const status = getSessionStatus(session);

  switch (status) {
    case 'active':
      return session;

    case 'refreshable': {
      const result = refreshSession(session);
      if (result.success && result.session) return result.session;
      clearSession();
      return null;
    }

    case 'expired':
      clearSession();
      return null;

    default:
      return null;
  }
}

/**
 * Format session expiry for display
 */
export function formatExpiry(expiresAt: number): string {
  const remaining = expiresAt - Date.now();
  if (remaining <= 0) return 'Expired';

  const minutes = Math.floor(remaining / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ${hours % 24}h`;
  if (hours > 0) return `${hours}h ${minutes % 60}m`;
  return `${minutes}m`;
}

/**
 * Generate a SIWE (Sign-In With Ethereum) compatible message
 */
export function generateSignInMessage(
  address: string,
  chain: 'ethereum' | 'solana',
  nonce?: string,
): string {
  const domain = typeof window !== 'undefined' ? window.location.host : 'degen0x.com';
  const uri = typeof window !== 'undefined' ? window.location.origin : 'https://degen0x.com';
  const issuedAt = new Date().toISOString();
  const _nonce = nonce || generateRandomString(16);

  if (chain === 'ethereum') {
    return [
      `${domain} wants you to sign in with your Ethereum account:`,
      address,
      '',
      `Sign in to degen0x — your crypto analytics hub`,
      '',
      `URI: ${uri}`,
      `Version: 1`,
      `Chain ID: 1`,
      `Nonce: ${_nonce}`,
      `Issued At: ${issuedAt}`,
    ].join('\n');
  }

  return [
    `degen0x Authentication`,
    ``,
    `Wallet: ${address}`,
    `Chain: Solana`,
    `Nonce: ${_nonce}`,
    `Issued At: ${issuedAt}`,
  ].join('\n');
}
