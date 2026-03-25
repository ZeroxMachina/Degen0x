'use client';

interface TOCItem {
  href: string;
  label: string;
}

interface InteractiveTOCProps {
  items: TOCItem[];
  indigo: string;
  surface: string;
  border: string;
  text2: string;
}

export default function InteractiveTOC({ items, indigo, surface, border, text2 }: InteractiveTOCProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          style={{
            display: "block",
            color: indigo,
            fontSize: 13,
            textDecoration: "none",
            padding: "4px 8px",
            lineHeight: 1.6,
            borderRadius: 4,
            transition: "all 200ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${indigo}15`;
            e.currentTarget.style.paddingLeft = "12px";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.paddingLeft = "8px";
          }}
        >
          → {label}
        </a>
      ))}
    </div>
  );
}
