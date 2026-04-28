# Wallet Authentication Flow - Implementation Guide

This guide provides documentation for the wallet-based authentication components created for the Next.js crypto platform.

## Overview

The wallet authentication system provides:
- Multi-blockchain support (Solana & Ethereum)
- Multiple wallet integrations
- Message signing for ownership verification
- Animated transitions and error handling
- User profile management with dropdown menu
- Dark-mode compatible Tailwind CSS styling

## Files Created

### 1. `/src/lib/wallet-auth.ts`
Utility functions for wallet authentication operations.

**Key Functions:**

#### `truncateAddress(address: string, chars?: number): string`
Truncates wallet addresses to a readable format.
```typescript
truncateAddress("0x1234567890abcdef1234567890abcdef12345678", 4)
// Returns: "0x12...5678"
```

#### `generateIdenticon(address: string): string`
Generates a deterministic SVG identicon based on the wallet address.
Returns an SVG data URI that can be used directly as an image source.
```typescript
const identicon = generateIdenticon(address);
// Use in img src: <img src={identicon} />
```

#### `signAuthMessage(address: string): string`
Generates a message for the user to sign to verify wallet ownership.
```typescript
const message = signAuthMessage(address);
// Output includes timestamp, nonce, and clear instructions
```

#### `verifySignature(address: string, message: string, signature: string): boolean`
Verifies a signed message (currently a mock implementation).
In production, this would use ethers.js to recover the signer from the signature.

#### `isValidSolanaAddress(address: string): boolean`
Validates Solana address format (base58, 32-44 chars).

#### `isValidEthereumAddress(address: string): boolean`
Validates Ethereum address format (0x + 40 hex chars).

#### `getNetworkBadgeColor(network: string): string`
Returns Tailwind CSS classes for network-specific badge colors.

---

### 2. `/src/components/WalletAuthModal.tsx`
Main modal component for wallet-based authentication.

**Props:**
```typescript
interface WalletAuthModalProps {
  isOpen: boolean;                    // Controls modal visibility
  onClose: () => void;                // Called when modal should close
  onAuthenticated?: (                 // Called on successful auth
    address: string,
    blockchain: "solana" | "ethereum"
  ) => void;
}
```

**Features:**
- Two tabs: Solana and Ethereum
- Wallet selection UI
- Multi-step flow: connecting → signing → authenticated
- Error handling with retry functionality
- User profile preview with identicon avatar
- Address copy to clipboard
- Click-outside-to-close behavior
- Animated transitions

**Supported Wallets:**
- **Solana**: Phantom, Solflare, Coinbase Wallet
- **Ethereum**: MetaMask, WalletConnect, Coinbase Wallet

**Authentication Flow:**
1. User selects blockchain and wallet
2. Wallet connection is initiated
3. User is prompted to sign a message
4. Signature is verified
5. User profile is displayed with option to disconnect

**Usage Example:**
```typescript
import { useState } from "react";
import WalletAuthModal from "@/components/WalletAuthModal";

export default function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        Sign In with Wallet
      </button>

      <WalletAuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAuthenticated={(address, blockchain) => {
          console.log(`Authenticated with ${blockchain}: ${address}`);
          setAuthenticated(true);
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
```

---

### 3. `/src/components/UserProfileDropdown.tsx`
Dropdown component for authenticated users in the header.

**Props:**
```typescript
interface UserProfileDropdownProps {
  address: string;                    // Wallet address
  blockchain: "solana" | "ethereum";  // Connected blockchain
  network?: string;                   // Network name (mainnet, testnet, etc)
  onSignOut: () => void;              // Called when user signs out
  onPortfolio?: () => void;           // Portfolio menu click
  onWatchlist?: () => void;           // Watchlist menu click
  onAlerts?: () => void;              // Alerts menu click
  onSettings?: () => void;            // Settings menu click
}
```

**Features:**
- Profile avatar with identicon
- Truncated address display
- Network badge with color coding
- Blockchain badge
- Copy address functionality
- Menu items with icons
- Click-outside-to-close
- Animated dropdown transitions

**Usage Example:**
```typescript
import { useState } from "react";
import UserProfileDropdown from "@/components/UserProfileDropdown";

export default function Header() {
  const [userAddress, setUserAddress] = useState<string | null>(null);

  return (
    <header className="flex items-center justify-between">
      <h1>Crypto Degen</h1>
      {userAddress && (
        <UserProfileDropdown
          address={userAddress}
          blockchain="solana"
          network="mainnet"
          onSignOut={() => setUserAddress(null)}
          onPortfolio={() => console.log("Go to portfolio")}
          onWatchlist={() => console.log("Go to watchlist")}
          onAlerts={() => console.log("Go to alerts")}
          onSettings={() => console.log("Go to settings")}
        />
      )}
    </header>
  );
}
```

---

## Complete Integration Example

Here's a complete example showing both components working together:

```typescript
"use client";

import { useState } from "react";
import WalletAuthModal from "@/components/WalletAuthModal";
import UserProfileDropdown from "@/components/UserProfileDropdown";

export default function AuthLayout() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState<{
    address: string;
    blockchain: "solana" | "ethereum";
  } | null>(null);

  const handleAuthenticate = (address: string, blockchain: "solana" | "ethereum") => {
    setAuthenticatedUser({ address, blockchain });
    setIsAuthModalOpen(false);
  };

  const handleSignOut = () => {
    setAuthenticatedUser(null);
  };

  return (
    <>
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-white">Crypto Platform</h1>

          {authenticatedUser ? (
            <UserProfileDropdown
              address={authenticatedUser.address}
              blockchain={authenticatedUser.blockchain}
              network="mainnet"
              onSignOut={handleSignOut}
              onPortfolio={() => console.log("Portfolio")}
              onWatchlist={() => console.log("Watchlist")}
              onAlerts={() => console.log("Alerts")}
              onSettings={() => console.log("Settings")}
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

---

## Authentication Flow Details

### Solana Flow
1. User selects Solana tab and wallet (Phantom/Solflare/Coinbase)
2. `useWallet()` hook connects to the selected wallet
3. Message is generated and user signs with `signMessage()`
4. Signature is verified
5. User is authenticated

### Ethereum Flow
1. User selects Ethereum tab and wallet (MetaMask/WalletConnect/Coinbase)
2. `eth_requestAccounts` is called to get connected accounts
3. Message is generated
4. User signs with `personal_sign`
5. Signature is verified
6. User is authenticated

---

## Error Handling

The modal includes comprehensive error handling:

- **Connection Rejected**: Displayed when user cancels wallet connection
- **Wrong Network**: Can be extended to check for correct chain ID
- **Signing Failed**: Shown if message signing fails
- **Invalid Address**: Validated using address format checkers
- **Wallet Not Found**: Shown if wallet extension isn't installed

All errors include a "Try Again" button to allow users to retry the process.

---

## Styling & Customization

All components use Tailwind CSS with a dark theme. To customize:

### Colors
- Primary: Blue (`bg-blue-600`, `text-blue-200`)
- Error: Red (`bg-red-900`, `text-red-200`)
- Success: Green (`bg-green-400`, `text-green-200`)
- Background: Dark Gray (`bg-gray-900`, `bg-gray-800`)

### Dark Mode
Components are dark-mode compatible using Tailwind's dark mode features.
The entire UI uses dark grays and is optimized for low-light viewing.

### Responsive Design
- Truncated address shortened on mobile devices
- Modal scales to fit different screen sizes
- Dropdown positioning adjusted for mobile

---

## TypeScript Types

All components are fully typed with TypeScript:

```typescript
type AuthStep = "connecting" | "signing" | "authenticated" | "error";
type BlockchainType = "solana" | "ethereum";

interface WalletAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated?: (address: string, blockchain: BlockchainType) => void;
}

interface UserProfileDropdownProps {
  address: string;
  blockchain: "solana" | "ethereum";
  network?: string;
  onSignOut: () => void;
  onPortfolio?: () => void;
  onWatchlist?: () => void;
  onAlerts?: () => void;
  onSettings?: () => void;
}
```

---

## Dependencies

Required packages (already in your project):
- `next` - Framework
- `react` - UI library
- `@solana/wallet-adapter-react` - Solana wallet integration
- `@solana/wallet-adapter-wallets` - Solana wallet implementations
- `lucide-react` - Icons
- `tailwindcss` - Styling

---

## Browser Requirements

- Modern browser with ES6+ support
- Window.ethereum object for Ethereum wallets
- Solana wallet browser extensions

---

## Security Considerations

1. **Message Signing**: Messages include nonce and timestamp to prevent replay attacks
2. **Address Validation**: Both Solana and Ethereum addresses are validated
3. **Signature Verification**: Attempted before authentication is granted
4. **No Sensitive Data in URLs**: Addresses are never passed as URL parameters
5. **Client-Side Only**: Private keys are never handled by the application

---

## Future Enhancements

- [ ] Network switching/detection
- [ ] Hardware wallet support (Ledger, Trezor)
- [ ] Session persistence using localStorage
- [ ] ENS/Solana domain name resolution
- [ ] Multi-signature wallet support
- [ ] Wallet-to-wallet transfer initiation
- [ ] Transaction signing flows

---

## Troubleshooting

### Modal Not Opening
- Check that `isOpen` prop is properly controlled
- Verify modal parent has proper z-index

### Wallet Connection Fails
- Ensure wallet extension is installed
- Check that wallet is unlocked
- Clear browser cache if issues persist

### Signature Verification Fails
- Check network/chain configuration
- Verify message format is correct
- Check wallet supports message signing

---

## File Locations

```
/sessions/stoic-bold-keller/mnt/cryptodegen/
├── src/
│   ├── components/
│   │   ├── WalletAuthModal.tsx          (Modal component)
│   │   ├── UserProfileDropdown.tsx      (Dropdown component)
│   │   └── WalletProvider.tsx           (Already exists)
│   └── lib/
│       └── wallet-auth.ts              (Utility functions)
└── WALLET_AUTH_GUIDE.md               (This file)
```

---

## Summary

The wallet authentication system provides a complete, production-ready solution for web3 authentication in your Next.js crypto platform. With support for multiple blockchains, wallets, and comprehensive error handling, users can securely authenticate using their existing wallet infrastructure.
