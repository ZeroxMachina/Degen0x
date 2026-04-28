"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { X, Loader2, Check, AlertCircle } from "lucide-react";
import {
  truncateAddress,
  generateIdenticon,
  signAuthMessage,
  verifySignature,
  isValidEthereumAddress,
} from "@/lib/wallet-auth";

type AuthStep = "connecting" | "signing" | "authenticated" | "error";
type BlockchainType = "solana" | "ethereum";

interface WalletAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated?: (address: string, blockchain: BlockchainType) => void;
}

interface AuthState {
  step: AuthStep;
  address: string | null;
  blockchain: BlockchainType | null;
  error: string | null;
  selectedWallet: string | null;
}

const SOLANA_WALLETS = [
  { name: "Phantom", id: "phantom" },
  { name: "Solflare", id: "solflare" },
  { name: "Coinbase Wallet", id: "coinbase" },
];

const ETHEREUM_WALLETS = [
  { name: "MetaMask", id: "metamask" },
  { name: "WalletConnect", id: "walletconnect" },
  { name: "Coinbase Wallet", id: "coinbase" },
];

export default function WalletAuthModal({
  isOpen,
  onClose,
  onAuthenticated,
}: WalletAuthModalProps) {
  const { publicKey, signMessage, connect, connecting, disconnect } =
    useWallet();

  const [activeTab, setActiveTab] = useState<BlockchainType>("solana");
  const [authState, setAuthState] = useState<AuthState>({
    step: "connecting",
    address: null,
    blockchain: null,
    error: null,
    selectedWallet: null,
  });
  const [wcUri, setWcUri] = useState<string | null>(null);
  const [wcQrDataUrl, setWcQrDataUrl] = useState<string | null>(null);
  const wcProviderRef = useRef<any>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setAuthState({
        step: "connecting",
        address: null,
        blockchain: null,
        error: null,
        selectedWallet: null,
      });
    }
  }, [isOpen]);

  // Handle Solana wallet connection
  const handleSolanaConnect = useCallback(
    async (walletName: string) => {
      try {
        setAuthState((prev) => ({
          ...prev,
          step: "connecting",
          selectedWallet: walletName,
          error: null,
        }));

        if (!publicKey) {
          setAuthState((prev) => ({
            ...prev,
            step: "error",
            error: "Please connect your Solana wallet first",
          }));
          return;
        }

        // Move to signing step
        setAuthState((prev) => ({
          ...prev,
          step: "signing",
          address: publicKey.toString(),
          blockchain: "solana",
        }));

        // Generate auth message
        const message = signAuthMessage(publicKey.toString());

        // Sign the message
        if (!signMessage) {
          setAuthState((prev) => ({
            ...prev,
            step: "error",
            error: "Wallet does not support message signing",
          }));
          return;
        }

        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        // Verify signature
        const isValid = verifySignature(
          publicKey.toString(),
          message,
          Buffer.from(signature).toString("hex")
        );

        if (isValid) {
          setAuthState((prev) => ({
            ...prev,
            step: "authenticated",
          }));

          // Call callback after a short delay for UI animation
          setTimeout(() => {
            onAuthenticated?.(publicKey.toString(), "solana");
          }, 500);
        } else {
          setAuthState((prev) => ({
            ...prev,
            step: "error",
            error: "Signature verification failed",
          }));
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Connection failed";

        setAuthState((prev) => ({
          ...prev,
          step: "error",
          error: errorMessage.includes("User rejected")
            ? "You cancelled the connection"
            : errorMessage,
        }));
      }
    },
    [publicKey, signMessage, onAuthenticated]
  );

  // Handle Ethereum wallet connection
  const handleEthereumConnect = useCallback(
    async (walletName: string) => {
      try {
        setAuthState((prev) => ({
          ...prev,
          step: "connecting",
          selectedWallet: walletName,
          error: null,
        }));

        let ethereum = (window as any).ethereum;

        if (!ethereum) {
          setAuthState((prev) => ({
            ...prev,
            step: "error",
            error: `${walletName} not found. Please install it first.`,
          }));
          return;
        }

        // WalletConnect v2 — uses UniversalProvider + QR code
        if (walletName === "walletconnect") {
          try {
            // Disconnect any previous session
            if (wcProviderRef.current) {
              try { await wcProviderRef.current.disconnect(); } catch (_) {}
              wcProviderRef.current = null;
            }
            setWcUri(null);
            setWcQrDataUrl(null);

            const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;
            if (!projectId) throw new Error("WalletConnect project ID not configured");

            // Dynamically import to avoid SSR issues
            const { UniversalProvider } = await import("@walletconnect/universal-provider");
            const QRCode = (await import("qrcode")).default;

            const provider = await UniversalProvider.init({
              projectId,
              metadata: {
                name: "degen0x",
                description: "Crypto tools, comparisons & education",
                url: "https://degen0x.com",
                icons: ["https://degen0x.com/icon.png"],
              },
            });
            wcProviderRef.current = provider;

            // Listen for URI display (triggers QR code)
            provider.on("display_uri", async (uri: string) => {
              setWcUri(uri);
              try {
                const dataUrl = await QRCode.toDataURL(uri, { width: 280, margin: 2, color: { dark: "#000", light: "#fff" } });
                setWcQrDataUrl(dataUrl);
              } catch (_) {}
            });

            // Connect to Ethereum mainnet
            await provider.connect({
              namespaces: {
                eip155: {
                  methods: ["eth_sendTransaction", "personal_sign", "eth_accounts"],
                  chains: ["eip155:1"],
                  events: ["chainChanged", "accountsChanged"],
                },
              },
            });

            // Get accounts after connection
            const accounts: string[] = await provider.request({ method: "eth_accounts" }, "eip155:1");
            if (!accounts || accounts.length === 0) throw new Error("No accounts returned from WalletConnect");

            const address = accounts[0];
            setWcUri(null);
            setWcQrDataUrl(null);

            // Move to signing step
            setAuthState((prev) => ({ ...prev, step: "signing", address, blockchain: "ethereum" }));

            const message = signAuthMessage(address);
            const signature = await provider.request({ method: "personal_sign", params: [message, address] }, "eip155:1");
            const isValid = verifySignature(address, message, signature as string);

            if (isValid) {
              setAuthState((prev) => ({ ...prev, step: "authenticated" }));
              setTimeout(() => { onAuthenticated?.(address, "ethereum"); }, 500);
            } else {
              setAuthState((prev) => ({ ...prev, step: "error", error: "Signature verification failed" }));
            }
          } catch (wcError) {
            const msg = wcError instanceof Error ? wcError.message : "WalletConnect failed";
            setWcUri(null);
            setWcQrDataUrl(null);
            setAuthState((prev) => ({
              ...prev,
              step: "error",
              error: msg.includes("User rejected") || msg.includes("user rejected")
                ? "You cancelled the connection"
                : msg,
            }));
          }
          return;
        }

        // Request account connection
        const accounts: string[] = await ethereum.request({
          method: "eth_requestAccounts",
        });

        if (!accounts || accounts.length === 0) {
          setAuthState((prev) => ({
            ...prev,
            step: "error",
            error: "No accounts found",
          }));
          return;
        }

        const address = accounts[0];

        if (!isValidEthereumAddress(address)) {
          setAuthState((prev) => ({
            ...prev,
            step: "error",
            error: "Invalid Ethereum address",
          }));
          return;
        }

        // Move to signing step
        setAuthState((prev) => ({
          ...prev,
          step: "signing",
          address,
          blockchain: "ethereum",
        }));

        // Generate auth message
        const message = signAuthMessage(address);

        // Sign the message using personal_sign
        const signature = await ethereum.request({
          method: "personal_sign",
          params: [message, address],
        });

        // Verify signature
        const isValid = verifySignature(address, message, signature);

        if (isValid) {
          setAuthState((prev) => ({
            ...prev,
            step: "authenticated",
          }));

          // Call callback after a short delay for UI animation
          setTimeout(() => {
            onAuthenticated?.(address, "ethereum");
          }, 500);
        } else {
          setAuthState((prev) => ({
            ...prev,
            step: "error",
            error: "Signature verification failed",
          }));
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Connection failed";

        setAuthState((prev) => ({
          ...prev,
          step: "error",
          error: errorMessage.includes("User rejected")
            ? "You cancelled the signing"
            : errorMessage,
        }));
      }
    },
    [onAuthenticated]
  );

  const handleRetry = useCallback(() => {
    setAuthState((prev) => ({
      ...prev,
      step: "connecting",
      error: null,
      address: null,
    }));
  }, []);

  const handleClose = useCallback(() => {
    if (authState.address) {
      disconnect();
    }
    // Disconnect any pending WalletConnect session
    if (wcProviderRef.current) {
      try { wcProviderRef.current.disconnect(); } catch (_) {}
      wcProviderRef.current = null;
    }
    setWcUri(null);
    setWcQrDataUrl(null);
    onClose();
  }, [authState.address, disconnect, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        <div
          className="bg-gray-900 border border-gray-800 rounded-lg max-w-md w-full pointer-events-auto shadow-xl transition-all duration-300 animate-in fade-in zoom-in-95"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white">
              {authState.step === "authenticated"
                ? "Authenticated"
                : "Sign In with Wallet"}
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {authState.step === "authenticated" && authState.address ? (
              <AuthenticatedView
                address={authState.address}
                blockchain={authState.blockchain}
                onClose={handleClose}
              />
            ) : authState.step === "error" ? (
              <ErrorView error={authState.error} onRetry={handleRetry} />
            ) : (
              <>
                {/* Tabs */}
                <div className="flex gap-2 mb-6 border-b border-gray-800">
                  <button
                    onClick={() => setActiveTab("solana")}
                    className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                      activeTab === "solana"
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    Solana
                    {activeTab === "solana" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab("ethereum")}
                    className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                      activeTab === "ethereum"
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    Ethereum
                    {activeTab === "ethereum" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
                    )}
                  </button>
                </div>

                {/* Wallet Options */}
                <div className="space-y-3">
                  {activeTab === "solana" ? (
                    <>
                      {SOLANA_WALLETS.map((wallet) => (
                        <WalletButton
                          key={wallet.id}
                          name={wallet.name}
                          loading={
                            authState.selectedWallet === wallet.name &&
                            (authState.step === "connecting" ||
                              authState.step === "signing")
                          }
                          onClick={() => handleSolanaConnect(wallet.name)}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      {ETHEREUM_WALLETS.map((wallet) => (
                        <WalletButton
                          key={wallet.id}
                          name={wallet.name}
                          loading={
                            authState.selectedWallet === wallet.name &&
                            (authState.step === "connecting" ||
                              authState.step === "signing")
                          }
                          onClick={() => handleEthereumConnect(wallet.name)}
                        />
                      ))}
                    </>
                  )}
                </div>

                {/* WalletConnect QR Code Panel */}
                {wcQrDataUrl && (
                  <div className="mt-6 flex flex-col items-center gap-3">
                    <p className="text-sm text-gray-300 font-medium">Scan with your mobile wallet</p>
                    <div className="p-3 bg-white rounded-xl inline-block shadow-lg">
                      <img src={wcQrDataUrl} alt="WalletConnect QR Code" width={280} height={280} />
                    </div>
                    {wcUri && (
                      <button
                        onClick={() => { navigator.clipboard.writeText(wcUri); }}
                        className="text-xs text-gray-400 hover:text-gray-200 transition-colors underline underline-offset-2"
                      >
                        Copy connection URI
                      </button>
                    )}
                    <p className="text-xs text-gray-500">Waiting for wallet connection…</p>
                  </div>
                )}

                {/* Status Message */}
                {authState.step === "signing" && (
                  <div className="mt-6 p-3 bg-blue-900/20 border border-blue-800 rounded-lg flex items-start gap-3">
                    <Loader2 size={16} className="mt-0.5 text-blue-400 animate-spin flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-200">
                        Please sign the message in your wallet
                      </p>
                      <p className="text-xs text-blue-300 mt-1">
                        This verifies ownership of your wallet
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

interface WalletButtonProps {
  name: string;
  loading?: boolean;
  onClick: () => void;
}

function WalletButton({ name, loading, onClick }: WalletButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-800 disabled:opacity-50 border border-gray-700 hover:border-gray-600 rounded-lg text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
    >
      {loading && <Loader2 size={16} className="animate-spin" />}
      {name}
    </button>
  );
}

interface AuthenticatedViewProps {
  address: string;
  blockchain: BlockchainType | null;
  onClose: () => void;
}

function AuthenticatedView({
  address,
  blockchain,
  onClose,
}: AuthenticatedViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src={generateIdenticon(address)}
          alt="Connected wallet address avatar"
          className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-lg"
        />
      </div>

      {/* Address */}
      <div className="text-center">
        <p className="text-gray-400 text-sm mb-2">Connected Address</p>
        <p className="text-lg font-mono font-bold text-white">
          {truncateAddress(address, 6)}
        </p>
      </div>

      {/* Blockchain Badge */}
      {blockchain && (
        <div className="flex justify-center">
          <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-xs font-medium text-blue-200 capitalize">
            {blockchain === "solana" ? "Solana Network" : "Ethereum Network"}
          </span>
        </div>
      )}

      {/* Copy Button */}
      <button
        onClick={handleCopyAddress}
        className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm text-white font-medium transition-all duration-200 flex items-center justify-center gap-2"
      >
        {copied ? (
          <>
            <Check size={16} className="text-green-400" />
            Copied!
          </>
        ) : (
          <>
            Copy Address
          </>
        )}
      </button>

      {/* Disconnect Button */}
      <button
        onClick={onClose}
        className="w-full px-4 py-2 bg-red-900/20 hover:bg-red-900/30 border border-red-800 rounded-lg text-sm text-red-200 font-medium transition-all duration-200"
      >
        Disconnect
      </button>

      {/* Success Message */}
      <div className="mt-4 p-3 bg-green-900/20 border border-green-800 rounded-lg flex items-start gap-2">
        <Check size={16} className="mt-0.5 text-green-400 flex-shrink-0" />
        <p className="text-sm text-green-200">
          Successfully authenticated with your wallet!
        </p>
      </div>
    </div>
  );
}

interface ErrorViewProps {
  error: string | null;
  onRetry: () => void;
}

function ErrorView({ error, onRetry }: ErrorViewProps) {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg flex items-start gap-3">
        <AlertCircle size={20} className="mt-0.5 text-red-400 flex-shrink-0" />
        <div>
          <p className="font-semibold text-red-200 text-sm">
            Authentication Error
          </p>
          <p className="text-sm text-red-300 mt-1">{error}</p>
        </div>
      </div>

      <button
        onClick={onRetry}
        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 border border-blue-500 rounded-lg text-white font-medium text-sm transition-all duration-200"
      >
        Try Again
      </button>
    </div>
  );
}
