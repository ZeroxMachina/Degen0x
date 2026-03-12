"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

interface DegenModeContextType {
  isDegenMode: boolean;
  toggleDegenMode: () => void;
  isEligible: boolean;
}

const DegenModeContext = createContext<DegenModeContextType>({
  isDegenMode: false,
  toggleDegenMode: () => {},
  isEligible: false,
});

export function useDegenMode() {
  return useContext(DegenModeContext);
}

export function DegenModeProvider({ children }: { children: ReactNode }) {
  const { connected } = useWallet();
  const [isDegenMode, setIsDegenMode] = useState(false);

  // For now, anyone with a connected wallet can access Degen Mode
  // In production, this would check $DEGEN token balance
  const isEligible = connected;

  useEffect(() => {
    try {
      const stored = localStorage.getItem("degen_mode");
      if (stored === "true" && connected) {
        setIsDegenMode(true);
      }
    } catch {}
  }, [connected]);

  useEffect(() => {
    if (!connected) setIsDegenMode(false);
  }, [connected]);

  const toggleDegenMode = () => {
    const next = !isDegenMode;
    setIsDegenMode(next);
    try {
      localStorage.setItem("degen_mode", String(next));
    } catch {}
  };

  return (
    <DegenModeContext.Provider value={{ isDegenMode, toggleDegenMode, isEligible }}>
      {children}
    </DegenModeContext.Provider>
  );
}

export function DegenModeToggle() {
  const { isDegenMode, toggleDegenMode, isEligible } = useDegenMode();
  const { connected } = useWallet();

  if (!connected) return null;

  return (
    <button
      onClick={isEligible ? toggleDegenMode : undefined}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
        isDegenMode
          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-[var(--color-text)] shadow-lg shadow-amber-500/30 animate-glow-pulse"
          : "glass-pill text-[var(--color-text-secondary)] hover:text-amber-500"
      } ${!isEligible ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      title={isEligible ? "Toggle Degen Mode" : "Hold $DEGEN tokens to unlock"}
    >
      <span className="text-sm">{isDegenMode ? "🔥" : "💀"}</span>
      {isDegenMode ? "DEGEN ON" : "DEGEN MODE"}
    </button>
  );
}

export function DegenGate({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  const { isDegenMode } = useDegenMode();

  if (!isDegenMode) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="glass p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5" />
        <div className="relative">
          <div className="text-4xl mb-3">🔒</div>
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">Degen Mode Required</h3>
          <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto mb-4">
            Connect your wallet and activate Degen Mode to unlock premium features, advanced analytics, and exclusive tools.
          </p>
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-amber-500">
            <span>🔥</span> Hold $DEGEN tokens to unlock
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
