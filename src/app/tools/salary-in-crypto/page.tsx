import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Salary in Crypto — Free Crypto Tool",
  description: "Calculate the value of receiving salary payments in cryptocurrency",
  alternates: { canonical: "https://degen0x.com/tools/salary-in-crypto" },
  openGraph: {
    title: "Salary in Crypto",
    description: "Calculate the value of receiving salary payments in cryptocurrency",
    url: "https://degen0x.com/tools/salary-in-crypto",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/salary-in-crypto"
        name="Salary in Crypto"
        description="Calculate the value of receiving salary payments in cryptocurrency"
      />
            <ArticleSchema
        headline="Salary in Crypto — Free Crypto Tool"
        description="Calculate the value of receiving salary payments in cryptocurrency"
        url="https://degen0x.com/tools/salary-in-crypto"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/salary-in-crypto" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/salary-in-crypto" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
