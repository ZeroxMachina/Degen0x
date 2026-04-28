import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Alerts | degen0x",
  description: "Set custom price, volume, and on-chain alerts for any crypto on degen0x — Telegram/email push, no API key required.",
  alternates: { canonical: "https://degen0x.com/alerts" },
  openGraph: {
    title: "Alerts | degen0x",
    description: "Set custom price, volume, and on-chain alerts for any crypto on degen0x — Telegram/email push, no API key required.",
    url: "https://degen0x.com/alerts",
    type: "article",
  },
};

export const dynamic = "force-dynamic";

export default function Page() {
  return <ClientPage />;
}
