"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

/* ─── Types ────────────────────────────────────────────────── */
type AuthStep = "choose" | "email" | "otp" | "success";
type AuthMethod = "wallet" | "email";

interface AuthUser {
  id: string;
  displayName: string;
  email?: string;
  walletAddress?: string;
  xp: number;
  level: number;
  streak: number;
  joinedAt: string;
  avatar: string;
}

interface UnifiedAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (user: AuthUser) => void;
  defaultMethod?: AuthMethod;
  context?: string; // "quiz", "course", "leaderboard" etc
}

/* ─── Helpers ───────────────────────────────────────────────── */
const AVATARS = ["🦊", "🐻", "🦁", "🐯", "🦅", "🐉", "🦄", "🤖", "👾", "🧙"];
const randomAvatar = () => AVATARS[Math.floor(Math.random() * AVATARS.length)];

const MOCK_XP_BONUS: Record<string, number> = {
  quiz: 150,
  course: 200,
  leaderboard: 50,
  default: 100,
};

/* ─── OTP Input sub-component ───────────────────────────────── */
function OTPInput({ onComplete }: { onComplete: (code: string) => void }) {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (idx: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...digits];
    next[idx] = val;
    setDigits(next);
    if (val && idx < 5) refs.current[idx + 1]?.focus();
    if (next.every((d) => d !== "")) onComplete(next.join(""));
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[idx] && idx > 0) {
      refs.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (text.length === 6) {
      const arr = text.split("");
      setDigits(arr);
      onComplete(text);
    }
  };

  return (
    <div className="flex gap-2 justify-center my-6">
      {digits.map((d, i) => (
        <input
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={d}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          className="w-11 h-14 text-center text-xl font-bold rounded-xl border-2 transition-all duration-200 focus:outline-none"
          style={{
            background: "var(--surface2, #1c2330)",
            borderColor: d ? "#6366f1" : "var(--border, #30363d)",
            color: "var(--text, #e6edf3)",
            boxShadow: d ? "0 0 0 3px rgba(99,102,241,0.2)" : "none",
          }}
        />
      ))}
    </div>
  );
}

/* ─── XP Bonus Badge ────────────────────────────────────────── */
function XPBonusBadge({ xp, context }: { xp: number; context: string }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold mb-4 w-fit mx-auto"
      style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "#818cf8" }}
    >
      <span className="text-base">⚡</span>
      Sign up and earn <strong>+{xp} XP</strong> for your {context}!
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function UnifiedAuthModal({
  isOpen,
  onClose,
  onSuccess,
  defaultMethod,
  context = "default",
}: UnifiedAuthModalProps) {
  const [step, setStep] = useState<AuthStep>("choose");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [authedUser, setAuthedUser] = useState<AuthUser | null>(null);

  const { connected, publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const xpBonus = MOCK_XP_BONUS[context] ?? MOCK_XP_BONUS.default;

  /* Reset on open */
  useEffect(() => {
    if (isOpen) {
      setStep("choose");
      setEmail("");
      setEmailError("");
      setResendCooldown(0);
    }
  }, [isOpen]);

  /* Wallet auto-success */
  useEffect(() => {
    if (connected && publicKey && step === "choose") {
      handleWalletSuccess();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected, publicKey]);

  /* Resend countdown */
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const t = setTimeout(() => setResendCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [resendCooldown]);

  const handleWalletConnect = () => {
    if (connected) {
      handleWalletSuccess();
    } else {
      setVisible(true);
    }
  };

  const handleWalletSuccess = useCallback(() => {
    const addr = publicKey?.toBase58() ?? "MOCK_WALLET";
    const user: AuthUser = {
      id: addr,
      displayName: `${addr.slice(0, 4)}...${addr.slice(-4)}`,
      walletAddress: addr,
      xp: 100 + xpBonus,
      level: 1,
      streak: 1,
      joinedAt: new Date().toISOString(),
      avatar: randomAvatar(),
    };
    // Persist lightweight session
    try {
      localStorage.setItem("degen0x_user", JSON.stringify(user));
      localStorage.setItem("degen0x_auth_method", "wallet");
    } catch {}
    setAuthedUser(user);
    setStep("success");
    onSuccess?.(user);
  }, [publicKey, xpBonus, onSuccess]);

  const validateEmail = (val: string) => {
    if (!val) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Enter a valid email";
    return "";
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateEmail(email);
    if (err) { setEmailError(err); return; }
    setIsLoading(true);
    // Simulate magic link send (replace with real API in prod)
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    setResendCooldown(60);
    setStep("otp");
  };

  const handleOTPComplete = async (code: string) => {
    setIsLoading(true);
    // Simulate OTP verification (replace with real API in prod)
    await new Promise((r) => setTimeout(r, 900));
    setIsLoading(false);
    const user: AuthUser = {
      id: `email_${email}`,
      displayName: email.split("@")[0],
      email,
      xp: 50 + xpBonus,
      level: 1,
      streak: 1,
      joinedAt: new Date().toISOString(),
      avatar: randomAvatar(),
    };
    try {
      localStorage.setItem("degen0x_user", JSON.stringify(user));
      localStorage.setItem("degen0x_auth_method", "email");
    } catch {}
    setAuthedUser(user);
    setStep("success");
    onSuccess?.(user);
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsLoading(false);
    setResendCooldown(60);
  };

  if (!isOpen) return null;

  /* ── Backdrop ── */
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: "var(--surface, #161b22)",
          border: "1px solid var(--border, #30363d)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.1)",
        }}
      >
        {/* Header gradient */}
        <div
          className="h-1.5 w-full"
          style={{ background: "linear-gradient(90deg, #6366f1, #06b6d4, #8b5cf6)" }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-all"
          style={{ background: "var(--surface2, #1c2330)", color: "var(--text2, #8b949e)" }}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-6 pt-5">
          {/* Logo */}
          <div className="text-center mb-1">
            <span
              className="text-2xl font-black tracking-tight"
              style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              degen0x
            </span>
          </div>

          {/* ── STEP: CHOOSE ── */}
          {step === "choose" && (
            <>
              <h2 className="text-xl font-bold text-center mb-1" style={{ color: "var(--text, #e6edf3)" }}>
                Join the Mission
              </h2>
              <p className="text-sm text-center mb-4" style={{ color: "var(--text2, #8b949e)" }}>
                Onboarding the next billion users to crypto 🚀
              </p>

              <XPBonusBadge xp={xpBonus} context={context} />

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {[
                  { icon: "📈", text: "Track XP & level up as you learn" },
                  { icon: "🏆", text: "Appear on the global leaderboard" },
                  { icon: "🎓", text: "Save course progress across devices" },
                  { icon: "🔥", text: "Daily streak rewards & badges" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm" style={{ color: "var(--text, #e6edf3)" }}>
                    <span className="text-base">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Wallet connect */}
              <button
                onClick={handleWalletConnect}
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 mb-3"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
                {connected ? "Continue with Wallet" : "Connect Wallet"}
                <span
                  className="ml-auto text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  +{xpBonus + 50} XP
                </span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px" style={{ background: "var(--border, #30363d)" }} />
                <span className="text-xs" style={{ color: "var(--text2, #8b949e)" }}>or continue with email</span>
                <div className="flex-1 h-px" style={{ background: "var(--border, #30363d)" }} />
              </div>

              {/* Email */}
              <button
                onClick={() => setStep("email")}
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold transition-all duration-200"
                style={{
                  background: "var(--surface2, #1c2330)",
                  border: "1px solid var(--border, #30363d)",
                  color: "var(--text, #e6edf3)",
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Continue with Email
                <span
                  className="ml-auto text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.07)", color: "var(--text2)" }}
                >
                  +{xpBonus} XP
                </span>
              </button>

              <p className="text-xs text-center mt-4" style={{ color: "var(--text2, #8b949e)" }}>
                By signing up you agree to our{" "}
                <a href="/terms" className="underline hover:text-indigo-400">Terms</a>
                {" & "}
                <a href="/privacy" className="underline hover:text-indigo-400">Privacy Policy</a>
              </p>
            </>
          )}

          {/* ── STEP: EMAIL ── */}
          {step === "email" && (
            <>
              <h2 className="text-xl font-bold text-center mb-1" style={{ color: "var(--text, #e6edf3)" }}>
                Magic Link Login
              </h2>
              <p className="text-sm text-center mb-5" style={{ color: "var(--text2, #8b949e)" }}>
                We'll send a 6-digit code to your inbox. No password needed.
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none transition-all"
                    style={{
                      background: "var(--surface2, #1c2330)",
                      border: `1px solid ${emailError ? "#f85149" : "var(--border, #30363d)"}`,
                      color: "var(--text, #e6edf3)",
                    }}
                    autoFocus
                  />
                  {emailError && (
                    <p className="text-xs mt-1.5" style={{ color: "#f85149" }}>{emailError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl font-semibold text-white transition-all"
                  style={{
                    background: isLoading ? "rgba(99,102,241,0.5)" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    boxShadow: isLoading ? "none" : "0 4px 20px rgba(99,102,241,0.35)",
                  }}
                >
                  {isLoading ? "Sending code…" : "Send 6-digit code →"}
                </button>
              </form>

              <button
                onClick={() => setStep("choose")}
                className="w-full text-sm mt-3 py-2 transition-colors"
                style={{ color: "var(--text2, #8b949e)" }}
              >
                ← Back to options
              </button>
            </>
          )}

          {/* ── STEP: OTP ── */}
          {step === "otp" && (
            <>
              <h2 className="text-xl font-bold text-center mb-1" style={{ color: "var(--text, #e6edf3)" }}>
                Check your inbox
              </h2>
              <p className="text-sm text-center" style={{ color: "var(--text2, #8b949e)" }}>
                Sent a 6-digit code to <strong style={{ color: "var(--text)" }}>{email}</strong>
              </p>

              {isLoading ? (
                <div className="flex items-center justify-center my-10">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                    style={{ borderColor: "#6366f1", borderTopColor: "transparent" }}
                  />
                </div>
              ) : (
                <OTPInput onComplete={handleOTPComplete} />
              )}

              <p className="text-xs text-center mt-2" style={{ color: "var(--text2, #8b949e)" }}>
                Didn't get it?{" "}
                {resendCooldown > 0 ? (
                  <span>Resend in {resendCooldown}s</span>
                ) : (
                  <button
                    onClick={handleResend}
                    className="underline hover:text-indigo-400"
                    style={{ color: "#818cf8" }}
                  >
                    Resend code
                  </button>
                )}
              </p>

              <button
                onClick={() => setStep("email")}
                className="w-full text-sm mt-4 py-2 transition-colors"
                style={{ color: "var(--text2, #8b949e)" }}
              >
                ← Change email
              </button>
            </>
          )}

          {/* ── STEP: SUCCESS ── */}
          {step === "success" && authedUser && (
            <div className="text-center py-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
                style={{ background: "rgba(99,102,241,0.15)", border: "2px solid rgba(99,102,241,0.3)" }}
              >
                {authedUser.avatar}
              </div>
              <h2 className="text-2xl font-black mb-1" style={{ color: "var(--text, #e6edf3)" }}>
                GM, {authedUser.displayName}!
              </h2>
              <p className="text-sm mb-5" style={{ color: "var(--text2, #8b949e)" }}>
                Welcome to degen0x. Let's onboard you to crypto 🔥
              </p>

              {/* XP earned */}
              <div
                className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl mx-auto w-fit mb-5"
                style={{ background: "rgba(63,185,80,0.1)", border: "1px solid rgba(63,185,80,0.3)" }}
              >
                <span className="text-2xl">⚡</span>
                <div className="text-left">
                  <div className="text-xs" style={{ color: "#3fb950" }}>XP Earned</div>
                  <div className="text-xl font-black" style={{ color: "#3fb950" }}>+{authedUser.xp} XP</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Level", value: authedUser.level, icon: "🏅" },
                  { label: "Streak", value: `${authedUser.streak}d`, icon: "🔥" },
                  { label: "Rank", value: "#∞", icon: "🏆" },
                ].map(({ label, value, icon }) => (
                  <div
                    key={label}
                    className="py-3 rounded-xl"
                    style={{ background: "var(--surface2, #1c2330)", border: "1px solid var(--border, #30363d)" }}
                  >
                    <div className="text-lg">{icon}</div>
                    <div className="text-base font-bold" style={{ color: "var(--text, #e6edf3)" }}>{value}</div>
                    <div className="text-xs" style={{ color: "var(--text2, #8b949e)" }}>{label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", boxShadow: "0 4px 20px rgba(99,102,241,0.35)" }}
              >
                Start Learning →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
