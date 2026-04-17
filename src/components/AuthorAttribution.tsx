interface AuthorAttributionProps {
  author: string;
  role: string;
  publishedDate: string;
  updatedDate: string;
  readingTime?: number;
  section?: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(author: string): string {
  const colors = [
    '#1f6feb', // blue
    '#238636', // green
    '#da3633', // red
    '#d29922', // orange
    '#7d8590', // gray
    '#a371f7', // purple
  ];
  const hash = author.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
}

export default function AuthorAttribution({
  author,
  role,
  publishedDate,
  updatedDate,
  readingTime,
}: AuthorAttributionProps) {
  const authorSlug = author.toLowerCase().replace(/\s+/g, '-');
  const avatarColor = getAvatarColor(author);
  const initials = getInitials(author);
  const formattedPublished = formatDate(publishedDate);
  const formattedUpdated = formatDate(updatedDate);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '12px 16px',
        margin: '16px 0',
        fontSize: '13px',
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: '8px',
        color: '#e6edf3',
      }}
    >
      {/* Avatar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: avatarColor,
          color: '#ffffff',
          fontWeight: '600',
          fontSize: '13px',
          flexShrink: 0,
        }}
      >
        {initials}
      </div>

      {/* Author info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
        <a
          href={`/about#${authorSlug}`}
          style={{
            color: '#58a6ff',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          {author}
        </a>
        <span style={{ color: '#484f58' }}>·</span>
        <span style={{ color: '#8b949e' }}>{role}</span>
      </div>

      <span style={{ color: '#484f58' }}>·</span>

      {/* Published date */}
      <div style={{ color: '#8b949e', flexShrink: 0 }}>
        {formattedPublished}
      </div>

      {/* Updated date (if different) */}
      {updatedDate !== publishedDate && (
        <>
          <span style={{ color: '#484f58' }}>·</span>
          <div style={{ color: '#8b949e', flexShrink: 0 }}>
            Updated {formattedUpdated}
          </div>
        </>
      )}

      {/* Reading time */}
      {readingTime && (
        <>
          <span style={{ color: '#484f58' }}>·</span>
          <div style={{ color: '#8b949e', flexShrink: 0 }}>
            {readingTime} min read
          </div>
        </>
      )}

      {/* Methodology link — E-E-A-T signal, ramp-to-8 Phase 0d */}
      <span style={{ color: '#484f58' }}>·</span>
      <div style={{ color: '#8b949e', flexShrink: 0 }}>
        Reviewed against our{' '}
        <a
          href="/methodology"
          style={{ color: '#58a6ff', textDecoration: 'none' }}
        >
          methodology
        </a>
      </div>
    </div>
  );
}

export function getAuthorForSection(section: string): { author: string; role: string } {
  const authorMap: Record<string, { author: string; role: string }> = {
    'tools': { author: '0xMachina', role: 'Founder' },
    'ecosystem': { author: '0xMachina', role: 'Founder' },
    'defi-lending': { author: 'SatoshiGhost', role: 'Lead Researcher' },
    'trading': { author: 'SatoshiGhost', role: 'Lead Researcher' },
    'investing': { author: 'SatoshiGhost', role: 'Lead Researcher' },
    'learn': { author: 'DegenSensei', role: 'Content Lead' },
    'courses': { author: 'DegenSensei', role: 'Content Lead' },
    'compare': { author: 'DegenSensei', role: 'Content Lead' },
    'exchanges': { author: 'NullPointer', role: 'Data Engineer' },
    'wallets': { author: 'CipherPunk_42', role: 'Security & QA' },
    'insurance': { author: 'CipherPunk_42', role: 'Security & QA' },
    'crypto-cards': { author: 'CipherPunk_42', role: 'Security & QA' },
  };

  return (
    authorMap[section?.toLowerCase() || ''] || {
      author: 'DegenSensei',
      role: 'Content Lead',
    }
  );
}
