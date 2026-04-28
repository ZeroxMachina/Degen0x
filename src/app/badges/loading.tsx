export default function BadgesLoading() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg)', padding: '24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Breadcrumb skeleton */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          <div style={{ width: 40, height: 14, borderRadius: 4, background: 'var(--glass-subtle-bg)', animation: 'shimmer 1.5s infinite ease-in-out' }} />
          <div style={{ width: 8, height: 14, borderRadius: 2, background: 'var(--glass-subtle-bg)' }} />
          <div style={{ width: 55, height: 14, borderRadius: 4, background: 'var(--glass-subtle-bg)', animation: 'shimmer 1.5s infinite ease-in-out', animationDelay: '0.1s' }} />
        </div>

        {/* Title skeleton */}
        <div style={{ width: 280, height: 32, borderRadius: 8, background: 'var(--glass-subtle-bg)', marginBottom: 8, animation: 'shimmer 1.5s infinite ease-in-out' }} />
        <div style={{ width: 400, height: 16, borderRadius: 4, background: 'var(--glass-subtle-bg)', marginBottom: 32, animation: 'shimmer 1.5s infinite ease-in-out', animationDelay: '0.1s' }} />

        {/* XP progress bar skeleton */}
        <div style={{ width: '100%', height: 48, borderRadius: 12, background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', marginBottom: 32, animation: 'shimmer 1.5s infinite ease-in-out', animationDelay: '0.15s' }} />

        {/* Badge grid skeleton */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 16,
                padding: 20,
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                gap: 10,
                animation: 'shimmer 1.5s infinite ease-in-out',
                animationDelay: `${0.08 * i}s`,
              }}
            >
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--glass-subtle-bg)' }} />
              <div style={{ width: 80, height: 14, borderRadius: 4, background: 'var(--glass-subtle-bg)' }} />
              <div style={{ width: 50, height: 10, borderRadius: 3, background: 'var(--glass-subtle-bg)' }} />
            </div>
          ))}
        </div>

        <style>{`
          @keyframes shimmer {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 0.8; }
          }
        `}</style>
      </div>
    </main>
  );
}
