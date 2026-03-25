'use client';

import Link from "next/link";

interface CardItem {
  title: string;
  desc: string;
  href: string;
}

interface InteractiveCardsProps {
  items: CardItem[];
  surface: string;
  border: string;
  cyan: string;
}

export default function InteractiveCards({ items, surface, border, cyan }: InteractiveCardsProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {items.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          style={{
            background: surface,
            border: `1px solid ${border}`,
            borderRadius: 10,
            padding: 16,
            textDecoration: "none",
            transition: "all 200ms",
            display: "block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = cyan;
            e.currentTarget.style.background = `${cyan}10`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = border;
            e.currentTarget.style.background = surface;
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 14, color: cyan, marginBottom: 6 }}>{item.title}</div>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary, #8b949e)" }}>{item.desc}</div>
        </Link>
      ))}
    </div>
  );
}
