"use client";
import { TOCItem } from "@/lib/types";

interface Props {
  items: TOCItem[];
}

export default function TableOfContents({ items }: Props) {
  return (
    <div className="glass-subtle p-6 mb-8">
      <h2 className="text-sm font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wide">Table of Contents</h2>
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
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
