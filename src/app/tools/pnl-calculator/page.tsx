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
  title: "P&L Calculator — Free Crypto Tool",
  description: "Calculate your cryptocurrency profit and loss across trades and positions",
  alternates: { canonical: "https://degen0x.com/tools/pnl-calculator" },
  openGraph: {
    title: "P&L Calculator",
    description: "Calculate your cryptocurrency profit and loss across trades and positions",
    url: "https://degen0x.com/tools/pnl-calculator",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/pnl-calculator"
        name="P&L Calculator"
        description="Calculate your cryptocurrency profit and loss across trades and positions"
      />
            <ArticleSchema
        headline="P&L Calculator — Free Crypto Tool"
        description="Calculate your cryptocurrency profit and loss across trades and positions"
        url="https://degen0x.com/tools/pnl-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/pnl-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/pnl-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/pnl-calculator" />
    </>
  );
}
