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
  title: "Lending Rate Comparison — Free Crypto Tool",
  description: "Compare DeFi lending and borrowing rates across protocols",
  alternates: { canonical: "https://degen0x.com/tools/lending-comparison" },
  openGraph: {
    title: "Lending Rate Comparison",
    description: "Compare DeFi lending and borrowing rates across protocols",
    url: "https://degen0x.com/tools/lending-comparison",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/lending-comparison"
        name="Lending Rate Comparison"
        description="Compare DeFi lending and borrowing rates across protocols"
      />
            <ArticleSchema
        headline="Lending Rate Comparison — Free Crypto Tool"
        description="Compare DeFi lending and borrowing rates across protocols"
        url="https://degen0x.com/tools/lending-comparison"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/lending-comparison" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/lending-comparison" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/lending-comparison" />
    </>
  );
}
