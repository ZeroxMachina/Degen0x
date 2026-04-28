export default function EcosystemLoading() {
  return (
    <main style={{ minHeight: '100vh', background: '#0d1117', padding: '24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Breadcrumb skeleton */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          <div style={{ width: 40, height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.06)', animation: 'shimmer 1.5s infinite ease-in-out' }} />
          <div style={{ width: 8, height: 14, borderRadius: 2, background: 'rgba(255,255,255,0.04)' }} />
          <div style={{ width: 70, height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.06)', animation: 'shimmer 1.5s infinite ease-in-out', animationDelay: '0.1s' }} />
        </div>

        {/* Title skeleton */}
        <div style={{ width: 320, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.06)', marginBottom: 12, animation: 'shimmer 1.5s infinite ease-in-out' }} />
        <div style={{ width: 480, height: 18, borderRadius: 6, background: 'rgba(255,255,255,0.04)', marginBottom: 32, animation: 'shimmer 1.5s infinite ease-in-out', animationDelay: '0.15s' }} />

        {/* Search bar skeleton */}
        <div style={{ width: '100%', maxWidth: 600, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24, animation: 'shimmer 1.5s infinite ease-in-out', animationDelay: '0.2s' }} />

        {/* Filter tabs skeleton */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
          {[80, 60, 90, 70, 100, 65].map((w, i) => (
            <div key={i} style={{ width: w, height: 32, borderRadius: 20, background: 'rgba(255,255,255,0.04)', animation: 'shimmer 1.5s infinite ease-in-out', animationDelay: `${0.05 * i}s` }} />
          ))}
        </div>

        {/* Card grid skeleton */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16,
                padding: 20,
                animation: 'shimmer 1.5s infinite ease-in-out',
                animationDelay: `${0.08 * i}s`,
              }}
            >
              {/* Icon + name row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.06)' }} />
                <div>
                  <div style={{ width: 100, height: 16, borderRadius: 4, background: 'rgba(255,255,255,0.06)', marginBottom: 6 }} />
                  <div style={{ width: 60, height: 12, borderRadius: 3, background: 'rgba(255,255,255,0.04)' }} />
                </div>
              </div>
              {/* Description skeleton */}
              <div style={{ width: '100%', height: 12, borderRadius: 3, background: 'rgba(255,255,255,0.04)', marginBottom: 8 }} />
              <div style={{ width: '75%', height: 12, borderRadius: 3, background: 'rgba(255,255,255,0.03)', marginBottom: 16 }} />
              {/* Stats row */}
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ width: 60, height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ width: 50, height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.05)' }} />
              </div>
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
