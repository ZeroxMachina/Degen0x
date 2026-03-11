import Link from "next/link";
import { BreadcrumbItem } from "@/lib/types";

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://cryptodegen.com${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-6">
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            {index > 0 && <span>/</span>}
            {index === items.length - 1 ? (
              <span className="text-[var(--color-text)]">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-[var(--color-text)] transition-colors">
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
