import type { Metadata } from "next";

const SITE_URL = "https://degen0x.com";

export const metadata: Metadata = {
  title: "DCA Calculator — Dollar Cost Averaging Simulator | degen0x",
  description: "Simulate dollar-cost averaging strategies for Bitcoin, Ethereum, and 100+ cryptocurrencies with historical performance data.",
  openGraph: {
    title: "DCA Calculator — Dollar Cost Averaging Simulator | degen0x",
    description: "Simulate dollar-cost averaging strategies for Bitcoin, Ethereum, and 100+ cryptocurrencies with historical performance data.",
    type: "website",
    images: [{
      url: `${SITE_URL}/api/og?title=DCA+Calculator&category=Tools&type=tool`,
      width: 1200,
      height: 630,
      alt: "DCA Calculator",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DCA Calculator — Dollar Cost Averaging Simulator | degen0x",
    description: "Simulate dollar-cost averaging strategies for Bitcoin, Ethereum, and 100+ cryptocurrencies with historical performance data.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
