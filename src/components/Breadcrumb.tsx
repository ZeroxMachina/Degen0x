import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 6,
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontSize: 14,
          color: '#8b949e',
        }}
      >
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {i > 0 && (
              <span aria-hidden="true" style={{ color: '#6e7681' }}>/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                style={{
                  color: '#58a6ff',
                  textDecoration: 'none',
                  padding: '4px 2px',
                  borderRadius: 4,
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: '#e6edf3' }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>

      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items
              .filter((item) => item.href)
              .map((item, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: item.label,
                item: `https://degen0x.com${item.href}`,
              })),
          }),
        }}
      />
    </nav>
  );
}
