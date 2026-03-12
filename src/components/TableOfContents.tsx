"use client";
import { TOCItem } from "@/lib/types";

interface Props {
  items: TOCItem[];
}

/**
 * Filters out duplicate/broken TOC entries where the title is just a slug
 * (e.g. "what-is-crypto-simplified" instead of "What Is Cryptocurrency").
 * Data generation bug created two entries per section — one slug, one correct.
 */
function cleanTocItems(items: TOCItem[]): TOCItem[] {
  const isSlug = (title: string) =>
    /^[a-z0-9]+(-[a-z0-9]+)+$/.test(title);

  return items.filter((item) => !isSlug(item.title));
}

export default function TableOfContents({ items }: Props) {
  const cleanItems = cleanTocItems(items);

  if (cleanItems.length === 0) return null;

  return (
    <div className="glass-subtle p-6 mb-8">
      <h2 className="text-sm font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wide">Table of Contents</h2>
      <nav>
        <ul className="space-y-2">
          {cleanItems.map((item) => (
            <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 16}px` }}>
              <a
                href={`#${item.id}`}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
