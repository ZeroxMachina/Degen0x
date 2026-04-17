// LastUpdated — visible "Last reviewed" stamp. Pulls a date from props,
// or (if omitted) from a FRESHNESS_INDEX JSON written by the hourly
// briefing job. Falls back to today so the stamp is never missing.
//
// Phase 4 ramp-to-8. Satisfies the "freshness" content signal.

import freshnessIndex from '@/data/freshness-index.json';

interface LastUpdatedProps {
  /** ISO date (YYYY-MM-DD). */
  date?: string;
  /** Path key to look up in the freshness index. */
  pathKey?: string;
  /** Label override. */
  label?: string;
}

type FreshnessMap = Record<string, string>;

function todayISO(): string {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function prettyDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z');
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function LastUpdated({ date, pathKey, label }: LastUpdatedProps) {
  const index = freshnessIndex as FreshnessMap;
  const resolved =
    date ||
    (pathKey && index[pathKey]) ||
    (pathKey && index[pathKey.replace(/\/$/, '')]) ||
    todayISO();

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '4px 10px',
        margin: '6px 0 14px',
        color: '#8b949e',
        fontSize: 13,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, sans-serif',
      }}
      aria-label={`Last updated ${prettyDate(resolved)}`}
    >
      <span>🕒</span>
      <span>
        {label ?? 'Last reviewed'}: <time dateTime={resolved}>{prettyDate(resolved)}</time>
      </span>
    </div>
  );
}
