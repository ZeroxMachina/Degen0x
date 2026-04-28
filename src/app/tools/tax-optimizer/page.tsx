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
  title: "Tax Optimizer — Free Crypto Tool",
  description: "Optimize your crypto tax strategy with lot selection and loss harvesting",
  alternates: { canonical: "https://degen0x.com/tools/tax-optimizer" },
  openGraph: {
    title: "Tax Optimizer",
    description: "Optimize your crypto tax strategy with lot selection and loss harvesting",
    url: "https://degen0x.com/tools/tax-optimizer",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/tax-optimizer"
        name="Tax Optimizer"
        description="Optimize your crypto tax strategy with lot selection and loss harvesting"
      />
            <ArticleSchema
        headline="Tax Optimizer — Free Crypto Tool"
        description="Optimize your crypto tax strategy with lot selection and loss harvesting"
        url="https://degen0x.com/tools/tax-optimizer"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/tax-optimizer" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/tax-optimizer" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/tax-optimizer" />
    </>
  );
}
