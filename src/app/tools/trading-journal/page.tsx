import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Trading Journal — Free Crypto Tool",
  description: "Log and analyze your crypto trades to improve performance",
  alternates: { canonical: "https://degen0x.com/tools/trading-journal" },
  openGraph: {
    title: "Trading Journal",
    description: "Log and analyze your crypto trades to improve performance",
    url: "https://degen0x.com/tools/trading-journal",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/trading-journal"
        name="Trading Journal"
        description="Log and analyze your crypto trades to improve performance"
      />
            <ArticleSchema
        headline="Trading Journal — Free Crypto Tool"
        description="Log and analyze your crypto trades to improve performance"
        url="https://degen0x.com/tools/trading-journal"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/trading-journal" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/trading-journal" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
