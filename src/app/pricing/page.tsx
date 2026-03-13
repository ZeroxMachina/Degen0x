import type { Metadata } from "next";
import APIPricing from "@/components/APIPricing";

export const metadata: Metadata = {
  title: "API Pricing | degen0x — Free, Pro & Enterprise Plans",
  description:
    "Access real-time crypto data, DeFi yields, whale alerts, and trading signals via the degen0x API. Free tier included. Usage-based pricing for pros.",
  openGraph: {
    title: "API Pricing | degen0x",
    description: "Real-time crypto API with free, pro, and enterprise tiers.",
  },
};

export default function PricingPage() {
  return <APIPricing />;
}
