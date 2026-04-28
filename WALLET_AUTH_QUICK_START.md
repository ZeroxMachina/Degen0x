# Wallet Authentication - Quick Start

## 3-Minute Setup

### 1. Import Components
```typescript
import WalletAuthModal from "@/components/WalletAuthModal";
import UserProfileDropdown from "@/components/UserProfileDropdown";
```

### 2. Add to Your App
```typescript
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState<{
    address: string;
    blockchain: "solana" | "ethereum";
  } | null>(null);

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.address.slice(0, 6)}...</h1>
          <UserProfileDropdown
            address={user.address}
            blockchain={user.blockchain}
            onSignOut={() => setUser(null)}
          />
        </>
      ) : (
        <button onClick={() => setIsAuthOpen(true)}>
          Sign In
        </button>
      )}

      <WalletAuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthenticated={(address, blockchain) => {
          setUser({ address, blockchain });
          setIsAuthOpen(false);
        }}
      />
    </div>
  );
}
```

## Files

| File | Purpose |
|------|---------|
| `src/lib/wallet-auth.ts` | Utility functions for address validation, identicon generation, message signing |
| `src/components/WalletAuthModal.tsx` | Modal component with Solana/Ethereum wallet selection and signing flow |
| `src/components/UserProfileDropdown.tsx` | Header dropdown for authenticated users with copy/menu options |

## Key Features

✅ **Multi-Blockchain**: Solana & Ethereum support
✅ **Multiple Wallets**: Phantom, Solflare, MetaMask, WalletConnect, Coinbase
✅ **Message Signing**: Verify wallet ownership
✅ **Animated UI**: Smooth transitions between auth states
✅ **Error Handling**: User-friendly error messages with retry
✅ **Identicons**: Auto-generated avatars from wallet address
✅ **Dark Mode**: Beautiful dark theme included
✅ **TypeScript**: Fully typed with proper interfaces
✅ **Responsive**: Mobile-friendly design

## Utility Functions

```typescript
import {
  truncateAddress,           // "0x1234...5678"
  generateIdenticon,         // SVG identicon as data URI
  signAuthMessage,           // Message to sign
  verifySignature,           // Verify signed message
  isValidSolanaAddress,      // Validate Solana address
  isValidEthereumAddress,    // Validate Ethereum address
  formatNetwork,             // Format network name
  getNetworkBadgeColor       // Network badge CSS
} from "@/lib/wallet-auth";
```

## Modal Props

```typescript
<WalletAuthModal
  isOpen={boolean}                          // Show/hide modal
  onClose={() => {}}                        // Close handler
  onAuthenticated={(address, chain) => {}}  // Success handler
/>
```

## Dropdown Props

```typescript
<UserProfileDropdown
  address={string}                   // Wallet address
  blockchain={"solana"|"ethereum"}   // Connected chain
  network="mainnet"                  // Optional: network name
  onSignOut={() => {}}               // Sign out handler
  onPortfolio={() => {}}             // Optional: menu handlers
  onWatchlist={() => {}}
  onAlerts={() => {}}
  onSettings={() => {}}
/>
```

## Styling

- **Color Scheme**: Dark grays, blues, reds, greens
- **Framework**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: CSS transitions and fade-in effects
- **Responsive**: Works on mobile, tablet, desktop

## What's Included

### WalletAuthModal
- Multi-step authentication flow
- Solana wallet selection (Phantom, Solflare, Coinbase)
- Ethereum wallet selection (MetaMask, WalletConnect, Coinbase)
- Message signing verification
- User profile preview with identicon
- Error handling with retry
- Animated state transitions

### UserProfileDropdown
- Profile avatar with identicon
- Truncated address display
- Network badge (Mainnet/Testnet)
- Blockchain badge (Solana/Ethereum)
- Copy address to clipboard
- Menu items (Portfolio, Watchlist, Alerts, Settings)
- Sign out button
- Click-outside-to-close

## Example: Full Integration

```typescript
"use client";

import { useState } from "react";
import WalletAuthModal from "@/components/WalletAuthModal";
import UserProfileDropdown from "@/components/UserProfileDropdown";

export default function Layout() {
  const [authenticated, setAuthenticated] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [user, setUser] = useState({
    address: "",
    blockchain: "solana" as const,
  });

  return (
    <>
      <header className="border-b border-gray-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white font-bold">Crypto App</h1>

          {authenticated ? (
            <UserProfileDropdown
              address={user.address}
              blockchain={user.blockchain}
              onSignOut={() => {
                setAuthenticated(false);
                setUser({ address: "", blockchain: "solana" });
              }}
            />
          ) : (
            <button
              onClick={() => setAuthModal(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Sign In
            </button>
          )}
        </div>
      </header>

      <WalletAuthModal
        isOpen={authModal}
        onClose={() => setAuthModal(false)}
        onAuthenticated={(address, blockchain) => {
          setUser({ address, blockchain });
          setAuthenticated(true);
          setAuthModal(false);
        }}
      />
    </>
  );
}
```

## Next Steps

1. Review `WALLET_AUTH_GUIDE.md` for detailed documentation
2. Integrate components into your app layout
3. Add user session management (localStorage, cookies, database)
4. Customize styling as needed
5. Test with wallet extensions (Phantom, MetaMask, etc.)

---

**Full Documentation**: See `WALLET_AUTH_GUIDE.md` for comprehensive details, error handling, troubleshooting, and advanced customization.
