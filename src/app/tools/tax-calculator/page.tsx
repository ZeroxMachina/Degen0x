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
  title: "Crypto Tax Calculator — Free Crypto Tool",
  description: "Estimate your crypto capital gains tax liability with support for multiple jurisdictions",
  alternates: { canonical: "https://degen0x.com/tools/tax-calculator" },
  openGraph: {
    title: "Crypto Tax Calculator",
    description: "Estimate your crypto capital gains tax liability with support for multiple jurisdictions",
    url: "https://degen0x.com/tools/tax-calculator",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/tax-calculator"
        name="Crypto Tax Calculator"
        description="Estimate your crypto capital gains tax liability with support for multiple jurisdictions"
      />
            <ArticleSchema
        headline="Crypto Tax Calculator — Free Crypto Tool"
        description="Estimate your crypto capital gains tax liability with support for multiple jurisdictions"
        url="https://degen0x.com/tools/tax-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/tax-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/tax-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/tax-calculator" />
    </>
  );
}
