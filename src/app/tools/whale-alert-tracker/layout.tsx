import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Whale Alert Tracker — Smart Money Movements in Real-Time | ${SITE_NAME}`,
  description:
    "Track whale wallet activity and smart money flows across Ethereum, Solana, and major chains. Get alerts on large transactions and accumulation patterns.",
  alternates: { canonical: `${SITE_URL}/tools/whale-alert-tracker` },
  openGraph: {
    title: `Whale Alert Tracker | ${SITE_NAME}`,
    description:
      "Track whale wallet activity and smart money flows. Alerts on large transactions and accumulation patterns.",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=Whale+Alert+Tracker&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "Whale Alert Tracker on degen0x",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
