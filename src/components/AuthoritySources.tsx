// AuthoritySources — renders 3-5 outbound authoritative refs for a given URL.
// Served from src/lib/authority-sources.ts. Drops in near the end of pillar
// pages for E-E-A-T signal (citations to primary sources).
//
// Ramp-to-8 Phase 1c.

import { pickAuthoritySources } from '@/lib/authority-sources';

interface AuthoritySourcesProps {
  /** The page URL, used to pick topic-appropriate authorities. */
  url: string;
  /** Optional label override. */
  heading?: string;
  /** Cap at this many sources. */
  max?: number;
}

export default function AuthoritySources({
  url,
  heading = 'Sources & further reading',
  max = 4,
}: AuthoritySourcesProps) {
  const sources = pickAuthoritySources(url, max);
  if (sources.length === 0) return null;

  return (
    <section
      aria-label="Authoritative sources"
      style={{
        margin: '32px 0',
        padding: '18px 22px',
        background: '#0d1117',
        border: '1px solid #30363d',
        borderRadius: 10,
        color: '#e6edf3',
      }}
    >
      <h2 style={{ margin: '0 0 10px', fontSize: '1.05rem' }}>{heading}</h2>
      <p style={{ margin: '0 0 12px', color: '#8b949e', fontSize: 13 }}>
        These are primary sources, established data vendors, or canonical
        specifications we referenced or cross-checked while writing this page.
      </p>
      <ul style={{ paddingLeft: '1.25rem', margin: 0, lineHeight: 1.7 }}>
        {sources.map((s) => (
          <li key={s.url} style={{ marginBottom: 6 }}>
            <a
              href={s.url}
              rel="noopener external nofollow"
              target="_blank"
              style={{ color: '#58a6ff' }}
            >
              {s.label}
            </a>
            <span style={{ color: '#8b949e' }}> — {s.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
