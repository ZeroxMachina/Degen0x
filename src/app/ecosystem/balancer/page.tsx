import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Balancer: The Programmable Liquidity Protocol",
  description: "Learn how Balancer enables LPs to create custom multi-token pools with arbitrary weights, and how V3 with hooks unlocks limitless AMM innovation.",
  alternates: { canonical: "https://degen0x.com/ecosystem/balancer" },
  openGraph: {
    title: "Balancer: The Programmable Liquidity Protocol",
    description: "Learn how Balancer enables LPs to create custom multi-token pools with arbitrary weights, and how V3 with hooks unlocks limitless AMM innovation.",
    url: "https://degen0x.com/ecosystem/balancer",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Balancer: The Programmable Liquidity Protocol"
        description="Learn how Balancer enables LPs to create custom multi-token pools with arbitrary weights, and how V3 with hooks unlocks limitless AMM innovation."
        url="https://degen0x.com/ecosystem/balancer"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/balancer" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/balancer" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
