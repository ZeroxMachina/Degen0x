import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Multi-Chain Bridge Aggregator v2 | ${SITE_NAME}`,
  description:
    "Find the best cross-chain bridge routes with real-time gas estimation, route optimization, and comprehensive bridge analytics.",
  alternates: { canonical: `${SITE_URL}/tools/bridge-aggregator-v2` },
  openGraph: {
    title: `Bridge Aggregator v2 | ${SITE_NAME}`,
    description:
      "Find the best cross-chain bridge routes with real-time gas estimation and route optimization.",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=Bridge+Aggregator+v2&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "Bridge Aggregator v2 on degen0x",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
