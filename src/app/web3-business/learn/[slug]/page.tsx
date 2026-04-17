// Auto-generated dynamic route for web3-business/learn
export const revalidate = 3600;
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LearnPageLayout from "@/components/LearnPage";
import { pages } from "@/data/pages/web3-business-learn";

interface Props { params: Promise<{ slug: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return { title: page.metadata.title, description: page.metadata.description };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return (
    <LearnPageLayout
      title={page.props.title}
      categoryName={page.props.categoryName}
      categorySlug={page.props.categorySlug}
      readTime={page.props.readTime}
      intro={page.props.intro}
      toc={page.toc}
      faqs={page.faqs}
      relatedArticles={page.relatedArticles}
    >
      <div dangerouslySetInnerHTML={{ __html: page.childrenHtml }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="web3-business"
      />    </LearnPageLayout>
  );
}
