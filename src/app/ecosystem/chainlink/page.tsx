import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Chainlink: The Decentralized Oracle Network",
  description: "Learn how Chainlink secures billions in smart contract value by connecting blockchain applications to real-world data and external systems with cryptographic ce",
  alternates: { canonical: "https://degen0x.com/ecosystem/chainlink" },
  openGraph: {
    title: "Chainlink: The Decentralized Oracle Network",
    description: "Learn how Chainlink secures billions in smart contract value by connecting blockchain applications to real-world data and external systems with cryptographic ce",
    url: "https://degen0x.com/ecosystem/chainlink",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Chainlink: The Decentralized Oracle Network"
        description="Learn how Chainlink secures billions in smart contract value by connecting blockchain applications to real-world data and external systems with cryptographic ce"
        url="https://degen0x.com/ecosystem/chainlink"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/chainlink" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/chainlink" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
