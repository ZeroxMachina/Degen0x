import { Metadata } from "next";
import SavedWatchlists from "@/components/SavedWatchlists";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `My Watchlists — ${SITE_NAME}`,
  description: "Create and manage custom crypto watchlists. Track prices, 24h changes, market caps, and sparkline charts for your favorite tokens.",
  keywords: ["crypto watchlist", "token tracker", "price alerts", "portfolio tracker", "crypto dashboard"],
};

export default function WatchlistsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <SavedWatchlists />
    </div>
  );
}
