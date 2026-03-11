"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useCallback } from "react";

export default function ConnectWalletButton({ compact = false }: { compact?: boolean }) {
  const { publicKey, disconnect, connected } = useWallet();
  const { setVisible } = useWalletModal();

  const handleClick = useCallback(() => {
    if (connected) {
      disconnect();
    } else {
      setVisible(true);
    }
  }, [connected, disconnect, setVisible]);

  const shortAddress = publicKey
    ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`
    : null;

  if (compact) {
    return (
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          connected
            ? "glass-pill text-[var(--color-text)]"
            : "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
        }`}
      >
        {connected ? (
          <>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {shortAddress}
          </>
        ) : (
          <>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
            </svg>
            Connect
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
        connected
          ? "glass glass-hover text-[var(--color-text)]"
          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02]"
      }`}
    >
      {connected ? (
        <>
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <span>{shortAddress}</span>
          <span className="text-xs text-[var(--color-text-secondary)] ml-1">Connected</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
          </svg>
          Connect Wallet
        </>
      )}
    </button>
  );
}
