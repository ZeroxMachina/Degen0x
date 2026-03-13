import type { Metadata } from "next";
import NotificationManager from "@/components/NotificationManager";

export const metadata: Metadata = {
  title: "Notifications | degen0x — Real-Time Crypto Alerts",
  description:
    "Manage your crypto alerts: price movements, whale transactions, DeFi yield spikes, AI trading signals, and portfolio changes. Push, email, and Telegram support.",
  openGraph: {
    title: "Notifications | degen0x",
    description: "Real-time crypto alerts with multi-channel delivery.",
  },
};

export default function NotificationsPage() {
  return <NotificationManager />;
}
