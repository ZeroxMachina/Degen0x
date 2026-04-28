import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Converter",
  description: "Real-time cryptocurrency converter for BTC, ETH, and 8+ other coins",
  alternates: { canonical: "https://degen0x.com/investing/tools/crypto-converter" },
  openGraph: {
    title: "Crypto Converter",
    description: "Real-time cryptocurrency converter for BTC, ETH, and 8+ other coins",
    url: "https://degen0x.com/investing/tools/crypto-converter",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Converter"
        description="Real-time cryptocurrency converter for BTC, ETH, and 8+ other coins"
        url="https://degen0x.com/investing/tools/crypto-converter"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/investing/tools/crypto-converter" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="investing"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/investing/tools/crypto-converter" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/investing/tools/crypto-converter" />
    </>
  );
}
