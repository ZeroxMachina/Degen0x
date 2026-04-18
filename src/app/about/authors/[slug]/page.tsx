import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { AUTHOR_PROFILES, getAuthorProfile } from '@/lib/author-profiles';

export function generateStaticParams() {
  return AUTHOR_PROFILES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profile = getAuthorProfile(slug);
  if (!profile) return { title: 'Author not found' };
  const title = `${profile.handle} — ${profile.role} at degen0x`;
  const description = `${profile.bio.slice(0, 155)}…`;
  const url = `https://degen0x.com/about/authors/${profile.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'profile',
      url,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = getAuthorProfile(slug);
  if (!profile) return notFound();

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.handle,
    alternateName: profile.slug,
    jobTitle: profile.role,
    description: profile.bio,
    url: `https://degen0x.com/about/authors/${profile.slug}`,
    sameAs: profile.sameAs,
    knowsAbout: profile.expertise,
    worksFor: {
      '@type': 'Organization',
      name: 'degen0x',
      url: 'https://degen0x.com',
    },
  };

  const initials = profile.handle
    .replace(/[^A-Za-z0-9]/g, '')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article
      style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '32px 20px 80px',
        color: '#e6edf3',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: profile.handle, href: `/about/authors/${profile.slug}` },
        ]}
      />

      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          margin: '24px 0 12px',
        }}
      >
        <div
          aria-hidden
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: profile.avatarColor,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem' }}>{profile.handle}</h1>
          <p style={{ margin: '4px 0 0', color: '#8b949e' }}>{profile.role}</p>
          <p
            style={{
              margin: '4px 0 0',
              color: '#8b949e',
              fontStyle: 'italic',
            }}
          >
            {profile.philosophy}
          </p>
        </div>
      </header>

      <section style={{ margin: '24px 0' }}>
        <h2 style={{ fontSize: '1.25rem' }}>About</h2>
        <p style={{ lineHeight: 1.7 }}>{profile.bio}</p>
      </section>

      <section style={{ margin: '24px 0' }}>
        <h2 style={{ fontSize: '1.25rem' }}>Expertise</h2>
        <ul style={{ lineHeight: 1.7, paddingLeft: '1.25rem' }}>
          {profile.expertise.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>

      <section style={{ margin: '24px 0' }}>
        <h2 style={{ fontSize: '1.25rem' }}>Credentials &amp; Experience</h2>
        <ul style={{ lineHeight: 1.7, paddingLeft: '1.25rem' }}>
          {profile.credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section style={{ margin: '24px 0' }}>
        <h2 style={{ fontSize: '1.25rem' }}>Covers</h2>
        <p style={{ lineHeight: 1.7 }}>
          {profile.handle} is the primary byline on degen0x pages in:{' '}
          {profile.sections.map((s, i) => (
            <span key={s}>
              <Link
                href={`/${s}`}
                style={{ color: '#58a6ff', textDecoration: 'none' }}
              >
                /{s}
              </Link>
              {i < profile.sections.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </section>

      <section style={{ margin: '24px 0' }}>
        <h2 style={{ fontSize: '1.25rem' }}>Editorial standards</h2>
        <p style={{ lineHeight: 1.7 }}>
          All articles bylined by {profile.handle} are reviewed against our{' '}
          <Link href="/methodology" style={{ color: '#58a6ff' }}>
            published methodology
          </Link>
          . degen0x never accepts payment to change rankings, review scores, or
          tool recommendations.
        </p>
      </section>

      {profile.sameAs.length > 0 && (
        <section style={{ margin: '24px 0' }}>
          <h2 style={{ fontSize: '1.25rem' }}>Elsewhere</h2>
          <ul style={{ lineHeight: 1.7, paddingLeft: '1.25rem' }}>
            {profile.sameAs.map((u) => (
              <li key={u}>
                <a
                  href={u}
                  rel="me noopener"
                  style={{ color: '#58a6ff' }}
                >
                  {u.replace(/^https?:\/\//, '')}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <hr style={{ borderColor: '#30363d', margin: '40px 0 20px' }} />
      <p style={{ color: '#8b949e', fontSize: 13 }}>
        Meet the rest of the team on{' '}
        <Link href="/about" style={{ color: '#58a6ff' }}>
          the about page
        </Link>
        .
      </p>
    </article>
  );
}
