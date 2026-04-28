import type { Metadata } from "next";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Wallet Comparison Tool - Compare Crypto Wallets (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Interactive crypto wallet comparison tool. Compare Ledger, Trezor, MetaMask, Phantom, and more side by side on features, security, pricing, and chain support.`,
};

export default function WalletComparisonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
