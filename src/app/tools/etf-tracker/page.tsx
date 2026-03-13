import { Metadata } from "next";
import ETFTrackerClient from "./ETFTrackerClient";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin & Crypto ETF Tracker ${CURRENT_YEAR} — Live Flows, AUM & Performance | ${SITE_NAME}`,
  description: `Track Bitcoin spot ETF inflows, outflows, and AUM in real-time. Compare all crypto ETFs by performance, fees, and assets under management. Updated ${CURRENT_MONTH} ${CURRENT_YEAR}.`,
  keywords: ["bitcoin ETF", "crypto ETF tracker", "spot bitcoin ETF", "ETF inflows", "IBIT", "GBTC", "crypto ETF comparison"],
};

export default function ETFTrackerPage() {
  return <ETFTrackerClient />;
}
