import styles from './AuthorAttribution.module.css';

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
    '#6366f1', // primary indigo
    '#22c55e', // success green
    '#ef4444', // danger red
    '#f59e0b', // accent amber
    '#64748b', // neutral slate
    '#8b5cf6', // purple
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
    <div className={styles.container}>
      {/* Avatar */}
      <div className={styles.avatar} style={{ backgroundColor: avatarColor }}>
        {initials}
      </div>

      {/* Author info */}
      <div className={styles.authorInfo}>
        <a href={`/about#${authorSlug}`} className={styles.authorLink}>
          {author}
        </a>
        <span className={styles.separator}>·</span>
        <span className={styles.role}>{role}</span>
      </div>

      <span className={styles.separator}>·</span>

      {/* Published date */}
      <div className={styles.meta}>
        {formattedPublished}
      </div>

      {/* Updated date (if different) */}
      {updatedDate !== publishedDate && (
        <>
          <span className={styles.separator}>·</span>
          <div className={styles.meta}>
            Updated {formattedUpdated}
          </div>
        </>
      )}

      {/* Reading time */}
      {readingTime && (
        <>
          <span className={styles.separator}>·</span>
          <div className={styles.meta}>
            {readingTime} min read
          </div>
        </>
      )}

      {/* Methodology link — E-E-A-T signal, ramp-to-8 Phase 0d */}
      <span className={styles.separator}>·</span>
      <div className={styles.meta}>
        Reviewed against our{' '}
        <a href="/methodology" className={styles.methodologyLink}>
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
