import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import InitiaClient from "./InitiaClient";

export const metadata: Metadata = {
  title: "Initia: Cosmos-based L1 for Modular Rollups",
  description: "Initia is a Cosmos-based L1 orchestrating modular rollups (Minitias) with $300M+ TVL and multi-VM support (MoveVM, EVM, WasmVM).",
  openGraph: {
    title: "Initia: Cosmos-based L1 for Modular Rollups",
    description: "Initia is a Cosmos-based L1 orchestrating modular rollups (Minitias) with $300M+ TVL and multi-VM support (MoveVM, EVM, WasmVM).",
    images: [{ url: "https://degen0x.com/og-initia-ecosystem.svg", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Initia: Cosmos-based L1 for Modular Rollups",
    description: "Initia is a Cosmos-based L1 orchestrating modular rollups (Minitias) with $300M+ TVL and multi-VM support (MoveVM, EVM, WasmVM).",
    images: ["https://degen0x.com/og-initia-ecosystem.svg"],
  },

  alternates: { canonical: "/ecosystem/initia" }};

export default function InitiaPage() {
  return <InitiaClient />;
}
