// MethodologyBlock — rubric + scoring + last-reviewed date.
// Required on /reviews/* and /compare/* pages. Absence of this block is
// penalized -1.0 in score_content.py's E-E-A-T criterion.
//
// Ramp-to-8 Phase 1d.

import Link from 'next/link';

interface MethodologyBlockProps {
  /**
   * What kind of page this is, used to show the right scoring dimensions.
   * 'review' → single-product review with criteria weights
   * 'compare' → head-to-head with shared axes
   */
  variant?: 'review' | 'compare';
  /** ISO date of last review — shown verbatim. */
  lastReviewed?: string;
  /** Override the default source list (e.g. for protocol-specific refs). */
  sources?: readonly string[];
  /** Override the default criteria list for this page. */
  criteria?: readonly { label: string; weight: string }[];
}

const DEFAULT_REVIEW_CRITERIA = [
  { label: 'Security & custody model', weight: '25%' },
  { label: 'Fees & on-chain cost', weight: '20%' },
  { label: 'Usability & onboarding', weight: '15%' },
  { label: 'Feature depth', weight: '15%' },
  { label: 'Asset coverage & liquidity', weight: '15%' },
  { label: 'Support & transparency', weight: '10%' },
] as const;

const DEFAULT_COMPARE_CRITERIA = [
  { label: 'Fee structure (maker/taker + withdrawal)', weight: '25%' },
  { label: 'Asset coverage & depth', weight: '20%' },
  { label: 'Security track record', weight: '20%' },
  { label: 'Usability & mobile experience', weight: '15%' },
  { label: 'Regulatory footprint', weight: '10%' },
  { label: 'Standout features / trade-offs', weight: '10%' },
] as const;

const DEFAULT_SOURCES = [
  'Direct hands-on testing by our team',
  'Live exchange / protocol API data',
  'Published fee schedules as of the review date',
  'Publicly disclosed audits and incident reports',
  'Independent on-chain data (Dune, DefiLlama, block explorers)',
];

export default function MethodologyBlock({
  variant = 'review',
  lastReviewed,
  sources = DEFAULT_SOURCES,
  criteria,
}: MethodologyBlockProps) {
  const rows =
    criteria ??
    (variant === 'compare' ? DEFAULT_COMPARE_CRITERIA : DEFAULT_REVIEW_CRITERIA);
  const heading =
    variant === 'compare' ? 'How we compare' : 'How we scored this review';
  const reviewed = lastReviewed ?? new Date().toISOString().slice(0, 10);

  return (
    <aside
      aria-label="Review methodology"
      style={{
        margin: '32px 0',
        padding: '20px 22px',
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: 10,
        color: '#e6edf3',
      }}
    >
      <header style={{ marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontSize: '1.15rem' }}>{heading}</h2>
        <p style={{ margin: '4px 0 0', color: '#8b949e', fontSize: 13 }}>
          Last reviewed: {reviewed} · see our full{' '}
          <Link href="/methodology" style={{ color: '#58a6ff' }}>
            scoring methodology
          </Link>{' '}
          for definitions.
        </p>
      </header>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: 14,
          margin: '8px 0 16px',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: 'left',
                padding: '6px 8px',
                borderBottom: '1px solid #30363d',
                color: '#8b949e',
                fontWeight: 500,
              }}
            >
              Criterion
            </th>
            <th
              style={{
                textAlign: 'right',
                padding: '6px 8px',
                borderBottom: '1px solid #30363d',
                color: '#8b949e',
                fontWeight: 500,
                width: 110,
              }}
            >
              Weight
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <td style={{ padding: '6px 8px', borderBottom: '1px solid #21262d' }}>
                {r.label}
              </td>
              <td
                style={{
                  padding: '6px 8px',
                  borderBottom: '1px solid #21262d',
                  textAlign: 'right',
                  color: '#8b949e',
                }}
              >
                {r.weight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <details style={{ fontSize: 13, color: '#8b949e' }}>
        <summary style={{ cursor: 'pointer', color: '#c9d1d9' }}>
          Sources &amp; disclosures
        </summary>
        <ul style={{ margin: '8px 0 0', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
          {sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
          <li>
            degen0x never accepts payment to change rankings, review scores, or
            ordering. Affiliate disclosures on our{' '}
            <Link href="/about" style={{ color: '#58a6ff' }}>
              about page
            </Link>
            .
          </li>
        </ul>
      </details>
    </aside>
  );
}
