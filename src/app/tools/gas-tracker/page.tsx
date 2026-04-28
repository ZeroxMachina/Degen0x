import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";
import RelatedContent from "@/components/RelatedContent";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Gas Tracker — Free Crypto Tool",
  description: "Real-time gas fees across Ethereum, L2s, and alternative blockchains",
  alternates: { canonical: "https://degen0x.com/tools/gas-tracker" },
  openGraph: {
    title: "Gas Tracker",
    description: "Real-time gas fees across Ethereum, L2s, and alternative blockchains",
    url: "https://degen0x.com/tools/gas-tracker",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/gas-tracker"
        name="Gas Tracker"
        description="Real-time gas fees across Ethereum, L2s, and alternative blockchains"
      />
            <ArticleSchema
        headline="Gas Tracker — Free Crypto Tool"
        description="Real-time gas fees across Ethereum, L2s, and alternative blockchains"
        url="https://degen0x.com/tools/gas-tracker"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/gas-tracker" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/gas-tracker" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/gas-tracker" />
    </>
  );
}
