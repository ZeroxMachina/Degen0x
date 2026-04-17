// Auto-generated dynamic route for learn
export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LearnPageLayout from "@/components/LearnPage";
import { pages } from "@/data/pages/learn";
import AuthorAttribution, { getAuthorForSection } from '@/components/AuthorAttribution';

interface Props { params: Promise<{ slug: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  const ogImage = page.metadata.ogImage || `/og-${slug}.svg`;
  return {
    title: page.metadata.title,
    description: page.metadata.description,
    openGraph: {
      title: page.metadata.title,
      description: page.metadata.description,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: page.props.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadata.title,
      description: page.metadata.description,
      images: [ogImage],
    },
  };
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
      {(() => { const a = getAuthorForSection('learn'); return (<AuthorAttribution author={a.author} role={a.role} publishedDate="2026-04-17" updatedDate="2026-04-17" section="learn" />); })()}
      <div dangerouslySetInnerHTML={{ __html: page.childrenHtml }} />
    </LearnPageLayout>
  );
}
