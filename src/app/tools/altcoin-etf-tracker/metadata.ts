import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Altcoin ETF Tracker 2026 — Live SOL, XRP & ETH ETF Data | ${SITE_NAME}`,
  description:
    "Track live AUM, inflows, fees, and performance for all US spot Solana, XRP, and Ethereum ETFs. Compare BSOL, VSOL, XRPB, ETHA, and 20+ more altcoin ETFs with staking yield data.",
  keywords: [
    "altcoin ETF tracker",
    "Solana ETF AUM",
    "XRP ETF tracker",
    "BSOL ETF",
    "VSOL ETF",
    "XRPB ETF",
    "ETHA ETF",
    "crypto ETF comparison",
    "altcoin ETF fees",
    "spot crypto ETF data 2026",
  ],
  openGraph: {
    title: "Altcoin ETF Tracker — Live SOL, XRP & ETH ETF Data",
    description:
      "Live AUM, inflows, staking yields, and fees for all US altcoin spot ETFs. Updated March 2026.",
    url: `${SITE_URL}/tools/altcoin-etf-tracker`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-altcoin-etf-tracker.png`,
        width: 1200,
        height: 630,
        alt: "Altcoin ETF Tracker — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altcoin ETF Tracker — Live SOL, XRP & ETH ETF Data",
    description:
      "Compare BSOL, VSOL, XRPB, ETHA and 20+ altcoin ETFs. Live AUM, fees, staking yields.",
    images: [`${SITE_URL}/og-altcoin-etf-tracker.png`],
  },
};
