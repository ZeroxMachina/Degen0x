import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Profit Calculator — Gains, ROI, Fees & Tax | degen0x",
  description:
    "Calculate crypto profits with trading fees and taxes. Track ROI, gain/loss %, and cost basis. Essential tool for crypto traders and investors.",
  alternates: { canonical: "https://degen0x.com/tools/crypto-profit-calculator" },
  openGraph: {
    type: "website",
    title: "Crypto Profit Calculator — Gains, ROI, Fees & Tax | degen0x",
    description:
      "Calculate crypto profits with trading fees and taxes. Track ROI, gain/loss %, and cost basis.",
    url: "https://degen0x.com/tools/crypto-profit-calculator",
    images: [
      {
        url: "/api/og?title=Crypto+Profit+Calculator&subtitle=Gains%2C+ROI%2C+Fees+%26+Tax",
        width: 1200,
        height: 630,
        alt: "Crypto Profit Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Profit Calculator — Gains, ROI, Fees & Tax | degen0x",
    description:
      "Calculate crypto profits with trading fees and taxes. Track ROI, gain/loss %, and cost basis.",
    images: ["/api/og?title=Crypto+Profit+Calculator&subtitle=Gains%2C+ROI%2C+Fees+%26+Tax"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
