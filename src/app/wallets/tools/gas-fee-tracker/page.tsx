import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Gas Fee Tracker",
  description: "Track current gas fees across major blockchain networks. Use this tool to find the cheapest time and network for your transactions.",
  alternates: { canonical: "https://degen0x.com/wallets/tools/gas-fee-tracker" },
  openGraph: {
    title: "Gas Fee Tracker",
    description: "Track current gas fees across major blockchain networks. Use this tool to find the cheapest time and network for your transactions.",
    url: "https://degen0x.com/wallets/tools/gas-fee-tracker",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Gas Fee Tracker"
        description="Track current gas fees across major blockchain networks. Use this tool to find the cheapest time and network for your transactions."
        url="https://degen0x.com/wallets/tools/gas-fee-tracker"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/wallets/tools/gas-fee-tracker" />
      <AuthorAttribution
        author="degen0x Research"
        role="Editorial Team"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="wallets"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/wallets/tools/gas-fee-tracker" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/wallets/tools/gas-fee-tracker" />
    </>
  );
}
