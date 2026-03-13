import { SITE_URL } from '@/lib/constants';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbStructuredData
 * Renders JSON-LD structured data for breadcrumb navigation.
 * Helps Google show breadcrumb trails in search results.
 *
 * Usage:
 *   <BreadcrumbStructuredData items={[
 *     { name: 'Home', href: '/' },
 *     { name: 'Tools', href: '/tools' },
 *     { name: 'DCA Calculator', href: '/tools/dca-calculator' },
 *   ]} />
 */
export default function BreadcrumbStructuredData({ items }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
