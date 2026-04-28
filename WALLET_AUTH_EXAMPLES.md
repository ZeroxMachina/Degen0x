# Wallet Authentication - Usage Examples

Complete working examples for integrating wallet authentication into your Next.js app.

## Example 1: Simple Login Page

```typescript
// app/auth/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import WalletAuthModal from "@/components/WalletAuthModal";

export default function AuthPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleAuthenticated = (address: string, blockchain: string) => {
    // Save to session/database
    localStorage.setItem("walletAddress", address);
    localStorage.setItem("blockchain", blockchain);

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome to Crypto App
        </h1>

        <WalletAuthModal
          isOpen={isOpen}
          onClose={() => {
            // User closed without authenticating
            setIsOpen(false);
          }}
          onAuthenticated={handleAuthenticated}
        />
      </div>
    </div>
  );
}
```

## Example 2: Header with Auth Integration

```typescript
// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import WalletAuthModal from "@/components/WalletAuthModal";
import UserProfileDropdown from "@/components/UserProfileDropdown";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<{
    address: string;
    blockchain: "solana" | "ethereum";
  } | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const address = localStorage.getItem("walletAddress");
    const blockchain = localStorage.getItem("blockchain");

    if (address && blockchain) {
      setUser({
        address,
        blockchain: blockchain as "solana" | "ethereum",
      });
    }

    setIsLoading(false);
  }, []);

  const handleAuthenticate = (address: string, blockchain: "solana" | "ethereum") => {
    setUser({ address, blockchain });
    localStorage.setItem("walletAddress", address);
    localStorage.setItem("blockchain", blockchain);
    setIsAuthModalOpen(false);
  };

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("blockchain");
  };

  const handlePortfolio = () => {
    router.push("/portfolio");
  };

  const handleSettings = () => {
    router.push("/settings");
  };

  if (isLoading) {
    return (
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Crypto App</h1>
          <div className="h-10 w-32 bg-gray-800 rounded-lg animate-pulse" />
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Crypto App</h1>

          {user ? (
            <UserProfileDropdown
              address={user.address}
              blockchain={user.blockchain}
              network="mainnet"
              onSignOut={handleSignOut}
              onPortfolio={handlePortfolio}
              onSettings={handleSettings}
            />
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
            >
              Sign In with Wallet
            </button>
          )}
        </div>
      </header>

      <WalletAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthenticated={handleAuthenticate}
      />
    </>
  );
}
```

## Example 3: Protected Dashboard with User Context

```typescript
// contexts/AuthContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthUser {
  address: string;
  blockchain: "solana" | "ethereum";
  connectedAt: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  authenticate: (address: string, blockchain: "solana" | "ethereum") => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load persisted user
    const address = localStorage.getItem("walletAddress");
    const blockchain = localStorage.getItem("blockchain");
    const connectedAt = localStorage.getItem("connectedAt");

    if (address && blockchain) {
      setUser({
        address,
        blockchain: blockchain as "solana" | "ethereum",
        connectedAt: connectedAt || new Date().toISOString(),
      });
    }

    setIsLoading(false);
  }, []);

  const authenticate = (address: string, blockchain: "solana" | "ethereum") => {
    const connectedAt = new Date().toISOString();
    setUser({ address, blockchain, connectedAt });

    localStorage.setItem("walletAddress", address);
    localStorage.setItem("blockchain", blockchain);
    localStorage.setItem("connectedAt", connectedAt);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("blockchain");
    localStorage.removeItem("connectedAt");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, authenticate, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
```

## Example 4: Login Modal Trigger Button

```typescript
// components/LoginButton.tsx
"use client";

import { useState } from "react";
import WalletAuthModal from "@/components/WalletAuthModal";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { authenticate } = useAuth();

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg text-white font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        🚀 Sign In with Wallet
      </button>

      <WalletAuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAuthenticated={(address, blockchain) => {
          authenticate(address, blockchain);
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
```

## Example 5: Protected Route with Redirect

```typescript
// app/dashboard/layout.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Header />
      <main className="bg-gray-900 min-h-[calc(100vh-64px)]">{children}</main>
    </>
  );
}
```

## Example 6: Wallet Info Display Component

```typescript
// components/WalletInfo.tsx
"use client";

import { truncateAddress, generateIdenticon, formatNetwork } from "@/lib/wallet-auth";
import { useAuth } from "@/contexts/AuthContext";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function WalletInfo() {
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);

  if (!user) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(user.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const connectedDate = new Date(user.connectedAt);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 max-w-md">
      <h2 className="text-xl font-bold text-white mb-4">Wallet Information</h2>

      <div className="flex items-center gap-4 mb-4">
        <img
          src={generateIdenticon(user.address)}
          alt="Wallet Avatar"
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />
        <div>
          <p className="text-gray-400 text-sm">Connected Wallet</p>
          <p className="text-white font-mono font-bold">
            {truncateAddress(user.address)}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Blockchain:</span>
          <span className="text-white capitalize font-medium">
            {user.blockchain}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Connected:</span>
          <span className="text-white">
            {connectedDate.toLocaleDateString()} {connectedDate.toLocaleTimeString()}
          </span>
        </div>
      </div>

      <button
        onClick={handleCopy}
        className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy Full Address
          </>
        )}
      </button>
    </div>
  );
}
```

## Example 7: Multiple Blockchain Portfolio View

```typescript
// app/portfolio/page.tsx
"use client";

import { useAuth } from "@/contexts/AuthContext";
import { truncateAddress } from "@/lib/wallet-auth";
import UserProfileDropdown from "@/components/UserProfileDropdown";

export default function PortfolioPage() {
  const { user, signOut } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Portfolio</h1>
          <UserProfileDropdown
            address={user.address}
            blockchain={user.blockchain}
            onSignOut={signOut}
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">
            {user.blockchain === "solana" ? "Solana Wallet" : "Ethereum Wallet"}
          </h2>
          <p className="text-gray-300">Address: {truncateAddress(user.address, 10)}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Token balances, NFTs, DeFi positions, etc. */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-2">Total Value</h3>
            <p className="text-3xl font-bold text-blue-400">$0.00</p>
          </div>
        </div>
      </main>
    </div>
  );
}
```

## Example 8: Error Boundary with Auth Fallback

```typescript
// components/AuthErrorBoundary.tsx
"use client";

import { Component, ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class AuthErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Auth error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="bg-gray-800 border border-red-800 rounded-lg p-8 max-w-md">
            <h2 className="text-xl font-bold text-red-400 mb-4">
              Authentication Error
            </h2>
            <p className="text-gray-300 mb-6">
              Something went wrong with your wallet connection.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                localStorage.clear();
                window.location.reload();
              }}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AuthErrorBoundary;
```

---

## Integration Checklist

- [ ] Wrap app with `AuthProvider`
- [ ] Add `Header` component to layout
- [ ] Import `WalletAuthModal` in auth pages
- [ ] Use `useAuth()` hook in protected components
- [ ] Test with Phantom wallet on Solana
- [ ] Test with MetaMask on Ethereum
- [ ] Implement API authentication endpoint
- [ ] Add JWT token generation on backend
- [ ] Persist session to database
- [ ] Handle session expiration
- [ ] Add logout functionality
- [ ] Test mobile responsiveness

---

See **WALLET_AUTH_GUIDE.md** for comprehensive documentation.
