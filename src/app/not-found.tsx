import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | degen0x',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#0d1117',
          color: '#e6edf3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div
            style={{
              fontSize: '120px',
              fontWeight: 'bold',
              color: '#58a6ff',
              marginBottom: '20px',
              letterSpacing: '-2px',
            }}
          >
            404
          </div>

          <h1
            style={{
              fontSize: '32px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#e6edf3',
            }}
          >
            Page Not Found
          </h1>

          <p
            style={{
              fontSize: '16px',
              color: '#8b949e',
              marginBottom: '32px',
              lineHeight: '1.6',
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '6px',
              padding: '20px',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                color: '#8b949e',
                marginBottom: '0',
              }}
            >
              Looking for crypto tools, guides, or comparisons?
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                backgroundColor: '#58a6ff',
                color: '#0d1117',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
            >
              Home
            </Link>
            <Link
              href="/tools"
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                backgroundColor: '#30363d',
                color: '#58a6ff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                border: '1px solid #30363d',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
            >
              Tools
            </Link>
            <Link
              href="/learn"
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                backgroundColor: '#30363d',
                color: '#58a6ff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                border: '1px solid #30363d',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
            >
              Learn
            </Link>
            <Link
              href="/compare"
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                backgroundColor: '#30363d',
                color: '#58a6ff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                border: '1px solid #30363d',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
            >
              Compare
            </Link>
            <Link
              href="/exchanges"
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                backgroundColor: '#30363d',
                color: '#58a6ff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                border: '1px solid #30363d',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
            >
              Exchanges
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://degen0x.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Page Not Found',
                item: 'https://degen0x.com/404',
              },
            ],
          }),
        }}
      />
    </>
  );
}
